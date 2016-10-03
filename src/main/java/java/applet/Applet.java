package java.applet;

import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.window;
import static jsweet.util.Globals.$get;
import static jsweet.util.Globals.$new;

import java.awt.Panel;

import jsweet.dom.Element;
import jsweet.dom.HTMLDivElement;
import jsweet.dom.NodeListOf;

public class Applet extends Panel {

	static {
		console.info("installing applet onload hook");
		window.onload = e -> {
			console.info("applet onload hook");
			NodeListOf<Element> divList = document.getElementsByClassName("applet");
			if (divList.length == 0) {
				return null;
			}
			HTMLDivElement div = (HTMLDivElement) divList.$get(0);
			if (div.getAttribute("data-applet") != null) {
				console.info("installing applet: " + div.getAttribute("data-applet"));
				// div.style.position = "relative";
				// HTMLCanvasElement canvas =
				// document.createElement(StringTypes.canvas);
				// canvas.setAttribute("width", div.getAttribute("data-width"));
				// canvas.setAttribute("height",
				// div.getAttribute("data-height"));
				// div.style.width = div.getAttribute("data-width");
				// div.style.height = div.getAttribute("data-height");
				// if (div.firstChild != null) {
				// div.insertBefore(canvas, div.firstChild);
				// } else {
				// div.appendChild(canvas);
				// }
				// canvas.style.position = "absolute";
				// canvas.style.left = "0px";
				// canvas.style.right = "0px";
				// canvas.style.width = div.style.width;
				// canvas.style.height = div.style.height;
				// canvas.style.zIndex = "-1";
				String[] names = div.getAttribute("data-applet").split(".");
				Object constructor = window;
				for (String name : names) {
					constructor = $get(constructor, name);
					console.info("name: " + name + " -> " + constructor);
				}
				Applet applet = $new(constructor);

				// div.style.width = div.getAttribute("data-width");
				// div.style.height = div.getAttribute("data-height");
				applet.setSize(Integer.parseInt(div.getAttribute("data-width")),
						Integer.parseInt(div.getAttribute("data-height")));

				applet.bindHTML(div);
				applet.init();
				applet.doPaintInternal();
			}
			return null;
		};
	}

	public Applet() {
	}

	public void init() {
	}

}
