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

import static jsweet.util.Globals.array;

public abstract class Container extends Component {

	LayoutManager layoutMgr;
	Component[] components = {};

	public LayoutManager getLayout() {
		return layoutMgr;
	}

	public void setLayout(LayoutManager mgr) {
		layoutMgr = mgr;
		layoutMgr.layoutContainer(this);
	}

	public void doLayout() {
		layout();
	}

	@Deprecated
	public void layout() {
		LayoutManager layoutMgr = this.layoutMgr;
		if (layoutMgr != null) {
			// layoutMgr.layoutContainer(this);
		}
	}

	public Component add(Component component) {
		add(null, component);
		return component;
	}

	public Component add(String name, Component component) {
		array(components).push(component);
		component.initHTML();
		if (layoutMgr != null) {
			layoutMgr.onComponentAdded(this, component, -1);
		}
		return component;
	}

	@Override
	public void doPaintInternal() {
		super.doPaintInternal();
		for (Component c : components) {
			c.doPaintInternal();
		}
	}

}
