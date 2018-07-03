package java.applet;

import static def.dom.Globals.console;
import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static jsweet.util.Lang.$new;
import static jsweet.util.Lang.object;

import java.awt.Panel;

import def.dom.Element;
import def.dom.HTMLDivElement;
import def.dom.NodeList;
import def.dom.NodeListOf;
import jsweet.util.StringTypes;

public class Applet extends Panel {

	static {
		window.addEventListener(StringTypes.load, e -> {
			NodeList divList = document.getElementsByClassName("applet");
			if (divList.length == 0) {
				return null;
			}
			HTMLDivElement div = (HTMLDivElement) divList.$get(0);
			if (div.getAttribute("data-applet") != null) {
				String[] names = div.getAttribute("data-applet").split(".");
				Object constructor = window;
				for (String name : names) {
					constructor = object(constructor).$get(name);
				}
				Applet applet = $new(constructor);

				applet.setSize(Integer.parseInt(div.getAttribute("data-width")),
						Integer.parseInt(div.getAttribute("data-height")));

				applet.bindHTML(div);
				applet.init();
				applet.doPaintInternal();
			}
			return null;
		});
	}

	public Applet() {
	}

	public void init() {
	}

}
