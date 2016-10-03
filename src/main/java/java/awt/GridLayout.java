package java.awt;

import static jsweet.dom.Globals.document;
import static jsweet.util.Globals.any;

import jsweet.dom.HTMLDivElement;
import jsweet.dom.HTMLTableColElement;
import jsweet.dom.HTMLTableDataCellElement;
import jsweet.dom.HTMLTableElement;
import jsweet.dom.HTMLTableRowElement;
import jsweet.util.StringTypes;

public class GridLayout implements LayoutManager {

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

			for (int j = 0; j < rows; j++) {
				HTMLTableRowElement row = document.createElement(StringTypes.tr);
				table.appendChild(row);
				for (int i = 0; i < cols; i++) {
					HTMLTableDataCellElement col = document.createElement(StringTypes.td);
					row.appendChild(col);
					col.style.width = "" + ((int) 100 / cols) + "%";
				}
			}
			div.appendChild(table);
		}
	}

	@Override
	public void onComponentAdded(Container parent, Component component, int position) {
		int pos = 0;
		for (int j = 0; j < rows; j++) {
			HTMLTableRowElement row = (HTMLTableRowElement) table.childNodes.$get(j);
			for (int i = 0; i < cols; i++) {
				HTMLTableColElement col = (HTMLTableColElement) row.childNodes.$get(i);
				if (pos++ == currentPosition) {
					col.appendChild(component.getHTMLElement());
					component.getHTMLElement().style.width = "100%";
					component.getHTMLElement().style.height = "100%";
					currentPosition++;
					return;
				}
			}
		}
	}
}
