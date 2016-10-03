/*
 * Copyright (c) 1996, 2013, Oracle and/or its affiliates. All rights reserved.
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

package java.awt.event;

import java.awt.Component;
import java.awt.Toolkit;

public class KeyEvent extends InputEvent {

	private boolean isProxyActive;

	public static final int KEY_FIRST = 400;

	public static final int KEY_LAST = 402;

	public static final int KEY_TYPED = KEY_FIRST;

	public static final int KEY_PRESSED = 1 + KEY_FIRST; // Event.KEY_PRESS

	public static final int KEY_RELEASED = 2 + KEY_FIRST; // Event.KEY_RELEASE

	/* Virtual key codes. */

	public static final int VK_ENTER = '\n';
	public static final int VK_BACK_SPACE = '\b';
	public static final int VK_TAB = '\t';
	public static final int VK_CANCEL = 0x03;
	public static final int VK_CLEAR = 0x0C;
	public static final int VK_SHIFT = 0x10;
	public static final int VK_CONTROL = 0x11;
	public static final int VK_ALT = 0x12;
	public static final int VK_PAUSE = 0x13;
	public static final int VK_CAPS_LOCK = 0x14;
	public static final int VK_ESCAPE = 0x1B;
	public static final int VK_SPACE = 0x20;
	public static final int VK_PAGE_UP = 0x21;
	public static final int VK_PAGE_DOWN = 0x22;
	public static final int VK_END = 0x23;
	public static final int VK_HOME = 0x24;

	public static final int VK_LEFT = 0x25;

	public static final int VK_UP = 0x26;

	public static final int VK_RIGHT = 0x27;

	public static final int VK_DOWN = 0x28;

	public static final int VK_COMMA = 0x2C;

	public static final int VK_MINUS = 0x2D;

	public static final int VK_PERIOD = 0x2E;

	public static final int VK_SLASH = 0x2F;

	/** VK_0 thru VK_9 are the same as ASCII '0' thru '9' (0x30 - 0x39) */
	public static final int VK_0 = 0x30;
	public static final int VK_1 = 0x31;
	public static final int VK_2 = 0x32;
	public static final int VK_3 = 0x33;
	public static final int VK_4 = 0x34;
	public static final int VK_5 = 0x35;
	public static final int VK_6 = 0x36;
	public static final int VK_7 = 0x37;
	public static final int VK_8 = 0x38;
	public static final int VK_9 = 0x39;

	public static final int VK_SEMICOLON = 0x3B;

	public static final int VK_EQUALS = 0x3D;

	/** VK_A thru VK_Z are the same as ASCII 'A' thru 'Z' (0x41 - 0x5A) */
	public static final int VK_A = 0x41;
	public static final int VK_B = 0x42;
	public static final int VK_C = 0x43;
	public static final int VK_D = 0x44;
	public static final int VK_E = 0x45;
	public static final int VK_F = 0x46;
	public static final int VK_G = 0x47;
	public static final int VK_H = 0x48;
	public static final int VK_I = 0x49;
	public static final int VK_J = 0x4A;
	public static final int VK_K = 0x4B;
	public static final int VK_L = 0x4C;
	public static final int VK_M = 0x4D;
	public static final int VK_N = 0x4E;
	public static final int VK_O = 0x4F;
	public static final int VK_P = 0x50;
	public static final int VK_Q = 0x51;
	public static final int VK_R = 0x52;
	public static final int VK_S = 0x53;
	public static final int VK_T = 0x54;
	public static final int VK_U = 0x55;
	public static final int VK_V = 0x56;
	public static final int VK_W = 0x57;
	public static final int VK_X = 0x58;
	public static final int VK_Y = 0x59;
	public static final int VK_Z = 0x5A;

	public static final int VK_OPEN_BRACKET = 0x5B;

	public static final int VK_BACK_SLASH = 0x5C;

	public static final int VK_CLOSE_BRACKET = 0x5D;

	public static final int VK_NUMPAD0 = 0x60;
	public static final int VK_NUMPAD1 = 0x61;
	public static final int VK_NUMPAD2 = 0x62;
	public static final int VK_NUMPAD3 = 0x63;
	public static final int VK_NUMPAD4 = 0x64;
	public static final int VK_NUMPAD5 = 0x65;
	public static final int VK_NUMPAD6 = 0x66;
	public static final int VK_NUMPAD7 = 0x67;
	public static final int VK_NUMPAD8 = 0x68;
	public static final int VK_NUMPAD9 = 0x69;
	public static final int VK_MULTIPLY = 0x6A;
	public static final int VK_ADD = 0x6B;

	public static final int VK_SEPARATER = 0x6C;

	public static final int VK_SEPARATOR = VK_SEPARATER;

	public static final int VK_SUBTRACT = 0x6D;
	public static final int VK_DECIMAL = 0x6E;
	public static final int VK_DIVIDE = 0x6F;
	public static final int VK_DELETE = 0x7F; /* ASCII DEL */
	public static final int VK_NUM_LOCK = 0x90;
	public static final int VK_SCROLL_LOCK = 0x91;

	public static final int VK_F1 = 0x70;

	public static final int VK_F2 = 0x71;

	public static final int VK_F3 = 0x72;

	public static final int VK_F4 = 0x73;

	public static final int VK_F5 = 0x74;

	public static final int VK_F6 = 0x75;

	public static final int VK_F7 = 0x76;

	public static final int VK_F8 = 0x77;

	public static final int VK_F9 = 0x78;

	public static final int VK_F10 = 0x79;

	public static final int VK_F11 = 0x7A;

	public static final int VK_F12 = 0x7B;

	public static final int VK_F13 = 0xF000;

	public static final int VK_F14 = 0xF001;

	public static final int VK_F15 = 0xF002;

	public static final int VK_F16 = 0xF003;

	public static final int VK_F17 = 0xF004;

	public static final int VK_F18 = 0xF005;

	public static final int VK_F19 = 0xF006;

	public static final int VK_F20 = 0xF007;

	public static final int VK_F21 = 0xF008;

	public static final int VK_F22 = 0xF009;

	public static final int VK_F23 = 0xF00A;

	public static final int VK_F24 = 0xF00B;

	public static final int VK_PRINTSCREEN = 0x9A;
	public static final int VK_INSERT = 0x9B;
	public static final int VK_HELP = 0x9C;
	public static final int VK_META = 0x9D;

	public static final int VK_BACK_QUOTE = 0xC0;
	public static final int VK_QUOTE = 0xDE;

	public static final int VK_KP_UP = 0xE0;

	public static final int VK_KP_DOWN = 0xE1;

	public static final int VK_KP_LEFT = 0xE2;

	public static final int VK_KP_RIGHT = 0xE3;

	public static final int VK_DEAD_GRAVE = 0x80;
	public static final int VK_DEAD_ACUTE = 0x81;
	public static final int VK_DEAD_CIRCUMFLEX = 0x82;
	public static final int VK_DEAD_TILDE = 0x83;
	public static final int VK_DEAD_MACRON = 0x84;
	public static final int VK_DEAD_BREVE = 0x85;
	public static final int VK_DEAD_ABOVEDOT = 0x86;
	public static final int VK_DEAD_DIAERESIS = 0x87;
	public static final int VK_DEAD_ABOVERING = 0x88;
	public static final int VK_DEAD_DOUBLEACUTE = 0x89;
	public static final int VK_DEAD_CARON = 0x8a;
	public static final int VK_DEAD_CEDILLA = 0x8b;
	public static final int VK_DEAD_OGONEK = 0x8c;
	public static final int VK_DEAD_IOTA = 0x8d;
	public static final int VK_DEAD_VOICED_SOUND = 0x8e;
	public static final int VK_DEAD_SEMIVOICED_SOUND = 0x8f;

	public static final int VK_AMPERSAND = 0x96;
	public static final int VK_ASTERISK = 0x97;
	public static final int VK_QUOTEDBL = 0x98;
	public static final int VK_LESS = 0x99;

	public static final int VK_GREATER = 0xa0;
	public static final int VK_BRACELEFT = 0xa1;
	public static final int VK_BRACERIGHT = 0xa2;

	public static final int VK_AT = 0x0200;

	public static final int VK_COLON = 0x0201;

	public static final int VK_CIRCUMFLEX = 0x0202;

	public static final int VK_DOLLAR = 0x0203;

	public static final int VK_EURO_SIGN = 0x0204;

	public static final int VK_EXCLAMATION_MARK = 0x0205;

	public static final int VK_INVERTED_EXCLAMATION_MARK = 0x0206;

	public static final int VK_LEFT_PARENTHESIS = 0x0207;

	public static final int VK_NUMBER_SIGN = 0x0208;

	public static final int VK_PLUS = 0x0209;

	public static final int VK_RIGHT_PARENTHESIS = 0x020A;

	public static final int VK_UNDERSCORE = 0x020B;

	public static final int VK_WINDOWS = 0x020C;

	public static final int VK_CONTEXT_MENU = 0x020D;

	public static final int VK_FINAL = 0x0018;

	public static final int VK_CONVERT = 0x001C;

	public static final int VK_NONCONVERT = 0x001D;

	public static final int VK_ACCEPT = 0x001E;

	public static final int VK_MODECHANGE = 0x001F;

	public static final int VK_KANA = 0x0015;

	public static final int VK_KANJI = 0x0019;

	public static final int VK_ALPHANUMERIC = 0x00F0;

	public static final int VK_KATAKANA = 0x00F1;

	public static final int VK_HIRAGANA = 0x00F2;

	public static final int VK_FULL_WIDTH = 0x00F3;

	public static final int VK_HALF_WIDTH = 0x00F4;

	public static final int VK_ROMAN_CHARACTERS = 0x00F5;

	public static final int VK_ALL_CANDIDATES = 0x0100;

	public static final int VK_PREVIOUS_CANDIDATE = 0x0101;

	public static final int VK_CODE_INPUT = 0x0102;

	public static final int VK_JAPANESE_KATAKANA = 0x0103;

	public static final int VK_JAPANESE_HIRAGANA = 0x0104;

	public static final int VK_JAPANESE_ROMAN = 0x0105;

	public static final int VK_KANA_LOCK = 0x0106;

	public static final int VK_INPUT_METHOD_ON_OFF = 0x0107;

	public static final int VK_CUT = 0xFFD1;
	public static final int VK_COPY = 0xFFCD;
	public static final int VK_PASTE = 0xFFCF;
	public static final int VK_UNDO = 0xFFCB;
	public static final int VK_AGAIN = 0xFFC9;
	public static final int VK_FIND = 0xFFD0;
	public static final int VK_PROPS = 0xFFCA;
	public static final int VK_STOP = 0xFFC8;

	public static final int VK_COMPOSE = 0xFF20;

	public static final int VK_ALT_GRAPH = 0xFF7E;

	public static final int VK_BEGIN = 0xFF58;

	public static final int VK_UNDEFINED = 0x0;

	public static final char CHAR_UNDEFINED = 0xFFFF;

	public static final int KEY_LOCATION_UNKNOWN = 0;

	public static final int KEY_LOCATION_STANDARD = 1;

	public static final int KEY_LOCATION_LEFT = 2;

	public static final int KEY_LOCATION_RIGHT = 3;

	public static final int KEY_LOCATION_NUMPAD = 4;

	int keyCode;

	char keyChar;

	int keyLocation;

	// private transient long rawCode = 0;
	// private transient long primaryLevelUnicode = 0;
	// private transient long scancode = 0; // for MS Windows only
	// private transient long extendedKeyCode = 0;

	private static final long serialVersionUID = -2352130953028126954L;

	private Component originalSource;

	private KeyEvent(Component source, int id, long when, int modifiers, int keyCode, char keyChar, int keyLocation,
			boolean isProxyActive) {
		this(source, id, when, modifiers, keyCode, keyChar, keyLocation);
		this.isProxyActive = isProxyActive;
	}

	public KeyEvent(Component source, int id, long when, int modifiers, int keyCode, char keyChar, int keyLocation) {
		super(source, id, when, modifiers);
		if (id == KEY_TYPED) {
			if (keyChar == CHAR_UNDEFINED) {
				throw new IllegalArgumentException("invalid keyChar");
			}
			if (keyCode != VK_UNDEFINED) {
				throw new IllegalArgumentException("invalid keyCode");
			}
			if (keyLocation != KEY_LOCATION_UNKNOWN) {
				throw new IllegalArgumentException("invalid keyLocation");
			}
		}

		this.keyCode = keyCode;
		this.keyChar = keyChar;

		if ((keyLocation < KEY_LOCATION_UNKNOWN) || (keyLocation > KEY_LOCATION_NUMPAD)) {
			throw new IllegalArgumentException("invalid keyLocation");
		}
		this.keyLocation = keyLocation;
		if ((getModifiers() != 0) && (getModifiersEx() == 0)) {
			setNewModifiers();
		} else if ((getModifiers() == 0) && (getModifiersEx() != 0)) {
			setOldModifiers();
		}
		originalSource = source;
	}

	public KeyEvent(Component source, int id, long when, int modifiers, int keyCode, char keyChar) {
		this(source, id, when, modifiers, keyCode, keyChar, KEY_LOCATION_UNKNOWN);
	}

	@Deprecated
	public KeyEvent(Component source, int id, long when, int modifiers, int keyCode) {
		this(source, id, when, modifiers, keyCode, (char) keyCode);
	}

	public int getKeyCode() {
		return keyCode;
	}

	public void setKeyCode(int keyCode) {
		this.keyCode = keyCode;
	}

	public char getKeyChar() {
		return keyChar;
	}

	public void setKeyChar(char keyChar) {
		this.keyChar = keyChar;
	}

	@Deprecated
	public void setModifiers(int modifiers) {
		this.modifiers = modifiers;
		if ((getModifiers() != 0) && (getModifiersEx() == 0)) {
			setNewModifiers();
		} else if ((getModifiers() == 0) && (getModifiersEx() != 0)) {
			setOldModifiers();
		}
	}

	public int getKeyLocation() {
		return keyLocation;
	}

	public static String getKeyText(int keyCode) {
		if (keyCode >= VK_0 && keyCode <= VK_9 || keyCode >= VK_A && keyCode <= VK_Z) {
			return String.valueOf((char) keyCode);
		}

		switch (keyCode) {
		case VK_ENTER:
			return "Enter";
		case VK_BACK_SPACE:
			return Toolkit.getProperty("AWT.backSpace", "Backspace");
		case VK_TAB:
			return Toolkit.getProperty("AWT.tab", "Tab");
		case VK_CANCEL:
			return Toolkit.getProperty("AWT.cancel", "Cancel");
		case VK_CLEAR:
			return Toolkit.getProperty("AWT.clear", "Clear");
		case VK_COMPOSE:
			return Toolkit.getProperty("AWT.compose", "Compose");
		case VK_PAUSE:
			return Toolkit.getProperty("AWT.pause", "Pause");
		case VK_CAPS_LOCK:
			return Toolkit.getProperty("AWT.capsLock", "Caps Lock");
		case VK_ESCAPE:
			return Toolkit.getProperty("AWT.escape", "Escape");
		case VK_SPACE:
			return Toolkit.getProperty("AWT.space", "Space");
		case VK_PAGE_UP:
			return Toolkit.getProperty("AWT.pgup", "Page Up");
		case VK_PAGE_DOWN:
			return Toolkit.getProperty("AWT.pgdn", "Page Down");
		case VK_END:
			return Toolkit.getProperty("AWT.end", "End");
		case VK_HOME:
			return Toolkit.getProperty("AWT.home", "Home");
		case VK_LEFT:
			return Toolkit.getProperty("AWT.left", "Left");
		case VK_UP:
			return Toolkit.getProperty("AWT.up", "Up");
		case VK_RIGHT:
			return Toolkit.getProperty("AWT.right", "Right");
		case VK_DOWN:
			return Toolkit.getProperty("AWT.down", "Down");
		case VK_BEGIN:
			return Toolkit.getProperty("AWT.begin", "Begin");

		// modifiers
		case VK_SHIFT:
			return Toolkit.getProperty("AWT.shift", "Shift");
		case VK_CONTROL:
			return Toolkit.getProperty("AWT.control", "Control");
		case VK_ALT:
			return Toolkit.getProperty("AWT.alt", "Alt");
		case VK_META:
			return Toolkit.getProperty("AWT.meta", "Meta");
		case VK_ALT_GRAPH:
			return Toolkit.getProperty("AWT.altGraph", "Alt Graph");

		// punctuation
		case VK_COMMA:
			return Toolkit.getProperty("AWT.comma", "Comma");
		case VK_PERIOD:
			return Toolkit.getProperty("AWT.period", "Period");
		case VK_SLASH:
			return Toolkit.getProperty("AWT.slash", "Slash");
		case VK_SEMICOLON:
			return Toolkit.getProperty("AWT.semicolon", "Semicolon");
		case VK_EQUALS:
			return Toolkit.getProperty("AWT.equals", "Equals");
		case VK_OPEN_BRACKET:
			return Toolkit.getProperty("AWT.openBracket", "Open Bracket");
		case VK_BACK_SLASH:
			return Toolkit.getProperty("AWT.backSlash", "Back Slash");
		case VK_CLOSE_BRACKET:
			return Toolkit.getProperty("AWT.closeBracket", "Close Bracket");

		// numpad numeric keys handled below
		case VK_MULTIPLY:
			return Toolkit.getProperty("AWT.multiply", "NumPad *");
		case VK_ADD:
			return Toolkit.getProperty("AWT.add", "NumPad +");
		case VK_SEPARATOR:
			return Toolkit.getProperty("AWT.separator", "NumPad ,");
		case VK_SUBTRACT:
			return Toolkit.getProperty("AWT.subtract", "NumPad -");
		case VK_DECIMAL:
			return Toolkit.getProperty("AWT.decimal", "NumPad .");
		case VK_DIVIDE:
			return Toolkit.getProperty("AWT.divide", "NumPad /");
		case VK_DELETE:
			return Toolkit.getProperty("AWT.delete", "Delete");
		case VK_NUM_LOCK:
			return Toolkit.getProperty("AWT.numLock", "Num Lock");
		case VK_SCROLL_LOCK:
			return Toolkit.getProperty("AWT.scrollLock", "Scroll Lock");

		case VK_WINDOWS:
			return Toolkit.getProperty("AWT.windows", "Windows");
		case VK_CONTEXT_MENU:
			return Toolkit.getProperty("AWT.context", "Context Menu");

		case VK_F1:
			return Toolkit.getProperty("AWT.f1", "F1");
		case VK_F2:
			return Toolkit.getProperty("AWT.f2", "F2");
		case VK_F3:
			return Toolkit.getProperty("AWT.f3", "F3");
		case VK_F4:
			return Toolkit.getProperty("AWT.f4", "F4");
		case VK_F5:
			return Toolkit.getProperty("AWT.f5", "F5");
		case VK_F6:
			return Toolkit.getProperty("AWT.f6", "F6");
		case VK_F7:
			return Toolkit.getProperty("AWT.f7", "F7");
		case VK_F8:
			return Toolkit.getProperty("AWT.f8", "F8");
		case VK_F9:
			return Toolkit.getProperty("AWT.f9", "F9");
		case VK_F10:
			return Toolkit.getProperty("AWT.f10", "F10");
		case VK_F11:
			return Toolkit.getProperty("AWT.f11", "F11");
		case VK_F12:
			return Toolkit.getProperty("AWT.f12", "F12");
		case VK_F13:
			return Toolkit.getProperty("AWT.f13", "F13");
		case VK_F14:
			return Toolkit.getProperty("AWT.f14", "F14");
		case VK_F15:
			return Toolkit.getProperty("AWT.f15", "F15");
		case VK_F16:
			return Toolkit.getProperty("AWT.f16", "F16");
		case VK_F17:
			return Toolkit.getProperty("AWT.f17", "F17");
		case VK_F18:
			return Toolkit.getProperty("AWT.f18", "F18");
		case VK_F19:
			return Toolkit.getProperty("AWT.f19", "F19");
		case VK_F20:
			return Toolkit.getProperty("AWT.f20", "F20");
		case VK_F21:
			return Toolkit.getProperty("AWT.f21", "F21");
		case VK_F22:
			return Toolkit.getProperty("AWT.f22", "F22");
		case VK_F23:
			return Toolkit.getProperty("AWT.f23", "F23");
		case VK_F24:
			return Toolkit.getProperty("AWT.f24", "F24");

		case VK_PRINTSCREEN:
			return Toolkit.getProperty("AWT.printScreen", "Print Screen");
		case VK_INSERT:
			return Toolkit.getProperty("AWT.insert", "Insert");
		case VK_HELP:
			return Toolkit.getProperty("AWT.help", "Help");
		case VK_BACK_QUOTE:
			return Toolkit.getProperty("AWT.backQuote", "Back Quote");
		case VK_QUOTE:
			return Toolkit.getProperty("AWT.quote", "Quote");

		case VK_KP_UP:
			return Toolkit.getProperty("AWT.up", "Up");
		case VK_KP_DOWN:
			return Toolkit.getProperty("AWT.down", "Down");
		case VK_KP_LEFT:
			return Toolkit.getProperty("AWT.left", "Left");
		case VK_KP_RIGHT:
			return Toolkit.getProperty("AWT.right", "Right");

		case VK_DEAD_GRAVE:
			return Toolkit.getProperty("AWT.deadGrave", "Dead Grave");
		case VK_DEAD_ACUTE:
			return Toolkit.getProperty("AWT.deadAcute", "Dead Acute");
		case VK_DEAD_CIRCUMFLEX:
			return Toolkit.getProperty("AWT.deadCircumflex", "Dead Circumflex");
		case VK_DEAD_TILDE:
			return Toolkit.getProperty("AWT.deadTilde", "Dead Tilde");
		case VK_DEAD_MACRON:
			return Toolkit.getProperty("AWT.deadMacron", "Dead Macron");
		case VK_DEAD_BREVE:
			return Toolkit.getProperty("AWT.deadBreve", "Dead Breve");
		case VK_DEAD_ABOVEDOT:
			return Toolkit.getProperty("AWT.deadAboveDot", "Dead Above Dot");
		case VK_DEAD_DIAERESIS:
			return Toolkit.getProperty("AWT.deadDiaeresis", "Dead Diaeresis");
		case VK_DEAD_ABOVERING:
			return Toolkit.getProperty("AWT.deadAboveRing", "Dead Above Ring");
		case VK_DEAD_DOUBLEACUTE:
			return Toolkit.getProperty("AWT.deadDoubleAcute", "Dead Double Acute");
		case VK_DEAD_CARON:
			return Toolkit.getProperty("AWT.deadCaron", "Dead Caron");
		case VK_DEAD_CEDILLA:
			return Toolkit.getProperty("AWT.deadCedilla", "Dead Cedilla");
		case VK_DEAD_OGONEK:
			return Toolkit.getProperty("AWT.deadOgonek", "Dead Ogonek");
		case VK_DEAD_IOTA:
			return Toolkit.getProperty("AWT.deadIota", "Dead Iota");
		case VK_DEAD_VOICED_SOUND:
			return Toolkit.getProperty("AWT.deadVoicedSound", "Dead Voiced Sound");
		case VK_DEAD_SEMIVOICED_SOUND:
			return Toolkit.getProperty("AWT.deadSemivoicedSound", "Dead Semivoiced Sound");

		case VK_AMPERSAND:
			return Toolkit.getProperty("AWT.ampersand", "Ampersand");
		case VK_ASTERISK:
			return Toolkit.getProperty("AWT.asterisk", "Asterisk");
		case VK_QUOTEDBL:
			return Toolkit.getProperty("AWT.quoteDbl", "Double Quote");
		case VK_LESS:
			return Toolkit.getProperty("AWT.Less", "Less");
		case VK_GREATER:
			return Toolkit.getProperty("AWT.greater", "Greater");
		case VK_BRACELEFT:
			return Toolkit.getProperty("AWT.braceLeft", "Left Brace");
		case VK_BRACERIGHT:
			return Toolkit.getProperty("AWT.braceRight", "Right Brace");
		case VK_AT:
			return Toolkit.getProperty("AWT.at", "At");
		case VK_COLON:
			return Toolkit.getProperty("AWT.colon", "Colon");
		case VK_CIRCUMFLEX:
			return Toolkit.getProperty("AWT.circumflex", "Circumflex");
		case VK_DOLLAR:
			return Toolkit.getProperty("AWT.dollar", "Dollar");
		case VK_EURO_SIGN:
			return Toolkit.getProperty("AWT.euro", "Euro");
		case VK_EXCLAMATION_MARK:
			return Toolkit.getProperty("AWT.exclamationMark", "Exclamation Mark");
		case VK_INVERTED_EXCLAMATION_MARK:
			return Toolkit.getProperty("AWT.invertedExclamationMark", "Inverted Exclamation Mark");
		case VK_LEFT_PARENTHESIS:
			return Toolkit.getProperty("AWT.leftParenthesis", "Left Parenthesis");
		case VK_NUMBER_SIGN:
			return Toolkit.getProperty("AWT.numberSign", "Number Sign");
		case VK_MINUS:
			return Toolkit.getProperty("AWT.minus", "Minus");
		case VK_PLUS:
			return Toolkit.getProperty("AWT.plus", "Plus");
		case VK_RIGHT_PARENTHESIS:
			return Toolkit.getProperty("AWT.rightParenthesis", "Right Parenthesis");
		case VK_UNDERSCORE:
			return Toolkit.getProperty("AWT.underscore", "Underscore");

		case VK_FINAL:
			return Toolkit.getProperty("AWT.final", "Final");
		case VK_CONVERT:
			return Toolkit.getProperty("AWT.convert", "Convert");
		case VK_NONCONVERT:
			return Toolkit.getProperty("AWT.noconvert", "No Convert");
		case VK_ACCEPT:
			return Toolkit.getProperty("AWT.accept", "Accept");
		case VK_MODECHANGE:
			return Toolkit.getProperty("AWT.modechange", "Mode Change");
		case VK_KANA:
			return Toolkit.getProperty("AWT.kana", "Kana");
		case VK_KANJI:
			return Toolkit.getProperty("AWT.kanji", "Kanji");
		case VK_ALPHANUMERIC:
			return Toolkit.getProperty("AWT.alphanumeric", "Alphanumeric");
		case VK_KATAKANA:
			return Toolkit.getProperty("AWT.katakana", "Katakana");
		case VK_HIRAGANA:
			return Toolkit.getProperty("AWT.hiragana", "Hiragana");
		case VK_FULL_WIDTH:
			return Toolkit.getProperty("AWT.fullWidth", "Full-Width");
		case VK_HALF_WIDTH:
			return Toolkit.getProperty("AWT.halfWidth", "Half-Width");
		case VK_ROMAN_CHARACTERS:
			return Toolkit.getProperty("AWT.romanCharacters", "Roman Characters");
		case VK_ALL_CANDIDATES:
			return Toolkit.getProperty("AWT.allCandidates", "All Candidates");
		case VK_PREVIOUS_CANDIDATE:
			return Toolkit.getProperty("AWT.previousCandidate", "Previous Candidate");
		case VK_CODE_INPUT:
			return Toolkit.getProperty("AWT.codeInput", "Code Input");
		case VK_JAPANESE_KATAKANA:
			return Toolkit.getProperty("AWT.japaneseKatakana", "Japanese Katakana");
		case VK_JAPANESE_HIRAGANA:
			return Toolkit.getProperty("AWT.japaneseHiragana", "Japanese Hiragana");
		case VK_JAPANESE_ROMAN:
			return Toolkit.getProperty("AWT.japaneseRoman", "Japanese Roman");
		case VK_KANA_LOCK:
			return Toolkit.getProperty("AWT.kanaLock", "Kana Lock");
		case VK_INPUT_METHOD_ON_OFF:
			return Toolkit.getProperty("AWT.inputMethodOnOff", "Input Method On/Off");

		case VK_AGAIN:
			return Toolkit.getProperty("AWT.again", "Again");
		case VK_UNDO:
			return Toolkit.getProperty("AWT.undo", "Undo");
		case VK_COPY:
			return Toolkit.getProperty("AWT.copy", "Copy");
		case VK_PASTE:
			return Toolkit.getProperty("AWT.paste", "Paste");
		case VK_CUT:
			return Toolkit.getProperty("AWT.cut", "Cut");
		case VK_FIND:
			return Toolkit.getProperty("AWT.find", "Find");
		case VK_PROPS:
			return Toolkit.getProperty("AWT.props", "Props");
		case VK_STOP:
			return Toolkit.getProperty("AWT.stop", "Stop");
		}

		if (keyCode >= VK_NUMPAD0 && keyCode <= VK_NUMPAD9) {
			String numpad = Toolkit.getProperty("AWT.numpad", "NumPad");
			char c = (char) (keyCode - VK_NUMPAD0 + '0');
			return numpad + "-" + c;
		}

		if ((keyCode & 0x01000000) != 0) {
			return String.valueOf((char) (keyCode ^ 0x01000000));
		}
		String unknown = Toolkit.getProperty("AWT.unknown", "Unknown");
		return unknown + " keyCode: 0x" + Integer.toString(keyCode, 16);
	}

	public static String getKeyModifiersText(int modifiers) {
		StringBuilder buf = new StringBuilder();
		if ((modifiers & InputEvent.META_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.meta", "Meta"));
			buf.append("+");
		}
		if ((modifiers & InputEvent.CTRL_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.control", "Ctrl"));
			buf.append("+");
		}
		if ((modifiers & InputEvent.ALT_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.alt", "Alt"));
			buf.append("+");
		}
		if ((modifiers & InputEvent.SHIFT_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.shift", "Shift"));
			buf.append("+");
		}
		if ((modifiers & InputEvent.ALT_GRAPH_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.altGraph", "Alt Graph"));
			buf.append("+");
		}
		if ((modifiers & InputEvent.BUTTON1_MASK) != 0) {
			buf.append(Toolkit.getProperty("AWT.button1", "Button1"));
			buf.append("+");
		}
		if (buf.length() > 0) {
			buf.setLength(buf.length() - 1); // remove trailing '+'
		}
		return buf.toString();
	}

	public boolean isActionKey() {
		switch (keyCode) {
		case VK_HOME:
		case VK_END:
		case VK_PAGE_UP:
		case VK_PAGE_DOWN:
		case VK_UP:
		case VK_DOWN:
		case VK_LEFT:
		case VK_RIGHT:
		case VK_BEGIN:

		case VK_KP_LEFT:
		case VK_KP_UP:
		case VK_KP_RIGHT:
		case VK_KP_DOWN:

		case VK_F1:
		case VK_F2:
		case VK_F3:
		case VK_F4:
		case VK_F5:
		case VK_F6:
		case VK_F7:
		case VK_F8:
		case VK_F9:
		case VK_F10:
		case VK_F11:
		case VK_F12:
		case VK_F13:
		case VK_F14:
		case VK_F15:
		case VK_F16:
		case VK_F17:
		case VK_F18:
		case VK_F19:
		case VK_F20:
		case VK_F21:
		case VK_F22:
		case VK_F23:
		case VK_F24:
		case VK_PRINTSCREEN:
		case VK_SCROLL_LOCK:
		case VK_CAPS_LOCK:
		case VK_NUM_LOCK:
		case VK_PAUSE:
		case VK_INSERT:

		case VK_FINAL:
		case VK_CONVERT:
		case VK_NONCONVERT:
		case VK_ACCEPT:
		case VK_MODECHANGE:
		case VK_KANA:
		case VK_KANJI:
		case VK_ALPHANUMERIC:
		case VK_KATAKANA:
		case VK_HIRAGANA:
		case VK_FULL_WIDTH:
		case VK_HALF_WIDTH:
		case VK_ROMAN_CHARACTERS:
		case VK_ALL_CANDIDATES:
		case VK_PREVIOUS_CANDIDATE:
		case VK_CODE_INPUT:
		case VK_JAPANESE_KATAKANA:
		case VK_JAPANESE_HIRAGANA:
		case VK_JAPANESE_ROMAN:
		case VK_KANA_LOCK:
		case VK_INPUT_METHOD_ON_OFF:

		case VK_AGAIN:
		case VK_UNDO:
		case VK_COPY:
		case VK_PASTE:
		case VK_CUT:
		case VK_FIND:
		case VK_PROPS:
		case VK_STOP:

		case VK_HELP:
		case VK_WINDOWS:
		case VK_CONTEXT_MENU:
			return true;
		}
		return false;
	}

	public String paramString() {
		StringBuilder str = new StringBuilder(100);

		switch (id) {
		case KEY_PRESSED:
			str.append("KEY_PRESSED");
			break;
		case KEY_RELEASED:
			str.append("KEY_RELEASED");
			break;
		case KEY_TYPED:
			str.append("KEY_TYPED");
			break;
		default:
			str.append("unknown type");
			break;
		}

		str.append(",keyCode=").append(keyCode);
		str.append(",keyText=").append(getKeyText(keyCode));

		/*
		 * Some keychars don't print well, e.g. escape, backspace, tab, return,
		 * delete, cancel. Get keyText for the keyCode instead of the keyChar.
		 */
		str.append(",keyChar=");
		switch (keyChar) {
		case '\b':
			str.append(getKeyText(VK_BACK_SPACE));
			break;
		case '\t':
			str.append(getKeyText(VK_TAB));
			break;
		case '\n':
			str.append(getKeyText(VK_ENTER));
			break;
		case '\u0018':
			str.append(getKeyText(VK_CANCEL));
			break;
		case '\u001b':
			str.append(getKeyText(VK_ESCAPE));
			break;
		case '\u007f':
			str.append(getKeyText(VK_DELETE));
			break;
		case CHAR_UNDEFINED:
			str.append(Toolkit.getProperty("AWT.undefined", "Undefined"));
			str.append(" keyChar");
			break;
		default:
			str.append("'").append(keyChar).append("'");
			break;
		}

		if (getModifiers() != 0) {
			str.append(",modifiers=").append(getKeyModifiersText(modifiers));
		}
		if (getModifiersEx() != 0) {
			str.append(",extModifiers=").append(getModifiersExText(modifiers));
		}

		str.append(",keyLocation=");
		switch (keyLocation) {
		case KEY_LOCATION_UNKNOWN:
			str.append("KEY_LOCATION_UNKNOWN");
			break;
		case KEY_LOCATION_STANDARD:
			str.append("KEY_LOCATION_STANDARD");
			break;
		case KEY_LOCATION_LEFT:
			str.append("KEY_LOCATION_LEFT");
			break;
		case KEY_LOCATION_RIGHT:
			str.append("KEY_LOCATION_RIGHT");
			break;
		case KEY_LOCATION_NUMPAD:
			str.append("KEY_LOCATION_NUMPAD");
			break;
		default:
			str.append("KEY_LOCATION_UNKNOWN");
			break;
		}
		// str.append(",rawCode=").append(rawCode);
		// str.append(",primaryLevelUnicode=").append(primaryLevelUnicode);
		// str.append(",scancode=").append(scancode);
		// str.append(",extendedKeyCode=0x").append(Long.toHexString(extendedKeyCode));

		return str.toString();
	}

	public int getExtendedKeyCode() {
		return (int) getExtendedKeyCodeForChar(keyChar);
	}

	/**
	 * Returns an extended key code for a unicode character.
	 *
	 * @return for a unicode character with a corresponding {@code VK_} constant
	 *         -- this {@code VK_} constant; for a character appearing on the
	 *         primary level of a known keyboard layout -- a unique integer. If
	 *         a character does not appear on the primary level of a known
	 *         keyboard, {@code VK_UNDEFINED} is returned.
	 *
	 * @since 1.7
	 *
	 */
	public static int getExtendedKeyCodeForChar(int c) {
		// Return a keycode (if any) associated with a character.
		return sun.awt.ExtendedKeyCodes.getExtendedKeyCodeForChar(c);
	}

	/**
	 * Sets new modifiers by the old ones. The key modifiers override overlaping
	 * mouse modifiers.
	 */
	private void setNewModifiers() {
		if ((modifiers & SHIFT_MASK) != 0) {
			modifiers |= SHIFT_DOWN_MASK;
		}
		if ((modifiers & ALT_MASK) != 0) {
			modifiers |= ALT_DOWN_MASK;
		}
		if ((modifiers & CTRL_MASK) != 0) {
			modifiers |= CTRL_DOWN_MASK;
		}
		if ((modifiers & META_MASK) != 0) {
			modifiers |= META_DOWN_MASK;
		}
		if ((modifiers & ALT_GRAPH_MASK) != 0) {
			modifiers |= ALT_GRAPH_DOWN_MASK;
		}
		if ((modifiers & BUTTON1_MASK) != 0) {
			modifiers |= BUTTON1_DOWN_MASK;
		}
	}

	private void setOldModifiers() {
		if ((modifiers & SHIFT_DOWN_MASK) != 0) {
			modifiers |= SHIFT_MASK;
		}
		if ((modifiers & ALT_DOWN_MASK) != 0) {
			modifiers |= ALT_MASK;
		}
		if ((modifiers & CTRL_DOWN_MASK) != 0) {
			modifiers |= CTRL_MASK;
		}
		if ((modifiers & META_DOWN_MASK) != 0) {
			modifiers |= META_MASK;
		}
		if ((modifiers & ALT_GRAPH_DOWN_MASK) != 0) {
			modifiers |= ALT_GRAPH_MASK;
		}
		if ((modifiers & BUTTON1_DOWN_MASK) != 0) {
			modifiers |= BUTTON1_MASK;
		}
	}

}
