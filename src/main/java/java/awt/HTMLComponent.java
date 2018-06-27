package java.awt;

import def.dom.HTMLElement;

public interface HTMLComponent {

	HTMLElement getHTMLElement();

	void bindHTML(HTMLElement htmlElement);

	void createHTML();

	void initHTML();

}
