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

import java.util.Hashtable;
import java.util.Locale;

public class Font implements java.io.Serializable {

	public String toHTML() {
		return style + " " + size + "px " + name;
	}

	/**
	 * This is now only used during serialization. Typically it is null.
	 *
	 * @serial
	 * @see #getAttributes()
	 */
	private Hashtable<Object, Object> fRequestedAttributes;

	/*
	 * Constants to be used for logical font family names.
	 */

	/**
	 * A String constant for the canonical family name of the logical font
	 * "Dialog". It is useful in Font construction to provide compile-time
	 * verification of the name.
	 * 
	 * @since 1.6
	 */
	public static final String DIALOG = "Dialog";

	/**
	 * A String constant for the canonical family name of the logical font
	 * "DialogInput". It is useful in Font construction to provide compile-time
	 * verification of the name.
	 * 
	 * @since 1.6
	 */
	public static final String DIALOG_INPUT = "DialogInput";

	/**
	 * A String constant for the canonical family name of the logical font
	 * "SansSerif". It is useful in Font construction to provide compile-time
	 * verification of the name.
	 * 
	 * @since 1.6
	 */
	public static final String SANS_SERIF = "SansSerif";

	/**
	 * A String constant for the canonical family name of the logical font
	 * "Serif". It is useful in Font construction to provide compile-time
	 * verification of the name.
	 * 
	 * @since 1.6
	 */
	public static final String SERIF = "Serif";

	/**
	 * A String constant for the canonical family name of the logical font
	 * "Monospaced". It is useful in Font construction to provide compile-time
	 * verification of the name.
	 * 
	 * @since 1.6
	 */
	public static final String MONOSPACED = "Monospaced";

	/*
	 * Constants to be used for styles. Can be combined to mix styles.
	 */

	/**
	 * The plain style constant.
	 */
	public static final int PLAIN = 0;

	/**
	 * The bold style constant. This can be combined with the other style
	 * constants (except PLAIN) for mixed styles.
	 */
	public static final int BOLD = 1;

	/**
	 * The italicized style constant. This can be combined with the other style
	 * constants (except PLAIN) for mixed styles.
	 */
	public static final int ITALIC = 2;

	/**
	 * The baseline used in most Roman scripts when laying out text.
	 */
	public static final int ROMAN_BASELINE = 0;

	/**
	 * The baseline used in ideographic scripts like Chinese, Japanese, and
	 * Korean when laying out text.
	 */
	public static final int CENTER_BASELINE = 1;

	/**
	 * The baseline used in Devanigiri and similar scripts when laying out text.
	 */
	public static final int HANGING_BASELINE = 2;

	/**
	 * Identify a font resource of type TRUETYPE. Used to specify a TrueType
	 * font resource to the {@link #createFont} method. The TrueType format was
	 * extended to become the OpenType format, which adds support for fonts with
	 * Postscript outlines, this tag therefore references these fonts, as well
	 * as those with TrueType outlines.
	 * 
	 * @since 1.3
	 */

	public static final int TRUETYPE_FONT = 0;

	/**
	 * Identify a font resource of type TYPE1. Used to specify a Type1 font
	 * resource to the {@link #createFont} method.
	 * 
	 * @since 1.5
	 */
	public static final int TYPE1_FONT = 1;

	/**
	 * The logical name of this <code>Font</code>, as passed to the constructor.
	 * 
	 * @since JDK1.0
	 *
	 * @serial
	 * @see #getName
	 */
	protected String name;

	/**
	 * The style of this <code>Font</code>, as passed to the constructor. This
	 * style can be PLAIN, BOLD, ITALIC, or BOLD+ITALIC.
	 * 
	 * @since JDK1.0
	 *
	 * @serial
	 * @see #getStyle()
	 */
	protected int style;

	/**
	 * The point size of this <code>Font</code>, rounded to integer.
	 * 
	 * @since JDK1.0
	 *
	 * @serial
	 * @see #getSize()
	 */
	protected int size;

	/**
	 * The point size of this <code>Font</code> in <code>float</code>.
	 *
	 * @serial
	 * @see #getSize()
	 * @see #getSize2D()
	 */
	protected float pointSize;

	/*
	 * JDK 1.1 serialVersionUID
	 */
	private static final long serialVersionUID = -4206021311591459213L;

	private Font(String name, int style, float sizePts) {
		this.name = (name != null) ? name : "Default";
		this.style = (style & ~0x03) == 0 ? style : 0;
		this.size = (int) (sizePts + 0.5);
		this.pointSize = sizePts;
	}

	protected Font(Font font) {
		this.name = font.name;
		this.style = font.style;
		this.size = font.size;
		this.pointSize = font.pointSize;
	}

	public String getFamily() {
		// TODO
		return name;
	}

	public String getName() {
		return name;
	}

	public String getFontName() {
		// TODO
		return name;
	}

	public int getStyle() {
		return style;
	}

	public int getSize() {
		return size;
	}

	public float getSize2D() {
		return pointSize;
	}

	public boolean isPlain() {
		return style == 0;
	}

	public boolean isBold() {
		return (style & BOLD) != 0;
	}

	public boolean isItalic() {
		return (style & ITALIC) != 0;
	}

	public static Font getFont(String nm) {
		return getFont(nm, null);
	}

	public static Font decode(String str) {
		String fontName = str;
		String styleName = "";
		int fontSize = 12;
		int fontStyle = Font.PLAIN;

		if (str == null) {
			return new Font(DIALOG, fontStyle, fontSize);
		}

		int lastHyphen = str.lastIndexOf('-');
		int lastSpace = str.lastIndexOf(' ');
		char sepChar = (lastHyphen > lastSpace) ? '-' : ' ';
		int sizeIndex = str.lastIndexOf(sepChar);
		int styleIndex = str.lastIndexOf(sepChar, sizeIndex - 1);
		int strlen = str.length();

		if (sizeIndex > 0 && sizeIndex + 1 < strlen) {
			try {
				fontSize = Integer.valueOf(str.substring(sizeIndex + 1)).intValue();
				if (fontSize <= 0) {
					fontSize = 12;
				}
			} catch (NumberFormatException e) {
				/*
				 * It wasn't a valid size, if we didn't also find the start of
				 * the style string perhaps this is the style
				 */
				styleIndex = sizeIndex;
				sizeIndex = strlen;
				if (str.charAt(sizeIndex - 1) == sepChar) {
					sizeIndex--;
				}
			}
		}

		if (styleIndex >= 0 && styleIndex + 1 < strlen) {
			styleName = str.substring(styleIndex + 1, sizeIndex);
			styleName = styleName.toLowerCase(Locale.ENGLISH);
			if (styleName.equals("bolditalic")) {
				fontStyle = Font.BOLD | Font.ITALIC;
			} else if (styleName.equals("italic")) {
				fontStyle = Font.ITALIC;
			} else if (styleName.equals("bold")) {
				fontStyle = Font.BOLD;
			} else if (styleName.equals("plain")) {
				fontStyle = Font.PLAIN;
			} else {
				/*
				 * this string isn't any of the expected styles, so assume its
				 * part of the font name
				 */
				styleIndex = sizeIndex;
				if (str.charAt(styleIndex - 1) == sepChar) {
					styleIndex--;
				}
			}
			fontName = str.substring(0, styleIndex);

		} else {
			int fontEnd = strlen;
			if (styleIndex > 0) {
				fontEnd = styleIndex;
			} else if (sizeIndex > 0) {
				fontEnd = sizeIndex;
			}
			if (fontEnd > 0 && str.charAt(fontEnd - 1) == sepChar) {
				fontEnd--;
			}
			fontName = str.substring(0, fontEnd);
		}

		return new Font(fontName, fontStyle, fontSize);
	}

	public static Font getFont(String nm, Font font) {
		String str = null;
		try {
			str = System.getProperty(nm);
		} catch (SecurityException e) {
		}
		if (str == null) {
			return font;
		}
		return decode(str);
	}

	transient int hash;

	public int hashCode() {
		if (hash == 0) {
			hash = name.hashCode() ^ style ^ size;
		}
		return hash;
	}

	public boolean equals(Object obj) {
		if (obj == this) {
			return true;
		}

		if (obj != null) {
			try {
				Font font = (Font) obj;
				if (size == font.size && style == font.style && pointSize == font.pointSize && name.equals(font.name)) {
					return true;
				}
			} catch (ClassCastException e) {
			}
		}
		return false;
	}

	/**
	 * Converts this <code>Font</code> object to a <code>String</code>
	 * representation.
	 * 
	 * @return a <code>String</code> representation of this <code>Font</code>
	 *         object.
	 * @since JDK1.0
	 */
	// NOTE: This method may be called by privileged threads.
	// DO NOT INVOKE CLIENT CODE ON THIS THREAD!
	public String toString() {
		String strStyle;

		if (isBold()) {
			strStyle = isItalic() ? "bolditalic" : "bold";
		} else {
			strStyle = isItalic() ? "italic" : "plain";
		}

		return getClass().getName() + "[family=" + getFamily() + ",name=" + name + ",style=" + strStyle + ",size="
				+ size + "]";
	} // toString()

	/**
	 * A flag to layoutGlyphVector indicating that text is left-to-right as
	 * determined by Bidi analysis.
	 */
	public static final int LAYOUT_LEFT_TO_RIGHT = 0;

	/**
	 * A flag to layoutGlyphVector indicating that text is right-to-left as
	 * determined by Bidi analysis.
	 */
	public static final int LAYOUT_RIGHT_TO_LEFT = 1;

	/**
	 * A flag to layoutGlyphVector indicating that text in the char array before
	 * the indicated start should not be examined.
	 */
	public static final int LAYOUT_NO_START_CONTEXT = 2;

	/**
	 * A flag to layoutGlyphVector indicating that text in the char array after
	 * the indicated limit should not be examined.
	 */
	public static final int LAYOUT_NO_LIMIT_CONTEXT = 4;

}
