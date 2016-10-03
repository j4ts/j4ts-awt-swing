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

import jsweet.dom.HTMLLabelElement;
import jsweet.util.StringTypes;

public class Label extends Component {

	public static final int LEFT = 0;

	public static final int CENTER = 1;

	public static final int RIGHT = 2;

	String text;

	int alignment = LEFT;

	private static final String base = "label";
	private static int nameCounter = 0;

	private static final long serialVersionUID = 3094126758329070636L;

	public Label() throws HeadlessException {
		this("", LEFT);
	}

	public Label(String text) throws HeadlessException {
		this(text, LEFT);
	}

	public Label(String text, int alignment) throws HeadlessException {
		this.text = text;
		setAlignment(alignment);
	}

	/**
	 * Construct a name for this component. Called by getName() when the name is
	 * <code>null</code>.
	 */
	String constructComponentName() {
		synchronized (Label.class) {
			return base + nameCounter++;
		}
	}

	public int getAlignment() {
		return alignment;
	}

	public synchronized void setAlignment(int alignment) {
		switch (alignment) {
		case LEFT:
		case CENTER:
		case RIGHT:
			this.alignment = alignment;
			return;
		}
		throw new IllegalArgumentException("improper alignment: " + alignment);
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		synchronized (this) {
			if (text != this.text && (this.text == null || !this.text.equals(text))) {
				this.text = text;
				if (htmlElement != null) {
					htmlElement.innerHTML = text;
				}
			}
		}

	}

	protected String paramString() {
		String str = ",align=";
		switch (alignment) {
		case LEFT:
			str += "left";
			break;
		case CENTER:
			str += "center";
			break;
		case RIGHT:
			str += "right";
			break;
		}
		return super.paramString() + str + ",text=" + text;
	}

	@Override
	public HTMLLabelElement getHTMLElement() {
		return (HTMLLabelElement) super.getHTMLElement();
	}

	@Override
	public void createHTML() {
		htmlElement = document.createElement(StringTypes.label);
	}

	@Override
	public void initHTML() {
		super.initHTML();
		if (text != null) {
			getHTMLElement().innerHTML = text;
		}
	}

}
