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
import static jsweet.util.Globals.any;

import java.awt.Dimension;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;

import javax.swing.event.EventListenerList;
import javax.swing.text.JTextComponent;

import jsweet.dom.HTMLInputElement;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JTextField extends JTextComponent implements SwingConstants {

	@Override
	public HTMLInputElement getHTMLElement() {
		return any(htmlElement);
	}

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.input);
		htmlElement.setAttribute("type", "text");
	}

	@Override
	public void initHTML() {
		super.initHTML();
		getHTMLElement().value = text;
		getHTMLElement().readOnly = !editable;
		initActionListeners();
	}

	private void initActionListeners() {
		for (ActionListener actionListener : getActionListeners()) {
			htmlElement.addEventListener(StringTypes.click, e -> {
				actionListener.actionPerformed(new ActionEvent(this, 0, null));
				return e;
			});
		}
	}

	public JTextField() {
		this(null, null, 0);
	}

	public JTextField(String text) {
		this(null, text, 0);
	}

	public JTextField(int columns) {
		this(null, null, columns);
	}

	public JTextField(String text, int columns) {
		this(null, text, columns);
	}

	public JTextField(Object doc, String text, int columns) {
		if (columns < 0) {
			throw new IllegalArgumentException("columns less than zero.");
		}
		this.columns = columns;
		if (text != null) {
			setText(text);
		}
	}

	@Override
	public void setText(String text) {
		super.setText(text);
		if (htmlElement != null) {
			getHTMLElement().value = text;
		}
	}
	
	@Override
	public void setEditable(boolean editable) {
		super.setEditable(editable);
		if (htmlElement != null) {
			getHTMLElement().readOnly = !editable;
		}
	}

	/**
	 * Gets the class ID for a UI.
	 *
	 * @return the string "TextFieldUI"
	 * @see JComponent#getUIClassID
	 * @see UIDefaults#getUI
	 */
	public String getUIClassID() {
		return uiClassID;
	}

	/**
	 * Returns the horizontal alignment of the text. Valid keys are:
	 * <ul>
	 * <li><code>JTextField.LEFT</code>
	 * <li><code>JTextField.CENTER</code>
	 * <li><code>JTextField.RIGHT</code>
	 * <li><code>JTextField.LEADING</code>
	 * <li><code>JTextField.TRAILING</code>
	 * </ul>
	 *
	 * @return the horizontal alignment
	 */
	public int getHorizontalAlignment() {
		return horizontalAlignment;
	}

	public void setHorizontalAlignment(int alignment) {
		if (alignment == horizontalAlignment)
			return;
		int oldValue = horizontalAlignment;
		if ((alignment == LEFT) || (alignment == CENTER) || (alignment == RIGHT) || (alignment == LEADING)
				|| (alignment == TRAILING)) {
			horizontalAlignment = alignment;
		} else {
			throw new IllegalArgumentException("horizontalAlignment");
		}
		firePropertyChange("horizontalAlignment", oldValue, horizontalAlignment);
		invalidate();
		repaint();
	}

	/**
	 * Returns the number of columns in this <code>TextField</code>.
	 *
	 * @return the number of columns &gt;= 0
	 */
	public int getColumns() {
		return columns;
	}

	/**
	 * Sets the number of columns in this <code>TextField</code>, and then
	 * invalidate the layout.
	 *
	 * @param columns
	 *            the number of columns &gt;= 0
	 * @exception IllegalArgumentException
	 *                if <code>columns</code> is less than 0
	 * @beaninfo description: the number of columns preferred for display
	 */
	public void setColumns(int columns) {
		int oldVal = this.columns;
		if (columns < 0) {
			throw new IllegalArgumentException("columns less than zero.");
		}
		if (columns != oldVal) {
			this.columns = columns;
			invalidate();
		}
	}

	/**
	 * Returns the preferred size <code>Dimensions</code> needed for this
	 * <code>TextField</code>. If a non-zero number of columns has been set, the
	 * width is set to the columns multiplied by the column width.
	 *
	 * @return the dimension of this textfield
	 */
	public Dimension getPreferredSize() {
		Dimension size = super.getPreferredSize();
		return size;
	}

	/**
	 * Sets the current font. This removes cached row height and column width so
	 * the new font will be reflected. <code>revalidate</code> is called after
	 * setting the font.
	 *
	 * @param f
	 *            the new font
	 */
	public void setFont(Font f) {
		super.setFont(f);
		columnWidth = 0;
	}

	/**
	 * Adds the specified action listener to receive action events from this
	 * textfield.
	 *
	 * @param l
	 *            the action listener to be added
	 */
	public synchronized void addActionListener(ActionListener l) {
		listenerList.add(ActionListener.class, l);
	}

	/**
	 * Removes the specified action listener so that it no longer receives
	 * action events from this textfield.
	 *
	 * @param l
	 *            the action listener to be removed
	 */
	public synchronized void removeActionListener(ActionListener l) {
		if ((l != null) && (getAction() == l)) {
			setAction(null);
		} else {
			listenerList.remove(ActionListener.class, l);
		}
	}

	/**
	 * Returns an array of all the <code>ActionListener</code>s added to this
	 * JTextField with addActionListener().
	 *
	 * @return all of the <code>ActionListener</code>s added or an empty array
	 *         if no listeners have been added
	 * @since 1.4
	 */
	public synchronized ActionListener[] getActionListeners() {
		return listenerList.getListeners(ActionListener.class);
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is lazily created. The listener list
	 * is processed in last to first order.
	 * 
	 * @see EventListenerList
	 */
	protected void fireActionPerformed() {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		int modifiers = 0;
		ActionEvent e = new ActionEvent(this, ActionEvent.ACTION_PERFORMED, (command != null) ? command : getText(), 0,
				modifiers);

		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ActionListener.class) {
				((ActionListener) listeners[i + 1]).actionPerformed(e);
			}
		}
	}

	public void setActionCommand(String command) {
		this.command = command;
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

	private boolean isListener(Class<?> c, ActionListener a) {
		boolean isListener = false;
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == c && listeners[i + 1] == a) {
				isListener = true;
			}
		}
		return isListener;
	}

	// JSweet HACK
	@SuppressWarnings("unused")
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

	protected void actionPropertyChanged(Action action, String propertyName) {
		if (propertyName == Action.ACTION_COMMAND_KEY) {
			setActionCommandFromAction(action);
		} else if (propertyName == "enabled") {
			AbstractAction.setEnabledFromAction(this, action);
		} else if (propertyName == Action.SHORT_DESCRIPTION) {
			AbstractAction.setToolTipTextFromAction(this, action);
		}
	}

	private void setActionCommandFromAction(Action action) {
		setActionCommand((action == null) ? null : (String) action.getValue(Action.ACTION_COMMAND_KEY));
	}

	protected PropertyChangeListener createActionPropertyChangeListener(Action a) {
		return new TextFieldActionPropertyChangeListener(this, a);
	}

	private static class TextFieldActionPropertyChangeListener extends ActionPropertyChangeListener<JTextField> {
		TextFieldActionPropertyChangeListener(JTextField tf, Action a) {
			super(tf, a);
		}

		protected void actionPropertyChanged(JTextField textField, Action action, PropertyChangeEvent e) {
			textField.actionPropertyChanged(action, e.getPropertyName());
		}
	}

	/**
	 * Fetches the command list for the editor. This is the list of commands
	 * supported by the plugged-in UI augmented by the collection of commands
	 * that the editor itself supports. These are useful for binding to events,
	 * such as in a keymap.
	 *
	 * @return the command list
	 */
	public Action[] getActions() {
		return defaultActions;
	}

	/**
	 * Processes action events occurring on this textfield by dispatching them
	 * to any registered <code>ActionListener</code> objects. This is normally
	 * called by the controller registered with textfield.
	 */
	public void postActionEvent() {
		fireActionPerformed();
	}

	// --- Scrolling support -----------------------------------

	/**
	 * Returns true if the receiver has an <code>ActionListener</code>
	 * installed.
	 */
	boolean hasActionListener() {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ActionListener.class) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Name of the action to send notification that the contents of the field
	 * have been accepted. Typically this is bound to a carriage-return.
	 */
	public static final String notifyAction = "notify-field-accept";

	private int horizontalAlignment = LEADING;
	private int columns;
	private int columnWidth;
	private String command;

	private static final Action[] defaultActions = {};

	/**
	 * @see #getUIClassID
	 * @see #readObject
	 */
	private static final String uiClassID = "TextFieldUI";

	/**
	 * Returns a string representation of this <code>JTextField</code>. This
	 * method is intended to be used only for debugging purposes, and the
	 * content and format of the returned string may vary between
	 * implementations. The returned string may be empty but may not be
	 * <code>null</code>.
	 *
	 * @return a string representation of this <code>JTextField</code>
	 */
	protected String paramString() {
		String horizontalAlignmentString;
		if (horizontalAlignment == LEFT) {
			horizontalAlignmentString = "LEFT";
		} else if (horizontalAlignment == CENTER) {
			horizontalAlignmentString = "CENTER";
		} else if (horizontalAlignment == RIGHT) {
			horizontalAlignmentString = "RIGHT";
		} else if (horizontalAlignment == LEADING) {
			horizontalAlignmentString = "LEADING";
		} else if (horizontalAlignment == TRAILING) {
			horizontalAlignmentString = "TRAILING";
		} else
			horizontalAlignmentString = "";
		String commandString = (command != null ? command : "");

		return super.paramString() + ",columns=" + columns + ",columnWidth=" + columnWidth + ",command=" + commandString
				+ ",horizontalAlignment=" + horizontalAlignmentString;
	}

}
