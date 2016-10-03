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

package java.awt;

import java.awt.event.ActionEvent;
import java.awt.event.AdjustmentEvent;
import java.awt.event.ItemEvent;
import java.awt.event.KeyEvent;
import java.awt.event.MouseEvent;
import java.awt.event.TextEvent;
import java.util.EventObject;

public abstract class AWTEvent extends EventObject {
	protected int id;
	protected boolean consumed;

	/**
	 * The event mask for selecting component events.
	 */
	public final static long COMPONENT_EVENT_MASK = 0x01;

	/**
	 * The event mask for selecting container events.
	 */
	public final static long CONTAINER_EVENT_MASK = 0x02;

	/**
	 * The event mask for selecting focus events.
	 */
	public final static long FOCUS_EVENT_MASK = 0x04;

	/**
	 * The event mask for selecting key events.
	 */
	public final static long KEY_EVENT_MASK = 0x08;

	/**
	 * The event mask for selecting mouse events.
	 */
	public final static long MOUSE_EVENT_MASK = 0x10;

	/**
	 * The event mask for selecting mouse motion events.
	 */
	public final static long MOUSE_MOTION_EVENT_MASK = 0x20;

	/**
	 * The event mask for selecting window events.
	 */
	public final static long WINDOW_EVENT_MASK = 0x40;

	/**
	 * The event mask for selecting action events.
	 */
	public final static long ACTION_EVENT_MASK = 0x80;

	/**
	 * The event mask for selecting adjustment events.
	 */
	public final static long ADJUSTMENT_EVENT_MASK = 0x100;

	/**
	 * The event mask for selecting item events.
	 */
	public final static long ITEM_EVENT_MASK = 0x200;

	/**
	 * The event mask for selecting text events.
	 */
	public final static long TEXT_EVENT_MASK = 0x400;

	/**
	 * The event mask for selecting input method events.
	 */
	public final static long INPUT_METHOD_EVENT_MASK = 0x800;

	/**
	 * The pseudo event mask for enabling input methods. We're using one bit in
	 * the eventMask so we don't need a separate field inputMethodsEnabled.
	 */
	final static long INPUT_METHODS_ENABLED_MASK = 0x1000;

	/**
	 * The event mask for selecting paint events.
	 */
	public final static long PAINT_EVENT_MASK = 0x2000;

	/**
	 * The event mask for selecting invocation events.
	 */
	public final static long INVOCATION_EVENT_MASK = 0x4000;

	/**
	 * The event mask for selecting hierarchy events.
	 */
	public final static long HIERARCHY_EVENT_MASK = 0x8000;

	/**
	 * The event mask for selecting hierarchy bounds events.
	 */
	public final static long HIERARCHY_BOUNDS_EVENT_MASK = 0x10000;

	/**
	 * The event mask for selecting mouse wheel events.
	 * 
	 * @since 1.4
	 */
	public final static long MOUSE_WHEEL_EVENT_MASK = 0x20000;

	/**
	 * The event mask for selecting window state events.
	 * 
	 * @since 1.4
	 */
	public final static long WINDOW_STATE_EVENT_MASK = 0x40000;

	/**
	 * The event mask for selecting window focus events.
	 * 
	 * @since 1.4
	 */
	public final static long WINDOW_FOCUS_EVENT_MASK = 0x80000;

	/**
	 * WARNING: there are more mask defined privately. See
	 * SunToolkit.GRAB_EVENT_MASK.
	 */

	/**
	 * The maximum value for reserved AWT event IDs. Programs defining their own
	 * event IDs should use IDs greater than this value.
	 */
	public final static int RESERVED_ID_MAX = 1999;

	public AWTEvent(Event event) {
		this(event.target, event.id);
		consumed = false;
	}

	public AWTEvent(Object source, int id) {
		super(source);
		this.id = id;
		consumed = false;
		switch (id) {
		case ActionEvent.ACTION_PERFORMED:
		case ItemEvent.ITEM_STATE_CHANGED:
		case AdjustmentEvent.ADJUSTMENT_VALUE_CHANGED:
		case TextEvent.TEXT_VALUE_CHANGED:
			consumed = true;
			break;
		default:
		}
	}

	public void setSource(Object newSource) {
		if (source == newSource) {
			return;
		}

		source = newSource;
	}

	/**
	 * Returns a String representation of this object.
	 */
	public String toString() {
		String srcName = null;
		if (source instanceof Component) {
			srcName = ((Component) source).getName();
		} else if (source instanceof MenuComponent) {
			srcName = ((MenuComponent) source).getName();
		}
		return getClass().getName() + "[" + paramString() + "] on " + (srcName != null ? srcName : source);
	}

	public String paramString() {
		return "";
	}

	protected void consume() {
		switch (id) {
		case KeyEvent.KEY_PRESSED:
		case KeyEvent.KEY_RELEASED:
		case MouseEvent.MOUSE_PRESSED:
		case MouseEvent.MOUSE_RELEASED:
		case MouseEvent.MOUSE_MOVED:
		case MouseEvent.MOUSE_DRAGGED:
		case MouseEvent.MOUSE_ENTERED:
		case MouseEvent.MOUSE_EXITED:
		case MouseEvent.MOUSE_WHEEL:
			// case InputMethodEvent.INPUT_METHOD_TEXT_CHANGED:
			// case InputMethodEvent.CARET_POSITION_CHANGED:
			consumed = true;
			break;
		default:
			// event type cannot be consumed
		}
	}

	protected boolean isConsumed() {
		return consumed;
	}

} // class AWTEvent
