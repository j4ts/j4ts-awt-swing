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

import static def.jquery.Globals.$;

import java.awt.Image;
import java.awt.Insets;
import java.awt.ItemSelectable;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.io.Serializable;

import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.event.EventListenerList;

public abstract class AbstractButton extends JComponent implements ItemSelectable, SwingConstants {

	// Text positioning and alignment
	/** Identifies a change in the button's margins. */
	public static final String MARGIN_CHANGED_PROPERTY = "margin";
	/** Identifies a change in the button's vertical alignment. */
	public static final String VERTICAL_ALIGNMENT_CHANGED_PROPERTY = "verticalAlignment";
	/** Identifies a change in the button's horizontal alignment. */
	public static final String HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY = "horizontalAlignment";

	/** Identifies a change in the button's vertical text position. */
	public static final String VERTICAL_TEXT_POSITION_CHANGED_PROPERTY = "verticalTextPosition";
	/** Identifies a change in the button's horizontal text position. */
	public static final String HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY = "horizontalTextPosition";

	// Paint options
	/**
	 * Identifies a change to having the border drawn, or having it not drawn.
	 */
	public static final String BORDER_PAINTED_CHANGED_PROPERTY = "borderPainted";
	/**
	 * Identifies a change to having the border highlighted when focused, or
	 * not.
	 */
	public static final String FOCUS_PAINTED_CHANGED_PROPERTY = "focusPainted";
	/**
	 * Identifies a change from rollover enabled to disabled or back to enabled.
	 */
	public static final String ROLLOVER_ENABLED_CHANGED_PROPERTY = "rolloverEnabled";
	/**
	 * Identifies a change to having the button paint the content area.
	 */
	public static final String CONTENT_AREA_FILLED_CHANGED_PROPERTY = "contentAreaFilled";

	// Icons
	/** Identifies a change to the icon that represents the button. */
	public static final String ICON_CHANGED_PROPERTY = "icon";

	/**
	 * Identifies a change to the icon used when the button has been pressed.
	 */
	public static final String PRESSED_ICON_CHANGED_PROPERTY = "pressedIcon";
	/**
	 * Identifies a change to the icon used when the button has been selected.
	 */
	public static final String SELECTED_ICON_CHANGED_PROPERTY = "selectedIcon";

	/**
	 * Identifies a change to the icon used when the cursor is over the button.
	 */
	public static final String ROLLOVER_ICON_CHANGED_PROPERTY = "rolloverIcon";
	/**
	 * Identifies a change to the icon used when the cursor is over the button
	 * and it has been selected.
	 */
	public static final String ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY = "rolloverSelectedIcon";

	/**
	 * Identifies a change to the icon used when the button has been disabled.
	 */
	public static final String DISABLED_ICON_CHANGED_PROPERTY = "disabledIcon";
	/**
	 * Identifies a change to the icon used when the button has been disabled
	 * and selected.
	 */
	public static final String DISABLED_SELECTED_ICON_CHANGED_PROPERTY = "disabledSelectedIcon";

	private String text = ""; // for BeanBox
	private Insets margin = null;
	private Insets defaultMargin = null;

	// Button icons
	// PENDING(jeff) - hold icons in an array
	private Icon defaultIcon = null;
	private Icon pressedIcon = null;
	private Icon disabledIcon = null;

	private Icon selectedIcon = null;
	private Icon disabledSelectedIcon = null;

	private Icon rolloverIcon = null;
	private Icon rolloverSelectedIcon = null;

	// Display properties
	private boolean paintBorder = true;
	private boolean paintFocus = true;
	private boolean rolloverEnabled = false;
	private boolean contentAreaFilled = true;

	// Icon/Label Alignment
	private int verticalAlignment = CENTER;
	private int horizontalAlignment = CENTER;

	private int verticalTextPosition = CENTER;
	private int horizontalTextPosition = TRAILING;

	private int iconTextGap = 4;

	private int mnemonic;
	private int mnemonicIndex = -1;

	private long multiClickThreshhold = 0;

	private boolean borderPaintedSet = false;
	private boolean rolloverEnabledSet = false;
	private boolean iconTextGapSet = false;
	private boolean contentAreaFilledSet = false;

	// Whether or not we've set the LayoutManager.
	private boolean setLayout = false;

	// This is only used by JButton, promoted to avoid an extra
	// boolean field in JButton
	boolean defaultCapable = true;

	/**
	 * Combined listeners: ActionListener, ChangeListener, ItemListener.
	 */
	private Handler handler;

	/**
	 * The button model's <code>changeListener</code>.
	 */
	protected ChangeListener changeListener = null;
	/**
	 * The button model's <code>ActionListener</code>.
	 */
	protected ActionListener actionListener = null;
	/**
	 * The button model's <code>ItemListener</code>.
	 */
	protected ItemListener itemListener = null;

	/**
	 * Only one <code>ChangeEvent</code> is needed per button instance since the
	 * event's only state is the source property. The source of events generated
	 * is always "this".
	 */
	protected transient ChangeEvent changeEvent;

	private boolean hideActionText = false;

	/**
	 * Returns the button's text.
	 * 
	 * @return the buttons text
	 * @see #setText
	 */
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
		this.getHTMLElement().innerText = text;
	}

	public boolean isSelected() {
		// TODO
		return false;
	}

	public void setSelected(boolean b) {
		// TODO
	}

	public void doClick() {
		$(getHTMLElement()).click();
	}

	public void setMargin(Insets m) {
	}

	/**
	 * Returns the margin between the button's border and the label.
	 *
	 * @return an <code>Insets</code> object specifying the margin between the
	 *         botton's border and the label
	 * @see #setMargin
	 */
	public Insets getMargin() {
		return (margin == null) ? null : (Insets) margin.clone();
	}

	/**
	 * Returns the default icon.
	 * 
	 * @return the default <code>Icon</code>
	 * @see #setIcon
	 */
	public Icon getIcon() {
		return defaultIcon;
	}

	public void setIcon(Icon defaultIcon) {
		Icon oldValue = this.defaultIcon;
		this.defaultIcon = defaultIcon;

		if (defaultIcon != oldValue) {
			disabledIcon = null;
		}

		firePropertyChange(ICON_CHANGED_PROPERTY, oldValue, defaultIcon);
	}

	public Icon getPressedIcon() {
		return pressedIcon;
	}

	public void setPressedIcon(Icon pressedIcon) {
		Icon oldValue = this.pressedIcon;
		this.pressedIcon = pressedIcon;
		firePropertyChange(PRESSED_ICON_CHANGED_PROPERTY, oldValue, pressedIcon);
	}

	public Icon getSelectedIcon() {
		return selectedIcon;
	}

	public void setSelectedIcon(Icon selectedIcon) {
		Icon oldValue = this.selectedIcon;
		this.selectedIcon = selectedIcon;

		if (selectedIcon != oldValue) {

			disabledSelectedIcon = null;
		}

		firePropertyChange(SELECTED_ICON_CHANGED_PROPERTY, oldValue, selectedIcon);
	}

	public Icon getRolloverIcon() {
		return rolloverIcon;
	}

	public void setRolloverIcon(Icon rolloverIcon) {
		Icon oldValue = this.rolloverIcon;
		this.rolloverIcon = rolloverIcon;
		firePropertyChange(ROLLOVER_ICON_CHANGED_PROPERTY, oldValue, rolloverIcon);
	}

	public Icon getRolloverSelectedIcon() {
		return rolloverSelectedIcon;
	}

	public void setRolloverSelectedIcon(Icon rolloverSelectedIcon) {
		Icon oldValue = this.rolloverSelectedIcon;
		this.rolloverSelectedIcon = rolloverSelectedIcon;
		firePropertyChange(ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY, oldValue, rolloverSelectedIcon);
		setRolloverEnabled(true);
	}

	public Icon getDisabledIcon() {
		return disabledIcon;
	}

	public void setDisabledIcon(Icon disabledIcon) {
		Icon oldValue = this.disabledIcon;
		this.disabledIcon = disabledIcon;
		firePropertyChange(DISABLED_ICON_CHANGED_PROPERTY, oldValue, disabledIcon);
	}

	public Icon getDisabledSelectedIcon() {
		return disabledSelectedIcon;
	}

	public void setDisabledSelectedIcon(Icon disabledSelectedIcon) {
		Icon oldValue = this.disabledSelectedIcon;
		this.disabledSelectedIcon = disabledSelectedIcon;
		firePropertyChange(DISABLED_SELECTED_ICON_CHANGED_PROPERTY, oldValue, disabledSelectedIcon);
	}

	public int getVerticalAlignment() {
		return verticalAlignment;
	}

	public void setVerticalAlignment(int alignment) {
		if (alignment == verticalAlignment)
			return;
		int oldValue = verticalAlignment;
		verticalAlignment = checkVerticalKey(alignment, "verticalAlignment");
		firePropertyChange(VERTICAL_ALIGNMENT_CHANGED_PROPERTY, oldValue, verticalAlignment);
	}

	public int getHorizontalAlignment() {
		return horizontalAlignment;
	}

	public void setHorizontalAlignment(int alignment) {
		if (alignment == horizontalAlignment)
			return;
		int oldValue = horizontalAlignment;
		horizontalAlignment = checkHorizontalKey(alignment, "horizontalAlignment");
		firePropertyChange(HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY, oldValue, horizontalAlignment);
	}

	public int getVerticalTextPosition() {
		return verticalTextPosition;
	}

	public void setVerticalTextPosition(int textPosition) {
		if (textPosition == verticalTextPosition)
			return;
		int oldValue = verticalTextPosition;
		verticalTextPosition = checkVerticalKey(textPosition, "verticalTextPosition");
		firePropertyChange(VERTICAL_TEXT_POSITION_CHANGED_PROPERTY, oldValue, verticalTextPosition);
	}

	public int getHorizontalTextPosition() {
		return horizontalTextPosition;
	}

	public void setHorizontalTextPosition(int textPosition) {
		if (textPosition == horizontalTextPosition)
			return;
		int oldValue = horizontalTextPosition;
		horizontalTextPosition = checkHorizontalKey(textPosition, "horizontalTextPosition");
		firePropertyChange(HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY, oldValue, horizontalTextPosition);
	}

	public int getIconTextGap() {
		return iconTextGap;
	}

	public void setIconTextGap(int iconTextGap) {
		int oldValue = this.iconTextGap;
		this.iconTextGap = iconTextGap;
		iconTextGapSet = true;
		firePropertyChange("iconTextGap", oldValue, iconTextGap);
	}

	protected int checkHorizontalKey(int key, String exception) {
		if ((key == LEFT) || (key == CENTER) || (key == RIGHT) || (key == LEADING) || (key == TRAILING)) {
			return key;
		} else {
			throw new IllegalArgumentException(exception);
		}
	}

	protected int checkVerticalKey(int key, String exception) {
		if ((key == TOP) || (key == CENTER) || (key == BOTTOM)) {
			return key;
		} else {
			throw new IllegalArgumentException(exception);
		}
	}

	public void setActionCommand(String actionCommand) {
		// TODO
	}

	public String getActionCommand() {
		// TODO
		return getText();
	}

	private Action action;

	public void setAction(Action a) {
		Action oldValue = getAction();
		if (action == null || !action.equals(a)) {
			action = a;
			if (oldValue != null) {
				removeActionListener(oldValue);
			}
			if (action != null) {
				// Don't add if it is already a listener
				addActionListener(action);
			}
			firePropertyChange("action", oldValue, action);
		}
	}

	public Action getAction() {
		return action;
	}

	public boolean isBorderPainted() {
		return paintBorder;
	}

	public void setBorderPainted(boolean b) {
		boolean oldValue = paintBorder;
		paintBorder = b;
		borderPaintedSet = true;
		firePropertyChange(BORDER_PAINTED_CHANGED_PROPERTY, oldValue, paintBorder);
	}

	public boolean isFocusPainted() {
		return paintFocus;
	}

	public void setFocusPainted(boolean b) {
		boolean oldValue = paintFocus;
		paintFocus = b;
		firePropertyChange(FOCUS_PAINTED_CHANGED_PROPERTY, oldValue, paintFocus);
	}

	public boolean isContentAreaFilled() {
		return contentAreaFilled;
	}

	public void setContentAreaFilled(boolean b) {
		boolean oldValue = contentAreaFilled;
		contentAreaFilled = b;
		contentAreaFilledSet = true;
		firePropertyChange(CONTENT_AREA_FILLED_CHANGED_PROPERTY, oldValue, contentAreaFilled);
	}

	public boolean isRolloverEnabled() {
		return rolloverEnabled;
	}

	public void setRolloverEnabled(boolean b) {
		boolean oldValue = rolloverEnabled;
		rolloverEnabled = b;
		rolloverEnabledSet = true;
		firePropertyChange(ROLLOVER_ENABLED_CHANGED_PROPERTY, oldValue, rolloverEnabled);
	}

	public int getMnemonic() {
		return mnemonic;
	}

	public void setMnemonic(int mnemonic) {
		// TODO
	}

	public void setDisplayedMnemonicIndex(int index) throws IllegalArgumentException {
		int oldValue = mnemonicIndex;
		if (index == -1) {
			mnemonicIndex = -1;
		} else {
			String text = getText();
			int textLength = (text == null) ? 0 : text.length();
			if (index < -1 || index >= textLength) { // index out of range
				throw new IllegalArgumentException("index == " + index);
			}
		}
		mnemonicIndex = index;
		firePropertyChange("displayedMnemonicIndex", oldValue, index);
	}

	public int getDisplayedMnemonicIndex() {
		return mnemonicIndex;
	}

	public void setMultiClickThreshhold(long threshhold) {
		if (threshhold < 0) {
			throw new IllegalArgumentException("threshhold must be >= 0");
		}
		this.multiClickThreshhold = threshhold;
	}

	public long getMultiClickThreshhold() {
		return multiClickThreshhold;
	}

	/**
	 * Adds a <code>ChangeListener</code> to the button.
	 * 
	 * @param l
	 *            the listener to be added
	 */
	public void addChangeListener(ChangeListener l) {
		listenerList.add(ChangeListener.class, l);
	}

	/**
	 * Removes a ChangeListener from the button.
	 * 
	 * @param l
	 *            the listener to be removed
	 */
	public void removeChangeListener(ChangeListener l) {
		listenerList.remove(ChangeListener.class, l);
	}

	/**
	 * Returns an array of all the <code>ChangeListener</code>s added to this
	 * AbstractButton with addChangeListener().
	 *
	 * @return all of the <code>ChangeListener</code>s added or an empty array
	 *         if no listeners have been added
	 * @since 1.4
	 */
	public ChangeListener[] getChangeListeners() {
		return listenerList.getListeners(ChangeListener.class);
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is lazily created.
	 * 
	 * @see EventListenerList
	 */
	protected void fireStateChanged() {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ChangeListener.class) {
				// Lazily create the event:
				if (changeEvent == null)
					changeEvent = new ChangeEvent(this);
				((ChangeListener) listeners[i + 1]).stateChanged(changeEvent);
			}
		}
	}

	/**
	 * Adds an <code>ActionListener</code> to the button.
	 * 
	 * @param l
	 *            the <code>ActionListener</code> to be added
	 */
	public void addActionListener(ActionListener l) {
		listenerList.add(ActionListener.class, l);
	}

	/**
	 * Removes an <code>ActionListener</code> from the button. If the listener
	 * is the currently set <code>Action</code> for the button, then the
	 * <code>Action</code> is set to <code>null</code>.
	 *
	 * @param l
	 *            the listener to be removed
	 */
	public void removeActionListener(ActionListener l) {
		if ((l != null) && (getAction() == l)) {
			setAction(null);
		} else {
			listenerList.remove(ActionListener.class, l);
		}
	}

	/**
	 * Returns an array of all the <code>ActionListener</code>s added to this
	 * AbstractButton with addActionListener().
	 *
	 * @return all of the <code>ActionListener</code>s added or an empty array
	 *         if no listeners have been added
	 * @since 1.4
	 */
	public ActionListener[] getActionListeners() {
		return listenerList.getListeners(ActionListener.class);
	}

	/**
	 * Subclasses that want to handle <code>ChangeEvents</code> differently can
	 * override this to return another <code>ChangeListener</code>
	 * implementation.
	 *
	 * @return the new <code>ChangeListener</code>
	 */
	protected ChangeListener createChangeListener() {
		return getHandler();
	}

	/**
	 * Extends <code>ChangeListener</code> to be serializable.
	 * <p>
	 * <strong>Warning:</strong> Serialized objects of this class will not be
	 * compatible with future Swing releases. The current serialization support
	 * is appropriate for short term storage or RMI between applications running
	 * the same version of Swing. As of 1.4, support for long term storage of
	 * all JavaBeans&trade; has been added to the <code>java.beans</code>
	 * package. Please see {@link java.beans.XMLEncoder}.
	 */
	@SuppressWarnings("serial")
	protected class ButtonChangeListener implements ChangeListener, Serializable {
		// NOTE: This class is NOT used, instead the functionality has
		// been moved to Handler.
		ButtonChangeListener() {
		}

		public void stateChanged(ChangeEvent e) {
			getHandler().stateChanged(e);
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is lazily created using the
	 * <code>event</code> parameter.
	 *
	 * @param event
	 *            the <code>ActionEvent</code> object
	 * @see EventListenerList
	 */
	protected void fireActionPerformed(ActionEvent event) {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		ActionEvent e = null;
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ActionListener.class) {
				// Lazily create the event:
				if (e == null) {
					String actionCommand = event.getActionCommand();
					if (actionCommand == null) {
						actionCommand = getActionCommand();
					}
					e = new ActionEvent(AbstractButton.this, ActionEvent.ACTION_PERFORMED, actionCommand,
							event.getWhen(), event.getModifiers());
				}
				((ActionListener) listeners[i + 1]).actionPerformed(e);
			}
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is lazily created using the
	 * <code>event</code> parameter.
	 *
	 * @param event
	 *            the <code>ItemEvent</code> object
	 * @see EventListenerList
	 */
	protected void fireItemStateChanged(ItemEvent event) {
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		ItemEvent e = null;
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ItemListener.class) {
				// Lazily create the event:
				if (e == null) {
					e = new ItemEvent(AbstractButton.this, ItemEvent.ITEM_STATE_CHANGED, AbstractButton.this,
							event.getStateChange());
				}
				((ItemListener) listeners[i + 1]).itemStateChanged(e);
			}
		}
	}

	protected ActionListener createActionListener() {
		return getHandler();
	}

	protected ItemListener createItemListener() {
		return getHandler();
	}

	/**
	 * Enables (or disables) the button.
	 * 
	 * @param b
	 *            true to enable the button, otherwise false
	 */
	public void setEnabled(boolean b) {
		super.setEnabled(b);
	}

	// *** Deprecated java.awt.Button APIs below *** //

	/**
	 * Returns the label text.
	 *
	 * @return a <code>String</code> containing the label
	 * @deprecated - Replaced by <code>getText</code>
	 */
	@Deprecated
	public String getLabel() {
		return getText();
	}

	/**
	 * Sets the label text.
	 *
	 * @param label
	 *            a <code>String</code> containing the text
	 * @deprecated - Replaced by <code>setText(text)</code>
	 * @beaninfo bound: true description: Replace by setText(text)
	 */
	@Deprecated
	public void setLabel(String label) {
		setText(label);
	}

	/**
	 * Adds an <code>ItemListener</code> to the <code>checkbox</code>.
	 * 
	 * @param l
	 *            the <code>ItemListener</code> to be added
	 */
	public void addItemListener(ItemListener l) {
		listenerList.add(ItemListener.class, l);
	}

	/**
	 * Removes an <code>ItemListener</code> from the button.
	 * 
	 * @param l
	 *            the <code>ItemListener</code> to be removed
	 */
	public void removeItemListener(ItemListener l) {
		listenerList.remove(ItemListener.class, l);
	}

	/**
	 * Returns an array of all the <code>ItemListener</code>s added to this
	 * AbstractButton with addItemListener().
	 *
	 * @return all of the <code>ItemListener</code>s added or an empty array if
	 *         no listeners have been added
	 * @since 1.4
	 */
	public ItemListener[] getItemListeners() {
		return listenerList.getListeners(ItemListener.class);
	}

	/**
	 * Returns an array (length 1) containing the label or <code>null</code> if
	 * the button is not selected.
	 *
	 * @return an array containing 1 Object: the text of the button, if the item
	 *         is selected; otherwise <code>null</code>
	 */
	public Object[] getSelectedObjects() {
		if (isSelected() == false) {
			return null;
		}
		Object[] selectedObjects = new Object[1];
		selectedObjects[0] = getText();
		return selectedObjects;
	}

	protected void init(String text, Icon icon) {
		if (text != null) {
			setText(text);
		}

		if (icon != null) {
			setIcon(icon);
		}
	}

	public boolean imageUpdate(Image img, int infoflags, int x, int y, int w, int h) {
		return false;
	}

	private Handler getHandler() {
		if (handler == null) {
			handler = new Handler();
		}
		return handler;
	}

	//
	// Listeners that are added to model
	//
	@SuppressWarnings("serial")
	class Handler implements ActionListener, ChangeListener, ItemListener, Serializable {
		//
		// ChangeListener
		//
		public void stateChanged(ChangeEvent e) {
			fireStateChanged();
		}

		//
		// ActionListener
		//
		public void actionPerformed(ActionEvent event) {
			fireActionPerformed(event);
		}

		//
		// ItemListener
		//
		public void itemStateChanged(ItemEvent event) {
			fireItemStateChanged(event);
		}
	}

}
