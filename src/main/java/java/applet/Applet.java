package java.applet;

import def.dom.HTMLElement;
import def.dom.HTMLDivElement;
import def.dom.NodeList;
import jsweet.util.StringTypes;

import java.awt.*;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static jsweet.util.Lang.$new;
import static jsweet.util.Lang.any;
import static jsweet.util.Lang.object;

public class Applet extends Panel {

	static {
		window.addEventListener(StringTypes.load, e -> {
			def.js.Object[] divList = any(document.getElementsByClassName("applet"));
			if (divList.length == 0) {
				return null;
			}
			HTMLDivElement div = (HTMLDivElement) divList[0];
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

	public String getParameter(String param) {
		NodeList params = this.htmlElement.getElementsByTagName("param");
		HTMLElement paramNode;
		for (int i = 0; i < params.length ; i++) {
			paramNode = (HTMLElement)params.item(i);
			if (paramNode.getAttribute("name") == param) {
				return paramNode.getAttribute("value");
			}
		}
		return null;
	}


}
