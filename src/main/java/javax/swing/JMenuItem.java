/*
 * Copyright (c) 1997, 2013, Oracle and/or its affiliates. All rights reserved.
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
package javax.swing;

import java.awt.Component;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.KeyEvent;
import java.io.Serializable;

import javax.swing.event.EventListenerList;
import javax.swing.event.MenuKeyEvent;
import javax.swing.event.MenuKeyListener;

/**
 * An implementation of an item in a menu. A menu item is essentially a button
 * sitting in a list. When the user selects the "button", the action
 * associated with the menu item is performed. A <code>JMenuItem</code>
 * contained in a <code>JPopupMenu</code> performs exactly that function.
 * <p>
 * Menu items can be configured, and to some degree controlled, by
 * <code><a href="Action.html">Action</a></code>s.  Using an
 * <code>Action</code> with a menu item has many benefits beyond directly
 * configuring a menu item.  Refer to <a href="Action.html#buttonActions">
 * Swing Components Supporting <code>Action</code></a> for more
 * details, and you can find more information in <a
 * href="http://docs.oracle.com/javase/tutorial/uiswing/misc/action.html">How
 * to Use Actions</a>, a section in <em>The Java Tutorial</em>.
 * <p>
 * For further documentation and for examples, see
 * <a
 href="http://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to Use Menus</a>
 * in <em>The Java Tutorial.</em>
 * <p>
 * <strong>Warning:</strong> Swing is not thread safe. For more
 * information see <a
 * href="package-summary.html#threading">Swing's Threading
 * Policy</a>.
 * <p>
 * <strong>Warning:</strong>
 * Serialized objects of this class will not be compatible with
 * future Swing releases. The current serialization support is
 * appropriate for short term storage or RMI between applications running
 * the same version of Swing.  As of 1.4, support for long term storage
 * of all JavaBeans&trade;
 * has been added to the <code>java.beans</code> package.
 * Please see {@link java.beans.XMLEncoder}.
 *
 * @beaninfo
 *   attribute: isContainer false
 * description: An item which can be selected in a menu.
 *
 * @author Georges Saab
 * @author David Karlton
 * @see JPopupMenu
 * @see JMenu
 * @see JCheckBoxMenuItem
 * @see JRadioButtonMenuItem
 */
@SuppressWarnings("serial")
public class JMenuItem extends AbstractButton implements MenuElement  {

	@Override
	public void createHTML() {
		// TODO Auto-generated method stub
	}
	
    /**
     * @see #getUIClassID
     * @see #readObject
     */
    private static final String uiClassID = "MenuItemUI";

    /* diagnostic aids -- should be false for production builds. */
    private static final boolean TRACE =   false; // trace creates and disposes
    private static final boolean VERBOSE = false; // show reuse hits/misses
    private static final boolean DEBUG =   false;  // show bad params, misc.

    private boolean isMouseDragged = false;

    /**
     * Creates a <code>JMenuItem</code> with no set text or icon.
     */
    public JMenuItem() {
        this(null, (Icon)null);
    }

    /**
     * Creates a <code>JMenuItem</code> with the specified icon.
     *
     * @param icon the icon of the <code>JMenuItem</code>
     */
    public JMenuItem(Icon icon) {
        this(null, icon);
    }

    /**
     * Creates a <code>JMenuItem</code> with the specified text.
     *
     * @param text the text of the <code>JMenuItem</code>
     */
    public JMenuItem(String text) {
        this(text, (Icon)null);
    }

    /**
     * Creates a menu item whose properties are taken from the
     * specified <code>Action</code>.
     *
     * @param a the action of the <code>JMenuItem</code>
     * @since 1.3
     */
    public JMenuItem(Action a) {
        this();
        setAction(a);
    }

    /**
     * Creates a <code>JMenuItem</code> with the specified text and icon.
     *
     * @param text the text of the <code>JMenuItem</code>
     * @param icon the icon of the <code>JMenuItem</code>
     */
    public JMenuItem(String text, Icon icon) {
        setModel(new DefaultButtonModel());
        init(text, icon);
    }

    /**
     * Creates a <code>JMenuItem</code> with the specified text and
     * keyboard mnemonic.
     *
     * @param text the text of the <code>JMenuItem</code>
     * @param mnemonic the keyboard mnemonic for the <code>JMenuItem</code>
     */
    public JMenuItem(String text, int mnemonic) {
        setModel(new DefaultButtonModel());
        init(text, null);
        setMnemonic(mnemonic);
    }

    /**
     * {@inheritDoc}
     */
    public void setModel(ButtonModel newModel) {
        super.setModel(newModel);
        if(newModel instanceof DefaultButtonModel) {
            ((DefaultButtonModel)newModel).setMenuItem(true);
        }
    }

    /**
     * Initializes the menu item with the specified text and icon.
     *
     * @param text the text of the <code>JMenuItem</code>
     * @param icon the icon of the <code>JMenuItem</code>
     */
    protected void init(String text, Icon icon) {
        if(text != null) {
            setText(text);
        }

        if(icon != null) {
            setIcon(icon);
        }

        // Listen for Focus events
        addFocusListener(new MenuItemFocusListener());
        setFocusPainted(false);
    }

    private static class MenuItemFocusListener implements FocusListener,
        Serializable {
        public void focusGained(FocusEvent event) {}
        public void focusLost(FocusEvent event) {
            // When focus is lost, repaint if
            // the focus information is painted
            JMenuItem mi = (JMenuItem)event.getSource();
            if(mi.isFocusPainted()) {
                mi.repaint();
            }
        }
    }

    /**
     * Returns the suffix used to construct the name of the L&amp;F class used to
     * render this component.
     *
     * @return the string "MenuItemUI"
     * @see JComponent#getUIClassID
     * @see UIDefaults#getUI
     */
    public String getUIClassID() {
        return uiClassID;
    }


    /**
     * Identifies the menu item as "armed". If the mouse button is
     * released while it is over this item, the menu's action event
     * will fire. If the mouse button is released elsewhere, the
     * event will not fire and the menu item will be disarmed.
     *
     * @param b true to arm the menu item so it can be selected
     * @beaninfo
     *    description: Mouse release will fire an action event
     *         hidden: true
     */
    public void setArmed(boolean b) {
        ButtonModel model = getModel();

        boolean oldValue = model.isArmed();
        if(model.isArmed() != b) {
            model.setArmed(b);
        }
    }

    /**
     * Returns whether the menu item is "armed".
     *
     * @return true if the menu item is armed, and it can be selected
     * @see #setArmed
     */
    public boolean isArmed() {
        ButtonModel model = getModel();
        return model.isArmed();
    }


    /* The keystroke which acts as the menu item's accelerator
     */
//    private KeyStroke accelerator;

    /**
     * Sets the key combination which invokes the menu item's
     * action listeners without navigating the menu hierarchy. It is the
     * UI's responsibility to install the correct action.  Note that
     * when the keyboard accelerator is typed, it will work whether or
     * not the menu is currently displayed.
     *
     * @param keyStroke the <code>KeyStroke</code> which will
     *          serve as an accelerator
     * @beaninfo
     *     description: The keystroke combination which will invoke the
     *                  JMenuItem's actionlisteners without navigating the
     *                  menu hierarchy
     *           bound: true
     *       preferred: true
     */
//    public void setAccelerator(KeyStroke keyStroke) {
//        KeyStroke oldAccelerator = accelerator;
//        this.accelerator = keyStroke;
//        repaint();
//        revalidate();
//        firePropertyChange("accelerator", oldAccelerator, accelerator);
//    }

    /**
     * Returns the <code>KeyStroke</code> which serves as an accelerator
     * for the menu item.
     * @return a <code>KeyStroke</code> object identifying the
     *          accelerator key
     */
//    public KeyStroke getAccelerator() {
//        return this.accelerator;
//    }

    void setIconFromAction(Action a) {
        Icon icon = null;
        if (a != null) {
            icon = (Icon)a.getValue(Action.SMALL_ICON);
        }
        setIcon(icon);
    }

    void largeIconChanged(Action a) {
    }

    void smallIconChanged(Action a) {
        setIconFromAction(a);
    }

//    void configureAcceleratorFromAction(Action a) {
//        KeyStroke ks = (a==null) ? null :
//            (KeyStroke)a.getValue(Action.ACCELERATOR_KEY);
//        setAccelerator(ks);
//    }

    /**
     * Processes a key event forwarded from the
     * <code>MenuSelectionManager</code> and changes the menu selection,
     * if necessary, by using <code>MenuSelectionManager</code>'s API.
     * <p>
     * Note: you do not have to forward the event to sub-components.
     * This is done automatically by the <code>MenuSelectionManager</code>.
     *
     * @param e  a <code>KeyEvent</code>
     * @param path the <code>MenuElement</code> path array
     * @param manager   the <code>MenuSelectionManager</code>
     */
    public void processKeyEvent(KeyEvent e,MenuElement path[],MenuSelectionManager manager) {
        MenuKeyEvent mke = new MenuKeyEvent(e.getComponent(), e.getID(),
                                             e.getWhen(), e.getModifiers(),
                                             e.getKeyCode(), e.getKeyChar(),
                                             path, manager);
        processMenuKeyEvent(mke);

        if (mke.isConsumed())  {
            e.consume();
        }
    }



    /**
     * Handles a keystroke in a menu.
     *
     * @param e  a <code>MenuKeyEvent</code> object
     */
    public void processMenuKeyEvent(MenuKeyEvent e) {
        switch (e.getID()) {
        case KeyEvent.KEY_PRESSED:
            fireMenuKeyPressed(e); break;
        case KeyEvent.KEY_RELEASED:
            fireMenuKeyReleased(e); break;
        case KeyEvent.KEY_TYPED:
            fireMenuKeyTyped(e); break;
        default:
            break;
        }
    }

    /**
     * Notifies all listeners that have registered interest for
     * notification on this event type.
     *
     * @param event a <code>MenuKeyEvent</code>
     * @see EventListenerList
     */
    protected void fireMenuKeyPressed(MenuKeyEvent event) {
        // Guaranteed to return a non-null array
        Object[] listeners = listenerList.getListenerList();
        // Process the listeners last to first, notifying
        // those that are interested in this event
        for (int i = listeners.length-2; i>=0; i-=2) {
            if (listeners[i]==MenuKeyListener.class) {
                // Lazily create the event:
                ((MenuKeyListener)listeners[i+1]).menuKeyPressed(event);
            }
        }
    }

    /**
     * Notifies all listeners that have registered interest for
     * notification on this event type.
     *
     * @param event a <code>MenuKeyEvent</code>
     * @see EventListenerList
     */
    protected void fireMenuKeyReleased(MenuKeyEvent event) {
        // Guaranteed to return a non-null array
        Object[] listeners = listenerList.getListenerList();
        // Process the listeners last to first, notifying
        // those that are interested in this event
        for (int i = listeners.length-2; i>=0; i-=2) {
            if (listeners[i]==MenuKeyListener.class) {
                // Lazily create the event:
                ((MenuKeyListener)listeners[i+1]).menuKeyReleased(event);
            }
        }
    }

    /**
     * Notifies all listeners that have registered interest for
     * notification on this event type.
     *
     * @param event a <code>MenuKeyEvent</code>
     * @see EventListenerList
     */
    protected void fireMenuKeyTyped(MenuKeyEvent event) {
        // Guaranteed to return a non-null array
        Object[] listeners = listenerList.getListenerList();
        // Process the listeners last to first, notifying
        // those that are interested in this event
        for (int i = listeners.length-2; i>=0; i-=2) {
            if (listeners[i]==MenuKeyListener.class) {
                // Lazily create the event:
                ((MenuKeyListener)listeners[i+1]).menuKeyTyped(event);
            }
        }
    }

    /**
     * Called by the <code>MenuSelectionManager</code> when the
     * <code>MenuElement</code> is selected or unselected.
     *
     * @param isIncluded  true if this menu item is on the part of the menu
     *                    path that changed, false if this menu is part of the
     *                    a menu path that changed, but this particular part of
     *                    that path is still the same
     * @see MenuSelectionManager#setSelectedPath(MenuElement[])
     */
    public void menuSelectionChanged(boolean isIncluded) {
        setArmed(isIncluded);
    }

    /**
     * This method returns an array containing the sub-menu
     * components for this menu component.
     *
     * @return an array of <code>MenuElement</code>s
     */
    public MenuElement[] getSubElements() {
        return new MenuElement[0];
    }

    /**
     * Returns the <code>java.awt.Component</code> used to paint
     * this object. The returned component will be used to convert
     * events and detect if an event is inside a menu component.
     *
     * @return the <code>Component</code> that paints this menu item
     */
    public Component getComponent() {
        return this;
    }

    /**
     * Adds a <code>MenuKeyListener</code> to the menu item.
     *
     * @param l the <code>MenuKeyListener</code> to be added
     */
    public void addMenuKeyListener(MenuKeyListener l) {
        listenerList.add(MenuKeyListener.class, l);
    }

    /**
     * Removes a <code>MenuKeyListener</code> from the menu item.
     *
     * @param l the <code>MenuKeyListener</code> to be removed
     */
    public void removeMenuKeyListener(MenuKeyListener l) {
        listenerList.remove(MenuKeyListener.class, l);
    }

    /**
     * Returns an array of all the <code>MenuKeyListener</code>s added
     * to this JMenuItem with addMenuKeyListener().
     *
     * @return all of the <code>MenuKeyListener</code>s added or an empty
     *         array if no listeners have been added
     * @since 1.4
     */
    public MenuKeyListener[] getMenuKeyListeners() {
        return listenerList.getListeners(MenuKeyListener.class);
    }

    /**
     * Returns a string representation of this <code>JMenuItem</code>.
     * This method is intended to be used only for debugging purposes,
     * and the content and format of the returned string may vary between
     * implementations. The returned string may be empty but may not
     * be <code>null</code>.
     *
     * @return  a string representation of this <code>JMenuItem</code>
     */
    protected String paramString() {
        return super.paramString();
    }

}
