package javax.swing.text;

import javax.swing.JComponent;

@SuppressWarnings("serial")
public abstract class JTextComponent extends JComponent {

	protected String text = "";
	protected boolean editable = true;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isEditable() {
		return editable;
	}

	public void setEditable(boolean editable) {
		this.editable = editable;
	}

}
