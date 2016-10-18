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

import java.awt.Component;
import java.awt.Point;
import java.awt.event.KeyEvent;
import java.io.Serializable;

import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.event.EventListenerList;
import javax.swing.event.MenuEvent;
import javax.swing.event.MenuListener;

/**
 * An implementation of a menu -- a popup window containing
 * <code>JMenuItem</code>s that is displayed when the user selects an item on
 * the <code>JMenuBar</code>. In addition to <code>JMenuItem</code>s, a
 * <code>JMenu</code> can also contain <code>JSeparator</code>s.
 * <p>
 * In essence, a menu is a button with an associated <code>JPopupMenu</code>.
 * When the "button" is pressed, the <code>JPopupMenu</code> appears. If the
 * "button" is on the <code>JMenuBar</code>, the menu is a top-level window. If
 * the "button" is another menu item, then the <code>JPopupMenu</code> is
 * "pull-right" menu.
 * <p>
 * Menus can be configured, and to some degree controlled, by
 * <code><a href="Action.html">Action</a></code>s. Using an <code>Action</code>
 * with a menu has many benefits beyond directly configuring a menu. Refer to
 * <a href="Action.html#buttonActions"> Swing Components Supporting
 * <code>Action</code></a> for more details, and you can find more information
 * in
 * <a href="http://docs.oracle.com/javase/tutorial/uiswing/misc/action.html">How
 * to Use Actions</a>, a section in <em>The Java Tutorial</em>.
 * <p>
 * For information and examples of using menus see <a href=
 * "http://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to
 * Use Menus</a>, a section in <em>The Java Tutorial.</em>
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
 * @beaninfo attribute: isContainer true description: A popup window containing
 *           menu items displayed in a menu bar.
 *
 * @author Georges Saab
 * @author David Karlton
 * @author Arnaud Weber
 * @see JMenuItem
 * @see JSeparator
 * @see JMenuBar
 * @see JPopupMenu
 */
@SuppressWarnings("serial")
public class JMenu extends JMenuItem implements MenuElement {
	/**
	 * @see #getUIClassID
	 * @see #readObject
	 */
	private static final String uiClassID = "MenuUI";

	/*
	 * The popup menu portion of the menu.
	 */
	private JPopupMenu popupMenu;

	/*
	 * The button's model listeners. Default is <code>null</code>.
	 */
	private ChangeListener menuChangeListener = null;

	/*
	 * Only one <code>MenuEvent</code> is needed for each menu since the event's
	 * only state is the source property. The source of events generated is
	 * always "this". Default is <code>null</code>.
	 */
	private MenuEvent menuEvent = null;

	/*
	 * Used by the look and feel (L&F) code to handle implementation specific
	 * menu behaviors.
	 */
	private int delay;

	/* Diagnostic aids -- should be false for production builds. */
	private static final boolean DEBUG = false; // show bad params, misc.

	/**
	 * Constructs a new <code>JMenu</code> with no text.
	 */
	public JMenu() {
		this("");
	}

	/**
	 * Constructs a new <code>JMenu</code> with the supplied string as its text.
	 *
	 * @param s
	 *            the text for the menu label
	 */
	public JMenu(String s) {
		super(s);
	}

	/**
	 * Constructs a menu whose properties are taken from the <code>Action</code>
	 * supplied.
	 * 
	 * @param a
	 *            an <code>Action</code>
	 *
	 * @since 1.3
	 */
	public JMenu(Action a) {
		this();
		setAction(a);
	}

	/**
	 * Constructs a new <code>JMenu</code> with the supplied string as its text
	 * and specified as a tear-off menu or not.
	 *
	 * @param s
	 *            the text for the menu label
	 * @param b
	 *            can the menu be torn off (not yet implemented)
	 */
	public JMenu(String s, boolean b) {
		this(s);
	}

	/**
	 * Overriden to do nothing. We want JMenu to be focusable, but
	 * <code>JMenuItem</code> doesn't want to be, thus we override this do
	 * nothing. We don't invoke <code>setFocusable(true)</code> after super's
	 * constructor has completed as this has the side effect that
	 * <code>JMenu</code> will be considered traversable via the keyboard, which
	 * we don't want. Making a Component traversable by the keyboard after
	 * invoking <code>setFocusable(true)</code> is OK, as
	 * <code>setFocusable</code> is new API and is speced as such, but
	 * internally we don't want to use it like this else we change the keyboard
	 * traversability.
	 */
	void initFocusability() {
	}

	/**
	 * Returns the name of the L&amp;F class that renders this component.
	 *
	 * @return the string "MenuUI"
	 * @see JComponent#getUIClassID
	 * @see UIDefaults#getUI
	 */
	public String getUIClassID() {
		return uiClassID;
	}

	// public void repaint(long tm, int x, int y, int width, int height) {
	// Thread.currentThread().dumpStack();
	// super.repaint(tm,x,y,width,height);
	// }

	/**
	 * Sets the data model for the "menu button" -- the label that the user
	 * clicks to open or close the menu.
	 *
	 * @param newModel
	 *            the <code>ButtonModel</code>
	 * @see #getModel
	 * @beaninfo description: The menu's model bound: true expert: true hidden:
	 *           true
	 */
	public void setModel(ButtonModel newModel) {
		ButtonModel oldModel = getModel();

		super.setModel(newModel);

		if (oldModel != null && menuChangeListener != null) {
			oldModel.removeChangeListener(menuChangeListener);
			menuChangeListener = null;
		}

		model = newModel;

		if (newModel != null) {
			menuChangeListener = createMenuChangeListener();
			newModel.addChangeListener(menuChangeListener);
		}
	}

	/**
	 * Returns true if the menu is currently selected (highlighted).
	 *
	 * @return true if the menu is selected, else false
	 */
	public boolean isSelected() {
		return getModel().isSelected();
	}

	/**
	 * Sets the selection status of the menu.
	 *
	 * @param b
	 *            true to select (highlight) the menu; false to de-select the
	 *            menu
	 * @beaninfo description: When the menu is selected, its popup child is
	 *           shown. expert: true hidden: true
	 */
	public void setSelected(boolean b) {
		ButtonModel model = getModel();
		if (b != model.isSelected()) {
			getModel().setSelected(b);
		}
	}

	/**
	 * Returns true if the menu's popup window is visible.
	 *
	 * @return true if the menu is visible, else false
	 */
	public boolean isPopupMenuVisible() {
		ensurePopupMenuCreated();
		return popupMenu.isVisible();
	}

	/**
	 * Sets the visibility of the menu's popup. If the menu is not enabled, this
	 * method will have no effect.
	 *
	 * @param b
	 *            a boolean value -- true to make the menu visible, false to
	 *            hide it
	 * @beaninfo description: The popup menu's visibility expert: true hidden:
	 *           true
	 */
	public void setPopupMenuVisible(boolean b) {
		if (DEBUG) {
			System.out.println("in JMenu.setPopupMenuVisible " + b);
			// Thread.dumpStack();
		}

		// TODO

		// boolean isVisible = isPopupMenuVisible();
		// if (b != isVisible && (isEnabled() || !b)) {
		// ensurePopupMenuCreated();
		// if ((b == true) && isShowing()) {
		// // Set location of popupMenu (pulldown or pullright)
		// Point p = getCustomMenuLocation();
		// if (p == null) {
		// p = getPopupMenuOrigin();
		// }
		// getPopupMenu().show(this, p.x, p.y);
		// } else {
		// getPopupMenu().setVisible(false);
		// }
		// }
	}

	/**
	 * Computes the origin for the <code>JMenu</code>'s popup menu. This method
	 * uses Look and Feel properties named <code>Menu.menuPopupOffsetX</code>,
	 * <code>Menu.menuPopupOffsetY</code>, <code>Menu.submenuPopupOffsetX</code>
	 * , and <code>Menu.submenuPopupOffsetY</code> to adjust the exact location
	 * of popup.
	 *
	 * @return a <code>Point</code> in the coordinate space of the menu which
	 *         should be used as the origin of the <code>JMenu</code>'s popup
	 *         menu
	 *
	 * @since 1.3
	 */
	protected Point getPopupMenuOrigin() {
		int x = 0;
		int y = 0;
		return new Point(x, y);
	}

	/**
	 * Returns the suggested delay, in milliseconds, before submenus are popped
	 * up or down. Each look and feel (L&amp;F) may determine its own policy for
	 * observing the <code>delay</code> property. In most cases, the delay is
	 * not observed for top level menus or while dragging. The default for
	 * <code>delay</code> is 0. This method is a property of the look and feel
	 * code and is used to manage the idiosyncrasies of the various UI
	 * implementations.
	 *
	 *
	 * @return the <code>delay</code> property
	 */
	public int getDelay() {
		return delay;
	}

	/**
	 * Sets the suggested delay before the menu's <code>PopupMenu</code> is
	 * popped up or down. Each look and feel (L&amp;F) may determine it's own
	 * policy for observing the delay property. In most cases, the delay is not
	 * observed for top level menus or while dragging. This method is a property
	 * of the look and feel code and is used to manage the idiosyncrasies of the
	 * various UI implementations.
	 *
	 * @param d
	 *            the number of milliseconds to delay
	 * @exception IllegalArgumentException
	 *                if <code>d</code> is less than 0
	 * @beaninfo description: The delay between menu selection and making the
	 *           popup menu visible expert: true
	 */
	public void setDelay(int d) {
		if (d < 0)
			throw new IllegalArgumentException("Delay must be a positive integer");

		delay = d;
	}

	private void ensurePopupMenuCreated() {
	}

	/**
	 * Sets the location of the popup component.
	 *
	 * @param x
	 *            the x coordinate of the popup's new position
	 * @param y
	 *            the y coordinate of the popup's new position
	 */
	public void setMenuLocation(int x, int y) {
		if (popupMenu != null)
			popupMenu.setLocation(x, y);
	}

	/**
	 * Appends a menu item to the end of this menu. Returns the menu item added.
	 *
	 * @param menuItem
	 *            the <code>JMenuitem</code> to be added
	 * @return the <code>JMenuItem</code> added
	 */
	public JMenuItem add(JMenuItem menuItem) {
		ensurePopupMenuCreated();
		return popupMenu.add(menuItem);
	}

	/**
	 * Appends a component to the end of this menu. Returns the component added.
	 *
	 * @param c
	 *            the <code>Component</code> to add
	 * @return the <code>Component</code> added
	 */
	public Component add(Component c) {
		ensurePopupMenuCreated();
		popupMenu.add(c);
		return c;
	}

	/**
	 * Adds the specified component to this container at the given position. If
	 * <code>index</code> equals -1, the component will be appended to the end.
	 * 
	 * @param c
	 *            the <code>Component</code> to add
	 * @param index
	 *            the position at which to insert the component
	 * @return the <code>Component</code> added
	 * @see #remove
	 * @see java.awt.Container#add(Component, int)
	 */
	public Component add(Component c, int index) {
		ensurePopupMenuCreated();
		popupMenu.add(c, index);
		return c;
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
	 * Creates a new menu item attached to the specified <code>Action</code>
	 * object and appends it to the end of this menu.
	 *
	 * @param a
	 *            the <code>Action</code> for the menu item to be added
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
	 * <code>Action</code>s added to the <code>JMenu</code>.
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
		};
		return mi;
	}

	/**
	 * Appends a new separator to the end of the menu.
	 */
	public void addSeparator() {
		ensurePopupMenuCreated();
		popupMenu.addSeparator();
	}

	/**
	 * Inserts a new menu item with the specified text at a given position.
	 *
	 * @param s
	 *            the text for the menu item to add
	 * @param pos
	 *            an integer specifying the position at which to add the new
	 *            menu item
	 * @exception IllegalArgumentException
	 *                when the value of <code>pos</code> &lt; 0
	 */
	public void insert(String s, int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}

		ensurePopupMenuCreated();
		popupMenu.insert(new JMenuItem(s), pos);
	}

	/**
	 * Inserts the specified <code>JMenuitem</code> at a given position.
	 *
	 * @param mi
	 *            the <code>JMenuitem</code> to add
	 * @param pos
	 *            an integer specifying the position at which to add the new
	 *            <code>JMenuitem</code>
	 * @return the new menu item
	 * @exception IllegalArgumentException
	 *                if the value of <code>pos</code> &lt; 0
	 */
	public JMenuItem insert(JMenuItem mi, int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}
		ensurePopupMenuCreated();
		popupMenu.insert(mi, pos);
		return mi;
	}

	/**
	 * Inserts a new menu item attached to the specified <code>Action</code>
	 * object at a given position.
	 *
	 * @param a
	 *            the <code>Action</code> object for the menu item to add
	 * @param pos
	 *            an integer specifying the position at which to add the new
	 *            menu item
	 * @exception IllegalArgumentException
	 *                if the value of <code>pos</code> &lt; 0
	 */
	public JMenuItem insert(Action a, int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}

		ensurePopupMenuCreated();
		JMenuItem mi = new JMenuItem(a);
		popupMenu.insert(mi, pos);
		return mi;
	}

	/**
	 * Inserts a separator at the specified position.
	 *
	 * @param index
	 *            an integer specifying the position at which to insert the menu
	 *            separator
	 * @exception IllegalArgumentException
	 *                if the value of <code>index</code> &lt; 0
	 */
	public void insertSeparator(int index) {
		if (index < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}

		ensurePopupMenuCreated();
		popupMenu.insert(new JPopupMenu.Separator(), index);
	}

	/**
	 * Returns the <code>JMenuItem</code> at the specified position. If the
	 * component at <code>pos</code> is not a menu item, <code>null</code> is
	 * returned. This method is included for AWT compatibility.
	 *
	 * @param pos
	 *            an integer specifying the position
	 * @exception IllegalArgumentException
	 *                if the value of <code>pos</code> &lt; 0
	 * @return the menu item at the specified position; or <code>null</code> if
	 *         the item as the specified position is not a menu item
	 */
	public JMenuItem getItem(int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}

		Component c = getMenuComponent(pos);
		if (c instanceof JMenuItem) {
			JMenuItem mi = (JMenuItem) c;
			return mi;
		}

		// 4173633
		return null;
	}

	/**
	 * Returns the number of items on the menu, including separators. This
	 * method is included for AWT compatibility.
	 *
	 * @return an integer equal to the number of items on the menu
	 * @see #getMenuComponentCount
	 */
	public int getItemCount() {
		return getMenuComponentCount();
	}

	/**
	 * Returns true if the menu can be torn off. This method is not yet
	 * implemented.
	 *
	 * @return true if the menu can be torn off, else false
	 * @exception Error
	 *                if invoked -- this method is not yet implemented
	 */
	public boolean isTearOff() {
		throw new Error("boolean isTearOff() {} not yet implemented");
	}

	/**
	 * Removes the specified menu item from this menu. If there is no popup
	 * menu, this method will have no effect.
	 *
	 * @param item
	 *            the <code>JMenuItem</code> to be removed from the menu
	 */
	public void remove(JMenuItem item) {
		if (popupMenu != null)
			popupMenu.remove(item);
	}

	/**
	 * Removes the menu item at the specified index from this menu.
	 *
	 * @param pos
	 *            the position of the item to be removed
	 * @exception IllegalArgumentException
	 *                if the value of <code>pos</code> &lt; 0, or if
	 *                <code>pos</code> is greater than the number of menu items
	 */
	public void remove(int pos) {
		if (pos < 0) {
			throw new IllegalArgumentException("index less than zero.");
		}
		if (pos > getItemCount()) {
			throw new IllegalArgumentException("index greater than the number of items.");
		}
		if (popupMenu != null)
			popupMenu.remove(pos);
	}

	/**
	 * Removes the component <code>c</code> from this menu.
	 *
	 * @param c
	 *            the component to be removed
	 */
	public void remove(Component c) {
		if (popupMenu != null)
			popupMenu.remove(c);
	}

	/**
	 * Removes all menu items from this menu.
	 */
	public void removeAll() {
		if (popupMenu != null)
			popupMenu.removeAll();
	}

	/**
	 * Returns the number of components on the menu.
	 *
	 * @return an integer containing the number of components on the menu
	 */
	public int getMenuComponentCount() {
		int componentCount = 0;
		if (popupMenu != null)
			componentCount = popupMenu.getComponentCount();
		return componentCount;
	}

	/**
	 * Returns the component at position <code>n</code>.
	 *
	 * @param n
	 *            the position of the component to be returned
	 * @return the component requested, or <code>null</code> if there is no
	 *         popup menu
	 *
	 */
	public Component getMenuComponent(int n) {
		if (popupMenu != null)
			return popupMenu.getComponent(n);

		return null;
	}

	/**
	 * Returns an array of <code>Component</code>s of the menu's subcomponents.
	 * Note that this returns all <code>Component</code>s in the popup menu,
	 * including separators.
	 *
	 * @return an array of <code>Component</code>s or an empty array if there is
	 *         no popup menu
	 */
	public Component[] getMenuComponents() {
		if (popupMenu != null)
			return popupMenu.getComponents();

		return new Component[0];
	}

	/**
	 * Returns true if the menu is a 'top-level menu', that is, if it is the
	 * direct child of a menubar.
	 *
	 * @return true if the menu is activated from the menu bar; false if the
	 *         menu is activated from a menu item on another menu
	 */
	public boolean isTopLevelMenu() {
		return false;

	}

	/**
	 * Returns true if the specified component exists in the submenu hierarchy.
	 *
	 * @param c
	 *            the <code>Component</code> to be tested
	 * @return true if the <code>Component</code> exists, false otherwise
	 */
	public boolean isMenuComponent(Component c) {
		// Are we in the MenuItem part of the menu
		if (c == this)
			return true;
		// Are we in the PopupMenu?
		if (c instanceof JPopupMenu) {
			JPopupMenu comp = (JPopupMenu) c;
			if (comp == this.getPopupMenu())
				return true;
		}
		// Are we in a Component on the PopupMenu
		int ncomponents = this.getMenuComponentCount();
		Component[] component = this.getMenuComponents();
		for (int i = 0; i < ncomponents; i++) {
			Component comp2 = component[i];
			// Are we in the current component?
			if (comp2 == c)
				return true;
			// Hmmm, what about Non-menu containers?

			// Recursive call for the Menu case
			if (comp2 instanceof JMenu) {
				JMenu subMenu = (JMenu) comp2;
				if (subMenu.isMenuComponent(c))
					return true;
			}
		}
		return false;
	}

	/**
	 * Returns the popupmenu associated with this menu. If there is no
	 * popupmenu, it will create one.
	 */
	public JPopupMenu getPopupMenu() {
		ensurePopupMenuCreated();
		return popupMenu;
	}

	/**
	 * Adds a listener for menu events.
	 *
	 * @param l
	 *            the listener to be added
	 */
	public void addMenuListener(MenuListener l) {
		listenerList.add(MenuListener.class, l);
	}

	/**
	 * Removes a listener for menu events.
	 *
	 * @param l
	 *            the listener to be removed
	 */
	public void removeMenuListener(MenuListener l) {
		listenerList.remove(MenuListener.class, l);
	}

	/**
	 * Returns an array of all the <code>MenuListener</code>s added to this
	 * JMenu with addMenuListener().
	 *
	 * @return all of the <code>MenuListener</code>s added or an empty array if
	 *         no listeners have been added
	 * @since 1.4
	 */
	public MenuListener[] getMenuListeners() {
		return listenerList.getListeners(MenuListener.class);
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is created lazily.
	 *
	 * @exception Error
	 *                if there is a <code>null</code> listener
	 * @see EventListenerList
	 */
	protected void fireMenuSelected() {
		if (DEBUG) {
			System.out.println("In JMenu.fireMenuSelected");
		}
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuListener.class) {
				if (listeners[i + 1] == null) {
					throw new Error(getText() + " has a NULL Listener!! " + i);
				} else {
					// Lazily create the event:
					if (menuEvent == null)
						menuEvent = new MenuEvent(this);
					((MenuListener) listeners[i + 1]).menuSelected(menuEvent);
				}
			}
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is created lazily.
	 *
	 * @exception Error
	 *                if there is a <code>null</code> listener
	 * @see EventListenerList
	 */
	protected void fireMenuDeselected() {
		if (DEBUG) {
			System.out.println("In JMenu.fireMenuDeselected");
		}
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuListener.class) {
				if (listeners[i + 1] == null) {
					throw new Error(getText() + " has a NULL Listener!! " + i);
				} else {
					// Lazily create the event:
					if (menuEvent == null)
						menuEvent = new MenuEvent(this);
					((MenuListener) listeners[i + 1]).menuDeselected(menuEvent);
				}
			}
		}
	}

	/**
	 * Notifies all listeners that have registered interest for notification on
	 * this event type. The event instance is created lazily.
	 *
	 * @exception Error
	 *                if there is a <code>null</code> listener
	 * @see EventListenerList
	 */
	protected void fireMenuCanceled() {
		if (DEBUG) {
			System.out.println("In JMenu.fireMenuCanceled");
		}
		// Guaranteed to return a non-null array
		Object[] listeners = listenerList.getListenerList();
		// Process the listeners last to first, notifying
		// those that are interested in this event
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == MenuListener.class) {
				if (listeners[i + 1] == null) {
					throw new Error(getText() + " has a NULL Listener!! " + i);
				} else {
					// Lazily create the event:
					if (menuEvent == null)
						menuEvent = new MenuEvent(this);
					((MenuListener) listeners[i + 1]).menuCanceled(menuEvent);
				}
			}
		}
	}

	// Overriden to do nothing, JMenu doesn't support an accelerator
	void configureAcceleratorFromAction(Action a) {
	}

	@SuppressWarnings("serial")
	class MenuChangeListener implements ChangeListener, Serializable {
		boolean isSelected = false;

		public void stateChanged(ChangeEvent e) {
			ButtonModel model = (ButtonModel) e.getSource();
			boolean modelSelected = model.isSelected();

			if (modelSelected != isSelected) {
				if (modelSelected == true) {
					fireMenuSelected();
				} else {
					fireMenuDeselected();
				}
				isSelected = modelSelected;
			}
		}
	}

	private ChangeListener createMenuChangeListener() {
		return new MenuChangeListener();
	}

	/**
	 * Messaged when the menubar selection changes to activate or deactivate
	 * this menu. Overrides <code>JMenuItem.menuSelectionChanged</code>.
	 *
	 * @param isIncluded
	 *            true if this menu is active, false if it is not
	 */
	public void menuSelectionChanged(boolean isIncluded) {
		if (DEBUG) {
			System.out.println("In JMenu.menuSelectionChanged to " + isIncluded);
		}
		setSelected(isIncluded);
	}

	/**
	 * Returns an array of <code>MenuElement</code>s containing the submenu for
	 * this menu component. If popup menu is <code>null</code> returns an empty
	 * array. This method is required to conform to the <code>MenuElement</code>
	 * interface. Note that since <code>JSeparator</code>s do not conform to the
	 * <code>MenuElement</code> interface, this array will only contain
	 * <code>JMenuItem</code>s.
	 *
	 * @return an array of <code>MenuElement</code> objects
	 */
	public MenuElement[] getSubElements() {
		if (popupMenu == null)
			return new MenuElement[0];
		else {
			MenuElement result[] = new MenuElement[1];
			result[0] = popupMenu;
			return result;
		}
	}

	// implements javax.swing.MenuElement
	/**
	 * Returns the <code>java.awt.Component</code> used to paint this
	 * <code>MenuElement</code>. The returned component is used to convert
	 * events and detect if an event is inside a menu component.
	 */
	public Component getComponent() {
		return this;
	}

	/**
	 * Processes key stroke events such as mnemonics and accelerators.
	 *
	 * @param evt
	 *            the key event to be processed
	 */
	protected void processKeyEvent(KeyEvent evt) {
	}

	/**
	 * Programmatically performs a "click". This overrides the method
	 * <code>AbstractButton.doClick</code> in order to make the menu pop up.
	 * 
	 * @param pressTime
	 *            indicates the number of milliseconds the button was pressed
	 *            for
	 */
	public void doClick(int pressTime) {
	}

	/**
	 * Returns a string representation of this <code>JMenu</code>. This method
	 * is intended to be used only for debugging purposes, and the content and
	 * format of the returned string may vary between implementations. The
	 * returned string may be empty but may not be <code>null</code>.
	 *
	 * @return a string representation of this JMenu.
	 */
	protected String paramString() {
		return super.paramString();
	}

}
