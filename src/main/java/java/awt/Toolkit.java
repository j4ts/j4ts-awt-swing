package java.awt;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import javax.imageio.ImageIO;

public class Toolkit {

	private static Toolkit toolkit;

	private Map<String, Image> images = new HashMap<>();

	public static String getProperty(String key, String defaultValue) {
		return defaultValue;
	}

	public static synchronized Toolkit getDefaultToolkit() {
		if (toolkit == null) {
			toolkit = new Toolkit();
		}
		return toolkit;
	}

	public Image createImage(String filename) {
		try {
			Image image = ImageIO.read(new File(filename));
			images.put(filename, image);
			return image;
		} catch (Exception e) {
			return null;
		}
	}

	public Image getImage(String filename) {
		return createImage(filename);
	}

}
