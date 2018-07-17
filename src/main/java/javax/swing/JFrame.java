package javax.swing;

import java.awt.*;

public class JFrame extends Frame implements RootPaneContainer, WindowConstants {

	public static final int EXIT_ON_CLOSE = 3;
	private int defaultCloseOperation = HIDE_ON_CLOSE;

	protected JRootPane rootPane;
	protected boolean rootPaneCheckingEnabled = false;

	public JFrame() {
		frameInit();
	}

	public JFrame(String title) {
		super(title);
		frameInit();
	}

	private void frameInit() {
		setLayout(new BorderLayout());
		setRootPane(createRootPane());
		rootPaneCheckingEnabled = true;
	}

	protected JRootPane createRootPane() {
		JRootPane rp = new JRootPane();
		return rp;
	}

	protected void setRootPane(JRootPane root) {
		if (rootPane != null) {
			remove(rootPane);
		}
		rootPane = root;
		if (rootPane != null) {
			add(rootPane, BorderLayout.CENTER);
		}
	}

	@Override
	public Container getContentPane() {
		if (rootPane != null) {
			return getRootPane().getContentPane();
		} else {
			return null;
		}
	}

	@Override
	public JRootPane getRootPane() {
		return rootPane;
	}

	@Override
	public void setContentPane(Container contentPane) {
		getRootPane().setContentPane(contentPane);
	}

	public void setGlassPane(Container glassPane) {
		getRootPane().setGlassPane(glassPane);
	}

	public Component getGlassPane() {
		return getRootPane().getGlassPane();
	}

	public void setDefaultCloseOperation(int operation) {
		if (operation != DO_NOTHING_ON_CLOSE && operation != HIDE_ON_CLOSE && operation != DISPOSE_ON_CLOSE
				&& operation != EXIT_ON_CLOSE) {
			throw new IllegalArgumentException(
					"defaultCloseOperation must be one of: DO_NOTHING_ON_CLOSE, HIDE_ON_CLOSE, DISPOSE_ON_CLOSE, or EXIT_ON_CLOSE");
		}

		if (this.defaultCloseOperation != operation) {
			int oldValue = this.defaultCloseOperation;
			this.defaultCloseOperation = operation;
			firePropertyChange("defaultCloseOperation", oldValue, operation);
		}
	}

}
