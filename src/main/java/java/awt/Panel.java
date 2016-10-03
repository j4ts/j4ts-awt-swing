package java.awt;

import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.window;

import jsweet.dom.HTMLCanvasElement;
import jsweet.util.StringTypes;

public class Panel extends Container {

	private HTMLCanvasElement htmlCanvas;

	public Panel() {
		this(new FlowLayout());
	}

	public Panel(LayoutManager layout) {
		setLayout(layout);
	}

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.div);
	}

	@Override
	public Graphics getGraphics() {
		return new WebGraphics2D(htmlCanvas);
	}

	@Override
	public void setBackground(Color background) {
		super.setBackground(background);
		htmlElement.style.backgroundColor = null;
		if (background != null) {
			htmlCanvas.style.backgroundColor = background.toHTML();
		}
	}

	@Override
	public void doPaintInternal() {
		if (htmlCanvas.width == 0 && htmlCanvas.height == 0) {
			htmlCanvas.width = htmlElement.offsetWidth;
			htmlCanvas.height = htmlElement.offsetHeight;
		}
		super.doPaintInternal();
	}

	@Override
	public void initHTML() {
		super.initHTML();
		console.info("INIT PANEL");
		if (htmlCanvas == null) {
			htmlCanvas = document.createElement(StringTypes.canvas);
			htmlElement.appendChild(htmlCanvas);
			window.onresize = e -> {
				System.out.println("resizing");
				htmlCanvas.width = htmlElement.offsetWidth;
				htmlCanvas.height = htmlElement.offsetHeight;
				return e;
			};
		}
		if (background != null) {
			htmlElement.style.backgroundColor = null;
			htmlCanvas.style.backgroundColor = background.toHTML();
		}
		htmlCanvas.width = htmlElement.offsetWidth;
		htmlCanvas.height = htmlElement.offsetHeight;
		htmlCanvas.style.position = "absolute";
		htmlCanvas.style.zIndex = "-1";
	}

}
