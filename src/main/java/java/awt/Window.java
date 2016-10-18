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
import static jsweet.dom.Globals.window;
import static jsweet.util.Globals.any;
import static jsweet.util.Globals.array;

import java.awt.event.WindowEvent;
import java.awt.event.WindowFocusListener;
import java.awt.event.WindowListener;
import java.awt.event.WindowStateListener;
import java.awt.geom.Path2D;
import java.beans.PropertyChangeListener;
import java.util.ArrayList;
import java.util.EventListener;

import jsweet.dom.HTMLDivElement;
import jsweet.lang.Array;
import jsweet.util.StringTypes;

public class Window extends Container {

	public HTMLDivElement getElement() {
		return (HTMLDivElement) htmlElement;
	}

	@Override
	public void createHTML() {
		htmlElement = document.createElement(StringTypes.div);
		htmlElement.style.display = "none";
		window.addEventListener(StringTypes.load, (e) -> {
			System.out.println("window onload hook");
			if (document.body == null) {
				throw new Error("no body found");
			}
			document.body.appendChild(htmlElement);
			doPaintInternal();
			return null;
		});
	}

	@Override
	public void initHTML() {
		super.initHTML();
		if (width == null) {
			htmlElement.style.width = "100%";
		}
		if (height == null) {
			htmlElement.style.height = "100%";
		}
	}

	public static enum Type {
		/**
		 * Represents a <i>normal</i> window.
		 *
		 * This is the default type for objects of the {@code Window} class or
		 * its descendants. Use this type for regular top-level windows.
		 */
		NORMAL,

		/**
		 * Represents a <i>utility</i> window.
		 *
		 * A utility window is usually a small window such as a toolbar or a
		 * palette. The native system may render the window with smaller
		 * title-bar if the window is either a {@code Frame} or a {@code
		 * Dialog} object, and if it has its decorations enabled.
		 */
		UTILITY,

		/**
		 * Represents a <i>popup</i> window.
		 *
		 * A popup window is a temporary window such as a drop-down menu or a
		 * tooltip. On some platforms, windows of that type may be forcibly made
		 * undecorated even if they are instances of the {@code Frame} or
		 * {@code Dialog} class, and have decorations enabled.
		 */
		POPUP
	}

	/**
	 * This represents the warning message that is to be displayed in a non
	 * secure window. ie : a window that has a security manager installed that
	 * denies {@code AWTPermission("showWindowWithoutWarningBanner")}. This
	 * message can be displayed anywhere in the window.
	 *
	 * @serial
	 * @see #getWarningString
	 */
	String warningString;

	/**
	 * {@code icons} is the graphical way we can represent the frames and
	 * dialogs. {@code Window} can't display icon but it's being inherited by
	 * owned {@code Dialog}s.
	 *
	 * @serial
	 * @see #getIconImages
	 * @see #setIconImages
	 */
	transient java.util.List<Image> icons;

	static final int OPENED = 0x01;

	protected int state;

	private boolean alwaysOnTop;

	private boolean focusableWindowState = true;

	private volatile boolean autoRequestFocus = true;

	transient boolean isInShow = false;

	private float opacity = 1.0f;

	private Shape shape = null;

	private static final String base = "win";
	private static int nameCounter = 0;

	transient boolean isTrayIconWindow = false;

	Window() throws HeadlessException {
	}

	public Window(Frame owner) {
		ownedInit(owner);
	}

	public Window(Window owner) {
		ownedInit(owner);
	}

	private void ownedInit(Window owner) {
		this.parent = owner;
		if (owner != null) {
			if (owner.isAlwaysOnTop()) {
				try {
					setAlwaysOnTop(true);
				} catch (SecurityException ignore) {
				}
			}
		}
	}

	String constructComponentName() {
		synchronized (Window.class) {
			return base + nameCounter++;
		}
	}

	public java.util.List<Image> getIconImages() {
		java.util.List<Image> icons = this.icons;
		if (icons == null || icons.size() == 0) {
			return new ArrayList<Image>();
		}
		return new ArrayList<Image>(icons);
	}

	public synchronized void setIconImages(java.util.List<? extends Image> icons) {
		this.icons = (icons == null) ? new ArrayList<Image>() : new ArrayList<Image>(icons);
		// Always send a property change event
		firePropertyChange("iconImage", null, null);
	}

	public void setIconImage(Image image) {
		ArrayList<Image> imageList = new ArrayList<Image>();
		if (image != null) {
			imageList.add(image);
		}
		setIconImages(imageList);
	}

	public void pack() {
	}

	public void setMinimumSize(Dimension minimumSize) {
		super.setMinimumSize(minimumSize);
		Dimension size = getSize();
		if (size.width < minimumSize.width || size.height < minimumSize.height) {
			int nw = Math.max(width, minimumSize.width);
			int nh = Math.max(height, minimumSize.height);
			setSize(nw, nh);
		}
	}

	@Override
	public void setVisible(boolean visible) {
		this.visible = visible;
		if (htmlElement != null) {
			htmlElement.style.display = visible ? "block" : "none";
		}
	}

	public void dispose() {
	}

	public void toFront() {
	}

	public void toBack() {
	}

	public Toolkit getToolkit() {
		return Toolkit.getDefaultToolkit();
	}

	public final String getWarningString() {
		return warningString;
	}

	// public Locale getLocale() {
	// if (this.locale == null) {
	// return Locale.getDefault();
	// }
	// return this.locale;
	// }

	public void setCursor(Cursor cursor) {
		if (cursor == null) {
			cursor = Cursor.getPredefinedCursor(Cursor.DEFAULT_CURSOR);
		}
		super.setCursor(cursor);
	}

	Array<WindowListener> windowListeners = new Array<>();
	Array<WindowStateListener> windowStateListeners = new Array<>();
	Array<WindowFocusListener> windowFocusListeners = new Array<>();

	public synchronized void addWindowListener(WindowListener l) {
		if (l == null) {
			return;
		}
		windowListeners.push(l);
	}

	public synchronized void addWindowStateListener(WindowStateListener l) {
		if (l == null) {
			return;
		}
		windowStateListeners.push(l);
	}

	public synchronized void addWindowFocusListener(WindowFocusListener l) {
		if (l == null) {
			return;
		}
		windowFocusListeners.push(l);
	}

	public synchronized void removeWindowListener(WindowListener l) {
		if (l == null) {
			return;
		}
		windowListeners.splice(windowListeners.indexOf(l), 1);
	}

	public synchronized void removeWindowStateListener(WindowStateListener l) {
		if (l == null) {
			return;
		}
		windowStateListeners.splice(windowStateListeners.indexOf(l), 1);
	}

	public synchronized void removeWindowFocusListener(WindowFocusListener l) {
		if (l == null) {
			return;
		}
		windowFocusListeners.splice(windowFocusListeners.indexOf(l), 1);
	}

	public synchronized WindowListener[] getWindowListeners() {
		return array(windowListeners);
	}

	public synchronized WindowFocusListener[] getWindowFocusListeners() {
		return array(windowFocusListeners);
	}

	public synchronized WindowStateListener[] getWindowStateListeners() {
		return array(windowStateListeners);
	}

	public <T extends EventListener> T[] getListeners(Class<T> listenerType) {
		if (listenerType == WindowFocusListener.class) {
			return any(windowFocusListeners);
		} else if (listenerType == WindowStateListener.class) {
			return any(windowStateListeners);
		} else if (listenerType == WindowListener.class) {
			return any(windowListeners);
			// } else {
			// return super.getListeners(listenerType);
		}
		return null;
	}

	protected void processWindowEvent(WindowEvent e) {
		for (WindowListener listener : windowListeners) {
			switch (e.getID()) {
			case WindowEvent.WINDOW_OPENED:
				listener.windowOpened(e);
				break;
			case WindowEvent.WINDOW_CLOSING:
				listener.windowClosing(e);
				break;
			case WindowEvent.WINDOW_CLOSED:
				listener.windowClosed(e);
				break;
			case WindowEvent.WINDOW_ICONIFIED:
				listener.windowIconified(e);
				break;
			case WindowEvent.WINDOW_DEICONIFIED:
				listener.windowDeiconified(e);
				break;
			case WindowEvent.WINDOW_ACTIVATED:
				listener.windowActivated(e);
				break;
			case WindowEvent.WINDOW_DEACTIVATED:
				listener.windowDeactivated(e);
				break;
			default:
				break;
			}
		}
	}

	protected void processWindowFocusEvent(WindowEvent e) {
		for (WindowFocusListener listener : windowFocusListeners) {
			switch (e.getID()) {
			case WindowEvent.WINDOW_GAINED_FOCUS:
				listener.windowGainedFocus(e);
				break;
			case WindowEvent.WINDOW_LOST_FOCUS:
				listener.windowLostFocus(e);
				break;
			default:
				break;
			}
		}
	}

	protected void processWindowStateEvent(WindowEvent e) {
		for (WindowStateListener listener : windowStateListeners) {
			switch (e.getID()) {
			case WindowEvent.WINDOW_STATE_CHANGED:
				listener.windowStateChanged(e);
				break;
			default:
				break;
			}
		}
	}

	public final void setAlwaysOnTop(boolean alwaysOnTop) throws SecurityException {
	}

	public boolean isAlwaysOnTopSupported() {
		return false;
	}

	public final boolean isAlwaysOnTop() {
		return alwaysOnTop;
	}

	public boolean isActive() {
		return true;
	}

	public boolean isFocused() {
		return true;
	}

	public final void setFocusCycleRoot(boolean focusCycleRoot) {
	}

	public final boolean isFocusCycleRoot() {
		return true;
	}

	public final Container getFocusCycleRootAncestor() {
		return null;
	}

	public final boolean isFocusableWindow() {
		return false;
	}

	public boolean getFocusableWindowState() {
		return focusableWindowState;
	}

	public void setFocusableWindowState(boolean focusableWindowState) {
		this.focusableWindowState = focusableWindowState;
	}

	public void setAutoRequestFocus(boolean autoRequestFocus) {
		this.autoRequestFocus = autoRequestFocus;
	}

	public boolean isAutoRequestFocus() {
		return autoRequestFocus;
	}

	public void addPropertyChangeListener(PropertyChangeListener listener) {
		super.addPropertyChangeListener(listener);
	}

	public void addPropertyChangeListener(String propertyName, PropertyChangeListener listener) {
		super.addPropertyChangeListener(propertyName, listener);
	}

	public boolean isShowing() {
		return visible;
	}

	/**
	 * Window type.
	 *
	 * Synchronization: ObjectLock
	 */
	private Type type = Type.NORMAL;

	public void setType(Type type) {
		this.type = type;
	}

	public Type getType() {
		return type;
	}

	// ******************** SHAPES & TRANSPARENCY CODE ********************

	public float getOpacity() {
		return opacity;
	}

	public void setOpacity(float opacity) {
		if (opacity < 0.0f || opacity > 1.0f) {
			throw new IllegalArgumentException("The value of opacity should be in the range [0.0f .. 1.0f].");
		}
		this.opacity = opacity;
	}

	public Shape getShape() {
		return shape == null ? null : new Path2D.Float(shape);
	}

	public void setShape(Shape shape) {
		this.shape = (shape == null) ? null : new Path2D.Float(shape);
	}

} // class Window
