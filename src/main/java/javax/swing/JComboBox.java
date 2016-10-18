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

import static jsweet.dom.Globals.document;

import java.awt.ItemSelectable;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.event.KeyEvent;
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;
import java.beans.Transient;
import java.io.Serializable;
import java.util.Vector;

import javax.swing.event.ListDataEvent;
import javax.swing.event.ListDataListener;
import javax.swing.event.PopupMenuEvent;
import javax.swing.event.PopupMenuListener;

import jsweet.dom.HTMLOptionElement;
import jsweet.dom.HTMLSelectElement;
import jsweet.dom.Node;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JComboBox<E> extends JComponent implements ItemSelectable, ListDataListener, ActionListener {

	public void createHTML() {
		htmlElement = document.createElement(StringTypes.select);
	}

	public HTMLSelectElement getHTMLElement() {
		return (HTMLSelectElement) htmlElement;
	}

	public void initHTML() {
		super.initHTML();
		getHTMLElement().onchange = e -> {
			int i = (int) getHTMLElement().selectedIndex;
			fireItemStateChanged(new ItemEvent(this, 0, getItemAt(i), ItemEvent.SELECTED));
			return e;
		};
		for (Node n : getHTMLElement().childNodes) {
			getHTMLElement().removeChild(n);
		}
		for (int i = 0; i < getItemCount(); i++) {
			HTMLOptionElement option = document.createElement(StringTypes.option);
			// TODO: use renderer
			option.innerHTML = getItemAt(i).toString();
			option.value = getItemAt(i).toString();
			if (getSelectedIndex() == i) {
				option.selected = true;
			}
			getHTMLElement().appendChild(option);
		}
	}

	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #getModel
	 * @see #setModel
	 */
	protected ComboBoxModel<E> dataModel;
	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #getRenderer
	 * @see #setRenderer
	 */
	protected ListCellRenderer<? super E> renderer;
	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #getEditor
	 * @see #setEditor
	 */
	protected ComboBoxEditor editor;
	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #getMaximumRowCount
	 * @see #setMaximumRowCount
	 */
	protected int maximumRowCount = 8;

	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #isEditable
	 * @see #setEditable
	 */
	protected boolean isEditable = false;
	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #setKeySelectionManager
	 * @see #getKeySelectionManager
	 */
	protected KeySelectionManager keySelectionManager = null;
	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override. Use the accessor methods instead.
	 *
	 * @see #setActionCommand
	 * @see #getActionCommand
	 */
	protected String actionCommand = "comboBoxChanged";

	/**
	 * This protected field is implementation specific. Do not access directly
	 * or override.
	 */
	protected Object selectedItemReminder = null;

	private E prototypeDisplayValue;

	// Flag to ensure that infinite loops do not occur with ActionEvents.
	private boolean firingActionEvent = false;

	// Flag to ensure the we don't get multiple ActionEvents on item selection.
	private boolean selectingItem = false;

	public JComboBox(ComboBoxModel<E> aModel) {
		super();
		setModel(aModel);
		init();
	}

	public JComboBox(E[] items) {
		super();
		setModel(new DefaultComboBoxModel<E>(items));
		init();
	}

	public JComboBox(Vector<E> items) {
		super();
		setModel(new DefaultComboBoxModel<E>(items));
		init();
	}

	public JComboBox() {
		super();
		setModel(new DefaultComboBoxModel<E>());
		init();
	}

	private void init() {
		// installAncestorListener();
	}

	// protected void installAncestorListener() {
	// addAncestorListener(new AncestorListener(){
	// public void ancestorAdded(AncestorEvent event){ hidePopup();}
	// public void ancestorRemoved(AncestorEvent event){ hidePopup();}
	// public void ancestorMoved(AncestorEvent event){
	// if (event.getSource() != JComboBox.this)
	// hidePopup();
	// }});
	// }

	public void setModel(ComboBoxModel<E> aModel) {
		ComboBoxModel<E> oldModel = dataModel;
		if (oldModel != null) {
			oldModel.removeListDataListener(this);
		}
		dataModel = aModel;
		dataModel.addListDataListener(this);

		// set the current selected item.
		selectedItemReminder = dataModel.getSelectedItem();

		firePropertyChange("model", oldModel, dataModel);
	}

	/**
	 * Returns the data model currently used by the <code>JComboBox</code>.
	 *
	 * @return the <code>ComboBoxModel</code> that provides the displayed list
	 *         of items
	 */
	public ComboBoxModel<E> getModel() {
		return dataModel;
	}

	/*
	 * Properties
	 */

	public void setLightWeightPopupEnabled(boolean aFlag) {
	}

	public void setEditable(boolean aFlag) {
		boolean oldFlag = isEditable;
		isEditable = aFlag;
		firePropertyChange("editable", oldFlag, isEditable);
	}

	public boolean isEditable() {
		return isEditable;
	}

	public void setMaximumRowCount(int count) {
		int oldCount = maximumRowCount;
		maximumRowCount = count;
		firePropertyChange("maximumRowCount", oldCount, maximumRowCount);
	}

	public int getMaximumRowCount() {
		return maximumRowCount;
	}

	public void setRenderer(ListCellRenderer<? super E> aRenderer) {
		ListCellRenderer<? super E> oldRenderer = renderer;
		renderer = aRenderer;
		firePropertyChange("renderer", oldRenderer, renderer);
	}

	public ListCellRenderer<? super E> getRenderer() {
		return renderer;
	}

	public void setEditor(ComboBoxEditor anEditor) {
		ComboBoxEditor oldEditor = editor;

		if (editor != null) {
			editor.removeActionListener(this);
		}
		editor = anEditor;
		if (editor != null) {
			editor.addActionListener(this);
		}
		firePropertyChange("editor", oldEditor, editor);
	}

	public ComboBoxEditor getEditor() {
		return editor;
	}

	public void setSelectedItem(Object anObject) {
		Object oldSelection = selectedItemReminder;
		Object objectToSelect = anObject;
		if (oldSelection == null || !oldSelection.equals(anObject)) {

			if (anObject != null && !isEditable()) {
				// For non editable combo boxes, an invalid selection
				// will be rejected.
				boolean found = false;
				for (int i = 0; i < dataModel.getSize(); i++) {
					E element = dataModel.getElementAt(i);
					if (anObject.equals(element)) {
						found = true;
						objectToSelect = element;
						break;
					}
				}
				if (!found) {
					return;
				}
			}

			// Must toggle the state of this flag since this method
			// call may result in ListDataEvents being fired.
			selectingItem = true;
			dataModel.setSelectedItem(objectToSelect);
			selectingItem = false;

			if (selectedItemReminder != dataModel.getSelectedItem()) {
				// in case a users implementation of ComboBoxModel
				// doesn't fire a ListDataEvent when the selection
				// changes.
				selectedItemChanged();
			}
		}
		fireActionEvent();
	}

	public Object getSelectedItem() {
		return dataModel.getSelectedItem();
	}

	public void setSelectedIndex(int anIndex) {
		int size = dataModel.getSize();

		if (anIndex == -1) {
			setSelectedItem(null);
		} else if (anIndex < -1 || anIndex >= size) {
			throw new IllegalArgumentException("setSelectedIndex: " + anIndex + " out of bounds");
		} else {
			setSelectedItem(dataModel.getElementAt(anIndex));
		}
	}

	@Transient
	public int getSelectedIndex() {
		Object sObject = dataModel.getSelectedItem();
		int i, c;
		E obj;

		for (i = 0, c = dataModel.getSize(); i < c; i++) {
			obj = dataModel.getElementAt(i);
			if (obj != null && obj == sObject)
				return i;
		}
		return -1;
	}

	public E getPrototypeDisplayValue() {
		return prototypeDisplayValue;
	}

	public void setPrototypeDisplayValue(E prototypeDisplayValue) {
		Object oldValue = this.prototypeDisplayValue;
		this.prototypeDisplayValue = prototypeDisplayValue;
		firePropertyChange("prototypeDisplayValue", oldValue, prototypeDisplayValue);
	}

	public void addItem(E item) {
		checkMutableComboBoxModel();
		((MutableComboBoxModel<E>) dataModel).addElement(item);
	}

	public void insertItemAt(E item, int index) {
		checkMutableComboBoxModel();
		((MutableComboBoxModel<E>) dataModel).insertElementAt(item, index);
	}

	public void removeItem(Object anObject) {
		checkMutableComboBoxModel();
		((MutableComboBoxModel) dataModel).removeElement(anObject);
	}

	public void removeItemAt(int anIndex) {
		checkMutableComboBoxModel();
		((MutableComboBoxModel<E>) dataModel).removeElementAt(anIndex);
	}

	public void removeAllItems() {
		checkMutableComboBoxModel();
		MutableComboBoxModel<E> model = (MutableComboBoxModel<E>) dataModel;
		int size = model.getSize();

		if (model instanceof DefaultComboBoxModel) {
			((DefaultComboBoxModel) model).removeAllElements();
		} else {
			for (int i = 0; i < size; ++i) {
				E element = model.getElementAt(0);
				model.removeElement(element);
			}
		}
		selectedItemReminder = null;
		if (isEditable()) {
			editor.setItem(null);
		}
	}

	void checkMutableComboBoxModel() {
		if (!(dataModel instanceof MutableComboBoxModel))
			throw new RuntimeException("Cannot use this method with a non-Mutable data model.");
	}

	public void showPopup() {
		setPopupVisible(true);
	}

	public void hidePopup() {
		setPopupVisible(false);
	}

	public void setPopupVisible(boolean v) {
	}

	public boolean isPopupVisible() {
		return false;
	}

	public void addItemListener(ItemListener aListener) {
		listenerList.add(ItemListener.class, aListener);
	}

	public void removeItemListener(ItemListener aListener) {
		listenerList.remove(ItemListener.class, aListener);
	}

	public ItemListener[] getItemListeners() {
		return listenerList.getListeners(ItemListener.class);
	}

	public void addActionListener(ActionListener l) {
		listenerList.add(ActionListener.class, l);
	}

	public void removeActionListener(ActionListener l) {
		if ((l != null) && (getAction() == l)) {
			setAction(null);
		} else {
			listenerList.remove(ActionListener.class, l);
		}
	}

	public ActionListener[] getActionListeners() {
		return listenerList.getListeners(ActionListener.class);
	}

	public void addPopupMenuListener(PopupMenuListener l) {
		listenerList.add(PopupMenuListener.class, l);
	}

	public void removePopupMenuListener(PopupMenuListener l) {
		listenerList.remove(PopupMenuListener.class, l);
	}

	public PopupMenuListener[] getPopupMenuListeners() {
		return listenerList.getListeners(PopupMenuListener.class);
	}

	public void firePopupMenuWillBecomeVisible() {
		Object[] listeners = listenerList.getListenerList();
		PopupMenuEvent e = null;
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == PopupMenuListener.class) {
				if (e == null)
					e = new PopupMenuEvent(this);
				((PopupMenuListener) listeners[i + 1]).popupMenuWillBecomeVisible(e);
			}
		}
	}

	public void firePopupMenuWillBecomeInvisible() {
		Object[] listeners = listenerList.getListenerList();
		PopupMenuEvent e = null;
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == PopupMenuListener.class) {
				if (e == null)
					e = new PopupMenuEvent(this);
				((PopupMenuListener) listeners[i + 1]).popupMenuWillBecomeInvisible(e);
			}
		}
	}

	public void firePopupMenuCanceled() {
		Object[] listeners = listenerList.getListenerList();
		PopupMenuEvent e = null;
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == PopupMenuListener.class) {
				if (e == null)
					e = new PopupMenuEvent(this);
				((PopupMenuListener) listeners[i + 1]).popupMenuCanceled(e);
			}
		}
	}

	public void setActionCommand(String aCommand) {
		actionCommand = aCommand;
	}

	public String getActionCommand() {
		return actionCommand;
	}

	private Action action;
	private PropertyChangeListener actionPropertyChangeListener;

	public void setAction(Action a) {
		Action oldValue = getAction();
		if (action == null || !action.equals(a)) {
			action = a;
			if (oldValue != null) {
				removeActionListener(oldValue);
				oldValue.removePropertyChangeListener(actionPropertyChangeListener);
				actionPropertyChangeListener = null;
			}
			configurePropertiesFromAction(action);
			if (action != null) {
				// Don't add if it is already a listener
				if (!isListener(ActionListener.class, action)) {
					addActionListener(action);
				}
				// Reverse linkage:
				actionPropertyChangeListener = createActionPropertyChangeListener(action);
				action.addPropertyChangeListener(actionPropertyChangeListener);
			}
			firePropertyChange("action", oldValue, action);
		}
	}

	private boolean isListener(Class c, ActionListener a) {
		boolean isListener = false;
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == c && listeners[i + 1] == a) {
				isListener = true;
			}
		}
		return isListener;
	}

	// HACK to accept interfaces for c
	private boolean isListener(String c, ActionListener a) {
		boolean isListener = false;
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == c && listeners[i + 1] == a) {
				isListener = true;
			}
		}
		return isListener;
	}

	public Action getAction() {
		return action;
	}

	protected void configurePropertiesFromAction(Action a) {
		AbstractAction.setEnabledFromAction(this, a);
		AbstractAction.setToolTipTextFromAction(this, a);
		setActionCommandFromAction(a);
	}

	protected PropertyChangeListener createActionPropertyChangeListener(Action a) {
		return new ComboBoxActionPropertyChangeListener(this, a);
	}

	protected void actionPropertyChanged(Action action, String propertyName) {
		if (propertyName == Action.ACTION_COMMAND_KEY) {
			setActionCommandFromAction(action);
		} else if (propertyName == "enabled") {
			AbstractAction.setEnabledFromAction(this, action);
		} else if (Action.SHORT_DESCRIPTION == propertyName) {
			AbstractAction.setToolTipTextFromAction(this, action);
		}
	}

	private void setActionCommandFromAction(Action a) {
		setActionCommand((a != null) ? (String) a.getValue(Action.ACTION_COMMAND_KEY) : null);
	}

	private static class ComboBoxActionPropertyChangeListener extends ActionPropertyChangeListener<JComboBox<?>> {
		ComboBoxActionPropertyChangeListener(JComboBox<?> b, Action a) {
			super(b, a);
		}

		protected void actionPropertyChanged(JComboBox<?> cb, Action action, PropertyChangeEvent e) {
			cb.actionPropertyChanged(action, e.getPropertyName());
		}
	}

	protected void fireItemStateChanged(ItemEvent e) {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ItemListener.class) {
				// Lazily create the event:
				// if (changeEvent == null)
				// changeEvent = new ChangeEvent(this);
				((ItemListener) listeners[i + 1]).itemStateChanged(e);
			}
		}
	}

	protected void fireActionEvent() {
		if (!firingActionEvent) {
			// Set flag to ensure that an infinite loop is not created
			firingActionEvent = true;
			ActionEvent e = null;
			// Guaranteed to return a non-null array
			Object[] listeners = listenerList.getListenerList();
			long mostRecentEventTime = 0;
			int modifiers = 0;
			// Process the listeners last to first, notifying
			// those that are interested in this event
			for (int i = listeners.length - 2; i >= 0; i -= 2) {
				if (listeners[i] == ActionListener.class) {
					// Lazily create the event:
					if (e == null)
						e = new ActionEvent(this, ActionEvent.ACTION_PERFORMED, getActionCommand(), mostRecentEventTime,
								modifiers);
					((ActionListener) listeners[i + 1]).actionPerformed(e);
				}
			}
			firingActionEvent = false;
		}
	}

	protected void selectedItemChanged() {
		if (selectedItemReminder != null) {
			fireItemStateChanged(
					new ItemEvent(this, ItemEvent.ITEM_STATE_CHANGED, selectedItemReminder, ItemEvent.DESELECTED));
		}

		// set the new selected item.
		selectedItemReminder = dataModel.getSelectedItem();

		if (selectedItemReminder != null) {
			fireItemStateChanged(
					new ItemEvent(this, ItemEvent.ITEM_STATE_CHANGED, selectedItemReminder, ItemEvent.SELECTED));
		}
	}

	public Object[] getSelectedObjects() {
		Object selectedObject = getSelectedItem();
		if (selectedObject == null)
			return new Object[0];
		else {
			Object result[] = new Object[1];
			result[0] = selectedObject;
			return result;
		}
	}

	public void actionPerformed(ActionEvent e) {
		Object newItem = getEditor().getItem();
		setPopupVisible(false);
		getModel().setSelectedItem(newItem);
		String oldCommand = getActionCommand();
		setActionCommand("comboBoxEdited");
		fireActionEvent();
		setActionCommand(oldCommand);
	}

	public void contentsChanged(ListDataEvent e) {
		Object oldSelection = selectedItemReminder;
		Object newSelection = dataModel.getSelectedItem();
		if (oldSelection == null || !oldSelection.equals(newSelection)) {
			selectedItemChanged();
			if (!selectingItem) {
				fireActionEvent();
			}
		}
	}

	public void intervalAdded(ListDataEvent e) {
		if (selectedItemReminder != dataModel.getSelectedItem()) {
			selectedItemChanged();
		}
	}

	public void intervalRemoved(ListDataEvent e) {
		contentsChanged(e);
	}

	public boolean selectWithKeyChar(char keyChar) {
		int index;

		if (keySelectionManager == null)
			keySelectionManager = createDefaultKeySelectionManager();

		index = keySelectionManager.selectionForKey(keyChar, getModel());
		if (index != -1) {
			setSelectedIndex(index);
			return true;
		} else
			return false;
	}

	public void setEnabled(boolean b) {
		super.setEnabled(b);
		firePropertyChange("enabled", !isEnabled(), isEnabled());
	}

	public void configureEditor(ComboBoxEditor anEditor, Object anItem) {
		anEditor.setItem(anItem);
	}

	public void processKeyEvent(KeyEvent e) {
		if (e.getKeyCode() == KeyEvent.VK_TAB) {
			hidePopup();
		}
		// super.processKeyEvent(e);
	}

	public void setKeySelectionManager(KeySelectionManager aManager) {
		keySelectionManager = aManager;
	}

	public KeySelectionManager getKeySelectionManager() {
		return keySelectionManager;
	}

	public int getItemCount() {
		return dataModel.getSize();
	}

	public E getItemAt(int index) {
		return dataModel.getElementAt(index);
	}

	protected KeySelectionManager createDefaultKeySelectionManager() {
		return new DefaultKeySelectionManager();
	}

	public interface KeySelectionManager {
		int selectionForKey(char aKey, ComboBoxModel aModel);
	}

	class DefaultKeySelectionManager implements KeySelectionManager, Serializable {
		public int selectionForKey(char aKey, ComboBoxModel aModel) {
			int i, c;
			int currentSelection = -1;
			Object selectedItem = aModel.getSelectedItem();
			String v;
			String pattern;

			if (selectedItem != null) {
				for (i = 0, c = aModel.getSize(); i < c; i++) {
					if (selectedItem == aModel.getElementAt(i)) {
						currentSelection = i;
						break;
					}
				}
			}

			pattern = ("" + aKey).toLowerCase();
			aKey = pattern.charAt(0);

			for (i = ++currentSelection, c = aModel.getSize(); i < c; i++) {
				Object elem = aModel.getElementAt(i);
				if (elem != null && elem.toString() != null) {
					v = elem.toString().toLowerCase();
					if (v.length() > 0 && v.charAt(0) == aKey)
						return i;
				}
			}

			for (i = 0; i < currentSelection; i++) {
				Object elem = aModel.getElementAt(i);
				if (elem != null && elem.toString() != null) {
					v = elem.toString().toLowerCase();
					if (v.length() > 0 && v.charAt(0) == aKey)
						return i;
				}
			}
			return -1;
		}
	}

	protected String paramString() {
		String selectedItemReminderString = (selectedItemReminder != null ? selectedItemReminder.toString() : "");
		String isEditableString = (isEditable ? "true" : "false");

		return super.paramString() + ",isEditable=" + isEditableString + ",maximumRowCount=" + maximumRowCount
				+ ",selectedItemReminder=" + selectedItemReminderString;
	}

}
