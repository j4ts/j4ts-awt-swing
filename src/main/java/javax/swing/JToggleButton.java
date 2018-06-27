package javax.swing;

import static def.dom.Globals.document;

import java.awt.AWTEvent;
import java.awt.event.ActionEvent;
import java.awt.event.InputEvent;
import java.awt.event.ItemEvent;

import jsweet.util.StringTypes;

public class JToggleButton extends AbstractButton {

	private static final long serialVersionUID = 1L;

	public JToggleButton() {
		this(null, null, false);
	}

	public JToggleButton(Icon icon) {
		this(null, icon, false);
	}

	public JToggleButton(Icon icon, boolean selected) {
		this(null, icon, selected);
	}

	public JToggleButton(String text) {
		this(text, null, false);
	}

	public JToggleButton(String text, boolean selected) {
		this(text, null, selected);
	}

	public JToggleButton(Action a) {
		this();
		setAction(a);
	}

	public JToggleButton(String text, Icon icon) {
		this(text, icon, false);
	}

	public JToggleButton(String text, Icon icon, boolean selected) {
		// Create the model
		setModel(new ToggleButtonModel());

		model.setSelected(selected);

		// initialize
		init(text, icon);
	}

	// *********************************************************************

	public static class ToggleButtonModel extends DefaultButtonModel {

		/**
		 * Creates a new ToggleButton Model
		 */
		public ToggleButtonModel() {
		}

		/**
		 * Checks if the button is selected.
		 */
		public boolean isSelected() {
			// if(getGroup() != null) {
			// return getGroup().isSelected(this);
			// } else {
			return (stateMask & SELECTED) != 0;
			// }
		}

		/**
		 * Sets the selected state of the button.
		 * 
		 * @param b
		 *            true selects the toggle button, false deselects the toggle
		 *            button.
		 */
		public void setSelected(boolean b) {
			ButtonGroup group = getGroup();
			if (group != null) {
				// use the group model instead
				group.setSelected(this, b);
				b = group.isSelected(this);
			}

			if (isSelected() == b) {
				return;
			}

			if (b) {
				stateMask |= SELECTED;
			} else {
				stateMask &= ~SELECTED;
			}

			// Send ChangeEvent
			fireStateChanged();

			// Send ItemEvent
			fireItemStateChanged(new ItemEvent(this, ItemEvent.ITEM_STATE_CHANGED, this,
					this.isSelected() ? ItemEvent.SELECTED : ItemEvent.DESELECTED));

		}

		/**
		 * Sets the pressed state of the toggle button.
		 */
		public void setPressed(boolean b) {
			if ((isPressed() == b) || !isEnabled()) {
				return;
			}

			if (b == false && isArmed()) {
				setSelected(!this.isSelected());
			}

			if (b) {
				stateMask |= PRESSED;
			} else {
				stateMask &= ~PRESSED;
			}

			fireStateChanged();

			if (!isPressed() && isArmed()) {
				int modifiers = 0;
				fireActionPerformed(
						new ActionEvent(this, ActionEvent.ACTION_PERFORMED, getActionCommand(), 0, modifiers));
			}

		}
	}

	protected String paramString() {
		return super.paramString();
	}

	boolean buttonCreated = false;

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.button);
		buttonCreated = true;
	}

	@Override
	public void initHTML() {
		super.initHTML();
		if (buttonCreated) {
			htmlElement.innerHTML = getText();
		}
	}

}
