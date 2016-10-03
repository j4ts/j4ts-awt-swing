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

import java.awt.AWTEvent;
import java.awt.Event;
import java.lang.annotation.Native;

public class ActionEvent extends AWTEvent {

    public static final int SHIFT_MASK          = Event.SHIFT_MASK;

    public static final int CTRL_MASK           = Event.CTRL_MASK;

    public static final int META_MASK           = Event.META_MASK;

    public static final int ALT_MASK            = Event.ALT_MASK;

    public static final int ACTION_FIRST                = 1001;

    public static final int ACTION_LAST                 = 1001;

    @Native public static final int ACTION_PERFORMED    = ACTION_FIRST; //Event.ACTION_EVENT

    String actionCommand;

    long when;

    int modifiers;

    private static final long serialVersionUID = -7671078796273832149L;

    public ActionEvent(Object source, int id, String command) {
        this(source, id, command, 0);
    }

    public ActionEvent(Object source, int id, String command, int modifiers) {
        this(source, id, command, 0, modifiers);
    }

    public ActionEvent(Object source, int id, String command, long when,
                       int modifiers) {
        super(source, id);
        this.actionCommand = command;
        this.when = when;
        this.modifiers = modifiers;
    }

    public String getActionCommand() {
        return actionCommand;
    }

    public long getWhen() {
        return when;
    }

    public int getModifiers() {
        return modifiers;
    }

    public String paramString() {
        String typeStr;
        switch(id) {
          case ACTION_PERFORMED:
              typeStr = "ACTION_PERFORMED";
              break;
          default:
              typeStr = "unknown type";
        }
        return typeStr + ",cmd="+actionCommand+",when="+when+",modifiers="+
            KeyEvent.getKeyModifiersText(modifiers);
    }
}
