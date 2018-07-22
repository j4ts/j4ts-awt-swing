package java.awt;

import def.dom.*;
import def.js.Array;
import jsweet.util.Lang;

import java.awt.event.FocusListener;
import java.awt.event.MouseListener;
import java.awt.event.MouseWheelListener;
import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;

import static jsweet.util.Lang.any;
import static jsweet.util.Lang.array;

public abstract class Component implements HTMLComponent {

	public static final float TOP_ALIGNMENT = 0.0f;

	public static final float CENTER_ALIGNMENT = 0.5f;

	public static final float BOTTOM_ALIGNMENT = 1.0f;

	public static final float LEFT_ALIGNMENT = 0.0f;

	public static final float RIGHT_ALIGNMENT = 1.0f;

	protected HTMLElement htmlElement;

	boolean enabled;

	boolean valid;

	Color background;

	Color foreground;

	Font font;

	boolean visible;

	String name;

	Integer x, y, width, height;

	Dimension preferredSize = new Dimension();

	Dimension minimumSize = new Dimension();

	public Container parent;

	@Override
	public final void bindHTML(HTMLElement htmlElement) {
		if (this.htmlElement != null) {
			if (htmlElement.tagName == this.htmlElement.tagName) {
				Array<Node> nodes = new Array<>();

				for (int i = 0; i < this.htmlElement.childNodes.length; ++i) {
					nodes.push(this.htmlElement.childNodes.$get(i));
				}
				for (Node n : nodes) {
					this.htmlElement.removeChild(n);
					htmlElement.appendChild(n);
				}
				this.htmlElement = htmlElement;
				initHTML();
			} else {
				throw new RuntimeException("already bound (incompatible node types): " + htmlElement.tagName + " != "
						+ this.htmlElement.tagName);
			}
		} else {
			this.htmlElement = htmlElement;
			initHTML();
		}
	}

	@Override
	public HTMLElement getHTMLElement() {
		if (htmlElement == null) {
			initHTML();
		}
		return any(htmlElement);
	}

	@Override
	public void initHTML() {
		if (htmlElement == null) {
			createHTML();
		}
		// htmlElement.id = "cmp-" + this.getClass().getName() + "-" + Component.CURRENT_ID++;

		if (background != null) {
			htmlElement.style.backgroundColor = background.toHTML();
		}
		if (width != null) {
			htmlElement.style.width = width + "px";
		} else {
			htmlElement.style.width = "100%";
		}
		if (height != null) {
			htmlElement.style.height = height + "px";
		} else {
			htmlElement.style.height = "100%";
		}
		if (x != null) {
			htmlElement.style.left = x + "px";
		}
		if (y != null) {
			htmlElement.style.top = y + "px";
		}
	}

	public Point getLocationOnScreen() {
		return new Point(getX(), getY());
	}

	public Rectangle getBounds() {
		return new Rectangle(getX(), getY(), getWidth(), getHeight());
	}

	public void setBounds(Rectangle rectangle) {
		setBounds(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	}

	public void setBounds(int x, int y, int width, int height) {
		if (this.x != x) {
			this.x = x;
			if (htmlElement != null) {
				htmlElement.style.left = x + "px";
			}
		}
		if (this.y != y) {
			this.y = y;
			if (htmlElement != null) {
				htmlElement.style.top = y + "px";
			}
		}
		setSize(width, height);
	}

	public int getWidth() {
		return (int) htmlElement.offsetWidth;
	}

	public int getHeight() {
		return (int) htmlElement.offsetHeight;
	}

	public int getX() {
		return (int) htmlElement.offsetLeft;
	}

	public int getY() {
		return (int) htmlElement.offsetTop;
	}

	public void setSize(int width, int height) {
		if (this.width != width) {
			this.width = width;
			if (htmlElement != null) {
				htmlElement.style.width = width + "px";
			}
		}
		if (this.height != height) {
			this.height = height;
			if (htmlElement != null) {
				htmlElement.style.height = height + "px";
			}
		}
	}

	public void setSize(Dimension d) {
		setSize(d.width, d.height);
	}

	private PropertyChangeSupport changeSupport;

	public static int CURRENT_ID = 0;

	public PropertyChangeListener[] getPropertyChangeListeners(String propertyName) {
		if (changeSupport == null) {
			return new PropertyChangeListener[0];
		}
		return changeSupport.getPropertyChangeListeners(propertyName);
	}

	public void addPropertyChangeListener(PropertyChangeListener listener) {
		if (listener == null) {
			return;
		}
		if (changeSupport == null) {
			changeSupport = new PropertyChangeSupport(this);
		}
		changeSupport.addPropertyChangeListener(listener);
	}

	public void removePropertyChangeListener(PropertyChangeListener listener) {
		if (listener == null || changeSupport == null) {
			return;
		}
		changeSupport.removePropertyChangeListener(listener);
	}

	public PropertyChangeListener[] getPropertyChangeListeners() {
		if (changeSupport == null) {
			return new PropertyChangeListener[0];
		}
		return changeSupport.getPropertyChangeListeners();
	}

	public void addPropertyChangeListener(String propertyName, PropertyChangeListener listener) {
		if (listener == null) {
			return;
		}
		if (changeSupport == null) {
			changeSupport = new PropertyChangeSupport(this);
		}
		changeSupport.addPropertyChangeListener(propertyName, listener);
	}

	public void removePropertyChangeListener(String propertyName, PropertyChangeListener listener) {
		if (listener == null || changeSupport == null) {
			return;
		}
		changeSupport.removePropertyChangeListener(propertyName, listener);
	}

	protected void firePropertyChange(String propertyName, Object oldValue, Object newValue) {
		PropertyChangeSupport changeSupport;
		changeSupport = this.changeSupport;
		if (changeSupport == null || (oldValue != null && newValue != null && oldValue.equals(newValue))) {
			return;
		}
		changeSupport.firePropertyChange(propertyName, oldValue, newValue);
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;

		switch (getHTMLElement().tagName.toLowerCase()) {
			// https://www.w3schools.com/tags/att_disabled.asp
			case "button":
				(Lang.<HTMLButtonElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "fieldset":
				(Lang.<HTMLFieldSetElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "input":
				(Lang.<HTMLInputElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "optgroup":
				(Lang.<HTMLOptGroupElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "option":
				(Lang.<HTMLOptionElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "select":
				(Lang.<HTMLSelectElement> any(getHTMLElement())).disabled = !enabled;
				break;
			case "textarea":
				(Lang.<HTMLTextAreaElement> any(getHTMLElement())).disabled = !enabled;
				break;
		}
	}

	public Color getBackground() {
		return background;
	}

	public void setBackground(Color background) {
		this.background = background;
		getHTMLElement().style.backgroundColor = background.toHTML();
	}

	public Color getForeground() {
		return foreground;
	}

	public void setForeground(Color foreground) {
		this.foreground = foreground;
		getHTMLElement().style.color = foreground.toHTML();
	}

	public Font getFont() {
		return font;
	}

	public void setFont(Font font) {
		this.font = font;
		getHTMLElement().style.font = font.toHTML();
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
		getHTMLElement().style.visibility = visible ? "visible" : "hidden";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	protected String paramString() {
		String thisName = getName();
		String str = (thisName != null ? thisName : "") + "," + getX() + "," + getY() + "," + getWidth() + "x"
				+ getHeight();
		if (!isValid()) {
			str += ",invalid";
		}
		if (!visible) {
			str += ",hidden";
		}
		if (!enabled) {
			str += ",disabled";
		}
		return str;
	}

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public void validate() {
	}

	public void paint(Graphics g) {
	}

	public void update(Graphics g) {
		paint(g);
	}

	public void paintAll(Graphics g) {
		paint(g);
	}

	public Graphics getGraphics() {
		return null;
	}

	public void doPaintInternal() {
		Graphics g = getGraphics();
		if (g != null) {
			paint(g);
		}
	}

	public Dimension getPreferredSize() {
		return preferredSize;
	}

	public void setPreferredSize(Dimension preferredSize) {
		this.preferredSize = preferredSize;
	}

	public boolean getIgnoreRepaint() {
		return false;
	}

	public void setIgnoreRepaint(boolean ignoreRepaint) {
		// ignored
	}

	public Container getParent() {
		return parent;
	}

	public Dimension getSize() {
		return new Dimension(width, height);
	}

	public void revalidate() {
		if (getHTMLElement() != null) {
			initHTML();
		}
	}

	public void invalidate() {
		// do nothing
	}

	public void repaint() {
		paint(getGraphics());
	}

	public void addFocusListener(FocusListener l) {
		// TODO
	}

	public Dimension getMinimumSize() {
		return minimumSize;
	}

	public void setMinimumSize(Dimension minimumSize) {
		this.minimumSize = minimumSize;
	}

	public void setLocation(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public void setLocation(Point p) {
		this.x = p.x;
		this.y = p.y;
	}

	private Cursor cursor;

	public Cursor getCursor() {
		return cursor;
	}

	public void setCursor(Cursor cursor) {
		this.cursor = cursor;
	}

	MouseWheelListener[] mouseWheelListeners = {};

	public synchronized void addMouseWheelListener(MouseWheelListener l) {
		if (l == null) {
			return;
		}
		array(mouseWheelListeners).push(l);
	}

	public synchronized void removeMouseWheelListener(MouseWheelListener l) {
		if (l == null) {
			return;
		}
		array(mouseWheelListeners).splice(array(mouseWheelListeners).indexOf(l), 1);
	}

	public synchronized MouseWheelListener[] getMouseWheelListeners() {
		return mouseWheelListeners;
	}

	MouseListener[] mouseListeners = {};

	public synchronized void addMouseListener(MouseListener l) {
		if (l == null) {
			return;
		}
		array(mouseListeners).push(l);
	}

	public synchronized void removeMouseListener(MouseListener l) {
		if (l == null) {
			return;
		}
		array(mouseListeners).splice(array(mouseListeners).indexOf(l), 1);
	}

	public synchronized MouseListener[] getMouseListeners() {
		return mouseListeners;
	}

	public void requestFocus() {
		// ignore
	}

}
