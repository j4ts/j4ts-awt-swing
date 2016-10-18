package java.awt.image;

import java.awt.Image;

public class BufferedImage extends Image implements RenderedImage {

	public BufferedImage(String src) {
		super(src);
	}

	@Override
	public int getWidth() {
		return super.getWidth(null);
	}

	@Override
	public int getHeight() {
		return super.getHeight(null);
	}

}
