declare namespace sun.awt.geom {
    abstract class Crossings {
        static debug: boolean;
        limit: number;
        yranges: number[];
        xlo: number;
        ylo: number;
        xhi: number;
        yhi: number;
        constructor(xlo: number, ylo: number, xhi: number, yhi: number);
        getXLo(): number;
        getYLo(): number;
        getXHi(): number;
        getYHi(): number;
        abstract record(ystart: number, yend: number, direction: number): any;
        print(): void;
        isEmpty(): boolean;
        abstract covers(ystart: number, yend: number): boolean;
        static findCrossings$java_util_Vector$double$double$double$double(curves: java.util.Vector<any>, xlo: number, ylo: number, xhi: number, yhi: number): Crossings;
        static findCrossings(curves?: any, xlo?: any, ylo?: any, xhi?: any, yhi?: any): Crossings;
        static findCrossings$java_awt_geom_PathIterator$double$double$double$double(pi: java.awt.geom.PathIterator, xlo: number, ylo: number, xhi: number, yhi: number): Crossings;
        accumulateLine$double$double$double$double(x0: number, y0: number, x1: number, y1: number): boolean;
        accumulateLine$double$double$double$double$int(x0: number, y0: number, x1: number, y1: number, direction: number): boolean;
        accumulateLine(x0?: any, y0?: any, x1?: any, y1?: any, direction?: any): boolean;
        tmp: java.util.Vector<any>;
        accumulateQuad(x0: number, y0: number, coords: number[]): boolean;
        accumulateCubic(x0: number, y0: number, coords: number[]): boolean;
    }
    namespace Crossings {
        class EvenOdd extends sun.awt.geom.Crossings {
            constructor(xlo: number, ylo: number, xhi: number, yhi: number);
            covers(ystart: number, yend: number): boolean;
            record(ystart: number, yend: number, direction: number): void;
        }
        class NonZero extends sun.awt.geom.Crossings {
            crosscounts: number[];
            constructor(xlo: number, ylo: number, xhi: number, yhi: number);
            covers(ystart: number, yend: number): boolean;
            remove(cur: number): void;
            insert(cur: number, lo: number, hi: number, dir: number): void;
            record(ystart: number, yend: number, direction: number): void;
        }
    }
}
declare namespace sun.awt.geom {
    class ChainEnd {
        head: sun.awt.geom.CurveLink;
        tail: sun.awt.geom.CurveLink;
        partner: ChainEnd;
        etag: number;
        constructor(first: sun.awt.geom.CurveLink, partner: ChainEnd);
        getChain(): sun.awt.geom.CurveLink;
        setOtherEnd(partner: ChainEnd): void;
        getPartner(): ChainEnd;
        linkTo(that: ChainEnd): sun.awt.geom.CurveLink;
        addLink(newlink: sun.awt.geom.CurveLink): void;
        getX(): number;
    }
}
declare namespace sun.awt.geom {
    abstract class Curve {
        static INCREASING: number;
        static DECREASING: number;
        direction: number;
        static insertMove(curves: java.util.Vector<any>, x: number, y: number): void;
        static insertLine(curves: java.util.Vector<any>, x0: number, y0: number, x1: number, y1: number): void;
        static insertQuad(curves: java.util.Vector<any>, x0: number, y0: number, coords: number[]): void;
        static insertCubic(curves: java.util.Vector<any>, x0: number, y0: number, coords: number[]): void;
        /**
         * Calculates the number of times the given path crosses the ray extending
         * to the right from (px,py). If the point lies on a part of the path, then
         * no crossings are counted for that intersection. +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing The return value is the sum
         * of all crossings for every segment in the path. The path must start with
         * a SEG_MOVETO, otherwise an exception is thrown. The caller must check
         * p[xy] for NaN values. The caller may also reject infinite p[xy] values as
         * well.
         * @param {*} pi
         * @param {number} px
         * @param {number} py
         * @return {number}
         */
        static pointCrossingsForPath(pi: java.awt.geom.PathIterator, px: number, py: number): number;
        /**
         * Calculates the number of times the line from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on the
         * line, then no crossings are recorded. +1 is returned for a crossing where
         * the Y coordinate is increasing -1 is returned for a crossing where the Y
         * coordinate is decreasing
         * @param {number} px
         * @param {number} py
         * @param {number} x0
         * @param {number} y0
         * @param {number} x1
         * @param {number} y1
         * @return {number}
         */
        static pointCrossingsForLine(px: number, py: number, x0: number, y0: number, x1: number, y1: number): number;
        /**
         * Calculates the number of times the quad from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on a part
         * of the curve, then no crossings are counted for that intersection. the
         * level parameter should be 0 at the top-level call and will count up for
         * each recursion level to prevent infinite recursion +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing
         * @param {number} px
         * @param {number} py
         * @param {number} x0
         * @param {number} y0
         * @param {number} xc
         * @param {number} yc
         * @param {number} x1
         * @param {number} y1
         * @param {number} level
         * @return {number}
         */
        static pointCrossingsForQuad(px: number, py: number, x0: number, y0: number, xc: number, yc: number, x1: number, y1: number, level: number): number;
        /**
         * Calculates the number of times the cubic from (x0,y0) to (x1,y1) crosses
         * the ray extending to the right from (px,py). If the point lies on a part
         * of the curve, then no crossings are counted for that intersection. the
         * level parameter should be 0 at the top-level call and will count up for
         * each recursion level to prevent infinite recursion +1 is added for each
         * crossing where the Y coordinate is increasing -1 is added for each
         * crossing where the Y coordinate is decreasing
         * @param {number} px
         * @param {number} py
         * @param {number} x0
         * @param {number} y0
         * @param {number} xc0
         * @param {number} yc0
         * @param {number} xc1
         * @param {number} yc1
         * @param {number} x1
         * @param {number} y1
         * @param {number} level
         * @return {number}
         */
        static pointCrossingsForCubic(px: number, py: number, x0: number, y0: number, xc0: number, yc0: number, xc1: number, yc1: number, x1: number, y1: number, level: number): number;
        /**
         * The rectangle intersection test counts the number of times that the path
         * crosses through the shadow that the rectangle projects to the right
         * towards (x => +INFINITY).
         *
         * During processing of the path it actually counts every time the path
         * crosses either or both of the top and bottom edges of that shadow. If the
         * path enters from the top, the count is incremented. If it then exits back
         * through the top, the same way it came in, the count is decremented and
         * there is no impact on the winding count. If, instead, the path exits out
         * the bottom, then the count is incremented again and a full pass through
         * the shadow is indicated by the winding count having been incremented by
         * 2.
         *
         * Thus, the winding count that it accumulates is actually double the real
         * winding count. Since the path is continuous, the final answer should be a
         * multiple of 2, otherwise there is a logic error somewhere.
         *
         * If the path ever has a direct hit on the rectangle, then a special value
         * is returned. This special value terminates all ongoing accumulation on up
         * through the call chain and ends up getting returned to the calling
         * function which can then produce an answer directly. For intersection
         * tests, the answer is always "true" if the path intersects the rectangle.
         * For containment tests, the answer is always "false" if the path
         * intersects the rectangle. Thus, no further processing is ever needed if
         * an intersection occurs.
         */
        static RECT_INTERSECTS: number;
        /**
         * Accumulate the number of times the path crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details. The return value is the sum of all
         * crossings for both the top and bottom of the shadow for every segment in
         * the path, or the special value RECT_INTERSECTS if the path ever enters
         * the interior of the rectangle. The path must start with a SEG_MOVETO,
         * otherwise an exception is thrown. The caller must check r[xy]{min,max}
         * for NaN values.
         * @param {*} pi
         * @param {number} rxmin
         * @param {number} rymin
         * @param {number} rxmax
         * @param {number} rymax
         * @return {number}
         */
        static rectCrossingsForPath(pi: java.awt.geom.PathIterator, rxmin: number, rymin: number, rxmax: number, rymax: number): number;
        /**
         * Accumulate the number of times the line crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         * @param {number} crossings
         * @param {number} rxmin
         * @param {number} rymin
         * @param {number} rxmax
         * @param {number} rymax
         * @param {number} x0
         * @param {number} y0
         * @param {number} x1
         * @param {number} y1
         * @return {number}
         */
        static rectCrossingsForLine(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, x1: number, y1: number): number;
        /**
         * Accumulate the number of times the quad crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         * @param {number} crossings
         * @param {number} rxmin
         * @param {number} rymin
         * @param {number} rxmax
         * @param {number} rymax
         * @param {number} x0
         * @param {number} y0
         * @param {number} xc
         * @param {number} yc
         * @param {number} x1
         * @param {number} y1
         * @param {number} level
         * @return {number}
         */
        static rectCrossingsForQuad(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, xc: number, yc: number, x1: number, y1: number, level: number): number;
        /**
         * Accumulate the number of times the cubic crosses the shadow extending to
         * the right of the rectangle. See the comment for the RECT_INTERSECTS
         * constant for more complete details.
         * @param {number} crossings
         * @param {number} rxmin
         * @param {number} rymin
         * @param {number} rxmax
         * @param {number} rymax
         * @param {number} x0
         * @param {number} y0
         * @param {number} xc0
         * @param {number} yc0
         * @param {number} xc1
         * @param {number} yc1
         * @param {number} x1
         * @param {number} y1
         * @param {number} level
         * @return {number}
         */
        static rectCrossingsForCubic(crossings: number, rxmin: number, rymin: number, rxmax: number, rymax: number, x0: number, y0: number, xc0: number, yc0: number, xc1: number, yc1: number, x1: number, y1: number, level: number): number;
        constructor(direction: number);
        getDirection(): number;
        getWithDirection(direction: number): Curve;
        static round(v: number): number;
        static orderof(x1: number, x2: number): number;
        static signeddiffbits(y1: number, y2: number): number;
        static diffbits(y1: number, y2: number): number;
        static prev(v: number): number;
        static next(v: number): number;
        toString(): string;
        controlPointString(): string;
        abstract getOrder(): number;
        abstract getXTop(): number;
        abstract getYTop(): number;
        abstract getXBot(): number;
        abstract getYBot(): number;
        abstract getXMin(): number;
        abstract getXMax(): number;
        abstract getX0(): number;
        abstract getY0(): number;
        abstract getX1(): number;
        abstract getY1(): number;
        abstract XforY(y: number): number;
        abstract TforY(y: number): number;
        abstract XforT(t: number): number;
        abstract YforT(t: number): number;
        abstract dXforT(t: number, deriv: number): number;
        abstract dYforT(t: number, deriv: number): number;
        abstract nextVertical(t0: number, t1: number): number;
        crossingsFor(x: number, y: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        abstract enlarge(r: java.awt.geom.Rectangle2D): any;
        getSubCurve$double$double(ystart: number, yend: number): Curve;
        abstract getReversedCurve(): Curve;
        getSubCurve$double$double$int(ystart: number, yend: number, dir: number): Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): Curve;
        compareTo(that: Curve, yrange: number[]): number;
        static TMIN: number;
        findIntersect(that: Curve, yrange: number[], ymin: number, slevel: number, tlevel: number, s0: number, xs0: number, ys0: number, s1: number, xs1: number, ys1: number, t0: number, xt0: number, yt0: number, t1: number, xt1: number, yt1: number): boolean;
        refineTforY(t0: number, yt0: number, y0: number): number;
        fairlyClose(v1: number, v2: number): boolean;
        abstract getSegment(coords: number[]): number;
    }
}
declare namespace sun.awt.geom {
    interface PathConsumer2D {
        /**
         * @see java.awt.geom.Path2D.Float.moveTo
         * @param {number} x
         * @param {number} y
         */
        moveTo(x: number, y: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.lineTo
         * @param {number} x
         * @param {number} y
         */
        lineTo(x: number, y: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.quadTo
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         */
        quadTo(x1: number, y1: number, x2: number, y2: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.curveTo
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x3
         * @param {number} y3
         */
        curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): any;
        /**
         * @see java.awt.geom.Path2D.Float.closePath
         */
        closePath(): any;
        /**
         * Called after the last segment of the last subpath when the iteration of
         * the path segments is completely done. This method serves to trigger the
         * end of path processing in the consumer that would normally be triggered
         * when a {@link *} returns
         * {@code true} from its {@code done} method.
         */
        pathDone(): any;
        /**
         * If a given PathConsumer performs all or most of its work natively then it
         * can return a (non-zero) pointer to a native function vector that defines
         * C functions for all of the above methods. The specific pointer it returns
         * is a pointer to a PathConsumerVec structure as defined in the include
         * file src/share/native/sun/java2d/pipe/PathConsumer2D.h
         *
         * @return {number} a native pointer to a PathConsumerVec structure.
         */
        getNativeConsumer(): number;
    }
}
declare namespace sun.awt.geom {
    abstract class AreaOp {
        verbose: boolean;
        constructor();
        static CTAG_LEFT: number;
        static CTAG_RIGHT: number;
        static ETAG_IGNORE: number;
        static ETAG_ENTER: number;
        static ETAG_EXIT: number;
        static RSTAG_INSIDE: number;
        static RSTAG_OUTSIDE: number;
        abstract newRow(): any;
        abstract classify(e: sun.awt.geom.Edge): number;
        abstract getState(): number;
        calculate(left: java.util.Vector<any>, right: java.util.Vector<any>): java.util.Vector<any>;
        static addEdges(edges: java.util.Vector<any>, curves: java.util.Vector<any>, curvetag: number): void;
        static YXTopComparator: AreaOp.EdgeComparator;
        static YXTopComparator_$LI$(): AreaOp.EdgeComparator;
        pruneEdges(edges: java.util.Vector<any>): java.util.Vector<any>;
        static finalizeSubCurves(subcurves: java.util.Vector<any>, chains: java.util.Vector<any>): void;
        static EmptyLinkList: sun.awt.geom.CurveLink[];
        static EmptyLinkList_$LI$(): sun.awt.geom.CurveLink[];
        static EmptyChainList: sun.awt.geom.ChainEnd[];
        static EmptyChainList_$LI$(): sun.awt.geom.ChainEnd[];
        static resolveLinks(subcurves: java.util.Vector<any>, chains: java.util.Vector<any>, links: java.util.Vector<any>): void;
        static obstructs(v1: number, v2: number, phase: number): boolean;
    }
    namespace AreaOp {
        abstract class CAGOp extends sun.awt.geom.AreaOp {
            inLeft: boolean;
            inRight: boolean;
            inResult: boolean;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            abstract newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
        class NZWindOp extends sun.awt.geom.AreaOp {
            count: number;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            constructor();
        }
        class EOWindOp extends sun.awt.geom.AreaOp {
            inside: boolean;
            newRow(): void;
            classify(e: sun.awt.geom.Edge): number;
            getState(): number;
            constructor();
        }
        class EdgeComparator {
            /**
             *
             * @param {sun.awt.geom.Edge} o1
             * @param {sun.awt.geom.Edge} o2
             * @return {number}
             */
            compare(o1: sun.awt.geom.Edge, o2: sun.awt.geom.Edge): number;
            constructor();
        }
        class AddOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
        class SubOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
        class IntOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
        class XorOp extends AreaOp.CAGOp {
            newClassification(inLeft: boolean, inRight: boolean): boolean;
            constructor();
        }
    }
}
declare namespace sun.awt.geom {
    class Edge {
        static INIT_PARTS: number;
        static GROW_PARTS: number;
        curve: sun.awt.geom.Curve;
        ctag: number;
        etag: number;
        activey: number;
        equivalence: number;
        constructor(c?: any, ctag?: any, etag?: any);
        getCurve(): sun.awt.geom.Curve;
        getCurveTag(): number;
        getEdgeTag(): number;
        setEdgeTag(etag: number): void;
        getEquivalence(): number;
        setEquivalence(eq: number): void;
        lastEdge: Edge;
        lastResult: number;
        lastLimit: number;
        compareTo(other: Edge, yrange: number[]): number;
        record(yend: number, etag: number): void;
        isActiveFor(y: number, etag: number): boolean;
        toString(): string;
    }
}
declare namespace sun.awt.geom {
    class CurveLink {
        curve: sun.awt.geom.Curve;
        ytop: number;
        ybot: number;
        etag: number;
        next: CurveLink;
        constructor(curve: sun.awt.geom.Curve, ystart: number, yend: number, etag: number);
        absorb$sun_awt_geom_CurveLink(link: CurveLink): boolean;
        absorb$sun_awt_geom_Curve$double$double$int(curve: sun.awt.geom.Curve, ystart: number, yend: number, etag: number): boolean;
        absorb(curve?: any, ystart?: any, yend?: any, etag?: any): boolean;
        isEmpty(): boolean;
        getCurve(): sun.awt.geom.Curve;
        getSubCurve(): sun.awt.geom.Curve;
        getMoveto(): sun.awt.geom.Curve;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getX(): number;
        getEdgeTag(): number;
        setNext(link: CurveLink): void;
        getNext(): CurveLink;
    }
}
declare namespace java.beans {
    class PropertyChangeEvent extends java.util.EventObject {
        static __java_beans_PropertyChangeEvent_serialVersionUID: number;
        constructor(source: any, propertyName: string, oldValue: any, newValue: any);
        getPropertyName(): string;
        getNewValue(): any;
        getOldValue(): any;
        setPropagationId(propagationId: any): void;
        getPropagationId(): any;
        propertyName: string;
        newValue: any;
        oldValue: any;
        propagationId: any;
        toString(): string;
        appendTo(sb: java.lang.StringBuilder): void;
    }
}
declare namespace java.beans {
    abstract class ChangeListenerMap<L extends java.util.EventListener> {
        map: java.util.Map<string, L[]>;
        abstract newArray(length: number): L[];
        abstract newProxy(name: string, listener: L): L;
        add(name: string, listener: L): void;
        remove(name: string, listener: L): void;
        /**
         * Returns the list of listeners for the specified property.
         *
         * @param {string} name
         * the name of the property
         * @return {L[]} the corresponding list of listeners
         */
        get(name: string): L[];
        /**
         * Sets new list of listeners for the specified property.
         *
         * @param {string} name
         * the name of the property
         * @param {L[]} listeners
         * new list of listeners
         */
        set(name: string, listeners: L[]): void;
        getListeners$(): L[];
        getListeners$java_lang_String(name: string): L[];
        /**
         * Returns listeners that have been associated with the named property.
         *
         * @param {string} name
         * the name of the property
         * @return {L[]} an array of listeners for the named property
         */
        getListeners(name?: any): L[];
        /**
         * Indicates whether the map contains at least one listener to be notified.
         *
         * @param {string} name
         * the name of the property
         * @return {boolean} {@code true} if at least one listener exists or {@code false}
         * otherwise
         */
        hasListeners(name: string): boolean;
        /**
         * Returns a set of entries from the map. Each entry is a pair consisted of
         * the property name and the corresponding list of listeners.
         *
         * @return {*} a set of entries from the map
         */
        getEntries(): java.util.Set<java.util.Map.Entry<string, L[]>>;
        /**
         * Extracts a real listener from the proxy listener. It is necessary because
         * default proxy class is not serializable.
         *
         * @return {*} a real listener
         * @param {*} listener
         */
        abstract extract(listener: L): L;
        constructor();
    }
}
declare namespace java.beans {
    interface PropertyChangeListener extends java.util.EventListener {
        propertyChange(evt: java.beans.PropertyChangeEvent): any;
    }
}
declare namespace java.beans {
    /**
     * Constructor which binds the {@code PropertyChangeListener}
     * to a specific property.
     *
     * @param {string} propertyName  the name of the property to listen on
     * @param {*} listener      the listener object
     * @class
     * @extends java.util.EventListenerProxy
     */
    class PropertyChangeListenerProxy extends java.util.EventListenerProxy<java.beans.PropertyChangeListener> implements java.beans.PropertyChangeListener {
        propertyName: string;
        constructor(propertyName: string, listener: java.beans.PropertyChangeListener);
        /**
         * Forwards the property change event to the listener delegate.
         *
         * @param {java.beans.PropertyChangeEvent} event  the property change event
         */
        propertyChange(event: java.beans.PropertyChangeEvent): void;
        /**
         * Returns the name of the named property associated with the listener.
         *
         * @return {string} the name of the named property associated with the listener
         */
        getPropertyName(): string;
    }
}
declare namespace java.awt {
    class Polygon implements java.awt.Shape, java.io.Serializable {
        npoints: number;
        xpoints: number[];
        ypoints: number[];
        bounds: java.awt.Rectangle;
        static serialVersionUID: number;
        static MIN_LENGTH: number;
        constructor(xpoints?: any, ypoints?: any, npoints?: any);
        reset(): void;
        invalidate(): void;
        translate(deltaX: number, deltaY: number): void;
        calculateBounds(xpoints: number[], ypoints: number[], npoints: number): void;
        updateBounds(x: number, y: number): void;
        addPoint(x: number, y: number): void;
        getBounds(): java.awt.Rectangle;
        getBoundingBox(): java.awt.Rectangle;
        contains$java_awt_Point(p: java.awt.Point): boolean;
        contains$int$int(x: number, y: number): boolean;
        inside(x: number, y: number): boolean;
        getBounds2D(): java.awt.geom.Rectangle2D;
        contains$double$double(x: number, y: number): boolean;
        getCrossings(xlo: number, ylo: number, xhi: number, yhi: number): sun.awt.geom.Crossings;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
    }
    namespace Polygon {
        class PolygonPathIterator implements java.awt.geom.PathIterator {
            __parent: any;
            poly: java.awt.Polygon;
            transform: java.awt.geom.AffineTransform;
            index: number;
            constructor(__parent: any, pg: java.awt.Polygon, at: java.awt.geom.AffineTransform);
            getWindingRule(): number;
            isDone(): boolean;
            next(): void;
            currentSegment$float_A(coords: number[]): number;
            currentSegment(coords?: any): number;
            currentSegment$double_A(coords: number[]): number;
        }
    }
}
declare namespace java.awt {
    interface ItemSelectable {
        getSelectedObjects(): any[];
        addItemListener(l: java.awt.event.ItemListener): any;
        removeItemListener(l: java.awt.event.ItemListener): any;
    }
}
declare namespace java.awt {
    /**
     * Defines an interface for classes that know how to layout Containers
     * based on a layout constraints object.
     *
     * This interface extends the LayoutManager interface to deal with layouts
     * explicitly in terms of constraint objects that specify how and where
     * components should be added to the layout.
     * <p>
     * This minimal extension to LayoutManager is intended for tool
     * providers who wish to the creation of constraint-based layouts.
     * It does not yet provide full, general support for custom
     * constraint-based layout managers.
     *
     * @see LayoutManager
     * @see Container
     *
     * @author      Jonni Kanerva
     * @class
     */
    interface LayoutManager2 extends java.awt.LayoutManager {
        addLayoutComponent(name?: any, comp?: any): any;
        /**
         * Returns the alignment along the x axis.  This specifies how
         * the component would like to be aligned relative to other
         * components.  The value should be a number between 0 and 1
         * where 0 represents alignment along the origin, 1 is aligned
         * the furthest away from the origin, 0.5 is centered, etc.
         * @param {java.awt.Container} target
         * @return {number}
         */
        getLayoutAlignmentX(target: java.awt.Container): number;
        /**
         * Returns the alignment along the y axis.  This specifies how
         * the component would like to be aligned relative to other
         * components.  The value should be a number between 0 and 1
         * where 0 represents alignment along the origin, 1 is aligned
         * the furthest away from the origin, 0.5 is centered, etc.
         * @param {java.awt.Container} target
         * @return {number}
         */
        getLayoutAlignmentY(target: java.awt.Container): number;
        /**
         * Invalidates the layout, indicating that if the layout manager
         * has cached information it should be discarded.
         * @param {java.awt.Container} target
         */
        invalidateLayout(target: java.awt.Container): any;
    }
}
declare namespace java.awt {
    class Image {
        constructor(src: string);
        setScale(scale: number): void;
        getWidth(observer: java.awt.image.ImageObserver): number;
        getHeight(observer: java.awt.image.ImageObserver): number;
        source: HTMLImageElement;
        getScaledInstance(width: number, height: number, scaleType: number): Image;
        /**
         * Use the default image-scaling algorithm.
         *
         * @since JDK1.1
         */
        static SCALE_DEFAULT: number;
        /**
         * Choose an image-scaling algorithm that gives higher priority to scaling
         * speed than smoothness of the scaled image.
         *
         * @since JDK1.1
         */
        static SCALE_FAST: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static SCALE_AREA_AVERAGING: number;
        flush(): void;
    }
}
declare namespace java.awt {
    interface Adjustable {
        getOrientation(): number;
        setMinimum(min: number): any;
        getMinimum(): number;
        setMaximum(max: number): any;
        getMaximum(): number;
        setUnitIncrement(u: number): any;
        getUnitIncrement(): number;
        setBlockIncrement(b: number): any;
        getBlockIncrement(): number;
        setVisibleAmount(v: number): any;
        getVisibleAmount(): number;
        setValue(v: number): any;
        getValue(): number;
        addAdjustmentListener(l: java.awt.event.AdjustmentListener): any;
        removeAdjustmentListener(l: java.awt.event.AdjustmentListener): any;
    }
    namespace Adjustable {
        const HORIZONTAL: number;
        const VERTICAL: number;
        const NO_ORIENTATION: number;
    }
}
declare namespace java.awt {
    class RenderingHints {
        static KEY_ANTIALIASING: any;
        static KEY_ANTIALIASING_$LI$(): any;
        static VALUE_ANTIALIAS_ON: any;
        static VALUE_ANTIALIAS_ON_$LI$(): any;
        static VALUE_ANTIALIAS_OFF: any;
        static VALUE_ANTIALIAS_OFF_$LI$(): any;
        static VALUE_ANTIALIAS_DEFAULT: any;
        static VALUE_ANTIALIAS_DEFAULT_$LI$(): any;
        static KEY_TEXT_ANTIALIASING: any;
        static KEY_TEXT_ANTIALIASING_$LI$(): any;
        static VALUE_TEXT_ANTIALIAS_ON: any;
        static VALUE_TEXT_ANTIALIAS_ON_$LI$(): any;
        static VALUE_TEXT_ANTIALIAS_OFF: any;
        static VALUE_TEXT_ANTIALIAS_OFF_$LI$(): any;
        static VALUE_TEXT_ANTIALIAS_DEFAULT: any;
        static VALUE_TEXT_ANTIALIAS_DEFAULT_$LI$(): any;
    }
}
declare namespace java.awt {
    class CheckboxGroup implements java.io.Serializable {
        selectedCheckbox: java.awt.Checkbox;
        static serialVersionUID: number;
        constructor();
        getSelectedCheckbox(): java.awt.Checkbox;
        getCurrent(): java.awt.Checkbox;
        setSelectedCheckbox(box: java.awt.Checkbox): void;
        setCurrent(box: java.awt.Checkbox): void;
        toString(): string;
    }
}
declare namespace java.awt {
    interface HTMLComponent {
        getHTMLElement(): HTMLElement;
        bindHTML(htmlElement: HTMLElement): any;
        createHTML(): any;
        initHTML(): any;
    }
}
declare namespace java.awt {
    class Insets implements java.lang.Cloneable, java.io.Serializable {
        top: number;
        left: number;
        bottom: number;
        right: number;
        static serialVersionUID: number;
        constructor(top: number, left: number, bottom: number, right: number);
        set(top: number, left: number, bottom: number, right: number): void;
        equals(obj: any): boolean;
        hashCode(): number;
        toString(): string;
        clone(): any;
    }
}
declare namespace java.awt {
    class MenuComponent {
        name: string;
        getName(): string;
        setName(name: string): void;
        constructor();
    }
}
declare namespace java.awt {
    interface Transparency {
        getTransparency(): number;
    }
    namespace Transparency {
        const OPAQUE: number;
        const BITMASK: number;
        const TRANSLUCENT: number;
    }
}
declare namespace java.awt {
    class FlowLayout implements java.awt.LayoutManager {
        created: boolean;
        parent: java.awt.Container;
        static LEFT: number;
        static CENTER: number;
        static RIGHT: number;
        static LEADING: number;
        static TRAILING: number;
        align: number;
        hgap: number;
        vgap: number;
        alignOnBaseline: boolean;
        constructor(align?: any, hgap?: any, vgap?: any);
        getAlignment(): number;
        setAlignment(align: number): void;
        /**
         *
         * @param {string} name
         * @param {java.awt.Component} component
         */
        addLayoutComponent(name: string, component: java.awt.Component): void;
        /**
         *
         * @param {java.awt.Component} component
         */
        removeLayoutComponent(component: java.awt.Component): void;
        /**
         *
         * @param {java.awt.Container} parent
         */
        layoutContainer(parent: java.awt.Container): void;
        getParent(): java.awt.Container;
        setParent(parent: java.awt.Container): void;
        getHgap(): number;
        setHgap(hgap: number): void;
        getVgap(): number;
        setVgap(vgap: number): void;
    }
}
declare namespace java.awt {
    interface LayoutManager {
        addLayoutComponent(name: string, comp: java.awt.Component): any;
        removeLayoutComponent(comp: java.awt.Component): any;
        layoutContainer(parent: java.awt.Container): any;
    }
}
declare namespace java.awt {
    class Font implements java.io.Serializable {
        toHTML(): string;
        /**
         * This is now only used during serialization. Typically it is null.
         *
         * @serial
         * @see #getAttributes()
         */
        fRequestedAttributes: java.util.Hashtable<any, any>;
        /**
         * A String constant for the canonical family name of the logical font
         * "Dialog". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static DIALOG: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "DialogInput". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static DIALOG_INPUT: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "SansSerif". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static SANS_SERIF: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "Serif". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static SERIF: string;
        /**
         * A String constant for the canonical family name of the logical font
         * "Monospaced". It is useful in Font construction to provide compile-time
         * verification of the name.
         *
         * @since 1.6
         */
        static MONOSPACED: string;
        /**
         * The plain style constant.
         */
        static PLAIN: number;
        /**
         * The bold style constant. This can be combined with the other style
         * constants (except PLAIN) for mixed styles.
         */
        static BOLD: number;
        /**
         * The italicized style constant. This can be combined with the other style
         * constants (except PLAIN) for mixed styles.
         */
        static ITALIC: number;
        /**
         * The baseline used in most Roman scripts when laying out text.
         */
        static ROMAN_BASELINE: number;
        /**
         * The baseline used in ideographic scripts like Chinese, Japanese, and
         * Korean when laying out text.
         */
        static CENTER_BASELINE: number;
        /**
         * The baseline used in Devanigiri and similar scripts when laying out text.
         */
        static HANGING_BASELINE: number;
        /**
         * Identify a font resource of type TRUETYPE. Used to specify a TrueType
         * font resource to the {@link #createFont} method. The TrueType format was
         * extended to become the OpenType format, which adds support for fonts with
         * Postscript outlines, this tag therefore references these fonts, as well
         * as those with TrueType outlines.
         *
         * @since 1.3
         */
        static TRUETYPE_FONT: number;
        /**
         * Identify a font resource of type TYPE1. Used to specify a Type1 font
         * resource to the {@link #createFont} method.
         *
         * @since 1.5
         */
        static TYPE1_FONT: number;
        /**
         * The logical name of this <code>Font</code>, as passed to the constructor.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getName
         */
        name: string;
        /**
         * The style of this <code>Font</code>, as passed to the constructor. This
         * style can be PLAIN, BOLD, ITALIC, or BOLD+ITALIC.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getStyle()
         */
        style: number;
        /**
         * The point size of this <code>Font</code>, rounded to integer.
         *
         * @since JDK1.0
         *
         * @serial
         * @see #getSize()
         */
        size: number;
        /**
         * The point size of this <code>Font</code> in <code>float</code>.
         *
         * @serial
         * @see #getSize()
         * @see #getSize2D()
         */
        pointSize: number;
        static serialVersionUID: number;
        constructor(name?: any, style?: any, sizePts?: any);
        getFamily(): string;
        getName(): string;
        getFontName(): string;
        getStyle(): number;
        getSize(): number;
        getSize2D(): number;
        isPlain(): boolean;
        isBold(): boolean;
        isItalic(): boolean;
        static getFont$java_lang_String(nm: string): Font;
        static decode(str: string): Font;
        static getFont$java_lang_String$java_awt_Font(nm: string, font: Font): Font;
        static getFont(nm?: any, font?: any): Font;
        hash: number;
        hashCode(): number;
        equals(obj: any): boolean;
        getStyleInTextRepr(): string;
        /**
         * Converts this <code>Font</code> object to a <code>String</code>
         * representation.
         *
         * @return {string} a <code>String</code> representation of this <code>Font</code>
         * object.
         * @since JDK1.0
         */
        toString(): string;
        /**
         * A flag to layoutGlyphVector indicating that text is left-to-right as
         * determined by Bidi analysis.
         */
        static LAYOUT_LEFT_TO_RIGHT: number;
        /**
         * A flag to layoutGlyphVector indicating that text is right-to-left as
         * determined by Bidi analysis.
         */
        static LAYOUT_RIGHT_TO_LEFT: number;
        /**
         * A flag to layoutGlyphVector indicating that text in the char array before
         * the indicated start should not be examined.
         */
        static LAYOUT_NO_START_CONTEXT: number;
        /**
         * A flag to layoutGlyphVector indicating that text in the char array after
         * the indicated limit should not be examined.
         */
        static LAYOUT_NO_LIMIT_CONTEXT: number;
    }
}
declare namespace java.awt {
    abstract class Component implements java.awt.HTMLComponent {
        static TOP_ALIGNMENT: number;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        htmlElement: HTMLElement;
        enabled: boolean;
        valid: boolean;
        background: java.awt.Color;
        foreground: java.awt.Color;
        font: java.awt.Font;
        visible: boolean;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        preferredSize: java.awt.Dimension;
        minimumSize: java.awt.Dimension;
        parent: java.awt.Container;
        /**
         *
         * @param {HTMLElement} htmlElement
         */
        bindHTML(htmlElement: HTMLElement): void;
        /**
         *
         * @return {HTMLElement}
         */
        getHTMLElement(): HTMLElement;
        /**
         *
         */
        initHTML(): void;
        getLocationOnScreen(): java.awt.Point;
        getBounds(): java.awt.Rectangle;
        setBounds$java_awt_Rectangle(rectangle: java.awt.Rectangle): void;
        setBounds$int$int$int$int(x: number, y: number, width: number, height: number): void;
        setBounds(x?: any, y?: any, width?: any, height?: any): any;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        setSize$int$int(width: number, height: number): void;
        setSize(width?: any, height?: any): any;
        setSize$java_awt_Dimension(d: java.awt.Dimension): void;
        changeSupport: java.beans.PropertyChangeSupport;
        static CURRENT_ID: number;
        getPropertyChangeListeners$java_lang_String(propertyName: string): java.beans.PropertyChangeListener[];
        getPropertyChangeListeners(propertyName?: any): java.beans.PropertyChangeListener[];
        addPropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        removePropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        getPropertyChangeListeners$(): java.beans.PropertyChangeListener[];
        addPropertyChangeListener$java_lang_String$java_beans_PropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        addPropertyChangeListener(propertyName?: any, listener?: any): any;
        removePropertyChangeListener$java_lang_String$java_beans_PropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        removePropertyChangeListener(propertyName?: any, listener?: any): any;
        firePropertyChange(propertyName: string, oldValue: any, newValue: any): void;
        isEnabled(): boolean;
        setEnabled(enabled: boolean): void;
        getBackground(): java.awt.Color;
        setBackground(background: java.awt.Color): void;
        getForeground(): java.awt.Color;
        setForeground(foreground: java.awt.Color): void;
        getFont(): java.awt.Font;
        setFont(font: java.awt.Font): void;
        isVisible(): boolean;
        setVisible(visible: boolean): void;
        getName(): string;
        setName(name: string): void;
        paramString(): string;
        isValid(): boolean;
        setValid(valid: boolean): void;
        validate(): void;
        paint(g: java.awt.Graphics): void;
        update(g: java.awt.Graphics): void;
        paintAll(g: java.awt.Graphics): void;
        getGraphics(): java.awt.Graphics;
        doPaintInternal(): void;
        getPreferredSize(): java.awt.Dimension;
        setPreferredSize(preferredSize: java.awt.Dimension): void;
        getIgnoreRepaint(): boolean;
        setIgnoreRepaint(ignoreRepaint: boolean): void;
        getParent(): java.awt.Container;
        getSize(): java.awt.Dimension;
        revalidate(): void;
        invalidate(): void;
        repaint(): void;
        addFocusListener(l: java.awt.event.FocusListener): void;
        getMinimumSize(): java.awt.Dimension;
        setMinimumSize(minimumSize: java.awt.Dimension): void;
        setLocation$int$int(x: number, y: number): void;
        setLocation(x?: any, y?: any): any;
        setLocation$java_awt_Point(p: java.awt.Point): void;
        cursor: java.awt.Cursor;
        getCursor(): java.awt.Cursor;
        setCursor(cursor: java.awt.Cursor): void;
        mouseWheelListeners: java.awt.event.MouseWheelListener[];
        addMouseWheelListener(l: java.awt.event.MouseWheelListener): void;
        removeMouseWheelListener(l: java.awt.event.MouseWheelListener): void;
        getMouseWheelListeners(): java.awt.event.MouseWheelListener[];
        mouseListeners: java.awt.event.MouseListener[];
        addMouseListener(l: java.awt.event.MouseListener): void;
        removeMouseListener(l: java.awt.event.MouseListener): void;
        getMouseListeners(): java.awt.event.MouseListener[];
        requestFocus(): void;
        abstract createHTML(): any;
        constructor();
    }
}
declare namespace java.awt {
    abstract class AWTEvent extends java.util.EventObject {
        id: number;
        consumed: boolean;
        /**
         * The event mask for selecting component events.
         */
        static COMPONENT_EVENT_MASK: number;
        /**
         * The event mask for selecting container events.
         */
        static CONTAINER_EVENT_MASK: number;
        /**
         * The event mask for selecting focus events.
         */
        static FOCUS_EVENT_MASK: number;
        /**
         * The event mask for selecting key events.
         */
        static KEY_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse events.
         */
        static MOUSE_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse motion events.
         */
        static MOUSE_MOTION_EVENT_MASK: number;
        /**
         * The event mask for selecting window events.
         */
        static WINDOW_EVENT_MASK: number;
        /**
         * The event mask for selecting action events.
         */
        static ACTION_EVENT_MASK: number;
        /**
         * The event mask for selecting adjustment events.
         */
        static ADJUSTMENT_EVENT_MASK: number;
        /**
         * The event mask for selecting item events.
         */
        static ITEM_EVENT_MASK: number;
        /**
         * The event mask for selecting text events.
         */
        static TEXT_EVENT_MASK: number;
        /**
         * The event mask for selecting input method events.
         */
        static INPUT_METHOD_EVENT_MASK: number;
        /**
         * The pseudo event mask for enabling input methods. We're using one bit in
         * the eventMask so we don't need a separate field inputMethodsEnabled.
         */
        static INPUT_METHODS_ENABLED_MASK: number;
        /**
         * The event mask for selecting paint events.
         */
        static PAINT_EVENT_MASK: number;
        /**
         * The event mask for selecting invocation events.
         */
        static INVOCATION_EVENT_MASK: number;
        /**
         * The event mask for selecting hierarchy events.
         */
        static HIERARCHY_EVENT_MASK: number;
        /**
         * The event mask for selecting hierarchy bounds events.
         */
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        /**
         * The event mask for selecting mouse wheel events.
         *
         * @since 1.4
         */
        static MOUSE_WHEEL_EVENT_MASK: number;
        /**
         * The event mask for selecting window state events.
         *
         * @since 1.4
         */
        static WINDOW_STATE_EVENT_MASK: number;
        /**
         * The event mask for selecting window focus events.
         *
         * @since 1.4
         */
        static WINDOW_FOCUS_EVENT_MASK: number;
        /**
         * The maximum value for reserved AWT event IDs. Programs defining their own
         * event IDs should use IDs greater than this value.
         */
        static RESERVED_ID_MAX: number;
        constructor(source?: any, id?: any);
        setSource(newSource: any): void;
        /**
         * Returns a String representation of this object.
         * @return {string}
         */
        toString(): string;
        paramString(): string;
        consume(): void;
        isConsumed(): boolean;
        /**
         * Returns the event type.
         * @return {number}
         */
        getID(): number;
    }
}
declare namespace java.awt.image {
    /**
     * RenderedImage is a common interface for objects which contain
     * or can produce image data in the form of Rasters.  The image
     * data may be stored/produced as a single tile or a regular array
     * of tiles.
     * @class
     */
    interface RenderedImage {
        /**
         * Returns the width of the RenderedImage.
         * @return {number} the width of this <code>RenderedImage</code>.
         */
        getWidth(): number;
        /**
         * Returns the height of the RenderedImage.
         * @return {number} the height of this <code>RenderedImage</code>.
         */
        getHeight(): number;
    }
}
declare namespace java.awt.image {
    interface ImageObserver {
        imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, width: number, height: number): boolean;
    }
    namespace ImageObserver {
        const WIDTH: number;
        const HEIGHT: number;
        const PROPERTIES: number;
        const SOMEBITS: number;
        const FRAMEBITS: number;
        const ALLBITS: number;
        const ERROR: number;
        const ABORT: number;
    }
}
declare namespace java.awt {
    interface Stroke {
    }
}
declare namespace java.awt {
    class Event implements java.io.Serializable {
        data: number;
        static SHIFT_MASK: number;
        static CTRL_MASK: number;
        static META_MASK: number;
        static ALT_MASK: number;
        static HOME: number;
        static END: number;
        static PGUP: number;
        static PGDN: number;
        static UP: number;
        static DOWN: number;
        static LEFT: number;
        static RIGHT: number;
        static F1: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static PRINT_SCREEN: number;
        static SCROLL_LOCK: number;
        static CAPS_LOCK: number;
        static NUM_LOCK: number;
        static PAUSE: number;
        static INSERT: number;
        static ENTER: number;
        static BACK_SPACE: number;
        static TAB: number;
        static ESCAPE: number;
        static DELETE: number;
        static WINDOW_EVENT: number;
        static WINDOW_DESTROY: number;
        static WINDOW_DESTROY_$LI$(): number;
        static WINDOW_EXPOSE: number;
        static WINDOW_EXPOSE_$LI$(): number;
        static WINDOW_ICONIFY: number;
        static WINDOW_ICONIFY_$LI$(): number;
        static WINDOW_DEICONIFY: number;
        static WINDOW_DEICONIFY_$LI$(): number;
        static WINDOW_MOVED: number;
        static WINDOW_MOVED_$LI$(): number;
        static KEY_EVENT: number;
        static KEY_PRESS: number;
        static KEY_PRESS_$LI$(): number;
        static KEY_RELEASE: number;
        static KEY_RELEASE_$LI$(): number;
        static KEY_ACTION: number;
        static KEY_ACTION_$LI$(): number;
        static KEY_ACTION_RELEASE: number;
        static KEY_ACTION_RELEASE_$LI$(): number;
        static MOUSE_EVENT: number;
        static MOUSE_DOWN: number;
        static MOUSE_DOWN_$LI$(): number;
        static MOUSE_UP: number;
        static MOUSE_UP_$LI$(): number;
        static MOUSE_MOVE: number;
        static MOUSE_MOVE_$LI$(): number;
        static MOUSE_ENTER: number;
        static MOUSE_ENTER_$LI$(): number;
        static MOUSE_EXIT: number;
        static MOUSE_EXIT_$LI$(): number;
        static MOUSE_DRAG: number;
        static MOUSE_DRAG_$LI$(): number;
        static SCROLL_EVENT: number;
        static SCROLL_LINE_UP: number;
        static SCROLL_LINE_UP_$LI$(): number;
        static SCROLL_LINE_DOWN: number;
        static SCROLL_LINE_DOWN_$LI$(): number;
        static SCROLL_PAGE_UP: number;
        static SCROLL_PAGE_UP_$LI$(): number;
        static SCROLL_PAGE_DOWN: number;
        static SCROLL_PAGE_DOWN_$LI$(): number;
        static SCROLL_ABSOLUTE: number;
        static SCROLL_ABSOLUTE_$LI$(): number;
        static SCROLL_BEGIN: number;
        static SCROLL_BEGIN_$LI$(): number;
        static SCROLL_END: number;
        static SCROLL_END_$LI$(): number;
        static LIST_EVENT: number;
        static LIST_SELECT: number;
        static LIST_SELECT_$LI$(): number;
        static LIST_DESELECT: number;
        static LIST_DESELECT_$LI$(): number;
        static MISC_EVENT: number;
        static ACTION_EVENT: number;
        static ACTION_EVENT_$LI$(): number;
        static LOAD_FILE: number;
        static LOAD_FILE_$LI$(): number;
        static SAVE_FILE: number;
        static SAVE_FILE_$LI$(): number;
        static GOT_FOCUS: number;
        static GOT_FOCUS_$LI$(): number;
        static LOST_FOCUS: number;
        static LOST_FOCUS_$LI$(): number;
        target: any;
        when: number;
        id: number;
        x: number;
        y: number;
        key: number;
        modifiers: number;
        clickCount: number;
        arg: any;
        evt: Event;
        consumed: boolean;
        constructor(target?: any, when?: any, id?: any, x?: any, y?: any, key?: any, modifiers?: any, arg?: any);
        translate(dx: number, dy: number): void;
        shiftDown(): boolean;
        controlDown(): boolean;
        metaDown(): boolean;
        consume(): void;
        isConsumed(): boolean;
        paramString(): string;
        toString(): string;
    }
}
declare namespace java.awt {
    /**
     * Constructs an IllegalComponentStateException with the specified detail
     * message.  A detail message is a String that describes this particular
     * exception.
     * @param {string} s the String that contains a detailed message
     * @class
     * @extends java.lang.IllegalStateException
     * @author      Jonni Kanerva
     */
    class IllegalComponentStateException extends java.lang.IllegalStateException {
        static serialVersionUID: number;
        constructor(s?: any);
    }
}
declare namespace java.awt {
    class BasicStroke implements java.awt.Stroke {
        static JOIN_MITER: number;
        static JOIN_ROUND: number;
        static JOIN_BEVEL: number;
        static CAP_BUTT: number;
        static CAP_ROUND: number;
        static CAP_SQUARE: number;
        width: number;
        join: number;
        cap: number;
        miterlimit: number;
        dash: number[];
        dash_phase: number;
        constructor(width?: any, cap?: any, join?: any, miterlimit?: any, dash?: any, dash_phase?: any);
        createStrokedShape(s: java.awt.Shape): java.awt.Shape;
        getLineWidth(): number;
        getEndCap(): number;
        getLineJoin(): number;
        getMiterLimit(): number;
        getDashArray(): number[];
        getDashPhase(): number;
        hashCode(): number;
        equals(obj: any): boolean;
    }
}
declare namespace java.awt {
    abstract class Graphics {
        constructor();
        create$(): Graphics;
        create$int$int$int$int(x: number, y: number, width: number, height: number): Graphics;
        create(x?: any, y?: any, width?: any, height?: any): Graphics;
        abstract translate(x: number, y: number): any;
        abstract getColor(): java.awt.Color;
        abstract setColor(c: java.awt.Color): any;
        abstract setPaintMode(): any;
        abstract getFont(): java.awt.Font;
        abstract setFont(font: java.awt.Font): any;
        getClipBounds$(): java.awt.Rectangle;
        abstract clipRect(x: number, y: number, width: number, height: number): any;
        setClip$int$int$int$int(x: number, y: number, width: number, height: number): void;
        setClip(x?: any, y?: any, width?: any, height?: any): any;
        abstract getClip(): java.awt.Shape;
        setClip$java_awt_Shape(clip: java.awt.Shape): void;
        abstract drawLine(x1: number, y1: number, x2: number, y2: number): any;
        abstract fillRect(x: number, y: number, width: number, height: number): any;
        drawRect(x: number, y: number, width: number, height: number): void;
        abstract clearRect(x: number, y: number, width: number, height: number): any;
        abstract drawRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): any;
        abstract fillRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): any;
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        abstract drawOval(x: number, y: number, width: number, height: number): any;
        abstract fillOval(x: number, y: number, width: number, height: number): any;
        abstract drawArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): any;
        abstract fillArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): any;
        abstract drawPolyline(xPoints: number[], yPoints: number[], nPoints: number): any;
        drawPolygon$int_A$int_A$int(xPoints: number[], yPoints: number[], nPoints: number): void;
        drawPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        drawPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        fillPolygon$int_A$int_A$int(xPoints: number[], yPoints: number[], nPoints: number): void;
        fillPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        fillPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        abstract drawString(str: string, x: number, y: number): any;
        drawImage$java_awt_Image$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage(img?: any, dx1?: any, dy1?: any, dx2?: any, dy2?: any, sx1?: any, sy1?: any, sx2?: any, sy2?: any, bgcolor?: any, observer?: any): boolean;
        abstract dispose(): any;
        finalize(): void;
        toString(): string;
        hitClip(x: number, y: number, width: number, height: number): boolean;
        getClipBounds$java_awt_Rectangle(r: java.awt.Rectangle): java.awt.Rectangle;
        getClipBounds(r?: any): java.awt.Rectangle;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an rounded rectangle
     * through the PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class RoundRectIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        aw: number;
        ah: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(rr: java.awt.geom.RoundRectangle2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        static angle: number;
        static angle_$LI$(): number;
        static a: number;
        static a_$LI$(): number;
        static b: number;
        static b_$LI$(): number;
        static c: number;
        static c_$LI$(): number;
        static cv: number;
        static cv_$LI$(): number;
        static acv: number;
        static acv_$LI$(): number;
        static ctrlpts: number[][];
        static ctrlpts_$LI$(): number[][];
        static types: number[];
        static types_$LI$(): number[];
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Point2D</code> class defines a point representing a location in
     * {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * coordinate. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class Point2D implements java.lang.Cloneable {
        constructor();
        /**
         * Returns the X coordinate of this <code>Point2D</code> in
         * <code>double</code> precision.
         *
         * @return {number} the X coordinate of this <code>Point2D</code>.
         * @since 1.2
         */
        abstract getX(): number;
        /**
         * Returns the Y coordinate of this <code>Point2D</code> in
         * <code>double</code> precision.
         *
         * @return {number} the Y coordinate of this <code>Point2D</code>.
         * @since 1.2
         */
        abstract getY(): number;
        setLocation$double$double(x: number, y: number): void;
        /**
         * Sets the location of this <code>Point2D</code> to the specified
         * <code>double</code> coordinates.
         *
         * @param {number} x
         * the new X coordinate of this {@code Point2D}
         * @param {number} y
         * the new Y coordinate of this {@code Point2D}
         * @since 1.2
         */
        setLocation(x?: any, y?: any): any;
        setLocation$java_awt_geom_Point2D(p: Point2D): void;
        /**
         * Returns the square of the distance between two points.
         *
         * @param {number} x1
         * the X coordinate of the first specified point
         * @param {number} y1
         * the Y coordinate of the first specified point
         * @param {number} x2
         * the X coordinate of the second specified point
         * @param {number} y2
         * the Y coordinate of the second specified point
         * @return {number} the square of the distance between the two sets of specified
         * coordinates.
         * @since 1.2
         */
        static distanceSq(x1: number, y1: number, x2: number, y2: number): number;
        /**
         * Returns the distance between two points.
         *
         * @param {number} x1
         * the X coordinate of the first specified point
         * @param {number} y1
         * the Y coordinate of the first specified point
         * @param {number} x2
         * the X coordinate of the second specified point
         * @param {number} y2
         * the Y coordinate of the second specified point
         * @return {number} the distance between the two sets of specified coordinates.
         * @since 1.2
         */
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        distanceSq$double$double(px: number, py: number): number;
        /**
         * Returns the square of the distance from this <code>Point2D</code> to a
         * specified point.
         *
         * @param {number} px
         * the X coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @param {number} py
         * the Y coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @return {number} the square of the distance between this <code>Point2D</code> and
         * the specified point.
         * @since 1.2
         */
        distanceSq(px?: any, py?: any): number;
        distanceSq$java_awt_geom_Point2D(pt: Point2D): number;
        distance$double$double(px: number, py: number): number;
        /**
         * Returns the distance from this <code>Point2D</code> to a specified point.
         *
         * @param {number} px
         * the X coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @param {number} py
         * the Y coordinate of the specified point to be measured against
         * this <code>Point2D</code>
         * @return {number} the distance between this <code>Point2D</code> and a specified
         * point.
         * @since 1.2
         */
        distance(px?: any, py?: any): number;
        distance$java_awt_geom_Point2D(pt: Point2D): number;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        /**
         * Returns the hashcode for this <code>Point2D</code>.
         *
         * @return {number} a hash code for this <code>Point2D</code>.
         */
        hashCode(): number;
        /**
         * Determines whether or not two points are equal. Two instances of
         * <code>Point2D</code> are equal if the values of their <code>x</code> and
         * <code>y</code> member fields, representing their position in the
         * coordinate space, are the same.
         *
         * @param {*} obj
         * an object to be compared with this <code>Point2D</code>
         * @return {boolean} <code>true</code> if the object to be compared is an instance of
         * <code>Point2D</code> and has the same values; <code>false</code>
         * otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
    }
    namespace Point2D {
        /**
         * Constructs and initializes a <code>Point2D</code> with the specified
         * coordinates.
         *
         * @param {number} x
         * the X coordinate of the newly constructed
         * <code>Point2D</code>
         * @param {number} y
         * the Y coordinate of the newly constructed
         * <code>Point2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.Point2D
         */
        class Float extends java.awt.geom.Point2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            constructor(x?: any, y?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            setLocation$double$double(x: number, y: number): void;
            setLocation$float$float(x: number, y: number): void;
            /**
             * Sets the location of this <code>Point2D</code> to the specified
             * <code>float</code> coordinates.
             *
             * @param {number} x
             * the new X coordinate of this {@code Point2D}
             * @param {number} y
             * the new Y coordinate of this {@code Point2D}
             * @since 1.2
             */
            setLocation(x?: any, y?: any): any;
            /**
             * Returns a <code>String</code> that represents the value of this
             * <code>Point2D</code>.
             *
             * @return {string} a string representation of this <code>Point2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a <code>Point2D</code> with the specified
         * coordinates.
         *
         * @param {number} x
         * the X coordinate of the newly constructed
         * <code>Point2D</code>
         * @param {number} y
         * the Y coordinate of the newly constructed
         * <code>Point2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.Point2D
         */
        class Double extends java.awt.geom.Point2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Point2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            constructor(x?: any, y?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            setLocation$double$double(x: number, y: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             */
            setLocation(x?: any, y?: any): any;
            /**
             * Returns a <code>String</code> that represents the value of this
             * <code>Point2D</code>.
             *
             * @return {string} a string representation of this <code>Point2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * This <code>Line2D</code> represents a line segment in {@code (x,y)}
     * coordinate space. This class, like all of the Java 2D API, uses a default
     * coordinate system called <i>user space</i> in which the y-axis values
     * increase downward and x-axis values increase to the right. For more
     * information on the user space coordinate system, see the <a href=
     * "http://docs.oracle.com/javase/1.3/docs/guide/2d/spec/j2d-intro.fm2.html#61857">
     * Coordinate Systems</a> section of the Java 2D Programmer's Guide.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * line segment. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class Line2D implements java.awt.Shape, java.lang.Cloneable {
        constructor();
        /**
         * Returns the X coordinate of the start point in double precision.
         *
         * @return {number} the X coordinate of the start point of this {@code Line2D}
         * object.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in double precision.
         *
         * @return {number} the Y coordinate of the start point of this {@code Line2D}
         * object.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start <code>Point2D</code> of this <code>Line2D</code>.
         *
         * @return {java.awt.geom.Point2D} the start <code>Point2D</code> of this <code>Line2D</code>.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in double precision.
         *
         * @return {number} the X coordinate of the end point of this {@code Line2D} object.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in double precision.
         *
         * @return {number} the Y coordinate of the end point of this {@code Line2D} object.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end <code>Point2D</code> of this <code>Line2D</code>.
         *
         * @return {java.awt.geom.Point2D} the end <code>Point2D</code> of this <code>Line2D</code>.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points of this <code>Line2D</code> to the
         * specified double coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
        setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        setLine$java_awt_geom_Line2D(l: Line2D): void;
        /**
         * Returns an indicator of where the specified point {@code (px,py)} lies
         * with respect to the line segment from {@code (x1,y1)} to {@code (x2,y2)}.
         * The return value can be either 1, -1, or 0 and indicates in which
         * direction the specified line must pivot around its first end point,
         * {@code (x1,y1)}, in order to point at the specified point {@code (px,py)}
         * .
         * <p>
         * A return value of 1 indicates that the line segment must turn in the
         * direction that takes the positive X axis towards the negative Y axis. In
         * the default coordinate system used by Java 2D, this direction is
         * counterclockwise.
         * <p>
         * A return value of -1 indicates that the line segment must turn in the
         * direction that takes the positive X axis towards the positive Y axis. In
         * the default coordinate system, this direction is clockwise.
         * <p>
         * A return value of 0 indicates that the point lies exactly on the line
         * segment. Note that an indicator value of 0 is rare and not useful for
         * determining collinearity because of floating point rounding issues.
         * <p>
         * If the point is colinear with the line segment, but not between the end
         * points, then the value will be -1 if the point lies
         * "beyond {@code (x1,y1)}" or 1 if the point lies "beyond {@code (x2,y2)}".
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param {number} px
         * the X coordinate of the specified point to be compared with
         * the specified line segment
         * @param {number} py
         * the Y coordinate of the specified point to be compared with
         * the specified line segment
         * @return {number} an integer that indicates the position of the third specified
         * coordinates with respect to the line segment formed by the first
         * two specified coordinates.
         * @since 1.2
         */
        static relativeCCW(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        relativeCCW$double$double(px: number, py: number): number;
        /**
         * Returns an indicator of where the specified point {@code (px,py)} lies
         * with respect to this line segment. See the method comments of
         * {@link #relativeCCW(double, double, double, double, double, double)} to
         * interpret the return value.
         *
         * @param {number} px
         * the X coordinate of the specified point to be compared with
         * this <code>Line2D</code>
         * @param {number} py
         * the Y coordinate of the specified point to be compared with
         * this <code>Line2D</code>
         * @return {number} an integer that indicates the position of the specified
         * coordinates with respect to this <code>Line2D</code>
         * @see #relativeCCW(double, double, double, double, double, double)
         * @since 1.2
         */
        relativeCCW(px?: any, py?: any): number;
        relativeCCW$java_awt_geom_Point2D(p: java.awt.geom.Point2D): number;
        /**
         * Tests if the line segment from {@code (x1,y1)} to {@code (x2,y2)}
         * intersects the line segment from {@code (x3,y3)} to {@code (x4,y4)}.
         *
         * @param {number} x1
         * the X coordinate of the start point of the first specified
         * line segment
         * @param {number} y1
         * the Y coordinate of the start point of the first specified
         * line segment
         * @param {number} x2
         * the X coordinate of the end point of the first specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the first specified line
         * segment
         * @param {number} x3
         * the X coordinate of the start point of the second specified
         * line segment
         * @param {number} y3
         * the Y coordinate of the start point of the second specified
         * line segment
         * @param {number} x4
         * the X coordinate of the end point of the second specified line
         * segment
         * @param {number} y4
         * the Y coordinate of the end point of the second specified line
         * segment
         * @return {boolean} <code>true</code> if the first specified line segment and the
         * second specified line segment intersect each other;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        static linesIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
        intersectsLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): boolean;
        /**
         * Tests if the line segment from {@code (x1,y1)} to {@code (x2,y2)}
         * intersects this line segment.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @return {boolean} {@code <true>} if this line segment and the specified line
         * segment intersect each other; <code>false</code> otherwise.
         * @since 1.2
         */
        intersectsLine(x1?: any, y1?: any, x2?: any, y2?: any): boolean;
        intersectsLine$java_awt_geom_Line2D(l: Line2D): boolean;
        /**
         * Returns the square of the distance from a point to a line segment. The
         * distance measured is the distance between the specified point and the
         * closest point between the specified end points. If the specified point
         * intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * the specified line segment
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * the specified line segment
         * @return {number} a double value that is the square of the distance from the
         * specified point to the specified line segment.
         * @see #ptLineDistSq(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptSegDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the distance from a point to a line segment. The distance
         * measured is the distance between the specified point and the closest
         * point between the specified end points. If the specified point intersects
         * the line segment in between the end points, this method returns 0.0.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * the specified line segment
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * the specified line segment
         * @return {number} a double value that is the distance from the specified point to
         * the specified line segment.
         * @see #ptLineDist(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptSegDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        ptSegDistSq$double$double(px: number, py: number): number;
        /**
         * Returns the square of the distance from a point to this line segment. The
         * distance measured is the distance between the specified point and the
         * closest point between the current line's end points. If the specified
         * point intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * this line segment
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * this line segment
         * @return {number} a double value that is the square of the distance from the
         * specified point to the current line segment.
         * @see #ptLineDistSq(double, double)
         * @since 1.2
         */
        ptSegDistSq(px?: any, py?: any): number;
        ptSegDistSq$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        ptSegDist$double$double(px: number, py: number): number;
        /**
         * Returns the distance from a point to this line segment. The distance
         * measured is the distance between the specified point and the closest
         * point between the current line's end points. If the specified point
         * intersects the line segment in between the end points, this method
         * returns 0.0.
         *
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * this line segment
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * this line segment
         * @return {number} a double value that is the distance from the specified point to
         * the current line segment.
         * @see #ptLineDist(double, double)
         * @since 1.2
         */
        ptSegDist(px?: any, py?: any): number;
        ptSegDist$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        /**
         * Returns the square of the distance from a point to a line. The distance
         * measured is the distance between the specified point and the closest
         * point on the infinitely-extended line defined by the specified
         * coordinates. If the specified point intersects the line, this method
         * returns 0.0.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * the specified line
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * the specified line
         * @return {number} a double value that is the square of the distance from the
         * specified point to the specified line.
         * @see #ptSegDistSq(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptLineDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        /**
         * Returns the distance from a point to a line. The distance measured is the
         * distance between the specified point and the closest point on the
         * infinitely-extended line defined by the specified coordinates. If the
         * specified point intersects the line, this method returns 0.0.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * the specified line
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * the specified line
         * @return {number} a double value that is the distance from the specified point to
         * the specified line.
         * @see #ptSegDist(double, double, double, double, double, double)
         * @since 1.2
         */
        static ptLineDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
        ptLineDistSq$double$double(px: number, py: number): number;
        /**
         * Returns the square of the distance from a point to this line. The
         * distance measured is the distance between the specified point and the
         * closest point on the infinitely-extended line defined by this
         * <code>Line2D</code>. If the specified point intersects the line, this
         * method returns 0.0.
         *
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * this line
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * this line
         * @return {number} a double value that is the square of the distance from a
         * specified point to the current line.
         * @see #ptSegDistSq(double, double)
         * @since 1.2
         */
        ptLineDistSq(px?: any, py?: any): number;
        ptLineDistSq$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        ptLineDist$double$double(px: number, py: number): number;
        /**
         * Returns the distance from a point to this line. The distance measured is
         * the distance between the specified point and the closest point on the
         * infinitely-extended line defined by this <code>Line2D</code>. If the
         * specified point intersects the line, this method returns 0.0.
         *
         * @param {number} px
         * the X coordinate of the specified point being measured against
         * this line
         * @param {number} py
         * the Y coordinate of the specified point being measured against
         * this line
         * @return {number} a double value that is the distance from a specified point to the
         * current line.
         * @see #ptSegDist(double, double)
         * @since 1.2
         */
        ptLineDist(px?: any, py?: any): number;
        ptLineDist$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): number;
        contains$double$double(x: number, y: number): boolean;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Tests if the interior of this <code>Line2D</code> entirely contains the
         * specified set of rectangular coordinates. This method is required to
         * implement the <code>Shape</code> interface, but in the case of
         * <code>Line2D</code> objects it always returns false since a line contains
         * no area.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the specified
         * rectangular area
         * @param {number} y
         * the Y coordinate of the upper-left corner of the specified
         * rectangular area
         * @param {number} w
         * the width of the specified rectangular area
         * @param {number} h
         * the height of the specified rectangular area
         * @return {boolean} <code>false</code> because a <code>Line2D</code> contains no
         * area.
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @return {java.awt.Rectangle}
         */
        getBounds(): java.awt.Rectangle;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of this flattened
         * <code>Line2D</code>. The iterator for this class is not multi-threaded
         * safe, which means that this <code>Line2D</code> class does not guarantee
         * that modifications to the geometry of this <code>Line2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param {java.awt.geom.AffineTransform} at
         * the specified <code>AffineTransform</code>
         * @param {number} flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points. Since a
         * <code>Line2D</code> object is always flat, this parameter is
         * ignored.
         * @return {*} a <code>PathIterator</code> that defines the boundary of the
         * flattened <code>Line2D</code>
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        abstract getBounds2D(): any;
    }
    namespace Line2D {
        /**
         * Constructs and initializes a Line from the specified coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         * @class
         * @extends java.awt.geom.Line2D
         */
        class Float extends java.awt.geom.Line2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            setLine$float$float$float$float(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points of this <code>Line2D</code> to
             * the specified float coordinates.
             *
             * @param {number} x1
             * the X coordinate of the start point
             * @param {number} y1
             * the Y coordinate of the start point
             * @param {number} x2
             * the X coordinate of the end point
             * @param {number} y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a <code>Line2D</code> from the specified
         * coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         * @class
         * @extends java.awt.geom.Line2D
         */
        class Double extends java.awt.geom.Line2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the line segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x1
             * @param {number} y1
             * @param {number} x2
             * @param {number} y2
             */
            setLine(x1?: any, y1?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a cubic curve segment
     * through the PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class CubicIterator implements java.awt.geom.PathIterator {
        cubic: java.awt.geom.CubicCurve2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(q: java.awt.geom.CubicCurve2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Dimension2D</code> class is to encapsulate a width and a height
     * dimension.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * dimension. The actual storage representation of the sizes is left to the
     * subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class Dimension2D implements java.lang.Cloneable {
        constructor();
        /**
         * Returns the width of this <code>Dimension</code> in double precision.
         *
         * @return {number} the width of this <code>Dimension</code>.
         * @since 1.2
         */
        abstract getWidth(): number;
        /**
         * Returns the height of this <code>Dimension</code> in double precision.
         *
         * @return {number} the height of this <code>Dimension</code>.
         * @since 1.2
         */
        abstract getHeight(): number;
        setSize$double$double(width: number, height: number): void;
        /**
         * Sets the size of this <code>Dimension</code> object to the specified
         * width and height. This method is included for completeness, to parallel
         * the {@link java.awt.Component#getSize} method of
         * {@link java.awt.Component}.
         *
         * @param {number} width
         * the new width for the <code>Dimension</code> object
         * @param {number} height
         * the new height for the <code>Dimension</code> object
         * @since 1.2
         */
        setSize(width?: any, height?: any): any;
        setSize$java_awt_geom_Dimension2D(d: Dimension2D): void;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an arc through the
     * PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class ArcIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        angStRad: number;
        increment: number;
        cv: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        arcSegs: number;
        lineSegs: number;
        constructor(a: java.awt.geom.Arc2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        static btan(increment: number): number;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * Constructs an <code>IllegalPathStateException</code> with the
     * specified detail message.
     * @param   {string} s   the detail message
     * @since   1.2
     * @class
     * @extends java.lang.RuntimeException
     */
    class IllegalPathStateException extends java.lang.RuntimeException {
        constructor(s?: any);
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>PathIterator</code> interface provides the mechanism for objects
     * that implement the {@link *} interface to return the
     * geometry of their boundary by allowing a caller to retrieve the path of that
     * boundary a segment at a time. This interface allows these objects to retrieve
     * the path of their boundary a segment at a time by using 1st through 3rd order
     * B&eacute;zier curves, which are lines and quadratic or cubic B&eacute;zier
     * splines.
     * <p>
     * Multiple subpaths can be expressed by using a "MOVETO" segment to create a
     * discontinuity in the geometry to move from the end of one subpath to the
     * beginning of the next.
     * <p>
     * Each subpath can be closed manually by ending the last segment in the subpath
     * on the same coordinate as the beginning "MOVETO" segment for that subpath or
     * by using a "CLOSE" segment to append a line segment from the last point back
     * to the first. Be aware that manually closing an outline as opposed to using a
     * "CLOSE" segment to close the path might result in different line style
     * decorations being used at the end points of the subpath. For example, the
     * {@link java.awt.BasicStroke} object uses a line "JOIN" decoration
     * to connect the first and last points if a "CLOSE" segment is encountered,
     * whereas simply ending the path on the same coordinate as the beginning
     * coordinate results in line "CAP" decorations being used at the ends.
     *
     * @see java.awt.Shape
     * @see java.awt.BasicStroke
     *
     * @author Jim Graham
     * @class
     */
    interface PathIterator {
        /**
         * Returns the winding rule for determining the interior of the path.
         *
         * @return {number} the winding rule.
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if the iteration is complete.
         *
         * @return {boolean} <code>true</code> if all the segments have been read;
         * <code>false</code> otherwise.
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): any;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path-segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and can be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types returns one point, SEG_QUADTO returns two
         * points, SEG_CUBICTO returns 3 points and SEG_CLOSE does not return any
         * points.
         *
         * @param {float[]} coords
         * an array that holds the data returned from this method
         * @return {number} the path-segment type of the current path segment.
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         */
        currentSegment(coords?: any): number;
    }
    namespace PathIterator {
        /**
         * The winding rule constant for specifying an even-odd rule for determining
         * the interior of a path. The even-odd rule specifies that a point lies
         * inside the path if a ray drawn in any direction from that point to
         * infinity is crossed by path segments an odd number of times.
         */
        const WIND_EVEN_ODD: number;
        /**
         * The winding rule constant for specifying a non-zero rule for determining
         * the interior of a path. The non-zero rule specifies that a point lies
         * inside the path if a ray drawn in any direction from that point to
         * infinity is crossed by path segments a different number of times in the
         * counter-clockwise direction than the clockwise direction.
         */
        const WIND_NON_ZERO: number;
        /**
         * The segment type constant for a point that specifies the starting
         * location for a new subpath.
         */
        const SEG_MOVETO: number;
        /**
         * The segment type constant for a point that specifies the end point of a
         * line to be drawn from the most recently specified point.
         */
        const SEG_LINETO: number;
        /**
         * The segment type constant for the pair of points that specify a quadratic
         * parametric curve to be drawn from the most recently specified point. The
         * curve is interpolated by solving the parametric control equation in the
         * range <code>(t=[0..1])</code> using the most recently specified (current)
         * point (CP), the first control point (P1), and the final interpolated
         * control point (P2). The parametric control equation for this curve is:
         *
         * <pre>
         * P(t) = B(2,0)*CP + B(2,1)*P1 + B(2,2)*P2
         * 0 &lt;= t &lt;= 1
         *
         * B(n,m) = mth coefficient of nth degree Bernstein polynomial
         * = C(n,m) * t^(m) * (1 - t)^(n-m)
         * C(n,m) = Combinations of n things, taken m at a time
         * = n! / (m! * (n-m)!)
         * </pre>
         */
        const SEG_QUADTO: number;
        /**
         * The segment type constant for the set of 3 points that specify a cubic
         * parametric curve to be drawn from the most recently specified point. The
         * curve is interpolated by solving the parametric control equation in the
         * range <code>(t=[0..1])</code> using the most recently specified (current)
         * point (CP), the first control point (P1), the second control point (P2),
         * and the final interpolated control point (P3). The parametric control
         * equation for this curve is:
         *
         * <pre>
         * P(t) = B(3,0)*CP + B(3,1)*P1 + B(3,2)*P2 + B(3,3)*P3
         * 0 &lt;= t &lt;= 1
         *
         * B(n,m) = mth coefficient of nth degree Bernstein polynomial
         * = C(n,m) * t^(m) * (1 - t)^(n-m)
         * C(n,m) = Combinations of n things, taken m at a time
         * = n! / (m! * (n-m)!)
         * </pre>
         *
         * This form of curve is commonly known as a B&eacute;zier curve.
         */
        const SEG_CUBICTO: number;
        /**
         * The segment type constant that specifies that the preceding subpath
         * should be closed by appending a line segment back to the point
         * corresponding to the most recent SEG_MOVETO.
         */
        const SEG_CLOSE: number;
    }
}
declare namespace java.awt.geom {
    /**
     * Constructs a new <code>AffineTransform</code> from 6 floating point
     * values representing the 6 specifiable entries of the 3x3
     * transformation matrix.
     *
     * @param {number} m00 the X coordinate scaling element of the 3x3 matrix
     * @param {number} m10 the Y coordinate shearing element of the 3x3 matrix
     * @param {number} m01 the X coordinate shearing element of the 3x3 matrix
     * @param {number} m11 the Y coordinate scaling element of the 3x3 matrix
     * @param {number} m02 the X coordinate translation element of the 3x3 matrix
     * @param {number} m12 the Y coordinate translation element of the 3x3 matrix
     * @since 1.2
     * @class
     * @author Jim Graham
     */
    class AffineTransform implements java.lang.Cloneable, java.io.Serializable {
        static TYPE_UNKNOWN: number;
        /**
         * This constant indicates that the transform defined by this object
         * is an identity transform.
         * An identity transform is one in which the output coordinates are
         * always the same as the input coordinates.
         * If this transform is anything other than the identity transform,
         * the type will either be the constant GENERAL_TRANSFORM or a
         * combination of the appropriate flag bits for the various coordinate
         * conversions that this transform performs.
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_IDENTITY: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a translation in addition to the conversions indicated
         * by other flag bits.
         * A translation moves the coordinates by a constant amount in x
         * and y without changing the length or angle of vectors.
         * @see #TYPE_IDENTITY
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_TRANSLATION: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a uniform scale in addition to the conversions indicated
         * by other flag bits.
         * A uniform scale multiplies the length of vectors by the same amount
         * in both the x and y directions without changing the angle between
         * vectors.
         * This flag bit is mutually exclusive with the TYPE_GENERAL_SCALE flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_UNIFORM_SCALE: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a general scale in addition to the conversions indicated
         * by other flag bits.
         * A general scale multiplies the length of vectors by different
         * amounts in the x and y directions without changing the angle
         * between perpendicular vectors.
         * This flag bit is mutually exclusive with the TYPE_UNIFORM_SCALE flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_SCALE: number;
        /**
         * This constant is a bit mask for any of the scale flag bits.
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @since 1.2
         */
        static TYPE_MASK_SCALE: number;
        static TYPE_MASK_SCALE_$LI$(): number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a mirror image flip about some axis which changes the
         * normally right handed coordinate system into a left handed
         * system in addition to the conversions indicated by other flag bits.
         * A right handed coordinate system is one where the positive X
         * axis rotates counterclockwise to overlay the positive Y axis
         * similar to the direction that the fingers on your right hand
         * curl when you stare end on at your thumb.
         * A left handed coordinate system is one where the positive X
         * axis rotates clockwise to overlay the positive Y axis similar
         * to the direction that the fingers on your left hand curl.
         * There is no mathematical way to determine the angle of the
         * original flipping or mirroring transformation since all angles
         * of flip are identical given an appropriate adjusting rotation.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_FLIP: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a quadrant rotation by some multiple of 90 degrees in
         * addition to the conversions indicated by other flag bits.
         * A rotation changes the angles of vectors by the same amount
         * regardless of the original direction of the vector and without
         * changing the length of the vector.
         * This flag bit is mutually exclusive with the TYPE_GENERAL_ROTATION flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_QUADRANT_ROTATION: number;
        /**
         * This flag bit indicates that the transform defined by this object
         * performs a rotation by an arbitrary angle in addition to the
         * conversions indicated by other flag bits.
         * A rotation changes the angles of vectors by the same amount
         * regardless of the original direction of the vector and without
         * changing the length of the vector.
         * This flag bit is mutually exclusive with the
         * TYPE_QUADRANT_ROTATION flag.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_ROTATION: number;
        /**
         * This constant is a bit mask for any of the rotation flag bits.
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @since 1.2
         */
        static TYPE_MASK_ROTATION: number;
        static TYPE_MASK_ROTATION_$LI$(): number;
        /**
         * This constant indicates that the transform defined by this object
         * performs an arbitrary conversion of the input coordinates.
         * If this transform can be classified by any of the above constants,
         * the type will either be the constant TYPE_IDENTITY or a
         * combination of the appropriate flag bits for the various coordinate
         * conversions that this transform performs.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #getType
         * @since 1.2
         */
        static TYPE_GENERAL_TRANSFORM: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that no calculations need to be performed and that the source
         * coordinates only need to be copied to their destinations to
         * complete the transformation equation of this transform.
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_IDENTITY: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the translation components of the matrix (m02 and m12) need
         * to be added to complete the transformation equation of this transform.
         * @see #APPLY_IDENTITY
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_TRANSLATE: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the scaling components of the matrix (m00 and m11) need
         * to be factored in to complete the transformation equation of
         * this transform.  If the APPLY_SHEAR bit is also set then it
         * indicates that the scaling components are not both 0.0.  If the
         * APPLY_SHEAR bit is not also set then it indicates that the
         * scaling components are not both 1.0.  If neither the APPLY_SHEAR
         * nor the APPLY_SCALE bits are set then the scaling components
         * are both 1.0, which means that the x and y components contribute
         * to the transformed coordinate, but they are not multiplied by
         * any scaling factor.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SHEAR
         * @see #state
         */
        static APPLY_SCALE: number;
        /**
         * This constant is used for the internal state variable to indicate
         * that the shearing components of the matrix (m01 and m10) need
         * to be factored in to complete the transformation equation of this
         * transform.  The presence of this bit in the state variable changes
         * the interpretation of the APPLY_SCALE bit as indicated in its
         * documentation.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #state
         */
        static APPLY_SHEAR: number;
        static HI_SHIFT: number;
        static HI_IDENTITY: number;
        static HI_IDENTITY_$LI$(): number;
        static HI_TRANSLATE: number;
        static HI_TRANSLATE_$LI$(): number;
        static HI_SCALE: number;
        static HI_SCALE_$LI$(): number;
        static HI_SHEAR: number;
        static HI_SHEAR_$LI$(): number;
        /**
         * The X coordinate scaling element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m00: number;
        /**
         * The Y coordinate shearing element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m10: number;
        /**
         * The X coordinate shearing element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m01: number;
        /**
         * The Y coordinate scaling element of the 3x3
         * affine transformation matrix.
         *
         * @serial
         */
        m11: number;
        /**
         * The X coordinate of the translation element of the
         * 3x3 affine transformation matrix.
         *
         * @serial
         */
        m02: number;
        /**
         * The Y coordinate of the translation element of the
         * 3x3 affine transformation matrix.
         *
         * @serial
         */
        m12: number;
        /**
         * This field keeps track of which components of the matrix need to
         * be applied when performing a transformation.
         * @see #APPLY_IDENTITY
         * @see #APPLY_TRANSLATE
         * @see #APPLY_SCALE
         * @see #APPLY_SHEAR
         */
        state: number;
        /**
         * This field caches the current transformation type of the matrix.
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_FLIP
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @see #TYPE_UNKNOWN
         * @see #getType
         */
        type: number;
        constructor(m00?: any, m10?: any, m01?: any, m11?: any, m02?: any, m12?: any, state?: any);
        /**
         * Returns a transform representing a translation transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} tx the distance by which coordinates are translated in the
         * X axis direction
         * @param {number} ty the distance by which coordinates are translated in the
         * Y axis direction
         * @return {java.awt.geom.AffineTransform} an <code>AffineTransform</code> object that represents a
         * translation transformation, created with the specified vector.
         * @since 1.2
         */
        static getTranslateInstance(tx: number, ty: number): AffineTransform;
        static getRotateInstance$double(theta: number): AffineTransform;
        static getRotateInstance$double$double$double(theta: number, anchorx: number, anchory: number): AffineTransform;
        static getRotateInstance$double$double(vecx: number, vecy: number): AffineTransform;
        static getRotateInstance$double$double$double$double(vecx: number, vecy: number, anchorx: number, anchory: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates around an anchor
         * point according to a rotation vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * an identity transform is returned.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(Math.atan2(vecy, vecx),
         * anchorx, anchory);
         * </pre>
         *
         * @param {number} vecx the X coordinate of the rotation vector
         * @param {number} vecy the Y coordinate of the rotation vector
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @return {java.awt.geom.AffineTransform} an <code>AffineTransform</code> object that rotates
         * coordinates around the specified point according to the
         * specified rotation vector.
         * @since 1.6
         */
        static getRotateInstance(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): AffineTransform;
        static getQuadrantRotateInstance$int(numquadrants: number): AffineTransform;
        static getQuadrantRotateInstance$int$double$double(numquadrants: number, anchorx: number, anchory: number): AffineTransform;
        /**
         * Returns a transform that rotates coordinates by the specified
         * number of quadrants around the specified anchor point.
         * This operation is equivalent to calling:
         * <pre>
         * AffineTransform.getRotateInstance(numquadrants * Math.PI / 2.0,
         * anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param {number} numquadrants the number of 90 degree arcs to rotate by
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @return {java.awt.geom.AffineTransform} an <code>AffineTransform</code> object that rotates
         * coordinates by the specified number of quadrants around the
         * specified anchor point.
         * @since 1.6
         */
        static getQuadrantRotateInstance(numquadrants?: any, anchorx?: any, anchory?: any): AffineTransform;
        /**
         * Returns a transform representing a scaling transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param {number} sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @return {java.awt.geom.AffineTransform} an <code>AffineTransform</code> object that scales
         * coordinates by the specified factors.
         * @since 1.2
         */
        static getScaleInstance(sx: number, sy: number): AffineTransform;
        /**
         * Returns a transform representing a shearing transformation.
         * The matrix representing the returned transform is:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param {number} shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @return {java.awt.geom.AffineTransform} an <code>AffineTransform</code> object that shears
         * coordinates by the specified multipliers.
         * @since 1.2
         */
        static getShearInstance(shx: number, shy: number): AffineTransform;
        /**
         * Retrieves the flag bits describing the conversion properties of
         * this transform.
         * The return value is either one of the constants TYPE_IDENTITY
         * or TYPE_GENERAL_TRANSFORM, or a combination of the
         * appropriate flag bits.
         * A valid combination of flag bits is an exclusive OR operation
         * that can combine
         * the TYPE_TRANSLATION flag bit
         * in addition to either of the
         * TYPE_UNIFORM_SCALE or TYPE_GENERAL_SCALE flag bits
         * as well as either of the
         * TYPE_QUADRANT_ROTATION or TYPE_GENERAL_ROTATION flag bits.
         * @return {number} the OR combination of any of the indicated flags that
         * apply to this transform
         * @see #TYPE_IDENTITY
         * @see #TYPE_TRANSLATION
         * @see #TYPE_UNIFORM_SCALE
         * @see #TYPE_GENERAL_SCALE
         * @see #TYPE_QUADRANT_ROTATION
         * @see #TYPE_GENERAL_ROTATION
         * @see #TYPE_GENERAL_TRANSFORM
         * @since 1.2
         */
        getType(): number;
        /**
         * This is the utility function to calculate the flag bits when
         * they have not been cached.
         * @see #getType
         * @private
         */
        calculateType(): void;
        /**
         * Returns the determinant of the matrix representation of the transform.
         * The determinant is useful both to determine if the transform can
         * be inverted and to get a single value representing the
         * combined X and Y scaling of the transform.
         * <p>
         * If the determinant is non-zero, then this transform is
         * invertible and the various methods that depend on the inverse
         * transform do not need to throw a
         * {@link NoninvertibleTransformException}.
         * If the determinant is zero then this transform can not be
         * inverted since the transform maps all input coordinates onto
         * a line or a point.
         * If the determinant is near enough to zero then inverse transform
         * operations might not carry enough precision to produce meaningful
         * results.
         * <p>
         * If this transform represents a uniform scale, as indicated by
         * the <code>getType</code> method then the determinant also
         * represents the square of the uniform scale factor by which all of
         * the points are expanded from or contracted towards the origin.
         * If this transform represents a non-uniform scale or more general
         * transform then the determinant is not likely to represent a
         * value useful for any purpose other than determining if inverse
         * transforms are possible.
         * <p>
         * Mathematically, the determinant is calculated using the formula:
         * <pre>
         * |  m00  m01  m02  |
         * |  m10  m11  m12  |  =  m00 * m11 - m01 * m10
         * |   0    0    1   |
         * </pre>
         *
         * @return {number} the determinant of the matrix used to transform the
         * coordinates.
         * @see #getType
         * @see #createInverse
         * @see #inverseTransform
         * @see #TYPE_UNIFORM_SCALE
         * @since 1.2
         */
        getDeterminant(): number;
        /**
         * Manually recalculates the state of the transform when the matrix
         * changes too much to predict the effects on the state.
         * The following table specifies what the various settings of the
         * state field say about the values of the corresponding matrix
         * element fields.
         * Note that the rules governing the SCALE fields are slightly
         * different depending on whether the SHEAR flag is also set.
         * <pre>
         * SCALE            SHEAR          TRANSLATE
         * m00/m11          m01/m10          m02/m12
         *
         * IDENTITY             1.0              0.0              0.0
         * TRANSLATE (TR)       1.0              0.0          not both 0.0
         * SCALE (SC)       not both 1.0         0.0              0.0
         * TR | SC          not both 1.0         0.0          not both 0.0
         * SHEAR (SH)           0.0          not both 0.0         0.0
         * TR | SH              0.0          not both 0.0     not both 0.0
         * SC | SH          not both 0.0     not both 0.0         0.0
         * TR | SC | SH     not both 0.0     not both 0.0     not both 0.0
         * </pre>
         */
        updateState(): void;
        stateError(): void;
        /**
         * Retrieves the 6 specifiable values in the 3x3 affine transformation
         * matrix and places them into an array of double precisions values.
         * The values are stored in the array as
         * {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;m02&nbsp;m12&nbsp;}.
         * An array of 4 doubles can also be specified, in which case only the
         * first four elements representing the non-transform
         * parts of the array are retrieved and the values are stored into
         * the array as {&nbsp;m00&nbsp;m10&nbsp;m01&nbsp;m11&nbsp;}
         * @param {double[]} flatmatrix the double array used to store the returned
         * values.
         * @see #getScaleX
         * @see #getScaleY
         * @see #getShearX
         * @see #getShearY
         * @see #getTranslateX
         * @see #getTranslateY
         * @since 1.2
         */
        getMatrix(flatmatrix: number[]): void;
        /**
         * Returns the X coordinate scaling element (m00) of the 3x3
         * affine transformation matrix.
         * @return {number} a double value that is the X coordinate of the scaling
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getScaleX(): number;
        /**
         * Returns the Y coordinate scaling element (m11) of the 3x3
         * affine transformation matrix.
         * @return {number} a double value that is the Y coordinate of the scaling
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getScaleY(): number;
        /**
         * Returns the X coordinate shearing element (m01) of the 3x3
         * affine transformation matrix.
         * @return {number} a double value that is the X coordinate of the shearing
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getShearX(): number;
        /**
         * Returns the Y coordinate shearing element (m10) of the 3x3
         * affine transformation matrix.
         * @return {number} a double value that is the Y coordinate of the shearing
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getShearY(): number;
        /**
         * Returns the X coordinate of the translation element (m02) of the
         * 3x3 affine transformation matrix.
         * @return {number} a double value that is the X coordinate of the translation
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getTranslateX(): number;
        /**
         * Returns the Y coordinate of the translation element (m12) of the
         * 3x3 affine transformation matrix.
         * @return {number} a double value that is the Y coordinate of the translation
         * element of the affine transformation matrix.
         * @see #getMatrix
         * @since 1.2
         */
        getTranslateY(): number;
        /**
         * Concatenates this transform with a translation transformation.
         * This is equivalent to calling concatenate(T), where T is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} tx the distance by which coordinates are translated in the
         * X axis direction
         * @param {number} ty the distance by which coordinates are translated in the
         * Y axis direction
         * @since 1.2
         */
        translate(tx: number, ty: number): void;
        static rot90conversion: number[];
        static rot90conversion_$LI$(): number[];
        rotate90(): void;
        rotate180(): void;
        rotate270(): void;
        rotate$double(theta: number): void;
        rotate$double$double$double(theta: number, anchorx: number, anchory: number): void;
        rotate$double$double(vecx: number, vecy: number): void;
        rotate$double$double$double$double(vecx: number, vecy: number, anchorx: number, anchory: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates around an anchor point according to a rotation
         * vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * the transform is not modified in any way.
         * This method is equivalent to calling:
         * <pre>
         * rotate(Math.atan2(vecy, vecx), anchorx, anchory);
         * </pre>
         *
         * @param {number} vecx the X coordinate of the rotation vector
         * @param {number} vecy the Y coordinate of the rotation vector
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        rotate(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): any;
        quadrantRotate$int(numquadrants: number): void;
        quadrantRotate$int$double$double(numquadrants: number, anchorx: number, anchory: number): void;
        /**
         * Concatenates this transform with a transform that rotates
         * coordinates by the specified number of quadrants around
         * the specified anchor point.
         * This method is equivalent to calling:
         * <pre>
         * rotate(numquadrants * Math.PI / 2.0, anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param {number} numquadrants the number of 90 degree arcs to rotate by
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        quadrantRotate(numquadrants?: any, anchorx?: any, anchory?: any): any;
        /**
         * Concatenates this transform with a scaling transformation.
         * This is equivalent to calling concatenate(S), where S is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param {number} sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @since 1.2
         */
        scale(sx: number, sy: number): void;
        /**
         * Concatenates this transform with a shearing transformation.
         * This is equivalent to calling concatenate(SH), where SH is an
         * <code>AffineTransform</code> represented by the following matrix:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param {number} shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @since 1.2
         */
        shear(shx: number, shy: number): void;
        /**
         * Resets this transform to the Identity transform.
         * @since 1.2
         */
        setToIdentity(): void;
        /**
         * Sets this transform to a translation transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   1    0    tx  ]
         * [   0    1    ty  ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} tx the distance by which coordinates are translated in the
         * X axis direction
         * @param {number} ty the distance by which coordinates are translated in the
         * Y axis direction
         * @since 1.2
         */
        setToTranslation(tx: number, ty: number): void;
        setToRotation$double(theta: number): void;
        setToRotation$double$double$double(theta: number, anchorx: number, anchory: number): void;
        setToRotation$double$double(vecx: number, vecy: number): void;
        setToRotation$double$double$double$double(vecx: number, vecy: number, anchorx: number, anchory: number): void;
        /**
         * Sets this transform to a rotation transformation that rotates
         * coordinates around an anchor point according to a rotation
         * vector.
         * All coordinates rotate about the specified anchor coordinates
         * by the same amount.
         * The amount of rotation is such that coordinates along the former
         * positive X axis will subsequently align with the vector pointing
         * from the origin to the specified vector coordinates.
         * If both <code>vecx</code> and <code>vecy</code> are 0.0,
         * the transform is set to an identity transform.
         * This operation is equivalent to calling:
         * <pre>
         * setToTranslation(Math.atan2(vecy, vecx), anchorx, anchory);
         * </pre>
         *
         * @param {number} vecx the X coordinate of the rotation vector
         * @param {number} vecy the Y coordinate of the rotation vector
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        setToRotation(vecx?: any, vecy?: any, anchorx?: any, anchory?: any): any;
        setToQuadrantRotation$int(numquadrants: number): void;
        setToQuadrantRotation$int$double$double(numquadrants: number, anchorx: number, anchory: number): void;
        /**
         * Sets this transform to a translated rotation transformation
         * that rotates coordinates by the specified number of quadrants
         * around the specified anchor point.
         * This operation is equivalent to calling:
         * <pre>
         * setToRotation(numquadrants * Math.PI / 2.0, anchorx, anchory);
         * </pre>
         * Rotating by a positive number of quadrants rotates points on
         * the positive X axis toward the positive Y axis.
         *
         * @param {number} numquadrants the number of 90 degree arcs to rotate by
         * @param {number} anchorx the X coordinate of the rotation anchor point
         * @param {number} anchory the Y coordinate of the rotation anchor point
         * @since 1.6
         */
        setToQuadrantRotation(numquadrants?: any, anchorx?: any, anchory?: any): any;
        /**
         * Sets this transform to a scaling transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   sx   0    0   ]
         * [   0    sy   0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} sx the factor by which coordinates are scaled along the
         * X axis direction
         * @param {number} sy the factor by which coordinates are scaled along the
         * Y axis direction
         * @since 1.2
         */
        setToScale(sx: number, sy: number): void;
        /**
         * Sets this transform to a shearing transformation.
         * The matrix representing this transform becomes:
         * <pre>
         * [   1   shx   0   ]
         * [  shy   1    0   ]
         * [   0    0    1   ]
         * </pre>
         * @param {number} shx the multiplier by which coordinates are shifted in the
         * direction of the positive X axis as a factor of their Y coordinate
         * @param {number} shy the multiplier by which coordinates are shifted in the
         * direction of the positive Y axis as a factor of their X coordinate
         * @since 1.2
         */
        setToShear(shx: number, shy: number): void;
        setTransform$java_awt_geom_AffineTransform(Tx: AffineTransform): void;
        setTransform$double$double$double$double$double$double(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): void;
        /**
         * Sets this transform to the matrix specified by the 6
         * double precision values.
         *
         * @param {number} m00 the X coordinate scaling element of the 3x3 matrix
         * @param {number} m10 the Y coordinate shearing element of the 3x3 matrix
         * @param {number} m01 the X coordinate shearing element of the 3x3 matrix
         * @param {number} m11 the Y coordinate scaling element of the 3x3 matrix
         * @param {number} m02 the X coordinate translation element of the 3x3 matrix
         * @param {number} m12 the Y coordinate translation element of the 3x3 matrix
         * @since 1.2
         */
        setTransform(m00?: any, m10?: any, m01?: any, m11?: any, m02?: any, m12?: any): any;
        /**
         * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
         * this <code>AffineTransform</code> Cx in the most commonly useful
         * way to provide a new user space
         * that is mapped to the former user space by <code>Tx</code>.
         * Cx is updated to perform the combined transformation.
         * Transforming a point p by the updated transform Cx' is
         * equivalent to first transforming p by <code>Tx</code> and then
         * transforming the result by the original transform Cx like this:
         * Cx'(p) = Cx(Tx(p))
         * In matrix notation, if this transform Cx is
         * represented by the matrix [this] and <code>Tx</code> is represented
         * by the matrix [Tx] then this method does the following:
         * <pre>
         * [this] = [this] x [Tx]
         * </pre>
         * @param {java.awt.geom.AffineTransform} Tx the <code>AffineTransform</code> object to be
         * concatenated with this <code>AffineTransform</code> object.
         * @see #preConcatenate
         * @since 1.2
         */
        concatenate(Tx: AffineTransform): void;
        /**
         * Concatenates an <code>AffineTransform</code> <code>Tx</code> to
         * this <code>AffineTransform</code> Cx
         * in a less commonly used way such that <code>Tx</code> modifies the
         * coordinate transformation relative to the absolute pixel
         * space rather than relative to the existing user space.
         * Cx is updated to perform the combined transformation.
         * Transforming a point p by the updated transform Cx' is
         * equivalent to first transforming p by the original transform
         * Cx and then transforming the result by
         * <code>Tx</code> like this:
         * Cx'(p) = Tx(Cx(p))
         * In matrix notation, if this transform Cx
         * is represented by the matrix [this] and <code>Tx</code> is
         * represented by the matrix [Tx] then this method does the
         * following:
         * <pre>
         * [this] = [Tx] x [this]
         * </pre>
         * @param {java.awt.geom.AffineTransform} Tx the <code>AffineTransform</code> object to be
         * concatenated with this <code>AffineTransform</code> object.
         * @see #concatenate
         * @since 1.2
         */
        preConcatenate(Tx: AffineTransform): void;
        /**
         * Returns an <code>AffineTransform</code> object representing the
         * inverse transformation.
         * The inverse transform Tx' of this transform Tx
         * maps coordinates transformed by Tx back
         * to their original coordinates.
         * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
         * <p>
         * If this transform maps all coordinates onto a point or a line
         * then it will not have an inverse, since coordinates that do
         * not lie on the destination point or line will not have an inverse
         * mapping.
         * The <code>getDeterminant</code> method can be used to determine if this
         * transform has no inverse, in which case an exception will be
         * thrown if the <code>createInverse</code> method is called.
         * @return {java.awt.geom.AffineTransform} a new <code>AffineTransform</code> object representing the
         * inverse transformation.
         * @see #getDeterminant
         * @exception NoninvertibleTransformException
         * if the matrix cannot be inverted.
         * @since 1.2
         */
        createInverse(): AffineTransform;
        /**
         * Sets this transform to the inverse of itself.
         * The inverse transform Tx' of this transform Tx
         * maps coordinates transformed by Tx back
         * to their original coordinates.
         * In other words, Tx'(Tx(p)) = p = Tx(Tx'(p)).
         * <p>
         * If this transform maps all coordinates onto a point or a line
         * then it will not have an inverse, since coordinates that do
         * not lie on the destination point or line will not have an inverse
         * mapping.
         * The <code>getDeterminant</code> method can be used to determine if this
         * transform has no inverse, in which case an exception will be
         * thrown if the <code>invert</code> method is called.
         * @see #getDeterminant
         * @exception NoninvertibleTransformException
         * if the matrix cannot be inverted.
         * @since 1.6
         */
        invert(): void;
        transform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        transform$java_awt_geom_Point2D_A$int$java_awt_geom_Point2D_A$int$int(ptSrc: java.awt.geom.Point2D[], srcOff: number, ptDst: java.awt.geom.Point2D[], dstOff: number, numPts: number): void;
        /**
         * Transforms an array of point objects by this transform.
         * If any element of the <code>ptDst</code> array is
         * <code>null</code>, a new <code>Point2D</code> object is allocated
         * and stored into that element before storing the results of the
         * transformation.
         * <p>
         * Note that this method does not take any precautions to
         * avoid problems caused by storing results into <code>Point2D</code>
         * objects that will be used as the source for calculations
         * further down the source array.
         * This method does guarantee that if a specified <code>Point2D</code>
         * object is both the source and destination for the same single point
         * transform operation then the results will not be stored until
         * the calculations are complete to avoid storing the results on
         * top of the operands.
         * If, however, the destination <code>Point2D</code> object for one
         * operation is the same object as the source <code>Point2D</code>
         * object for another operation further down the source array then
         * the original coordinates in that point are overwritten before
         * they can be converted.
         * @param {java.awt.geom.Point2D[]} ptSrc the array containing the source point objects
         * @param {java.awt.geom.Point2D[]} ptDst the array into which the transform point objects are
         * returned
         * @param {number} srcOff the offset to the first point object to be
         * transformed in the source array
         * @param {number} dstOff the offset to the location of the first
         * transformed point object that is stored in the destination array
         * @param {number} numPts the number of point objects to be transformed
         * @since 1.2
         */
        transform(ptSrc?: any, srcOff?: any, ptDst?: any, dstOff?: any, numPts?: any): any;
        transform$float_A$int$float_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        transform$double_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        transform$float_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        transform$double_A$int$float_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        inverseTransform$double_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Inverse transforms an array of double precision coordinates by
         * this transform.
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are
         * overwritten by a previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the specified
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param {double[]} srcPts the array containing the source point coordinates.
         * Each point is stored as a pair of x,&nbsp;y coordinates.
         * @param {double[]} dstPts the array into which the transformed point
         * coordinates are returned.  Each point is stored as a pair of
         * x,&nbsp;y coordinates.
         * @param {number} srcOff the offset to the first point to be transformed
         * in the source array
         * @param {number} dstOff the offset to the location of the first
         * transformed point that is stored in the destination array
         * @param {number} numPts the number of point objects to be transformed
         * @exception NoninvertibleTransformException  if the matrix cannot be
         * inverted.
         * @since 1.2
         */
        inverseTransform(srcPts?: any, srcOff?: any, dstPts?: any, dstOff?: any, numPts?: any): any;
        deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(ptSrc: java.awt.geom.Point2D, ptDst: java.awt.geom.Point2D): java.awt.geom.Point2D;
        deltaTransform$double_A$int$double_A$int$int(srcPts: number[], srcOff: number, dstPts: number[], dstOff: number, numPts: number): void;
        /**
         * Transforms an array of relative distance vectors by this
         * transform.
         * A relative distance vector is transformed without applying the
         * translation components of the affine transformation matrix
         * using the following equations:
         * <pre>
         * [  x' ]   [  m00  m01 (m02) ] [  x  ]   [ m00x + m01y ]
         * [  y' ] = [  m10  m11 (m12) ] [  y  ] = [ m10x + m11y ]
         * [ (1) ]   [  (0)  (0) ( 1 ) ] [ (1) ]   [     (1)     ]
         * </pre>
         * The two coordinate array sections can be exactly the same or
         * can be overlapping sections of the same array without affecting the
         * validity of the results.
         * This method ensures that no source coordinates are
         * overwritten by a previous operation before they can be transformed.
         * The coordinates are stored in the arrays starting at the indicated
         * offset in the order <code>[x0, y0, x1, y1, ..., xn, yn]</code>.
         * @param {double[]} srcPts the array containing the source distance vectors.
         * Each vector is stored as a pair of relative x,&nbsp;y coordinates.
         * @param {double[]} dstPts the array into which the transformed distance vectors
         * are returned.  Each vector is stored as a pair of relative
         * x,&nbsp;y coordinates.
         * @param {number} srcOff the offset to the first vector to be transformed
         * in the source array
         * @param {number} dstOff the offset to the location of the first
         * transformed vector that is stored in the destination array
         * @param {number} numPts the number of vector coordinate pairs to be
         * transformed
         * @since 1.2
         */
        deltaTransform(srcPts?: any, srcOff?: any, dstPts?: any, dstOff?: any, numPts?: any): any;
        /**
         * Returns a new {@link Shape} object defined by the geometry of the
         * specified <code>Shape</code> after it has been transformed by
         * this transform.
         * @param {*} pSrc the specified <code>Shape</code> object to be
         * transformed by this transform.
         * @return {*} a new <code>Shape</code> object that defines the geometry
         * of the transformed <code>Shape</code>, or null if {@code pSrc} is null.
         * @since 1.2
         */
        createTransformedShape(pSrc: java.awt.Shape): java.awt.Shape;
        static _matround(matval: number): number;
        /**
         * Returns a <code>String</code> that represents the value of this
         * {@link Object}.
         * @return {string} a <code>String</code> representing the value of this
         * <code>Object</code>.
         * @since 1.2
         */
        toString(): string;
        /**
         * Returns <code>true</code> if this <code>AffineTransform</code> is
         * an identity transform.
         * @return {boolean} <code>true</code> if this <code>AffineTransform</code> is
         * an identity transform; <code>false</code> otherwise.
         * @since 1.2
         */
        isIdentity(): boolean;
        /**
         * Returns a copy of this <code>AffineTransform</code> object.
         * @return {*} an <code>Object</code> that is a copy of this
         * <code>AffineTransform</code> object.
         * @since 1.2
         */
        clone(): any;
        /**
         * Returns the hashcode for this transform.
         * @return      {number} a hash code for this transform.
         * @since 1.2
         */
        hashCode(): number;
        /**
         * Returns <code>true</code> if this <code>AffineTransform</code>
         * represents the same affine coordinate transform as the specified
         * argument.
         * @param {*} obj the <code>Object</code> to test for equality with this
         * <code>AffineTransform</code>
         * @return {boolean} <code>true</code> if <code>obj</code> equals this
         * <code>AffineTransform</code> object; <code>false</code> otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
        static serialVersionUID: number;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a quadratic curve
     * segment through the PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class QuadIterator implements java.awt.geom.PathIterator {
        quad: java.awt.geom.QuadCurve2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(q: java.awt.geom.QuadCurve2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * <code>RectangularShape</code> is the base class for a number of {@link Shape}
     * objects whose geometry is defined by a rectangular frame. This class does not
     * directly specify any specific geometry by itself, but merely provides
     * manipulation methods inherited by a whole category of <code>Shape</code>
     * objects. The manipulation methods provided by this class can be used to query
     * and modify the rectangular frame, which provides a reference for the
     * subclasses to define their geometry.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class RectangularShape implements java.awt.Shape, java.lang.Cloneable {
        constructor();
        /**
         * Returns the X coordinate of the upper-left corner of the framing
         * rectangle in <code>double</code> precision.
         *
         * @return {number} the X coordinate of the upper-left corner of the framing
         * rectangle.
         * @since 1.2
         */
        abstract getX(): number;
        /**
         * Returns the Y coordinate of the upper-left corner of the framing
         * rectangle in <code>double</code> precision.
         *
         * @return {number} the Y coordinate of the upper-left corner of the framing
         * rectangle.
         * @since 1.2
         */
        abstract getY(): number;
        /**
         * Returns the width of the framing rectangle in <code>double</code>
         * precision.
         *
         * @return {number} the width of the framing rectangle.
         * @since 1.2
         */
        abstract getWidth(): number;
        /**
         * Returns the height of the framing rectangle in <code>double</code>
         * precision.
         *
         * @return {number} the height of the framing rectangle.
         * @since 1.2
         */
        abstract getHeight(): number;
        /**
         * Returns the smallest X coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the smallest X coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMinX(): number;
        /**
         * Returns the smallest Y coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the smallest Y coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMinY(): number;
        /**
         * Returns the largest X coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the largest X coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMaxX(): number;
        /**
         * Returns the largest Y coordinate of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the largest Y coordinate of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getMaxY(): number;
        /**
         * Returns the X coordinate of the center of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the X coordinate of the center of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getCenterX(): number;
        /**
         * Returns the Y coordinate of the center of the framing rectangle of the
         * <code>Shape</code> in <code>double</code> precision.
         *
         * @return {number} the Y coordinate of the center of the framing rectangle of the
         * <code>Shape</code>.
         * @since 1.2
         */
        getCenterY(): number;
        /**
         * Returns the framing {@link Rectangle2D} that defines the overall shape of
         * this object.
         *
         * @return {java.awt.geom.Rectangle2D} a <code>Rectangle2D</code>, specified in <code>double</code>
         * coordinates.
         * @see #setFrame(double, double, double, double)
         * @see #setFrame(Point2D, Dimension2D)
         * @see #setFrame(Rectangle2D)
         * @since 1.2
         */
        getFrame(): java.awt.geom.Rectangle2D;
        /**
         * Determines whether the <code>RectangularShape</code> is empty. When the
         * <code>RectangularShape</code> is empty, it encloses no area.
         *
         * @return {boolean} <code>true</code> if the <code>RectangularShape</code> is empty;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        abstract isEmpty(): boolean;
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * Sets the location and size of the framing rectangle of this
         * <code>Shape</code> to the specified rectangular values.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the specified
         * rectangular shape
         * @param {number} y
         * the Y coordinate of the upper-left corner of the specified
         * rectangular shape
         * @param {number} w
         * the width of the specified rectangular shape
         * @param {number} h
         * the height of the specified rectangular shape
         * @see #getFrame
         * @since 1.2
         */
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        setFrame$java_awt_geom_Point2D$java_awt_geom_Dimension2D(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D): void;
        setFrame$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
        setFrameFromDiagonal$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Sets the diagonal of the framing rectangle of this <code>Shape</code>
         * based on the two specified coordinates. The framing rectangle is used by
         * the subclasses of <code>RectangularShape</code> to define their geometry.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified diagonal
         * @param {number} y1
         * the Y coordinate of the start point of the specified diagonal
         * @param {number} x2
         * the X coordinate of the end point of the specified diagonal
         * @param {number} y2
         * the Y coordinate of the end point of the specified diagonal
         * @since 1.2
         */
        setFrameFromDiagonal(x1?: any, y1?: any, x2?: any, y2?: any): any;
        setFrameFromDiagonal$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        setFrameFromCenter$double$double$double$double(centerX: number, centerY: number, cornerX: number, cornerY: number): void;
        /**
         * Sets the framing rectangle of this <code>Shape</code> based on the
         * specified center point coordinates and corner point coordinates. The
         * framing rectangle is used by the subclasses of
         * <code>RectangularShape</code> to define their geometry.
         *
         * @param {number} centerX
         * the X coordinate of the specified center point
         * @param {number} centerY
         * the Y coordinate of the specified center point
         * @param {number} cornerX
         * the X coordinate of the specified corner point
         * @param {number} cornerY
         * the Y coordinate of the specified corner point
         * @since 1.2
         */
        setFrameFromCenter(centerX?: any, centerY?: any, cornerX?: any, cornerY?: any): any;
        setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D(center: java.awt.geom.Point2D, corner: java.awt.geom.Point2D): void;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @return {java.awt.Rectangle}
         */
        getBounds(): java.awt.Rectangle;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * object's boundary and provides access to a flattened view of the outline
         * of the <code>Shape</code> object's geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will be returned
         * by the iterator.
         * <p>
         * The amount of subdivision of the curved segments is controlled by the
         * <code>flatness</code> parameter, which specifies the maximum distance
         * that any point on the unflattened transformed curve can deviate from the
         * returned flattened path segments. An optional {@link AffineTransform} can
         * be specified so that the coordinates returned in the iteration are
         * transformed accordingly.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired.
         * @param {number} flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve
         * @return {*} a <code>PathIterator</code> object that provides access to the
         * <code>Shape</code> object's flattened geometry.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        abstract contains(x?: any, y?: any, w?: any, h?: any): any;
        abstract getBounds2D(): any;
        abstract intersects(x?: any, y?: any, w?: any, h?: any): any;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>CubicCurve2D</code> class defines a cubic parametric curve segment
     * in {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects which store a 2D
     * cubic curve segment. The actual storage representation of the coordinates is
     * left to the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class CubicCurve2D implements java.awt.Shape, java.lang.Cloneable {
        constructor();
        /**
         * Returns the X coordinate of the start point in double precision.
         *
         * @return {number} the X coordinate of the start point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in double precision.
         *
         * @return {number} the Y coordinate of the start point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start point.
         *
         * @return {java.awt.geom.Point2D} a {@code Point2D} that is the start point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the first control point in double precision.
         *
         * @return {number} the X coordinate of the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlX1(): number;
        /**
         * Returns the Y coordinate of the first control point in double precision.
         *
         * @return {number} the Y coordinate of the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlY1(): number;
        /**
         * Returns the first control point.
         *
         * @return {java.awt.geom.Point2D} a {@code Point2D} that is the first control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the second control point in double precision.
         *
         * @return {number} the X coordinate of the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlX2(): number;
        /**
         * Returns the Y coordinate of the second control point in double precision.
         *
         * @return {number} the Y coordinate of the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlY2(): number;
        /**
         * Returns the second control point.
         *
         * @return {java.awt.geom.Point2D} a {@code Point2D} that is the second control point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getCtrlP2(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in double precision.
         *
         * @return {number} the X coordinate of the end point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in double precision.
         *
         * @return {number} the Y coordinate of the end point of the {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end point.
         *
         * @return {java.awt.geom.Point2D} a {@code Point2D} that is the end point of the
         * {@code CubicCurve2D}.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points and control points of this curve to
         * the specified double coordinates.
         *
         * @param {number} x1
         * the X coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param {number} y1
         * the Y coordinate used to set the start point of this
         * {@code CubicCurve2D}
         * @param {number} ctrlx1
         * the X coordinate used to set the first control point of this
         * {@code CubicCurve2D}
         * @param {number} ctrly1
         * the Y coordinate used to set the first control point of this
         * {@code CubicCurve2D}
         * @param {number} ctrlx2
         * the X coordinate used to set the second control point of this
         * {@code CubicCurve2D}
         * @param {number} ctrly2
         * the Y coordinate used to set the second control point of this
         * {@code CubicCurve2D}
         * @param {number} x2
         * the X coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @param {number} y2
         * the Y coordinate used to set the end point of this
         * {@code CubicCurve2D}
         * @since 1.2
         */
        setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
        setCurve$double_A$int(coords: number[], offset: number): void;
        setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, cp1: java.awt.geom.Point2D, cp2: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        setCurve$java_awt_geom_Point2D_A$int(pts: java.awt.geom.Point2D[], offset: number): void;
        setCurve$java_awt_geom_CubicCurve2D(c: CubicCurve2D): void;
        static getFlatnessSq$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): number;
        /**
         * Returns the square of the flatness of the cubic curve specified by the
         * indicated control points. The flatness is the maximum distance of a
         * control point from the line connecting the end points.
         *
         * @param {number} x1
         * the X coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param {number} y1
         * the Y coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param {number} ctrlx1
         * the X coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrly1
         * the Y coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrlx2
         * the X coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrly2
         * the Y coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param {number} x2
         * the X coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @param {number} y2
         * the Y coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @return {number} the square of the flatness of the {@code CubicCurve2D}
         * represented by the specified coordinates.
         * @since 1.2
         */
        static getFlatnessSq(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): number;
        static getFlatness$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): number;
        /**
         * Returns the flatness of the cubic curve specified by the indicated
         * control points. The flatness is the maximum distance of a control point
         * from the line connecting the end points.
         *
         * @param {number} x1
         * the X coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param {number} y1
         * the Y coordinate that specifies the start point of a
         * {@code CubicCurve2D}
         * @param {number} ctrlx1
         * the X coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrly1
         * the Y coordinate that specifies the first control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrlx2
         * the X coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param {number} ctrly2
         * the Y coordinate that specifies the second control point of a
         * {@code CubicCurve2D}
         * @param {number} x2
         * the X coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @param {number} y2
         * the Y coordinate that specifies the end point of a
         * {@code CubicCurve2D}
         * @return {number} the flatness of the {@code CubicCurve2D} represented by the
         * specified coordinates.
         * @since 1.2
         */
        static getFlatness(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): number;
        static getFlatnessSq$double_A$int(coords: number[], offset: number): number;
        static getFlatness$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the square of the flatness of this curve. The flatness is the
         * maximum distance of a control point from the line connecting the end
         * points.
         *
         * @return {number} the square of the flatness of this curve.
         * @since 1.2
         */
        getFlatnessSq(): number;
        /**
         * Returns the flatness of this curve. The flatness is the maximum distance
         * of a control point from the line connecting the end points.
         *
         * @return {number} the flatness of this curve.
         * @since 1.2
         */
        getFlatness(): number;
        /**
         * Subdivides this cubic curve and stores the resulting two subdivided
         * curves into the left and right curve parameters. Either or both of the
         * left and right objects may be the same as this object or null.
         *
         * @param {java.awt.geom.CubicCurve2D} left
         * the cubic curve object for storing for the left or first half
         * of the subdivided curve
         * @param {java.awt.geom.CubicCurve2D} right
         * the cubic curve object for storing for the right or second
         * half of the subdivided curve
         * @since 1.2
         */
        subdivide(left: CubicCurve2D, right: CubicCurve2D): void;
        static subdivide$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D(src: CubicCurve2D, left: CubicCurve2D, right: CubicCurve2D): void;
        static subdivide$double_A$int$double_A$int$double_A$int(src: number[], srcoff: number, left: number[], leftoff: number, right: number[], rightoff: number): void;
        /**
         * Subdivides the cubic curve specified by the coordinates stored in the
         * <code>src</code> array at indices <code>srcoff</code> through (
         * <code>srcoff</code>&nbsp;+&nbsp;7) and stores the resulting two
         * subdivided curves into the two result arrays at the corresponding
         * indices. Either or both of the <code>left</code> and <code>right</code>
         * arrays may be <code>null</code> or a reference to the same array as the
         * <code>src</code> array. Note that the last point in the first subdivided
         * curve is the same as the first point in the second subdivided curve.
         * Thus, it is possible to pass the same array for <code>left</code> and
         * <code>right</code> and to use offsets, such as <code>rightoff</code>
         * equals (<code>leftoff</code> + 6), in order to avoid allocating extra
         * storage for this common point.
         *
         * @param {double[]} src
         * the array holding the coordinates for the source curve
         * @param {number} srcoff
         * the offset into the array of the beginning of the the 6 source
         * coordinates
         * @param {double[]} left
         * the array for storing the coordinates for the first half of
         * the subdivided curve
         * @param {number} leftoff
         * the offset into the array of the beginning of the the 6 left
         * coordinates
         * @param {double[]} right
         * the array for storing the coordinates for the second half of
         * the subdivided curve
         * @param {number} rightoff
         * the offset into the array of the beginning of the the 6 right
         * coordinates
         * @since 1.2
         */
        static subdivide(src?: any, srcoff?: any, left?: any, leftoff?: any, right?: any, rightoff?: any): any;
        static solveCubic$double_A(eqn: number[]): number;
        static solveCubic$double_A$double_A(eqn: number[], res: number[]): number;
        /**
         * Solve the cubic whose coefficients are in the <code>eqn</code> array and
         * place the non-complex roots into the <code>res</code> array, returning
         * the number of roots. The cubic solved is represented by the equation: eqn
         * = {c, b, a, d} dx^3 + ax^2 + bx + c = 0 A return value of -1 is used to
         * distinguish a constant equation, which may be always 0 or never 0, from
         * an equation which has no zeroes.
         *
         * @param {double[]} eqn
         * the specified array of coefficients to use to solve the cubic
         * equation
         * @param {double[]} res
         * the array that contains the non-complex roots resulting from
         * the solution of the cubic equation
         * @return {number} the number of roots, or -1 if the equation is a constant
         * @since 1.3
         */
        static solveCubic(eqn?: any, res?: any): number;
        static fixRoots(eqn: number[], res: number[], num: number): number;
        static refineRootWithHint(eqn: number[], min: number, max: number, t: number): number;
        static bisectRootWithHint(eqn: number[], x0: number, xe: number, hint: number): number;
        static bisectRoot(eqn: number[], x0: number, xe: number): number;
        static inInterval(t: number, min: number, max: number): boolean;
        static within(x: number, y: number, err: number): boolean;
        static iszero(x: number, err: number): boolean;
        static oppositeSigns(x1: number, x2: number): boolean;
        static solveEqn(eqn: number[], order: number, t: number): number;
        static getRootUpperBound(eqn: number[]): number;
        contains$double$double(x: number, y: number): boolean;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        rectCrossings(x: number, y: number, w: number, h: number): number;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @return {java.awt.Rectangle}
         */
        getBounds(): java.awt.Rectangle;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Return an iteration object that defines the boundary of the flattened
         * shape. The iterator for this class is not multi-threaded safe, which
         * means that this <code>CubicCurve2D</code> class does not guarantee that
         * modifications to the geometry of this <code>CubicCurve2D</code> object do
         * not affect any iterations of that geometry that are already in process.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param {number} flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points
         * @return {*} the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>CubicCurve2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        abstract getBounds2D(): any;
    }
    namespace CubicCurve2D {
        /**
         * Constructs and initializes a {@code CubicCurve2D} from the specified
         * {@code float} coordinates.
         *
         * @param {number} x1
         * the X coordinate for the start point of the resulting
         * {@code CubicCurve2D}
         * @param {number} y1
         * the Y coordinate for the start point of the resulting
         * {@code CubicCurve2D}
         * @param {number} ctrlx1
         * the X coordinate for the first control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrly1
         * the Y coordinate for the first control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrlx2
         * the X coordinate for the second control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrly2
         * the Y coordinate for the second control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} x2
         * the X coordinate for the end point of the resulting
         * {@code CubicCurve2D}
         * @param {number} y2
         * the Y coordinate for the end point of the resulting
         * {@code CubicCurve2D}
         * @since 1.2
         * @class
         * @extends java.awt.geom.CubicCurve2D
         */
        class Float extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx1: number;
            /**
             * The Y coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly1: number;
            /**
             * The X coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx2: number;
            /**
             * The Y coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly2: number;
            /**
             * The X coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
            setCurve$float$float$float$float$float$float$float$float(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points and control points of this curve
             * to the specified {@code float} coordinates.
             *
             * @param {number} x1
             * the X coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param {number} y1
             * the Y coordinate used to set the start point of this
             * {@code CubicCurve2D}
             * @param {number} ctrlx1
             * the X coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param {number} ctrly1
             * the Y coordinate used to set the first control point of
             * this {@code CubicCurve2D}
             * @param {number} ctrlx2
             * the X coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param {number} ctrly2
             * the Y coordinate used to set the second control point of
             * this {@code CubicCurve2D}
             * @param {number} x2
             * the X coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @param {number} y2
             * the Y coordinate used to set the end point of this
             * {@code CubicCurve2D}
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a {@code CubicCurve2D} from the specified
         * {@code double} coordinates.
         *
         * @param {number} x1
         * the X coordinate for the start point of the resulting
         * {@code CubicCurve2D}
         * @param {number} y1
         * the Y coordinate for the start point of the resulting
         * {@code CubicCurve2D}
         * @param {number} ctrlx1
         * the X coordinate for the first control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrly1
         * the Y coordinate for the first control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrlx2
         * the X coordinate for the second control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} ctrly2
         * the Y coordinate for the second control point of the
         * resulting {@code CubicCurve2D}
         * @param {number} x2
         * the X coordinate for the end point of the resulting
         * {@code CubicCurve2D}
         * @param {number} y2
         * the Y coordinate for the end point of the resulting
         * {@code CubicCurve2D}
         * @since 1.2
         * @class
         * @extends java.awt.geom.CubicCurve2D
         */
        class Double extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx1: number;
            /**
             * The Y coordinate of the first control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly1: number;
            /**
             * The X coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx2: number;
            /**
             * The Y coordinate of the second control point of the cubic curve
             * segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly2: number;
            /**
             * The X coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the cubic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlP2(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setCurve$double$double$double$double$double$double$double$double(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x1
             * @param {number} y1
             * @param {number} ctrlx1
             * @param {number} ctrly1
             * @param {number} ctrlx2
             * @param {number} ctrly2
             * @param {number} x2
             * @param {number} y2
             */
            setCurve(x1?: any, y1?: any, ctrlx1?: any, ctrly1?: any, ctrlx2?: any, ctrly2?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * Constructs an instance of <code>NoninvertibleTransformException</code>
     * with the specified detail message.
     *
     * @param {string} s
     * the detail message
     * @since 1.2
     * @class
     * @extends java.lang.Exception
     */
    class NoninvertibleTransformException extends java.lang.Exception {
        constructor(s: string);
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Area</code> class creates an area geometry from the specified
     * {@link Shape} object. The geometry is explicitly closed, if the
     * <code>Shape</code> is not already closed. The fill rule (even-odd or
     * winding) specified by the geometry of the <code>Shape</code> is used to
     * determine the resulting enclosed area.
     *
     * @param {*} s
     * the <code>Shape</code> from which the area is constructed
     * @throws NullPointerException
     * if <code>s</code> is null
     * @since 1.2
     * @class
     */
    class Area implements java.awt.Shape, java.lang.Cloneable {
        static EmptyCurves: java.util.Vector<any>;
        static EmptyCurves_$LI$(): java.util.Vector<any>;
        curves: java.util.Vector<any>;
        constructor(s?: any);
        static pathToCurves(pi: java.awt.geom.PathIterator): java.util.Vector<any>;
        /**
         * Adds the shape of the specified <code>Area</code> to the shape of this
         * <code>Area</code>. The resulting shape of this <code>Area</code> will
         * include the union of both shapes, or all areas that were contained in
         * either this or the specified <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.add(a2);
         *
         * a1(before)     +         a2         =     a1(after)
         *
         * ################     ################     ################
         * ##############         ##############     ################
         * ############             ############     ################
         * ##########                 ##########     ################
         * ########                     ########     ################
         * ######                         ######     ######    ######
         * ####                             ####     ####        ####
         * ##                                 ##     ##            ##
         * </pre>
         *
         * @param {java.awt.geom.Area} rhs
         * the <code>Area</code> to be added to the current shape
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        add(rhs: Area): void;
        /**
         * Subtracts the shape of the specified <code>Area</code> from the shape of
         * this <code>Area</code>. The resulting shape of this <code>Area</code>
         * will include areas that were contained only in this <code>Area</code> and
         * not in the specified <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.subtract(a2);
         *
         * a1(before)     -         a2         =     a1(after)
         *
         * ################     ################
         * ##############         ##############     ##
         * ############             ############     ####
         * ##########                 ##########     ######
         * ########                     ########     ########
         * ######                         ######     ######
         * ####                             ####     ####
         * ##                                 ##     ##
         * </pre>
         *
         * @param {java.awt.geom.Area} rhs
         * the <code>Area</code> to be subtracted from the current shape
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        subtract(rhs: Area): void;
        /**
         * Sets the shape of this <code>Area</code> to the intersection of its
         * current shape and the shape of the specified <code>Area</code>. The
         * resulting shape of this <code>Area</code> will include only areas that
         * were contained in both this <code>Area</code> and also in the specified
         * <code>Area</code>.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.intersect(a2);
         *
         * a1(before)   intersect     a2         =     a1(after)
         *
         * ################     ################     ################
         * ##############         ##############       ############
         * ############             ############         ########
         * ##########                 ##########           ####
         * ########                     ########
         * ######                         ######
         * ####                             ####
         * ##                                 ##
         * </pre>
         *
         * @param {java.awt.geom.Area} rhs
         * the <code>Area</code> to be intersected with this
         * <code>Area</code>
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        intersect(rhs: Area): void;
        /**
         * Sets the shape of this <code>Area</code> to be the combined area of its
         * current shape and the shape of the specified <code>Area</code>, minus
         * their intersection. The resulting shape of this <code>Area</code> will
         * include only areas that were contained in either this <code>Area</code>
         * or in the specified <code>Area</code>, but not in both.
         *
         * <pre>
         * // Example:
         * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
         * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
         * a1.exclusiveOr(a2);
         *
         * a1(before)    xor        a2         =     a1(after)
         *
         * ################     ################
         * ##############         ##############     ##            ##
         * ############             ############     ####        ####
         * ##########                 ##########     ######    ######
         * ########                     ########     ################
         * ######                         ######     ######    ######
         * ####                             ####     ####        ####
         * ##                                 ##     ##            ##
         * </pre>
         *
         * @param {java.awt.geom.Area} rhs
         * the <code>Area</code> to be exclusive ORed with this
         * <code>Area</code>.
         * @throws NullPointerException
         * if <code>rhs</code> is null
         * @since 1.2
         */
        exclusiveOr(rhs: Area): void;
        /**
         * Removes all of the geometry from this <code>Area</code> and restores it
         * to an empty area.
         *
         * @since 1.2
         */
        reset(): void;
        /**
         * Tests whether this <code>Area</code> object encloses any area.
         *
         * @return {boolean} <code>true</code> if this <code>Area</code> object represents an
         * empty area; <code>false</code> otherwise.
         * @since 1.2
         */
        isEmpty(): boolean;
        /**
         * Tests whether this <code>Area</code> consists entirely of straight edged
         * polygonal geometry.
         *
         * @return {boolean} <code>true</code> if the geometry of this <code>Area</code>
         * consists entirely of line segments; <code>false</code> otherwise.
         * @since 1.2
         */
        isPolygonal(): boolean;
        /**
         * Tests whether this <code>Area</code> is rectangular in shape.
         *
         * @return {boolean} <code>true</code> if the geometry of this <code>Area</code> is
         * rectangular in shape; <code>false</code> otherwise.
         * @since 1.2
         */
        isRectangular(): boolean;
        /**
         * Tests whether this <code>Area</code> is comprised of a single closed
         * subpath. This method returns <code>true</code> if the path contains 0 or
         * 1 subpaths, or <code>false</code> if the path contains more than 1
         * subpath. The subpaths are counted by the number of
         * {@link PathIterator#SEG_MOVETO} segments that appear in the
         * path.
         *
         * @return {boolean} <code>true</code> if the <code>Area</code> is comprised of a
         * single basic geometry; <code>false</code> otherwise.
         * @since 1.2
         */
        isSingular(): boolean;
        cachedBounds: java.awt.geom.Rectangle2D;
        invalidateBounds(): void;
        getCachedBounds(): java.awt.geom.Rectangle2D;
        /**
         * Returns a high precision bounding {@link Rectangle2D} that completely
         * encloses this <code>Area</code>.
         * <p>
         * The Area class will attempt to return the tightest bounding box possible
         * for the Shape. The bounding box will not be padded to include the control
         * points of curves in the outline of the Shape, but should tightly fit the
         * actual geometry of the outline itself.
         *
         * @return {java.awt.geom.Rectangle2D} the bounding <code>Rectangle2D</code> for the <code>Area</code>.
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Returns a bounding {@link Rectangle} that completely encloses this
         * <code>Area</code>.
         * <p>
         * The Area class will attempt to return the tightest bounding box possible
         * for the Shape. The bounding box will not be padded to include the control
         * points of curves in the outline of the Shape, but should tightly fit the
         * actual geometry of the outline itself. Since the returned object
         * represents the bounding box with integers, the bounding box can only be
         * as tight as the nearest integer coordinates that encompass the geometry
         * of the Shape.
         *
         * @return {java.awt.Rectangle} the bounding <code>Rectangle</code> for the <code>Area</code>.
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns an exact copy of this <code>Area</code> object.
         *
         * @return {*} Created clone object
         * @since 1.2
         */
        clone(): any;
        /**
         * Tests whether the geometries of the two <code>Area</code> objects are
         * equal. This method will return false if the argument is null.
         *
         * @param {java.awt.geom.Area} other
         * the <code>Area</code> to be compared to this <code>Area</code>
         * @return {boolean} <code>true</code> if the two geometries are equal;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        equals(other: Area): boolean;
        /**
         * Transforms the geometry of this <code>Area</code> using the specified
         * {@link AffineTransform}. The geometry is transformed in place, which
         * permanently changes the enclosed area defined by this object.
         *
         * @param {java.awt.geom.AffineTransform} t
         * the transformation used to transform the area
         * @throws NullPointerException
         * if <code>t</code> is null
         * @since 1.2
         */
        transform(t: java.awt.geom.AffineTransform): void;
        /**
         * Creates a new <code>Area</code> object that contains the same geometry as
         * this <code>Area</code> transformed by the specified
         * <code>AffineTransform</code>. This <code>Area</code> object is unchanged.
         *
         * @param {java.awt.geom.AffineTransform} t
         * the specified <code>AffineTransform</code> used to transform
         * the new <code>Area</code>
         * @throws NullPointerException
         * if <code>t</code> is null
         * @return {java.awt.geom.Area} a new <code>Area</code> object representing the transformed
         * geometry.
         * @since 1.2
         */
        createTransformedArea(t: java.awt.geom.AffineTransform): Area;
        contains$double$double(x: number, y: number): boolean;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Creates a <code>PathIterator</code> for the flattened outline of this
         * <code>Area</code> object. Only uncurved path segments represented by the
         * SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types are returned by the
         * iterator. This <code>Area</code> object is unchanged.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param {number} flatness
         * the maximum amount that the control points for a given curve
         * can vary from colinear before a subdivided curve is replaced
         * by a straight line connecting the end points
         * @return {*} the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Area</code>, one segment at a time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
    }
    class AreaIterator implements java.awt.geom.PathIterator {
        transform: java.awt.geom.AffineTransform;
        curves: java.util.Vector<any>;
        index: number;
        prevcurve: sun.awt.geom.Curve;
        thiscurve: sun.awt.geom.Curve;
        constructor(curves: java.util.Vector<any>, at: java.awt.geom.AffineTransform);
        getWindingRule(): number;
        isDone(): boolean;
        next(): void;
        currentSegment$float_A(coords: number[]): number;
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>QuadCurve2D</code> class defines a quadratic parametric curve
     * segment in {@code (x,y)} coordinate space.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * quadratic curve segment. The actual storage representation of the coordinates
     * is left to the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    abstract class QuadCurve2D implements java.awt.Shape, java.lang.Cloneable {
        constructor();
        /**
         * Returns the X coordinate of the start point in <code>double</code> in
         * precision.
         *
         * @return {number} the X coordinate of the start point.
         * @since 1.2
         */
        abstract getX1(): number;
        /**
         * Returns the Y coordinate of the start point in <code>double</code>
         * precision.
         *
         * @return {number} the Y coordinate of the start point.
         * @since 1.2
         */
        abstract getY1(): number;
        /**
         * Returns the start point.
         *
         * @return {java.awt.geom.Point2D} a <code>Point2D</code> that is the start point of this
         * <code>QuadCurve2D</code>.
         * @since 1.2
         */
        abstract getP1(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the control point in <code>double</code>
         * precision.
         *
         * @return {number} X coordinate the control point
         * @since 1.2
         */
        abstract getCtrlX(): number;
        /**
         * Returns the Y coordinate of the control point in <code>double</code>
         * precision.
         *
         * @return {number} the Y coordinate of the control point.
         * @since 1.2
         */
        abstract getCtrlY(): number;
        /**
         * Returns the control point.
         *
         * @return {java.awt.geom.Point2D} a <code>Point2D</code> that is the control point of this
         * <code>Point2D</code>.
         * @since 1.2
         */
        abstract getCtrlPt(): java.awt.geom.Point2D;
        /**
         * Returns the X coordinate of the end point in <code>double</code>
         * precision.
         *
         * @return {number} the x coordinate of the end point.
         * @since 1.2
         */
        abstract getX2(): number;
        /**
         * Returns the Y coordinate of the end point in <code>double</code>
         * precision.
         *
         * @return {number} the Y coordinate of the end point.
         * @since 1.2
         */
        abstract getY2(): number;
        /**
         * Returns the end point.
         *
         * @return {java.awt.geom.Point2D} a <code>Point</code> object that is the end point of this
         * <code>Point2D</code>.
         * @since 1.2
         */
        abstract getP2(): java.awt.geom.Point2D;
        setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
        /**
         * Sets the location of the end points and control point of this curve to
         * the specified <code>double</code> coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} ctrlx
         * the X coordinate of the control point
         * @param {number} ctrly
         * the Y coordinate of the control point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         */
        setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
        setCurve$double_A$int(coords: number[], offset: number): void;
        setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, cp: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        setCurve$java_awt_geom_Point2D_A$int(pts: java.awt.geom.Point2D[], offset: number): void;
        setCurve$java_awt_geom_QuadCurve2D(c: QuadCurve2D): void;
        static getFlatnessSq$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): number;
        /**
         * Returns the square of the flatness, or maximum distance of a control
         * point from the line connecting the end points, of the quadratic curve
         * specified by the indicated control points.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} ctrlx
         * the X coordinate of the control point
         * @param {number} ctrly
         * the Y coordinate of the control point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @return {number} the square of the flatness of the quadratic curve defined by the
         * specified coordinates.
         * @since 1.2
         */
        static getFlatnessSq(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): number;
        static getFlatness$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): number;
        /**
         * Returns the flatness, or maximum distance of a control point from the
         * line connecting the end points, of the quadratic curve specified by the
         * indicated control points.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} ctrlx
         * the X coordinate of the control point
         * @param {number} ctrly
         * the Y coordinate of the control point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @return {number} the flatness of the quadratic curve defined by the specified
         * coordinates.
         * @since 1.2
         */
        static getFlatness(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): number;
        static getFlatnessSq$double_A$int(coords: number[], offset: number): number;
        static getFlatness$double_A$int(coords: number[], offset: number): number;
        /**
         * Returns the square of the flatness, or maximum distance of a control
         * point from the line connecting the end points, of this
         * <code>QuadCurve2D</code>.
         *
         * @return {number} the square of the flatness of this <code>QuadCurve2D</code>.
         * @since 1.2
         */
        getFlatnessSq(): number;
        /**
         * Returns the flatness, or maximum distance of a control point from the
         * line connecting the end points, of this <code>QuadCurve2D</code>.
         *
         * @return {number} the flatness of this <code>QuadCurve2D</code>.
         * @since 1.2
         */
        getFlatness(): number;
        /**
         * Subdivides this <code>QuadCurve2D</code> and stores the resulting two
         * subdivided curves into the <code>left</code> and <code>right</code> curve
         * parameters. Either or both of the <code>left</code> and
         * <code>right</code> objects can be the same as this
         * <code>QuadCurve2D</code> or <code>null</code>.
         *
         * @param {java.awt.geom.QuadCurve2D} left
         * the <code>QuadCurve2D</code> object for storing the left or
         * first half of the subdivided curve
         * @param {java.awt.geom.QuadCurve2D} right
         * the <code>QuadCurve2D</code> object for storing the right or
         * second half of the subdivided curve
         * @since 1.2
         */
        subdivide(left: QuadCurve2D, right: QuadCurve2D): void;
        static subdivide$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D(src: QuadCurve2D, left: QuadCurve2D, right: QuadCurve2D): void;
        static subdivide$double_A$int$double_A$int$double_A$int(src: number[], srcoff: number, left: number[], leftoff: number, right: number[], rightoff: number): void;
        /**
         * Subdivides the quadratic curve specified by the coordinates stored in the
         * <code>src</code> array at indices <code>srcoff</code> through
         * <code>srcoff</code>&nbsp;+&nbsp;5 and stores the resulting two subdivided
         * curves into the two result arrays at the corresponding indices. Either or
         * both of the <code>left</code> and <code>right</code> arrays can be
         * <code>null</code> or a reference to the same array and offset as the
         * <code>src</code> array. Note that the last point in the first subdivided
         * curve is the same as the first point in the second subdivided curve.
         * Thus, it is possible to pass the same array for <code>left</code> and
         * <code>right</code> and to use offsets such that <code>rightoff</code>
         * equals <code>leftoff</code> + 4 in order to avoid allocating extra
         * storage for this common point.
         *
         * @param {double[]} src
         * the array holding the coordinates for the source curve
         * @param {number} srcoff
         * the offset into the array of the beginning of the the 6 source
         * coordinates
         * @param {double[]} left
         * the array for storing the coordinates for the first half of
         * the subdivided curve
         * @param {number} leftoff
         * the offset into the array of the beginning of the the 6 left
         * coordinates
         * @param {double[]} right
         * the array for storing the coordinates for the second half of
         * the subdivided curve
         * @param {number} rightoff
         * the offset into the array of the beginning of the the 6 right
         * coordinates
         * @since 1.2
         */
        static subdivide(src?: any, srcoff?: any, left?: any, leftoff?: any, right?: any, rightoff?: any): any;
        static solveQuadratic$double_A(eqn: number[]): number;
        static solveQuadratic$double_A$double_A(eqn: number[], res: number[]): number;
        /**
         * Solves the quadratic whose coefficients are in the <code>eqn</code> array
         * and places the non-complex roots into the <code>res</code> array,
         * returning the number of roots. The quadratic solved is represented by the
         * equation:
         *
         * <pre>
         * eqn = {C, B, A};
         * ax^2 + bx + c = 0
         * </pre>
         *
         * A return value of <code>-1</code> is used to distinguish a constant
         * equation, which might be always 0 or never 0, from an equation that has
         * no zeroes.
         *
         * @param {double[]} eqn
         * the specified array of coefficients to use to solve the
         * quadratic equation
         * @param {double[]} res
         * the array that contains the non-complex roots resulting from
         * the solution of the quadratic equation
         * @return {number} the number of roots, or <code>-1</code> if the equation is a
         * constant.
         * @since 1.3
         */
        static solveQuadratic(eqn?: any, res?: any): number;
        contains$double$double(x: number, y: number): boolean;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        /**
         * Fill an array with the coefficients of the parametric equation in t,
         * ready for solving against val with solveQuadratic. We currently have: val
         * = Py(t) = C1*(1-t)^2 + 2*CP*t*(1-t) + C2*t^2 = C1 - 2*C1*t + C1*t^2 +
         * 2*CP*t - 2*CP*t^2 + C2*t^2 = C1 + (2*CP - 2*C1)*t + (C1 - 2*CP + C2)*t^2
         * 0 = (C1 - val) + (2*CP - 2*C1)*t + (C1 - 2*CP + C2)*t^2 0 = C + Bt + At^2
         * C = C1 - val B = 2*CP - 2*C1 A = C1 - 2*CP + C2
         * @param {double[]} eqn
         * @param {number} val
         * @param {number} c1
         * @param {number} cp
         * @param {number} c2
         * @private
         */
        static fillEqn(eqn: number[], val: number, c1: number, cp: number, c2: number): void;
        /**
         * Evaluate the t values in the first num slots of the vals[] array and
         * place the evaluated values back into the same array. Only evaluate t
         * values that are within the range &lt;0, 1&gt;, including the 0 and 1 ends
         * of the range iff the include0 or include1 booleans are true. If an
         * "inflection" equation is handed in, then any points which represent a
         * point of inflection for that quadratic equation are also ignored.
         * @param {double[]} vals
         * @param {number} num
         * @param {boolean} include0
         * @param {boolean} include1
         * @param {double[]} inflect
         * @param {number} c1
         * @param {number} ctrl
         * @param {number} c2
         * @return {number}
         * @private
         */
        static evalQuadratic(vals: number[], num: number, include0: boolean, include1: boolean, inflect: number[], c1: number, ctrl: number, c2: number): number;
        static BELOW: number;
        static LOWEDGE: number;
        static INSIDE: number;
        static HIGHEDGE: number;
        static ABOVE: number;
        /**
         * Determine where coord lies with respect to the range from low to high. It
         * is assumed that low &lt;= high. The return value is one of the 5 values
         * BELOW, LOWEDGE, INSIDE, HIGHEDGE, or ABOVE.
         * @param {number} coord
         * @param {number} low
         * @param {number} high
         * @return {number}
         * @private
         */
        static getTag(coord: number, low: number, high: number): number;
        /**
         * Determine if the pttag represents a coordinate that is already in its
         * test range, or is on the border with either of the two opttags
         * representing another coordinate that is "towards the inside" of that test
         * range. In other words, are either of the two "opt" points
         * "drawing the pt inward"?
         * @param {number} pttag
         * @param {number} opt1tag
         * @param {number} opt2tag
         * @return {boolean}
         * @private
         */
        static inwards(pttag: number, opt1tag: number, opt2tag: number): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @return {java.awt.Rectangle}
         */
        getBounds(): java.awt.Rectangle;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of the flattened
         * shape of this <code>QuadCurve2D</code>. The iterator for this class is
         * not multi-threaded safe, which means that this <code>QuadCurve2D</code>
         * class does not guarantee that modifications to the geometry of this
         * <code>QuadCurve2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to apply to the
         * boundary of the shape
         * @param {number} flatness
         * the maximum distance that the control points for a subdivided
         * curve can be with respect to a line connecting the end points
         * of this curve before this curve is replaced by a straight line
         * connecting the end points.
         * @return {*} a <code>PathIterator</code> object that defines the flattened
         * boundary of the shape.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Creates a new object of the same class and with the same contents as this
         * object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.2
         */
        clone(): any;
        abstract getBounds2D(): any;
    }
    namespace QuadCurve2D {
        /**
         * Constructs and initializes a <code>QuadCurve2D</code> from the
         * specified {@code float} coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} ctrlx
         * the X coordinate of the control point
         * @param {number} ctrly
         * the Y coordinate of the control point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         * @class
         * @extends java.awt.geom.QuadCurve2D
         */
        class Float extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx: number;
            /**
             * The Y coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly: number;
            /**
             * The X coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlPt(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
            setCurve$float$float$float$float$float$float(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
            /**
             * Sets the location of the end points and control point of this curve
             * to the specified {@code float} coordinates.
             *
             * @param {number} x1
             * the X coordinate of the start point
             * @param {number} y1
             * the Y coordinate of the start point
             * @param {number} ctrlx
             * the X coordinate of the control point
             * @param {number} ctrly
             * the Y coordinate of the control point
             * @param {number} x2
             * the X coordinate of the end point
             * @param {number} y2
             * the Y coordinate of the end point
             * @since 1.2
             */
            setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a <code>QuadCurve2D</code> from the
         * specified {@code double} coordinates.
         *
         * @param {number} x1
         * the X coordinate of the start point
         * @param {number} y1
         * the Y coordinate of the start point
         * @param {number} ctrlx
         * the X coordinate of the control point
         * @param {number} ctrly
         * the Y coordinate of the control point
         * @param {number} x2
         * the X coordinate of the end point
         * @param {number} y2
         * the Y coordinate of the end point
         * @since 1.2
         * @class
         * @extends java.awt.geom.QuadCurve2D
         */
        class Double extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
            /**
             * The X coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x1: number;
            /**
             * The Y coordinate of the start point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y1: number;
            /**
             * The X coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrlx: number;
            /**
             * The Y coordinate of the control point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            ctrly: number;
            /**
             * The X coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            x2: number;
            /**
             * The Y coordinate of the end point of the quadratic curve segment.
             *
             * @since 1.2
             * @serial
             */
            y2: number;
            constructor(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY1(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP1(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getCtrlY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getCtrlPt(): java.awt.geom.Point2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY2(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Point2D}
             */
            getP2(): java.awt.geom.Point2D;
            setCurve$double$double$double$double$double$double(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x1
             * @param {number} y1
             * @param {number} ctrlx
             * @param {number} ctrly
             * @param {number} x2
             * @param {number} y2
             */
            setCurve(x1?: any, y1?: any, ctrlx?: any, ctrly?: any, x2?: any, y2?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of an ellipse through the
     * PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class EllipseIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(e: java.awt.geom.Ellipse2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        static CtrlVal: number;
        static pcv: number;
        static pcv_$LI$(): number;
        static ncv: number;
        static ncv_$LI$(): number;
        static ctrlpts: number[][];
        static ctrlpts_$LI$(): number[][];
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a rectangle through the
     * PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class RectIterator implements java.awt.geom.PathIterator {
        x: number;
        y: number;
        w: number;
        h: number;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(r: java.awt.geom.Rectangle2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * Constructs a new <code>FlatteningPathIterator</code> object that flattens
     * a path as it iterates over it. The <code>limit</code> parameter allows
     * you to control the maximum number of recursive subdivisions that the
     * iterator can make before it assumes that the curve is flat enough without
     * measuring against the <code>flatness</code> parameter. The flattened
     * iteration therefore never generates more than a maximum of
     * <code>(2^limit)</code> line segments per curve.
     *
     * @param {*} src
     * the original unflattened path being iterated over
     * @param {number} flatness
     * the maximum allowable distance between the control points and
     * the flattened curve
     * @param {number} limit
     * the maximum number of recursive subdivisions allowed for any
     * curved segment
     * @exception IllegalArgumentException
     * if <code>flatness</code> or <code>limit</code> is less
     * than zero
     * @class
     * @author Jim Graham
     */
    class FlatteningPathIterator implements java.awt.geom.PathIterator {
        static GROW_SIZE: number;
        src: java.awt.geom.PathIterator;
        squareflat: number;
        limit: number;
        hold: number[];
        curx: number;
        cury: number;
        movx: number;
        movy: number;
        holdType: number;
        holdEnd: number;
        holdIndex: number;
        levels: number[];
        levelIndex: number;
        done: boolean;
        constructor(src?: any, flatness?: any, limit?: any);
        /**
         * Returns the flatness of this iterator.
         *
         * @return {number} the flatness of this <code>FlatteningPathIterator</code>.
         */
        getFlatness(): number;
        /**
         * Returns the recursion limit of this iterator.
         *
         * @return {number} the recursion limit of this <code>FlatteningPathIterator</code>.
         */
        getRecursionLimit(): number;
        /**
         * Returns the winding rule for determining the interior of the path.
         *
         * @return {number} the winding rule of the original unflattened path being iterated
         * over.
         * @see PathIterator#WIND_EVEN_ODD
         * @see PathIterator#WIND_NON_ZERO
         */
        getWindingRule(): number;
        /**
         * Tests if the iteration is complete.
         *
         * @return {boolean} <code>true</code> if all the segments have been read;
         * <code>false</code> otherwise.
         */
        isDone(): boolean;
        ensureHoldCapacity(want: number): void;
        next$(): void;
        next$boolean(doNext: boolean): void;
        next(doNext?: any): any;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, or SEG_CLOSE. A float array of length 6 must be passed in and
         * can be used to store the coordinates of the point(s). Each point is
         * stored as a pair of float x,y coordinates. SEG_MOVETO and SEG_LINETO
         * types return one point, and SEG_CLOSE does not return any points.
         *
         * @param {float[]} coords
         * an array that holds the data returned from this method
         * @return {number} the path segment type of the current path segment.
         * @exception NoSuchElementException
         * if there are no more elements in the flattening path to be
         * returned.
         * @see PathIterator#SEG_MOVETO
         * @see PathIterator#SEG_LINETO
         * @see PathIterator#SEG_CLOSE
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt.geom {
    /**
     * A utility class to iterate over the path segments of a line segment through
     * the PathIterator interface.
     *
     * @author Jim Graham
     * @class
     */
    class LineIterator implements java.awt.geom.PathIterator {
        line: java.awt.geom.Line2D;
        affine: java.awt.geom.AffineTransform;
        index: number;
        constructor(l: java.awt.geom.Line2D, at: java.awt.geom.AffineTransform);
        /**
         * Return the winding rule for determining the insideness of the path.
         *
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Tests if there are more points to read.
         *
         * @return {boolean} true if there are more points to read
         */
        isDone(): boolean;
        /**
         * Moves the iterator to the next segment of the path forwards along the
         * primary direction of traversal as long as there are more points in that
         * direction.
         */
        next(): void;
        currentSegment$float_A(coords: number[]): number;
        /**
         * Returns the coordinates and type of the current path segment in the
         * iteration. The return value is the path segment type: SEG_MOVETO,
         * SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE. A float array of
         * length 6 must be passed in and may be used to store the coordinates of
         * the point(s). Each point is stored as a pair of float x,y coordinates.
         * SEG_MOVETO and SEG_LINETO types will return one point, SEG_QUADTO will
         * return two points, SEG_CUBICTO will return 3 points and SEG_CLOSE will
         * not return any points.
         *
         * @see #SEG_MOVETO
         * @see #SEG_LINETO
         * @see #SEG_QUADTO
         * @see #SEG_CUBICTO
         * @see #SEG_CLOSE
         * @param {float[]} coords
         * @return {number}
         */
        currentSegment(coords?: any): number;
        currentSegment$double_A(coords: number[]): number;
    }
}
declare namespace java.awt {
    /**
     * Constructs a border layout with the specified gaps between components.
     * The horizontal gap is specified by <code>hgap</code> and the vertical gap
     * is specified by <code>vgap</code>.
     *
     * @param {number} hgap
     * the horizontal gap.
     * @param {number} vgap
     * the vertical gap.
     * @class
     */
    class BorderLayout implements java.awt.LayoutManager2, java.io.Serializable {
        created: boolean;
        parent: java.awt.Container;
        table: HTMLTableElement;
        /**
         * Constructs a border layout with the horizontal gaps between components.
         * The horizontal gap is specified by <code>hgap</code>.
         *
         * @see #getHgap()
         * @see #setHgap(int)
         *
         * @serial
         */
        hgap: number;
        /**
         * Constructs a border layout with the vertical gaps between components. The
         * vertical gap is specified by <code>vgap</code>.
         *
         * @see #getVgap()
         * @see #setVgap(int)
         * @serial
         */
        vgap: number;
        /**
         * Constant to specify components location to be the north portion of the
         * border layout.
         *
         * @serial
         * @see #getChild(String, boolean)
         * @see #addLayoutComponent
         * @see #getLayoutAlignmentX
         * @see #getLayoutAlignmentY
         * @see #removeLayoutComponent
         */
        north: java.awt.Component;
        /**
         * Constant to specify components location to be the west portion of the
         * border layout.
         *
         * @serial
         * @see #getChild(String, boolean)
         * @see #addLayoutComponent
         * @see #getLayoutAlignmentX
         * @see #getLayoutAlignmentY
         * @see #removeLayoutComponent
         */
        west: java.awt.Component;
        /**
         * Constant to specify components location to be the east portion of the
         * border layout.
         *
         * @serial
         * @see #getChild(String, boolean)
         * @see #addLayoutComponent
         * @see #getLayoutAlignmentX
         * @see #getLayoutAlignmentY
         * @see #removeLayoutComponent
         */
        east: java.awt.Component;
        /**
         * Constant to specify components location to be the south portion of the
         * border layout.
         *
         * @serial
         * @see #getChild(String, boolean)
         * @see #addLayoutComponent
         * @see #getLayoutAlignmentX
         * @see #getLayoutAlignmentY
         * @see #removeLayoutComponent
         */
        south: java.awt.Component;
        /**
         * Constant to specify components location to be the center portion of the
         * border layout.
         *
         * @serial
         * @see #getChild(String, boolean)
         * @see #addLayoutComponent
         * @see #getLayoutAlignmentX
         * @see #getLayoutAlignmentY
         * @see #removeLayoutComponent
         */
        center: java.awt.Component;
        /**
         *
         * A relative positioning constant, that can be used instead of north,
         * south, east, west or center. mixing the two types of constants can lead
         * to unpredictable results. If you use both types, the relative constants
         * will take precedence. For example, if you add components using both the
         * <code>NORTH</code> and <code>BEFORE_FIRST_LINE</code> constants in a
         * container whose orientation is <code>LEFT_TO_RIGHT</code>, only the
         * <code>BEFORE_FIRST_LINE</code> will be layed out. This will be the same
         * for lastLine, firstItem, lastItem.
         *
         * @serial
         */
        firstLine: java.awt.Component;
        /**
         * A relative positioning constant, that can be used instead of north,
         * south, east, west or center. Please read Description for firstLine.
         *
         * @serial
         */
        lastLine: java.awt.Component;
        /**
         * A relative positioning constant, that can be used instead of north,
         * south, east, west or center. Please read Description for firstLine.
         *
         * @serial
         */
        firstItem: java.awt.Component;
        /**
         * A relative positioning constant, that can be used instead of north,
         * south, east, west or center. Please read Description for firstLine.
         *
         * @serial
         */
        lastItem: java.awt.Component;
        /**
         * The north layout constraint (top of container).
         */
        static NORTH: string;
        /**
         * The south layout constraint (bottom of container).
         */
        static SOUTH: string;
        /**
         * The east layout constraint (right side of container).
         */
        static EAST: string;
        /**
         * The west layout constraint (left side of container).
         */
        static WEST: string;
        /**
         * The center layout constraint (middle of container).
         */
        static CENTER: string;
        /**
         * Synonym for PAGE_START. Exists for compatibility with previous versions.
         * PAGE_START is preferred.
         *
         * @see #PAGE_START
         * @since 1.2
         */
        static BEFORE_FIRST_LINE: string;
        /**
         * Synonym for PAGE_END. Exists for compatibility with previous versions.
         * PAGE_END is preferred.
         *
         * @see #PAGE_END
         * @since 1.2
         */
        static AFTER_LAST_LINE: string;
        /**
         * Synonym for LINE_START. Exists for compatibility with previous versions.
         * LINE_START is preferred.
         *
         * @see #LINE_START
         * @since 1.2
         */
        static BEFORE_LINE_BEGINS: string;
        /**
         * Synonym for LINE_END. Exists for compatibility with previous versions.
         * LINE_END is preferred.
         *
         * @see #LINE_END
         * @since 1.2
         */
        static AFTER_LINE_ENDS: string;
        /**
         * The component comes before the first line of the layout's content. For
         * Western, left-to-right and top-to-bottom orientations, this is equivalent
         * to NORTH.
         *
         * @see java.awt.Component#getComponentOrientation
         * @since 1.4
         */
        static PAGE_START: string;
        static PAGE_START_$LI$(): string;
        /**
         * The component comes after the last line of the layout's content. For
         * Western, left-to-right and top-to-bottom orientations, this is equivalent
         * to SOUTH.
         *
         * @see java.awt.Component#getComponentOrientation
         * @since 1.4
         */
        static PAGE_END: string;
        static PAGE_END_$LI$(): string;
        /**
         * The component goes at the beginning of the line direction for the layout.
         * For Western, left-to-right and top-to-bottom orientations, this is
         * equivalent to WEST.
         *
         * @see java.awt.Component#getComponentOrientation
         * @since 1.4
         */
        static LINE_START: string;
        static LINE_START_$LI$(): string;
        /**
         * The component goes at the end of the line direction for the layout. For
         * Western, left-to-right and top-to-bottom orientations, this is equivalent
         * to EAST.
         *
         * @see java.awt.Component#getComponentOrientation
         * @since 1.4
         */
        static LINE_END: string;
        static LINE_END_$LI$(): string;
        static serialVersionUID: number;
        constructor(hgap?: any, vgap?: any);
        /**
         * Returns the horizontal gap between components.
         *
         * @since JDK1.1
         * @return {number}
         */
        getHgap(): number;
        /**
         * Sets the horizontal gap between components.
         *
         * @param {number} hgap
         * the horizontal gap between components
         * @since JDK1.1
         */
        setHgap(hgap: number): void;
        /**
         * Returns the vertical gap between components.
         *
         * @since JDK1.1
         * @return {number}
         */
        getVgap(): number;
        /**
         * Sets the vertical gap between components.
         *
         * @param {number} vgap
         * the vertical gap between components
         * @since JDK1.1
         */
        setVgap(vgap: number): void;
        addLayoutComponent$java_awt_Component$java_lang_Object(comp: java.awt.Component, constraints: any): void;
        addLayoutComponent$java_lang_String$java_awt_Component(name: string, comp: java.awt.Component): void;
        /**
         * @deprecated replaced by
         * <code>addLayoutComponent(Component, Object)</code>.
         * @param {string} name
         * @param {java.awt.Component} comp
         */
        addLayoutComponent(name?: any, comp?: any): any;
        /**
         * Removes the specified component from this border layout. This method is
         * called when a container calls its <code>remove</code> or
         * <code>removeAll</code> methods. Most applications do not call this method
         * directly.
         *
         * @param {java.awt.Component} comp
         * the component to be removed.
         * @see java.awt.Container#remove(java.awt.Component)
         * @see java.awt.Container#removeAll()
         */
        removeLayoutComponent(comp: java.awt.Component): void;
        getLayoutComponent$java_lang_Object(constraints: any): java.awt.Component;
        getLayoutComponent$java_awt_Container$java_lang_Object(target: java.awt.Container, constraints: any): java.awt.Component;
        getLayoutComponent(target?: any, constraints?: any): java.awt.Component;
        getConstraints(comp: java.awt.Component): any;
        getLayoutAlignmentX(parent: java.awt.Container): number;
        getLayoutAlignmentY(parent: java.awt.Container): number;
        invalidateLayout(target: java.awt.Container): void;
        layoutContainer(parent: java.awt.Container): void;
        add(component: java.awt.Component, position: number): void;
        /**
         * Returns a string representation of the state of this border layout.
         *
         * @return {string} a string representation of this border layout.
         */
        toString(): string;
    }
}
declare namespace java.awt {
    interface Paint {
    }
}
declare namespace java.awt {
    abstract class AbstractHTMLComponent implements java.awt.HTMLComponent {
        htmlElement: HTMLElement;
        /**
         *
         * @param {HTMLElement} htmlElement
         */
        bindHTML(htmlElement: HTMLElement): void;
        /**
         *
         * @return {HTMLElement}
         */
        getHTMLElement(): HTMLElement;
        /**
         *
         */
        initHTML(): void;
        abstract createHTML(): any;
        constructor();
    }
}
declare namespace java.awt {
    class NoLayout implements java.awt.LayoutManager {
        created: boolean;
        parent: java.awt.Container;
        constructor();
        /**
         *
         * @param {string} name
         * @param {java.awt.Component} component
         */
        addLayoutComponent(name: string, component: java.awt.Component): void;
        /**
         *
         * @param {java.awt.Component} component
         */
        removeLayoutComponent(component: java.awt.Component): void;
        /**
         *
         * @param {java.awt.Container} parent
         */
        layoutContainer(parent: java.awt.Container): void;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving container events.
     * The class that is interested in processing a container event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>ContainerAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * component using the component's <code>addContainerListener</code>
     * method. When the container's contents change because a component
     * has been added or removed, the relevant method in the listener object
     * is invoked, and the <code>ContainerEvent</code> is passed to it.
     * <P>
     * Container events are provided for notification purposes ONLY;
     * The AWT will automatically handle add and remove operations
     * internally so the program works properly regardless of
     * whether the program registers a {@code ContainerListener} or not.
     *
     * @see ContainerAdapter
     * @see ContainerEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/containerlistener.html">Tutorial: Writing a Container Listener</a>
     *
     * @author Tim Prinzing
     * @author Amy Fowler
     * @since 1.1
     * @class
     */
    interface ContainerListener extends java.util.EventListener {
        /**
         * Invoked when a component has been added to the container.
         * @param {java.awt.event.ContainerEvent} e
         */
        componentAdded(e: java.awt.event.ContainerEvent): any;
        /**
         * Invoked when a component has been removed from the container.
         * @param {java.awt.event.ContainerEvent} e
         */
        componentRemoved(e: java.awt.event.ContainerEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving "interesting" mouse events
     * (press, release, click, enter, and exit) on a component.
     * (To track mouse moves and mouse drags, use the
     * <code>MouseMotionListener</code>.)
     * <P>
     * The class that is interested in processing a mouse event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>MouseAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseListener</code>
     * method. A mouse event is generated when the mouse is pressed, released
     * clicked (pressed and released). A mouse event is also generated when
     * the mouse cursor enters or leaves a component. When a mouse event
     * occurs, the relevant method in the listener object is invoked, and
     * the <code>MouseEvent</code> is passed to it.
     *
     * @author Carl Quinn
     *
     * @see MouseAdapter
     * @see MouseEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mouselistener.html">Tutorial: Writing a Mouse Listener</a>
     *
     * @since 1.1
     * @class
     */
    interface MouseListener extends java.util.EventListener {
        /**
         * Invoked when the mouse button has been clicked (pressed
         * and released) on a component.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseClicked(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when a mouse button has been pressed on a component.
         * @param {java.awt.event.MouseEvent} e
         */
        mousePressed(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when a mouse button has been released on a component.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseReleased(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse enters a component.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseEntered(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse exits a component.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseExited(e: java.awt.event.MouseEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving mouse motion events on a component.
     * (For clicks and other mouse events, use the <code>MouseListener</code>.)
     * <P>
     * The class that is interested in processing a mouse motion event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>MouseMotionAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseMotionListener</code>
     * method. A mouse motion event is generated when the mouse is moved
     * or dragged. (Many such events will be generated). When a mouse motion event
     * occurs, the relevant method in the listener object is invoked, and
     * the <code>MouseEvent</code> is passed to it.
     *
     * @author Amy Fowler
     *
     * @see MouseMotionAdapter
     * @see MouseEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mousemotionlistener.html">Tutorial: Writing a Mouse Motion Listener</a>
     *
     * @since 1.1
     * @class
     */
    interface MouseMotionListener extends java.util.EventListener {
        /**
         * Invoked when a mouse button is pressed on a component and then
         * dragged.  <code>MOUSE_DRAGGED</code> events will continue to be
         * delivered to the component where the drag originated until the
         * mouse button is released (regardless of whether the mouse position
         * is within the bounds of the component).
         * <p>
         * Due to platform-dependent Drag&amp;Drop implementations,
         * <code>MOUSE_DRAGGED</code> events may not be delivered during a native
         * Drag&amp;Drop operation.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseDragged(e: java.awt.event.MouseEvent): any;
        /**
         * Invoked when the mouse cursor has been moved onto a component
         * but no buttons have been pushed.
         * @param {java.awt.event.MouseEvent} e
         */
        mouseMoved(e: java.awt.event.MouseEvent): any;
    }
}
declare namespace java.awt.event {
    interface ActionListener extends java.util.EventListener {
        actionPerformed(ae: java.awt.event.ActionEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving window events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Extend this class to create a <code>WindowEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>WindowListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a Window using the window's <code>addWindowListener</code>
     * method. When the window's status changes by virtue of being opened,
     * closed, activated or deactivated, iconified or deiconified,
     * the relevant method in the listener
     * object is invoked, and the <code>WindowEvent</code> is passed to it.
     *
     * @see WindowEvent
     * @see WindowListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/windowlistener.html">Tutorial: Writing a Window Listener</a>
     *
     * @author Carl Quinn
     * @author Amy Fowler
     * @author David Mendenhall
     * @since 1.1
     * @class
     */
    abstract class WindowAdapter implements java.awt.event.WindowListener, java.awt.event.WindowStateListener, java.awt.event.WindowFocusListener {
        /**
         * Invoked when a window has been opened.
         * @param {java.awt.event.WindowEvent} e
         */
        windowOpened(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window is in the process of being closed.
         * The close operation can be overridden at this point.
         * @param {java.awt.event.WindowEvent} e
         */
        windowClosing(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window has been closed.
         * @param {java.awt.event.WindowEvent} e
         */
        windowClosed(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window is iconified.
         * @param {java.awt.event.WindowEvent} e
         */
        windowIconified(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window is de-iconified.
         * @param {java.awt.event.WindowEvent} e
         */
        windowDeiconified(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window is activated.
         * @param {java.awt.event.WindowEvent} e
         */
        windowActivated(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window is de-activated.
         * @param {java.awt.event.WindowEvent} e
         */
        windowDeactivated(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when a window state is changed.
         * @since 1.4
         * @param {java.awt.event.WindowEvent} e
         */
        windowStateChanged(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when the Window is set to be the focused Window, which means
         * that the Window, or one of its subcomponents, will receive keyboard
         * events.
         *
         * @since 1.4
         * @param {java.awt.event.WindowEvent} e
         */
        windowGainedFocus(e: java.awt.event.WindowEvent): void;
        /**
         * Invoked when the Window is no longer the focused Window, which means
         * that keyboard events will no longer be delivered to the Window or any of
         * its subcomponents.
         *
         * @since 1.4
         * @param {java.awt.event.WindowEvent} e
         */
        windowLostFocus(e: java.awt.event.WindowEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving keyboard events (keystrokes).
     * The class that is interested in processing a keyboard event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>KeyAdapter</code> class
     * (overriding only the methods of interest).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addKeyListener</code>
     * method. A keyboard event is generated when a key is pressed, released,
     * or typed. The relevant method in the listener
     * object is then invoked, and the <code>KeyEvent</code> is passed to it.
     *
     * @author Carl Quinn
     *
     * @see KeyAdapter
     * @see KeyEvent
     * @see <a href="http://java.sun.com/docs/books/tutorial/post1.0/ui/keylistener.html">Tutorial: Writing a Key Listener</a>
     *
     * @since 1.1
     * @class
     */
    interface KeyListener extends java.util.EventListener {
        /**
         * Invoked when a key has been typed.
         * See the class description for {@link KeyEvent} for a definition of
         * a key typed event.
         * @param {java.awt.event.KeyEvent} e
         */
        keyTyped(e: java.awt.event.KeyEvent): any;
        /**
         * Invoked when a key has been pressed.
         * See the class description for {@link KeyEvent} for a definition of
         * a key pressed event.
         * @param {java.awt.event.KeyEvent} e
         */
        keyPressed(e: java.awt.event.KeyEvent): any;
        /**
         * Invoked when a key has been released.
         * See the class description for {@link KeyEvent} for a definition of
         * a key released event.
         * @param {java.awt.event.KeyEvent} e
         */
        keyReleased(e: java.awt.event.KeyEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving container events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Extend this class to create a <code>ContainerEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>ContainerListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's <code>addContainerListener</code>
     * method. When the container's contents change because a component has
     * been added or removed, the relevant method in the listener object is invoked,
     * and the <code>ContainerEvent</code> is passed to it.
     *
     * @see ContainerEvent
     * @see ContainerListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/containerlistener.html">Tutorial: Writing a Container Listener</a>
     *
     * @author Amy Fowler
     * @since 1.1
     * @class
     */
    abstract class ContainerAdapter implements java.awt.event.ContainerListener {
        /**
         * Invoked when a component has been added to the container.
         * @param {java.awt.event.ContainerEvent} e
         */
        componentAdded(e: java.awt.event.ContainerEvent): void;
        /**
         * Invoked when a component has been removed from the container.
         * @param {java.awt.event.ContainerEvent} e
         */
        componentRemoved(e: java.awt.event.ContainerEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving mouse motion events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Mouse motion events occur when a mouse is moved or dragged.
     * (Many such events will be generated in a normal program.
     * To track clicks and other mouse events, use the MouseAdapter.)
     * <P>
     * Extend this class to create a <code>MouseEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>MouseMotionListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's <code>addMouseMotionListener</code>
     * method. When the mouse is moved or dragged, the relevant method in the
     * listener object is invoked and the <code>MouseEvent</code> is passed to it.
     *
     * @author Amy Fowler
     *
     * @see MouseEvent
     * @see MouseMotionListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mousemotionlistener.html">Tutorial: Writing a Mouse Motion Listener</a>
     *
     * @since 1.1
     * @class
     */
    abstract class MouseMotionAdapter implements java.awt.event.MouseMotionListener {
        /**
         * Invoked when a mouse button is pressed on a component and then
         * dragged.  Mouse drag events will continue to be delivered to
         * the component where the first originated until the mouse button is
         * released (regardless of whether the mouse position is within the
         * bounds of the component).
         * @param {java.awt.event.MouseEvent} e
         */
        mouseDragged(e: java.awt.event.MouseEvent): void;
        /**
         * Invoked when the mouse button has been moved on a component
         * (with no buttons no down).
         * @param {java.awt.event.MouseEvent} e
         */
        mouseMoved(e: java.awt.event.MouseEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving item events.
     * The class that is interested in processing an item event
     * implements this interface. The object created with that
     * class is then registered with a component using the
     * component's <code>addItemListener</code> method. When an
     * item-selection event occurs, the listener object's
     * <code>itemStateChanged</code> method is invoked.
     *
     * @author Amy Fowler
     *
     * @see java.awt.ItemSelectable
     * @see ItemEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/itemlistener.html">Tutorial: Writing an Item Listener</a>
     *
     * @since 1.1
     * @class
     */
    interface ItemListener extends java.util.EventListener {
        /**
         * Invoked when an item has been selected or deselected by the user.
         * The code written for this method performs the operations
         * that need to occur when an item is selected (or deselected).
         * @param {java.awt.event.ItemEvent} e
         */
        itemStateChanged(e: java.awt.event.ItemEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving mouse events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Mouse events let you track when a mouse is pressed, released, clicked,
     * moved, dragged, when it enters a component, when it exits and
     * when a mouse wheel is moved.
     * <P>
     * Extend this class to create a {@code MouseEvent}
     * (including drag and motion events) or/and {@code MouseWheelEvent}
     * listener and override the methods for the events of interest. (If you implement the
     * {@code MouseListener},
     * {@code MouseMotionListener}
     * interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using the extended class and then register it with
     * a component using the component's {@code addMouseListener}
     * {@code addMouseMotionListener}, {@code addMouseWheelListener}
     * methods.
     * The relevant method in the listener object is invoked  and the {@code MouseEvent}
     * or {@code MouseWheelEvent}  is passed to it in following cases:
     * <ul>
     * <li>when a mouse button is pressed, released, or clicked (pressed and  released)
     * <li>when the mouse cursor enters or exits the component
     * <li>when the mouse wheel rotated, or mouse moved or dragged
     * </ul>
     *
     * @author Carl Quinn
     * @author Andrei Dmitriev
     *
     * @see MouseEvent
     * @see MouseWheelEvent
     * @see MouseListener
     * @see MouseMotionListener
     * @see MouseWheelListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/mouselistener.html">Tutorial: Writing a Mouse Listener</a>
     *
     * @since 1.1
     * @class
     */
    abstract class MouseAdapter implements java.awt.event.MouseListener, java.awt.event.MouseWheelListener, java.awt.event.MouseMotionListener {
        /**
         * {@inheritDoc}
         * @param {java.awt.event.MouseEvent} e
         */
        mouseClicked(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @param {java.awt.event.MouseEvent} e
         */
        mousePressed(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @param {java.awt.event.MouseEvent} e
         */
        mouseReleased(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @param {java.awt.event.MouseEvent} e
         */
        mouseEntered(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @param {java.awt.event.MouseEvent} e
         */
        mouseExited(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         * @param {java.awt.event.MouseWheelEvent} e
         */
        mouseWheelMoved(e: java.awt.event.MouseWheelEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         * @param {java.awt.event.MouseEvent} e
         */
        mouseDragged(e: java.awt.event.MouseEvent): void;
        /**
         * {@inheritDoc}
         * @since 1.6
         * @param {java.awt.event.MouseEvent} e
         */
        mouseMoved(e: java.awt.event.MouseEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving component events.
     * The class that is interested in processing a component event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>ComponentAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * component using the component's <code>addComponentListener</code>
     * method. When the component's size, location, or visibility
     * changes, the relevant method in the listener object is invoked,
     * and the <code>ComponentEvent</code> is passed to it.
     * <P>
     * Component events are provided for notification purposes ONLY;
     * The AWT will automatically handle component moves and resizes
     * internally so that GUI layout works properly regardless of
     * whether a program registers a <code>ComponentListener</code> or not.
     *
     * @see ComponentAdapter
     * @see ComponentEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
     *
     * @author Carl Quinn
     * @since 1.1
     * @class
     */
    interface ComponentListener extends java.util.EventListener {
        /**
         * Invoked when the component's size changes.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentResized(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component's position changes.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentMoved(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component has been made visible.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentShown(e: java.awt.event.ComponentEvent): any;
        /**
         * Invoked when the component has been made invisible.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentHidden(e: java.awt.event.ComponentEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving mouse wheel events on a component.
     * (For clicks and other mouse events, use the <code>MouseListener</code>.
     * For mouse movement and drags, use the <code>MouseMotionListener</code>.)
     * <P>
     * The class that is interested in processing a mouse wheel event
     * implements this interface (and all the methods it contains).
     * <P>
     * The listener object created from that class is then registered with a
     * component using the component's <code>addMouseWheelListener</code>
     * method. A mouse wheel event is generated when the mouse wheel is rotated.
     * When a mouse wheel event occurs, that object's <code>mouseWheelMoved</code>
     * method is invoked.
     * <p>
     * For information on how mouse wheel events are dispatched, see
     * the class description for {@link MouseWheelEvent}.
     *
     * @author Brent Christian
     * @see MouseWheelEvent
     * @since 1.4
     * @class
     */
    interface MouseWheelListener extends java.util.EventListener {
        /**
         * Invoked when the mouse wheel is rotated.
         * @see MouseWheelEvent
         * @param {java.awt.event.MouseWheelEvent} e
         */
        mouseWheelMoved(e: java.awt.event.MouseWheelEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving text events.
     *
     * The class that is interested in processing a text event
     * implements this interface. The object created with that
     * class is then registered with a component using the
     * component's <code>addTextListener</code> method. When the
     * component's text changes, the listener object's
     * <code>textValueChanged</code> method is invoked.
     *
     * @author Georges Saab
     *
     * @see TextEvent
     *
     * @since 1.1
     * @class
     */
    interface TextListener extends java.util.EventListener {
        /**
         * Invoked when the value of the text has changed.
         * The code written for this method performs the operations
         * that need to occur when text changes.
         * @param {java.awt.event.TextEvent} e
         */
        textValueChanged(e: java.awt.event.TextEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving window state events.
     * <p>
     * The class that is interested in processing a window state event
     * either implements this interface (and all the methods it contains)
     * or extends the abstract <code>WindowAdapter</code> class
     * (overriding only the methods of interest).
     * <p>
     * The listener object created from that class is then registered with
     * a window using the <code>Window</code>'s
     * <code>addWindowStateListener</code> method.  When the window's
     * state changes by virtue of being iconified, maximized etc., the
     * <code>windowStateChanged</code> method in the listener object is
     * invoked, and the <code>WindowEvent</code> is passed to it.
     *
     * @see java.awt.event.WindowAdapter
     * @see java.awt.event.WindowEvent
     *
     * @since 1.4
     * @class
     */
    interface WindowStateListener extends java.util.EventListener {
        /**
         * Invoked when window state is changed.
         * @param {java.awt.event.WindowEvent} e
         */
        windowStateChanged(e: java.awt.event.WindowEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving <code>WindowEvents</code>, including
     * <code>WINDOW_GAINED_FOCUS</code> and <code>WINDOW_LOST_FOCUS</code> events.
     * The class that is interested in processing a <code>WindowEvent</code>
     * either implements this interface (and
     * all the methods it contains) or extends the abstract
     * <code>WindowAdapter</code> class (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * <code>Window</code>
     * using the <code>Window</code>'s <code>addWindowFocusListener</code> method.
     * When the <code>Window</code>'s
     * status changes by virtue of it being opened, closed, activated, deactivated,
     * iconified, or deiconified, or by focus being transfered into or out of the
     * <code>Window</code>, the relevant method in the listener object is invoked,
     * and the <code>WindowEvent</code> is passed to it.
     *
     * @author David Mendenhall
     *
     * @see WindowAdapter
     * @see WindowEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/windowlistener.html">Tutorial: Writing a Window Listener</a>
     *
     * @since 1.4
     * @class
     */
    interface WindowFocusListener extends java.util.EventListener {
        /**
         * Invoked when the Window is set to be the focused Window, which means
         * that the Window, or one of its subcomponents, will receive keyboard
         * events.
         * @param {java.awt.event.WindowEvent} e
         */
        windowGainedFocus(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when the Window is no longer the focused Window, which means
         * that keyboard events will no longer be delivered to the Window or any of
         * its subcomponents.
         * @param {java.awt.event.WindowEvent} e
         */
        windowLostFocus(e: java.awt.event.WindowEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving window events.
     * The class that is interested in processing a window event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>WindowAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * Window using the window's <code>addWindowListener</code>
     * method. When the window's status changes by virtue of being opened,
     * closed, activated or deactivated, iconified or deiconified,
     * the relevant method in the listener object is invoked, and the
     * <code>WindowEvent</code> is passed to it.
     *
     * @author Carl Quinn
     *
     * @see WindowAdapter
     * @see WindowEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/windowlistener.html">Tutorial: How to Write Window Listeners</a>
     *
     * @since 1.1
     * @class
     */
    interface WindowListener extends java.util.EventListener {
        /**
         * Invoked the first time a window is made visible.
         * @param {java.awt.event.WindowEvent} e
         */
        windowOpened(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when the user attempts to close the window
         * from the window's system menu.
         * @param {java.awt.event.WindowEvent} e
         */
        windowClosing(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when a window has been closed as the result
         * of calling dispose on the window.
         * @param {java.awt.event.WindowEvent} e
         */
        windowClosed(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when a window is changed from a normal to a
         * minimized state. For many platforms, a minimized window
         * is displayed as the icon specified in the window's
         * iconImage property.
         * @see java.awt.Frame#setIconImage
         * @param {java.awt.event.WindowEvent} e
         */
        windowIconified(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when a window is changed from a minimized
         * to a normal state.
         * @param {java.awt.event.WindowEvent} e
         */
        windowDeiconified(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when the Window is set to be the active Window. Only a Frame or
         * a Dialog can be the active Window. The native windowing system may
         * denote the active Window or its children with special decorations, such
         * as a highlighted title bar. The active Window is always either the
         * focused Window, or the first Frame or Dialog that is an owner of the
         * focused Window.
         * @param {java.awt.event.WindowEvent} e
         */
        windowActivated(e: java.awt.event.WindowEvent): any;
        /**
         * Invoked when a Window is no longer the active Window. Only a Frame or a
         * Dialog can be the active Window. The native windowing system may denote
         * the active Window or its children with special decorations, such as a
         * highlighted title bar. The active Window is always either the focused
         * Window, or the first Frame or Dialog that is an owner of the focused
         * Window.
         * @param {java.awt.event.WindowEvent} e
         */
        windowDeactivated(e: java.awt.event.WindowEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving adjustment events.
     *
     * @author Amy Fowler
     * @since 1.1
     * @class
     */
    interface AdjustmentListener extends java.util.EventListener {
        /**
         * Invoked when the value of the adjustable has changed.
         * @param {java.awt.event.AdjustmentEvent} e
         */
        adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): any;
    }
}
declare namespace java.awt.event {
    /**
     * An abstract adapter class for receiving component events.
     * The methods in this class are empty. This class exists as
     * convenience for creating listener objects.
     * <P>
     * Extend this class to create a <code>ComponentEvent</code> listener
     * and override the methods for the events of interest. (If you implement the
     * <code>ComponentListener</code> interface, you have to define all of
     * the methods in it. This abstract class defines null methods for them
     * all, so you can only have to define methods for events you care about.)
     * <P>
     * Create a listener object using your class and then register it with a
     * component using the component's <code>addComponentListener</code>
     * method. When the component's size, location, or visibility
     * changes, the relevant method in the listener object is invoked,
     * and the <code>ComponentEvent</code> is passed to it.
     *
     * @see ComponentEvent
     * @see ComponentListener
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
     *
     * @author Carl Quinn
     * @since 1.1
     * @class
     */
    abstract class ComponentAdapter implements java.awt.event.ComponentListener {
        /**
         * Invoked when the component's size changes.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentResized(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component's position changes.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentMoved(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component has been made visible.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentShown(e: java.awt.event.ComponentEvent): void;
        /**
         * Invoked when the component has been made invisible.
         * @param {java.awt.event.ComponentEvent} e
         */
        componentHidden(e: java.awt.event.ComponentEvent): void;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * The listener interface for receiving keyboard focus events on
     * a component.
     * The class that is interested in processing a focus event
     * either implements this interface (and all the methods it
     * contains) or extends the abstract <code>FocusAdapter</code> class
     * (overriding only the methods of interest).
     * The listener object created from that class is then registered with a
     * component using the component's <code>addFocusListener</code>
     * method. When the component gains or loses the keyboard focus,
     * the relevant method in the listener object
     * is invoked, and the <code>FocusEvent</code> is passed to it.
     *
     * @see FocusAdapter
     * @see FocusEvent
     * @see <a href="http://docs.oracle.com/javase/tutorial/uiswing/events/focuslistener.html">Tutorial: Writing a Focus Listener</a>
     *
     * @author Carl Quinn
     * @since 1.1
     * @class
     */
    interface FocusListener extends java.util.EventListener {
        /**
         * Invoked when a component gains the keyboard focus.
         * @param {java.awt.event.FocusEvent} e
         */
        focusGained(e: java.awt.event.FocusEvent): any;
        /**
         * Invoked when a component loses the keyboard focus.
         * @param {java.awt.event.FocusEvent} e
         */
        focusLost(e: java.awt.event.FocusEvent): any;
    }
}
declare namespace java.awt {
    class Toolkit {
        static toolkit: Toolkit;
        images: java.util.Map<string, java.awt.Image>;
        static getProperty(key: string, defaultValue: string): string;
        static getDefaultToolkit(): Toolkit;
        createImage(filename: string): java.awt.Image;
        getImage(filename: string): java.awt.Image;
        constructor();
    }
}
declare namespace java.awt {
    class GridLayout implements java.awt.LayoutManager2 {
        created: boolean;
        parent: java.awt.Container;
        table: HTMLTableElement;
        currentPosition: number;
        cols: number;
        rows: number;
        constructor(rows: number, cols: number);
        addLayoutComponent$java_lang_String$java_awt_Component(name: string, component: java.awt.Component): void;
        /**
         *
         * @param {string} name
         * @param {java.awt.Component} component
         */
        addLayoutComponent(name?: any, component?: any): any;
        /**
         *
         * @param {java.awt.Component} component
         */
        removeLayoutComponent(component: java.awt.Component): void;
        /**
         *
         * @param {java.awt.Container} parent
         */
        layoutContainer(parent: java.awt.Container): void;
        addLayoutComponent$java_awt_Component$java_lang_Object(component: java.awt.Component, o: any): void;
        /**
         *
         * @param {java.awt.Container} container
         * @return {number}
         */
        getLayoutAlignmentX(container: java.awt.Container): number;
        /**
         *
         * @param {java.awt.Container} container
         * @return {number}
         */
        getLayoutAlignmentY(container: java.awt.Container): number;
        /**
         *
         * @param {java.awt.Container} container
         */
        invalidateLayout(container: java.awt.Container): void;
    }
}
declare namespace java.awt {
    /**
     * The <code>Shape</code> interface provides definitions for objects
     * that represent some form of geometric shape.  The <code>Shape</code>
     * is described by a {@link PathIterator} object, which can express the
     * outline of the <code>Shape</code> as well as a rule for determining
     * how the outline divides the 2D plane into interior and exterior
     * points.  Each <code>Shape</code> object provides callbacks to get the
     * bounding box of the geometry, determine whether points or
     * rectangles lie partly or entirely within the interior
     * of the <code>Shape</code>, and retrieve a <code>PathIterator</code>
     * object that describes the trajectory path of the <code>Shape</code>
     * outline.
     * <p>
     * <a name="def_insideness"><b>Definition of insideness:</b></a>
     * A point is considered to lie inside a
     * <code>Shape</code> if and only if:
     * <ul>
     * <li> it lies completely
     * inside the<code>Shape</code> boundary <i>or</i>
     * <li>
     * it lies exactly on the <code>Shape</code> boundary <i>and</i> the
     * space immediately adjacent to the
     * point in the increasing <code>X</code> direction is
     * entirely inside the boundary <i>or</i>
     * <li>
     * it lies exactly on a horizontal boundary segment <b>and</b> the
     * space immediately adjacent to the point in the
     * increasing <code>Y</code> direction is inside the boundary.
     * </ul>
     * <p>The <code>contains</code> and <code>intersects</code> methods
     * consider the interior of a <code>Shape</code> to be the area it
     * encloses as if it were filled.  This means that these methods
     * consider
     * unclosed shapes to be implicitly closed for the purpose of
     * determining if a shape contains or intersects a rectangle or if a
     * shape contains a point.
     *
     * @see java.awt.geom.PathIterator
     * @see java.awt.geom.AffineTransform
     * @see java.awt.geom.FlatteningPathIterator
     * @see java.awt.geom.GeneralPath
     *
     * @author Jim Graham
     * @since 1.2
     * @class
     */
    interface Shape {
        /**
         * Returns an integer {@link Rectangle} that completely encloses the
         * <code>Shape</code>.  Note that there is no guarantee that the
         * returned <code>Rectangle</code> is the smallest bounding box that
         * encloses the <code>Shape</code>, only that the <code>Shape</code>
         * lies entirely within the indicated  <code>Rectangle</code>.  The
         * returned <code>Rectangle</code> might also fail to completely
         * enclose the <code>Shape</code> if the <code>Shape</code> overflows
         * the limited range of the integer data type.  The
         * <code>getBounds2D</code> method generally returns a
         * tighter bounding box due to its greater flexibility in
         * representation.
         *
         * <p>
         * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
         * definition of insideness</a> can lead to situations where points
         * on the defining outline of the {@code shape} may not be considered
         * contained in the returned {@code bounds} object, but only in cases
         * where those points are also not considered contained in the original
         * {@code shape}.
         * </p>
         * <p>
         * If a {@code point} is inside the {@code shape} according to the
         * {@link #contains(double x, double y) contains(point)} method, then
         * it must be inside the returned {@code Rectangle} bounds object
         * according to the {@link #contains(double x, double y) contains(point)}
         * method of the {@code bounds}. Specifically:
         * </p>
         * <p>
         * {@code shape.contains(x,y)} requires {@code bounds.contains(x,y)}
         * </p>
         * <p>
         * If a {@code point} is not inside the {@code shape}, then it might
         * still be contained in the {@code bounds} object:
         * </p>
         * <p>
         * {@code bounds.contains(x,y)} does not imply {@code shape.contains(x,y)}
         * </p>
         * @return {java.awt.Rectangle} an integer <code>Rectangle</code> that completely encloses
         * the <code>Shape</code>.
         * @see #getBounds2D
         * @since 1.2
         */
        getBounds(): java.awt.Rectangle;
        /**
         * Returns a high precision and more accurate bounding box of
         * the <code>Shape</code> than the <code>getBounds</code> method.
         * Note that there is no guarantee that the returned
         * {@link Rectangle2D} is the smallest bounding box that encloses
         * the <code>Shape</code>, only that the <code>Shape</code> lies
         * entirely within the indicated <code>Rectangle2D</code>.  The
         * bounding box returned by this method is usually tighter than that
         * returned by the <code>getBounds</code> method and never fails due
         * to overflow problems since the return value can be an instance of
         * the <code>Rectangle2D</code> that uses double precision values to
         * store the dimensions.
         *
         * <p>
         * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
         * definition of insideness</a> can lead to situations where points
         * on the defining outline of the {@code shape} may not be considered
         * contained in the returned {@code bounds} object, but only in cases
         * where those points are also not considered contained in the original
         * {@code shape}.
         * </p>
         * <p>
         * If a {@code point} is inside the {@code shape} according to the
         * {@link #contains(Point2D p) contains(point)} method, then it must
         * be inside the returned {@code Rectangle2D} bounds object according
         * to the {@link #contains(Point2D p) contains(point)} method of the
         * {@code bounds}. Specifically:
         * </p>
         * <p>
         * {@code shape.contains(p)} requires {@code bounds.contains(p)}
         * </p>
         * <p>
         * If a {@code point} is not inside the {@code shape}, then it might
         * still be contained in the {@code bounds} object:
         * </p>
         * <p>
         * {@code bounds.contains(p)} does not imply {@code shape.contains(p)}
         * </p>
         * @return {java.awt.geom.Rectangle2D} an instance of <code>Rectangle2D</code> that is a
         * high-precision bounding box of the <code>Shape</code>.
         * @see #getBounds
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Tests if the interior of the <code>Shape</code> intersects the
         * interior of a specified rectangular area.
         * The rectangular area is considered to intersect the <code>Shape</code>
         * if any point is contained in both the interior of the
         * <code>Shape</code> and the specified rectangular area.
         * <p>
         * The {@code Shape.intersects()} method allows a {@code Shape}
         * implementation to conservatively return {@code true} when:
         * <ul>
         * <li>
         * there is a high probability that the rectangular area and the
         * <code>Shape</code> intersect, but
         * <li>
         * the calculations to accurately determine this intersection
         * are prohibitively expensive.
         * </ul>
         * This means that for some {@code Shapes} this method might
         * return {@code true} even though the rectangular area does not
         * intersect the {@code Shape}.
         * The {@link java.awt.geom.Area} class performs
         * more accurate computations of geometric intersection than most
         * {@code Shape} objects and therefore can be used if a more precise
         * answer is required.
         *
         * @param {number} x the X coordinate of the upper-left corner
         * of the specified rectangular area
         * @param {number} y the Y coordinate of the upper-left corner
         * of the specified rectangular area
         * @param {number} w the width of the specified rectangular area
         * @param {number} h the height of the specified rectangular area
         * @return {boolean} <code>true</code> if the interior of the <code>Shape</code> and
         * the interior of the rectangular area intersect, or are
         * both highly likely to intersect and intersection calculations
         * would be too expensive to perform; <code>false</code> otherwise.
         * @see java.awt.geom.Area
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        /**
         * Tests if the interior of the <code>Shape</code> entirely contains
         * the specified rectangular area.  All coordinates that lie inside
         * the rectangular area must lie within the <code>Shape</code> for the
         * entire rectangular area to be considered contained within the
         * <code>Shape</code>.
         * <p>
         * The {@code Shape.contains()} method allows a {@code Shape}
         * implementation to conservatively return {@code false} when:
         * <ul>
         * <li>
         * the <code>intersect</code> method returns <code>true</code> and
         * <li>
         * the calculations to determine whether or not the
         * <code>Shape</code> entirely contains the rectangular area are
         * prohibitively expensive.
         * </ul>
         * This means that for some {@code Shapes} this method might
         * return {@code false} even though the {@code Shape} contains
         * the rectangular area.
         * The {@link java.awt.geom.Area} class performs
         * more accurate geometric computations than most
         * {@code Shape} objects and therefore can be used if a more precise
         * answer is required.
         *
         * @param {number} x the X coordinate of the upper-left corner
         * of the specified rectangular area
         * @param {number} y the Y coordinate of the upper-left corner
         * of the specified rectangular area
         * @param {number} w the width of the specified rectangular area
         * @param {number} h the height of the specified rectangular area
         * @return {boolean} <code>true</code> if the interior of the <code>Shape</code>
         * entirely contains the specified rectangular area;
         * <code>false</code> otherwise or, if the <code>Shape</code>
         * contains the rectangular area and the
         * <code>intersects</code> method returns <code>true</code>
         * and the containment calculations would be too expensive to
         * perform.
         * @see java.awt.geom.Area
         * @see #intersects
         * @since 1.2
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * boundary and provides access to a flattened view of the
         * <code>Shape</code> outline geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types are
         * returned by the iterator.
         * <p>
         * If an optional <code>AffineTransform</code> is specified,
         * the coordinates returned in the iteration are transformed
         * accordingly.
         * <p>
         * The amount of subdivision of the curved segments is controlled
         * by the <code>flatness</code> parameter, which specifies the
         * maximum distance that any point on the unflattened transformed
         * curve can deviate from the returned flattened path segments.
         * Note that a limit on the accuracy of the flattened path might be
         * silently imposed, causing very small flattening parameters to be
         * treated as larger values.  This limit, if there is one, is
         * defined by the particular implementation that is used.
         * <p>
         * Each call to this method returns a fresh <code>PathIterator</code>
         * object that traverses the <code>Shape</code> object geometry
         * independently from any other <code>PathIterator</code> objects in use at
         * the same time.
         * <p>
         * It is recommended, but not guaranteed, that objects
         * implementing the <code>Shape</code> interface isolate iterations
         * that are in process from any changes that might occur to the original
         * object's geometry during such iterations.
         *
         * @param {java.awt.geom.AffineTransform} at an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param {number} flatness the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate
         * from any point on the original curve
         * @return {*} a new <code>PathIterator</code> that independently traverses
         * a flattened view of the geometry of the  <code>Shape</code>.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
    }
}
declare namespace java.awt {
    /**
     * Creates an sRGB color with the specified red, green, blue, and alpha
     * values in the range (0 - 255).
     *
     * @throws IllegalArgumentException
     * if <code>r</code>, <code>g</code>, <code>b</code> or
     * <code>a</code> are outside of the range 0 to 255, inclusive
     * @param {number} r
     * the red component
     * @param {number} g
     * the green component
     * @param {number} b
     * the blue component
     * @param {number} a
     * the alpha component
     * @see #getRed
     * @see #getGreen
     * @see #getBlue
     * @see #getAlpha
     * @see #getRGB
     * @class
     */
    class Color implements java.awt.Paint, java.io.Serializable {
        /**
         * The color white. In the default sRGB space.
         */
        static white: Color;
        static white_$LI$(): Color;
        /**
         * The color white. In the default sRGB space.
         *
         * @since 1.4
         */
        static WHITE: Color;
        static WHITE_$LI$(): Color;
        /**
         * The color light gray. In the default sRGB space.
         */
        static lightGray: Color;
        static lightGray_$LI$(): Color;
        /**
         * The color light gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static LIGHT_GRAY: Color;
        static LIGHT_GRAY_$LI$(): Color;
        /**
         * The color gray. In the default sRGB space.
         */
        static gray: Color;
        static gray_$LI$(): Color;
        /**
         * The color gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static GRAY: Color;
        static GRAY_$LI$(): Color;
        /**
         * The color dark gray. In the default sRGB space.
         */
        static darkGray: Color;
        static darkGray_$LI$(): Color;
        /**
         * The color dark gray. In the default sRGB space.
         *
         * @since 1.4
         */
        static DARK_GRAY: Color;
        static DARK_GRAY_$LI$(): Color;
        /**
         * The color black. In the default sRGB space.
         */
        static black: Color;
        static black_$LI$(): Color;
        /**
         * The color black. In the default sRGB space.
         *
         * @since 1.4
         */
        static BLACK: Color;
        static BLACK_$LI$(): Color;
        /**
         * The color red. In the default sRGB space.
         */
        static red: Color;
        static red_$LI$(): Color;
        /**
         * The color red. In the default sRGB space.
         *
         * @since 1.4
         */
        static RED: Color;
        static RED_$LI$(): Color;
        /**
         * The color pink. In the default sRGB space.
         */
        static pink: Color;
        static pink_$LI$(): Color;
        /**
         * The color pink. In the default sRGB space.
         *
         * @since 1.4
         */
        static PINK: Color;
        static PINK_$LI$(): Color;
        /**
         * The color orange. In the default sRGB space.
         */
        static orange: Color;
        static orange_$LI$(): Color;
        /**
         * The color orange. In the default sRGB space.
         *
         * @since 1.4
         */
        static ORANGE: Color;
        static ORANGE_$LI$(): Color;
        /**
         * The color yellow. In the default sRGB space.
         */
        static yellow: Color;
        static yellow_$LI$(): Color;
        /**
         * The color yellow. In the default sRGB space.
         *
         * @since 1.4
         */
        static YELLOW: Color;
        static YELLOW_$LI$(): Color;
        /**
         * The color green. In the default sRGB space.
         */
        static green: Color;
        static green_$LI$(): Color;
        /**
         * The color green. In the default sRGB space.
         *
         * @since 1.4
         */
        static GREEN: Color;
        static GREEN_$LI$(): Color;
        /**
         * The color magenta. In the default sRGB space.
         */
        static magenta: Color;
        static magenta_$LI$(): Color;
        /**
         * The color magenta. In the default sRGB space.
         *
         * @since 1.4
         */
        static MAGENTA: Color;
        static MAGENTA_$LI$(): Color;
        /**
         * The color cyan. In the default sRGB space.
         */
        static cyan: Color;
        static cyan_$LI$(): Color;
        /**
         * The color cyan. In the default sRGB space.
         *
         * @since 1.4
         */
        static CYAN: Color;
        static CYAN_$LI$(): Color;
        /**
         * The color blue. In the default sRGB space.
         */
        static blue: Color;
        static blue_$LI$(): Color;
        /**
         * The color blue. In the default sRGB space.
         *
         * @since 1.4
         */
        static BLUE: Color;
        static BLUE_$LI$(): Color;
        /**
         * The color value.
         *
         * @serial
         * @see #getRGB
         */
        value: number;
        /**
         * The color value in the default sRGB <code>ColorSpace</code> as
         * <code>float</code> components (no alpha). If <code>null</code> after
         * object construction, this must be an sRGB color constructed with 8-bit
         * precision, so compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBColorComponents
         * @see #getRGBComponents
         */
        frgbvalue: number[];
        /**
         * The color value in the native <code>ColorSpace</code> as
         * <code>float</code> components (no alpha). If <code>null</code> after
         * object construction, this must be an sRGB color constructed with 8-bit
         * precision, so compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBColorComponents
         * @see #getRGBComponents
         */
        fvalue: number[];
        /**
         * The alpha value as a <code>float</code> component. If
         * <code>frgbvalue</code> is <code>null</code>, this is not valid data, so
         * compute from the <code>int</code> color value.
         *
         * @serial
         * @see #getRGBComponents
         * @see #getComponents
         */
        falpha: number;
        static serialVersionUID: number;
        static testColorValueRange$int$int$int$int(r: number, g: number, b: number, a: number): void;
        /**
         * Checks the color integer components supplied for validity. Throws an
         * {@link IllegalArgumentException} if the value is out of range.
         *
         * @param {number} r
         * the Red component
         * @param {number} g
         * the Green component
         * @param {number} b
         * the Blue component
         * @param {number} a
         * @private
         */
        static testColorValueRange(r?: any, g?: any, b?: any, a?: any): any;
        static testColorValueRange$float$float$float$float(r: number, g: number, b: number, a: number): void;
        constructor(r?: any, g?: any, b?: any, a?: any);
        /**
         * Returns the red component in the range 0-255 in the default sRGB space.
         *
         * @return {number} the red component.
         * @see #getRGB
         */
        getRed(): number;
        /**
         * Returns the green component in the range 0-255 in the default sRGB space.
         *
         * @return {number} the green component.
         * @see #getRGB
         */
        getGreen(): number;
        /**
         * Returns the blue component in the range 0-255 in the default sRGB space.
         *
         * @return {number} the blue component.
         * @see #getRGB
         */
        getBlue(): number;
        /**
         * Returns the alpha component in the range 0-255.
         *
         * @return {number} the alpha component.
         * @see #getRGB
         */
        getAlpha(): number;
        /**
         * Returns the RGB value representing the color in the default sRGB. (Bits
         * 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are blue).
         *
         * @return {number} the RGB value of the color in the default sRGB
         * <code>ColorModel</code>.
         * @see java.awt.image.ColorModel#getRGBdefault
         * @see #getRed
         * @see #getGreen
         * @see #getBlue
         * @since JDK1.0
         */
        getRGB(): number;
        static FACTOR: number;
        /**
         * Creates a new <code>Color</code> that is a brighter version of this
         * <code>Color</code>.
         * <p>
         * This method applies an arbitrary scale factor to each of the three RGB
         * components of this <code>Color</code> to create a brighter version of
         * this <code>Color</code>. The {@code alpha} value is preserved. Although
         * <code>brighter</code> and <code>darker</code> are inverse operations, the
         * results of a series of invocations of these two methods might be
         * inconsistent because of rounding errors.
         *
         * @return {java.awt.Color} a new <code>Color</code> object that is a brighter version of
         * this <code>Color</code> with the same {@code alpha} value.
         * @see java.awt.Color#darker
         * @since JDK1.0
         */
        brighter(): Color;
        /**
         * Creates a new <code>Color</code> that is a darker version of this
         * <code>Color</code>.
         * <p>
         * This method applies an arbitrary scale factor to each of the three RGB
         * components of this <code>Color</code> to create a darker version of this
         * <code>Color</code>. The {@code alpha} value is preserved. Although
         * <code>brighter</code> and <code>darker</code> are inverse operations, the
         * results of a series of invocations of these two methods might be
         * inconsistent because of rounding errors.
         *
         * @return {java.awt.Color} a new <code>Color</code> object that is a darker version of this
         * <code>Color</code> with the same {@code alpha} value.
         * @see java.awt.Color#brighter
         * @since JDK1.0
         */
        darker(): Color;
        /**
         * Computes the hash code for this <code>Color</code>.
         *
         * @return {number} a hash code value for this object.
         * @since JDK1.0
         */
        hashCode(): number;
        /**
         * Determines whether another object is equal to this <code>Color</code>.
         * <p>
         * The result is <code>true</code> if and only if the argument is not
         * <code>null</code> and is a <code>Color</code> object that has the same
         * red, green, blue, and alpha values as this object.
         *
         * @param {*} obj
         * the object to test for equality with this <code>Color</code>
         * @return {boolean} <code>true</code> if the objects are the same; <code>false</code>
         * otherwise.
         * @since JDK1.0
         */
        equals(obj: any): boolean;
        /**
         * Returns a string representation of this <code>Color</code>. This method
         * is intended to be used only for debugging purposes. The content and
         * format of the returned string might vary between implementations. The
         * returned string might be empty but cannot be <code>null</code>.
         *
         * @return {string} a string representation of this <code>Color</code>.
         */
        toString(): string;
        /**
         * Converts a <code>String</code> to an integer and returns the specified
         * opaque <code>Color</code>. This method handles string formats that are
         * used to represent octal and hexadecimal numbers.
         *
         * @param {string} nm
         * a <code>String</code> that represents an opaque color as a
         * 24-bit integer
         * @return {java.awt.Color} the new <code>Color</code> object.
         * @see java.lang.Integer#decode
         * @exception NumberFormatException
         * if the specified string cannot be interpreted as a
         * decimal, octal, or hexadecimal integer.
         * @since JDK1.1
         */
        static decode(nm: string): Color;
        static getColor$java_lang_String(nm: string): Color;
        static getColor$java_lang_String$java_awt_Color(nm: string, v: Color): Color;
        /**
         * Finds a color in the system properties.
         * <p>
         * The first argument is treated as the name of a system property to be
         * obtained. The string value of this property is then interpreted as an
         * integer which is then converted to a <code>Color</code> object.
         * <p>
         * If the specified property is not found or cannot be parsed as an integer
         * then the <code>Color</code> specified by the second argument is returned
         * instead.
         *
         * @param {string} nm
         * the name of the color property
         * @param {java.awt.Color} v
         * the default <code>Color</code>
         * @return {java.awt.Color} the <code>Color</code> converted from the system property, or the
         * specified <code>Color</code>.
         * @see java.lang.System#getProperty(java.lang.String)
         * @see java.lang.Integer#getInteger(java.lang.String)
         * @see java.awt.Color#Color(int)
         * @since JDK1.0
         */
        static getColor(nm?: any, v?: any): Color;
        static getColor$java_lang_String$int(nm: string, v: number): Color;
        /**
         * Converts the components of a color, as specified by the HSB model, to an
         * equivalent set of values for the default RGB model.
         * <p>
         * The <code>saturation</code> and <code>brightness</code> components should
         * be floating-point values between zero and one (numbers in the range
         * 0.0-1.0). The <code>hue</code> component can be any floating-point
         * number. The floor of this number is subtracted from it to create a
         * fraction between 0 and 1. This fractional number is then multiplied by
         * 360 to produce the hue angle in the HSB color model.
         * <p>
         * The integer that is returned by <code>HSBtoRGB</code> encodes the value
         * of a color in bits 0-23 of an integer value that is the same format used
         * by the method {@link #getRGB() getRGB}. This integer can be supplied as
         * an argument to the <code>Color</code> constructor that takes a single
         * integer argument.
         *
         * @param {number} hue
         * the hue component of the color
         * @param {number} saturation
         * the saturation of the color
         * @param {number} brightness
         * the brightness of the color
         * @return {number} the RGB value of the color with the indicated hue, saturation,
         * and brightness.
         * @see java.awt.Color#getRGB()
         * @see java.awt.Color#Color(int)
         * @see java.awt.image.ColorModel#getRGBdefault()
         * @since JDK1.0
         */
        static HSBtoRGB(hue: number, saturation: number, brightness: number): number;
        /**
         * Converts the components of a color, as specified by the default RGB
         * model, to an equivalent set of values for hue, saturation, and brightness
         * that are the three components of the HSB model.
         * <p>
         * If the <code>hsbvals</code> argument is <code>null</code>, then a new
         * array is allocated to return the result. Otherwise, the method returns
         * the array <code>hsbvals</code>, with the values put into that array.
         *
         * @param {number} r
         * the red component of the color
         * @param {number} g
         * the green component of the color
         * @param {number} b
         * the blue component of the color
         * @param {float[]} hsbvals
         * the array used to return the three HSB values, or
         * <code>null</code>
         * @return {float[]} an array of three elements containing the hue, saturation, and
         * brightness (in that order), of the color with the indicated red,
         * green, and blue components.
         * @see java.awt.Color#getRGB()
         * @see java.awt.Color#Color(int)
         * @see java.awt.image.ColorModel#getRGBdefault()
         * @since JDK1.0
         */
        static RGBtoHSB(r: number, g: number, b: number, hsbvals: number[]): number[];
        /**
         * Creates a <code>Color</code> object based on the specified values for the
         * HSB color model.
         * <p>
         * The <code>s</code> and <code>b</code> components should be floating-point
         * values between zero and one (numbers in the range 0.0-1.0). The
         * <code>h</code> component can be any floating-point number. The floor of
         * this number is subtracted from it to create a fraction between 0 and 1.
         * This fractional number is then multiplied by 360 to produce the hue angle
         * in the HSB color model.
         *
         * @param {number} h
         * the hue component
         * @param {number} s
         * the saturation of the color
         * @param {number} b
         * the brightness of the color
         * @return {java.awt.Color} a <code>Color</code> object with the specified hue, saturation,
         * and brightness.
         * @since JDK1.0
         */
        static getHSBColor(h: number, s: number, b: number): Color;
        /**
         * Returns a <code>float</code> array containing the color and alpha
         * components of the <code>Color</code>, as represented in the default sRGB
         * color space. If <code>compArray</code> is <code>null</code>, an array of
         * length 4 is created for the return value. Otherwise,
         * <code>compArray</code> must have length 4 or greater, and it is filled in
         * with the components and returned.
         *
         * @param {float[]} compArray
         * an array that this method fills with color and alpha
         * components and returns
         * @return {float[]} the RGBA components in a <code>float</code> array.
         */
        getRGBComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing only the color components
         * of the <code>Color</code>, in the default sRGB color space. If
         * <code>compArray</code> is <code>null</code>, an array of length 3 is
         * created for the return value. Otherwise, <code>compArray</code> must have
         * length 3 or greater, and it is filled in with the components and
         * returned.
         *
         * @param {float[]} compArray
         * an array that this method fills with color components and
         * returns
         * @return {float[]} the RGB components in a <code>float</code> array.
         */
        getRGBColorComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing the color and alpha
         * components of the <code>Color</code>, in the <code>ColorSpace</code> of
         * the <code>Color</code>. If <code>compArray</code> is <code>null</code>,
         * an array with length equal to the number of components in the associated
         * <code>ColorSpace</code> plus one is created for the return value.
         * Otherwise, <code>compArray</code> must have at least this length and it
         * is filled in with the components and returned.
         *
         * @param {float[]} compArray
         * an array that this method fills with the color and alpha
         * components of this <code>Color</code> in its
         * <code>ColorSpace</code> and returns
         * @return {float[]} the color and alpha components in a <code>float</code> array.
         */
        getComponents(compArray: number[]): number[];
        /**
         * Returns a <code>float</code> array containing only the color components
         * of the <code>Color</code>, in the <code>ColorSpace</code> of the
         * <code>Color</code>. If <code>compArray</code> is <code>null</code>, an
         * array with length equal to the number of components in the associated
         * <code>ColorSpace</code> is created for the return value. Otherwise,
         * <code>compArray</code> must have at least this length and it is filled in
         * with the components and returned.
         *
         * @param {float[]} compArray
         * an array that this method fills with the color components of
         * this <code>Color</code> in its <code>ColorSpace</code> and
         * returns
         * @return {float[]} the color components in a <code>float</code> array.
         */
        getColorComponents(compArray: number[]): number[];
        /**
         * Returns the transparency mode for this <code>Color</code>. This is
         * required to implement the <code>Paint</code> interface.
         *
         * @return {number} this <code>Color</code> object's transparency mode.
         * @see Paint
         * @see Transparency
         * @see #createContext
         */
        getTransparency(): number;
        toHTML(): string;
    }
}
declare namespace java.awt {
    /**
     * Creates a new cursor object with the specified type.
     *
     * @param {number} type
     * the type of cursor
     * @throws IllegalArgumentException
     * if the specified cursor type is invalid
     * @class
     * @author Amy Fowler
     */
    class Cursor implements java.io.Serializable {
        /**
         * The default cursor type (gets set if no cursor is defined).
         */
        static DEFAULT_CURSOR: number;
        /**
         * The crosshair cursor type.
         */
        static CROSSHAIR_CURSOR: number;
        /**
         * The text cursor type.
         */
        static TEXT_CURSOR: number;
        /**
         * The wait cursor type.
         */
        static WAIT_CURSOR: number;
        /**
         * The south-west-resize cursor type.
         */
        static SW_RESIZE_CURSOR: number;
        /**
         * The south-east-resize cursor type.
         */
        static SE_RESIZE_CURSOR: number;
        /**
         * The north-west-resize cursor type.
         */
        static NW_RESIZE_CURSOR: number;
        /**
         * The north-east-resize cursor type.
         */
        static NE_RESIZE_CURSOR: number;
        /**
         * The north-resize cursor type.
         */
        static N_RESIZE_CURSOR: number;
        /**
         * The south-resize cursor type.
         */
        static S_RESIZE_CURSOR: number;
        /**
         * The west-resize cursor type.
         */
        static W_RESIZE_CURSOR: number;
        /**
         * The east-resize cursor type.
         */
        static E_RESIZE_CURSOR: number;
        /**
         * The hand cursor type.
         */
        static HAND_CURSOR: number;
        /**
         * The move cursor type.
         */
        static MOVE_CURSOR: number;
        /**
         * @deprecated As of JDK version 1.7, the {@link #getPredefinedCursor(int)}
         * method should be used instead.
         */
        static predefined: Cursor[];
        static predefined_$LI$(): Cursor[];
        /**
         * This field is a private replacement for 'predefined' array.
         */
        static predefinedPrivate: Cursor[];
        static predefinedPrivate_$LI$(): Cursor[];
        static cursorProperties: string[][];
        static cursorProperties_$LI$(): string[][];
        /**
         * The chosen cursor type initially set to the <code>DEFAULT_CURSOR</code>.
         *
         * @serial
         * @see #getType()
         */
        type: number;
        /**
         * The type associated with all custom cursors.
         */
        static CUSTOM_CURSOR: number;
        static serialVersionUID: number;
        /**
         * The user-visible name of the cursor.
         *
         * @serial
         * @see #getName()
         */
        name: string;
        /**
         * Returns a cursor object with the specified predefined type.
         *
         * @param {number} type
         * the type of predefined cursor
         * @return {java.awt.Cursor} the specified predefined cursor
         * @throws IllegalArgumentException
         * if the specified cursor type is invalid
         */
        static getPredefinedCursor(type: number): Cursor;
        /**
         * Returns a system-specific custom cursor object matching the specified
         * name. Cursor names are, for example: "Invalid.16x16"
         *
         * @param {string} name
         * a string describing the desired system-specific custom cursor
         * @return {java.awt.Cursor} the system specific custom cursor named
         * @exception HeadlessException
         * if <code>GraphicsEnvironment.isHeadless</code> returns
         * true
         */
        static getSystemCustomCursor(name: string): Cursor;
        /**
         * Return the system default cursor.
         * @return {java.awt.Cursor}
         */
        static getDefaultCursor(): Cursor;
        constructor(name?: any);
        /**
         * Returns the type for this cursor.
         * @return {number}
         */
        getType(): number;
        /**
         * Returns the name of this cursor.
         *
         * @return {string} a localized description of this cursor.
         * @since 1.2
         */
        getName(): string;
        /**
         * Returns a string representation of this cursor.
         *
         * @return {string} a string representation of this cursor.
         * @since 1.2
         */
        toString(): string;
    }
}
declare namespace javax.swing {
    /**
     * The editor component used for JComboBox components.
     *
     * @author Arnaud Weber
     * @class
     */
    interface ComboBoxEditor {
        /**
         * Return the component that should be added to the tree hierarchy for
         * this editor
         * @return {java.awt.Component}
         */
        getEditorComponent(): java.awt.Component;
        /**
         * Set the item that should be edited. Cancel any editing if necessary
         * @param {*} anObject
         */
        setItem(anObject: any): any;
        /**
         * Return the edited item
         * @return {*}
         */
        getItem(): any;
        /**
         * Ask the editor to start editing and to select everything
         */
        selectAll(): any;
        /**
         * Add an ActionListener. An action event is generated when the edited item changes
         * @param {*} l
         */
        addActionListener(l: java.awt.event.ActionListener): any;
        /**
         * Remove an ActionListener
         * @param {*} l
         */
        removeActionListener(l: java.awt.event.ActionListener): any;
    }
}
declare namespace javax.swing {
    interface ButtonModel extends java.awt.ItemSelectable {
        isArmed(): boolean;
        isSelected(): boolean;
        isEnabled(): boolean;
        isPressed(): boolean;
        isRollover(): boolean;
        setArmed(b: boolean): any;
        setSelected(b: boolean): any;
        setEnabled(b: boolean): any;
        setPressed(b: boolean): any;
        setRollover(b: boolean): any;
        setMnemonic(key: number): any;
        getMnemonic(): number;
        setActionCommand(s: string): any;
        getActionCommand(): string;
        setGroup(group: javax.swing.ButtonGroup): any;
        addActionListener(l: java.awt.event.ActionListener): any;
        removeActionListener(l: java.awt.event.ActionListener): any;
        addItemListener(l: java.awt.event.ItemListener): any;
        removeItemListener(l: java.awt.event.ItemListener): any;
        addChangeListener(l: javax.swing.event.ChangeListener): any;
        removeChangeListener(l: javax.swing.event.ChangeListener): any;
    }
}
declare namespace javax.swing {
    /**
     * Default data model for list selections.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Philip Milne
     * @author Hans Muller
     * @see ListSelectionModel
     * @class
     */
    class DefaultListSelectionModel implements javax.swing.ListSelectionModel, java.lang.Cloneable, java.io.Serializable {
        static MIN: number;
        static MAX: number;
        static MAX_$LI$(): number;
        selectionMode: number;
        minIndex: number;
        maxIndex: number;
        anchorIndex: number;
        leadIndex: number;
        firstAdjustedIndex: number;
        lastAdjustedIndex: number;
        isAdjusting: boolean;
        firstChangedIndex: number;
        lastChangedIndex: number;
        value: java.util.BitSet;
        listenerList: javax.swing.event.EventListenerList;
        leadAnchorNotificationEnabled: boolean;
        /**
         * {@inheritDoc}
         * @return {number}
         */
        getMinSelectionIndex(): number;
        /**
         * {@inheritDoc}
         * @return {number}
         */
        getMaxSelectionIndex(): number;
        /**
         * {@inheritDoc}
         * @return {boolean}
         */
        getValueIsAdjusting(): boolean;
        /**
         * {@inheritDoc}
         * @return {number}
         */
        getSelectionMode(): number;
        /**
         * {@inheritDoc}
         * @throws IllegalArgumentException {@inheritDoc}
         * @param {number} selectionMode
         */
        setSelectionMode(selectionMode: number): void;
        /**
         * {@inheritDoc}
         * @param {number} index
         * @return {boolean}
         */
        isSelectedIndex(index: number): boolean;
        /**
         * {@inheritDoc}
         * @return {boolean}
         */
        isSelectionEmpty(): boolean;
        /**
         * {@inheritDoc}
         * @param {*} l
         */
        addListSelectionListener(l: javax.swing.event.ListSelectionListener): void;
        /**
         * {@inheritDoc}
         * @param {*} l
         */
        removeListSelectionListener(l: javax.swing.event.ListSelectionListener): void;
        /**
         * Returns an array of all the list selection listeners
         * registered on this <code>DefaultListSelectionModel</code>.
         *
         * @return {javax.swing.event.ListSelectionListener[]} all of this model's <code>ListSelectionListener</code>s
         * or an empty
         * array if no list selection listeners are currently registered
         *
         * @see #addListSelectionListener
         * @see #removeListSelectionListener
         *
         * @since 1.4
         */
        getListSelectionListeners(): javax.swing.event.ListSelectionListener[];
        fireValueChanged$boolean(isAdjusting: boolean): void;
        fireValueChanged$int$int(firstIndex: number, lastIndex: number): void;
        fireValueChanged$int$int$boolean(firstIndex: number, lastIndex: number, isAdjusting: boolean): void;
        /**
         * @param {number} firstIndex the first index in the interval
         * @param {number} lastIndex the last index in the interval
         * @param {boolean} isAdjusting true if this is the final change in a series of
         * adjustments
         * @see EventListenerList
         */
        fireValueChanged(firstIndex?: any, lastIndex?: any, isAdjusting?: any): any;
        fireValueChanged$(): void;
        /**
         * Returns an array of all the objects currently registered as
         * <code><em>Foo</em>Listener</code>s
         * upon this model.
         * <code><em>Foo</em>Listener</code>s
         * are registered using the <code>add<em>Foo</em>Listener</code> method.
         * <p>
         * You can specify the <code>listenerType</code> argument
         * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
         * For example, you can query a <code>DefaultListSelectionModel</code>
         * instance <code>m</code>
         * for its list selection listeners
         * with the following code:
         *
         * <pre>ListSelectionListener[] lsls = (ListSelectionListener[])(m.getListeners(ListSelectionListener.class));</pre>
         *
         * If no such listeners exist,
         * this method returns an empty array.
         *
         * @param {java.lang.Class} listenerType  the type of listeners requested;
         * this parameter should specify an interface
         * that descends from <code>java.util.EventListener</code>
         * @return {T[]} an array of all objects registered as
         * <code><em>Foo</em>Listener</code>s
         * on this model,
         * or an empty array if no such
         * listeners have been added
         * @exception ClassCastException if <code>listenerType</code> doesn't
         * specify a class or interface that implements
         * <code>java.util.EventListener</code>
         *
         * @see #getListSelectionListeners
         *
         * @since 1.3
         */
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        markAsDirty(r: number): void;
        set(r: number): void;
        clear(r: number): void;
        /**
         * Sets the value of the leadAnchorNotificationEnabled flag.
         * @see             #isLeadAnchorNotificationEnabled()
         * @param {boolean} flag
         */
        setLeadAnchorNotificationEnabled(flag: boolean): void;
        /**
         * Returns the value of the <code>leadAnchorNotificationEnabled</code> flag.
         * When <code>leadAnchorNotificationEnabled</code> is true the model
         * generates notification events with bounds that cover all the changes to
         * the selection plus the changes to the lead and anchor indices.
         * Setting the flag to false causes a narrowing of the event's bounds to
         * include only the elements that have been selected or deselected since
         * the last change. Either way, the model continues to maintain the lead
         * and anchor variables internally. The default is true.
         * <p>
         * Note: It is possible for the lead or anchor to be changed without a
         * change to the selection. Notification of these changes is often
         * important, such as when the new lead or anchor needs to be updated in
         * the view. Therefore, caution is urged when changing the default value.
         *
         * @return  {boolean} the value of the <code>leadAnchorNotificationEnabled</code> flag
         * @see             #setLeadAnchorNotificationEnabled(boolean)
         */
        isLeadAnchorNotificationEnabled(): boolean;
        updateLeadAnchorIndices(anchorIndex: number, leadIndex: number): void;
        contains(a: number, b: number, i: number): boolean;
        changeSelection$int$int$int$int$boolean(clearMin: number, clearMax: number, setMin: number, setMax: number, clearFirst: boolean): void;
        changeSelection(clearMin?: any, clearMax?: any, setMin?: any, setMax?: any, clearFirst?: any): any;
        changeSelection$int$int$int$int(clearMin: number, clearMax: number, setMin: number, setMax: number): void;
        /**
         * {@inheritDoc}
         */
        clearSelection(): void;
        /**
         * Changes the selection to be between {@code index0} and {@code index1}
         * inclusive. {@code index0} doesn't have to be less than or equal to
         * {@code index1}.
         * <p>
         * In {@code SINGLE_SELECTION} selection mode, only the second index
         * is used.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change.
         * <p>
         * If either index is {@code -1}, this method does nothing and returns
         * without exception. Otherwise, if either index is less than {@code -1},
         * an {@code IndexOutOfBoundsException} is thrown.
         *
         * @param {number} index0 one end of the interval.
         * @param {number} index1 other end of the interval
         * @throws IndexOutOfBoundsException if either index is less than {@code -1}
         * (and neither index is {@code -1})
         * @see #addListSelectionListener
         */
        setSelectionInterval(index0: number, index1: number): void;
        /**
         * Changes the selection to be the set union of the current selection
         * and the indices between {@code index0} and {@code index1} inclusive.
         * <p>
         * In {@code SINGLE_SELECTION} selection mode, this is equivalent
         * to calling {@code setSelectionInterval}, and only the second index
         * is used. In {@code SINGLE_INTERVAL_SELECTION} selection mode, this
         * method behaves like {@code setSelectionInterval}, unless the given
         * interval is immediately adjacent to or overlaps the existing selection,
         * and can therefore be used to grow it.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change. Note that
         * {@code index0} doesn't have to be less than or equal to {@code index1}.
         * <p>
         * If either index is {@code -1}, this method does nothing and returns
         * without exception. Otherwise, if either index is less than {@code -1},
         * an {@code IndexOutOfBoundsException} is thrown.
         *
         * @param {number} index0 one end of the interval.
         * @param {number} index1 other end of the interval
         * @throws IndexOutOfBoundsException if either index is less than {@code -1}
         * (and neither index is {@code -1})
         * @see #addListSelectionListener
         * @see #setSelectionInterval
         */
        addSelectionInterval(index0: number, index1: number): void;
        /**
         * Changes the selection to be the set difference of the current selection
         * and the indices between {@code index0} and {@code index1} inclusive.
         * {@code index0} doesn't have to be less than or equal to {@code index1}.
         * <p>
         * In {@code SINGLE_INTERVAL_SELECTION} selection mode, if the removal
         * would produce two disjoint selections, the removal is extended through
         * the greater end of the selection. For example, if the selection is
         * {@code 0-10} and you supply indices {@code 5,6} (in any order) the
         * resulting selection is {@code 0-4}.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change.
         * <p>
         * If either index is {@code -1}, this method does nothing and returns
         * without exception. Otherwise, if either index is less than {@code -1},
         * an {@code IndexOutOfBoundsException} is thrown.
         *
         * @param {number} index0 one end of the interval
         * @param {number} index1 other end of the interval
         * @throws IndexOutOfBoundsException if either index is less than {@code -1}
         * (and neither index is {@code -1})
         * @see #addListSelectionListener
         */
        removeSelectionInterval(index0: number, index1: number): void;
        removeSelectionIntervalImpl(index0: number, index1: number, changeLeadAnchor: boolean): void;
        setState(index: number, state: boolean): void;
        /**
         * Insert length indices beginning before/after index. If the value
         * at index is itself selected and the selection mode is not
         * SINGLE_SELECTION, set all of the newly inserted items as selected.
         * Otherwise leave them unselected. This method is typically
         * called to sync the selection model with a corresponding change
         * in the data model.
         * @param {number} index
         * @param {number} length
         * @param {boolean} before
         */
        insertIndexInterval(index: number, length: number, before: boolean): void;
        /**
         * Remove the indices in the interval index0,index1 (inclusive) from
         * the selection model.  This is typically called to sync the selection
         * model width a corresponding change in the data model.  Note
         * that (as always) index0 need not be &lt;= index1.
         * @param {number} index0
         * @param {number} index1
         */
        removeIndexInterval(index0: number, index1: number): void;
        /**
         * {@inheritDoc}
         * @param {boolean} isAdjusting
         */
        setValueIsAdjusting(isAdjusting: boolean): void;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a <code>String</code> representation of this object
         */
        toString(): string;
        /**
         * Returns a clone of this selection model with the same selection.
         * <code>listenerLists</code> are not duplicated.
         *
         * @exception CloneNotSupportedException if the selection model does not
         * both (a) implement the Cloneable interface and (b) define a
         * <code>clone</code> method.
         * @return {*}
         */
        clone(): any;
        /**
         * {@inheritDoc}
         * @return {number}
         */
        getAnchorSelectionIndex(): number;
        /**
         * {@inheritDoc}
         * @return {number}
         */
        getLeadSelectionIndex(): number;
        /**
         * Set the anchor selection index, leaving all selection values unchanged.
         * If leadAnchorNotificationEnabled is true, send a notification covering
         * the old and new anchor cells.
         *
         * @see #getAnchorSelectionIndex
         * @see #setLeadSelectionIndex
         * @param {number} anchorIndex
         */
        setAnchorSelectionIndex(anchorIndex: number): void;
        /**
         * Set the lead selection index, leaving all selection values unchanged.
         * If leadAnchorNotificationEnabled is true, send a notification covering
         * the old and new lead cells.
         *
         * @param {number} leadIndex the new lead selection index
         *
         * @see #setAnchorSelectionIndex
         * @see #setLeadSelectionIndex
         * @see #getLeadSelectionIndex
         *
         * @since 1.5
         */
        moveLeadSelectionIndex(leadIndex: number): void;
        /**
         * Sets the lead selection index, ensuring that values between the
         * anchor and the new lead are either all selected or all deselected.
         * If the value at the anchor index is selected, first clear all the
         * values in the range [anchor, oldLeadIndex], then select all the values
         * values in the range [anchor, newLeadIndex], where oldLeadIndex is the old
         * leadIndex and newLeadIndex is the new one.
         * <p>
         * If the value at the anchor index is not selected, do the same thing in
         * reverse selecting values in the old range and deselecting values in the
         * new one.
         * <p>
         * Generate a single event for this change and notify all listeners.
         * For the purposes of generating minimal bounds in this event, do the
         * operation in a single pass; that way the first and last index inside the
         * ListSelectionEvent that is broadcast will refer to cells that actually
         * changed value because of this method. If, instead, this operation were
         * done in two steps the effect on the selection state would be the same
         * but two events would be generated and the bounds around the changed
         * values would be wider, including cells that had been first cleared only
         * to later be set.
         * <p>
         * This method can be used in the <code>mouseDragged</code> method
         * of a UI class to extend a selection.
         *
         * @see #getLeadSelectionIndex
         * @see #setAnchorSelectionIndex
         * @param {number} leadIndex
         */
        setLeadSelectionIndex(leadIndex: number): void;
        constructor();
    }
}
declare namespace javax.swing {
    /**
     * Drop modes, used to determine the method by which a component
     * tracks and indicates a drop location during drag and drop.
     *
     * @author Shannon Hickey
     * @see JTable#setDropMode
     * @see JList#setDropMode
     * @see JTree#setDropMode
     * @see javax.swing.text.JTextComponent#setDropMode
     * @since 1.6
     * @enum
     * @property {javax.swing.DropMode} USE_SELECTION
     * A component's own internal selection mechanism (or caret for text
     * components) should be used to track the drop location.
     * @property {javax.swing.DropMode} ON
     * The drop location should be tracked in terms of the index of
     * existing items. Useful for dropping on items in tables, lists,
     * and trees.
     * @property {javax.swing.DropMode} INSERT
     * The drop location should be tracked in terms of the position
     * where new data should be inserted. For components that manage
     * a list of items (list and tree for example), the drop location
     * should indicate the index where new data should be inserted.
     * For text components the location should represent a position
     * between characters. For components that manage tabular data
     * (table for example), the drop location should indicate
     * where to insert new rows, columns, or both, to accommodate
     * the dropped data.
     * @property {javax.swing.DropMode} INSERT_ROWS
     * The drop location should be tracked in terms of the row index
     * where new rows should be inserted to accommodate the dropped
     * data. This is useful for components that manage tabular data.
     * @property {javax.swing.DropMode} INSERT_COLS
     * The drop location should be tracked in terms of the column index
     * where new columns should be inserted to accommodate the dropped
     * data. This is useful for components that manage tabular data.
     * @property {javax.swing.DropMode} ON_OR_INSERT
     * This mode is a combination of <code>ON</code>
     * and <code>INSERT</code>, specifying that data can be
     * dropped on existing items, or in insert locations
     * as specified by <code>INSERT</code>.
     * @property {javax.swing.DropMode} ON_OR_INSERT_ROWS
     * This mode is a combination of <code>ON</code>
     * and <code>INSERT_ROWS</code>, specifying that data can be
     * dropped on existing items, or as insert rows
     * as specified by <code>INSERT_ROWS</code>.
     * @property {javax.swing.DropMode} ON_OR_INSERT_COLS
     * This mode is a combination of <code>ON</code>
     * and <code>INSERT_COLS</code>, specifying that data can be
     * dropped on existing items, or as insert columns
     * as specified by <code>INSERT_COLS</code>.
     * @class
     */
    enum DropMode {
        /**
         * A component's own internal selection mechanism (or caret for text
         * components) should be used to track the drop location.
         */
        USE_SELECTION = 0,
        /**
         * The drop location should be tracked in terms of the index of
         * existing items. Useful for dropping on items in tables, lists,
         * and trees.
         */
        ON = 1,
        /**
         * The drop location should be tracked in terms of the position
         * where new data should be inserted. For components that manage
         * a list of items (list and tree for example), the drop location
         * should indicate the index where new data should be inserted.
         * For text components the location should represent a position
         * between characters. For components that manage tabular data
         * (table for example), the drop location should indicate
         * where to insert new rows, columns, or both, to accommodate
         * the dropped data.
         */
        INSERT = 2,
        /**
         * The drop location should be tracked in terms of the row index
         * where new rows should be inserted to accommodate the dropped
         * data. This is useful for components that manage tabular data.
         */
        INSERT_ROWS = 3,
        /**
         * The drop location should be tracked in terms of the column index
         * where new columns should be inserted to accommodate the dropped
         * data. This is useful for components that manage tabular data.
         */
        INSERT_COLS = 4,
        /**
         * This mode is a combination of <code>ON</code>
         * and <code>INSERT</code>, specifying that data can be
         * dropped on existing items, or in insert locations
         * as specified by <code>INSERT</code>.
         */
        ON_OR_INSERT = 5,
        /**
         * This mode is a combination of <code>ON</code>
         * and <code>INSERT_ROWS</code>, specifying that data can be
         * dropped on existing items, or as insert rows
         * as specified by <code>INSERT_ROWS</code>.
         */
        ON_OR_INSERT_ROWS = 6,
        /**
         * This mode is a combination of <code>ON</code>
         * and <code>INSERT_COLS</code>, specifying that data can be
         * dropped on existing items, or as insert columns
         * as specified by <code>INSERT_COLS</code>.
         */
        ON_OR_INSERT_COLS = 7
    }
}
declare namespace javax.swing {
    /**
     * A mutable version of <code>ComboBoxModel</code>.
     *
     * @param <E> the type of the elements of this model
     *
     * @author Tom Santos
     * @class
     */
    interface MutableComboBoxModel<E> extends javax.swing.ComboBoxModel<E> {
        /**
         * Adds an item at the end of the model. The implementation of this method
         * should notify all registered <code>ListDataListener</code>s that the
         * item has been added.
         *
         * @param {*} item the item to be added
         */
        addElement(item: E): any;
        /**
         * Removes an item from the model. The implementation of this method should
         * should notify all registered <code>ListDataListener</code>s that the
         * item has been removed.
         *
         * @param {*} obj the <code>Object</code> to be removed
         */
        removeElement(obj: any): any;
        /**
         * Adds an item at a specific index.  The implementation of this method
         * should notify all registered <code>ListDataListener</code>s that the
         * item has been added.
         *
         * @param {*} item  the item to be added
         * @param {number} index  location to add the object
         */
        insertElementAt(item: E, index: number): any;
        /**
         * Removes an item at a specific index. The implementation of this method
         * should notify all registered <code>ListDataListener</code>s that the
         * item has been removed.
         *
         * @param {number} index  location of the item to be removed
         */
        removeElementAt(index: number): any;
    }
}
declare namespace javax.swing {
    /**
     * A collection of constants generally used for positioning and orienting
     * components on the screen.
     *
     * @author Jeff Dinkins
     * @author Ralph Kar (orientation support)
     * @class
     */
    interface SwingConstants {
    }
    namespace SwingConstants {
        /**
         * The central position in an area. Used for
         * both compass-direction constants (NORTH, etc.)
         * and box-orientation constants (TOP, etc.).
         */
        const CENTER: number;
        /**
         * Box-orientation constant used to specify the top of a box.
         */
        const TOP: number;
        /**
         * Box-orientation constant used to specify the left side of a box.
         */
        const LEFT: number;
        /**
         * Box-orientation constant used to specify the bottom of a box.
         */
        const BOTTOM: number;
        /**
         * Box-orientation constant used to specify the right side of a box.
         */
        const RIGHT: number;
        /**
         * Compass-direction North (up).
         */
        const NORTH: number;
        /**
         * Compass-direction north-east (upper right).
         */
        const NORTH_EAST: number;
        /**
         * Compass-direction east (right).
         */
        const EAST: number;
        /**
         * Compass-direction south-east (lower right).
         */
        const SOUTH_EAST: number;
        /**
         * Compass-direction south (down).
         */
        const SOUTH: number;
        /**
         * Compass-direction south-west (lower left).
         */
        const SOUTH_WEST: number;
        /**
         * Compass-direction west (left).
         */
        const WEST: number;
        /**
         * Compass-direction north west (upper left).
         */
        const NORTH_WEST: number;
        /**
         * Horizontal orientation. Used for scrollbars and sliders.
         */
        const HORIZONTAL: number;
        /**
         * Vertical orientation. Used for scrollbars and sliders.
         */
        const VERTICAL: number;
        /**
         * Identifies the leading edge of text for use with left-to-right
         * and right-to-left languages. Used by buttons and labels.
         */
        const LEADING: number;
        /**
         * Identifies the trailing edge of text for use with left-to-right
         * and right-to-left languages. Used by buttons and labels.
         */
        const TRAILING: number;
        /**
         * Identifies the next direction in a sequence.
         *
         * @since 1.4
         */
        const NEXT: number;
        /**
         * Identifies the previous direction in a sequence.
         *
         * @since 1.4
         */
        const PREVIOUS: number;
    }
}
declare namespace javax.swing {
    /**
     * The abstract definition for the data model that provides
     * a <code>List</code> with its contents.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @param <E> the type of the elements of this model
     *
     * @author Hans Muller
     * @class
     */
    abstract class AbstractListModel<E> implements javax.swing.ListModel<E>, java.io.Serializable {
        listenerList: javax.swing.event.EventListenerList;
        /**
         * Adds a listener to the list that's notified each time a change
         * to the data model occurs.
         *
         * @param {*} l the <code>ListDataListener</code> to be added
         */
        addListDataListener(l: javax.swing.event.ListDataListener): void;
        /**
         * Removes a listener from the list that's notified each time a
         * change to the data model occurs.
         *
         * @param {*} l the <code>ListDataListener</code> to be removed
         */
        removeListDataListener(l: javax.swing.event.ListDataListener): void;
        /**
         * Returns an array of all the list data listeners
         * registered on this <code>AbstractListModel</code>.
         *
         * @return {javax.swing.event.ListDataListener[]} all of this model's <code>ListDataListener</code>s,
         * or an empty array if no list data listeners
         * are currently registered
         *
         * @see #addListDataListener
         * @see #removeListDataListener
         *
         * @since 1.4
         */
        getListDataListeners(): javax.swing.event.ListDataListener[];
        /**
         * <code>AbstractListModel</code> subclasses must call this method
         * <b>after</b>
         * one or more elements of the list change.  The changed elements
         * are specified by the closed interval index0, index1 -- the endpoints
         * are included.  Note that
         * index0 need not be less than or equal to index1.
         *
         * @param {*} source the <code>ListModel</code> that changed, typically "this"
         * @param {number} index0 one end of the new interval
         * @param {number} index1 the other end of the new interval
         * @see EventListenerList
         * @see DefaultListModel
         */
        fireContentsChanged(source: any, index0: number, index1: number): void;
        /**
         * <code>AbstractListModel</code> subclasses must call this method
         * <b>after</b>
         * one or more elements are added to the model.  The new elements
         * are specified by a closed interval index0, index1 -- the enpoints
         * are included.  Note that
         * index0 need not be less than or equal to index1.
         *
         * @param {*} source the <code>ListModel</code> that changed, typically "this"
         * @param {number} index0 one end of the new interval
         * @param {number} index1 the other end of the new interval
         * @see EventListenerList
         * @see DefaultListModel
         */
        fireIntervalAdded(source: any, index0: number, index1: number): void;
        /**
         * <code>AbstractListModel</code> subclasses must call this method
         * <b>after</b> one or more elements are removed from the model.
         * <code>index0</code> and <code>index1</code> are the end points
         * of the interval that's been removed.  Note that <code>index0</code>
         * need not be less than or equal to <code>index1</code>.
         *
         * @param {*} source the <code>ListModel</code> that changed, typically "this"
         * @param {number} index0 one end of the removed interval,
         * including <code>index0</code>
         * @param {number} index1 the other end of the removed interval,
         * including <code>index1</code>
         * @see EventListenerList
         * @see DefaultListModel
         */
        fireIntervalRemoved(source: any, index0: number, index1: number): void;
        /**
         * Returns an array of all the objects currently registered as
         * <code><em>Foo</em>Listener</code>s
         * upon this model.
         * <code><em>Foo</em>Listener</code>s
         * are registered using the <code>add<em>Foo</em>Listener</code> method.
         * <p>
         * You can specify the <code>listenerType</code> argument
         * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
         * For example, you can query a list model
         * <code>m</code>
         * for its list data listeners
         * with the following code:
         *
         * <pre>ListDataListener[] ldls = (ListDataListener[])(m.getListeners(ListDataListener.class));</pre>
         *
         * If no such listeners exist,
         * this method returns an empty array.
         *
         * @param {java.lang.Class} listenerType  the type of listeners requested;
         * this parameter should specify an interface
         * that descends from <code>java.util.EventListener</code>
         * @return {T[]} an array of all objects registered as
         * <code><em>Foo</em>Listener</code>s
         * on this model,
         * or an empty array if no such
         * listeners have been added
         * @exception ClassCastException if <code>listenerType</code> doesn't
         * specify a class or interface that implements
         * <code>java.util.EventListener</code>
         *
         * @see #getListDataListeners
         *
         * @since 1.3
         */
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        abstract getElementAt(index?: any): any;
        abstract getSize(): any;
        constructor();
    }
}
declare namespace javax.swing {
    interface WindowConstants {
    }
    namespace WindowConstants {
        const DO_NOTHING_ON_CLOSE: number;
        const HIDE_ON_CLOSE: number;
        const DISPOSE_ON_CLOSE: number;
        const EXIT_ON_CLOSE: number;
    }
}
declare namespace javax.swing {
    /**
     * A generic implementation of SingleSelectionModel.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Dave Moore
     * @class
     */
    class DefaultSingleSelectionModel implements javax.swing.SingleSelectionModel, java.io.Serializable {
        changeEvent: javax.swing.event.ChangeEvent;
        /**
         * The collection of registered listeners
         */
        listenerList: javax.swing.event.EventListenerList;
        index: number;
        getSelectedIndex(): number;
        setSelectedIndex(index: number): void;
        clearSelection(): void;
        isSelected(): boolean;
        /**
         * Adds a <code>ChangeListener</code> to the button.
         * @param {*} l
         */
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Removes a <code>ChangeListener</code> from the button.
         * @param {*} l
         */
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Returns an array of all the change listeners
         * registered on this <code>DefaultSingleSelectionModel</code>.
         *
         * @return {javax.swing.event.ChangeListener[]} all of this model's <code>ChangeListener</code>s
         * or an empty
         * array if no change listeners are currently registered
         *
         * @see #addChangeListener
         * @see #removeChangeListener
         *
         * @since 1.4
         */
        getChangeListeners(): javax.swing.event.ChangeListener[];
        /**
         * Notifies all listeners that have registered interest for
         * notification on this event type.  The event instance
         * is created lazily.
         * @see EventListenerList
         */
        fireStateChanged(): void;
        /**
         * Returns an array of all the objects currently registered as
         * <code><em>Foo</em>Listener</code>s
         * upon this model.
         * <code><em>Foo</em>Listener</code>s
         * are registered using the <code>add<em>Foo</em>Listener</code> method.
         * <p>
         * You can specify the <code>listenerType</code> argument
         * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
         * For example, you can query a <code>DefaultSingleSelectionModel</code>
         * instance <code>m</code>
         * for its change listeners
         * with the following code:
         *
         * <pre>ChangeListener[] cls = (ChangeListener[])(m.getListeners(ChangeListener.class));</pre>
         *
         * If no such listeners exist,
         * this method returns an empty array.
         *
         * @param {java.lang.Class} listenerType  the type of listeners requested;
         * this parameter should specify an interface
         * that descends from <code>java.util.EventListener</code>
         * @return {T[]} an array of all objects registered as
         * <code><em>Foo</em>Listener</code>s
         * on this model,
         * or an empty array if no such
         * listeners have been added
         * @exception ClassCastException if <code>listenerType</code> doesn't
         * specify a class or interface that implements
         * <code>java.util.EventListener</code>
         *
         * @see #getChangeListeners
         *
         * @since 1.3
         */
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        constructor();
    }
}
declare namespace javax.swing {
    class UIManager {
        static getString(key: string): string;
    }
}
declare namespace javax.swing {
    /**
     * Defines the data model used by components like <code>Slider</code>s
     * and <code>ProgressBar</code>s.
     * Defines four interrelated integer properties: minimum, maximum, extent
     * and value.  These four integers define two nested ranges like this:
     * <pre>
     * minimum &lt;= value &lt;= value+extent &lt;= maximum
     * </pre>
     * The outer range is <code>minimum,maximum</code> and the inner
     * range is <code>value,value+extent</code>.  The inner range
     * must lie within the outer one, i.e. <code>value</code> must be
     * less than or equal to <code>maximum</code> and <code>value+extent</code>
     * must greater than or equal to <code>minimum</code>, and <code>maximum</code>
     * must be greater than or equal to <code>minimum</code>.
     * There are a few features of this model that one might find a little
     * surprising.  These quirks exist for the convenience of the
     * Swing BoundedRangeModel clients, such as <code>Slider</code> and
     * <code>ScrollBar</code>.
     * <ul>
     * <li>
     * The minimum and maximum set methods "correct" the other
     * three properties to accommodate their new value argument.  For
     * example setting the model's minimum may change its maximum, value,
     * and extent properties (in that order), to maintain the constraints
     * specified above.
     *
     * <li>
     * The value and extent set methods "correct" their argument to
     * fit within the limits defined by the other three properties.
     * For example if <code>value == maximum</code>, <code>setExtent(10)</code>
     * would change the extent (back) to zero.
     *
     * <li>
     * The four BoundedRangeModel values are defined as Java Beans properties
     * however Swing ChangeEvents are used to notify clients of changes rather
     * than PropertyChangeEvents. This was done to keep the overhead of monitoring
     * a BoundedRangeModel low. Changes are often reported at MouseDragged rates.
     * </ul>
     *
     * <p>
     *
     * For an example of specifying custom bounded range models used by sliders,
     * see <a
     * href="http://www.oracle.com/technetwork/java/architecture-142923.html#separable">Separable model architecture</a>
     * in <em>A Swing Architecture Overview.</em>
     *
     * @author Hans Muller
     * @see DefaultBoundedRangeModel
     * @class
     */
    interface BoundedRangeModel {
        /**
         * Returns the minimum acceptable value.
         *
         * @return {number} the value of the minimum property
         * @see #setMinimum
         */
        getMinimum(): number;
        /**
         * Sets the model's minimum to <I>newMinimum</I>.   The
         * other three properties may be changed as well, to ensure
         * that:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * <p>
         * Notifies any listeners if the model changes.
         *
         * @param {number} newMinimum the model's new minimum
         * @see #getMinimum
         * @see #addChangeListener
         */
        setMinimum(newMinimum: number): any;
        /**
         * Returns the model's maximum.  Note that the upper
         * limit on the model's value is (maximum - extent).
         *
         * @return {number} the value of the maximum property.
         * @see #setMaximum
         * @see #setExtent
         */
        getMaximum(): number;
        /**
         * Sets the model's maximum to <I>newMaximum</I>. The other
         * three properties may be changed as well, to ensure that
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * <p>
         * Notifies any listeners if the model changes.
         *
         * @param {number} newMaximum the model's new maximum
         * @see #getMaximum
         * @see #addChangeListener
         */
        setMaximum(newMaximum: number): any;
        /**
         * Returns the model's current value.  Note that the upper
         * limit on the model's value is <code>maximum - extent</code>
         * and the lower limit is <code>minimum</code>.
         *
         * @return  {number} the model's value
         * @see     #setValue
         */
        getValue(): number;
        /**
         * Sets the model's current value to <code>newValue</code> if <code>newValue</code>
         * satisfies the model's constraints. Those constraints are:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * Otherwise, if <code>newValue</code> is less than <code>minimum</code>
         * it's set to <code>minimum</code>, if its greater than
         * <code>maximum</code> then it's set to <code>maximum</code>, and
         * if it's greater than <code>value+extent</code> then it's set to
         * <code>value+extent</code>.
         * <p>
         * When a BoundedRange model is used with a scrollbar the value
         * specifies the origin of the scrollbar knob (aka the "thumb" or
         * "elevator").  The value usually represents the origin of the
         * visible part of the object being scrolled.
         * <p>
         * Notifies any listeners if the model changes.
         *
         * @param {number} newValue the model's new value
         * @see #getValue
         */
        setValue(newValue: number): any;
        /**
         * This attribute indicates that any upcoming changes to the value
         * of the model should be considered a single event. This attribute
         * will be set to true at the start of a series of changes to the value,
         * and will be set to false when the value has finished changing.  Normally
         * this allows a listener to only take action when the final value change in
         * committed, instead of having to do updates for all intermediate values.
         * <p>
         * Sliders and scrollbars use this property when a drag is underway.
         *
         * @param {boolean} b true if the upcoming changes to the value property are part of a series
         */
        setValueIsAdjusting(b: boolean): any;
        /**
         * Returns true if the current changes to the value property are part
         * of a series of changes.
         *
         * @return {boolean} the valueIsAdjustingProperty.
         * @see #setValueIsAdjusting
         */
        getValueIsAdjusting(): boolean;
        /**
         * Returns the model's extent, the length of the inner range that
         * begins at the model's value.
         *
         * @return  {number} the value of the model's extent property
         * @see     #setExtent
         * @see     #setValue
         */
        getExtent(): number;
        /**
         * Sets the model's extent.  The <I>newExtent</I> is forced to
         * be greater than or equal to zero and less than or equal to
         * maximum - value.
         * <p>
         * When a BoundedRange model is used with a scrollbar the extent
         * defines the length of the scrollbar knob (aka the "thumb" or
         * "elevator").  The extent usually represents how much of the
         * object being scrolled is visible. When used with a slider,
         * the extent determines how much the value can "jump", for
         * example when the user presses PgUp or PgDn.
         * <p>
         * Notifies any listeners if the model changes.
         *
         * @param  {number} newExtent the model's new extent
         * @see #getExtent
         * @see #setValue
         */
        setExtent(newExtent: number): any;
        /**
         * This method sets all of the model's data with a single method call.
         * The method results in a single change event being generated. This is
         * convenient when you need to adjust all the model data simultaneously and
         * do not want individual change events to occur.
         *
         * @param {number} value  an int giving the current value
         * @param {number} extent an int giving the amount by which the value can "jump"
         * @param {number} min    an int giving the minimum value
         * @param {number} max    an int giving the maximum value
         * @param {boolean} adjusting a boolean, true if a series of changes are in
         * progress
         *
         * @see #setValue
         * @see #setExtent
         * @see #setMinimum
         * @see #setMaximum
         * @see #setValueIsAdjusting
         */
        setRangeProperties(value: number, extent: number, min: number, max: number, adjusting: boolean): any;
        /**
         * Adds a ChangeListener to the model's listener list.
         *
         * @param {*} x the ChangeListener to add
         * @see #removeChangeListener
         */
        addChangeListener(x: javax.swing.event.ChangeListener): any;
        /**
         * Removes a ChangeListener from the model's listener list.
         *
         * @param {*} x the ChangeListener to remove
         * @see #addChangeListener
         */
        removeChangeListener(x: javax.swing.event.ChangeListener): any;
    }
}
declare namespace javax.swing.undo {
    /**
     * Constructs an <code>UndoableEditSupport</code> object.
     *
     * @param {*} r
     * an <code>Object</code>
     * @class
     * @author Ray Ryan
     */
    class UndoableEditSupport {
        updateLevel: number;
        compoundEdit: javax.swing.undo.CompoundEdit;
        listeners: java.util.Vector<javax.swing.event.UndoableEditListener>;
        realSource: any;
        constructor(r?: any);
        /**
         * Registers an <code>UndoableEditListener</code>. The listener is notified
         * whenever an edit occurs which can be undone.
         *
         * @param {*} l
         * an <code>UndoableEditListener</code> object
         * @see #removeUndoableEditListener
         */
        addUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Removes an <code>UndoableEditListener</code>.
         *
         * @param {*} l
         * the <code>UndoableEditListener</code> object to be removed
         * @see #addUndoableEditListener
         */
        removeUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Returns an array of all the <code>UndoableEditListener</code>s added to
         * this UndoableEditSupport with addUndoableEditListener().
         *
         * @return {javax.swing.event.UndoableEditListener[]} all of the <code>UndoableEditListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getUndoableEditListeners(): javax.swing.event.UndoableEditListener[];
        /**
         * Called only from <code>postEdit</code> and <code>endUpdate</code>. Calls
         * <code>undoableEditHappened</code> in all listeners. No synchronization is
         * performed here, since the two calling methods are synchronized.
         * @param {*} e
         */
        _postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         * @param {*} e
         */
        postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * Returns the update level value.
         *
         * @return {number} an integer representing the update level
         */
        getUpdateLevel(): number;
        /**
         *
         */
        beginUpdate(): void;
        /**
         * Called only from <code>beginUpdate</code>. Exposed here for subclasses'
         * use.
         * @return {javax.swing.undo.CompoundEdit}
         */
        createCompoundEdit(): javax.swing.undo.CompoundEdit;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         */
        endUpdate(): void;
        /**
         * Returns a string that displays and identifies this object's properties.
         *
         * @return {string} a <code>String</code> representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>redo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     * @class
     * @extends java.lang.RuntimeException
     */
    class CannotRedoException extends java.lang.RuntimeException {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * An <code>UndoableEdit</code> represents an edit.  The edit may
     * be undone, or if already undone the edit may be redone.
     * <p>
     * <code>UndoableEdit</code> is designed to be used with the
     * <code>UndoManager</code>.  As <code>UndoableEdit</code>s are generated
     * by an <code>UndoableEditListener</code> they are typically added to
     * the <code>UndoManager</code>.  When an <code>UndoableEdit</code>
     * is added to an <code>UndoManager</code> the following occurs (assuming
     * <code>end</code> has not been called on the <code>UndoManager</code>):
     * <ol>
     * <li>If the <code>UndoManager</code> contains edits it will call
     * <code>addEdit</code> on the current edit passing in the new edit
     * as the argument.  If <code>addEdit</code> returns true the
     * new edit is assumed to have been incorporated into the current edit and
     * the new edit will not be added to the list of current edits.
     * Edits can use <code>addEdit</code> as a way for smaller edits to
     * be incorporated into a larger edit and treated as a single edit.
     * <li>If <code>addEdit</code> returns false <code>replaceEdit</code>
     * is called on the new edit with the current edit passed in as the
     * argument. This is the inverse of <code>addEdit</code> &#151;
     * if the new edit returns true from <code>replaceEdit</code>, the new
     * edit replaces the current edit.
     * </ol>
     * The <code>UndoManager</code> makes use of
     * <code>isSignificant</code> to determine how many edits should be
     * undone or redone.  The <code>UndoManager</code> will undo or redo
     * all insignificant edits (<code>isSignificant</code> returns false)
     * between the current edit and the last or
     * next significant edit.   <code>addEdit</code> and
     * <code>replaceEdit</code> can be used to treat multiple edits as
     * a single edit, returning false from <code>isSignificant</code>
     * allows for treating can be used to
     * have many smaller edits undone or redone at once.  Similar functionality
     * can also be done using the <code>addEdit</code> method.
     *
     * @author Ray Ryan
     * @class
     */
    interface UndoableEdit {
        /**
         * Undo the edit.
         *
         * @throws CannotUndoException if this edit can not be undone
         */
        undo(): any;
        /**
         * Returns true if this edit may be undone.
         *
         * @return {boolean} true if this edit may be undone
         */
        canUndo(): boolean;
        /**
         * Re-applies the edit.
         *
         * @throws CannotRedoException if this edit can not be redone
         */
        redo(): any;
        /**
         * Returns true if this edit may be redone.
         *
         * @return {boolean} true if this edit may be redone
         */
        canRedo(): boolean;
        /**
         * Informs the edit that it should no longer be used. Once an
         * <code>UndoableEdit</code> has been marked as dead it can no longer
         * be undone or redone.
         * <p>
         * This is a useful hook for cleaning up state no longer
         * needed once undoing or redoing is impossible--for example,
         * deleting file resources used by objects that can no longer be
         * undeleted. <code>UndoManager</code> calls this before it dequeues edits.
         * <p>
         * Note that this is a one-way operation. There is no "un-die"
         * method.
         *
         * @see CompoundEdit#die
         */
        die(): any;
        /**
         * Adds an <code>UndoableEdit</code> to this <code>UndoableEdit</code>.
         * This method can be used to coalesce smaller edits into a larger
         * compound edit.  For example, text editors typically allow
         * undo operations to apply to words or sentences.  The text
         * editor may choose to generate edits on each key event, but allow
         * those edits to be coalesced into a more user-friendly unit, such as
         * a word. In this case, the <code>UndoableEdit</code> would
         * override <code>addEdit</code> to return true when the edits may
         * be coalesced.
         * <p>
         * A return value of true indicates <code>anEdit</code> was incorporated
         * into this edit.  A return value of false indicates <code>anEdit</code>
         * may not be incorporated into this edit.
         * <p>Typically the receiver is already in the queue of a
         * <code>UndoManager</code> (or other <code>UndoableEditListener</code>),
         * and is being given a chance to incorporate <code>anEdit</code>
         * rather than letting it be added to the queue in turn.</p>
         *
         * <p>If true is returned, from now on <code>anEdit</code> must return
         * false from <code>canUndo</code> and <code>canRedo</code>,
         * and must throw the appropriate exception on <code>undo</code> or
         * <code>redo</code>.</p>
         *
         * @param {*} anEdit the edit to be added
         * @return {boolean} true if <code>anEdit</code> may be incorporated into this
         * edit
         */
        addEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this <code>UndoableEdit</code> should replace
         * <code>anEdit</code>. This method is used by <code>CompoundEdit</code>
         * and the <code>UndoManager</code>; it is called if
         * <code>anEdit</code> could not be added to the current edit
         * (<code>addEdit</code> returns false).
         * <p>
         * This method provides a way for an edit to replace an existing edit.
         * <p>This message is the opposite of addEdit--anEdit has typically
         * already been queued in an <code>UndoManager</code> (or other
         * UndoableEditListener), and the receiver is being given a chance
         * to take its place.</p>
         *
         * <p>If true is returned, from now on anEdit must return false from
         * canUndo() and canRedo(), and must throw the appropriate
         * exception on undo() or redo().</p>
         *
         * @param {*} anEdit the edit that replaces the current edit
         * @return {boolean} true if this edit should replace <code>anEdit</code>
         */
        replaceEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this edit is considered significant.  A significant
         * edit is typically an edit that should be presented to the user, perhaps
         * on a menu item or tooltip.  The <code>UndoManager</code> will undo,
         * or redo, all insignificant edits to the next significant edit.
         *
         * @return {boolean} true if this edit is significant
         */
        isSignificant(): boolean;
        /**
         * Returns a localized, human-readable description of this edit, suitable
         * for use in a change log, for example.
         *
         * @return {string} description of this edit
         */
        getPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the undoable form of
         * this edit, suitable for use as an Undo menu item, for example.
         * This is typically derived from <code>getPresentationName</code>.
         *
         * @return {string} a description of the undoable form of this edit
         */
        getUndoPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the redoable form of
         * this edit, suitable for use as a Redo menu item, for example. This is
         * typically derived from <code>getPresentationName</code>.
         *
         * @return {string} a description of the redoable form of this edit
         */
        getRedoPresentationName(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>undo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     * @class
     * @extends java.lang.RuntimeException
     */
    class CannotUndoException extends java.lang.RuntimeException {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * Creates an <code>AbstractUndoableEdit</code> which defaults
     * <code>hasBeenDone</code> and <code>alive</code> to <code>true</code>.
     * @class
     * @author Ray Ryan
     */
    class AbstractUndoableEdit implements javax.swing.undo.UndoableEdit, java.io.Serializable {
        /**
         * String returned by <code>getUndoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static UndoName: string;
        /**
         * String returned by <code>getRedoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static RedoName: string;
        /**
         * Defaults to true; becomes false if this edit is undone, true
         * again if it is redone.
         */
        hasBeenDone: boolean;
        /**
         * True if this edit has not received <code>die</code>; defaults
         * to <code>true</code>.
         */
        alive: boolean;
        constructor();
        /**
         * Sets <code>alive</code> to false. Note that this
         * is a one way operation; dead edits cannot be resurrected.
         * Sending <code>undo</code> or <code>redo</code> to
         * a dead edit results in an exception being thrown.
         *
         * <p>Typically an edit is killed when it is consolidated by
         * another edit's <code>addEdit</code> or <code>replaceEdit</code>
         * method, or when it is dequeued from an <code>UndoManager</code>.
         */
        die(): void;
        /**
         * Throws <code>CannotUndoException</code> if <code>canUndo</code>
         * returns <code>false</code>. Sets <code>hasBeenDone</code>
         * to <code>false</code>. Subclasses should override to undo the
         * operation represented by this edit. Override should begin with
         * a call to super.
         *
         * @exception CannotUndoException if <code>canUndo</code>
         * returns <code>false</code>
         * @see     #canUndo
         */
        undo(): void;
        /**
         * Returns true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>.
         *
         * @return {boolean} true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>
         *
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canUndo(): boolean;
        /**
         * Throws <code>CannotRedoException</code> if <code>canRedo</code>
         * returns false. Sets <code>hasBeenDone</code> to <code>true</code>.
         * Subclasses should override to redo the operation represented by
         * this edit. Override should begin with a call to super.
         *
         * @exception CannotRedoException if <code>canRedo</code>
         * returns <code>false</code>
         * @see     #canRedo
         */
        redo(): void;
        /**
         * Returns <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>.
         *
         * @return {boolean} <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canRedo(): boolean;
        /**
         * This default implementation returns false.
         *
         * @param {*} anEdit the edit to be added
         * @return {boolean} false
         *
         * @see UndoableEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns false.
         *
         * @param {*} anEdit the edit to replace
         * @return {boolean} false
         *
         * @see UndoableEdit#replaceEdit
         */
        replaceEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns true.
         *
         * @return {boolean} true
         * @see UndoableEdit#isSignificant
         */
        isSignificant(): boolean;
        /**
         * This default implementation returns "". Used by
         * <code>getUndoPresentationName</code> and
         * <code>getRedoPresentationName</code> to
         * construct the strings they return. Subclasses should override to
         * return an appropriate description of the operation this edit
         * represents.
         *
         * @return {string} the empty string ""
         *
         * @see     #getUndoPresentationName
         * @see     #getRedoPresentationName
         */
        getPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return {string} the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return {string} the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * StateEditable defines the interface for objects that can have
     * their state undone/redone by a StateEdit.
     *
     * @see StateEdit
     * @class
     */
    interface StateEditable {
        /**
         * Upon receiving this message the receiver should place any relevant
         * state into <EM>state</EM>.
         * @param {java.util.Hashtable} state
         */
        storeState(state: java.util.Hashtable<any, any>): any;
        /**
         * Upon receiving this message the receiver should extract any relevant
         * state out of <EM>state</EM>.
         * @param {java.util.Hashtable} state
         */
        restoreState(state: java.util.Hashtable<any, any>): any;
    }
    namespace StateEditable {
        /**
         * Resource ID for this class.
         */
        const RCSID: string;
    }
}
declare namespace javax.swing {
    interface Icon {
        paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number, y: number): any;
        getIconWidth(): number;
        getIconHeight(): number;
        getInternalHTMLImageElement(): HTMLImageElement;
    }
}
declare namespace javax.swing {
    /**
     * This interface represents the current state of the
     * selection for any of the components that display a
     * list of values with stable indices.  The selection is
     * modeled as a set of intervals, each interval represents
     * a contiguous range of selected list elements.
     * The methods for modifying the set of selected intervals
     * all take a pair of indices, index0 and index1, that represent
     * a closed interval, i.e. the interval includes both index0 and
     * index1.
     *
     * @author Hans Muller
     * @author Philip Milne
     * @see DefaultListSelectionModel
     * @class
     */
    interface ListSelectionModel {
        /**
         * Changes the selection to be between {@code index0} and {@code index1}
         * inclusive. {@code index0} doesn't have to be less than or equal to
         * {@code index1}.
         * <p>
         * In {@code SINGLE_SELECTION} selection mode, only the second index
         * is used.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change.
         *
         * @param {number} index0 one end of the interval.
         * @param {number} index1 other end of the interval
         * @see #addListSelectionListener
         */
        setSelectionInterval(index0: number, index1: number): any;
        /**
         * Changes the selection to be the set union of the current selection
         * and the indices between {@code index0} and {@code index1} inclusive.
         * {@code index0} doesn't have to be less than or equal to {@code index1}.
         * <p>
         * In {@code SINGLE_SELECTION} selection mode, this is equivalent
         * to calling {@code setSelectionInterval}, and only the second index
         * is used. In {@code SINGLE_INTERVAL_SELECTION} selection mode, this
         * method behaves like {@code setSelectionInterval}, unless the given
         * interval is immediately adjacent to or overlaps the existing selection,
         * and can therefore be used to grow the selection.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change.
         *
         * @param {number} index0 one end of the interval.
         * @param {number} index1 other end of the interval
         * @see #addListSelectionListener
         * @see #setSelectionInterval
         */
        addSelectionInterval(index0: number, index1: number): any;
        /**
         * Changes the selection to be the set difference of the current selection
         * and the indices between {@code index0} and {@code index1} inclusive.
         * {@code index0} doesn't have to be less than or equal to {@code index1}.
         * <p>
         * In {@code SINGLE_INTERVAL_SELECTION} selection mode, if the removal
         * would produce two disjoint selections, the removal is extended through
         * the greater end of the selection. For example, if the selection is
         * {@code 0-10} and you supply indices {@code 5,6} (in any order) the
         * resulting selection is {@code 0-4}.
         * <p>
         * If this represents a change to the current selection, then each
         * {@code ListSelectionListener} is notified of the change.
         *
         * @param {number} index0 one end of the interval.
         * @param {number} index1 other end of the interval
         * @see #addListSelectionListener
         */
        removeSelectionInterval(index0: number, index1: number): any;
        /**
         * Returns the first selected index or -1 if the selection is empty.
         * @return {number}
         */
        getMinSelectionIndex(): number;
        /**
         * Returns the last selected index or -1 if the selection is empty.
         * @return {number}
         */
        getMaxSelectionIndex(): number;
        /**
         * Returns true if the specified index is selected.
         * @param {number} index
         * @return {boolean}
         */
        isSelectedIndex(index: number): boolean;
        /**
         * Return the first index argument from the most recent call to
         * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
         * The most recent index0 is considered the "anchor" and the most recent
         * index1 is considered the "lead".  Some interfaces display these
         * indices specially, e.g. Windows95 displays the lead index with a
         * dotted yellow outline.
         *
         * @see #getLeadSelectionIndex
         * @see #setSelectionInterval
         * @see #addSelectionInterval
         * @return {number}
         */
        getAnchorSelectionIndex(): number;
        /**
         * Set the anchor selection index.
         *
         * @see #getAnchorSelectionIndex
         * @param {number} index
         */
        setAnchorSelectionIndex(index: number): any;
        /**
         * Return the second index argument from the most recent call to
         * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
         *
         * @see #getAnchorSelectionIndex
         * @see #setSelectionInterval
         * @see #addSelectionInterval
         * @return {number}
         */
        getLeadSelectionIndex(): number;
        /**
         * Set the lead selection index.
         *
         * @see #getLeadSelectionIndex
         * @param {number} index
         */
        setLeadSelectionIndex(index: number): any;
        /**
         * Change the selection to the empty set.  If this represents
         * a change to the current selection then notify each ListSelectionListener.
         *
         * @see #addListSelectionListener
         */
        clearSelection(): any;
        /**
         * Returns true if no indices are selected.
         * @return {boolean}
         */
        isSelectionEmpty(): boolean;
        /**
         * Insert length indices beginning before/after index.  This is typically
         * called to sync the selection model with a corresponding change
         * in the data model.
         * @param {number} index
         * @param {number} length
         * @param {boolean} before
         */
        insertIndexInterval(index: number, length: number, before: boolean): any;
        /**
         * Remove the indices in the interval index0,index1 (inclusive) from
         * the selection model.  This is typically called to sync the selection
         * model width a corresponding change in the data model.
         * @param {number} index0
         * @param {number} index1
         */
        removeIndexInterval(index0: number, index1: number): any;
        /**
         * Sets the {@code valueIsAdjusting} property, which indicates whether
         * or not upcoming selection changes should be considered part of a single
         * change. The value of this property is used to initialize the
         * {@code valueIsAdjusting} property of the {@code ListSelectionEvent}s that
         * are generated.
         * <p>
         * For example, if the selection is being updated in response to a user
         * drag, this property can be set to {@code true} when the drag is initiated
         * and set to {@code false} when the drag is finished. During the drag,
         * listeners receive events with a {@code valueIsAdjusting} property
         * set to {@code true}. At the end of the drag, when the change is
         * finalized, listeners receive an event with the value set to {@code false}.
         * Listeners can use this pattern if they wish to update only when a change
         * has been finalized.
         * <p>
         * Setting this property to {@code true} begins a series of changes that
         * is to be considered part of a single change. When the property is changed
         * back to {@code false}, an event is sent out characterizing the entire
         * selection change (if there was one), with the event's
         * {@code valueIsAdjusting} property set to {@code false}.
         *
         * @param {boolean} valueIsAdjusting the new value of the property
         * @see #getValueIsAdjusting
         * @see javax.swing.event.ListSelectionEvent#getValueIsAdjusting
         */
        setValueIsAdjusting(valueIsAdjusting: boolean): any;
        /**
         * Returns {@code true} if the selection is undergoing a series of changes.
         *
         * @return {boolean} true if the selection is undergoing a series of changes
         * @see #setValueIsAdjusting
         */
        getValueIsAdjusting(): boolean;
        /**
         * Sets the selection mode. The following list describes the accepted
         * selection modes:
         * <ul>
         * <li>{@code ListSelectionModel.SINGLE_SELECTION} -
         * Only one list index can be selected at a time. In this mode,
         * {@code setSelectionInterval} and {@code addSelectionInterval} are
         * equivalent, both replacing the current selection with the index
         * represented by the second argument (the "lead").
         * <li>{@code ListSelectionModel.SINGLE_INTERVAL_SELECTION} -
         * Only one contiguous interval can be selected at a time.
         * In this mode, {@code addSelectionInterval} behaves like
         * {@code setSelectionInterval} (replacing the current selection),
         * unless the given interval is immediately adjacent to or overlaps
         * the existing selection, and can therefore be used to grow it.
         * <li>{@code ListSelectionModel.MULTIPLE_INTERVAL_SELECTION} -
         * In this mode, there's no restriction on what can be selected.
         * </ul>
         *
         * @see #getSelectionMode
         * @throws IllegalArgumentException if the selection mode isn't
         * one of those allowed
         * @param {number} selectionMode
         */
        setSelectionMode(selectionMode: number): any;
        /**
         * Returns the current selection mode.
         *
         * @return {number} the current selection mode
         * @see #setSelectionMode
         */
        getSelectionMode(): number;
        /**
         * Add a listener to the list that's notified each time a change
         * to the selection occurs.
         *
         * @param {*} x the ListSelectionListener
         * @see #removeListSelectionListener
         * @see #setSelectionInterval
         * @see #addSelectionInterval
         * @see #removeSelectionInterval
         * @see #clearSelection
         * @see #insertIndexInterval
         * @see #removeIndexInterval
         */
        addListSelectionListener(x: javax.swing.event.ListSelectionListener): any;
        /**
         * Remove a listener from the list that's notified each time a
         * change to the selection occurs.
         *
         * @param {*} x the ListSelectionListener
         * @see #addListSelectionListener
         */
        removeListSelectionListener(x: javax.swing.event.ListSelectionListener): any;
    }
    namespace ListSelectionModel {
        /**
         * A value for the selectionMode property: select one list index
         * at a time.
         *
         * @see #setSelectionMode
         */
        const SINGLE_SELECTION: number;
        /**
         * A value for the selectionMode property: select one contiguous
         * range of indices at a time.
         *
         * @see #setSelectionMode
         */
        const SINGLE_INTERVAL_SELECTION: number;
        /**
         * A value for the selectionMode property: select one or more
         * contiguous ranges of indices at a time.
         *
         * @see #setSelectionMode
         */
        const MULTIPLE_INTERVAL_SELECTION: number;
    }
}
declare namespace javax.swing {
    /**
     * Initializes value, extent, minimum and maximum. Adjusting is false.
     * Throws an <code>IllegalArgumentException</code> if the following
     * constraints aren't satisfied:
     * <pre>
     * min &lt;= value &lt;= value+extent &lt;= max
     * </pre>
     * @param {number} value
     * @param {number} extent
     * @param {number} min
     * @param {number} max
     * @class
     * @author David Kloba
     */
    class DefaultBoundedRangeModel implements javax.swing.BoundedRangeModel, java.io.Serializable {
        /**
         * Only one <code>ChangeEvent</code> is needed per model instance since the
         * event's only (read-only) state is the source property.  The source
         * of events generated here is always "this".
         */
        changeEvent: javax.swing.event.ChangeEvent;
        /**
         * The listeners waiting for model changes.
         */
        listenerList: javax.swing.event.EventListenerList;
        value: number;
        extent: number;
        min: number;
        max: number;
        isAdjusting: boolean;
        constructor(value?: any, extent?: any, min?: any, max?: any);
        /**
         * Returns the model's current value.
         * @return {number} the model's current value
         * @see #setValue
         * @see BoundedRangeModel#getValue
         */
        getValue(): number;
        /**
         * Returns the model's extent.
         * @return {number} the model's extent
         * @see #setExtent
         * @see BoundedRangeModel#getExtent
         */
        getExtent(): number;
        /**
         * Returns the model's minimum.
         * @return {number} the model's minimum
         * @see #setMinimum
         * @see BoundedRangeModel#getMinimum
         */
        getMinimum(): number;
        /**
         * Returns the model's maximum.
         * @return  {number} the model's maximum
         * @see #setMaximum
         * @see BoundedRangeModel#getMaximum
         */
        getMaximum(): number;
        /**
         * Sets the current value of the model. For a slider, that
         * determines where the knob appears. Ensures that the new
         * value, <I>n</I> falls within the model's constraints:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         *
         * @see BoundedRangeModel#setValue
         * @param {number} n
         */
        setValue(n: number): void;
        /**
         * Sets the extent to <I>n</I> after ensuring that <I>n</I>
         * is greater than or equal to zero and falls within the model's
         * constraints:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * @see BoundedRangeModel#setExtent
         * @param {number} n
         */
        setExtent(n: number): void;
        /**
         * Sets the minimum to <I>n</I> after ensuring that <I>n</I>
         * that the other three properties obey the model's constraints:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * @see #getMinimum
         * @see BoundedRangeModel#setMinimum
         * @param {number} n
         */
        setMinimum(n: number): void;
        /**
         * Sets the maximum to <I>n</I> after ensuring that <I>n</I>
         * that the other three properties obey the model's constraints:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * @see BoundedRangeModel#setMaximum
         * @param {number} n
         */
        setMaximum(n: number): void;
        /**
         * Sets the <code>valueIsAdjusting</code> property.
         *
         * @see #getValueIsAdjusting
         * @see #setValue
         * @see BoundedRangeModel#setValueIsAdjusting
         * @param {boolean} b
         */
        setValueIsAdjusting(b: boolean): void;
        /**
         * Returns true if the value is in the process of changing
         * as a result of actions being taken by the user.
         *
         * @return {boolean} the value of the <code>valueIsAdjusting</code> property
         * @see #setValue
         * @see BoundedRangeModel#getValueIsAdjusting
         */
        getValueIsAdjusting(): boolean;
        /**
         * Sets all of the <code>BoundedRangeModel</code> properties after forcing
         * the arguments to obey the usual constraints:
         * <pre>
         * minimum &lt;= value &lt;= value+extent &lt;= maximum
         * </pre>
         * <p>
         * At most, one <code>ChangeEvent</code> is generated.
         *
         * @see BoundedRangeModel#setRangeProperties
         * @see #setValue
         * @see #setExtent
         * @see #setMinimum
         * @see #setMaximum
         * @see #setValueIsAdjusting
         * @param {number} newValue
         * @param {number} newExtent
         * @param {number} newMin
         * @param {number} newMax
         * @param {boolean} adjusting
         */
        setRangeProperties(newValue: number, newExtent: number, newMin: number, newMax: number, adjusting: boolean): void;
        /**
         * Adds a <code>ChangeListener</code>.  The change listeners are run each
         * time any one of the Bounded Range model properties changes.
         *
         * @param {*} l the ChangeListener to add
         * @see #removeChangeListener
         * @see BoundedRangeModel#addChangeListener
         */
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Removes a <code>ChangeListener</code>.
         *
         * @param {*} l the <code>ChangeListener</code> to remove
         * @see #addChangeListener
         * @see BoundedRangeModel#removeChangeListener
         */
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Returns an array of all the change listeners
         * registered on this <code>DefaultBoundedRangeModel</code>.
         *
         * @return {javax.swing.event.ChangeListener[]} all of this model's <code>ChangeListener</code>s
         * or an empty
         * array if no change listeners are currently registered
         *
         * @see #addChangeListener
         * @see #removeChangeListener
         *
         * @since 1.4
         */
        getChangeListeners(): javax.swing.event.ChangeListener[];
        /**
         * Runs each <code>ChangeListener</code>'s <code>stateChanged</code> method.
         *
         * @see #setRangeProperties
         * @see EventListenerList
         */
        fireStateChanged(): void;
        /**
         * Returns a string that displays all of the
         * <code>BoundedRangeModel</code> properties.
         * @return {string}
         */
        toString(): string;
        /**
         * Returns an array of all the objects currently registered as
         * <code><em>Foo</em>Listener</code>s
         * upon this model.
         * <code><em>Foo</em>Listener</code>s
         * are registered using the <code>add<em>Foo</em>Listener</code> method.
         * <p>
         * You can specify the <code>listenerType</code> argument
         * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
         * For example, you can query a <code>DefaultBoundedRangeModel</code>
         * instance <code>m</code>
         * for its change listeners
         * with the following code:
         *
         * <pre>ChangeListener[] cls = (ChangeListener[])(m.getListeners(ChangeListener.class));</pre>
         *
         * If no such listeners exist,
         * this method returns an empty array.
         *
         * @param {java.lang.Class} listenerType  the type of listeners requested;
         * this parameter should specify an interface
         * that descends from <code>java.util.EventListener</code>
         * @return {T[]} an array of all objects registered as
         * <code><em>Foo</em>Listener</code>s
         * on this model,
         * or an empty array if no such
         * listeners have been added
         * @exception ClassCastException if <code>listenerType</code> doesn't
         * specify a class or interface that implements
         * <code>java.util.EventListener</code>
         *
         * @see #getChangeListeners
         *
         * @since 1.3
         */
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
    }
}
declare namespace javax.swing {
    /**
     * This interface is implemented by components that have a single
     * JRootPane child: JDialog, JFrame, JWindow, JApplet, JInternalFrame.
     * The methods in  this interface are just <i>covers</i> for the JRootPane
     * properties, e.g. <code>getContentPane()</code> is generally implemented
     * like this:<pre>
     * public Container getContentPane() {
     * return getRootPane().getContentPane();
     * }
     * </pre>
     * This interface serves as a <i>marker</i> for Swing GUI builders
     * that need to treat components like JFrame, that contain a
     * single JRootPane, specially.  For example in a GUI builder,
     * dropping a component on a RootPaneContainer would be interpreted
     * as <code>frame.getContentPane().add(child)</code>.
     * <p>
     * As a convenience, the standard classes that implement this interface
     * (such as {@code JFrame}, {@code JDialog}, {@code JWindow}, {@code JApplet},
     * and {@code JInternalFrame}) have their {@code add}, {@code remove},
     * and {@code setLayout} methods overridden, so that they delegate calls
     * to the corresponding methods of the {@code ContentPane}.
     * For example, you can add a child component to a frame as follows:
     * <pre>
     * frame.add(child);
     * </pre>
     * instead of:
     * <pre>
     * frame.getContentPane().add(child);
     * </pre>
     * <p>
     * The behavior of the <code>add</code> and
     * <code>setLayout</code> methods for
     * <code>JFrame</code>, <code>JDialog</code>, <code>JWindow</code>,
     * <code>JApplet</code> and <code>JInternalFrame</code> is controlled by
     * the <code>rootPaneCheckingEnabled</code> property. If this property is
     * true (the default), then calls to these methods are
     * forwarded to the <code>contentPane</code>; if false, these
     * methods operate directly on the <code>RootPaneContainer</code>. This
     * property is only intended for subclasses, and is therefore protected.
     *
     * @see JRootPane
     * @see JFrame
     * @see JDialog
     * @see JWindow
     * @see JApplet
     * @see JInternalFrame
     *
     * @author Hans Muller
     * @class
     */
    interface RootPaneContainer {
        /**
         * Return this component's single JRootPane child.  A conventional
         * implementation of this interface will have all of the other
         * methods indirect through this one.  The rootPane has two
         * children: the glassPane and the layeredPane.
         *
         * @return {javax.swing.JRootPane} this components single JRootPane child.
         * @see JRootPane
         */
        getRootPane(): javax.swing.JRootPane;
        /**
         * The "contentPane" is the primary container for application
         * specific components.  Applications should add children to
         * the contentPane, set its layout manager, and so on.
         * <p>
         * The contentPane may not be null.
         * <p>
         * Generally implemented with
         * <code>getRootPane().setContentPane(contentPane);</code>
         *
         * @exception java.awt.IllegalComponentStateException (a runtime
         * exception) if the content pane parameter is null
         * @param {java.awt.Container} contentPane the Container to use for the contents of this
         * JRootPane
         * @see JRootPane#getContentPane
         * @see #getContentPane
         */
        setContentPane(contentPane: java.awt.Container): any;
        /**
         * Returns the contentPane.
         *
         * @return {java.awt.Container} the value of the contentPane property.
         * @see #setContentPane
         */
        getContentPane(): java.awt.Container;
    }
}
declare namespace javax.swing {
    class SwingUtilities implements javax.swing.SwingConstants {
        constructor();
        static invokeLater(doRun: () => void): void;
    }
}
declare namespace javax.swing {
    class ImageIcon implements javax.swing.Icon, java.io.Serializable {
        filename: string;
        location: java.net.URL;
        image: java.awt.Image;
        loadStatus: number;
        imageObserver: java.awt.image.ImageObserver;
        description: string;
        width: number;
        height: number;
        /**
         *
         * @return {HTMLImageElement}
         */
        getInternalHTMLImageElement(): HTMLImageElement;
        constructor(filename?: any, description?: any);
        loadImage(image: java.awt.Image): void;
        getImageLoadStatus(): number;
        getImage(): java.awt.Image;
        setImage(image: java.awt.Image): void;
        getDescription(): string;
        setDescription(description: string): void;
        paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number, y: number): void;
        getIconWidth(): number;
        getIconHeight(): number;
        setImageObserver(observer: java.awt.image.ImageObserver): void;
        getImageObserver(): java.awt.image.ImageObserver;
        toString(): string;
    }
}
declare namespace javax.swing {
    /**
     * A data model for a combo box. This interface extends <code>ListDataModel</code>
     * and adds the concept of a <i>selected item</i>. The selected item is generally
     * the item which is visible in the combo box display area.
     * <p>
     * The selected item may not necessarily be managed by the underlying
     * <code>ListModel</code>. This disjoint behavior allows for the temporary
     * storage and retrieval of a selected item in the model.
     *
     * @param <E> the type of the elements of this model
     *
     * @author Arnaud Weber
     * @class
     */
    interface ComboBoxModel<E> extends javax.swing.ListModel<E> {
        /**
         * Set the selected item. The implementation of this  method should notify
         * all registered <code>ListDataListener</code>s that the contents
         * have changed.
         *
         * @param {*} anItem the list object to select or <code>null</code>
         * to clear the selection
         */
        setSelectedItem(anItem: any): any;
        /**
         * Returns the selected item
         * @return {*} The selected item or <code>null</code> if there is no selection
         */
        getSelectedItem(): any;
    }
}
declare namespace javax.swing {
    /**
     * A model that supports at most one indexed selection.
     *
     * @author Dave Moore
     * @class
     */
    interface SingleSelectionModel {
        /**
         * Returns the model's selection.
         *
         * @return  {number} the model's selection, or -1 if there is no selection
         * @see     #setSelectedIndex
         */
        getSelectedIndex(): number;
        /**
         * Sets the model's selected index to <I>index</I>.
         *
         * Notifies any listeners if the model changes
         *
         * @param {number} index an int specifying the model selection
         * @see   #getSelectedIndex
         * @see   #addChangeListener
         */
        setSelectedIndex(index: number): any;
        /**
         * Clears the selection (to -1).
         */
        clearSelection(): any;
        /**
         * Returns true if the selection model currently has a selected value.
         * @return {boolean} true if a value is currently selected
         */
        isSelected(): boolean;
        /**
         * Adds <I>listener</I> as a listener to changes in the model.
         * @param {*} listener the ChangeListener to add
         */
        addChangeListener(listener: javax.swing.event.ChangeListener): any;
        /**
         * Removes <I>listener</I> as a listener to changes in the model.
         * @param {*} listener the ChangeListener to remove
         */
        removeChangeListener(listener: javax.swing.event.ChangeListener): any;
    }
}
declare namespace javax.swing {
    /**
     * A MenuSelectionManager owns the selection in menu hierarchy.
     *
     * @author Arnaud Weber
     * @class
     */
    class MenuSelectionManager {
    }
}
declare namespace javax.swing {
    class DefaultButtonModel implements javax.swing.ButtonModel, java.io.Serializable {
        stateMask: number;
        actionCommand: string;
        group: javax.swing.ButtonGroup;
        mnemonic: number;
        changeEvent: javax.swing.event.ChangeEvent;
        listenerList: javax.swing.event.EventListenerList;
        menuItem: boolean;
        constructor();
        static ARMED: number;
        static SELECTED: number;
        static PRESSED: number;
        static ENABLED: number;
        static ROLLOVER: number;
        setActionCommand(actionCommand: string): void;
        getActionCommand(): string;
        isArmed(): boolean;
        isSelected(): boolean;
        isEnabled(): boolean;
        isPressed(): boolean;
        isRollover(): boolean;
        setArmed(b: boolean): void;
        setEnabled(b: boolean): void;
        setSelected(b: boolean): void;
        setPressed(b: boolean): void;
        setRollover(b: boolean): void;
        setMnemonic(key: number): void;
        getMnemonic(): number;
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        getChangeListeners(): javax.swing.event.ChangeListener[];
        fireStateChanged(): void;
        addActionListener(l: java.awt.event.ActionListener): void;
        removeActionListener(l: java.awt.event.ActionListener): void;
        getActionListeners(): java.awt.event.ActionListener[];
        fireActionPerformed(e: java.awt.event.ActionEvent): void;
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        fireItemStateChanged(e: java.awt.event.ItemEvent): void;
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        getSelectedObjects(): any[];
        setGroup(group: javax.swing.ButtonGroup): void;
        getGroup(): javax.swing.ButtonGroup;
        isMenuItem(): boolean;
        setMenuItem(menuItem: boolean): void;
    }
}
declare namespace javax.swing {
    /**
     * A package-private PropertyChangeListener which listens for property changes
     * on an Action and updates the properties of an ActionEvent source.
     * <p>
     * Subclasses must override the actionPropertyChanged method, which is invoked
     * from the propertyChange method as long as the target is still valid.
     * </p>
     * <p>
     * WARNING WARNING WARNING WARNING WARNING WARNING:<br>
     * Do NOT create an annonymous inner class that extends this! If you do a strong
     * reference will be held to the containing class, which in most cases defeats
     * the purpose of this class.
     *
     * @param T
     * the type of JComponent the underlying Action is attached to
     *
     * @author Georges Saab
     * @see AbstractButton
     * @param {javax.swing.JComponent} c
     * @param {*} a
     * @class
     */
    abstract class ActionPropertyChangeListener<T extends javax.swing.JComponent> implements java.beans.PropertyChangeListener, java.io.Serializable {
        target: T;
        action: javax.swing.Action;
        constructor(c: T, a: javax.swing.Action);
        propertyChange(e: java.beans.PropertyChangeEvent): void;
        abstract actionPropertyChanged(target: T, action: javax.swing.Action, e: java.beans.PropertyChangeEvent): any;
        setTarget(c: T): void;
        getTarget(): T;
        getAction(): javax.swing.Action;
    }
}
declare namespace javax.swing {
    /**
     * Any component that can be placed into a menu should implement this interface.
     * This interface is used by <code>MenuSelectionManager</code>
     * to handle selection and navigation in menu hierarchies.
     *
     * @author Arnaud Weber
     * @class
     */
    interface MenuElement {
        /**
         * Process a key event.
         * @param {java.awt.event.KeyEvent} event
         * @param {javax.swing.MenuElement[]} path
         * @param {javax.swing.MenuSelectionManager} manager
         */
        processKeyEvent(event: java.awt.event.KeyEvent, path: MenuElement[], manager: javax.swing.MenuSelectionManager): any;
        /**
         * Call by the <code>MenuSelectionManager</code> when the
         * <code>MenuElement</code> is added or remove from
         * the menu selection.
         * @param {boolean} isIncluded
         */
        menuSelectionChanged(isIncluded: boolean): any;
        /**
         * This method should return an array containing the sub-elements for the receiving menu element
         *
         * @return {javax.swing.MenuElement[]} an array of MenuElements
         */
        getSubElements(): MenuElement[];
        /**
         * This method should return the java.awt.Component used to paint the receiving element.
         * The returned component will be used to convert events and detect if an event is inside
         * a MenuElement's component.
         *
         * @return {java.awt.Component} the Component value
         */
        getComponent(): java.awt.Component;
    }
}
declare namespace javax.swing {
    /**
     * Creates an {@code Action} with the specified name and small icon.
     *
     * @param {string} name
     * the name ({@code Action.NAME}) for the action; a value of
     * {@code null} is ignored
     * @param {*} icon
     * the small icon ({@code Action.SMALL_ICON}) for the action; a
     * value of {@code null} is ignored
     * @class
     * @author Georges Saab
     */
    abstract class AbstractAction implements javax.swing.Action, java.lang.Cloneable, java.io.Serializable {
        /**
         * Whether or not actions should reconfigure all properties on null.
         */
        static RECONFIGURE_ON_NULL: boolean;
        /**
         * Specifies whether action is enabled; the default is true.
         */
        enabled: boolean;
        /**
         * Contains the array of key bindings.
         */
        arrayTable: java.util.Map<string, any>;
        /**
         * Sets the enabled state of a component from an Action.
         *
         * @param {javax.swing.JComponent} c
         * the Component to set the enabled state on
         * @param {*} a
         * the Action to set the enabled state from, may be null
         */
        static setEnabledFromAction(c: javax.swing.JComponent, a: javax.swing.Action): void;
        /**
         * Sets the tooltip text of a component from an Action.
         *
         * @param {javax.swing.JComponent} c
         * the Component to set the tooltip text on
         * @param {*} a
         * the Action to set the tooltip text from, may be null
         */
        static setToolTipTextFromAction(c: javax.swing.JComponent, a: javax.swing.Action): void;
        static hasSelectedKey(a: javax.swing.Action): boolean;
        static isSelected(a: javax.swing.Action): boolean;
        constructor(name?: any, icon?: any);
        /**
         * Gets the <code>Object</code> associated with the specified key.
         *
         * @param {string} key
         * a string containing the specified <code>key</code>
         * @return {*} the binding <code>Object</code> stored with this key; if there
         * are no keys, it will return <code>null</code>
         * @see Action#getValue
         */
        getValue(key: string): any;
        /**
         * Sets the <code>Value</code> associated with the specified key.
         *
         * @param {string} key
         * the <code>String</code> that identifies the stored object
         * @param {*} newValue
         * the <code>Object</code> to store using this key
         * @see Action#putValue
         */
        putValue(key: string, newValue: any): void;
        /**
         * Returns true if the action is enabled.
         *
         * @return {boolean} true if the action is enabled, false otherwise
         * @see Action#isEnabled
         */
        isEnabled(): boolean;
        /**
         * Sets whether the {@code Action} is enabled. The default is {@code true}.
         *
         * @param {boolean} newValue
         * {@code true} to enable the action, {@code false} to disable it
         * @see Action#setEnabled
         */
        setEnabled(newValue: boolean): void;
        /**
         * Returns an array of <code>Object</code>s which are keys for which values
         * have been set for this <code>AbstractAction</code>, or <code>null</code>
         * if no keys have values set.
         *
         * @return {java.lang.Object[]} an array of key objects, or <code>null</code> if no keys have
         * values set
         * @since 1.3
         */
        getKeys(): any[];
        /**
         * If any <code>PropertyChangeListeners</code> have been registered, the
         * <code>changeSupport</code> field describes them.
         */
        changeSupport: javax.swing.event.SwingPropertyChangeSupport;
        /**
         * Supports reporting bound property changes. This method can be called when
         * a bound property has changed and it will send the appropriate
         * <code>PropertyChangeEvent</code> to any registered
         * <code>PropertyChangeListeners</code>.
         * @param {string} propertyName
         * @param {*} oldValue
         * @param {*} newValue
         */
        firePropertyChange(propertyName: string, oldValue: any, newValue: any): void;
        /**
         * Adds a <code>PropertyChangeListener</code> to the listener list. The
         * listener is registered for all properties.
         * <p>
         * A <code>PropertyChangeEvent</code> will get fired in response to setting
         * a bound property, e.g. <code>setFont</code>, <code>setBackground</code>,
         * or <code>setForeground</code>. Note that if the current component is
         * inheriting its foreground, background, or font from its container, then
         * no event will be fired in response to a change in the inherited property.
         *
         * @param {*} listener
         * The <code>PropertyChangeListener</code> to be added
         *
         * @see Action#addPropertyChangeListener
         */
        addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        /**
         * Removes a <code>PropertyChangeListener</code> from the listener list.
         * This removes a <code>PropertyChangeListener</code> that was registered
         * for all properties.
         *
         * @param {*} listener
         * the <code>PropertyChangeListener</code> to be removed
         *
         * @see Action#removePropertyChangeListener
         */
        removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        /**
         * Returns an array of all the <code>PropertyChangeListener</code>s added to
         * this AbstractAction with addPropertyChangeListener().
         *
         * @return {java.beans.PropertyChangeListener[]} all of the <code>PropertyChangeListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
        /**
         * Clones the abstract action. This gives the clone its own copy of the
         * key/value list, which is not handled for you by
         * <code>Object.clone()</code>.
         * @return {*}
         */
        clone(): any;
        abstract actionPerformed(ae?: any): any;
    }
}
declare namespace javax.swing {
    /**
     * This interface defines the methods components like JList use
     * to get the value of each cell in a list and the length of the list.
     * Logically the model is a vector, indices vary from 0 to
     * ListDataModel.getSize() - 1.  Any change to the contents or
     * length of the data model must be reported to all of the
     * ListDataListeners.
     *
     * @param <E> the type of the elements of this model
     *
     * @author Hans Muller
     * @see JList
     * @class
     */
    interface ListModel<E> {
        /**
         * Returns the length of the list.
         * @return {number} the length of the list
         */
        getSize(): number;
        /**
         * Returns the value at the specified index.
         * @param {number} index the requested index
         * @return {*} the value at <code>index</code>
         */
        getElementAt(index: number): E;
        /**
         * Adds a listener to the list that's notified each time a change
         * to the data model occurs.
         * @param {*} l the <code>ListDataListener</code> to be added
         */
        addListDataListener(l: javax.swing.event.ListDataListener): any;
        /**
         * Removes a listener from the list that's notified each time a
         * change to the data model occurs.
         * @param {*} l the <code>ListDataListener</code> to be removed
         */
        removeListDataListener(l: javax.swing.event.ListDataListener): any;
    }
}
declare namespace javax.swing {
    /**
     * Identifies components that can be used as "rubber stamps" to paint
     * the cells in a JList.  For example, to use a JLabel as a
     * ListCellRenderer, you would write something like this:
     * <pre>
     * {@code
     * class MyCellRenderer extends JLabel implements ListCellRenderer<Object> {
     * public MyCellRenderer() {
     * setOpaque(true);
     * }
     *
     * public Component getListCellRendererComponent(JList<?> list,
     * Object value,
     * int index,
     * boolean isSelected,
     * boolean cellHasFocus) {
     *
     * setText(value.toString());
     *
     * Color background;
     * Color foreground;
     *
     * // check if this cell represents the current DnD drop location
     * JList.DropLocation dropLocation = list.getDropLocation();
     * if (dropLocation != null
     * && !dropLocation.isInsert()
     * && dropLocation.getIndex() == index) {
     *
     * background = Color.BLUE;
     * foreground = Color.WHITE;
     *
     * // check if this cell is selected
     * } else if (isSelected) {
     * background = Color.RED;
     * foreground = Color.WHITE;
     *
     * // unselected, and not the DnD drop location
     * } else {
     * background = Color.WHITE;
     * foreground = Color.BLACK;
     * };
     *
     * setBackground(background);
     * setForeground(foreground);
     *
     * return this;
     * }
     * }
     * }
     * </pre>
     *
     * @param <E> the type of values this renderer can be used for
     *
     * @see JList
     * @see DefaultListCellRenderer
     *
     * @author Hans Muller
     * @class
     */
    interface ListCellRenderer<E> {
        /**
         * Return a component that has been configured to display the specified
         * value. That component's <code>paint</code> method is then called to
         * "render" the cell.  If it is necessary to compute the dimensions
         * of a list because the list cells do not have a fixed size, this method
         * is called to generate a component on which <code>getPreferredSize</code>
         * can be invoked.
         *
         * @param {javax.swing.JList} list The JList we're painting.
         * @param {*} value The value returned by list.getModel().getElementAt(index).
         * @param {number} index The cells index.
         * @param {boolean} isSelected True if the specified cell was selected.
         * @param {boolean} cellHasFocus True if the specified cell has the focus.
         * @return {java.awt.Component} A component whose paint() method will render the specified value.
         *
         * @see JList
         * @see ListSelectionModel
         * @see ListModel
         */
        getListCellRendererComponent(list: javax.swing.JList<any>, value: E, index: number, isSelected: boolean, cellHasFocus: boolean): java.awt.Component;
    }
}
declare namespace javax.swing {
    interface Action extends java.awt.event.ActionListener {
        getValue(key: string): any;
        putValue(key: string, value: any): any;
        setEnabled(b: boolean): any;
        isEnabled(): boolean;
        addPropertyChangeListener(listener: java.beans.PropertyChangeListener): any;
        removePropertyChangeListener(listener: java.beans.PropertyChangeListener): any;
    }
    namespace Action {
        const DEFAULT: string;
        const NAME: string;
        const SHORT_DESCRIPTION: string;
        const LONG_DESCRIPTION: string;
        const SMALL_ICON: string;
        const ACTION_COMMAND_KEY: string;
        const ACCELERATOR_KEY: string;
        const MNEMONIC_KEY: string;
        const SELECTED_KEY: string;
        const DISPLAYED_MNEMONIC_INDEX_KEY: string;
        const LARGE_ICON_KEY: string;
    }
}
declare namespace javax.swing.text {
    /**
     * Represents a location within a document.  It is intended to abstract away
     * implementation details of the document and enable specification of
     * positions within the document that are capable of tracking of change as
     * the document is edited.
     * <p>
     * A {@code Position} object points at a location between two characters.
     * As the surrounding content is altered, the {@code Position} object
     * adjusts its offset automatically to reflect the changes. If content is
     * inserted or removed before the {@code Position} object's location, then the
     * {@code Position} increments or decrements its offset, respectively,
     * so as to point to the same location. If a portion of the document is removed
     * that contains a {@code Position}'s offset, then the {@code Position}'s
     * offset becomes that of the beginning of the removed region. For example, if
     * a {@code Position} has an offset of 5 and the region 2-10 is removed, then
     * the {@code Position}'s offset becomes 2.
     * <p>
     * {@code Position} with an offset of 0 is a special case. It never changes its
     * offset while document content is altered.
     *
     * @author  Timothy Prinzing
     * @class
     */
    interface Position {
        /**
         * Fetches the current offset within the document.
         *
         * @return {number} the offset &gt;= 0
         */
        getOffset(): number;
    }
    namespace Position {
        /**
         * A typesafe enumeration to indicate bias to a position
         * in the model.  A position indicates a location between
         * two characters.  The bias can be used to indicate an
         * interest toward one of the two sides of the position
         * in boundary conditions where a simple offset is
         * ambiguous.
         * @class
         */
        class Bias {
            /**
             * Indicates to bias toward the next character
             * in the model.
             */
            static Forward: Position.Bias;
            static Forward_$LI$(): Position.Bias;
            /**
             * Indicates a bias toward the previous character
             * in the model.
             */
            static Backward: Position.Bias;
            static Backward_$LI$(): Position.Bias;
            /**
             * string representation
             * @return {string}
             */
            toString(): string;
            constructor(name: string);
            name: string;
        }
    }
}
declare namespace javax.swing {
    class ButtonGroup implements java.io.Serializable {
        buttons: java.util.Vector<javax.swing.AbstractButton>;
        selection: javax.swing.ButtonModel;
        constructor();
        add(b: javax.swing.AbstractButton): void;
        remove(b: javax.swing.AbstractButton): void;
        clearSelection(): void;
        getElements(): java.util.Enumeration<javax.swing.AbstractButton>;
        getSelection(): javax.swing.ButtonModel;
        setSelected(m: javax.swing.ButtonModel, b: boolean): void;
        isSelected(m: javax.swing.ButtonModel): boolean;
        getButtonCount(): number;
    }
}
declare namespace javax.swing {
    class BoxLayout implements java.awt.LayoutManager2, java.io.Serializable {
        static X_AXIS: number;
        static Y_AXIS: number;
        static LINE_AXIS: number;
        static PAGE_AXIS: number;
        table: HTMLTableElement;
        constructor(target: java.awt.Container, axis: number);
        getTarget(): java.awt.Container;
        getAxis(): number;
        invalidateLayout(target: java.awt.Container): void;
        addLayoutComponent$java_lang_String$java_awt_Component(name: string, comp: java.awt.Component): void;
        addLayoutComponent(name?: any, comp?: any): any;
        removeLayoutComponent(comp: java.awt.Component): void;
        addLayoutComponent$java_awt_Component$java_lang_Object(comp: java.awt.Component, constraints: any): void;
        getLayoutAlignmentX(target: java.awt.Container): number;
        getLayoutAlignmentY(target: java.awt.Container): number;
        /**
         *
         * @param {java.awt.Container} target
         */
        layoutContainer(target: java.awt.Container): void;
        axis: number;
        target: java.awt.Container;
    }
}
declare namespace javax.swing.event {
    /**
     * Defines a listener for menu events.
     *
     * @author Georges Saab
     * @class
     */
    interface MenuListener extends java.util.EventListener {
        /**
         * Invoked when a menu is selected.
         *
         * @param {javax.swing.event.MenuEvent} e  a MenuEvent object
         */
        menuSelected(e: javax.swing.event.MenuEvent): any;
        /**
         * Invoked when the menu is deselected.
         *
         * @param {javax.swing.event.MenuEvent} e  a MenuEvent object
         */
        menuDeselected(e: javax.swing.event.MenuEvent): any;
        /**
         * Invoked when the menu is canceled.
         *
         * @param {javax.swing.event.MenuEvent} e  a MenuEvent object
         */
        menuCanceled(e: javax.swing.event.MenuEvent): any;
    }
}
declare namespace javax.swing.event {
    /**
     * Represents a change in selection status between {@code firstIndex} and
     * {@code lastIndex}, inclusive. {@code firstIndex} is less than or equal to
     * {@code lastIndex}. The selection of at least one index within the range will
     * have changed.
     *
     * @param {number} firstIndex the first index in the range, &lt;= lastIndex
     * @param {number} lastIndex the last index in the range, &gt;= firstIndex
     * @param {boolean} isAdjusting whether or not this is one in a series of
     * multiple events, where changes are still being made
     * @param {*} source
     * @class
     * @extends java.util.EventObject
     * @author Hans Muller
     */
    class ListSelectionEvent extends java.util.EventObject {
        firstIndex: number;
        lastIndex: number;
        isAdjusting: boolean;
        constructor(source: any, firstIndex: number, lastIndex: number, isAdjusting: boolean);
        /**
         * Returns the index of the first row whose selection may have changed.
         * {@code getFirstIndex() &lt;= getLastIndex()}
         *
         * @return {number} the first row whose selection value may have changed,
         * where zero is the first row
         */
        getFirstIndex(): number;
        /**
         * Returns the index of the last row whose selection may have changed.
         * {@code getLastIndex() &gt;= getFirstIndex()}
         *
         * @return {number} the last row whose selection value may have changed,
         * where zero is the first row
         */
        getLastIndex(): number;
        /**
         * Returns whether or not this is one in a series of multiple events,
         * where changes are still being made. See the documentation for
         * {@link javax.swing.ListSelectionModel#setValueIsAdjusting} for
         * more details on how this is used.
         *
         * @return {boolean} {@code true} if this is one in a series of multiple events,
         * where changes are still being made
         */
        getValueIsAdjusting(): boolean;
        /**
         * Returns a {@code String} that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.event {
    /**
     * The listener that's notified when a lists selection value
     * changes.
     *
     * @see javax.swing.ListSelectionModel
     *
     * @author Hans Muller
     * @class
     */
    interface ListSelectionListener extends java.util.EventListener {
        /**
         * Called whenever the value of the selection changes.
         * @param {javax.swing.event.ListSelectionEvent} e the event that characterizes the change.
         */
        valueChanged(e: javax.swing.event.ListSelectionEvent): any;
    }
}
declare namespace javax.swing.event {
    /**
     * Interface implemented by a class interested in hearing about
     * undoable operations.
     *
     * @author Ray Ryan
     * @class
     */
    interface UndoableEditListener extends java.util.EventListener {
        /**
         * An undoable edit happened
         * @param {javax.swing.event.UndoableEditEvent} e
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): any;
    }
}
declare namespace javax.swing.event {
    /**
     * A popup menu listener
     *
     * @author Arnaud Weber
     * @class
     */
    interface PopupMenuListener extends java.util.EventListener {
        /**
         * This method is called before the popup menu becomes visible
         * @param {javax.swing.event.PopupMenuEvent} e
         */
        popupMenuWillBecomeVisible(e: javax.swing.event.PopupMenuEvent): any;
        /**
         * This method is called before the popup menu becomes invisible
         * Note that a JPopupMenu can become invisible any time
         * @param {javax.swing.event.PopupMenuEvent} e
         */
        popupMenuWillBecomeInvisible(e: javax.swing.event.PopupMenuEvent): any;
        /**
         * This method is called when the popup menu is canceled
         * @param {javax.swing.event.PopupMenuEvent} e
         */
        popupMenuCanceled(e: javax.swing.event.PopupMenuEvent): any;
    }
}
declare namespace javax.swing.event {
    /**
     * Constructs a MenuEvent object.
     *
     * @param {*} source  the Object that originated the event
     * (typically <code>this</code>)
     * @class
     * @extends java.util.EventObject
     * @author Georges Saab
     */
    class MenuEvent extends java.util.EventObject {
        constructor(source: any);
    }
}
declare namespace javax.swing.event {
    class ListDataEvent extends java.util.EventObject {
        static CONTENTS_CHANGED: number;
        static INTERVAL_ADDED: number;
        static INTERVAL_REMOVED: number;
        type: number;
        index0: number;
        index1: number;
        getType(): number;
        getIndex0(): number;
        getIndex1(): number;
        constructor(source: any, type: number, index0: number, index1: number);
        toString(): string;
    }
}
declare namespace javax.swing.event {
    interface ListDataListener extends java.util.EventListener {
        intervalAdded(e: javax.swing.event.ListDataEvent): any;
        intervalRemoved(e: javax.swing.event.ListDataEvent): any;
        contentsChanged(e: javax.swing.event.ListDataEvent): any;
    }
}
declare namespace javax.swing.event {
    class EventListenerList implements java.io.Serializable {
        static NULL_ARRAY: any[];
        static NULL_ARRAY_$LI$(): any[];
        listenerList: any[];
        getListenerList(): any[];
        getListeners$java_lang_Class<T extends java.util.EventListener>(t: any): T[];
        getListeners<T0 = any>(t?: any): any;
        getListeners$java_lang_String<T extends java.util.EventListener>(t: string): T[];
        getListenerCount$(): number;
        getListenerCount$java_lang_Class(t: any): number;
        getListenerCount$java_lang_String(t: string): number;
        getListenerCount$java_lang_Object_A$java_lang_Class(list: any[], t: any): number;
        getListenerCount(list?: any, t?: any): number;
        getListenerCount$java_lang_Object_A$java_lang_String(list: any[], t: string): number;
        add<T extends java.util.EventListener>(t: any, l: T): void;
        remove<T extends java.util.EventListener>(t: any, l: T): void;
        /**
         * Returns a string representation of the EventListenerList.
         * @return {string}
         */
        toString(): string;
        constructor();
    }
}
declare namespace javax.swing.event {
    /**
     * Constructs a PopupMenuEvent object.
     *
     * @param {*} source  the Object that originated the event
     * (typically <code>this</code>)
     * @class
     * @extends java.util.EventObject
     * @author Arnaud Weber
     */
    class PopupMenuEvent extends java.util.EventObject {
        constructor(source: any);
    }
}
declare namespace javax.swing.event {
    interface ChangeListener extends java.util.EventListener {
        stateChanged(e: javax.swing.event.ChangeEvent): any;
    }
}
declare namespace javax.swing.event {
    class ChangeEvent extends java.util.EventObject {
        constructor(source: any);
    }
}
declare namespace javax.swing.event {
    /**
     * MenuKeyListener
     *
     * @author Georges Saab
     * @class
     */
    interface MenuKeyListener extends java.util.EventListener {
        /**
         * Invoked when a key has been typed.
         * This event occurs when a key press is followed by a key release.
         * @param {javax.swing.event.MenuKeyEvent} e
         */
        menuKeyTyped(e: javax.swing.event.MenuKeyEvent): any;
        /**
         * Invoked when a key has been pressed.
         * @param {javax.swing.event.MenuKeyEvent} e
         */
        menuKeyPressed(e: javax.swing.event.MenuKeyEvent): any;
        /**
         * Invoked when a key has been released.
         * @param {javax.swing.event.MenuKeyEvent} e
         */
        menuKeyReleased(e: javax.swing.event.MenuKeyEvent): any;
    }
}
declare namespace javax.swing.event {
    /**
     * Constructs an UndoableEditEvent object.
     *
     * @param {*} source  the Object that originated the event
     * (typically <code>this</code>)
     * @param {*} edit    an UndoableEdit object
     * @class
     * @extends java.util.EventObject
     * @author Ray Ryan
     */
    class UndoableEditEvent extends java.util.EventObject {
        myEdit: javax.swing.undo.UndoableEdit;
        constructor(source: any, edit: javax.swing.undo.UndoableEdit);
        /**
         * Returns the edit value.
         *
         * @return {*} the UndoableEdit object encapsulating the edit
         */
        getEdit(): javax.swing.undo.UndoableEdit;
    }
}
declare namespace javax.imageio {
    class ImageIO {
        static read(input: java.io.File): java.awt.image.BufferedImage;
    }
}
declare namespace sun.awt.geom {
    class Order2 extends sun.awt.geom.Curve {
        x0: number;
        y0: number;
        cx0: number;
        cy0: number;
        x1: number;
        y1: number;
        xmin: number;
        xmax: number;
        xcoeff0: number;
        xcoeff1: number;
        xcoeff2: number;
        ycoeff0: number;
        ycoeff1: number;
        ycoeff2: number;
        static insert(curves: java.util.Vector<any>, tmp: number[], x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number): void;
        static addInstance(curves: java.util.Vector<any>, x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number): void;
        static getHorizontalParams(c0: number, cp: number, c1: number, ret: number[]): number;
        static split(coords: number[], pos: number, t: number): void;
        constructor(x0: number, y0: number, cx0: number, cy0: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getCX0(): number;
        getCY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        static TforY(y: number, ycoeff0: number, ycoeff1: number, ycoeff2: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve$double$double$int(ystart: number, yend: number, dir: number): sun.awt.geom.Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): sun.awt.geom.Curve;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
        controlPointString(): string;
    }
}
declare namespace sun.awt.geom {
    class Order3 extends sun.awt.geom.Curve {
        x0: number;
        y0: number;
        cx0: number;
        cy0: number;
        cx1: number;
        cy1: number;
        x1: number;
        y1: number;
        xmin: number;
        xmax: number;
        xcoeff0: number;
        xcoeff1: number;
        xcoeff2: number;
        xcoeff3: number;
        ycoeff0: number;
        ycoeff1: number;
        ycoeff2: number;
        ycoeff3: number;
        static insert(curves: java.util.Vector<any>, tmp: number[], x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number): void;
        static addInstance(curves: java.util.Vector<any>, x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number): void;
        static getHorizontalParams(c0: number, cp0: number, cp1: number, c1: number, ret: number[]): number;
        static split(coords: number[], pos: number, t: number): void;
        constructor(x0: number, y0: number, cx0: number, cy0: number, cx1: number, cy1: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getCX0(): number;
        getCY0(): number;
        getCX1(): number;
        getCY1(): number;
        getX1(): number;
        getY1(): number;
        TforY1: number;
        YforT1: number;
        TforY2: number;
        YforT2: number;
        TforY3: number;
        YforT3: number;
        TforY(y: number): number;
        refine(a: number, b: number, c: number, target: number, t: number): number;
        XforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve$double$double$int(ystart: number, yend: number, dir: number): sun.awt.geom.Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): sun.awt.geom.Curve;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
        controlPointString(): string;
    }
}
declare namespace sun.awt.geom {
    class Order0 extends sun.awt.geom.Curve {
        x: number;
        y: number;
        constructor(x: number, y: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        crossingsFor(x: number, y: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve$double$double$int(ystart: number, yend: number, dir: number): sun.awt.geom.Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): sun.awt.geom.Curve;
        getReversedCurve(): sun.awt.geom.Curve;
        getSegment(coords: number[]): number;
    }
}
declare namespace sun.awt.geom {
    class Order1 extends sun.awt.geom.Curve {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        xmin: number;
        xmax: number;
        constructor(x0: number, y0: number, x1: number, y1: number, direction: number);
        getOrder(): number;
        getXTop(): number;
        getYTop(): number;
        getXBot(): number;
        getYBot(): number;
        getXMin(): number;
        getXMax(): number;
        getX0(): number;
        getY0(): number;
        getX1(): number;
        getY1(): number;
        XforY(y: number): number;
        TforY(y: number): number;
        XforT(t: number): number;
        YforT(t: number): number;
        dXforT(t: number, deriv: number): number;
        dYforT(t: number, deriv: number): number;
        nextVertical(t0: number, t1: number): number;
        accumulateCrossings(c: sun.awt.geom.Crossings): boolean;
        enlarge(r: java.awt.geom.Rectangle2D): void;
        getSubCurve$double$double$int(ystart: number, yend: number, dir: number): sun.awt.geom.Curve;
        getSubCurve(ystart?: any, yend?: any, dir?: any): sun.awt.geom.Curve;
        getReversedCurve(): sun.awt.geom.Curve;
        compareTo(other: sun.awt.geom.Curve, yrange: number[]): number;
        getSegment(coords: number[]): number;
    }
}
declare namespace java.beans {
    /**
     * Constructs a new <code>IndexedPropertyChangeEvent</code> object.
     *
     * @param {*} source  The bean that fired the event.
     * @param {string} propertyName  The programmatic name of the property that
     * was changed.
     * @param {*} oldValue      The old value of the property.
     * @param {*} newValue      The new value of the property.
     * @param {number} index index of the property element that was changed.
     * @class
     * @extends java.beans.PropertyChangeEvent
     * @author Mark Davidson
     */
    class IndexedPropertyChangeEvent extends java.beans.PropertyChangeEvent {
        static serialVersionUID: number;
        index: number;
        constructor(source: any, propertyName: string, oldValue: any, newValue: any, index: number);
        /**
         * Gets the index of the property that was changed.
         *
         * @return {number} The index specifying the property element that was
         * changed.
         */
        getIndex(): number;
        appendTo(sb: java.lang.StringBuilder): void;
    }
}
declare namespace java.beans {
    class PropertyChangeSupport implements java.io.Serializable {
        map: PropertyChangeSupport.PropertyChangeListenerMap;
        constructor(sourceBean: any);
        addPropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        removePropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        getPropertyChangeListeners$(): java.beans.PropertyChangeListener[];
        addPropertyChangeListener$java_lang_String$java_beans_PropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        addPropertyChangeListener(propertyName?: any, listener?: any): any;
        removePropertyChangeListener$java_lang_String$java_beans_PropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        removePropertyChangeListener(propertyName?: any, listener?: any): any;
        getPropertyChangeListeners$java_lang_String(propertyName: string): java.beans.PropertyChangeListener[];
        getPropertyChangeListeners(propertyName?: any): java.beans.PropertyChangeListener[];
        firePropertyChange$java_lang_String$java_lang_Object$java_lang_Object(propertyName: string, oldValue: any, newValue: any): void;
        firePropertyChange$java_lang_String$int$int(propertyName: string, oldValue: number, newValue: number): void;
        firePropertyChange(propertyName?: any, oldValue?: any, newValue?: any): any;
        firePropertyChange$java_lang_String$boolean$boolean(propertyName: string, oldValue: boolean, newValue: boolean): void;
        firePropertyChange$java_beans_PropertyChangeEvent(event: java.beans.PropertyChangeEvent): void;
        static fire(listeners: java.beans.PropertyChangeListener[], event: java.beans.PropertyChangeEvent): void;
        fireIndexedPropertyChange$java_lang_String$int$java_lang_Object$java_lang_Object(propertyName: string, index: number, oldValue: any, newValue: any): void;
        fireIndexedPropertyChange$java_lang_String$int$int$int(propertyName: string, index: number, oldValue: number, newValue: number): void;
        fireIndexedPropertyChange(propertyName?: any, index?: any, oldValue?: any, newValue?: any): any;
        fireIndexedPropertyChange$java_lang_String$int$boolean$boolean(propertyName: string, index: number, oldValue: boolean, newValue: boolean): void;
        hasListeners(propertyName: string): boolean;
        source: any;
        static serialVersionUID: number;
    }
    namespace PropertyChangeSupport {
        class PropertyChangeListenerMap extends java.beans.ChangeListenerMap<java.beans.PropertyChangeListener> {
            static EMPTY: java.beans.PropertyChangeListener[];
            static EMPTY_$LI$(): java.beans.PropertyChangeListener[];
            /**
             *
             * @param {number} length
             * @return {java.beans.PropertyChangeListener[]}
             */
            newArray(length: number): java.beans.PropertyChangeListener[];
            newProxy$java_lang_String$java_beans_PropertyChangeListener(name: string, listener: java.beans.PropertyChangeListener): java.beans.PropertyChangeListener;
            /**
             *
             * @param {string} name
             * @param {*} listener
             * @return {*}
             */
            newProxy(name?: any, listener?: any): any;
            extract$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): java.beans.PropertyChangeListener;
            extract(listener?: any): any;
            constructor();
        }
    }
}
declare namespace java.awt.image {
    class BufferedImage extends java.awt.Image implements java.awt.image.RenderedImage {
        constructor(src: string);
        getWidth(observer?: any): number;
        getWidth$(): number;
        getHeight(observer?: any): number;
        getHeight$(): number;
    }
}
declare namespace java.awt {
    class RenderedImage extends java.awt.Image {
        constructor(src: string);
    }
}
declare namespace java.awt {
    class Label extends java.awt.Component {
        static LEFT: number;
        static CENTER: number;
        static RIGHT: number;
        text: string;
        alignment: number;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor(text?: any, alignment?: any);
        /**
         * Construct a name for this component. Called by getName() when the name is
         * <code>null</code>.
         * @return {string}
         */
        constructComponentName(): string;
        getAlignment(): number;
        setAlignment(alignment: number): void;
        getText(): string;
        setText(text: string): void;
        paramString(): string;
        /**
         *
         * @return {HTMLLabelElement}
         */
        getHTMLElement(): HTMLLabelElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
    }
}
declare namespace java.awt {
    class Choice extends java.awt.Component implements java.awt.ItemSelectable {
        pItems: java.util.Vector<string>;
        selectedIndex: number;
        itemListeners: Array<java.awt.event.ItemListener>;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor();
        createHTML(): void;
        getHTMLElement(): HTMLSelectElement;
        initHTML(): void;
        constructComponentName(): string;
        getItemCount(): number;
        countItems(): number;
        getItem(index: number): string;
        getItemImpl(index: number): string;
        add(item: string): void;
        addItem(item: string): void;
        insertNoInvalidate(item: string, index: number): void;
        insert(item: string, index: number): void;
        remove$java_lang_String(item: string): void;
        remove(item?: any): any;
        remove$int(position: number): void;
        removeNoInvalidate(position: number): void;
        removeAll(): void;
        getSelectedItem(): string;
        getSelectedObjects(): any[];
        getSelectedIndex(): number;
        select$int(pos: number): void;
        select$java_lang_String(str: string): void;
        select(str?: any): any;
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processItemEvent(e: java.awt.event.ItemEvent): void;
        paramString(): string;
    }
}
declare namespace java.awt {
    class Button extends java.awt.Component {
        actionListener: java.awt.event.ActionListener;
        actionCommand: string;
        label: string;
        background: java.awt.Color;
        constructor(label: string);
        /**
         *
         * @return {HTMLButtonElement}
         */
        getHTMLElement(): HTMLButtonElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        initActionListener(): void;
        addActionListener(actionListener: java.awt.event.ActionListener): void;
        setBackground(background: java.awt.Color): void;
    }
}
declare namespace java.awt {
    class Checkbox extends java.awt.Component implements java.awt.ItemSelectable {
        label: string;
        state: boolean;
        group: java.awt.CheckboxGroup;
        itemListeners: Array<java.awt.event.ItemListener>;
        htmlCheckbox: HTMLInputElement;
        htmlLabel: Text;
        static base: string;
        static nameCounter: number;
        static serialVersionUID: number;
        constructor(label?: any, group?: any, state?: any);
        /**
         *
         * @return {HTMLLabelElement}
         */
        getHTMLElement(): HTMLLabelElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        constructComponentName(): string;
        getLabel(): string;
        setLabel(label: string): void;
        getState(): boolean;
        setStateInternal(state: boolean): void;
        setState(state: boolean): void;
        getSelectedObjects(): any[];
        getCheckboxGroup(): java.awt.CheckboxGroup;
        setCheckboxGroup(g: java.awt.CheckboxGroup): void;
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processItemEvent(e: java.awt.event.ItemEvent): void;
        paramString(): string;
    }
}
declare namespace java.awt {
    abstract class Container extends java.awt.Component {
        layoutMgr: java.awt.LayoutManager;
        components: java.awt.Component[];
        insets: java.awt.Insets;
        getLayout(): java.awt.LayoutManager;
        setLayout(mgr: java.awt.LayoutManager): void;
        doLayout(): void;
        layout(): void;
        add$java_awt_Component(component: java.awt.Component): java.awt.Component;
        add$java_awt_Component$int(c: java.awt.Component, index: number): java.awt.Component;
        add$java_lang_String$java_awt_Component(name: string, component: java.awt.Component): java.awt.Component;
        add$java_awt_Component$java_lang_Object(component: java.awt.Component, constraints: any): void;
        add$java_awt_Component$java_lang_Object$int(component: java.awt.Component, constraints: any, index: number): void;
        add(component?: any, constraints?: any, index?: any): any;
        addImpl(component: java.awt.Component, constraints: any, index: number): void;
        /**
         *
         */
        doPaintInternal(): void;
        getComponentCount(): number;
        remove$int(index: number): void;
        getComponent(n: number): java.awt.Component;
        getComponents(): java.awt.Component[];
        removeAll(): void;
        remove$java_awt_Component(comp: java.awt.Component): void;
        remove(comp?: any): any;
        getInsets(): java.awt.Insets;
        setInsets(insets: java.awt.Insets): void;
        setComponentZOrder(component: java.awt.Component, zOrder: number): void;
        constructor();
    }
}
declare namespace java.awt {
    class TextField extends java.awt.Component {
        actionListener: java.awt.event.ActionListener;
        constructor(cols: number);
        /**
         *
         * @return {HTMLInputElement}
         */
        getHTMLElement(): HTMLInputElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        initActionListener(): void;
        addActionListener(actionListener: java.awt.event.ActionListener): void;
        setText(text: string): void;
        getText(): string;
    }
}
declare namespace java.awt.event {
    /**
     * Constructs a <code>TextEvent</code> object.
     * <p> This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code>
     * is <code>null</code>.
     *
     * @param {*} source The (<code>TextComponent</code>) object that
     * originated the event
     * @param {number} id     An integer that identifies the event type.
     * For information on allowable values, see
     * the class description for {@link TextEvent}
     * @throws IllegalArgumentException if <code>source</code> is null
     * @see #getSource()
     * @see #getID()
     * @class
     * @extends java.awt.AWTEvent
     * @author Georges Saab
     */
    class TextEvent extends java.awt.AWTEvent {
        /**
         * The first number in the range of ids used for text events.
         */
        static TEXT_FIRST: number;
        /**
         * The last number in the range of ids used for text events.
         */
        static TEXT_LAST: number;
        /**
         * This event id indicates that object's text changed.
         */
        static TEXT_VALUE_CHANGED: number;
        static TEXT_VALUE_CHANGED_$LI$(): number;
        static __java_awt_event_TextEvent_serialVersionUID: number;
        constructor(source: any, id: number);
        /**
         * Returns a parameter string identifying this text event.
         * This method is useful for event-logging and for debugging.
         *
         * @return {string} a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class ItemEvent extends java.awt.AWTEvent {
        static ITEM_FIRST: number;
        static ITEM_LAST: number;
        static ITEM_STATE_CHANGED: number;
        static ITEM_STATE_CHANGED_$LI$(): number;
        static SELECTED: number;
        static DESELECTED: number;
        item: any;
        stateChange: number;
        static __java_awt_event_ItemEvent_serialVersionUID: number;
        constructor(source: java.awt.ItemSelectable, id: number, item: any, stateChange: number);
        getItemSelectable(): java.awt.ItemSelectable;
        getItem(): any;
        getStateChange(): number;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    /**
     * Constructs an <code>AdjustmentEvent</code> object with the
     * specified Adjustable source, event type, adjustment type, and value.
     * <p> This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code>
     * is <code>null</code>.
     *
     * @param {*} source The <code>Adjustable</code> object where the
     * event originated
     * @param {number} id     An integer indicating the type of event.
     * For information on allowable values, see
     * the class description for {@link AdjustmentEvent}
     * @param {number} type   An integer indicating the adjustment type.
     * For information on allowable values, see
     * the class description for {@link AdjustmentEvent}
     * @param {number} value  The current value of the adjustment
     * @param {boolean} isAdjusting A boolean that equals <code>true</code> if the event is one
     * of a series of multiple adjusting events,
     * otherwise <code>false</code>
     * @throws IllegalArgumentException if <code>source</code> is null
     * @since 1.4
     * @see #getSource()
     * @see #getID()
     * @see #getAdjustmentType()
     * @see #getValue()
     * @see #getValueIsAdjusting()
     * @class
     * @extends java.awt.AWTEvent
     * @author Amy Fowler
     */
    class AdjustmentEvent extends java.awt.AWTEvent {
        /**
         * Marks the first integer id for the range of adjustment event ids.
         */
        static ADJUSTMENT_FIRST: number;
        /**
         * Marks the last integer id for the range of adjustment event ids.
         */
        static ADJUSTMENT_LAST: number;
        /**
         * The adjustment value changed event.
         */
        static ADJUSTMENT_VALUE_CHANGED: number;
        static ADJUSTMENT_VALUE_CHANGED_$LI$(): number;
        /**
         * The unit increment adjustment type.
         */
        static UNIT_INCREMENT: number;
        /**
         * The unit decrement adjustment type.
         */
        static UNIT_DECREMENT: number;
        /**
         * The block decrement adjustment type.
         */
        static BLOCK_DECREMENT: number;
        /**
         * The block increment adjustment type.
         */
        static BLOCK_INCREMENT: number;
        /**
         * The absolute tracking adjustment type.
         */
        static TRACK: number;
        /**
         * The adjustable object that fired the event.
         *
         * @serial
         * @see #getAdjustable
         */
        adjustable: java.awt.Adjustable;
        /**
         * <code>value</code> will contain the new value of the
         * adjustable object.  This value will always be  in a
         * range associated adjustable object.
         *
         * @serial
         * @see #getValue
         */
        value: number;
        /**
         * The <code>adjustmentType</code> describes how the adjustable
         * object value has changed.
         * This value can be increased/decreased by a block or unit amount
         * where the block is associated with page increments/decrements,
         * and a unit is associated with line increments/decrements.
         *
         * @serial
         * @see #getAdjustmentType
         */
        adjustmentType: number;
        /**
         * The <code>isAdjusting</code> is true if the event is one
         * of the series of multiple adjustment events.
         *
         * @since 1.4
         * @serial
         * @see #getValueIsAdjusting
         */
        isAdjusting: boolean;
        static __java_awt_event_AdjustmentEvent_serialVersionUID: number;
        constructor(source?: any, id?: any, type?: any, value?: any, isAdjusting?: any);
        /**
         * Returns the <code>Adjustable</code> object where this event originated.
         *
         * @return {*} the <code>Adjustable</code> object where this event originated
         */
        getAdjustable(): java.awt.Adjustable;
        /**
         * Returns the current value in the adjustment event.
         *
         * @return {number} the current value in the adjustment event
         */
        getValue(): number;
        /**
         * Returns the type of adjustment which caused the value changed
         * event.  It will have one of the following values:
         * <ul>
         * <li>{@link #UNIT_INCREMENT}
         * <li>{@link #UNIT_DECREMENT}
         * <li>{@link #BLOCK_INCREMENT}
         * <li>{@link #BLOCK_DECREMENT}
         * <li>{@link #TRACK}
         * </ul>
         * @return {number} one of the adjustment values listed above
         */
        getAdjustmentType(): number;
        /**
         * Returns <code>true</code> if this is one of multiple
         * adjustment events.
         *
         * @return {boolean} <code>true</code> if this is one of multiple
         * adjustment events, otherwise returns <code>false</code>
         * @since 1.4
         */
        getValueIsAdjusting(): boolean;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class ComponentEvent extends java.awt.AWTEvent {
        static COMPONENT_FIRST: number;
        static COMPONENT_LAST: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_MOVED_$LI$(): number;
        static COMPONENT_RESIZED: number;
        static COMPONENT_RESIZED_$LI$(): number;
        static COMPONENT_SHOWN: number;
        static COMPONENT_SHOWN_$LI$(): number;
        static COMPONENT_HIDDEN: number;
        static COMPONENT_HIDDEN_$LI$(): number;
        static __java_awt_event_ComponentEvent_serialVersionUID: number;
        constructor(source: java.awt.Component, id: number);
        getComponent(): java.awt.Component;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class ActionEvent extends java.awt.AWTEvent {
        static SHIFT_MASK: number;
        static SHIFT_MASK_$LI$(): number;
        static CTRL_MASK: number;
        static CTRL_MASK_$LI$(): number;
        static META_MASK: number;
        static META_MASK_$LI$(): number;
        static ALT_MASK: number;
        static ALT_MASK_$LI$(): number;
        static ACTION_FIRST: number;
        static ACTION_LAST: number;
        static ACTION_PERFORMED: number;
        static ACTION_PERFORMED_$LI$(): number;
        actionCommand: string;
        when: number;
        modifiers: number;
        static __java_awt_event_ActionEvent_serialVersionUID: number;
        constructor(source?: any, id?: any, command?: any, when?: any, modifiers?: any);
        getActionCommand(): string;
        getWhen(): number;
        getModifiers(): number;
        paramString(): string;
    }
}
declare namespace java.awt {
    abstract class Graphics2D extends java.awt.Graphics {
        constructor();
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        abstract draw(s: java.awt.Shape): any;
        drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img: java.awt.Image, xform: java.awt.geom.AffineTransform, obs: java.awt.image.ImageObserver): boolean;
        drawString$java_lang_String$int$int(str: string, x: number, y: number): void;
        drawString(str?: any, x?: any, y?: any): any;
        drawString$java_lang_String$float$float(str: string, x: number, y: number): void;
        abstract fill(s: java.awt.Shape): any;
        abstract setPaint(paint: java.awt.Paint): any;
        abstract setStroke(s: java.awt.Stroke): any;
        abstract setRenderingHint(hintKey: any, hintValue: any): any;
        abstract translate(tx: number, ty: number): any;
        rotate$double(theta: number): void;
        rotate$double$double$double(theta: number, x: number, y: number): void;
        rotate(theta?: any, x?: any, y?: any): any;
        abstract scale(sx: number, sy: number): any;
        abstract shear(shx: number, shy: number): any;
        abstract transform(Tx: java.awt.geom.AffineTransform): any;
        abstract setTransform(Tx: java.awt.geom.AffineTransform): any;
        abstract getTransform(): java.awt.geom.AffineTransform;
        abstract getPaint(): java.awt.Paint;
        abstract setBackground(color: java.awt.Color): any;
        abstract getBackground(): java.awt.Color;
    }
}
declare namespace java.awt {
    /**
     * Constructs and initializes a point at the specified
     * {@code (x,y)} location in the coordinate space.
     * @param {number} x the X coordinate of the newly constructed <code>Point</code>
     * @param {number} y the Y coordinate of the newly constructed <code>Point</code>
     * @since 1.0
     * @class
     * @extends java.awt.geom.Point2D
     * @author      Sami Shaio
     */
    class Point extends java.awt.geom.Point2D implements java.io.Serializable {
        /**
         * The X coordinate of this <code>Point</code>.
         * If no X coordinate is set it will default to 0.
         *
         * @serial
         * @see #getLocation()
         * @see #move(int, int)
         * @since 1.0
         */
        x: number;
        /**
         * The Y coordinate of this <code>Point</code>.
         * If no Y coordinate is set it will default to 0.
         *
         * @serial
         * @see #getLocation()
         * @see #move(int, int)
         * @since 1.0
         */
        y: number;
        static serialVersionUID: number;
        constructor(x?: any, y?: any);
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {number}
         */
        getX(): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {number}
         */
        getY(): number;
        /**
         * Returns the location of this point.
         * This method is included for completeness, to parallel the
         * <code>getLocation</code> method of <code>Component</code>.
         * @return      {java.awt.Point} a copy of this point, at the same location
         * @see         java.awt.Component#getLocation
         * @see         java.awt.Point#setLocation(java.awt.Point)
         * @see         java.awt.Point#setLocation(int, int)
         * @since       1.1
         */
        getLocation(): Point;
        setLocation$java_awt_Point(p: Point): void;
        setLocation$int$int(x: number, y: number): void;
        /**
         * Changes the point to have the specified location.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * Its behavior is identical with <code>move(int,&nbsp;int)</code>.
         * @param       {number} x the X coordinate of the new location
         * @param       {number} y the Y coordinate of the new location
         * @see         java.awt.Component#setLocation(int, int)
         * @see         java.awt.Point#getLocation
         * @see         java.awt.Point#move(int, int)
         * @since       1.1
         */
        setLocation(x?: any, y?: any): any;
        setLocation$double$double(x: number, y: number): void;
        /**
         * Moves this point to the specified location in the
         * {@code (x,y)} coordinate plane. This method
         * is identical with <code>setLocation(int,&nbsp;int)</code>.
         * @param       {number} x the X coordinate of the new location
         * @param       {number} y the Y coordinate of the new location
         * @see         java.awt.Component#setLocation(int, int)
         */
        move(x: number, y: number): void;
        /**
         * Translates this point, at location {@code (x,y)},
         * by {@code dx} along the {@code x} axis and {@code dy}
         * along the {@code y} axis so that it now represents the point
         * {@code (x+dx,y+dy)}.
         *
         * @param       {number} dx   the distance to move this point
         * along the X axis
         * @param       {number} dy    the distance to move this point
         * along the Y axis
         */
        translate(dx: number, dy: number): void;
        /**
         * Determines whether or not two points are equal. Two instances of
         * <code>Point2D</code> are equal if the values of their
         * <code>x</code> and <code>y</code> member fields, representing
         * their position in the coordinate space, are the same.
         * @param {*} obj an object to be compared with this <code>Point2D</code>
         * @return {boolean} <code>true</code> if the object to be compared is
         * an instance of <code>Point2D</code> and has
         * the same values; <code>false</code> otherwise.
         */
        equals(obj: any): boolean;
        /**
         * Returns a string representation of this point and its location
         * in the {@code (x,y)} coordinate space. This method is
         * intended to be used only for debugging purposes, and the content
         * and format of the returned string may vary between implementations.
         * The returned string may be empty but may not be <code>null</code>.
         *
         * @return  {string} a string representation of this point
         */
        toString(): string;
    }
}
declare namespace java.awt {
    /**
     * Constructs a <code>Dimension</code> and initializes
     * it to the specified width and specified height.
     *
     * @param {number} width the specified width
     * @param {number} height the specified height
     * @class
     * @extends java.awt.geom.Dimension2D
     * @author      Sami Shaio
     */
    class Dimension extends java.awt.geom.Dimension2D implements java.io.Serializable {
        /**
         * The width dimension; negative values can be used.
         *
         * @serial
         * @see #getSize
         * @see #setSize
         * @since 1.0
         */
        width: number;
        /**
         * The height dimension; negative values can be used.
         *
         * @serial
         * @see #getSize
         * @see #setSize
         * @since 1.0
         */
        height: number;
        static serialVersionUID: number;
        constructor(width?: any, height?: any);
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {number}
         */
        getWidth(): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {number}
         */
        getHeight(): number;
        setSize$double$double(width: number, height: number): void;
        /**
         * Gets the size of this <code>Dimension</code> object.
         * This method is included for completeness, to parallel the
         * <code>getSize</code> method defined by <code>Component</code>.
         *
         * @return   {java.awt.Dimension} the size of this dimension, a new instance of
         * <code>Dimension</code> with the same width and height
         * @see      java.awt.Dimension#setSize
         * @see      java.awt.Component#getSize
         * @since    1.1
         */
        getSize(): Dimension;
        setSize$java_awt_Dimension(d: Dimension): void;
        setSize$int$int(width: number, height: number): void;
        /**
         * Sets the size of this <code>Dimension</code> object
         * to the specified width and height.
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method defined by <code>Component</code>.
         *
         * @param    {number} width   the new width for this <code>Dimension</code> object
         * @param    {number} height  the new height for this <code>Dimension</code> object
         * @see      java.awt.Dimension#getSize
         * @see      java.awt.Component#setSize
         * @since    1.1
         */
        setSize(width?: any, height?: any): any;
        /**
         * Checks whether two dimension objects have equal values.
         * @param {*} obj
         * @return {boolean}
         */
        equals(obj: any): boolean;
        /**
         * Returns the hash code for this <code>Dimension</code>.
         *
         * @return    {number} a hash code for this <code>Dimension</code>
         */
        hashCode(): number;
        /**
         * Returns a string representation of the values of this
         * <code>Dimension</code> object's <code>height</code> and
         * <code>width</code> fields. This method is intended to be used only
         * for debugging purposes, and the content and format of the returned
         * string may vary between implementations. The returned string may be
         * empty but may not be <code>null</code>.
         *
         * @return  {string} a string representation of this <code>Dimension</code>
         * object
         */
        toString(): string;
    }
}
declare namespace java.awt.geom {
    /**
     * The {@code Path2D} class provides a simple, yet flexible shape which
     * represents an arbitrary geometric path. It can fully represent any path which
     * can be iterated by the {@link PathIterator} interface including all of its
     * segment types and winding rules and it implements all of the basic hit
     * testing methods of the {@link Shape} interface.
     * <p>
     * Use {@link Path2D.Float} when dealing with data that can be represented and
     * used with floating point precision. Use {@link Path2D.Double} for data that
     * requires the accuracy or range of double precision.
     * <p>
     * {@code Path2D} provides exactly those facilities required for basic
     * construction and management of a geometric path and implementation of the
     * above interfaces with little added interpretation. If it is useful to
     * manipulate the interiors of closed geometric shapes beyond simple hit testing
     * then the {@link Area} class provides additional capabilities specifically
     * targeted at closed figures. While both classes nominally implement the
     * {@code Shape} interface, they differ in purpose and together they provide two
     * useful views of a geometric shape where {@code Path2D} deals primarily with a
     * trajectory formed by path segments and {@code Area} deals more with
     * interpretation and manipulation of enclosed regions of 2D geometric space.
     * <p>
     * The {@link PathIterator} interface has more detailed descriptions of the
     * types of segments that make up a path and the winding rules that control how
     * to determine which regions are inside or outside the path.
     *
     * @author Jim Graham
     * @since 1.6
     * @class
     */
    abstract class Path2D implements java.awt.Shape, java.lang.Cloneable {
        /**
         * An even-odd winding rule for determining the interior of a path.
         *
         * @see PathIterator#WIND_EVEN_ODD
         * @since 1.6
         */
        static WIND_EVEN_ODD: number;
        static WIND_EVEN_ODD_$LI$(): number;
        /**
         * A non-zero winding rule for determining the interior of a path.
         *
         * @see PathIterator#WIND_NON_ZERO
         * @since 1.6
         */
        static WIND_NON_ZERO: number;
        static WIND_NON_ZERO_$LI$(): number;
        static SEG_MOVETO: number;
        static SEG_MOVETO_$LI$(): number;
        static SEG_LINETO: number;
        static SEG_LINETO_$LI$(): number;
        static SEG_QUADTO: number;
        static SEG_QUADTO_$LI$(): number;
        static SEG_CUBICTO: number;
        static SEG_CUBICTO_$LI$(): number;
        static SEG_CLOSE: number;
        static SEG_CLOSE_$LI$(): number;
        pointTypes: number[];
        numTypes: number;
        numCoords: number;
        windingRule: number;
        static INIT_SIZE: number;
        static EXPAND_MAX: number;
        constructor(rule?: any, initialTypes?: any);
        abstract cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
        abstract cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
        append$float$float(x: number, y: number): void;
        append$double$double(x: number, y: number): void;
        abstract getPoint(coordindex: number): java.awt.geom.Point2D;
        abstract needRoom(needMove: boolean, newCoords: number): any;
        abstract pointCrossings(px: number, py: number): number;
        abstract rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
        /**
         * Adds a point to the path by moving to the specified coordinates specified
         * in double precision.
         *
         * @param {number} x
         * the specified X coordinate
         * @param {number} y
         * the specified Y coordinate
         * @since 1.6
         */
        abstract moveTo(x: number, y: number): any;
        /**
         * Adds a point to the path by drawing a straight line from the current
         * coordinates to the new specified coordinates specified in double
         * precision.
         *
         * @param {number} x
         * the specified X coordinate
         * @param {number} y
         * the specified Y coordinate
         * @since 1.6
         */
        abstract lineTo(x: number, y: number): any;
        /**
         * Adds a curved segment, defined by two new points, to the path by drawing
         * a Quadratic curve that intersects both the current coordinates and the
         * specified coordinates {@code (x2,y2)}, using the specified point
         * {@code (x1,y1)} as a quadratic parametric control point. All coordinates
         * are specified in double precision.
         *
         * @param {number} x1
         * the X coordinate of the quadratic control point
         * @param {number} y1
         * the Y coordinate of the quadratic control point
         * @param {number} x2
         * the X coordinate of the final end point
         * @param {number} y2
         * the Y coordinate of the final end point
         * @since 1.6
         */
        abstract quadTo(x1: number, y1: number, x2: number, y2: number): any;
        /**
         * Adds a curved segment, defined by three new points, to the path by
         * drawing a B&eacute;zier curve that intersects both the current
         * coordinates and the specified coordinates {@code (x3,y3)}, using the
         * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
         * control points. All coordinates are specified in double precision.
         *
         * @param {number} x1
         * the X coordinate of the first B&eacute;zier control point
         * @param {number} y1
         * the Y coordinate of the first B&eacute;zier control point
         * @param {number} x2
         * the X coordinate of the second B&eacute;zier control point
         * @param {number} y2
         * the Y coordinate of the second B&eacute;zier control point
         * @param {number} x3
         * the X coordinate of the final end point
         * @param {number} y3
         * the Y coordinate of the final end point
         * @since 1.6
         */
        abstract curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): any;
        /**
         * Closes the current subpath by drawing a straight line back to the
         * coordinates of the last {@code moveTo}. If the path is already closed
         * then this method has no effect.
         *
         * @since 1.6
         */
        closePath(): void;
        append$java_awt_Shape$boolean(s: java.awt.Shape, connect: boolean): void;
        /**
         * Appends the geometry of the specified {@code Shape} object to the path,
         * possibly connecting the new geometry to the existing path segments with a
         * line segment. If the {@code connect} parameter is {@code true} and the
         * path is not empty then any initial {@code moveTo} in the geometry of the
         * appended {@code Shape} is turned into a {@code lineTo} segment. If the
         * destination coordinates of such a connecting {@code lineTo} segment match
         * the ending coordinates of a currently open subpath then the segment is
         * omitted as superfluous. The winding rule of the specified {@code Shape}
         * is ignored and the appended geometry is governed by the winding rule
         * specified for this path.
         *
         * @param {*} s
         * the {@code Shape} whose geometry is appended to this path
         * @param {boolean} connect
         * a boolean to control whether or not to turn an initial
         * {@code moveTo} segment into a {@code lineTo} segment to
         * connect the new geometry to the existing path
         * @since 1.6
         */
        append(s?: any, connect?: any): any;
        append$java_awt_geom_PathIterator$boolean(pi: java.awt.geom.PathIterator, connect: boolean): void;
        /**
         * Returns the fill style winding rule.
         *
         * @return {number} an integer representing the current winding rule.
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @see #setWindingRule
         * @since 1.6
         */
        getWindingRule(): number;
        /**
         * Sets the winding rule for this path to the specified value.
         *
         * @param {number} rule
         * an integer representing the specified winding rule
         * @exception IllegalArgumentException
         * if {@code rule} is not either {@link #WIND_EVEN_ODD} or
         * {@link #WIND_NON_ZERO}
         * @see #getWindingRule
         * @since 1.6
         */
        setWindingRule(rule: number): void;
        /**
         * Returns the coordinates most recently added to the end of the path as a
         * {@link Point2D} object.
         *
         * @return {java.awt.geom.Point2D} a {@code Point2D} object containing the ending coordinates of the
         * path or {@code null} if there are no points in the path.
         * @since 1.6
         */
        getCurrentPoint(): java.awt.geom.Point2D;
        /**
         * Resets the path to empty. The append position is set back to the
         * beginning of the path and all coordinates and point types are forgotten.
         *
         * @since 1.6
         */
        reset(): void;
        /**
         * Transforms the geometry of this path using the specified
         * {@link AffineTransform}. The geometry is transformed in place, which
         * permanently changes the boundary defined by this object.
         *
         * @param {java.awt.geom.AffineTransform} at
         * the {@code AffineTransform} used to transform the area
         * @since 1.6
         */
        abstract transform(at: java.awt.geom.AffineTransform): any;
        /**
         * Returns a new {@code Shape} representing a transformed version of this
         * {@code Path2D}. Note that the exact type and coordinate precision of the
         * return value is not specified for this method. The method will return a
         * Shape that contains no less precision for the transformed geometry than
         * this {@code Path2D} currently maintains, but it may contain no more
         * precision either. If the tradeoff of precision vs. storage size in the
         * result is important then the convenience constructors in the
         * {@link Path2D.Float#Path2D.Float(Shape, AffineTransform) Path2D.Float}
         * and {@link Path2D.Double#Path2D.Double(Shape, AffineTransform)
         * Path2D.Double} subclasses should be used to make the choice explicit.
         *
         * @param {java.awt.geom.AffineTransform} at
         * the {@code AffineTransform} used to transform a new
         * {@code Shape}.
         * @return {*} a new {@code Shape}, transformed with the specified
         * {@code AffineTransform}.
         * @since 1.6
         */
        createTransformedShape(at: java.awt.geom.AffineTransform): java.awt.Shape;
        /**
         * {@inheritDoc}
         *
         * @since 1.6
         * @return {java.awt.Rectangle}
         */
        getBounds(): java.awt.Rectangle;
        static contains$java_awt_geom_PathIterator$double$double(pi: java.awt.geom.PathIterator, x: number, y: number): boolean;
        static contains$java_awt_geom_PathIterator$java_awt_geom_Point2D(pi: java.awt.geom.PathIterator, p: java.awt.geom.Point2D): boolean;
        contains$double$double(x: number, y: number): boolean;
        contains$java_awt_geom_Point2D(p: java.awt.geom.Point2D): boolean;
        static contains$java_awt_geom_PathIterator$double$double$double$double(pi: java.awt.geom.PathIterator, x: number, y: number, w: number, h: number): boolean;
        /**
         * Tests if the specified rectangular area is entirely inside the closed
         * boundary of the specified {@link PathIterator}.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#contains(double, double, double, double)} method.
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @param {*} pi
         * the specified {@code PathIterator}
         * @param {number} x
         * the specified X coordinate
         * @param {number} y
         * the specified Y coordinate
         * @param {number} w
         * the width of the specified rectangular area
         * @param {number} h
         * the height of the specified rectangular area
         * @return {boolean} {@code true} if the specified {@code PathIterator} contains the
         * specified rectangular area; {@code false} otherwise.
         * @since 1.6
         */
        static contains(pi?: any, x?: any, y?: any, w?: any, h?: any): boolean;
        static contains$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return false in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such segments could lie entirely within the interior of the
         * path if they are part of a path with a {@link #WIND_NON_ZERO} winding
         * rule or if the segments are retraced in the reverse direction such that
         * the two sets of segments cancel each other out without any exterior area
         * falling between them. To determine whether segments represent true
         * boundaries of the interior of the path would require extensive
         * calculations involving all of the segments of the path and the winding
         * rule and are thus beyond the scope of this implementation.
         *
         * @since 1.6
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        static intersects$java_awt_geom_PathIterator$double$double$double$double(pi: java.awt.geom.PathIterator, x: number, y: number, w: number, h: number): boolean;
        /**
         * Tests if the interior of the specified {@link PathIterator} intersects
         * the interior of a specified set of rectangular coordinates.
         * <p>
         * This method provides a basic facility for implementors of the
         * {@link Shape} interface to implement support for the
         * {@link Shape#intersects(double, double, double, double)} method.
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @param {*} pi
         * the specified {@code PathIterator}
         * @param {number} x
         * the specified X coordinate
         * @param {number} y
         * the specified Y coordinate
         * @param {number} w
         * the width of the specified rectangular coordinates
         * @param {number} h
         * the height of the specified rectangular coordinates
         * @return {boolean} {@code true} if the specified {@code PathIterator} and the
         * interior of the specified set of rectangular coordinates
         * intersect each other; {@code false} otherwise.
         * @since 1.6
         */
        static intersects(pi?: any, x?: any, y?: any, w?: any, h?: any): boolean;
        static intersects$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         * <p>
         * This method object may conservatively return true in cases where the
         * specified rectangular area intersects a segment of the path, but that
         * segment does not represent a boundary between the interior and exterior
         * of the path. Such a case may occur if some set of segments of the path
         * are retraced in the reverse direction such that the two sets of segments
         * cancel each other out without any interior area between them. To
         * determine whether segments represent true boundaries of the interior of
         * the path would require extensive calculations involving all of the
         * segments of the path and the winding rule and are thus beyond the scope
         * of this implementation.
         *
         * @since 1.6
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * {@inheritDoc}
         * <p>
         * The iterator for this class is not multi-threaded safe, which means that
         * this {@code Path2D} class does not guarantee that modifications to the
         * geometry of this {@code Path2D} object do not affect any iterations of
         * that geometry that are already in process.
         *
         * @since 1.6
         * @param {java.awt.geom.AffineTransform} at
         * @param {number} flatness
         * @return {*}
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Creates a new object of the same class as this object.
         *
         * @return {*} a clone of this instance.
         * @exception OutOfMemoryError
         * if there is not enough memory.
         * @see java.lang.Cloneable
         * @since 1.6
         */
        abstract clone(): any;
        abstract getBounds2D(): any;
    }
    namespace Path2D {
        abstract class Iterator implements java.awt.geom.PathIterator {
            typeIdx: number;
            pointIdx: number;
            path: java.awt.geom.Path2D;
            static curvecoords: number[];
            static curvecoords_$LI$(): number[];
            constructor(path: java.awt.geom.Path2D);
            getWindingRule(): number;
            isDone(): boolean;
            next(): void;
            abstract currentSegment(coords?: any): any;
            abstract currentSegment(coords?: any): any;
        }
        /**
         * Constructs a new empty single precision {@code Path2D} object with
         * the specified winding rule and the specified initial capacity to
         * store path segments. This number is an initial guess as to how many
         * path segments will be added to the path, but the storage is expanded
         * as needed to store whatever path segments are added.
         *
         * @param {number} rule
         * the winding rule
         * @param {number} initialCapacity
         * the estimate for the number of path segments in the path
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @since 1.6
         * @class
         * @extends java.awt.geom.Path2D
         */
        class Float extends java.awt.geom.Path2D implements java.io.Serializable {
            floatCoords: number[];
            constructor(s?: any, at?: any);
            cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
            cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
            append$float$float(x: number, y: number): void;
            append$double$double(x: number, y: number): void;
            getPoint(coordindex: number): java.awt.geom.Point2D;
            needRoom(needMove: boolean, newCoords: number): void;
            moveTo$double$double(x: number, y: number): void;
            moveTo$float$float(x: number, y: number): void;
            /**
             * Adds a point to the path by moving to the specified coordinates
             * specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code moveTo()} method on the base {@code Path2D} class.
             *
             * @param {number} x
             * the specified X coordinate
             * @param {number} y
             * the specified Y coordinate
             * @see Path2D#moveTo
             * @since 1.6
             */
            moveTo(x?: any, y?: any): any;
            lineTo$double$double(x: number, y: number): void;
            lineTo$float$float(x: number, y: number): void;
            /**
             * Adds a point to the path by drawing a straight line from the current
             * coordinates to the new specified coordinates specified in float
             * precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code lineTo()} method on the base {@code Path2D} class.
             *
             * @param {number} x
             * the specified X coordinate
             * @param {number} y
             * the specified Y coordinate
             * @see Path2D#lineTo
             * @since 1.6
             */
            lineTo(x?: any, y?: any): any;
            quadTo$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
            quadTo$float$float$float$float(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Adds a curved segment, defined by two new points, to the path by
             * drawing a Quadratic curve that intersects both the current
             * coordinates and the specified coordinates {@code (x2,y2)}, using the
             * specified point {@code (x1,y1)} as a quadratic parametric control
             * point. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code quadTo()} method on the base {@code Path2D} class.
             *
             * @param {number} x1
             * the X coordinate of the quadratic control point
             * @param {number} y1
             * the Y coordinate of the quadratic control point
             * @param {number} x2
             * the X coordinate of the final end point
             * @param {number} y2
             * the Y coordinate of the final end point
             * @see Path2D#quadTo
             * @since 1.6
             */
            quadTo(x1?: any, y1?: any, x2?: any, y2?: any): any;
            curveTo$double$double$double$double$double$double(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            curveTo$float$float$float$float$float$float(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            /**
             * Adds a curved segment, defined by three new points, to the path by
             * drawing a B&eacute;zier curve that intersects both the current
             * coordinates and the specified coordinates {@code (x3,y3)}, using the
             * specified points {@code (x1,y1)} and {@code (x2,y2)} as B&eacute;zier
             * control points. All coordinates are specified in float precision.
             * <p>
             * This method provides a single precision variant of the double
             * precision {@code curveTo()} method on the base {@code Path2D} class.
             *
             * @param {number} x1
             * the X coordinate of the first B&eacute;zier control point
             * @param {number} y1
             * the Y coordinate of the first B&eacute;zier control point
             * @param {number} x2
             * the X coordinate of the second B&eacute;zier control point
             * @param {number} y2
             * the Y coordinate of the second B&eacute;zier control point
             * @param {number} x3
             * the X coordinate of the final end point
             * @param {number} y3
             * the Y coordinate of the final end point
             * @see Path2D#curveTo
             * @since 1.6
             */
            curveTo(x1?: any, y1?: any, x2?: any, y2?: any, x3?: any, y3?: any): any;
            pointCrossings(px: number, py: number): number;
            rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
            append$java_awt_geom_PathIterator$boolean(pi: java.awt.geom.PathIterator, connect: boolean): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {*} pi
             * @param {boolean} connect
             */
            append(pi?: any, connect?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {java.awt.geom.AffineTransform} at
             */
            transform(at: java.awt.geom.AffineTransform): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             * <p>
             * The iterator for this class is not multi-threaded safe, which means that
             * this {@code Path2D} class does not guarantee that modifications to the
             * geometry of this {@code Path2D} object do not affect any iterations of
             * that geometry that are already in process.
             *
             * @since 1.6
             * @param {java.awt.geom.AffineTransform} at
             * @param {number} flatness
             * @return {*}
             */
            getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
            getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Creates a new object of the same class as this object.
             *
             * @return {*} a clone of this instance.
             * @exception OutOfMemoryError
             * if there is not enough memory.
             * @see java.lang.Cloneable
             * @since 1.6
             */
            clone(): any;
            static serialVersionUID: number;
        }
        namespace Float {
            class CopyIterator extends java.awt.geom.Path2D.Iterator {
                floatCoords: number[];
                constructor(p2df: java.awt.geom.Path2D.Float);
                currentSegment$float_A(coords: number[]): number;
                currentSegment(coords?: any): number;
                currentSegment$double_A(coords: number[]): number;
            }
            class TxIterator extends java.awt.geom.Path2D.Iterator {
                floatCoords: number[];
                affine: java.awt.geom.AffineTransform;
                constructor(p2df: java.awt.geom.Path2D.Float, at: java.awt.geom.AffineTransform);
                currentSegment$float_A(coords: number[]): number;
                currentSegment(coords?: any): number;
                currentSegment$double_A(coords: number[]): number;
            }
        }
        /**
         * Constructs a new empty double precision {@code Path2D} object with
         * the specified winding rule and the specified initial capacity to
         * store path segments. This number is an initial guess as to how many
         * path segments are in the path, but the storage is expanded as needed
         * to store whatever path segments are added to this path.
         *
         * @param {number} rule
         * the winding rule
         * @param {number} initialCapacity
         * the estimate for the number of path segments in the path
         * @see #WIND_EVEN_ODD
         * @see #WIND_NON_ZERO
         * @since 1.6
         * @class
         * @extends java.awt.geom.Path2D
         */
        class Double extends java.awt.geom.Path2D implements java.io.Serializable {
            doubleCoords: number[];
            constructor(s?: any, at?: any);
            cloneCoordsFloat(at: java.awt.geom.AffineTransform): number[];
            cloneCoordsDouble(at: java.awt.geom.AffineTransform): number[];
            append$float$float(x: number, y: number): void;
            append$double$double(x: number, y: number): void;
            getPoint(coordindex: number): java.awt.geom.Point2D;
            needRoom(needMove: boolean, newCoords: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {number} x
             * @param {number} y
             */
            moveTo(x: number, y: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {number} x
             * @param {number} y
             */
            lineTo(x: number, y: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {number} x1
             * @param {number} y1
             * @param {number} x2
             * @param {number} y2
             */
            quadTo(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {number} x1
             * @param {number} y1
             * @param {number} x2
             * @param {number} y2
             * @param {number} x3
             * @param {number} y3
             */
            curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            pointCrossings(px: number, py: number): number;
            rectCrossings(rxmin: number, rymin: number, rxmax: number, rymax: number): number;
            append$java_awt_geom_PathIterator$boolean(pi: java.awt.geom.PathIterator, connect: boolean): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {*} pi
             * @param {boolean} connect
             */
            append(pi?: any, connect?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @param {java.awt.geom.AffineTransform} at
             */
            transform(at: java.awt.geom.AffineTransform): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.6
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             * <p>
             * The iterator for this class is not multi-threaded safe, which means that
             * this {@code Path2D} class does not guarantee that modifications to the
             * geometry of this {@code Path2D} object do not affect any iterations of
             * that geometry that are already in process.
             *
             * @since 1.6
             * @param {java.awt.geom.AffineTransform} at
             * @param {number} flatness
             * @return {*}
             */
            getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
            getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Creates a new object of the same class as this object.
             *
             * @return {*} a clone of this instance.
             * @exception OutOfMemoryError
             * if there is not enough memory.
             * @see java.lang.Cloneable
             * @since 1.6
             */
            clone(): any;
            static serialVersionUID: number;
        }
        namespace Double {
            class CopyIterator extends java.awt.geom.Path2D.Iterator {
                doubleCoords: number[];
                constructor(p2dd: java.awt.geom.Path2D.Double);
                currentSegment$float_A(coords: number[]): number;
                currentSegment(coords?: any): number;
                currentSegment$double_A(coords: number[]): number;
            }
            class TxIterator extends java.awt.geom.Path2D.Iterator {
                doubleCoords: number[];
                affine: java.awt.geom.AffineTransform;
                constructor(p2dd: java.awt.geom.Path2D.Double, at: java.awt.geom.AffineTransform);
                currentSegment$float_A(coords: number[]): number;
                currentSegment(coords?: any): number;
                currentSegment$double_A(coords: number[]): number;
            }
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>RoundRectangle2D</code> class defines a rectangle with rounded
     * corners defined by a location {@code (x,y)}, a dimension {@code (w x h)}, and
     * the width and height of an arc with which to round the corners.
     * <p>
     * This class is the abstract superclass for all objects that store a 2D rounded
     * rectangle. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @extends java.awt.geom.RectangularShape
     * @class
     */
    abstract class RoundRectangle2D extends java.awt.geom.RectangularShape {
        constructor();
        /**
         * Gets the width of the arc that rounds off the corners.
         *
         * @return {number} the width of the arc that rounds off the corners of this
         * <code>RoundRectangle2D</code>.
         * @since 1.2
         */
        abstract getArcWidth(): number;
        /**
         * Gets the height of the arc that rounds off the corners.
         *
         * @return {number} the height of the arc that rounds off the corners of this
         * <code>RoundRectangle2D</code>.
         * @since 1.2
         */
        abstract getArcHeight(): number;
        setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcWidth: number, arcHeight: number): void;
        /**
         * Sets the location, size, and corner radii of this
         * <code>RoundRectangle2D</code> to the specified <code>double</code>
         * values.
         *
         * @param {number} x
         * the X coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param {number} y
         * the Y coordinate to which to set the location of this
         * <code>RoundRectangle2D</code>
         * @param {number} w
         * the width to which to set this <code>RoundRectangle2D</code>
         * @param {number} h
         * the height to which to set this <code>RoundRectangle2D</code>
         * @param {number} arcWidth
         * the width to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @param {number} arcHeight
         * the height to which to set the arc of this
         * <code>RoundRectangle2D</code>
         * @since 1.2
         */
        setRoundRect(x?: any, y?: any, w?: any, h?: any, arcWidth?: any, arcHeight?: any): any;
        setRoundRect$java_awt_geom_RoundRectangle2D(rr: RoundRectangle2D): void;
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        contains$double$double(x: number, y: number): boolean;
        classify(coord: number, left: number, right: number, arcsize: number): number;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * object's boundary and provides access to a flattened view of the outline
         * of the <code>Shape</code> object's geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will be returned
         * by the iterator.
         * <p>
         * The amount of subdivision of the curved segments is controlled by the
         * <code>flatness</code> parameter, which specifies the maximum distance
         * that any point on the unflattened transformed curve can deviate from the
         * returned flattened path segments. An optional {@link AffineTransform} can
         * be specified so that the coordinates returned in the iteration are
         * transformed accordingly.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired.
         * @param {number} flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve
         * @return {*} a <code>PathIterator</code> object that provides access to the
         * <code>Shape</code> object's flattened geometry.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>RoundRectangle2D</code>.
         *
         * @return {number} the hashcode for this <code>RoundRectangle2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>RoundRectangle2D</code>. The specified <code>Object</code> is
         * equal to this <code>RoundRectangle2D</code> if it is an instance of
         * <code>RoundRectangle2D</code> and if its location, size, and corner arc
         * dimensions are the same as this <code>RoundRectangle2D</code>.
         *
         * @param {*} obj
         * an <code>Object</code> to be compared with this
         * <code>RoundRectangle2D</code>.
         * @return {boolean} <code>true</code> if <code>obj</code> is an instance of
         * <code>RoundRectangle2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace RoundRectangle2D {
        /**
         * Constructs and initializes a <code>RoundRectangle2D</code> from the
         * specified <code>float</code> coordinates.
         *
         * @param {number} x
         * the X coordinate of the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} y
         * the Y coordinate of the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} w
         * the width to which to set the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} h
         * the height to which to set the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} arcw
         * the width of the arc to use to round off the corners of
         * the newly constructed <code>RoundRectangle2D</code>
         * @param {number} arch
         * the height of the arc to use to round off the corners of
         * the newly constructed <code>RoundRectangle2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.RoundRectangle2D
         */
        class Float extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The width of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            arcwidth: number;
            /**
             * The height of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            archeight: number;
            constructor(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getArcWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getArcHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setRoundRect$float$float$float$float$float$float(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
            /**
             * Sets the location, size, and corner radii of this
             * <code>RoundRectangle2D</code> to the specified <code>float</code>
             * values.
             *
             * @param {number} x
             * the X coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param {number} y
             * the Y coordinate to which to set the location of this
             * <code>RoundRectangle2D</code>
             * @param {number} w
             * the width to which to set this
             * <code>RoundRectangle2D</code>
             * @param {number} h
             * the height to which to set this
             * <code>RoundRectangle2D</code>
             * @param {number} arcw
             * the width to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @param {number} arch
             * the height to which to set the arc of this
             * <code>RoundRectangle2D</code>
             * @since 1.2
             */
            setRoundRect(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any): any;
            setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
            setRoundRect$java_awt_geom_RoundRectangle2D(rr: java.awt.geom.RoundRectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a <code>RoundRectangle2D</code> from the
         * specified <code>double</code> coordinates.
         *
         * @param {number} x
         * the X coordinate of the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} y
         * the Y coordinate of the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} w
         * the width to which to set the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} h
         * the height to which to set the newly constructed
         * <code>RoundRectangle2D</code>
         * @param {number} arcw
         * the width of the arc to use to round off the corners of
         * the newly constructed <code>RoundRectangle2D</code>
         * @param {number} arch
         * the height of the arc to use to round off the corners of
         * the newly constructed <code>RoundRectangle2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.RoundRectangle2D
         */
        class Double extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>RoundRectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The width of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            arcwidth: number;
            /**
             * The height of the arc that rounds off the corners.
             *
             * @since 1.2
             * @serial
             */
            archeight: number;
            constructor(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getArcWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getArcHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setRoundRect$double$double$double$double$double$double(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             * @param {number} arcw
             * @param {number} arch
             */
            setRoundRect(x?: any, y?: any, w?: any, h?: any, arcw?: any, arch?: any): any;
            setRoundRect$java_awt_geom_RoundRectangle2D(rr: java.awt.geom.RoundRectangle2D): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Ellipse2D</code> class describes an ellipse that is defined by a
     * framing rectangle.
     * <p>
     * This class is only the abstract superclass for all objects which store a 2D
     * ellipse. The actual storage representation of the coordinates is left to the
     * subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @extends java.awt.geom.RectangularShape
     * @class
     */
    abstract class Ellipse2D extends java.awt.geom.RectangularShape {
        constructor();
        contains$double$double(x: number, y: number): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * object's boundary and provides access to a flattened view of the outline
         * of the <code>Shape</code> object's geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will be returned
         * by the iterator.
         * <p>
         * The amount of subdivision of the curved segments is controlled by the
         * <code>flatness</code> parameter, which specifies the maximum distance
         * that any point on the unflattened transformed curve can deviate from the
         * returned flattened path segments. An optional {@link AffineTransform} can
         * be specified so that the coordinates returned in the iteration are
         * transformed accordingly.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired.
         * @param {number} flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve
         * @return {*} a <code>PathIterator</code> object that provides access to the
         * <code>Shape</code> object's flattened geometry.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>Ellipse2D</code>.
         *
         * @return {number} the hashcode for this <code>Ellipse2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>Ellipse2D</code>. The specified <code>Object</code> is equal
         * to this <code>Ellipse2D</code> if it is an instance of
         * <code>Ellipse2D</code> and if its location and size are the same as this
         * <code>Ellipse2D</code>.
         *
         * @param {*} obj
         * an <code>Object</code> to be compared with this
         * <code>Ellipse2D</code>.
         * @return {boolean} <code>true</code> if <code>obj</code> is an instance of
         * <code>Ellipse2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace Ellipse2D {
        /**
         * Constructs and initializes an <code>Ellipse2D</code> from the
         * specified coordinates.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the framing
         * rectangle
         * @param {number} y
         * the Y coordinate of the upper-left corner of the framing
         * rectangle
         * @param {number} w
         * the width of the framing rectangle
         * @param {number} h
         * the height of the framing rectangle
         * @since 1.2
         * @class
         * @extends java.awt.geom.Ellipse2D
         */
        class Float extends java.awt.geom.Ellipse2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setFrame$float$float$float$float(x: number, y: number, w: number, h: number): void;
            /**
             * Sets the location and size of the framing rectangle of this
             * <code>Shape</code> to the specified rectangular values.
             *
             * @param {number} x
             * the X coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param {number} y
             * the Y coordinate of the upper-left corner of the specified
             * rectangular shape
             * @param {number} w
             * the width of the specified rectangular shape
             * @param {number} h
             * the height of the specified rectangular shape
             * @since 1.2
             */
            setFrame(x?: any, y?: any, w?: any, h?: any): any;
            setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes an <code>Ellipse2D</code> from the
         * specified coordinates.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the framing
         * rectangle
         * @param {number} y
         * the Y coordinate of the upper-left corner of the framing
         * rectangle
         * @param {number} w
         * the width of the framing rectangle
         * @param {number} h
         * the height of the framing rectangle
         * @since 1.2
         * @class
         * @extends java.awt.geom.Ellipse2D
         */
        class Double extends java.awt.geom.Ellipse2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing rectangle of
             * this {@code Ellipse2D}.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of this <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the <code>Ellipse2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             */
            setFrame(x?: any, y?: any, w?: any, h?: any): any;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * <CODE>Arc2D</CODE> is the abstract superclass for all objects that
     * store a 2D arc defined by a framing rectangle,
     * start angle, angular extent (length of the arc), and a closure type
     * (<CODE>OPEN</CODE>, <CODE>CHORD</CODE>, or <CODE>PIE</CODE>).
     * <p>
     * <a name="inscribes">
     * The arc is a partial section of a full ellipse which
     * inscribes the framing rectangle of its parent {@link RectangularShape}.
     * </a>
     * <a name="angles">
     * The angles are specified relative to the non-square
     * framing rectangle such that 45 degrees always falls on the line from
     * the center of the ellipse to the upper right corner of the framing
     * rectangle.
     * As a result, if the framing rectangle is noticeably longer along one
     * axis than the other, the angles to the start and end of the arc segment
     * will be skewed farther along the longer axis of the frame.
     * </a>
     * <p>
     * The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author      Jim Graham
     * @since 1.2
     * @extends java.awt.geom.RectangularShape
     * @class
     */
    abstract class Arc2D extends java.awt.geom.RectangularShape {
        /**
         * The closure type for an open arc with no path segments
         * connecting the two ends of the arc segment.
         * @since 1.2
         */
        static OPEN: number;
        /**
         * The closure type for an arc closed by drawing a straight
         * line segment from the start of the arc segment to the end of the
         * arc segment.
         * @since 1.2
         */
        static CHORD: number;
        /**
         * The closure type for an arc closed by drawing straight line
         * segments from the start of the arc segment to the center
         * of the full ellipse and from that point to the end of the arc segment.
         * @since 1.2
         */
        static PIE: number;
        type: number;
        constructor(type?: any);
        /**
         * Returns the starting angle of the arc.
         *
         * @return {number} A double value that represents the starting angle
         * of the arc in degrees.
         * @see #setAngleStart
         * @since 1.2
         */
        abstract getAngleStart(): number;
        /**
         * Returns the angular extent of the arc.
         *
         * @return {number} A double value that represents the angular extent
         * of the arc in degrees.
         * @see #setAngleExtent
         * @since 1.2
         */
        abstract getAngleExtent(): number;
        /**
         * Returns the arc closure type of the arc: {@link #OPEN},
         * {@link #CHORD}, or {@link #PIE}.
         * @return {number} One of the integer constant closure types defined
         * in this class.
         * @see #setArcType
         * @since 1.2
         */
        getArcType(): number;
        /**
         * Returns the starting point of the arc.  This point is the
         * intersection of the ray from the center defined by the
         * starting angle and the elliptical boundary of the arc.
         *
         * @return {java.awt.geom.Point2D} A <CODE>Point2D</CODE> object representing the
         * x,y coordinates of the starting point of the arc.
         * @since 1.2
         */
        getStartPoint(): java.awt.geom.Point2D;
        /**
         * Returns the ending point of the arc.  This point is the
         * intersection of the ray from the center defined by the
         * starting angle plus the angular extent of the arc and the
         * elliptical boundary of the arc.
         *
         * @return {java.awt.geom.Point2D} A <CODE>Point2D</CODE> object representing the
         * x,y coordinates  of the ending point of the arc.
         * @since 1.2
         */
        getEndPoint(): java.awt.geom.Point2D;
        setArc$double$double$double$double$double$double$int(x: number, y: number, w: number, h: number, angSt: number, angExt: number, closure: number): void;
        /**
         * Sets the location, size, angular extents, and closure type of
         * this arc to the specified double values.
         *
         * @param {number} x The X coordinate of the upper-left corner of the arc.
         * @param {number} y The Y coordinate of the upper-left corner of the arc.
         * @param {number} w The overall width of the full ellipse of which
         * this arc is a partial section.
         * @param {number} h The overall height of the full ellipse of which
         * this arc is a partial section.
         * @param {number} angSt The starting angle of the arc in degrees.
         * @param {number} angExt The angular extent of the arc in degrees.
         * @param {number} closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
        setArc$java_awt_geom_Point2D$java_awt_geom_Dimension2D$double$double$int(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D, angSt: number, angExt: number, closure: number): void;
        setArc$java_awt_geom_Rectangle2D$double$double$int(rect: java.awt.geom.Rectangle2D, angSt: number, angExt: number, closure: number): void;
        setArc$java_awt_geom_Arc2D(a: Arc2D): void;
        /**
         * Sets the position, bounds, angular extents, and closure type of
         * this arc to the specified values. The arc is defined by a center
         * point and a radius rather than a framing rectangle for the full ellipse.
         *
         * @param {number} x The X coordinate of the center of the arc.
         * @param {number} y The Y coordinate of the center of the arc.
         * @param {number} radius The radius of the arc.
         * @param {number} angSt The starting angle of the arc in degrees.
         * @param {number} angExt The angular extent of the arc in degrees.
         * @param {number} closure The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         */
        setArcByCenter(x: number, y: number, radius: number, angSt: number, angExt: number, closure: number): void;
        /**
         * Sets the position, bounds, and angular extents of this arc to the
         * specified value. The starting angle of the arc is tangent to the
         * line specified by points (p1, p2), the ending angle is tangent to
         * the line specified by points (p2, p3), and the arc has the
         * specified radius.
         *
         * @param {java.awt.geom.Point2D} p1 The first point that defines the arc. The starting
         * angle of the arc is tangent to the line specified by points (p1, p2).
         * @param {java.awt.geom.Point2D} p2 The second point that defines the arc. The starting
         * angle of the arc is tangent to the line specified by points (p1, p2).
         * The ending angle of the arc is tangent to the line specified by
         * points (p2, p3).
         * @param {java.awt.geom.Point2D} p3 The third point that defines the arc. The ending angle
         * of the arc is tangent to the line specified by points (p2, p3).
         * @param {number} radius The radius of the arc.
         * @since 1.2
         */
        setArcByTangent(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D, p3: java.awt.geom.Point2D, radius: number): void;
        setAngleStart$double(angSt: number): void;
        /**
         * Sets the angular extent of this arc to the specified double
         * value.
         *
         * @param {number} angExt The angular extent of the arc in degrees.
         * @see #getAngleExtent
         * @since 1.2
         */
        abstract setAngleExtent(angExt: number): any;
        setAngleStart$java_awt_geom_Point2D(p: java.awt.geom.Point2D): void;
        /**
         * Sets the starting angle of this arc to the angle that the
         * specified point defines relative to the center of this arc.
         * The angular extent of the arc will remain the same.
         *
         * @param {java.awt.geom.Point2D} p The <CODE>Point2D</CODE> that defines the starting angle.
         * @see #getAngleStart
         * @since 1.2
         */
        setAngleStart(p?: any): any;
        setAngles$double$double$double$double(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Sets the starting angle and angular extent of this arc using two
         * sets of coordinates. The first set of coordinates is used to
         * determine the angle of the starting point relative to the arc's
         * center. The second set of coordinates is used to determine the
         * angle of the end point relative to the arc's center.
         * The arc will always be non-empty and extend counterclockwise
         * from the first point around to the second point.
         *
         * @param {number} x1 The X coordinate of the arc's starting point.
         * @param {number} y1 The Y coordinate of the arc's starting point.
         * @param {number} x2 The X coordinate of the arc's ending point.
         * @param {number} y2 The Y coordinate of the arc's ending point.
         * @since 1.2
         */
        setAngles(x1?: any, y1?: any, x2?: any, y2?: any): any;
        setAngles$java_awt_geom_Point2D$java_awt_geom_Point2D(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
        /**
         * Sets the closure type of this arc to the specified value:
         * <CODE>OPEN</CODE>, <CODE>CHORD</CODE>, or <CODE>PIE</CODE>.
         *
         * @param {number} type The integer constant that represents the closure
         * type of this arc: {@link #OPEN}, {@link #CHORD}, or
         * {@link #PIE}.
         *
         * @throws IllegalArgumentException if <code>type</code> is not
         * 0, 1, or 2.+
         * @see #getArcType
         * @since 1.2
         */
        setArcType(type: number): void;
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * {@inheritDoc}
         * Note that the arc
         * <a href="Arc2D.html#inscribes">partially inscribes</a>
         * the framing rectangle of this {@code RectangularShape}.
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Returns the high-precision framing rectangle of the arc.  The framing
         * rectangle contains only the part of this <code>Arc2D</code> that is
         * in between the starting and ending angles and contains the pie
         * wedge, if this <code>Arc2D</code> has a <code>PIE</code> closure type.
         * <p>
         * This method differs from the
         * {@link RectangularShape#getBounds() getBounds} in that the
         * <code>getBounds</code> method only returns the bounds of the
         * enclosing ellipse of this <code>Arc2D</code> without considering
         * the starting and ending angles of this <code>Arc2D</code>.
         *
         * @return {java.awt.geom.Rectangle2D} the <CODE>Rectangle2D</CODE> that represents the arc's
         * framing rectangle.
         * @since 1.2
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        /**
         * Constructs a <code>Rectangle2D</code> of the appropriate precision
         * to hold the parameters calculated to be the framing rectangle
         * of this arc.
         *
         * @param {number} x The X coordinate of the upper-left corner of the
         * framing rectangle.
         * @param {number} y The Y coordinate of the upper-left corner of the
         * framing rectangle.
         * @param {number} w The width of the framing rectangle.
         * @param {number} h The height of the framing rectangle.
         * @return {java.awt.geom.Rectangle2D} a <code>Rectangle2D</code> that is the framing rectangle
         * of this arc.
         * @since 1.2
         */
        abstract makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
        static normalizeDegrees(angle: number): number;
        /**
         * Determines whether or not the specified angle is within the
         * angular extents of the arc.
         *
         * @param {number} angle The angle to test.
         *
         * @return {boolean} <CODE>true</CODE> if the arc contains the angle,
         * <CODE>false</CODE> if the arc doesn't contain the angle.
         * @since 1.2
         */
        containsAngle(angle: number): boolean;
        contains$double$double(x: number, y: number): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Determines whether or not the interior of the arc intersects
         * the interior of the specified rectangle.
         *
         * @param {number} x The X coordinate of the rectangle's upper-left corner.
         * @param {number} y The Y coordinate of the rectangle's upper-left corner.
         * @param {number} w The width of the rectangle.
         * @param {number} h The height of the rectangle.
         *
         * @return {boolean} <CODE>true</CODE> if the arc intersects the rectangle,
         * <CODE>false</CODE> if the arc doesn't intersect the rectangle.
         * @since 1.2
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        contains$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): boolean;
        contains$double$double$double$double$java_awt_geom_Rectangle2D(x: number, y: number, w: number, h: number, origrect: java.awt.geom.Rectangle2D): boolean;
        contains(x?: any, y?: any, w?: any, h?: any, origrect?: any): boolean;
        /**
         * Returns an iterator object that iterates along the <code>Shape</code>
         * object's boundary and provides access to a flattened view of the outline
         * of the <code>Shape</code> object's geometry.
         * <p>
         * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will be returned
         * by the iterator.
         * <p>
         * The amount of subdivision of the curved segments is controlled by the
         * <code>flatness</code> parameter, which specifies the maximum distance
         * that any point on the unflattened transformed curve can deviate from the
         * returned flattened path segments. An optional {@link AffineTransform} can
         * be specified so that the coordinates returned in the iteration are
         * transformed accordingly.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired.
         * @param {number} flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve
         * @return {*} a <code>PathIterator</code> object that provides access to the
         * <code>Shape</code> object's flattened geometry.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>Arc2D</code>.
         * @return {number} the hashcode for this <code>Arc2D</code>.
         * @since 1.6
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is
         * equal to this <code>Arc2D</code>.  The specified
         * <code>Object</code> is equal to this <code>Arc2D</code>
         * if it is an instance of <code>Arc2D</code> and if its
         * location, size, arc extents and type are the same as this
         * <code>Arc2D</code>.
         * @param {*} obj  an <code>Object</code> to be compared with this
         * <code>Arc2D</code>.
         * @return  {boolean} <code>true</code> if <code>obj</code> is an instance
         * of <code>Arc2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.6
         */
        equals(obj: any): boolean;
    }
    namespace Arc2D {
        /**
         * Constructs a new arc, initialized to the specified location,
         * size, angular extents, and closure type.
         *
         * @param {number} x The X coordinate of the upper-left corner of
         * the arc's framing rectangle.
         * @param {number} y The Y coordinate of the upper-left corner of
         * the arc's framing rectangle.
         * @param {number} w The overall width of the full ellipse of which
         * this arc is a partial section.
         * @param {number} h The overall height of the full ellipse of which this
         * arc is a partial section.
         * @param {number} start The starting angle of the arc in degrees.
         * @param {number} extent The angular extent of the arc in degrees.
         * @param {number} type The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         * @class
         * @extends java.awt.geom.Arc2D
         */
        class Float extends java.awt.geom.Arc2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of the full ellipse of which this arc is
             * a partial section (not considering the
             * angular extents).
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the full ellipse of which this arc is
             * a partial section (not considering the
             * angular extents).
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The starting angle of the arc in degrees.
             * @since 1.2
             * @serial
             */
            start: number;
            /**
             * The angular extent of the arc in degrees.
             * @since 1.2
             * @serial
             */
            extent: number;
            constructor(x?: any, y?: any, w?: any, h?: any, start?: any, extent?: any, type?: any);
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {number}
             */
            getAngleStart(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {number}
             */
            getAngleExtent(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setArc$double$double$double$double$double$double$int(x: number, y: number, w: number, h: number, angSt: number, angExt: number, closure: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             * @param {number} angSt
             * @param {number} angExt
             * @param {number} closure
             */
            setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
            /**
             * Sets the starting angle of this arc to the angle that the
             * specified point defines relative to the center of this arc.
             * The angular extent of the arc will remain the same.
             *
             * @param {java.awt.geom.Point2D} p The <CODE>Point2D</CODE> that defines the starting angle.
             * @see #getAngleStart
             * @since 1.2
             */
            setAngleStart(p?: any): any;
            setAngleStart$double(angSt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} angExt
             */
            setAngleExtent(angExt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             * @return {java.awt.geom.Rectangle2D}
             */
            makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
        /**
         * Constructs a new arc, initialized to the specified location,
         * size, angular extents, and closure type.
         *
         * @param {number} x The X coordinate of the upper-left corner
         * of the arc's framing rectangle.
         * @param {number} y The Y coordinate of the upper-left corner
         * of the arc's framing rectangle.
         * @param {number} w The overall width of the full ellipse of which this
         * arc is a partial section.
         * @param {number} h The overall height of the full ellipse of which this
         * arc is a partial section.
         * @param {number} start The starting angle of the arc in degrees.
         * @param {number} extent The angular extent of the arc in degrees.
         * @param {number} type The closure type for the arc:
         * {@link #OPEN}, {@link #CHORD}, or {@link #PIE}.
         * @since 1.2
         * @class
         * @extends java.awt.geom.Arc2D
         */
        class Double extends java.awt.geom.Arc2D implements java.io.Serializable {
            /**
             * The X coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of the upper-left corner of the framing
             * rectangle of the arc.
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The overall width of the full ellipse of which this arc is
             * a partial section (not considering the angular extents).
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The overall height of the full ellipse of which this arc is
             * a partial section (not considering the angular extents).
             * @since 1.2
             * @serial
             */
            height: number;
            /**
             * The starting angle of the arc in degrees.
             * @since 1.2
             * @serial
             */
            start: number;
            /**
             * The angular extent of the arc in degrees.
             * @since 1.2
             * @serial
             */
            extent: number;
            constructor(x?: any, y?: any, w?: any, h?: any, start?: any, extent?: any, type?: any);
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             * Note that the arc
             * <a href="Arc2D.html#inscribes">partially inscribes</a>
             * the framing rectangle of this {@code RectangularShape}.
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {number}
             */
            getAngleStart(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {number}
             */
            getAngleExtent(): number;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setArc$double$double$double$double$double$double$int(x: number, y: number, w: number, h: number, angSt: number, angExt: number, closure: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             * @param {number} angSt
             * @param {number} angExt
             * @param {number} closure
             */
            setArc(x?: any, y?: any, w?: any, h?: any, angSt?: any, angExt?: any, closure?: any): any;
            /**
             * Sets the starting angle of this arc to the angle that the
             * specified point defines relative to the center of this arc.
             * The angular extent of the arc will remain the same.
             *
             * @param {java.awt.geom.Point2D} p The <CODE>Point2D</CODE> that defines the starting angle.
             * @see #getAngleStart
             * @since 1.2
             */
            setAngleStart(p?: any): any;
            setAngleStart$double(angSt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} angExt
             */
            setAngleExtent(angExt: number): void;
            /**
             * {@inheritDoc}
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             * @return {java.awt.geom.Rectangle2D}
             */
            makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
            static serialVersionUID: number;
        }
    }
}
declare namespace java.awt.geom {
    /**
     * The <code>Rectangle2D</code> class describes a rectangle defined by a
     * location {@code (x,y)} and dimension {@code (w x h)}.
     * <p>
     * This class is only the abstract superclass for all objects that store a 2D
     * rectangle. The actual storage representation of the coordinates is left to
     * the subclass.
     *
     * @author Jim Graham
     * @since 1.2
     * @extends java.awt.geom.RectangularShape
     * @class
     */
    abstract class Rectangle2D extends java.awt.geom.RectangularShape {
        /**
         * The bitmask that indicates that a point lies to the left of this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_LEFT: number;
        /**
         * The bitmask that indicates that a point lies above this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_TOP: number;
        /**
         * The bitmask that indicates that a point lies to the right of this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_RIGHT: number;
        /**
         * The bitmask that indicates that a point lies below this
         * <code>Rectangle2D</code>.
         *
         * @since 1.2
         */
        static OUT_BOTTOM: number;
        constructor();
        setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * Sets the location and size of this <code>Rectangle2D</code> to the
         * specified <code>double</code> values.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param {number} y
         * the Y coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param {number} w
         * the width of this <code>Rectangle2D</code>
         * @param {number} h
         * the height of this <code>Rectangle2D</code>
         * @since 1.2
         */
        setRect(x?: any, y?: any, w?: any, h?: any): any;
        setRect$java_awt_geom_Rectangle2D(r: Rectangle2D): void;
        intersectsLine$double$double$double$double(x1: number, y1: number, x2: number, y2: number): boolean;
        /**
         * Tests if the specified line segment intersects the interior of this
         * <code>Rectangle2D</code>.
         *
         * @param {number} x1
         * the X coordinate of the start point of the specified line
         * segment
         * @param {number} y1
         * the Y coordinate of the start point of the specified line
         * segment
         * @param {number} x2
         * the X coordinate of the end point of the specified line
         * segment
         * @param {number} y2
         * the Y coordinate of the end point of the specified line
         * segment
         * @return {boolean} <code>true</code> if the specified line segment intersects the
         * interior of this <code>Rectangle2D</code>; <code>false</code>
         * otherwise.
         * @since 1.2
         */
        intersectsLine(x1?: any, y1?: any, x2?: any, y2?: any): boolean;
        intersectsLine$java_awt_geom_Line2D(l: java.awt.geom.Line2D): boolean;
        outcode$double$double(x: number, y: number): number;
        /**
         * Determines where the specified coordinates lie with respect to this
         * <code>Rectangle2D</code>. This method computes a binary OR of the
         * appropriate mask values indicating, for each side of this
         * <code>Rectangle2D</code>, whether or not the specified coordinates are on
         * the same side of the edge as the rest of this <code>Rectangle2D</code>.
         *
         * @param {number} x
         * the specified X coordinate
         * @param {number} y
         * the specified Y coordinate
         * @return {number} the logical OR of all appropriate out codes.
         * @see #OUT_LEFT
         * @see #OUT_TOP
         * @see #OUT_RIGHT
         * @see #OUT_BOTTOM
         * @since 1.2
         */
        outcode(x?: any, y?: any): number;
        outcode$java_awt_geom_Point2D(p: java.awt.geom.Point2D): number;
        setFrame$double$double$double$double(x: number, y: number, w: number, h: number): void;
        /**
         * Sets the location and size of the outer bounds of this
         * <code>Rectangle2D</code> to the specified rectangular values.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param {number} y
         * the Y coordinate of the upper-left corner of this
         * <code>Rectangle2D</code>
         * @param {number} w
         * the width of this <code>Rectangle2D</code>
         * @param {number} h
         * the height of this <code>Rectangle2D</code>
         * @since 1.2
         */
        setFrame(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @return {java.awt.geom.Rectangle2D}
         */
        getBounds2D(): Rectangle2D;
        contains$double$double(x: number, y: number): boolean;
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): boolean;
        /**
         * Returns a new <code>Rectangle2D</code> object representing the
         * intersection of this <code>Rectangle2D</code> with the specified
         * <code>Rectangle2D</code>.
         *
         * @param {java.awt.geom.Rectangle2D} r
         * the <code>Rectangle2D</code> to be intersected with this
         * <code>Rectangle2D</code>
         * @return {java.awt.geom.Rectangle2D} the largest <code>Rectangle2D</code> contained in both the
         * specified <code>Rectangle2D</code> and in this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        abstract createIntersection(r: Rectangle2D): Rectangle2D;
        /**
         * Intersects the pair of specified source <code>Rectangle2D</code> objects
         * and puts the result into the specified destination
         * <code>Rectangle2D</code> object. One of the source rectangles can also be
         * the destination to avoid creating a third Rectangle2D object, but in this
         * case the original points of this source rectangle will be overwritten by
         * this method.
         *
         * @param {java.awt.geom.Rectangle2D} src1
         * the first of a pair of <code>Rectangle2D</code> objects to be
         * intersected with each other
         * @param {java.awt.geom.Rectangle2D} src2
         * the second of a pair of <code>Rectangle2D</code> objects to be
         * intersected with each other
         * @param {java.awt.geom.Rectangle2D} dest
         * the <code>Rectangle2D</code> that holds the results of the
         * intersection of <code>src1</code> and <code>src2</code>
         * @since 1.2
         */
        static intersect(src1: Rectangle2D, src2: Rectangle2D, dest: Rectangle2D): void;
        /**
         * Returns a new <code>Rectangle2D</code> object representing the union of
         * this <code>Rectangle2D</code> with the specified <code>Rectangle2D</code>
         * .
         *
         * @param {java.awt.geom.Rectangle2D} r
         * the <code>Rectangle2D</code> to be combined with this
         * <code>Rectangle2D</code>
         * @return {java.awt.geom.Rectangle2D} the smallest <code>Rectangle2D</code> containing both the
         * specified <code>Rectangle2D</code> and this
         * <code>Rectangle2D</code>.
         * @since 1.2
         */
        abstract createUnion(r: Rectangle2D): Rectangle2D;
        /**
         * Unions the pair of source <code>Rectangle2D</code> objects and puts the
         * result into the specified destination <code>Rectangle2D</code> object.
         * One of the source rectangles can also be the destination to avoid
         * creating a third Rectangle2D object, but in this case the original points
         * of this source rectangle will be overwritten by this method.
         *
         * @param {java.awt.geom.Rectangle2D} src1
         * the first of a pair of <code>Rectangle2D</code> objects to be
         * combined with each other
         * @param {java.awt.geom.Rectangle2D} src2
         * the second of a pair of <code>Rectangle2D</code> objects to be
         * combined with each other
         * @param {java.awt.geom.Rectangle2D} dest
         * the <code>Rectangle2D</code> that holds the results of the
         * union of <code>src1</code> and <code>src2</code>
         * @since 1.2
         */
        static union(src1: Rectangle2D, src2: Rectangle2D, dest: Rectangle2D): void;
        add$double$double(newx: number, newy: number): void;
        /**
         * Adds a point, specified by the double precision arguments
         * <code>newx</code> and <code>newy</code>, to this <code>Rectangle2D</code>
         * . The resulting <code>Rectangle2D</code> is the smallest
         * <code>Rectangle2D</code> that contains both the original
         * <code>Rectangle2D</code> and the specified point.
         * <p>
         * After adding a point, a call to <code>contains</code> with the added
         * point as an argument does not necessarily return <code>true</code>. The
         * <code>contains</code> method does not return <code>true</code> for points
         * on the right or bottom edges of a rectangle. Therefore, if the added
         * point falls on the left or bottom edge of the enlarged rectangle,
         * <code>contains</code> returns <code>false</code> for that point.
         *
         * @param {number} newx
         * the X coordinate of the new point
         * @param {number} newy
         * the Y coordinate of the new point
         * @since 1.2
         */
        add(newx?: any, newy?: any): any;
        add$java_awt_geom_Point2D(pt: java.awt.geom.Point2D): void;
        add$java_awt_geom_Rectangle2D(r: Rectangle2D): void;
        getPathIterator$java_awt_geom_AffineTransform(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
        getPathIterator$java_awt_geom_AffineTransform$double(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        /**
         * Returns an iteration object that defines the boundary of the flattened
         * <code>Rectangle2D</code>. Since rectangles are already flat, the
         * <code>flatness</code> parameter is ignored. The iterator for this class
         * is multi-threaded safe, which means that this <code>Rectangle2D</code>
         * class guarantees that modifications to the geometry of this
         * <code>Rectangle2D</code> object do not affect any iterations of that
         * geometry that are already in process.
         *
         * @param {java.awt.geom.AffineTransform} at
         * an optional <code>AffineTransform</code> to be applied to the
         * coordinates as they are returned in the iteration, or
         * <code>null</code> if untransformed coordinates are desired
         * @param {number} flatness
         * the maximum distance that the line segments used to
         * approximate the curved segments are allowed to deviate from
         * any point on the original curve. Since rectangles are already
         * flat, the <code>flatness</code> parameter is ignored.
         * @return {*} the <code>PathIterator</code> object that returns the geometry of
         * the outline of this <code>Rectangle2D</code>, one segment at a
         * time.
         * @since 1.2
         */
        getPathIterator(at?: any, flatness?: any): java.awt.geom.PathIterator;
        /**
         * Returns the hashcode for this <code>Rectangle2D</code>.
         *
         * @return {number} the hashcode for this <code>Rectangle2D</code>.
         * @since 1.2
         */
        hashCode(): number;
        /**
         * Determines whether or not the specified <code>Object</code> is equal to
         * this <code>Rectangle2D</code>. The specified <code>Object</code> is equal
         * to this <code>Rectangle2D</code> if it is an instance of
         * <code>Rectangle2D</code> and if its location and size are the same as
         * this <code>Rectangle2D</code>.
         *
         * @param {*} obj
         * an <code>Object</code> to be compared with this
         * <code>Rectangle2D</code>.
         * @return {boolean} <code>true</code> if <code>obj</code> is an instance of
         * <code>Rectangle2D</code> and has the same values;
         * <code>false</code> otherwise.
         * @since 1.2
         */
        equals(obj: any): boolean;
    }
    namespace Rectangle2D {
        /**
         * Constructs and initializes a <code>Rectangle2D</code> from the
         * specified <code>float</code> coordinates.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the newly
         * constructed <code>Rectangle2D</code>
         * @param {number} y
         * the Y coordinate of the upper-left corner of the newly
         * constructed <code>Rectangle2D</code>
         * @param {number} w
         * the width of the newly constructed
         * <code>Rectangle2D</code>
         * @param {number} h
         * the height of the newly constructed
         * <code>Rectangle2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.Rectangle2D
         */
        class Float extends java.awt.geom.Rectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setRect$float$float$float$float(x: number, y: number, w: number, h: number): void;
            /**
             * Sets the location and size of this <code>Rectangle2D</code> to the
             * specified <code>float</code> values.
             *
             * @param {number} x
             * the X coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param {number} y
             * the Y coordinate of the upper-left corner of this
             * <code>Rectangle2D</code>
             * @param {number} w
             * the width of this <code>Rectangle2D</code>
             * @param {number} h
             * the height of this <code>Rectangle2D</code>
             * @since 1.2
             */
            setRect(x?: any, y?: any, w?: any, h?: any): any;
            setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
            setRect$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
            outcode$double$double(x: number, y: number): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @return {number}
             */
            outcode(x?: any, y?: any): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {java.awt.geom.Rectangle2D} r
             * @return {java.awt.geom.Rectangle2D}
             */
            createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {java.awt.geom.Rectangle2D} r
             * @return {java.awt.geom.Rectangle2D}
             */
            createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * Returns the <code>String</code> representation of this
             * <code>Rectangle2D</code>.
             *
             * @return {string} a <code>String</code> representing this
             * <code>Rectangle2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
        /**
         * Constructs and initializes a <code>Rectangle2D</code> from the
         * specified <code>double</code> coordinates.
         *
         * @param {number} x
         * the X coordinate of the upper-left corner of the newly
         * constructed <code>Rectangle2D</code>
         * @param {number} y
         * the Y coordinate of the upper-left corner of the newly
         * constructed <code>Rectangle2D</code>
         * @param {number} w
         * the width of the newly constructed
         * <code>Rectangle2D</code>
         * @param {number} h
         * the height of the newly constructed
         * <code>Rectangle2D</code>
         * @since 1.2
         * @class
         * @extends java.awt.geom.Rectangle2D
         */
        class Double extends java.awt.geom.Rectangle2D implements java.io.Serializable {
            /**
             * The X coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            x: number;
            /**
             * The Y coordinate of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            y: number;
            /**
             * The width of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            width: number;
            /**
             * The height of this <code>Rectangle2D</code>.
             *
             * @since 1.2
             * @serial
             */
            height: number;
            constructor(x?: any, y?: any, w?: any, h?: any);
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getX(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getY(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getWidth(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {number}
             */
            getHeight(): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {boolean}
             */
            isEmpty(): boolean;
            setRect$double$double$double$double(x: number, y: number, w: number, h: number): void;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @param {number} w
             * @param {number} h
             */
            setRect(x?: any, y?: any, w?: any, h?: any): any;
            setRect$java_awt_geom_Rectangle2D(r: java.awt.geom.Rectangle2D): void;
            outcode$double$double(x: number, y: number): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {number} x
             * @param {number} y
             * @return {number}
             */
            outcode(x?: any, y?: any): number;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @return {java.awt.geom.Rectangle2D}
             */
            getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {java.awt.geom.Rectangle2D} r
             * @return {java.awt.geom.Rectangle2D}
             */
            createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * {@inheritDoc}
             *
             * @since 1.2
             * @param {java.awt.geom.Rectangle2D} r
             * @return {java.awt.geom.Rectangle2D}
             */
            createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
            /**
             * Returns the <code>String</code> representation of this
             * <code>Rectangle2D</code>.
             *
             * @return {string} a <code>String</code> representing this
             * <code>Rectangle2D</code>.
             * @since 1.2
             */
            toString(): string;
            static serialVersionUID: number;
        }
    }
}
declare namespace javax.swing {
    /**
     * Constructs a DefaultComboBoxModel object initialized with
     * an array of objects.
     *
     * @param {E[]} items  an array of Object objects
     * @class
     * @extends javax.swing.AbstractListModel
     * @author Arnaud Weber
     */
    class DefaultComboBoxModel<E> extends javax.swing.AbstractListModel<E> implements javax.swing.MutableComboBoxModel<E>, java.io.Serializable {
        objects: java.util.Vector<E>;
        selectedObject: any;
        constructor(items?: any);
        /**
         * Set the value of the selected item. The selected item may be null.
         *
         * @param {*} anObject The combo box value or null for no selection.
         */
        setSelectedItem(anObject: any): void;
        getSelectedItem(): any;
        getSize(): number;
        getElementAt(index: number): E;
        /**
         * Returns the index-position of the specified object in the list.
         *
         * @param {*} anObject
         * @return {number} an int representing the index position, where 0 is
         * the first position
         */
        getIndexOf(anObject: any): number;
        addElement(anObject: E): void;
        insertElementAt(anObject: E, index: number): void;
        removeElementAt(index: number): void;
        removeElement(anObject: any): void;
        /**
         * Empties the list.
         */
        removeAllElements(): void;
    }
}
declare namespace javax.swing.undo {
    /**
     * A concrete subclass of AbstractUndoableEdit, used to assemble little
     * UndoableEdits into great big ones.
     *
     * @author Ray Ryan
     * @class
     * @extends javax.swing.undo.AbstractUndoableEdit
     */
    class CompoundEdit extends javax.swing.undo.AbstractUndoableEdit {
        /**
         * True if this edit has never received <code>end</code>.
         */
        inProgress: boolean;
        /**
         * The collection of <code>UndoableEdit</code>s
         * undone/redone en masse by this <code>CompoundEdit</code>.
         */
        edits: java.util.Vector<javax.swing.undo.UndoableEdit>;
        constructor();
        /**
         * Sends <code>undo</code> to all contained
         * <code>UndoableEdits</code> in the reverse of
         * the order in which they were added.
         */
        undo(): void;
        /**
         * Sends <code>redo</code> to all contained
         * <code>UndoableEdit</code>s in the order in
         * which they were added.
         */
        redo(): void;
        /**
         * Returns the last <code>UndoableEdit</code> in
         * <code>edits</code>, or <code>null</code>
         * if <code>edits</code> is empty.
         * @return {*}
         */
        lastEdit(): javax.swing.undo.UndoableEdit;
        /**
         * Sends <code>die</code> to each subedit,
         * in the reverse of the order that they were added.
         */
        die(): void;
        /**
         * If this edit is <code>inProgress</code>,
         * accepts <code>anEdit</code> and returns true.
         *
         * <p>The last edit added to this <code>CompoundEdit</code>
         * is given a chance to <code>addEdit(anEdit)</code>.
         * If it refuses (returns false), <code>anEdit</code> is
         * given a chance to <code>replaceEdit</code> the last edit.
         * If <code>anEdit</code> returns false here,
         * it is added to <code>edits</code>.
         *
         * @param {*} anEdit the edit to be added
         * @return {boolean} true if the edit is <code>inProgress</code>;
         * otherwise returns false
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Sets <code>inProgress</code> to false.
         *
         * @see #canUndo
         * @see #canRedo
         */
        end(): void;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         * @return {boolean}
         */
        canUndo(): boolean;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         * @return {boolean}
         */
        canRedo(): boolean;
        /**
         * Returns true if this edit is in progress--that is, it has not
         * received end. This generally means that edits are still being
         * added to it.
         *
         * @see     #end
         * @return {boolean}
         */
        isInProgress(): boolean;
        /**
         * Returns true if any of the <code>UndoableEdit</code>s
         * in <code>edits</code> do.
         * Returns false if they all return false.
         * @return {boolean}
         */
        isSignificant(): boolean;
        /**
         * Returns <code>getPresentationName</code> from the
         * last <code>UndoableEdit</code> added to
         * <code>edits</code>. If <code>edits</code> is empty,
         * calls super.
         * @return {string}
         */
        getPresentationName(): string;
        /**
         * Returns <code>getUndoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         * @return {string}
         */
        getUndoPresentationName(): string;
        /**
         * Returns <code>getRedoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         * @return {string}
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Create and return a new StateEdit with a presentation name.
     *
     * @param {*} anObject The object to watch for changing state
     * @param {string} name The presentation name to be used for this edit
     *
     * @see StateEdit
     * @class
     * @extends javax.swing.undo.AbstractUndoableEdit
     * @author Ray Ryan
     */
    class StateEdit extends javax.swing.undo.AbstractUndoableEdit {
        static RCSID: string;
        /**
         * The object being edited
         */
        object: javax.swing.undo.StateEditable;
        /**
         * The state information prior to the edit
         */
        preState: java.util.Hashtable<any, any>;
        /**
         * The state information after the edit
         */
        postState: java.util.Hashtable<any, any>;
        /**
         * The undo/redo presentation name
         */
        undoRedoName: string;
        constructor(anObject?: any, name?: any);
        init(anObject: javax.swing.undo.StateEditable, name: string): void;
        /**
         * Gets the post-edit state of the StateEditable object and
         * ends the edit.
         */
        end(): void;
        /**
         * Tells the edited object to apply the state prior to the edit
         */
        undo(): void;
        /**
         * Tells the edited object to apply the state after the edit
         */
        redo(): void;
        /**
         * Gets the presentation name for this edit
         * @return {string}
         */
        getPresentationName(): string;
        /**
         * Remove redundant key/values in state hashtables.
         */
        removeRedundantState(): void;
    }
}
declare namespace javax.swing.event {
    /**
     * Constructs a SwingPropertyChangeSupport object.
     *
     * @param {*} sourceBean
     * the bean to be given as the source for any events
     * @param {boolean} notifyOnEDT
     * whether to notify listeners on the <i>Event Dispatch
     * Thread</i> only
     *
     * @throws NullPointerException
     * if {@code sourceBean} is {@code null}
     * @since 1.6
     * @class
     * @extends java.beans.PropertyChangeSupport
     * @author Igor Kushnirskiy
     */
    class SwingPropertyChangeSupport extends java.beans.PropertyChangeSupport {
        constructor(sourceBean?: any, notifyOnEDT?: any);
        firePropertyChange(propertyName?: any, oldValue?: any, newValue?: any): any;
        firePropertyChange$java_beans_PropertyChangeEvent(evt: java.beans.PropertyChangeEvent): void;
        /**
         * Returns {@code notifyOnEDT} property.
         *
         * @return {boolean} {@code notifyOnEDT} property
         * @see #SwingPropertyChangeSupport(Object sourceBean, boolean notifyOnEDT)
         * @since 1.6
         */
        isNotifyOnEDT(): boolean;
        static serialVersionUID: number;
        /**
         * whether to notify listeners on EDT
         *
         * @serial
         * @since 1.6
         */
        notifyOnEDT: boolean;
    }
}
declare namespace java.awt {
    class Window extends java.awt.Container {
        static loaded: boolean;
        getElement(): HTMLDivElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        /**
         * This represents the warning message that is to be displayed in a non
         * secure window. ie : a window that has a security manager installed that
         * denies {@code AWTPermission("showWindowWithoutWarningBanner")}. This
         * message can be displayed anywhere in the window.
         *
         * @serial
         * @see #getWarningString
         */
        warningString: string;
        /**
         * {@code icons} is the graphical way we can represent the frames and
         * dialogs. {@code Window} can't display icon but it's being inherited by
         * owned {@code Dialog}s.
         *
         * @serial
         * @see #getIconImages
         * @see #setIconImages
         */
        icons: java.util.List<java.awt.Image>;
        static OPENED: number;
        state: number;
        alwaysOnTop: boolean;
        focusableWindowState: boolean;
        autoRequestFocus: boolean;
        isInShow: boolean;
        opacity: number;
        shape: java.awt.Shape;
        static base: string;
        static nameCounter: number;
        isTrayIconWindow: boolean;
        constructor(owner?: any);
        ownedInit(owner: Window): void;
        constructComponentName(): string;
        getIconImages(): java.util.List<java.awt.Image>;
        setIconImages(icons: java.util.List<any>): void;
        setIconImage(image: java.awt.Image): void;
        pack(): void;
        setMinimumSize(minimumSize: java.awt.Dimension): void;
        /**
         *
         * @param {boolean} visible
         */
        setVisible(visible: boolean): void;
        dispose(): void;
        toFront(): void;
        toBack(): void;
        getToolkit(): java.awt.Toolkit;
        getWarningString(): string;
        setCursor(cursor: java.awt.Cursor): void;
        windowListeners: Array<java.awt.event.WindowListener>;
        windowStateListeners: Array<java.awt.event.WindowStateListener>;
        windowFocusListeners: Array<java.awt.event.WindowFocusListener>;
        addWindowListener(l: java.awt.event.WindowListener): void;
        addWindowStateListener(l: java.awt.event.WindowStateListener): void;
        addWindowFocusListener(l: java.awt.event.WindowFocusListener): void;
        removeWindowListener(l: java.awt.event.WindowListener): void;
        removeWindowStateListener(l: java.awt.event.WindowStateListener): void;
        removeWindowFocusListener(l: java.awt.event.WindowFocusListener): void;
        getWindowListeners(): java.awt.event.WindowListener[];
        getWindowFocusListeners(): java.awt.event.WindowFocusListener[];
        getWindowStateListeners(): java.awt.event.WindowStateListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processWindowEvent(e: java.awt.event.WindowEvent): void;
        processWindowFocusEvent(e: java.awt.event.WindowEvent): void;
        processWindowStateEvent(e: java.awt.event.WindowEvent): void;
        setAlwaysOnTop(alwaysOnTop: boolean): void;
        isAlwaysOnTopSupported(): boolean;
        isAlwaysOnTop(): boolean;
        isActive(): boolean;
        isFocused(): boolean;
        setFocusCycleRoot(focusCycleRoot: boolean): void;
        isFocusCycleRoot(): boolean;
        getFocusCycleRootAncestor(): java.awt.Container;
        isFocusableWindow(): boolean;
        getFocusableWindowState(): boolean;
        setFocusableWindowState(focusableWindowState: boolean): void;
        setAutoRequestFocus(autoRequestFocus: boolean): void;
        isAutoRequestFocus(): boolean;
        addPropertyChangeListener$java_beans_PropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        addPropertyChangeListener$java_lang_String$java_beans_PropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
        addPropertyChangeListener(propertyName?: any, listener?: any): any;
        isShowing(): boolean;
        /**
         * Window type.
         *
         * Synchronization: ObjectLock
         */
        type: Window.Type;
        setType(type: Window.Type): void;
        getType(): Window.Type;
        getOpacity(): number;
        setOpacity(opacity: number): void;
        getShape(): java.awt.Shape;
        setShape(shape: java.awt.Shape): void;
    }
    namespace Window {
        enum Type {
            /**
             * Represents a <i>normal</i> window.
             *
             * This is the default type for objects of the {@code Window} class or
             * its descendants. Use this type for regular top-level windows.
             */
            NORMAL = 0,
            /**
             * Represents a <i>utility</i> window.
             *
             * A utility window is usually a small window such as a toolbar or a
             * palette. The native system may render the window with smaller
             * title-bar if the window is either a {@code Frame} or a {@code
             * Dialog} object, and if it has its decorations enabled.
             */
            UTILITY = 1,
            /**
             * Represents a <i>popup</i> window.
             *
             * A popup window is a temporary window such as a drop-down menu or a
             * tooltip. On some platforms, windows of that type may be forcibly made
             * undecorated even if they are instances of the {@code Frame} or
             * {@code Dialog} class, and have decorations enabled.
             */
            POPUP = 2
        }
    }
}
declare namespace java.awt {
    class Panel extends java.awt.Container {
        htmlCanvas: HTMLCanvasElement;
        constructor(layout?: any);
        /**
         *
         */
        createHTML(): void;
        /**
         *
         * @return {java.awt.Graphics}
         */
        getGraphics(): java.awt.Graphics;
        /**
         *
         * @param {java.awt.Color} background
         */
        setBackground(background: java.awt.Color): void;
        /**
         *
         */
        doPaintInternal(): void;
        /**
         *
         */
        initHTML(): void;
    }
}
declare namespace javax.swing {
    abstract class JComponent extends java.awt.Container implements java.io.Serializable {
        listenerList: javax.swing.event.EventListenerList;
        constructor();
    }
}
declare namespace java.awt.event {
    /**
     * Constructs a <code>WindowEvent</code> object.
     * <p>This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code>
     * is <code>null</code>.
     *
     * @param {java.awt.Window} source    The <code>Window</code> object
     * that originated the event
     * @param {number} id        An integer indicating the type of event.
     * For information on allowable values, see
     * the class description for {@link WindowEvent}
     * @param {java.awt.Window} opposite  The other window involved in the focus or activation
     * change, or <code>null</code>
     * @param {number} oldState  Previous state of the window for window state change event.
     * See {@code #getOldState()} for allowable values
     * @param {number} newState  New state of the window for window state change event.
     * See {@code #getNewState()} for allowable values
     * @throws IllegalArgumentException if <code>source</code> is null
     * @see #getWindow()
     * @see #getID()
     * @see #getOppositeWindow()
     * @see #getOldState()
     * @see #getNewState()
     * @since 1.4
     * @class
     * @extends java.awt.event.ComponentEvent
     * @author Carl Quinn
     */
    class WindowEvent extends java.awt.event.ComponentEvent {
        /**
         * The first number in the range of ids used for window events.
         */
        static WINDOW_FIRST: number;
        /**
         * The window opened event.  This event is delivered only
         * the first time a window is made visible.
         */
        static WINDOW_OPENED: number;
        static WINDOW_OPENED_$LI$(): number;
        /**
         * The "window is closing" event. This event is delivered when
         * the user attempts to close the window from the window's system menu.
         * If the program does not explicitly hide or dispose the window
         * while processing this event, the window close operation will be
         * cancelled.
         */
        static WINDOW_CLOSING: number;
        static WINDOW_CLOSING_$LI$(): number;
        /**
         * The window closed event. This event is delivered after the displayable
         * window has been closed as the result of a call to dispose.
         * @see java.awt.Component#isDisplayable
         * @see Window#dispose
         */
        static WINDOW_CLOSED: number;
        static WINDOW_CLOSED_$LI$(): number;
        /**
         * The window iconified event. This event is delivered when
         * the window has been changed from a normal to a minimized state.
         * For many platforms, a minimized window is displayed as
         * the icon specified in the window's iconImage property.
         * @see java.awt.Frame#setIconImage
         */
        static WINDOW_ICONIFIED: number;
        static WINDOW_ICONIFIED_$LI$(): number;
        /**
         * The window deiconified event type. This event is delivered when
         * the window has been changed from a minimized to a normal state.
         */
        static WINDOW_DEICONIFIED: number;
        static WINDOW_DEICONIFIED_$LI$(): number;
        /**
         * The window-activated event type. This event is delivered when the Window
         * becomes the active Window. Only a Frame or a Dialog can be the active
         * Window. The native windowing system may denote the active Window or its
         * children with special decorations, such as a highlighted title bar. The
         * active Window is always either the focused Window, or the first Frame or
         * Dialog that is an owner of the focused Window.
         */
        static WINDOW_ACTIVATED: number;
        static WINDOW_ACTIVATED_$LI$(): number;
        /**
         * The window-deactivated event type. This event is delivered when the
         * Window is no longer the active Window. Only a Frame or a Dialog can be
         * the active Window. The native windowing system may denote the active
         * Window or its children with special decorations, such as a highlighted
         * title bar. The active Window is always either the focused Window, or the
         * first Frame or Dialog that is an owner of the focused Window.
         */
        static WINDOW_DEACTIVATED: number;
        static WINDOW_DEACTIVATED_$LI$(): number;
        /**
         * The window-gained-focus event type. This event is delivered when the
         * Window becomes the focused Window, which means that the Window, or one
         * of its subcomponents, will receive keyboard events.
         */
        static WINDOW_GAINED_FOCUS: number;
        static WINDOW_GAINED_FOCUS_$LI$(): number;
        /**
         * The window-lost-focus event type. This event is delivered when a Window
         * is no longer the focused Window, which means keyboard events will no
         * longer be delivered to the Window or any of its subcomponents.
         */
        static WINDOW_LOST_FOCUS: number;
        static WINDOW_LOST_FOCUS_$LI$(): number;
        /**
         * The window-state-changed event type.  This event is delivered
         * when a Window's state is changed by virtue of it being
         * iconified, maximized etc.
         * @since 1.4
         */
        static WINDOW_STATE_CHANGED: number;
        static WINDOW_STATE_CHANGED_$LI$(): number;
        /**
         * The last number in the range of ids used for window events.
         */
        static WINDOW_LAST: number;
        static WINDOW_LAST_$LI$(): number;
        /**
         * The other Window involved in this focus or activation change. For a
         * WINDOW_ACTIVATED or WINDOW_GAINED_FOCUS event, this is the Window that
         * lost activation or focus. For a WINDOW_DEACTIVATED or WINDOW_LOST_FOCUS
         * event, this is the Window that gained activation or focus. For any other
         * type of WindowEvent, or if the focus or activation change occurs with a
         * native application, a Java application in a different VM, or with no
         * other Window, null is returned.
         *
         * @see #getOppositeWindow
         * @since 1.4
         */
        opposite: java.awt.Window;
        /**
         * TBS
         */
        oldState: number;
        newState: number;
        static __java_awt_event_WindowEvent_serialVersionUID: number;
        constructor(source?: any, id?: any, opposite?: any, oldState?: any, newState?: any);
        /**
         * Returns the originator of the event.
         *
         * @return {java.awt.Window} the Window object that originated the event
         */
        getWindow(): java.awt.Window;
        /**
         * Returns the other Window involved in this focus or activation change.
         * For a WINDOW_ACTIVATED or WINDOW_GAINED_FOCUS event, this is the Window
         * that lost activation or focus. For a WINDOW_DEACTIVATED or
         * WINDOW_LOST_FOCUS event, this is the Window that gained activation or
         * focus. For any other type of WindowEvent, or if the focus or activation
         * change occurs with a native application, with a Java application in a
         * different VM or context, or with no other Window, null is returned.
         *
         * @return {java.awt.Window} the other Window involved in the focus or activation change, or
         * null
         * @since 1.4
         */
        getOppositeWindow(): java.awt.Window;
        /**
         * For <code>WINDOW_STATE_CHANGED</code> events returns the
         * previous state of the window. The state is
         * represented as a bitwise mask.
         * <ul>
         * <li><code>NORMAL</code>
         * <br>Indicates that no state bits are set.
         * <li><code>ICONIFIED</code>
         * <li><code>MAXIMIZED_HORIZ</code>
         * <li><code>MAXIMIZED_VERT</code>
         * <li><code>MAXIMIZED_BOTH</code>
         * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
         * and <code>MAXIMIZED_VERT</code>.
         * </ul>
         *
         * @return {number} a bitwise mask of the previous window state
         * @see java.awt.Frame#getExtendedState()
         * @since 1.4
         */
        getOldState(): number;
        /**
         * For <code>WINDOW_STATE_CHANGED</code> events returns the
         * new state of the window. The state is
         * represented as a bitwise mask.
         * <ul>
         * <li><code>NORMAL</code>
         * <br>Indicates that no state bits are set.
         * <li><code>ICONIFIED</code>
         * <li><code>MAXIMIZED_HORIZ</code>
         * <li><code>MAXIMIZED_VERT</code>
         * <li><code>MAXIMIZED_BOTH</code>
         * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
         * and <code>MAXIMIZED_VERT</code>.
         * </ul>
         *
         * @return {number} a bitwise mask of the new window state
         * @see java.awt.Frame#getExtendedState()
         * @since 1.4
         */
        getNewState(): number;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return {string} a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt.event {
    /**
     * Constructs a <code>ContainerEvent</code> object.
     * <p> This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code>
     * is <code>null</code>.
     *
     * @param {java.awt.Component} source The <code>Component</code> object (container)
     * that originated the event
     * @param {number} id     An integer indicating the type of event.
     * For information on allowable values, see
     * the class description for {@link ContainerEvent}
     * @param {java.awt.Component} child  the component that was added or removed
     * @throws IllegalArgumentException if <code>source</code> is null
     * @see #getContainer()
     * @see #getID()
     * @see #getChild()
     * @class
     * @extends java.awt.event.ComponentEvent
     * @author Tim Prinzing
     */
    class ContainerEvent extends java.awt.event.ComponentEvent {
        /**
         * The first number in the range of ids used for container events.
         */
        static CONTAINER_FIRST: number;
        /**
         * The last number in the range of ids used for container events.
         */
        static CONTAINER_LAST: number;
        /**
         * This event indicates that a component was added to the container.
         */
        static COMPONENT_ADDED: number;
        static COMPONENT_ADDED_$LI$(): number;
        /**
         * This event indicates that a component was removed from the container.
         */
        static COMPONENT_REMOVED: number;
        static COMPONENT_REMOVED_$LI$(): number;
        /**
         * The non-null component that is being added or
         * removed from the Container.
         *
         * @serial
         * @see #getChild()
         */
        child: java.awt.Component;
        static __java_awt_event_ContainerEvent_serialVersionUID: number;
        constructor(source: java.awt.Component, id: number, child: java.awt.Component);
        /**
         * Returns the originator of the event.
         *
         * @return {java.awt.Container} the <code>Container</code> object that originated
         * the event, or <code>null</code> if the object is not a
         * <code>Container</code>.
         */
        getContainer(): java.awt.Container;
        /**
         * Returns the component that was affected by the event.
         *
         * @return {java.awt.Component} the Component object that was added or removed
         */
        getChild(): java.awt.Component;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return {string} a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt.event {
    abstract class InputEvent extends java.awt.event.ComponentEvent {
        static SHIFT_MASK: number;
        static SHIFT_MASK_$LI$(): number;
        static CTRL_MASK: number;
        static CTRL_MASK_$LI$(): number;
        static META_MASK: number;
        static META_MASK_$LI$(): number;
        static ALT_MASK: number;
        static ALT_MASK_$LI$(): number;
        static ALT_GRAPH_MASK: number;
        static BUTTON1_MASK: number;
        static BUTTON2_MASK: number;
        static BUTTON2_MASK_$LI$(): number;
        static BUTTON3_MASK: number;
        static BUTTON3_MASK_$LI$(): number;
        static SHIFT_DOWN_MASK: number;
        static CTRL_DOWN_MASK: number;
        static META_DOWN_MASK: number;
        static ALT_DOWN_MASK: number;
        static BUTTON1_DOWN_MASK: number;
        static BUTTON2_DOWN_MASK: number;
        static BUTTON3_DOWN_MASK: number;
        static ALT_GRAPH_DOWN_MASK: number;
        static BUTTON_DOWN_MASK: number[];
        static BUTTON_DOWN_MASK_$LI$(): number[];
        static getMaskForButton(button: number): number;
        static FIRST_HIGH_BIT: number;
        static JDK_1_3_MODIFIERS: number;
        static JDK_1_3_MODIFIERS_$LI$(): number;
        static HIGH_MODIFIERS: number;
        static HIGH_MODIFIERS_$LI$(): number;
        when: number;
        modifiers: number;
        constructor(source: java.awt.Component, id: number, when: number, modifiers: number);
        isShiftDown(): boolean;
        isControlDown(): boolean;
        isMetaDown(): boolean;
        isAltDown(): boolean;
        isAltGraphDown(): boolean;
        getWhen(): number;
        getModifiers(): number;
        getModifiersEx(): number;
        consume(): void;
        isConsumed(): boolean;
        static __java_awt_event_InputEvent_serialVersionUID: number;
        static getModifiersExText(modifiers: number): string;
    }
}
declare namespace java.awt.event {
    /**
     * Constructs a <code>FocusEvent</code> object with the
     * specified temporary state and opposite <code>Component</code>.
     * The opposite <code>Component</code> is the other
     * <code>Component</code> involved in this focus change.
     * For a <code>FOCUS_GAINED</code> event, this is the
     * <code>Component</code> that lost focus. For a
     * <code>FOCUS_LOST</code> event, this is the <code>Component</code>
     * that gained focus. If this focus change occurs with a native
     * application, with a Java application in a different VM,
     * or with no other <code>Component</code>, then the opposite
     * <code>Component</code> is <code>null</code>.
     * <p> This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code>
     * is <code>null</code>.
     *
     * @param {java.awt.Component} source     The <code>Component</code> that originated the event
     * @param {number} id         An integer indicating the type of event.
     * For information on allowable values, see
     * the class description for {@link FocusEvent}
     * @param {boolean} temporary  Equals <code>true</code> if the focus change is temporary;
     * <code>false</code> otherwise
     * @param {java.awt.Component} opposite   The other Component involved in the focus change,
     * or <code>null</code>
     * @throws IllegalArgumentException if <code>source</code> equals {@code null}
     * @see #getSource()
     * @see #getID()
     * @see #isTemporary()
     * @see #getOppositeComponent()
     * @since 1.4
     * @class
     * @extends java.awt.event.ComponentEvent
     * @author Carl Quinn
     */
    class FocusEvent extends java.awt.event.ComponentEvent {
        /**
         * The first number in the range of ids used for focus events.
         */
        static FOCUS_FIRST: number;
        /**
         * The last number in the range of ids used for focus events.
         */
        static FOCUS_LAST: number;
        /**
         * This event indicates that the Component is now the focus owner.
         */
        static FOCUS_GAINED: number;
        static FOCUS_GAINED_$LI$(): number;
        /**
         * This event indicates that the Component is no longer the focus owner.
         */
        static FOCUS_LOST: number;
        static FOCUS_LOST_$LI$(): number;
        /**
         * A focus event can have two different levels, permanent and temporary.
         * It will be set to true if some operation takes away the focus
         * temporarily and intends on getting it back once the event is completed.
         * Otherwise it will be set to false.
         *
         * @serial
         * @see #isTemporary
         */
        temporary: boolean;
        /**
         * The other Component involved in this focus change. For a FOCUS_GAINED
         * event, this is the Component that lost focus. For a FOCUS_LOST event,
         * this is the Component that gained focus. If this focus change occurs
         * with a native application, a Java application in a different VM, or with
         * no other Component, then the opposite Component is null.
         *
         * @see #getOppositeComponent
         * @since 1.4
         */
        opposite: java.awt.Component;
        static __java_awt_event_FocusEvent_serialVersionUID: number;
        constructor(source?: any, id?: any, temporary?: any, opposite?: any);
        /**
         * Identifies the focus change event as temporary or permanent.
         *
         * @return {boolean} <code>true</code> if the focus change is temporary;
         * <code>false</code> otherwise
         */
        isTemporary(): boolean;
        /**
         * Returns the other Component involved in this focus change. For a
         * FOCUS_GAINED event, this is the Component that lost focus. For a
         * FOCUS_LOST event, this is the Component that gained focus. If this
         * focus change occurs with a native application, with a Java application
         * in a different VM or context, or with no other Component, then null is
         * returned.
         *
         * @return {java.awt.Component} the other Component involved in the focus change, or null
         * @since 1.4
         */
        getOppositeComponent(): java.awt.Component;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return {string} a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace java.awt {
    class WebGraphics2D extends java.awt.Graphics2D {
        context: CanvasRenderingContext2D;
        constructor(canvas: HTMLCanvasElement);
        drawString$java_lang_String$int$int(s: string, x: number, y: number): void;
        /**
         *
         * @param {string} s
         * @param {number} x
         * @param {number} y
         */
        drawString(s?: any, x?: any, y?: any): any;
        getContext(): CanvasRenderingContext2D;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        clearRect(x: number, y: number, width: number, height: number): void;
        create(x?: any, y?: any, width?: any, height?: any): java.awt.Graphics;
        create$(): java.awt.Graphics;
        /**
         *
         * @param {*} hintKey
         * @param {*} hintValue
         */
        setRenderingHint(hintKey: any, hintValue: any): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} startAngle
         * @param {number} arcAngle
         */
        drawArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
        /**
         *
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         */
        drawLine(x1: number, y1: number, x2: number, y2: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        drawOval(x: number, y: number, width: number, height: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} arcWidth
         * @param {number} arcHeight
         */
        drawRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        drawRect(x: number, y: number, width: number, height: number): void;
        drawPolygon$int_A$int_A$int(xPoints: number[], yPoints: number[], nPoints: number): void;
        /**
         *
         * @param {int[]} xPoints
         * @param {int[]} yPoints
         * @param {number} nPoints
         */
        drawPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        drawPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        fillPolygon$java_awt_Polygon(p: java.awt.Polygon): void;
        getClipBounds$java_awt_Rectangle(r: java.awt.Rectangle): java.awt.Rectangle;
        /**
         *
         * @param {java.awt.Rectangle} r
         * @return {java.awt.Rectangle}
         */
        getClipBounds(r?: any): java.awt.Rectangle;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {boolean} raised
         */
        draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @return {boolean}
         */
        hitClip(x: number, y: number, width: number, height: number): boolean;
        /**
         *
         * @param {int[]} xPoints
         * @param {int[]} yPoints
         * @param {number} nPoints
         */
        drawPolyline(xPoints: number[], yPoints: number[], nPoints: number): void;
        /**
         *
         * @param {*} s
         */
        draw(s: java.awt.Shape): void;
        /**
         *
         * @param {*} s
         */
        fill(s: java.awt.Shape): void;
        drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img: java.awt.Image, xform: java.awt.geom.AffineTransform, obs: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        /**
         *
         * @param {java.awt.Image} img
         * @param {number} dx1
         * @param {number} dy1
         * @param {number} dx2
         * @param {number} dy2
         * @param {number} sx1
         * @param {number} sy1
         * @param {number} sx2
         * @param {number} sy2
         * @param {java.awt.Color} bgcolor
         * @param {*} observer
         * @return {boolean}
         */
        drawImage(img?: any, dx1?: any, dy1?: any, dx2?: any, dy2?: any, sx1?: any, sy1?: any, sx2?: any, sy2?: any, bgcolor?: any, observer?: any): boolean;
        drawImage$java_awt_Image$int$int$int$int$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, dx1: number, dy1: number, dx2: number, dy2: number, sx1: number, sy1: number, sx2: number, sy2: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_Color$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean;
        drawImage$java_awt_Image$int$int$int$int$java_awt_image_ImageObserver(img: java.awt.Image, x: number, y: number, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
        fillPolygon$int_A$int_A$int(xPoints: number[], yPoints: number[], nPoints: number): void;
        /**
         *
         * @param {int[]} xPoints
         * @param {int[]} yPoints
         * @param {number} nPoints
         */
        fillPolygon(xPoints?: any, yPoints?: any, nPoints?: any): any;
        clip: java.awt.Shape;
        /**
         *
         * @return {*}
         */
        getClip(): java.awt.Shape;
        setClip$java_awt_Shape(clip: java.awt.Shape): void;
        setClip$int$int$int$int(x: number, y: number, width: number, height: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        setClip(x?: any, y?: any, width?: any, height?: any): any;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        clipRect(x: number, y: number, width: number, height: number): void;
        getClipBounds$(): java.awt.Rectangle;
        translate$int$int(x: number, y: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         */
        translate(x?: any, y?: any): any;
        drawString$java_lang_String$float$float(str: string, x: number, y: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} startAngle
         * @param {number} arcAngle
         */
        fillArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        fillOval(x: number, y: number, width: number, height: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        fillRect(x: number, y: number, width: number, height: number): void;
        /**
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} arcWidth
         * @param {number} arcHeight
         */
        fillRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
        color: java.awt.Color;
        /**
         *
         * @param {java.awt.Color} c
         */
        setColor(c: java.awt.Color): void;
        /**
         *
         * @return {java.awt.Color}
         */
        getColor(): java.awt.Color;
        translate$double$double(tx: number, ty: number): void;
        rotate$double(theta: number): void;
        rotate$double$double$double(theta: number, x: number, y: number): void;
        /**
         *
         * @param {number} theta
         * @param {number} x
         * @param {number} y
         */
        rotate(theta?: any, x?: any, y?: any): any;
        /**
         *
         * @param {number} sx
         * @param {number} sy
         */
        scale(sx: number, sy: number): void;
        /**
         *
         * @param {number} shx
         * @param {number} shy
         */
        shear(shx: number, shy: number): void;
        /**
         *
         */
        dispose(): void;
        font: java.awt.Font;
        /**
         *
         * @param {java.awt.Font} font
         */
        setFont(font: java.awt.Font): void;
        /**
         *
         * @return {java.awt.Font}
         */
        getFont(): java.awt.Font;
        background: java.awt.Color;
        /**
         *
         * @param {java.awt.Color} color
         */
        setBackground(color: java.awt.Color): void;
        /**
         *
         * @return {java.awt.Color}
         */
        getBackground(): java.awt.Color;
        __transform: java.awt.geom.AffineTransform;
        /**
         *
         * @param {java.awt.geom.AffineTransform} transform
         */
        setTransform(transform: java.awt.geom.AffineTransform): void;
        /**
         *
         * @return {java.awt.geom.AffineTransform}
         */
        getTransform(): java.awt.geom.AffineTransform;
        /**
         *
         * @param {java.awt.geom.AffineTransform} Tx
         */
        transform(Tx: java.awt.geom.AffineTransform): void;
        /**
         *
         */
        setPaintMode(): void;
        /**
         *
         * @return {*}
         */
        getPaint(): java.awt.Paint;
        /**
         *
         * @param {*} paint
         */
        setPaint(paint: java.awt.Paint): void;
        /**
         *
         * @param {*} s
         */
        setStroke(s: java.awt.Stroke): void;
    }
}
declare namespace java.awt.geom {
    /**
     * Constructs a new <code>GeneralPath</code> object with the specified
     * winding rule and the specified initial capacity to store path
     * coordinates. This number is an initial guess as to how many path segments
     * will be added to the path, but the storage is expanded as needed to store
     * whatever path segments are added.
     *
     * @param {number} rule
     * the winding rule
     * @param {number} initialCapacity
     * the estimate for the number of path segments in the path
     * @see #WIND_EVEN_ODD
     * @see #WIND_NON_ZERO
     * @since 1.2
     * @class
     * @extends java.awt.geom.Path2D.Float
     * @author Jim Graham
     */
    class GeneralPath extends java.awt.geom.Path2D.Float {
        constructor(windingRule?: any, pointTypes?: any, numTypes?: any, pointCoords?: any, numCoords?: any);
        static __java_awt_geom_GeneralPath_serialVersionUID: number;
    }
}
declare namespace java.awt {
    /**
     * Constructs a new <code>Rectangle</code> whose upper-left corner is
     * specified as
     * {@code (x,y)} and whose width and height
     * are specified by the arguments of the same name.
     * @param     {number} x the specified X coordinate
     * @param     {number} y the specified Y coordinate
     * @param     {number} width    the width of the <code>Rectangle</code>
     * @param     {number} height   the height of the <code>Rectangle</code>
     * @since 1.0
     * @class
     * @extends java.awt.geom.Rectangle2D
     * @author      Sami Shaio
     */
    class Rectangle extends java.awt.geom.Rectangle2D implements java.awt.Shape, java.io.Serializable {
        /**
         * The X coordinate of the upper-left corner of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setLocation(int, int)
         * @see #getLocation()
         * @since 1.0
         */
        x: number;
        /**
         * The Y coordinate of the upper-left corner of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setLocation(int, int)
         * @see #getLocation()
         * @since 1.0
         */
        y: number;
        /**
         * The width of the <code>Rectangle</code>.
         * @serial
         * @see #setSize(int, int)
         * @see #getSize()
         * @since 1.0
         */
        width: number;
        /**
         * The height of the <code>Rectangle</code>.
         *
         * @serial
         * @see #setSize(int, int)
         * @see #getSize()
         * @since 1.0
         */
        height: number;
        static serialVersionUID: number;
        constructor(x?: any, y?: any, width?: any, height?: any);
        /**
         * Returns the X coordinate of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return {number} the X coordinate of the bounding <code>Rectangle</code>.
         */
        getX(): number;
        /**
         * Returns the Y coordinate of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return {number} the Y coordinate of the bounding <code>Rectangle</code>.
         */
        getY(): number;
        /**
         * Returns the width of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return {number} the width of the bounding <code>Rectangle</code>.
         */
        getWidth(): number;
        /**
         * Returns the height of the bounding <code>Rectangle</code> in
         * <code>double</code> precision.
         * @return {number} the height of the bounding <code>Rectangle</code>.
         */
        getHeight(): number;
        /**
         * Gets the bounding <code>Rectangle</code> of this <code>Rectangle</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getBounds</code> method of
         * {@link Component}.
         * @return    {java.awt.Rectangle} a new <code>Rectangle</code>, equal to the
         * bounding <code>Rectangle</code> for this <code>Rectangle</code>.
         * @see       java.awt.Component#getBounds
         * @see       #setBounds(Rectangle)
         * @see       #setBounds(int, int, int, int)
         * @since     1.1
         */
        getBounds(): Rectangle;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {java.awt.geom.Rectangle2D}
         */
        getBounds2D(): java.awt.geom.Rectangle2D;
        setBounds$java_awt_Rectangle(r: Rectangle): void;
        setBounds$int$int$int$int(x: number, y: number, width: number, height: number): void;
        /**
         * Sets the bounding <code>Rectangle</code> of this
         * <code>Rectangle</code> to the specified
         * <code>x</code>, <code>y</code>, <code>width</code>,
         * and <code>height</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setBounds</code> method of <code>Component</code>.
         * @param {number} x the new X coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param {number} y the new Y coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param {number} width the new width for this <code>Rectangle</code>
         * @param {number} height the new height for this <code>Rectangle</code>
         * @see       #getBounds
         * @see       java.awt.Component#setBounds(int, int, int, int)
         * @since     1.1
         */
        setBounds(x?: any, y?: any, width?: any, height?: any): any;
        setRect$double$double$double$double(x: number, y: number, width: number, height: number): void;
        /**
         * Sets the bounds of this {@code Rectangle} to the integer bounds
         * which encompass the specified {@code x}, {@code y}, {@code width},
         * and {@code height}.
         * If the parameters specify a {@code Rectangle} that exceeds the
         * maximum range of integers, the result will be the best
         * representation of the specified {@code Rectangle} intersected
         * with the maximum integer bounds.
         * @param {number} x the X coordinate of the upper-left corner of
         * the specified rectangle
         * @param {number} y the Y coordinate of the upper-left corner of
         * the specified rectangle
         * @param {number} width the width of the specified rectangle
         * @param {number} height the new height of the specified rectangle
         */
        setRect(x?: any, y?: any, width?: any, height?: any): any;
        static clip(v: number, doceil: boolean): number;
        /**
         * Sets the bounding <code>Rectangle</code> of this
         * <code>Rectangle</code> to the specified
         * <code>x</code>, <code>y</code>, <code>width</code>,
         * and <code>height</code>.
         * <p>
         * @param {number} x the new X coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param {number} y the new Y coordinate for the upper-left
         * corner of this <code>Rectangle</code>
         * @param {number} width the new width for this <code>Rectangle</code>
         * @param {number} height the new height for this <code>Rectangle</code>
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setBounds(int, int, int, int)</code>.
         */
        reshape(x: number, y: number, width: number, height: number): void;
        /**
         * Returns the location of this <code>Rectangle</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getLocation</code> method of <code>Component</code>.
         * @return {java.awt.Point} the <code>Point</code> that is the upper-left corner of
         * this <code>Rectangle</code>.
         * @see       java.awt.Component#getLocation
         * @see       #setLocation(Point)
         * @see       #setLocation(int, int)
         * @since     1.1
         */
        getLocation(): java.awt.Point;
        setLocation$java_awt_Point(p: java.awt.Point): void;
        setLocation$int$int(x: number, y: number): void;
        /**
         * Moves this <code>Rectangle</code> to the specified location.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setLocation</code> method of <code>Component</code>.
         * @param {number} x the X coordinate of the new location
         * @param {number} y the Y coordinate of the new location
         * @see       #getLocation
         * @see       java.awt.Component#setLocation(int, int)
         * @since     1.1
         */
        setLocation(x?: any, y?: any): any;
        /**
         * Moves this <code>Rectangle</code> to the specified location.
         * <p>
         * @param {number} x the X coordinate of the new location
         * @param {number} y the Y coordinate of the new location
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setLocation(int, int)</code>.
         */
        move(x: number, y: number): void;
        /**
         * Translates this <code>Rectangle</code> the indicated distance,
         * to the right along the X coordinate axis, and
         * downward along the Y coordinate axis.
         * @param {number} dx the distance to move this <code>Rectangle</code>
         * along the X axis
         * @param {number} dy the distance to move this <code>Rectangle</code>
         * along the Y axis
         * @see       java.awt.Rectangle#setLocation(int, int)
         * @see       java.awt.Rectangle#setLocation(java.awt.Point)
         */
        translate(dx: number, dy: number): void;
        /**
         * Gets the size of this <code>Rectangle</code>, represented by
         * the returned <code>Dimension</code>.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>getSize</code> method of <code>Component</code>.
         * @return {java.awt.Dimension} a <code>Dimension</code>, representing the size of
         * this <code>Rectangle</code>.
         * @see       java.awt.Component#getSize
         * @see       #setSize(Dimension)
         * @see       #setSize(int, int)
         * @since     1.1
         */
        getSize(): java.awt.Dimension;
        setSize$java_awt_Dimension(d: java.awt.Dimension): void;
        setSize$int$int(width: number, height: number): void;
        /**
         * Sets the size of this <code>Rectangle</code> to the specified
         * width and height.
         * <p>
         * This method is included for completeness, to parallel the
         * <code>setSize</code> method of <code>Component</code>.
         * @param {number} width the new width for this <code>Rectangle</code>
         * @param {number} height the new height for this <code>Rectangle</code>
         * @see       java.awt.Component#setSize(int, int)
         * @see       #getSize
         * @since     1.1
         */
        setSize(width?: any, height?: any): any;
        /**
         * Sets the size of this <code>Rectangle</code> to the specified
         * width and height.
         * <p>
         * @param {number} width the new width for this <code>Rectangle</code>
         * @param {number} height the new height for this <code>Rectangle</code>
         * @deprecated As of JDK version 1.1,
         * replaced by <code>setSize(int, int)</code>.
         */
        resize(width: number, height: number): void;
        contains$java_awt_Point(p: java.awt.Point): boolean;
        contains$int$int(x: number, y: number): boolean;
        contains$java_awt_Rectangle(r: Rectangle): boolean;
        contains$int$int$int$int(X: number, Y: number, W: number, H: number): boolean;
        /**
         * Checks whether this <code>Rectangle</code> entirely contains
         * the <code>Rectangle</code>
         * at the specified location {@code (X,Y)} with the
         * specified dimensions {@code (W,H)}.
         * @param     {number} X the specified X coordinate
         * @param     {number} Y the specified Y coordinate
         * @param     {number} W   the width of the <code>Rectangle</code>
         * @param     {number} H   the height of the <code>Rectangle</code>
         * @return    {boolean} <code>true</code> if the <code>Rectangle</code> specified by
         * {@code (X, Y, W, H)}
         * is entirely enclosed inside this <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @since     1.1
         */
        contains(X?: any, Y?: any, W?: any, H?: any): boolean;
        /**
         * Checks whether or not this <code>Rectangle</code> contains the
         * point at the specified location {@code (X,Y)}.
         *
         * @param  {number} X the specified X coordinate
         * @param  {number} Y the specified Y coordinate
         * @return    {boolean} <code>true</code> if the point
         * {@code (X,Y)} is inside this
         * <code>Rectangle</code>;
         * <code>false</code> otherwise.
         * @deprecated As of JDK version 1.1,
         * replaced by <code>contains(int, int)</code>.
         */
        inside(X: number, Y: number): boolean;
        /**
         * {@inheritDoc}
         *
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): boolean;
        intersects$java_awt_Rectangle(r: Rectangle): boolean;
        /**
         * Computes the intersection of this <code>Rectangle</code> with the
         * specified <code>Rectangle</code>. Returns a new <code>Rectangle</code>
         * that represents the intersection of the two rectangles.
         * If the two rectangles do not intersect, the result will be
         * an empty rectangle.
         *
         * @param     {java.awt.Rectangle} r   the specified <code>Rectangle</code>
         * @return    {java.awt.Rectangle} the largest <code>Rectangle</code> contained in both the
         * specified <code>Rectangle</code> and in
         * this <code>Rectangle</code>; or if the rectangles
         * do not intersect, an empty rectangle.
         */
        intersection(r: Rectangle): Rectangle;
        /**
         * Computes the union of this <code>Rectangle</code> with the
         * specified <code>Rectangle</code>. Returns a new
         * <code>Rectangle</code> that
         * represents the union of the two rectangles.
         * <p>
         * If either {@code Rectangle} has any dimension less than zero
         * the rules for <a href=#NonExistant>non-existant</a> rectangles
         * apply.
         * If only one has a dimension less than zero, then the result
         * will be a copy of the other {@code Rectangle}.
         * If both have dimension less than zero, then the result will
         * have at least one dimension less than zero.
         * <p>
         * If the resulting {@code Rectangle} would have a dimension
         * too large to be expressed as an {@code int}, the result
         * will have a dimension of {@code Integer.MAX_VALUE} along
         * that dimension.
         * @param {java.awt.Rectangle} r the specified <code>Rectangle</code>
         * @return    {java.awt.Rectangle} the smallest <code>Rectangle</code> containing both
         * the specified <code>Rectangle</code> and this
         * <code>Rectangle</code>.
         */
        union(r: Rectangle): Rectangle;
        add$int$int(newx: number, newy: number): void;
        /**
         * Adds a point, specified by the integer arguments {@code newx,newy}
         * to the bounds of this {@code Rectangle}.
         * <p>
         * If this {@code Rectangle} has any dimension less than zero,
         * the rules for <a href=#NonExistant>non-existant</a>
         * rectangles apply.
         * In that case, the new bounds of this {@code Rectangle} will
         * have a location equal to the specified coordinates and
         * width and height equal to zero.
         * <p>
         * After adding a point, a call to <code>contains</code> with the
         * added point as an argument does not necessarily return
         * <code>true</code>. The <code>contains</code> method does not
         * return <code>true</code> for points on the right or bottom
         * edges of a <code>Rectangle</code>. Therefore, if the added point
         * falls on the right or bottom edge of the enlarged
         * <code>Rectangle</code>, <code>contains</code> returns
         * <code>false</code> for that point.
         * If the specified point must be contained within the new
         * {@code Rectangle}, a 1x1 rectangle should be added instead:
         * <pre>
         * r.add(newx, newy, 1, 1);
         * </pre>
         * @param {number} newx the X coordinate of the new point
         * @param {number} newy the Y coordinate of the new point
         */
        add(newx?: any, newy?: any): any;
        add$java_awt_Point(pt: java.awt.Point): void;
        add$java_awt_Rectangle(r: Rectangle): void;
        /**
         * Resizes the <code>Rectangle</code> both horizontally and vertically.
         * <p>
         * This method modifies the <code>Rectangle</code> so that it is
         * <code>h</code> units larger on both the left and right side,
         * and <code>v</code> units larger at both the top and bottom.
         * <p>
         * The new <code>Rectangle</code> has {@code (x - h, y - v)}
         * as its upper-left corner,
         * width of {@code (width + 2h)},
         * and a height of {@code (height + 2v)}.
         * <p>
         * If negative values are supplied for <code>h</code> and
         * <code>v</code>, the size of the <code>Rectangle</code>
         * decreases accordingly.
         * The {@code grow} method will check for integer overflow
         * and underflow, but does not check whether the resulting
         * values of {@code width} and {@code height} grow
         * from negative to non-negative or shrink from non-negative
         * to negative.
         * @param {number} h the horizontal expansion
         * @param {number} v the vertical expansion
         */
        grow(h: number, v: number): void;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @return {boolean}
         */
        isEmpty(): boolean;
        outcode$double$double(x: number, y: number): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        outcode(x?: any, y?: any): number;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @param {java.awt.geom.Rectangle2D} r
         * @return {java.awt.geom.Rectangle2D}
         */
        createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
        /**
         * {@inheritDoc}
         * @since 1.2
         * @param {java.awt.geom.Rectangle2D} r
         * @return {java.awt.geom.Rectangle2D}
         */
        createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
        /**
         * Checks whether two rectangles are equal.
         * <p>
         * The result is <code>true</code> if and only if the argument is not
         * <code>null</code> and is a <code>Rectangle</code> object that has the
         * same upper-left corner, width, and height as
         * this <code>Rectangle</code>.
         * @param {*} obj the <code>Object</code> to compare with
         * this <code>Rectangle</code>
         * @return    {boolean} <code>true</code> if the objects are equal;
         * <code>false</code> otherwise.
         */
        equals(obj: any): boolean;
        /**
         * Returns a <code>String</code> representing this
         * <code>Rectangle</code> and its values.
         * @return {string} a <code>String</code> representing this
         * <code>Rectangle</code> object's coordinate and size values.
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Creates a new <code>UndoManager</code>.
     * @class
     * @extends javax.swing.undo.CompoundEdit
     * @author Ray Ryan
     */
    class UndoManager extends javax.swing.undo.CompoundEdit implements javax.swing.event.UndoableEditListener {
        indexOfNextAdd: number;
        limit: number;
        constructor();
        /**
         * Returns the maximum number of edits this {@code UndoManager}
         * holds. A value less than 0 indicates the number of edits is not
         * limited.
         *
         * @return {number} the maximum number of edits this {@code UndoManager} holds
         * @see #addEdit
         * @see #setLimit
         */
        getLimit(): number;
        /**
         * Empties the undo manager sending each edit a <code>die</code> message
         * in the process.
         *
         * @see AbstractUndoableEdit#die
         */
        discardAllEdits(): void;
        /**
         * Reduces the number of queued edits to a range of size limit,
         * centered on the index of the next edit.
         */
        trimForLimit(): void;
        /**
         * Removes edits in the specified range.
         * All edits in the given range (inclusive, and in reverse order)
         * will have <code>die</code> invoked on them and are removed from
         * the list of edits. This has no effect if
         * <code>from</code> &gt; <code>to</code>.
         *
         * @param {number} from the minimum index to remove
         * @param {number} to the maximum index to remove
         */
        trimEdits(from: number, to: number): void;
        /**
         * Sets the maximum number of edits this <code>UndoManager</code>
         * holds. A value less than 0 indicates the number of edits is not
         * limited. If edits need to be discarded to shrink the limit,
         * <code>die</code> will be invoked on them in the reverse
         * order they were added.  The default is 100.
         *
         * @param {number} l the new limit
         * @throws RuntimeException if this {@code UndoManager} is not in progress
         * ({@code end} has been invoked)
         * @see #isInProgress
         * @see #end
         * @see #addEdit
         * @see #getLimit
         */
        setLimit(l: number): void;
        /**
         * Returns the the next significant edit to be undone if <code>undo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be undone.
         *
         * @return {*} the next significant edit to be undone
         */
        editToBeUndone(): javax.swing.undo.UndoableEdit;
        /**
         * Returns the the next significant edit to be redone if <code>redo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be redone.
         *
         * @return {*} the next significant edit to be redone
         */
        editToBeRedone(): javax.swing.undo.UndoableEdit;
        /**
         * Undoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         * @param {*} edit
         */
        undoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Redoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         * @param {*} edit
         */
        redoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Convenience method that invokes one of <code>undo</code> or
         * <code>redo</code>. If any edits have been undone (the index of
         * the next edit is less than the length of the edits list) this
         * invokes <code>redo</code>, otherwise it invokes <code>undo</code>.
         *
         * @see #canUndoOrRedo
         * @see #getUndoOrRedoPresentationName
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         */
        undoOrRedo(): void;
        /**
         * Returns true if it is possible to invoke <code>undo</code> or
         * <code>redo</code>.
         *
         * @return {boolean} true if invoking <code>canUndoOrRedo</code> is valid
         * @see #undoOrRedo
         */
        canUndoOrRedo(): boolean;
        /**
         * Undoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass, otherwise
         * this invokes <code>undo</code> on all edits between the
         * index of the next edit and the last significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code> or there are no edits
         * to be undone
         * @see CompoundEdit#end
         * @see #canUndo
         * @see #editToBeUndone
         */
        undo(): void;
        /**
         * Returns true if edits may be undone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise
         * this returns true if there are any edits to be undone
         * (<code>editToBeUndone</code> returns non-<code>null</code>).
         *
         * @return {boolean} true if there are edits to be undone
         * @see CompoundEdit#canUndo
         * @see #editToBeUndone
         */
        canUndo(): boolean;
        /**
         * Redoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass.  Otherwise
         * this invokes <code>redo</code> on all edits between the
         * index of the next edit and the next significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code> or there are no edits
         * to be redone
         * @see CompoundEdit#end
         * @see #canRedo
         * @see #editToBeRedone
         */
        redo(): void;
        /**
         * Returns true if edits may be redone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise,
         * this returns true if there are any edits to be redone
         * (<code>editToBeRedone</code> returns non-<code>null</code>).
         *
         * @return {boolean} true if there are edits to be redone
         * @see CompoundEdit#canRedo
         * @see #editToBeRedone
         */
        canRedo(): boolean;
        /**
         * Adds an <code>UndoableEdit</code> to this
         * <code>UndoManager</code>, if it's possible.  This removes all
         * edits from the index of the next edit to the end of the edits
         * list.  If <code>end</code> has been invoked the edit is not added
         * and <code>false</code> is returned.  If <code>end</code> hasn't
         * been invoked this returns <code>true</code>.
         *
         * @param {*} anEdit the edit to be added
         * @return {boolean} true if <code>anEdit</code> can be incorporated into this
         * edit
         * @see CompoundEdit#end
         * @see CompoundEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Turns this <code>UndoManager</code> into a normal
         * <code>CompoundEdit</code>.  This removes all edits that have
         * been undone.
         *
         * @see CompoundEdit#end
         */
        end(): void;
        /**
         * Convenience method that returns either
         * <code>getUndoPresentationName</code> or
         * <code>getRedoPresentationName</code>.  If the index of the next
         * edit equals the size of the edits list,
         * <code>getUndoPresentationName</code> is returned, otherwise
         * <code>getRedoPresentationName</code> is returned.
         *
         * @return {string} undo or redo name
         */
        getUndoOrRedoPresentationName(): string;
        /**
         * Returns a description of the undoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be undone, this returns
         * the value from the next significant edit that will be undone.
         * If there are no edits to be undone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.undoText".
         *
         * @return {string} a description of the undoable form of this edit
         * @see     #undo
         * @see     CompoundEdit#getUndoPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Returns a description of the redoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be redone, this returns
         * the value from the next significant edit that will be redone.
         * If there are no edits to be redone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.redoText".
         *
         * @return {string} a description of the redoable form of this edit
         * @see     #redo
         * @see     CompoundEdit#getRedoPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * An <code>UndoableEditListener</code> method. This invokes
         * <code>addEdit</code> with <code>e.getEdit()</code>.
         *
         * @param {javax.swing.event.UndoableEditEvent} e the <code>UndoableEditEvent</code> the
         * <code>UndoableEditEvent</code> will be added from
         * @see #addEdit
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): void;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace java.awt {
    class Frame extends java.awt.Window {
        /**
         * @deprecated replaced by <code>Cursor.DEFAULT_CURSOR</code>.
         */
        static DEFAULT_CURSOR: number;
        static DEFAULT_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.CROSSHAIR_CURSOR</code>.
         */
        static CROSSHAIR_CURSOR: number;
        static CROSSHAIR_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.TEXT_CURSOR</code>.
         */
        static TEXT_CURSOR: number;
        static TEXT_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.WAIT_CURSOR</code>.
         */
        static WAIT_CURSOR: number;
        static WAIT_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.SW_RESIZE_CURSOR</code>.
         */
        static SW_RESIZE_CURSOR: number;
        static SW_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.SE_RESIZE_CURSOR</code>.
         */
        static SE_RESIZE_CURSOR: number;
        static SE_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.NW_RESIZE_CURSOR</code>.
         */
        static NW_RESIZE_CURSOR: number;
        static NW_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.NE_RESIZE_CURSOR</code>.
         */
        static NE_RESIZE_CURSOR: number;
        static NE_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.N_RESIZE_CURSOR</code>.
         */
        static N_RESIZE_CURSOR: number;
        static N_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.S_RESIZE_CURSOR</code>.
         */
        static S_RESIZE_CURSOR: number;
        static S_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.W_RESIZE_CURSOR</code>.
         */
        static W_RESIZE_CURSOR: number;
        static W_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.E_RESIZE_CURSOR</code>.
         */
        static E_RESIZE_CURSOR: number;
        static E_RESIZE_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.HAND_CURSOR</code>.
         */
        static HAND_CURSOR: number;
        static HAND_CURSOR_$LI$(): number;
        /**
         * @deprecated replaced by <code>Cursor.MOVE_CURSOR</code>.
         */
        static MOVE_CURSOR: number;
        static MOVE_CURSOR_$LI$(): number;
        /**
         * Frame is in the "normal" state. This symbolic constant names a frame
         * state with all state bits cleared.
         *
         * @see #setExtendedState(int)
         * @see #getExtendedState
         */
        static NORMAL: number;
        /**
         * This state bit indicates that frame is iconified.
         *
         * @see #setExtendedState(int)
         * @see #getExtendedState
         */
        static ICONIFIED: number;
        /**
         * This state bit indicates that frame is maximized in the horizontal
         * direction.
         *
         * @see #setExtendedState(int)
         * @see #getExtendedState
         * @since 1.4
         */
        static MAXIMIZED_HORIZ: number;
        /**
         * This state bit indicates that frame is maximized in the vertical
         * direction.
         *
         * @see #setExtendedState(int)
         * @see #getExtendedState
         * @since 1.4
         */
        static MAXIMIZED_VERT: number;
        /**
         * This state bit mask indicates that frame is fully maximized (that is both
         * horizontally and vertically). It is just a convenience alias for
         * <code>MAXIMIZED_VERT&nbsp;|&nbsp;MAXIMIZED_HORIZ</code>.
         *
         * <p>
         * Note that the correct test for frame being fully maximized is
         *
         * <pre>
         * (state &amp; Frame.MAXIMIZED_BOTH) == Frame.MAXIMIZED_BOTH
         * </pre>
         *
         * <p>
         * To test is frame is maximized in <em>some</em> direction use
         *
         * <pre>
         * (state &amp; Frame.MAXIMIZED_BOTH) != 0
         * </pre>
         *
         * @see #setExtendedState(int)
         * @see #getExtendedState
         * @since 1.4
         */
        static MAXIMIZED_BOTH: number;
        static MAXIMIZED_BOTH_$LI$(): number;
        /**
         * Maximized bounds for this frame.
         *
         * @see #setMaximizedBounds(Rectangle)
         * @see #getMaximizedBounds
         * @serial
         * @since 1.4
         */
        maximizedBounds: java.awt.Rectangle;
        /**
         * This is the title of the frame. It can be changed at any time.
         * <code>title</code> can be null and if this is the case the
         * <code>title</code> = "".
         *
         * @serial
         * @see #getTitle
         * @see #setTitle(String)
         */
        title: string;
        /**
         * This field indicates whether the frame is resizable. This property can be
         * changed at any time. <code>resizable</code> will be true if the frame is
         * resizable, otherwise it will be false.
         *
         * @serial
         * @see #isResizable()
         */
        resizable: boolean;
        /**
         * This field indicates whether the frame is undecorated. This property can
         * only be changed while the frame is not displayable.
         * <code>undecorated</code> will be true if the frame is undecorated,
         * otherwise it will be false.
         *
         * @serial
         * @see #setUndecorated(boolean)
         * @see #isUndecorated()
         * @see Component#isDisplayable()
         * @since 1.4
         */
        undecorated: boolean;
        /**
         * <code>mbManagement</code> is only used by the Motif implementation.
         *
         * @serial
         */
        mbManagement: boolean;
        ownedWindows: java.util.Vector<java.awt.Window>;
        static __java_awt_Frame_base: string;
        static __java_awt_Frame_nameCounter: number;
        constructor(title?: any);
        _frameInit(title: string): void;
        constructComponentName(): string;
        getTitle(): string;
        setTitle(title: string): void;
        getIconImage(): java.awt.Image;
        setIconImage(image: java.awt.Image): void;
        isResizable(): boolean;
        setResizable(resizable: boolean): void;
        setUndecorated(undecorated: boolean): void;
        isUndecorated(): boolean;
        /**
         * Returns a string representing the state of this <code>Frame</code>. This
         * method is intended to be used only for debugging purposes, and the
         * content and format of the returned string may vary between
         * implementations. The returned string may be empty but may not be
         * <code>null</code>.
         *
         * @return {string} the parameter string of this frame
         */
        paramString(): string;
    }
}
declare namespace java.applet {
    class Applet extends java.awt.Panel {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        static __static_initializer_0(): void;
        constructor();
        init(): void;
        getParameter(param: string): string;
    }
}
declare namespace javax.swing {
    class JSlider extends javax.swing.JComponent implements javax.swing.SwingConstants {
        /**
         *
         * @return {HTMLInputElement}
         */
        getHTMLElement(): HTMLInputElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        paintTicks: boolean;
        paintTrack: boolean;
        paintLabels: boolean;
        isInverted: boolean;
        sliderModel: javax.swing.BoundedRangeModel;
        majorTickSpacing: number;
        minorTickSpacing: number;
        snapToTicks: boolean;
        snapToValue: boolean;
        orientation: number;
        changeListener: javax.swing.event.ChangeListener;
        changeEvent: javax.swing.event.ChangeEvent;
        checkOrientation(orientation: number): void;
        constructor(orientation?: any, min?: any, max?: any, value?: any);
        getUIClassID(): string;
        createChangeListener(): javax.swing.event.ChangeListener;
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        getChangeListeners(): javax.swing.event.ChangeListener[];
        fireStateChanged(): void;
        getModel(): javax.swing.BoundedRangeModel;
        setModel(newModel: javax.swing.BoundedRangeModel): void;
        getValue(): number;
        setValue(n: number): void;
        getMinimum(): number;
        setMinimum(minimum: number): void;
        getMaximum(): number;
        setMaximum(maximum: number): void;
        getValueIsAdjusting(): boolean;
        setValueIsAdjusting(b: boolean): void;
        getExtent(): number;
        setExtent(extent: number): void;
        /**
         * Return this slider's vertical or horizontal orientation.
         *
         * @return {number} {@code SwingConstants.VERTICAL} or
         * {@code SwingConstants.HORIZONTAL}
         * @see #setOrientation
         */
        getOrientation(): number;
        setOrientation(orientation: number): void;
        /**
         * {@inheritDoc}
         *
         * @since 1.6
         * @param {java.awt.Font} font
         */
        setFont(font: java.awt.Font): void;
        /**
         * Returns a string representation of this JSlider. This method is intended
         * to be used only for debugging purposes, and the content and format of the
         * returned string may vary between implementations. The returned string may
         * be empty but may not be <code>null</code>.
         *
         * @return {string} a string representation of this JSlider.
         */
        paramString(): string;
    }
    namespace JSlider {
        class ModelListener implements javax.swing.event.ChangeListener, java.io.Serializable {
            __parent: any;
            stateChanged(e: javax.swing.event.ChangeEvent): void;
            constructor(__parent: any);
        }
    }
}
declare namespace javax.swing {
    abstract class AbstractButton extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.SwingConstants {
        /**
         * Identifies a change in the button's margins.
         */
        static MARGIN_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's vertical alignment.
         */
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's horizontal alignment.
         */
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's vertical text position.
         */
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        /**
         * Identifies a change in the button's horizontal text position.
         */
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the border drawn, or having it not drawn.
         */
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the border highlighted when focused, or
         * not.
         */
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change from rollover enabled to disabled or back to enabled.
         */
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to having the button paint the content area.
         */
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon that represents the button.
         */
        static ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been pressed.
         */
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been selected.
         */
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the cursor is over the button.
         */
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the cursor is over the button
         * and it has been selected.
         */
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been disabled.
         */
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        /**
         * Identifies a change to the icon used when the button has been disabled
         * and selected.
         */
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        text: string;
        margin: java.awt.Insets;
        defaultMargin: java.awt.Insets;
        defaultIcon: javax.swing.Icon;
        pressedIcon: javax.swing.Icon;
        disabledIcon: javax.swing.Icon;
        selectedIcon: javax.swing.Icon;
        disabledSelectedIcon: javax.swing.Icon;
        rolloverIcon: javax.swing.Icon;
        rolloverSelectedIcon: javax.swing.Icon;
        paintBorder: boolean;
        paintFocus: boolean;
        rolloverEnabled: boolean;
        contentAreaFilled: boolean;
        verticalAlignment: number;
        horizontalAlignment: number;
        verticalTextPosition: number;
        horizontalTextPosition: number;
        iconTextGap: number;
        mnemonic: number;
        mnemonicIndex: number;
        multiClickThreshhold: number;
        borderPaintedSet: boolean;
        rolloverEnabledSet: boolean;
        iconTextGapSet: boolean;
        contentAreaFilledSet: boolean;
        __setLayout: boolean;
        defaultCapable: boolean;
        /**
         * Combined listeners: ActionListener, ChangeListener, ItemListener.
         */
        handler: AbstractButton.Handler;
        /**
         * The button model's <code>changeListener</code>.
         */
        changeListener: javax.swing.event.ChangeListener;
        /**
         * The button model's <code>ActionListener</code>.
         */
        actionListener: java.awt.event.ActionListener;
        /**
         * The button model's <code>ItemListener</code>.
         */
        itemListener: java.awt.event.ItemListener;
        /**
         * Only one <code>ChangeEvent</code> is needed per button instance since the
         * event's only state is the source property. The source of events generated
         * is always "this".
         */
        changeEvent: javax.swing.event.ChangeEvent;
        hideActionText: boolean;
        /**
         * Returns the button's text.
         *
         * @return {string} the buttons text
         * @see #setText
         */
        getText(): string;
        setText(text: string): void;
        isSelected(): boolean;
        setSelected(b: boolean): void;
        doClick(): void;
        setMargin(m: java.awt.Insets): void;
        /**
         * Returns the margin between the button's border and the label.
         *
         * @return {java.awt.Insets} an <code>Insets</code> object specifying the margin between the
         * botton's border and the label
         * @see #setMargin
         */
        getMargin(): java.awt.Insets;
        /**
         * Returns the default icon.
         *
         * @return {*} the default <code>Icon</code>
         * @see #setIcon
         */
        getIcon(): javax.swing.Icon;
        setIcon(defaultIcon: javax.swing.Icon): void;
        getPressedIcon(): javax.swing.Icon;
        setPressedIcon(pressedIcon: javax.swing.Icon): void;
        getSelectedIcon(): javax.swing.Icon;
        setSelectedIcon(selectedIcon: javax.swing.Icon): void;
        getRolloverIcon(): javax.swing.Icon;
        setRolloverIcon(rolloverIcon: javax.swing.Icon): void;
        getRolloverSelectedIcon(): javax.swing.Icon;
        setRolloverSelectedIcon(rolloverSelectedIcon: javax.swing.Icon): void;
        getDisabledIcon(): javax.swing.Icon;
        setDisabledIcon(disabledIcon: javax.swing.Icon): void;
        getDisabledSelectedIcon(): javax.swing.Icon;
        setDisabledSelectedIcon(disabledSelectedIcon: javax.swing.Icon): void;
        getVerticalAlignment(): number;
        setVerticalAlignment(alignment: number): void;
        getHorizontalAlignment(): number;
        setHorizontalAlignment(alignment: number): void;
        getVerticalTextPosition(): number;
        setVerticalTextPosition(textPosition: number): void;
        getHorizontalTextPosition(): number;
        setHorizontalTextPosition(textPosition: number): void;
        getIconTextGap(): number;
        setIconTextGap(iconTextGap: number): void;
        checkHorizontalKey(key: number, exception: string): number;
        checkVerticalKey(key: number, exception: string): number;
        setActionCommand(actionCommand: string): void;
        getActionCommand(): string;
        action: javax.swing.Action;
        setAction(a: javax.swing.Action): void;
        getAction(): javax.swing.Action;
        isBorderPainted(): boolean;
        setBorderPainted(b: boolean): void;
        isFocusPainted(): boolean;
        setFocusPainted(b: boolean): void;
        isContentAreaFilled(): boolean;
        setContentAreaFilled(b: boolean): void;
        isRolloverEnabled(): boolean;
        setRolloverEnabled(b: boolean): void;
        getMnemonic(): number;
        setMnemonic(mnemonic: number): void;
        setDisplayedMnemonicIndex(index: number): void;
        getDisplayedMnemonicIndex(): number;
        setMultiClickThreshhold(threshhold: number): void;
        getMultiClickThreshhold(): number;
        /**
         * Adds a <code>ChangeListener</code> to the button.
         *
         * @param {*} l
         * the listener to be added
         */
        addChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Removes a ChangeListener from the button.
         *
         * @param {*} l
         * the listener to be removed
         */
        removeChangeListener(l: javax.swing.event.ChangeListener): void;
        /**
         * Returns an array of all the <code>ChangeListener</code>s added to this
         * AbstractButton with addChangeListener().
         *
         * @return {javax.swing.event.ChangeListener[]} all of the <code>ChangeListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.4
         */
        getChangeListeners(): javax.swing.event.ChangeListener[];
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created.
         *
         * @see EventListenerList
         */
        fireStateChanged(): void;
        /**
         * Adds an <code>ActionListener</code> to the button.
         *
         * @param {*} l
         * the <code>ActionListener</code> to be added
         */
        addActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Removes an <code>ActionListener</code> from the button. If the listener
         * is the currently set <code>Action</code> for the button, then the
         * <code>Action</code> is set to <code>null</code>.
         *
         * @param {*} l
         * the listener to be removed
         */
        removeActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Returns an array of all the <code>ActionListener</code>s added to this
         * AbstractButton with addActionListener().
         *
         * @return {java.awt.event.ActionListener[]} all of the <code>ActionListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.4
         */
        getActionListeners(): java.awt.event.ActionListener[];
        /**
         * Subclasses that want to handle <code>ChangeEvents</code> differently can
         * override this to return another <code>ChangeListener</code>
         * implementation.
         *
         * @return {*} the new <code>ChangeListener</code>
         */
        createChangeListener(): javax.swing.event.ChangeListener;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created using the
         * <code>event</code> parameter.
         *
         * @param {java.awt.event.ActionEvent} event
         * the <code>ActionEvent</code> object
         * @see EventListenerList
         */
        fireActionPerformed(event: java.awt.event.ActionEvent): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created using the
         * <code>event</code> parameter.
         *
         * @param {java.awt.event.ItemEvent} event
         * the <code>ItemEvent</code> object
         * @see EventListenerList
         */
        fireItemStateChanged(event: java.awt.event.ItemEvent): void;
        createActionListener(): java.awt.event.ActionListener;
        createItemListener(): java.awt.event.ItemListener;
        /**
         * Enables (or disables) the button.
         *
         * @param {boolean} b
         * true to enable the button, otherwise false
         */
        setEnabled(b: boolean): void;
        /**
         * Returns the label text.
         *
         * @return {string} a <code>String</code> containing the label
         * @deprecated - Replaced by <code>getText</code>
         */
        getLabel(): string;
        /**
         * Sets the label text.
         *
         * @param {string} label
         * a <code>String</code> containing the text
         * @deprecated - Replaced by <code>setText(text)</code>
         * @beaninfo bound: true description: Replace by setText(text)
         */
        setLabel(label: string): void;
        /**
         * Adds an <code>ItemListener</code> to the <code>checkbox</code>.
         *
         * @param {*} l
         * the <code>ItemListener</code> to be added
         */
        addItemListener(l: java.awt.event.ItemListener): void;
        /**
         * Removes an <code>ItemListener</code> from the button.
         *
         * @param {*} l
         * the <code>ItemListener</code> to be removed
         */
        removeItemListener(l: java.awt.event.ItemListener): void;
        /**
         * Returns an array of all the <code>ItemListener</code>s added to this
         * AbstractButton with addItemListener().
         *
         * @return {java.awt.event.ItemListener[]} all of the <code>ItemListener</code>s added or an empty array if
         * no listeners have been added
         * @since 1.4
         */
        getItemListeners(): java.awt.event.ItemListener[];
        /**
         * Returns an array (length 1) containing the label or <code>null</code> if
         * the button is not selected.
         *
         * @return {java.lang.Object[]} an array containing 1 Object: the text of the button, if the item
         * is selected; otherwise <code>null</code>
         */
        getSelectedObjects(): any[];
        init(text: string, icon: javax.swing.Icon): void;
        imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, w: number, h: number): boolean;
        getHandler(): AbstractButton.Handler;
        model: javax.swing.ButtonModel;
        getModel(): javax.swing.ButtonModel;
        setModel(newModel: javax.swing.ButtonModel): void;
        constructor();
    }
    namespace AbstractButton {
        /**
         * Extends <code>ChangeListener</code> to be serializable.
         * <p>
         * <strong>Warning:</strong> Serialized objects of this class will not be
         * compatible with future Swing releases. The current serialization support
         * is appropriate for short term storage or RMI between applications running
         * the same version of Swing. As of 1.4, support for long term storage of
         * all JavaBeans&trade; has been added to the <code>java.beans</code>
         * package. Please see {@link java.beans.XMLEncoder}.
         * @class
         */
        class ButtonChangeListener implements javax.swing.event.ChangeListener, java.io.Serializable {
            __parent: any;
            constructor(__parent: any);
            stateChanged(e: javax.swing.event.ChangeEvent): void;
        }
        class Handler implements java.awt.event.ActionListener, javax.swing.event.ChangeListener, java.awt.event.ItemListener, java.io.Serializable {
            __parent: any;
            stateChanged(e: javax.swing.event.ChangeEvent): void;
            actionPerformed(event: java.awt.event.ActionEvent): void;
            itemStateChanged(event: java.awt.event.ItemEvent): void;
            constructor(__parent: any);
        }
    }
}
declare namespace javax.swing {
    /**
     * Creates a <code>JRootPane</code>, setting up its <code>glassPane</code>,
     * <code>layeredPane</code>, and <code>contentPane</code>.
     * @class
     * @extends javax.swing.JComponent
     */
    class JRootPane extends javax.swing.JComponent {
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        static uiClassID: string;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should not provide any sort of Window decorations.
         *
         * @since 1.4
         */
        static NONE: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Frame.
         *
         * @since 1.4
         */
        static FRAME: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog.
         *
         * @since 1.4
         */
        static PLAIN_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to display an informational message.
         *
         * @since 1.4
         */
        static INFORMATION_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to display an error message.
         *
         * @since 1.4
         */
        static ERROR_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to display a <code>JColorChooser</code>.
         *
         * @since 1.4
         */
        static COLOR_CHOOSER_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to display a <code>JFileChooser</code>.
         *
         * @since 1.4
         */
        static FILE_CHOOSER_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to present a question to the user.
         *
         * @since 1.4
         */
        static QUESTION_DIALOG: number;
        /**
         * Constant used for the windowDecorationStyle property. Indicates that the
         * <code>JRootPane</code> should provide decorations appropriate for a
         * Dialog used to display a warning message.
         *
         * @since 1.4
         */
        static WARNING_DIALOG: number;
        windowDecorationStyle: number;
        /**
         * The content pane.
         */
        contentPane: java.awt.Container;
        glassPane: java.awt.Container;
        /**
         * The button that gets activated when the pane has the focus and a
         * UI-specific action like pressing the <b>Enter</b> key occurs.
         */
        defaultButton: javax.swing.JButton;
        constructor();
        setGlassPane(glassPane: java.awt.Container): void;
        getGlassPane(): java.awt.Container;
        createGlassPane(): java.awt.Container;
        /**
         * Returns a constant identifying the type of Window decorations the
         * <code>JRootPane</code> is providing.
         *
         * @return {number} One of <code>NONE</code>, <code>FRAME</code>,
         * <code>PLAIN_DIALOG</code>, <code>INFORMATION_DIALOG</code>,
         * <code>ERROR_DIALOG</code>, <code>COLOR_CHOOSER_DIALOG</code>,
         * <code>FILE_CHOOSER_DIALOG</code>, <code>QUESTION_DIALOG</code> or
         * <code>WARNING_DIALOG</code>.
         * @see #setWindowDecorationStyle
         * @since 1.4
         */
        getWindowDecorationStyle(): number;
        setWindowDecorationStyle(windowDecorationStyle: number): void;
        /**
         * Returns a string that specifies the name of the L&amp;F class that
         * renders this component.
         *
         * @return {string} the string "RootPaneUI"
         *
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        createContentPane(): java.awt.Container;
        /**
         * Sets the content pane -- the container that holds the components parented
         * by the root pane.
         * <p>
         * Swing's painting architecture requires an opaque <code>JComponent</code>
         * in the containment hierarchy. This is typically provided by the content
         * pane. If you replace the content pane it is recommended you replace it
         * with an opaque <code>JComponent</code>.
         *
         * @param {java.awt.Container} content
         * the <code>Container</code> to use for component-contents
         * @exception java.awt.IllegalComponentStateException
         * (a runtime exception) if the content pane parameter is
         * <code>null</code>
         */
        setContentPane(content: java.awt.Container): void;
        /**
         * Returns the content pane -- the container that holds the components
         * parented by the root pane.
         *
         * @return {java.awt.Container} the <code>Container</code> that holds the component-contents
         */
        getContentPane(): java.awt.Container;
        /**
         * Sets the <code>defaultButton</code> property, which determines the
         * current default button for this <code>JRootPane</code>. The default
         * button is the button which will be activated when a UI-defined activation
         * event (typically the <b>Enter</b> key) occurs in the root pane regardless
         * of whether or not the button has keyboard focus (unless there is another
         * component within the root pane which consumes the activation event, such
         * as a <code>JTextPane</code>). For default activation to work, the button
         * must be an enabled descendent of the root pane when activation occurs. To
         * remove a default button from this root pane, set this property to
         * <code>null</code>.
         *
         * @see JButton#isDefaultButton
         * @param {javax.swing.JButton} defaultButton
         * the <code>JButton</code> which is to be the default button
         *
         * @beaninfo description: The button activated by default in this root pane
         */
        setDefaultButton(defaultButton: javax.swing.JButton): void;
        /**
         * Returns the value of the <code>defaultButton</code> property.
         *
         * @return {javax.swing.JButton} the <code>JButton</code> which is currently the default button
         * @see #setDefaultButton
         */
        getDefaultButton(): javax.swing.JButton;
    }
}
declare namespace javax.swing {
    /**
     * Creates a new JPanel with the specified layout manager and buffering
     * strategy.
     *
     * @param {*} layout
     * the LayoutManager to use
     * @param {boolean} isDoubleBuffered
     * a boolean, true for double-buffering, which uses additional
     * memory space to achieve fast, flicker-free updates
     * @class
     * @extends javax.swing.JComponent
     */
    class JPanel extends javax.swing.JComponent {
        htmlCanvas: HTMLCanvasElement;
        /**
         *
         * @return {java.awt.Graphics}
         */
        getGraphics(): java.awt.Graphics;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         * @param {java.awt.Color} background
         */
        setBackground(background: java.awt.Color): void;
        /**
         *
         */
        doPaintInternal(): void;
        /**
         *
         */
        initHTML(): void;
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        constructor(layout?: any, isDoubleBuffered?: any);
        /**
         * Returns a string that specifies the name of the L&amp;F class that
         * renders this component.
         *
         * @return {string} "PanelUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         * @beaninfo expert: true description: A string that specifies the name of
         * the L&amp;F class.
         */
        getUIClassID(): string;
        paramString(): string;
        setSize$int$int(width: number, height: number): void;
        /**
         *
         * @param {number} width
         * @param {number} height
         */
        setSize(width?: any, height?: any): any;
    }
}
declare namespace javax.swing {
    class JComboBox<E> extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.event.ListDataListener, java.awt.event.ActionListener {
        lastSelected: number;
        createHTML(): void;
        getHTMLElement(): HTMLSelectElement;
        initHTML(): void;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #getModel
         * @see #setModel
         */
        dataModel: javax.swing.ComboBoxModel<E>;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #getRenderer
         * @see #setRenderer
         */
        renderer: javax.swing.ListCellRenderer<any>;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #getEditor
         * @see #setEditor
         */
        editor: javax.swing.ComboBoxEditor;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #getMaximumRowCount
         * @see #setMaximumRowCount
         */
        maximumRowCount: number;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #isEditable
         * @see #setEditable
         */
        __isEditable: boolean;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #setKeySelectionManager
         * @see #getKeySelectionManager
         */
        keySelectionManager: JComboBox.KeySelectionManager;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override. Use the accessor methods instead.
         *
         * @see #setActionCommand
         * @see #getActionCommand
         */
        actionCommand: string;
        /**
         * This protected field is implementation specific. Do not access directly
         * or override.
         */
        selectedItemReminder: any;
        prototypeDisplayValue: E;
        firingActionEvent: boolean;
        selectingItem: boolean;
        constructor(aModel?: any);
        init(): void;
        setModel(aModel: javax.swing.ComboBoxModel<E>): void;
        /**
         * Returns the data model currently used by the <code>JComboBox</code>.
         *
         * @return {*} the <code>ComboBoxModel</code> that provides the displayed list
         * of items
         */
        getModel(): javax.swing.ComboBoxModel<E>;
        setLightWeightPopupEnabled(aFlag: boolean): void;
        setEditable(aFlag: boolean): void;
        isEditable(): boolean;
        setMaximumRowCount(count: number): void;
        getMaximumRowCount(): number;
        setRenderer(aRenderer: javax.swing.ListCellRenderer<any>): void;
        getRenderer(): javax.swing.ListCellRenderer<any>;
        setEditor(anEditor: javax.swing.ComboBoxEditor): void;
        getEditor(): javax.swing.ComboBoxEditor;
        setSelectedItem(anObject: any): void;
        getSelectedItem(): any;
        setSelectedIndex(anIndex: number): void;
        getSelectedIndex(): number;
        getPrototypeDisplayValue(): E;
        setPrototypeDisplayValue(prototypeDisplayValue: E): void;
        addItem(item: E): void;
        insertItemAt(item: E, index: number): void;
        removeItem(anObject: any): void;
        removeItemAt(anIndex: number): void;
        removeAllItems(): void;
        checkMutableComboBoxModel(): void;
        showPopup(): void;
        hidePopup(): void;
        setPopupVisible(v: boolean): void;
        isPopupVisible(): boolean;
        addItemListener(aListener: java.awt.event.ItemListener): void;
        removeItemListener(aListener: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        addActionListener(l: java.awt.event.ActionListener): void;
        removeActionListener(l: java.awt.event.ActionListener): void;
        getActionListeners(): java.awt.event.ActionListener[];
        addPopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
        removePopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
        getPopupMenuListeners(): javax.swing.event.PopupMenuListener[];
        firePopupMenuWillBecomeVisible(): void;
        firePopupMenuWillBecomeInvisible(): void;
        firePopupMenuCanceled(): void;
        setActionCommand(aCommand: string): void;
        getActionCommand(): string;
        action: javax.swing.Action;
        actionPropertyChangeListener: java.beans.PropertyChangeListener;
        setAction(a: javax.swing.Action): void;
        isListener(c: any, a: java.awt.event.ActionListener): boolean;
        getAction(): javax.swing.Action;
        configurePropertiesFromAction(a: javax.swing.Action): void;
        createActionPropertyChangeListener(a: javax.swing.Action): java.beans.PropertyChangeListener;
        actionPropertyChanged(action: javax.swing.Action, propertyName: string): void;
        setActionCommandFromAction(a: javax.swing.Action): void;
        fireItemStateChanged(e: java.awt.event.ItemEvent): void;
        fireActionEvent(): void;
        selectedItemChanged(): void;
        getSelectedObjects(): any[];
        actionPerformed(e: java.awt.event.ActionEvent): void;
        contentsChanged(e: javax.swing.event.ListDataEvent): void;
        intervalAdded(e: javax.swing.event.ListDataEvent): void;
        intervalRemoved(e: javax.swing.event.ListDataEvent): void;
        selectWithKeyChar(keyChar: string): boolean;
        setEnabled(b: boolean): void;
        configureEditor(anEditor: javax.swing.ComboBoxEditor, anItem: any): void;
        processKeyEvent(e: java.awt.event.KeyEvent): void;
        setKeySelectionManager(aManager: JComboBox.KeySelectionManager): void;
        getKeySelectionManager(): JComboBox.KeySelectionManager;
        getItemCount(): number;
        getItemAt(index: number): E;
        createDefaultKeySelectionManager(): JComboBox.KeySelectionManager;
        paramString(): string;
    }
    namespace JComboBox {
        class ComboBoxActionPropertyChangeListener extends javax.swing.ActionPropertyChangeListener<javax.swing.JComboBox<any>> {
            constructor(b: javax.swing.JComboBox<any>, a: javax.swing.Action);
            actionPropertyChanged$javax_swing_JComboBox$javax_swing_Action$java_beans_PropertyChangeEvent(cb: javax.swing.JComboBox<any>, action: javax.swing.Action, e: java.beans.PropertyChangeEvent): void;
            actionPropertyChanged(cb?: any, action?: any, e?: any): any;
        }
        interface KeySelectionManager {
            selectionForKey(aKey: string, aModel: javax.swing.ComboBoxModel<any>): number;
        }
        class DefaultKeySelectionManager implements JComboBox.KeySelectionManager, java.io.Serializable {
            __parent: any;
            selectionForKey(aKey: string, aModel: javax.swing.ComboBoxModel<any>): number;
            constructor(__parent: any);
        }
    }
}
declare namespace javax.swing.text {
    abstract class JTextComponent extends javax.swing.JComponent {
        text: string;
        editable: boolean;
        getText(): string;
        setText(text: string): void;
        isEditable(): boolean;
        setEditable(editable: boolean): void;
        constructor();
    }
}
declare namespace javax.swing {
    /**
     * Constructs a {@code JList} that displays elements from the specified,
     * {@code non-null}, model. All {@code JList} constructors delegate to this
     * one.
     *
     * @param {*} dataModel
     * the model for the list
     * @exception IllegalArgumentException
     * if the model is {@code null}
     * @class
     * @extends javax.swing.JComponent
     * @author Hans Muller
     */
    class JList<E> extends javax.swing.JComponent {
        /**
         *
         */
        createHTML(): void;
        /**
         * Indicates a vertical layout of cells, in a single column; the default
         * layout.
         *
         * @see #setLayoutOrientation
         * @since 1.4
         */
        static VERTICAL: number;
        /**
         * Indicates a "newspaper style" layout with cells flowing vertically then
         * horizontally.
         *
         * @see #setLayoutOrientation
         * @since 1.4
         */
        static VERTICAL_WRAP: number;
        /**
         * Indicates a "newspaper style" layout with cells flowing horizontally then
         * vertically.
         *
         * @see #setLayoutOrientation
         * @since 1.4
         */
        static HORIZONTAL_WRAP: number;
        fixedCellWidth: number;
        fixedCellHeight: number;
        horizontalScrollIncrement: number;
        prototypeCellValue: E;
        visibleRowCount: number;
        selectionForeground: java.awt.Color;
        selectionBackground: java.awt.Color;
        dragEnabled: boolean;
        selectionModel: javax.swing.ListSelectionModel;
        dataModel: javax.swing.ListModel<E>;
        cellRenderer: javax.swing.ListCellRenderer<any>;
        selectionListener: javax.swing.event.ListSelectionListener;
        /**
         * How to lay out the cells; defaults to <code>VERTICAL</code>.
         */
        layoutOrientation: number;
        /**
         * The drop mode for this component.
         */
        dropMode: javax.swing.DropMode;
        constructor(dataModel?: any);
        updateFixedCellSize(): void;
        /**
         * Returns the "prototypical" cell value -- a value used to calculate a
         * fixed width and height for cells. This can be {@code null} if there is no
         * such value.
         *
         * @return {*} the value of the {@code prototypeCellValue} property
         * @see #setPrototypeCellValue
         */
        getPrototypeCellValue(): E;
        /**
         * Sets the {@code prototypeCellValue} property, and then (if the new value
         * is {@code non-null}), computes the {@code fixedCellWidth} and
         * {@code fixedCellHeight} properties by requesting the cell renderer
         * component for the given value (and index 0) from the cell renderer, and
         * using that component's preferred size.
         * <p>
         * This method is useful when the list is too long to allow the
         * {@code ListUI} to compute the width/height of each cell, and there is a
         * single cell value that is known to occupy as much space as any of the
         * others, a so-called prototype.
         * <p>
         * While all three of the {@code prototypeCellValue},
         * {@code fixedCellHeight}, and {@code fixedCellWidth} properties may be
         * modified by this method, {@code PropertyChangeEvent} notifications are
         * only sent when the {@code prototypeCellValue} property changes.
         * <p>
         * To see an example which sets this property, see the
         * <a href="#prototype_example">class description</a> above.
         * <p>
         * The default value of this property is <code>null</code>.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {*} prototypeCellValue
         * the value on which to base <code>fixedCellWidth</code> and
         * <code>fixedCellHeight</code>
         * @see #getPrototypeCellValue
         * @see #setFixedCellWidth
         * @see #setFixedCellHeight
         * @see JComponent#addPropertyChangeListener
         * @beaninfo bound: true attribute: visualUpdate true description: The cell
         * prototype value, used to compute cell width and height.
         */
        setPrototypeCellValue(prototypeCellValue: E): void;
        /**
         * Returns the value of the {@code fixedCellWidth} property.
         *
         * @return {number} the fixed cell width
         * @see #setFixedCellWidth
         */
        getFixedCellWidth(): number;
        /**
         * Sets a fixed value to be used for the width of every cell in the list. If
         * {@code width} is -1, cell widths are computed in the {@code ListUI} by
         * applying <code>getPreferredSize</code> to the cell renderer component for
         * each list element.
         * <p>
         * The default value of this property is {@code -1}.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {number} width
         * the width to be used for all cells in the list
         * @see #setPrototypeCellValue
         * @see #setFixedCellWidth
         * @see JComponent#addPropertyChangeListener
         * @beaninfo bound: true attribute: visualUpdate true description: Defines a
         * fixed cell width when greater than zero.
         */
        setFixedCellWidth(width: number): void;
        /**
         * Returns the value of the {@code fixedCellHeight} property.
         *
         * @return {number} the fixed cell height
         * @see #setFixedCellHeight
         */
        getFixedCellHeight(): number;
        /**
         * Sets a fixed value to be used for the height of every cell in the list.
         * If {@code height} is -1, cell heights are computed in the {@code ListUI}
         * by applying <code>getPreferredSize</code> to the cell renderer component
         * for each list element.
         * <p>
         * The default value of this property is {@code -1}.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {number} height
         * the height to be used for for all cells in the list
         * @see #setPrototypeCellValue
         * @see #setFixedCellWidth
         * @see JComponent#addPropertyChangeListener
         * @beaninfo bound: true attribute: visualUpdate true description: Defines a
         * fixed cell height when greater than zero.
         */
        setFixedCellHeight(height: number): void;
        /**
         * Returns the object responsible for painting list items.
         *
         * @return {*} the value of the {@code cellRenderer} property
         * @see #setCellRenderer
         */
        getCellRenderer(): javax.swing.ListCellRenderer<any>;
        /**
         * Sets the delegate that is used to paint each cell in the list. The job of
         * a cell renderer is discussed in detail in the <a href="#renderer">class
         * level documentation</a>.
         * <p>
         * If the {@code prototypeCellValue} property is {@code non-null}, setting
         * the cell renderer also causes the {@code fixedCellWidth} and
         * {@code fixedCellHeight} properties to be re-calculated. Only one
         * <code>PropertyChangeEvent</code> is generated however - for the
         * <code>cellRenderer</code> property.
         * <p>
         * The default value of this property is provided by the {@code ListUI}
         * delegate, i.e. by the look and feel implementation.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {*} cellRenderer
         * the <code>ListCellRenderer</code> that paints list cells
         * @see #getCellRenderer
         * @beaninfo bound: true attribute: visualUpdate true description: The
         * component used to draw the cells.
         */
        setCellRenderer(cellRenderer: javax.swing.ListCellRenderer<any>): void;
        /**
         * Returns the color used to draw the foreground of selected items.
         * {@code DefaultListCellRenderer} uses this color to draw the foreground of
         * items in the selected state, as do the renderers installed by most
         * {@code ListUI} implementations.
         *
         * @return {java.awt.Color} the color to draw the foreground of selected items
         * @see #setSelectionForeground
         * @see DefaultListCellRenderer
         */
        getSelectionForeground(): java.awt.Color;
        /**
         * Sets the color used to draw the foreground of selected items, which cell
         * renderers can use to render text and graphics.
         * {@code DefaultListCellRenderer} uses this color to draw the foreground of
         * items in the selected state, as do the renderers installed by most
         * {@code ListUI} implementations.
         * <p>
         * The default value of this property is defined by the look and feel
         * implementation.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {java.awt.Color} selectionForeground
         * the {@code Color} to use in the foreground for selected list
         * items
         * @see #getSelectionForeground
         * @see #setSelectionBackground
         * @see #setForeground
         * @see #setBackground
         * @see #setFont
         * @see DefaultListCellRenderer
         * @beaninfo bound: true attribute: visualUpdate true description: The
         * foreground color of selected cells.
         */
        setSelectionForeground(selectionForeground: java.awt.Color): void;
        /**
         * Returns the color used to draw the background of selected items.
         * {@code DefaultListCellRenderer} uses this color to draw the background of
         * items in the selected state, as do the renderers installed by most
         * {@code ListUI} implementations.
         *
         * @return {java.awt.Color} the color to draw the background of selected items
         * @see #setSelectionBackground
         * @see DefaultListCellRenderer
         */
        getSelectionBackground(): java.awt.Color;
        /**
         * Sets the color used to draw the background of selected items, which cell
         * renderers can use fill selected cells. {@code DefaultListCellRenderer}
         * uses this color to fill the background of items in the selected state, as
         * do the renderers installed by most {@code ListUI} implementations.
         * <p>
         * The default value of this property is defined by the look and feel
         * implementation.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {java.awt.Color} selectionBackground
         * the {@code Color} to use for the background of selected cells
         * @see #getSelectionBackground
         * @see #setSelectionForeground
         * @see #setForeground
         * @see #setBackground
         * @see #setFont
         * @see DefaultListCellRenderer
         * @beaninfo bound: true attribute: visualUpdate true description: The
         * background color of selected cells.
         */
        setSelectionBackground(selectionBackground: java.awt.Color): void;
        /**
         * Returns the value of the {@code visibleRowCount} property. See the
         * documentation for {@link #setVisibleRowCount} for details on how to
         * interpret this value.
         *
         * @return {number} the value of the {@code visibleRowCount} property.
         * @see #setVisibleRowCount
         */
        getVisibleRowCount(): number;
        /**
         * Sets the {@code visibleRowCount} property, which has different meanings
         * depending on the layout orientation: For a {@code VERTICAL} layout
         * orientation, this sets the preferred number of rows to display without
         * requiring scrolling; for other orientations, it affects the wrapping of
         * cells.
         * <p>
         * In {@code VERTICAL} orientation:<br>
         * Setting this property affects the return value of the
         * {@link #getPreferredScrollableViewportSize} method, which is used to
         * calculate the preferred size of an enclosing viewport. See that method's
         * documentation for more details.
         * <p>
         * In {@code HORIZONTAL_WRAP} and {@code VERTICAL_WRAP} orientations:<br>
         * This affects how cells are wrapped. See the documentation of
         * {@link #setLayoutOrientation} for more details.
         * <p>
         * The default value of this property is {@code 8}.
         * <p>
         * Calling this method with a negative value results in the property being
         * set to {@code 0}.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {number} visibleRowCount
         * an integer specifying the preferred number of rows to display
         * without requiring scrolling
         * @see #getVisibleRowCount
         * @see #getPreferredScrollableViewportSize
         * @see #setLayoutOrientation
         * @see JComponent#getVisibleRect
         * @see JViewport
         * @beaninfo bound: true attribute: visualUpdate true description: The
         * preferred number of rows to display without requiring scrolling
         */
        setVisibleRowCount(visibleRowCount: number): void;
        /**
         * Returns the layout orientation property for the list: {@code VERTICAL} if
         * the layout is a single column of cells, {@code VERTICAL_WRAP} if the
         * layout is "newspaper style" with the content flowing vertically then
         * horizontally, or {@code HORIZONTAL_WRAP} if the layout is "newspaper
         * style" with the content flowing horizontally then vertically.
         *
         * @return {number} the value of the {@code layoutOrientation} property
         * @see #setLayoutOrientation
         * @since 1.4
         */
        getLayoutOrientation(): number;
        /**
         * Defines the way list cells are layed out. Consider a {@code JList} with
         * five cells. Cells can be layed out in one of the following ways:
         *
         * <pre>
         * VERTICAL:          0
         * 1
         * 2
         * 3
         * 4
         *
         * HORIZONTAL_WRAP:   0  1  2
         * 3  4
         *
         * VERTICAL_WRAP:     0  3
         * 1  4
         * 2
         * </pre>
         * <p>
         * A description of these layouts follows:
         *
         * <table border="1" summary=
         * "Describes layouts VERTICAL, HORIZONTAL_WRAP, and VERTICAL_WRAP">
         * <tr>
         * <th>
         * <p style="text-align:left">
         * Value
         * </p>
         * </th>
         * <th>
         * <p style="text-align:left">
         * Description
         * </p>
         * </th>
         * </tr>
         * <tr>
         * <td><code>VERTICAL</code>
         * <td>Cells are layed out vertically in a single column.
         * <tr>
         * <td><code>HORIZONTAL_WRAP</code>
         * <td>Cells are layed out horizontally, wrapping to a new row as necessary.
         * If the {@code visibleRowCount} property is less than or equal to zero,
         * wrapping is determined by the width of the list; otherwise wrapping is
         * done in such a way as to ensure {@code visibleRowCount} rows in the list.
         * <tr>
         * <td><code>VERTICAL_WRAP</code>
         * <td>Cells are layed out vertically, wrapping to a new column as
         * necessary. If the {@code visibleRowCount} property is less than or equal
         * to zero, wrapping is determined by the height of the list; otherwise
         * wrapping is done at {@code visibleRowCount} rows.
         * </table>
         * <p>
         * The default value of this property is <code>VERTICAL</code>.
         *
         * @param {number} layoutOrientation
         * the new layout orientation, one of: {@code VERTICAL},
         * {@code HORIZONTAL_WRAP} or {@code VERTICAL_WRAP}
         * @see #getLayoutOrientation
         * @see #setVisibleRowCount
         * @see #getScrollableTracksViewportHeight
         * @see #getScrollableTracksViewportWidth
         * @throws IllegalArgumentException
         * if {@code layoutOrientation} isn't one of the allowable
         * values
         * @since 1.4
         * @beaninfo bound: true attribute: visualUpdate true description: Defines
         * the way list cells are layed out. enum: VERTICAL JList.VERTICAL
         * HORIZONTAL_WRAP JList.HORIZONTAL_WRAP VERTICAL_WRAP
         * JList.VERTICAL_WRAP
         */
        setLayoutOrientation(layoutOrientation: number): void;
        /**
         * Scrolls the list within an enclosing viewport to make the specified cell
         * completely visible. This calls {@code scrollRectToVisible} with the
         * bounds of the specified cell. For this method to work, the {@code JList}
         * must be within a <code>JViewport</code>.
         * <p>
         * If the given index is outside the list's range of cells, this method
         * results in nothing.
         *
         * @param {number} index
         * the index of the cell to make visible
         * @see JComponent#scrollRectToVisible
         * @see #getVisibleRect
         */
        ensureIndexIsVisible(index: number): void;
        /**
         * Turns on or off automatic drag handling. In order to enable automatic
         * drag handling, this property should be set to {@code true}, and the
         * list's {@code TransferHandler} needs to be {@code non-null}. The default
         * value of the {@code dragEnabled} property is {@code false}.
         * <p>
         * The job of honoring this property, and recognizing a user drag gesture,
         * lies with the look and feel implementation, and in particular, the list's
         * {@code ListUI}. When automatic drag handling is enabled, most look and
         * feels (including those that subclass {@code BasicLookAndFeel}) begin a
         * drag and drop operation whenever the user presses the mouse button over
         * an item and then moves the mouse a few pixels. Setting this property to
         * {@code true} can therefore have a subtle effect on how selections behave.
         * <p>
         * If a look and feel is used that ignores this property, you can still
         * begin a drag and drop operation by calling {@code exportAsDrag} on the
         * list's {@code TransferHandler}.
         *
         * @param {boolean} b
         * whether or not to enable automatic drag handling
         * @see java.awt.GraphicsEnvironment#isHeadless
         * @see #getDragEnabled
         * @see #setTransferHandler
         * @see TransferHandler
         * @since 1.4
         *
         * @beaninfo description: determines whether automatic drag handling is
         * enabled bound: false
         */
        setDragEnabled(b: boolean): void;
        /**
         * Returns whether or not automatic drag handling is enabled.
         *
         * @return {boolean} the value of the {@code dragEnabled} property
         * @see #setDragEnabled
         * @since 1.4
         */
        getDragEnabled(): boolean;
        /**
         * Sets the drop mode for this component. For backward compatibility, the
         * default for this property is <code>DropMode.USE_SELECTION</code>. Usage
         * of one of the other modes is recommended, however, for an improved user
         * experience. <code>DropMode.ON</code>, for instance, offers similar
         * behavior of showing items as selected, but does so without affecting the
         * actual selection in the list.
         * <p>
         * <code>JList</code> supports the following drop modes:
         * <ul>
         * <li><code>DropMode.USE_SELECTION</code></li>
         * <li><code>DropMode.ON</code></li>
         * <li><code>DropMode.INSERT</code></li>
         * <li><code>DropMode.ON_OR_INSERT</code></li>
         * </ul>
         * The drop mode is only meaningful if this component has a
         * <code>TransferHandler</code> that accepts drops.
         *
         * @param {javax.swing.DropMode} dropMode
         * the drop mode to use
         * @throws IllegalArgumentException
         * if the drop mode is unsupported or <code>null</code>
         * @see #getDropMode
         * @see #getDropLocation
         * @see #setTransferHandler
         * @see TransferHandler
         * @since 1.6
         */
        setDropMode(dropMode: javax.swing.DropMode): void;
        /**
         * Returns the drop mode for this component.
         *
         * @return {javax.swing.DropMode} the drop mode for this component
         * @see #setDropMode
         * @since 1.6
         */
        getDropMode(): javax.swing.DropMode;
        /**
         * Returns the next list element whose {@code toString} value starts with
         * the given prefix.
         *
         * @param {string} prefix
         * the string to test for a match
         * @param {number} startIndex
         * the index for starting the search
         * @param {javax.swing.text.Position.Bias} bias
         * the search direction, either Position.Bias.Forward or
         * Position.Bias.Backward.
         * @return {number} the index of the next list element that starts with the prefix;
         * otherwise {@code -1}
         * @exception IllegalArgumentException
         * if prefix is {@code null} or startIndex is out of bounds
         * @since 1.4
         */
        getNextMatch(prefix: string, startIndex: number, bias: javax.swing.text.Position.Bias): number;
        /**
         * Returns the cell index closest to the given location in the list's
         * coordinate system. To determine if the cell actually contains the
         * specified location, compare the point against the cell's bounds, as
         * provided by {@code getCellBounds}. This method returns {@code -1} if the
         * model is empty
         * <p>
         * This is a cover method that delegates to the method of the same name in
         * the list's {@code ListUI}. It returns {@code -1} if the list has no
         * {@code ListUI}.
         *
         * @param {java.awt.Point} location
         * the coordinates of the point
         * @return {number} the cell index closest to the given location, or {@code -1}
         */
        locationToIndex(location: java.awt.Point): number;
        /**
         * Returns the origin of the specified item in the list's coordinate system.
         * This method returns {@code null} if the index isn't valid.
         * <p>
         * This is a cover method that delegates to the method of the same name in
         * the list's {@code ListUI}. It returns {@code null} if the list has no
         * {@code ListUI}.
         *
         * @param {number} index
         * the cell index
         * @return {java.awt.Point} the origin of the cell, or {@code null}
         */
        indexToLocation(index: number): java.awt.Point;
        /**
         * Returns the bounding rectangle, in the list's coordinate system, for the
         * range of cells specified by the two indices. These indices can be
         * supplied in any order.
         * <p>
         * If the smaller index is outside the list's range of cells, this method
         * returns {@code null}. If the smaller index is valid, but the larger index
         * is outside the list's range, the bounds of just the first index is
         * returned. Otherwise, the bounds of the valid range is returned.
         * <p>
         * This is a cover method that delegates to the method of the same name in
         * the list's {@code ListUI}. It returns {@code null} if the list has no
         * {@code ListUI}.
         *
         * @param {number} index0
         * the first index in the range
         * @param {number} index1
         * the second index in the range
         * @return {java.awt.Rectangle} the bounding rectangle for the range of cells, or {@code null}
         */
        getCellBounds(index0: number, index1: number): java.awt.Rectangle;
        /**
         * Returns the data model that holds the list of items displayed by the
         * <code>JList</code> component.
         *
         * @return {*} the <code>ListModel</code> that provides the displayed list of
         * items
         * @see #setModel
         */
        getModel(): javax.swing.ListModel<E>;
        /**
         * Sets the model that represents the contents or "value" of the list,
         * notifies property change listeners, and then clears the list's selection.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {*} model
         * the <code>ListModel</code> that provides the list of items for
         * display
         * @exception IllegalArgumentException
         * if <code>model</code> is <code>null</code>
         * @see #getModel
         * @see #clearSelection
         * @beaninfo bound: true attribute: visualUpdate true description: The
         * object that contains the data to be drawn by this JList.
         */
        setModel(model: javax.swing.ListModel<E>): void;
        setListData$java_lang_Object_A(listData: E[]): void;
        /**
         * Constructs a read-only <code>ListModel</code> from an array of items, and
         * calls {@code setModel} with this model.
         * <p>
         * Attempts to pass a {@code null} value to this method results in undefined
         * behavior and, most likely, exceptions. The created model references the
         * given array directly. Attempts to modify the array after invoking this
         * method results in undefined behavior.
         *
         * @param {E[]} listData
         * an array of {@code E} containing the items to display in the
         * list
         * @see #setModel
         */
        setListData(listData?: any): any;
        setListData$java_util_Vector(listData: java.util.Vector<any>): void;
        /**
         * Returns an instance of {@code DefaultListSelectionModel}; called during
         * construction to initialize the list's selection model property.
         *
         * @return {*} a {@code DefaultListSelecitonModel}, used to initialize the
         * list's selection model property during construction
         * @see #setSelectionModel
         * @see DefaultListSelectionModel
         */
        createSelectionModel(): javax.swing.ListSelectionModel;
        /**
         * Returns the current selection model. The selection model maintains the
         * selection state of the list. See the class level documentation for more
         * details.
         *
         * @return {*} the <code>ListSelectionModel</code> that maintains the list's
         * selections
         *
         * @see #setSelectionModel
         * @see ListSelectionModel
         */
        getSelectionModel(): javax.swing.ListSelectionModel;
        /**
         * Notifies {@code ListSelectionListener}s added directly to the list of
         * selection changes made to the selection model. {@code JList} listens for
         * changes made to the selection in the selection model, and forwards
         * notification to listeners added to the list directly, by calling this
         * method.
         * <p>
         * This method constructs a {@code ListSelectionEvent} with this list as the
         * source, and the specified arguments, and sends it to the registered
         * {@code ListSelectionListeners}.
         *
         * @param {number} firstIndex
         * the first index in the range, {@code <= lastIndex}
         * @param {number} lastIndex
         * the last index in the range, {@code >= firstIndex}
         * @param {boolean} isAdjusting
         * whether or not this is one in a series of multiple events,
         * where changes are still being made
         *
         * @see #addListSelectionListener
         * @see #removeListSelectionListener
         * @see javax.swing.event.ListSelectionEvent
         * @see EventListenerList
         */
        fireSelectionValueChanged(firstIndex: number, lastIndex: number, isAdjusting: boolean): void;
        /**
         * Adds a listener to the list, to be notified each time a change to the
         * selection occurs; the preferred way of listening for selection state
         * changes. {@code JList} takes care of listening for selection state
         * changes in the selection model, and notifies the given listener of each
         * change. {@code ListSelectionEvent}s sent to the listener have a
         * {@code source} property set to this list.
         *
         * @param {*} listener
         * the {@code ListSelectionListener} to add
         * @see #getSelectionModel
         * @see #getListSelectionListeners
         */
        addListSelectionListener(listener: javax.swing.event.ListSelectionListener): void;
        /**
         * Removes a selection listener from the list.
         *
         * @param {*} listener
         * the {@code ListSelectionListener} to remove
         * @see #addListSelectionListener
         * @see #getSelectionModel
         */
        removeListSelectionListener(listener: javax.swing.event.ListSelectionListener): void;
        /**
         * Returns an array of all the {@code ListSelectionListener}s added to this
         * {@code JList} by way of {@code addListSelectionListener}.
         *
         * @return {javax.swing.event.ListSelectionListener[]} all of the {@code ListSelectionListener}s on this list, or an
         * empty array if no listeners have been added
         * @see #addListSelectionListener
         * @since 1.4
         */
        getListSelectionListeners(): javax.swing.event.ListSelectionListener[];
        /**
         * Sets the <code>selectionModel</code> for the list to a non-
         * <code>null</code> <code>ListSelectionModel</code> implementation. The
         * selection model handles the task of making single selections, selections
         * of contiguous ranges, and non-contiguous selections.
         * <p>
         * This is a JavaBeans bound property.
         *
         * @param {*} selectionModel
         * the <code>ListSelectionModel</code> that implements the
         * selections
         * @exception IllegalArgumentException
         * if <code>selectionModel</code> is <code>null</code>
         * @see #getSelectionModel
         * @beaninfo bound: true description: The selection model, recording which
         * cells are selected.
         */
        setSelectionModel(selectionModel: javax.swing.ListSelectionModel): void;
        /**
         * Sets the selection mode for the list. This is a cover method that sets
         * the selection mode directly on the selection model.
         * <p>
         * The following list describes the accepted selection modes:
         * <ul>
         * <li>{@code ListSelectionModel.SINGLE_SELECTION} - Only one list index can
         * be selected at a time. In this mode, {@code setSelectionInterval} and
         * {@code addSelectionInterval} are equivalent, both replacing the current
         * selection with the index represented by the second argument (the "lead").
         * <li>{@code ListSelectionModel.SINGLE_INTERVAL_SELECTION} - Only one
         * contiguous interval can be selected at a time. In this mode,
         * {@code addSelectionInterval} behaves like {@code setSelectionInterval}
         * (replacing the current selection}, unless the given interval is
         * immediately adjacent to or overlaps the existing selection, and can be
         * used to grow the selection.
         * <li>{@code ListSelectionModel.MULTIPLE_INTERVAL_SELECTION} - In this
         * mode, there's no restriction on what can be selected. This mode is the
         * default.
         * </ul>
         *
         * @param {number} selectionMode
         * the selection mode
         * @see #getSelectionMode
         * @throws IllegalArgumentException
         * if the selection mode isn't one of those allowed
         * @beaninfo description: The selection mode. enum: SINGLE_SELECTION
         * ListSelectionModel.SINGLE_SELECTION SINGLE_INTERVAL_SELECTION
         * ListSelectionModel.SINGLE_INTERVAL_SELECTION
         * MULTIPLE_INTERVAL_SELECTION
         * ListSelectionModel.MULTIPLE_INTERVAL_SELECTION
         */
        setSelectionMode(selectionMode: number): void;
        /**
         * Returns the current selection mode for the list. This is a cover method
         * that delegates to the method of the same name on the list's selection
         * model.
         *
         * @return {number} the current selection mode
         * @see #setSelectionMode
         */
        getSelectionMode(): number;
        /**
         * Returns the anchor selection index. This is a cover method that delegates
         * to the method of the same name on the list's selection model.
         *
         * @return {number} the anchor selection index
         * @see ListSelectionModel#getAnchorSelectionIndex
         */
        getAnchorSelectionIndex(): number;
        /**
         * Returns the lead selection index. This is a cover method that delegates
         * to the method of the same name on the list's selection model.
         *
         * @return {number} the lead selection index
         * @see ListSelectionModel#getLeadSelectionIndex
         * @beaninfo description: The lead selection index.
         */
        getLeadSelectionIndex(): number;
        /**
         * Returns the smallest selected cell index, or {@code -1} if the selection
         * is empty. This is a cover method that delegates to the method of the same
         * name on the list's selection model.
         *
         * @return {number} the smallest selected cell index, or {@code -1}
         * @see ListSelectionModel#getMinSelectionIndex
         */
        getMinSelectionIndex(): number;
        /**
         * Returns the largest selected cell index, or {@code -1} if the selection
         * is empty. This is a cover method that delegates to the method of the same
         * name on the list's selection model.
         *
         * @return {number} the largest selected cell index
         * @see ListSelectionModel#getMaxSelectionIndex
         */
        getMaxSelectionIndex(): number;
        /**
         * Returns {@code true} if the specified index is selected, else
         * {@code false}. This is a cover method that delegates to the method of the
         * same name on the list's selection model.
         *
         * @param {number} index
         * index to be queried for selection state
         * @return {boolean} {@code true} if the specified index is selected, else
         * {@code false}
         * @see ListSelectionModel#isSelectedIndex
         * @see #setSelectedIndex
         */
        isSelectedIndex(index: number): boolean;
        /**
         * Returns {@code true} if nothing is selected, else {@code false}. This is
         * a cover method that delegates to the method of the same name on the
         * list's selection model.
         *
         * @return {boolean} {@code true} if nothing is selected, else {@code false}
         * @see ListSelectionModel#isSelectionEmpty
         * @see #clearSelection
         */
        isSelectionEmpty(): boolean;
        /**
         * Clears the selection; after calling this method, {@code isSelectionEmpty}
         * will return {@code true}. This is a cover method that delegates to the
         * method of the same name on the list's selection model.
         *
         * @see ListSelectionModel#clearSelection
         * @see #isSelectionEmpty
         */
        clearSelection(): void;
        /**
         * Selects the specified interval. Both {@code anchor} and {@code lead}
         * indices are included. {@code anchor} doesn't have to be less than or
         * equal to {@code lead}. This is a cover method that delegates to the
         * method of the same name on the list's selection model.
         * <p>
         * Refer to the documentation of the selection model class being used for
         * details on how values less than {@code 0} are handled.
         *
         * @param {number} anchor
         * the first index to select
         * @param {number} lead
         * the last index to select
         * @see ListSelectionModel#setSelectionInterval
         * @see DefaultListSelectionModel#setSelectionInterval
         * @see #createSelectionModel
         * @see #addSelectionInterval
         * @see #removeSelectionInterval
         */
        setSelectionInterval(anchor: number, lead: number): void;
        /**
         * Sets the selection to be the union of the specified interval with current
         * selection. Both the {@code anchor} and {@code lead} indices are included.
         * {@code anchor} doesn't have to be less than or equal to {@code lead}.
         * This is a cover method that delegates to the method of the same name on
         * the list's selection model.
         * <p>
         * Refer to the documentation of the selection model class being used for
         * details on how values less than {@code 0} are handled.
         *
         * @param {number} anchor
         * the first index to add to the selection
         * @param {number} lead
         * the last index to add to the selection
         * @see ListSelectionModel#addSelectionInterval
         * @see DefaultListSelectionModel#addSelectionInterval
         * @see #createSelectionModel
         * @see #setSelectionInterval
         * @see #removeSelectionInterval
         */
        addSelectionInterval(anchor: number, lead: number): void;
        /**
         * Sets the selection to be the set difference of the specified interval and
         * the current selection. Both the {@code index0} and {@code index1} indices
         * are removed. {@code index0} doesn't have to be less than or equal to
         * {@code index1}. This is a cover method that delegates to the method of
         * the same name on the list's selection model.
         * <p>
         * Refer to the documentation of the selection model class being used for
         * details on how values less than {@code 0} are handled.
         *
         * @param {number} index0
         * the first index to remove from the selection
         * @param {number} index1
         * the last index to remove from the selection
         * @see ListSelectionModel#removeSelectionInterval
         * @see DefaultListSelectionModel#removeSelectionInterval
         * @see #createSelectionModel
         * @see #setSelectionInterval
         * @see #addSelectionInterval
         */
        removeSelectionInterval(index0: number, index1: number): void;
        /**
         * Sets the selection model's {@code valueIsAdjusting} property. When
         * {@code true}, upcoming changes to selection should be considered part of
         * a single change. This property is used internally and developers
         * typically need not call this method. For example, when the model is being
         * updated in response to a user drag, the value of the property is set to
         * {@code true} when the drag is initiated and set to {@code false} when the
         * drag is finished. This allows listeners to update only when a change has
         * been finalized, rather than handling all of the intermediate values.
         * <p>
         * You may want to use this directly if making a series of changes that
         * should be considered part of a single change.
         * <p>
         * This is a cover method that delegates to the method of the same name on
         * the list's selection model. See the documentation for
         * {@link javax.swing.ListSelectionModel#setValueIsAdjusting} for more
         * details.
         *
         * @param {boolean} b
         * the new value for the property
         * @see ListSelectionModel#setValueIsAdjusting
         * @see javax.swing.event.ListSelectionEvent#getValueIsAdjusting
         * @see #getValueIsAdjusting
         */
        setValueIsAdjusting(b: boolean): void;
        /**
         * Returns the value of the selection model's {@code isAdjusting} property.
         * <p>
         * This is a cover method that delegates to the method of the same name on
         * the list's selection model.
         *
         * @return {boolean} the value of the selection model's {@code isAdjusting} property.
         *
         * @see #setValueIsAdjusting
         * @see ListSelectionModel#getValueIsAdjusting
         */
        getValueIsAdjusting(): boolean;
        /**
         * Returns an array of all of the selected indices, in increasing order.
         *
         * @return {int[]} all of the selected indices, in increasing order, or an empty
         * array if nothing is selected
         * @see #removeSelectionInterval
         * @see #addListSelectionListener
         */
        getSelectedIndices(): number[];
        /**
         * Selects a single cell. Does nothing if the given index is greater than or
         * equal to the model size. This is a convenience method that uses
         * {@code setSelectionInterval} on the selection model. Refer to the
         * documentation for the selection model class being used for details on how
         * values less than {@code 0} are handled.
         *
         * @param {number} index
         * the index of the cell to select
         * @see ListSelectionModel#setSelectionInterval
         * @see #isSelectedIndex
         * @see #addListSelectionListener
         * @beaninfo description: The index of the selected cell.
         */
        setSelectedIndex(index: number): void;
        /**
         * Changes the selection to be the set of indices specified by the given
         * array. Indices greater than or equal to the model size are ignored. This
         * is a convenience method that clears the selection and then uses
         * {@code addSelectionInterval} on the selection model to add the indices.
         * Refer to the documentation of the selection model class being used for
         * details on how values less than {@code 0} are handled.
         *
         * @param {int[]} indices
         * an array of the indices of the cells to select,
         * {@code non-null}
         * @see ListSelectionModel#addSelectionInterval
         * @see #isSelectedIndex
         * @see #addListSelectionListener
         * @throws NullPointerException
         * if the given array is {@code null}
         */
        setSelectedIndices(indices: number[]): void;
        /**
         * Returns an array of all the selected values, in increasing order based on
         * their indices in the list.
         *
         * @return {java.lang.Object[]} the selected values, or an empty array if nothing is selected
         * @see #isSelectedIndex
         * @see #getModel
         * @see #addListSelectionListener
         *
         * @deprecated As of JDK 1.7, replaced by {@link #getSelectedValuesList()}
         */
        getSelectedValues(): any[];
        /**
         * Returns a list of all the selected items, in increasing order based on
         * their indices in the list.
         *
         * @return {*} the selected items, or an empty list if nothing is selected
         * @see #isSelectedIndex
         * @see #getModel
         * @see #addListSelectionListener
         *
         * @since 1.7
         */
        getSelectedValuesList(): java.util.List<E>;
        /**
         * Returns the smallest selected cell index; <i>the selection</i> when only
         * a single item is selected in the list. When multiple items are selected,
         * it is simply the smallest selected index. Returns {@code -1} if there is
         * no selection.
         * <p>
         * This method is a cover that delegates to {@code getMinSelectionIndex}.
         *
         * @return {number} the smallest selected cell index
         * @see #getMinSelectionIndex
         * @see #addListSelectionListener
         */
        getSelectedIndex(): number;
        /**
         * Returns the value for the smallest selected cell index; <i>the selected
         * value</i> when only a single item is selected in the list. When multiple
         * items are selected, it is simply the value for the smallest selected
         * index. Returns {@code null} if there is no selection.
         * <p>
         * This is a convenience method that simply returns the model value for
         * {@code getMinSelectionIndex}.
         *
         * @return {*} the first selected value
         * @see #getMinSelectionIndex
         * @see #getModel
         * @see #addListSelectionListener
         */
        getSelectedValue(): E;
        /**
         * Selects the specified object from the list.
         *
         * @param {*} anObject
         * the object to select
         * @param {boolean} shouldScroll
         * {@code true} if the list should scroll to display the selected
         * object, if one exists; otherwise {@code false}
         */
        setSelectedValue(anObject: any, shouldScroll: boolean): void;
        /**
         * Returns a {@code String} representation of this {@code JList}. This
         * method is intended to be used only for debugging purposes, and the
         * content and format of the returned {@code String} may vary between
         * implementations. The returned {@code String} may be empty, but may not be
         * {@code null}.
         *
         * @return {string} a {@code String} representation of this {@code JList}.
         */
        paramString(): string;
    }
    namespace JList {
        class ListSelectionHandler implements javax.swing.event.ListSelectionListener, java.io.Serializable {
            __parent: any;
            valueChanged(e: javax.swing.event.ListSelectionEvent): void;
            constructor(__parent: any);
        }
        class JList$0 extends javax.swing.AbstractListModel<any> {
            private listData;
            __parent: any;
            getSize(): number;
            getElementAt(i: number): any;
            constructor(__parent: any, listData: any);
        }
        class JList$1 extends javax.swing.AbstractListModel<any> {
            private listData;
            __parent: any;
            getSize(): number;
            getElementAt(i: number): any;
            constructor(__parent: any, listData: any);
        }
        class JList$2 extends javax.swing.AbstractListModel<any> {
            __parent: any;
            getSize(): number;
            getElementAt(i: number): any;
            constructor(__parent: any);
        }
        class JList$3 extends javax.swing.AbstractListModel<any> {
            private listData;
            __parent: any;
            getSize(): number;
            getElementAt(i: number): any;
            constructor(__parent: any, listData: any);
        }
        class JList$4 extends javax.swing.AbstractListModel<any> {
            private listData;
            __parent: any;
            getSize(): number;
            getElementAt(i: number): any;
            constructor(__parent: any, listData: any);
        }
    }
}
declare namespace javax.swing {
    class JLabel extends javax.swing.JComponent implements javax.swing.SwingConstants {
        mnemonic: number;
        mnemonicIndex: number;
        text: string;
        defaultIcon: javax.swing.Icon;
        disabledIcon: javax.swing.Icon;
        disabledIconSet: boolean;
        verticalAlignment: number;
        horizontalAlignment: number;
        verticalTextPosition: number;
        horizontalTextPosition: number;
        iconTextGap: number;
        labelFor: java.awt.Component;
        static LABELED_BY_PROPERTY: string;
        constructor(text?: any, icon?: any, horizontalAlignment?: any);
        htmlLabelElement: HTMLLabelElement;
        htmlImageElement: HTMLImageElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        getText(): string;
        setText(text: string): void;
        getIcon(): javax.swing.Icon;
        setIcon(icon: javax.swing.Icon): void;
        getDisabledIcon(): javax.swing.Icon;
        setDisabledIcon(disabledIcon: javax.swing.Icon): void;
        setDisplayedMnemonic$int(key: number): void;
        setDisplayedMnemonic$char(aChar: string): void;
        setDisplayedMnemonic(aChar?: any): any;
        getDisplayedMnemonic(): number;
        setDisplayedMnemonicIndex(index: number): void;
        getDisplayedMnemonicIndex(): number;
        checkHorizontalKey(key: number, message: string): number;
        checkVerticalKey(key: number, message: string): number;
        getIconTextGap(): number;
        setIconTextGap(iconTextGap: number): void;
        getVerticalAlignment(): number;
        setVerticalAlignment(alignment: number): void;
        getHorizontalAlignment(): number;
        setHorizontalAlignment(alignment: number): void;
        getVerticalTextPosition(): number;
        setVerticalTextPosition(textPosition: number): void;
        getHorizontalTextPosition(): number;
        setHorizontalTextPosition(textPosition: number): void;
        paramString(): string;
    }
}
declare namespace javax.swing {
    /**
     * Creates a new separator with the specified horizontal or
     * vertical orientation.
     *
     * @param {number} orientation an integer specifying
     * <code>SwingConstants.HORIZONTAL</code> or
     * <code>SwingConstants.VERTICAL</code>
     * @exception IllegalArgumentException if <code>orientation</code>
     * is neither <code>SwingConstants.HORIZONTAL</code> nor
     * <code>SwingConstants.VERTICAL</code>
     * @class
     * @extends javax.swing.JComponent
     * @author Georges Saab
     */
    class JSeparator extends javax.swing.JComponent {
        /**
         *
         */
        createHTML(): void;
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        orientation: number;
        constructor(orientation?: any);
        /**
         * Returns the name of the L&amp;F class that renders this component.
         *
         * @return {string} the string "SeparatorUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        /**
         * Returns the orientation of this separator.
         *
         * @return   {number} The value of the orientation property, one of the
         * following constants defined in <code>SwingConstants</code>:
         * <code>VERTICAL</code>, or
         * <code>HORIZONTAL</code>.
         *
         * @see SwingConstants
         * @see #setOrientation
         */
        getOrientation(): number;
        /**
         * Sets the orientation of the separator.
         * The default value of this property is HORIZONTAL.
         * @param {number} orientation  either <code>SwingConstants.HORIZONTAL</code>
         * or <code>SwingConstants.VERTICAL</code>
         * @exception IllegalArgumentException  if <code>orientation</code>
         * is neither <code>SwingConstants.HORIZONTAL</code>
         * nor <code>SwingConstants.VERTICAL</code>
         *
         * @see SwingConstants
         * @see #getOrientation
         * @beaninfo
         * bound: true
         * preferred: true
         * enum: HORIZONTAL SwingConstants.HORIZONTAL
         * VERTICAL   SwingConstants.VERTICAL
         * attribute: visualUpdate true
         * description: The orientation of the separator.
         */
        setOrientation(orientation: number): void;
        checkOrientation(orientation: number): void;
        /**
         * Returns a string representation of this <code>JSeparator</code>.
         * This method
         * is intended to be used only for debugging purposes, and the
         * content and format of the returned string may vary between
         * implementations. The returned string may be empty but may not
         * be <code>null</code>.
         *
         * @return  {string} a string representation of this <code>JSeparator</code>
         */
        paramString(): string;
    }
}
declare namespace java.awt.event {
    class MouseEvent extends java.awt.event.InputEvent {
        static MOUSE_FIRST: number;
        static MOUSE_LAST: number;
        static MOUSE_CLICKED: number;
        static MOUSE_CLICKED_$LI$(): number;
        static MOUSE_PRESSED: number;
        static MOUSE_PRESSED_$LI$(): number;
        static MOUSE_RELEASED: number;
        static MOUSE_RELEASED_$LI$(): number;
        static MOUSE_MOVED: number;
        static MOUSE_MOVED_$LI$(): number;
        static MOUSE_ENTERED: number;
        static MOUSE_ENTERED_$LI$(): number;
        static MOUSE_EXITED: number;
        static MOUSE_EXITED_$LI$(): number;
        static MOUSE_DRAGGED: number;
        static MOUSE_DRAGGED_$LI$(): number;
        static MOUSE_WHEEL: number;
        static MOUSE_WHEEL_$LI$(): number;
        static NOBUTTON: number;
        static BUTTON1: number;
        static BUTTON2: number;
        static BUTTON3: number;
        x: number;
        y: number;
        xAbs: number;
        yAbs: number;
        clickCount: number;
        button: number;
        popupTrigger: boolean;
        static serialVersionUID: number;
        static cachedNumberOfButtons: number;
        getLocationOnScreen(): java.awt.Point;
        getXOnScreen(): number;
        getYOnScreen(): number;
        shouldExcludeButtonFromExtModifiers: boolean;
        getModifiersEx(): number;
        constructor(source?: any, id?: any, when?: any, modifiers?: any, x?: any, y?: any, xAbs?: any, yAbs?: any, clickCount?: any, popupTrigger?: any, button?: any);
        getX(): number;
        getY(): number;
        getPoint(): java.awt.Point;
        translatePoint(x: number, y: number): void;
        getClickCount(): number;
        getButton(): number;
        isPopupTrigger(): boolean;
        static getMouseModifiersText(modifiers: number): string;
        paramString(): string;
        setNewModifiers(): void;
        setOldModifiers(): void;
    }
}
declare namespace java.awt.event {
    class KeyEvent extends java.awt.event.InputEvent {
        isProxyActive: boolean;
        static KEY_FIRST: number;
        static KEY_LAST: number;
        static KEY_TYPED: number;
        static KEY_TYPED_$LI$(): number;
        static KEY_PRESSED: number;
        static KEY_PRESSED_$LI$(): number;
        static KEY_RELEASED: number;
        static KEY_RELEASED_$LI$(): number;
        static VK_ENTER: number;
        static VK_BACK_SPACE: number;
        static VK_TAB: number;
        static VK_CANCEL: number;
        static VK_CLEAR: number;
        static VK_SHIFT: number;
        static VK_CONTROL: number;
        static VK_ALT: number;
        static VK_PAUSE: number;
        static VK_CAPS_LOCK: number;
        static VK_ESCAPE: number;
        static VK_SPACE: number;
        static VK_PAGE_UP: number;
        static VK_PAGE_DOWN: number;
        static VK_END: number;
        static VK_HOME: number;
        static VK_LEFT: number;
        static VK_UP: number;
        static VK_RIGHT: number;
        static VK_DOWN: number;
        static VK_COMMA: number;
        static VK_MINUS: number;
        static VK_PERIOD: number;
        static VK_SLASH: number;
        /**
         * VK_0 thru VK_9 are the same as ASCII '0' thru '9' (0x30 - 0x39)
         */
        static VK_0: number;
        static VK_1: number;
        static VK_2: number;
        static VK_3: number;
        static VK_4: number;
        static VK_5: number;
        static VK_6: number;
        static VK_7: number;
        static VK_8: number;
        static VK_9: number;
        static VK_SEMICOLON: number;
        static VK_EQUALS: number;
        /**
         * VK_A thru VK_Z are the same as ASCII 'A' thru 'Z' (0x41 - 0x5A)
         */
        static VK_A: number;
        static VK_B: number;
        static VK_C: number;
        static VK_D: number;
        static VK_E: number;
        static VK_F: number;
        static VK_G: number;
        static VK_H: number;
        static VK_I: number;
        static VK_J: number;
        static VK_K: number;
        static VK_L: number;
        static VK_M: number;
        static VK_N: number;
        static VK_O: number;
        static VK_P: number;
        static VK_Q: number;
        static VK_R: number;
        static VK_S: number;
        static VK_T: number;
        static VK_U: number;
        static VK_V: number;
        static VK_W: number;
        static VK_X: number;
        static VK_Y: number;
        static VK_Z: number;
        static VK_OPEN_BRACKET: number;
        static VK_BACK_SLASH: number;
        static VK_CLOSE_BRACKET: number;
        static VK_NUMPAD0: number;
        static VK_NUMPAD1: number;
        static VK_NUMPAD2: number;
        static VK_NUMPAD3: number;
        static VK_NUMPAD4: number;
        static VK_NUMPAD5: number;
        static VK_NUMPAD6: number;
        static VK_NUMPAD7: number;
        static VK_NUMPAD8: number;
        static VK_NUMPAD9: number;
        static VK_MULTIPLY: number;
        static VK_ADD: number;
        static VK_SEPARATER: number;
        static VK_SEPARATOR: number;
        static VK_SEPARATOR_$LI$(): number;
        static VK_SUBTRACT: number;
        static VK_DECIMAL: number;
        static VK_DIVIDE: number;
        static VK_DELETE: number;
        static VK_NUM_LOCK: number;
        static VK_SCROLL_LOCK: number;
        static VK_F1: number;
        static VK_F2: number;
        static VK_F3: number;
        static VK_F4: number;
        static VK_F5: number;
        static VK_F6: number;
        static VK_F7: number;
        static VK_F8: number;
        static VK_F9: number;
        static VK_F10: number;
        static VK_F11: number;
        static VK_F12: number;
        static VK_F13: number;
        static VK_F14: number;
        static VK_F15: number;
        static VK_F16: number;
        static VK_F17: number;
        static VK_F18: number;
        static VK_F19: number;
        static VK_F20: number;
        static VK_F21: number;
        static VK_F22: number;
        static VK_F23: number;
        static VK_F24: number;
        static VK_PRINTSCREEN: number;
        static VK_INSERT: number;
        static VK_HELP: number;
        static VK_META: number;
        static VK_BACK_QUOTE: number;
        static VK_QUOTE: number;
        static VK_KP_UP: number;
        static VK_KP_DOWN: number;
        static VK_KP_LEFT: number;
        static VK_KP_RIGHT: number;
        static VK_DEAD_GRAVE: number;
        static VK_DEAD_ACUTE: number;
        static VK_DEAD_CIRCUMFLEX: number;
        static VK_DEAD_TILDE: number;
        static VK_DEAD_MACRON: number;
        static VK_DEAD_BREVE: number;
        static VK_DEAD_ABOVEDOT: number;
        static VK_DEAD_DIAERESIS: number;
        static VK_DEAD_ABOVERING: number;
        static VK_DEAD_DOUBLEACUTE: number;
        static VK_DEAD_CARON: number;
        static VK_DEAD_CEDILLA: number;
        static VK_DEAD_OGONEK: number;
        static VK_DEAD_IOTA: number;
        static VK_DEAD_VOICED_SOUND: number;
        static VK_DEAD_SEMIVOICED_SOUND: number;
        static VK_AMPERSAND: number;
        static VK_ASTERISK: number;
        static VK_QUOTEDBL: number;
        static VK_LESS: number;
        static VK_GREATER: number;
        static VK_BRACELEFT: number;
        static VK_BRACERIGHT: number;
        static VK_AT: number;
        static VK_COLON: number;
        static VK_CIRCUMFLEX: number;
        static VK_DOLLAR: number;
        static VK_EURO_SIGN: number;
        static VK_EXCLAMATION_MARK: number;
        static VK_INVERTED_EXCLAMATION_MARK: number;
        static VK_LEFT_PARENTHESIS: number;
        static VK_NUMBER_SIGN: number;
        static VK_PLUS: number;
        static VK_RIGHT_PARENTHESIS: number;
        static VK_UNDERSCORE: number;
        static VK_WINDOWS: number;
        static VK_CONTEXT_MENU: number;
        static VK_FINAL: number;
        static VK_CONVERT: number;
        static VK_NONCONVERT: number;
        static VK_ACCEPT: number;
        static VK_MODECHANGE: number;
        static VK_KANA: number;
        static VK_KANJI: number;
        static VK_ALPHANUMERIC: number;
        static VK_KATAKANA: number;
        static VK_HIRAGANA: number;
        static VK_FULL_WIDTH: number;
        static VK_HALF_WIDTH: number;
        static VK_ROMAN_CHARACTERS: number;
        static VK_ALL_CANDIDATES: number;
        static VK_PREVIOUS_CANDIDATE: number;
        static VK_CODE_INPUT: number;
        static VK_JAPANESE_KATAKANA: number;
        static VK_JAPANESE_HIRAGANA: number;
        static VK_JAPANESE_ROMAN: number;
        static VK_KANA_LOCK: number;
        static VK_INPUT_METHOD_ON_OFF: number;
        static VK_CUT: number;
        static VK_COPY: number;
        static VK_PASTE: number;
        static VK_UNDO: number;
        static VK_AGAIN: number;
        static VK_FIND: number;
        static VK_PROPS: number;
        static VK_STOP: number;
        static VK_COMPOSE: number;
        static VK_ALT_GRAPH: number;
        static VK_BEGIN: number;
        static VK_UNDEFINED: number;
        static CHAR_UNDEFINED: string;
        static KEY_LOCATION_UNKNOWN: number;
        static KEY_LOCATION_STANDARD: number;
        static KEY_LOCATION_LEFT: number;
        static KEY_LOCATION_RIGHT: number;
        static KEY_LOCATION_NUMPAD: number;
        keyCode: number;
        keyChar: string;
        keyLocation: number;
        static serialVersionUID: number;
        originalSource: java.awt.Component;
        constructor(source?: any, id?: any, when?: any, modifiers?: any, keyCode?: any, keyChar?: any, keyLocation?: any, isProxyActive?: any);
        getKeyCode(): number;
        setKeyCode(keyCode: number): void;
        getKeyChar(): string;
        setKeyChar(keyChar: string): void;
        setModifiers(modifiers: number): void;
        getKeyLocation(): number;
        static getKeyText(keyCode: number): string;
        static getKeyModifiersText(modifiers: number): string;
        isActionKey(): boolean;
        paramString(): string;
        getExtendedKeyCode(): number;
        /**
         * Returns an extended key code for a unicode character.
         *
         * @return {number} for a unicode character with a corresponding {@code VK_} constant
         * -- this {@code VK_} constant; for a character appearing on the
         * primary level of a known keyboard layout -- a unique integer. If
         * a character does not appear on the primary level of a known
         * keyboard, {@code VK_UNDEFINED} is returned.
         *
         * @since 1.7
         * @param {number} c
         */
        static getExtendedKeyCodeForChar(c: number): number;
        /**
         * Sets new modifiers by the old ones. The key modifiers override overlaping
         * mouse modifiers.
         * @private
         */
        setNewModifiers(): void;
        setOldModifiers(): void;
    }
}
declare namespace javax.swing {
    class JFrame extends java.awt.Frame implements javax.swing.RootPaneContainer, javax.swing.WindowConstants {
        static EXIT_ON_CLOSE: number;
        defaultCloseOperation: number;
        rootPane: javax.swing.JRootPane;
        rootPaneCheckingEnabled: boolean;
        constructor(title?: any);
        frameInit(): void;
        createRootPane(): javax.swing.JRootPane;
        setRootPane(root: javax.swing.JRootPane): void;
        /**
         *
         * @return {java.awt.Container}
         */
        getContentPane(): java.awt.Container;
        /**
         *
         * @return {javax.swing.JRootPane}
         */
        getRootPane(): javax.swing.JRootPane;
        /**
         *
         * @param {java.awt.Container} contentPane
         */
        setContentPane(contentPane: java.awt.Container): void;
        setGlassPane(glassPane: java.awt.Container): void;
        getGlassPane(): java.awt.Component;
        setDefaultCloseOperation(operation: number): void;
    }
}
declare namespace javax.swing {
    /**
     * Creates a swing applet instance.
     * <p>
     * This constructor sets the component's locale property to the value
     * returned by <code>JComponent.getDefaultLocale</code>.
     *
     * @exception java.awt.HeadlessException
     * if GraphicsEnvironment.isHeadless() returns true.
     * @see java.awt.GraphicsEnvironment#isHeadless
     * @see JComponent#getDefaultLocale
     * @class
     * @extends java.applet.Applet
     */
    class JApplet extends java.applet.Applet implements javax.swing.RootPaneContainer {
        /**
         * @see #getRootPane
         * @see #setRootPane
         */
        rootPane: javax.swing.JRootPane;
        /**
         * If true then calls to <code>add</code> and <code>setLayout</code> will be
         * forwarded to the <code>contentPane</code>. This is initially false, but
         * is set to true when the <code>JApplet</code> is constructed.
         *
         * @see #isRootPaneCheckingEnabled
         * @see #setRootPaneCheckingEnabled
         * @see javax.swing.RootPaneContainer
         */
        rootPaneCheckingEnabled: boolean;
        constructor();
        /**
         * Called by the constructor methods to create the default rootPane.
         * @return {javax.swing.JRootPane}
         */
        createRootPane(): javax.swing.JRootPane;
        addImpl(comp: java.awt.Component, constraints: any, index: number): void;
        /**
         * Just calls <code>paint(g)</code>. This method was overridden to prevent
         * an unnecessary call to clear the background.
         * @param {java.awt.Graphics} g
         */
        update(g: java.awt.Graphics): void;
        remove$java_awt_Component(comp: java.awt.Component): void;
        /**
         * Removes the specified component from the container. If <code>comp</code>
         * is not the <code>rootPane</code>, this will forward the call to the
         * <code>contentPane</code>. This will do nothing if <code>comp</code> is
         * not a child of the <code>JFrame</code> or <code>contentPane</code>.
         *
         * @param {java.awt.Component} comp
         * the component to be removed
         * @throws NullPointerException
         * if <code>comp</code> is null
         * @see #add
         * @see javax.swing.RootPaneContainer
         */
        remove(comp?: any): any;
        /**
         * Sets the <code>LayoutManager</code>. Overridden to conditionally forward
         * the call to the <code>contentPane</code>. Refer to
         * {@link javax.swing.RootPaneContainer} for more information.
         *
         * @param {*} manager
         * the <code>LayoutManager</code>
         * @see #setRootPaneCheckingEnabled
         * @see javax.swing.RootPaneContainer
         */
        setLayout(manager: java.awt.LayoutManager): void;
        /**
         * Returns the rootPane object for this applet.
         *
         * @see #setRootPane
         * @see RootPaneContainer#getRootPane
         * @return {javax.swing.JRootPane}
         */
        getRootPane(): javax.swing.JRootPane;
        /**
         * Sets the rootPane property. This method is called by the constructor.
         *
         * @param {javax.swing.JRootPane} root
         * the rootPane object for this applet
         *
         * @see #getRootPane
         *
         * @beaninfo hidden: true description: the RootPane object for this applet.
         */
        setRootPane(root: javax.swing.JRootPane): void;
        /**
         * Returns the contentPane object for this applet.
         *
         * @see #setContentPane
         * @see RootPaneContainer#getContentPane
         * @return {java.awt.Container}
         */
        getContentPane(): java.awt.Container;
        /**
         * Sets the contentPane property. This method is called by the constructor.
         *
         * @param {java.awt.Container} contentPane
         * the contentPane object for this applet
         *
         * @exception java.awt.IllegalComponentStateException
         * (a runtime exception) if the content pane parameter is
         * null
         * @see #getContentPane
         * @see RootPaneContainer#setContentPane
         *
         * @beaninfo hidden: true description: The client area of the applet where
         * child components are normally inserted.
         */
        setContentPane(contentPane: java.awt.Container): void;
        /**
         * Returns a string representation of this JApplet. This method is intended
         * to be used only for debugging purposes, and the content and format of the
         * returned string may vary between implementations. The returned string may
         * be empty but may not be <code>null</code>.
         *
         * @return {string} a string representation of this JApplet.
         */
        paramString(): string;
    }
}
declare namespace javax.swing {
    /**
     * Creates a <code>JMenuItem</code> with the specified text and icon.
     *
     * @param {string} text the text of the <code>JMenuItem</code>
     * @param {*} icon the icon of the <code>JMenuItem</code>
     * @class
     * @extends javax.swing.AbstractButton
     * @author Georges Saab
     */
    class JMenuItem extends javax.swing.AbstractButton implements javax.swing.MenuElement {
        /**
         *
         */
        createHTML(): void;
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        static TRACE: boolean;
        static VERBOSE: boolean;
        static DEBUG: boolean;
        isMouseDragged: boolean;
        constructor(text?: any, icon?: any);
        /**
         * {@inheritDoc}
         * @param {*} newModel
         */
        setModel(newModel: javax.swing.ButtonModel): void;
        /**
         * Initializes the menu item with the specified text and icon.
         *
         * @param {string} text the text of the <code>JMenuItem</code>
         * @param {*} icon the icon of the <code>JMenuItem</code>
         */
        init(text: string, icon: javax.swing.Icon): void;
        /**
         * Returns the suffix used to construct the name of the L&amp;F class used to
         * render this component.
         *
         * @return {string} the string "MenuItemUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        /**
         * Identifies the menu item as "armed". If the mouse button is
         * released while it is over this item, the menu's action event
         * will fire. If the mouse button is released elsewhere, the
         * event will not fire and the menu item will be disarmed.
         *
         * @param {boolean} b true to arm the menu item so it can be selected
         * @beaninfo
         * description: Mouse release will fire an action event
         * hidden: true
         */
        setArmed(b: boolean): void;
        /**
         * Returns whether the menu item is "armed".
         *
         * @return {boolean} true if the menu item is armed, and it can be selected
         * @see #setArmed
         */
        isArmed(): boolean;
        /**
         * Returns the <code>KeyStroke</code> which serves as an accelerator
         * for the menu item.
         * @return {void} a <code>KeyStroke</code> object identifying the
         * accelerator key
         * @param {*} a
         */
        setIconFromAction(a: javax.swing.Action): void;
        largeIconChanged(a: javax.swing.Action): void;
        smallIconChanged(a: javax.swing.Action): void;
        /**
         * Processes a key event forwarded from the
         * <code>MenuSelectionManager</code> and changes the menu selection,
         * if necessary, by using <code>MenuSelectionManager</code>'s API.
         * <p>
         * Note: you do not have to forward the event to sub-components.
         * This is done automatically by the <code>MenuSelectionManager</code>.
         *
         * @param {java.awt.event.KeyEvent} e  a <code>KeyEvent</code>
         * @param {javax.swing.MenuElement[]} path the <code>MenuElement</code> path array
         * @param {javax.swing.MenuSelectionManager} manager   the <code>MenuSelectionManager</code>
         */
        processKeyEvent(e: java.awt.event.KeyEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void;
        /**
         * Handles a keystroke in a menu.
         *
         * @param {javax.swing.event.MenuKeyEvent} e  a <code>MenuKeyEvent</code> object
         */
        processMenuKeyEvent(e: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for
         * notification on this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event a <code>MenuKeyEvent</code>
         * @see EventListenerList
         */
        fireMenuKeyPressed(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for
         * notification on this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event a <code>MenuKeyEvent</code>
         * @see EventListenerList
         */
        fireMenuKeyReleased(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for
         * notification on this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event a <code>MenuKeyEvent</code>
         * @see EventListenerList
         */
        fireMenuKeyTyped(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Called by the <code>MenuSelectionManager</code> when the
         * <code>MenuElement</code> is selected or unselected.
         *
         * @param {boolean} isIncluded  true if this menu item is on the part of the menu
         * path that changed, false if this menu is part of the
         * a menu path that changed, but this particular part of
         * that path is still the same
         * @see MenuSelectionManager#setSelectedPath(MenuElement[])
         */
        menuSelectionChanged(isIncluded: boolean): void;
        /**
         * This method returns an array containing the sub-menu
         * components for this menu component.
         *
         * @return {javax.swing.MenuElement[]} an array of <code>MenuElement</code>s
         */
        getSubElements(): javax.swing.MenuElement[];
        getComponent(n?: any): java.awt.Component;
        getComponent$(): java.awt.Component;
        /**
         * Adds a <code>MenuKeyListener</code> to the menu item.
         *
         * @param {*} l the <code>MenuKeyListener</code> to be added
         */
        addMenuKeyListener(l: javax.swing.event.MenuKeyListener): void;
        /**
         * Removes a <code>MenuKeyListener</code> from the menu item.
         *
         * @param {*} l the <code>MenuKeyListener</code> to be removed
         */
        removeMenuKeyListener(l: javax.swing.event.MenuKeyListener): void;
        /**
         * Returns an array of all the <code>MenuKeyListener</code>s added
         * to this JMenuItem with addMenuKeyListener().
         *
         * @return {javax.swing.event.MenuKeyListener[]} all of the <code>MenuKeyListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getMenuKeyListeners(): javax.swing.event.MenuKeyListener[];
        /**
         * Returns a string representation of this <code>JMenuItem</code>.
         * This method is intended to be used only for debugging purposes,
         * and the content and format of the returned string may vary between
         * implementations. The returned string may be empty but may not
         * be <code>null</code>.
         *
         * @return  {string} a string representation of this <code>JMenuItem</code>
         */
        paramString(): string;
    }
    namespace JMenuItem {
        class MenuItemFocusListener implements java.awt.event.FocusListener, java.io.Serializable {
            focusGained(event: java.awt.event.FocusEvent): void;
            focusLost(event: java.awt.event.FocusEvent): void;
            constructor();
        }
    }
}
declare namespace javax.swing {
    class JButton extends javax.swing.AbstractButton {
        actionListeners: Array<java.awt.event.ActionListener>;
        actionCommand: string;
        label: string;
        background: java.awt.Color;
        icon: javax.swing.ImageIcon;
        constructor(label?: any, icon?: any);
        /**
         *
         * @return {HTMLButtonElement}
         */
        getHTMLElement(): HTMLButtonElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        initActionListener(): void;
        addActionListener(actionListener: java.awt.event.ActionListener): void;
        removeActionListener(actionListener: java.awt.event.ActionListener): void;
        setBackground(background: java.awt.Color): void;
    }
}
declare namespace javax.swing {
    class JToggleButton extends javax.swing.AbstractButton {
        static serialVersionUID: number;
        constructor(text?: any, icon?: any, selected?: any);
        paramString(): string;
        buttonCreated: boolean;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
    }
    namespace JToggleButton {
        /**
         * Creates a new ToggleButton Model
         * @class
         * @extends javax.swing.DefaultButtonModel
         */
        class ToggleButtonModel extends javax.swing.DefaultButtonModel {
            constructor();
            /**
             * Checks if the button is selected.
             * @return {boolean}
             */
            isSelected(): boolean;
            /**
             * Sets the selected state of the button.
             *
             * @param {boolean} b
             * true selects the toggle button, false deselects the toggle
             * button.
             */
            setSelected(b: boolean): void;
            /**
             * Sets the pressed state of the toggle button.
             * @param {boolean} b
             */
            setPressed(b: boolean): void;
        }
    }
}
declare namespace javax.swing {
    class JTextField extends javax.swing.text.JTextComponent implements javax.swing.SwingConstants {
        /**
         *
         * @return {HTMLInputElement}
         */
        getHTMLElement(): HTMLInputElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        initActionListeners(): void;
        constructor(doc?: any, text?: any, columns?: any);
        /**
         *
         * @param {string} text
         */
        setText(text: string): void;
        /**
         *
         * @param {boolean} editable
         */
        setEditable(editable: boolean): void;
        /**
         * Gets the class ID for a UI.
         *
         * @return {string} the string "TextFieldUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        /**
         * Returns the horizontal alignment of the text. Valid keys are:
         * <ul>
         * <li><code>JTextField.LEFT</code>
         * <li><code>JTextField.CENTER</code>
         * <li><code>JTextField.RIGHT</code>
         * <li><code>JTextField.LEADING</code>
         * <li><code>JTextField.TRAILING</code>
         * </ul>
         *
         * @return {number} the horizontal alignment
         */
        getHorizontalAlignment(): number;
        setHorizontalAlignment(alignment: number): void;
        /**
         * Returns the number of columns in this <code>TextField</code>.
         *
         * @return {number} the number of columns &gt;= 0
         */
        getColumns(): number;
        /**
         * Sets the number of columns in this <code>TextField</code>, and then
         * invalidate the layout.
         *
         * @param {number} columns
         * the number of columns &gt;= 0
         * @exception IllegalArgumentException
         * if <code>columns</code> is less than 0
         * @beaninfo description: the number of columns preferred for display
         */
        setColumns(columns: number): void;
        /**
         * Returns the preferred size <code>Dimensions</code> needed for this
         * <code>TextField</code>. If a non-zero number of columns has been set, the
         * width is set to the columns multiplied by the column width.
         *
         * @return {java.awt.Dimension} the dimension of this textfield
         */
        getPreferredSize(): java.awt.Dimension;
        /**
         * Sets the current font. This removes cached row height and column width so
         * the new font will be reflected. <code>revalidate</code> is called after
         * setting the font.
         *
         * @param {java.awt.Font} f
         * the new font
         */
        setFont(f: java.awt.Font): void;
        /**
         * Adds the specified action listener to receive action events from this
         * textfield.
         *
         * @param {*} l
         * the action listener to be added
         */
        addActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Removes the specified action listener so that it no longer receives
         * action events from this textfield.
         *
         * @param {*} l
         * the action listener to be removed
         */
        removeActionListener(l: java.awt.event.ActionListener): void;
        /**
         * Returns an array of all the <code>ActionListener</code>s added to this
         * JTextField with addActionListener().
         *
         * @return {java.awt.event.ActionListener[]} all of the <code>ActionListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.4
         */
        getActionListeners(): java.awt.event.ActionListener[];
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is lazily created. The listener list
         * is processed in last to first order.
         *
         * @see EventListenerList
         */
        fireActionPerformed(): void;
        setActionCommand(command: string): void;
        action: javax.swing.Action;
        actionPropertyChangeListener: java.beans.PropertyChangeListener;
        setAction(a: javax.swing.Action): void;
        isListener$java_lang_Class$java_awt_event_ActionListener(c: any, a: java.awt.event.ActionListener): boolean;
        isListener(c?: any, a?: any): boolean;
        isListener$java_lang_String$java_awt_event_ActionListener(c: string, a: java.awt.event.ActionListener): boolean;
        getAction(): javax.swing.Action;
        configurePropertiesFromAction(a: javax.swing.Action): void;
        actionPropertyChanged(action: javax.swing.Action, propertyName: string): void;
        setActionCommandFromAction(action: javax.swing.Action): void;
        createActionPropertyChangeListener(a: javax.swing.Action): java.beans.PropertyChangeListener;
        /**
         * Fetches the command list for the editor. This is the list of commands
         * supported by the plugged-in UI augmented by the collection of commands
         * that the editor itself supports. These are useful for binding to events,
         * such as in a keymap.
         *
         * @return {javax.swing.Action[]} the command list
         */
        getActions(): javax.swing.Action[];
        /**
         * Processes action events occurring on this textfield by dispatching them
         * to any registered <code>ActionListener</code> objects. This is normally
         * called by the controller registered with textfield.
         */
        postActionEvent(): void;
        /**
         * Returns true if the receiver has an <code>ActionListener</code>
         * installed.
         * @return {boolean}
         */
        hasActionListener(): boolean;
        /**
         * Name of the action to send notification that the contents of the field
         * have been accepted. Typically this is bound to a carriage-return.
         */
        static notifyAction: string;
        horizontalAlignment: number;
        columns: number;
        columnWidth: number;
        command: string;
        static defaultActions: javax.swing.Action[];
        static defaultActions_$LI$(): javax.swing.Action[];
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        /**
         * Returns a string representation of this <code>JTextField</code>. This
         * method is intended to be used only for debugging purposes, and the
         * content and format of the returned string may vary between
         * implementations. The returned string may be empty but may not be
         * <code>null</code>.
         *
         * @return {string} a string representation of this <code>JTextField</code>
         */
        paramString(): string;
    }
    namespace JTextField {
        class TextFieldActionPropertyChangeListener extends javax.swing.ActionPropertyChangeListener<javax.swing.JTextField> {
            constructor(tf: javax.swing.JTextField, a: javax.swing.Action);
            actionPropertyChanged$javax_swing_JTextField$javax_swing_Action$java_beans_PropertyChangeEvent(textField: javax.swing.JTextField, action: javax.swing.Action, e: java.beans.PropertyChangeEvent): void;
            actionPropertyChanged(textField?: any, action?: any, e?: any): any;
        }
    }
}
declare namespace javax.swing {
    class JTextArea extends javax.swing.text.JTextComponent {
        rows: number;
        columns: number;
        columnWidth: number;
        rowHeight: number;
        wrap: boolean;
        word: boolean;
        /**
         *
         * @return {HTMLDivElement}
         */
        getHTMLElement(): HTMLDivElement;
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        static uiClassID: string;
        constructor(doc?: any, text?: any, rows?: any, columns?: any);
        getUIClassID(): string;
        setLineWrap(wrap: boolean): void;
        getLineWrap(): boolean;
        setWrapStyleWord(word: boolean): void;
        getWrapStyleWord(): boolean;
        insert(str: string, pos: number): void;
        append(str: string): void;
        setText(text: string): void;
        /**
         *
         * @param {boolean} editable
         */
        setEditable(editable: boolean): void;
        replaceRange(str: string, start: number, end: number): void;
        getRows(): number;
        setRows(rows: number): void;
        getColumns(): number;
        setColumns(columns: number): void;
        paramString(): string;
    }
}
declare namespace java.awt.event {
    /**
     * Constructs a <code>MouseWheelEvent</code> object with the specified
     * source component, type, modifiers, coordinates, absolute coordinates,
     * scroll type, scroll amount, and wheel rotation.
     * <p>Note that passing in an invalid <code>id</code> parameter results
     * in unspecified behavior. This method throws an
     * <code>IllegalArgumentException</code> if <code>source</code> equals
     * <code>null</code>.
     * <p>Even if inconsistent values for relative and absolute coordinates
     * are passed to the constructor, a <code>MouseWheelEvent</code> instance
     * is still created and no exception is thrown.
     *
     * @param {java.awt.Component} source         the <code>Component</code> that originated the event
     * @param {number} id             the integer value that identifies the event
     * @param {number} when           a long value that gives the time when the event occurred
     * @param {number} modifiers      the modifier keys down during event
     * (shift, ctrl, alt, meta)
     * @param {number} x              the horizontal <code>x</code> coordinate for the
     * mouse location
     * @param {number} y              the vertical <code>y</code> coordinate for the
     * mouse location
     * @param {number} xAbs           the absolute horizontal <code>x</code> coordinate for
     * the mouse location
     * @param {number} yAbs           the absolute vertical <code>y</code> coordinate for
     * the mouse location
     * @param {number} clickCount     the number of mouse clicks associated with the event
     * @param {boolean} popupTrigger   a boolean value, <code>true</code> if this event is a trigger
     * for a popup-menu
     * @param {number} scrollType     the type of scrolling which should take place in
     * response to this event;  valid values are
     * <code>WHEEL_UNIT_SCROLL</code> and
     * <code>WHEEL_BLOCK_SCROLL</code>
     * @param  {number} scrollAmount  for scrollType <code>WHEEL_UNIT_SCROLL</code>,
     * the number of units to be scrolled
     * @param {number} wheelRotation  the integer number of "clicks" by which the mouse wheel
     * was rotated
     * @param {number} preciseWheelRotation the double number of "clicks" by which the mouse wheel
     * was rotated
     *
     * @throws IllegalArgumentException if <code>source</code> is null
     * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, boolean)
     * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, int, int, boolean, int)
     * @since 1.7
     * @class
     * @extends java.awt.event.MouseEvent
     * @author Brent Christian
     */
    class MouseWheelEvent extends java.awt.event.MouseEvent {
        /**
         * Constant representing scrolling by "units" (like scrolling with the
         * arrow keys)
         *
         * @see #getScrollType
         */
        static WHEEL_UNIT_SCROLL: number;
        /**
         * Constant representing scrolling by a "block" (like scrolling
         * with page-up, page-down keys)
         *
         * @see #getScrollType
         */
        static WHEEL_BLOCK_SCROLL: number;
        /**
         * Indicates what sort of scrolling should take place in response to this
         * event, based on platform settings.  Legal values are:
         * <ul>
         * <li> WHEEL_UNIT_SCROLL
         * <li> WHEEL_BLOCK_SCROLL
         * </ul>
         *
         * @see #getScrollType
         */
        scrollType: number;
        /**
         * Only valid for scrollType WHEEL_UNIT_SCROLL.
         * Indicates number of units that should be scrolled per
         * click of mouse wheel rotation, based on platform settings.
         *
         * @see #getScrollAmount
         * @see #getScrollType
         */
        scrollAmount: number;
        /**
         * Indicates how far the mouse wheel was rotated.
         *
         * @see #getWheelRotation
         */
        wheelRotation: number;
        /**
         * Indicates how far the mouse wheel was rotated.
         *
         * @see #getPreciseWheelRotation
         */
        preciseWheelRotation: number;
        static __java_awt_event_MouseWheelEvent_serialVersionUID: number;
        constructor(source?: any, id?: any, when?: any, modifiers?: any, x?: any, y?: any, xAbs?: any, yAbs?: any, clickCount?: any, popupTrigger?: any, scrollType?: any, scrollAmount?: any, wheelRotation?: any, preciseWheelRotation?: any);
        /**
         * Returns the type of scrolling that should take place in response to this
         * event.  This is determined by the native platform.  Legal values are:
         * <ul>
         * <li> MouseWheelEvent.WHEEL_UNIT_SCROLL
         * <li> MouseWheelEvent.WHEEL_BLOCK_SCROLL
         * </ul>
         *
         * @return {number} either MouseWheelEvent.WHEEL_UNIT_SCROLL or
         * MouseWheelEvent.WHEEL_BLOCK_SCROLL, depending on the configuration of
         * the native platform.
         * @see java.awt.Adjustable#getUnitIncrement
         * @see java.awt.Adjustable#getBlockIncrement
         * @see javax.swing.Scrollable#getScrollableUnitIncrement
         * @see javax.swing.Scrollable#getScrollableBlockIncrement
         */
        getScrollType(): number;
        /**
         * Returns the number of units that should be scrolled per
         * click of mouse wheel rotation.
         * Only valid if <code>getScrollType</code> returns
         * <code>MouseWheelEvent.WHEEL_UNIT_SCROLL</code>
         *
         * @return {number} number of units to scroll, or an undefined value if
         * <code>getScrollType</code> returns
         * <code>MouseWheelEvent.WHEEL_BLOCK_SCROLL</code>
         * @see #getScrollType
         */
        getScrollAmount(): number;
        /**
         * Returns the number of "clicks" the mouse wheel was rotated, as an integer.
         * A partial rotation may occur if the mouse supports a high-resolution wheel.
         * In this case, the method returns zero until a full "click" has been accumulated.
         *
         * @return {number} negative values if the mouse wheel was rotated up/away from
         * the user, and positive values if the mouse wheel was rotated down/
         * towards the user
         * @see #getPreciseWheelRotation
         */
        getWheelRotation(): number;
        /**
         * Returns the number of "clicks" the mouse wheel was rotated, as a double.
         * A partial rotation may occur if the mouse supports a high-resolution wheel.
         * In this case, the return value will include a fractional "click".
         *
         * @return {number} negative values if the mouse wheel was rotated up or away from
         * the user, and positive values if the mouse wheel was rotated down or
         * towards the user
         * @see #getWheelRotation
         * @since 1.7
         */
        getPreciseWheelRotation(): number;
        /**
         * This is a convenience method to aid in the implementation of
         * the common-case MouseWheelListener - to scroll a ScrollPane or
         * JScrollPane by an amount which conforms to the platform settings.
         * (Note, however, that <code>ScrollPane</code> and
         * <code>JScrollPane</code> already have this functionality built in.)
         * <P>
         * This method returns the number of units to scroll when scroll type is
         * MouseWheelEvent.WHEEL_UNIT_SCROLL, and should only be called if
         * <code>getScrollType</code> returns MouseWheelEvent.WHEEL_UNIT_SCROLL.
         * <P>
         * Direction of scroll, amount of wheel movement,
         * and platform settings for wheel scrolling are all accounted for.
         * This method does not and cannot take into account value of the
         * Adjustable/Scrollable unit increment, as this will vary among
         * scrolling components.
         * <P>
         * A simplified example of how this method might be used in a
         * listener:
         * <pre>
         * mouseWheelMoved(MouseWheelEvent event) {
         * ScrollPane sp = getScrollPaneFromSomewhere();
         * Adjustable adj = sp.getVAdjustable()
         * if (MouseWheelEvent.getScrollType() == WHEEL_UNIT_SCROLL) {
         * int totalScrollAmount =
         * event.getUnitsToScroll() *
         * adj.getUnitIncrement();
         * adj.setValue(adj.getValue() + totalScrollAmount);
         * }
         * }
         * </pre>
         *
         * @return {number} the number of units to scroll based on the direction and amount
         * of mouse wheel rotation, and on the wheel scrolling settings of the
         * native platform
         * @see #getScrollType
         * @see #getScrollAmount
         * @see MouseWheelListener
         * @see java.awt.Adjustable
         * @see java.awt.Adjustable#getUnitIncrement
         * @see javax.swing.Scrollable
         * @see javax.swing.Scrollable#getScrollableUnitIncrement
         * @see java.awt.ScrollPane
         * @see java.awt.ScrollPane#setWheelScrollingEnabled
         * @see javax.swing.JScrollPane
         * @see javax.swing.JScrollPane#setWheelScrollingEnabled
         */
        getUnitsToScroll(): number;
        /**
         * Returns a parameter string identifying this event.
         * This method is useful for event-logging and for debugging.
         *
         * @return {string} a string identifying the event and its attributes
         */
        paramString(): string;
    }
}
declare namespace sun.awt {
    class ExtendedKeyCodes {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * ATTN: These are the readonly hashes with load factor == 1;
         * adding a value, please set the inital capacity to exact number of items
         * or higher.
         */
        static regularKeyCodesMap: java.util.HashMap<number, number>;
        static regularKeyCodesMap_$LI$(): java.util.HashMap<number, number>;
        static extendedKeyCodesSet: java.util.HashSet<number>;
        static extendedKeyCodesSet_$LI$(): java.util.HashSet<number>;
        static getExtendedKeyCodeForChar(c: number): number;
        static __static_initializer_0(): void;
    }
}
declare namespace javax.swing.event {
    /**
     * Constructs a MenuKeyEvent object.
     *
     * @param {java.awt.Component} source     the Component that originated the event
     * (typically <code>this</code>)
     * @param {number} id         an int specifying the type of event, as defined
     * in {@link java.awt.event.KeyEvent}
     * @param {number} when       a long identifying the time the event occurred
     * @param {number} modifiers     an int specifying any modifier keys held down,
     * as specified in {@link java.awt.event.InputEvent}
     * @param {number} keyCode    an int specifying the specific key that was pressed
     * @param {string} keyChar    a char specifying the key's character value, if any
     * -- null if the key has no character value
     * @param {javax.swing.MenuElement[]} p          an array of MenuElement objects specifying a path
     * to a menu item affected by the drag
     * @param {javax.swing.MenuSelectionManager} m          a MenuSelectionManager object that handles selections
     * @class
     * @extends java.awt.event.KeyEvent
     * @author Georges Saab
     */
    class MenuKeyEvent extends java.awt.event.KeyEvent {
        path: javax.swing.MenuElement[];
        manager: javax.swing.MenuSelectionManager;
        constructor(source: java.awt.Component, id: number, when: number, modifiers: number, keyCode: number, keyChar: string, p: javax.swing.MenuElement[], m: javax.swing.MenuSelectionManager);
        /**
         * Returns the path to the menu item referenced by this event.
         *
         * @return {javax.swing.MenuElement[]} an array of MenuElement objects representing the path value
         */
        getPath(): javax.swing.MenuElement[];
        /**
         * Returns the current menu selection manager.
         *
         * @return {javax.swing.MenuSelectionManager} a MenuSelectionManager object
         */
        getMenuSelectionManager(): javax.swing.MenuSelectionManager;
    }
}
declare namespace javax.swing {
    /**
     * Constructs a <code>JPopupMenu</code> with the specified title.
     *
     * @param {string} label
     * the string that a UI may use to display as a title for the
     * popup menu.
     * @class
     * @extends javax.swing.JComponent
     * @author Georges Saab
     */
    class JPopupMenu extends javax.swing.JComponent implements javax.swing.MenuElement {
        /**
         *
         */
        createHTML(): void;
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static uiClassID: string;
        invoker: java.awt.Component;
        frame: java.awt.Frame;
        desiredLocationX: number;
        desiredLocationY: number;
        label: string;
        paintBorder: boolean;
        margin: java.awt.Insets;
        selectionModel: javax.swing.SingleSelectionModel;
        static classLock: any;
        static classLock_$LI$(): any;
        static TRACE: boolean;
        static VERBOSE: boolean;
        static DEBUG: boolean;
        constructor(label?: any);
        /**
         * Returns the name of the L&amp;F class that renders this component.
         *
         * @return {string} the string "PopupMenuUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        /**
         * Returns the model object that handles single selections.
         *
         * @return {*} the <code>selectionModel</code> property
         * @see SingleSelectionModel
         */
        getSelectionModel(): javax.swing.SingleSelectionModel;
        /**
         * Sets the model object to handle single selections.
         *
         * @param {*} model
         * the new <code>SingleSelectionModel</code>
         * @see SingleSelectionModel
         * @beaninfo description: The selection model for the popup menu expert:
         * true
         */
        setSelectionModel(model: javax.swing.SingleSelectionModel): void;
        add(component?: any, constraints?: any, index?: any): any;
        add$javax_swing_JMenuItem(menuItem: javax.swing.JMenuItem): javax.swing.JMenuItem;
        add$java_lang_String(s: string): javax.swing.JMenuItem;
        add$javax_swing_Action(a: javax.swing.Action): javax.swing.JMenuItem;
        /**
         * Factory method which creates the <code>JMenuItem</code> for
         * <code>Actions</code> added to the <code>JPopupMenu</code>.
         *
         * @param {*} a
         * the <code>Action</code> for the menu item to be added
         * @return {javax.swing.JMenuItem} the new menu item
         * @see Action
         *
         * @since 1.3
         */
        createActionComponent(a: javax.swing.Action): javax.swing.JMenuItem;
        /**
         * Returns a properly configured <code>PropertyChangeListener</code> which
         * updates the control as changes to the <code>Action</code> occur.
         * @param {javax.swing.JMenuItem} b
         * @return {*}
         */
        createActionChangeListener(b: javax.swing.JMenuItem): java.beans.PropertyChangeListener;
        remove(comp?: any): any;
        remove$int(pos: number): void;
        /**
         * Returns the popup menu's label
         *
         * @return {string} a string containing the popup menu's label
         * @see #setLabel
         */
        getLabel(): string;
        /**
         * Sets the popup menu's label. Different look and feels may choose to
         * display or not display this.
         *
         * @param {string} label
         * a string specifying the label for the popup menu
         *
         * @see #setLabel
         * @beaninfo description: The label for the popup menu. bound: true
         */
        setLabel(label: string): void;
        /**
         * Appends a new separator at the end of the menu.
         */
        addSeparator(): void;
        insert$javax_swing_Action$int(a: javax.swing.Action, index: number): void;
        /**
         * Inserts a menu item for the specified <code>Action</code> object at a
         * given position.
         *
         * @param {*} a
         * the <code>Action</code> object to insert
         * @param {number} index
         * specifies the position at which to insert the
         * <code>Action</code>, where 0 is the first
         * @exception IllegalArgumentException
         * if <code>index</code> &lt; 0
         * @see Action
         */
        insert(a?: any, index?: any): any;
        insert$java_awt_Component$int(component: java.awt.Component, index: number): void;
        /**
         * Adds a <code>PopupMenu</code> listener.
         *
         * @param {*} l
         * the <code>PopupMenuListener</code> to add
         */
        addPopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
        /**
         * Removes a <code>PopupMenu</code> listener.
         *
         * @param {*} l
         * the <code>PopupMenuListener</code> to remove
         */
        removePopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
        /**
         * Returns an array of all the <code>PopupMenuListener</code>s added to this
         * JMenuItem with addPopupMenuListener().
         *
         * @return {javax.swing.event.PopupMenuListener[]} all of the <code>PopupMenuListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getPopupMenuListeners(): javax.swing.event.PopupMenuListener[];
        /**
         * Adds a <code>MenuKeyListener</code> to the popup menu.
         *
         * @param {*} l
         * the <code>MenuKeyListener</code> to be added
         * @since 1.5
         */
        addMenuKeyListener(l: javax.swing.event.MenuKeyListener): void;
        /**
         * Removes a <code>MenuKeyListener</code> from the popup menu.
         *
         * @param {*} l
         * the <code>MenuKeyListener</code> to be removed
         * @since 1.5
         */
        removeMenuKeyListener(l: javax.swing.event.MenuKeyListener): void;
        /**
         * Returns an array of all the <code>MenuKeyListener</code>s added to this
         * JPopupMenu with addMenuKeyListener().
         *
         * @return {javax.swing.event.MenuKeyListener[]} all of the <code>MenuKeyListener</code>s added or an empty array
         * if no listeners have been added
         * @since 1.5
         */
        getMenuKeyListeners(): javax.swing.event.MenuKeyListener[];
        /**
         * Notifies <code>PopupMenuListener</code>s that this popup menu will become
         * visible.
         */
        firePopupMenuWillBecomeVisible(): void;
        /**
         * Notifies <code>PopupMenuListener</code>s that this popup menu will become
         * invisible.
         */
        firePopupMenuWillBecomeInvisible(): void;
        /**
         * Notifies <code>PopupMenuListeners</code> that this popup menu is
         * cancelled.
         */
        firePopupMenuCanceled(): void;
        pack(): void;
        /**
         * Retrieves <code>Popup</code> instance from the <code>PopupMenuUI</code>
         * that has had <code>show</code> invoked on it. If the current
         * <code>popup</code> is non-null, this will invoke <code>dispose</code> of
         * it, and then <code>show</code> the new one.
         * <p>
         * This does NOT fire any events, it is up the caller to dispatch the
         * necessary events.
         * @private
         */
        showPopup(): void;
        setLocation$int$int(x: number, y: number): void;
        /**
         * Sets the location of the upper left corner of the popup menu using x, y
         * coordinates.
         * <p>
         * The method changes the geometry-related data. Therefore, the native
         * windowing system may ignore such requests, or it may modify the requested
         * data, so that the {@code JPopupMenu} object is placed and sized in a way
         * that corresponds closely to the desktop settings.
         *
         * @param {number} x
         * the x coordinate of the popup's new position in the screen's
         * coordinate space
         * @param {number} y
         * the y coordinate of the popup's new position in the screen's
         * coordinate space
         * @beaninfo description: The location of the popup menu.
         */
        setLocation(x?: any, y?: any): any;
        /**
         * Returns true if the popup menu is a standalone popup menu rather than the
         * submenu of a <code>JMenu</code>.
         *
         * @return {boolean} true if this menu is a standalone popup menu, otherwise false
         * @private
         */
        isPopupMenu(): boolean;
        /**
         * Returns the component which is the 'invoker' of this popup menu.
         *
         * @return {java.awt.Component} the <code>Component</code> in which the popup menu is displayed
         */
        getInvoker(): java.awt.Component;
        /**
         * Returns the component at the specified index.
         *
         * @param {number} i
         * the index of the component, where 0 is the first
         * @return {java.awt.Component} the <code>Component</code> at that index
         * @deprecated replaced by {@link java.awt.Container#getComponent(int)}
         */
        getComponentAtIndex(i: number): java.awt.Component;
        /**
         * Returns the index of the specified component.
         *
         * @param {java.awt.Component} c
         * the <code>Component</code> to find
         * @return {number} the index of the component, where 0 is the first; or -1 if the
         * component is not found
         */
        getComponentIndex(c: java.awt.Component): number;
        /**
         * Sets the currently selected component, This will result in a change to
         * the selection model.
         *
         * @param {java.awt.Component} sel
         * the <code>Component</code> to select
         * @beaninfo description: The selected component on the popup menu expert:
         * true hidden: true
         */
        setSelected(sel: java.awt.Component): void;
        /**
         * Checks whether the border should be painted.
         *
         * @return {boolean} true if the border is painted, false otherwise
         * @see #setBorderPainted
         */
        isBorderPainted(): boolean;
        /**
         * Sets whether the border should be painted.
         *
         * @param {boolean} b
         * if true, the border is painted.
         * @see #isBorderPainted
         * @beaninfo description: Is the border of the popup menu painted
         */
        setBorderPainted(b: boolean): void;
        /**
         * Returns the margin, in pixels, between the popup menu's border and its
         * containers.
         *
         * @return {java.awt.Insets} an <code>Insets</code> object containing the margin values.
         */
        getMargin(): java.awt.Insets;
        /**
         * Examines the list of menu items to determine whether <code>popup</code>
         * is a popup menu.
         *
         * @param {javax.swing.JPopupMenu} popup
         * a <code>JPopupMenu</code>
         * @return {boolean} true if <code>popup</code>
         */
        isSubPopupMenu(popup: JPopupMenu): boolean;
        static getFrame(c: java.awt.Component): java.awt.Frame;
        /**
         * Returns a string representation of this <code>JPopupMenu</code>. This
         * method is intended to be used only for debugging purposes, and the
         * content and format of the returned string may vary between
         * implementations. The returned string may be empty but may not be
         * <code>null</code>.
         *
         * @return {string} a string representation of this <code>JPopupMenu</code>.
         */
        paramString(): string;
        /**
         * This method is required to conform to the <code>MenuElement</code>
         * interface, but it not implemented.
         *
         * @see MenuElement#processMouseEvent(MouseEvent, MenuElement[],
         * MenuSelectionManager)
         * @param {java.awt.event.MouseEvent} event
         * @param {javax.swing.MenuElement[]} path
         * @param {javax.swing.MenuSelectionManager} manager
         */
        processMouseEvent(event: java.awt.event.MouseEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void;
        /**
         * Processes a key event forwarded from the
         * <code>MenuSelectionManager</code> and changes the menu selection, if
         * necessary, by using <code>MenuSelectionManager</code>'s API.
         * <p>
         * Note: you do not have to forward the event to sub-components. This is
         * done automatically by the <code>MenuSelectionManager</code>.
         *
         * @param {java.awt.event.KeyEvent} e
         * a <code>KeyEvent</code>
         * @param {javax.swing.MenuElement[]} path
         * the <code>MenuElement</code> path array
         * @param {javax.swing.MenuSelectionManager} manager
         * the <code>MenuSelectionManager</code>
         */
        processKeyEvent(e: java.awt.event.KeyEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void;
        /**
         * Handles a keystroke in a menu.
         *
         * @param {javax.swing.event.MenuKeyEvent} e
         * a <code>MenuKeyEvent</code> object
         * @since 1.5
         * @private
         */
        processMenuKeyEvent(e: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event
         * a <code>MenuKeyEvent</code>
         * @see EventListenerList
         * @private
         */
        fireMenuKeyPressed(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event
         * a <code>MenuKeyEvent</code>
         * @see EventListenerList
         * @private
         */
        fireMenuKeyReleased(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type.
         *
         * @param {javax.swing.event.MenuKeyEvent} event
         * a <code>MenuKeyEvent</code>
         * @see EventListenerList
         * @private
         */
        fireMenuKeyTyped(event: javax.swing.event.MenuKeyEvent): void;
        /**
         * Messaged when the menubar selection changes to activate or deactivate
         * this menu. This implements the <code>javax.swing.MenuElement</code>
         * interface. Overrides <code>MenuElement.menuSelectionChanged</code>.
         *
         * @param {boolean} isIncluded
         * true if this menu is active, false if it is not
         * @see MenuElement#menuSelectionChanged(boolean)
         */
        menuSelectionChanged(isIncluded: boolean): void;
        /**
         * Returns an array of <code>MenuElement</code>s containing the submenu for
         * this menu component. It will only return items conforming to the
         * <code>JMenuElement</code> interface. If popup menu is <code>null</code>
         * returns an empty array. This method is required to conform to the
         * <code>MenuElement</code> interface.
         *
         * @return {javax.swing.MenuElement[]} an array of <code>MenuElement</code> objects
         * @see MenuElement#getSubElements
         */
        getSubElements(): javax.swing.MenuElement[];
        getComponent(n?: any): java.awt.Component;
        getComponent$(): java.awt.Component;
    }
    namespace JPopupMenu {
        /**
         * A popup menu-specific separator.
         * @class
         * @extends javax.swing.JSeparator
         */
        class Separator extends javax.swing.JSeparator {
            constructor();
            /**
             * Returns the name of the L&amp;F class that renders this component.
             *
             * @return {string} the string "PopupMenuSeparatorUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            getUIClassID(): string;
        }
    }
}
declare namespace javax.swing {
    /**
     * Constructs a new <code>JMenu</code> with the supplied string as its text
     * and specified as a tear-off menu or not.
     *
     * @param {string} s
     * the text for the menu label
     * @param {boolean} b
     * can the menu be torn off (not yet implemented)
     * @class
     * @extends javax.swing.JMenuItem
     * @author Georges Saab
     */
    class JMenu extends javax.swing.JMenuItem implements javax.swing.MenuElement {
        /**
         * @see #getUIClassID
         * @see #readObject
         */
        static __javax_swing_JMenu_uiClassID: string;
        popupMenu: javax.swing.JPopupMenu;
        menuChangeListener: javax.swing.event.ChangeListener;
        menuEvent: javax.swing.event.MenuEvent;
        delay: number;
        static __javax_swing_JMenu_DEBUG: boolean;
        constructor(s?: any, b?: any);
        /**
         * Overriden to do nothing. We want JMenu to be focusable, but
         * <code>JMenuItem</code> doesn't want to be, thus we override this do
         * nothing. We don't invoke <code>setFocusable(true)</code> after super's
         * constructor has completed as this has the side effect that
         * <code>JMenu</code> will be considered traversable via the keyboard, which
         * we don't want. Making a Component traversable by the keyboard after
         * invoking <code>setFocusable(true)</code> is OK, as
         * <code>setFocusable</code> is new API and is speced as such, but
         * internally we don't want to use it like this else we change the keyboard
         * traversability.
         */
        initFocusability(): void;
        /**
         * Returns the name of the L&amp;F class that renders this component.
         *
         * @return {string} the string "MenuUI"
         * @see JComponent#getUIClassID
         * @see UIDefaults#getUI
         */
        getUIClassID(): string;
        /**
         * Sets the data model for the "menu button" -- the label that the user
         * clicks to open or close the menu.
         *
         * @param {*} newModel
         * the <code>ButtonModel</code>
         * @see #getModel
         * @beaninfo description: The menu's model bound: true expert: true hidden:
         * true
         */
        setModel(newModel: javax.swing.ButtonModel): void;
        /**
         * Returns true if the menu is currently selected (highlighted).
         *
         * @return {boolean} true if the menu is selected, else false
         */
        isSelected(): boolean;
        /**
         * Sets the selection status of the menu.
         *
         * @param {boolean} b
         * true to select (highlight) the menu; false to de-select the
         * menu
         * @beaninfo description: When the menu is selected, its popup child is
         * shown. expert: true hidden: true
         */
        setSelected(b: boolean): void;
        /**
         * Returns true if the menu's popup window is visible.
         *
         * @return {boolean} true if the menu is visible, else false
         */
        isPopupMenuVisible(): boolean;
        /**
         * Sets the visibility of the menu's popup. If the menu is not enabled, this
         * method will have no effect.
         *
         * @param {boolean} b
         * a boolean value -- true to make the menu visible, false to
         * hide it
         * @beaninfo description: The popup menu's visibility expert: true hidden:
         * true
         */
        setPopupMenuVisible(b: boolean): void;
        /**
         * Computes the origin for the <code>JMenu</code>'s popup menu. This method
         * uses Look and Feel properties named <code>Menu.menuPopupOffsetX</code>,
         * <code>Menu.menuPopupOffsetY</code>, <code>Menu.submenuPopupOffsetX</code>
         * , and <code>Menu.submenuPopupOffsetY</code> to adjust the exact location
         * of popup.
         *
         * @return {java.awt.Point} a <code>Point</code> in the coordinate space of the menu which
         * should be used as the origin of the <code>JMenu</code>'s popup
         * menu
         *
         * @since 1.3
         */
        getPopupMenuOrigin(): java.awt.Point;
        /**
         * Returns the suggested delay, in milliseconds, before submenus are popped
         * up or down. Each look and feel (L&amp;F) may determine its own policy for
         * observing the <code>delay</code> property. In most cases, the delay is
         * not observed for top level menus or while dragging. The default for
         * <code>delay</code> is 0. This method is a property of the look and feel
         * code and is used to manage the idiosyncrasies of the various UI
         * implementations.
         *
         *
         * @return {number} the <code>delay</code> property
         */
        getDelay(): number;
        /**
         * Sets the suggested delay before the menu's <code>PopupMenu</code> is
         * popped up or down. Each look and feel (L&amp;F) may determine it's own
         * policy for observing the delay property. In most cases, the delay is not
         * observed for top level menus or while dragging. This method is a property
         * of the look and feel code and is used to manage the idiosyncrasies of the
         * various UI implementations.
         *
         * @param {number} d
         * the number of milliseconds to delay
         * @exception IllegalArgumentException
         * if <code>d</code> is less than 0
         * @beaninfo description: The delay between menu selection and making the
         * popup menu visible expert: true
         */
        setDelay(d: number): void;
        ensurePopupMenuCreated(): void;
        /**
         * Sets the location of the popup component.
         *
         * @param {number} x
         * the x coordinate of the popup's new position
         * @param {number} y
         * the y coordinate of the popup's new position
         */
        setMenuLocation(x: number, y: number): void;
        add(component?: any, constraints?: any, index?: any): any;
        add$javax_swing_JMenuItem(menuItem: javax.swing.JMenuItem): javax.swing.JMenuItem;
        add$java_awt_Component(c: java.awt.Component): java.awt.Component;
        add$java_awt_Component$int(c: java.awt.Component, index: number): java.awt.Component;
        add$java_lang_String(s: string): javax.swing.JMenuItem;
        add$javax_swing_Action(a: javax.swing.Action): javax.swing.JMenuItem;
        /**
         * Factory method which creates the <code>JMenuItem</code> for
         * <code>Action</code>s added to the <code>JMenu</code>.
         *
         * @param {*} a
         * the <code>Action</code> for the menu item to be added
         * @return {javax.swing.JMenuItem} the new menu item
         * @see Action
         *
         * @since 1.3
         */
        createActionComponent(a: javax.swing.Action): javax.swing.JMenuItem;
        /**
         * Appends a new separator to the end of the menu.
         */
        addSeparator(): void;
        insert$java_lang_String$int(s: string, pos: number): void;
        /**
         * Inserts a new menu item with the specified text at a given position.
         *
         * @param {string} s
         * the text for the menu item to add
         * @param {number} pos
         * an integer specifying the position at which to add the new
         * menu item
         * @exception IllegalArgumentException
         * when the value of <code>pos</code> &lt; 0
         */
        insert(s?: any, pos?: any): any;
        insert$javax_swing_JMenuItem$int(mi: javax.swing.JMenuItem, pos: number): javax.swing.JMenuItem;
        insert$javax_swing_Action$int(a: javax.swing.Action, pos: number): javax.swing.JMenuItem;
        /**
         * Inserts a separator at the specified position.
         *
         * @param {number} index
         * an integer specifying the position at which to insert the menu
         * separator
         * @exception IllegalArgumentException
         * if the value of <code>index</code> &lt; 0
         */
        insertSeparator(index: number): void;
        /**
         * Returns the <code>JMenuItem</code> at the specified position. If the
         * component at <code>pos</code> is not a menu item, <code>null</code> is
         * returned. This method is included for AWT compatibility.
         *
         * @param {number} pos
         * an integer specifying the position
         * @exception IllegalArgumentException
         * if the value of <code>pos</code> &lt; 0
         * @return {javax.swing.JMenuItem} the menu item at the specified position; or <code>null</code> if
         * the item as the specified position is not a menu item
         */
        getItem(pos: number): javax.swing.JMenuItem;
        /**
         * Returns the number of items on the menu, including separators. This
         * method is included for AWT compatibility.
         *
         * @return {number} an integer equal to the number of items on the menu
         * @see #getMenuComponentCount
         */
        getItemCount(): number;
        /**
         * Returns true if the menu can be torn off. This method is not yet
         * implemented.
         *
         * @return {boolean} true if the menu can be torn off, else false
         * @exception Error
         * if invoked -- this method is not yet implemented
         */
        isTearOff(): boolean;
        remove$javax_swing_JMenuItem(item: javax.swing.JMenuItem): void;
        /**
         * Removes the specified menu item from this menu. If there is no popup
         * menu, this method will have no effect.
         *
         * @param {javax.swing.JMenuItem} item
         * the <code>JMenuItem</code> to be removed from the menu
         */
        remove(item?: any): any;
        remove$int(pos: number): void;
        remove$java_awt_Component(c: java.awt.Component): void;
        /**
         * Removes all menu items from this menu.
         */
        removeAll(): void;
        /**
         * Returns the number of components on the menu.
         *
         * @return {number} an integer containing the number of components on the menu
         */
        getMenuComponentCount(): number;
        /**
         * Returns the component at position <code>n</code>.
         *
         * @param {number} n
         * the position of the component to be returned
         * @return {java.awt.Component} the component requested, or <code>null</code> if there is no
         * popup menu
         */
        getMenuComponent(n: number): java.awt.Component;
        /**
         * Returns an array of <code>Component</code>s of the menu's subcomponents.
         * Note that this returns all <code>Component</code>s in the popup menu,
         * including separators.
         *
         * @return {java.awt.Component[]} an array of <code>Component</code>s or an empty array if there is
         * no popup menu
         */
        getMenuComponents(): java.awt.Component[];
        /**
         * Returns true if the menu is a 'top-level menu', that is, if it is the
         * direct child of a menubar.
         *
         * @return {boolean} true if the menu is activated from the menu bar; false if the
         * menu is activated from a menu item on another menu
         */
        isTopLevelMenu(): boolean;
        /**
         * Returns true if the specified component exists in the submenu hierarchy.
         *
         * @param {java.awt.Component} c
         * the <code>Component</code> to be tested
         * @return {boolean} true if the <code>Component</code> exists, false otherwise
         */
        isMenuComponent(c: java.awt.Component): boolean;
        /**
         * Returns the popupmenu associated with this menu. If there is no
         * popupmenu, it will create one.
         * @return {javax.swing.JPopupMenu}
         */
        getPopupMenu(): javax.swing.JPopupMenu;
        /**
         * Adds a listener for menu events.
         *
         * @param {*} l
         * the listener to be added
         */
        addMenuListener(l: javax.swing.event.MenuListener): void;
        /**
         * Removes a listener for menu events.
         *
         * @param {*} l
         * the listener to be removed
         */
        removeMenuListener(l: javax.swing.event.MenuListener): void;
        /**
         * Returns an array of all the <code>MenuListener</code>s added to this
         * JMenu with addMenuListener().
         *
         * @return {javax.swing.event.MenuListener[]} all of the <code>MenuListener</code>s added or an empty array if
         * no listeners have been added
         * @since 1.4
         */
        getMenuListeners(): javax.swing.event.MenuListener[];
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is created lazily.
         *
         * @exception Error
         * if there is a <code>null</code> listener
         * @see EventListenerList
         */
        fireMenuSelected(): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is created lazily.
         *
         * @exception Error
         * if there is a <code>null</code> listener
         * @see EventListenerList
         */
        fireMenuDeselected(): void;
        /**
         * Notifies all listeners that have registered interest for notification on
         * this event type. The event instance is created lazily.
         *
         * @exception Error
         * if there is a <code>null</code> listener
         * @see EventListenerList
         */
        fireMenuCanceled(): void;
        configureAcceleratorFromAction(a: javax.swing.Action): void;
        createMenuChangeListener(): javax.swing.event.ChangeListener;
        /**
         * Messaged when the menubar selection changes to activate or deactivate
         * this menu. Overrides <code>JMenuItem.menuSelectionChanged</code>.
         *
         * @param {boolean} isIncluded
         * true if this menu is active, false if it is not
         */
        menuSelectionChanged(isIncluded: boolean): void;
        /**
         * Returns an array of <code>MenuElement</code>s containing the submenu for
         * this menu component. If popup menu is <code>null</code> returns an empty
         * array. This method is required to conform to the <code>MenuElement</code>
         * interface. Note that since <code>JSeparator</code>s do not conform to the
         * <code>MenuElement</code> interface, this array will only contain
         * <code>JMenuItem</code>s.
         *
         * @return {javax.swing.MenuElement[]} an array of <code>MenuElement</code> objects
         */
        getSubElements(): javax.swing.MenuElement[];
        getComponent(n?: any): java.awt.Component;
        getComponent$(): java.awt.Component;
        /**
         * Processes a key event forwarded from the
         * <code>MenuSelectionManager</code> and changes the menu selection,
         * if necessary, by using <code>MenuSelectionManager</code>'s API.
         * <p>
         * Note: you do not have to forward the event to sub-components.
         * This is done automatically by the <code>MenuSelectionManager</code>.
         *
         * @param {java.awt.event.KeyEvent} e  a <code>KeyEvent</code>
         * @param {javax.swing.MenuElement[]} path the <code>MenuElement</code> path array
         * @param {javax.swing.MenuSelectionManager} manager   the <code>MenuSelectionManager</code>
         */
        processKeyEvent(e?: any, path?: any, manager?: any): any;
        processKeyEvent$java_awt_event_KeyEvent(evt: java.awt.event.KeyEvent): void;
        doClick$int(pressTime: number): void;
        /**
         * Programmatically performs a "click". This overrides the method
         * <code>AbstractButton.doClick</code> in order to make the menu pop up.
         *
         * @param {number} pressTime
         * indicates the number of milliseconds the button was pressed
         * for
         */
        doClick(pressTime?: any): any;
        /**
         * Returns a string representation of this <code>JMenu</code>. This method
         * is intended to be used only for debugging purposes, and the content and
         * format of the returned string may vary between implementations. The
         * returned string may be empty but may not be <code>null</code>.
         *
         * @return {string} a string representation of this JMenu.
         */
        paramString(): string;
    }
    namespace JMenu {
        class MenuChangeListener implements javax.swing.event.ChangeListener, java.io.Serializable {
            __parent: any;
            isSelected: boolean;
            stateChanged(e: javax.swing.event.ChangeEvent): void;
            constructor(__parent: any);
        }
    }
}
declare namespace javax.swing {
    class JCheckBox extends javax.swing.JToggleButton implements java.awt.ItemSelectable {
        label: string;
        state: boolean;
        itemListeners: Array<java.awt.event.ItemListener>;
        htmlCheckbox: HTMLInputElement;
        htmlLabel: Text;
        static base: string;
        static nameCounter: number;
        static __javax_swing_JCheckBox_serialVersionUID: number;
        constructor(label?: any, state?: any);
        /**
         *
         */
        createHTML(): void;
        /**
         *
         */
        initHTML(): void;
        constructComponentName(): string;
        getLabel(): string;
        setLabel(label: string): void;
        getState(): boolean;
        setStateInternal(state: boolean): void;
        setState(state: boolean): void;
        getSelectedObjects(): any[];
        addItemListener(l: java.awt.event.ItemListener): void;
        removeItemListener(l: java.awt.event.ItemListener): void;
        getItemListeners(): java.awt.event.ItemListener[];
        getListeners<T extends java.util.EventListener>(listenerType: any): T[];
        processItemEvent(e: java.awt.event.ItemEvent): void;
        paramString(): string;
    }
}
