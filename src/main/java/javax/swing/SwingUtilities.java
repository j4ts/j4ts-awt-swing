package javax.swing;

import def.dom.Globals;

public class SwingUtilities implements SwingConstants {
    private SwingUtilities() {
        // do nothing
    }

    public static void invokeLater(Runnable doRun) {
        Globals.window.requestAnimationFrame(v -> doRun.run());
    }

    public static void invokeAndWait(Runnable doRun) {
        doRun.run();
    }
}
