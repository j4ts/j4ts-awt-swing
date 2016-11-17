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

import java.applet.Applet;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Container;
import java.awt.Graphics;
import java.awt.LayoutManager;

/**
 * Simplified version.
 */
public class JApplet extends Applet implements RootPaneContainer {
	/**
	 * @see #getRootPane
	 * @see #setRootPane
	 */
	protected JRootPane rootPane;

	/**
	 * If true then calls to <code>add</code> and <code>setLayout</code> will be
	 * forwarded to the <code>contentPane</code>. This is initially false, but
	 * is set to true when the <code>JApplet</code> is constructed.
	 *
	 * @see #isRootPaneCheckingEnabled
	 * @see #setRootPaneCheckingEnabled
	 * @see javax.swing.RootPaneContainer
	 */
	protected boolean rootPaneCheckingEnabled = false;

	/**
	 * Creates a swing applet instance.
	 * <p>
	 * This constructor sets the component's locale property to the value
	 * returned by <code>JComponent.getDefaultLocale</code>.
	 *
	 * @exception java.awt.HeadlessException
	 *                if GraphicsEnvironment.isHeadless() returns true.
	 * @see java.awt.GraphicsEnvironment#isHeadless
	 * @see JComponent#getDefaultLocale
	 */
	public JApplet() {
		super();
		setForeground(Color.black);
		setBackground(Color.white);
		setLayout(new BorderLayout());
		setRootPane(createRootPane());
		rootPaneCheckingEnabled = true;
	}

	/** Called by the constructor methods to create the default rootPane. */
	protected JRootPane createRootPane() {
		JRootPane rp = new JRootPane();
		return rp;
	}

	protected void addImpl(Component comp, Object constraints, int index) {
		if (rootPaneCheckingEnabled && getContentPane() != null) {
			getContentPane().add(comp, constraints, index);
		} else {
			super.addImpl(comp, constraints, index);
		}
	}

	/**
	 * Just calls <code>paint(g)</code>. This method was overridden to prevent
	 * an unnecessary call to clear the background.
	 */
	public void update(Graphics g) {
		paint(g);
	}

	/**
	 * Removes the specified component from the container. If <code>comp</code>
	 * is not the <code>rootPane</code>, this will forward the call to the
	 * <code>contentPane</code>. This will do nothing if <code>comp</code> is
	 * not a child of the <code>JFrame</code> or <code>contentPane</code>.
	 *
	 * @param comp
	 *            the component to be removed
	 * @throws NullPointerException
	 *             if <code>comp</code> is null
	 * @see #add
	 * @see javax.swing.RootPaneContainer
	 */
	public void remove(Component comp) {
		if (comp == rootPane) {
			super.remove(comp);
		} else {
			getContentPane().remove(comp);
		}
	}

	/**
	 * Sets the <code>LayoutManager</code>. Overridden to conditionally forward
	 * the call to the <code>contentPane</code>. Refer to
	 * {@link javax.swing.RootPaneContainer} for more information.
	 *
	 * @param manager
	 *            the <code>LayoutManager</code>
	 * @see #setRootPaneCheckingEnabled
	 * @see javax.swing.RootPaneContainer
	 */
	@Override
	public void setLayout(LayoutManager manager) {
		if (rootPane != null) {
			getContentPane().setLayout(manager);
		} else {
			super.setLayout(manager);
		}
	}

	/**
	 * Returns the rootPane object for this applet.
	 *
	 * @see #setRootPane
	 * @see RootPaneContainer#getRootPane
	 */
	@Override
	public JRootPane getRootPane() {
		return rootPane;
	}

	/**
	 * Sets the rootPane property. This method is called by the constructor.
	 * 
	 * @param root
	 *            the rootPane object for this applet
	 *
	 * @see #getRootPane
	 *
	 * @beaninfo hidden: true description: the RootPane object for this applet.
	 */
	protected void setRootPane(JRootPane root) {
		if (rootPane != null) {
			remove(rootPane);
		}
		rootPane = root;
		if (rootPane != null) {
			add(rootPane, BorderLayout.CENTER);
		}
	}

	/**
	 * Returns the contentPane object for this applet.
	 *
	 * @see #setContentPane
	 * @see RootPaneContainer#getContentPane
	 */
	@Override
	public Container getContentPane() {
		if (rootPane != null) {
			return getRootPane().getContentPane();
		} else {
			return null;
		}
	}

	/**
	 * Sets the contentPane property. This method is called by the constructor.
	 * 
	 * @param contentPane
	 *            the contentPane object for this applet
	 *
	 * @exception java.awt.IllegalComponentStateException
	 *                (a runtime exception) if the content pane parameter is
	 *                null
	 * @see #getContentPane
	 * @see RootPaneContainer#setContentPane
	 *
	 * @beaninfo hidden: true description: The client area of the applet where
	 *           child components are normally inserted.
	 */
	@Override
	public void setContentPane(Container contentPane) {
		getRootPane().setContentPane(contentPane);
	}

	/**
	 * Returns a string representation of this JApplet. This method is intended
	 * to be used only for debugging purposes, and the content and format of the
	 * returned string may vary between implementations. The returned string may
	 * be empty but may not be <code>null</code>.
	 *
	 * @return a string representation of this JApplet.
	 */
	protected String paramString() {
		String rootPaneString = (rootPane != null ? rootPane.toString() : "");
		String rootPaneCheckingEnabledString = (rootPaneCheckingEnabled ? "true" : "false");

		return super.paramString() + ",rootPane=" + rootPaneString + ",rootPaneCheckingEnabled="
				+ rootPaneCheckingEnabledString;
	}

}
