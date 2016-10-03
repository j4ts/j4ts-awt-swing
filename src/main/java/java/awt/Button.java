package java.awt;

import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.document;
import static jsweet.util.Globals.any;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import jsweet.dom.HTMLButtonElement;
import jsweet.dom.HTMLElement;
import jsweet.util.StringTypes;

public class Button extends Component {

	ActionListener actionListener;
	String actionCommand;
	String label;
	Color background;

	public Button(String label) {
		this.label = label;
		this.actionCommand = label;
	}

	@Override
	public HTMLButtonElement getHTMLElement() {
		return any(super.getHTMLElement());
	}

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.button);
	}

	@Override
	public void initHTML() {
		super.initHTML();
		htmlElement.innerHTML = label;
		initActionListener();
	}

	private void initActionListener() {
		if (actionListener != null) {
			htmlElement.onclick = e -> {
				console.log("htmlElement clicked: " + actionCommand);
				this.actionListener.actionPerformed(new ActionEvent(this, 0, actionCommand));
				return e;
			};
		}
	}

	public void addActionListener(ActionListener actionListener) {
		this.actionListener = actionListener;
		if (htmlElement != null) {
			initActionListener();
		}
	}

	public final void setBackground(Color background) {
		this.background = background;
	}

}
