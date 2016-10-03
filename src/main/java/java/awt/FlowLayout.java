package java.awt;

import jsweet.dom.HTMLElement;

public class FlowLayout implements LayoutManager {

	boolean created = false;

	Container parent;

	public static final int LEFT = 0;
	public static final int CENTER = 1;
	public static final int RIGHT = 2;
	public static final int LEADING = 3;
	public static final int TRAILING = 4;

	int align;
	int hgap;
	int vgap;
	private boolean alignOnBaseline;

	public FlowLayout() {
		this(CENTER, 5, 5);
	}

	public FlowLayout(int align) {
		this(align, 5, 5);
	}

	public FlowLayout(int align, int hgap, int vgap) {
		this.hgap = hgap;
		this.vgap = vgap;
		setAlignment(align);
	}

	public int getAlignment() {
		return align;
	}

	public void setAlignment(int align) {
		this.align = align;
	}

	@Override
	public void addLayoutComponent(String name, Component component) {
	}

	@Override
	public void removeLayoutComponent(Component component) {
	}

	@Override
	public void layoutContainer(Container parent) {
		if (!created) {
			this.parent = parent;
			created = true;
		}
	}

	@Override
	public void onComponentAdded(Container parent, Component component, int position) {
		HTMLElement element = component.getHTMLElement();
		switch (align) {
		case CENTER:
		case LEFT:
		case LEADING:
			element.style.display = "inline-block";
			element.style.marginRight = hgap + "px";
			element.style.marginBottom = vgap + "px";
			element.style.verticalAlign = "top";
			break;
		case RIGHT:
		case TRAILING:
			element.style.cssFloat = "right";
			element.style.marginLeft = hgap + "px";
			element.style.marginBottom = vgap + "px";
			break;
		}
		// hack: force grid layout table to not take 100% of the height
		if (component instanceof Container && ((Container) component).getLayout() instanceof GridLayout) {
			((GridLayout) ((Container) component).getLayout()).table.style.height = "auto";
		}
		parent.getHTMLElement().appendChild(element);
	}

	public Container getParent() {
		return parent;
	}

	public void setParent(Container parent) {
		this.parent = parent;
	}

	public int getHgap() {
		return hgap;
	}

	public void setHgap(int hgap) {
		this.hgap = hgap;
	}

	public int getVgap() {
		return vgap;
	}

	public void setVgap(int vgap) {
		this.vgap = vgap;
	}
}
