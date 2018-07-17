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

import java.awt.Component;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.image.ImageObserver;
import java.beans.ConstructorProperties;
import java.beans.Transient;
import java.io.Serializable;
import java.net.URL;

import def.dom.HTMLImageElement;

public class ImageIcon implements Icon, Serializable {
	transient private String filename;
	transient private URL location;

	transient Image image;
	transient int loadStatus;
	ImageObserver imageObserver;
	String description;

	int width;
	int height;

	@Override
	public HTMLImageElement getInternalHTMLImageElement() {
		return image == null ? null : image.source;
	}

	public ImageIcon(String filename, String description) {
		image = Toolkit.getDefaultToolkit().getImage(filename);
		if (image == null) {
			return;
		}
		this.filename = filename;
		this.description = description;
		loadImage(image);
	}

	@ConstructorProperties({ "description" })
	public ImageIcon(String filename) {
		this(filename, filename);
	}

	public ImageIcon(URL location, String description) {
		this.image = new Image(location.toString());
		this.location = location;
		this.description = description;
		loadImage(image);
	}

	public ImageIcon (URL location) {
		this(location, location.toString());
	}

	public ImageIcon(Image image, String description) {
		this(image);
		this.description = description;
	}

	public ImageIcon(Image image) {
		this.image = image;
		loadImage(image);
	}

	// public ImageIcon (byte[] imageData, String description) {
	// this.image = Toolkit.getDefaultToolkit().createImage(imageData);
	// if (image == null) {
	// return;
	// }
	// this.description = description;
	// loadImage(image);
	// }

	// public ImageIcon (byte[] imageData) {
	// this.image = Toolkit.getDefaultToolkit().createImage(imageData);
	// if (image == null) {
	// return;
	// }
	// Object o = image.getProperty("comment", imageObserver);
	// if (o instanceof String) {
	// description = (String) o;
	// }
	// loadImage(image);
	// }

	public ImageIcon() {
	}

	protected void loadImage(Image image) {
		image.getWidth(null);
		image.getHeight(null);
	}

	public int getImageLoadStatus() {
		return loadStatus;
	}

	@Transient
	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
		loadImage(image);
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public synchronized void paintIcon(Component c, Graphics g, int x, int y) {
		g.drawImage(image, x, y, imageObserver);
	}

	public int getIconWidth() {
		return width;
	}

	public int getIconHeight() {
		return height;
	}

	public void setImageObserver(ImageObserver observer) {
		imageObserver = observer;
	}

	@Transient
	public ImageObserver getImageObserver() {
		return imageObserver;
	}

	public String toString() {
		if (description != null) {
			return description;
		}
		return "ImageIcon";
	}

}
