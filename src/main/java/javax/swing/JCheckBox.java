/*
 * Copyright (c) 1995, 2013, Oracle and/or its affiliates. All rights reserved.
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

import static def.dom.Globals.document;
import static jsweet.util.Lang.any;
import static jsweet.util.Lang.array;

import java.awt.Checkbox;
import java.awt.ItemSelectable;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.util.EventListener;

import def.dom.HTMLInputElement;
import def.dom.Text;
import def.js.Array;
import jsweet.util.StringTypes;

public class JCheckBox extends JToggleButton implements ItemSelectable {

	String label;

	boolean state;

	Array<ItemListener> itemListeners;

	HTMLInputElement htmlCheckbox;
	Text htmlLabel;

	private static final String base = "checkbox";
	private static int nameCounter = 0;

	static final long serialVersionUID = 7270714317450821763L;

	public JCheckBox() {
		this("", false);
	}

	public JCheckBox(String label) {
		this(label, false);
	}

	public JCheckBox(String label, boolean state) {
		this.label = label;
		this.state = state;
		this.itemListeners = new Array<ItemListener>();
	}

	@Override
	public void createHTML() {
		System.out.println("create HTML jcheckbox");
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.label);
		htmlElement.appendChild(htmlLabel = document.createTextNode(""));
		htmlCheckbox = document.createElement(StringTypes.input);
		htmlCheckbox.type = "checkbox";
		htmlElement.appendChild(htmlCheckbox);
	}

	@Override
	public void initHTML() {
		System.out.println("init HTML jcheckbox");
		super.initHTML();
		htmlCheckbox.checked = state;
		htmlLabel.data = label;
		htmlCheckbox.onclick = e -> {
			System.out.println(e + " / " + htmlCheckbox.checked);
			setState(htmlCheckbox.checked);
			processItemEvent(
					new ItemEvent(this, 0, null, htmlCheckbox.checked ? ItemEvent.SELECTED : ItemEvent.DESELECTED));
			return e;
		};
	}

	String constructComponentName() {
		synchronized (Checkbox.class) {
			return base + nameCounter++;
		}
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		synchronized (this) {
			if (label != this.label && (this.label == null || !this.label.equals(label))) {
				this.label = label;
			}
		}

	}

	public boolean getState() {
		return this.state;
	}

	void setStateInternal(boolean state) {
		this.state = state;
		if (htmlCheckbox != null) {
			htmlCheckbox.checked = state;
		}
	}

	public void setState(boolean state) {
		setStateInternal(state);
	}

	public Object[] getSelectedObjects() {
		if (state) {
			Object[] items = new Object[1];
			items[0] = label;
			return items;
		}
		return null;
	}

	public synchronized void addItemListener(ItemListener l) {
		if (l == null) {
			return;
		}
		itemListeners.push(l);
	}

	public synchronized void removeItemListener(ItemListener l) {
		if (l == null) {
			return;
		}
		int index = (int) itemListeners.indexOf(l);
		if (index > -1) {
			itemListeners.splice(index, 1);
		}
	}

	public synchronized ItemListener[] getItemListeners() {
		return array(itemListeners);
	}

	public <T extends EventListener> T[] getListeners(Class<T> listenerType) {
		Array<T> result = new Array<T>();
		for (int i = 0; i < itemListeners.length; i++) {
			if (itemListeners.$get(i).getClass() == listenerType) {
				result.push(any(itemListeners.$get(i)));
			}
		}
		return array(result);
	}

	protected void processItemEvent(ItemEvent e) {
		for (ItemListener listener : itemListeners) {
			listener.itemStateChanged(e);
		}
	}

	protected String paramString() {
		String str = super.paramString();
		String label = this.label;
		if (label != null) {
			str += ",label=" + label;
		}
		return str + ",state=" + state;
	}

}
