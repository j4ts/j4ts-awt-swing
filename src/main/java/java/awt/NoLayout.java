package java.awt;

import static jsweet.util.Lang.any;

import def.dom.HTMLDivElement;

public class NoLayout implements LayoutManager {

	boolean created = false;

	Container parent;

	public NoLayout() {
	}

	@Override
	public void addLayoutComponent(String name, Component component) {
		HTMLDivElement div = any(parent.getHTMLElement());
		div.appendChild(component.getHTMLElement());
	}

	@Override
	public void removeLayoutComponent(Component component) {
	}

	@Override
	public void layoutContainer(Container parent) {
		this.parent = parent;
	}
}
