/*
 * Copyright (c) 1995, 2013, Oracle and/or its affiliates. All rights reserved.
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

package java.awt;

import static def.dom.Globals.document;
import static jsweet.util.Lang.any;

import def.dom.HTMLDivElement;
import def.dom.HTMLTableColElement;
import def.dom.HTMLTableDataCellElement;
import def.dom.HTMLTableElement;
import def.dom.HTMLTableRowElement;
import jsweet.util.StringTypes;

public class BorderLayout implements LayoutManager2, java.io.Serializable {
	boolean created = false;

	Container parent;
	public HTMLTableElement table;
	
	@Override
	public void onComponentAdded(Container parent, Component component, int position) {
		
	}
	
	/**
	 * Constructs a border layout with the horizontal gaps between components.
	 * The horizontal gap is specified by <code>hgap</code>.
	 *
	 * @see #getHgap()
	 * @see #setHgap(int)
	 *
	 * @serial
	 */
	int hgap;

	/**
	 * Constructs a border layout with the vertical gaps between components. The
	 * vertical gap is specified by <code>vgap</code>.
	 *
	 * @see #getVgap()
	 * @see #setVgap(int)
	 * @serial
	 */
	int vgap;

	/**
	 * Constant to specify components location to be the north portion of the
	 * border layout.
	 * 
	 * @serial
	 * @see #getChild(String, boolean)
	 * @see #addLayoutComponent
	 * @see #getLayoutAlignmentX
	 * @see #getLayoutAlignmentY
	 * @see #removeLayoutComponent
	 */
	Component north;
	/**
	 * Constant to specify components location to be the west portion of the
	 * border layout.
	 * 
	 * @serial
	 * @see #getChild(String, boolean)
	 * @see #addLayoutComponent
	 * @see #getLayoutAlignmentX
	 * @see #getLayoutAlignmentY
	 * @see #removeLayoutComponent
	 */
	Component west;
	/**
	 * Constant to specify components location to be the east portion of the
	 * border layout.
	 * 
	 * @serial
	 * @see #getChild(String, boolean)
	 * @see #addLayoutComponent
	 * @see #getLayoutAlignmentX
	 * @see #getLayoutAlignmentY
	 * @see #removeLayoutComponent
	 */
	Component east;
	/**
	 * Constant to specify components location to be the south portion of the
	 * border layout.
	 * 
	 * @serial
	 * @see #getChild(String, boolean)
	 * @see #addLayoutComponent
	 * @see #getLayoutAlignmentX
	 * @see #getLayoutAlignmentY
	 * @see #removeLayoutComponent
	 */
	Component south;
	/**
	 * Constant to specify components location to be the center portion of the
	 * border layout.
	 * 
	 * @serial
	 * @see #getChild(String, boolean)
	 * @see #addLayoutComponent
	 * @see #getLayoutAlignmentX
	 * @see #getLayoutAlignmentY
	 * @see #removeLayoutComponent
	 */
	Component center;

	/**
	 *
	 * A relative positioning constant, that can be used instead of north,
	 * south, east, west or center. mixing the two types of constants can lead
	 * to unpredictable results. If you use both types, the relative constants
	 * will take precedence. For example, if you add components using both the
	 * <code>NORTH</code> and <code>BEFORE_FIRST_LINE</code> constants in a
	 * container whose orientation is <code>LEFT_TO_RIGHT</code>, only the
	 * <code>BEFORE_FIRST_LINE</code> will be layed out. This will be the same
	 * for lastLine, firstItem, lastItem.
	 * 
	 * @serial
	 */
	Component firstLine;
	/**
	 * A relative positioning constant, that can be used instead of north,
	 * south, east, west or center. Please read Description for firstLine.
	 * 
	 * @serial
	 */
	Component lastLine;
	/**
	 * A relative positioning constant, that can be used instead of north,
	 * south, east, west or center. Please read Description for firstLine.
	 * 
	 * @serial
	 */
	Component firstItem;
	/**
	 * A relative positioning constant, that can be used instead of north,
	 * south, east, west or center. Please read Description for firstLine.
	 * 
	 * @serial
	 */
	Component lastItem;

	/**
	 * The north layout constraint (top of container).
	 */
	public static final String NORTH = "North";

	/**
	 * The south layout constraint (bottom of container).
	 */
	public static final String SOUTH = "South";

	/**
	 * The east layout constraint (right side of container).
	 */
	public static final String EAST = "East";

	/**
	 * The west layout constraint (left side of container).
	 */
	public static final String WEST = "West";

	/**
	 * The center layout constraint (middle of container).
	 */
	public static final String CENTER = "Center";

	/**
	 * Synonym for PAGE_START. Exists for compatibility with previous versions.
	 * PAGE_START is preferred.
	 *
	 * @see #PAGE_START
	 * @since 1.2
	 */
	public static final String BEFORE_FIRST_LINE = "First";

	/**
	 * Synonym for PAGE_END. Exists for compatibility with previous versions.
	 * PAGE_END is preferred.
	 *
	 * @see #PAGE_END
	 * @since 1.2
	 */
	public static final String AFTER_LAST_LINE = "Last";

	/**
	 * Synonym for LINE_START. Exists for compatibility with previous versions.
	 * LINE_START is preferred.
	 *
	 * @see #LINE_START
	 * @since 1.2
	 */
	public static final String BEFORE_LINE_BEGINS = "Before";

	/**
	 * Synonym for LINE_END. Exists for compatibility with previous versions.
	 * LINE_END is preferred.
	 *
	 * @see #LINE_END
	 * @since 1.2
	 */
	public static final String AFTER_LINE_ENDS = "After";

	/**
	 * The component comes before the first line of the layout's content. For
	 * Western, left-to-right and top-to-bottom orientations, this is equivalent
	 * to NORTH.
	 *
	 * @see java.awt.Component#getComponentOrientation
	 * @since 1.4
	 */
	public static final String PAGE_START = BEFORE_FIRST_LINE;

	/**
	 * The component comes after the last line of the layout's content. For
	 * Western, left-to-right and top-to-bottom orientations, this is equivalent
	 * to SOUTH.
	 *
	 * @see java.awt.Component#getComponentOrientation
	 * @since 1.4
	 */
	public static final String PAGE_END = AFTER_LAST_LINE;

	/**
	 * The component goes at the beginning of the line direction for the layout.
	 * For Western, left-to-right and top-to-bottom orientations, this is
	 * equivalent to WEST.
	 *
	 * @see java.awt.Component#getComponentOrientation
	 * @since 1.4
	 */
	public static final String LINE_START = BEFORE_LINE_BEGINS;

	/**
	 * The component goes at the end of the line direction for the layout. For
	 * Western, left-to-right and top-to-bottom orientations, this is equivalent
	 * to EAST.
	 *
	 * @see java.awt.Component#getComponentOrientation
	 * @since 1.4
	 */
	public static final String LINE_END = AFTER_LINE_ENDS;

	/*
	 * JDK 1.1 serialVersionUID
	 */
	private static final long serialVersionUID = -8658291919501921765L;

	/**
	 * Constructs a new border layout with no gaps between components.
	 */
	public BorderLayout() {
		this(0, 0);
	}

	/**
	 * Constructs a border layout with the specified gaps between components.
	 * The horizontal gap is specified by <code>hgap</code> and the vertical gap
	 * is specified by <code>vgap</code>.
	 * 
	 * @param hgap
	 *            the horizontal gap.
	 * @param vgap
	 *            the vertical gap.
	 */
	public BorderLayout(int hgap, int vgap) {
		this.hgap = hgap;
		this.vgap = vgap;
	}

	/**
	 * Returns the horizontal gap between components.
	 * 
	 * @since JDK1.1
	 */
	public int getHgap() {
		return hgap;
	}

	/**
	 * Sets the horizontal gap between components.
	 * 
	 * @param hgap
	 *            the horizontal gap between components
	 * @since JDK1.1
	 */
	public void setHgap(int hgap) {
		this.hgap = hgap;
	}

	/**
	 * Returns the vertical gap between components.
	 * 
	 * @since JDK1.1
	 */
	public int getVgap() {
		return vgap;
	}

	/**
	 * Sets the vertical gap between components.
	 * 
	 * @param vgap
	 *            the vertical gap between components
	 * @since JDK1.1
	 */
	public void setVgap(int vgap) {
		this.vgap = vgap;
	}

	/**
	 * Adds the specified component to the layout, using the specified
	 * constraint object. For border layouts, the constraint must be one of the
	 * following constants: <code>NORTH</code>, <code>SOUTH</code>,
	 * <code>EAST</code>, <code>WEST</code>, or <code>CENTER</code>.
	 * <p>
	 * Most applications do not call this method directly. This method is called
	 * when a component is added to a container using the
	 * <code>Container.add</code> method with the same argument types.
	 * 
	 * @param comp
	 *            the component to be added.
	 * @param constraints
	 *            an object that specifies how and where the component is added
	 *            to the layout.
	 * @see java.awt.Container#add(java.awt.Component, java.lang.Object)
	 * @exception IllegalArgumentException
	 *                if the constraint object is not a string, or if it not one
	 *                of the five specified constants.
	 * @since JDK1.1
	 */
	public void addLayoutComponent(Component comp, Object constraints) {
		if ((constraints == null) || (constraints instanceof String)) {
			addLayoutComponent((String) constraints, comp);
		} else {
			throw new IllegalArgumentException("cannot add to layout: constraint must be a string (or null)");
		}
	}

	/**
	 * @deprecated replaced by
	 *             <code>addLayoutComponent(Component, Object)</code>.
	 */
	@Deprecated
	public void addLayoutComponent(String name, Component comp) {
		/* Special case: treat null the same as "Center". */
		if (name == null) {
			name = "Center";
		}

		/*
		 * Assign the component to one of the known regions of the layout.
		 */
		int pos = 4;
		if ("Center".equals(name)) {
			center = comp;
			pos = 4;
		} else if ("North".equals(name)) {
			north = comp;
			pos = 2;
		} else if ("South".equals(name)) {
			south = comp;
			pos = 7;
		} else if ("East".equals(name)) {
			east = comp;
			pos = 5;
		} else if ("West".equals(name)) {
			west = comp;
			pos = 3;
		} else if (BEFORE_FIRST_LINE.equals(name)) {
			firstLine = comp;
		} else if (AFTER_LAST_LINE.equals(name)) {
			lastLine = comp;
		} else if (BEFORE_LINE_BEGINS.equals(name)) {
			firstItem = comp;
		} else if (AFTER_LINE_ENDS.equals(name)) {
			lastItem = comp;
		} else {
			throw new IllegalArgumentException("cannot add to layout: unknown constraint: " + name);
		}
		add(comp, pos);
	}

	/**
	 * Removes the specified component from this border layout. This method is
	 * called when a container calls its <code>remove</code> or
	 * <code>removeAll</code> methods. Most applications do not call this method
	 * directly.
	 * 
	 * @param comp
	 *            the component to be removed.
	 * @see java.awt.Container#remove(java.awt.Component)
	 * @see java.awt.Container#removeAll()
	 */
	public void removeLayoutComponent(Component comp) {
		if (comp == center) {
			center = null;
		} else if (comp == north) {
			north = null;
		} else if (comp == south) {
			south = null;
		} else if (comp == east) {
			east = null;
		} else if (comp == west) {
			west = null;
		}
		if (comp == firstLine) {
			firstLine = null;
		} else if (comp == lastLine) {
			lastLine = null;
		} else if (comp == firstItem) {
			firstItem = null;
		} else if (comp == lastItem) {
			lastItem = null;
		}
	}

	public Component getLayoutComponent(Object constraints) {
		if (CENTER.equals(constraints)) {
			return center;
		} else if (NORTH.equals(constraints)) {
			return north;
		} else if (SOUTH.equals(constraints)) {
			return south;
		} else if (WEST.equals(constraints)) {
			return west;
		} else if (EAST.equals(constraints)) {
			return east;
		} else if (PAGE_START.equals(constraints)) {
			return firstLine;
		} else if (PAGE_END.equals(constraints)) {
			return lastLine;
		} else if (LINE_START.equals(constraints)) {
			return firstItem;
		} else if (LINE_END.equals(constraints)) {
			return lastItem;
		} else {
			throw new IllegalArgumentException("cannot get component: unknown constraint: " + constraints);
		}
	}

	public Component getLayoutComponent(Container target, Object constraints) {
		boolean ltr = true;
		Component result = null;

		if (NORTH.equals(constraints)) {
			result = (firstLine != null) ? firstLine : north;
		} else if (SOUTH.equals(constraints)) {
			result = (lastLine != null) ? lastLine : south;
		} else if (WEST.equals(constraints)) {
			result = ltr ? firstItem : lastItem;
			if (result == null) {
				result = west;
			}
		} else if (EAST.equals(constraints)) {
			result = ltr ? lastItem : firstItem;
			if (result == null) {
				result = east;
			}
		} else if (CENTER.equals(constraints)) {
			result = center;
		} else {
			throw new IllegalArgumentException("cannot get component: invalid constraint: " + constraints);
		}

		return result;
	}

	public Object getConstraints(Component comp) {
		if (comp == null) {
			return null;
		}
		if (comp == center) {
			return CENTER;
		} else if (comp == north) {
			return NORTH;
		} else if (comp == south) {
			return SOUTH;
		} else if (comp == west) {
			return WEST;
		} else if (comp == east) {
			return EAST;
		} else if (comp == firstLine) {
			return PAGE_START;
		} else if (comp == lastLine) {
			return PAGE_END;
		} else if (comp == firstItem) {
			return LINE_START;
		} else if (comp == lastItem) {
			return LINE_END;
		}
		return null;
	}

	public Dimension maximumLayoutSize(Container target) {
		return new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE);
	}

	public float getLayoutAlignmentX(Container parent) {
		return 0.5f;
	}

	public float getLayoutAlignmentY(Container parent) {
		return 0.5f;
	}

	public void invalidateLayout(Container target) {
	}

	public void layoutContainer(Container parent) {
		if (!created) {
			this.parent = parent;
			created = true;
			HTMLDivElement div = any(parent.getHTMLElement());
			table = document.createElement(StringTypes.table);
			table.style.width = "100%";
			table.style.height = "100%";
			// table.style.position = "absolute";
			table.style.left = "0px";
			table.style.right = "0px";
			table.style.zIndex = "0";

			for (int j = 0; j < 3; j++) {
				HTMLTableRowElement row = document.createElement(StringTypes.tr);
				table.appendChild(row);
				if(j==0 || j==2) {
					row.style.height = "0%";
				}
				for (int i = 0; i < 3; i++) {
					HTMLTableDataCellElement col = document.createElement(StringTypes.td);
					row.appendChild(col);
					if(i==0 || i==2) {
						col.style.width = "0%";
					}
				}
			}
			div.appendChild(table);
		}
	}

	private void add(Component component, int position) {
		int pos = 0;
		for (int j = 0; j < 3; j++) {
			HTMLTableRowElement row = (HTMLTableRowElement) table.childNodes.$get(j);
			for (int i = 0; i < 3; i++) {
				HTMLTableColElement col = (HTMLTableColElement) row.childNodes.$get(i);
				if (pos++ == position) {
					col.appendChild(component.getHTMLElement());
					component.getHTMLElement().style.width = "100%";
					component.getHTMLElement().style.height = "100%";
					return;
				}
			}
		}
	}
	
	/**
	 * Returns a string representation of the state of this border layout.
	 * 
	 * @return a string representation of this border layout.
	 */
	public String toString() {
		return getClass().getName() + "[hgap=" + hgap + ",vgap=" + vgap + "]";
	}
}
