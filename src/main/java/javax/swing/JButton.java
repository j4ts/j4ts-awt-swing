package javax.swing;

import static def.dom.Globals.console;
import static def.dom.Globals.document;
import static jsweet.util.Lang.any;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import def.dom.HTMLButtonElement;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JButton extends AbstractButton {

	ActionListener actionListener;
	String actionCommand;
	String label;
	Color background;

	public JButton(String label) {
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
