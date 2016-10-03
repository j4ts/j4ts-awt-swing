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
import java.awt.Component;
import java.awt.Rectangle;
import java.lang.annotation.Native;

public class ComponentEvent extends AWTEvent {

    public static final int COMPONENT_FIRST             = 100;

    public static final int COMPONENT_LAST              = 103;

    @Native public static final int COMPONENT_MOVED     = COMPONENT_FIRST;

    @Native public static final int COMPONENT_RESIZED   = 1 + COMPONENT_FIRST;

    @Native public static final int COMPONENT_SHOWN     = 2 + COMPONENT_FIRST;

    @Native public static final int COMPONENT_HIDDEN    = 3 + COMPONENT_FIRST;

    private static final long serialVersionUID = 8101406823902992965L;

    public ComponentEvent(Component source, int id) {
        super(source, id);
    }

    public Component getComponent() {
        return (source instanceof Component) ? (Component)source : null;
    }

    public String paramString() {
        String typeStr;
        Rectangle b = (source !=null
                       ? ((Component)source).getBounds()
                       : null);

        switch(id) {
          case COMPONENT_SHOWN:
              typeStr = "COMPONENT_SHOWN";
              break;
          case COMPONENT_HIDDEN:
              typeStr = "COMPONENT_HIDDEN";
              break;
          case COMPONENT_MOVED:
              typeStr = "COMPONENT_MOVED ("+
                         b.x+","+b.y+" "+b.width+"x"+b.height+")";
              break;
          case COMPONENT_RESIZED:
              typeStr = "COMPONENT_RESIZED ("+
                         b.x+","+b.y+" "+b.width+"x"+b.height+")";
              break;
          default:
              typeStr = "unknown type";
        }
        return typeStr;
    }
}
