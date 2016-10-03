package javax.imageio;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.LocalStorageFileSystem;

public class ImageIO {

	public static BufferedImage read(File input) throws IOException {
		String src = "data:image/png;base64," + LocalStorageFileSystem.fs.getEntry(input.getAbsolutePath()).data;
		return new BufferedImage(src);
	}
}
