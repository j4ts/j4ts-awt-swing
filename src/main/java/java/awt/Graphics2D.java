/*
 * Copyright (c) 1996, 2013, Oracle and/or its affiliates. All rights reserved.
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

import java.awt.geom.AffineTransform;
import java.awt.image.ImageObserver;

public abstract class Graphics2D extends Graphics {

    protected Graphics2D() {
    }

    public void draw3DRect(int x, int y, int width, int height,
                           boolean raised) {
        Paint p = getPaint();
        Color c = getColor();
        Color brighter = c.brighter();
        Color darker = c.darker();

        setColor(raised ? brighter : darker);
        //drawLine(x, y, x, y + height);
        fillRect(x, y, 1, height + 1);
        //drawLine(x + 1, y, x + width - 1, y);
        fillRect(x + 1, y, width - 1, 1);
        setColor(raised ? darker : brighter);
        //drawLine(x + 1, y + height, x + width, y + height);
        fillRect(x + 1, y + height, width, 1);
        //drawLine(x + width, y, x + width, y + height - 1);
        fillRect(x + width, y, 1, height);
        setPaint(p);
    }

    public void fill3DRect(int x, int y, int width, int height,
                           boolean raised) {
        Paint p = getPaint();
        Color c = getColor();
        Color brighter = c.brighter();
        Color darker = c.darker();

        if (!raised) {
            setColor(darker);
        } else if (p != c) {
            setColor(c);
        }
        fillRect(x+1, y+1, width-2, height-2);
        setColor(raised ? brighter : darker);
        //drawLine(x, y, x, y + height - 1);
        fillRect(x, y, 1, height);
        //drawLine(x + 1, y, x + width - 2, y);
        fillRect(x + 1, y, width - 2, 1);
        setColor(raised ? darker : brighter);
        //drawLine(x + 1, y + height - 1, x + width - 1, y + height - 1);
        fillRect(x + 1, y + height - 1, width - 1, 1);
        //drawLine(x + width - 1, y, x + width - 1, y + height - 2);
        fillRect(x + width - 1, y, 1, height - 1);
        setPaint(p);
    }

    public abstract void draw(Shape s);

    public abstract boolean drawImage(Image img,
                                      AffineTransform xform,
                                      ImageObserver obs);

//    public abstract void drawImage(BufferedImage img,
//                                   BufferedImageOp op,
//                                   int x,
//                                   int y);

//    public abstract void drawRenderedImage(RenderedImage img,
//                                           AffineTransform xform);

//    public abstract void drawRenderableImage(RenderableImage img,
//                                             AffineTransform xform);

    public abstract void drawString(String str, int x, int y);

    public abstract void drawString(String str, float x, float y);

//    public abstract void drawString(AttributedCharacterIterator iterator,
//                                    int x, int y);
//
//    public abstract void drawString(AttributedCharacterIterator iterator,
//                                    float x, float y);

//    public abstract void drawGlyphVector(GlyphVector g, float x, float y);

    public abstract void fill(Shape s);

//    public abstract boolean hit(Rectangle rect,
//                                Shape s,
//                                boolean onStroke);

//    public abstract GraphicsConfiguration getDeviceConfiguration();

//    public abstract void setComposite(Composite comp);

    public abstract void setPaint( Paint paint );

    public abstract void setStroke(Stroke s);

//    public abstract void setRenderingHint(Key hintKey, Object hintValue);

//    public abstract Object getRenderingHint(Key hintKey);

//    public abstract void setRenderingHints(Map<?,?> hints);

//    public abstract void addRenderingHints(Map<?,?> hints);

//    public abstract RenderingHints getRenderingHints();

//    public abstract void translate(int x, int y);

    public abstract void translate(double tx, double ty);

    public abstract void rotate(double theta);

    public abstract void rotate(double theta, double x, double y);

    public abstract void scale(double sx, double sy);

    public abstract void shear(double shx, double shy);

    public abstract void transform(AffineTransform Tx);

    public abstract void setTransform(AffineTransform Tx);

    public abstract AffineTransform getTransform();

    public abstract Paint getPaint();

    //public abstract Composite getComposite();

    public abstract void setBackground(Color color);

    public abstract Color getBackground();

    //public abstract Stroke getStroke();

     //public abstract void clip(Shape s);

    //public abstract FontRenderContext getFontRenderContext();

}
