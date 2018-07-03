package java.awt;

import static def.dom.Globals.document;
import static jsweet.util.Lang.any;

import def.dom.*;
import jsweet.util.StringTypes;

import java.util.Arrays;

public class GridLayout implements LayoutManager2 {

	boolean created = false;

	Container parent;
	public HTMLTableElement table;
	int currentPosition = 0;
	int cols, rows;

	public GridLayout(int rows, int cols) {
		this.rows = rows;
		this.cols = cols;
	}

	@Override
	public void addLayoutComponent(String name, Component component) {
		int pos = 0;
		if (table.children.$get(0).childNodes.length * rows == currentPosition) {
			for (int i = 0; i < rows; i++) {
				HTMLTableDataCellElement col = document.createElement(StringTypes.td);
				table.children.$get(i).appendChild(col);
			}
			Component[] cp = new Component[parent.getComponentCount()];
			for (int i = 0; i < cp.length; ++i)
				cp[i] = parent.getComponents()[i];

			for (Component comp : cp) {
				parent.remove(comp);
			}

			cols = table.children.$get(0).childNodes.length;
			currentPosition = 0;

			for (Component comp : cp) {
				parent.add(comp);
			}
		} else {
			for (int j = 0; j < rows; j++) {
				HTMLTableRowElement row = (HTMLTableRowElement) table.childNodes.$get(j);
				for (int i = 0; i < row.childNodes.length; i++) {
					HTMLTableColElement col = (HTMLTableColElement) row.childNodes.$get(i);
					if (pos++ == currentPosition) {
						col.appendChild(component.getHTMLElement());
						currentPosition++;
						return;
					}
				}
			}
		}
	}

	@Override
	public void removeLayoutComponent(Component component) {
	}

	@Override
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
			table.style.border = "0px";
			table.cellSpacing = "0px";
			table.cellPadding = "0px";
			table.style.tableLayout = "fixed";

			for (int j = 0; j < rows; j++) {
				HTMLTableRowElement row = document.createElement(StringTypes.tr);
				table.appendChild(row);
				for (int i = 0; i < 1; i++) {
					HTMLTableDataCellElement col = document.createElement(StringTypes.td);
					row.appendChild(col);
				}
			}
			div.appendChild(table);
		}
	}

	@Override
	public void addLayoutComponent(Component component, Object o) {
		addLayoutComponent((String) null, component);
	}

	@Override
	public float getLayoutAlignmentX(Container container) {
		return 0;
	}

	@Override
	public float getLayoutAlignmentY(Container container) {
		return 0;
	}

	@Override
	public void invalidateLayout(Container container) {

	}
}
