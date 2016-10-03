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
package javax.swing.event;

import static jsweet.util.Globals.any;
import static jsweet.util.Globals.array;

import java.io.Serializable;
import java.util.EventListener;

@SuppressWarnings("serial")
public class EventListenerList implements Serializable {
	/* A null array to be shared by all empty listener lists */
	private final static Object[] NULL_ARRAY = new Object[0];
	/* The list of ListenerType - Listener pairs */
	protected transient Object[] listenerList = NULL_ARRAY;

	public Object[] getListenerList() {
		return listenerList;
	}

	public <T extends EventListener> T[] getListeners(Class<T> t) {
		Object[] lList = listenerList;
		int n = getListenerCount(lList, t);
		T[] result = array(new jsweet.lang.Array<T>(n));// (T[])Array.newInstance(t,
														// n);
		int j = 0;
		for (int i = lList.length - 2; i >= 0; i -= 2) {
			if (lList[i] == t) {
				result[j++] = any(lList[i + 1]);
			}
		}
		return result;
	}

	public int getListenerCount() {
		return listenerList.length / 2;
	}

	public int getListenerCount(Class<?> t) {
		Object[] lList = listenerList;
		return getListenerCount(lList, t);
	}

	private int getListenerCount(Object[] list, Class<?> t) {
		int count = 0;
		for (int i = 0; i < list.length; i += 2) {
			if (t == (Class<?>) list[i])
				count++;
		}
		return count;
	}

	public synchronized <T extends EventListener> void add(Class<T> t, T l) {
		if (l == null) {
			// In an ideal world, we would do an assertion here
			// to help developers know they are probably doing
			// something wrong
			return;
		}
		if (l.getClass() != t) {
			throw new IllegalArgumentException("Listener " + l + " is not of type " + t);
		}
		if (listenerList == NULL_ARRAY) {
			// if this is the first listener added,
			// initialize the lists
			listenerList = new Object[] { t, l };
		} else {
			// Otherwise copy the array and add the new listener
			int i = listenerList.length;
			Object[] tmp = new Object[i + 2];
			System.arraycopy(listenerList, 0, tmp, 0, i);

			tmp[i] = t;
			tmp[i + 1] = l;

			listenerList = tmp;
		}
	}

	public synchronized <T extends EventListener> void remove(Class<T> t, T l) {
		if (l == null) {
			// In an ideal world, we would do an assertion here
			// to help developers know they are probably doing
			// something wrong
			return;
		}
		if (l.getClass() != t) {
			throw new IllegalArgumentException("Listener " + l + " is not of type " + t);
		}
		// Is l on the list?
		int index = -1;
		for (int i = listenerList.length - 2; i >= 0; i -= 2) {
			if ((listenerList[i] == t) && (listenerList[i + 1].equals(l) == true)) {
				index = i;
				break;
			}
		}

		// If so, remove it
		if (index != -1) {
			Object[] tmp = new Object[listenerList.length - 2];
			// Copy the list up to index
			System.arraycopy(listenerList, 0, tmp, 0, index);
			// Copy from two past the index, up to
			// the end of tmp (which is two elements
			// shorter than the old list)
			if (index < tmp.length)
				System.arraycopy(listenerList, index + 2, tmp, index, tmp.length - index);
			// set the listener array to the new array or null
			listenerList = (tmp.length == 0) ? NULL_ARRAY : tmp;
		}
	}

	/**
	 * Returns a string representation of the EventListenerList.
	 */
	public String toString() {
		Object[] lList = listenerList;
		String s = "EventListenerList: ";
		s += lList.length / 2 + " listeners: ";
		for (int i = 0; i <= lList.length - 2; i += 2) {
			s += " type " + ((Class<?>) lList[i]).getName();
			s += " listener " + lList[i + 1];
		}
		return s;
	}
}
