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

import java.awt.Component;
import java.beans.Transient;

import jsweet.dom.HTMLImageElement;
import jsweet.dom.HTMLLabelElement;
import jsweet.dom.Node;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JLabel extends JComponent implements SwingConstants {
	private int mnemonic;
	private int mnemonicIndex;

	private String text;
	private Icon defaultIcon;
	private Icon disabledIcon;
	private boolean disabledIconSet;

	private int verticalAlignment;
	private int horizontalAlignment;
	private int verticalTextPosition;
	private int horizontalTextPosition;
	private int iconTextGap;

	protected Component labelFor;

	static final String LABELED_BY_PROPERTY = "labeledBy";

	public JLabel(String text, Icon icon, int horizontalAlignment) {
		mnemonic = '\0';
		mnemonicIndex = -1;

		text = ""; // "" rather than null, for BeanBox
		defaultIcon = null;
		disabledIcon = null;
		disabledIconSet = false;

		verticalAlignment = CENTER;
		horizontalAlignment = LEADING;
		verticalTextPosition = CENTER;
		horizontalTextPosition = TRAILING;
		iconTextGap = 4;

		labelFor = null;
		setText(text);
		setIcon(icon);
		setHorizontalAlignment(horizontalAlignment);

		// setAlignmentX(LEFT_ALIGNMENT);
	}

	public JLabel(String text, int horizontalAlignment) {
		this(text, null, horizontalAlignment);
	}

	public JLabel(String text) {
		this(text, null, LEADING);
	}

	public JLabel(Icon image, int horizontalAlignment) {
		this(null, image, horizontalAlignment);
	}

	public JLabel(Icon image) {
		this(null, image, CENTER);
	}

	public JLabel() {
		this("", null, LEADING);
	}

	HTMLLabelElement htmlLabelElement;
	HTMLImageElement htmlImageElement;

	@Override
	public void createHTML() {
		htmlElement = document.createElement(StringTypes.div);
	}

	@Override
	public void initHTML() {
		super.initHTML();
		for (Node n : getHTMLElement().childNodes) {
			getHTMLElement().removeChild(n);
		}
		if (defaultIcon != null) {
			htmlImageElement = defaultIcon.getInternalHTMLImageElement();
		}
		htmlLabelElement = document.createElement(StringTypes.label);
		htmlElement.appendChild(htmlImageElement);
		htmlElement.appendChild(htmlLabelElement);
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {

		String oldValue = this.text;
		this.text = text;
		firePropertyChange("text", oldValue, text);
		if (htmlElement != null) {
			htmlElement.innerHTML = text;
		}

	}

	public Icon getIcon() {
		return defaultIcon;
	}

	public void setIcon(Icon icon) {
		Icon oldValue = defaultIcon;
		defaultIcon = icon;

		if ((defaultIcon != oldValue) && !disabledIconSet) {
			disabledIcon = null;
		}

		firePropertyChange("icon", oldValue, defaultIcon);

		if (htmlElement != null) {
			initHTML();
		}
	}

	@Transient
	public Icon getDisabledIcon() {
		// if (!disabledIconSet && disabledIcon == null && defaultIcon != null)
		// {
		// disabledIcon = UIManager.getLookAndFeel().getDisabledIcon(this,
		// defaultIcon);
		// if (disabledIcon != null) {
		// firePropertyChange("disabledIcon", null, disabledIcon);
		// }
		// }
		return disabledIcon;
	}

	public void setDisabledIcon(Icon disabledIcon) {
		Icon oldValue = this.disabledIcon;
		this.disabledIcon = disabledIcon;
		disabledIconSet = (disabledIcon != null);
		firePropertyChange("disabledIcon", oldValue, disabledIcon);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public void setDisplayedMnemonic(int key) {
		int oldKey = mnemonic;
		mnemonic = key;
		firePropertyChange("displayedMnemonic", oldKey, mnemonic);

		// setDisplayedMnemonicIndex(SwingUtilities.findDisplayedMnemonicIndex(getText(),
		// mnemonic));
	}

	public void setDisplayedMnemonic(char aChar) {
		int vk = java.awt.event.KeyEvent.getExtendedKeyCodeForChar(aChar);
		if (vk != java.awt.event.KeyEvent.VK_UNDEFINED) {
			setDisplayedMnemonic(vk);
		}
	}

	public int getDisplayedMnemonic() {
		return mnemonic;
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

	protected int checkHorizontalKey(int key, String message) {
		if ((key == LEFT) || (key == CENTER) || (key == RIGHT) || (key == LEADING) || (key == TRAILING)) {
			return key;
		} else {
			throw new IllegalArgumentException(message);
		}
	}

	protected int checkVerticalKey(int key, String message) {
		if ((key == TOP) || (key == CENTER) || (key == BOTTOM)) {
			return key;
		} else {
			throw new IllegalArgumentException(message);
		}
	}

	public int getIconTextGap() {
		return iconTextGap;
	}

	public void setIconTextGap(int iconTextGap) {
		int oldValue = this.iconTextGap;
		this.iconTextGap = iconTextGap;
		firePropertyChange("iconTextGap", oldValue, iconTextGap);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public int getVerticalAlignment() {
		return verticalAlignment;
	}

	public void setVerticalAlignment(int alignment) {
		if (alignment == verticalAlignment)
			return;
		int oldValue = verticalAlignment;
		verticalAlignment = checkVerticalKey(alignment, "verticalAlignment");
		firePropertyChange("verticalAlignment", oldValue, verticalAlignment);
		if (htmlElement != null) {
			initHTML();
		}

	}

	public int getHorizontalAlignment() {
		return horizontalAlignment;
	}

	public void setHorizontalAlignment(int alignment) {
		if (alignment == horizontalAlignment)
			return;
		int oldValue = horizontalAlignment;
		horizontalAlignment = checkHorizontalKey(alignment, "horizontalAlignment");
		firePropertyChange("horizontalAlignment", oldValue, horizontalAlignment);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public int getVerticalTextPosition() {
		return verticalTextPosition;
	}

	public void setVerticalTextPosition(int textPosition) {
		if (textPosition == verticalTextPosition)
			return;
		int old = verticalTextPosition;
		verticalTextPosition = checkVerticalKey(textPosition, "verticalTextPosition");
		firePropertyChange("verticalTextPosition", old, verticalTextPosition);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public int getHorizontalTextPosition() {
		return horizontalTextPosition;
	}

	public void setHorizontalTextPosition(int textPosition) {
		int old = horizontalTextPosition;
		this.horizontalTextPosition = checkHorizontalKey(textPosition, "horizontalTextPosition");
		firePropertyChange("horizontalTextPosition", old, horizontalTextPosition);
		if (htmlElement != null) {
			initHTML();
		}
	}

	protected String paramString() {
		String textString = (text != null ? text : "");
		String defaultIconString = ((defaultIcon != null) ? defaultIcon.toString() : "");
		String disabledIconString = ((disabledIcon != null) ? disabledIcon.toString() : "");
		String labelForString = (labelFor != null ? labelFor.toString() : "");
		String verticalAlignmentString;
		if (verticalAlignment == TOP) {
			verticalAlignmentString = "TOP";
		} else if (verticalAlignment == CENTER) {
			verticalAlignmentString = "CENTER";
		} else if (verticalAlignment == BOTTOM) {
			verticalAlignmentString = "BOTTOM";
		} else
			verticalAlignmentString = "";
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
		String verticalTextPositionString;
		if (verticalTextPosition == TOP) {
			verticalTextPositionString = "TOP";
		} else if (verticalTextPosition == CENTER) {
			verticalTextPositionString = "CENTER";
		} else if (verticalTextPosition == BOTTOM) {
			verticalTextPositionString = "BOTTOM";
		} else
			verticalTextPositionString = "";
		String horizontalTextPositionString;
		if (horizontalTextPosition == LEFT) {
			horizontalTextPositionString = "LEFT";
		} else if (horizontalTextPosition == CENTER) {
			horizontalTextPositionString = "CENTER";
		} else if (horizontalTextPosition == RIGHT) {
			horizontalTextPositionString = "RIGHT";
		} else if (horizontalTextPosition == LEADING) {
			horizontalTextPositionString = "LEADING";
		} else if (horizontalTextPosition == TRAILING) {
			horizontalTextPositionString = "TRAILING";
		} else
			horizontalTextPositionString = "";

		return super.paramString() + ",defaultIcon=" + defaultIconString + ",disabledIcon=" + disabledIconString
				+ ",horizontalAlignment=" + horizontalAlignmentString + ",horizontalTextPosition="
				+ horizontalTextPositionString + ",iconTextGap=" + iconTextGap + ",labelFor=" + labelForString
				+ ",text=" + textString + ",verticalAlignment=" + verticalAlignmentString + ",verticalTextPosition="
				+ verticalTextPositionString;
	}

}
