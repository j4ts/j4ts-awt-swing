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

import static def.dom.Globals.document;
import static jsweet.util.Lang.array;

import java.awt.*;

import def.dom.HTMLDivElement;
import def.dom.HTMLElement;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JRootPane extends JComponent {
	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.div);
	}

	@Override
	public void initHTML() {
		super.initHTML();
		htmlElement.style.width = "100%";
		htmlElement.style.height = "100%";

	}

	private static final String uiClassID = "RootPaneUI";

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should not provide any sort of Window decorations.
	 *
	 * @since 1.4
	 */
	public static final int NONE = 0;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Frame.
	 *
	 * @since 1.4
	 */
	public static final int FRAME = 1;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog.
	 *
	 * @since 1.4
	 */
	public static final int PLAIN_DIALOG = 2;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to display an informational message.
	 *
	 * @since 1.4
	 */
	public static final int INFORMATION_DIALOG = 3;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to display an error message.
	 *
	 * @since 1.4
	 */
	public static final int ERROR_DIALOG = 4;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to display a <code>JColorChooser</code>.
	 *
	 * @since 1.4
	 */
	public static final int COLOR_CHOOSER_DIALOG = 5;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to display a <code>JFileChooser</code>.
	 *
	 * @since 1.4
	 */
	public static final int FILE_CHOOSER_DIALOG = 6;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to present a question to the user.
	 *
	 * @since 1.4
	 */
	public static final int QUESTION_DIALOG = 7;

	/**
	 * Constant used for the windowDecorationStyle property. Indicates that the
	 * <code>JRootPane</code> should provide decorations appropriate for a
	 * Dialog used to display a warning message.
	 *
	 * @since 1.4
	 */
	public static final int WARNING_DIALOG = 8;

	private int windowDecorationStyle;

	/** The content pane. */
	protected Container contentPane;

	protected Container glassPane;

	/**
	 * The button that gets activated when the pane has the focus and a
	 * UI-specific action like pressing the <b>Enter</b> key occurs.
	 */
	protected JButton defaultButton;

	/**
	 * Creates a <code>JRootPane</code>, setting up its <code>glassPane</code>,
	 * <code>layeredPane</code>, and <code>contentPane</code>.
	 */
	public JRootPane() {
		setLayout(new NoLayout());
		setContentPane(createContentPane());
		setGlassPane(createGlassPane());
	}

	public void setGlassPane(Container glassPane) {
		if (glassPane == null)
			throw new IllegalComponentStateException("glassPane cannot be set to null.");

		this.glassPane = glassPane;
		if (glassPane.getParent() != null) {
			glassPane.getParent().remove(glassPane);
		}

		glassPane.initHTML();
		glassPane.parent = this;
		glassPane.getHTMLElement().style.zIndex = "1";

		getHTMLElement().appendChild(glassPane.getHTMLElement());
	}

	public Container getGlassPane() {
		return glassPane;
	}

	protected Container createGlassPane() {
		JComponent c = new JPanel();
		c.setName(this.getName() + ".glassPane");
		c.setVisible(false);
		c.setLayout(null);
		return c;
	}

	/**
	 * Returns a constant identifying the type of Window decorations the
	 * <code>JRootPane</code> is providing.
	 *
	 * @return One of <code>NONE</code>, <code>FRAME</code>,
	 *         <code>PLAIN_DIALOG</code>, <code>INFORMATION_DIALOG</code>,
	 *         <code>ERROR_DIALOG</code>, <code>COLOR_CHOOSER_DIALOG</code>,
	 *         <code>FILE_CHOOSER_DIALOG</code>, <code>QUESTION_DIALOG</code> or
	 *         <code>WARNING_DIALOG</code>.
	 * @see #setWindowDecorationStyle
	 * @since 1.4
	 */
	public int getWindowDecorationStyle() {
		return windowDecorationStyle;
	}

	public void setWindowDecorationStyle(int windowDecorationStyle) {
		if (windowDecorationStyle < 0 || windowDecorationStyle > WARNING_DIALOG) {
			throw new IllegalArgumentException("Invalid decoration style");
		}
		int oldWindowDecorationStyle = getWindowDecorationStyle();
		this.windowDecorationStyle = windowDecorationStyle;
		firePropertyChange("windowDecorationStyle", oldWindowDecorationStyle, windowDecorationStyle);
	}

	/**
	 * Returns a string that specifies the name of the L&amp;F class that
	 * renders this component.
	 *
	 * @return the string "RootPaneUI"
	 *
	 * @see JComponent#getUIClassID
	 * @see UIDefaults#getUI
	 */
	public String getUIClassID() {
		return uiClassID;
	}

	protected Container createContentPane() {
		JComponent c = new JPanel();
		c.setName(this.getName() + ".contentPane");
		c.setLayout(new BorderLayout());
		return c;
	}

	/**
	 * Sets the content pane -- the container that holds the components parented
	 * by the root pane.
	 * <p>
	 * Swing's painting architecture requires an opaque <code>JComponent</code>
	 * in the containment hierarchy. This is typically provided by the content
	 * pane. If you replace the content pane it is recommended you replace it
	 * with an opaque <code>JComponent</code>.
	 *
	 * @param content
	 *            the <code>Container</code> to use for component-contents
	 * @exception java.awt.IllegalComponentStateException
	 *                (a runtime exception) if the content pane parameter is
	 *                <code>null</code>
	 */
	public void setContentPane(Container content) {
		if (content == null)
			throw new IllegalComponentStateException("contentPane cannot be set to null.");
		contentPane = content;
		add(contentPane);
	}

	/**
	 * Returns the content pane -- the container that holds the components
	 * parented by the root pane.
	 *
	 * @return the <code>Container</code> that holds the component-contents
	 */
	public Container getContentPane() {
		return contentPane;
	}

	/**
	 * Sets the <code>defaultButton</code> property, which determines the
	 * current default button for this <code>JRootPane</code>. The default
	 * button is the button which will be activated when a UI-defined activation
	 * event (typically the <b>Enter</b> key) occurs in the root pane regardless
	 * of whether or not the button has keyboard focus (unless there is another
	 * component within the root pane which consumes the activation event, such
	 * as a <code>JTextPane</code>). For default activation to work, the button
	 * must be an enabled descendent of the root pane when activation occurs. To
	 * remove a default button from this root pane, set this property to
	 * <code>null</code>.
	 *
	 * @see JButton#isDefaultButton
	 * @param defaultButton
	 *            the <code>JButton</code> which is to be the default button
	 *
	 * @beaninfo description: The button activated by default in this root pane
	 */
	public void setDefaultButton(JButton defaultButton) {
		JButton oldDefault = this.defaultButton;

		if (oldDefault != defaultButton) {
			this.defaultButton = defaultButton;

			if (oldDefault != null) {
				oldDefault.repaint();
			}
			if (defaultButton != null) {
				defaultButton.repaint();
			}
		}

		firePropertyChange("defaultButton", oldDefault, defaultButton);
	}

	/**
	 * Returns the value of the <code>defaultButton</code> property.
	 * 
	 * @return the <code>JButton</code> which is currently the default button
	 * @see #setDefaultButton
	 */
	public JButton getDefaultButton() {
		return defaultButton;
	}
}
