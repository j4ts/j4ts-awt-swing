declare namespace java.awt {
    abstract class AbstractHTMLComponent implements java.awt.HTMLComponent {
        abstract createHTML(): any;
        htmlElement: HTMLElement;
        bindHTML(htmlElement: HTMLElement): void;
        getHTMLElement(): HTMLElement;
        initHTML(): void;
        constructor();
    }
}
declare namespace java.awt {
    interface Adjustable {
        getOrientation(): number;
        setMinimum(min: number): any;
        getMinimum(): number;
        setMaximum(max: number): any;
        getMaximum(): number;
        setUnitIncrement(u: number): any;
        getUnitIncrement(): number;
        setBlockIncrement(b: number): any;
        getBlockIncrement(): number;
        setVisibleAmount(v: number): any;
        getVisibleAmount(): number;
        setValue(v: number): any;
        getValue(): number;
        addAdjustmentListener(l: java.awt.event.AdjustmentListener): any;
        removeAdjustmentListener(l: java.awt.event.AdjustmentListener): any;
    }
    namespace Adjustable {
        var HORIZONTAL: number;
        var VERTICAL: number;
        var NO_ORIENTATION: number;
    }
}
declare namespace java.awt {
    abstract class AWTEvent extends java.util.EventObject {
        id: number;
        consumed: boolean;
        /**
         * The event mask for selecting component events.
         */
        static COMPONENT_EVENT_MASK: number;
        /**
         * The event mask for selecting container events.
         */
        static CONTAINER_EVENT_MASK: number;
        /**
         * The event mask for selecting focus events.
         */
        static FOCUS_EVENT_MASK: number;
        /**
         * The event mask for selecting key events.
         */
        static KEY_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse events.
         */
        static MOUSE_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse motion events.
         */
        static MOUSE_MOTION_EVENT_MASK: number;
        /**
         * The event mask for selecting window events.
         */
        static WINDOW_EVENT_MASK: number;
        /**
         * The event mask for selecting action events.
         */
        static ACTION_EVENT_MASK: number;
        /**
         * The event mask for selecting adjustment events.
         */
        static ADJUSTMENT_EVENT_MASK: number;
        /**
         * The event mask for selecting item events.
         */
        static ITEM_EVENT_MASK: number;
        /**
         * The event mask for selecting text events.
         */
        static TEXT_EVENT_MASK: number;
        /**
         * The event mask for selecting input method events.
         */
        static INPUT_METHOD_EVENT_MASK: number;
        /**
         * The pseudo event mask for enabling input methods. We're using one bit in
         * the eventMask so we don't need a separate field inputMethodsEnabled.
         */
        static INPUT_METHODS_ENABLED_MASK: number;
        /**
         * The event mask for selecting paint events.
         */
        static PAINT_EVENT_MASK: number;
        /**
         * The event mask for selecting invocation events.
         */
        static INVOCATION_EVENT_MASK: number;
        /**
         * The event mask for selecting hierarchy events.
         */
        static HIERARCHY_EVENT_MASK: number;
        /**
         * The event mask for selecting hierarchy bounds events.
         */
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse wheel events.
         *
         * @since 1.4
         */
        static MOUSE_WHEEL_EVENT_MASK: number;
        /**
         * The event mask for selecting window state events.
         *
         * @since 1.4
         */
        static WINDOW_STATE_EVENT_MASK: number;
        /**
         * The event mask for selecting window focus events.
         *
         * @since 1.4
         */
        static WINDOW_FOCUS_EVENT_MASK: number;
        /**
         * The maximum value for reserved AWT event IDs. Programs defining their own
         * event IDs should use IDs greater than this value.
         */
        static RESERVED_ID_MAX: number;
        constructor(source?: any, id?: any);
        setSource(newSource: any): void;
        /**
         * Returns a String representation of this object.
         */
        toString(): string;
        paramString(): string;
        consume(): void;
        isConsumed(): boolean;
    }
}
declare namespace java.awt {
    class CheckboxGroup implements java.io.Serializable {
        selectedCheckbox: java.awt.Checkbox;
        static serialVersionUID: number;
        constructor();
        getSelectedCheckbox(): java.awt.Checkbox;
        getCurrent(): java.awt.Checkbox;
        setSelectedCheckbox(box: java.awt.Checkbox): void;
        setCurrent(box: java.awt.Checkbox): void;
        toString(): string;
    }
}
declare namespace java.awt {
    class Color implements java.awt.Paint, java.io.Serializable {
        /**
         * The color white. In the default sRGB space.
         */
        static white: Color;
        static white_$LI$(): Color;
        /**
         * The color white. In the default sRGB space.
         *
         * @since 1.4
         */
        static WHITE: Color;
        static WHITE_$LI$(): Color;
        /**
         * The color light gray. In the default sRGB space.
         */
        static lightGray: Color;
        static lightGray_$LI$(): Color;
        /**
         * The color light gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static LIGHT_GRAY: Color;
        static LIGHT_GRAY_$LI$(): Color;
        /**
         * The color gray. In the default sRGB space.
         */
        static gray: Color;
        static gray_$LI$(): Color;
        /**
         * The color gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static GRAY: Color;
        static GRAY_$LI$(): Color;
        /**
         * The color dark gray. In the default sRGB space.
         */
        static darkGray: Color;
        static darkGray_$LI$(): Color;
        /**
         * The color dark gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static DARK_GRAY: Color;
        static DARK_GRAY_$LI$(): Color;
        /**
         * The color black. In the default sRGB space.
         */
        static black: Color;
        static black_$LI$(): Color;
        /**
         * The color black. In the default sRGB space.
         *
         * @since 1.4
         */
        static BLACK: Color;
        static BLACK_$LI$(): Color;
        /**
         * The color red. In the default sRGB space.
         */
        static red: Color;
        static red_$LI$(): Color;
        /**
         * The color red. In the default sRGB space.
         *
         * @since 1.4
         */
        static RED: Color;
        static RED_$LI$(): Color;
        /**
         * The color pink. In the default sRGB space.
         */
        static pink: Color;
        static pink_$LI$(): Color;
        /**
         * The color pink. In the default sRGB space.
         *
         * @since 1.4
         */
        static PINK: Color;
        static PINK_$LI$(): Color;
        /**
         * The color orange. In the default sRGB space.
         */
        static orange: Color;
        static orange_$LI$(): Color;
        /**
         * The color orange. In the default sRGB space.
         *
         * @since 1.4
         */
        static ORANGE: Color;
        static ORANGE_$LI$(): Color;
        /**
         * The color yellow. In the default sRGB space.
         */
        static yellow: Color;
        static yellow_$LI$(): Color;
        /**
         * The color yellow. In the default sRGB space.
         *
         * @since 1.4
         */
        static YELLOW: Color;
        static YELLOW_$LI$(): Color;
        /**
         * The color green. In the default sRGB space.
         */
        static green: Color;
        static green_$LI$(): Color;
        /**
         * The color green. In the default sRGB space.
         *
         * @since 1.4
         */
        static GREEN: Color;
        static GREEN_$LI$(): Color;
        /**
         * The color magenta. In the default sRGB space.
         */
        static magenta: Color;
        static magenta_$LI$(): Color;
        /**
         * The color magenta. In the default sRGB space.
         *
         * @since 1.4
         */
        static MAGENTA: Color;
        static MAGENTA_$LI$(): Color;
        /**
         * The color cyan. In the default sRGB space.
         */
        static cyan: Color;
        static cyan_$LI$(): Color;
        /**
         * The color cyan. In the default sRGB space.
         *
         * @since 1.4
         */
        static CYAN: Color;
        static CYAN_$LI$(): Color;
        /**
         * The color blue. In the default sRGB space.
         */
        static blue: Color;
        static blue_$LI$(): Color;
        /**
         * The color blue. In the default sRGB space.
         *
         * @since 1.4
         */
        static BLUE: Color;
        static BLUE_$LI$(): Color;
        /**
         * The color value.
         *
         * @serial
         * @see #getRGB
         */
        value: number;
        /**
         * The color value in the default sRGB <code>ColorSpace</code> as
         * <code>float</code> components (no alpha). If <code>null</code> after
         * object construction, this must be an sRGB color constructed with 8-bit
         * precision, so compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBColorComponents
         * @see #getRGBComponents
         */
        private frgbvalue;
        /**
         * The color value in the native <code>ColorSpace</code> as
         * <code>float</code> components (no alpha). If <code>null</code> after
         * object construction, this must be an sRGB color constructed with 8-bit
         * precision, so compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBColorComponents
         * @see #getRGBComponents
         */
        private fvalue;
        /**
         * The alpha value as a <code>float</code> component. If
         * <code>frgbvalue</code> is <code>null</code>, this is not valid data, so
         * compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBComponents
         * @see #getComponents
         */
        private falpha;
        static serialVersionUID: number;
        /**
         * Checks the color integer components supplied for validity. Throws an
         * {@link IllegalArgumentException} if the value is out of range.
         *
         * @param r
         * the Red component
         * @param g
         * the Green component
         * @param b
         * the Blue component
         */
        static testColorValueRange(r?: any, g?: any, b?: any, a?: any): any;
        /**
         * Checks the color <code>float</code> components supplied for validity.
         * Throws an <code>IllegalArgumentException</code> if the value is out of
         * range.
         *
         * @param r
         * the Red component
         * @param g
         * the Green component
         * @param b
         * the Blue component
         */
        private static testColorValueRange$float$float$float$float(r, g, b, a);
        /**
         * Creates an sRGB color with the specified red, green, blue, and alpha
         * values in the range (0 - 255).
         *
         * @throws IllegalArgumentException
         * if <code>r</code>, <code>g</code>, <code>b</code> or
         * <code>a</code> are outside of the range 0 to 255, inclusive
         * @param r
         * the red component
         * @param g
         * the green component
         * @param b
         * the blue component
         * @param a
         * the alpha component
         * @see #getRed
         * @see #getGreen
         * @see #getBlue
         * @see #getAlpha
         * @see #getRGB
         */
        constructor(r?: any, g?: any, b?: any, a?: any);
        /**
         * Returns the red component in the range 0-255 in the default sRGB space.
         *
         * @return the red component.
         * @see #getRGB
         */
        getRed(): number;
        /**
         * Returns the green component in the range 0-255 in the default sRGB space.
         *
         * @return the green component.
         * @see #getRGB
         */
        getGreen(): number;
        /**
         * Returns the blue component in the range 0-255 in the default sRGB space.
         *
         * @return the blue component.
         * @see #getRGB
         */
        getBlue(): number;
        /**
         * Returns the alpha component in the range 0-255.
         *
         * @return the alpha component.
         * @see #getRGB
         */
        getAlpha(): number;
        /**
         * Returns the RGB value representing the color in the default sRGB
         * {@link ColorModel}. (Bits 24-31 are alpha, 16-23 are red, 8-15 are green,
         * 0-7 are blue).
         *
         * @return the RGB value of the color in the default sRGB
         * <code>ColorModel</code>.
         * @see java.awt.image.ColorModel#getRGBdefault
         * @see #getRed
         * @see #getGreen
         * @see #getBlue
         * @since JDK1.0
         */
        getRGB(): number;
        static FACTOR: number;
        /**
         * Creates a new <code>Color</code> that is a brighter version of this
         * <code>Color</code>.
         * <p>
         * This method applies an arbitrary scale factor to each of the three RGB
         * components of this <code>Color</code> to create a brighter version of
         * this <code>Color</code>. The {@code alpha} value is preserved. Although
         * <code>brighter</code> and <code>darker</code> are inverse operations, the
         * results of a series of invocations of these two methods might be
         * inconsistent because of rounding errors.
         *
         * @return a new <code>Color</code> object that is a brighter version of
         * this <code>Color</code> with the same {@code alpha} value.
         * @see java.awt.Color#darker
         * @since JDK1.0
         */
        brighter(): Color;
        /**
         * Creates a new <code>Color</code> that is a darker version of this
         * <code>Color</code>.
         * <p>
         * This method applies an arbitrary scale factor to each of the three RGB
         * components of this <code>Color</code> to create a darker version of this
         * <code>Color</code>. The {@code alpha} value is preserved. Although
         * <code>brighter</code> and <code>darker</code> are inverse operations, the
         * results of a series of invocations of these two methods might be
         * inconsistent because of rounding errors.
         *
         * @return a new <code>Color</code> object that is a darker version of this
         * <code>Color</code> with the same {@code alpha} value.
         * @see java.awt.Color#brighter
         * @since JDK1.0
         */
        darker(): Color;
        /**
         * Computes the hash code for this <code>Color</code>.
         *
         * @return a hash code value for this object.
         * @since JDK1.0
         */
        hashCode(): number;
        /**
         * Determines whether another object is equal to this <code>Color</code>.
         * <p>
         * The result is <code>true</code> if and only if the argument is not
         * <code>null</code> and is a <code>Color</code> object that has the same
         * red, green, blue, and alpha values as this object.
         *
         * @param obj
         * the object to test for equality with this <code>Color</code>
         * @return <code>true</code> if the objects are the same; <code>false</code>
         * otherwise.
         * @since JDK1.0
         */
        equals(obj: any): boolean;
        /**
         * Returns a string representation of this <code>Color</code>. This method
         * is intended to be used only for debugging purposes. The content and
         * format of the returned string might vary between implementations. The
         * returned string might be empty but cannot be <code>null</code>.
         *
         * @return a string representation of this <code>Color</code>.
         */
        toString(): string;
        /**
         * Converts a <code>String</code> to an integer and returns the specified
         * opaque <code>Color</code>. This method handles string formats that are
         * used to represent octal and hexadecimal numbers.
         *
         * @param nm
         * a <code>String</code> that represents an opaque color as a
         * 24-bit integer
         * @return the new <code>Color</code> object.
         * @see java.lang.Integer#decode
         * @exception NumberFormatException
         * if the specified string cannot be interpreted as a
         * decimal, octal, or hexadecimal integer.
         * @since JDK1.1
         */
        static decode(nm: string): Color;
        /**
         * Finds a color in the system properties.
         * <p>
         * The argument is treated as the name of a system property to be obtained.
         * The string value of this property is then interpreted as an integer which
         * is then converted to a <code>Color</code> object.
         * <p>
         * If the specified property is not found or could not be parsed as an
         * integer then <code>null</code> is returned.
         *
         * @param nm
         * the name of the color property
         * @return the <code>Color</code> converted from the system property.
         * @see java.lang.System#getProperty(java.lang.String)
         * @see java.lang.Integer#getInteger(java.lang.String)
         * @see java.awt.Color#Color(int)
         * @since JDK1.0
         */
        static getColor$java_lang_String(nm: string): Color;
        /**
         * Finds a color in the system properties.
         * <p>
         * The first argument is treated as the name of a system property to be
         * obtained. The string value of this property is then interpreted as an
         * integer which is then converted to a <code>Color</code> object.
         * <p>
         * If the specified property is not found or cannot be parsed as an integer
         * then the <code>Color</code> specified by the second argument is returned
         * instead.
         *
         * @param nm
         * the name of the color property
         * @param v
         * the default <code>Color</code>
         * @return the <code>Color</code> converted from the system property, or the
         * specified <code>Color</code>.
         * @see java.lang.System#getProperty(java.lang.String)
         * @see java.lang.Integer#getInteger(java.lang.String)
         * @see java.awt.Color#Color(int)
         * @since JDK1.0
         */
        static getColor(nm?: any, v?: any): any;
        /**
         * Finds a color in the system properties.
         * <p>
         * The first argument is treated as the name of a system property to be
         * obtained. The string value of this property is then interpreted as an
         * integer which is then converted to a <code>Color</code> object.
         * <p>
         * If the specified property is not found or could not be parsed as an
         * integer then the integer value <code>v</code> is used instead, and is
         * converted to a <code>Color</code> object.
         *
         * @param nm
         * the name of the color property
         * @param v
         * the default color value, as an integer
         * @return the <code>Color</code> converted from the system property or the
         * <code>Color</code> converted from the specified integer.
         * @see java.lang.System#getProperty(java.lang.String)
         * @see java.lang.Integer#getInteger(java.lang.String)
         * @see java.awt.Color#Color(int)
         * @since JDK1.0
         */
        static getColor$java_lang_String$int(nm: string, v: number): Color;
        /**
         * Converts the components of a color, as specified by the HSB model, to an
         * equivalent set of values for the default RGB model.
         * <p>
         * The <code>saturation</code> and <code>brightness</code> components should
         * be floating-point values between zero and one (numbers in the range
         * 0.0-1.0). The <code>hue</code> component can be any floating-point
         * number. The floor of this number is subtracted from it to create a
         * fraction between 0 and 1. This fractional number is then multiplied by
         * 360 to produce the hue angle in the HSB color model.
         * <p>
         * The integer that is returned by <code>HSBtoRGB</code> encodes the value
         * of a color in bits 0-23 of an integer value that is the same format used
         * by the method {@link #getRGB() getRGB}. This integer can be supplied as
         * an argument to the <code>Color</code> constructor that takes a single
         * integer argument.
         *
         * @param hue
         * the hue component of the color
         * @param saturation
         * the saturation of the color
         * @param brightness
         * the brightness of the color
         * @return the RGB value of the color with the indicated hue, saturation,
         * and brightness.
         * @see java.awt.Color#getRGB()
         * @see java.awt.Color#Color(int)
         * @see java.awt.image.ColorModel#getRGBdefault()
         * @since JDK1.0
         */
        static HSBtoRGB(hue: number, saturation: number, brightness: number): number;
        /**
         * Converts the components of a color, as specified by the default RGB
         * model, to an equivalent set of values for hue, saturation, and brightness
         * that are the three components of the HSB model.
         * <p>
         * If the <code>hsbvals</code> argument is <code>null</code>, then a new
         * array is allocated to return the result. Otherwise, the method returns
         * the array <code>hsbvals</code>, with the values put into that array.
         *
         * @param r
         * the red component of the color
         * @param g
         * the green component of the color
         * @param b
         * the blue component of the color
         * @param hsbvals
         * the array used to return the three HSB values, or
         * <code>null</code>
         * @return an array of three elements containing the hue, saturation, and
         * brightness (in that order), of the color with the indicated red,
         * green, and blue components.
         * @see java.awt.Color#getRGB()
         * @see java.awt.Color#Color(int)
         * @see java.awt.image.ColorModel#getRGBdefault()
         * @since JDK1.0
         */
        static RGBtoHSB(r: number, g: number, b: number, hsbvals: number[]): number[];
        /**
         * Creates a <code>Color</code> object based on the specified values for the
         * HSB color model.
         * <p>
         * The <code>s</code> and <code>b</code> components should be floating-point
         * values between zero and one (numbers in the range 0.0-1.0). The
         * <code>h</code> component can be any floating-point number. The floor of
         * this number is subtracted from it to create a fraction between 0 and 1.
         * This fractional number is then multiplied by 360 to produce the hue angle
         * in the HSB color model.
         *
         * @param h
         * the hue component
         * @param s
         * the saturation of the color
         * @param b
         * the brightness of the color
         * @return a <code>Color</code> object with the specified hue, saturation,
         * and brightness.
         * @since JDK1.0
         */
        static getHSBColor(h: number, s: number, b: number): Color;
        /**
         * Returns a <code>float</code> array containing the color and alpha
         * components of the <code>Color</code>, as represented in the default sRGB
         * color space. If <code>compArray</code> is <code>null</code>, an array of
         * length 4 is created for the return value. Otherwise,
         * <code>compArray</code> must have length 4 or greater, and it is filled in
         * with the components and returned.
         *
         * @param compArray
         * an array that this method fills with color and alpha
         * components and returns
         * @return the RGBA components in a <code>float</code> array.
         */
        getRGBComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing only the color components
         * of the <code>Color</code>, in the default sRGB color space. If
         * <code>compArray</code> is <code>null</code>, an array of length 3 is
         * created for the return value. Otherwise, <code>compArray</code> must have
         * length 3 or greater, and it is filled in with the components and
         * returned.
         *
         * @param compArray
         * an array that this method fills with color components and
         * returns
         * @return the RGB components in a <code>float</code> array.
         */
        getRGBColorComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing the color and alpha
         * components of the <code>Color</code>, in the <code>ColorSpace</code> of
         * the <code>Color</code>. If <code>compArray</code> is <code>null</code>,
         * an array with length equal to the number of components in the associated
         * <code>ColorSpace</code> plus one is created for the return value.
         * Otherwise, <code>compArray</code> must have at least this length and it
         * is filled in with the components and returned.
         *
         * @param compArray
         * an array that this method fills with the color and alpha
         * components of this <code>Color</code> in its
         * <code>ColorSpace</code> and returns
         * @return the color and alpha components in a <code>float</code> array.
         */
        getComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing only the color components
         * of the <code>Color</code>, in the <code>ColorSpace</code> of the
         * <code>Color</code>. If <code>compArray</code> is <code>null</code>, an
         * array with length equal to the number of components in the associated
         * <code>ColorSpace</code> is created for the return value. Otherwise,
         * <code>compArray</code> must have at least this length and it is filled in
         * with the components and returned.
         *
         * @param compArray
         * an array that this method fills with the color components of
         * this <code>Color</code> in its <code>ColorSpace</code> and
         * returns
         * @return the color components in a <code>float</code> array.
         */
        getColorComponents(compArray: number[]): number[];
        /**
         * Returns the transparency mode for this <code>Color</code>. This is
         * required to implement the <code>Paint</code> interface.
         *
         * @return this <code>Color</code> object's transparency mode.
         * @see Paint
         * @see Transparency
         * @see #createContext
         */
        getTransparency(): number;
        toHTML(): string;
    }
}
declare namespace java.awt {
    abstract class Component implements java.awt.HTMLComponent {
        abstract createHTML(): any;
        static TOP_ALIGNMENT: number;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        htmlElement: HTMLElement;
        enabled: boolean;
        valid: boolean;
        background: java.awt.Color;
        foreground: java.awt.Color;
        font: java.awt.Font;
        visible: boolean;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        bindHTML(htmlElement: HTMLElement): void;
        getHTMLElement(): HTMLElement;
        initHTML(): void;
        getLocationOnScreen(): java.awt.Point;
        getBounds(): java.awt.Rectangle;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        setSize(width?: any, height?: any): any;
        setSize$java_awt_Dimension(d: java.awt.Dimension): void;
        private changeSupport;
        static CURRENT_ID: number;
        getPropertyChangeListeners(propertyName?: any): any;
        addPropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        removePropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        getPropertyChangeListeners$(): java.beans.PropertyChangeListener[];
        addPropertyChangeListener(propertyName?: any, listener?: any): any;
        removePropertyChangeListener(propertyName?: any, listener?: any): any;
        firePropertyChange(propertyName: string, oldValue: any, newValue: any): void;
        isEnabled(): boolean;
        setEnabled(enabled: boolean): void;
        getBackground(): java.awt.Color;
        setBackground(background: java.awt.Color): void;
        getForeground(): java.awt.Color;
        setForeground(foreground: java.awt.Color): void;
        getFont(): java.awt.Font;
        setFont(font: java.awt.Font): void;
        isVisible(): boolean;
        setVisible(visible: boolean): void;
        getName(): string;
        setName(name: string): void;
        paramString(): string;
        isValid(): boolean;
        setValid(valid: boolean): void;
        validate(): void;
        paint(g: java.awt.Graphics): void;
        update(g: java.awt.Graphics): void;
        paintAll(g: java.awt.Graphics): void;
        getGraphics(): java.awt.Graphics;
        doPaintInternal(): void;
        constructor();
    }
}
declare namespace java.awt.event {
    interface ActionListener extends java.util.EventListener {
        actionPerformed(ae: java.awt.event.ActionEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving adjustment events.
     *
     * @author Amy Fowler
     * @since 1.1
     */
    interface AdjustmentListener extends java.util.EventListener {
        /**
         * Invoked when the value of the adjustable has changed.
         */
        adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving component events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Extend this class to create a <code>ComponentEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>ComponentListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using your class and then register it with a
     * component using the component's <code>addComponentListener</code>
     * method. When the component's size, location, or visibility
     * changes, the relevant method in the listener object is invoked,
     * and the <code>ComponentEvent</code> is passed to it.
     *
     * @see ComponentEvent
     * @see ComponentListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
     *
     * @author Carl Quinn
     * @since 1.1
     */
    abstract class ComponentAdapter implements java.awt.event.ComponentListener {
        /**
         * Invoked when the component's size changes.
         */
        componentResized(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component's position changes.
         */
        componentMoved(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component has been made visible.
         */
        componentShown(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component has been made invisible.
         */
        componentHidden(e: java.awt.event.ComponentEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving component events.
     * The class that is interested in processing a component event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>ComponentAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * component using the component's <code>addComponentListener</code>
     * method. When the component's size, location, or visibility
     * changes, the relevant method in the listener object is invoked,
     * and the <code>ComponentEvent</code> is passed to it.
     * <P>
     * Component events are provided for notification purposes ONLY;
     * The AWT will automatically handle component moves and resizes
     * internally so that GUI layout works properly regardless of
     * whether a program registers a <code>ComponentListener</code> or not.
     *
     * @see ComponentAdapter
     * @see ComponentEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
     *
     * @author Carl Quinn
     * @since 1.1
     */
    interface ComponentListener extends java.util.EventListener {
        /**
         * Invoked when the component's size changes.
         */
        componentResized(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component's position changes.
         */
        componentMoved(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component has been made visible.
         */
        componentShown(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component has been made invisible.
         */
        componentHidden(e: java.awt.event.ComponentEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving container events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Extend this class to create a <code>ContainerEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>ContainerListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's <code>addContainerListener</code>
     * method. When the container's contents change because a component has
     * been added or removed, the relevant method in the listener object is invoked,
     * and the <code>ContainerEvent</code> is passed to it.
     *
     * @see ContainerEvent
     * @see ContainerListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/containerlistener.html">Tutorial: Writing a Container Listener</a>
     *
     * @author Amy Fowler
     * @since 1.1
     */
    abstract class ContainerAdapter implements java.awt.event.ContainerListener {
        /**
         * Invoked when a component has been added to the container.
         */
        componentAdded(e: java.awt.event.ContainerEvent): void;
        /**
         * Invoked when a component has been removed from the container.
         */
        componentRemoved(e: java.awt.event.ContainerEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving container events.
     * The class that is interested in processing a container event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>ContainerAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * component using the component's <code>addContainerListener</code>
     * method. When the container's contents change because a component
     * has been added or removed, the relevant method in the listener object
     * is invoked, and the <code>ContainerEvent</code> is passed to it.
     * <P>
     * Container events are provided for notification purposes ONLY;
     * The AWT will automatically handle add and remove operations
     * internally so the program works properly regardless of
     * whether the program registers a {@code ContainerListener} or not.
     *
     * @see ContainerAdapter
     * @see ContainerEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/containerlistener.html">Tutorial: Writing a Container Listener</a>
     *
     * @author Tim Prinzing
     * @author Amy Fowler
     * @since 1.1
     */
    interface ContainerListener extends java.util.EventListener {
        /**
         * Invoked when a component has been added to the container.
         */
        componentAdded(e: java.awt.event.ContainerEvent): any;
        /**
         * Invoked when a component has been removed from the container.
         */
        componentRemoved(e: java.awt.event.ContainerEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving item events.
     * The class that is interested in processing an item event
     * implements this interface. The object created with that
     * class is then registered with a component using the
     * component's <code>addItemListener</code> method. When an
     * item-selection event occurs, the listener object's
     * <code>itemStateChanged</code> method is invoked.
     *
     * @author Amy Fowler
     *
     * @see java.awt.ItemSelectable
     * @see ItemEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/itemlistener.html">Tutorial: Writing an Item Listener</a>
     *
     * @since 1.1
     */
    interface ItemListener extends java.util.EventListener {
        /**
         * Invoked when an item has been selected or deselected by the user.
         * The code written for this method performs the operations
         * that need to occur when an item is selected (or deselected).
         */
        itemStateChanged(e: java.awt.event.ItemEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving keyboard events (keystrokes).
     * The class that is interested in processing a keyboard event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>KeyAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addKeyListener</code>
     * method. A keyboard event is generated when a key is pressed, released,
     * or typed. The relevant method in the listener
     * object is then invoked, and the <code>KeyEvent</code> is passed to it.
     *
     * @author Carl Quinn
     *
     * @see KeyAdapter
     * @see KeyEvent
     * @see <a href="http://java.sun.com/docs/books/tutorial/post1.0/ui/keylistener.html">Tutorial: Writing a Key Listener</a>
     *
     * @since 1.1
     */
    interface KeyListener extends java.util.EventListener {
        /**
         * Invoked when a key has been typed.
         * See the class description for {@link KeyEvent} for a definition of
         * a key typed event.
         */
        keyTyped(e: java.awt.event.KeyEvent): any;
        /**
         * Invoked when a key has been pressed.
         * See the class description for {@link KeyEvent} for a definition of
         * a key pressed event.
         */
        keyPressed(e: java.awt.event.KeyEvent): any;
        /**
         * Invoked when a key has been released.
         * See the class description for {@link KeyEvent} for a definition of
         * a key released event.
         */
        keyReleased(e: java.awt.event.KeyEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving mouse events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Mouse events let you track when a mouse is pressed, released, clicked,
     * moved, dragged, when it enters a component, when it exits and
     * when a mouse wheel is moved.
     * <P>
     * Extend this class to create a {@code MouseEvent}
     * (including drag and motion events) or/and {@code MouseWheelEvent}
     * listener and override the methods for the events of interest. (If you implement the
     * {@code MouseListener},
     * {@code MouseMotionListener}
     * interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's {@code addMouseListener}
     * {@code addMouseMotionListener}, {@code addMouseWheelListener}
     * methods.
     * The relevant method in the listener object is invoked  and the {@code MouseEvent}
     * or {@code MouseWheelEvent}  is passed to it in following cases:
     * <ul>
     * <li>when a mouse button is pressed, released, or clicked (pressed and  released)
     * <li>when the mouse cursor enters or exits the component
     * <li>when the mouse wheel rotated, or mouse moved or dragged
     * </ul>
     *
     * @author Carl Quinn
     * @author Andrei Dmitriev
     *
     * @see MouseEvent
     * @see MouseWheelEvent
     * @see MouseListener
     * @see MouseMotionListener
     * @see MouseWheelListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mouselistener.html">Tutorial: Writing a Mouse Listener</a>
     *
     * @since 1.1
     */
    abstract class MouseAdapter implements java.awt.event.MouseListener, java.awt.event.MouseWheelListener, java.awt.event.MouseMotionListener {
        /**
         * {@inheritDoc}
         */
        mouseClicked(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         */
        mousePressed(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         */
        mouseReleased(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         */
        mouseEntered(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         */
        mouseExited(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         */
        mouseWheelMoved(e: java.awt.event.MouseWheelEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         */
        mouseDragged(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         */
        mouseMoved(e: java.awt.event.MouseEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving "interesting" mouse events
     * (press, release, click, enter, and exit) on a component.
     * (To track mouse moves and mouse drags, use the
     * <code>MouseMotionListener</code>.)
     * <P>
     * The class that is interested in processing a mouse event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>MouseAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseListener</code>
     * method. A mouse event is generated when the mouse is pressed, released
     * clicked (pressed and released). A mouse event is also generated when
     * the mouse cursor enters or leaves a component. When a mouse event
     * occurs, the relevant method in the listener object is invoked, and
     * the <code>MouseEvent</code> is passed to it.
     *
     * @author Carl Quinn
     *
     * @see MouseAdapter
     * @see MouseEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mouselistener.html">Tutorial: Writing a Mouse Listener</a>
     *
     * @since 1.1
     */
    interface MouseListener extends java.util.EventListener {
        /**
         * Invoked when the mouse button has been clicked (pressed
         * and released) on a component.
         */
        mouseClicked(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when a mouse button has been pressed on a component.
         */
        mousePressed(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when a mouse button has been released on a component.
         */
        mouseReleased(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse enters a component.
         */
        mouseEntered(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse exits a component.
         */
        mouseExited(e: java.awt.event.MouseEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving mouse motion events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Mouse motion events occur when a mouse is moved or dragged.
     * (Many such events will be generated in a normal program.
     * To track clicks and other mouse events, use the MouseAdapter.)
     * <P>
     * Extend this class to create a <code>MouseEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>MouseMotionListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's <code>addMouseMotionListener</code>
     * method. When the mouse is moved or dragged, the relevant method in the
     * listener object is invoked and the <code>MouseEvent</code> is passed to it.
     *
     * @author Amy Fowler
     *
     * @see MouseEvent
     * @see MouseMotionListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mousemotionlistener.html">Tutorial: Writing a Mouse Motion Listener</a>
     *
     * @since 1.1
     */
    abstract class MouseMotionAdapter implements java.awt.event.MouseMotionListener {
        /**
         * Invoked when a mouse button is pressed on a component and then
         * dragged.  Mouse drag events will continue to be delivered to
         * the component where the first originated until the mouse button is
         * released (regardless of whether the mouse position is within the
         * bounds of the component).
         */
        mouseDragged(e: java.awt.event.MouseEvent): void;
        /**
         * Invoked when the mouse button has been moved on a component
         * (with no buttons no down).
         */
        mouseMoved(e: java.awt.event.MouseEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving mouse motion events on a component.
     * (For clicks and other mouse events, use the <code>MouseListener</code>.)
     * <P>
     * The class that is interested in processing a mouse motion event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>MouseMotionAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseMotionListener</code>
     * method. A mouse motion event is generated when the mouse is moved
     * or dragged. (Many such events will be generated). When a mouse motion event
     * occurs, the relevant method in the listener object is invoked, and
     * the <code>MouseEvent</code> is passed to it.
     *
     * @author Amy Fowler
     *
     * @see MouseMotionAdapter
     * @see MouseEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mousemotionlistener.html">Tutorial: Writing a Mouse Motion Listener</a>
     *
     * @since 1.1
     */
    interface MouseMotionListener extends java.util.EventListener {
        /**
         * Invoked when a mouse button is pressed on a component and then
         * dragged.  <code>MOUSE_DRAGGED</code> events will continue to be
         * delivered to the component where the drag originated until the
         * mouse button is released (regardless of whether the mouse position
         * is within the bounds of the component).
         * <p>
         * Due to platform-dependent Drag&amp;Drop implementations,
         * <code>MOUSE_DRAGGED</code> events may not be delivered during a native
         * Drag&amp;Drop operation.
         */
        mouseDragged(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse cursor has been moved onto a component
         * but no buttons have been pushed.
         */
        mouseMoved(e: java.awt.event.MouseEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving mouse wheel events on a component.
     * (For clicks and other mouse events, use the <code>MouseListener</code>.
     * For mouse movement and drags, use the <code>MouseMotionListener</code>.)
     * <P>
     * The class that is interested in processing a mouse wheel event
     * implements this interface (and all the methods it contains).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseWheelListener</code>
     * method. A mouse wheel event is generated when the mouse wheel is rotated.
     * When a mouse wheel event occurs, that object's <code>mouseWheelMoved</code>
     * method is invoked.
     * <p>
     * For information on how mouse wheel events are dispatched, see
     * the class description for {@link MouseWheelEvent}.
     *
     * @author Brent Christian
     * @see MouseWheelEvent
     * @since 1.4
     */
    interface MouseWheelListener extends java.util.EventListener {
        /**
         * Invoked when the mouse wheel is rotated.
         * @see MouseWheelEvent
         */
        mouseWheelMoved(e: java.awt.event.MouseWheelEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving text events.
     *
     * The class that is interested in processing a text event
     * implements this interface. The object created with that
     * class is then registered with a component using the
     * component's <code>addTextListener</code> method. When the
     * component's text changes, the listener object's
     * <code>textValueChanged</code> method is invoked.
     *
     * @author Georges Saab
     *
     * @see TextEvent
     *
     * @since 1.1
     */
    interface TextListener extends java.util.EventListener {
        /**
         * Invoked when the value of the text has changed.
         * The code written for this method performs the operations
         * that need to occur when text changes.
         */
        textValueChanged(e: java.awt.event.TextEvent): any;
    }
}
declare namespace java.awt {
    class Event implements java.io.Serializable {
        private data;
        static SHIFT_MASK: number;
        static SHIFT_MASK_$LI$(): number;
        static CTRL_MASK: number;
        static CTRL_MASK_$LI$(): number;
        static META_MASK: number;
        static META_MASK_$LI$(): number;
        static ALT_MASK: number;
        static ALT_MASK_$LI$(): number;
        static HOME: number;
        static END: number;
        static PGUP: number;
        static PGDN: number;
        static UP: number;
        static DOWN: number;
        static LEFT: number;
        static RIGHT: number;
        static F1: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static PRINT_SCREEN: number;
        static SCROLL_LOCK: number;
        static CAPS_LOCK: number;
        static NUM_LOCK: number;
        static PAUSE: number;
        static INSERT: number;
        static ENTER: number;
        static BACK_SPACE: number;
        static TAB: number;
        static ESCAPE: number;
        static DELETE: number;
        static WINDOW_EVENT: number;
        static WINDOW_DESTROY: number;
        static WINDOW_DESTROY_$LI$(): number;
        static WINDOW_EXPOSE: number;
        static WINDOW_EXPOSE_$LI$(): number;
        static WINDOW_ICONIFY: number;
        static WINDOW_ICONIFY_$LI$(): number;
        static WINDOW_DEICONIFY: number;
        static WINDOW_DEICONIFY_$LI$(): number;
        static WINDOW_MOVED: number;
        static WINDOW_MOVED_$LI$(): number;
        static KEY_EVENT: number;
        static KEY_PRESS: number;
        static KEY_PRESS_$LI$(): number;
        static KEY_RELEASE: number;
        static KEY_RELEASE_$LI$(): number;
        static KEY_ACTION: number;
        static KEY_ACTION_$LI$(): number;
        static KEY_ACTION_RELEASE: number;
        static KEY_ACTION_RELEASE_$LI$(): number;
        static MOUSE_EVENT: number;
        static MOUSE_DOWN: number;
        static MOUSE_DOWN_$LI$(): number;
        static MOUSE_UP: number;
        static MOUSE_UP_$LI$(): number;
        static MOUSE_MOVE: number;
        static MOUSE_MOVE_$LI$(): number;
        static MOUSE_ENTER: number;
        static MOUSE_ENTER_$LI$(): number;
        static MOUSE_EXIT: number;
        static MOUSE_EXIT_$LI$(): number;
        static MOUSE_DRAG: number;
        static MOUSE_DRAG_$LI$(): number;
        static SCROLL_EVENT: number;
        static SCROLL_LINE_UP: number;
        static SCROLL_LINE_UP_$LI$(): number;
        static SCROLL_LINE_DOWN: number;
        static SCROLL_LINE_DOWN_$LI$(): number;
        static SCROLL_PAGE_UP: number;
        static SCROLL_PAGE_UP_$LI$(): number;
        static SCROLL_PAGE_DOWN: number;
        static SCROLL_PAGE_DOWN_$LI$(): number;
        static SCROLL_ABSOLUTE: number;
        static SCROLL_ABSOLUTE_$LI$(): number;
        static SCROLL_BEGIN: number;
        static SCROLL_BEGIN_$LI$(): number;
        static SCROLL_END: number;
        static SCROLL_END_$LI$(): number;
        static LIST_EVENT: number;
        static LIST_SELECT: number;
        static LIST_SELECT_$LI$(): number;
        static LIST_DESELECT: number;
        static LIST_DESELECT_$LI$(): number;
        static MISC_EVENT: number;
        static ACTION_EVENT: number;
        static ACTION_EVENT_$LI$(): number;
        static LOAD_FILE: number;
        static LOAD_FILE_$LI$(): number;
        static SAVE_FILE: number;
        static SAVE_FILE_$LI$(): number;
        static GOT_FOCUS: number;
        static GOT_FOCUS_$LI$(): number;
        static LOST_FOCUS: number;
        static LOST_FOCUS_$LI$(): number;
        target: any;
        when: number;
        id: number;
        x: number;
        y: number;
        key: number;
        modifiers: number;
        clickCount: number;
        arg: any;
        evt: Event;
        private consumed;
        constructor(target?: any, when?: any, id?: any, x?: any, y?: any, key?: any, modifiers?: any, arg?: any);
        translate(dx: number, dy: number): void;
        shiftDown(): boolean;
        controlDown(): boolean;
        metaDown(): boolean;
        consume(): void;
        isConsumed(): boolean;
        paramString(): string;
        toString(): string;
    }
}
declare namespace java.awt {
    class FlowLayout implements java.awt.LayoutManager {
        created: boolean;
        parent: java.awt.Container;
        static LEFT: number;
        static CENTER: number;
        static RIGHT: number;
        static LEADING: number;
        static TRAILING: number;
        align: number;
        hgap: number;
        vgap: number;
        private alignOnBaseline;
        constructor(align?: number, hgap?: number, vgap?: number);
        getAlignment(): number;
        setAlignment(align: number): void;
        addLayoutComponent(name: string, component: java.awt.Component): void;
        removeLayoutComponent(component: java.awt.Component): void;
        layoutContainer(parent: java.awt.Container): void;
        onComponentAdded(parent: java.awt.Container, component: java.awt.Component, position: number): void;
        getParent(): java.awt.Container;
        setParent(parent: java.awt.Container): void;
        getHgap(): number;
        setHgap(hgap: number): void;
        getVgap(): number;
        setVgap(vgap: number): void;
    }
}
declare namespace java.awt {
    class Font implements java.io.Serializable {
        toHTML(): string;
        /**
         * This is now only used during serialization. Typically it is null.
         *
         * @serial
         * @see #getAttributes()
         */
        private fRequestedAttributes;
        /**
         * A String constant for the canonical family name of the logical font
         * "Dialog". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static DIALOG: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "DialogInput". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static DIALOG_INPUT: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "SansSerif". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static SANS_SERIF: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "Serif". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static SERIF: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "Monospaced". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static MONOSPACED: string;
        /**
         * The plain style constant.
         */
        static PLAIN: number;
        /**
         * The bold style constant. This can be combined with the other style
         * constants (except PLAIN) for mixed styles.
         */
        static BOLD: number;
        /**
         * The italicized style constant. This can be combined with the other style
         * constants (except PLAIN) for mixed styles.
         */
        static ITALIC: number;
        /**
         * The baseline used in most Roman scripts when laying out text.
         */
        static ROMAN_BASELINE: number;
        /**
         * The baseline used in ideographic scripts like Chinese, Japanese, and
         * Korean when laying out text.
         */
        static CENTER_BASELINE: number;
        /**
         * The baseline used in Devanigiri and similar scripts when laying out text.
         */
        static HANGING_BASELINE: number;
        /**
         * Identify a font resource of type TRUETYPE. Used to specify a TrueType
         * font resource to the {@link #createFont} method. The TrueType format was
         * extended to become the OpenType format, which adds support for fonts with
         * Postscript outlines, this tag therefore references these fonts, as well
         * as those with TrueType outlines.
         *
         * @since 1.3
         */
        static TRUETYPE_FONT: number;
        /**
         * Identify a font resource of type TYPE1. Used to specify a Type1 font
         * resource to the {@link #createFont} method.
         *
         * @since 1.5
         */
        static TYPE1_FONT: number;
        /**
         * The logical name of this <code>Font</code>, as passed to the constructor.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getName
         */
        name: string;
        /**
         * The style of this <code>Font</code>, as passed to the constructor. This
         * style can be PLAIN, BOLD, ITALIC, or BOLD+ITALIC.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getStyle()
         */
        style: number;
        /**
         * The point size of this <code>Font</code>, rounded to integer.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getSize()
         */
        size: number;
        /**
         * The point size of this <code>Font</code> in <code>float</code>.
         *
         * @serial
         * @see #getSize()
         * @see #getSize2D()
         */
        pointSize: number;
        static serialVersionUID: number;
        constructor(name?: any, style?: any, sizePts?: any);
        getFamily(): string;
        getName(): string;
        getFontName(): string;
        getStyle(): number;
        getSize(): number;
        getSize2D(): number;
        isPlain(): boolean;
        isBold(): boolean;
        isItalic(): boolean;
        static decode(str: string): Font;
        static getFont(nm: string, font?: Font): Font;
        hash: number;
        hashCode(): number;
        equals(obj: any): boolean;
        /**
         * Converts this <code>Font</code> object to a <code>String</code>
         * representation.
         *
         * @return a <code>String</code> representation of this <code>Font</code>
         * object.
         * @since JDK1.0
         */
        toString(): string;
        /**
         * A flag to layoutGlyphVector indicating that text is left-to-right as
         * determined by Bidi analysis.
         */
        static LAYOUT_LEFT_TO_RIGHT: number;
        /**
         * A flag to layoutGlyphVector indicating that text is right-to-left as
         * determined by Bidi analysis.
         */
        static LAYOUT_RIGHT_TO_LEFT: number;
        /**
         * A flag to layoutGlyphVector indicating that text in the char array before
         * the indicated start should not be examined.
         */
        static LAYOUT_NO_START_CONTEXT: number;
        /**
         * A flag to layoutGlyphVector indicating that text in the char array after
         * the indicated limit should not be examined.
         */
        static LAYOUT_NO_LIMIT_CONTEXT: number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>AffineTransform</code> class represents a 2D affine transform
     * that performs a linear mapping from 2D coordinates to other 2D
     * coordinates that preserves the "straightness" and
     * "parallelness" of lines.  Affine transformations can be constructed
     * using sequences of translations, scales, flips, rotations, and shears.
     * <p>
     * Such a coordinate transformation can be represented by a 3 row by
     * 3 column matrix with an implied last row of [ 0 0 1 ].  This matrix
     * transforms source coordinates {@code (x,y)} into
     * destination coordinates {@code (x',y')} by considering
     * them to be a column vector and multiplying the coordinate vector
     * by the matrix according to the following process:
     * <pre>
     * [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     * [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     * [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     * <h3><a name="quadrantapproximation">Handling 90-Degree Rotations</a></h3>
     * <p>
     * In some variations of the <code>rotate</code> methods in the
     * <code>AffineTransform</code> class, a double-precision argument
     * specifies the angle of rotation in radians.
     * These methods have special handling for rotations of approximately
     * 90 degrees (including multiples such as 180, 270, and 360 degrees),
     * so that the common case of quadrant rotation is handled more
     * efficiently.
     * This special handling can cause angles very close to multiples of
     * 90 degrees to be treated as if they were exact multiples of
     * 90 degrees.
     * For small multiples of 90 degrees the range of angles treated
     * as a quadrant rotation is approximately 0.00000121 degrees wide.
     * This section explains why such special care is needed and how
     * it is implemented.
     * <p>
     * Since 90 degrees is represented as <code>PI/2</code> in radians,
     * and since PI is a transcendental (and therefore irrational) number,
     * it is not possible to exactly represent a multiple of 90 degrees as
     * an exact double precision value measured in radians.
     * As a result it is theoretically impossible to describe quadrant
     * rotations (90, 180, 270 or 360 degrees) using these values.
     * Double precision floating point values can get very close to
     * non-zero multiples of <code>PI/2</code> but never close enough
     * for the sine or cosine to be exactly 0.0, 1.0 or -1.0.
     * The implementations of <code>Math.sin()</code> and
     * <code>Math.cos()</code> correspondingly never return 0.0
     * for any case other than <code>Math.sin(0.0)</code>.
     * These same implementations do, however, return exactly 1.0 and
     * -1.0 for some range of numbers around each multiple of 90
     * degrees since the correct answer is so close to 1.0 or -1.0 that
     * the double precision significand cannot represent the difference
     * as accurately as it can for numbers that are near 0.0.
     * <p>
     * The net result of these issues is that if the
     * <code>Math.sin()</code> and <code>Math.cos()</code> methods
     * are used to directly generate the values for the matrix modifications
     * during these radian-based rotation operations then the resulting
     * transform is never strictly classifiable as a quadrant rotation
     * even for a simple case like <code>rotate(Math.PI/2.0)</code>,
     * due to minor variations in the matrix caused by the non-0.0 values
     * obtained for the sine and cosine.
     * If these transforms are not classified as quadrant rotations then
     * subsequent code which attempts to optimize further operations based
     * upon the type of the transform will be relegated to its most general
     * implementation.
     * <p>
     * Because quadrant rotations are fairly common,
     * this class should handle these cases reasonably quickly, both in
     * applying the rotations to the transform and in applying the resulting
     * transform to the coordinates.
     * To facilitate this optimal handling, the methods which take an angle
     * of rotation measured in radians attempt to detect angles that are
     * intended to be quadrant rotations and treat them as such.
     * These methods therefore treat an angle <em>theta</em> as a quadrant
     * rotation if either <code>Math.sin(<em>theta</em>)</code> or
     * <code>Math.cos(<em>theta</em>)</code> returns exactly 1.0 or -1.0.
     * As a rule of thumb, this property holds true for a range of
     * approximately 0.0000000211 radians (or 0.00000121 degrees) around
     * small multiples of <code>Math.PI/2.0</code>.
     *
     * @author Jim Graham
     * @since 1.2
     */
    class AffineTransform implements java.lang.Cloneable, java.io.Serializable {
        static TYPE_UNKNOWN: number;
        /**
         * This constant indicates that the transform defined by this object
         * is an identity transform.
         * An identity transform is one in which the output coordinates are
         * always the same as the input coordinates.
         * If this transform is anything other than the identity transform,
         * the type will either be the constant GENERAL_TRANSFORM or a
         * combination of the appropriate flag bits for the various coordinate
         * conversions that this transform performs.
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_IDENTITY: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a translation in addition to the conversions indicated
         * by other flag bits.
         * A translation moves the coordinates by a constant amount in x
         * and y without changing the length or angle of vectors.
         * @see #TYPE_IDENTITY
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_TRANSLATION: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a uniform scale in addition to the conversions indicated
         * by other flag bits.
         * A uniform scale multiplies the length of vectors by the same amount
         * in both the x and y directions without changing the angle between
         * vectors.
         * This flag bit is mutually exclusive with the TYPE_GENERAL_SCALE flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_UNIFORM_SCALE: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a general scale in addition to the conversions indicated
         * by other flag bits.
         * A general scale multiplies the length of vectors by different
         * amounts in the x and y directions without changing the angle
         * between perpendicular vectors.
         * This flag bit is mutually exclusive with the TYPE_UNIFORM_SCALE flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_SCALE: number;
        /**
         * This constant is a bit mask for any of the scale flag bits.
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @since 1.2
         */
        static TYPE_MASK_SCALE: number;
        static TYPE_MASK_SCALE_$LI$(): number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a mirror image flip about some axis which changes the
         * normally right handed coordinate system into a left handed
         * system in addition to the conversions indicated by other flag bits.
         * A right handed coordinate system is one where the positive X
         * axis rotates counterclockwise to overlay the positive Y axis
         * similar to the direction that the fingers on your right hand
         * curl when you stare end on at your thumb.
         * A left handed coordinate system is one where the positive X
         * axis rotates clockwise to overlay the positive Y axis similar
         * to the direction that the fingers on your left hand curl.
         * There is no mathematical way to determine the angle of the
         * original flipping or mirroring transformation since all angles
         * of flip are identical given an appropriate adjusting rotation.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_FLIP: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a quadrant rotation by some multiple of 90 degrees in
         * addition to the conversions indicated by other flag bits.
         * A rotation changes the angles of vectors by the same amount
         * regardless of the original direction of the vector and without
         * changing the length of the vector.
         * This flag bit is mutually exclusive with the TYPE_GENERAL_ROTATION flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_QUADRANT_ROTATION: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a rotation by an arbitrary angle in addition to the
         * conversions indicated by other flag bits.
         * A rotation changes the angles of vectors by the same amount
         * regardless of the original direction of the vector and without
         * changing the length of the vector.
         * This flag bit is mutually exclusive with the
         * TYPE_QUADRANT_ROTATION flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_ROTATION: number;
        /**
         * This constant is a bit mask for any of the rotation flag bits.
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @since 1.2
         */
        static TYPE_MASK_ROTATION: number;
        static TYPE_MASK_ROTATION_$LI$(): number;
        /**
         * This constant indicates that the transform defined by this object
         * performs an arbitrary conversion of the input coordinates.
         * If this transform can be classified by any of the above constants,
         * the type will either be the constant TYPE_IDENTITY or a
         * combination of the appropriate flag bits for the various coordinate
         * conversions that this transform performs.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_TRANSFORM: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that no calculations need to be performed and that the source
         * coordinates only need to be copied to their destinations to
         * complete the transformation equation of this transform.
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_IDENTITY: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the translation components of the matrix (m02 and m12) need
         * to be added to complete the transformation equation of this transform.
         * @see #APPLY_IDENTITY
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_TRANSLATE: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the scaling components of the matrix (m00 and m11) need
         * to be factored in to complete the transformation equation of
         * this transform.  If the APPLY_SHEAR bit is also set then it
         * indicates that the scaling components are not both 0.0.  If the
         * APPLY_SHEAR bit is not also set then it indicates that the
         * scaling components are not both 1.0.  If neither the APPLY_SHEAR
         * nor the APPLY_SCALE bits are set then the scaling components
         * are both 1.0, which means that the x and y components contribute
         * to the transformed coordinate, but they are not multiplied by
         * any scaling factor.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_SCALE: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the shearing components of the matrix (m01 and m10) need
         * to be factored in to complete the transformation equation of this
         * transform.  The presence of this bit in the state variable changes
         * the interpretation of the APPLY_SCALE bit as indicated in its
         * documentation.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #state
         */
        static APPLY_SHEAR: number;
        static HI_SHIFT: number;
        static HI_IDENTITY: number;
        static HI_IDENTITY_$LI$(): number;
        static HI_TRANSLATE: number;
        static HI_TRANSLATE_$LI$(): number;
        static HI_SCALE: number;
        static HI_SCALE_$LI$(): number;
        static HI_SHEAR: number;
        static HI_SHEAR_$LI$(): number;
        /**
         * The X coordinate scaling element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m00: number;
        /**
         * The Y coordinate shearing element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m10: number;
        /**
         * The X coordinate shearing element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m01: number;
        /**
         * The Y coordinate scaling element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m11: number;
        /**
         * The X coordinate of the translation element of the
         * 3x3 affine transformation matrix.
         *
         * @serial
         */
        m02: number;
        /**
         * The Y coordinate of the translation element of the
         * 3x3 affine transformation matrix.
         *
         * @serial
         */
        m12: number;
        /**
         * This field keeps track of which components of the matrix need to
         * be applied when performing a transformation.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         */
        state: number;
        /**
         * This field caches the current transformation type of the matrix.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #TYPE_UNKNOWN
         * @see #getType
         */
        private type;
        constructor(m00?: any, m10?: any, m01?: any, m11?: any, m02?: any, m12?: any, state?: any);
        /**
         * Returns a transform representing a translation transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param tx the distance by which coordinates are translated in the
         * X axis direction
         * @param ty the distance by which coordinates are translated in the
         * Y axis direction
         * @return an <code>AffineTransform</code> object that represents a
         * translation transformation, created with the specified vector.
         * @since 1.2
         */
        static getTranslateInstance(tx: number, ty: number): AffineTransform;
        /**
         * Returns a transform representing a rotation transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   cos(theta)    -sin(theta)    0   ]
         * [   sin(theta)     cos(theta)    0   ]
         * [       0              0         1   ]
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         * @param theta the angle of rotation measured in radians
         * @return an <code>AffineTransform</code> object that is a rotation
         * transformation, created with the specified angle of rotation.
         * @since 1.2
         */
        static getRotateInstance$double(theta: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates around an anchor point.
         * This operation is equivalent to translating the coordinates so
         * that the anchor point is at the origin (S1), then rotating them
         * about the new origin (S2), and finally translating so that the
         * intermediate origin is restored to the coordinates of the original
         * anchor point (S3).
         * <p>
         * This operation is equivalent to the following sequence of calls:
         * <pre>
         * AffineTransform Tx = new AffineTransform();
         * Tx.translate(anchorx, anchory);    // S3: final translation
         * Tx.rotate(theta);                  // S2: rotate around anchor
         * Tx.translate(-anchorx, -anchory);  // S1: translate anchor to origin
         * </pre>
         * The matrix representing the returned transform is:
         * <pre>
         * [   cos(theta)    -sin(theta)    x-x*cos+y*sin  ]
         * [   sin(theta)     cos(theta)    y-x*sin-y*cos  ]
         * [       0              0               1        ]
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         *
         * @param theta the angle of rotation measured in radians
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @return an <code>AffineTransform</code> object that rotates
         * coordinates around the specified point by the specified angle of
         * rotation.
         * @since 1.2
         */
        static getRotateInstance$double$double$double(theta: number, anchorx: number, anchory: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates according to
         * a rotation vector.
         * All coordinates rotate about the origin by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * an identity transform is returned.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(Math.atan2(vecy, vecx));
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @return an <code>AffineTransform</code> object that rotates
         * coordinates according to the specified rotation vector.
         * @since 1.6
         */
        static getRotateInstance$double$double(vecx: number, vecy: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates around an anchor
         * point according to a rotation vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * an identity transform is returned.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(Math.atan2(vecy, vecx),
         * anchorx, anchory);
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @return an <code>AffineTransform</code> object that rotates
         * coordinates around the specified point according to the
         * specified rotation vector.
         * @since 1.6
         */
        static getRotateInstance(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): any;
        /**
         * Returns a transform that rotates coordinates by the specified
         * number of quadrants.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(numquadrants * Math.PI / 2.0);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @return an <code>AffineTransform</code> object that rotates
         * coordinates by the specified number of quadrants.
         * @since 1.6
         */
        static getQuadrantRotateInstance$int(numquadrants: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates by the specified
         * number of quadrants around the specified anchor point.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(numquadrants * Math.PI / 2.0,
         * anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @return an <code>AffineTransform</code> object that rotates
         * coordinates by the specified number of quadrants around the
         * specified anchor point.
         * @since 1.6
         */
        static getQuadrantRotateInstance(numquadrants?: any, anchorx?: any, anchory?: any): any;
        /**
         * Returns a transform representing a scaling transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @return an <code>AffineTransform</code> object that scales
         * coordinates by the specified factors.
         * @since 1.2
         */
        static getScaleInstance(sx: number, sy: number): AffineTransform;
        /**
         * Returns a transform representing a shearing transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @return an <code>AffineTransform</code> object that shears
         * coordinates by the specified multipliers.
         * @since 1.2
         */
        static getShearInstance(shx: number, shy: number): AffineTransform;
        /**
         * Retrieves the flag bits describing the conversion properties of
         * this transform.
         * The return value is either one of the constants TYPE_IDENTITY
         * or TYPE_GENERAL_TRANSFORM, or a combination of the
         * appropriate flag bits.
         * A valid combination of flag bits is an exclusive OR operation
         * that can combine
         * the TYPE_TRANSLATION flag bit
         * in addition to either of the
         * TYPE_UNIFORM_SCALE or TYPE_GENERAL_SCALE flag bits
         * as well as either of the
         * TYPE_QUADRANT_ROTATION or TYPE_GENERAL_ROTATION flag bits.
         * @return the OR combination of any of the indicated flags that
         * apply to this transform
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @since 1.2
         */
        getType(): number;
        /**
         * This is the utility function to calculate the flag bits when
         * they have not been cached.
         * @see #getType
         */
        private calculateType();
        /**
         * Returns the determinant of the matrix representation of the transform.
         * The determinant is useful both to determine if the transform can
         * be inverted and to get a single value representing the
         * combined X and Y scaling of the transform.
         * <p>
         * If the determinant is non-zero, then this transform is
         * invertible and the various methods that depend on the inverse
         * transform do not need to throw a
         * {@link NoninvertibleTransformException}.
         * If the determinant is zero then this transform can not be
         * inverted since the transform maps all input coordinates onto
         * a line or a point.
         * If the determinant is near enough to zero then inverse transform
         * operations might not carry enough precision to produce meaningful
         * results.
         * <p>
         * If this transform represents a uniform scale, as indicated by
         * the <code>getType</code> method then the determinant also
         * represents the square of the uniform scale factor by which all of
         * the points are expanded from or contracted towards the origin.
         * If this transform represents a non-uniform scale or more general
         * transform then the determinant is not likely to represent a
         * value useful for any purpose other than determining if inverse
         * transforms are possible.
         * <p>
         * Mathematically, the determinant is calculated using the formula:
         * <pre>
         * |  m00  m01  m02  |
         * |  m10  m11  m12  |  =  m00 * m11 - m01 * m10
         * |   0    0    1   |
         * </pre>
         *
         * @return the determinant of the matrix used to transform the
         * coordinates.
         * @see #getType
         * @see #createInverse
         * @see #inverseTransform
         * @see #TYPE_UNIFORM_SCALE
         * @since 1.2
         */
        getDeterminant(): number;
        /**
         * Manually recalculates the state of the transform when the matrix
         * changes too much to predict the effects on the state.
         * The following table specifies what the various settings of the
         * state field say about the values of the corresponding matrix
         * element fields.
         * Note that the rules governing the SCALE fields are slightly
         * different depending on whether the SHEAR flag is also set.
         * <pre>
         * SCALE            SHEAR          TRANSLATE
         * m00/m11          m01/m10          m02/m12
         *
         * IDENTITY             1.0              0.0              0.0
         * TRANSLATE (TR)       1.0              0.0          not both 0.0
         * SCALE (SC)       not both 1.0         0.0              0.0
         * TR | SC          not both 1.0         0.0          not both 0.0
         * SHEAR (SH)           0.0          not both 0.0         0.0
         * TR | SH              0.0          not both 0.0     not both 0.0
         * SC | SH          not both 0.0     not both 0.0         0.0
         * TR | SC | SH     not both 0.0     not both 0.0     not both 0.0
         * </pre>
         */
        updateState(): void;
        private stateError();
        /**
         * Retrieves the 6 specifiable values in the 3x3 affine transformation
         * matrix and places them into an array of double precisions values.
         * The values are stored in the array as
         * {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;m02&nbsp;m12&nbsp;}.
         * An array of 4 doubles can also be specified, in which case only the
         * first four elements representing the non-transform
         * parts of the array are retrieved and the values are stored into
         * the array as {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;}
         * @param flatmatrix the double array used to store the returned
         * values.
         * @see #getScaleX
         * @see #getScaleY
         * @see #getShearX
         * @see #getShearY
         * @see #getTranslateX
         * @see #getTranslateY
         * @since 1.2
         */
        getMatrix(flatmatrix: number[]): void;
        /**
         * Returns the X coordinate scaling element (m00) of the 3x3
         * affine transformation matrix.
         * @return a double value that is the X coordinate of the scaling
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getScaleX(): number;
        /**
         * Returns the Y coordinate scaling element (m11) of the 3x3
         * affine transformation matrix.
         * @return a double value that is the Y coordinate of the scaling
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getScaleY(): number;
        /**
         * Returns the X coordinate shearing element (m01) of the 3x3
         * affine transformation matrix.
         * @return a double value that is the X coordinate of the shearing
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getShearX(): number;
        /**
         * Returns the Y coordinate shearing element (m10) of the 3x3
         * affine transformation matrix.
         * @return a double value that is the Y coordinate of the shearing
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getShearY(): number;
        /**
         * Returns the X coordinate of the translation element (m02) of the
         * 3x3 affine transformation matrix.
         * @return a double value that is the X coordinate of the translation
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getTranslateX(): number;
        /**
         * Returns the Y coordinate of the translation element (m12) of the
         * 3x3 affine transformation matrix.
         * @return a double value that is the Y coordinate of the translation
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getTranslateY(): number;
        /**
         * Concatenates this transform with a translation transformation.
         * This is equivalent to calling concatenate(T), where T is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param tx the distance by which coordinates are translated in the
         * X axis direction
         * @param ty the distance by which coordinates are translated in the
         * Y axis direction
         * @since 1.2
         */
        translate(tx: number, ty: number): void;
        static rot90conversion: number[];
        static rot90conversion_$LI$(): number[];
        private rotate90();
        private rotate180();
        private rotate270();
        /**
         * Concatenates this transform with a rotation transformation.
         * This is equivalent to calling concatenate(R), where R is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   cos(theta)    -sin(theta)    0   ]
         * [   sin(theta)     cos(theta)    0   ]
         * [       0              0         1   ]
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         * @param theta the angle of rotation measured in radians
         * @since 1.2
         */
        rotate$double(theta: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates around an anchor point.
         * This operation is equivalent to translating the coordinates so
         * that the anchor point is at the origin (S1), then rotating them
         * about the new origin (S2), and finally translating so that the
         * intermediate origin is restored to the coordinates of the original
         * anchor point (S3).
         * <p>
         * This operation is equivalent to the following sequence of calls:
         * <pre>
         * translate(anchorx, anchory);      // S3: final translation
         * rotate(theta);                    // S2: rotate around anchor
         * translate(-anchorx, -anchory);    // S1: translate anchor to origin
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         *
         * @param theta the angle of rotation measured in radians
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.2
         */
        rotate$double$double$double(theta: number, anchorx: number, anchory: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates according to a rotation vector.
         * All coordinates rotate about the origin by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * no additional rotation is added to this transform.
         * This operation is equivalent to calling:
         * <pre>
         * rotate(Math.atan2(vecy, vecx));
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @since 1.6
         */
        rotate$double$double(vecx: number, vecy: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates around an anchor point according to a rotation
         * vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * the transform is not modified in any way.
         * This method is equivalent to calling:
         * <pre>
         * rotate(Math.atan2(vecy, vecx), anchorx, anchory);
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        rotate(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): any;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates by the specified number of quadrants.
         * This is equivalent to calling:
         * <pre>
         * rotate(numquadrants * Math.PI / 2.0);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @since 1.6
         */
        quadrantRotate$int(numquadrants: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates by the specified number of quadrants around
         * the specified anchor point.
         * This method is equivalent to calling:
         * <pre>
         * rotate(numquadrants * Math.PI / 2.0, anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        quadrantRotate(numquadrants?: any, anchorx?: any, anchory?: any): any;
        /**
         * Concatenates this transform with a scaling transformation.
         * This is equivalent to calling concatenate(S), where S is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @since 1.2
         */
        scale(sx: number, sy: number): void;
        /**
         * Concatenates this transform with a shearing transformation.
         * This is equivalent to calling concatenate(SH), where SH is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @since 1.2
         */
        shear(shx: number, shy: number): void;
        /**
         * Resets this transform to the Identity transform.
         * @since 1.2
         */
        setToIdentity(): void;
        /**
         * Sets this transform to a translation transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param tx the distance by which coordinates are translated in the
         * X axis direction
         * @param ty the distance by which coordinates are translated in the
         * Y axis direction
         * @since 1.2
         */
        setToTranslation(tx: number, ty: number): void;
        /**
         * Sets this transform to a rotation transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   cos(theta)    -sin(theta)    0   ]
         * [   sin(theta)     cos(theta)    0   ]
         * [       0              0         1   ]
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         * @param theta the angle of rotation measured in radians
         * @since 1.2
         */
        setToRotation$double(theta: number): void;
        /**
         * Sets this transform to a translated rotation transformation.
         * This operation is equivalent to translating the coordinates so
         * that the anchor point is at the origin (S1), then rotating them
         * about the new origin (S2), and finally translating so that the
         * intermediate origin is restored to the coordinates of the original
         * anchor point (S3).
         * <p>
         * This operation is equivalent to the following sequence of calls:
         * <pre>
         * setToTranslation(anchorx, anchory); // S3: final translation
         * rotate(theta);                      // S2: rotate around anchor
         * translate(-anchorx, -anchory);      // S1: translate anchor to origin
         * </pre>
         * The matrix representing this transform becomes:
         * <pre>
         * [   cos(theta)    -sin(theta)    x-x*cos+y*sin  ]
         * [   sin(theta)     cos(theta)    y-x*sin-y*cos  ]
         * [       0              0               1        ]
         * </pre>
         * Rotating by a positive angle theta rotates points on the positive
         * X axis toward the positive Y axis.
         * Note also the discussion of
         * <a href="#quadrantapproximation">Handling 90-Degree Rotations</a>
         * above.
         *
         * @param theta the angle of rotation measured in radians
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.2
         */
        setToRotation$double$double$double(theta: number, anchorx: number, anchory: number): void;
        /**
         * Sets this transform to a rotation transformation that rotates
         * coordinates according to a rotation vector.
         * All coordinates rotate about the origin by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * the transform is set to an identity transform.
         * This operation is equivalent to calling:
         * <pre>
         * setToRotation(Math.atan2(vecy, vecx));
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @since 1.6
         */
        setToRotation$double$double(vecx: number, vecy: number): void;
        /**
         * Sets this transform to a rotation transformation that rotates
         * coordinates around an anchor point according to a rotation
         * vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * the transform is set to an identity transform.
         * This operation is equivalent to calling:
         * <pre>
         * setToTranslation(Math.atan2(vecy, vecx), anchorx, anchory);
         * </pre>
         *
         * @param vecx the X coordinate of the rotation vector
         * @param vecy the Y coordinate of the rotation vector
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        setToRotation(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): any;
        /**
         * Sets this transform to a rotation transformation that rotates
         * coordinates by the specified number of quadrants.
         * This operation is equivalent to calling:
         * <pre>
         * setToRotation(numquadrants * Math.PI / 2.0);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @since 1.6
         */
        setToQuadrantRotation$int(numquadrants: number): void;
        /**
         * Sets this transform to a translated rotation transformation
         * that rotates coordinates by the specified number of quadrants
         * around the specified anchor point.
         * This operation is equivalent to calling:
         * <pre>
         * setToRotation(numquadrants * Math.PI / 2.0, anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param numquadrants the number of 90 degree arcs to rotate by
         * @param anchorx the X coordinate of the rotation anchor point
         * @param anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        setToQuadrantRotation(numquadrants?: any, anchorx?: any, anchory?: any): any;
        /**
         * Sets this transform to a scaling transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @since 1.2
         */
        setToScale(sx: number, sy: number): void;
        /**
         * Sets this transform to a shearing transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @since 1.2
         */
        setToShear(shx: number, shy: number): void;
        /**
         * Sets this transform to a copy of the transform in the specified
         * <code>AffineTransform</code> object.
         * @param Tx the <code>AffineTransform</code> object from which to
         * copy the transform
         * @since 1.2
         */
        setTransform$java_awt_geom_AffineTransform(Tx: AffineTransform): void;
        /**
         * Sets this transform to the matrix specified by the 6
         * double precision values.
         *
         * @param m00 the X coordinate scaling element of the 3x3 matrix
         * @param m10 the Y coordinate shearing element of the 3x3 matrix
         * @param m01 the X coordinate shearing element of the 3x3 matrix
         * @param m11 the Y coordinate scaling element of the 3x3 matrix
         * @param m02 the X coordinate translation element of the 3x3 matrix
         * @param m12 the Y coordinate translation element of the 3x3 matrix
         * @since 1.2
         */
        setTransform(m00?: any, m10?: any, m01?: any, m11?: any, m02?: any, m12?: any): any;
        /**
         * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
         * this <code>AffineTransform</code> Cx in the most commonly useful
         * way to provide a new user space
         * that is mapped to the former user space by <code>Tx</code>.
         * Cx is updated to perform the combined transformation.
         * Transforming a point p by the updated transform Cx' is
         * equivalent to first transforming p by <code>Tx</code> and then
         * transforming the result by the original transform Cx like this:
         * Cx'(p) = Cx(Tx(p))
         * In matrix notation, if this transform Cx is
         * represented by the matrix [this] and <code>Tx</code> is represented
         * by the matrix [Tx] then this method does the following:
         * <pre>
         * [this] = [this] x [Tx]
         * </pre>
         * @param Tx the <code>AffineTransform</code> object to be
         * concatenated with this <code>AffineTransform</code> object.
         * @see #preConcatenate
         * @since 1.2
         */
        concatenate(Tx: AffineTransform): void;
        /**
         * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
         * this <code>AffineTransform</code> Cx
         * in a less commonly used way such that <code>Tx</code> modifies the
         * coordinate transformation relative to the absolute pixel
         * space rather than relative to the existing user space.
         * Cx is updated to perform the combined transformation.
         * Transforming a point p by the updated transform Cx' is
         * equivalent to first transforming p by the original transform
         * Cx and then transforming the result by
         * <code>Tx</code> like this:
         * Cx'(p) = Tx(Cx(p))
         * In matrix notation, if this transform Cx
         * is represented by the matrix [this] and <code>Tx</code> is
         * represented by the matrix [Tx] then this method does the
         * following:
         * <pre>
         * [this] = [Tx] x [this]
         * </pre>
         * @param Tx the <code>AffineTransform</code> object to be
         * concatenated with this <code>AffineTransform</code> object.
         * @see #concatenate
         * @since 1.2
         */
        preConcatenate(Tx: AffineTransform): void;
        /**
         * Returns an <code>AffineTransform</code> object representing the
         * inverse transformation.
         * The inverse transform Tx' of this transform Tx
         * maps coordinates transformed by Tx back
         * to their original coordinates.
         * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
         * <p>
         * If this transform maps all coordinates onto a point or a line
         * then it will not have an inverse, since coordinates that do
         * not lie on the destination point or line will not have an inverse
         * mapping.
         * The <code>getDeterminant</code> method can be used to determine if this
         * transform has no inverse, in which case an exception will be
         * thrown if the <code>createInverse</code> method is called.
         * @return a new <code>AffineTransform</code> object representing the
         * inverse transformation.
         * @see #getDeterminant
         * @exception NoninvertibleTransformException
         * if the matrix cannot be inverted.
         * @since 1.2
         */
        createInverse(): AffineTransform;
        /**
         * Sets this transform to the inverse of itself.
         * The inverse transform Tx' of this transform Tx
         * maps coordinates transformed by Tx back
         * to their original coordinates.
         * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
         * <p>
         * If this transform maps all coordinates onto a point or a line
         * then it will not have an inverse, since coordinates that do
         * not lie on the destination point or line will not have an inverse
         * mapping.
         * The <code>getDeterminant</code> method can be used to determine if this
         * transform has no inverse, in which case an exception will be
         * thrown if the <code>invert</code> method is called.
         * @see #getDeterminant
         * @exception NoninvertibleTransformException
         * if the matrix cannot be inverted.
         * @since 1.6
         */
        invert(): void;
        /**
         * Transforms the specified <code>ptSrc</code> and stores the result
         * in <code>ptDst</code>.
         * If <code>ptDst</code> is <code>null</code>, a new {@link Point2D}
         * object is allocated and then the result of the transformation is
         * stored in this object.
         * In either case, <code>ptDst</code>, which contains the
         * transformed point, is returned for convenience.
         * If <code>ptSrc</code> and <code>ptDst</code> are the same
         * object, the input point is correctly overwritten with
         * the transformed point.
         * @param ptSrc the specified <code>Point2D</code> to be transformed
         * @param ptDst the specified <code>Point2D</code> that stores the
         * result of transforming <code>ptSrc</code>
         * @return the <code>ptDst</code> after transforming
         * <code>ptSrc</code> and storing the result in <code>ptDst</code>.
         * @since 1.2
         */
        transform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        /**
         * Transforms an array of point objects by this transform.
         * If any element of the <code>ptDst</code> array is
         * <code>null</code>, a new <code>Point2D</code> object is allocated
         * and stored into that element before storing the results of the
         * transformation.
         * <p>
         * Note that this method does not take any precautions to
         * avoid problems caused by storing results into <code>Point2D</code>
         * objects that will be used as the source for calculations
         * further down the source array.
         * This method does guarantee that if a specified <code>Point2D</code>
         * object is both the source and destination for the same single point
         * transform operation then the results will not be stored until
         * the calculations are complete to avoid storing the results on
         * top of the operands.
         * If, however, the destination <code>Point2D</code> object for one
         * operation is the same object as the source <code>Point2D</code>
         * object for another operation further down the source array then
         * the original coordinates in that point are overwritten before
         * they can be converted.
         * @param ptSrc the array containing the source point objects
         * @param ptDst the array into which the transform point objects are
         * returned
         * @param srcOff the offset to the first point object to be
         * transformed in the source array
         * @param dstOff the offset to the location of the first
         * transformed point object that is stored in the destination array
         * @param numPts the number of point objects to be transformed
         * @since 1.2
         */
        transform(ptSrc?: any, srcOff?: any, ptDst?: any, dstOff?: any, numPts?: any): any;
        /**
         * Transforms an array of floating point coordinates by this transform.
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are overwritten by a
         * previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the specified
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed point coordinates
         * are returned.  Each point is stored as a pair of x,&nbsp;y
         * coordinates.
         * @param srcOff the offset to the first point to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param numPts the number of points to be transformed
         * @since 1.2
         */
        transform$float_A$int$float_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Transforms an array of double precision coordinates by this transform.
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are
         * overwritten by a previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the indicated
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed point
         * coordinates are returned.  Each point is stored as a pair of
         * x,&nbsp;y coordinates.
         * @param srcOff the offset to the first point to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param numPts the number of point objects to be transformed
         * @since 1.2
         */
        transform$double_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Transforms an array of floating point coordinates by this transform
         * and stores the results into an array of doubles.
         * The coordinates are stored in the arrays starting at the specified
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed point coordinates
         * are returned.  Each point is stored as a pair of x,&nbsp;y
         * coordinates.
         * @param srcOff the offset to the first point to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param numPts the number of points to be transformed
         * @since 1.2
         */
        transform$float_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Transforms an array of double precision coordinates by this transform
         * and stores the results into an array of floats.
         * The coordinates are stored in the arrays starting at the specified
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed point
         * coordinates are returned.  Each point is stored as a pair of
         * x,&nbsp;y coordinates.
         * @param srcOff the offset to the first point to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param numPts the number of point objects to be transformed
         * @since 1.2
         */
        transform$double_A$int$float_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Inverse transforms the specified <code>ptSrc</code> and stores the
         * result in <code>ptDst</code>.
         * If <code>ptDst</code> is <code>null</code>, a new
         * <code>Point2D</code> object is allocated and then the result of the
         * transform is stored in this object.
         * In either case, <code>ptDst</code>, which contains the transformed
         * point, is returned for convenience.
         * If <code>ptSrc</code> and <code>ptDst</code> are the same
         * object, the input point is correctly overwritten with the
         * transformed point.
         * @param ptSrc the point to be inverse transformed
         * @param ptDst the resulting transformed point
         * @return <code>ptDst</code>, which contains the result of the
         * inverse transform.
         * @exception NoninvertibleTransformException  if the matrix cannot be
         * inverted.
         * @since 1.2
         */
        inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        /**
         * Inverse transforms an array of double precision coordinates by
         * this transform.
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are
         * overwritten by a previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the specified
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed point
         * coordinates are returned.  Each point is stored as a pair of
         * x,&nbsp;y coordinates.
         * @param srcOff the offset to the first point to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param numPts the number of point objects to be transformed
         * @exception NoninvertibleTransformException  if the matrix cannot be
         * inverted.
         * @since 1.2
         */
        inverseTransform(srcPts?: any, srcOff?: any, dstPts?: any, dstOff?: any, numPts?: any): any;
        /**
         * Transforms the relative distance vector specified by
         * <code>ptSrc</code> and stores the result in <code>ptDst</code>.
         * A relative distance vector is transformed without applying the
         * translation components of the affine transformation matrix
         * using the following equations:
         * <pre>
         * [  x' ]   [  m00  m01 (m02) ] [  x  ]   [ m00x + m01y ]
         * [  y' ] = [  m10  m11 (m12) ] [  y  ] = [ m10x + m11y ]
         * [ (1) ]   [  (0)  (0) ( 1 ) ] [ (1) ]   [     (1)     ]
         * </pre>
         * If <code>ptDst</code> is <code>null</code>, a new
         * <code>Point2D</code> object is allocated and then the result of the
         * transform is stored in this object.
         * In either case, <code>ptDst</code>, which contains the
         * transformed point, is returned for convenience.
         * If <code>ptSrc</code> and <code>ptDst</code> are the same object,
         * the input point is correctly overwritten with the transformed
         * point.
         * @param ptSrc the distance vector to be delta transformed
         * @param ptDst the resulting transformed distance vector
         * @return <code>ptDst</code>, which contains the result of the
         * transformation.
         * @since 1.2
         */
        deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        /**
         * Transforms an array of relative distance vectors by this
         * transform.
         * A relative distance vector is transformed without applying the
         * translation components of the affine transformation matrix
         * using the following equations:
         * <pre>
         * [  x' ]   [  m00  m01 (m02) ] [  x  ]   [ m00x + m01y ]
         * [  y' ] = [  m10  m11 (m12) ] [  y  ] = [ m10x + m11y ]
         * [ (1) ]   [  (0)  (0) ( 1 ) ] [ (1) ]   [     (1)     ]
         * </pre>
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are
         * overwritten by a previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the indicated
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param srcPts the array containing the source distance vectors.
         * Each vector is stored as a pair of relative x,&nbsp;y coordinates.
         * @param dstPts the array into which the transformed distance vectors
         * are returned.  Each vector is stored as a pair of relative
         * x,&nbsp;y coordinates.
         * @param srcOff the offset to the first vector to be transformed
         * in the source array
         * @param dstOff the offset to the location of the first
         * transformed vector that is stored in the destination array
         * @param numPts the number of vector coordinate pairs to be
         * transformed
         * @since 1.2
         */
        deltaTransform(srcPts?: any, srcOff?: any, dstPts?: any, dstOff?: any, numPts?: any): any;
        /**
         * Returns a new {@link Shape} object defined by the geometry of the
         * specified <code>Shape</code> after it has been transformed by
         * this transform.
         * @param pSrc the specified <code>Shape</code> object to be
         * transformed by this transform.
         * @return a new <code>Shape</code> object that defines the geometry
         * of the transformed <code>Shape</code>, or null if {@code pSrc} is null.
         * @since 1.2
         */
        createTransformedShape(pSrc: java.awt.Shape): java.awt.Shape;
        private static _matround(matval);
        /**
         * Returns a <code>String</code> that represents the value of this
         * {@link Object}.
         * @return a <code>String</code> representing the value of this
         * <code>Object</code>.
         * @since 1.2
         */
        toString(): string;
        /**
         * Returns <code>true</code> if this <code>AffineTransform</code> is
         * an identity transform.
         * @return <code>true</code> if this <code>AffineTransform</code> is
         * an identity transform; <code>false</code> otherwise.
         * @since 1.2
         */
        isIdentity(): boolean;
        /**
         * Returns a copy of this <code>AffineTransform</code> object.
         * @return an <code>Object</code> that is a copy of this
         * <code>AffineTransform</code> object.
         * @since 1.2
         */
        clone(): any;
        /**
         * Returns the hashcode for this transform.
         * @return      a hash code for this transform.
         * @since 1.2
         */
        hashCode(): number;
        /**
         * Returns <code>true</code> if this <code>AffineTransform</code>
         * represents the same affine coordinate transform as the specified
         * argument.
         * @param obj the <code>Object</code> to test for equality with this
         * <code>AffineTransform</code>
         * @return <code>true</code> if <code>obj</code> equals this
         * <code>AffineTransform</code> object; <code>false</code> otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
        static serialVersionUID: number;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an arc through the
     * PathIterator interface.
     *
     * @author Jim Graham
     */
    class ArcIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        angStRad: number;
        increment: number;
        cv: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        arcSegs: number;
        lineSegs: number;
        constructor(a: java.awt.geom.Arc2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        private static btan(increment);
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * An <code>Area</code> object stores and manipulates a resolution-independent
     * description of an enclosed area of 2-dimensional space. <code>Area</code>
     * objects can be transformed and can perform various Constructive Area Geometry
     * (CAG) operations when combined with other <code>Area</code> objects. The CAG
     * operations include area {@link #add addition}, {@link #subtract subtraction},
     * {@link #intersect intersection}, and {@link #exclusiveOr exclusive or}. See
     * the linked method documentation for examples of the various operations.
     * <p>
     * The <code>Area</code> class implements the <code>Shape</code> interface and
     * provides full support for all of its hit-testing and path iteration
     * facilities, but an <code>Area</code> is more specific than a generalized path
     * in a number of ways:
     * <ul>
     * <li>Only closed paths and sub-paths are stored. <code>Area</code> objects
     * constructed from unclosed paths are implicitly closed during construction as
     * if those paths had been filled by the <code>Graphics2D.fill</code> method.
     * <li>The interiors of the individual stored sub-paths are all non-empty and
     * non-overlapping. Paths are decomposed during construction into separate
     * component non-overlapping parts, empty pieces of the path are discarded, and
     * then these non-empty and non-overlapping properties are maintained through
     * all subsequent CAG operations. Outlines of different component sub-paths may
     * touch each other, as long as they do not cross so that their enclosed areas
     * overlap.
     * <li>The geometry of the path describing the outline of the <code>Area</code>
     * resembles the path from which it was constructed only in that it describes
     * the same enclosed 2-dimensional area, but may use entirely different types
     * and ordering of the path segments to do so.
     * </ul>
     * Interesting issues which are not always obvious when using the
     * <code>Area</code> include:
     * <ul>
     * <li>Creating an <code>Area</code> from an unclosed (open) <code>Shape</code>
     * results in a closed outline in the <code>Area</code> object.
     * <li>Creating an <code>Area</code> from a <code>Shape</code> which encloses no
     * area (even when "closed") produces an empty <code>Area</code>. A common
     * example of this issue is that producing an <code>Area</code> from a line will
     * be empty since the line encloses no area. An empty <code>Area</code> will
     * iterate no geometry in its <code>PathIterator</code> objects.
     * <li>A self-intersecting <code>Shape</code> may be split into two (or more)
     * sub-paths each enclosing one of the non-intersecting portions of the original
     * path.
     * <li>An <code>Area</code> may take more path segments to describe the same
     * geometry even when the original outline is simple and obvious. The analysis
     * that the <code>Area</code> class must perform on the path may not reflect the
     * same concepts of "simple and obvious" as a human being perceives.
     * </ul>
     *
     * @since 1.2
     */
    class Area implements java.awt.Shape, java.lang.Cloneable {
        static EmptyCurves: java.util.Vector<any>;
        static EmptyCurves_$LI$(): java.util.Vector<any>;
        private curves;
        /**
         * The <code>Area</code> class creates an area geometry from the specified
         * {@link Shape} object. The geometry is explicitly closed, if the
         * <code>Shape</code> is not already closed. The fill rule (even-odd or
         * winding) specified by the geometry of the <code>Shape</code> is used to
         * determine the resulting enclosed area.
         *
         * @param s
         * the <code>Shape</code> from which the area is constructed
         * @throws NullPointerException
         * if <code>s</code> is null
         * @since 1.2
         */
        constructor(s?: any);
        private static pathToCurves(pi);
        /**
         * Adds the shape of the specified <code>Area</code> to the shape of this
         * <code>Area</code>. The resulting shape of this <code>Area</code> will
         * include the union of both shapes, or all areas that were contained in
         * either this or the specified <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.add(a2);
         *
         * a1(before)     +         a2         =     a1(after)
         *
         * ################     ################     ################
         * ##############         ##############     ################
         * ############             ############     ################
         * ##########                 ##########     ################
         * ########                     ########     ################
         * ######                         ######     ######    ######
         * ####                             ####     ####        ####
         * ##                                 ##     ##            ##
         * </pre>
         *
         * @param rhs
         * the <code>Area</code> to be added to the current shape
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        add(rhs: Area): void;
        /**
         * Subtracts the shape of the specified <code>Area</code> from the shape of
         * this <code>Area</code>. The resulting shape of this <code>Area</code>
         * will include areas that were contained only in this <code>Area</code> and
         * not in the specified <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.subtract(a2);
         *
         * a1(before)     -         a2         =     a1(after)
         *
         * ################     ################
         * ##############         ##############     ##
         * ############             ############     ####
         * ##########                 ##########     ######
         * ########                     ########     ########
         * ######                         ######     ######
         * ####                             ####     ####
         * ##                                 ##     ##
         * </pre>
         *
         * @param rhs
         * the <code>Area</code> to be subtracted from the current shape
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        subtract(rhs: Area): void;
        /**
         * Sets the shape of this <code>Area</code> to the intersection of its
         * current shape and the shape of the specified <code>Area</code>. The
         * resulting shape of this <code>Area</code> will include only areas that
         * were contained in both this <code>Area</code> and also in the specified
         * <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.intersect(a2);
         *
         * a1(before)   intersect     a2         =     a1(after)
         *
         * ################     ################     ################
         * ##############         ##############       ############
         * ############             ############         ########
         * ##########                 ##########           ####
         * ########                     ########
         * ######                         ######
         * ####                             ####
         * ##                                 ##
         * </pre>
         *
         * @param rhs
         * the <code>Area</code> to be intersected with this
         * <code>Area</code>
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        intersect(rhs: Area): void;
        /**
         * Sets the shape of this <code>Area</code> to be the combined area of its
         * current shape and the shape of the specified <code>Area</code>, minus
         * their intersection. The resulting shape of this <code>Area</code> will
         * include only areas that were contained in either this <code>Area</code>
         * or in the specified <code>Area</code>, but not in both.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.exclusiveOr(a2);
         *
         * a1(before)    xor        a2         =     a1(after)
         *
         * ################     ################
         * ##############         ##############     ##            ##
         * ############             ############     ####        ####
         * ##########                 ##########     ######    ######
         * ########                     ########     ################
         * ######                         ######     ######    ######
         * ####                             ####     ####        ####
         * ##                                 ##     ##            ##
         * </pre>
         *
         * @param rhs
         * the <code>Area</code> to be exclusive ORed with this
         * <code>Area</code>.
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        exclusiveOr(rhs: Area): void;
        /**
         * Removes all of the geometry from this <code>Area</code> and restores it
         * to an empty area.
         *
         * @since 1.2
         */
        reset(): void;
        /**
         * Tests whether this <code>Area</code> object encloses any area.
         *
         * @return <code>true</code> if this <code>Area</code> object represents an
         * empty area; <code>false</code> otherwise.
         * @since 1.2
         */
        isEmpty(): boolean;
        /**
         * Tests whether this <code>Area</code> consists entirely of straight edged
         * polygonal geometry.
         *
         * @return <code>true</code> if the geometry of this <code>Area</code>
         * consists entirely of line segments; <code>false</code> otherwise.
         * @since 1.2
         */
        isPolygonal(): boolean;
        /**
         * Tests whether this <code>Area</code> is rectangular in shape.
         *
         * @return <code>true</code> if the geometry of this <code>Area</code> is
         * rectangular in shape; <code>false</code> otherwise.
         * @since 1.2
         */
        isRectangular(): boolean;
        /**
         * Tests whether this <code>Area</code> is comprised of a single closed
         * subpath. This method returns <code>true</code> if the path contains 0 or
         * 1 subpaths, or <code>false</code> if the path contains more than 1
         * subpath. The subpaths are counted by the number of
         * {@link PathIterator#SEG_MOVETO SEG_MOVETO} segments that appear in the
         * path.
         *
         * @return <code>true</code> if the <code>Area</code> is comprised of a
         * single basic geometry; <code>false</code> otherwise.
         * @since 1.2
         */
        isSingular(): boolean;
        private cachedBounds;
        private invalidateBounds();
        private getCachedBounds();
        /**
         * Returns a high precision bounding {@link Rectangle2D} that completely
         * encloses this <code>Area</code>.
         * <p>
         * The Area class will attempt to return the tightest bounding box possible
         * for the Shape. The bounding box will not be padded to include the control
         * points of curves in the outline of the Shape, but should tightly fit the
         * actual geometry of the outline itself.
         *
         * @return the bounding <code>Rectangle2D</code> for the <code>Area</code>.
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Returns a bounding {@link Rectangle} that completely encloses this
         * <code>Area</code>.
         * <p>
         * The Area class will attempt to return the tightest bounding box possible
         * for the Shape. The bounding box will not be padded to include the control
         * points of curves in the outline of the Shape, but should tightly fit the
         * actual geometry of the outline itself. Since the returned object
         * represents the bounding box with integers, the bounding box can only be
         * as tight as the nearest integer coordinates that encompass the geometry
         * of the Shape.
         *
         * @return the bounding <code>Rectangle</code> for the <code>Area</code>.
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an exact copy of this <code>Area</code> object.
         *
         * @return Created clone object
         * @since 1.2
         */
        clone(): any;
        /**
         * Tests whether the geometries of the two <code>Area</code> objects are
         * equal. This method will return false if the argument is null.
         *
         * @param other
         * the <code>Area</code> to be compared to this <code>Area</code>
         * @return <code>true</code> if the two geometries are equal;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        equals(other: Area): boolean;
        /**
         * Transforms the geometry of this <code>Area</code> using the specified
         * {@link AffineTransform}. The geometry is transformed in place, which
         * permanently changes the enclosed area defined by this object.
         *
         * @param t
         * the transformation used to transform the area
         * @throws NullPointerException
         * if <code>t</code> is null
         * @since 1.2
         */
        transform(t: java.awt.geom.AffineTransform): void;
        /**
         * Creates a new <code>Area</code> object that contains the same geometry as
         * this <code>Area</code> transformed by the specified
         * <code>AffineTransform</code>. This <code>Area</code> object is unchanged.
         *
         * @param t
         * the specified <code>AffineTransform</code> used to transform
         * the new <code>Area</code>
         * @throws NullPointerException
         * if <code>t</code> is null
         * @return a new <code>Area</code> object representing the transformed
         * geometry.
         * @since 1.2
         */
        createTransformedArea(t: java.awt.geom.AffineTransform): Area;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * Creates a {@link PathIterator} for the outline of this <code>Area</code>
         * object. This <code>Area</code> object is unchanged.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Area</code>, one segment at a time.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Creates a <code>PathIterator</code> for the flattened outline of this
         * <code>Area</code> object. Only uncurved path segments represented by the
         * SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types are returned by the
         * iterator. This <code>Area</code> object is unchanged.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Area</code>, one segment at a time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
    }
    class AreaIterator implements java.awt.geom.PathIterator {
        private transform;
        private curves;
        private index;
        private prevcurve;
        private thiscurve;
        constructor(curves: java.util.Vector<any>, at: java.awt.geom.AffineTransform);
        getWindingRule(): number;
        isDone(): boolean;
        next(): void;
        currentSegment(coords?: any): any;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>CubicCurve2D</code> class defines a cubic parametric curve segment
     * in {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects which store a 2D
     * cubic curve segment. The actual storage representation of the coordinates is
     * left to the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class CubicCurve2D implements java.awt.Shape, java.lang.Cloneable {
        abstract getBounds2D(): any;
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.CubicCurve2D.Float
         * @see java.awt.geom.CubicCurve2D.Double
         * @since 1.2
         */
        constructor();
        /**
         * Returns the X coordinate of the start point in double precision.
         *
         * @return the X coordinate of the start point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in double precision.
         *
         * @return the Y coordinate of the start point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start point.
         *
         * @return a {@code Point2D} that is the start point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the first control point in double precision.
         *
         * @return the X coordinate of the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlX1(): number;
        /**
         * Returns the Y coordinate of the first control point in double precision.
         *
         * @return the Y coordinate of the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlY1(): number;
        /**
         * Returns the first control point.
         *
         * @return a {@code Point2D} that is the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the second control point in double precision.
         *
         * @return the X coordinate of the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlX2(): number;
        /**
         * Returns the Y coordinate of the second control point in double precision.
         *
         * @return the Y coordinate of the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlY2(): number;
        /**
         * Returns the second control point.
         *
         * @return a {@code Point2D} that is the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlP2(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in double precision.
         *
         * @return the X coordinate of the end point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in double precision.
         *
         * @return the Y coordinate of the end point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end point.
         *
         * @return a {@code Point2D} that is the end point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        /**
         * Sets the location of the end points and control points of this curve
         * to the specified {@code float} coordinates.
         *
         * @param x1
         * the X coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param y1
         * the Y coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param ctrlx1
         * the X coordinate used to set the first control point of
         * this {@code CubicCurve2D}
         * @param ctrly1
         * the Y coordinate used to set the first control point of
         * this {@code CubicCurve2D}
         * @param ctrlx2
         * the X coordinate used to set the second control point of
         * this {@code CubicCurve2D}
         * @param ctrly2
         * the Y coordinate used to set the second control point of
         * this {@code CubicCurve2D}
         * @param x2
         * the X coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @param y2
         * the Y coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @since 1.2
         */
        setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
        /**
         * Sets the location of the end points and control points of this curve to
         * the specified double coordinates.
         *
         * @param x1
         * the X coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param y1
         * the Y coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param ctrlx1
         * the X coordinate used to set the first control point of this
         * {@code CubicCurve2D}
         * @param ctrly1
         * the Y coordinate used to set the first control point of this
         * {@code CubicCurve2D}
         * @param ctrlx2
         * the X coordinate used to set the second control point of this
         * {@code CubicCurve2D}
         * @param ctrly2
         * the Y coordinate used to set the second control point of this
         * {@code CubicCurve2D}
         * @param x2
         * the X coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @param y2
         * the Y coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @since 1.2
         */
        setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points and control points of this curve to
         * the double coordinates at the specified offset in the specified array.
         *
         * @param coords
         * a double array containing coordinates
         * @param offset
         * the index of <code>coords</code> from which to begin setting
         * the end points and control points of this curve to the
         * coordinates contained in <code>coords</code>
         * @since 1.2
         */
        setCurve$double_A$int(coords: number[], offset: number): void;
        /**
         * Sets the location of the end points and control points of this curve to
         * the specified <code>Point2D</code> coordinates.
         *
         * @param p1
         * the first specified <code>Point2D</code> used to set the start
         * point of this curve
         * @param cp1
         * the second specified <code>Point2D</code> used to set the
         * first control point of this curve
         * @param cp2
         * the third specified <code>Point2D</code> used to set the
         * second control point of this curve
         * @param p2
         * the fourth specified <code>Point2D</code> used to set the end
         * point of this curve
         * @since 1.2
         */
        setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, cp1: java.awt.geom.Point2D, cp2: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the location of the end points and control points of this curve to
         * the coordinates of the <code>Point2D</code> objects at the specified
         * offset in the specified array.
         *
         * @param pts
         * an array of <code>Point2D</code> objects
         * @param offset
         * the index of <code>pts</code> from which to begin setting the
         * end points and control points of this curve to the points
         * contained in <code>pts</code>
         * @since 1.2
         */
        setCurve$java_awt_geom_Point2D_A$int(pts: java.awt.geom.Point2D[], offset: number): void;
        /**
         * Sets the location of the end points and control points of this curve to
         * the same as those in the specified <code>CubicCurve2D</code>.
         *
         * @param c
         * the specified <code>CubicCurve2D</code>
         * @since 1.2
         */
        setCurve$java_awt_geom_CubicCurve2D(c: CubicCurve2D): void;
        /**
         * Returns the square of the flatness of the cubic curve specified by the
         * indicated control points. The flatness is the maximum distance of a
         * control point from the line connecting the end points.
         *
         * @param x1
         * the X coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param y1
         * the Y coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param ctrlx1
         * the X coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param ctrly1
         * the Y coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param ctrlx2
         * the X coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param ctrly2
         * the Y coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param x2
         * the X coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @param y2
         * the Y coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @return the square of the flatness of the {@code CubicCurve2D}
         * represented by the specified coordinates.
         * @since 1.2
         */
        static getFlatnessSq(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
        /**
         * Returns the flatness of the cubic curve specified by the indicated
         * control points. The flatness is the maximum distance of a control point
         * from the line connecting the end points.
         *
         * @param x1
         * the X coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param y1
         * the Y coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param ctrlx1
         * the X coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param ctrly1
         * the Y coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param ctrlx2
         * the X coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param ctrly2
         * the Y coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param x2
         * the X coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @param y2
         * the Y coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @return the flatness of the {@code CubicCurve2D} represented by the
         * specified coordinates.
         * @since 1.2
         */
        static getFlatness(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
        /**
         * Returns the square of the flatness of the cubic curve specified by the
         * control points stored in the indicated array at the indicated index. The
         * flatness is the maximum distance of a control point from the line
         * connecting the end points.
         *
         * @param coords
         * an array containing coordinates
         * @param offset
         * the index of <code>coords</code> from which to begin getting
         * the end points and control points of the curve
         * @return the square of the flatness of the <code>CubicCurve2D</code>
         * specified by the coordinates in <code>coords</code> at the
         * specified offset.
         * @since 1.2
         */
        static getFlatnessSq$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the flatness of the cubic curve specified by the control points
         * stored in the indicated array at the indicated index. The flatness is the
         * maximum distance of a control point from the line connecting the end
         * points.
         *
         * @param coords
         * an array containing coordinates
         * @param offset
         * the index of <code>coords</code> from which to begin getting
         * the end points and control points of the curve
         * @return the flatness of the <code>CubicCurve2D</code> specified by the
         * coordinates in <code>coords</code> at the specified offset.
         * @since 1.2
         */
        static getFlatness$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the square of the flatness of this curve. The flatness is the
         * maximum distance of a control point from the line connecting the end
         * points.
         *
         * @return the square of the flatness of this curve.
         * @since 1.2
         */
        getFlatnessSq(): number;
        /**
         * Returns the flatness of this curve. The flatness is the maximum distance
         * of a control point from the line connecting the end points.
         *
         * @return the flatness of this curve.
         * @since 1.2
         */
        getFlatness(): number;
        /**
         * Subdivides this cubic curve and stores the resulting two subdivided
         * curves into the left and right curve parameters. Either or both of the
         * left and right objects may be the same as this object or null.
         *
         * @param left
         * the cubic curve object for storing for the left or first half
         * of the subdivided curve
         * @param right
         * the cubic curve object for storing for the right or second
         * half of the subdivided curve
         * @since 1.2
         */
        subdivide(left: CubicCurve2D, right: CubicCurve2D): void;
        /**
         * Subdivides the cubic curve specified by the <code>src</code> parameter
         * and stores the resulting two subdivided curves into the <code>left</code>
         * and <code>right</code> curve parameters. Either or both of the
         * <code>left</code> and <code>right</code> objects may be the same as the
         * <code>src</code> object or <code>null</code>.
         *
         * @param src
         * the cubic curve to be subdivided
         * @param left
         * the cubic curve object for storing the left or first half of
         * the subdivided curve
         * @param right
         * the cubic curve object for storing the right or second half of
         * the subdivided curve
         * @since 1.2
         */
        static subdivide$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D(src: CubicCurve2D, left: CubicCurve2D, right: CubicCurve2D): void;
        /**
         * Subdivides the cubic curve specified by the coordinates stored in the
         * <code>src</code> array at indices <code>srcoff</code> through (
         * <code>srcoff</code>&nbsp;+&nbsp;7) and stores the resulting two
         * subdivided curves into the two result arrays at the corresponding
         * indices. Either or both of the <code>left</code> and <code>right</code>
         * arrays may be <code>null</code> or a reference to the same array as the
         * <code>src</code> array. Note that the last point in the first subdivided
         * curve is the same as the first point in the second subdivided curve.
         * Thus, it is possible to pass the same array for <code>left</code> and
         * <code>right</code> and to use offsets, such as <code>rightoff</code>
         * equals (<code>leftoff</code> + 6), in order to avoid allocating extra
         * storage for this common point.
         *
         * @param src
         * the array holding the coordinates for the source curve
         * @param srcoff
         * the offset into the array of the beginning of the the 6 source
         * coordinates
         * @param left
         * the array for storing the coordinates for the first half of
         * the subdivided curve
         * @param leftoff
         * the offset into the array of the beginning of the the 6 left
         * coordinates
         * @param right
         * the array for storing the coordinates for the second half of
         * the subdivided curve
         * @param rightoff
         * the offset into the array of the beginning of the the 6 right
         * coordinates
         * @since 1.2
         */
        static subdivide(src?: any, srcoff?: any, left?: any, leftoff?: any, right?: any, rightoff?: any): any;
        /**
         * Solves the cubic whose coefficients are in the <code>eqn</code> array and
         * places the non-complex roots back into the same array, returning the
         * number of roots. The solved cubic is represented by the equation:
         *
         * <pre>
         * eqn = {c, b, a, d}
         * dx^3 + ax^2 + bx + c = 0
         * </pre>
         *
         * A return value of -1 is used to distinguish a constant equation that
         * might be always 0 or never 0 from an equation that has no zeroes.
         *
         * @param eqn
         * an array containing coefficients for a cubic
         * @return the number of roots, or -1 if the equation is a constant.
         * @since 1.2
         */
        static solveCubic$double_A(eqn: number[]): number;
        /**
         * Solve the cubic whose coefficients are in the <code>eqn</code> array and
         * place the non-complex roots into the <code>res</code> array, returning
         * the number of roots. The cubic solved is represented by the equation: eqn
         * = {c, b, a, d} dx^3 + ax^2 + bx + c = 0 A return value of -1 is used to
         * distinguish a constant equation, which may be always 0 or never 0, from
         * an equation which has no zeroes.
         *
         * @param eqn
         * the specified array of coefficients to use to solve the cubic
         * equation
         * @param res
         * the array that contains the non-complex roots resulting from
         * the solution of the cubic equation
         * @return the number of roots, or -1 if the equation is a constant
         * @since 1.3
         */
        static solveCubic(eqn?: any, res?: any): any;
        static fixRoots(eqn: number[], res: number[], num: number): number;
        static refineRootWithHint(eqn: number[], min: number, max: number, t: number): number;
        static bisectRootWithHint(eqn: number[], x0: number, xe: number, hint: number): number;
        static bisectRoot(eqn: number[], x0: number, xe: number): number;
        static inInterval(t: number, min: number, max: number): boolean;
        static within(x: number, y: number, err: number): boolean;
        static iszero(x: number, err: number): boolean;
        static oppositeSigns(x1: number, x2: number): boolean;
        static solveEqn(eqn: number[], order: number, t: number): number;
        static getRootUpperBound(eqn: number[]): number;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        rectCrossings(x: number, y: number, w: number, h: number): number;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an iteration object that defines the boundary of the shape. The
         * iterator for this class is not multi-threaded safe, which means that this
         * <code>CubicCurve2D</code> class does not guarantee that modifications to
         * the geometry of this <code>CubicCurve2D</code> object do not affect any
         * iterations of that geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>CubicCurve2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Return an iteration object that defines the boundary of the flattened
         * shape. The iterator for this class is not multi-threaded safe, which
         * means that this <code>CubicCurve2D</code> class does not guarantee that
         * modifications to the geometry of this <code>CubicCurve2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>CubicCurve2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
    namespace CubicCurve2D {
        /**
         * A cubic parametric curve segment specified with {@code float}
         * coordinates.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx1: number;
            /**
             * The Y coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly1: number;
            /**
             * The X coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx2: number;
            /**
             * The Y coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly2: number;
            /**
             * The X coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a {@code CubicCurve2D} from the specified
             * {@code float} coordinates.
             *
             * @param x1
             * the X coordinate for the start point of the resulting
             * {@code CubicCurve2D}
             * @param y1
             * the Y coordinate for the start point of the resulting
             * {@code CubicCurve2D}
             * @param ctrlx1
             * the X coordinate for the first control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrly1
             * the Y coordinate for the first control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrlx2
             * the X coordinate for the second control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrly2
             * the Y coordinate for the second control point of the
             * resulting {@code CubicCurve2D}
             * @param x2
             * the X coordinate for the end point of the resulting
             * {@code CubicCurve2D}
             * @param y2
             * the Y coordinate for the end point of the resulting
             * {@code CubicCurve2D}
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points and control points of this curve
             * to the specified {@code float} coordinates.
             *
             * @param x1
             * the X coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param y1
             * the Y coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param ctrlx1
             * the X coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param ctrly1
             * the Y coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param ctrlx2
             * the X coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param ctrly2
             * the Y coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param x2
             * the X coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @param y2
             * the Y coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * A cubic parametric curve segment specified with {@code double}
         * coordinates.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx1: number;
            /**
             * The Y coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly1: number;
            /**
             * The X coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx2: number;
            /**
             * The Y coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly2: number;
            /**
             * The X coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a {@code CubicCurve2D} from the specified
             * {@code double} coordinates.
             *
             * @param x1
             * the X coordinate for the start point of the resulting
             * {@code CubicCurve2D}
             * @param y1
             * the Y coordinate for the start point of the resulting
             * {@code CubicCurve2D}
             * @param ctrlx1
             * the X coordinate for the first control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrly1
             * the Y coordinate for the first control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrlx2
             * the X coordinate for the second control point of the
             * resulting {@code CubicCurve2D}
             * @param ctrly2
             * the Y coordinate for the second control point of the
             * resulting {@code CubicCurve2D}
             * @param x2
             * the X coordinate for the end point of the resulting
             * {@code CubicCurve2D}
             * @param y2
             * the Y coordinate for the end point of the resulting
             * {@code CubicCurve2D}
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * Sets the location of the end points and control points of this curve
             * to the specified {@code float} coordinates.
             *
             * @param x1
             * the X coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param y1
             * the Y coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param ctrlx1
             * the X coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param ctrly1
             * the Y coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param ctrlx2
             * the X coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param ctrly2
             * the Y coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param x2
             * the X coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @param y2
             * the Y coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a cubic curve segment
     * through the PathIterator interface.
     *
     * @author Jim Graham
     */
    class CubicIterator implements java.awt.geom.PathIterator {
        cubic: java.awt.geom.CubicCurve2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(q: java.awt.geom.CubicCurve2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Dimension2D</code> class is to encapsulate a width and a height
     * dimension.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * dimension. The actual storage representation of the sizes is left to the
     * subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class Dimension2D implements java.lang.Cloneable {
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.Dimension
         * @since 1.2
         */
        constructor();
        /**
         * Returns the width of this <code>Dimension</code> in double precision.
         *
         * @return the width of this <code>Dimension</code>.
         * @since 1.2
         */
        abstract getWidth(): number;
        /**
         * Returns the height of this <code>Dimension</code> in double precision.
         *
         * @return the height of this <code>Dimension</code>.
         * @since 1.2
         */
        abstract getHeight(): number;
        setSize(width?: any, height?: any): any;
        /**
         * Sets the size of this <code>Dimension</code> object to the specified
         * width and height. This method is included for completeness, to parallel
         * the {@link java.awt.Component#getSize getSize} method of
         * {@link java.awt.Component}.
         *
         * @param width
         * the new width for the <code>Dimension</code> object
         * @param height
         * the new height for the <code>Dimension</code> object
         * @since 1.2
         */
        setSize$double$double(width: number, height: number): void;
        /**
         * Sets the size of this <code>Dimension2D</code> object to match the
         * specified size. This method is included for completeness, to parallel the
         * <code>getSize</code> method of <code>Component</code>.
         *
         * @param d
         * the new size for the <code>Dimension2D</code> object
         * @since 1.2
         */
        setSize$java_awt_geom_Dimension2D(d: Dimension2D): void;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an ellipse through the
     * PathIterator interface.
     *
     * @author Jim Graham
     */
    class EllipseIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(e: java.awt.geom.Ellipse2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        static CtrlVal: number;
        static pcv: number;
        static pcv_$LI$(): number;
        static ncv: number;
        static ncv_$LI$(): number;
        static ctrlpts: number[][];
        static ctrlpts_$LI$(): number[][];
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>FlatteningPathIterator</code> class returns a flattened view of
     * another {@link PathIterator} object. Other {@link java.awt.Shape Shape}
     * classes can use this class to provide flattening behavior for their paths
     * without having to perform the interpolation calculations themselves.
     *
     * @author Jim Graham
     */
    class FlatteningPathIterator implements java.awt.geom.PathIterator {
        static GROW_SIZE: number;
        src: java.awt.geom.PathIterator;
        squareflat: number;
        limit: number;
        hold: number[];
        curx: number;
        cury: number;
        movx: number;
        movy: number;
        holdType: number;
        holdEnd: number;
        holdIndex: number;
        levels: number[];
        levelIndex: number;
        done: boolean;
        /**
         * Constructs a new <code>FlatteningPathIterator</code> object that flattens
         * a path as it iterates over it. The <code>limit</code> parameter allows
         * you to control the maximum number of recursive subdivisions that the
         * iterator can make before it assumes that the curve is flat enough without
         * measuring against the <code>flatness</code> parameter. The flattened
         * iteration therefore never generates more than a maximum of
         * <code>(2^limit)</code> line segments per curve.
         *
         * @param src
         * the original unflattened path being iterated over
         * @param flatness
         * the maximum allowable distance between the control points and
         * the flattened curve
         * @param limit
         * the maximum number of recursive subdivisions allowed for any
         * curved segment
         * @exception IllegalArgumentException
         * if <code>flatness</code> or <code>limit</code> is less
         * than zero
         */
        constructor(src: java.awt.geom.PathIterator, flatness: number, limit?: number);
        /**
         * Returns the flatness of this iterator.
         *
         * @return the flatness of this <code>FlatteningPathIterator</code>.
         */
        getFlatness(): number;
        /**
         * Returns the recursion limit of this iterator.
         *
         * @return the recursion limit of this <code>FlatteningPathIterator</code>.
         */
        getRecursionLimit(): number;
        /**
         * Returns the winding rule for determining the interior of the path.
         *
         * @return the winding rule of the original unflattened path being iterated
         * over.
         * @see PathIterator#WIND_EVEN_ODD
         * @see PathIterator#WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if the iteration is complete.
         *
         * @return <code>true</code> if all the segments have been read;
         * <code>false</code> otherwise.
         */
        isDone(): boolean;
        ensureHoldCapacity(want: number): void;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next$(): void;
        next(doNext?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, or SEG_CLOSE. A float array of length 6 must be passed in and
         * can be used to store the coordinates of the point(s). Each point is
         * stored as a pair of float x,y coordinates. SEG_MOVETO and SEG_LINETO
         * types return one point, and SEG_CLOSE does not return any points.
         *
         * @param coords
         * an array that holds the data returned from this method
         * @return the path segment type of the current path segment.
         * @exception NoSuchElementException
         * if there are no more elements in the flattening path to be
         * returned.
         * @see PathIterator#SEG_MOVETO
         * @see PathIterator#SEG_LINETO
         * @see PathIterator#SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, or SEG_CLOSE. A double array of length 6 must be passed in
         * and can be used to store the coordinates of the point(s). Each point is
         * stored as a pair of double x,y coordinates. SEG_MOVETO and SEG_LINETO
         * types return one point, and SEG_CLOSE does not return any points.
         *
         * @param coords
         * an array that holds the data returned from this method
         * @return the path segment type of the current path segment.
         * @exception NoSuchElementException
         * if there are no more elements in the flattening path to be
         * returned.
         * @see PathIterator#SEG_MOVETO
         * @see PathIterator#SEG_LINETO
         * @see PathIterator#SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>IllegalPathStateException</code> represents an
     * exception that is thrown if an operation is performed on a path
     * that is in an illegal state with respect to the particular
     * operation being performed, such as appending a path segment
     * to a {@link GeneralPath} without an initial moveto.
     */
    class IllegalPathStateException extends Error {
        /**
         * Constructs an <code>IllegalPathStateException</code> with the
         * specified detail message.
         * @param   s   the detail message
         * @since   1.2
         */
        constructor(s?: any);
    }
}
declare namespace java.awt.geom {
    /**
     * This <code>Line2D</code> represents a line segment in {@code (x,y)}
     * coordinate space. This class, like all of the Java 2D API, uses a default
     * coordinate system called <i>user space</i> in which the y-axis values
     * increase downward and x-axis values increase to the right. For more
     * information on the user space coordinate system, see the <a href=
     * "http://docs.oracle.com/javase/1.3/docs/guide/2d/spec/j2d-intro.fm2.html#61857">
     * Coordinate Systems</a> section of the Java 2D Programmer's Guide.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * line segment. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class Line2D implements java.awt.Shape, java.lang.Cloneable {
        abstract getBounds2D(): any;
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessory methods below.
         *
         * @see java.awt.geom.Line2D.Float
         * @see java.awt.geom.Line2D.Double
         * @since 1.2
         */
        constructor();
        /**
         * Returns the X coordinate of the start point in double precision.
         *
         * @return the X coordinate of the start point of this {@code Line2D}
         * object.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in double precision.
         *
         * @return the Y coordinate of the start point of this {@code Line2D}
         * object.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start <code>Point2D</code> of this <code>Line2D</code>.
         *
         * @return the start <code>Point2D</code> of this <code>Line2D</code>.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in double precision.
         *
         * @return the X coordinate of the end point of this {@code Line2D} object.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in double precision.
         *
         * @return the Y coordinate of the end point of this {@code Line2D} object.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end <code>Point2D</code> of this <code>Line2D</code>.
         *
         * @return the end <code>Point2D</code> of this <code>Line2D</code>.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        /**
         * Sets the location of the end points of this <code>Line2D</code> to
         * the specified float coordinates.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Sets the location of the end points of this <code>Line2D</code> to the
         * specified double coordinates.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points of this <code>Line2D</code> to the
         * specified <code>Point2D</code> coordinates.
         *
         * @param p1
         * the start <code>Point2D</code> of the line segment
         * @param p2
         * the end <code>Point2D</code> of the line segment
         * @since 1.2
         */
        setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the location of the end points of this <code>Line2D</code> to the
         * same as those end points of the specified <code>Line2D</code>.
         *
         * @param l
         * the specified <code>Line2D</code>
         * @since 1.2
         */
        setLine$java_awt_geom_Line2D(l: Line2D): void;
        /**
         * Returns an indicator of where the specified point {@code (px,py)} lies
         * with respect to the line segment from {@code (x1,y1)} to {@code (x2,y2)}.
         * The return value can be either 1, -1, or 0 and indicates in which
         * direction the specified line must pivot around its first end point,
         * {@code (x1,y1)}, in order to point at the specified point {@code (px,py)}
         * .
         * <p>
         * A return value of 1 indicates that the line segment must turn in the
         * direction that takes the positive X axis towards the negative Y axis. In
         * the default coordinate system used by Java 2D, this direction is
         * counterclockwise.
         * <p>
         * A return value of -1 indicates that the line segment must turn in the
         * direction that takes the positive X axis towards the positive Y axis. In
         * the default coordinate system, this direction is clockwise.
         * <p>
         * A return value of 0 indicates that the point lies exactly on the line
         * segment. Note that an indicator value of 0 is rare and not useful for
         * determining collinearity because of floating point rounding issues.
         * <p>
         * If the point is colinear with the line segment, but not between the end
         * points, then the value will be -1 if the point lies
         * "beyond {@code (x1,y1)}" or 1 if the point lies "beyond {@code (x2,y2)}".
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param px
         * the X coordinate of the specified point to be compared with
         * the specified line segment
         * @param py
         * the Y coordinate of the specified point to be compared with
         * the specified line segment
         * @return an integer that indicates the position of the third specified
         * coordinates with respect to the line segment formed by the first
         * two specified coordinates.
         * @since 1.2
         */
        static relativeCCW(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns an indicator of where the specified point {@code (px,py)} lies
         * with respect to this line segment. See the method comments of
         * {@link #relativeCCW(double, double, double, double, double, double)} to
         * interpret the return value.
         *
         * @param px
         * the X coordinate of the specified point to be compared with
         * this <code>Line2D</code>
         * @param py
         * the Y coordinate of the specified point to be compared with
         * this <code>Line2D</code>
         * @return an integer that indicates the position of the specified
         * coordinates with respect to this <code>Line2D</code>
         * @see #relativeCCW(double, double, double, double, double, double)
         * @since 1.2
         */
        relativeCCW(px?: any, py?: any): any;
        /**
         * Returns an indicator of where the specified <code>Point2D</code> lies
         * with respect to this line segment. See the method comments of
         * {@link #relativeCCW(double, double, double, double, double, double)} to
         * interpret the return value.
         *
         * @param p
         * the specified <code>Point2D</code> to be compared with this
         * <code>Line2D</code>
         * @return an integer that indicates the position of the specified
         * <code>Point2D</code> with respect to this <code>Line2D</code>
         * @see #relativeCCW(double, double, double, double, double, double)
         * @since 1.2
         */
        relativeCCW$java_awt_geom_Point2D(p: java.awt.geom.Point2D): number;
        /**
         * Tests if the line segment from {@code (x1,y1)} to {@code (x2,y2)}
         * intersects the line segment from {@code (x3,y3)} to {@code (x4,y4)}.
         *
         * @param x1
         * the X coordinate of the start point of the first specified
         * line segment
         * @param y1
         * the Y coordinate of the start point of the first specified
         * line segment
         * @param x2
         * the X coordinate of the end point of the first specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the first specified line
         * segment
         * @param x3
         * the X coordinate of the start point of the second specified
         * line segment
         * @param y3
         * the Y coordinate of the start point of the second specified
         * line segment
         * @param x4
         * the X coordinate of the end point of the second specified line
         * segment
         * @param y4
         * the Y coordinate of the end point of the second specified line
         * segment
         * @return <code>true</code> if the first specified line segment and the
         * second specified line segment intersect each other;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        static linesIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
        /**
         * Tests if the line segment from {@code (x1,y1)} to {@code (x2,y2)}
         * intersects this line segment.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @return {@code <true>} if this line segment and the specified line
         * segment intersect each other; <code>false</code> otherwise.
         * @since 1.2
         */
        intersectsLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Tests if the specified line segment intersects this line segment.
         *
         * @param l
         * the specified <code>Line2D</code>
         * @return <code>true</code> if this line segment and the specified line
         * segment intersect each other; <code>false</code> otherwise.
         * @since 1.2
         */
        intersectsLine$java_awt_geom_Line2D(l: Line2D): boolean;
        /**
         * Returns the square of the distance from a point to a line segment. The
         * distance measured is the distance between the specified point and the
         * closest point between the specified end points. If the specified point
         * intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param px
         * the X coordinate of the specified point being measured against
         * the specified line segment
         * @param py
         * the Y coordinate of the specified point being measured against
         * the specified line segment
         * @return a double value that is the square of the distance from the
         * specified point to the specified line segment.
         * @see #ptLineDistSq(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptSegDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the distance from a point to a line segment. The distance
         * measured is the distance between the specified point and the closest
         * point between the specified end points. If the specified point intersects
         * the line segment in between the end points, this method returns 0.0.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param px
         * the X coordinate of the specified point being measured against
         * the specified line segment
         * @param py
         * the Y coordinate of the specified point being measured against
         * the specified line segment
         * @return a double value that is the distance from the specified point to
         * the specified line segment.
         * @see #ptLineDist(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptSegDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the square of the distance from a point to this line segment. The
         * distance measured is the distance between the specified point and the
         * closest point between the current line's end points. If the specified
         * point intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param px
         * the X coordinate of the specified point being measured against
         * this line segment
         * @param py
         * the Y coordinate of the specified point being measured against
         * this line segment
         * @return a double value that is the square of the distance from the
         * specified point to the current line segment.
         * @see #ptLineDistSq(double, double)
         * @since 1.2
         */
        ptSegDistSq(px?: any, py?: any): any;
        /**
         * Returns the square of the distance from a <code>Point2D</code> to this
         * line segment. The distance measured is the distance between the specified
         * point and the closest point between the current line's end points. If the
         * specified point intersects the line segment in between the end points,
         * this method returns 0.0.
         *
         * @param pt
         * the specified <code>Point2D</code> being measured against this
         * line segment.
         * @return a double value that is the square of the distance from the
         * specified <code>Point2D</code> to the current line segment.
         * @see #ptLineDistSq(Point2D)
         * @since 1.2
         */
        ptSegDistSq$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        /**
         * Returns the distance from a point to this line segment. The distance
         * measured is the distance between the specified point and the closest
         * point between the current line's end points. If the specified point
         * intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param px
         * the X coordinate of the specified point being measured against
         * this line segment
         * @param py
         * the Y coordinate of the specified point being measured against
         * this line segment
         * @return a double value that is the distance from the specified point to
         * the current line segment.
         * @see #ptLineDist(double, double)
         * @since 1.2
         */
        ptSegDist(px?: any, py?: any): any;
        /**
         * Returns the distance from a <code>Point2D</code> to this line segment.
         * The distance measured is the distance between the specified point and the
         * closest point between the current line's end points. If the specified
         * point intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param pt
         * the specified <code>Point2D</code> being measured against this
         * line segment
         * @return a double value that is the distance from the specified
         * <code>Point2D</code> to the current line segment.
         * @see #ptLineDist(Point2D)
         * @since 1.2
         */
        ptSegDist$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        /**
         * Returns the square of the distance from a point to a line. The distance
         * measured is the distance between the specified point and the closest
         * point on the infinitely-extended line defined by the specified
         * coordinates. If the specified point intersects the line, this method
         * returns 0.0.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * @param y1
         * the Y coordinate of the start point of the specified line
         * @param x2
         * the X coordinate of the end point of the specified line
         * @param y2
         * the Y coordinate of the end point of the specified line
         * @param px
         * the X coordinate of the specified point being measured against
         * the specified line
         * @param py
         * the Y coordinate of the specified point being measured against
         * the specified line
         * @return a double value that is the square of the distance from the
         * specified point to the specified line.
         * @see #ptSegDistSq(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptLineDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the distance from a point to a line. The distance measured is the
         * distance between the specified point and the closest point on the
         * infinitely-extended line defined by the specified coordinates. If the
         * specified point intersects the line, this method returns 0.0.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * @param y1
         * the Y coordinate of the start point of the specified line
         * @param x2
         * the X coordinate of the end point of the specified line
         * @param y2
         * the Y coordinate of the end point of the specified line
         * @param px
         * the X coordinate of the specified point being measured against
         * the specified line
         * @param py
         * the Y coordinate of the specified point being measured against
         * the specified line
         * @return a double value that is the distance from the specified point to
         * the specified line.
         * @see #ptSegDist(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptLineDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the square of the distance from a point to this line. The
         * distance measured is the distance between the specified point and the
         * closest point on the infinitely-extended line defined by this
         * <code>Line2D</code>. If the specified point intersects the line, this
         * method returns 0.0.
         *
         * @param px
         * the X coordinate of the specified point being measured against
         * this line
         * @param py
         * the Y coordinate of the specified point being measured against
         * this line
         * @return a double value that is the square of the distance from a
         * specified point to the current line.
         * @see #ptSegDistSq(double, double)
         * @since 1.2
         */
        ptLineDistSq(px?: any, py?: any): any;
        /**
         * Returns the square of the distance from a specified <code>Point2D</code>
         * to this line. The distance measured is the distance between the specified
         * point and the closest point on the infinitely-extended line defined by
         * this <code>Line2D</code>. If the specified point intersects the line,
         * this method returns 0.0.
         *
         * @param pt
         * the specified <code>Point2D</code> being measured against this
         * line
         * @return a double value that is the square of the distance from a
         * specified <code>Point2D</code> to the current line.
         * @see #ptSegDistSq(Point2D)
         * @since 1.2
         */
        ptLineDistSq$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        /**
         * Returns the distance from a point to this line. The distance measured is
         * the distance between the specified point and the closest point on the
         * infinitely-extended line defined by this <code>Line2D</code>. If the
         * specified point intersects the line, this method returns 0.0.
         *
         * @param px
         * the X coordinate of the specified point being measured against
         * this line
         * @param py
         * the Y coordinate of the specified point being measured against
         * this line
         * @return a double value that is the distance from a specified point to the
         * current line.
         * @see #ptSegDist(double, double)
         * @since 1.2
         */
        ptLineDist(px?: any, py?: any): any;
        /**
         * Returns the distance from a <code>Point2D</code> to this line. The
         * distance measured is the distance between the specified point and the
         * closest point on the infinitely-extended line defined by this
         * <code>Line2D</code>. If the specified point intersects the line, this
         * method returns 0.0.
         *
         * @param pt
         * the specified <code>Point2D</code> being measured
         * @return a double value that is the distance from a specified
         * <code>Point2D</code> to the current line.
         * @see #ptSegDist(Point2D)
         * @since 1.2
         */
        ptLineDist$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        /**
         * Tests if a specified coordinate is inside the boundary of this
         * <code>Line2D</code>. This method is required to implement the
         * {@link Shape} interface, but in the case of <code>Line2D</code> objects
         * it always returns <code>false</code> since a line contains no area.
         *
         * @param x
         * the X coordinate of the specified point to be tested
         * @param y
         * the Y coordinate of the specified point to be tested
         * @return <code>false</code> because a <code>Line2D</code> contains no
         * area.
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * Tests if a given <code>Point2D</code> is inside the boundary of this
         * <code>Line2D</code>. This method is required to implement the
         * {@link Shape} interface, but in the case of <code>Line2D</code> objects
         * it always returns <code>false</code> since a line contains no area.
         *
         * @param p
         * the specified <code>Point2D</code> to be tested
         * @return <code>false</code> because a <code>Line2D</code> contains no
         * area.
         * @since 1.2
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * Tests if the interior of this <code>Line2D</code> entirely contains the
         * specified set of rectangular coordinates. This method is required to
         * implement the <code>Shape</code> interface, but in the case of
         * <code>Line2D</code> objects it always returns false since a line contains
         * no area.
         *
         * @param x
         * the X coordinate of the upper-left corner of the specified
         * rectangular area
         * @param y
         * the Y coordinate of the upper-left corner of the specified
         * rectangular area
         * @param w
         * the width of the specified rectangular area
         * @param h
         * the height of the specified rectangular area
         * @return <code>false</code> because a <code>Line2D</code> contains no
         * area.
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Tests if the interior of this <code>Line2D</code> entirely contains the
         * specified <code>Rectangle2D</code>. This method is required to implement
         * the <code>Shape</code> interface, but in the case of <code>Line2D</code>
         * objects it always returns <code>false</code> since a line contains no
         * area.
         *
         * @param r
         * the specified <code>Rectangle2D</code> to be tested
         * @return <code>false</code> because a <code>Line2D</code> contains no
         * area.
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an iteration object that defines the boundary of this
         * <code>Line2D</code>. The iterator for this class is not multi-threaded
         * safe, which means that this <code>Line2D</code> class does not guarantee
         * that modifications to the geometry of this <code>Line2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param at
         * the specified {@link AffineTransform}
         * @return a {@link PathIterator} that defines the boundary of this
         * <code>Line2D</code>.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of this flattened
         * <code>Line2D</code>. The iterator for this class is not multi-threaded
         * safe, which means that this <code>Line2D</code> class does not guarantee
         * that modifications to the geometry of this <code>Line2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param at
         * the specified <code>AffineTransform</code>
         * @param flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points. Since a
         * <code>Line2D</code> object is always flat, this parameter is
         * ignored.
         * @return a <code>PathIterator</code> that defines the boundary of the
         * flattened <code>Line2D</code>
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
    namespace Line2D {
        /**
         * A line segment specified with float coordinates.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.Line2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a Line from the specified coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points of this <code>Line2D</code> to
             * the specified float coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * A line segment specified with double coordinates.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.Line2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a <code>Line2D</code> from the specified
             * coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * Sets the location of the end points of this <code>Line2D</code> to
             * the specified float coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a line segment through
     * the PathIterator interface.
     *
     * @author Jim Graham
     */
    class LineIterator implements java.awt.geom.PathIterator {
        line: java.awt.geom.Line2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(l: java.awt.geom.Line2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        next(doNext?: any): any;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next$(): void;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>NoninvertibleTransformException</code> class represents an
     * exception that is thrown if an operation is performed requiring the inverse
     * of an {@link AffineTransform} object but the <code>AffineTransform</code> is
     * in a non-invertible state.
     */
    class NoninvertibleTransformException extends java.lang.Exception {
        /**
         * Constructs an instance of <code>NoninvertibleTransformException</code>
         * with the specified detail message.
         *
         * @param s
         * the detail message
         * @since 1.2
         */
        constructor(s: string);
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>PathIterator</code> interface provides the mechanism for objects
     * that implement the {@link java.awt.Shape Shape} interface to return the
     * geometry of their boundary by allowing a caller to retrieve the path of that
     * boundary a segment at a time. This interface allows these objects to retrieve
     * the path of their boundary a segment at a time by using 1st through 3rd order
     * B&eacute;zier curves, which are lines and quadratic or cubic B&eacute;zier
     * splines.
     * <p>
     * Multiple subpaths can be expressed by using a "MOVETO" segment to create a
     * discontinuity in the geometry to move from the end of one subpath to the
     * beginning of the next.
     * <p>
     * Each subpath can be closed manually by ending the last segment in the subpath
     * on the same coordinate as the beginning "MOVETO" segment for that subpath or
     * by using a "CLOSE" segment to append a line segment from the last point back
     * to the first. Be aware that manually closing an outline as opposed to using a
     * "CLOSE" segment to close the path might result in different line style
     * decorations being used at the end points of the subpath. For example, the
     * {@link java.awt.BasicStroke BasicStroke} object uses a line "JOIN" decoration
     * to connect the first and last points if a "CLOSE" segment is encountered,
     * whereas simply ending the path on the same coordinate as the beginning
     * coordinate results in line "CAP" decorations being used at the ends.
     *
     * @see java.awt.Shape
     * @see java.awt.BasicStroke
     *
     * @author Jim Graham
     */
    interface PathIterator {
        /**
         * Returns the winding rule for determining the interior of the path.
         *
         * @return the winding rule.
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if the iteration is complete.
         *
         * @return <code>true</code> if all the segments have been read;
         * <code>false</code> otherwise.
         */
        isDone(): boolean;
        next(doNext?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path-segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and can be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types returns one point, SEG_QUADTO returns two
         * points, SEG_CUBICTO returns 3 points and SEG_CLOSE does not return any
         * points.
         *
         * @param coords
         * an array that holds the data returned from this method
         * @return the path-segment type of the current path segment.
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
    }
    namespace PathIterator {
        /**
         * The winding rule constant for specifying an even-odd rule for determining
         * the interior of a path. The even-odd rule specifies that a point lies
         * inside the path if a ray drawn in any direction from that point to
         * infinity is crossed by path segments an odd number of times.
         */
        var WIND_EVEN_ODD: number;
        /**
         * The winding rule constant for specifying a non-zero rule for determining
         * the interior of a path. The non-zero rule specifies that a point lies
         * inside the path if a ray drawn in any direction from that point to
         * infinity is crossed by path segments a different number of times in the
         * counter-clockwise direction than the clockwise direction.
         */
        var WIND_NON_ZERO: number;
        /**
         * The segment type constant for a point that specifies the starting
         * location for a new subpath.
         */
        var SEG_MOVETO: number;
        /**
         * The segment type constant for a point that specifies the end point of a
         * line to be drawn from the most recently specified point.
         */
        var SEG_LINETO: number;
        /**
         * The segment type constant for the pair of points that specify a quadratic
         * parametric curve to be drawn from the most recently specified point. The
         * curve is interpolated by solving the parametric control equation in the
         * range <code>(t=[0..1])</code> using the most recently specified (current)
         * point (CP), the first control point (P1), and the final interpolated
         * control point (P2). The parametric control equation for this curve is:
         *
         * <pre>
         * P(t) = B(2,0)*CP + B(2,1)*P1 + B(2,2)*P2
         * 0 &lt;= t &lt;= 1
         *
         * B(n,m) = mth coefficient of nth degree Bernstein polynomial
         * = C(n,m) * t^(m) * (1 - t)^(n-m)
         * C(n,m) = Combinations of n things, taken m at a time
         * = n! / (m! * (n-m)!)
         * </pre>
         */
        var SEG_QUADTO: number;
        /**
         * The segment type constant for the set of 3 points that specify a cubic
         * parametric curve to be drawn from the most recently specified point. The
         * curve is interpolated by solving the parametric control equation in the
         * range <code>(t=[0..1])</code> using the most recently specified (current)
         * point (CP), the first control point (P1), the second control point (P2),
         * and the final interpolated control point (P3). The parametric control
         * equation for this curve is:
         *
         * <pre>
         * P(t) = B(3,0)*CP + B(3,1)*P1 + B(3,2)*P2 + B(3,3)*P3
         * 0 &lt;= t &lt;= 1
         *
         * B(n,m) = mth coefficient of nth degree Bernstein polynomial
         * = C(n,m) * t^(m) * (1 - t)^(n-m)
         * C(n,m) = Combinations of n things, taken m at a time
         * = n! / (m! * (n-m)!)
         * </pre>
         *
         * This form of curve is commonly known as a B&eacute;zier curve.
         */
        var SEG_CUBICTO: number;
        /**
         * The segment type constant that specifies that the preceding subpath
         * should be closed by appending a line segment back to the point
         * corresponding to the most recent SEG_MOVETO.
         */
        var SEG_CLOSE: number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Point2D</code> class defines a point representing a location in
     * {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * coordinate. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class Point2D implements java.lang.Cloneable {
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.Point2D.Float
         * @see java.awt.geom.Point2D.Double
         * @see java.awt.Point
         * @since 1.2
         */
        constructor();
        /**
         * Returns the X coordinate of this <code>Point2D</code> in
         * <code>double</code> precision.
         *
         * @return the X coordinate of this <code>Point2D</code>.
         * @since 1.2
         */
        abstract getX(): number;
        /**
         * Returns the Y coordinate of this <code>Point2D</code> in
         * <code>double</code> precision.
         *
         * @return the Y coordinate of this <code>Point2D</code>.
         * @since 1.2
         */
        abstract getY(): number;
        setLocation(x?: any, y?: any): any;
        /**
         * Sets the location of this <code>Point2D</code> to the specified
         * <code>double</code> coordinates.
         *
         * @param x
         * the new X coordinate of this {@code Point2D}
         * @param y
         * the new Y coordinate of this {@code Point2D}
         * @since 1.2
         */
        setLocation$double$double(x: number, y: number): void;
        /**
         * Sets the location of this <code>Point2D</code> to the same coordinates as
         * the specified <code>Point2D</code> object.
         *
         * @param p
         * the specified <code>Point2D</code> to which to set this
         * <code>Point2D</code>
         * @since 1.2
         */
        setLocation$java_awt_geom_Point2D(p: Point2D): void;
        /**
         * Returns the square of the distance between two points.
         *
         * @param x1
         * the X coordinate of the first specified point
         * @param y1
         * the Y coordinate of the first specified point
         * @param x2
         * the X coordinate of the second specified point
         * @param y2
         * the Y coordinate of the second specified point
         * @return the square of the distance between the two sets of specified
         * coordinates.
         * @since 1.2
         */
        static distanceSq(x1: number, y1: number, x2: number, y2: number): number;
        /**
         * Returns the distance between two points.
         *
         * @param x1
         * the X coordinate of the first specified point
         * @param y1
         * the Y coordinate of the first specified point
         * @param x2
         * the X coordinate of the second specified point
         * @param y2
         * the Y coordinate of the second specified point
         * @return the distance between the two sets of specified coordinates.
         * @since 1.2
         */
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        /**
         * Returns the square of the distance from this <code>Point2D</code> to a
         * specified point.
         *
         * @param px
         * the X coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @param py
         * the Y coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @return the square of the distance between this <code>Point2D</code> and
         * the specified point.
         * @since 1.2
         */
        distanceSq(px?: any, py?: any): any;
        /**
         * Returns the square of the distance from this <code>Point2D</code> to a
         * specified <code>Point2D</code>.
         *
         * @param pt
         * the specified point to be measured against this
         * <code>Point2D</code>
         * @return the square of the distance between this <code>Point2D</code> to a
         * specified <code>Point2D</code>.
         * @since 1.2
         */
        distanceSq$java_awt_geom_Point2D(pt: Point2D): number;
        /**
         * Returns the distance from this <code>Point2D</code> to a specified point.
         *
         * @param px
         * the X coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @param py
         * the Y coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @return the distance between this <code>Point2D</code> and a specified
         * point.
         * @since 1.2
         */
        distance(px?: any, py?: any): any;
        /**
         * Returns the distance from this <code>Point2D</code> to a specified
         * <code>Point2D</code>.
         *
         * @param pt
         * the specified point to be measured against this
         * <code>Point2D</code>
         * @return the distance between this <code>Point2D</code> and the specified
         * <code>Point2D</code>.
         * @since 1.2
         */
        distance$java_awt_geom_Point2D(pt: Point2D): number;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        /**
         * Returns the hashcode for this <code>Point2D</code>.
         *
         * @return a hash code for this <code>Point2D</code>.
         */
        hashCode(): number;
        /**
         * Determines whether or not two points are equal. Two instances of
         * <code>Point2D</code> are equal if the values of their <code>x</code> and
         * <code>y</code> member fields, representing their position in the
         * coordinate space, are the same.
         *
         * @param obj
         * an object to be compared with this <code>Point2D</code>
         * @return <code>true</code> if the object to be compared is an instance of
         * <code>Point2D</code> and has the same values; <code>false</code>
         * otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
    }
    namespace Point2D {
        /**
         * The <code>Float</code> class defines a point specified in float
         * precision.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.Point2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * Constructs and initializes a <code>Point2D</code> with the specified
             * coordinates.
             *
             * @param x
             * the X coordinate of the newly constructed
             * <code>Point2D</code>
             * @param y
             * the Y coordinate of the newly constructed
             * <code>Point2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setLocation$double$double(x: number, y: number): void;
            /**
             * Sets the location of this <code>Point2D</code> to the specified
             * <code>float</code> coordinates.
             *
             * @param x
             * the new X coordinate of this {@code Point2D}
             * @param y
             * the new Y coordinate of this {@code Point2D}
             * @since 1.2
             */
            setLocation(x?: any, y?: any): any;
            /**
             * Returns a <code>String</code> that represents the value of this
             * <code>Point2D</code>.
             *
             * @return a string representation of this <code>Point2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
        /**
         * The <code>Double</code> class defines a point specified in
         * <code>double</code> precision.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.Point2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * Constructs and initializes a <code>Point2D</code> with the specified
             * coordinates.
             *
             * @param x
             * the X coordinate of the newly constructed
             * <code>Point2D</code>
             * @param y
             * the Y coordinate of the newly constructed
             * <code>Point2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * Sets the location of this <code>Point2D</code> to the specified
             * <code>float</code> coordinates.
             *
             * @param x
             * the new X coordinate of this {@code Point2D}
             * @param y
             * the new Y coordinate of this {@code Point2D}
             * @since 1.2
             */
            setLocation(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setLocation$double$double(x: number, y: number): void;
            /**
             * Returns a <code>String</code> that represents the value of this
             * <code>Point2D</code>.
             *
             * @return a string representation of this <code>Point2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>QuadCurve2D</code> class defines a quadratic parametric curve
     * segment in {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * quadratic curve segment. The actual storage representation of the coordinates
     * is left to the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class QuadCurve2D implements java.awt.Shape, java.lang.Cloneable {
        abstract getBounds2D(): any;
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.QuadCurve2D.Float
         * @see java.awt.geom.QuadCurve2D.Double
         * @since 1.2
         */
        constructor();
        /**
         * Returns the X coordinate of the start point in <code>double</code> in
         * precision.
         *
         * @return the X coordinate of the start point.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in <code>double</code>
         * precision.
         *
         * @return the Y coordinate of the start point.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start point.
         *
         * @return a <code>Point2D</code> that is the start point of this
         * <code>QuadCurve2D</code>.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the control point in <code>double</code>
         * precision.
         *
         * @return X coordinate the control point
         * @since 1.2
         */
        abstract getCtrlX(): number;
        /**
         * Returns the Y coordinate of the control point in <code>double</code>
         * precision.
         *
         * @return the Y coordinate of the control point.
         * @since 1.2
         */
        abstract getCtrlY(): number;
        /**
         * Returns the control point.
         *
         * @return a <code>Point2D</code> that is the control point of this
         * <code>Point2D</code>.
         * @since 1.2
         */
        abstract getCtrlPt(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in <code>double</code>
         * precision.
         *
         * @return the x coordinate of the end point.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in <code>double</code>
         * precision.
         *
         * @return the Y coordinate of the end point.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end point.
         *
         * @return a <code>Point</code> object that is the end point of this
         * <code>Point2D</code>.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        /**
         * Sets the location of the end points and control point of this curve
         * to the specified {@code float} coordinates.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param ctrlx
         * the X coordinate of the control point
         * @param ctrly
         * the Y coordinate of the control point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
        /**
         * Sets the location of the end points and control point of this curve to
         * the specified <code>double</code> coordinates.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param ctrlx
         * the X coordinate of the control point
         * @param ctrly
         * the Y coordinate of the control point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points and control points of this
         * <code>QuadCurve2D</code> to the <code>double</code> coordinates at the
         * specified offset in the specified array.
         *
         * @param coords
         * the array containing coordinate values
         * @param offset
         * the index into the array from which to start getting the
         * coordinate values and assigning them to this
         * <code>QuadCurve2D</code>
         * @since 1.2
         */
        setCurve$double_A$int(coords: number[], offset: number): void;
        /**
         * Sets the location of the end points and control point of this
         * <code>QuadCurve2D</code> to the specified <code>Point2D</code>
         * coordinates.
         *
         * @param p1
         * the start point
         * @param cp
         * the control point
         * @param p2
         * the end point
         * @since 1.2
         */
        setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, cp: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the location of the end points and control points of this
         * <code>QuadCurve2D</code> to the coordinates of the <code>Point2D</code>
         * objects at the specified offset in the specified array.
         *
         * @param pts
         * an array containing <code>Point2D</code> that define
         * coordinate values
         * @param offset
         * the index into <code>pts</code> from which to start getting
         * the coordinate values and assigning them to this
         * <code>QuadCurve2D</code>
         * @since 1.2
         */
        setCurve$java_awt_geom_Point2D_A$int(pts: java.awt.geom.Point2D[], offset: number): void;
        /**
         * Sets the location of the end points and control point of this
         * <code>QuadCurve2D</code> to the same as those in the specified
         * <code>QuadCurve2D</code>.
         *
         * @param c
         * the specified <code>QuadCurve2D</code>
         * @since 1.2
         */
        setCurve$java_awt_geom_QuadCurve2D(c: QuadCurve2D): void;
        /**
         * Returns the square of the flatness, or maximum distance of a control
         * point from the line connecting the end points, of the quadratic curve
         * specified by the indicated control points.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param ctrlx
         * the X coordinate of the control point
         * @param ctrly
         * the Y coordinate of the control point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @return the square of the flatness of the quadratic curve defined by the
         * specified coordinates.
         * @since 1.2
         */
        static getFlatnessSq(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
        /**
         * Returns the flatness, or maximum distance of a control point from the
         * line connecting the end points, of the quadratic curve specified by the
         * indicated control points.
         *
         * @param x1
         * the X coordinate of the start point
         * @param y1
         * the Y coordinate of the start point
         * @param ctrlx
         * the X coordinate of the control point
         * @param ctrly
         * the Y coordinate of the control point
         * @param x2
         * the X coordinate of the end point
         * @param y2
         * the Y coordinate of the end point
         * @return the flatness of the quadratic curve defined by the specified
         * coordinates.
         * @since 1.2
         */
        static getFlatness(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
        /**
         * Returns the square of the flatness, or maximum distance of a control
         * point from the line connecting the end points, of the quadratic curve
         * specified by the control points stored in the indicated array at the
         * indicated index.
         *
         * @param coords
         * an array containing coordinate values
         * @param offset
         * the index into <code>coords</code> from which to to start
         * getting the values from the array
         * @return the flatness of the quadratic curve that is defined by the values
         * in the specified array at the specified index.
         * @since 1.2
         */
        static getFlatnessSq$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the flatness, or maximum distance of a control point from the
         * line connecting the end points, of the quadratic curve specified by the
         * control points stored in the indicated array at the indicated index.
         *
         * @param coords
         * an array containing coordinate values
         * @param offset
         * the index into <code>coords</code> from which to start getting
         * the coordinate values
         * @return the flatness of a quadratic curve defined by the specified array
         * at the specified offset.
         * @since 1.2
         */
        static getFlatness$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the square of the flatness, or maximum distance of a control
         * point from the line connecting the end points, of this
         * <code>QuadCurve2D</code>.
         *
         * @return the square of the flatness of this <code>QuadCurve2D</code>.
         * @since 1.2
         */
        getFlatnessSq(): number;
        /**
         * Returns the flatness, or maximum distance of a control point from the
         * line connecting the end points, of this <code>QuadCurve2D</code>.
         *
         * @return the flatness of this <code>QuadCurve2D</code>.
         * @since 1.2
         */
        getFlatness(): number;
        /**
         * Subdivides this <code>QuadCurve2D</code> and stores the resulting two
         * subdivided curves into the <code>left</code> and <code>right</code> curve
         * parameters. Either or both of the <code>left</code> and
         * <code>right</code> objects can be the same as this
         * <code>QuadCurve2D</code> or <code>null</code>.
         *
         * @param left
         * the <code>QuadCurve2D</code> object for storing the left or
         * first half of the subdivided curve
         * @param right
         * the <code>QuadCurve2D</code> object for storing the right or
         * second half of the subdivided curve
         * @since 1.2
         */
        subdivide(left: QuadCurve2D, right: QuadCurve2D): void;
        /**
         * Subdivides the quadratic curve specified by the <code>src</code>
         * parameter and stores the resulting two subdivided curves into the
         * <code>left</code> and <code>right</code> curve parameters. Either or both
         * of the <code>left</code> and <code>right</code> objects can be the same
         * as the <code>src</code> object or <code>null</code>.
         *
         * @param src
         * the quadratic curve to be subdivided
         * @param left
         * the <code>QuadCurve2D</code> object for storing the left or
         * first half of the subdivided curve
         * @param right
         * the <code>QuadCurve2D</code> object for storing the right or
         * second half of the subdivided curve
         * @since 1.2
         */
        static subdivide$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D(src: QuadCurve2D, left: QuadCurve2D, right: QuadCurve2D): void;
        /**
         * Subdivides the quadratic curve specified by the coordinates stored in the
         * <code>src</code> array at indices <code>srcoff</code> through
         * <code>srcoff</code>&nbsp;+&nbsp;5 and stores the resulting two subdivided
         * curves into the two result arrays at the corresponding indices. Either or
         * both of the <code>left</code> and <code>right</code> arrays can be
         * <code>null</code> or a reference to the same array and offset as the
         * <code>src</code> array. Note that the last point in the first subdivided
         * curve is the same as the first point in the second subdivided curve.
         * Thus, it is possible to pass the same array for <code>left</code> and
         * <code>right</code> and to use offsets such that <code>rightoff</code>
         * equals <code>leftoff</code> + 4 in order to avoid allocating extra
         * storage for this common point.
         *
         * @param src
         * the array holding the coordinates for the source curve
         * @param srcoff
         * the offset into the array of the beginning of the the 6 source
         * coordinates
         * @param left
         * the array for storing the coordinates for the first half of
         * the subdivided curve
         * @param leftoff
         * the offset into the array of the beginning of the the 6 left
         * coordinates
         * @param right
         * the array for storing the coordinates for the second half of
         * the subdivided curve
         * @param rightoff
         * the offset into the array of the beginning of the the 6 right
         * coordinates
         * @since 1.2
         */
        static subdivide(src?: any, srcoff?: any, left?: any, leftoff?: any, right?: any, rightoff?: any): any;
        /**
         * Solves the quadratic whose coefficients are in the <code>eqn</code> array
         * and places the non-complex roots back into the same array, returning the
         * number of roots. The quadratic solved is represented by the equation:
         *
         * <pre>
         * eqn = {C, B, A};
         * ax^2 + bx + c = 0
         * </pre>
         *
         * A return value of <code>-1</code> is used to distinguish a constant
         * equation, which might be always 0 or never 0, from an equation that has
         * no zeroes.
         *
         * @param eqn
         * the array that contains the quadratic coefficients
         * @return the number of roots, or <code>-1</code> if the equation is a
         * constant
         * @since 1.2
         */
        static solveQuadratic$double_A(eqn: number[]): number;
        /**
         * Solves the quadratic whose coefficients are in the <code>eqn</code> array
         * and places the non-complex roots into the <code>res</code> array,
         * returning the number of roots. The quadratic solved is represented by the
         * equation:
         *
         * <pre>
         * eqn = {C, B, A};
         * ax^2 + bx + c = 0
         * </pre>
         *
         * A return value of <code>-1</code> is used to distinguish a constant
         * equation, which might be always 0 or never 0, from an equation that has
         * no zeroes.
         *
         * @param eqn
         * the specified array of coefficients to use to solve the
         * quadratic equation
         * @param res
         * the array that contains the non-complex roots resulting from
         * the solution of the quadratic equation
         * @return the number of roots, or <code>-1</code> if the equation is a
         * constant.
         * @since 1.3
         */
        static solveQuadratic(eqn?: any, res?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * Fill an array with the coefficients of the parametric equation in t,
         * ready for solving against val with solveQuadratic. We currently have: val
         * = Py(t) = C1*(1-t)^2 + 2*CP*t*(1-t) + C2*t^2 = C1 - 2*C1*t + C1*t^2 +
         * 2*CP*t - 2*CP*t^2 + C2*t^2 = C1 + (2*CP - 2*C1)*t + (C1 - 2*CP + C2)*t^2
         * 0 = (C1 - val) + (2*CP - 2*C1)*t + (C1 - 2*CP + C2)*t^2 0 = C + Bt + At^2
         * C = C1 - val B = 2*CP - 2*C1 A = C1 - 2*CP + C2
         */
        static fillEqn(eqn: number[], val: number, c1: number, cp: number, c2: number): void;
        /**
         * Evaluate the t values in the first num slots of the vals[] array and
         * place the evaluated values back into the same array. Only evaluate t
         * values that are within the range &lt;0, 1&gt;, including the 0 and 1 ends
         * of the range iff the include0 or include1 booleans are true. If an
         * "inflection" equation is handed in, then any points which represent a
         * point of inflection for that quadratic equation are also ignored.
         */
        static evalQuadratic(vals: number[], num: number, include0: boolean, include1: boolean, inflect: number[], c1: number, ctrl: number, c2: number): number;
        static BELOW: number;
        static LOWEDGE: number;
        static INSIDE: number;
        static HIGHEDGE: number;
        static ABOVE: number;
        /**
         * Determine where coord lies with respect to the range from low to high. It
         * is assumed that low &lt;= high. The return value is one of the 5 values
         * BELOW, LOWEDGE, INSIDE, HIGHEDGE, or ABOVE.
         */
        static getTag(coord: number, low: number, high: number): number;
        /**
         * Determine if the pttag represents a coordinate that is already in its
         * test range, or is on the border with either of the two opttags
         * representing another coordinate that is "towards the inside" of that test
         * range. In other words, are either of the two "opt" points
         * "drawing the pt inward"?
         */
        static inwards(pttag: number, opt1tag: number, opt2tag: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an iteration object that defines the boundary of the shape of
         * this <code>QuadCurve2D</code>. The iterator for this class is not
         * multi-threaded safe, which means that this <code>QuadCurve2D</code> class
         * does not guarantee that modifications to the geometry of this
         * <code>QuadCurve2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param at
         * an optional {@link AffineTransform} to apply to the shape
         * boundary
         * @return a {@link PathIterator} object that defines the boundary of the
         * shape.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of the flattened
         * shape of this <code>QuadCurve2D</code>. The iterator for this class is
         * not multi-threaded safe, which means that this <code>QuadCurve2D</code>
         * class does not guarantee that modifications to the geometry of this
         * <code>QuadCurve2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to apply to the
         * boundary of the shape
         * @param flatness
         * the maximum distance that the control points for a subdivided
         * curve can be with respect to a line connecting the end points
         * of this curve before this curve is replaced by a straight line
         * connecting the end points.
         * @return a <code>PathIterator</code> object that defines the flattened
         * boundary of the shape.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
    namespace QuadCurve2D {
        /**
         * A quadratic parametric curve segment specified with {@code float}
         * coordinates.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx: number;
            /**
             * The Y coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly: number;
            /**
             * The X coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a <code>QuadCurve2D</code> from the
             * specified {@code float} coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param ctrlx
             * the X coordinate of the control point
             * @param ctrly
             * the Y coordinate of the control point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlPt(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points and control point of this curve
             * to the specified {@code float} coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param ctrlx
             * the X coordinate of the control point
             * @param ctrly
             * the Y coordinate of the control point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * A quadratic parametric curve segment specified with {@code double}
         * coordinates.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx: number;
            /**
             * The Y coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly: number;
            /**
             * The X coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            /**
             * Constructs and initializes a <code>QuadCurve2D</code> from the
             * specified {@code double} coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param ctrlx
             * the X coordinate of the control point
             * @param ctrly
             * the Y coordinate of the control point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            constructor(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getCtrlPt(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getP2(): java.awt.geom.Point2D;
            /**
             * Sets the location of the end points and control point of this curve
             * to the specified {@code float} coordinates.
             *
             * @param x1
             * the X coordinate of the start point
             * @param y1
             * the Y coordinate of the start point
             * @param ctrlx
             * the X coordinate of the control point
             * @param ctrly
             * the Y coordinate of the control point
             * @param x2
             * the X coordinate of the end point
             * @param y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a quadratic curve
     * segment through the PathIterator interface.
     *
     * @author Jim Graham
     */
    class QuadIterator implements java.awt.geom.PathIterator {
        quad: java.awt.geom.QuadCurve2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(q: java.awt.geom.QuadCurve2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        next(doNext?: any): any;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next$(): void;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * <code>RectangularShape</code> is the base class for a number of {@link Shape}
     * objects whose geometry is defined by a rectangular frame. This class does not
     * directly specify any specific geometry by itself, but merely provides
     * manipulation methods inherited by a whole category of <code>Shape</code>
     * objects. The manipulation methods provided by this class can be used to query
     * and modify the rectangular frame, which provides a reference for the
     * subclasses to define their geometry.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class RectangularShape implements java.awt.Shape, java.lang.Cloneable {
        abstract getBounds2D(): any;
        abstract intersects(x: any, y: any, w: any, h: any): any;
        /**
         * This is an abstract class that cannot be instantiated directly.
         *
         * @see Arc2D
         * @see Ellipse2D
         * @see Rectangle2D
         * @see RoundRectangle2D
         * @since 1.2
         */
        constructor();
        /**
         * Returns the X coordinate of the upper-left corner of the framing
         * rectangle in <code>double</code> precision.
         *
         * @return the X coordinate of the upper-left corner of the framing
         * rectangle.
         * @since 1.2
         */
        abstract getX(): number;
        /**
         * Returns the Y coordinate of the upper-left corner of the framing
         * rectangle in <code>double</code> precision.
         *
         * @return the Y coordinate of the upper-left corner of the framing
         * rectangle.
         * @since 1.2
         */
        abstract getY(): number;
        /**
         * Returns the width of the framing rectangle in <code>double</code>
         * precision.
         *
         * @return the width of the framing rectangle.
         * @since 1.2
         */
        abstract getWidth(): number;
        /**
         * Returns the height of the framing rectangle in <code>double</code>
         * precision.
         *
         * @return the height of the framing rectangle.
         * @since 1.2
         */
        abstract getHeight(): number;
        /**
         * Returns the smallest X coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the smallest X coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMinX(): number;
        /**
         * Returns the smallest Y coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the smallest Y coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMinY(): number;
        /**
         * Returns the largest X coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the largest X coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMaxX(): number;
        /**
         * Returns the largest Y coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the largest Y coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMaxY(): number;
        /**
         * Returns the X coordinate of the center of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the X coordinate of the center of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getCenterX(): number;
        /**
         * Returns the Y coordinate of the center of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return the Y coordinate of the center of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getCenterY(): number;
        /**
         * Returns the framing {@link Rectangle2D} that defines the overall shape of
         * this object.
         *
         * @return a <code>Rectangle2D</code>, specified in <code>double</code>
         * coordinates.
         * @see #setFrame(double, double, double, double)
         * @see #setFrame(Point2D, Dimension2D)
         * @see #setFrame(Rectangle2D)
         * @since 1.2
         */
        getFrame(): java.awt.geom.Rectangle2D;
        /**
         * Determines whether the <code>RectangularShape</code> is empty. When the
         * <code>RectangularShape</code> is empty, it encloses no area.
         *
         * @return <code>true</code> if the <code>RectangularShape</code> is empty;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        abstract isEmpty(): boolean;
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Sets the location and size of the framing rectangle of this
         * <code>Shape</code> to the specified rectangular values.
         *
         * @param x
         * the X coordinate of the upper-left corner of the specified
         * rectangular shape
         * @param y
         * the Y coordinate of the upper-left corner of the specified
         * rectangular shape
         * @param w
         * the width of the specified rectangular shape
         * @param h
         * the height of the specified rectangular shape
         * @see #getFrame
         * @since 1.2
         */
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * Sets the location and size of the framing rectangle of this
         * <code>Shape</code> to the specified {@link Point2D} and
         * {@link Dimension2D}, respectively. The framing rectangle is used by the
         * subclasses of <code>RectangularShape</code> to define their geometry.
         *
         * @param loc
         * the specified <code>Point2D</code>
         * @param size
         * the specified <code>Dimension2D</code>
         * @see #getFrame
         * @since 1.2
         */
        setFrame$java_awt_geom_Point2D$java_awt_geom_Dimension2D(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D): void;
        /**
         * Sets the framing rectangle of this <code>Shape</code> to be the specified
         * <code>Rectangle2D</code>. The framing rectangle is used by the subclasses
         * of <code>RectangularShape</code> to define their geometry.
         *
         * @param r
         * the specified <code>Rectangle2D</code>
         * @see #getFrame
         * @since 1.2
         */
        setFrame$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
        /**
         * Sets the diagonal of the framing rectangle of this <code>Shape</code>
         * based on the two specified coordinates. The framing rectangle is used by
         * the subclasses of <code>RectangularShape</code> to define their geometry.
         *
         * @param x1
         * the X coordinate of the start point of the specified diagonal
         * @param y1
         * the Y coordinate of the start point of the specified diagonal
         * @param x2
         * the X coordinate of the end point of the specified diagonal
         * @param y2
         * the Y coordinate of the end point of the specified diagonal
         * @since 1.2
         */
        setFrameFromDiagonal(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Sets the diagonal of the framing rectangle of this <code>Shape</code>
         * based on two specified <code>Point2D</code> objects. The framing
         * rectangle is used by the subclasses of <code>RectangularShape</code> to
         * define their geometry.
         *
         * @param p1
         * the start <code>Point2D</code> of the specified diagonal
         * @param p2
         * the end <code>Point2D</code> of the specified diagonal
         * @since 1.2
         */
        setFrameFromDiagonal$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the framing rectangle of this <code>Shape</code> based on the
         * specified center point coordinates and corner point coordinates. The
         * framing rectangle is used by the subclasses of
         * <code>RectangularShape</code> to define their geometry.
         *
         * @param centerX
         * the X coordinate of the specified center point
         * @param centerY
         * the Y coordinate of the specified center point
         * @param cornerX
         * the X coordinate of the specified corner point
         * @param cornerY
         * the Y coordinate of the specified corner point
         * @since 1.2
         */
        setFrameFromCenter(centerX?: any, centerY?: any, cornerX?: any, cornerY?: any): any;
        /**
         * Sets the framing rectangle of this <code>Shape</code> based on a
         * specified center <code>Point2D</code> and corner <code>Point2D</code>.
         * The framing rectangle is used by the subclasses of
         * <code>RectangularShape</code> to define their geometry.
         *
         * @param center
         * the specified center <code>Point2D</code>
         * @param corner
         * the specified corner <code>Point2D</code>
         * @since 1.2
         */
        setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D(center: java.awt.geom.Point2D, corner: java.awt.geom.Point2D): void;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * object's boundary and provides access to a flattened view of the outline
         * of the <code>Shape</code> object's geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will be returned
         * by the iterator.
         * <p>
         * The amount of subdivision of the curved segments is controlled by the
         * <code>flatness</code> parameter, which specifies the maximum distance
         * that any point on the unflattened transformed curve can deviate from the
         * returned flattened path segments. An optional {@link AffineTransform} can
         * be specified so that the coordinates returned in the iteration are
         * transformed accordingly.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired.
         * @param flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve
         * @return a <code>PathIterator</code> object that provides access to the
         * <code>Shape</code> object's flattened geometry.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a rectangle through the
     * PathIterator interface.
     *
     * @author Jim Graham
     */
    class RectIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(r: java.awt.geom.Rectangle2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        next(doNext?: any): any;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next$(): void;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an rounded rectangle
     * through the PathIterator interface.
     *
     * @author Jim Graham
     */
    class RoundRectIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        aw: number;
        ah: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(rr: java.awt.geom.RoundRectangle2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return true if there are more points to read
         */
        isDone(): boolean;
        next(doNext?: any): any;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next$(): void;
        static angle: number;
        static angle_$LI$(): number;
        static a: number;
        static a_$LI$(): number;
        static b: number;
        static b_$LI$(): number;
        static c: number;
        static c_$LI$(): number;
        static cv: number;
        static cv_$LI$(): number;
        static acv: number;
        static acv_$LI$(): number;
        static ctrlpts: number[][];
        static ctrlpts_$LI$(): number[][];
        static types: number[];
        static types_$LI$(): number[];
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A double array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of double x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt {
    abstract class Graphics {
        constructor();
        create$(): Graphics;
        create(x?: any, y?: any, width?: any, height?: any): any;
        abstract translate(x: number, y: number): any;
        abstract getColor(): java.awt.Color;
        abstract setColor(c: java.awt.Color): any;
        abstract setPaintMode(): any;
        abstract getFont(): java.awt.Font;
        abstract setFont(font: java.awt.Font): any;
        getClipBounds$(): java.awt.Rectangle;
        abstract clipRect(x: number, y: number, width: number, height: number): any;
        setClip(x?: any, y?: any, width?: any, height?: any): any;
        abstract getClip(): java.awt.Shape;
        setClip$java_awt_Shape(clip: java.awt.Shape): void;
        abstract drawLine(x1: number, y1: number, x2: number, y2: number): any;
        abstract fillRect(x: number, y: number, width: number, height: number): any;
        drawRect(x: number, y: number, width: number, height: number): void;
        abstract clearRect(x: number, y: number, width: number, height: number): any;
        abstract drawRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): any;
        abstract fillRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): any;
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        abstract drawOval(x: number, y: number, width: number, height: number): any;
        abstract fillOval(x: number, y: number, width: number, height: number): any;
        abstract drawArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): any;
        abstract fillArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): any;
        abstract drawPolyline(xPoints: number[], yPoints: number[], nPoints: number): any;
        drawPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        drawPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        fillPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        fillPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        abstract drawString(str: string, x: number, y: number): any;
        drawImage$java_awt_Image$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage(img?: any, dx1?: any, dy1?: any, dx2?: any, dy2?: any, sx1?: any, sy1?: any, sx2?: any, sy2?: any, bgcolor?: any, observer?: any): any;
        abstract dispose(): any;
        finalize(): void;
        toString(): string;
        hitClip(x: number, y: number, width: number, height: number): boolean;
        getClipBounds(r?: any): any;
    }
}
declare namespace java.awt {
    class GridLayout implements java.awt.LayoutManager {
        created: boolean;
        parent: java.awt.Container;
        table: HTMLTableElement;
        currentPosition: number;
        cols: number;
        rows: number;
        constructor(rows: number, cols: number);
        addLayoutComponent(name: string, component: java.awt.Component): void;
        removeLayoutComponent(component: java.awt.Component): void;
        layoutContainer(parent: java.awt.Container): void;
        onComponentAdded(parent: java.awt.Container, component: java.awt.Component, position: number): void;
    }
}
declare namespace java.awt {
    interface HTMLComponent {
        getHTMLElement(): HTMLElement;
        bindHTML(htmlElement: HTMLElement): any;
        createHTML(): any;
        initHTML(): any;
    }
}
declare namespace java.awt.image {
    interface ImageObserver {
        imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, width: number, height: number): boolean;
    }
    namespace ImageObserver {
        var WIDTH: number;
        var HEIGHT: number;
        var PROPERTIES: number;
        var SOMEBITS: number;
        var FRAMEBITS: number;
        var ALLBITS: number;
        var ERROR: number;
        var ABORT: number;
    }
}
declare namespace java.awt {
    class Image {
        constructor(src: string);
        getWidth(observer: java.awt.image.ImageObserver): number;
        getHeight(observer: java.awt.image.ImageObserver): number;
        source: HTMLImageElement;
        /**
         * Use the default image-scaling algorithm.
         *
         * @since JDK1.1
         */
        static SCALE_DEFAULT: number;
        /**
         * Choose an image-scaling algorithm that gives higher priority to scaling
         * speed than smoothness of the scaled image.
         *
         * @since JDK1.1
         */
        static SCALE_FAST: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static SCALE_AREA_AVERAGING: number;
        flush(): void;
    }
}
declare namespace java.awt {
    class Insets implements java.lang.Cloneable, java.io.Serializable {
        top: number;
        left: number;
        bottom: number;
        right: number;
        static serialVersionUID: number;
        constructor(top: number, left: number, bottom: number, right: number);
        set(top: number, left: number, bottom: number, right: number): void;
        equals(obj: any): boolean;
        hashCode(): number;
        toString(): string;
        clone(): any;
    }
}
declare namespace java.awt {
    interface ItemSelectable {
        getSelectedObjects(): any[];
        addItemListener(l: java.awt.event.ItemListener): any;
        removeItemListener(l: java.awt.event.ItemListener): any;
    }
}
declare namespace java.awt {
    interface LayoutManager {
        addLayoutComponent(name: string, comp: java.awt.Component): any;
        removeLayoutComponent(comp: java.awt.Component): any;
        layoutContainer(parent: java.awt.Container): any;
        onComponentAdded(parent: java.awt.Container, component: java.awt.Component, position: number): any;
    }
}
declare namespace java.awt {
    class MenuComponent {
        private name;
        getName(): string;
        setName(name: string): void;
        constructor();
    }
}
declare namespace java.awt {
    interface Paint {
    }
}
declare namespace java.awt {
    class Polygon implements java.awt.Shape, java.io.Serializable {
        npoints: number;
        xpoints: number[];
        ypoints: number[];
        bounds: java.awt.Rectangle;
        static serialVersionUID: number;
        static MIN_LENGTH: number;
        constructor(xpoints?: any, ypoints?: any, npoints?: any);
        reset(): void;
        invalidate(): void;
        translate(deltaX: number, deltaY: number): void;
        calculateBounds(xpoints: number[], ypoints: number[], npoints: number): void;
        updateBounds(x: number, y: number): void;
        addPoint(x: number, y: number): void;
        getBounds(): java.awt.Rectangle;
        getBoundingBox(): java.awt.Rectangle;
        contains$java_awt_Point(p: java.awt.Point): boolean;
        contains$int$int(x: number, y: number): boolean;
        inside(x: number, y: number): boolean;
        getBounds2D(): java.awt.geom.Rectangle2D;
        contains$double$double(x: number, y: number): boolean;
        getCrossings(xlo: number, ylo: number, xhi: number, yhi: number): sun.awt.geom.Crossings;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains(x?: any, y?: any, w?: any, h?: any): any;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator(at?: any, flatness?: any): any;
    }
    namespace Polygon {
        class PolygonPathIterator implements java.awt.geom.PathIterator {
            __parent: any;
            poly: java.awt.Polygon;
            transform: java.awt.geom.AffineTransform;
            index: number;
            constructor(__parent: any, pg: java.awt.Polygon, at: java.awt.geom.AffineTransform);
            getWindingRule(): number;
            isDone(): boolean;
            next(doNext?: any): any;
            next$(): void;
            currentSegment(coords?: any): any;
            currentSegment$double_A(coords: number[]): number;
        }
    }
}
declare namespace java.awt {
    /**
     * The <code>Shape</code> interface provides definitions for objects
     * that represent some form of geometric shape.  The <code>Shape</code>
     * is described by a {@link PathIterator} object, which can express the
     * outline of the <code>Shape</code> as well as a rule for determining
     * how the outline divides the 2D plane into interior and exterior
     * points.  Each <code>Shape</code> object provides callbacks to get the
     * bounding box of the geometry, determine whether points or
     * rectangles lie partly or entirely within the interior
     * of the <code>Shape</code>, and retrieve a <code>PathIterator</code>
     * object that describes the trajectory path of the <code>Shape</code>
     * outline.
     * <p>
     * <a name="def_insideness"><b>Definition of insideness:</b></a>
     * A point is considered to lie inside a
     * <code>Shape</code> if and only if:
     * <ul>
     * <li> it lies completely
     * inside the<code>Shape</code> boundary <i>or</i>
     * <li>
     * it lies exactly on the <code>Shape</code> boundary <i>and</i> the
     * space immediately adjacent to the
     * point in the increasing <code>X</code> direction is
     * entirely inside the boundary <i>or</i>
     * <li>
     * it lies exactly on a horizontal boundary segment <b>and</b> the
     * space immediately adjacent to the point in the
     * increasing <code>Y</code> direction is inside the boundary.
     * </ul>
     * <p>The <code>contains</code> and <code>intersects</code> methods
     * consider the interior of a <code>Shape</code> to be the area it
     * encloses as if it were filled.  This means that these methods
     * consider
     * unclosed shapes to be implicitly closed for the purpose of
     * determining if a shape contains or intersects a rectangle or if a
     * shape contains a point.
     *
     * @see java.awt.geom.PathIterator
     * @see java.awt.geom.AffineTransform
     * @see java.awt.geom.FlatteningPathIterator
     * @see java.awt.geom.GeneralPath
     *
     * @author Jim Graham
     * @since 1.2
     */
    interface Shape {
        /**
         * Returns an integer {@link Rectangle} that completely encloses the
         * <code>Shape</code>.  Note that there is no guarantee that the
         * returned <code>Rectangle</code> is the smallest bounding box that
         * encloses the <code>Shape</code>, only that the <code>Shape</code>
         * lies entirely within the indicated  <code>Rectangle</code>.  The
         * returned <code>Rectangle</code> might also fail to completely
         * enclose the <code>Shape</code> if the <code>Shape</code> overflows
         * the limited range of the integer data type.  The
         * <code>getBounds2D</code> method generally returns a
         * tighter bounding box due to its greater flexibility in
         * representation.
         *
         * <p>
         * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
         * definition of insideness</a> can lead to situations where points
         * on the defining outline of the {@code shape} may not be considered
         * contained in the returned {@code bounds} object, but only in cases
         * where those points are also not considered contained in the original
         * {@code shape}.
         * </p>
         * <p>
         * If a {@code point} is inside the {@code shape} according to the
         * {@link #contains(double x, double y) contains(point)} method, then
         * it must be inside the returned {@code Rectangle} bounds object
         * according to the {@link #contains(double x, double y) contains(point)}
         * method of the {@code bounds}. Specifically:
         * </p>
         * <p>
         * {@code shape.contains(x,y)} requires {@code bounds.contains(x,y)}
         * </p>
         * <p>
         * If a {@code point} is not inside the {@code shape}, then it might
         * still be contained in the {@code bounds} object:
         * </p>
         * <p>
         * {@code bounds.contains(x,y)} does not imply {@code shape.contains(x,y)}
         * </p>
         * @return an integer <code>Rectangle</code> that completely encloses
         * the <code>Shape</code>.
         * @see #getBounds2D
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns a high precision and more accurate bounding box of
         * the <code>Shape</code> than the <code>getBounds</code> method.
         * Note that there is no guarantee that the returned
         * {@link Rectangle2D} is the smallest bounding box that encloses
         * the <code>Shape</code>, only that the <code>Shape</code> lies
         * entirely within the indicated <code>Rectangle2D</code>.  The
         * bounding box returned by this method is usually tighter than that
         * returned by the <code>getBounds</code> method and never fails due
         * to overflow problems since the return value can be an instance of
         * the <code>Rectangle2D</code> that uses double precision values to
         * store the dimensions.
         *
         * <p>
         * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
         * definition of insideness</a> can lead to situations where points
         * on the defining outline of the {@code shape} may not be considered
         * contained in the returned {@code bounds} object, but only in cases
         * where those points are also not considered contained in the original
         * {@code shape}.
         * </p>
         * <p>
         * If a {@code point} is inside the {@code shape} according to the
         * {@link #contains(Point2D p) contains(point)} method, then it must
         * be inside the returned {@code Rectangle2D} bounds object according
         * to the {@link #contains(Point2D p) contains(point)} method of the
         * {@code bounds}. Specifically:
         * </p>
         * <p>
         * {@code shape.contains(p)} requires {@code bounds.contains(p)}
         * </p>
         * <p>
         * If a {@code point} is not inside the {@code shape}, then it might
         * still be contained in the {@code bounds} object:
         * </p>
         * <p>
         * {@code bounds.contains(p)} does not imply {@code shape.contains(p)}
         * </p>
         * @return an instance of <code>Rectangle2D</code> that is a
         * high-precision bounding box of the <code>Shape</code>.
         * @see #getBounds
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * Tests if the interior of the <code>Shape</code> intersects the
         * interior of a specified rectangular area.
         * The rectangular area is considered to intersect the <code>Shape</code>
         * if any point is contained in both the interior of the
         * <code>Shape</code> and the specified rectangular area.
         * <p>
         * The {@code Shape.intersects()} method allows a {@code Shape}
         * implementation to conservatively return {@code true} when:
         * <ul>
         * <li>
         * there is a high probability that the rectangular area and the
         * <code>Shape</code> intersect, but
         * <li>
         * the calculations to accurately determine this intersection
         * are prohibitively expensive.
         * </ul>
         * This means that for some {@code Shapes} this method might
         * return {@code true} even though the rectangular area does not
         * intersect the {@code Shape}.
         * The {@link java.awt.geom.Area Area} class performs
         * more accurate computations of geometric intersection than most
         * {@code Shape} objects and therefore can be used if a more precise
         * answer is required.
         *
         * @param x the X coordinate of the upper-left corner
         * of the specified rectangular area
         * @param y the Y coordinate of the upper-left corner
         * of the specified rectangular area
         * @param w the width of the specified rectangular area
         * @param h the height of the specified rectangular area
         * @return <code>true</code> if the interior of the <code>Shape</code> and
         * the interior of the rectangular area intersect, or are
         * both highly likely to intersect and intersection calculations
         * would be too expensive to perform; <code>false</code> otherwise.
         * @see java.awt.geom.Area
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * boundary and provides access to a flattened view of the
         * <code>Shape</code> outline geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types are
         * returned by the iterator.
         * <p>
         * If an optional <code>AffineTransform</code> is specified,
         * the coordinates returned in the iteration are transformed
         * accordingly.
         * <p>
         * The amount of subdivision of the curved segments is controlled
         * by the <code>flatness</code> parameter, which specifies the
         * maximum distance that any point on the unflattened transformed
         * curve can deviate from the returned flattened path segments.
         * Note that a limit on the accuracy of the flattened path might be
         * silently imposed, causing very small flattening parameters to be
         * treated as larger values.  This limit, if there is one, is
         * defined by the particular implementation that is used.
         * <p>
         * Each call to this method returns a fresh <code>PathIterator</code>
         * object that traverses the <code>Shape</code> object geometry
         * independently from any other <code>PathIterator</code> objects in use at
         * the same time.
         * <p>
         * It is recommended, but not guaranteed, that objects
         * implementing the <code>Shape</code> interface isolate iterations
         * that are in process from any changes that might occur to the original
         * object's geometry during such iterations.
         *
         * @param at an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param flatness the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate
         * from any point on the original curve
         * @return a new <code>PathIterator</code> that independently traverses
         * a flattened view of the geometry of the  <code>Shape</code>.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
    }
}
declare namespace java.awt {
    interface Stroke {
    }
}
declare namespace java.awt {
    class Toolkit {
        static toolkit: Toolkit;
        private images;
        static getProperty(key: string, defaultValue: string): string;
        static getDefaultToolkit(): Toolkit;
        createImage(filename: string): java.awt.Image;
        getImage(filename: string): java.awt.Image;
    }
}
declare namespace java.awt {
    interface Transparency {
        getTransparency(): number;
    }
    namespace Transparency {
        var OPAQUE: number;
        var BITMASK: number;
        var TRANSLUCENT: number;
    }
}
declare namespace javax.imageio {
    class ImageIO {
        static read(input: java.io.File): java.awt.image.BufferedImage;
    }
}
declare namespace javax.swing {
    interface Action extends java.awt.event.ActionListener {
        getValue(key: string): any;
        putValue(key: string, value: any): any;
        setEnabled(b: boolean): any;
        isEnabled(): boolean;
        addPropertyChangeListener(listener: java.beans.PropertyChangeListener): any;
        removePropertyChangeListener(listener: java.beans.PropertyChangeListener): any;
    }
    namespace Action {
        var DEFAULT: string;
        var NAME: string;
        var SHORT_DESCRIPTION: string;
        var LONG_DESCRIPTION: string;
        var SMALL_ICON: string;
        var ACTION_COMMAND_KEY: string;
        var ACCELERATOR_KEY: string;
        var MNEMONIC_KEY: string;
        var SELECTED_KEY: string;
        var DISPLAYED_MNEMONIC_INDEX_KEY: string;
        var LARGE_ICON_KEY: string;
    }
}
declare namespace javax.swing.event {
    class ChangeEvent extends java.util.EventObject {
        constructor(source: any);
    }
}
declare namespace javax.swing.event {
    interface ChangeListener extends java.util.EventListener {
        stateChanged(e: javax.swing.event.ChangeEvent): any;
    }
}
declare namespace javax.swing.event {
    class EventListenerList implements java.io.Serializable {
        static NULL_ARRAY: any[];
        static NULL_ARRAY_$LI$(): any[];
        listenerList: any[];
        getListenerList(): any[];
        getListeners<T extends java.util.EventListener>(t: any): T[];
        getListenerCount$(): number;
        getListenerCount$java_lang_Class(t: any): number;
        getListenerCount(list?: any, t?: any): any;
        add<T extends java.util.EventListener>(t: any, l: T): void;
        remove<T extends java.util.EventListener>(t: any, l: T): void;
        /**
         * Returns a string representation of the EventListenerList.
         */
        toString(): string;
        constructor();
    }
}
declare namespace javax.swing.event {
    /**
     * An event indicating that an operation which can be undone has occurred.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     */
    class UndoableEditEvent extends java.util.EventObject {
        private myEdit;
        /**
         * Constructs an UndoableEditEvent object.
         *
         * @param source  the Object that originated the event
         * (typically <code>this</code>)
         * @param edit    an UndoableEdit object
         */
        constructor(source: any, edit: javax.swing.undo.UndoableEdit);
        /**
         * Returns the edit value.
         *
         * @return the UndoableEdit object encapsulating the edit
         */
        getEdit(): javax.swing.undo.UndoableEdit;
    }
}
declare namespace javax.swing.event {
    /**
     * Interface implemented by a class interested in hearing about
     * undoable operations.
     *
     * @author Ray Ryan
     */
    interface UndoableEditListener extends java.util.EventListener {
        /**
         * An undoable edit happened
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): any;
    }
}
declare namespace javax.swing {
    interface Icon {
        paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number, y: number): any;
        getIconWidth(): number;
        getIconHeight(): number;
        getInternalHTMLImageElement(): HTMLImageElement;
    }
}
declare namespace javax.swing {
    class ImageIcon implements javax.swing.Icon, java.io.Serializable {
        private filename;
        image: java.awt.Image;
        loadStatus: number;
        imageObserver: java.awt.image.ImageObserver;
        description: string;
        width: number;
        height: number;
        getInternalHTMLImageElement(): HTMLImageElement;
        constructor(filename?: any, description?: any);
        loadImage(image: java.awt.Image): void;
        getImageLoadStatus(): number;
        getImage(): java.awt.Image;
        setImage(image: java.awt.Image): void;
        getDescription(): string;
        setDescription(description: string): void;
        paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number, y: number): void;
        getIconWidth(): number;
        getIconHeight(): number;
        setImageObserver(observer: java.awt.image.ImageObserver): void;
        getImageObserver(): java.awt.image.ImageObserver;
        toString(): string;
    }
}
declare namespace javax.swing {
    /**
     * A collection of constants generally used for positioning and orienting
     * components on the screen.
     *
     * @author Jeff Dinkins
     * @author Ralph Kar (orientation support)
     */
    interface SwingConstants {
    }
    namespace SwingConstants {
        /**
         * The central position in an area. Used for
         * both compass-direction constants (NORTH, etc.)
         * and box-orientation constants (TOP, etc.).
         */
        var CENTER: number;
        /**
         * Box-orientation constant used to specify the top of a box.
         */
        var TOP: number;
        /**
         * Box-orientation constant used to specify the left side of a box.
         */
        var LEFT: number;
        /**
         * Box-orientation constant used to specify the bottom of a box.
         */
        var BOTTOM: number;
        /**
         * Box-orientation constant used to specify the right side of a box.
         */
        var RIGHT: number;
        /**
         * Compass-direction North (up).
         */
        var NORTH: number;
        /**
         * Compass-direction north-east (upper right).
         */
        var NORTH_EAST: number;
        /**
         * Compass-direction east (right).
         */
        var EAST: number;
        /**
         * Compass-direction south-east (lower right).
         */
        var SOUTH_EAST: number;
        /**
         * Compass-direction south (down).
         */
        var SOUTH: number;
        /**
         * Compass-direction south-west (lower left).
         */
        var SOUTH_WEST: number;
        /**
         * Compass-direction west (left).
         */
        var WEST: number;
        /**
         * Compass-direction north west (upper left).
         */
        var NORTH_WEST: number;
        /**
         * Horizontal orientation. Used for scrollbars and sliders.
         */
        var HORIZONTAL: number;
        /**
         * Vertical orientation. Used for scrollbars and sliders.
         */
        var VERTICAL: number;
        /**
         * Identifies the leading edge of text for use with left-to-right
         * and right-to-left languages. Used by buttons and labels.
         */
        var LEADING: number;
        /**
         * Identifies the trailing edge of text for use with left-to-right
         * and right-to-left languages. Used by buttons and labels.
         */
        var TRAILING: number;
        /**
         * Identifies the next direction in a sequence.
         *
         * @since 1.4
         */
        var NEXT: number;
        /**
         * Identifies the previous direction in a sequence.
         *
         * @since 1.4
         */
        var PREVIOUS: number;
    }
}
declare namespace javax.swing {
    class UIManager {
        static getString(key: string): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * An abstract implementation of <code>UndoableEdit</code>,
     * implementing simple responses to all boolean methods in
     * that interface.
     *
     * @author Ray Ryan
     */
    class AbstractUndoableEdit implements javax.swing.undo.UndoableEdit, java.io.Serializable {
        /**
         * String returned by <code>getUndoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static UndoName: string;
        /**
         * String returned by <code>getRedoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static RedoName: string;
        /**
         * Defaults to true; becomes false if this edit is undone, true
         * again if it is redone.
         */
        hasBeenDone: boolean;
        /**
         * True if this edit has not received <code>die</code>; defaults
         * to <code>true</code>.
         */
        alive: boolean;
        /**
         * Creates an <code>AbstractUndoableEdit</code> which defaults
         * <code>hasBeenDone</code> and <code>alive</code> to <code>true</code>.
         */
        constructor();
        /**
         * Sets <code>alive</code> to false. Note that this
         * is a one way operation; dead edits cannot be resurrected.
         * Sending <code>undo</code> or <code>redo</code> to
         * a dead edit results in an exception being thrown.
         *
         * <p>Typically an edit is killed when it is consolidated by
         * another edit's <code>addEdit</code> or <code>replaceEdit</code>
         * method, or when it is dequeued from an <code>UndoManager</code>.
         */
        die(): void;
        /**
         * Throws <code>CannotUndoException</code> if <code>canUndo</code>
         * returns <code>false</code>. Sets <code>hasBeenDone</code>
         * to <code>false</code>. Subclasses should override to undo the
         * operation represented by this edit. Override should begin with
         * a call to super.
         *
         * @exception CannotUndoException if <code>canUndo</code>
         * returns <code>false</code>
         * @see     #canUndo
         */
        undo(): void;
        /**
         * Returns true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>.
         *
         * @return true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>
         *
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canUndo(): boolean;
        /**
         * Throws <code>CannotRedoException</code> if <code>canRedo</code>
         * returns false. Sets <code>hasBeenDone</code> to <code>true</code>.
         * Subclasses should override to redo the operation represented by
         * this edit. Override should begin with a call to super.
         *
         * @exception CannotRedoException if <code>canRedo</code>
         * returns <code>false</code>
         * @see     #canRedo
         */
        redo(): void;
        /**
         * Returns <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>.
         *
         * @return <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canRedo(): boolean;
        /**
         * This default implementation returns false.
         *
         * @param anEdit the edit to be added
         * @return false
         *
         * @see UndoableEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns false.
         *
         * @param anEdit the edit to replace
         * @return false
         *
         * @see UndoableEdit#replaceEdit
         */
        replaceEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns true.
         *
         * @return true
         * @see UndoableEdit#isSignificant
         */
        isSignificant(): boolean;
        /**
         * This default implementation returns "". Used by
         * <code>getUndoPresentationName</code> and
         * <code>getRedoPresentationName</code> to
         * construct the strings they return. Subclasses should override to
         * return an appropriate description of the operation this edit
         * represents.
         *
         * @return the empty string ""
         *
         * @see     #getUndoPresentationName
         * @see     #getRedoPresentationName
         */
        getPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>redo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     */
    class CannotRedoException extends Error {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>undo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     */
    class CannotUndoException extends Error {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * StateEditable defines the interface for objects that can have
     * their state undone/redone by a StateEdit.
     *
     * @see StateEdit
     */
    interface StateEditable {
        /**
         * Upon receiving this message the receiver should place any relevant
         * state into <EM>state</EM>.
         */
        storeState(state: java.util.Hashtable<any, any>): any;
        /**
         * Upon receiving this message the receiver should extract any relevant
         * state out of <EM>state</EM>.
         */
        restoreState(state: java.util.Hashtable<any, any>): any;
    }
    namespace StateEditable {
        /**
         * Resource ID for this class.
         */
        var RCSID: string;
    }
}
declare namespace javax.swing.undo {
    /**
     * An <code>UndoableEdit</code> represents an edit.  The edit may
     * be undone, or if already undone the edit may be redone.
     * <p>
     * <code>UndoableEdit</code> is designed to be used with the
     * <code>UndoManager</code>.  As <code>UndoableEdit</code>s are generated
     * by an <code>UndoableEditListener</code> they are typically added to
     * the <code>UndoManager</code>.  When an <code>UndoableEdit</code>
     * is added to an <code>UndoManager</code> the following occurs (assuming
     * <code>end</code> has not been called on the <code>UndoManager</code>):
     * <ol>
     * <li>If the <code>UndoManager</code> contains edits it will call
     * <code>addEdit</code> on the current edit passing in the new edit
     * as the argument.  If <code>addEdit</code> returns true the
     * new edit is assumed to have been incorporated into the current edit and
     * the new edit will not be added to the list of current edits.
     * Edits can use <code>addEdit</code> as a way for smaller edits to
     * be incorporated into a larger edit and treated as a single edit.
     * <li>If <code>addEdit</code> returns false <code>replaceEdit</code>
     * is called on the new edit with the current edit passed in as the
     * argument. This is the inverse of <code>addEdit</code> &#151;
     * if the new edit returns true from <code>replaceEdit</code>, the new
     * edit replaces the current edit.
     * </ol>
     * The <code>UndoManager</code> makes use of
     * <code>isSignificant</code> to determine how many edits should be
     * undone or redone.  The <code>UndoManager</code> will undo or redo
     * all insignificant edits (<code>isSignificant</code> returns false)
     * between the current edit and the last or
     * next significant edit.   <code>addEdit</code> and
     * <code>replaceEdit</code> can be used to treat multiple edits as
     * a single edit, returning false from <code>isSignificant</code>
     * allows for treating can be used to
     * have many smaller edits undone or redone at once.  Similar functionality
     * can also be done using the <code>addEdit</code> method.
     *
     * @author Ray Ryan
     */
    interface UndoableEdit {
        /**
         * Undo the edit.
         *
         * @throws CannotUndoException if this edit can not be undone
         */
        undo(): any;
        /**
         * Returns true if this edit may be undone.
         *
         * @return true if this edit may be undone
         */
        canUndo(): boolean;
        /**
         * Re-applies the edit.
         *
         * @throws CannotRedoException if this edit can not be redone
         */
        redo(): any;
        /**
         * Returns true if this edit may be redone.
         *
         * @return true if this edit may be redone
         */
        canRedo(): boolean;
        /**
         * Informs the edit that it should no longer be used. Once an
         * <code>UndoableEdit</code> has been marked as dead it can no longer
         * be undone or redone.
         * <p>
         * This is a useful hook for cleaning up state no longer
         * needed once undoing or redoing is impossible--for example,
         * deleting file resources used by objects that can no longer be
         * undeleted. <code>UndoManager</code> calls this before it dequeues edits.
         * <p>
         * Note that this is a one-way operation. There is no "un-die"
         * method.
         *
         * @see CompoundEdit#die
         */
        die(): any;
        /**
         * Adds an <code>UndoableEdit</code> to this <code>UndoableEdit</code>.
         * This method can be used to coalesce smaller edits into a larger
         * compound edit.  For example, text editors typically allow
         * undo operations to apply to words or sentences.  The text
         * editor may choose to generate edits on each key event, but allow
         * those edits to be coalesced into a more user-friendly unit, such as
         * a word. In this case, the <code>UndoableEdit</code> would
         * override <code>addEdit</code> to return true when the edits may
         * be coalesced.
         * <p>
         * A return value of true indicates <code>anEdit</code> was incorporated
         * into this edit.  A return value of false indicates <code>anEdit</code>
         * may not be incorporated into this edit.
         * <p>Typically the receiver is already in the queue of a
         * <code>UndoManager</code> (or other <code>UndoableEditListener</code>),
         * and is being given a chance to incorporate <code>anEdit</code>
         * rather than letting it be added to the queue in turn.</p>
         *
         * <p>If true is returned, from now on <code>anEdit</code> must return
         * false from <code>canUndo</code> and <code>canRedo</code>,
         * and must throw the appropriate exception on <code>undo</code> or
         * <code>redo</code>.</p>
         *
         * @param anEdit the edit to be added
         * @return true if <code>anEdit</code> may be incorporated into this
         * edit
         */
        addEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this <code>UndoableEdit</code> should replace
         * <code>anEdit</code>. This method is used by <code>CompoundEdit</code>
         * and the <code>UndoManager</code>; it is called if
         * <code>anEdit</code> could not be added to the current edit
         * (<code>addEdit</code> returns false).
         * <p>
         * This method provides a way for an edit to replace an existing edit.
         * <p>This message is the opposite of addEdit--anEdit has typically
         * already been queued in an <code>UndoManager</code> (or other
         * UndoableEditListener), and the receiver is being given a chance
         * to take its place.</p>
         *
         * <p>If true is returned, from now on anEdit must return false from
         * canUndo() and canRedo(), and must throw the appropriate
         * exception on undo() or redo().</p>
         *
         * @param anEdit the edit that replaces the current edit
         * @return true if this edit should replace <code>anEdit</code>
         */
        replaceEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this edit is considered significant.  A significant
         * edit is typically an edit that should be presented to the user, perhaps
         * on a menu item or tooltip.  The <code>UndoManager</code> will undo,
         * or redo, all insignificant edits to the next significant edit.
         *
         * @return true if this edit is significant
         */
        isSignificant(): boolean;
        /**
         * Returns a localized, human-readable description of this edit, suitable
         * for use in a change log, for example.
         *
         * @return description of this edit
         */
        getPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the undoable form of
         * this edit, suitable for use as an Undo menu item, for example.
         * This is typically derived from <code>getPresentationName</code>.
         *
         * @return a description of the undoable form of this edit
         */
        getUndoPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the redoable form of
         * this edit, suitable for use as a Redo menu item, for example. This is
         * typically derived from <code>getPresentationName</code>.
         *
         * @return a description of the redoable form of this edit
         */
        getRedoPresentationName(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * A support class used for managing <code>UndoableEdit</code> listeners.
     *
     * @author Ray Ryan
     */
    class UndoableEditSupport {
        updateLevel: number;
        compoundEdit: javax.swing.undo.CompoundEdit;
        listeners: java.util.Vector<javax.swing.event.UndoableEditListener>;
        realSource: any;
        /**
         * Constructs an <code>UndoableEditSupport</code> object.
         *
         * @param r
         * an <code>Object</code>
         */
        constructor(r?: any);
        /**
         * Registers an <code>UndoableEditListener</code>. The listener is notified
         * whenever an edit occurs which can be undone.
         *
         * @param l
         * an <code>UndoableEditListener</code> object
         * @see #removeUndoableEditListener
         */
        addUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Removes an <code>UndoableEditListener</code>.
         *
         * @param l
         * the <code>UndoableEditListener</code> object to be removed
         * @see #addUndoableEditListener
         */
        removeUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Returns an array of all the <code>UndoableEditListener</code>s added to
         * this UndoableEditSupport with addUndoableEditListener().
         *
         * @return all of the <code>UndoableEditListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getUndoableEditListeners(): javax.swing.event.UndoableEditListener[];
        /**
         * Called only from <code>postEdit</code> and <code>endUpdate</code>. Calls
         * <code>undoableEditHappened</code> in all listeners. No synchronization is
         * performed here, since the two calling methods are synchronized.
         */
        _postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         */
        postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * Returns the update level value.
         *
         * @return an integer representing the update level
         */
        getUpdateLevel(): number;
        /**
         */
        beginUpdate(): void;
        /**
         * Called only from <code>beginUpdate</code>. Exposed here for subclasses'
         * use.
         */
        createCompoundEdit(): javax.swing.undo.CompoundEdit;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         */
        endUpdate(): void;
        /**
         * Returns a string that displays and identifies this object's properties.
         *
         * @return a <code>String</code> representation of this object
         */
        toString(): string;
    }
}
declare namespace sun.awt.geom {
    class ChainEnd {
        head: sun.awt.geom.CurveLink;
        tail: sun.awt.geom.CurveLink;
        partner: ChainEnd;
        etag: number;
        constructor(first: sun.awt.geom.CurveLink, partner: ChainEnd);
        getChain(): sun.awt.geom.CurveLink;
        setOtherEnd(partner: ChainEnd): void;
        getPartner(): ChainEnd;
        linkTo(that: ChainEnd): sun.awt.geom.CurveLink;
        addLink(newlink: sun.awt.geom.CurveLink): void;
        getX(): number;
    }
}
declare namespace sun.awt.geom {
    abstract class Crossings {
        static debug: boolean;
        limit: number;
        yranges: number[];
        xlo: number;
        ylo: number;
        xhi: number;
        yhi: number;
        constructor(xlo: number, ylo: number, xhi: number, yhi: number);
        getXLo(): number;
        getYLo(): number;
        getXHi(): number;
        getYHi(): number;
        abstract record(ystart: number, yend: number, direction: number): any;
        print(): void;
        isEmpty(): boolean;
        abstract covers(ystart: number, yend: number): boolean;
        static findCrossings(curves?: any, xlo?: any, ylo?: any, xhi?: any, yhi?: any): any;
        static findCrossings$java_awt_geom_PathIterator$double$double$double$double(pi: java.awt.geom.PathIterator, xlo: number, ylo: number, xhi: number, yhi: number): Crossings;
        accumulateLine$double$double$double$double(x0: number, y0: number, x1: number, y1: number): boolean;
        accumulateLine(x0?: any, y0?: any, x1?: any, y1?: any, direction?: any): any;
        private tmp;
        accumulateQuad(x0: number, y0: number, coords: number[]): boolean;
        accumulateCubic(x0: number, y0: number, coords: number[]): boolean;
    }
    namespace Crossings {
        class EvenOdd extends sun.awt.geom.Crossings {
            constructor(xlo: number, ylo: number, xhi: number, yhi: number);
            covers(ystart: number, yend: number): boolean;
            record(ystart: number, yend: number, direction: number): void;
        }
        class NonZero extends sun.awt.geom.Crossings {
            crosscounts: number[];
            constructor(xlo: number, ylo: number, xhi: number, yhi: number);
            covers(ystart: number, yend: number): boolean;
            remove(cur: number): void;
            insert(cur: number, lo: number, hi: number, dir: number): void;
            record(ystart: number, yend: number, direction: number): void;
        }
    }
}
declare namespace sun.awt.geom {
    abstract class Curve {
        static INCREASING: number;
        static DECREASING: number;
        direction: number;
        static insertMove(curves: java.util.Vector<any>, x: number, y: number): void;
        static insertLine(curves: java.util.Vector<any>, x0: number, y0: number, x1: number, y1: number): void;
        static insertQuad(curves: java.util.Vector<any>, x0: number, y0: number, coords: number[]): void;
        static insertCubic(curves: java.util.Vector<any>, x0: number, y0: number, coords: number[]): void;
        /**
         * Calculates the number of times the given path crosses the ray extending
         * to the right from (px,py). If the point lies on a part of the path, then
         * no crossings are counted for that intersection. +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing The return value is the sum
         * of all crossings for every segment in the path. The path must start with
         * a SEG_MOVETO, otherwise an exception is thrown. The caller must check
         * p[xy] for NaN values. The caller may also reject infinite p[xy] values as
         * well.
         */
        static pointCrossingsForPath(pi: java.awt.geom.PathIterator, px: number, py: number): number;
        /**
         * Calculates the number of times the line from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on the
         * line, then no crossings are recorded. +1 is returned for a crossing where
         * the Y coordinate is increasing -1 is returned for a crossing where the Y
         * coordinate is decreasing
         */
        static pointCrossingsForLine(px: number, py: number, x0: number, y0: number, x1: number, y1: number): number;
        /**
         * Calculates the number of times the quad from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on a part
         * of the curve, then no crossings are counted for that intersection. the
         * level parameter should be 0 at the top-level call and will count up for
         * each recursion level to prevent infinite recursion +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing
         */
        static pointCrossingsForQuad(px: number, py: number, x0: number, y0: number, xc: number, yc: number, x1: number, y1: number, level: number): number;
        /**
         * Calculates the number of times the cubic from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on a part
         * of the curve, then no crossings are counted for that intersection. the
         * level parameter should be 0 at the top-level call and will count up for
         * each recursion level to prevent infinite recursion +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing
         */
        static pointCrossingsForCubic(px: number, py: number, x0: number, y0: number, xc0: number, yc0: number, xc1: number, yc1: number, x1: number, y1: number, level: number): number;
        /**
         * The rectangle intersection test counts the number of times that the path
         * crosses through the shadow that the rectangle projects to the right
         * towards (x => +INFINITY).
         *
         * During processing of the path it actually counts every time the path
         * crosses either or both of the top and bottom edges of that shadow. If the
         * path enters from the top, the count is incremented. If it then exits back
         * through the top, the same way it came in, the count is decremented and
         * there is no impact on the winding count. If, instead, the path exits out
         * the bottom, then the count is incremented again and a full pass through
         * the shadow is indicated by the winding count having been incremented by
         * 2.
         *
         * Thus, the winding count that it accumulates is actually double the real
         * winding count. Since the path is continuous, the final answer should be a
         * multiple of 2, otherwise there is a logic error somewhere.
         *
         * If the path ever has a direct hit on the rectangle, then a special value
         * is returned. This special value terminates all ongoing accumulation on up
         * through the call chain and ends up getting returned to the calling
         * function which can then produce an answer directly. For intersection
         * tests, the answer is always "true" if the path intersects the rectangle.
         * For containment tests, the answer is always "false" if the path
         * intersects the rectangle. Thus, no further processing is ever needed if
         * an intersection occurs.
         */
        static RECT_INTERSECTS: number;
        /**
         * Accumulate the number of times the path crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details. The return value is the sum of all
         * crossings for both the top and bottom of the shadow for every segment in
         * the path, or the special value RECT_INTERSECTS if the path ever enters
         * the interior of the rectangle. The path must start with a SEG_MOVETO,
         * otherwise an exception is thrown. The caller must check r[xy]{min,max}
         * for NaN values.
         */
        static rectCrossingsForPath(pi: java.awt.geom.PathIterator, rxmin: number, rymin: number, rxmax: number, rymax: number): number;
        /**
         * Accumulate the number of times the line crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         */
        static rectCrossingsForLine(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, x1: number, y1: number): number;
        /**
         * Accumulate the number of times the quad crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         */
        static rectCrossingsForQuad(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, xc: number, yc: number, x1: number, y1: number, level: number): number;
        /**
         * Accumulate the number of times the cubic crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         */
        static rectCrossingsForCubic(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, xc0: number, yc0: number, xc1: number, yc1: number, x1: number, y1: number, level: number): number;
        constructor(direction: number);
        getDirection(): number;
        getWithDirection(direction: number): Curve;
        static round(v: number): number;
        static orderof(x1: number, x2: number): number;
        static signeddiffbits(y1: number, y2: number): number;
        static diffbits(y1: number, y2: number): number;
        static prev(v: number): number;
        static next(v: number): number;
        toString(): string;
        controlPointString(): string;
        abstract getOrder(): number;
        abstract getXTop(): number;
        abstract getYTop(): number;
        abstract getXBot(): number;
        abstract getYBot(): number;
        abstract getXMin(): number;
        abstract getXMax(): number;
        abstract getX0(): number;
        abstract getY0(): number;
        abstract getX1(): number;
        abstract getY1(): number;
        abstract XforY(y: number): number;
        abstract TforY(y: number): number;
        abstract XforT(t: number): number;
        abstract YforT(t: number): number;
        abstract dXforT(t: number, deriv: number): number;
        abstract dYforT(t: number, deriv: number): number;
        abstract nextVertical(t0: number, t1: number): number;
        crossingsFor(x: number, y: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        abstract enlarge(r: java.awt.geom.Rectangle2D): any;
        getSubCurve$double$double(ystart: number, yend: number): Curve;
        abstract getReversedCurve(): Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): any;
        compareTo(that: Curve, yrange: number[]): number;
        static TMIN: number;
        findIntersect(that: Curve, yrange: number[], ymin: number, slevel: number, tlevel: number, s0: number, xs0: number, ys0: number, s1: number, xs1: number, ys1: number, t0: number, xt0: number, yt0: number, t1: number, xt1: number, yt1: number): boolean;
        refineTforY(t0: number, yt0: number, y0: number): number;
        fairlyClose(v1: number, v2: number): boolean;
        abstract getSegment(coords: number[]): number;
    }
}
declare namespace sun.awt.geom {
    class CurveLink {
        curve: sun.awt.geom.Curve;
        ytop: number;
        ybot: number;
        etag: number;
        next: CurveLink;
        constructor(curve: sun.awt.geom.Curve, ystart: number, yend: number, etag: number);
        absorb$sun_awt_geom_CurveLink(link: CurveLink): boolean;
        absorb(curve?: any, ystart?: any, yend?: any, etag?: any): any;
        isEmpty(): boolean;
        getCurve(): sun.awt.geom.Curve;
        getSubCurve(): sun.awt.geom.Curve;
        getMoveto(): sun.awt.geom.Curve;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getX(): number;
        getEdgeTag(): number;
        setNext(link: CurveLink): void;
        getNext(): CurveLink;
    }
}
declare namespace sun.awt.geom {
    class Edge {
        static INIT_PARTS: number;
        static GROW_PARTS: number;
        curve: sun.awt.geom.Curve;
        ctag: number;
        etag: number;
        activey: number;
        equivalence: number;
        constructor(c: sun.awt.geom.Curve, ctag: number, etag?: number);
        getCurve(): sun.awt.geom.Curve;
        getCurveTag(): number;
        getEdgeTag(): number;
        setEdgeTag(etag: number): void;
        getEquivalence(): number;
        setEquivalence(eq: number): void;
        private lastEdge;
        private lastResult;
        private lastLimit;
        compareTo(other: Edge, yrange: number[]): number;
        record(yend: number, etag: number): void;
        isActiveFor(y: number, etag: number): boolean;
        toString(): string;
    }
}
declare namespace sun.awt.geom {
    interface PathConsumer2D {
        /**
         * @see java.awt.geom.Path2D.Float.moveTo
         */
        moveTo(x: number, y: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.lineTo
         */
        lineTo(x: number, y: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.quadTo
         */
        quadTo(x1: number, y1: number, x2: number, y2: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.curveTo
         */
        curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.closePath
         */
        closePath(): any;
        /**
         * Called after the last segment of the last subpath when the iteration of
         * the path segments is completely done. This method serves to trigger the
         * end of path processing in the consumer that would normally be triggered
         * when a {@link java.awt.geom.PathIterator PathIterator} returns
         * {@code true} from its {@code done} method.
         */
        pathDone(): any;
        /**
         * If a given PathConsumer performs all or most of its work natively then it
         * can return a (non-zero) pointer to a native function vector that defines
         * C functions for all of the above methods. The specific pointer it returns
         * is a pointer to a PathConsumerVec structure as defined in the include
         * file src/share/native/sun/java2d/pipe/PathConsumer2D.h
         *
         * @return a native pointer to a PathConsumerVec structure.
         */
        getNativeConsumer(): number;
    }
}
declare namespace java.awt.event {
    /**
     * The adjustment event emitted by Adjustable objects like
     * {@link java.awt.Scrollbar} and {@link java.awt.ScrollPane}.
     * When the user changes the value of the scrolling component,
     * it receives an instance of {@code AdjustmentEvent}.
     * <p>
     * An unspecified behavior will be caused if the {@code id} parameter
     * of any particular {@code AdjustmentEvent} instance is not
     * in the range from {@code ADJUSTMENT_FIRST} to {@code ADJUSTMENT_LAST}.
     * <p>
     * The {@code type} of any {@code AdjustmentEvent} instance takes one of the following
     * values:
     * <ul>
     * <li> {@code UNIT_INCREMENT}
     * <li> {@code UNIT_DECREMENT}
     * <li> {@code BLOCK_INCREMENT}
     * <li> {@code BLOCK_DECREMENT}
     * <li> {@code TRACK}
     * </ul>
     * Assigning the value different from listed above will cause an unspecified behavior.
     * @see java.awt.Adjustable
     * @see AdjustmentListener
     *
     * @author Amy Fowler
     * @since 1.1
     */
    class AdjustmentEvent extends java.awt.AWTEvent {
        /**
         * Marks the first integer id for the range of adjustment event ids.
         */
        static ADJUSTMENT_FIRST: number;
        /**
         * Marks the last integer id for the range of adjustment event ids.
         */
        static ADJUSTMENT_LAST: number;
        /**
         * The adjustment value changed event.
         */
        static ADJUSTMENT_VALUE_CHANGED: number;
        static ADJUSTMENT_VALUE_CHANGED_$LI$(): number;
        /**
         * The unit increment adjustment type.
         */
        static UNIT_INCREMENT: number;
        /**
         * The unit decrement adjustment type.
         */
        static UNIT_DECREMENT: number;
        /**
         * The block decrement adjustment type.
         */
        static BLOCK_DECREMENT: number;
        /**
         * The block increment adjustment type.
         */
        static BLOCK_INCREMENT: number;
        /**
         * The absolute tracking adjustment type.
         */
        static TRACK: number;
        /**
         * The adjustable object that fired the event.
         *
         * @serial
         * @see #getAdjustable
         */
        adjustable: java.awt.Adjustable;
        /**
         * <code>value</code> will contain the new value of the
         * adjustable object.  This value will always be  in a
         * range associated adjustable object.
         *
         * @serial
         * @see #getValue
         */
        value: number;
        /**
         * The <code>adjustmentType</code> describes how the adjustable
         * object value has changed.
         * This value can be increased/decreased by a block or unit amount
         * where the block is associated with page increments/decrements,
         * and a unit is associated with line increments/decrements.
         *
         * @serial
         * @see #getAdjustmentType
         */
        adjustmentType: number;
        /**
         * The <code>isAdjusting</code> is true if the event is one
         * of the series of multiple adjustment events.
         *
         * @since 1.4
         * @serial
         * @see #getValueIsAdjusting
         */
        isAdjusting: boolean;
        static serialVersionUID: number;
        /**
         * Constructs an <code>AdjustmentEvent</code> object with the
         * specified Adjustable source, event type, adjustment type, and value.
         * <p> This method throws an
         * <code>IllegalArgumentException</code> if <code>source</code>
         * is <code>null</code>.
         *
         * @param source The <code>Adjustable</code> object where the
         * event originated
         * @param id     An integer indicating the type of event.
         * For information on allowable values, see
         * the class description for {@link AdjustmentEvent}
         * @param type   An integer indicating the adjustment type.
         * For information on allowable values, see
         * the class description for {@link AdjustmentEvent}
         * @param value  The current value of the adjustment
         * @param isAdjusting A boolean that equals <code>true</code> if the event is one
         * of a series of multiple adjusting events,
         * otherwise <code>false</code>
         * @throws IllegalArgumentException if <code>source</code> is null
         * @since 1.4
         * @see #getSource()
         * @see #getID()
         * @see #getAdjustmentType()
         * @see #getValue()
         * @see #getValueIsAdjusting()
         */
        constructor(source: java.awt.Adjustable, id: number, type: number, value: number, isAdjusting?: boolean);
        /**
         * Returns the <code>Adjustable</code> object where this event originated.
         *
         * @return the <code>Adjustable</code> object where this event originated
         */
        getAdjustable(): java.awt.Adjustable;
        /**
         * Returns the current value in the adjustment event.
         *
         * @return the current value in the adjustment event
         */
        getValue(): number;
        /**
         * Returns the type of adjustment which caused the value changed
         * event.  It will have one of the following values:
         * <ul>
         * <li>{@link #UNIT_INCREMENT}
         * <li>{@link #UNIT_DECREMENT}
         * <li>{@link #BLOCK_INCREMENT}
         * <li>{@link #BLOCK_DECREMENT}
         * <li>{@link #TRACK}
         * </ul>
         * @return one of the adjustment values listed above
         */
        getAdjustmentType(): number;
        /**
         * Returns <code>true</code> if this is one of multiple
         * adjustment events.
         *
         * @return <code>true</code> if this is one of multiple
         * adjustment events, otherwise returns <code>false</code>
         * @since 1.4
         */
        getValueIsAdjusting(): boolean;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class ComponentEvent extends java.awt.AWTEvent {
        static COMPONENT_FIRST: number;
        static COMPONENT_LAST: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_MOVED_$LI$(): number;
        static COMPONENT_RESIZED: number;
        static COMPONENT_RESIZED_$LI$(): number;
        static COMPONENT_SHOWN: number;
        static COMPONENT_SHOWN_$LI$(): number;
        static COMPONENT_HIDDEN: number;
        static COMPONENT_HIDDEN_$LI$(): number;
        static serialVersionUID: number;
        constructor(source: java.awt.Component, id: number);
        getComponent(): java.awt.Component;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class ItemEvent extends java.awt.AWTEvent {
        static ITEM_FIRST: number;
        static ITEM_LAST: number;
        static ITEM_STATE_CHANGED: number;
        static ITEM_STATE_CHANGED_$LI$(): number;
        static SELECTED: number;
        static DESELECTED: number;
        item: any;
        stateChange: number;
        static serialVersionUID: number;
        constructor(source: java.awt.ItemSelectable, id: number, item: any, stateChange: number);
        getItemSelectable(): java.awt.ItemSelectable;
        getItem(): any;
        getStateChange(): number;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    /**
     * A semantic event which indicates that an object's text changed.
     * This high-level event is generated by an object (such as a TextComponent)
     * when its text changes. The event is passed to
     * every <code>TextListener</code> object which registered to receive such
     * events using the component's <code>addTextListener</code> method.
     * <P>
     * The object that implements the <code>TextListener</code> interface gets
     * this <code>TextEvent</code> when the event occurs. The listener is
     * spared the details of processing individual mouse movements and key strokes
     * Instead, it can process a "meaningful" (semantic) event like "text changed".
     * <p>
     * An unspecified behavior will be caused if the {@code id} parameter
     * of any particular {@code TextEvent} instance is not
     * in the range from {@code TEXT_FIRST} to {@code TEXT_LAST}.
     *
     * @author Georges Saab
     *
     * @see java.awt.TextComponent
     * @see TextListener
     *
     * @since 1.1
     */
    class TextEvent extends java.awt.AWTEvent {
        /**
         * The first number in the range of ids used for text events.
         */
        static TEXT_FIRST: number;
        /**
         * The last number in the range of ids used for text events.
         */
        static TEXT_LAST: number;
        /**
         * This event id indicates that object's text changed.
         */
        static TEXT_VALUE_CHANGED: number;
        static TEXT_VALUE_CHANGED_$LI$(): number;
        static serialVersionUID: number;
        /**
         * Constructs a <code>TextEvent</code> object.
         * <p> This method throws an
         * <code>IllegalArgumentException</code> if <code>source</code>
         * is <code>null</code>.
         *
         * @param source The (<code>TextComponent</code>) object that
         * originated the event
         * @param id     An integer that identifies the event type.
         * For information on allowable values, see
         * the class description for {@link TextEvent}
         * @throws IllegalArgumentException if <code>source</code> is null
         * @see #getSource()
         * @see #getID()
         */
        constructor(source: any, id: number);
        /**
         * Returns a parameter string identifying this text event.
         * This method is useful for event-logging and for debugging.
         *
         * @return a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt {
    class Button extends java.awt.Component {
        actionListener: java.awt.event.ActionListener;
        actionCommand: string;
        label: string;
        background: java.awt.Color;
        constructor(label: string);
        getHTMLElement(): HTMLButtonElement;
        createHTML(): void;
        initHTML(): void;
        private initActionListener();
        addActionListener(actionListener: java.awt.event.ActionListener): void;
        setBackground(background: java.awt.Color): void;
    }
}
declare namespace java.awt {
    class Checkbox extends java.awt.Component implements java.awt.ItemSelectable {
        label: string;
        state: boolean;
        group: java.awt.CheckboxGroup;
        itemListeners: Array<java.awt.event.ItemListener>;
        htmlCheckbox: HTMLInputElement;
        htmlLabel: Text;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor(label?: string, state?: boolean, group?: java.awt.CheckboxGroup);
        getHTMLElement(): HTMLLabelElement;
        createHTML(): void;
        initHTML(): void;
        constructComponentName(): string;
        getLabel(): string;
        setLabel(label: string): void;
        getState(): boolean;
        setStateInternal(state: boolean): void;
        setState(state: boolean): void;
        getSelectedObjects(): any[];
        getCheckboxGroup(): java.awt.CheckboxGroup;
        setCheckboxGroup(g: java.awt.CheckboxGroup): void;
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processItemEvent(e: java.awt.event.ItemEvent): void;
        paramString(): string;
    }
}
declare namespace java.awt {
    class Choice extends java.awt.Component implements java.awt.ItemSelectable {
        pItems: java.util.Vector<string>;
        selectedIndex: number;
        itemListeners: Array<java.awt.event.ItemListener>;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor();
        createHTML(): void;
        getHTMLElement(): HTMLSelectElement;
        initHTML(): void;
        constructComponentName(): string;
        getItemCount(): number;
        countItems(): number;
        getItem(index: number): string;
        getItemImpl(index: number): string;
        add(item: string): void;
        addItem(item: string): void;
        private insertNoInvalidate(item, index);
        insert(item: string, index: number): void;
        remove(item?: any): any;
        remove$int(position: number): void;
        private removeNoInvalidate(position);
        removeAll(): void;
        getSelectedItem(): string;
        getSelectedObjects(): any[];
        getSelectedIndex(): number;
        select$int(pos: number): void;
        select(str?: any): any;
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processItemEvent(e: java.awt.event.ItemEvent): void;
        paramString(): string;
    }
}
declare namespace java.awt {
    abstract class Container extends java.awt.Component {
        layoutMgr: java.awt.LayoutManager;
        components: java.awt.Component[];
        getLayout(): java.awt.LayoutManager;
        setLayout(mgr: java.awt.LayoutManager): void;
        doLayout(): void;
        layout(): void;
        add$java_awt_Component(component: java.awt.Component): java.awt.Component;
        add(name?: any, component?: any): any;
        doPaintInternal(): void;
        constructor();
    }
}
declare namespace java.awt {
    class Label extends java.awt.Component {
        static LEFT: number;
        static CENTER: number;
        static RIGHT: number;
        text: string;
        alignment: number;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor(text?: string, alignment?: number);
        /**
         * Construct a name for this component. Called by getName() when the name is
         * <code>null</code>.
         */
        constructComponentName(): string;
        getAlignment(): number;
        setAlignment(alignment: number): void;
        getText(): string;
        setText(text: string): void;
        paramString(): string;
        getHTMLElement(): HTMLLabelElement;
        createHTML(): void;
        initHTML(): void;
    }
}
declare namespace java.awt {
    class TextField extends java.awt.Component {
        actionListener: java.awt.event.ActionListener;
        constructor(cols: number);
        getHTMLElement(): HTMLInputElement;
        createHTML(): void;
        initHTML(): void;
        private initActionListener();
        addActionListener(actionListener: java.awt.event.ActionListener): void;
        setText(text: string): void;
        getText(): string;
    }
}
declare namespace java.awt.event {
    class ActionEvent extends java.awt.AWTEvent {
        static SHIFT_MASK: number;
        static SHIFT_MASK_$LI$(): number;
        static CTRL_MASK: number;
        static CTRL_MASK_$LI$(): number;
        static META_MASK: number;
        static META_MASK_$LI$(): number;
        static ALT_MASK: number;
        static ALT_MASK_$LI$(): number;
        static ACTION_FIRST: number;
        static ACTION_LAST: number;
        static ACTION_PERFORMED: number;
        static ACTION_PERFORMED_$LI$(): number;
        actionCommand: string;
        when: number;
        modifiers: number;
        static serialVersionUID: number;
        constructor(source?: any, id?: any, command?: any, when?: any, modifiers?: any);
        getActionCommand(): string;
        getWhen(): number;
        getModifiers(): number;
        paramString(): string;
    }
}
declare namespace java.awt {
    /**
     * The <code>Dimension</code> class encapsulates the width and
     * height of a component (in integer precision) in a single object.
     * The class is
     * associated with certain properties of components. Several methods
     * defined by the <code>Component</code> class and the
     * <code>LayoutManager</code> interface return a
     * <code>Dimension</code> object.
     * <p>
     * Normally the values of <code>width</code>
     * and <code>height</code> are non-negative integers.
     * The constructors that allow you to create a dimension do
     * not prevent you from setting a negative value for these properties.
     * If the value of <code>width</code> or <code>height</code> is
     * negative, the behavior of some methods defined by other objects is
     * undefined.
     *
     * @author      Sami Shaio
     * @author      Arthur van Hoff
     * @see         java.awt.Component
     * @see         java.awt.LayoutManager
     * @since       1.0
     */
    class Dimension extends java.awt.geom.Dimension2D implements java.io.Serializable {
        /**
         * The width dimension; negative values can be used.
         *
         * @serial
         * @see #getSize
         * @see #setSize
         * @since 1.0
         */
        width: number;
        /**
         * The height dimension; negative values can be used.
         *
         * @serial
         * @see #getSize
         * @see #setSize
         * @since 1.0
         */
        height: number;
        static serialVersionUID: number;
        /**
         * Constructs a <code>Dimension</code> and initializes
         * it to the specified width and specified height.
         *
         * @param width the specified width
         * @param height the specified height
         */
        constructor(width?: any, height?: any);
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        getWidth(): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        getHeight(): number;
        /**
         * Sets the size of this <code>Dimension</code> object to
         * the specified width and height in double precision.
         * Note that if <code>width</code> or <code>height</code>
         * are larger than <code>Integer.MAX_VALUE</code>, they will
         * be reset to <code>Integer.MAX_VALUE</code>.
         *
         * @param width  the new width for the <code>Dimension</code> object
         * @param height the new height for the <code>Dimension</code> object
         * @since 1.2
         */
        setSize$double$double(width: number, height: number): void;
        /**
         * Gets the size of this <code>Dimension</code> object.
         * This method is included for completeness, to parallel the
         * <code>getSize</code> method defined by <code>Component</code>.
         *
         * @return   the size of this dimension, a new instance of
         * <code>Dimension</code> with the same width and height
         * @see      java.awt.Dimension#setSize
         * @see      java.awt.Component#getSize
         * @since    1.1
         */
        getSize(): Dimension;
        /**
         * Sets the size of this <code>Dimension</code> object to the specified size.
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method defined by <code>Component</code>.
         * @param    d  the new size for this <code>Dimension</code> object
         * @see      java.awt.Dimension#getSize
         * @see      java.awt.Component#setSize
         * @since    1.1
         */
        setSize$java_awt_Dimension(d: Dimension): void;
        /**
         * Sets the size of this <code>Dimension</code> object
         * to the specified width and height.
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method defined by <code>Component</code>.
         *
         * @param    width   the new width for this <code>Dimension</code> object
         * @param    height  the new height for this <code>Dimension</code> object
         * @see      java.awt.Dimension#getSize
         * @see      java.awt.Component#setSize
         * @since    1.1
         */
        setSize(width?: any, height?: any): any;
        /**
         * Checks whether two dimension objects have equal values.
         */
        equals(obj: any): boolean;
        /**
         * Returns the hash code for this <code>Dimension</code>.
         *
         * @return    a hash code for this <code>Dimension</code>
         */
        hashCode(): number;
        /**
         * Returns a string representation of the values of this
         * <code>Dimension</code> object's <code>height</code> and
         * <code>width</code> fields. This method is intended to be used only
         * for debugging purposes, and the content and format of the returned
         * string may vary between implementations. The returned string may be
         * empty but may not be <code>null</code>.
         *
         * @return  a string representation of this <code>Dimension</code>
         * object
         */
        toString(): string;
    }
}
declare namespace java.awt.geom {
    /**
     * The {@code Path2D} class provides a simple, yet flexible shape which
     * represents an arbitrary geometric path. It can fully represent any path which
     * can be iterated by the {@link PathIterator} interface including all of its
     * segment types and winding rules and it implements all of the basic hit
     * testing methods of the {@link Shape} interface.
     * <p>
     * Use {@link Path2D.Float} when dealing with data that can be represented and
     * used with floating point precision. Use {@link Path2D.Double} for data that
     * requires the accuracy or range of double precision.
     * <p>
     * {@code Path2D} provides exactly those facilities required for basic
     * construction and management of a geometric path and implementation of the
     * above interfaces with little added interpretation. If it is useful to
     * manipulate the interiors of closed geometric shapes beyond simple hit testing
     * then the {@link Area} class provides additional capabilities specifically
     * targeted at closed figures. While both classes nominally implement the
     * {@code Shape} interface, they differ in purpose and together they provide two
     * useful views of a geometric shape where {@code Path2D} deals primarily with a
     * trajectory formed by path segments and {@code Area} deals more with
     * interpretation and manipulation of enclosed regions of 2D geometric space.
     * <p>
     * The {@link PathIterator} interface has more detailed descriptions of the
     * types of segments that make up a path and the winding rules that control how
     * to determine which regions are inside or outside the path.
     *
     * @author Jim Graham
     * @since 1.6
     */
    abstract class Path2D implements java.awt.Shape, java.lang.Cloneable {
        abstract getBounds2D(): any;
        /**
         * An even-odd winding rule for determining the interior of a path.
         *
         * @see PathIterator#WIND_EVEN_ODD
         * @since 1.6
         */
        static WIND_EVEN_ODD: number;
        static WIND_EVEN_ODD_$LI$(): number;
        /**
         * A non-zero winding rule for determining the interior of a path.
         *
         * @see PathIterator#WIND_NON_ZERO
         * @since 1.6
         */
        static WIND_NON_ZERO: number;
        static WIND_NON_ZERO_$LI$(): number;
        static SEG_MOVETO: number;
        static SEG_MOVETO_$LI$(): number;
        static SEG_LINETO: number;
        static SEG_LINETO_$LI$(): number;
        static SEG_QUADTO: number;
        static SEG_QUADTO_$LI$(): number;
        static SEG_CUBICTO: number;
        static SEG_CUBICTO_$LI$(): number;
        static SEG_CLOSE: number;
        static SEG_CLOSE_$LI$(): number;
        pointTypes: number[];
        numTypes: number;
        numCoords: number;
        windingRule: number;
        static INIT_SIZE: number;
        static EXPAND_MAX: number;
        /**
         * Constructs a new {@code Path2D} object from the given specified initial
         * values. This method is only intended for internal use and should not be
         * made public if the other constructors for this class are ever exposed.
         *
         * @param rule
         * the winding rule
         * @param initialTypes
         * the size to make the initial array to store the path segment
         * types
         * @since 1.6
         */
        constructor(rule?: any, initialTypes?: any);
        abstract cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
        abstract cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
        append$float$float(x: number, y: number): void;
        append$double$double(x: number, y: number): void;
        abstract getPoint(coordindex: number): java.awt.geom.Point2D;
        abstract needRoom(needMove: boolean, newCoords: number): any;
        abstract pointCrossings(px: number, py: number): number;
        abstract rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
        /**
         * Adds a point to the path by moving to the specified coordinates
         * specified in float precision.
         * <p>
         * This method provides a single precision variant of the double
         * precision {@code moveTo()} method on the base {@code Path2D} class.
         *
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @see Path2D#moveTo
         * @since 1.6
         */
        moveTo(x?: any, y?: any): any;
        /**
         * Adds a point to the path by moving to the specified coordinates specified
         * in double precision.
         *
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @since 1.6
         */
        moveTo$double$double(x: number, y: number): void;
        /**
         * Adds a point to the path by drawing a straight line from the current
         * coordinates to the new specified coordinates specified in float
         * precision.
         * <p>
         * This method provides a single precision variant of the double
         * precision {@code lineTo()} method on the base {@code Path2D} class.
         *
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @see Path2D#lineTo
         * @since 1.6
         */
        lineTo(x?: any, y?: any): any;
        /**
         * Adds a point to the path by drawing a straight line from the current
         * coordinates to the new specified coordinates specified in double
         * precision.
         *
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @since 1.6
         */
        lineTo$double$double(x: number, y: number): void;
        /**
         * Adds a curved segment, defined by two new points, to the path by
         * drawing a Quadratic curve that intersects both the current
         * coordinates and the specified coordinates {@code (x2,y2)}, using the
         * specified point {@code (x1,y1)} as a quadratic parametric control
         * point. All coordinates are specified in float precision.
         * <p>
         * This method provides a single precision variant of the double
         * precision {@code quadTo()} method on the base {@code Path2D} class.
         *
         * @param x1
         * the X coordinate of the quadratic control point
         * @param y1
         * the Y coordinate of the quadratic control point
         * @param x2
         * the X coordinate of the final end point
         * @param y2
         * the Y coordinate of the final end point
         * @see Path2D#quadTo
         * @since 1.6
         */
        quadTo(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Adds a curved segment, defined by two new points, to the path by drawing
         * a Quadratic curve that intersects both the current coordinates and the
         * specified coordinates {@code (x2,y2)}, using the specified point
         * {@code (x1,y1)} as a quadratic parametric control point. All coordinates
         * are specified in double precision.
         *
         * @param x1
         * the X coordinate of the quadratic control point
         * @param y1
         * the Y coordinate of the quadratic control point
         * @param x2
         * the X coordinate of the final end point
         * @param y2
         * the Y coordinate of the final end point
         * @since 1.6
         */
        quadTo$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Adds a curved segment, defined by three new points, to the path by
         * drawing a B&eacute;zier curve that intersects both the current
         * coordinates and the specified coordinates {@code (x3,y3)}, using the
         * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
         * control points. All coordinates are specified in float precision.
         * <p>
         * This method provides a single precision variant of the double
         * precision {@code curveTo()} method on the base {@code Path2D} class.
         *
         * @param x1
         * the X coordinate of the first B&eacute;zier control point
         * @param y1
         * the Y coordinate of the first B&eacute;zier control point
         * @param x2
         * the X coordinate of the second B&eacute;zier control point
         * @param y2
         * the Y coordinate of the second B&eacute;zier control point
         * @param x3
         * the X coordinate of the final end point
         * @param y3
         * the Y coordinate of the final end point
         * @see Path2D#curveTo
         * @since 1.6
         */
        curveTo(x1?: any, y1?: any, x2?: any, y2?: any, x3?: any, y3?: any): any;
        /**
         * Adds a curved segment, defined by three new points, to the path by
         * drawing a B&eacute;zier curve that intersects both the current
         * coordinates and the specified coordinates {@code (x3,y3)}, using the
         * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
         * control points. All coordinates are specified in double precision.
         *
         * @param x1
         * the X coordinate of the first B&eacute;zier control point
         * @param y1
         * the Y coordinate of the first B&eacute;zier control point
         * @param x2
         * the X coordinate of the second B&eacute;zier control point
         * @param y2
         * the Y coordinate of the second B&eacute;zier control point
         * @param x3
         * the X coordinate of the final end point
         * @param y3
         * the Y coordinate of the final end point
         * @since 1.6
         */
        curveTo$double$double$double$double$double$double(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        /**
         * Closes the current subpath by drawing a straight line back to the
         * coordinates of the last {@code moveTo}. If the path is already closed
         * then this method has no effect.
         *
         * @since 1.6
         */
        closePath(): void;
        /**
         * Appends the geometry of the specified {@code Shape} object to the path,
         * possibly connecting the new geometry to the existing path segments with a
         * line segment. If the {@code connect} parameter is {@code true} and the
         * path is not empty then any initial {@code moveTo} in the geometry of the
         * appended {@code Shape} is turned into a {@code lineTo} segment. If the
         * destination coordinates of such a connecting {@code lineTo} segment match
         * the ending coordinates of a currently open subpath then the segment is
         * omitted as superfluous. The winding rule of the specified {@code Shape}
         * is ignored and the appended geometry is governed by the winding rule
         * specified for this path.
         *
         * @param s
         * the {@code Shape} whose geometry is appended to this path
         * @param connect
         * a boolean to control whether or not to turn an initial
         * {@code moveTo} segment into a {@code lineTo} segment to
         * connect the new geometry to the existing path
         * @since 1.6
         */
        append(s?: any, connect?: any): any;
        /**
         * Appends the geometry of the specified {@link PathIterator} object to the
         * path, possibly connecting the new geometry to the existing path segments
         * with a line segment. If the {@code connect} parameter is {@code true} and
         * the path is not empty then any initial {@code moveTo} in the geometry of
         * the appended {@code Shape} is turned into a {@code lineTo} segment. If
         * the destination coordinates of such a connecting {@code lineTo} segment
         * match the ending coordinates of a currently open subpath then the segment
         * is omitted as superfluous. The winding rule of the specified
         * {@code Shape} is ignored and the appended geometry is governed by the
         * winding rule specified for this path.
         *
         * @param pi
         * the {@code PathIterator} whose geometry is appended to this
         * path
         * @param connect
         * a boolean to control whether or not to turn an initial
         * {@code moveTo} segment into a {@code lineTo} segment to
         * connect the new geometry to the existing path
         * @since 1.6
         */
        append$java_awt_geom_PathIterator$boolean(pi: java.awt.geom.PathIterator, connect: boolean): void;
        /**
         * Returns the fill style winding rule.
         *
         * @return an integer representing the current winding rule.
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @see #setWindingRule
         * @since 1.6
         */
        getWindingRule(): number;
        /**
         * Sets the winding rule for this path to the specified value.
         *
         * @param rule
         * an integer representing the specified winding rule
         * @exception IllegalArgumentException
         * if {@code rule} is not either {@link #WIND_EVEN_ODD} or
         * {@link #WIND_NON_ZERO}
         * @see #getWindingRule
         * @since 1.6
         */
        setWindingRule(rule: number): void;
        /**
         * Returns the coordinates most recently added to the end of the path as a
         * {@link Point2D} object.
         *
         * @return a {@code Point2D} object containing the ending coordinates of the
         * path or {@code null} if there are no points in the path.
         * @since 1.6
         */
        getCurrentPoint(): java.awt.geom.Point2D;
        /**
         * Resets the path to empty. The append position is set back to the
         * beginning of the path and all coordinates and point types are forgotten.
         *
         * @since 1.6
         */
        reset(): void;
        /**
         * Transforms the geometry of this path using the specified
         * {@link AffineTransform}. The geometry is transformed in place, which
         * permanently changes the boundary defined by this object.
         *
         * @param at
         * the {@code AffineTransform} used to transform the area
         * @since 1.6
         */
        abstract transform(at: java.awt.geom.AffineTransform): any;
        /**
         * Returns a new {@code Shape} representing a transformed version of this
         * {@code Path2D}. Note that the exact type and coordinate precision of the
         * return value is not specified for this method. The method will return a
         * Shape that contains no less precision for the transformed geometry than
         * this {@code Path2D} currently maintains, but it may contain no more
         * precision either. If the tradeoff of precision vs. storage size in the
         * result is important then the convenience constructors in the
         * {@link Path2D.Float#Path2D.Float(Shape, AffineTransform) Path2D.Float}
         * and {@link Path2D.Double#Path2D.Double(Shape, AffineTransform)
         * Path2D.Double} subclasses should be used to make the choice explicit.
         *
         * @param at
         * the {@code AffineTransform} used to transform a new
         * {@code Shape}.
         * @return a new {@code Shape}, transformed with the specified
         * {@code AffineTransform}.
         * @since 1.6
         */
        createTransformedShape(at: java.awt.geom.AffineTransform): java.awt.Shape;
        /**
         * {@inheritDoc}
         *
         * @since 1.6
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Tests if the specified coordinates are inside the closed boundary of the
         * specified {@link PathIterator}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#contains(double, double)} method.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @return {@code true} if the specified coordinates are inside the
         * specified {@code PathIterator}; {@code false} otherwise
         * @since 1.6
         */
        static contains$java_awt_geom_PathIterator$double$double(pi: java.awt.geom.PathIterator, x: number, y: number): boolean;
        /**
         * Tests if the specified {@link Point2D} is inside the closed boundary of
         * the specified {@link PathIterator}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#contains(Point2D)} method.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param p
         * the specified {@code Point2D}
         * @return {@code true} if the specified coordinates are inside the
         * specified {@code PathIterator}; {@code false} otherwise
         * @since 1.6
         */
        static contains$java_awt_geom_PathIterator$java_awt_geom_Point2D(pi: java.awt.geom.PathIterator, p: java.awt.geom.Point2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.6
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.6
         */
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * Tests if the specified rectangular area is entirely inside the closed
         * boundary of the specified {@link PathIterator}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#contains(double, double, double, double)} method.
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @param w
         * the width of the specified rectangular area
         * @param h
         * the height of the specified rectangular area
         * @return {@code true} if the specified {@code PathIterator} contains the
         * specified rectangular area; {@code false} otherwise.
         * @since 1.6
         */
        static contains(pi?: any, x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Tests if the specified {@link Rectangle2D} is entirely inside the closed
         * boundary of the specified {@link PathIterator}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#contains(Rectangle2D)} method.
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param r
         * a specified {@code Rectangle2D}
         * @return {@code true} if the specified {@code PathIterator} contains the
         * specified {@code Rectangle2D}; {@code false} otherwise.
         * @since 1.6
         */
        static contains$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @since 1.6
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @since 1.6
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * Tests if the interior of the specified {@link PathIterator} intersects
         * the interior of a specified set of rectangular coordinates.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#intersects(double, double, double, double)} method.
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @param w
         * the width of the specified rectangular coordinates
         * @param h
         * the height of the specified rectangular coordinates
         * @return {@code true} if the specified {@code PathIterator} and the
         * interior of the specified set of rectangular coordinates
         * intersect each other; {@code false} otherwise.
         * @since 1.6
         */
        static intersects(pi?: any, x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Tests if the interior of the specified {@link PathIterator} intersects
         * the interior of a specified {@link Rectangle2D}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#intersects(Rectangle2D)} method.
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @param pi
         * the specified {@code PathIterator}
         * @param r
         * the specified {@code Rectangle2D}
         * @return {@code true} if the specified {@code PathIterator} and the
         * interior of the specified {@code Rectangle2D} intersect each
         * other; {@code false} otherwise.
         * @since 1.6
         */
        static intersects$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @since 1.6
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @since 1.6
         */
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         * <p>
         * The iterator for this class is not multi-threaded safe, which means that
         * this {@code Path2D} class does not guarantee that modifications to the
         * geometry of this {@code Path2D} object do not affect any iterations of
         * that geometry that are already in process.
         *
         * @since 1.6
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.6
         */
        abstract clone(): any;
    }
    namespace Path2D {
        abstract class Iterator implements java.awt.geom.PathIterator {
            abstract currentSegment(coords: any): any;
            abstract currentSegment(coords: any): any;
            typeIdx: number;
            pointIdx: number;
            path: java.awt.geom.Path2D;
            static curvecoords: number[];
            static curvecoords_$LI$(): number[];
            constructor(path: java.awt.geom.Path2D);
            getWindingRule(): number;
            isDone(): boolean;
            next(doNext?: any): any;
            next$(): void;
        }
        /**
         * The {@code Float} class defines a geometric path with coordinates stored
         * in single precision floating point.
         *
         * @since 1.6
         */
        class Float extends java.awt.geom.Path2D implements java.io.Serializable {
            floatCoords: number[];
            /**
             * Constructs a new single precision {@code Path2D} object from an
             * arbitrary {@link Shape} object, transformed by an
             * {@link AffineTransform} object. All of the initial geometry and the
             * winding rule for this path are taken from the specified {@code Shape}
             * object and transformed by the specified {@code AffineTransform}
             * object.
             *
             * @param s
             * the specified {@code Shape} object
             * @param at
             * the specified {@code AffineTransform} object
             * @since 1.6
             */
            constructor(s?: any, at?: any);
            cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
            cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
            append$float$float(x: number, y: number): void;
            append$double$double(x: number, y: number): void;
            getPoint(coordindex: number): java.awt.geom.Point2D;
            needRoom(needMove: boolean, newCoords: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            moveTo$double$double(x: number, y: number): void;
            /**
             * Adds a point to the path by moving to the specified coordinates
             * specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code moveTo()} method on the base {@code Path2D} class.
             *
             * @param x
             * the specified X coordinate
             * @param y
             * the specified Y coordinate
             * @see Path2D#moveTo
             * @since 1.6
             */
            moveTo(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            lineTo$double$double(x: number, y: number): void;
            /**
             * Adds a point to the path by drawing a straight line from the current
             * coordinates to the new specified coordinates specified in float
             * precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code lineTo()} method on the base {@code Path2D} class.
             *
             * @param x
             * the specified X coordinate
             * @param y
             * the specified Y coordinate
             * @see Path2D#lineTo
             * @since 1.6
             */
            lineTo(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            quadTo$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Adds a curved segment, defined by two new points, to the path by
             * drawing a Quadratic curve that intersects both the current
             * coordinates and the specified coordinates {@code (x2,y2)}, using the
             * specified point {@code (x1,y1)} as a quadratic parametric control
             * point. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code quadTo()} method on the base {@code Path2D} class.
             *
             * @param x1
             * the X coordinate of the quadratic control point
             * @param y1
             * the Y coordinate of the quadratic control point
             * @param x2
             * the X coordinate of the final end point
             * @param y2
             * the Y coordinate of the final end point
             * @see Path2D#quadTo
             * @since 1.6
             */
            quadTo(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            curveTo$double$double$double$double$double$double(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            /**
             * Adds a curved segment, defined by three new points, to the path by
             * drawing a B&eacute;zier curve that intersects both the current
             * coordinates and the specified coordinates {@code (x3,y3)}, using the
             * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
             * control points. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code curveTo()} method on the base {@code Path2D} class.
             *
             * @param x1
             * the X coordinate of the first B&eacute;zier control point
             * @param y1
             * the Y coordinate of the first B&eacute;zier control point
             * @param x2
             * the X coordinate of the second B&eacute;zier control point
             * @param y2
             * the Y coordinate of the second B&eacute;zier control point
             * @param x3
             * the X coordinate of the final end point
             * @param y3
             * the Y coordinate of the final end point
             * @see Path2D#curveTo
             * @since 1.6
             */
            curveTo(x1?: any, y1?: any, x2?: any, y2?: any, x3?: any, y3?: any): any;
            pointCrossings(px: number, py: number): number;
            rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            append(pi?: any, connect?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            transform(at: java.awt.geom.AffineTransform): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             * <p>
             * The iterator for this class is not multi-threaded safe, which means
             * that the {@code Path2D} class does not guarantee that modifications
             * to the geometry of this {@code Path2D} object do not affect any
             * iterations of that geometry that are already in process.
             *
             * @since 1.6
             */
            getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Creates a new object of the same class as this object.
             *
             * @return a clone of this instance.
             * @exception OutOfMemoryError
             * if there is not enough memory.
             * @see java.lang.Cloneable
             * @since 1.6
             */
            clone(): any;
            static serialVersionUID: number;
        }
        namespace Float {
            class CopyIterator extends java.awt.geom.Path2D.Iterator {
                floatCoords: number[];
                constructor(p2df: java.awt.geom.Path2D.Float);
                currentSegment(coords?: any): any;
                currentSegment$double_A(coords: number[]): number;
            }
            class TxIterator extends java.awt.geom.Path2D.Iterator {
                floatCoords: number[];
                affine: java.awt.geom.AffineTransform;
                constructor(p2df: java.awt.geom.Path2D.Float, at: java.awt.geom.AffineTransform);
                currentSegment(coords?: any): any;
                currentSegment$double_A(coords: number[]): number;
            }
        }
        /**
         * The {@code Double} class defines a geometric path with coordinates stored
         * in double precision floating point.
         *
         * @since 1.6
         */
        class Double extends java.awt.geom.Path2D implements java.io.Serializable {
            doubleCoords: number[];
            /**
             * Constructs a new double precision {@code Path2D} object from an
             * arbitrary {@link Shape} object, transformed by an
             * {@link AffineTransform} object. All of the initial geometry and the
             * winding rule for this path are taken from the specified {@code Shape}
             * object and transformed by the specified {@code AffineTransform}
             * object.
             *
             * @param s
             * the specified {@code Shape} object
             * @param at
             * the specified {@code AffineTransform} object
             * @since 1.6
             */
            constructor(s?: any, at?: any);
            cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
            cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
            append$float$float(x: number, y: number): void;
            append$double$double(x: number, y: number): void;
            getPoint(coordindex: number): java.awt.geom.Point2D;
            needRoom(needMove: boolean, newCoords: number): void;
            /**
             * Adds a point to the path by moving to the specified coordinates
             * specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code moveTo()} method on the base {@code Path2D} class.
             *
             * @param x
             * the specified X coordinate
             * @param y
             * the specified Y coordinate
             * @see Path2D#moveTo
             * @since 1.6
             */
            moveTo(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            moveTo$double$double(x: number, y: number): void;
            /**
             * Adds a point to the path by drawing a straight line from the current
             * coordinates to the new specified coordinates specified in float
             * precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code lineTo()} method on the base {@code Path2D} class.
             *
             * @param x
             * the specified X coordinate
             * @param y
             * the specified Y coordinate
             * @see Path2D#lineTo
             * @since 1.6
             */
            lineTo(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            lineTo$double$double(x: number, y: number): void;
            /**
             * Adds a curved segment, defined by two new points, to the path by
             * drawing a Quadratic curve that intersects both the current
             * coordinates and the specified coordinates {@code (x2,y2)}, using the
             * specified point {@code (x1,y1)} as a quadratic parametric control
             * point. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code quadTo()} method on the base {@code Path2D} class.
             *
             * @param x1
             * the X coordinate of the quadratic control point
             * @param y1
             * the Y coordinate of the quadratic control point
             * @param x2
             * the X coordinate of the final end point
             * @param y2
             * the Y coordinate of the final end point
             * @see Path2D#quadTo
             * @since 1.6
             */
            quadTo(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            quadTo$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Adds a curved segment, defined by three new points, to the path by
             * drawing a B&eacute;zier curve that intersects both the current
             * coordinates and the specified coordinates {@code (x3,y3)}, using the
             * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
             * control points. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code curveTo()} method on the base {@code Path2D} class.
             *
             * @param x1
             * the X coordinate of the first B&eacute;zier control point
             * @param y1
             * the Y coordinate of the first B&eacute;zier control point
             * @param x2
             * the X coordinate of the second B&eacute;zier control point
             * @param y2
             * the Y coordinate of the second B&eacute;zier control point
             * @param x3
             * the X coordinate of the final end point
             * @param y3
             * the Y coordinate of the final end point
             * @see Path2D#curveTo
             * @since 1.6
             */
            curveTo(x1?: any, y1?: any, x2?: any, y2?: any, x3?: any, y3?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            curveTo$double$double$double$double$double$double(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            pointCrossings(px: number, py: number): number;
            rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            append(pi?: any, connect?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            transform(at: java.awt.geom.AffineTransform): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             * <p>
             * The iterator for this class is not multi-threaded safe, which means
             * that the {@code Path2D} class does not guarantee that modifications
             * to the geometry of this {@code Path2D} object do not affect any
             * iterations of that geometry that are already in process.
             *
             * @param at
             * an {@code AffineTransform}
             * @return a new {@code PathIterator} that iterates along the boundary
             * of this {@code Shape} and provides access to the geometry of
             * this {@code Shape}'s outline
             * @since 1.6
             */
            getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Creates a new object of the same class as this object.
             *
             * @return a clone of this instance.
             * @exception OutOfMemoryError
             * if there is not enough memory.
             * @see java.lang.Cloneable
             * @since 1.6
             */
            clone(): any;
            static serialVersionUID: number;
        }
        namespace Double {
            class CopyIterator extends java.awt.geom.Path2D.Iterator {
                doubleCoords: number[];
                constructor(p2dd: java.awt.geom.Path2D.Double);
                currentSegment(coords?: any): any;
                currentSegment$double_A(coords: number[]): number;
            }
            class TxIterator extends java.awt.geom.Path2D.Iterator {
                doubleCoords: number[];
                affine: java.awt.geom.AffineTransform;
                constructor(p2dd: java.awt.geom.Path2D.Double, at: java.awt.geom.AffineTransform);
                currentSegment(coords?: any): any;
                currentSegment$double_A(coords: number[]): number;
            }
        }
    }
}
declare namespace java.awt {
    /**
     * A point representing a location in {@code (x,y)} coordinate space,
     * specified in integer precision.
     *
     * @author      Sami Shaio
     * @since       1.0
     */
    class Point extends java.awt.geom.Point2D implements java.io.Serializable {
        /**
         * The X coordinate of this <code>Point</code>.
         * If no X coordinate is set it will default to 0.
         *
         * @serial
         * @see #getLocation()
         * @see #move(int, int)
         * @since 1.0
         */
        x: number;
        /**
         * The Y coordinate of this <code>Point</code>.
         * If no Y coordinate is set it will default to 0.
         *
         * @serial
         * @see #getLocation()
         * @see #move(int, int)
         * @since 1.0
         */
        y: number;
        static serialVersionUID: number;
        /**
         * Constructs and initializes a point at the specified
         * {@code (x,y)} location in the coordinate space.
         * @param x the X coordinate of the newly constructed <code>Point</code>
         * @param y the Y coordinate of the newly constructed <code>Point</code>
         * @since 1.0
         */
        constructor(x?: any, y?: any);
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        getX(): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        getY(): number;
        /**
         * Returns the location of this point.
         * This method is included for completeness, to parallel the
         * <code>getLocation</code> method of <code>Component</code>.
         * @return      a copy of this point, at the same location
         * @see         java.awt.Component#getLocation
         * @see         java.awt.Point#setLocation(java.awt.Point)
         * @see         java.awt.Point#setLocation(int, int)
         * @since       1.1
         */
        getLocation(): Point;
        /**
         * Sets the location of the point to the specified location.
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * @param       p  a point, the new location for this point
         * @see         java.awt.Component#setLocation(java.awt.Point)
         * @see         java.awt.Point#getLocation
         * @since       1.1
         */
        setLocation$java_awt_Point(p: Point): void;
        /**
         * Changes the point to have the specified location.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * Its behavior is identical with <code>move(int,&nbsp;int)</code>.
         * @param       x the X coordinate of the new location
         * @param       y the Y coordinate of the new location
         * @see         java.awt.Component#setLocation(int, int)
         * @see         java.awt.Point#getLocation
         * @see         java.awt.Point#move(int, int)
         * @since       1.1
         */
        setLocation(x?: any, y?: any): any;
        /**
         * Sets the location of this point to the specified double coordinates.
         * The double values will be rounded to integer values.
         * Any number smaller than <code>Integer.MIN_VALUE</code>
         * will be reset to <code>MIN_VALUE</code>, and any number
         * larger than <code>Integer.MAX_VALUE</code> will be
         * reset to <code>MAX_VALUE</code>.
         *
         * @param x the X coordinate of the new location
         * @param y the Y coordinate of the new location
         * @see #getLocation
         */
        setLocation$double$double(x: number, y: number): void;
        /**
         * Moves this point to the specified location in the
         * {@code (x,y)} coordinate plane. This method
         * is identical with <code>setLocation(int,&nbsp;int)</code>.
         * @param       x the X coordinate of the new location
         * @param       y the Y coordinate of the new location
         * @see         java.awt.Component#setLocation(int, int)
         */
        move(x: number, y: number): void;
        /**
         * Translates this point, at location {@code (x,y)},
         * by {@code dx} along the {@code x} axis and {@code dy}
         * along the {@code y} axis so that it now represents the point
         * {@code (x+dx,y+dy)}.
         *
         * @param       dx   the distance to move this point
         * along the X axis
         * @param       dy    the distance to move this point
         * along the Y axis
         */
        translate(dx: number, dy: number): void;
        /**
         * Determines whether or not two points are equal. Two instances of
         * <code>Point2D</code> are equal if the values of their
         * <code>x</code> and <code>y</code> member fields, representing
         * their position in the coordinate space, are the same.
         * @param obj an object to be compared with this <code>Point2D</code>
         * @return <code>true</code> if the object to be compared is
         * an instance of <code>Point2D</code> and has
         * the same values; <code>false</code> otherwise.
         */
        equals(obj: any): boolean;
        /**
         * Returns a string representation of this point and its location
         * in the {@code (x,y)} coordinate space. This method is
         * intended to be used only for debugging purposes, and the content
         * and format of the returned string may vary between implementations.
         * The returned string may be empty but may not be <code>null</code>.
         *
         * @return  a string representation of this point
         */
        toString(): string;
    }
}
declare namespace java.awt.geom {
    /**
     * <CODE>Arc2D</CODE> is the abstract superclass for all objects that
     * store a 2D arc defined by a framing rectangle,
     * start angle, angular extent (length of the arc), and a closure type
     * (<CODE>OPEN</CODE>, <CODE>CHORD</CODE>, or <CODE>PIE</CODE>).
     * <p>
     * <a name="inscribes">
     * The arc is a partial section of a full ellipse which
     * inscribes the framing rectangle of its parent {@link RectangularShape}.
     * </a>
     * <a name="angles">
     * The angles are specified relative to the non-square
     * framing rectangle such that 45 degrees always falls on the line from
     * the center of the ellipse to the upper right corner of the framing
     * rectangle.
     * As a result, if the framing rectangle is noticeably longer along one
     * axis than the other, the angles to the start and end of the arc segment
     * will be skewed farther along the longer axis of the frame.
     * </a>
     * <p>
     * The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author      Jim Graham
     * @since 1.2
     */
    abstract class Arc2D extends java.awt.geom.RectangularShape {
        /**
         * The closure type for an open arc with no path segments
         * connecting the two ends of the arc segment.
         * @since 1.2
         */
        static OPEN: number;
        /**
         * The closure type for an arc closed by drawing a straight
         * line segment from the start of the arc segment to the end of the
         * arc segment.
         * @since 1.2
         */
        static CHORD: number;
        /**
         * The closure type for an arc closed by drawing straight line
         * segments from the start of the arc segment to the center
         * of the full ellipse and from that point to the end of the arc segment.
         * @since 1.2
         */
        static PIE: number;
        private type;
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for
         * instantiation and provide a number of formats for storing
         * the information necessary to satisfy the various accessor
         * methods below.
         *
         * @param type The closure type of this arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @see java.awt.geom.Arc2D.Float
         * @see java.awt.geom.Arc2D.Double
         * @since 1.2
         */
        constructor(type?: number);
        /**
         * Returns the starting angle of the arc.
         *
         * @return A double value that represents the starting angle
         * of the arc in degrees.
         * @see #setAngleStart
         * @since 1.2
         */
        abstract getAngleStart(): number;
        /**
         * Returns the angular extent of the arc.
         *
         * @return A double value that represents the angular extent
         * of the arc in degrees.
         * @see #setAngleExtent
         * @since 1.2
         */
        abstract getAngleExtent(): number;
        /**
         * Returns the arc closure type of the arc: {@link #OPEN},
         * {@link #CHORD}, or {@link #PIE}.
         * @return One of the integer constant closure types defined
         * in this class.
         * @see #setArcType
         * @since 1.2
         */
        getArcType(): number;
        /**
         * Returns the starting point of the arc.  This point is the
         * intersection of the ray from the center defined by the
         * starting angle and the elliptical boundary of the arc.
         *
         * @return A <CODE>Point2D</CODE> object representing the
         * x,y coordinates of the starting point of the arc.
         * @since 1.2
         */
        getStartPoint(): java.awt.geom.Point2D;
        /**
         * Returns the ending point of the arc.  This point is the
         * intersection of the ray from the center defined by the
         * starting angle plus the angular extent of the arc and the
         * elliptical boundary of the arc.
         *
         * @return A <CODE>Point2D</CODE> object representing the
         * x,y coordinates  of the ending point of the arc.
         * @since 1.2
         */
        getEndPoint(): java.awt.geom.Point2D;
        /**
         * Sets the location, size, angular extents, and closure type of
         * this arc to the specified double values.
         *
         * @param x The X coordinate of the upper-left corner of the arc.
         * @param y The Y coordinate of the upper-left corner of the arc.
         * @param w The overall width of the full ellipse of which
         * this arc is a partial section.
         * @param h The overall height of the full ellipse of which
         * this arc is a partial section.
         * @param angSt The starting angle of the arc in degrees.
         * @param angExt The angular extent of the arc in degrees.
         * @param closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
        /**
         * Sets the location, size, angular extents, and closure type of
         * this arc to the specified values.
         *
         * @param loc The <CODE>Point2D</CODE> representing the coordinates of
         * the upper-left corner of the arc.
         * @param size The <CODE>Dimension2D</CODE> representing the width
         * and height of the full ellipse of which this arc is
         * a partial section.
         * @param angSt The starting angle of the arc in degrees.
         * @param angExt The angular extent of the arc in degrees.
         * @param closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArc$java_awt_geom_Point2D$java_awt_geom_Dimension2D$double$double$int(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D, angSt: number, angExt: number, closure: number): void;
        /**
         * Sets the location, size, angular extents, and closure type of
         * this arc to the specified values.
         *
         * @param rect The framing rectangle that defines the
         * outer boundary of the full ellipse of which this arc is a
         * partial section.
         * @param angSt The starting angle of the arc in degrees.
         * @param angExt The angular extent of the arc in degrees.
         * @param closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArc$java_awt_geom_Rectangle2D$double$double$int(rect: java.awt.geom.Rectangle2D, angSt: number, angExt: number, closure: number): void;
        /**
         * Sets this arc to be the same as the specified arc.
         *
         * @param a The <CODE>Arc2D</CODE> to use to set the arc's values.
         * @since 1.2
         */
        setArc$java_awt_geom_Arc2D(a: Arc2D): void;
        /**
         * Sets the position, bounds, angular extents, and closure type of
         * this arc to the specified values. The arc is defined by a center
         * point and a radius rather than a framing rectangle for the full ellipse.
         *
         * @param x The X coordinate of the center of the arc.
         * @param y The Y coordinate of the center of the arc.
         * @param radius The radius of the arc.
         * @param angSt The starting angle of the arc in degrees.
         * @param angExt The angular extent of the arc in degrees.
         * @param closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArcByCenter(x: number, y: number, radius: number, angSt: number, angExt: number, closure: number): void;
        /**
         * Sets the position, bounds, and angular extents of this arc to the
         * specified value. The starting angle of the arc is tangent to the
         * line specified by points (p1, p2), the ending angle is tangent to
         * the line specified by points (p2, p3), and the arc has the
         * specified radius.
         *
         * @param p1 The first point that defines the arc. The starting
         * angle of the arc is tangent to the line specified by points (p1, p2).
         * @param p2 The second point that defines the arc. The starting
         * angle of the arc is tangent to the line specified by points (p1, p2).
         * The ending angle of the arc is tangent to the line specified by
         * points (p2, p3).
         * @param p3 The third point that defines the arc. The ending angle
         * of the arc is tangent to the line specified by points (p2, p3).
         * @param radius The radius of the arc.
         * @since 1.2
         */
        setArcByTangent(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D, p3: java.awt.geom.Point2D, radius: number): void;
        /**
         * Sets the starting angle of this arc to the specified double
         * value.
         *
         * @param angSt The starting angle of the arc in degrees.
         * @see #getAngleStart
         * @since 1.2
         */
        setAngleStart$double(angSt: number): void;
        /**
         * Sets the angular extent of this arc to the specified double
         * value.
         *
         * @param angExt The angular extent of the arc in degrees.
         * @see #getAngleExtent
         * @since 1.2
         */
        abstract setAngleExtent(angExt: number): any;
        /**
         * Sets the starting angle of this arc to the angle that the
         * specified point defines relative to the center of this arc.
         * The angular extent of the arc will remain the same.
         *
         * @param p The <CODE>Point2D</CODE> that defines the starting angle.
         * @see #getAngleStart
         * @since 1.2
         */
        setAngleStart(p?: any): any;
        /**
         * Sets the starting angle and angular extent of this arc using two
         * sets of coordinates. The first set of coordinates is used to
         * determine the angle of the starting point relative to the arc's
         * center. The second set of coordinates is used to determine the
         * angle of the end point relative to the arc's center.
         * The arc will always be non-empty and extend counterclockwise
         * from the first point around to the second point.
         *
         * @param x1 The X coordinate of the arc's starting point.
         * @param y1 The Y coordinate of the arc's starting point.
         * @param x2 The X coordinate of the arc's ending point.
         * @param y2 The Y coordinate of the arc's ending point.
         * @since 1.2
         */
        setAngles(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Sets the starting angle and angular extent of this arc using
         * two points. The first point is used to determine the angle of
         * the starting point relative to the arc's center.
         * The second point is used to determine the angle of the end point
         * relative to the arc's center.
         * The arc will always be non-empty and extend counterclockwise
         * from the first point around to the second point.
         *
         * @param p1 The <CODE>Point2D</CODE> that defines the arc's
         * starting point.
         * @param p2 The <CODE>Point2D</CODE> that defines the arc's
         * ending point.
         * @since 1.2
         */
        setAngles$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the closure type of this arc to the specified value:
         * <CODE>OPEN</CODE>, <CODE>CHORD</CODE>, or <CODE>PIE</CODE>.
         *
         * @param type The integer constant that represents the closure
         * type of this arc: {@link #OPEN}, {@link #CHORD}, or
         * {@link #PIE}.
         *
         * @throws IllegalArgumentException if <code>type</code> is not
         * 0, 1, or 2.+
         * @see #getArcType
         * @since 1.2
         */
        setArcType(type: number): void;
        /**
         * {@inheritDoc}
         * Note that the arc
         * <a href="Arc2D.html#inscribes">partially inscribes</a>
         * the framing rectangle of this {@code RectangularShape}.
         *
         * @since 1.2
         */
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Returns the high-precision framing rectangle of the arc.  The framing
         * rectangle contains only the part of this <code>Arc2D</code> that is
         * in between the starting and ending angles and contains the pie
         * wedge, if this <code>Arc2D</code> has a <code>PIE</code> closure type.
         * <p>
         * This method differs from the
         * {@link RectangularShape#getBounds() getBounds} in that the
         * <code>getBounds</code> method only returns the bounds of the
         * enclosing ellipse of this <code>Arc2D</code> without considering
         * the starting and ending angles of this <code>Arc2D</code>.
         *
         * @return the <CODE>Rectangle2D</CODE> that represents the arc's
         * framing rectangle.
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Constructs a <code>Rectangle2D</code> of the appropriate precision
         * to hold the parameters calculated to be the framing rectangle
         * of this arc.
         *
         * @param x The X coordinate of the upper-left corner of the
         * framing rectangle.
         * @param y The Y coordinate of the upper-left corner of the
         * framing rectangle.
         * @param w The width of the framing rectangle.
         * @param h The height of the framing rectangle.
         * @return a <code>Rectangle2D</code> that is the framing rectangle
         * of this arc.
         * @since 1.2
         */
        abstract makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
        static normalizeDegrees(angle: number): number;
        /**
         * Determines whether or not the specified angle is within the
         * angular extents of the arc.
         *
         * @param angle The angle to test.
         *
         * @return <CODE>true</CODE> if the arc contains the angle,
         * <CODE>false</CODE> if the arc doesn't contain the angle.
         * @since 1.2
         */
        containsAngle(angle: number): boolean;
        /**
         * Determines whether or not the specified point is inside the boundary
         * of the arc.
         *
         * @param x The X coordinate of the point to test.
         * @param y The Y coordinate of the point to test.
         *
         * @return <CODE>true</CODE> if the point lies within the bound of
         * the arc, <CODE>false</CODE> if the point lies outside of the
         * arc's bounds.
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * Determines whether or not the interior of the arc intersects
         * the interior of the specified rectangle.
         *
         * @param x The X coordinate of the rectangle's upper-left corner.
         * @param y The Y coordinate of the rectangle's upper-left corner.
         * @param w The width of the rectangle.
         * @param h The height of the rectangle.
         *
         * @return <CODE>true</CODE> if the arc intersects the rectangle,
         * <CODE>false</CODE> if the arc doesn't intersect the rectangle.
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Determines whether or not the interior of the arc entirely contains
         * the specified rectangle.
         *
         * @param x The X coordinate of the rectangle's upper-left corner.
         * @param y The Y coordinate of the rectangle's upper-left corner.
         * @param w The width of the rectangle.
         * @param h The height of the rectangle.
         *
         * @return <CODE>true</CODE> if the arc contains the rectangle,
         * <CODE>false</CODE> if the arc doesn't contain the rectangle.
         * @since 1.2
         */
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Determines whether or not the interior of the arc entirely contains
         * the specified rectangle.
         *
         * @param r The <CODE>Rectangle2D</CODE> to test.
         *
         * @return <CODE>true</CODE> if the arc contains the rectangle,
         * <CODE>false</CODE> if the arc doesn't contain the rectangle.
         * @since 1.2
         */
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * Returns an iteration object that defines the boundary of the
         * arc.
         * This iterator is multithread safe.
         * <code>Arc2D</code> guarantees that
         * modifications to the geometry of the arc
         * do not affect any iterations of that geometry that
         * are already in process.
         *
         * @param at an optional <CODE>AffineTransform</CODE> to be applied
         * to the coordinates as they are returned in the iteration, or null
         * if the untransformed coordinates are desired.
         *
         * @return A <CODE>PathIterator</CODE> that defines the arc's boundary.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>Arc2D</code>.
         * @return the hashcode for this <code>Arc2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is
         * equal to this <code>Arc2D</code>.  The specified
         * <code>Object</code> is equal to this <code>Arc2D</code>
         * if it is an instance of <code>Arc2D</code> and if its
         * location, size, arc extents and type are the same as this
         * <code>Arc2D</code>.
         * @param obj  an <code>Object</code> to be compared with this
         * <code>Arc2D</code>.
         * @return  <code>true</code> if <code>obj</code> is an instance
         * of <code>Arc2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace Arc2D {
        /**
         * This class defines an arc specified in {@code float} precision.
         * @since 1.2
         */
        class Float extends java.awt.geom.Arc2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of the full ellipse of which this arc is
             * a partial section (not considering the
             * angular extents).
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the full ellipse of which this arc is
             * a partial section (not considering the
             * angular extents).
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The starting angle of the arc in degrees.
             * @since 1.2
             * @serial
             */
            start: number;
            /**
             * The angular extent of the arc in degrees.
             * @since 1.2
             * @serial
             */
            extent: number;
            /**
             * Constructs a new arc, initialized to the specified location,
             * size, angular extents, and closure type.
             *
             * @param x The X coordinate of the upper-left corner of
             * the arc's framing rectangle.
             * @param y The Y coordinate of the upper-left corner of
             * the arc's framing rectangle.
             * @param w The overall width of the full ellipse of which
             * this arc is a partial section.
             * @param h The overall height of the full ellipse of which this
             * arc is a partial section.
             * @param start The starting angle of the arc in degrees.
             * @param extent The angular extent of the arc in degrees.
             * @param type The closure type for the arc:
             * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any, start?: any, extent?: any, type?: any);
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            getAngleStart(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            getAngleExtent(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setAngleStart$double(angSt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setAngleExtent(angExt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * This class defines an arc specified in {@code double} precision.
         * @since 1.2
         */
        class Double extends java.awt.geom.Arc2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of the full ellipse of which this arc is
             * a partial section (not considering the angular extents).
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the full ellipse of which this arc is
             * a partial section (not considering the angular extents).
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The starting angle of the arc in degrees.
             * @since 1.2
             * @serial
             */
            start: number;
            /**
             * The angular extent of the arc in degrees.
             * @since 1.2
             * @serial
             */
            extent: number;
            /**
             * Constructs a new arc, initialized to the specified location,
             * size, angular extents, and closure type.
             *
             * @param x The X coordinate of the upper-left corner
             * of the arc's framing rectangle.
             * @param y The Y coordinate of the upper-left corner
             * of the arc's framing rectangle.
             * @param w The overall width of the full ellipse of which this
             * arc is a partial section.
             * @param h The overall height of the full ellipse of which this
             * arc is a partial section.
             * @param start The starting angle of the arc in degrees.
             * @param extent The angular extent of the arc in degrees.
             * @param type The closure type for the arc:
             * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any, start?: any, extent?: any, type?: any);
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            getAngleStart(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            getAngleExtent(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setAngleStart$double(angSt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            setAngleExtent(angExt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Ellipse2D</code> class describes an ellipse that is defined by a
     * framing rectangle.
     * <p>
     * This class is only the abstract superclass for all objects which store a 2D
     * ellipse. The actual storage representation of the coordinates is left to the
     * subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class Ellipse2D extends java.awt.geom.RectangularShape {
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.Ellipse2D.Float
         * @see java.awt.geom.Ellipse2D.Double
         * @since 1.2
         */
        constructor();
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Returns an iteration object that defines the boundary of this
         * <code>Ellipse2D</code>. The iterator for this class is multi-threaded
         * safe, which means that this <code>Ellipse2D</code> class guarantees that
         * modifications to the geometry of this <code>Ellipse2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Ellipse2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>Ellipse2D</code>.
         *
         * @return the hashcode for this <code>Ellipse2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>Ellipse2D</code>. The specified <code>Object</code> is equal
         * to this <code>Ellipse2D</code> if it is an instance of
         * <code>Ellipse2D</code> and if its location and size are the same as this
         * <code>Ellipse2D</code>.
         *
         * @param obj
         * an <code>Object</code> to be compared with this
         * <code>Ellipse2D</code>.
         * @return <code>true</code> if <code>obj</code> is an instance of
         * <code>Ellipse2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace Ellipse2D {
        /**
         * The <code>Float</code> class defines an ellipse specified in
         * <code>float</code> precision.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.Ellipse2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * Constructs and initializes an <code>Ellipse2D</code> from the
             * specified coordinates.
             *
             * @param x
             * the X coordinate of the upper-left corner of the framing
             * rectangle
             * @param y
             * the Y coordinate of the upper-left corner of the framing
             * rectangle
             * @param w
             * the width of the framing rectangle
             * @param h
             * the height of the framing rectangle
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location and size of the framing rectangle of this
             * <code>Shape</code> to the specified rectangular values.
             *
             * @param x
             * the X coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param y
             * the Y coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param w
             * the width of the specified rectangular shape
             * @param h
             * the height of the specified rectangular shape
             * @since 1.2
             */
            setFrame(x?: any, y?: any, w?: any, h?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * The <code>Double</code> class defines an ellipse specified in
         * <code>double</code> precision.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.Ellipse2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * Constructs and initializes an <code>Ellipse2D</code> from the
             * specified coordinates.
             *
             * @param x
             * the X coordinate of the upper-left corner of the framing
             * rectangle
             * @param y
             * the Y coordinate of the upper-left corner of the framing
             * rectangle
             * @param w
             * the width of the framing rectangle
             * @param h
             * the height of the framing rectangle
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location and size of the framing rectangle of this
             * <code>Shape</code> to the specified rectangular values.
             *
             * @param x
             * the X coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param y
             * the Y coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param w
             * the width of the specified rectangular shape
             * @param h
             * the height of the specified rectangular shape
             * @since 1.2
             */
            setFrame(x?: any, y?: any, w?: any, h?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Rectangle2D</code> class describes a rectangle defined by a
     * location {@code (x,y)} and dimension {@code (w x h)}.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * rectangle. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class Rectangle2D extends java.awt.geom.RectangularShape {
        /**
         * The bitmask that indicates that a point lies to the left of this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_LEFT: number;
        /**
         * The bitmask that indicates that a point lies above this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_TOP: number;
        /**
         * The bitmask that indicates that a point lies to the right of this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_RIGHT: number;
        /**
         * The bitmask that indicates that a point lies below this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_BOTTOM: number;
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.Rectangle2D.Float
         * @see java.awt.geom.Rectangle2D.Double
         * @see java.awt.Rectangle
         * @since 1.2
         */
        constructor();
        /**
         * Sets the location and size of this <code>Rectangle2D</code> to the
         * specified <code>float</code> values.
         *
         * @param x
         * the X coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param y
         * the Y coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param w
         * the width of this <code>Rectangle2D</code>
         * @param h
         * the height of this <code>Rectangle2D</code>
         * @since 1.2
         */
        setRect(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Sets the location and size of this <code>Rectangle2D</code> to the
         * specified <code>double</code> values.
         *
         * @param x
         * the X coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param y
         * the Y coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param w
         * the width of this <code>Rectangle2D</code>
         * @param h
         * the height of this <code>Rectangle2D</code>
         * @since 1.2
         */
        setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * Sets this <code>Rectangle2D</code> to be the same as the specified
         * <code>Rectangle2D</code>.
         *
         * @param r
         * the specified <code>Rectangle2D</code>
         * @since 1.2
         */
        setRect$java_awt_geom_Rectangle2D(r: Rectangle2D): void;
        /**
         * Tests if the specified line segment intersects the interior of this
         * <code>Rectangle2D</code>.
         *
         * @param x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @return <code>true</code> if the specified line segment intersects the
         * interior of this <code>Rectangle2D</code>; <code>false</code>
         * otherwise.
         * @since 1.2
         */
        intersectsLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
        /**
         * Tests if the specified line segment intersects the interior of this
         * <code>Rectangle2D</code>.
         *
         * @param l
         * the specified {@link Line2D} to test for intersection with the
         * interior of this <code>Rectangle2D</code>
         * @return <code>true</code> if the specified <code>Line2D</code> intersects
         * the interior of this <code>Rectangle2D</code>; <code>false</code>
         * otherwise.
         * @since 1.2
         */
        intersectsLine$java_awt_geom_Line2D(l: java.awt.geom.Line2D): boolean;
        /**
         * Determines where the specified coordinates lie with respect to this
         * <code>Rectangle2D</code>. This method computes a binary OR of the
         * appropriate mask values indicating, for each side of this
         * <code>Rectangle2D</code>, whether or not the specified coordinates are on
         * the same side of the edge as the rest of this <code>Rectangle2D</code>.
         *
         * @param x
         * the specified X coordinate
         * @param y
         * the specified Y coordinate
         * @return the logical OR of all appropriate out codes.
         * @see #OUT_LEFT
         * @see #OUT_TOP
         * @see #OUT_RIGHT
         * @see #OUT_BOTTOM
         * @since 1.2
         */
        outcode(x?: any, y?: any): any;
        /**
         * Determines where the specified {@link Point2D} lies with respect to this
         * <code>Rectangle2D</code>. This method computes a binary OR of the
         * appropriate mask values indicating, for each side of this
         * <code>Rectangle2D</code>, whether or not the specified
         * <code>Point2D</code> is on the same side of the edge as the rest of this
         * <code>Rectangle2D</code>.
         *
         * @param p
         * the specified <code>Point2D</code>
         * @return the logical OR of all appropriate out codes.
         * @see #OUT_LEFT
         * @see #OUT_TOP
         * @see #OUT_RIGHT
         * @see #OUT_BOTTOM
         * @since 1.2
         */
        outcode$java_awt_geom_Point2D(p: java.awt.geom.Point2D): number;
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Sets the location and size of the outer bounds of this
         * <code>Rectangle2D</code> to the specified rectangular values.
         *
         * @param x
         * the X coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param y
         * the Y coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param w
         * the width of this <code>Rectangle2D</code>
         * @param h
         * the height of this <code>Rectangle2D</code>
         * @since 1.2
         */
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        getBounds2D(): Rectangle2D;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Returns a new <code>Rectangle2D</code> object representing the
         * intersection of this <code>Rectangle2D</code> with the specified
         * <code>Rectangle2D</code>.
         *
         * @param r
         * the <code>Rectangle2D</code> to be intersected with this
         * <code>Rectangle2D</code>
         * @return the largest <code>Rectangle2D</code> contained in both the
         * specified <code>Rectangle2D</code> and in this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        abstract createIntersection(r: Rectangle2D): Rectangle2D;
        /**
         * Intersects the pair of specified source <code>Rectangle2D</code> objects
         * and puts the result into the specified destination
         * <code>Rectangle2D</code> object. One of the source rectangles can also be
         * the destination to avoid creating a third Rectangle2D object, but in this
         * case the original points of this source rectangle will be overwritten by
         * this method.
         *
         * @param src1
         * the first of a pair of <code>Rectangle2D</code> objects to be
         * intersected with each other
         * @param src2
         * the second of a pair of <code>Rectangle2D</code> objects to be
         * intersected with each other
         * @param dest
         * the <code>Rectangle2D</code> that holds the results of the
         * intersection of <code>src1</code> and <code>src2</code>
         * @since 1.2
         */
        static intersect(src1: Rectangle2D, src2: Rectangle2D, dest: Rectangle2D): void;
        /**
         * Returns a new <code>Rectangle2D</code> object representing the union of
         * this <code>Rectangle2D</code> with the specified <code>Rectangle2D</code>
         * .
         *
         * @param r
         * the <code>Rectangle2D</code> to be combined with this
         * <code>Rectangle2D</code>
         * @return the smallest <code>Rectangle2D</code> containing both the
         * specified <code>Rectangle2D</code> and this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        abstract createUnion(r: Rectangle2D): Rectangle2D;
        /**
         * Unions the pair of source <code>Rectangle2D</code> objects and puts the
         * result into the specified destination <code>Rectangle2D</code> object.
         * One of the source rectangles can also be the destination to avoid
         * creating a third Rectangle2D object, but in this case the original points
         * of this source rectangle will be overwritten by this method.
         *
         * @param src1
         * the first of a pair of <code>Rectangle2D</code> objects to be
         * combined with each other
         * @param src2
         * the second of a pair of <code>Rectangle2D</code> objects to be
         * combined with each other
         * @param dest
         * the <code>Rectangle2D</code> that holds the results of the
         * union of <code>src1</code> and <code>src2</code>
         * @since 1.2
         */
        static union(src1: Rectangle2D, src2: Rectangle2D, dest: Rectangle2D): void;
        add(newx?: any, newy?: any): any;
        /**
         * Adds a point, specified by the double precision arguments
         * <code>newx</code> and <code>newy</code>, to this <code>Rectangle2D</code>
         * . The resulting <code>Rectangle2D</code> is the smallest
         * <code>Rectangle2D</code> that contains both the original
         * <code>Rectangle2D</code> and the specified point.
         * <p>
         * After adding a point, a call to <code>contains</code> with the added
         * point as an argument does not necessarily return <code>true</code>. The
         * <code>contains</code> method does not return <code>true</code> for points
         * on the right or bottom edges of a rectangle. Therefore, if the added
         * point falls on the left or bottom edge of the enlarged rectangle,
         * <code>contains</code> returns <code>false</code> for that point.
         *
         * @param newx
         * the X coordinate of the new point
         * @param newy
         * the Y coordinate of the new point
         * @since 1.2
         */
        add$double$double(newx: number, newy: number): void;
        /**
         * Adds the <code>Point2D</code> object <code>pt</code> to this
         * <code>Rectangle2D</code>. The resulting <code>Rectangle2D</code> is the
         * smallest <code>Rectangle2D</code> that contains both the original
         * <code>Rectangle2D</code> and the specified <code>Point2D</code>.
         * <p>
         * After adding a point, a call to <code>contains</code> with the added
         * point as an argument does not necessarily return <code>true</code>. The
         * <code>contains</code> method does not return <code>true</code> for points
         * on the right or bottom edges of a rectangle. Therefore, if the added
         * point falls on the left or bottom edge of the enlarged rectangle,
         * <code>contains</code> returns <code>false</code> for that point.
         *
         * @param pt
         * the new <code>Point2D</code> to add to this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        add$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): void;
        /**
         * Adds a <code>Rectangle2D</code> object to this <code>Rectangle2D</code>.
         * The resulting <code>Rectangle2D</code> is the union of the two
         * <code>Rectangle2D</code> objects.
         *
         * @param r
         * the <code>Rectangle2D</code> to add to this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        add$java_awt_geom_Rectangle2D(r: Rectangle2D): void;
        /**
         * Returns an iteration object that defines the boundary of this
         * <code>Rectangle2D</code>. The iterator for this class is multi-threaded
         * safe, which means that this <code>Rectangle2D</code> class guarantees
         * that modifications to the geometry of this <code>Rectangle2D</code>
         * object do not affect any iterations of that geometry that are already in
         * process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Rectangle2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of the flattened
         * <code>Rectangle2D</code>. Since rectangles are already flat, the
         * <code>flatness</code> parameter is ignored. The iterator for this class
         * is multi-threaded safe, which means that this <code>Rectangle2D</code>
         * class guarantees that modifications to the geometry of this
         * <code>Rectangle2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve. Since rectangles are already
         * flat, the <code>flatness</code> parameter is ignored.
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Rectangle2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Returns the hashcode for this <code>Rectangle2D</code>.
         *
         * @return the hashcode for this <code>Rectangle2D</code>.
         * @since 1.2
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>Rectangle2D</code>. The specified <code>Object</code> is equal
         * to this <code>Rectangle2D</code> if it is an instance of
         * <code>Rectangle2D</code> and if its location and size are the same as
         * this <code>Rectangle2D</code>.
         *
         * @param obj
         * an <code>Object</code> to be compared with this
         * <code>Rectangle2D</code>.
         * @return <code>true</code> if <code>obj</code> is an instance of
         * <code>Rectangle2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
    }
    namespace Rectangle2D {
        /**
         * The <code>Float</code> class defines a rectangle specified in float
         * coordinates.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.Rectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * Constructs and initializes a <code>Rectangle2D</code> from the
             * specified <code>float</code> coordinates.
             *
             * @param x
             * the X coordinate of the upper-left corner of the newly
             * constructed <code>Rectangle2D</code>
             * @param y
             * the Y coordinate of the upper-left corner of the newly
             * constructed <code>Rectangle2D</code>
             * @param w
             * the width of the newly constructed
             * <code>Rectangle2D</code>
             * @param h
             * the height of the newly constructed
             * <code>Rectangle2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location and size of this <code>Rectangle2D</code> to the
             * specified <code>float</code> values.
             *
             * @param x
             * the X coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param y
             * the Y coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param w
             * the width of this <code>Rectangle2D</code>
             * @param h
             * the height of this <code>Rectangle2D</code>
             * @since 1.2
             */
            setRect(x?: any, y?: any, w?: any, h?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRect$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            outcode(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * Returns the <code>String</code> representation of this
             * <code>Rectangle2D</code>.
             *
             * @return a <code>String</code> representing this
             * <code>Rectangle2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
        /**
         * The <code>Double</code> class defines a rectangle specified in double
         * coordinates.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.Rectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * Constructs and initializes a <code>Rectangle2D</code> from the
             * specified <code>double</code> coordinates.
             *
             * @param x
             * the X coordinate of the upper-left corner of the newly
             * constructed <code>Rectangle2D</code>
             * @param y
             * the Y coordinate of the upper-left corner of the newly
             * constructed <code>Rectangle2D</code>
             * @param w
             * the width of the newly constructed
             * <code>Rectangle2D</code>
             * @param h
             * the height of the newly constructed
             * <code>Rectangle2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location and size of this <code>Rectangle2D</code> to the
             * specified <code>float</code> values.
             *
             * @param x
             * the X coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param y
             * the Y coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param w
             * the width of this <code>Rectangle2D</code>
             * @param h
             * the height of this <code>Rectangle2D</code>
             * @since 1.2
             */
            setRect(x?: any, y?: any, w?: any, h?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRect$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            outcode(x?: any, y?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * Returns the <code>String</code> representation of this
             * <code>Rectangle2D</code>.
             *
             * @return a <code>String</code> representing this
             * <code>Rectangle2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>RoundRectangle2D</code> class defines a rectangle with rounded
     * corners defined by a location {@code (x,y)}, a dimension {@code (w x h)}, and
     * the width and height of an arc with which to round the corners.
     * <p>
     * This class is the abstract superclass for all objects that store a 2D rounded
     * rectangle. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     */
    abstract class RoundRectangle2D extends java.awt.geom.RectangularShape {
        /**
         * This is an abstract class that cannot be instantiated directly.
         * Type-specific implementation subclasses are available for instantiation
         * and provide a number of formats for storing the information necessary to
         * satisfy the various accessor methods below.
         *
         * @see java.awt.geom.RoundRectangle2D.Float
         * @see java.awt.geom.RoundRectangle2D.Double
         * @since 1.2
         */
        constructor();
        /**
         * Gets the width of the arc that rounds off the corners.
         *
         * @return the width of the arc that rounds off the corners of this
         * <code>RoundRectangle2D</code>.
         * @since 1.2
         */
        abstract getArcWidth(): number;
        /**
         * Gets the height of the arc that rounds off the corners.
         *
         * @return the height of the arc that rounds off the corners of this
         * <code>RoundRectangle2D</code>.
         * @since 1.2
         */
        abstract getArcHeight(): number;
        /**
         * Sets the location, size, and corner radii of this
         * <code>RoundRectangle2D</code> to the specified <code>float</code>
         * values.
         *
         * @param x
         * the X coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param y
         * the Y coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param w
         * the width to which to set this
         * <code>RoundRectangle2D</code>
         * @param h
         * the height to which to set this
         * <code>RoundRectangle2D</code>
         * @param arcw
         * the width to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @param arch
         * the height to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @since 1.2
         */
        setRoundRect(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any): any;
        /**
         * Sets the location, size, and corner radii of this
         * <code>RoundRectangle2D</code> to the specified <code>double</code>
         * values.
         *
         * @param x
         * the X coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param y
         * the Y coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param w
         * the width to which to set this <code>RoundRectangle2D</code>
         * @param h
         * the height to which to set this <code>RoundRectangle2D</code>
         * @param arcWidth
         * the width to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @param arcHeight
         * the height to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @since 1.2
         */
        setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcWidth: number, arcHeight: number): void;
        /**
         * Sets this <code>RoundRectangle2D</code> to be the same as the specified
         * <code>RoundRectangle2D</code>.
         *
         * @param rr
         * the specified <code>RoundRectangle2D</code>
         * @since 1.2
         */
        setRoundRect$java_awt_geom_RoundRectangle2D(rr: RoundRectangle2D): void;
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double(x: number, y: number): boolean;
        classify(coord: number, left: number, right: number, arcsize: number): number;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         */
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Returns an iteration object that defines the boundary of this
         * <code>RoundRectangle2D</code>. The iterator for this class is
         * multi-threaded safe, which means that this <code>RoundRectangle2D</code>
         * class guarantees that modifications to the geometry of this
         * <code>RoundRectangle2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @return the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>RoundRectangle2D</code>, one segment at
         * a time.
         * @since 1.2
         */
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>RoundRectangle2D</code>.
         *
         * @return the hashcode for this <code>RoundRectangle2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>RoundRectangle2D</code>. The specified <code>Object</code> is
         * equal to this <code>RoundRectangle2D</code> if it is an instance of
         * <code>RoundRectangle2D</code> and if its location, size, and corner arc
         * dimensions are the same as this <code>RoundRectangle2D</code>.
         *
         * @param obj
         * an <code>Object</code> to be compared with this
         * <code>RoundRectangle2D</code>.
         * @return <code>true</code> if <code>obj</code> is an instance of
         * <code>RoundRectangle2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace RoundRectangle2D {
        /**
         * The <code>Float</code> class defines a rectangle with rounded corners all
         * specified in <code>float</code> coordinates.
         *
         * @since 1.2
         */
        class Float extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The width of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            arcwidth: number;
            /**
             * The height of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            archeight: number;
            /**
             * Constructs and initializes a <code>RoundRectangle2D</code> from the
             * specified <code>float</code> coordinates.
             *
             * @param x
             * the X coordinate of the newly constructed
             * <code>RoundRectangle2D</code>
             * @param y
             * the Y coordinate of the newly constructed
             * <code>RoundRectangle2D</code>
             * @param w
             * the width to which to set the newly constructed
             * <code>RoundRectangle2D</code>
             * @param h
             * the height to which to set the newly constructed
             * <code>RoundRectangle2D</code>
             * @param arcw
             * the width of the arc to use to round off the corners of
             * the newly constructed <code>RoundRectangle2D</code>
             * @param arch
             * the height of the arc to use to round off the corners of
             * the newly constructed <code>RoundRectangle2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getArcWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getArcHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location, size, and corner radii of this
             * <code>RoundRectangle2D</code> to the specified <code>float</code>
             * values.
             *
             * @param x
             * the X coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param y
             * the Y coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param w
             * the width to which to set this
             * <code>RoundRectangle2D</code>
             * @param h
             * the height to which to set this
             * <code>RoundRectangle2D</code>
             * @param arcw
             * the width to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @param arch
             * the height to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @since 1.2
             */
            setRoundRect(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRoundRect$java_awt_geom_RoundRectangle2D(rr: java.awt.geom.RoundRectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * The <code>Double</code> class defines a rectangle with rounded corners
         * all specified in <code>double</code> coordinates.
         *
         * @since 1.2
         */
        class Double extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The width of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            arcwidth: number;
            /**
             * The height of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            archeight: number;
            /**
             * Constructs and initializes a <code>RoundRectangle2D</code> from the
             * specified <code>double</code> coordinates.
             *
             * @param x
             * the X coordinate of the newly constructed
             * <code>RoundRectangle2D</code>
             * @param y
             * the Y coordinate of the newly constructed
             * <code>RoundRectangle2D</code>
             * @param w
             * the width to which to set the newly constructed
             * <code>RoundRectangle2D</code>
             * @param h
             * the height to which to set the newly constructed
             * <code>RoundRectangle2D</code>
             * @param arcw
             * the width of the arc to use to round off the corners of
             * the newly constructed <code>RoundRectangle2D</code>
             * @param arch
             * the height of the arc to use to round off the corners of
             * the newly constructed <code>RoundRectangle2D</code>
             * @since 1.2
             */
            constructor(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getArcWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getArcHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            isEmpty(): boolean;
            /**
             * Sets the location, size, and corner radii of this
             * <code>RoundRectangle2D</code> to the specified <code>float</code>
             * values.
             *
             * @param x
             * the X coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param y
             * the Y coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param w
             * the width to which to set this
             * <code>RoundRectangle2D</code>
             * @param h
             * the height to which to set this
             * <code>RoundRectangle2D</code>
             * @param arcw
             * the width to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @param arch
             * the height to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @since 1.2
             */
            setRoundRect(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            setRoundRect$java_awt_geom_RoundRectangle2D(rr: java.awt.geom.RoundRectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt {
    abstract class Graphics2D extends java.awt.Graphics {
        constructor();
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        abstract draw(s: java.awt.Shape): any;
        drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img: java.awt.Image, xform: java.awt.geom.AffineTransform, obs: java.awt.image.ImageObserver): boolean;
        drawString(str?: any, x?: any, y?: any): any;
        drawString$java_lang_String$float$float(str: string, x: number, y: number): void;
        abstract fill(s: java.awt.Shape): any;
        abstract setPaint(paint: java.awt.Paint): any;
        abstract setStroke(s: java.awt.Stroke): any;
        translate(x?: any, y?: any): any;
        translate$double$double(tx: number, ty: number): void;
        rotate$double(theta: number): void;
        rotate(theta?: any, x?: any, y?: any): any;
        abstract scale(sx: number, sy: number): any;
        abstract shear(shx: number, shy: number): any;
        abstract transform(Tx: java.awt.geom.AffineTransform): any;
        abstract setTransform(Tx: java.awt.geom.AffineTransform): any;
        abstract getTransform(): java.awt.geom.AffineTransform;
        abstract getPaint(): java.awt.Paint;
        abstract setBackground(color: java.awt.Color): any;
        abstract getBackground(): java.awt.Color;
    }
}
declare namespace java.awt.image {
    class BufferedImage extends java.awt.Image {
        constructor(src: string);
    }
}
declare namespace java.awt {
    class RenderedImage extends java.awt.Image {
        constructor(src: string);
    }
}
declare namespace javax.swing.undo {
    /**
     * A concrete subclass of AbstractUndoableEdit, used to assemble little
     * UndoableEdits into great big ones.
     *
     * @author Ray Ryan
     */
    class CompoundEdit extends javax.swing.undo.AbstractUndoableEdit {
        /**
         * True if this edit has never received <code>end</code>.
         */
        inProgress: boolean;
        /**
         * The collection of <code>UndoableEdit</code>s
         * undone/redone en masse by this <code>CompoundEdit</code>.
         */
        edits: java.util.Vector<javax.swing.undo.UndoableEdit>;
        constructor();
        /**
         * Sends <code>undo</code> to all contained
         * <code>UndoableEdits</code> in the reverse of
         * the order in which they were added.
         */
        undo(): void;
        /**
         * Sends <code>redo</code> to all contained
         * <code>UndoableEdit</code>s in the order in
         * which they were added.
         */
        redo(): void;
        /**
         * Returns the last <code>UndoableEdit</code> in
         * <code>edits</code>, or <code>null</code>
         * if <code>edits</code> is empty.
         */
        lastEdit(): javax.swing.undo.UndoableEdit;
        /**
         * Sends <code>die</code> to each subedit,
         * in the reverse of the order that they were added.
         */
        die(): void;
        /**
         * If this edit is <code>inProgress</code>,
         * accepts <code>anEdit</code> and returns true.
         *
         * <p>The last edit added to this <code>CompoundEdit</code>
         * is given a chance to <code>addEdit(anEdit)</code>.
         * If it refuses (returns false), <code>anEdit</code> is
         * given a chance to <code>replaceEdit</code> the last edit.
         * If <code>anEdit</code> returns false here,
         * it is added to <code>edits</code>.
         *
         * @param anEdit the edit to be added
         * @return true if the edit is <code>inProgress</code>;
         * otherwise returns false
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Sets <code>inProgress</code> to false.
         *
         * @see #canUndo
         * @see #canRedo
         */
        end(): void;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         */
        canUndo(): boolean;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         */
        canRedo(): boolean;
        /**
         * Returns true if this edit is in progress--that is, it has not
         * received end. This generally means that edits are still being
         * added to it.
         *
         * @see     #end
         */
        isInProgress(): boolean;
        /**
         * Returns true if any of the <code>UndoableEdit</code>s
         * in <code>edits</code> do.
         * Returns false if they all return false.
         */
        isSignificant(): boolean;
        /**
         * Returns <code>getPresentationName</code> from the
         * last <code>UndoableEdit</code> added to
         * <code>edits</code>. If <code>edits</code> is empty,
         * calls super.
         */
        getPresentationName(): string;
        /**
         * Returns <code>getUndoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         */
        getUndoPresentationName(): string;
        /**
         * Returns <code>getRedoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * <P>StateEdit is a general edit for objects that change state.
     * Objects being edited must conform to the StateEditable interface.</P>
     *
     * <P>This edit class works by asking an object to store it's state in
     * Hashtables before and after editing occurs.  Upon undo or redo the
     * object is told to restore it's state from these Hashtables.</P>
     *
     * A state edit is used as follows:
     * <PRE>
     * // Create the edit during the "before" state of the object
     * StateEdit newEdit = new StateEdit(myObject);
     * // Modify the object
     * myObject.someStateModifyingMethod();
     * // "end" the edit when you are done modifying the object
     * newEdit.end();
     * </PRE>
     *
     * <P><EM>Note that when a StateEdit ends, it removes redundant state from
     * the Hashtables - A state Hashtable is not guaranteed to contain all
     * keys/values placed into it when the state is stored!</EM></P>
     *
     * @see StateEditable
     *
     * @author Ray Ryan
     */
    class StateEdit extends javax.swing.undo.AbstractUndoableEdit {
        static RCSID: string;
        /**
         * The object being edited
         */
        object: javax.swing.undo.StateEditable;
        /**
         * The state information prior to the edit
         */
        preState: java.util.Hashtable<any, any>;
        /**
         * The state information after the edit
         */
        postState: java.util.Hashtable<any, any>;
        /**
         * The undo/redo presentation name
         */
        undoRedoName: string;
        /**
         * Create and return a new StateEdit with a presentation name.
         *
         * @param anObject The object to watch for changing state
         * @param name The presentation name to be used for this edit
         *
         * @see StateEdit
         */
        constructor(anObject?: any, name?: any);
        init(anObject: javax.swing.undo.StateEditable, name: string): void;
        /**
         * Gets the post-edit state of the StateEditable object and
         * ends the edit.
         */
        end(): void;
        /**
         * Tells the edited object to apply the state prior to the edit
         */
        undo(): void;
        /**
         * Tells the edited object to apply the state after the edit
         */
        redo(): void;
        /**
         * Gets the presentation name for this edit
         */
        getPresentationName(): string;
        /**
         * Remove redundant key/values in state hashtables.
         */
        removeRedundantState(): void;
    }
}
declare namespace sun.awt.geom {
    class Order0 extends sun.awt.geom.Curve {
        private x;
        private y;
        constructor(x: number, y: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        crossingsFor(x: number, y: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve(ystart?: any, yend?: any, dir?: any): any;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
    }
}
declare namespace sun.awt.geom {
    class Order1 extends sun.awt.geom.Curve {
        private x0;
        private y0;
        private x1;
        private y1;
        private xmin;
        private xmax;
        constructor(x0: number, y0: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve(ystart?: any, yend?: any, dir?: any): any;
        getReversedCurve(): sun.awt.geom.Curve;
        compareTo(other: sun.awt.geom.Curve, yrange: number[]): number;
        getSegment(coords: number[]): number;
    }
}
declare namespace sun.awt.geom {
    class Order2 extends sun.awt.geom.Curve {
        private x0;
        private y0;
        private cx0;
        private cy0;
        private x1;
        private y1;
        private xmin;
        private xmax;
        private xcoeff0;
        private xcoeff1;
        private xcoeff2;
        private ycoeff0;
        private ycoeff1;
        private ycoeff2;
        static insert(curves: java.util.Vector<any>, tmp: number[], x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number): void;
        static addInstance(curves: java.util.Vector<any>, x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number): void;
        static getHorizontalParams(c0: number, cp: number, c1: number, ret: number[]): number;
        static split(coords: number[], pos: number, t: number): void;
        constructor(x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getCX0(): number;
        getCY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        static TforY(y: number, ycoeff0: number, ycoeff1: number, ycoeff2: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve(ystart?: any, yend?: any, dir?: any): any;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
        controlPointString(): string;
    }
}
declare namespace sun.awt.geom {
    class Order3 extends sun.awt.geom.Curve {
        private x0;
        private y0;
        private cx0;
        private cy0;
        private cx1;
        private cy1;
        private x1;
        private y1;
        private xmin;
        private xmax;
        private xcoeff0;
        private xcoeff1;
        private xcoeff2;
        private xcoeff3;
        private ycoeff0;
        private ycoeff1;
        private ycoeff2;
        private ycoeff3;
        static insert(curves: java.util.Vector<any>, tmp: number[], x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number): void;
        static addInstance(curves: java.util.Vector<any>, x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number): void;
        static getHorizontalParams(c0: number, cp0: number, cp1: number, c1: number, ret: number[]): number;
        static split(coords: number[], pos: number, t: number): void;
        constructor(x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getCX0(): number;
        getCY0(): number;
        getCX1(): number;
        getCY1(): number;
        getX1(): number;
        getY1(): number;
        private TforY1;
        private YforT1;
        private TforY2;
        private YforT2;
        private TforY3;
        private YforT3;
        TforY(y: number): number;
        refine(a: number, b: number, c: number, target: number, t: number): number;
        XforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve(ystart?: any, yend?: any, dir?: any): any;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
        controlPointString(): string;
    }
}
declare namespace sun.awt.geom {
    abstract class AreaOp {
        private verbose;
        constructor();
        static CTAG_LEFT: number;
        static CTAG_RIGHT: number;
        static ETAG_IGNORE: number;
        static ETAG_ENTER: number;
        static ETAG_EXIT: number;
        static RSTAG_INSIDE: number;
        static RSTAG_OUTSIDE: number;
        abstract newRow(): any;
        abstract classify(e: sun.awt.geom.Edge): number;
        abstract getState(): number;
        calculate(left: java.util.Vector<any>, right: java.util.Vector<any>): java.util.Vector<any>;
        static addEdges(edges: java.util.Vector<any>, curves: java.util.Vector<any>, curvetag: number): void;
        static YXTopComparator: java.util.Comparator<any>;
        static YXTopComparator_$LI$(): java.util.Comparator<any>;
        pruneEdges(edges: java.util.Vector<any>): java.util.Vector<any>;
        static finalizeSubCurves(subcurves: java.util.Vector<any>, chains: java.util.Vector<any>): void;
        static EmptyLinkList: sun.awt.geom.CurveLink[];
        static EmptyLinkList_$LI$(): sun.awt.geom.CurveLink[];
        static EmptyChainList: sun.awt.geom.ChainEnd[];
        static EmptyChainList_$LI$(): sun.awt.geom.ChainEnd[];
        static resolveLinks(subcurves: java.util.Vector<any>, chains: java.util.Vector<any>, links: java.util.Vector<any>): void;
        static obstructs(v1: number, v2: number, phase: number): boolean;
    }
    namespace AreaOp {
        abstract class CAGOp extends sun.awt.geom.AreaOp {
            inLeft: boolean;
            inRight: boolean;
            inResult: boolean;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            abstract newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
        class AddOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
        }
        class SubOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
        }
        class IntOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
        }
        class XorOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
        }
        class NZWindOp extends sun.awt.geom.AreaOp {
            count: number;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            constructor();
        }
        class EOWindOp extends sun.awt.geom.AreaOp {
            inside: boolean;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            constructor();
        }
        class AreaOp$0 implements java.util.Comparator<any> {
            compare(o1: any, o2: any): number;
            constructor();
        }
    }
}
declare namespace java.awt.event {
    /**
     * A low-level event which indicates that a container's contents
     * changed because a component was added or removed.
     * <P>
     * Container events are provided for notification purposes ONLY;
     * The AWT will automatically handle changes to the containers
     * contents internally so that the program works properly regardless of
     * whether the program is receiving these events or not.
     * <P>
     * This low-level event is generated by a container object (such as a
     * Panel) when a component is added to it or removed from it.
     * The event is passed to every <code>ContainerListener</code>
     * or <code>ContainerAdapter</code> object which registered to receive such
     * events using the component's <code>addContainerListener</code> method.
     * (<code>ContainerAdapter</code> objects implement the
     * <code>ContainerListener</code> interface.) Each such listener object
     * gets this <code>ContainerEvent</code> when the event occurs.
     * <p>
     * An unspecified behavior will be caused if the {@code id} parameter
     * of any particular {@code ContainerEvent} instance is not
     * in the range from {@code CONTAINER_FIRST} to {@code CONTAINER_LAST}.
     *
     * @see ContainerAdapter
     * @see ContainerListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/containerlistener.html">Tutorial: Writing a Container Listener</a>
     *
     * @author Tim Prinzing
     * @author Amy Fowler
     * @since 1.1
     */
    class ContainerEvent extends java.awt.event.ComponentEvent {
        /**
         * The first number in the range of ids used for container events.
         */
        static CONTAINER_FIRST: number;
        /**
         * The last number in the range of ids used for container events.
         */
        static CONTAINER_LAST: number;
        /**
         * This event indicates that a component was added to the container.
         */
        static COMPONENT_ADDED: number;
        static COMPONENT_ADDED_$LI$(): number;
        /**
         * This event indicates that a component was removed from the container.
         */
        static COMPONENT_REMOVED: number;
        static COMPONENT_REMOVED_$LI$(): number;
        /**
         * The non-null component that is being added or
         * removed from the Container.
         *
         * @serial
         * @see #getChild()
         */
        child: java.awt.Component;
        static serialVersionUID: number;
        /**
         * Constructs a <code>ContainerEvent</code> object.
         * <p> This method throws an
         * <code>IllegalArgumentException</code> if <code>source</code>
         * is <code>null</code>.
         *
         * @param source The <code>Component</code> object (container)
         * that originated the event
         * @param id     An integer indicating the type of event.
         * For information on allowable values, see
         * the class description for {@link ContainerEvent}
         * @param child  the component that was added or removed
         * @throws IllegalArgumentException if <code>source</code> is null
         * @see #getContainer()
         * @see #getID()
         * @see #getChild()
         */
        constructor(source: java.awt.Component, id: number, child: java.awt.Component);
        /**
         * Returns the originator of the event.
         *
         * @return the <code>Container</code> object that originated
         * the event, or <code>null</code> if the object is not a
         * <code>Container</code>.
         */
        getContainer(): java.awt.Container;
        /**
         * Returns the component that was affected by the event.
         *
         * @return the Component object that was added or removed
         */
        getChild(): java.awt.Component;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt.event {
    abstract class InputEvent extends java.awt.event.ComponentEvent {
        static SHIFT_MASK: number;
        static SHIFT_MASK_$LI$(): number;
        static CTRL_MASK: number;
        static CTRL_MASK_$LI$(): number;
        static META_MASK: number;
        static META_MASK_$LI$(): number;
        static ALT_MASK: number;
        static ALT_MASK_$LI$(): number;
        static ALT_GRAPH_MASK: number;
        static ALT_GRAPH_MASK_$LI$(): number;
        static BUTTON1_MASK: number;
        static BUTTON1_MASK_$LI$(): number;
        static BUTTON2_MASK: number;
        static BUTTON2_MASK_$LI$(): number;
        static BUTTON3_MASK: number;
        static BUTTON3_MASK_$LI$(): number;
        static SHIFT_DOWN_MASK: number;
        static SHIFT_DOWN_MASK_$LI$(): number;
        static CTRL_DOWN_MASK: number;
        static CTRL_DOWN_MASK_$LI$(): number;
        static META_DOWN_MASK: number;
        static META_DOWN_MASK_$LI$(): number;
        static ALT_DOWN_MASK: number;
        static ALT_DOWN_MASK_$LI$(): number;
        static BUTTON1_DOWN_MASK: number;
        static BUTTON1_DOWN_MASK_$LI$(): number;
        static BUTTON2_DOWN_MASK: number;
        static BUTTON2_DOWN_MASK_$LI$(): number;
        static BUTTON3_DOWN_MASK: number;
        static BUTTON3_DOWN_MASK_$LI$(): number;
        static ALT_GRAPH_DOWN_MASK: number;
        static ALT_GRAPH_DOWN_MASK_$LI$(): number;
        static BUTTON_DOWN_MASK: number[];
        static BUTTON_DOWN_MASK_$LI$(): number[];
        static getMaskForButton(button: number): number;
        static FIRST_HIGH_BIT: number;
        static FIRST_HIGH_BIT_$LI$(): number;
        static JDK_1_3_MODIFIERS: number;
        static JDK_1_3_MODIFIERS_$LI$(): number;
        static HIGH_MODIFIERS: number;
        static HIGH_MODIFIERS_$LI$(): number;
        when: number;
        modifiers: number;
        constructor(source: java.awt.Component, id: number, when: number, modifiers: number);
        isShiftDown(): boolean;
        isControlDown(): boolean;
        isMetaDown(): boolean;
        isAltDown(): boolean;
        isAltGraphDown(): boolean;
        getWhen(): number;
        getModifiers(): number;
        getModifiersEx(): number;
        consume(): void;
        isConsumed(): boolean;
        static serialVersionUID: number;
        static getModifiersExText(modifiers: number): string;
    }
}
declare namespace java.awt {
    class Panel extends java.awt.Container {
        private htmlCanvas;
        constructor(layout?: any);
        createHTML(): void;
        getGraphics(): java.awt.Graphics;
        setBackground(background: java.awt.Color): void;
        doPaintInternal(): void;
        initHTML(): void;
    }
}
declare namespace javax.swing {
    abstract class JComponent extends java.awt.Container implements java.io.Serializable {
        listenerList: javax.swing.event.EventListenerList;
        constructor();
    }
}
declare namespace java.awt.geom {
    /**
     * The {@code GeneralPath} class represents a geometric path constructed from
     * straight lines, and quadratic and cubic (B&eacute;zier) curves. It can
     * contain multiple subpaths.
     * <p>
     * {@code GeneralPath} is a legacy final class which exactly implements the
     * behavior of its superclass {@link Path2D.Float}. Together with
     * {@link Path2D.Double}, the {@link Path2D} classes provide full
     * implementations of a general geometric path that support all of the
     * functionality of the {@link Shape} and {@link PathIterator} interfaces with
     * the ability to explicitly select different levels of internal coordinate
     * precision.
     * <p>
     * Use {@code Path2D.Float} (or this legacy {@code GeneralPath} subclass) when
     * dealing with data that can be represented and used with floating point
     * precision. Use {@code Path2D.Double} for data that requires the accuracy or
     * range of double precision.
     *
     * @author Jim Graham
     * @since 1.2
     */
    class GeneralPath extends java.awt.geom.Path2D.Float {
        constructor(windingRule?: any, pointTypes?: any, numTypes?: any, pointCoords?: any, numCoords?: any);
        static serialVersionUID: number;
    }
}
declare namespace java.awt {
    /**
     * A <code>Rectangle</code> specifies an area in a coordinate space that is
     * enclosed by the <code>Rectangle</code> object's upper-left point
     * {@code (x,y)}
     * in the coordinate space, its width, and its height.
     * <p>
     * A <code>Rectangle</code> object's <code>width</code> and
     * <code>height</code> are <code>public</code> fields. The constructors
     * that create a <code>Rectangle</code>, and the methods that can modify
     * one, do not prevent setting a negative value for width or height.
     * <p>
     * <a name="Empty">
     * A {@code Rectangle} whose width or height is exactly zero has location
     * along those axes with zero dimension, but is otherwise considered empty.
     * The {@link #isEmpty} method will return true for such a {@code Rectangle}.
     * Methods which test if an empty {@code Rectangle} contains or intersects
     * a point or rectangle will always return false if either dimension is zero.
     * Methods which combine such a {@code Rectangle} with a point or rectangle
     * will include the location of the {@code Rectangle} on that axis in the
     * result as if the {@link #add(Point)} method were being called.
     * </a>
     * <p>
     * <a name="NonExistant">
     * A {@code Rectangle} whose width or height is negative has neither
     * location nor dimension along those axes with negative dimensions.
     * Such a {@code Rectangle} is treated as non-existant along those axes.
     * Such a {@code Rectangle} is also empty with respect to containment
     * calculations and methods which test if it contains or intersects a
     * point or rectangle will always return false.
     * Methods which combine such a {@code Rectangle} with a point or rectangle
     * will ignore the {@code Rectangle} entirely in generating the result.
     * If two {@code Rectangle} objects are combined and each has a negative
     * dimension, the result will have at least one negative dimension.
     * </a>
     * <p>
     * Methods which affect only the location of a {@code Rectangle} will
     * operate on its location regardless of whether or not it has a negative
     * or zero dimension along either axis.
     * <p>
     * Note that a {@code Rectangle} constructed with the default no-argument
     * constructor will have dimensions of {@code 0x0} and therefore be empty.
     * That {@code Rectangle} will still have a location of {@code (0,0)} and
     * will contribute that location to the union and add operations.
     * Code attempting to accumulate the bounds of a set of points should
     * therefore initially construct the {@code Rectangle} with a specifically
     * negative width and height or it should use the first point in the set
     * to construct the {@code Rectangle}.
     * For example:
     * <pre>{@code
     * Rectangle bounds = new Rectangle(0, 0, -1, -1);
     * for (int i = 0; i < points.length; i++) {
     * bounds.add(points[i]);
     * }
     * }</pre>
     * or if we know that the points array contains at least one point:
     * <pre>{@code
     * Rectangle bounds = new Rectangle(points[0]);
     * for (int i = 1; i < points.length; i++) {
     * bounds.add(points[i]);
     * }
     * }</pre>
     * <p>
     * This class uses 32-bit integers to store its location and dimensions.
     * Frequently operations may produce a result that exceeds the range of
     * a 32-bit integer.
     * The methods will calculate their results in a way that avoids any
     * 32-bit overflow for intermediate results and then choose the best
     * representation to store the final results back into the 32-bit fields
     * which hold the location and dimensions.
     * The location of the result will be stored into the {@link #x} and
     * {@link #y} fields by clipping the true result to the nearest 32-bit value.
     * The values stored into the {@link #width} and {@link #height} dimension
     * fields will be chosen as the 32-bit values that encompass the largest
     * part of the true result as possible.
     * Generally this means that the dimension will be clipped independently
     * to the range of 32-bit integers except that if the location had to be
     * moved to store it into its pair of 32-bit fields then the dimensions
     * will be adjusted relative to the "best representation" of the location.
     * If the true result had a negative dimension and was therefore
     * non-existant along one or both axes, the stored dimensions will be
     * negative numbers in those axes.
     * If the true result had a location that could be represented within
     * the range of 32-bit integers, but zero dimension along one or both
     * axes, then the stored dimensions will be zero in those axes.
     *
     * @author      Sami Shaio
     * @since 1.0
     */
    class Rectangle extends java.awt.geom.Rectangle2D implements java.awt.Shape, java.io.Serializable {
        /**
         * The X coordinate of the upper-left corner of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setLocation(int, int)
         * @see #getLocation()
         * @since 1.0
         */
        x: number;
        /**
         * The Y coordinate of the upper-left corner of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setLocation(int, int)
         * @see #getLocation()
         * @since 1.0
         */
        y: number;
        /**
         * The width of the <code>Rectangle</code>.
         * @serial
         * @see #setSize(int, int)
         * @see #getSize()
         * @since 1.0
         */
        width: number;
        /**
         * The height of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setSize(int, int)
         * @see #getSize()
         * @since 1.0
         */
        height: number;
        static serialVersionUID: number;
        /**
         * Constructs a new <code>Rectangle</code> whose upper-left corner is
         * specified as
         * {@code (x,y)} and whose width and height
         * are specified by the arguments of the same name.
         * @param     x the specified X coordinate
         * @param     y the specified Y coordinate
         * @param     width    the width of the <code>Rectangle</code>
         * @param     height   the height of the <code>Rectangle</code>
         * @since 1.0
         */
        constructor(x?: any, y?: any, width?: any, height?: any);
        /**
         * Returns the X coordinate of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return the X coordinate of the bounding <code>Rectangle</code>.
         */
        getX(): number;
        /**
         * Returns the Y coordinate of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return the Y coordinate of the bounding <code>Rectangle</code>.
         */
        getY(): number;
        /**
         * Returns the width of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return the width of the bounding <code>Rectangle</code>.
         */
        getWidth(): number;
        /**
         * Returns the height of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return the height of the bounding <code>Rectangle</code>.
         */
        getHeight(): number;
        /**
         * Gets the bounding <code>Rectangle</code> of this <code>Rectangle</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getBounds</code> method of
         * {@link Component}.
         * @return    a new <code>Rectangle</code>, equal to the
         * bounding <code>Rectangle</code> for this <code>Rectangle</code>.
         * @see       java.awt.Component#getBounds
         * @see       #setBounds(Rectangle)
         * @see       #setBounds(int, int, int, int)
         * @since     1.1
         */
        getBounds(): Rectangle;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Sets the bounding <code>Rectangle</code> of this <code>Rectangle</code>
         * to match the specified <code>Rectangle</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setBounds</code> method of <code>Component</code>.
         * @param r the specified <code>Rectangle</code>
         * @see       #getBounds
         * @see       java.awt.Component#setBounds(java.awt.Rectangle)
         * @since     1.1
         */
        setBounds$java_awt_Rectangle(r: Rectangle): void;
        /**
         * Sets the bounding <code>Rectangle</code> of this
         * <code>Rectangle</code> to the specified
         * <code>x</code>, <code>y</code>, <code>width</code>,
         * and <code>height</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setBounds</code> method of <code>Component</code>.
         * @param x the new X coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param y the new Y coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param width the new width for this <code>Rectangle</code>
         * @param height the new height for this <code>Rectangle</code>
         * @see       #getBounds
         * @see       java.awt.Component#setBounds(int, int, int, int)
         * @since     1.1
         */
        setBounds(x?: any, y?: any, width?: any, height?: any): any;
        setRect(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Sets the bounds of this {@code Rectangle} to the integer bounds
         * which encompass the specified {@code x}, {@code y}, {@code width},
         * and {@code height}.
         * If the parameters specify a {@code Rectangle} that exceeds the
         * maximum range of integers, the result will be the best
         * representation of the specified {@code Rectangle} intersected
         * with the maximum integer bounds.
         * @param x the X coordinate of the upper-left corner of
         * the specified rectangle
         * @param y the Y coordinate of the upper-left corner of
         * the specified rectangle
         * @param width the width of the specified rectangle
         * @param height the new height of the specified rectangle
         */
        setRect$double$double$double$double(x: number, y: number, width: number, height: number): void;
        private static clip(v, doceil);
        /**
         * Sets the bounding <code>Rectangle</code> of this
         * <code>Rectangle</code> to the specified
         * <code>x</code>, <code>y</code>, <code>width</code>,
         * and <code>height</code>.
         * <p>
         * @param x the new X coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param y the new Y coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param width the new width for this <code>Rectangle</code>
         * @param height the new height for this <code>Rectangle</code>
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setBounds(int, int, int, int)</code>.
         */
        reshape(x: number, y: number, width: number, height: number): void;
        /**
         * Returns the location of this <code>Rectangle</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getLocation</code> method of <code>Component</code>.
         * @return the <code>Point</code> that is the upper-left corner of
         * this <code>Rectangle</code>.
         * @see       java.awt.Component#getLocation
         * @see       #setLocation(Point)
         * @see       #setLocation(int, int)
         * @since     1.1
         */
        getLocation(): java.awt.Point;
        /**
         * Moves this <code>Rectangle</code> to the specified location.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * @param p the <code>Point</code> specifying the new location
         * for this <code>Rectangle</code>
         * @see       java.awt.Component#setLocation(java.awt.Point)
         * @see       #getLocation
         * @since     1.1
         */
        setLocation$java_awt_Point(p: java.awt.Point): void;
        /**
         * Moves this <code>Rectangle</code> to the specified location.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * @param x the X coordinate of the new location
         * @param y the Y coordinate of the new location
         * @see       #getLocation
         * @see       java.awt.Component#setLocation(int, int)
         * @since     1.1
         */
        setLocation(x?: any, y?: any): any;
        /**
         * Moves this <code>Rectangle</code> to the specified location.
         * <p>
         * @param x the X coordinate of the new location
         * @param y the Y coordinate of the new location
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setLocation(int, int)</code>.
         */
        move(x: number, y: number): void;
        /**
         * Translates this <code>Rectangle</code> the indicated distance,
         * to the right along the X coordinate axis, and
         * downward along the Y coordinate axis.
         * @param dx the distance to move this <code>Rectangle</code>
         * along the X axis
         * @param dy the distance to move this <code>Rectangle</code>
         * along the Y axis
         * @see       java.awt.Rectangle#setLocation(int, int)
         * @see       java.awt.Rectangle#setLocation(java.awt.Point)
         */
        translate(dx: number, dy: number): void;
        /**
         * Gets the size of this <code>Rectangle</code>, represented by
         * the returned <code>Dimension</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getSize</code> method of <code>Component</code>.
         * @return a <code>Dimension</code>, representing the size of
         * this <code>Rectangle</code>.
         * @see       java.awt.Component#getSize
         * @see       #setSize(Dimension)
         * @see       #setSize(int, int)
         * @since     1.1
         */
        getSize(): java.awt.Dimension;
        /**
         * Sets the size of this <code>Rectangle</code> to match the
         * specified <code>Dimension</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method of <code>Component</code>.
         * @param d the new size for the <code>Dimension</code> object
         * @see       java.awt.Component#setSize(java.awt.Dimension)
         * @see       #getSize
         * @since     1.1
         */
        setSize$java_awt_Dimension(d: java.awt.Dimension): void;
        /**
         * Sets the size of this <code>Rectangle</code> to the specified
         * width and height.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method of <code>Component</code>.
         * @param width the new width for this <code>Rectangle</code>
         * @param height the new height for this <code>Rectangle</code>
         * @see       java.awt.Component#setSize(int, int)
         * @see       #getSize
         * @since     1.1
         */
        setSize(width?: any, height?: any): any;
        /**
         * Sets the size of this <code>Rectangle</code> to the specified
         * width and height.
         * <p>
         * @param width the new width for this <code>Rectangle</code>
         * @param height the new height for this <code>Rectangle</code>
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setSize(int, int)</code>.
         */
        resize(width: number, height: number): void;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): any;
        /**
         * Checks whether or not this <code>Rectangle</code> contains the
         * specified <code>Point</code>.
         * @param p the <code>Point</code> to test
         * @return    <code>true</code> if the specified <code>Point</code>
         * is inside this <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @since     1.1
         */
        contains$java_awt_Point(p: java.awt.Point): boolean;
        /**
         * Checks whether or not this <code>Rectangle</code> contains the
         * point at the specified location {@code (x,y)}.
         *
         * @param  x the specified X coordinate
         * @param  y the specified Y coordinate
         * @return    <code>true</code> if the point
         * {@code (x,y)} is inside this
         * <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @since     1.1
         */
        contains$int$int(x: number, y: number): boolean;
        /**
         * Checks whether or not this <code>Rectangle</code> entirely contains
         * the specified <code>Rectangle</code>.
         *
         * @param     r   the specified <code>Rectangle</code>
         * @return    <code>true</code> if the <code>Rectangle</code>
         * is contained entirely inside this <code>Rectangle</code>;
         * <code>false</code> otherwise
         * @since     1.2
         */
        contains$java_awt_Rectangle(r: Rectangle): boolean;
        /**
         * Checks whether this <code>Rectangle</code> entirely contains
         * the <code>Rectangle</code>
         * at the specified location {@code (X,Y)} with the
         * specified dimensions {@code (W,H)}.
         * @param     X the specified X coordinate
         * @param     Y the specified Y coordinate
         * @param     W   the width of the <code>Rectangle</code>
         * @param     H   the height of the <code>Rectangle</code>
         * @return    <code>true</code> if the <code>Rectangle</code> specified by
         * {@code (X, Y, W, H)}
         * is entirely enclosed inside this <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @since     1.1
         */
        contains$int$int$int$int(X: number, Y: number, W: number, H: number): boolean;
        /**
         * Checks whether or not this <code>Rectangle</code> contains the
         * point at the specified location {@code (X,Y)}.
         *
         * @param  X the specified X coordinate
         * @param  Y the specified Y coordinate
         * @return    <code>true</code> if the point
         * {@code (X,Y)} is inside this
         * <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @deprecated As of JDK version 1.1,
         * replaced by <code>contains(int, int)</code>.
         */
        inside(X: number, Y: number): boolean;
        /**
         * Determines whether or not this <code>Rectangle</code> and the specified
         * <code>Rectangle</code> intersect. Two rectangles intersect if
         * their intersection is nonempty.
         *
         * @param r the specified <code>Rectangle</code>
         * @return    <code>true</code> if the specified <code>Rectangle</code>
         * and this <code>Rectangle</code> intersect;
         * <code>false</code> otherwise.
         */
        intersects$java_awt_Rectangle(r: Rectangle): boolean;
        /**
         * Computes the intersection of this <code>Rectangle</code> with the
         * specified <code>Rectangle</code>. Returns a new <code>Rectangle</code>
         * that represents the intersection of the two rectangles.
         * If the two rectangles do not intersect, the result will be
         * an empty rectangle.
         *
         * @param     r   the specified <code>Rectangle</code>
         * @return    the largest <code>Rectangle</code> contained in both the
         * specified <code>Rectangle</code> and in
         * this <code>Rectangle</code>; or if the rectangles
         * do not intersect, an empty rectangle.
         */
        intersection(r: Rectangle): Rectangle;
        /**
         * Computes the union of this <code>Rectangle</code> with the
         * specified <code>Rectangle</code>. Returns a new
         * <code>Rectangle</code> that
         * represents the union of the two rectangles.
         * <p>
         * If either {@code Rectangle} has any dimension less than zero
         * the rules for <a href=#NonExistant>non-existant</a> rectangles
         * apply.
         * If only one has a dimension less than zero, then the result
         * will be a copy of the other {@code Rectangle}.
         * If both have dimension less than zero, then the result will
         * have at least one dimension less than zero.
         * <p>
         * If the resulting {@code Rectangle} would have a dimension
         * too large to be expressed as an {@code int}, the result
         * will have a dimension of {@code Integer.MAX_VALUE} along
         * that dimension.
         * @param r the specified <code>Rectangle</code>
         * @return    the smallest <code>Rectangle</code> containing both
         * the specified <code>Rectangle</code> and this
         * <code>Rectangle</code>.
         */
        union(r: Rectangle): Rectangle;
        /**
         * Adds a point, specified by the integer arguments {@code newx,newy}
         * to the bounds of this {@code Rectangle}.
         * <p>
         * If this {@code Rectangle} has any dimension less than zero,
         * the rules for <a href=#NonExistant>non-existant</a>
         * rectangles apply.
         * In that case, the new bounds of this {@code Rectangle} will
         * have a location equal to the specified coordinates and
         * width and height equal to zero.
         * <p>
         * After adding a point, a call to <code>contains</code> with the
         * added point as an argument does not necessarily return
         * <code>true</code>. The <code>contains</code> method does not
         * return <code>true</code> for points on the right or bottom
         * edges of a <code>Rectangle</code>. Therefore, if the added point
         * falls on the right or bottom edge of the enlarged
         * <code>Rectangle</code>, <code>contains</code> returns
         * <code>false</code> for that point.
         * If the specified point must be contained within the new
         * {@code Rectangle}, a 1x1 rectangle should be added instead:
         * <pre>
         * r.add(newx, newy, 1, 1);
         * </pre>
         * @param newx the X coordinate of the new point
         * @param newy the Y coordinate of the new point
         */
        add(newx?: any, newy?: any): any;
        /**
         * Adds the specified {@code Point} to the bounds of this
         * {@code Rectangle}.
         * <p>
         * If this {@code Rectangle} has any dimension less than zero,
         * the rules for <a href=#NonExistant>non-existant</a>
         * rectangles apply.
         * In that case, the new bounds of this {@code Rectangle} will
         * have a location equal to the coordinates of the specified
         * {@code Point} and width and height equal to zero.
         * <p>
         * After adding a <code>Point</code>, a call to <code>contains</code>
         * with the added <code>Point</code> as an argument does not
         * necessarily return <code>true</code>. The <code>contains</code>
         * method does not return <code>true</code> for points on the right
         * or bottom edges of a <code>Rectangle</code>. Therefore if the added
         * <code>Point</code> falls on the right or bottom edge of the
         * enlarged <code>Rectangle</code>, <code>contains</code> returns
         * <code>false</code> for that <code>Point</code>.
         * If the specified point must be contained within the new
         * {@code Rectangle}, a 1x1 rectangle should be added instead:
         * <pre>
         * r.add(pt.x, pt.y, 1, 1);
         * </pre>
         * @param pt the new <code>Point</code> to add to this
         * <code>Rectangle</code>
         */
        add$java_awt_Point(pt: java.awt.Point): void;
        /**
         * Adds a <code>Rectangle</code> to this <code>Rectangle</code>.
         * The resulting <code>Rectangle</code> is the union of the two
         * rectangles.
         * <p>
         * If either {@code Rectangle} has any dimension less than 0, the
         * result will have the dimensions of the other {@code Rectangle}.
         * If both {@code Rectangle}s have at least one dimension less
         * than 0, the result will have at least one dimension less than 0.
         * <p>
         * If either {@code Rectangle} has one or both dimensions equal
         * to 0, the result along those axes with 0 dimensions will be
         * equivalent to the results obtained by adding the corresponding
         * origin coordinate to the result rectangle along that axis,
         * similar to the operation of the {@link #add(Point)} method,
         * but contribute no further dimension beyond that.
         * <p>
         * If the resulting {@code Rectangle} would have a dimension
         * too large to be expressed as an {@code int}, the result
         * will have a dimension of {@code Integer.MAX_VALUE} along
         * that dimension.
         * @param  r the specified <code>Rectangle</code>
         */
        add$java_awt_Rectangle(r: Rectangle): void;
        /**
         * Resizes the <code>Rectangle</code> both horizontally and vertically.
         * <p>
         * This method modifies the <code>Rectangle</code> so that it is
         * <code>h</code> units larger on both the left and right side,
         * and <code>v</code> units larger at both the top and bottom.
         * <p>
         * The new <code>Rectangle</code> has {@code (x - h, y - v)}
         * as its upper-left corner,
         * width of {@code (width + 2h)},
         * and a height of {@code (height + 2v)}.
         * <p>
         * If negative values are supplied for <code>h</code> and
         * <code>v</code>, the size of the <code>Rectangle</code>
         * decreases accordingly.
         * The {@code grow} method will check for integer overflow
         * and underflow, but does not check whether the resulting
         * values of {@code width} and {@code height} grow
         * from negative to non-negative or shrink from non-negative
         * to negative.
         * @param h the horizontal expansion
         * @param v the vertical expansion
         */
        grow(h: number, v: number): void;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        isEmpty(): boolean;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        outcode(x?: any, y?: any): any;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
        /**
         * {@inheritDoc}
         * @since 1.2
         */
        createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
        /**
         * Checks whether two rectangles are equal.
         * <p>
         * The result is <code>true</code> if and only if the argument is not
         * <code>null</code> and is a <code>Rectangle</code> object that has the
         * same upper-left corner, width, and height as
         * this <code>Rectangle</code>.
         * @param obj the <code>Object</code> to compare with
         * this <code>Rectangle</code>
         * @return    <code>true</code> if the objects are equal;
         * <code>false</code> otherwise.
         */
        equals(obj: any): boolean;
        /**
         * Returns a <code>String</code> representing this
         * <code>Rectangle</code> and its values.
         * @return a <code>String</code> representing this
         * <code>Rectangle</code> object's coordinate and size values.
         */
        toString(): string;
    }
}
declare namespace java.awt {
    class WebGraphics2D extends java.awt.Graphics2D {
        context: CanvasRenderingContext2D;
        constructor(canvas: HTMLCanvasElement);
        drawString(s?: any, x?: any, y?: any): any;
        getContext(): CanvasRenderingContext2D;
        clearRect(x: number, y: number, width: number, height: number): void;
        create$(): java.awt.Graphics;
        drawArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
        drawLine(x1: number, y1: number, x2: number, y2: number): void;
        drawOval(x: number, y: number, width: number, height: number): void;
        drawRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
        drawRect(x: number, y: number, width: number, height: number): void;
        drawPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        drawPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        fillPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        getClipBounds(r?: any): any;
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        hitClip(x: number, y: number, width: number, height: number): boolean;
        drawPolyline(xPoints: number[], yPoints: number[], nPoints: number): void;
        draw(s: java.awt.Shape): void;
        fill(s: java.awt.Shape): void;
        drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img: java.awt.Image, xform: java.awt.geom.AffineTransform, obs: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage(img?: any, dx1?: any, dy1?: any, dx2?: any, dy2?: any, sx1?: any, sy1?: any, sx2?: any, sy2?: any, bgcolor?: any, observer?: any): any;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
        fillPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        clip: java.awt.Shape;
        getClip(): java.awt.Shape;
        setClip$java_awt_Shape(clip: java.awt.Shape): void;
        setClip(x?: any, y?: any, width?: any, height?: any): any;
        clipRect(x: number, y: number, width: number, height: number): void;
        getClipBounds$(): java.awt.Rectangle;
        translate(x?: any, y?: any): any;
        drawString$java_lang_String$float$float(str: string, x: number, y: number): void;
        fillArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
        fillOval(x: number, y: number, width: number, height: number): void;
        fillRect(x: number, y: number, width: number, height: number): void;
        fillRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
        color: java.awt.Color;
        setColor(c: java.awt.Color): void;
        getColor(): java.awt.Color;
        translate$double$double(tx: number, ty: number): void;
        rotate$double(theta: number): void;
        rotate(theta?: any, x?: any, y?: any): any;
        scale(sx: number, sy: number): void;
        shear(shx: number, shy: number): void;
        dispose(): void;
        font: java.awt.Font;
        setFont(font: java.awt.Font): void;
        getFont(): java.awt.Font;
        background: java.awt.Color;
        setBackground(color: java.awt.Color): void;
        getBackground(): java.awt.Color;
        __transform: java.awt.geom.AffineTransform;
        setTransform(transform: java.awt.geom.AffineTransform): void;
        getTransform(): java.awt.geom.AffineTransform;
        transform(Tx: java.awt.geom.AffineTransform): void;
        setPaintMode(): void;
        getPaint(): java.awt.Paint;
        setPaint(paint: java.awt.Paint): void;
        setStroke(s: java.awt.Stroke): void;
    }
}
declare namespace javax.swing.undo {
    /**
     * {@code UndoManager} manages a list of {@code UndoableEdits},
     * providing a way to undo or redo the appropriate edits.  There are
     * two ways to add edits to an <code>UndoManager</code>.  Add the edit
     * directly using the <code>addEdit</code> method, or add the
     * <code>UndoManager</code> to a bean that supports
     * <code>UndoableEditListener</code>.  The following examples creates
     * an <code>UndoManager</code> and adds it as an
     * <code>UndoableEditListener</code> to a <code>JTextField</code>:
     * <pre>
     * UndoManager undoManager = new UndoManager();
     * JTextField tf = ...;
     * tf.getDocument().addUndoableEditListener(undoManager);
     * </pre>
     * <p>
     * <code>UndoManager</code> maintains an ordered list of edits and the
     * index of the next edit in that list. The index of the next edit is
     * either the size of the current list of edits, or if
     * <code>undo</code> has been invoked it corresponds to the index
     * of the last significant edit that was undone. When
     * <code>undo</code> is invoked all edits from the index of the next
     * edit to the last significant edit are undone, in reverse order.
     * For example, consider an <code>UndoManager</code> consisting of the
     * following edits: <b>A</b> <i>b</i> <i>c</i> <b>D</b>.  Edits with a
     * upper-case letter in bold are significant, those in lower-case
     * and italicized are insignificant.
     * <p>
     * <a name="figure1"></a>
     * <table border=0 summary="">
     * <tr><td>
     * <img src="doc-files/UndoManager-1.gif" alt="">
     * <tr><td align=center>Figure 1
     * </table>
     * <p>
     * As shown in <a href="#figure1">figure 1</a>, if <b>D</b> was just added, the
     * index of the next edit will be 4. Invoking <code>undo</code>
     * results in invoking <code>undo</code> on <b>D</b> and setting the
     * index of the next edit to 3 (edit <i>c</i>), as shown in the following
     * figure.
     * <p>
     * <a name="figure2"></a>
     * <table border=0 summary="">
     * <tr><td>
     * <img src="doc-files/UndoManager-2.gif" alt="">
     * <tr><td align=center>Figure 2
     * </table>
     * <p>
     * The last significant edit is <b>A</b>, so that invoking
     * <code>undo</code> again invokes <code>undo</code> on <i>c</i>,
     * <i>b</i>, and <b>A</b>, in that order, setting the index of the
     * next edit to 0, as shown in the following figure.
     * <p>
     * <a name="figure3"></a>
     * <table border=0 summary="">
     * <tr><td>
     * <img src="doc-files/UndoManager-3.gif" alt="">
     * <tr><td align=center>Figure 3
     * </table>
     * <p>
     * Invoking <code>redo</code> results in invoking <code>redo</code> on
     * all edits between the index of the next edit and the next
     * significant edit (or the end of the list).  Continuing with the previous
     * example if <code>redo</code> were invoked, <code>redo</code> would in
     * turn be invoked on <b>A</b>, <i>b</i> and <i>c</i>.  In addition
     * the index of the next edit is set to 3 (as shown in <a
     * href="#figure2">figure 2</a>).
     * <p>
     * Adding an edit to an <code>UndoManager</code> results in
     * removing all edits from the index of the next edit to the end of
     * the list.  Continuing with the previous example, if a new edit,
     * <i>e</i>, is added the edit <b>D</b> is removed from the list
     * (after having <code>die</code> invoked on it).  If <i>c</i> is not
     * incorporated by the next edit
     * (<code><i>c</i>.addEdit(<i>e</i>)</code> returns true), or replaced
     * by it (<code><i>e</i>.replaceEdit(<i>c</i>)</code> returns true),
     * the new edit is added after <i>c</i>, as shown in the following
     * figure.
     * <p>
     * <a name="figure4"></a>
     * <table border=0 summary="">
     * <tr><td>
     * <img src="doc-files/UndoManager-4.gif" alt="">
     * <tr><td align=center>Figure 4
     * </table>
     * <p>
     * Once <code>end</code> has been invoked on an <code>UndoManager</code>
     * the superclass behavior is used for all <code>UndoableEdit</code>
     * methods.  Refer to <code>CompoundEdit</code> for more details on its
     * behavior.
     * <p>
     * Unlike the rest of Swing, this class is thread safe.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     */
    class UndoManager extends javax.swing.undo.CompoundEdit implements javax.swing.event.UndoableEditListener {
        indexOfNextAdd: number;
        limit: number;
        /**
         * Creates a new <code>UndoManager</code>.
         */
        constructor();
        /**
         * Returns the maximum number of edits this {@code UndoManager}
         * holds. A value less than 0 indicates the number of edits is not
         * limited.
         *
         * @return the maximum number of edits this {@code UndoManager} holds
         * @see #addEdit
         * @see #setLimit
         */
        getLimit(): number;
        /**
         * Empties the undo manager sending each edit a <code>die</code> message
         * in the process.
         *
         * @see AbstractUndoableEdit#die
         */
        discardAllEdits(): void;
        /**
         * Reduces the number of queued edits to a range of size limit,
         * centered on the index of the next edit.
         */
        trimForLimit(): void;
        /**
         * Removes edits in the specified range.
         * All edits in the given range (inclusive, and in reverse order)
         * will have <code>die</code> invoked on them and are removed from
         * the list of edits. This has no effect if
         * <code>from</code> &gt; <code>to</code>.
         *
         * @param from the minimum index to remove
         * @param to the maximum index to remove
         */
        trimEdits(from: number, to: number): void;
        /**
         * Sets the maximum number of edits this <code>UndoManager</code>
         * holds. A value less than 0 indicates the number of edits is not
         * limited. If edits need to be discarded to shrink the limit,
         * <code>die</code> will be invoked on them in the reverse
         * order they were added.  The default is 100.
         *
         * @param l the new limit
         * @throws RuntimeException if this {@code UndoManager} is not in progress
         * ({@code end} has been invoked)
         * @see #isInProgress
         * @see #end
         * @see #addEdit
         * @see #getLimit
         */
        setLimit(l: number): void;
        /**
         * Returns the the next significant edit to be undone if <code>undo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be undone.
         *
         * @return the next significant edit to be undone
         */
        editToBeUndone(): javax.swing.undo.UndoableEdit;
        /**
         * Returns the the next significant edit to be redone if <code>redo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be redone.
         *
         * @return the next significant edit to be redone
         */
        editToBeRedone(): javax.swing.undo.UndoableEdit;
        /**
         * Undoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         */
        undoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Redoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         */
        redoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Convenience method that invokes one of <code>undo</code> or
         * <code>redo</code>. If any edits have been undone (the index of
         * the next edit is less than the length of the edits list) this
         * invokes <code>redo</code>, otherwise it invokes <code>undo</code>.
         *
         * @see #canUndoOrRedo
         * @see #getUndoOrRedoPresentationName
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         */
        undoOrRedo(): void;
        /**
         * Returns true if it is possible to invoke <code>undo</code> or
         * <code>redo</code>.
         *
         * @return true if invoking <code>canUndoOrRedo</code> is valid
         * @see #undoOrRedo
         */
        canUndoOrRedo(): boolean;
        /**
         * Undoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass, otherwise
         * this invokes <code>undo</code> on all edits between the
         * index of the next edit and the last significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code> or there are no edits
         * to be undone
         * @see CompoundEdit#end
         * @see #canUndo
         * @see #editToBeUndone
         */
        undo(): void;
        /**
         * Returns true if edits may be undone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise
         * this returns true if there are any edits to be undone
         * (<code>editToBeUndone</code> returns non-<code>null</code>).
         *
         * @return true if there are edits to be undone
         * @see CompoundEdit#canUndo
         * @see #editToBeUndone
         */
        canUndo(): boolean;
        /**
         * Redoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass.  Otherwise
         * this invokes <code>redo</code> on all edits between the
         * index of the next edit and the next significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code> or there are no edits
         * to be redone
         * @see CompoundEdit#end
         * @see #canRedo
         * @see #editToBeRedone
         */
        redo(): void;
        /**
         * Returns true if edits may be redone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise,
         * this returns true if there are any edits to be redone
         * (<code>editToBeRedone</code> returns non-<code>null</code>).
         *
         * @return true if there are edits to be redone
         * @see CompoundEdit#canRedo
         * @see #editToBeRedone
         */
        canRedo(): boolean;
        /**
         * Adds an <code>UndoableEdit</code> to this
         * <code>UndoManager</code>, if it's possible.  This removes all
         * edits from the index of the next edit to the end of the edits
         * list.  If <code>end</code> has been invoked the edit is not added
         * and <code>false</code> is returned.  If <code>end</code> hasn't
         * been invoked this returns <code>true</code>.
         *
         * @param anEdit the edit to be added
         * @return true if <code>anEdit</code> can be incorporated into this
         * edit
         * @see CompoundEdit#end
         * @see CompoundEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Turns this <code>UndoManager</code> into a normal
         * <code>CompoundEdit</code>.  This removes all edits that have
         * been undone.
         *
         * @see CompoundEdit#end
         */
        end(): void;
        /**
         * Convenience method that returns either
         * <code>getUndoPresentationName</code> or
         * <code>getRedoPresentationName</code>.  If the index of the next
         * edit equals the size of the edits list,
         * <code>getUndoPresentationName</code> is returned, otherwise
         * <code>getRedoPresentationName</code> is returned.
         *
         * @return undo or redo name
         */
        getUndoOrRedoPresentationName(): string;
        /**
         * Returns a description of the undoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be undone, this returns
         * the value from the next significant edit that will be undone.
         * If there are no edits to be undone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.undoText".
         *
         * @return a description of the undoable form of this edit
         * @see     #undo
         * @see     CompoundEdit#getUndoPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Returns a description of the redoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be redone, this returns
         * the value from the next significant edit that will be redone.
         * If there are no edits to be redone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.redoText".
         *
         * @return a description of the redoable form of this edit
         * @see     #redo
         * @see     CompoundEdit#getRedoPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * An <code>UndoableEditListener</code> method. This invokes
         * <code>addEdit</code> with <code>e.getEdit()</code>.
         *
         * @param e the <code>UndoableEditEvent</code> the
         * <code>UndoableEditEvent</code> will be added from
         * @see #addEdit
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): void;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return a String representation of this object
         */
        toString(): string;
    }
}
declare namespace java.awt.event {
    class KeyEvent extends java.awt.event.InputEvent {
        private isProxyActive;
        static KEY_FIRST: number;
        static KEY_LAST: number;
        static KEY_TYPED: number;
        static KEY_TYPED_$LI$(): number;
        static KEY_PRESSED: number;
        static KEY_PRESSED_$LI$(): number;
        static KEY_RELEASED: number;
        static KEY_RELEASED_$LI$(): number;
        static VK_ENTER: number;
        static VK_BACK_SPACE: number;
        static VK_TAB: number;
        static VK_CANCEL: number;
        static VK_CLEAR: number;
        static VK_SHIFT: number;
        static VK_CONTROL: number;
        static VK_ALT: number;
        static VK_PAUSE: number;
        static VK_CAPS_LOCK: number;
        static VK_ESCAPE: number;
        static VK_SPACE: number;
        static VK_PAGE_UP: number;
        static VK_PAGE_DOWN: number;
        static VK_END: number;
        static VK_HOME: number;
        static VK_LEFT: number;
        static VK_UP: number;
        static VK_RIGHT: number;
        static VK_DOWN: number;
        static VK_COMMA: number;
        static VK_MINUS: number;
        static VK_PERIOD: number;
        static VK_SLASH: number;
        /**
         * VK_0 thru VK_9 are the same as ASCII '0' thru '9' (0x30 - 0x39)
         */
        static VK_0: number;
        static VK_1: number;
        static VK_2: number;
        static VK_3: number;
        static VK_4: number;
        static VK_5: number;
        static VK_6: number;
        static VK_7: number;
        static VK_8: number;
        static VK_9: number;
        static VK_SEMICOLON: number;
        static VK_EQUALS: number;
        /**
         * VK_A thru VK_Z are the same as ASCII 'A' thru 'Z' (0x41 - 0x5A)
         */
        static VK_A: number;
        static VK_B: number;
        static VK_C: number;
        static VK_D: number;
        static VK_E: number;
        static VK_F: number;
        static VK_G: number;
        static VK_H: number;
        static VK_I: number;
        static VK_J: number;
        static VK_K: number;
        static VK_L: number;
        static VK_M: number;
        static VK_N: number;
        static VK_O: number;
        static VK_P: number;
        static VK_Q: number;
        static VK_R: number;
        static VK_S: number;
        static VK_T: number;
        static VK_U: number;
        static VK_V: number;
        static VK_W: number;
        static VK_X: number;
        static VK_Y: number;
        static VK_Z: number;
        static VK_OPEN_BRACKET: number;
        static VK_BACK_SLASH: number;
        static VK_CLOSE_BRACKET: number;
        static VK_NUMPAD0: number;
        static VK_NUMPAD1: number;
        static VK_NUMPAD2: number;
        static VK_NUMPAD3: number;
        static VK_NUMPAD4: number;
        static VK_NUMPAD5: number;
        static VK_NUMPAD6: number;
        static VK_NUMPAD7: number;
        static VK_NUMPAD8: number;
        static VK_NUMPAD9: number;
        static VK_MULTIPLY: number;
        static VK_ADD: number;
        static VK_SEPARATER: number;
        static VK_SEPARATOR: number;
        static VK_SEPARATOR_$LI$(): number;
        static VK_SUBTRACT: number;
        static VK_DECIMAL: number;
        static VK_DIVIDE: number;
        static VK_DELETE: number;
        static VK_NUM_LOCK: number;
        static VK_SCROLL_LOCK: number;
        static VK_F1: number;
        static VK_F2: number;
        static VK_F3: number;
        static VK_F4: number;
        static VK_F5: number;
        static VK_F6: number;
        static VK_F7: number;
        static VK_F8: number;
        static VK_F9: number;
        static VK_F10: number;
        static VK_F11: number;
        static VK_F12: number;
        static VK_F13: number;
        static VK_F14: number;
        static VK_F15: number;
        static VK_F16: number;
        static VK_F17: number;
        static VK_F18: number;
        static VK_F19: number;
        static VK_F20: number;
        static VK_F21: number;
        static VK_F22: number;
        static VK_F23: number;
        static VK_F24: number;
        static VK_PRINTSCREEN: number;
        static VK_INSERT: number;
        static VK_HELP: number;
        static VK_META: number;
        static VK_BACK_QUOTE: number;
        static VK_QUOTE: number;
        static VK_KP_UP: number;
        static VK_KP_DOWN: number;
        static VK_KP_LEFT: number;
        static VK_KP_RIGHT: number;
        static VK_DEAD_GRAVE: number;
        static VK_DEAD_ACUTE: number;
        static VK_DEAD_CIRCUMFLEX: number;
        static VK_DEAD_TILDE: number;
        static VK_DEAD_MACRON: number;
        static VK_DEAD_BREVE: number;
        static VK_DEAD_ABOVEDOT: number;
        static VK_DEAD_DIAERESIS: number;
        static VK_DEAD_ABOVERING: number;
        static VK_DEAD_DOUBLEACUTE: number;
        static VK_DEAD_CARON: number;
        static VK_DEAD_CEDILLA: number;
        static VK_DEAD_OGONEK: number;
        static VK_DEAD_IOTA: number;
        static VK_DEAD_VOICED_SOUND: number;
        static VK_DEAD_SEMIVOICED_SOUND: number;
        static VK_AMPERSAND: number;
        static VK_ASTERISK: number;
        static VK_QUOTEDBL: number;
        static VK_LESS: number;
        static VK_GREATER: number;
        static VK_BRACELEFT: number;
        static VK_BRACERIGHT: number;
        static VK_AT: number;
        static VK_COLON: number;
        static VK_CIRCUMFLEX: number;
        static VK_DOLLAR: number;
        static VK_EURO_SIGN: number;
        static VK_EXCLAMATION_MARK: number;
        static VK_INVERTED_EXCLAMATION_MARK: number;
        static VK_LEFT_PARENTHESIS: number;
        static VK_NUMBER_SIGN: number;
        static VK_PLUS: number;
        static VK_RIGHT_PARENTHESIS: number;
        static VK_UNDERSCORE: number;
        static VK_WINDOWS: number;
        static VK_CONTEXT_MENU: number;
        static VK_FINAL: number;
        static VK_CONVERT: number;
        static VK_NONCONVERT: number;
        static VK_ACCEPT: number;
        static VK_MODECHANGE: number;
        static VK_KANA: number;
        static VK_KANJI: number;
        static VK_ALPHANUMERIC: number;
        static VK_KATAKANA: number;
        static VK_HIRAGANA: number;
        static VK_FULL_WIDTH: number;
        static VK_HALF_WIDTH: number;
        static VK_ROMAN_CHARACTERS: number;
        static VK_ALL_CANDIDATES: number;
        static VK_PREVIOUS_CANDIDATE: number;
        static VK_CODE_INPUT: number;
        static VK_JAPANESE_KATAKANA: number;
        static VK_JAPANESE_HIRAGANA: number;
        static VK_JAPANESE_ROMAN: number;
        static VK_KANA_LOCK: number;
        static VK_INPUT_METHOD_ON_OFF: number;
        static VK_CUT: number;
        static VK_COPY: number;
        static VK_PASTE: number;
        static VK_UNDO: number;
        static VK_AGAIN: number;
        static VK_FIND: number;
        static VK_PROPS: number;
        static VK_STOP: number;
        static VK_COMPOSE: number;
        static VK_ALT_GRAPH: number;
        static VK_BEGIN: number;
        static VK_UNDEFINED: number;
        static CHAR_UNDEFINED: string;
        static KEY_LOCATION_UNKNOWN: number;
        static KEY_LOCATION_STANDARD: number;
        static KEY_LOCATION_LEFT: number;
        static KEY_LOCATION_RIGHT: number;
        static KEY_LOCATION_NUMPAD: number;
        keyCode: number;
        keyChar: string;
        keyLocation: number;
        static serialVersionUID: number;
        private originalSource;
        constructor(source?: any, id?: any, when?: any, modifiers?: any, keyCode?: any, keyChar?: any, keyLocation?: any, isProxyActive?: any);
        getKeyCode(): number;
        setKeyCode(keyCode: number): void;
        getKeyChar(): string;
        setKeyChar(keyChar: string): void;
        setModifiers(modifiers: number): void;
        getKeyLocation(): number;
        static getKeyText(keyCode: number): string;
        static getKeyModifiersText(modifiers: number): string;
        isActionKey(): boolean;
        paramString(): string;
        getExtendedKeyCode(): number;
        /**
         * Returns an extended key code for a unicode character.
         *
         * @return for a unicode character with a corresponding {@code VK_} constant
         * -- this {@code VK_} constant; for a character appearing on the
         * primary level of a known keyboard layout -- a unique integer. If
         * a character does not appear on the primary level of a known
         * keyboard, {@code VK_UNDEFINED} is returned.
         *
         * @since 1.7
         */
        static getExtendedKeyCodeForChar(c: number): number;
        /**
         * Sets new modifiers by the old ones. The key modifiers override overlaping
         * mouse modifiers.
         */
        private setNewModifiers();
        private setOldModifiers();
    }
}
declare namespace java.awt.event {
    class MouseEvent extends java.awt.event.InputEvent {
        static MOUSE_FIRST: number;
        static MOUSE_LAST: number;
        static MOUSE_CLICKED: number;
        static MOUSE_CLICKED_$LI$(): number;
        static MOUSE_PRESSED: number;
        static MOUSE_PRESSED_$LI$(): number;
        static MOUSE_RELEASED: number;
        static MOUSE_RELEASED_$LI$(): number;
        static MOUSE_MOVED: number;
        static MOUSE_MOVED_$LI$(): number;
        static MOUSE_ENTERED: number;
        static MOUSE_ENTERED_$LI$(): number;
        static MOUSE_EXITED: number;
        static MOUSE_EXITED_$LI$(): number;
        static MOUSE_DRAGGED: number;
        static MOUSE_DRAGGED_$LI$(): number;
        static MOUSE_WHEEL: number;
        static MOUSE_WHEEL_$LI$(): number;
        static NOBUTTON: number;
        static BUTTON1: number;
        static BUTTON2: number;
        static BUTTON3: number;
        x: number;
        y: number;
        private xAbs;
        private yAbs;
        clickCount: number;
        button: number;
        popupTrigger: boolean;
        static serialVersionUID: number;
        static cachedNumberOfButtons: number;
        getLocationOnScreen(): java.awt.Point;
        getXOnScreen(): number;
        getYOnScreen(): number;
        private shouldExcludeButtonFromExtModifiers;
        getModifiersEx(): number;
        constructor(source?: any, id?: any, when?: any, modifiers?: any, x?: any, y?: any, xAbs?: any, yAbs?: any, clickCount?: any, popupTrigger?: any, button?: any);
        getX(): number;
        getY(): number;
        getPoint(): java.awt.Point;
        translatePoint(x: number, y: number): void;
        getClickCount(): number;
        getButton(): number;
        isPopupTrigger(): boolean;
        static getMouseModifiersText(modifiers: number): string;
        paramString(): string;
        private setNewModifiers();
        private setOldModifiers();
    }
}
declare namespace java.applet {
    class Applet extends java.awt.Panel {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        static __static_initializer_0(): void;
        constructor();
        init(): void;
    }
}
declare namespace javax.swing {
    abstract class AbstractButton extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.SwingConstants {
        /**
         * Identifies a change in the button's margins.
         */
        static MARGIN_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's vertical alignment.
         */
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's horizontal alignment.
         */
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's vertical text position.
         */
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's horizontal text position.
         */
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the border drawn, or having it not drawn.
         */
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the border highlighted when focused, or
         * not.
         */
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change from rollover enabled to disabled or back to enabled.
         */
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the button paint the content area.
         */
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon that represents the button.
         */
        static ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been pressed.
         */
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been selected.
         */
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the cursor is over the button.
         */
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the cursor is over the button
         * and it has been selected.
         */
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been disabled.
         */
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been disabled
         * and selected.
         */
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        private text;
        private margin;
        private defaultMargin;
        private defaultIcon;
        private pressedIcon;
        private disabledIcon;
        private selectedIcon;
        private disabledSelectedIcon;
        private rolloverIcon;
        private rolloverSelectedIcon;
        private paintBorder;
        private paintFocus;
        private rolloverEnabled;
        private contentAreaFilled;
        private verticalAlignment;
        private horizontalAlignment;
        private verticalTextPosition;
        private horizontalTextPosition;
        private iconTextGap;
        private mnemonic;
        private mnemonicIndex;
        private multiClickThreshhold;
        private borderPaintedSet;
        private rolloverEnabledSet;
        private iconTextGapSet;
        private contentAreaFilledSet;
        private __setLayout;
        defaultCapable: boolean;
        /**
         * Combined listeners: ActionListener, ChangeListener, ItemListener.
         */
        private handler;
        /**
         * The button model's <code>changeListener</code>.
         */
        changeListener: javax.swing.event.ChangeListener;
        /**
         * The button model's <code>ActionListener</code>.
         */
        actionListener: java.awt.event.ActionListener;
        /**
         * The button model's <code>ItemListener</code>.
         */
        itemListener: java.awt.event.ItemListener;
        /**
         * Only one <code>ChangeEvent</code> is needed per button instance since the
         * event's only state is the source property. The source of events generated
         * is always "this".
         */
        changeEvent: javax.swing.event.ChangeEvent;
        private hideActionText;
        /**
         * Returns the button's text.
         *
         * @return the buttons text
         * @see #setText
         */
        getText(): string;
        setText(text: string): void;
        isSelected(): boolean;
        setSelected(b: boolean): void;
        doClick(): void;
        setMargin(m: java.awt.Insets): void;
        /**
         * Returns the margin between the button's border and the label.
         *
         * @return an <code>Insets</code> object specifying the margin between the
         * botton's border and the label
         * @see #setMargin
         */
        getMargin(): java.awt.Insets;
        /**
         * Returns the default icon.
         *
         * @return the default <code>Icon</code>
         * @see #setIcon
         */
        getIcon(): javax.swing.Icon;
        setIcon(defaultIcon: javax.swing.Icon): void;
        getPressedIcon(): javax.swing.Icon;
        setPressedIcon(pressedIcon: javax.swing.Icon): void;
        getSelectedIcon(): javax.swing.Icon;
        setSelectedIcon(selectedIcon: javax.swing.Icon): void;
        getRolloverIcon(): javax.swing.Icon;
        setRolloverIcon(rolloverIcon: javax.swing.Icon): void;
        getRolloverSelectedIcon(): javax.swing.Icon;
        setRolloverSelectedIcon(rolloverSelectedIcon: javax.swing.Icon): void;
        getDisabledIcon(): javax.swing.Icon;
        setDisabledIcon(disabledIcon: javax.swing.Icon): void;
        getDisabledSelectedIcon(): javax.swing.Icon;
        setDisabledSelectedIcon(disabledSelectedIcon: javax.swing.Icon): void;
        getVerticalAlignment(): number;
        setVerticalAlignment(alignment: number): void;
        getHorizontalAlignment(): number;
        setHorizontalAlignment(alignment: number): void;
        getVerticalTextPosition(): number;
        setVerticalTextPosition(textPosition: number): void;
        getHorizontalTextPosition(): number;
        setHorizontalTextPosition(textPosition: number): void;
        getIconTextGap(): number;
        setIconTextGap(iconTextGap: number): void;
        checkHorizontalKey(key: number, exception: string): number;
        checkVerticalKey(key: number, exception: string): number;
        setActionCommand(actionCommand: string): void;
        getActionCommand(): string;
        private action;
        setAction(a: javax.swing.Action): void;
        getAction(): javax.swing.Action;
        isBorderPainted(): boolean;
        setBorderPainted(b: boolean): void;
        isFocusPainted(): boolean;
        setFocusPainted(b: boolean): void;
        isContentAreaFilled(): boolean;
        setContentAreaFilled(b: boolean): void;
        isRolloverEnabled(): boolean;
        setRolloverEnabled(b: boolean): void;
        getMnemonic(): number;
        setMnemonic(mnemonic: number): void;
        setDisplayedMnemonicIndex(index: number): void;
        getDisplayedMnemonicIndex(): number;
        setMultiClickThreshhold(threshhold: number): void;
        getMultiClickThreshhold(): number;
        /**
         * Adds a <code>ChangeListener</code> to the button.
         *
         * @param l
         * the listener to be added
         */
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Removes a ChangeListener from the button.
         *
         * @param l
         * the listener to be removed
         */
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Returns an array of all the <code>ChangeListener</code>s added to this
         * AbstractButton with addChangeListener().
         *
         * @return all of the <code>ChangeListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.4
         */
        getChangeListeners(): javax.swing.event.ChangeListener[];
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created.
         *
         * @see EventListenerList
         */
        fireStateChanged(): void;
        /**
         * Adds an <code>ActionListener</code> to the button.
         *
         * @param l
         * the <code>ActionListener</code> to be added
         */
        addActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Removes an <code>ActionListener</code> from the button. If the listener
         * is the currently set <code>Action</code> for the button, then the
         * <code>Action</code> is set to <code>null</code>.
         *
         * @param l
         * the listener to be removed
         */
        removeActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Returns an array of all the <code>ActionListener</code>s added to this
         * AbstractButton with addActionListener().
         *
         * @return all of the <code>ActionListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.4
         */
        getActionListeners(): java.awt.event.ActionListener[];
        /**
         * Subclasses that want to handle <code>ChangeEvents</code> differently can
         * override this to return another <code>ChangeListener</code>
         * implementation.
         *
         * @return the new <code>ChangeListener</code>
         */
        createChangeListener(): javax.swing.event.ChangeListener;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created using the
         * <code>event</code> parameter.
         *
         * @param event
         * the <code>ActionEvent</code> object
         * @see EventListenerList
         */
        fireActionPerformed(event: java.awt.event.ActionEvent): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created using the
         * <code>event</code> parameter.
         *
         * @param event
         * the <code>ItemEvent</code> object
         * @see EventListenerList
         */
        fireItemStateChanged(event: java.awt.event.ItemEvent): void;
        createActionListener(): java.awt.event.ActionListener;
        createItemListener(): java.awt.event.ItemListener;
        /**
         * Enables (or disables) the button.
         *
         * @param b
         * true to enable the button, otherwise false
         */
        setEnabled(b: boolean): void;
        /**
         * Returns the label text.
         *
         * @return a <code>String</code> containing the label
         * @deprecated - Replaced by <code>getText</code>
         */
        getLabel(): string;
        /**
         * Sets the label text.
         *
         * @param label
         * a <code>String</code> containing the text
         * @deprecated - Replaced by <code>setText(text)</code>
         * @beaninfo bound: true description: Replace by setText(text)
         */
        setLabel(label: string): void;
        /**
         * Adds an <code>ItemListener</code> to the <code>checkbox</code>.
         *
         * @param l
         * the <code>ItemListener</code> to be added
         */
        addItemListener(l: java.awt.event.ItemListener): void;
        /**
         * Removes an <code>ItemListener</code> from the button.
         *
         * @param l
         * the <code>ItemListener</code> to be removed
         */
        removeItemListener(l: java.awt.event.ItemListener): void;
        /**
         * Returns an array of all the <code>ItemListener</code>s added to this
         * AbstractButton with addItemListener().
         *
         * @return all of the <code>ItemListener</code>s added or an empty array if
         * no listeners have been added
         * @since 1.4
         */
        getItemListeners(): java.awt.event.ItemListener[];
        /**
         * Returns an array (length 1) containing the label or <code>null</code> if
         * the button is not selected.
         *
         * @return an array containing 1 Object: the text of the button, if the item
         * is selected; otherwise <code>null</code>
         */
        getSelectedObjects(): any[];
        init(text: string, icon: javax.swing.Icon): void;
        imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, w: number, h: number): boolean;
        getHandler(): AbstractButton.Handler;
        constructor();
    }
    namespace AbstractButton {
        /**
         * Extends <code>ChangeListener</code> to be serializable.
         * <p>
         * <strong>Warning:</strong> Serialized objects of this class will not be
         * compatible with future Swing releases. The current serialization support
         * is appropriate for short term storage or RMI between applications running
         * the same version of Swing. As of 1.4, support for long term storage of
         * all JavaBeans&trade; has been added to the <code>java.beans</code>
         * package. Please see {@link java.beans.XMLEncoder}.
         */
        class ButtonChangeListener implements javax.swing.event.ChangeListener, java.io.Serializable {
            __parent: any;
            constructor(__parent: any);
            stateChanged(e: javax.swing.event.ChangeEvent): void;
        }
        class Handler implements java.awt.event.ActionListener, javax.swing.event.ChangeListener, java.awt.event.ItemListener, java.io.Serializable {
            __parent: any;
            stateChanged(e: javax.swing.event.ChangeEvent): void;
            actionPerformed(event: java.awt.event.ActionEvent): void;
            itemStateChanged(event: java.awt.event.ItemEvent): void;
            constructor(__parent: any);
        }
    }
}
declare namespace javax.swing {
    class JLabel extends javax.swing.JComponent implements javax.swing.SwingConstants {
        private mnemonic;
        private mnemonicIndex;
        private text;
        private defaultIcon;
        private disabledIcon;
        private disabledIconSet;
        private verticalAlignment;
        private horizontalAlignment;
        private verticalTextPosition;
        private horizontalTextPosition;
        private iconTextGap;
        labelFor: java.awt.Component;
        static LABELED_BY_PROPERTY: string;
        constructor(text?: any, icon?: any, horizontalAlignment?: any);
        htmlLabelElement: HTMLLabelElement;
        htmlImageElement: HTMLImageElement;
        createHTML(): void;
        initHTML(): void;
        getText(): string;
        setText(text: string): void;
        getIcon(): javax.swing.Icon;
        setIcon(icon: javax.swing.Icon): void;
        getDisabledIcon(): javax.swing.Icon;
        setDisabledIcon(disabledIcon: javax.swing.Icon): void;
        setDisplayedMnemonic$int(key: number): void;
        setDisplayedMnemonic(aChar?: any): any;
        getDisplayedMnemonic(): number;
        setDisplayedMnemonicIndex(index: number): void;
        getDisplayedMnemonicIndex(): number;
        checkHorizontalKey(key: number, message: string): number;
        checkVerticalKey(key: number, message: string): number;
        getIconTextGap(): number;
        setIconTextGap(iconTextGap: number): void;
        getVerticalAlignment(): number;
        setVerticalAlignment(alignment: number): void;
        getHorizontalAlignment(): number;
        setHorizontalAlignment(alignment: number): void;
        getVerticalTextPosition(): number;
        setVerticalTextPosition(textPosition: number): void;
        getHorizontalTextPosition(): number;
        setHorizontalTextPosition(textPosition: number): void;
        paramString(): string;
    }
}
declare namespace sun.awt {
    class ExtendedKeyCodes {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * ATTN: These are the readonly hashes with load factor == 1;
         * adding a value, please set the inital capacity to exact number of items
         * or higher.
         */
        static regularKeyCodesMap: java.util.HashMap<number, number>;
        static regularKeyCodesMap_$LI$(): java.util.HashMap<number, number>;
        static extendedKeyCodesSet: java.util.HashSet<number>;
        static extendedKeyCodesSet_$LI$(): java.util.HashSet<number>;
        static getExtendedKeyCodeForChar(c: number): number;
        static __static_initializer_0(): void;
    }
}
declare namespace java.awt.event {
    /**
     * An event which indicates that the mouse wheel was rotated in a component.
     * <P>
     * A wheel mouse is a mouse which has a wheel in place of the middle button.
     * This wheel can be rotated towards or away from the user.  Mouse wheels are
     * most often used for scrolling, though other uses are possible.
     * <P>
     * A MouseWheelEvent object is passed to every <code>MouseWheelListener</code>
     * object which registered to receive the "interesting" mouse events using the
     * component's <code>addMouseWheelListener</code> method.  Each such listener
     * object gets a <code>MouseEvent</code> containing the mouse event.
     * <P>
     * Due to the mouse wheel's special relationship to scrolling Components,
     * MouseWheelEvents are delivered somewhat differently than other MouseEvents.
     * This is because while other MouseEvents usually affect a change on
     * the Component directly under the mouse
     * cursor (for instance, when clicking a button), MouseWheelEvents often have
     * an effect away from the mouse cursor (moving the wheel while
     * over a Component inside a ScrollPane should scroll one of the
     * Scrollbars on the ScrollPane).
     * <P>
     * MouseWheelEvents start delivery from the Component underneath the
     * mouse cursor.  If MouseWheelEvents are not enabled on the
     * Component, the event is delivered to the first ancestor
     * Container with MouseWheelEvents enabled.  This will usually be
     * a ScrollPane with wheel scrolling enabled.  The source
     * Component and x,y coordinates will be relative to the event's
     * final destination (the ScrollPane).  This allows a complex
     * GUI to be installed without modification into a ScrollPane, and
     * for all MouseWheelEvents to be delivered to the ScrollPane for
     * scrolling.
     * <P>
     * Some AWT Components are implemented using native widgets which
     * display their own scrollbars and handle their own scrolling.
     * The particular Components for which this is true will vary from
     * platform to platform.  When the mouse wheel is
     * moved over one of these Components, the event is delivered straight to
     * the native widget, and not propagated to ancestors.
     * <P>
     * Platforms offer customization of the amount of scrolling that
     * should take place when the mouse wheel is moved.  The two most
     * common settings are to scroll a certain number of "units"
     * (commonly lines of text in a text-based component) or an entire "block"
     * (similar to page-up/page-down).  The MouseWheelEvent offers
     * methods for conforming to the underlying platform settings.  These
     * platform settings can be changed at any time by the user.  MouseWheelEvents
     * reflect the most recent settings.
     * <P>
     * The <code>MouseWheelEvent</code> class includes methods for
     * getting the number of "clicks" by which the mouse wheel is rotated.
     * The {@link #getWheelRotation} method returns the integer number
     * of "clicks" corresponding to the number of notches by which the wheel was
     * rotated. In addition to this method, the <code>MouseWheelEvent</code>
     * class provides the {@link #getPreciseWheelRotation} method which returns
     * a double number of "clicks" in case a partial rotation occurred.
     * The {@link #getPreciseWheelRotation} method is useful if a mouse supports
     * a high-resolution wheel, such as a freely rotating wheel with no
     * notches. Applications can benefit by using this method to process
     * mouse wheel events more precisely, and thus, making visual perception
     * smoother.
     *
     * @author Brent Christian
     * @see MouseWheelListener
     * @see java.awt.ScrollPane
     * @see java.awt.ScrollPane#setWheelScrollingEnabled(boolean)
     * @see javax.swing.JScrollPane
     * @see javax.swing.JScrollPane#setWheelScrollingEnabled(boolean)
     * @since 1.4
     */
    class MouseWheelEvent extends java.awt.event.MouseEvent {
        /**
         * Constant representing scrolling by "units" (like scrolling with the
         * arrow keys)
         *
         * @see #getScrollType
         */
        static WHEEL_UNIT_SCROLL: number;
        /**
         * Constant representing scrolling by a "block" (like scrolling
         * with page-up, page-down keys)
         *
         * @see #getScrollType
         */
        static WHEEL_BLOCK_SCROLL: number;
        /**
         * Indicates what sort of scrolling should take place in response to this
         * event, based on platform settings.  Legal values are:
         * <ul>
         * <li> WHEEL_UNIT_SCROLL
         * <li> WHEEL_BLOCK_SCROLL
         * </ul>
         *
         * @see #getScrollType
         */
        scrollType: number;
        /**
         * Only valid for scrollType WHEEL_UNIT_SCROLL.
         * Indicates number of units that should be scrolled per
         * click of mouse wheel rotation, based on platform settings.
         *
         * @see #getScrollAmount
         * @see #getScrollType
         */
        scrollAmount: number;
        /**
         * Indicates how far the mouse wheel was rotated.
         *
         * @see #getWheelRotation
         */
        wheelRotation: number;
        /**
         * Indicates how far the mouse wheel was rotated.
         *
         * @see #getPreciseWheelRotation
         */
        preciseWheelRotation: number;
        static serialVersionUID: number;
        /**
         * Constructs a <code>MouseWheelEvent</code> object with the specified
         * source component, type, modifiers, coordinates, absolute coordinates,
         * scroll type, scroll amount, and wheel rotation.
         * <p>Note that passing in an invalid <code>id</code> parameter results
         * in unspecified behavior. This method throws an
         * <code>IllegalArgumentException</code> if <code>source</code> equals
         * <code>null</code>.
         * <p>Even if inconsistent values for relative and absolute coordinates
         * are passed to the constructor, a <code>MouseWheelEvent</code> instance
         * is still created and no exception is thrown.
         *
         * @param source         the <code>Component</code> that originated the event
         * @param id             the integer value that identifies the event
         * @param when           a long value that gives the time when the event occurred
         * @param modifiers      the modifier keys down during event
         * (shift, ctrl, alt, meta)
         * @param x              the horizontal <code>x</code> coordinate for the
         * mouse location
         * @param y              the vertical <code>y</code> coordinate for the
         * mouse location
         * @param xAbs           the absolute horizontal <code>x</code> coordinate for
         * the mouse location
         * @param yAbs           the absolute vertical <code>y</code> coordinate for
         * the mouse location
         * @param clickCount     the number of mouse clicks associated with the event
         * @param popupTrigger   a boolean value, <code>true</code> if this event is a trigger
         * for a popup-menu
         * @param scrollType     the type of scrolling which should take place in
         * response to this event;  valid values are
         * <code>WHEEL_UNIT_SCROLL</code> and
         * <code>WHEEL_BLOCK_SCROLL</code>
         * @param  scrollAmount  for scrollType <code>WHEEL_UNIT_SCROLL</code>,
         * the number of units to be scrolled
         * @param wheelRotation  the integer number of "clicks" by which the mouse wheel
         * was rotated
         * @param preciseWheelRotation the double number of "clicks" by which the mouse wheel
         * was rotated
         *
         * @throws IllegalArgumentException if <code>source</code> is null
         * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, boolean)
         * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, int, int, boolean, int)
         * @since 1.7
         */
        constructor(source?: any, id?: any, when?: any, modifiers?: any, x?: any, y?: any, xAbs?: any, yAbs?: any, clickCount?: any, popupTrigger?: any, scrollType?: any, scrollAmount?: any, wheelRotation?: any, preciseWheelRotation?: any);
        /**
         * Returns the type of scrolling that should take place in response to this
         * event.  This is determined by the native platform.  Legal values are:
         * <ul>
         * <li> MouseWheelEvent.WHEEL_UNIT_SCROLL
         * <li> MouseWheelEvent.WHEEL_BLOCK_SCROLL
         * </ul>
         *
         * @return either MouseWheelEvent.WHEEL_UNIT_SCROLL or
         * MouseWheelEvent.WHEEL_BLOCK_SCROLL, depending on the configuration of
         * the native platform.
         * @see java.awt.Adjustable#getUnitIncrement
         * @see java.awt.Adjustable#getBlockIncrement
         * @see javax.swing.Scrollable#getScrollableUnitIncrement
         * @see javax.swing.Scrollable#getScrollableBlockIncrement
         */
        getScrollType(): number;
        /**
         * Returns the number of units that should be scrolled per
         * click of mouse wheel rotation.
         * Only valid if <code>getScrollType</code> returns
         * <code>MouseWheelEvent.WHEEL_UNIT_SCROLL</code>
         *
         * @return number of units to scroll, or an undefined value if
         * <code>getScrollType</code> returns
         * <code>MouseWheelEvent.WHEEL_BLOCK_SCROLL</code>
         * @see #getScrollType
         */
        getScrollAmount(): number;
        /**
         * Returns the number of "clicks" the mouse wheel was rotated, as an integer.
         * A partial rotation may occur if the mouse supports a high-resolution wheel.
         * In this case, the method returns zero until a full "click" has been accumulated.
         *
         * @return negative values if the mouse wheel was rotated up/away from
         * the user, and positive values if the mouse wheel was rotated down/
         * towards the user
         * @see #getPreciseWheelRotation
         */
        getWheelRotation(): number;
        /**
         * Returns the number of "clicks" the mouse wheel was rotated, as a double.
         * A partial rotation may occur if the mouse supports a high-resolution wheel.
         * In this case, the return value will include a fractional "click".
         *
         * @return negative values if the mouse wheel was rotated up or away from
         * the user, and positive values if the mouse wheel was rotated down or
         * towards the user
         * @see #getWheelRotation
         * @since 1.7
         */
        getPreciseWheelRotation(): number;
        /**
         * This is a convenience method to aid in the implementation of
         * the common-case MouseWheelListener - to scroll a ScrollPane or
         * JScrollPane by an amount which conforms to the platform settings.
         * (Note, however, that <code>ScrollPane</code> and
         * <code>JScrollPane</code> already have this functionality built in.)
         * <P>
         * This method returns the number of units to scroll when scroll type is
         * MouseWheelEvent.WHEEL_UNIT_SCROLL, and should only be called if
         * <code>getScrollType</code> returns MouseWheelEvent.WHEEL_UNIT_SCROLL.
         * <P>
         * Direction of scroll, amount of wheel movement,
         * and platform settings for wheel scrolling are all accounted for.
         * This method does not and cannot take into account value of the
         * Adjustable/Scrollable unit increment, as this will vary among
         * scrolling components.
         * <P>
         * A simplified example of how this method might be used in a
         * listener:
         * <pre>
         * mouseWheelMoved(MouseWheelEvent event) {
         * ScrollPane sp = getScrollPaneFromSomewhere();
         * Adjustable adj = sp.getVAdjustable()
         * if (MouseWheelEvent.getScrollType() == WHEEL_UNIT_SCROLL) {
         * int totalScrollAmount =
         * event.getUnitsToScroll() *
         * adj.getUnitIncrement();
         * adj.setValue(adj.getValue() + totalScrollAmount);
         * }
         * }
         * </pre>
         *
         * @return the number of units to scroll based on the direction and amount
         * of mouse wheel rotation, and on the wheel scrolling settings of the
         * native platform
         * @see #getScrollType
         * @see #getScrollAmount
         * @see MouseWheelListener
         * @see java.awt.Adjustable
         * @see java.awt.Adjustable#getUnitIncrement
         * @see javax.swing.Scrollable
         * @see javax.swing.Scrollable#getScrollableUnitIncrement
         * @see java.awt.ScrollPane
         * @see java.awt.ScrollPane#setWheelScrollingEnabled
         * @see javax.swing.JScrollPane
         * @see javax.swing.JScrollPane#setWheelScrollingEnabled
         */
        getUnitsToScroll(): number;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
