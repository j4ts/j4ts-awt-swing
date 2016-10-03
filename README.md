## AWT/Swing for the web

A [JSweet](http://www.jsweet.org) implementation for AWT/Swing.

This project is not meant to be an exact nor complete transpilation of the AWT/Swing framework, but a JavaScript/HTML5 implementation following most AWT/Swing top-level APIs. Applications using this implementation will not behave or look exactly like their Java counterparts, but most high-level logic and presentation/layout intentions will be preserved.

By doing so, we have two purposes:

1. Make it possible for existing Java AWT/Swing projects to compile and run on the web with very few changes (and some limitations).
2. Make it possible to program web applications by keeping the same design spirit as a fully Object-Oriented Framework such as AWT/Swing.

DISCLAIMER: this is *not* a Java emulation. This is a JavaScript implementation using the Java syntax thanks to the [JSweet](http://www.jsweet.org) transpiler.

## License

This project contains some OpenJDK source code and should fall into a GPL license (with classpath exception). However, we believe that since the implementation has been fully changed to target the web, we should be able to change the license to Apache 2. This is a legal issue. Please contact us if you have any thoughts/help on that topic.

At this point, please consider that this project is under GPL, to avoid running later into legal issues.
