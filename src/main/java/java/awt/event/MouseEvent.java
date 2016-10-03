/*
 * Copyright (c) 1996, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

package java.awt.event;

import java.awt.Component;
import java.awt.IllegalComponentStateException;
import java.awt.Point;
import java.awt.Toolkit;

public class MouseEvent extends InputEvent {

    public static final int MOUSE_FIRST         = 500;

    public static final int MOUSE_LAST          = 507;

    public static final int MOUSE_CLICKED = MOUSE_FIRST;

    public static final int MOUSE_PRESSED = 1 + MOUSE_FIRST; //Event.MOUSE_DOWN

    public static final int MOUSE_RELEASED = 2 + MOUSE_FIRST; //Event.MOUSE_UP

    public static final int MOUSE_MOVED = 3 + MOUSE_FIRST; //Event.MOUSE_MOVE

    public static final int MOUSE_ENTERED = 4 + MOUSE_FIRST; //Event.MOUSE_ENTER

    public static final int MOUSE_EXITED = 5 + MOUSE_FIRST; //Event.MOUSE_EXIT

    public static final int MOUSE_DRAGGED = 6 + MOUSE_FIRST; //Event.MOUSE_DRAG

    public static final int MOUSE_WHEEL = 7 + MOUSE_FIRST;

    public static final int NOBUTTON = 0;

    public static final int BUTTON1 = 1;

    public static final int BUTTON2 = 2;

    public static final int BUTTON3 = 3;

    int x;

    int y;

    private int xAbs;

    private int yAbs;

    int clickCount;

    int button;

    boolean popupTrigger;

    private static final long serialVersionUID = -991214153494842848L;

    private static int cachedNumberOfButtons = 2;

    public Point getLocationOnScreen(){
      return new Point(xAbs, yAbs);
    }

    public int getXOnScreen() {
        return xAbs;
    }

    public int getYOnScreen() {
        return yAbs;
    }

    public MouseEvent(Component source, int id, long when, int modifiers,
                      int x, int y, int clickCount, boolean popupTrigger,
                      int button)
    {
        this(source, id, when, modifiers, x, y, 0, 0, clickCount, popupTrigger, button);
        Point eventLocationOnScreen = new Point(0, 0);
        try {
          eventLocationOnScreen = source.getLocationOnScreen();
          this.xAbs = eventLocationOnScreen.x + x;
          this.yAbs = eventLocationOnScreen.y + y;
        } catch (IllegalComponentStateException e){
          this.xAbs = 0;
          this.yAbs = 0;
        }
    }

     public MouseEvent(Component source, int id, long when, int modifiers,
                      int x, int y, int clickCount, boolean popupTrigger) {
        this(source, id, when, modifiers, x, y, clickCount, popupTrigger, NOBUTTON);
     }


    transient private boolean shouldExcludeButtonFromExtModifiers;

    public int getModifiersEx() {
        int tmpModifiers = modifiers;
        if (shouldExcludeButtonFromExtModifiers) {
            tmpModifiers &= ~(InputEvent.getMaskForButton(getButton()));
        }
        return tmpModifiers & ~JDK_1_3_MODIFIERS;
    }

    public MouseEvent(Component source, int id, long when, int modifiers,
                      int x, int y, int xAbs, int yAbs,
                      int clickCount, boolean popupTrigger, int button)
    {
        super(source, id, when, modifiers);
        this.x = x;
        this.y = y;
        this.xAbs = xAbs;
        this.yAbs = yAbs;
        this.clickCount = clickCount;
        this.popupTrigger = popupTrigger;
        shouldExcludeButtonFromExtModifiers = false;
        if (button < NOBUTTON){
            throw new IllegalArgumentException("Invalid button value :" + button);
        }
        if (button > BUTTON3) {
//            if (!Toolkit.getDefaultToolkit().areExtraMouseButtonsEnabled()){
//                throw new IllegalArgumentException("Extra mouse events are disabled " + button);
//            } else {
//                if (button > cachedNumberOfButtons) {
//                    throw new IllegalArgumentException("Nonexistent button " + button);
//                }
//            }
            // XToolkit: extra buttons are not reporting about their state correctly.
            // Being pressed they report the state=0 both on the press and on the release.
            // For 1-3 buttons the state value equals zero on press and non-zero on release.
            // Other modifiers like Shift, ALT etc seem report well with extra buttons.
            // The problem reveals as follows: one button is pressed and then another button is pressed and released.
            // So, the getModifiersEx() would not be zero due to a first button and we will skip this modifier.
            // This may have to be moved into the peer code instead if possible.

            if (getModifiersEx() != 0) { //There is at least one more button in a pressed state.
                if (id == MouseEvent.MOUSE_RELEASED || id == MouseEvent.MOUSE_CLICKED){
                    shouldExcludeButtonFromExtModifiers = true;
                }
            }
        }

        this.button = button;

        if ((getModifiers() != 0) && (getModifiersEx() == 0)) {
            setNewModifiers();
        } else if ((getModifiers() == 0) &&
                   (getModifiersEx() != 0 || button != NOBUTTON) &&
                   (button <= BUTTON3))
        {
            setOldModifiers();
        }
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public Point getPoint() {
        int x;
        int y;
        synchronized (this) {
            x = this.x;
            y = this.y;
        }
        return new Point(x, y);
    }

    public synchronized void translatePoint(int x, int y) {
        this.x += x;
        this.y += y;
    }

    public int getClickCount() {
        return clickCount;
    }

    public int getButton() {
        return button;
    }

    public boolean isPopupTrigger() {
        return popupTrigger;
    }

    public static String getMouseModifiersText(int modifiers) {
        StringBuilder buf = new StringBuilder();
        if ((modifiers & InputEvent.ALT_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.alt", "Alt"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.META_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.meta", "Meta"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.CTRL_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.control", "Ctrl"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.SHIFT_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.shift", "Shift"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.ALT_GRAPH_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.altGraph", "Alt Graph"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.BUTTON1_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.button1", "Button1"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.BUTTON2_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.button2", "Button2"));
            buf.append("+");
        }
        if ((modifiers & InputEvent.BUTTON3_MASK) != 0) {
            buf.append(Toolkit.getProperty("AWT.button3", "Button3"));
            buf.append("+");
        }

        int mask;

        // TODO: add a toolkit field that holds a number of button on the mouse.
        // As the method getMouseModifiersText() is static and obtain
        // an integer as a parameter then we may not restrict this with the number
        // of buttons installed on the mouse.
        // It's a temporary solution. We need to somehow hold the number of buttons somewhere else.
        for (int i = 1; i <= cachedNumberOfButtons; i++){
            mask = InputEvent.getMaskForButton(i);
            if ((modifiers & mask) != 0 &&
                buf.indexOf(Toolkit.getProperty("AWT.button"+i, "Button"+i)) == -1) //1,2,3 buttons may already be there; so don't duplicate it.
            {
                buf.append(Toolkit.getProperty("AWT.button"+i, "Button"+i));
                buf.append("+");
            }
        }

        if (buf.length() > 0) {
            buf.setLength(buf.length()-1); // remove trailing '+'
        }
        return buf.toString();
    }

    public String paramString() {
        StringBuilder str = new StringBuilder(80);

        switch(id) {
          case MOUSE_PRESSED:
              str.append("MOUSE_PRESSED");
              break;
          case MOUSE_RELEASED:
              str.append("MOUSE_RELEASED");
              break;
          case MOUSE_CLICKED:
              str.append("MOUSE_CLICKED");
              break;
          case MOUSE_ENTERED:
              str.append("MOUSE_ENTERED");
              break;
          case MOUSE_EXITED:
              str.append("MOUSE_EXITED");
              break;
          case MOUSE_MOVED:
              str.append("MOUSE_MOVED");
              break;
          case MOUSE_DRAGGED:
              str.append("MOUSE_DRAGGED");
              break;
          case MOUSE_WHEEL:
              str.append("MOUSE_WHEEL");
              break;
           default:
              str.append("unknown type");
        }

        // (x,y) coordinates
        str.append(",(").append(x).append(",").append(y).append(")");
        str.append(",absolute(").append(xAbs).append(",").append(yAbs).append(")");

        if (id != MOUSE_DRAGGED && id != MOUSE_MOVED){
            str.append(",button=").append(getButton());
        }

        if (getModifiers() != 0) {
            str.append(",modifiers=").append(getMouseModifiersText(modifiers));
        }

        if (getModifiersEx() != 0) {
            //Using plain "modifiers" here does show an excluded extended buttons in the string event representation.
            //getModifiersEx() solves the problem.
            str.append(",extModifiers=").append(getModifiersExText(getModifiersEx()));
        }

        str.append(",clickCount=").append(clickCount);

        return str.toString();
    }

    private void setNewModifiers() {
        if ((modifiers & BUTTON1_MASK) != 0) {
            modifiers |= BUTTON1_DOWN_MASK;
        }
        if ((modifiers & BUTTON2_MASK) != 0) {
            modifiers |= BUTTON2_DOWN_MASK;
        }
        if ((modifiers & BUTTON3_MASK) != 0) {
            modifiers |= BUTTON3_DOWN_MASK;
        }
        if (id == MOUSE_PRESSED
            || id == MOUSE_RELEASED
            || id == MOUSE_CLICKED)
        {
            if ((modifiers & BUTTON1_MASK) != 0) {
                button = BUTTON1;
                modifiers &= ~BUTTON2_MASK & ~BUTTON3_MASK;
                if (id != MOUSE_PRESSED) {
                    modifiers &= ~BUTTON1_DOWN_MASK;
                }
            } else if ((modifiers & BUTTON2_MASK) != 0) {
                button = BUTTON2;
                modifiers &= ~BUTTON1_MASK & ~BUTTON3_MASK;
                if (id != MOUSE_PRESSED) {
                    modifiers &= ~BUTTON2_DOWN_MASK;
                }
            } else if ((modifiers & BUTTON3_MASK) != 0) {
                button = BUTTON3;
                modifiers &= ~BUTTON1_MASK & ~BUTTON2_MASK;
                if (id != MOUSE_PRESSED) {
                    modifiers &= ~BUTTON3_DOWN_MASK;
                }
            }
        }
        if ((modifiers & InputEvent.ALT_MASK) != 0) {
            modifiers |= InputEvent.ALT_DOWN_MASK;
        }
        if ((modifiers & InputEvent.META_MASK) != 0) {
            modifiers |= InputEvent.META_DOWN_MASK;
        }
        if ((modifiers & InputEvent.SHIFT_MASK) != 0) {
            modifiers |= InputEvent.SHIFT_DOWN_MASK;
        }
        if ((modifiers & InputEvent.CTRL_MASK) != 0) {
            modifiers |= InputEvent.CTRL_DOWN_MASK;
        }
        if ((modifiers & InputEvent.ALT_GRAPH_MASK) != 0) {
            modifiers |= InputEvent.ALT_GRAPH_DOWN_MASK;
        }
    }

    private void setOldModifiers() {
        if (id == MOUSE_PRESSED
            || id == MOUSE_RELEASED
            || id == MOUSE_CLICKED)
        {
            switch(button) {
            case BUTTON1:
                modifiers |= BUTTON1_MASK;
                break;
            case BUTTON2:
                modifiers |= BUTTON2_MASK;
                break;
            case BUTTON3:
                modifiers |= BUTTON3_MASK;
                break;
            }
        } else {
            if ((modifiers & BUTTON1_DOWN_MASK) != 0) {
                modifiers |= BUTTON1_MASK;
            }
            if ((modifiers & BUTTON2_DOWN_MASK) != 0) {
                modifiers |= BUTTON2_MASK;
            }
            if ((modifiers & BUTTON3_DOWN_MASK) != 0) {
                modifiers |= BUTTON3_MASK;
            }
        }
        if ((modifiers & ALT_DOWN_MASK) != 0) {
            modifiers |= ALT_MASK;
        }
        if ((modifiers & META_DOWN_MASK) != 0) {
            modifiers |= META_MASK;
        }
        if ((modifiers & SHIFT_DOWN_MASK) != 0) {
            modifiers |= SHIFT_MASK;
        }
        if ((modifiers & CTRL_DOWN_MASK) != 0) {
            modifiers |= CTRL_MASK;
        }
        if ((modifiers & ALT_GRAPH_DOWN_MASK) != 0) {
            modifiers |= ALT_GRAPH_MASK;
        }
    }

}
