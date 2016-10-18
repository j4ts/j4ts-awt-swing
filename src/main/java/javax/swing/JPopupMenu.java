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

import static jsweet.util.Globals.any;

import java.awt.Component;
import java.awt.Frame;
import java.awt.Insets;
import java.awt.event.KeyEvent;
import java.awt.event.MouseEvent;
import java.beans.PropertyChangeListener;
import java.util.Vector;

import javax.swing.event.EventListenerList;
import javax.swing.event.MenuKeyEvent;
import javax.swing.event.MenuKeyListener;
import javax.swing.event.PopupMenuEvent;
import javax.swing.event.PopupMenuListener;

/**
 * An implementation of a popup menu -- a small window that pops up and displays
 * a series of choices. A <code>JPopupMenu</code> is used for the menu that
 * appears when the user selects an item on the menu bar. It is also used for
 * "pull-right" menu that appears when the selects a menu item that activates
 * it. Finally, a <code>JPopupMenu</code> can also be used anywhere else you
 * want a menu to appear. For example, when the user right-clicks in a specified
 * area.
 * <p>
 * For information and examples of using popup menus, see <a href=
 * "http://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to
 * Use Menus</a> in <em>The Java Tutorial.</em>
 * <p>
 * <strong>Warning:</strong> Swing is not thread safe. For more information see
 * <a href="package-summary.html#threading">Swing's Threading Policy</a>.
 * <p>
 * <strong>Warning:</strong> Serialized objects of this class will not be
 * compatible with future Swing releases. The current serialization support is
 * appropriate for short term storage or RMI between applications running the
 * same version of Swing. As of 1.4, support for long term storage of all
 * JavaBeans&trade; has been added to the <code>java.beans</code> package.
 * Please see {@link java.beans.XMLEncoder}.
 *
 * @beaninfo attribute: isContainer false description: A small window that pops
 *           up and displays a series of choices.
 *
 * @author Georges Saab
 * @author David Karlton
 * @author Arnaud Weber
 */
@SuppressWarnings("serial")
public class JPopupMenu extends JComponent implements MenuElement {

	@Override
	public void createHTML() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see #getUIClassID
	 * @see #readObject
	 */
	private static final String uiClassID = "PopupMenuUI";

	transient Component invoker;
	transient Frame frame;
	private int desiredLocationX, desiredLocationY;

	private String label = null;
	private boolean paintBorder = true;
	private Insets margin = null;

	/*
	 * Model for the selected subcontrol.
	 */
	private SingleSelectionModel selectionModel;

	/*
	 * Lock object used in place of class object for synchronization. (4187686)
	 */
	private static final Object classLock = new Object();

	/* diagnostic aids -- should be false for production builds. */
	private static final boolean TRACE = false; // trace creates and disposes
	private static final boolean VERBOSE = false; // show reuse hits/misses
	private static final boolean DEBUG = false; // show bad params, misc.

	/**
	 * Constructs a <code>JPopupMenu</code> without an "invoker".
	 */
	public JPopupMenu() {
		this(null);
	}

	/**
	 * Constructs a <code>JPopupMenu</code> with the specified title.
	 *
	 * @param label
	 *            the string that a UI may use to display as a title for the
	 *            popup menu.
	 */
	public JPopupMenu(String label) {
		this.label = label;
		setSelectionModel(new DefaultSingleSelectionModel());
	}

	/**
	 * Returns the name of the L&amp;F class that renders this component.
	 *
	 * @return the string "PopupMenuUI"
	 * @see JComponent#getUIClassID
	 * @see UIDefaults#getUI
	 */
	public String getUIClassID() {
		return uiClassID;
	}

	/**
	 * Returns the model object that handles single selections.
	 *
	 * @return the <code>selectionModel</code> property
	 * @see SingleSelectionModel
	 */
	public SingleSelectionModel getSelectionModel() {
		return selectionModel;
	}

	/**
	 * Sets the model object to handle single selections.
	 *
	 * @param model
	 *            the new <code>SingleSelectionModel</code>
	 * @see SingleSelectionModel
	 * @beaninfo description: The selection model for the popup menu expert:
	 *           true
	 */
	public void setSelectionModel(SingleSelectionModel model) {
		selectionModel = model;
	}

	/**
	 * Appends the specified menu item to the end of this menu.
	 *
	 * @param menuItem
	 *            the <code>JMenuItem</code> to add
	 * @return the <code>JMenuItem</code> added
	 */
	public JMenuItem add(JMenuItem menuItem) {
		super.add(menuItem);
		return menuItem;
	}

	/**
	 * Creates a new menu item with the specified text and appends it to the end
	 * of this menu.
	 *
	 * @param s
	 *            the string for the menu item to be added
	 */
	public JMenuItem add(String s) {
		return add(new JMenuItem(s));
	}

	/**
	 * Appends a new menu item to the end of the menu which dispatches the
	 * specified <code>Action</code> object.
	 *
	 * @param a
	 *            the <code>Action</code> to add to the menu
	 * @return the new menu item
	 * @see Action
	 */
	public JMenuItem add(Action a) {
		JMenuItem mi = createActionComponent(a);
		mi.setAction(a);
		add(mi);
		return mi;
	}

	/**
	 * Factory method which creates the <code>JMenuItem</code> for
	 * <code>Actions</code> added to the <code>JPopupMenu</code>.
	 *
	 * @param a
	 *            the <code>Action</code> for the menu item to be added
	 * @return the new menu item
	 * @see Action
	 *
	 * @since 1.3
	 */
	protected JMenuItem createActionComponent(Action a) {
		JMenuItem mi = new JMenuItem() {
			// protected PropertyChangeListener
			// createActionPropertyChangeListener(Action a) {
			// PropertyChangeListener pcl = createActionChangeListener(this);
			// if (pcl == null) {
			// pcl = super.createActionPropertyChangeListener(a);
			// }
			// return pcl;
			// }
		};
		return mi;
	}

	/**
	 * Returns a properly configured <code>PropertyChangeListener</code> which
	 * updates the control as changes to the <code>Action</code> occur.
	 */
	protected PropertyChangeListener createActionChangeListener(JMenuItem b) {
		return null;
		// return b.createActionPropertyChangeListener0(b.getAction());
	}

	/**
	 * Removes the component at the specified index from this popup menu.
	 *
	 * @param pos
	 *            the position of the item to be removed
	 * @exception IllegalArgumentException
	 *                if the value of <code>pos</code> &lt; 0, or if the value
	 *                of <code>pos</code> is greater than the number of items
	 */
	public void remove(int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}
		if (pos > getComponentCount() - 1) {
			throw new IllegalArgumentException("index greater than the number of items.");
		}
		super.remove(pos);
	}

	/**
	 * Returns the popup menu's label
	 *
	 * @return a string containing the popup menu's label
	 * @see #setLabel
	 */
	public String getLabel() {
		return label;
	}

	/**
	 * Sets the popup menu's label. Different look and feels may choose to
	 * display or not display this.
	 *
	 * @param label
	 *            a string specifying the label for the popup menu
	 *
	 * @see #setLabel
	 * @beaninfo description: The label for the popup menu. bound: true
	 */
	public void setLabel(String label) {
		String oldValue = this.label;
		this.label = label;
		firePropertyChange("label", oldValue, label);
		if (htmlElement != null) {
			initHTML();
		}
	}

	/**
	 * Appends a new separator at the end of the menu.
	 */
	public void addSeparator() {
		add(new JPopupMenu.Separator());
	}

	/**
	 * Inserts a menu item for the specified <code>Action</code> object at a
	 * given position.
	 *
	 * @param a
	 *            the <code>Action</code> object to insert
	 * @param index
	 *            specifies the position at which to insert the
	 *            <code>Action</code>, where 0 is the first
	 * @exception IllegalArgumentException
	 *                if <code>index</code> &lt; 0
	 * @see Action
	 */
	public void insert(Action a, int index) {
		JMenuItem mi = createActionComponent(a);
		mi.setAction(a);
		insert(mi, index);
	}

	/**
	 * Inserts the specified component into the menu at a given position.
	 *
	 * @param component
	 *            the <code>Component</code> to insert
	 * @param index
	 *            specifies the position at which to insert the component, where
	 *            0 is the first
	 * @exception IllegalArgumentException
	 *                if <code>index</code> &lt; 0
	 */
	public void insert(Component component, int index) {
		if (index < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}

		int nitems = getComponentCount();
		// PENDING(ges): Why not use an array?
		Vector<Component> tempItems = new Vector<Component>();

		/*
		 * Remove the item at index, nitems-index times storing them in a
		 * temporary vector in the order they appear on the menu.
		 */
		for (int i = index; i < nitems; i++) {
			tempItems.addElement(getComponent(index));
			remove(index);
		}

		add(component);

		/*
		 * Add the removed items back to the menu, they are already in the
		 * correct order in the temp vector.
		 */
		for (Component tempItem : tempItems) {
			add(tempItem);
		}
	}

	/**
	 * Adds a <code>PopupMenu</code> listener.
	 *
	 * @param l
	 *            the <code>PopupMenuListener</code> to add
	 */
	public void addPopupMenuListener(PopupMenuListener l) {
		listenerList.add(PopupMenuListener.class, l);
	}

	/**
	 * Removes a <code>PopupMenu</code> listener.
	 *
	 * @param l
	 *            the <code>PopupMenuListener</code> to remove
	 */
	public void removePopupMenuListener(PopupMenuListener l) {
		listenerList.remove(PopupMenuListener.class, l);
	}

	/**
	 * Returns an array of all the <code>PopupMenuListener</code>s added to this
	 * JMenuItem with addPopupMenuListener().
	 *
	 * @return all of the <code>PopupMenuListener</code>s added or an empty
	 *         array if no listeners have been added
	 * @since 1.4
	 */
	public PopupMenuListener[] getPopupMenuListeners() {
		return listenerList.getListeners(PopupMenuListener.class);
	}

	/**
	 * Adds a <code>MenuKeyListener</code> to the popup menu.
	 *
	 * @param l
	 *            the <code>MenuKeyListener</code> to be added
	 * @since 1.5
	 */
	public void addMenuKeyListener(MenuKeyListener l) {
		listenerList.add(MenuKeyListener.class, l);
	}

	/**
	 * Removes a <code>MenuKeyListener</code> from the popup menu.
	 *
	 * @param l
	 *            the <code>MenuKeyListener</code> to be removed
	 * @since 1.5
	 */
	public void removeMenuKeyListener(MenuKeyListener l) {
		listenerList.remove(MenuKeyListener.class, l);
	}

	/**
	 * Returns an array of all the <code>MenuKeyListener</code>s added to this
	 * JPopupMenu with addMenuKeyListener().
	 *
	 * @return all of the <code>MenuKeyListener</code>s added or an empty array
	 *         if no listeners have been added
	 * @since 1.5
	 */
	public MenuKeyListener[] getMenuKeyListeners() {
		return listenerList.getListeners(MenuKeyListener.class);
	}

	/**
	 * Notifies <code>PopupMenuListener</code>s that this popup menu will become
	 * visible.
	 */
	protected void firePopupMenuWillBecomeVisible() {
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

	/**
	 * Notifies <code>PopupMenuListener</code>s that this popup menu will become
	 * invisible.
	 */
	protected void firePopupMenuWillBecomeInvisible() {
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

	/**
	 * Notifies <code>PopupMenuListeners</code> that this popup menu is
	 * cancelled.
	 */
	protected void firePopupMenuCanceled() {
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

	public void pack() {
	}

	/**
	 * Retrieves <code>Popup</code> instance from the <code>PopupMenuUI</code>
	 * that has had <code>show</code> invoked on it. If the current
	 * <code>popup</code> is non-null, this will invoke <code>dispose</code> of
	 * it, and then <code>show</code> the new one.
	 * <p>
	 * This does NOT fire any events, it is up the caller to dispatch the
	 * necessary events.
	 */
	private void showPopup() {
	}

	/**
	 * Sets the location of the upper left corner of the popup menu using x, y
	 * coordinates.
	 * <p>
	 * The method changes the geometry-related data. Therefore, the native
	 * windowing system may ignore such requests, or it may modify the requested
	 * data, so that the {@code JPopupMenu} object is placed and sized in a way
	 * that corresponds closely to the desktop settings.
	 *
	 * @param x
	 *            the x coordinate of the popup's new position in the screen's
	 *            coordinate space
	 * @param y
	 *            the y coordinate of the popup's new position in the screen's
	 *            coordinate space
	 * @beaninfo description: The location of the popup menu.
	 */
	public void setLocation(int x, int y) {
		int oldX = desiredLocationX;
		int oldY = desiredLocationY;

		desiredLocationX = x;
		desiredLocationY = y;
	}

	/**
	 * Returns true if the popup menu is a standalone popup menu rather than the
	 * submenu of a <code>JMenu</code>.
	 *
	 * @return true if this menu is a standalone popup menu, otherwise false
	 */
	private boolean isPopupMenu() {
		return ((invoker != null) && !(invoker instanceof JMenu));
	}

	/**
	 * Returns the component which is the 'invoker' of this popup menu.
	 *
	 * @return the <code>Component</code> in which the popup menu is displayed
	 */
	public Component getInvoker() {
		return this.invoker;
	}

	/**
	 * Returns the component at the specified index.
	 *
	 * @param i
	 *            the index of the component, where 0 is the first
	 * @return the <code>Component</code> at that index
	 * @deprecated replaced by {@link java.awt.Container#getComponent(int)}
	 */
	@Deprecated
	public Component getComponentAtIndex(int i) {
		return getComponent(i);
	}

	/**
	 * Returns the index of the specified component.
	 *
	 * @param c
	 *            the <code>Component</code> to find
	 * @return the index of the component, where 0 is the first; or -1 if the
	 *         component is not found
	 */
	public int getComponentIndex(Component c) {
		int ncomponents = this.getComponentCount();
		Component[] component = this.getComponents();
		for (int i = 0; i < ncomponents; i++) {
			Component comp = component[i];
			if (comp == c)
				return i;
		}
		return -1;
	}

	/**
	 * Sets the currently selected component, This will result in a change to
	 * the selection model.
	 *
	 * @param sel
	 *            the <code>Component</code> to select
	 * @beaninfo description: The selected component on the popup menu expert:
	 *           true hidden: true
	 */
	public void setSelected(Component sel) {
		SingleSelectionModel model = getSelectionModel();
		int index = getComponentIndex(sel);
		model.setSelectedIndex(index);
	}

	/**
	 * Checks whether the border should be painted.
	 *
	 * @return true if the border is painted, false otherwise
	 * @see #setBorderPainted
	 */
	public boolean isBorderPainted() {
		return paintBorder;
	}

	/**
	 * Sets whether the border should be painted.
	 *
	 * @param b
	 *            if true, the border is painted.
	 * @see #isBorderPainted
	 * @beaninfo description: Is the border of the popup menu painted
	 */
	public void setBorderPainted(boolean b) {
		paintBorder = b;
	}

	/**
	 * Returns the margin, in pixels, between the popup menu's border and its
	 * containers.
	 *
	 * @return an <code>Insets</code> object containing the margin values.
	 */
	public Insets getMargin() {
		if (margin == null) {
			return new Insets(0, 0, 0, 0);
		} else {
			return margin;
		}
	}

	/**
	 * Examines the list of menu items to determine whether <code>popup</code>
	 * is a popup menu.
	 *
	 * @param popup
	 *            a <code>JPopupMenu</code>
	 * @return true if <code>popup</code>
	 */
	boolean isSubPopupMenu(JPopupMenu popup) {
		int ncomponents = this.getComponentCount();
		Component[] component = this.getComponents();
		for (int i = 0; i < ncomponents; i++) {
			Component comp = component[i];
			if (comp instanceof JMenu) {
				JMenu menu = (JMenu) comp;
				JPopupMenu subPopup = menu.getPopupMenu();
				if (subPopup == popup)
					return true;
				if (subPopup.isSubPopupMenu(popup))
					return true;
			}
		}
		return false;
	}

	private static Frame getFrame(Component c) {
		Component w = c;

		while (!(w instanceof Frame) && (w != null)) {
			w = w.getParent();
		}
		return (Frame) w;
	}

	/**
	 * Returns a string representation of this <code>JPopupMenu</code>. This
	 * method is intended to be used only for debugging purposes, and the
	 * content and format of the returned string may vary between
	 * implementations. The returned string may be empty but may not be
	 * <code>null</code>.
	 *
	 * @return a string representation of this <code>JPopupMenu</code>.
	 */
	protected String paramString() {
		String labelString = (label != null ? label : "");
		String paintBorderString = (paintBorder ? "true" : "false");
		String marginString = (margin != null ? margin.toString() : "");
		return super.paramString() + ",desiredLocationX=" + desiredLocationX + ",desiredLocationY=" + desiredLocationY
				+ ",label=" + labelString + ",margin=" + marginString + ",paintBorder=" + paintBorderString;
	}

	/**
	 * This method is required to conform to the <code>MenuElement</code>
	 * interface, but it not implemented.
	 * 
	 * @see MenuElement#processMouseEvent(MouseEvent, MenuElement[],
	 *      MenuSelectionManager)
	 */
	public void processMouseEvent(MouseEvent event, MenuElement path[], MenuSelectionManager manager) {
	}

	/**
	 * Processes a key event forwarded from the
	 * <code>MenuSelectionManager</code> and changes the menu selection, if
	 * necessary, by using <code>MenuSelectionManager</code>'s API.
	 * <p>
	 * Note: you do not have to forward the event to sub-components. This is
	 * done automatically by the <code>MenuSelectionManager</code>.
	 *
	 * @param e
	 *            a <code>KeyEvent</code>
	 * @param path
	 *            the <code>MenuElement</code> path array
	 * @param manager
	 *            the <code>MenuSelectionManager</code>
	 */
	public void processKeyEvent(KeyEvent e, MenuElement path[], MenuSelectionManager manager) {
		MenuKeyEvent mke = new MenuKeyEvent(e.getComponent(), e.getID(), e.getWhen(), e.getModifiers(), e.getKeyCode(),
				e.getKeyChar(), path, manager);
		processMenuKeyEvent(mke);

		if (mke.isConsumed()) {
			e.consume();
		}
	}

	/**
	 * Handles a keystroke in a menu.
	 *
	 * @param e
	 *            a <code>MenuKeyEvent</code> object
	 * @since 1.5
	 */
	private void processMenuKeyEvent(MenuKeyEvent e) {
		switch (e.getID()) {
		case KeyEvent.KEY_PRESSED:
			fireMenuKeyPressed(e);
			break;
		case KeyEvent.KEY_RELEASED:
			fireMenuKeyReleased(e);
			break;
		case KeyEvent.KEY_TYPED:
			fireMenuKeyTyped(e);
			break;
		default:
			break;
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type.
	 *
	 * @param event
	 *            a <code>MenuKeyEvent</code>
	 * @see EventListenerList
	 */
	private void fireMenuKeyPressed(MenuKeyEvent event) {
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuKeyListener.class) {
				((MenuKeyListener) listeners[i + 1]).menuKeyPressed(event);
			}
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type.
	 *
	 * @param event
	 *            a <code>MenuKeyEvent</code>
	 * @see EventListenerList
	 */
	private void fireMenuKeyReleased(MenuKeyEvent event) {
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuKeyListener.class) {
				((MenuKeyListener) listeners[i + 1]).menuKeyReleased(event);
			}
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type.
	 *
	 * @param event
	 *            a <code>MenuKeyEvent</code>
	 * @see EventListenerList
	 */
	private void fireMenuKeyTyped(MenuKeyEvent event) {
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuKeyListener.class) {
				((MenuKeyListener) listeners[i + 1]).menuKeyTyped(event);
			}
		}
	}

	/**
	 * Messaged when the menubar selection changes to activate or deactivate
	 * this menu. This implements the <code>javax.swing.MenuElement</code>
	 * interface. Overrides <code>MenuElement.menuSelectionChanged</code>.
	 *
	 * @param isIncluded
	 *            true if this menu is active, false if it is not
	 * @see MenuElement#menuSelectionChanged(boolean)
	 */
	public void menuSelectionChanged(boolean isIncluded) {
		if (DEBUG) {
			System.out.println("In JPopupMenu.menuSelectionChanged " + isIncluded);
		}
		if (invoker instanceof JMenu) {
			JMenu m = (JMenu) invoker;
			if (isIncluded)
				m.setPopupMenuVisible(true);
			else
				m.setPopupMenuVisible(false);
		}
		if (isPopupMenu() && !isIncluded)
			setVisible(false);
	}

	/**
	 * Returns an array of <code>MenuElement</code>s containing the submenu for
	 * this menu component. It will only return items conforming to the
	 * <code>JMenuElement</code> interface. If popup menu is <code>null</code>
	 * returns an empty array. This method is required to conform to the
	 * <code>MenuElement</code> interface.
	 *
	 * @return an array of <code>MenuElement</code> objects
	 * @see MenuElement#getSubElements
	 */
	public MenuElement[] getSubElements() {
		MenuElement result[];
		Vector<MenuElement> tmp = new Vector<MenuElement>();
		int c = getComponentCount();
		int i;
		Component m;

		for (i = 0; i < c; i++) {
			m = getComponent(i);
			if (m instanceof MenuElement)
				tmp.addElement((MenuElement) any(m));
		}

		result = new MenuElement[tmp.size()];
		for (i = 0, c = tmp.size(); i < c; i++)
			result[i] = tmp.elementAt(i);
		return result;
	}

	/**
	 * Returns this <code>JPopupMenu</code> component.
	 * 
	 * @return this <code>JPopupMenu</code> object
	 * @see MenuElement#getComponent
	 */
	public Component getComponent() {
		return this;
	}

	/**
	 * A popup menu-specific separator.
	 */
	static public class Separator extends JSeparator {
		public Separator() {
			super(SwingConstants.HORIZONTAL);
		}

		/**
		 * Returns the name of the L&amp;F class that renders this component.
		 *
		 * @return the string "PopupMenuSeparatorUI"
		 * @see JComponent#getUIClassID
		 * @see UIDefaults#getUI
		 */
		public String getUIClassID() {
			return "PopupMenuSeparatorUI";

		}
	}

}
