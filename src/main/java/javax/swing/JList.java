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

import static jsweet.util.Lang.any;

import java.awt.Color;
import java.awt.Component;
import java.awt.Font;
import java.awt.Point;
import java.awt.Rectangle;
import java.beans.Transient;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Vector;

import javax.swing.event.EventListenerList;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.text.Position;

/**
 * A component that displays a list of objects and allows the user to select one
 * or more items. A separate model, {@code ListModel}, maintains the contents of
 * the list.
 * <p>
 * It's easy to display an array or Vector of objects, using the {@code JList}
 * constructor that automatically builds a read-only {@code ListModel} instance
 * for you:
 * 
 * <pre>
 * {
 * 	&#64;code
 * 	// Create a JList that displays strings from an array
 *
 * 	String[] data = { "one", "two", "three", "four" };
 * 	JList<String> myList = new JList<String>(data);
 *
 * 	// Create a JList that displays the superclasses of JList.class, by
 * 	// creating it with a Vector populated with this data
 *
 * 	Vector<Class<?>> superClasses = new Vector<Class<?>>();
 * 	Class<JList> rootClass = javax.swing.JList.class;
 * 	for (Class<?> cls = rootClass; cls != null; cls = cls.getSuperclass()) {
 * 		superClasses.addElement(cls);
 * 	}
 * 	JList<Class<?>> myList = new JList<Class<?>>(superClasses);
 *
 * 	// The automatically created model is stored in JList's "model"
 * 	// property, which you can retrieve
 *
 * 	ListModel<Class<?>> model = myList.getModel();
 * 	for (int i = 0; i < model.getSize(); i++) {
 * 		System.out.println(model.getElementAt(i));
 * 	}
 * }
 * </pre>
 * <p>
 * A {@code ListModel} can be supplied directly to a {@code JList} by way of a
 * constructor or the {@code setModel} method. The contents need not be static -
 * the number of items, and the values of items can change over time. A correct
 * {@code ListModel} implementation notifies the set of
 * {@code javax.swing.event.ListDataListener}s that have been added to it, each
 * time a change occurs. These changes are characterized by a
 * {@code javax.swing.event.ListDataEvent}, which identifies the range of list
 * indices that have been modified, added, or removed. {@code JList}'s
 * {@code ListUI} is responsible for keeping the visual representation up to
 * date with changes, by listening to the model.
 * <p>
 * Simple, dynamic-content, {@code JList} applications can use the
 * {@code DefaultListModel} class to maintain list elements. This class
 * implements the {@code ListModel} interface and also provides a
 * <code>java.util.Vector</code>-like API. Applications that need a more custom
 * <code>ListModel</code> implementation may instead wish to subclass
 * {@code AbstractListModel}, which provides basic support for managing and
 * notifying listeners. For example, a read-only implementation of
 * {@code AbstractListModel}:
 * 
 * <pre>
 * {
 * 	&#64;code
 * 	// This list model has about 2^16 elements. Enjoy scrolling.
 *
 * 	ListModel<String> bigData = new AbstractListModel<String>() {
 * 		public int getSize() {
 * 			return Short.MAX_VALUE;
 * 		}
 * 
 * 		public String getElementAt(int index) {
 * 			return "Index " + index;
 * 		}
 * 	};
 * }
 * </pre>
 * <p>
 * The selection state of a {@code JList} is managed by another separate model,
 * an instance of {@code ListSelectionModel}. {@code JList} is initialized with
 * a selection model on construction, and also contains methods to query or set
 * this selection model. Additionally, {@code JList} provides convenient methods
 * for easily managing the selection. These methods, such as
 * {@code setSelectedIndex} and {@code getSelectedValue}, are cover methods that
 * take care of the details of interacting with the selection model. By default,
 * {@code JList}'s selection model is configured to allow any combination of
 * items to be selected at a time; selection mode
 * {@code MULTIPLE_INTERVAL_SELECTION}. The selection mode can be changed on the
 * selection model directly, or via {@code JList}'s cover method. Responsibility
 * for updating the selection model in response to user gestures lies with the
 * list's {@code ListUI}.
 * <p>
 * A correct {@code ListSelectionModel} implementation notifies the set of
 * {@code javax.swing.event.ListSelectionListener}s that have been added to it
 * each time a change to the selection occurs. These changes are characterized
 * by a {@code javax.swing.event.ListSelectionEvent}, which identifies the range
 * of the selection change.
 * <p>
 * The preferred way to listen for changes in list selection is to add
 * {@code ListSelectionListener}s directly to the {@code JList}. {@code JList}
 * then takes care of listening to the the selection model and notifying your
 * listeners of change.
 * <p>
 * Responsibility for listening to selection changes in order to keep the list's
 * visual representation up to date lies with the list's {@code ListUI}.
 * <p>
 * <a name="renderer"></a> Painting of cells in a {@code JList} is handled by a
 * delegate called a cell renderer, installed on the list as the
 * {@code cellRenderer} property. The renderer provides a
 * {@code java.awt.Component} that is used like a "rubber stamp" to paint the
 * cells. Each time a cell needs to be painted, the list's {@code ListUI} asks
 * the cell renderer for the component, moves it into place, and has it paint
 * the contents of the cell by way of its {@code paint} method. A default cell
 * renderer, which uses a {@code JLabel} component to render, is installed by
 * the lists's {@code ListUI}. You can substitute your own renderer using code
 * like this:
 * 
 * <pre>
 * {
 * 	&#64;code
 * 	// Display an icon and a string for each object in the list.
 *
 * 	class MyCellRenderer extends JLabel implements ListCellRenderer<Object> {
 * 		final static ImageIcon longIcon = new ImageIcon("long.gif");
 * 		final static ImageIcon shortIcon = new ImageIcon("short.gif");
 *
 * 		// This is the only method defined by ListCellRenderer.
 * 		// We just reconfigure the JLabel each time we're called.
 *
 * 		public Component getListCellRendererComponent(JList<?> list, // the
 * 																		// list
 * 				Object value, // value to display
 * 				int index, // cell index
 * 				boolean isSelected, // is the cell selected
 * 				boolean cellHasFocus) // does the cell have focus
 * 		{
 * 			String s = value.toString();
 * 			setText(s);
 * 			setIcon((s.length() > 10) ? longIcon : shortIcon);
 * 			if (isSelected) {
 * 				setBackground(list.getSelectionBackground());
 * 				setForeground(list.getSelectionForeground());
 * 			} else {
 * 				setBackground(list.getBackground());
 * 				setForeground(list.getForeground());
 * 			}
 * 			setEnabled(list.isEnabled());
 * 			setFont(list.getFont());
 * 			setOpaque(true);
 * 			return this;
 * 		}
 * 	}
 *
 * 	myList.setCellRenderer(new MyCellRenderer());
 * }
 * </pre>
 * <p>
 * Another job for the cell renderer is in helping to determine sizing
 * information for the list. By default, the list's {@code ListUI} determines
 * the size of cells by asking the cell renderer for its preferred size for each
 * list item. This can be expensive for large lists of items. To avoid these
 * calculations, you can set a {@code fixedCellWidth} and
 * {@code fixedCellHeight} on the list, or have these values calculated
 * automatically based on a single prototype value:
 * <a name="prototype_example"></a>
 * 
 * <pre>
 * {
 * 	&#64;code
 * 	JList<String> bigDataList = new JList<String>(bigData);
 *
 * 	// We don't want the JList implementation to compute the width
 * 	// or height of all of the list cells, so we give it a string
 * 	// that's as big as we'll need for any cell. It uses this to
 * 	// compute values for the fixedCellWidth and fixedCellHeight
 * 	// properties.
 *
 * 	bigDataList.setPrototypeCellValue("Index 1234567890");
 * }
 * </pre>
 * <p>
 * {@code JList} doesn't implement scrolling directly. To create a list that
 * scrolls, make it the viewport view of a {@code JScrollPane}. For example:
 * 
 * <pre>
 * JScrollPane scrollPane = new JScrollPane(myList);
 *
 * // Or in two steps:
 * JScrollPane scrollPane = new JScrollPane();
 * scrollPane.getViewport().setView(myList);
 * </pre>
 * <p>
 * {@code JList} doesn't provide any special handling of double or triple (or N)
 * mouse clicks, but it's easy to add a {@code MouseListener} if you wish to
 * take action on these events. Use the {@code locationToIndex} method to
 * determine what cell was clicked. For example:
 * 
 * <pre>
 * MouseListener mouseListener = new MouseAdapter() {
 * 	public void mouseClicked(MouseEvent e) {
 * 		if (e.getClickCount() == 2) {
 * 			int index = list.locationToIndex(e.getPoint());
 * 			System.out.println("Double clicked on Item " + index);
 * 		}
 * 	}
 * };
 * list.addMouseListener(mouseListener);
 * </pre>
 * <p>
 * <strong>Warning:</strong> Swing is not thread safe. For more information see
 * <a href="package-summary.html#threading">Swing's Threading Policy</a>.
 * <p>
 * <strong>Warning:</strong> Serialized objects of this class will not be
 * compatible with future Swing releases. The current serialization support is
 * appropriate for short term storage or RMI between applications running the
 * same version of Swing. As of 1.4, support for long term storage of all
 * JavaBeans&trade; has been added to the <code>java.beans</code> package.
 * Please see {@link java.beans.XMLEncoder}.
 * <p>
 * See <a href=
 * "http://docs.oracle.com/javase/tutorial/uiswing/components/list.html">How to
 * Use Lists</a> in <a href="http://docs.oracle.com/javase/tutorial/">
 * <em>The Java Tutorial</em></a> for further documentation.
 * <p>
 * 
 * @see ListModel
 * @see AbstractListModel
 * @see DefaultListModel
 * @see ListSelectionModel
 * @see DefaultListSelectionModel
 * @see ListCellRenderer
 * @see DefaultListCellRenderer
 *
 * @param <E>
 *            the type of the elements of this list
 *
 * @beaninfo attribute: isContainer false description: A component which allows
 *           for the selection of one or more objects from a list.
 *
 * @author Hans Muller
 */
public class JList<E> extends JComponent {

	@Override
	public void createHTML() {
		// TODO
	}

	/**
	 * Indicates a vertical layout of cells, in a single column; the default
	 * layout.
	 * 
	 * @see #setLayoutOrientation
	 * @since 1.4
	 */
	public static final int VERTICAL = 0;

	/**
	 * Indicates a "newspaper style" layout with cells flowing vertically then
	 * horizontally.
	 * 
	 * @see #setLayoutOrientation
	 * @since 1.4
	 */
	public static final int VERTICAL_WRAP = 1;

	/**
	 * Indicates a "newspaper style" layout with cells flowing horizontally then
	 * vertically.
	 * 
	 * @see #setLayoutOrientation
	 * @since 1.4
	 */
	public static final int HORIZONTAL_WRAP = 2;

	private int fixedCellWidth = -1;
	private int fixedCellHeight = -1;
	private int horizontalScrollIncrement = -1;
	private E prototypeCellValue;
	private int visibleRowCount = 8;
	private Color selectionForeground;
	private Color selectionBackground;
	private boolean dragEnabled;

	private ListSelectionModel selectionModel;
	private ListModel<E> dataModel;
	private ListCellRenderer<? super E> cellRenderer;
	private ListSelectionListener selectionListener;

	/**
	 * How to lay out the cells; defaults to <code>VERTICAL</code>.
	 */
	private int layoutOrientation;

	/**
	 * The drop mode for this component.
	 */
	private DropMode dropMode = DropMode.USE_SELECTION;

	/**
	 * Constructs a {@code JList} that displays elements from the specified,
	 * {@code non-null}, model. All {@code JList} constructors delegate to this
	 * one.
	 *
	 * @param dataModel
	 *            the model for the list
	 * @exception IllegalArgumentException
	 *                if the model is {@code null}
	 */
	public JList(ListModel<E> dataModel) {
		if (dataModel == null) {
			throw new IllegalArgumentException("dataModel must be non null");
		}

		layoutOrientation = VERTICAL;

		this.dataModel = dataModel;
		selectionModel = createSelectionModel();
		// setAutoscrolls(true);
		// setOpaque(true);
		// updateUI();
	}

	/**
	 * Constructs a <code>JList</code> that displays the elements in the
	 * specified array. This constructor creates a read-only model for the given
	 * array, and then delegates to the constructor that takes a
	 * {@code ListModel}.
	 * <p>
	 * Attempts to pass a {@code null} value to this method results in undefined
	 * behavior and, most likely, exceptions. The created model references the
	 * given array directly. Attempts to modify the array after constructing the
	 * list results in undefined behavior.
	 *
	 * @param listData
	 *            the array of Objects to be loaded into the data model,
	 *            {@code non-null}
	 */
	public JList(final E[] listData) {
		this(new AbstractListModel<E>() {
			public int getSize() {
				return listData.length;
			}

			public E getElementAt(int i) {
				return listData[i];
			}
		});
	}

	/**
	 * Constructs a <code>JList</code> that displays the elements in the
	 * specified <code>Vector</code>. This constructor creates a read-only model
	 * for the given {@code Vector}, and then delegates to the constructor that
	 * takes a {@code ListModel}.
	 * <p>
	 * Attempts to pass a {@code null} value to this method results in undefined
	 * behavior and, most likely, exceptions. The created model references the
	 * given {@code Vector} directly. Attempts to modify the {@code Vector}
	 * after constructing the list results in undefined behavior.
	 *
	 * @param listData
	 *            the <code>Vector</code> to be loaded into the data model,
	 *            {@code non-null}
	 */
	public JList(final Vector<? extends E> listData) {
		this(new AbstractListModel<E>() {
			public int getSize() {
				return listData.size();
			}

			public E getElementAt(int i) {
				return listData.elementAt(i);
			}
		});
	}

	/**
	 * Constructs a <code>JList</code> with an empty, read-only, model.
	 */
	public JList() {
		this(new AbstractListModel<E>() {
			public int getSize() {
				return 0;
			}

			public E getElementAt(int i) {
				throw new IndexOutOfBoundsException("No Data Model");
			}
		});
	}

	/*
	 * -----private----- This method is called by setPrototypeCellValue and
	 * setCellRenderer to update the fixedCellWidth and fixedCellHeight
	 * properties from the current value of prototypeCellValue (if it's non
	 * null). <p> This method sets fixedCellWidth and fixedCellHeight but does
	 * <b>not</b> generate PropertyChangeEvents for them.
	 *
	 * @see #setPrototypeCellValue
	 * 
	 * @see #setCellRenderer
	 */
	private void updateFixedCellSize() {
		ListCellRenderer<? super E> cr = getCellRenderer();
		E value = getPrototypeCellValue();

		if ((cr != null) && (value != null)) {
			Component c = cr.getListCellRendererComponent(this, value, 0, false, false);

			/*
			 * The ListUI implementation will add Component c to its private
			 * CellRendererPane however we can't assume that's already been done
			 * here. So we temporarily set the one "inherited" property that may
			 * affect the renderer components preferred size: its font.
			 */
			Font f = c.getFont();
			c.setFont(getFont());

			// Dimension d = c.getPreferredSize();
			// fixedCellWidth = d.width;
			// fixedCellHeight = d.height;

			c.setFont(f);
		}
	}

	/**
	 * Returns the "prototypical" cell value -- a value used to calculate a
	 * fixed width and height for cells. This can be {@code null} if there is no
	 * such value.
	 *
	 * @return the value of the {@code prototypeCellValue} property
	 * @see #setPrototypeCellValue
	 */
	public E getPrototypeCellValue() {
		return prototypeCellValue;
	}

	/**
	 * Sets the {@code prototypeCellValue} property, and then (if the new value
	 * is {@code non-null}), computes the {@code fixedCellWidth} and
	 * {@code fixedCellHeight} properties by requesting the cell renderer
	 * component for the given value (and index 0) from the cell renderer, and
	 * using that component's preferred size.
	 * <p>
	 * This method is useful when the list is too long to allow the
	 * {@code ListUI} to compute the width/height of each cell, and there is a
	 * single cell value that is known to occupy as much space as any of the
	 * others, a so-called prototype.
	 * <p>
	 * While all three of the {@code prototypeCellValue},
	 * {@code fixedCellHeight}, and {@code fixedCellWidth} properties may be
	 * modified by this method, {@code PropertyChangeEvent} notifications are
	 * only sent when the {@code prototypeCellValue} property changes.
	 * <p>
	 * To see an example which sets this property, see the
	 * <a href="#prototype_example">class description</a> above.
	 * <p>
	 * The default value of this property is <code>null</code>.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param prototypeCellValue
	 *            the value on which to base <code>fixedCellWidth</code> and
	 *            <code>fixedCellHeight</code>
	 * @see #getPrototypeCellValue
	 * @see #setFixedCellWidth
	 * @see #setFixedCellHeight
	 * @see JComponent#addPropertyChangeListener
	 * @beaninfo bound: true attribute: visualUpdate true description: The cell
	 *           prototype value, used to compute cell width and height.
	 */
	public void setPrototypeCellValue(E prototypeCellValue) {
		E oldValue = this.prototypeCellValue;
		this.prototypeCellValue = prototypeCellValue;

		/*
		 * If the prototypeCellValue has changed and is non-null, then recompute
		 * fixedCellWidth and fixedCellHeight.
		 */

		if ((prototypeCellValue != null) && !prototypeCellValue.equals(oldValue)) {
			updateFixedCellSize();
		}

		firePropertyChange("prototypeCellValue", oldValue, prototypeCellValue);
	}

	/**
	 * Returns the value of the {@code fixedCellWidth} property.
	 *
	 * @return the fixed cell width
	 * @see #setFixedCellWidth
	 */
	public int getFixedCellWidth() {
		return fixedCellWidth;
	}

	/**
	 * Sets a fixed value to be used for the width of every cell in the list. If
	 * {@code width} is -1, cell widths are computed in the {@code ListUI} by
	 * applying <code>getPreferredSize</code> to the cell renderer component for
	 * each list element.
	 * <p>
	 * The default value of this property is {@code -1}.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param width
	 *            the width to be used for all cells in the list
	 * @see #setPrototypeCellValue
	 * @see #setFixedCellWidth
	 * @see JComponent#addPropertyChangeListener
	 * @beaninfo bound: true attribute: visualUpdate true description: Defines a
	 *           fixed cell width when greater than zero.
	 */
	public void setFixedCellWidth(int width) {
		int oldValue = fixedCellWidth;
		fixedCellWidth = width;
		firePropertyChange("fixedCellWidth", oldValue, fixedCellWidth);
	}

	/**
	 * Returns the value of the {@code fixedCellHeight} property.
	 *
	 * @return the fixed cell height
	 * @see #setFixedCellHeight
	 */
	public int getFixedCellHeight() {
		return fixedCellHeight;
	}

	/**
	 * Sets a fixed value to be used for the height of every cell in the list.
	 * If {@code height} is -1, cell heights are computed in the {@code ListUI}
	 * by applying <code>getPreferredSize</code> to the cell renderer component
	 * for each list element.
	 * <p>
	 * The default value of this property is {@code -1}.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param height
	 *            the height to be used for for all cells in the list
	 * @see #setPrototypeCellValue
	 * @see #setFixedCellWidth
	 * @see JComponent#addPropertyChangeListener
	 * @beaninfo bound: true attribute: visualUpdate true description: Defines a
	 *           fixed cell height when greater than zero.
	 */
	public void setFixedCellHeight(int height) {
		int oldValue = fixedCellHeight;
		fixedCellHeight = height;
		firePropertyChange("fixedCellHeight", oldValue, fixedCellHeight);
	}

	/**
	 * Returns the object responsible for painting list items.
	 *
	 * @return the value of the {@code cellRenderer} property
	 * @see #setCellRenderer
	 */
	@Transient
	public ListCellRenderer<? super E> getCellRenderer() {
		return cellRenderer;
	}

	/**
	 * Sets the delegate that is used to paint each cell in the list. The job of
	 * a cell renderer is discussed in detail in the <a href="#renderer">class
	 * level documentation</a>.
	 * <p>
	 * If the {@code prototypeCellValue} property is {@code non-null}, setting
	 * the cell renderer also causes the {@code fixedCellWidth} and
	 * {@code fixedCellHeight} properties to be re-calculated. Only one
	 * <code>PropertyChangeEvent</code> is generated however - for the
	 * <code>cellRenderer</code> property.
	 * <p>
	 * The default value of this property is provided by the {@code ListUI}
	 * delegate, i.e. by the look and feel implementation.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param cellRenderer
	 *            the <code>ListCellRenderer</code> that paints list cells
	 * @see #getCellRenderer
	 * @beaninfo bound: true attribute: visualUpdate true description: The
	 *           component used to draw the cells.
	 */
	public void setCellRenderer(ListCellRenderer<? super E> cellRenderer) {
		ListCellRenderer<? super E> oldValue = this.cellRenderer;
		this.cellRenderer = cellRenderer;

		/*
		 * If the cellRenderer has changed and prototypeCellValue was set, then
		 * recompute fixedCellWidth and fixedCellHeight.
		 */
		if ((cellRenderer != null) && !cellRenderer.equals(oldValue)) {
			updateFixedCellSize();
		}

		firePropertyChange("cellRenderer", oldValue, cellRenderer);
	}

	/**
	 * Returns the color used to draw the foreground of selected items.
	 * {@code DefaultListCellRenderer} uses this color to draw the foreground of
	 * items in the selected state, as do the renderers installed by most
	 * {@code ListUI} implementations.
	 *
	 * @return the color to draw the foreground of selected items
	 * @see #setSelectionForeground
	 * @see DefaultListCellRenderer
	 */
	public Color getSelectionForeground() {
		return selectionForeground;
	}

	/**
	 * Sets the color used to draw the foreground of selected items, which cell
	 * renderers can use to render text and graphics.
	 * {@code DefaultListCellRenderer} uses this color to draw the foreground of
	 * items in the selected state, as do the renderers installed by most
	 * {@code ListUI} implementations.
	 * <p>
	 * The default value of this property is defined by the look and feel
	 * implementation.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param selectionForeground
	 *            the {@code Color} to use in the foreground for selected list
	 *            items
	 * @see #getSelectionForeground
	 * @see #setSelectionBackground
	 * @see #setForeground
	 * @see #setBackground
	 * @see #setFont
	 * @see DefaultListCellRenderer
	 * @beaninfo bound: true attribute: visualUpdate true description: The
	 *           foreground color of selected cells.
	 */
	public void setSelectionForeground(Color selectionForeground) {
		Color oldValue = this.selectionForeground;
		this.selectionForeground = selectionForeground;
		firePropertyChange("selectionForeground", oldValue, selectionForeground);
	}

	/**
	 * Returns the color used to draw the background of selected items.
	 * {@code DefaultListCellRenderer} uses this color to draw the background of
	 * items in the selected state, as do the renderers installed by most
	 * {@code ListUI} implementations.
	 *
	 * @return the color to draw the background of selected items
	 * @see #setSelectionBackground
	 * @see DefaultListCellRenderer
	 */
	public Color getSelectionBackground() {
		return selectionBackground;
	}

	/**
	 * Sets the color used to draw the background of selected items, which cell
	 * renderers can use fill selected cells. {@code DefaultListCellRenderer}
	 * uses this color to fill the background of items in the selected state, as
	 * do the renderers installed by most {@code ListUI} implementations.
	 * <p>
	 * The default value of this property is defined by the look and feel
	 * implementation.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param selectionBackground
	 *            the {@code Color} to use for the background of selected cells
	 * @see #getSelectionBackground
	 * @see #setSelectionForeground
	 * @see #setForeground
	 * @see #setBackground
	 * @see #setFont
	 * @see DefaultListCellRenderer
	 * @beaninfo bound: true attribute: visualUpdate true description: The
	 *           background color of selected cells.
	 */
	public void setSelectionBackground(Color selectionBackground) {
		Color oldValue = this.selectionBackground;
		this.selectionBackground = selectionBackground;
		firePropertyChange("selectionBackground", oldValue, selectionBackground);
	}

	/**
	 * Returns the value of the {@code visibleRowCount} property. See the
	 * documentation for {@link #setVisibleRowCount} for details on how to
	 * interpret this value.
	 *
	 * @return the value of the {@code visibleRowCount} property.
	 * @see #setVisibleRowCount
	 */
	public int getVisibleRowCount() {
		return visibleRowCount;
	}

	/**
	 * Sets the {@code visibleRowCount} property, which has different meanings
	 * depending on the layout orientation: For a {@code VERTICAL} layout
	 * orientation, this sets the preferred number of rows to display without
	 * requiring scrolling; for other orientations, it affects the wrapping of
	 * cells.
	 * <p>
	 * In {@code VERTICAL} orientation:<br>
	 * Setting this property affects the return value of the
	 * {@link #getPreferredScrollableViewportSize} method, which is used to
	 * calculate the preferred size of an enclosing viewport. See that method's
	 * documentation for more details.
	 * <p>
	 * In {@code HORIZONTAL_WRAP} and {@code VERTICAL_WRAP} orientations:<br>
	 * This affects how cells are wrapped. See the documentation of
	 * {@link #setLayoutOrientation} for more details.
	 * <p>
	 * The default value of this property is {@code 8}.
	 * <p>
	 * Calling this method with a negative value results in the property being
	 * set to {@code 0}.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param visibleRowCount
	 *            an integer specifying the preferred number of rows to display
	 *            without requiring scrolling
	 * @see #getVisibleRowCount
	 * @see #getPreferredScrollableViewportSize
	 * @see #setLayoutOrientation
	 * @see JComponent#getVisibleRect
	 * @see JViewport
	 * @beaninfo bound: true attribute: visualUpdate true description: The
	 *           preferred number of rows to display without requiring scrolling
	 */
	public void setVisibleRowCount(int visibleRowCount) {
		int oldValue = this.visibleRowCount;
		this.visibleRowCount = Math.max(0, visibleRowCount);
		firePropertyChange("visibleRowCount", oldValue, visibleRowCount);
	}

	/**
	 * Returns the layout orientation property for the list: {@code VERTICAL} if
	 * the layout is a single column of cells, {@code VERTICAL_WRAP} if the
	 * layout is "newspaper style" with the content flowing vertically then
	 * horizontally, or {@code HORIZONTAL_WRAP} if the layout is "newspaper
	 * style" with the content flowing horizontally then vertically.
	 *
	 * @return the value of the {@code layoutOrientation} property
	 * @see #setLayoutOrientation
	 * @since 1.4
	 */
	public int getLayoutOrientation() {
		return layoutOrientation;
	}

	/**
	 * Defines the way list cells are layed out. Consider a {@code JList} with
	 * five cells. Cells can be layed out in one of the following ways:
	 *
	 * <pre>
	 * VERTICAL:          0
	 *                    1
	 *                    2
	 *                    3
	 *                    4
	 *
	 * HORIZONTAL_WRAP:   0  1  2
	 *                    3  4
	 *
	 * VERTICAL_WRAP:     0  3
	 *                    1  4
	 *                    2
	 * </pre>
	 * <p>
	 * A description of these layouts follows:
	 *
	 * <table border="1" summary=
	 * "Describes layouts VERTICAL, HORIZONTAL_WRAP, and VERTICAL_WRAP">
	 * <tr>
	 * <th>
	 * <p style="text-align:left">
	 * Value
	 * </p>
	 * </th>
	 * <th>
	 * <p style="text-align:left">
	 * Description
	 * </p>
	 * </th>
	 * </tr>
	 * <tr>
	 * <td><code>VERTICAL</code>
	 * <td>Cells are layed out vertically in a single column.
	 * <tr>
	 * <td><code>HORIZONTAL_WRAP</code>
	 * <td>Cells are layed out horizontally, wrapping to a new row as necessary.
	 * If the {@code visibleRowCount} property is less than or equal to zero,
	 * wrapping is determined by the width of the list; otherwise wrapping is
	 * done in such a way as to ensure {@code visibleRowCount} rows in the list.
	 * <tr>
	 * <td><code>VERTICAL_WRAP</code>
	 * <td>Cells are layed out vertically, wrapping to a new column as
	 * necessary. If the {@code visibleRowCount} property is less than or equal
	 * to zero, wrapping is determined by the height of the list; otherwise
	 * wrapping is done at {@code visibleRowCount} rows.
	 * </table>
	 * <p>
	 * The default value of this property is <code>VERTICAL</code>.
	 *
	 * @param layoutOrientation
	 *            the new layout orientation, one of: {@code VERTICAL},
	 *            {@code HORIZONTAL_WRAP} or {@code VERTICAL_WRAP}
	 * @see #getLayoutOrientation
	 * @see #setVisibleRowCount
	 * @see #getScrollableTracksViewportHeight
	 * @see #getScrollableTracksViewportWidth
	 * @throws IllegalArgumentException
	 *             if {@code layoutOrientation} isn't one of the allowable
	 *             values
	 * @since 1.4
	 * @beaninfo bound: true attribute: visualUpdate true description: Defines
	 *           the way list cells are layed out. enum: VERTICAL JList.VERTICAL
	 *           HORIZONTAL_WRAP JList.HORIZONTAL_WRAP VERTICAL_WRAP
	 *           JList.VERTICAL_WRAP
	 */
	public void setLayoutOrientation(int layoutOrientation) {
		int oldValue = this.layoutOrientation;
		switch (layoutOrientation) {
		case VERTICAL:
		case VERTICAL_WRAP:
		case HORIZONTAL_WRAP:
			this.layoutOrientation = layoutOrientation;
			firePropertyChange("layoutOrientation", oldValue, layoutOrientation);
			break;
		default:
			throw new IllegalArgumentException(
					"layoutOrientation must be one of: VERTICAL, HORIZONTAL_WRAP or VERTICAL_WRAP");
		}
	}

	/**
	 * Returns the smallest list index that is currently visible. In a
	 * left-to-right {@code componentOrientation}, the first visible cell is
	 * found closest to the list's upper-left corner. In right-to-left
	 * orientation, it is found closest to the upper-right corner. If nothing is
	 * visible or the list is empty, {@code -1} is returned. Note that the
	 * returned cell may only be partially visible.
	 *
	 * @return the index of the first visible cell
	 * @see #getLastVisibleIndex
	 * @see JComponent#getVisibleRect
	 */
	// public int getFirstVisibleIndex() {
	// Rectangle r = getVisibleRect();
	// int first;
	// if (this.getComponentOrientation().isLeftToRight()) {
	// first = locationToIndex(r.getLocation());
	// } else {
	// first = locationToIndex(new Point((r.x + r.width) - 1, r.y));
	// }
	// if (first != -1) {
	// Rectangle bounds = getCellBounds(first, first);
	// if (bounds != null) {
	// SwingUtilities.computeIntersection(r.x, r.y, r.width, r.height, bounds);
	// if (bounds.width == 0 || bounds.height == 0) {
	// first = -1;
	// }
	// }
	// }
	// return first;
	// }

	/**
	 * Returns the largest list index that is currently visible. If nothing is
	 * visible or the list is empty, {@code -1} is returned. Note that the
	 * returned cell may only be partially visible.
	 *
	 * @return the index of the last visible cell
	 * @see #getFirstVisibleIndex
	 * @see JComponent#getVisibleRect
	 */
	// public int getLastVisibleIndex() {
	// boolean leftToRight = this.getComponentOrientation().isLeftToRight();
	// Rectangle r = getVisibleRect();
	// Point lastPoint;
	// if (leftToRight) {
	// lastPoint = new Point((r.x + r.width) - 1, (r.y + r.height) - 1);
	// } else {
	// lastPoint = new Point(r.x, (r.y + r.height) - 1);
	// }
	// int location = locationToIndex(lastPoint);
	//
	// if (location != -1) {
	// Rectangle bounds = getCellBounds(location, location);
	//
	// if (bounds != null) {
	// SwingUtilities.computeIntersection(r.x, r.y, r.width, r.height, bounds);
	// if (bounds.width == 0 || bounds.height == 0) {
	// // Try the top left(LTR) or top right(RTL) corner, and
	// // then go across checking each cell for HORIZONTAL_WRAP.
	// // Try the lower left corner, and then go across checking
	// // each cell for other list layout orientation.
	// boolean isHorizontalWrap =
	// (getLayoutOrientation() == HORIZONTAL_WRAP);
	// Point visibleLocation = isHorizontalWrap ?
	// new Point(lastPoint.x, r.y) :
	// new Point(r.x, lastPoint.y);
	// int last;
	// int visIndex = -1;
	// int lIndex = location;
	// location = -1;
	//
	// do {
	// last = visIndex;
	// visIndex = locationToIndex(visibleLocation);
	//
	// if (visIndex != -1) {
	// bounds = getCellBounds(visIndex, visIndex);
	// if (visIndex != lIndex && bounds != null &&
	// bounds.contains(visibleLocation)) {
	// location = visIndex;
	// if (isHorizontalWrap) {
	// visibleLocation.y = bounds.y + bounds.height;
	// if (visibleLocation.y >= lastPoint.y) {
	// // Past visible region, bail.
	// last = visIndex;
	// }
	// }
	// else {
	// visibleLocation.x = bounds.x + bounds.width;
	// if (visibleLocation.x >= lastPoint.x) {
	// // Past visible region, bail.
	// last = visIndex;
	// }
	// }
	//
	// }
	// else {
	// last = visIndex;
	// }
	// }
	// } while (visIndex != -1 && last != visIndex);
	// }
	// }
	// }
	// return location;
	// }

	/**
	 * Scrolls the list within an enclosing viewport to make the specified cell
	 * completely visible. This calls {@code scrollRectToVisible} with the
	 * bounds of the specified cell. For this method to work, the {@code JList}
	 * must be within a <code>JViewport</code>.
	 * <p>
	 * If the given index is outside the list's range of cells, this method
	 * results in nothing.
	 *
	 * @param index
	 *            the index of the cell to make visible
	 * @see JComponent#scrollRectToVisible
	 * @see #getVisibleRect
	 */
	public void ensureIndexIsVisible(int index) {
		Rectangle cellBounds = getCellBounds(index, index);
		if (cellBounds != null) {
			// scrollRectToVisible(cellBounds);
		}
	}

	/**
	 * Turns on or off automatic drag handling. In order to enable automatic
	 * drag handling, this property should be set to {@code true}, and the
	 * list's {@code TransferHandler} needs to be {@code non-null}. The default
	 * value of the {@code dragEnabled} property is {@code false}.
	 * <p>
	 * The job of honoring this property, and recognizing a user drag gesture,
	 * lies with the look and feel implementation, and in particular, the list's
	 * {@code ListUI}. When automatic drag handling is enabled, most look and
	 * feels (including those that subclass {@code BasicLookAndFeel}) begin a
	 * drag and drop operation whenever the user presses the mouse button over
	 * an item and then moves the mouse a few pixels. Setting this property to
	 * {@code true} can therefore have a subtle effect on how selections behave.
	 * <p>
	 * If a look and feel is used that ignores this property, you can still
	 * begin a drag and drop operation by calling {@code exportAsDrag} on the
	 * list's {@code TransferHandler}.
	 *
	 * @param b
	 *            whether or not to enable automatic drag handling
	 * @see java.awt.GraphicsEnvironment#isHeadless
	 * @see #getDragEnabled
	 * @see #setTransferHandler
	 * @see TransferHandler
	 * @since 1.4
	 *
	 * @beaninfo description: determines whether automatic drag handling is
	 *           enabled bound: false
	 */
	public void setDragEnabled(boolean b) {
		dragEnabled = b;
	}

	/**
	 * Returns whether or not automatic drag handling is enabled.
	 *
	 * @return the value of the {@code dragEnabled} property
	 * @see #setDragEnabled
	 * @since 1.4
	 */
	public boolean getDragEnabled() {
		return dragEnabled;
	}

	/**
	 * Sets the drop mode for this component. For backward compatibility, the
	 * default for this property is <code>DropMode.USE_SELECTION</code>. Usage
	 * of one of the other modes is recommended, however, for an improved user
	 * experience. <code>DropMode.ON</code>, for instance, offers similar
	 * behavior of showing items as selected, but does so without affecting the
	 * actual selection in the list.
	 * <p>
	 * <code>JList</code> supports the following drop modes:
	 * <ul>
	 * <li><code>DropMode.USE_SELECTION</code></li>
	 * <li><code>DropMode.ON</code></li>
	 * <li><code>DropMode.INSERT</code></li>
	 * <li><code>DropMode.ON_OR_INSERT</code></li>
	 * </ul>
	 * The drop mode is only meaningful if this component has a
	 * <code>TransferHandler</code> that accepts drops.
	 *
	 * @param dropMode
	 *            the drop mode to use
	 * @throws IllegalArgumentException
	 *             if the drop mode is unsupported or <code>null</code>
	 * @see #getDropMode
	 * @see #getDropLocation
	 * @see #setTransferHandler
	 * @see TransferHandler
	 * @since 1.6
	 */
	public final void setDropMode(DropMode dropMode) {
		if (dropMode != null) {
			switch (dropMode) {
			case USE_SELECTION:
			case ON:
			case INSERT:
			case ON_OR_INSERT:
				this.dropMode = dropMode;
				return;
			}
		}

		throw new IllegalArgumentException(dropMode + ": Unsupported drop mode for list");
	}

	/**
	 * Returns the drop mode for this component.
	 *
	 * @return the drop mode for this component
	 * @see #setDropMode
	 * @since 1.6
	 */
	public final DropMode getDropMode() {
		return dropMode;
	}

	/**
	 * Returns the next list element whose {@code toString} value starts with
	 * the given prefix.
	 *
	 * @param prefix
	 *            the string to test for a match
	 * @param startIndex
	 *            the index for starting the search
	 * @param bias
	 *            the search direction, either Position.Bias.Forward or
	 *            Position.Bias.Backward.
	 * @return the index of the next list element that starts with the prefix;
	 *         otherwise {@code -1}
	 * @exception IllegalArgumentException
	 *                if prefix is {@code null} or startIndex is out of bounds
	 * @since 1.4
	 */
	public int getNextMatch(String prefix, int startIndex, Position.Bias bias) {
		ListModel<E> model = getModel();
		int max = model.getSize();
		if (prefix == null) {
			throw new IllegalArgumentException();
		}
		if (startIndex < 0 || startIndex >= max) {
			throw new IllegalArgumentException();
		}
		prefix = prefix.toUpperCase();

		// start search from the next element after the selected element
		int increment = (bias == Position.Bias.Forward) ? 1 : -1;
		int index = startIndex;
		do {
			E element = model.getElementAt(index);

			if (element != null) {
				String str;

				if (element instanceof String) {
					str = ((String) any(element)).toUpperCase();
				} else {
					str = element.toString();
					if (str != null) {
						str = str.toUpperCase();
					}
				}

				if (str != null && str.startsWith(prefix)) {
					return index;
				}
			}
			index = (index + increment + max) % max;
		} while (index != startIndex);
		return -1;
	}

	/**
	 * Returns the cell index closest to the given location in the list's
	 * coordinate system. To determine if the cell actually contains the
	 * specified location, compare the point against the cell's bounds, as
	 * provided by {@code getCellBounds}. This method returns {@code -1} if the
	 * model is empty
	 * <p>
	 * This is a cover method that delegates to the method of the same name in
	 * the list's {@code ListUI}. It returns {@code -1} if the list has no
	 * {@code ListUI}.
	 *
	 * @param location
	 *            the coordinates of the point
	 * @return the cell index closest to the given location, or {@code -1}
	 */
	public int locationToIndex(Point location) {
		throw new RuntimeException("not supported");
	}

	/**
	 * Returns the origin of the specified item in the list's coordinate system.
	 * This method returns {@code null} if the index isn't valid.
	 * <p>
	 * This is a cover method that delegates to the method of the same name in
	 * the list's {@code ListUI}. It returns {@code null} if the list has no
	 * {@code ListUI}.
	 *
	 * @param index
	 *            the cell index
	 * @return the origin of the cell, or {@code null}
	 */
	public Point indexToLocation(int index) {
		throw new RuntimeException("not supported");
	}

	/**
	 * Returns the bounding rectangle, in the list's coordinate system, for the
	 * range of cells specified by the two indices. These indices can be
	 * supplied in any order.
	 * <p>
	 * If the smaller index is outside the list's range of cells, this method
	 * returns {@code null}. If the smaller index is valid, but the larger index
	 * is outside the list's range, the bounds of just the first index is
	 * returned. Otherwise, the bounds of the valid range is returned.
	 * <p>
	 * This is a cover method that delegates to the method of the same name in
	 * the list's {@code ListUI}. It returns {@code null} if the list has no
	 * {@code ListUI}.
	 *
	 * @param index0
	 *            the first index in the range
	 * @param index1
	 *            the second index in the range
	 * @return the bounding rectangle for the range of cells, or {@code null}
	 */
	public Rectangle getCellBounds(int index0, int index1) {
		throw new RuntimeException("not supported");
	}

	/**
	 * --- ListModel Support ---
	 */

	/**
	 * Returns the data model that holds the list of items displayed by the
	 * <code>JList</code> component.
	 *
	 * @return the <code>ListModel</code> that provides the displayed list of
	 *         items
	 * @see #setModel
	 */
	public ListModel<E> getModel() {
		return dataModel;
	}

	/**
	 * Sets the model that represents the contents or "value" of the list,
	 * notifies property change listeners, and then clears the list's selection.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param model
	 *            the <code>ListModel</code> that provides the list of items for
	 *            display
	 * @exception IllegalArgumentException
	 *                if <code>model</code> is <code>null</code>
	 * @see #getModel
	 * @see #clearSelection
	 * @beaninfo bound: true attribute: visualUpdate true description: The
	 *           object that contains the data to be drawn by this JList.
	 */
	public void setModel(ListModel<E> model) {
		if (model == null) {
			throw new IllegalArgumentException("model must be non null");
		}
		ListModel<E> oldValue = dataModel;
		dataModel = model;
		firePropertyChange("model", oldValue, dataModel);
		clearSelection();
	}

	/**
	 * Constructs a read-only <code>ListModel</code> from an array of items, and
	 * calls {@code setModel} with this model.
	 * <p>
	 * Attempts to pass a {@code null} value to this method results in undefined
	 * behavior and, most likely, exceptions. The created model references the
	 * given array directly. Attempts to modify the array after invoking this
	 * method results in undefined behavior.
	 *
	 * @param listData
	 *            an array of {@code E} containing the items to display in the
	 *            list
	 * @see #setModel
	 */
	public void setListData(final E[] listData) {
		setModel(new AbstractListModel<E>() {
			public int getSize() {
				return listData.length;
			}

			public E getElementAt(int i) {
				return listData[i];
			}
		});
	}

	/**
	 * Constructs a read-only <code>ListModel</code> from a <code>Vector</code>
	 * and calls {@code setModel} with this model.
	 * <p>
	 * Attempts to pass a {@code null} value to this method results in undefined
	 * behavior and, most likely, exceptions. The created model references the
	 * given {@code Vector} directly. Attempts to modify the {@code Vector}
	 * after invoking this method results in undefined behavior.
	 *
	 * @param listData
	 *            a <code>Vector</code> containing the items to display in the
	 *            list
	 * @see #setModel
	 */
	public void setListData(final Vector<? extends E> listData) {
		setModel(new AbstractListModel<E>() {
			public int getSize() {
				return listData.size();
			}

			public E getElementAt(int i) {
				return listData.elementAt(i);
			}
		});
	}

	/**
	 * --- ListSelectionModel delegations and extensions ---
	 */

	/**
	 * Returns an instance of {@code DefaultListSelectionModel}; called during
	 * construction to initialize the list's selection model property.
	 *
	 * @return a {@code DefaultListSelecitonModel}, used to initialize the
	 *         list's selection model property during construction
	 * @see #setSelectionModel
	 * @see DefaultListSelectionModel
	 */
	protected ListSelectionModel createSelectionModel() {
		return new DefaultListSelectionModel();
	}

	/**
	 * Returns the current selection model. The selection model maintains the
	 * selection state of the list. See the class level documentation for more
	 * details.
	 *
	 * @return the <code>ListSelectionModel</code> that maintains the list's
	 *         selections
	 *
	 * @see #setSelectionModel
	 * @see ListSelectionModel
	 */
	public ListSelectionModel getSelectionModel() {
		return selectionModel;
	}

	/**
	 * Notifies {@code ListSelectionListener}s added directly to the list of
	 * selection changes made to the selection model. {@code JList} listens for
	 * changes made to the selection in the selection model, and forwards
	 * notification to listeners added to the list directly, by calling this
	 * method.
	 * <p>
	 * This method constructs a {@code ListSelectionEvent} with this list as the
	 * source, and the specified arguments, and sends it to the registered
	 * {@code ListSelectionListeners}.
	 *
	 * @param firstIndex
	 *            the first index in the range, {@code <= lastIndex}
	 * @param lastIndex
	 *            the last index in the range, {@code >= firstIndex}
	 * @param isAdjusting
	 *            whether or not this is one in a series of multiple events,
	 *            where changes are still being made
	 *
	 * @see #addListSelectionListener
	 * @see #removeListSelectionListener
	 * @see javax.swing.event.ListSelectionEvent
	 * @see EventListenerList
	 */
	protected void fireSelectionValueChanged(int firstIndex, int lastIndex, boolean isAdjusting) {
		Object[] listeners = listenerList.getListenerList();
		ListSelectionEvent e = null;

		for (int i = listeners.length - 2; i >= 0; i -= 2) {
			if (listeners[i] == ListSelectionListener.class) {
				if (e == null) {
					e = new ListSelectionEvent(this, firstIndex, lastIndex, isAdjusting);
				}
				((ListSelectionListener) listeners[i + 1]).valueChanged(e);
			}
		}
	}

	/*
	 * A ListSelectionListener that forwards ListSelectionEvents from the
	 * selectionModel to the JList ListSelectionListeners. The forwarded events
	 * only differ from the originals in that their source is the JList instead
	 * of the selectionModel itself.
	 */
	private class ListSelectionHandler implements ListSelectionListener, Serializable {
		public void valueChanged(ListSelectionEvent e) {
			fireSelectionValueChanged(e.getFirstIndex(), e.getLastIndex(), e.getValueIsAdjusting());
		}
	}

	/**
	 * Adds a listener to the list, to be notified each time a change to the
	 * selection occurs; the preferred way of listening for selection state
	 * changes. {@code JList} takes care of listening for selection state
	 * changes in the selection model, and notifies the given listener of each
	 * change. {@code ListSelectionEvent}s sent to the listener have a
	 * {@code source} property set to this list.
	 *
	 * @param listener
	 *            the {@code ListSelectionListener} to add
	 * @see #getSelectionModel
	 * @see #getListSelectionListeners
	 */
	public void addListSelectionListener(ListSelectionListener listener) {
		if (selectionListener == null) {
			selectionListener = new ListSelectionHandler();
			getSelectionModel().addListSelectionListener(selectionListener);
		}

		listenerList.add(ListSelectionListener.class, listener);
	}

	/**
	 * Removes a selection listener from the list.
	 *
	 * @param listener
	 *            the {@code ListSelectionListener} to remove
	 * @see #addListSelectionListener
	 * @see #getSelectionModel
	 */
	public void removeListSelectionListener(ListSelectionListener listener) {
		listenerList.remove(ListSelectionListener.class, listener);
	}

	/**
	 * Returns an array of all the {@code ListSelectionListener}s added to this
	 * {@code JList} by way of {@code addListSelectionListener}.
	 *
	 * @return all of the {@code ListSelectionListener}s on this list, or an
	 *         empty array if no listeners have been added
	 * @see #addListSelectionListener
	 * @since 1.4
	 */
	public ListSelectionListener[] getListSelectionListeners() {
		return listenerList.getListeners(ListSelectionListener.class);
	}

	/**
	 * Sets the <code>selectionModel</code> for the list to a non-
	 * <code>null</code> <code>ListSelectionModel</code> implementation. The
	 * selection model handles the task of making single selections, selections
	 * of contiguous ranges, and non-contiguous selections.
	 * <p>
	 * This is a JavaBeans bound property.
	 *
	 * @param selectionModel
	 *            the <code>ListSelectionModel</code> that implements the
	 *            selections
	 * @exception IllegalArgumentException
	 *                if <code>selectionModel</code> is <code>null</code>
	 * @see #getSelectionModel
	 * @beaninfo bound: true description: The selection model, recording which
	 *           cells are selected.
	 */
	public void setSelectionModel(ListSelectionModel selectionModel) {
		if (selectionModel == null) {
			throw new IllegalArgumentException("selectionModel must be non null");
		}

		/*
		 * Remove the forwarding ListSelectionListener from the old
		 * selectionModel, and add it to the new one, if necessary.
		 */
		if (selectionListener != null) {
			this.selectionModel.removeListSelectionListener(selectionListener);
			selectionModel.addListSelectionListener(selectionListener);
		}

		ListSelectionModel oldValue = this.selectionModel;
		this.selectionModel = selectionModel;
		firePropertyChange("selectionModel", oldValue, selectionModel);
	}

	/**
	 * Sets the selection mode for the list. This is a cover method that sets
	 * the selection mode directly on the selection model.
	 * <p>
	 * The following list describes the accepted selection modes:
	 * <ul>
	 * <li>{@code ListSelectionModel.SINGLE_SELECTION} - Only one list index can
	 * be selected at a time. In this mode, {@code setSelectionInterval} and
	 * {@code addSelectionInterval} are equivalent, both replacing the current
	 * selection with the index represented by the second argument (the "lead").
	 * <li>{@code ListSelectionModel.SINGLE_INTERVAL_SELECTION} - Only one
	 * contiguous interval can be selected at a time. In this mode,
	 * {@code addSelectionInterval} behaves like {@code setSelectionInterval}
	 * (replacing the current selection}, unless the given interval is
	 * immediately adjacent to or overlaps the existing selection, and can be
	 * used to grow the selection.
	 * <li>{@code ListSelectionModel.MULTIPLE_INTERVAL_SELECTION} - In this
	 * mode, there's no restriction on what can be selected. This mode is the
	 * default.
	 * </ul>
	 *
	 * @param selectionMode
	 *            the selection mode
	 * @see #getSelectionMode
	 * @throws IllegalArgumentException
	 *             if the selection mode isn't one of those allowed
	 * @beaninfo description: The selection mode. enum: SINGLE_SELECTION
	 *           ListSelectionModel.SINGLE_SELECTION SINGLE_INTERVAL_SELECTION
	 *           ListSelectionModel.SINGLE_INTERVAL_SELECTION
	 *           MULTIPLE_INTERVAL_SELECTION
	 *           ListSelectionModel.MULTIPLE_INTERVAL_SELECTION
	 */
	public void setSelectionMode(int selectionMode) {
		getSelectionModel().setSelectionMode(selectionMode);
	}

	/**
	 * Returns the current selection mode for the list. This is a cover method
	 * that delegates to the method of the same name on the list's selection
	 * model.
	 *
	 * @return the current selection mode
	 * @see #setSelectionMode
	 */
	public int getSelectionMode() {
		return getSelectionModel().getSelectionMode();
	}

	/**
	 * Returns the anchor selection index. This is a cover method that delegates
	 * to the method of the same name on the list's selection model.
	 *
	 * @return the anchor selection index
	 * @see ListSelectionModel#getAnchorSelectionIndex
	 */
	public int getAnchorSelectionIndex() {
		return getSelectionModel().getAnchorSelectionIndex();
	}

	/**
	 * Returns the lead selection index. This is a cover method that delegates
	 * to the method of the same name on the list's selection model.
	 *
	 * @return the lead selection index
	 * @see ListSelectionModel#getLeadSelectionIndex
	 * @beaninfo description: The lead selection index.
	 */
	public int getLeadSelectionIndex() {
		return getSelectionModel().getLeadSelectionIndex();
	}

	/**
	 * Returns the smallest selected cell index, or {@code -1} if the selection
	 * is empty. This is a cover method that delegates to the method of the same
	 * name on the list's selection model.
	 *
	 * @return the smallest selected cell index, or {@code -1}
	 * @see ListSelectionModel#getMinSelectionIndex
	 */
	public int getMinSelectionIndex() {
		return getSelectionModel().getMinSelectionIndex();
	}

	/**
	 * Returns the largest selected cell index, or {@code -1} if the selection
	 * is empty. This is a cover method that delegates to the method of the same
	 * name on the list's selection model.
	 *
	 * @return the largest selected cell index
	 * @see ListSelectionModel#getMaxSelectionIndex
	 */
	public int getMaxSelectionIndex() {
		return getSelectionModel().getMaxSelectionIndex();
	}

	/**
	 * Returns {@code true} if the specified index is selected, else
	 * {@code false}. This is a cover method that delegates to the method of the
	 * same name on the list's selection model.
	 *
	 * @param index
	 *            index to be queried for selection state
	 * @return {@code true} if the specified index is selected, else
	 *         {@code false}
	 * @see ListSelectionModel#isSelectedIndex
	 * @see #setSelectedIndex
	 */
	public boolean isSelectedIndex(int index) {
		return getSelectionModel().isSelectedIndex(index);
	}

	/**
	 * Returns {@code true} if nothing is selected, else {@code false}. This is
	 * a cover method that delegates to the method of the same name on the
	 * list's selection model.
	 *
	 * @return {@code true} if nothing is selected, else {@code false}
	 * @see ListSelectionModel#isSelectionEmpty
	 * @see #clearSelection
	 */
	public boolean isSelectionEmpty() {
		return getSelectionModel().isSelectionEmpty();
	}

	/**
	 * Clears the selection; after calling this method, {@code isSelectionEmpty}
	 * will return {@code true}. This is a cover method that delegates to the
	 * method of the same name on the list's selection model.
	 *
	 * @see ListSelectionModel#clearSelection
	 * @see #isSelectionEmpty
	 */
	public void clearSelection() {
		getSelectionModel().clearSelection();
	}

	/**
	 * Selects the specified interval. Both {@code anchor} and {@code lead}
	 * indices are included. {@code anchor} doesn't have to be less than or
	 * equal to {@code lead}. This is a cover method that delegates to the
	 * method of the same name on the list's selection model.
	 * <p>
	 * Refer to the documentation of the selection model class being used for
	 * details on how values less than {@code 0} are handled.
	 *
	 * @param anchor
	 *            the first index to select
	 * @param lead
	 *            the last index to select
	 * @see ListSelectionModel#setSelectionInterval
	 * @see DefaultListSelectionModel#setSelectionInterval
	 * @see #createSelectionModel
	 * @see #addSelectionInterval
	 * @see #removeSelectionInterval
	 */
	public void setSelectionInterval(int anchor, int lead) {
		getSelectionModel().setSelectionInterval(anchor, lead);
	}

	/**
	 * Sets the selection to be the union of the specified interval with current
	 * selection. Both the {@code anchor} and {@code lead} indices are included.
	 * {@code anchor} doesn't have to be less than or equal to {@code lead}.
	 * This is a cover method that delegates to the method of the same name on
	 * the list's selection model.
	 * <p>
	 * Refer to the documentation of the selection model class being used for
	 * details on how values less than {@code 0} are handled.
	 *
	 * @param anchor
	 *            the first index to add to the selection
	 * @param lead
	 *            the last index to add to the selection
	 * @see ListSelectionModel#addSelectionInterval
	 * @see DefaultListSelectionModel#addSelectionInterval
	 * @see #createSelectionModel
	 * @see #setSelectionInterval
	 * @see #removeSelectionInterval
	 */
	public void addSelectionInterval(int anchor, int lead) {
		getSelectionModel().addSelectionInterval(anchor, lead);
	}

	/**
	 * Sets the selection to be the set difference of the specified interval and
	 * the current selection. Both the {@code index0} and {@code index1} indices
	 * are removed. {@code index0} doesn't have to be less than or equal to
	 * {@code index1}. This is a cover method that delegates to the method of
	 * the same name on the list's selection model.
	 * <p>
	 * Refer to the documentation of the selection model class being used for
	 * details on how values less than {@code 0} are handled.
	 *
	 * @param index0
	 *            the first index to remove from the selection
	 * @param index1
	 *            the last index to remove from the selection
	 * @see ListSelectionModel#removeSelectionInterval
	 * @see DefaultListSelectionModel#removeSelectionInterval
	 * @see #createSelectionModel
	 * @see #setSelectionInterval
	 * @see #addSelectionInterval
	 */
	public void removeSelectionInterval(int index0, int index1) {
		getSelectionModel().removeSelectionInterval(index0, index1);
	}

	/**
	 * Sets the selection model's {@code valueIsAdjusting} property. When
	 * {@code true}, upcoming changes to selection should be considered part of
	 * a single change. This property is used internally and developers
	 * typically need not call this method. For example, when the model is being
	 * updated in response to a user drag, the value of the property is set to
	 * {@code true} when the drag is initiated and set to {@code false} when the
	 * drag is finished. This allows listeners to update only when a change has
	 * been finalized, rather than handling all of the intermediate values.
	 * <p>
	 * You may want to use this directly if making a series of changes that
	 * should be considered part of a single change.
	 * <p>
	 * This is a cover method that delegates to the method of the same name on
	 * the list's selection model. See the documentation for
	 * {@link javax.swing.ListSelectionModel#setValueIsAdjusting} for more
	 * details.
	 *
	 * @param b
	 *            the new value for the property
	 * @see ListSelectionModel#setValueIsAdjusting
	 * @see javax.swing.event.ListSelectionEvent#getValueIsAdjusting
	 * @see #getValueIsAdjusting
	 */
	public void setValueIsAdjusting(boolean b) {
		getSelectionModel().setValueIsAdjusting(b);
	}

	/**
	 * Returns the value of the selection model's {@code isAdjusting} property.
	 * <p>
	 * This is a cover method that delegates to the method of the same name on
	 * the list's selection model.
	 *
	 * @return the value of the selection model's {@code isAdjusting} property.
	 *
	 * @see #setValueIsAdjusting
	 * @see ListSelectionModel#getValueIsAdjusting
	 */
	public boolean getValueIsAdjusting() {
		return getSelectionModel().getValueIsAdjusting();
	}

	/**
	 * Returns an array of all of the selected indices, in increasing order.
	 *
	 * @return all of the selected indices, in increasing order, or an empty
	 *         array if nothing is selected
	 * @see #removeSelectionInterval
	 * @see #addListSelectionListener
	 */
	@Transient
	public int[] getSelectedIndices() {
		ListSelectionModel sm = getSelectionModel();
		int iMin = sm.getMinSelectionIndex();
		int iMax = sm.getMaxSelectionIndex();

		if ((iMin < 0) || (iMax < 0)) {
			return new int[0];
		}

		int[] rvTmp = new int[1 + (iMax - iMin)];
		int n = 0;
		for (int i = iMin; i <= iMax; i++) {
			if (sm.isSelectedIndex(i)) {
				rvTmp[n++] = i;
			}
		}
		int[] rv = new int[n];
		System.arraycopy(rvTmp, 0, rv, 0, n);
		return rv;
	}

	/**
	 * Selects a single cell. Does nothing if the given index is greater than or
	 * equal to the model size. This is a convenience method that uses
	 * {@code setSelectionInterval} on the selection model. Refer to the
	 * documentation for the selection model class being used for details on how
	 * values less than {@code 0} are handled.
	 *
	 * @param index
	 *            the index of the cell to select
	 * @see ListSelectionModel#setSelectionInterval
	 * @see #isSelectedIndex
	 * @see #addListSelectionListener
	 * @beaninfo description: The index of the selected cell.
	 */
	public void setSelectedIndex(int index) {
		if (index >= getModel().getSize()) {
			return;
		}
		getSelectionModel().setSelectionInterval(index, index);
	}

	/**
	 * Changes the selection to be the set of indices specified by the given
	 * array. Indices greater than or equal to the model size are ignored. This
	 * is a convenience method that clears the selection and then uses
	 * {@code addSelectionInterval} on the selection model to add the indices.
	 * Refer to the documentation of the selection model class being used for
	 * details on how values less than {@code 0} are handled.
	 *
	 * @param indices
	 *            an array of the indices of the cells to select,
	 *            {@code non-null}
	 * @see ListSelectionModel#addSelectionInterval
	 * @see #isSelectedIndex
	 * @see #addListSelectionListener
	 * @throws NullPointerException
	 *             if the given array is {@code null}
	 */
	public void setSelectedIndices(int[] indices) {
		ListSelectionModel sm = getSelectionModel();
		sm.clearSelection();
		int size = getModel().getSize();
		for (int i : indices) {
			if (i < size) {
				sm.addSelectionInterval(i, i);
			}
		}
	}

	/**
	 * Returns an array of all the selected values, in increasing order based on
	 * their indices in the list.
	 *
	 * @return the selected values, or an empty array if nothing is selected
	 * @see #isSelectedIndex
	 * @see #getModel
	 * @see #addListSelectionListener
	 *
	 * @deprecated As of JDK 1.7, replaced by {@link #getSelectedValuesList()}
	 */
	@Deprecated
	public Object[] getSelectedValues() {
		ListSelectionModel sm = getSelectionModel();
		ListModel<E> dm = getModel();

		int iMin = sm.getMinSelectionIndex();
		int iMax = sm.getMaxSelectionIndex();

		if ((iMin < 0) || (iMax < 0)) {
			return new Object[0];
		}

		Object[] rvTmp = new Object[1 + (iMax - iMin)];
		int n = 0;
		for (int i = iMin; i <= iMax; i++) {
			if (sm.isSelectedIndex(i)) {
				rvTmp[n++] = dm.getElementAt(i);
			}
		}
		Object[] rv = new Object[n];
		System.arraycopy(rvTmp, 0, rv, 0, n);
		return rv;
	}

	/**
	 * Returns a list of all the selected items, in increasing order based on
	 * their indices in the list.
	 *
	 * @return the selected items, or an empty list if nothing is selected
	 * @see #isSelectedIndex
	 * @see #getModel
	 * @see #addListSelectionListener
	 *
	 * @since 1.7
	 */
	public List<E> getSelectedValuesList() {
		ListSelectionModel sm = getSelectionModel();
		ListModel<E> dm = getModel();

		int iMin = sm.getMinSelectionIndex();
		int iMax = sm.getMaxSelectionIndex();

		if ((iMin < 0) || (iMax < 0)) {
			return Collections.emptyList();
		}

		List<E> selectedItems = new ArrayList<E>();
		for (int i = iMin; i <= iMax; i++) {
			if (sm.isSelectedIndex(i)) {
				selectedItems.add(dm.getElementAt(i));
			}
		}
		return selectedItems;
	}

	/**
	 * Returns the smallest selected cell index; <i>the selection</i> when only
	 * a single item is selected in the list. When multiple items are selected,
	 * it is simply the smallest selected index. Returns {@code -1} if there is
	 * no selection.
	 * <p>
	 * This method is a cover that delegates to {@code getMinSelectionIndex}.
	 *
	 * @return the smallest selected cell index
	 * @see #getMinSelectionIndex
	 * @see #addListSelectionListener
	 */
	public int getSelectedIndex() {
		return getMinSelectionIndex();
	}

	/**
	 * Returns the value for the smallest selected cell index; <i>the selected
	 * value</i> when only a single item is selected in the list. When multiple
	 * items are selected, it is simply the value for the smallest selected
	 * index. Returns {@code null} if there is no selection.
	 * <p>
	 * This is a convenience method that simply returns the model value for
	 * {@code getMinSelectionIndex}.
	 *
	 * @return the first selected value
	 * @see #getMinSelectionIndex
	 * @see #getModel
	 * @see #addListSelectionListener
	 */
	public E getSelectedValue() {
		int i = getMinSelectionIndex();
		return (i == -1) ? null : getModel().getElementAt(i);
	}

	/**
	 * Selects the specified object from the list.
	 *
	 * @param anObject
	 *            the object to select
	 * @param shouldScroll
	 *            {@code true} if the list should scroll to display the selected
	 *            object, if one exists; otherwise {@code false}
	 */
	public void setSelectedValue(Object anObject, boolean shouldScroll) {
		if (anObject == null)
			setSelectedIndex(-1);
		else if (!anObject.equals(getSelectedValue())) {
			int i, c;
			ListModel<E> dm = getModel();
			for (i = 0, c = dm.getSize(); i < c; i++)
				if (anObject.equals(dm.getElementAt(i))) {
					setSelectedIndex(i);
					if (shouldScroll)
						ensureIndexIsVisible(i);
					return;
				}
			setSelectedIndex(-1);
		}
	}

	/**
	 * Returns a {@code String} representation of this {@code JList}. This
	 * method is intended to be used only for debugging purposes, and the
	 * content and format of the returned {@code String} may vary between
	 * implementations. The returned {@code String} may be empty, but may not be
	 * {@code null}.
	 *
	 * @return a {@code String} representation of this {@code JList}.
	 */
	protected String paramString() {
		String selectionForegroundString = (selectionForeground != null ? selectionForeground.toString() : "");
		String selectionBackgroundString = (selectionBackground != null ? selectionBackground.toString() : "");

		return super.paramString() + ",fixedCellHeight=" + fixedCellHeight + ",fixedCellWidth=" + fixedCellWidth
				+ ",horizontalScrollIncrement=" + horizontalScrollIncrement + ",selectionBackground="
				+ selectionBackgroundString + ",selectionForeground=" + selectionForegroundString + ",visibleRowCount="
				+ visibleRowCount + ",layoutOrientation=" + layoutOrientation;
	}

}
