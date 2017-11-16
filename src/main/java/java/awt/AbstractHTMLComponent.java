package java.awt;

import static jsweet.util.Lang.any;

import def.dom.HTMLElement;

public abstract class AbstractHTMLComponent implements HTMLComponent {

	HTMLElement htmlElement;

	@Override
	public void bindHTML(HTMLElement htmlElement) {
		this.htmlElement = htmlElement;
	}

	@Override
	public final HTMLElement getHTMLElement() {
		if (htmlElement == null) {
			createHTML();
			initHTML();
		}
		return any(htmlElement);
	}

	@Override
	public void initHTML() {
		if (htmlElement == null) {
			createHTML();
		}
	}

}
