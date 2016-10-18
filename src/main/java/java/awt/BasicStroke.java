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

package java.awt;

import static jsweet.util.Globals.any;
import static jsweet.util.Globals.array;

public class BasicStroke implements Stroke {

	public final static int JOIN_MITER = 0;

	public final static int JOIN_ROUND = 1;

	public final static int JOIN_BEVEL = 2;

	public final static int CAP_BUTT = 0;

	public final static int CAP_ROUND = 1;

	public final static int CAP_SQUARE = 2;

	float width;

	int join;
	int cap;
	float miterlimit;

	float dash[];
	float dash_phase;

	public BasicStroke(float width, int cap, int join, float miterlimit, float dash[], float dash_phase) {
		if (width < 0.0f) {
			throw new IllegalArgumentException("negative width");
		}
		if (cap != CAP_BUTT && cap != CAP_ROUND && cap != CAP_SQUARE) {
			throw new IllegalArgumentException("illegal end cap value");
		}
		if (join == JOIN_MITER) {
			if (miterlimit < 1.0f) {
				throw new IllegalArgumentException("miter limit < 1");
			}
		} else if (join != JOIN_ROUND && join != JOIN_BEVEL) {
			throw new IllegalArgumentException("illegal line join value");
		}
		if (dash != null) {
			if (dash_phase < 0.0f) {
				throw new IllegalArgumentException("negative dash phase");
			}
			boolean allzero = true;
			for (int i = 0; i < dash.length; i++) {
				float d = dash[i];
				if (d > 0.0) {
					allzero = false;
				} else if (d < 0.0) {
					throw new IllegalArgumentException("negative dash length");
				}
			}
			if (allzero) {
				throw new IllegalArgumentException("dash lengths all zero");
			}
		}
		this.width = width;
		this.cap = cap;
		this.join = join;
		this.miterlimit = miterlimit;
		if (dash != null) {
			this.dash = any(array(dash).splice(0, dash.length));
		}
		this.dash_phase = dash_phase;
	}

	public BasicStroke(float width, int cap, int join, float miterlimit) {
		this(width, cap, join, miterlimit, null, 0.0f);
	}

	public BasicStroke(float width, int cap, int join) {
		this(width, cap, join, 10.0f, null, 0.0f);
	}

	public BasicStroke(float width) {
		this(width, CAP_SQUARE, JOIN_MITER, 10.0f, null, 0.0f);
	}

	public BasicStroke() {
		this(1.0f, CAP_SQUARE, JOIN_MITER, 10.0f, null, 0.0f);
	}

	public Shape createStrokedShape(Shape s) {
		// sun.java2d.pipe.RenderingEngine re =
		// sun.java2d.pipe.RenderingEngine.getInstance();
		// return re.createStrokedShape(s, width, cap, join, miterlimit,
		// dash, dash_phase);
		return null;
	}

	public float getLineWidth() {
		return width;
	}

	public int getEndCap() {
		return cap;
	}

	public int getLineJoin() {
		return join;
	}

	public float getMiterLimit() {
		return miterlimit;
	}

	public float[] getDashArray() {
		if (dash == null) {
			return null;
		}

		return any(array(dash).splice(0, dash.length));
	}

	public float getDashPhase() {
		return dash_phase;
	}

	public int hashCode() {
		int hash = Float.floatToIntBits(width);
		hash = hash * 31 + join;
		hash = hash * 31 + cap;
		hash = hash * 31 + Float.floatToIntBits(miterlimit);
		if (dash != null) {
			hash = hash * 31 + Float.floatToIntBits(dash_phase);
			for (int i = 0; i < dash.length; i++) {
				hash = hash * 31 + Float.floatToIntBits(dash[i]);
			}
		}
		return hash;
	}

	public boolean equals(Object obj) {
		if (!(obj instanceof BasicStroke)) {
			return false;
		}

		BasicStroke bs = (BasicStroke) obj;
		if (width != bs.width) {
			return false;
		}

		if (join != bs.join) {
			return false;
		}

		if (cap != bs.cap) {
			return false;
		}

		if (miterlimit != bs.miterlimit) {
			return false;
		}

		if (dash != null) {
			if (dash_phase != bs.dash_phase) {
				return false;
			}

			if (!java.util.Arrays.equals(dash, bs.dash)) {
				return false;
			}
		} else if (bs.dash != null) {
			return false;
		}

		return true;
	}
}
