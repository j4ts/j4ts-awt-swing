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
package java.awt;

import static jsweet.dom.Globals.document;
import static jsweet.util.Globals.any;
import static jsweet.util.Globals.array;

import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.util.EventListener;

import jsweet.dom.HTMLInputElement;
import jsweet.dom.HTMLLabelElement;
import jsweet.dom.Text;
import jsweet.lang.Array;
import jsweet.util.StringTypes;

public class Checkbox extends Component implements ItemSelectable {

	String label;

	boolean state;

	CheckboxGroup group;

	Array<ItemListener> itemListeners;

	HTMLInputElement htmlCheckbox;
	Text htmlLabel;

	private static final String base = "checkbox";
	private static int nameCounter = 0;

	static final long serialVersionUID = 7270714317450821763L;

	public Checkbox() throws HeadlessException {
		this("", false, null);
	}

	public Checkbox(String label) throws HeadlessException {
		this(label, false, null);
	}

	public Checkbox(String label, boolean state) throws HeadlessException {
		this(label, state, null);
	}

	public Checkbox(String label, boolean state, CheckboxGroup group) throws HeadlessException {
		this.label = label;
		this.state = state;
		this.group = group;
		this.itemListeners = new Array<ItemListener>();
		if (state && (group != null)) {
			group.setSelectedCheckbox(this);
		}
	}

	// TODO: JSweet overload does not work for parameter swapping
	// public Checkbox(String label, CheckboxGroup group, boolean state) throws
	// HeadlessException {
	// this(label, state, group);
	// }

	@Override
	public HTMLLabelElement getHTMLElement() {
		return any(super.getHTMLElement());
	}

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.label);
		htmlElement.appendChild(htmlLabel = document.createTextNode(""));
		htmlCheckbox = document.createElement(StringTypes.input);
		htmlCheckbox.type = group == null ? "checkbox" : "radio";
		htmlElement.appendChild(htmlCheckbox);
	}

	@Override
	public void initHTML() {
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
		/* Cannot hold check box lock when calling group.setSelectedCheckbox. */
		CheckboxGroup group = this.group;
		if (group != null) {
			if (state) {
				group.setSelectedCheckbox(this);
			} else if (group.getSelectedCheckbox() == this) {
				state = true;
			}
		}
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

	public CheckboxGroup getCheckboxGroup() {
		return group;
	}

	public void setCheckboxGroup(CheckboxGroup g) {
		CheckboxGroup oldGroup;
		boolean oldState;

		/*
		 * Do nothing if this check box has already belonged to the check box
		 * group g.
		 */
		if (this.group == g) {
			return;
		}

		synchronized (this) {
			oldGroup = this.group;
			oldState = getState();

			this.group = g;
			if (this.group != null && getState()) {
				if (this.group.getSelectedCheckbox() != null) {
					setState(false);
				} else {
					this.group.setSelectedCheckbox(this);
				}
			}
		}

		/*
		 * Locking check box below could cause deadlock with CheckboxGroup's
		 * setSelectedCheckbox method.
		 *
		 * Fix for 4726853 by kdm@sparc.spb.su Here we should check if this
		 * check box was selected in the previous group and set selected check
		 * box to null for that group if so.
		 */
		if (oldGroup != null && oldState) {
			oldGroup.setSelectedCheckbox(null);
		}
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
