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
import java.awt.ItemSelectable;

public class ItemEvent extends AWTEvent {

	public static final int ITEM_FIRST = 701;

	public static final int ITEM_LAST = 701;

	public static final int ITEM_STATE_CHANGED = ITEM_FIRST; // Event.LIST_SELECT

	public static final int SELECTED = 1;

	public static final int DESELECTED = 2;

	Object item;

	int stateChange;

	private static final long serialVersionUID = -608708132447206933L;

	public ItemEvent(ItemSelectable source, int id, Object item, int stateChange) {
		super(source, id);
		this.item = item;
		this.stateChange = stateChange;
	}

	public ItemSelectable getItemSelectable() {
		return (ItemSelectable) source;
	}

	public Object getItem() {
		return item;
	}

	public int getStateChange() {
		return stateChange;
	}

	public String paramString() {
		String typeStr;
		switch (id) {
		case ITEM_STATE_CHANGED:
			typeStr = "ITEM_STATE_CHANGED";
			break;
		default:
			typeStr = "unknown type";
		}

		String stateStr;
		switch (stateChange) {
		case SELECTED:
			stateStr = "SELECTED";
			break;
		case DESELECTED:
			stateStr = "DESELECTED";
			break;
		default:
			stateStr = "unknown type";
		}
		return typeStr + ",item=" + item + ",stateChange=" + stateStr;
	}

}
