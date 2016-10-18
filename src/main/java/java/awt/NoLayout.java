package java.awt;

import static jsweet.util.Globals.any;

import jsweet.dom.HTMLDivElement;

public class NoLayout implements LayoutManager {

	boolean created = false;

	Container parent;

	public NoLayout() {
	}

	@Override
	public void addLayoutComponent(String name, Component component) {
	}

	@Override
	public void removeLayoutComponent(Component component) {
	}

	@Override
	public void layoutContainer(Container parent) {
	}

	@Override
	public void onComponentAdded(Container parent, Component component, int position) {
		HTMLDivElement div = any(parent.getHTMLElement());
		div.appendChild(component.getHTMLElement());
		component.getHTMLElement().style.width = "100%";
		component.getHTMLElement().style.height = "100%";
	}
}
