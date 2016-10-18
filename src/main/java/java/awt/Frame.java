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

import java.util.Vector;

public class Frame extends Window {

	/*
	 * Note: These are being obsoleted; programs should use the Cursor class
	 * variables going forward. See Cursor and Component.setCursor.
	 */

	/**
	 * @deprecated replaced by <code>Cursor.DEFAULT_CURSOR</code>.
	 */
	@Deprecated
	public static final int DEFAULT_CURSOR = Cursor.DEFAULT_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.CROSSHAIR_CURSOR</code>.
	 */
	@Deprecated
	public static final int CROSSHAIR_CURSOR = Cursor.CROSSHAIR_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.TEXT_CURSOR</code>.
	 */
	@Deprecated
	public static final int TEXT_CURSOR = Cursor.TEXT_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.WAIT_CURSOR</code>.
	 */
	@Deprecated
	public static final int WAIT_CURSOR = Cursor.WAIT_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.SW_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int SW_RESIZE_CURSOR = Cursor.SW_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.SE_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int SE_RESIZE_CURSOR = Cursor.SE_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.NW_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int NW_RESIZE_CURSOR = Cursor.NW_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.NE_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int NE_RESIZE_CURSOR = Cursor.NE_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.N_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int N_RESIZE_CURSOR = Cursor.N_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.S_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int S_RESIZE_CURSOR = Cursor.S_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.W_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int W_RESIZE_CURSOR = Cursor.W_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.E_RESIZE_CURSOR</code>.
	 */
	@Deprecated
	public static final int E_RESIZE_CURSOR = Cursor.E_RESIZE_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.HAND_CURSOR</code>.
	 */
	@Deprecated
	public static final int HAND_CURSOR = Cursor.HAND_CURSOR;

	/**
	 * @deprecated replaced by <code>Cursor.MOVE_CURSOR</code>.
	 */
	@Deprecated
	public static final int MOVE_CURSOR = Cursor.MOVE_CURSOR;

	/**
	 * Frame is in the "normal" state. This symbolic constant names a frame
	 * state with all state bits cleared.
	 * 
	 * @see #setExtendedState(int)
	 * @see #getExtendedState
	 */
	public static final int NORMAL = 0;

	/**
	 * This state bit indicates that frame is iconified.
	 * 
	 * @see #setExtendedState(int)
	 * @see #getExtendedState
	 */
	public static final int ICONIFIED = 1;

	/**
	 * This state bit indicates that frame is maximized in the horizontal
	 * direction.
	 * 
	 * @see #setExtendedState(int)
	 * @see #getExtendedState
	 * @since 1.4
	 */
	public static final int MAXIMIZED_HORIZ = 2;

	/**
	 * This state bit indicates that frame is maximized in the vertical
	 * direction.
	 * 
	 * @see #setExtendedState(int)
	 * @see #getExtendedState
	 * @since 1.4
	 */
	public static final int MAXIMIZED_VERT = 4;

	/**
	 * This state bit mask indicates that frame is fully maximized (that is both
	 * horizontally and vertically). It is just a convenience alias for
	 * <code>MAXIMIZED_VERT&nbsp;|&nbsp;MAXIMIZED_HORIZ</code>.
	 *
	 * <p>
	 * Note that the correct test for frame being fully maximized is
	 * 
	 * <pre>
	 * (state &amp; Frame.MAXIMIZED_BOTH) == Frame.MAXIMIZED_BOTH
	 * </pre>
	 *
	 * <p>
	 * To test is frame is maximized in <em>some</em> direction use
	 * 
	 * <pre>
	 * (state &amp; Frame.MAXIMIZED_BOTH) != 0
	 * </pre>
	 *
	 * @see #setExtendedState(int)
	 * @see #getExtendedState
	 * @since 1.4
	 */
	public static final int MAXIMIZED_BOTH = MAXIMIZED_VERT | MAXIMIZED_HORIZ;

	/**
	 * Maximized bounds for this frame.
	 * 
	 * @see #setMaximizedBounds(Rectangle)
	 * @see #getMaximizedBounds
	 * @serial
	 * @since 1.4
	 */
	Rectangle maximizedBounds;

	/**
	 * This is the title of the frame. It can be changed at any time.
	 * <code>title</code> can be null and if this is the case the
	 * <code>title</code> = "".
	 *
	 * @serial
	 * @see #getTitle
	 * @see #setTitle(String)
	 */
	String title = "Untitled";

	/**
	 * The frames menubar. If <code>menuBar</code> = null the frame will not
	 * have a menubar.
	 *
	 * @serial
	 * @see #getMenuBar
	 * @see #setMenuBar(MenuBar)
	 */
	// MenuBar menuBar;

	/**
	 * This field indicates whether the frame is resizable. This property can be
	 * changed at any time. <code>resizable</code> will be true if the frame is
	 * resizable, otherwise it will be false.
	 *
	 * @serial
	 * @see #isResizable()
	 */
	boolean resizable = true;

	/**
	 * This field indicates whether the frame is undecorated. This property can
	 * only be changed while the frame is not displayable.
	 * <code>undecorated</code> will be true if the frame is undecorated,
	 * otherwise it will be false.
	 *
	 * @serial
	 * @see #setUndecorated(boolean)
	 * @see #isUndecorated()
	 * @see Component#isDisplayable()
	 * @since 1.4
	 */
	boolean undecorated = false;

	/**
	 * <code>mbManagement</code> is only used by the Motif implementation.
	 *
	 * @serial
	 */
	boolean mbManagement = false; /* used only by the Motif impl. */

	/*
	 * The Windows owned by the Frame. Note: in 1.2 this has been superceded by
	 * Window.ownedWindowList
	 *
	 * @serial
	 * 
	 * @see java.awt.Window#ownedWindowList
	 */
	Vector<Window> ownedWindows;

	private static final String base = "frame";
	private static int nameCounter = 0;

	public Frame() throws HeadlessException {
		this("");
		state = NORMAL;
	}

	public Frame(String title) throws HeadlessException {
		_frameInit(title);
		state = NORMAL;
	}

	private void _frameInit(String title) {
		this.title = title;
	}

	String constructComponentName() {
		synchronized (Frame.class) {
			return base + nameCounter++;
		}
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		String oldTitle = this.title;
		if (title == null) {
			title = "";
		}

		this.title = title;
		firePropertyChange("title", oldTitle, title);
	}

	public Image getIconImage() {
		java.util.List<Image> icons = this.icons;
		if (icons != null) {
			if (icons.size() > 0) {
				return icons.get(0);
			}
		}
		return null;
	}

	public void setIconImage(Image image) {
		super.setIconImage(image);
	}

	// public MenuBar getMenuBar() {
	// return menuBar;
	// }
	//
	// public void setMenuBar(MenuBar mb) {
	// if (menuBar == mb) {
	// return;
	// }
	// if ((mb != null) && (mb.parent != null)) {
	// mb.parent.remove(mb);
	// }
	// if (menuBar != null) {
	// remove(menuBar);
	// }
	// menuBar = mb;
	// if (menuBar != null) {
	// menuBar.parent = this;
	//
	// FramePeer peer = (FramePeer) this.peer;
	// if (peer != null) {
	// mbManagement = true;
	// menuBar.addNotify();
	// invalidateIfValid();
	// peer.setMenuBar(menuBar);
	// }
	// }
	// }
	// }

	public boolean isResizable() {
		return resizable;
	}

	public void setResizable(boolean resizable) {
		boolean oldResizable = this.resizable;
		this.resizable = resizable;
		firePropertyChange("resizable", oldResizable, resizable);
	}

	public void setUndecorated(boolean undecorated) {
		this.undecorated = undecorated;
	}

	public boolean isUndecorated() {
		return undecorated;
	}

	/**
	 * Returns a string representing the state of this <code>Frame</code>. This
	 * method is intended to be used only for debugging purposes, and the
	 * content and format of the returned string may vary between
	 * implementations. The returned string may be empty but may not be
	 * <code>null</code>.
	 *
	 * @return the parameter string of this frame
	 */
	protected String paramString() {
		String str = super.paramString();
		if (title != null) {
			str += ",title=" + title;
		}
		if (resizable) {
			str += ",resizable";
		}
		if (state == NORMAL) {
			str += ",normal";
		} else {
			if ((state & ICONIFIED) != 0) {
				str += ",iconified";
			}
			if ((state & MAXIMIZED_BOTH) == MAXIMIZED_BOTH) {
				str += ",maximized";
			} else if ((state & MAXIMIZED_HORIZ) != 0) {
				str += ",maximized_horiz";
			} else if ((state & MAXIMIZED_VERT) != 0) {
				str += ",maximized_vert";
			}
		}
		return str;
	}

}
