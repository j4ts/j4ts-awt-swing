/*
 * Copyright (c) 1997, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

package javax.swing;

import static def.dom.Globals.document;

import java.awt.Font;
import java.io.Serializable;

import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import def.dom.HTMLInputElement;
import jsweet.util.StringTypes;

@SuppressWarnings("serial")
public class JSlider extends JComponent implements SwingConstants {

	@Override
	public HTMLInputElement getHTMLElement() {
		return (HTMLInputElement) super.getHTMLElement();
	}

	@Override
	public void createHTML() {
		if (htmlElement != null) {
			return;
		}
		htmlElement = document.createElement(StringTypes.input);
		getHTMLElement().style.margin = "0px";
		getHTMLElement().style.padding = "0px";
		getHTMLElement().type = "range";
		getHTMLElement().onchange = e -> {
			setValue(Integer.parseInt(getHTMLElement().value));
			return null;
		};
		getHTMLElement().oninput = e -> {
			setValue(Integer.parseInt(getHTMLElement().value));
			return null;
		};
	}

	@Override
	public void initHTML() {
		super.initHTML();
		getHTMLElement().min = "" + getMinimum();
		getHTMLElement().max = "" + getMaximum();
		getHTMLElement().step = "" + 1;
		getHTMLElement().value = "" + getValue();
		try {
			if (getHTMLElement().hasAttribute("orient")) {
				getHTMLElement().setAttribute("orient", getOrientation() == VERTICAL ? "vertical" : "horizontal");
			}
			if (getHTMLElement().hasAttribute("-webkit-appearance")) {
				getHTMLElement().setAttribute("-webkit-appearance",
						getOrientation() == VERTICAL ? "slider-vertical" : "slider-horizontal");
			}
			if (getHTMLElement().hasAttribute("writing-mode")) {
				getHTMLElement().setAttribute("writing-mode", getOrientation() == VERTICAL ? "bt-lr" : null);
			}
		} catch (Exception e) {
			System.out.println("cannot apply orientation");
		}
	}

	/**
	 * @see #getUIClassID
	 * @see #readObject
	 */
	private static final String uiClassID = "SliderUI";

	private boolean paintTicks = false;
	private boolean paintTrack = true;
	private boolean paintLabels = false;
	private boolean isInverted = false;

	protected BoundedRangeModel sliderModel;

	protected int majorTickSpacing;

	protected int minorTickSpacing;

	protected boolean snapToTicks = false;

	boolean snapToValue = true;

	protected int orientation;

	protected ChangeListener changeListener = createChangeListener();

	protected transient ChangeEvent changeEvent = null;

	private void checkOrientation(int orientation) {
		switch (orientation) {
		case VERTICAL:
		case HORIZONTAL:
			break;
		default:
			throw new IllegalArgumentException("orientation must be one of: VERTICAL, HORIZONTAL");
		}
	}

	/**
	 * Creates a horizontal slider with the range 0 to 100 and an initial value
	 * of 50.
	 */
	public JSlider() {
		this(HORIZONTAL, 0, 100, 50);
	}

	public JSlider(int orientation) {
		this(orientation, 0, 100, 50);
	}

	public JSlider(int min, int max) {
		this(HORIZONTAL, min, max, (min + max) / 2);
	}

	public JSlider(int min, int max, int value) {
		this(HORIZONTAL, min, max, value);
	}

	public JSlider(int orientation, int min, int max, int value) {
		checkOrientation(orientation);
		this.orientation = orientation;
		setModel(new DefaultBoundedRangeModel(value, 0, min, max));
	}

	public JSlider(BoundedRangeModel brm) {
		this.orientation = HORIZONTAL;
		setModel(brm);
	}

	public String getUIClassID() {
		return uiClassID;
	}

	private class ModelListener implements ChangeListener, Serializable {
		public void stateChanged(ChangeEvent e) {
			fireStateChanged();
		}
	}

	protected ChangeListener createChangeListener() {
		return new ModelListener();
	}

	public void addChangeListener(ChangeListener l) {
		listenerList.add(ChangeListener.class, l);
	}

	public void removeChangeListener(ChangeListener l) {
		listenerList.remove(ChangeListener.class, l);
	}

	public ChangeListener[] getChangeListeners() {
		return listenerList.getListeners(ChangeListener.class);
	}

	protected void fireStateChanged() {
		Object[] listeners = listenerList.getListenerList();
		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ChangeListener.class) {
				if (changeEvent == null) {
					changeEvent = new ChangeEvent(this);
				}
				((ChangeListener) listeners[i + 1]).stateChanged(changeEvent);
			}
		}
	}

	public BoundedRangeModel getModel() {
		return sliderModel;
	}

	public void setModel(BoundedRangeModel newModel) {
		BoundedRangeModel oldModel = getModel();

		if (oldModel != null) {
			oldModel.removeChangeListener(changeListener);
		}

		sliderModel = newModel;

		if (newModel != null) {
			newModel.addChangeListener(changeListener);
		}

		if (htmlElement != null) {
			initHTML();
		}
		firePropertyChange("model", oldModel, sliderModel);
	}

	public int getValue() {
		return getModel().getValue();
	}

	public void setValue(int n) {
		BoundedRangeModel m = getModel();
		int oldValue = m.getValue();
		if (oldValue == n) {
			return;
		}
		m.setValue(n);

		if (getHTMLElement().valueAsNumber != getValue()) {
			getHTMLElement().valueAsNumber = getValue();
		}
	}

	public int getMinimum() {
		return getModel().getMinimum();
	}

	public void setMinimum(int minimum) {
		int oldMin = getModel().getMinimum();
		getModel().setMinimum(minimum);
		if (htmlElement != null) {
			initHTML();
		}
		firePropertyChange("minimum", Integer.valueOf(oldMin), Integer.valueOf(minimum));
	}

	public int getMaximum() {
		return getModel().getMaximum();
	}

	public void setMaximum(int maximum) {
		int oldMax = getModel().getMaximum();
		getModel().setMaximum(maximum);
		if (htmlElement != null) {
			initHTML();
		}
		firePropertyChange("maximum", Integer.valueOf(oldMax), Integer.valueOf(maximum));
	}

	public boolean getValueIsAdjusting() {
		return getModel().getValueIsAdjusting();
	}

	public void setValueIsAdjusting(boolean b) {
		BoundedRangeModel m = getModel();
		m.setValueIsAdjusting(b);
	}

	public int getExtent() {
		return getModel().getExtent();
	}

	public void setExtent(int extent) {
		getModel().setExtent(extent);
	}

	/**
	 * Return this slider's vertical or horizontal orientation.
	 * 
	 * @return {@code SwingConstants.VERTICAL} or
	 *         {@code SwingConstants.HORIZONTAL}
	 * @see #setOrientation
	 */
	public int getOrientation() {
		return orientation;
	}

	public void setOrientation(int orientation) {
		checkOrientation(orientation);
		int oldValue = this.orientation;
		this.orientation = orientation;
		firePropertyChange("orientation", oldValue, orientation);

		if (orientation != oldValue) {
			if (htmlElement != null) {
				initHTML();
			}
		}
	}

	/**
	 * {@inheritDoc}
	 *
	 * @since 1.6
	 */
	public void setFont(Font font) {
		super.setFont(font);
	}

	/**
	 * This method returns the major tick spacing. The number that is returned
	 * represents the distance, measured in values, between each major tick
	 * mark. If you have a slider with a range from 0 to 50 and the major tick
	 * spacing is set to 10, you will get major ticks next to the following
	 * values: 0, 10, 20, 30, 40, 50.
	 *
	 * @return the number of values between major ticks
	 * @see #setMajorTickSpacing
	 */

	/* TODO not working at all :( it need to integrate some fancy lib

	public int getMajorTickSpacing() {
		return majorTickSpacing;
	}

	public void setMajorTickSpacing(int n) {
		int oldValue = majorTickSpacing;
		majorTickSpacing = n;
		firePropertyChange("majorTickSpacing", oldValue, majorTickSpacing);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public int getMinorTickSpacing() {
		return minorTickSpacing;
	}

	public void setMinorTickSpacing(int n) {
		int oldValue = minorTickSpacing;
		minorTickSpacing = n;
		firePropertyChange("minorTickSpacing", oldValue, minorTickSpacing);
		if (htmlElement != null) {
			initHTML();
		}
	}

	public boolean getSnapToTicks() {
		return snapToTicks;
	}

	boolean getSnapToValue() {
		return snapToValue;
	}

	public void setSnapToTicks(boolean b) {
		boolean oldValue = snapToTicks;
		snapToTicks = b;
		firePropertyChange("snapToTicks", oldValue, snapToTicks);
	}

	void setSnapToValue(boolean b) {
		boolean oldValue = snapToValue;
		snapToValue = b;
		firePropertyChange("snapToValue", oldValue, snapToValue);
	}

	public boolean getPaintTicks() {
		return paintTicks;
	}

	public void setPaintTicks(boolean b) {
		boolean oldValue = paintTicks;
		paintTicks = b;
		firePropertyChange("paintTicks", oldValue, paintTicks);
		if (paintTicks != oldValue) {
			revalidate();
			repaint();
		}
	}

	public boolean getPaintTrack() {
		return paintTrack;
	}

	public void setPaintTrack(boolean b) {
		boolean oldValue = paintTrack;
		paintTrack = b;
		firePropertyChange("paintTrack", oldValue, paintTrack);
		if (paintTrack != oldValue) {
			repaint();
		}
	}

	public boolean getPaintLabels() {
		return paintLabels;
	}

	public void setPaintLabels(boolean b) {
		boolean oldValue = paintLabels;
		paintLabels = b;
		firePropertyChange("paintLabels", oldValue, paintLabels);
		if (paintLabels != oldValue) {
			revalidate();
			repaint();
		}
	}
	*/

	/**
	 * Returns a string representation of this JSlider. This method is intended
	 * to be used only for debugging purposes, and the content and format of the
	 * returned string may vary between implementations. The returned string may
	 * be empty but may not be <code>null</code>.
	 *
	 * @return a string representation of this JSlider.
	 */
	protected String paramString() {
		String paintTicksString = (paintTicks ? "true" : "false");
		String paintTrackString = (paintTrack ? "true" : "false");
		String paintLabelsString = (paintLabels ? "true" : "false");
		String isInvertedString = (isInverted ? "true" : "false");
		String snapToTicksString = (snapToTicks ? "true" : "false");
		String snapToValueString = (snapToValue ? "true" : "false");
		String orientationString = (orientation == HORIZONTAL ? "HORIZONTAL" : "VERTICAL");

		return super.paramString() + ",isInverted=" + isInvertedString + ",majorTickSpacing=" + majorTickSpacing
				+ ",minorTickSpacing=" + minorTickSpacing + ",orientation=" + orientationString + ",paintLabels="
				+ paintLabelsString + ",paintTicks=" + paintTicksString + ",paintTrack=" + paintTrackString
				+ ",snapToTicks=" + snapToTicksString + ",snapToValue=" + snapToValueString;
	}

}
