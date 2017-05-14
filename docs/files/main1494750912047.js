/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "http://localhost:35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    render = _require.render,\n    h = _require.h;\n\nvar AppView = __webpack_require__(3);\n\nrender(h(AppView, null), document.body);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/index.jsx\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/index.jsx?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	eval("!function() {\n    'use strict';\n    function VNode() {}\n    function h(nodeName, attributes) {\n        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;\n        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);\n        if (attributes && null != attributes.children) {\n            if (!stack.length) stack.push(attributes.children);\n            delete attributes.children;\n        }\n        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {\n            if (child === !0 || child === !1) child = null;\n            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;\n            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);\n            lastSimple = simple;\n        }\n        var p = new VNode();\n        p.nodeName = nodeName;\n        p.children = children;\n        p.attributes = null == attributes ? void 0 : attributes;\n        p.key = null == attributes ? void 0 : attributes.key;\n        if (void 0 !== options.vnode) options.vnode(p);\n        return p;\n    }\n    function extend(obj, props) {\n        for (var i in props) obj[i] = props[i];\n        return obj;\n    }\n    function cloneElement(vnode, props) {\n        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);\n    }\n    function enqueueRender(component) {\n        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);\n    }\n    function rerender() {\n        var p, list = items;\n        items = [];\n        while (p = list.pop()) if (p.__d) renderComponent(p);\n    }\n    function isSameNodeType(node, vnode, hydrating) {\n        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;\n        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;\n    }\n    function isNamedNode(node, nodeName) {\n        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();\n    }\n    function getNodeProps(vnode) {\n        var props = extend({}, vnode.attributes);\n        props.children = vnode.children;\n        var defaultProps = vnode.nodeName.defaultProps;\n        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];\n        return props;\n    }\n    function createNode(nodeName, isSvg) {\n        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);\n        node.__n = nodeName;\n        return node;\n    }\n    function removeNode(node) {\n        if (node.parentNode) node.parentNode.removeChild(node);\n    }\n    function setAccessor(node, name, old, value, isSvg) {\n        if ('className' === name) name = 'class';\n        if ('key' === name) ; else if ('ref' === name) {\n            if (old) old(null);\n            if (value) value(node);\n        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {\n            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';\n            if (value && 'object' == typeof value) {\n                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';\n                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];\n            }\n        } else if ('dangerouslySetInnerHTML' === name) {\n            if (value) node.innerHTML = value.__html || '';\n        } else if ('o' == name[0] && 'n' == name[1]) {\n            var useCapture = name !== (name = name.replace(/Capture$/, ''));\n            name = name.toLowerCase().substring(2);\n            if (value) {\n                if (!old) node.addEventListener(name, eventProxy, useCapture);\n            } else node.removeEventListener(name, eventProxy, useCapture);\n            (node.__l || (node.__l = {}))[name] = value;\n        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {\n            setProperty(node, name, null == value ? '' : value);\n            if (null == value || value === !1) node.removeAttribute(name);\n        } else {\n            var ns = isSvg && name !== (name = name.replace(/^xlink\\:?/, ''));\n            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);\n        }\n    }\n    function setProperty(node, name, value) {\n        try {\n            node[name] = value;\n        } catch (e) {}\n    }\n    function eventProxy(e) {\n        return this.__l[e.type](options.event && options.event(e) || e);\n    }\n    function flushMounts() {\n        var c;\n        while (c = mounts.pop()) {\n            if (options.afterMount) options.afterMount(c);\n            if (c.componentDidMount) c.componentDidMount();\n        }\n    }\n    function diff(dom, vnode, context, mountAll, parent, componentRoot) {\n        if (!diffLevel++) {\n            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;\n            hydrating = null != dom && !('__preactattr_' in dom);\n        }\n        var ret = idiff(dom, vnode, context, mountAll, componentRoot);\n        if (parent && ret.parentNode !== parent) parent.appendChild(ret);\n        if (!--diffLevel) {\n            hydrating = !1;\n            if (!componentRoot) flushMounts();\n        }\n        return ret;\n    }\n    function idiff(dom, vnode, context, mountAll, componentRoot) {\n        var out = dom, prevSvgMode = isSvgMode;\n        if (null == vnode) vnode = '';\n        if ('string' == typeof vnode) {\n            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {\n                if (dom.nodeValue != vnode) dom.nodeValue = vnode;\n            } else {\n                out = document.createTextNode(vnode);\n                if (dom) {\n                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n                    recollectNodeTree(dom, !0);\n                }\n            }\n            out.__preactattr_ = !0;\n            return out;\n        }\n        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);\n        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;\n        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {\n            out = createNode(String(vnode.nodeName), isSvgMode);\n            if (dom) {\n                while (dom.firstChild) out.appendChild(dom.firstChild);\n                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n                recollectNodeTree(dom, !0);\n            }\n        }\n        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;\n        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {\n            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];\n        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);\n        diffAttributes(out, vnode.attributes, props);\n        isSvgMode = prevSvgMode;\n        return out;\n    }\n    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {\n        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;\n        if (0 !== len) for (var i = 0; i < len; i++) {\n            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;\n            if (null != key) {\n                keyedLen++;\n                keyed[key] = _child;\n            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;\n        }\n        if (0 !== vlen) for (var i = 0; i < vlen; i++) {\n            vchild = vchildren[i];\n            child = null;\n            var key = vchild.key;\n            if (null != key) {\n                if (keyedLen && void 0 !== keyed[key]) {\n                    child = keyed[key];\n                    keyed[key] = void 0;\n                    keyedLen--;\n                }\n            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {\n                child = c;\n                children[j] = void 0;\n                if (j === childrenLen - 1) childrenLen--;\n                if (j === min) min++;\n                break;\n            }\n            child = idiff(child, vchild, context, mountAll);\n            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);\n        }\n        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);\n        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);\n    }\n    function recollectNodeTree(node, unmountOnly) {\n        var component = node._component;\n        if (component) unmountComponent(component); else {\n            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);\n            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);\n            removeChildren(node);\n        }\n    }\n    function removeChildren(node) {\n        node = node.lastChild;\n        while (node) {\n            var next = node.previousSibling;\n            recollectNodeTree(node, !0);\n            node = next;\n        }\n    }\n    function diffAttributes(dom, attrs, old) {\n        var name;\n        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);\n        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);\n    }\n    function collectComponent(component) {\n        var name = component.constructor.name;\n        (components[name] || (components[name] = [])).push(component);\n    }\n    function createComponent(Ctor, props, context) {\n        var inst, list = components[Ctor.name];\n        if (Ctor.prototype && Ctor.prototype.render) {\n            inst = new Ctor(props, context);\n            Component.call(inst, props, context);\n        } else {\n            inst = new Component(props, context);\n            inst.constructor = Ctor;\n            inst.render = doRender;\n        }\n        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {\n            inst.__b = list[i].__b;\n            list.splice(i, 1);\n            break;\n        }\n        return inst;\n    }\n    function doRender(props, state, context) {\n        return this.constructor(props, context);\n    }\n    function setComponentProps(component, props, opts, context, mountAll) {\n        if (!component.__x) {\n            component.__x = !0;\n            if (component.__r = props.ref) delete props.ref;\n            if (component.__k = props.key) delete props.key;\n            if (!component.base || mountAll) {\n                if (component.componentWillMount) component.componentWillMount();\n            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);\n            if (context && context !== component.context) {\n                if (!component.__c) component.__c = component.context;\n                component.context = context;\n            }\n            if (!component.__p) component.__p = component.props;\n            component.props = props;\n            component.__x = !1;\n            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);\n            if (component.__r) component.__r(component);\n        }\n    }\n    function renderComponent(component, opts, mountAll, isChild) {\n        if (!component.__x) {\n            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;\n            if (isUpdate) {\n                component.props = previousProps;\n                component.state = previousState;\n                component.context = previousContext;\n                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);\n                component.props = props;\n                component.state = state;\n                component.context = context;\n            }\n            component.__p = component.__s = component.__c = component.__b = null;\n            component.__d = !1;\n            if (!skip) {\n                rendered = component.render(props, state, context);\n                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());\n                var toUnmount, base, childComponent = rendered && rendered.nodeName;\n                if ('function' == typeof childComponent) {\n                    var childProps = getNodeProps(rendered);\n                    inst = initialChildComponent;\n                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {\n                        toUnmount = inst;\n                        component._component = inst = createComponent(childComponent, childProps, context);\n                        inst.__b = inst.__b || nextBase;\n                        inst.__u = component;\n                        setComponentProps(inst, childProps, 0, context, !1);\n                        renderComponent(inst, 1, mountAll, !0);\n                    }\n                    base = inst.base;\n                } else {\n                    cbase = initialBase;\n                    toUnmount = initialChildComponent;\n                    if (toUnmount) cbase = component._component = null;\n                    if (initialBase || 1 === opts) {\n                        if (cbase) cbase._component = null;\n                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);\n                    }\n                }\n                if (initialBase && base !== initialBase && inst !== initialChildComponent) {\n                    var baseParent = initialBase.parentNode;\n                    if (baseParent && base !== baseParent) {\n                        baseParent.replaceChild(base, initialBase);\n                        if (!toUnmount) {\n                            initialBase._component = null;\n                            recollectNodeTree(initialBase, !1);\n                        }\n                    }\n                }\n                if (toUnmount) unmountComponent(toUnmount);\n                component.base = base;\n                if (base && !isChild) {\n                    var componentRef = component, t = component;\n                    while (t = t.__u) (componentRef = t).base = base;\n                    base._component = componentRef;\n                    base._componentConstructor = componentRef.constructor;\n                }\n            }\n            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {\n                flushMounts();\n                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);\n                if (options.afterUpdate) options.afterUpdate(component);\n            }\n            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);\n            if (!diffLevel && !isChild) flushMounts();\n        }\n    }\n    function buildComponentFromVNode(dom, vnode, context, mountAll) {\n        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);\n        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;\n        if (c && isOwner && (!mountAll || c._component)) {\n            setComponentProps(c, props, 3, context, mountAll);\n            dom = c.base;\n        } else {\n            if (originalComponent && !isDirectOwner) {\n                unmountComponent(originalComponent);\n                dom = oldDom = null;\n            }\n            c = createComponent(vnode.nodeName, props, context);\n            if (dom && !c.__b) {\n                c.__b = dom;\n                oldDom = null;\n            }\n            setComponentProps(c, props, 1, context, mountAll);\n            dom = c.base;\n            if (oldDom && dom !== oldDom) {\n                oldDom._component = null;\n                recollectNodeTree(oldDom, !1);\n            }\n        }\n        return dom;\n    }\n    function unmountComponent(component) {\n        if (options.beforeUnmount) options.beforeUnmount(component);\n        var base = component.base;\n        component.__x = !0;\n        if (component.componentWillUnmount) component.componentWillUnmount();\n        component.base = null;\n        var inner = component._component;\n        if (inner) unmountComponent(inner); else if (base) {\n            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);\n            component.__b = base;\n            removeNode(base);\n            collectComponent(component);\n            removeChildren(base);\n        }\n        if (component.__r) component.__r(null);\n    }\n    function Component(props, context) {\n        this.__d = !0;\n        this.context = context;\n        this.props = props;\n        this.state = this.state || {};\n    }\n    function render(vnode, parent, merge) {\n        return diff(merge, vnode, {}, !1, parent, !1);\n    }\n    var options = {};\n    var stack = [];\n    var EMPTY_CHILDREN = [];\n    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n    var items = [];\n    var mounts = [];\n    var diffLevel = 0;\n    var isSvgMode = !1;\n    var hydrating = !1;\n    var components = {};\n    extend(Component.prototype, {\n        setState: function(state, callback) {\n            var s = this.state;\n            if (!this.__s) this.__s = extend({}, s);\n            extend(s, 'function' == typeof state ? state(s, this.props) : state);\n            if (callback) (this.__h = this.__h || []).push(callback);\n            enqueueRender(this);\n        },\n        forceUpdate: function(callback) {\n            if (callback) (this.__h = this.__h || []).push(callback);\n            renderComponent(this, 2);\n        },\n        render: function() {}\n    });\n    var preact = {\n        h: h,\n        createElement: h,\n        cloneElement: cloneElement,\n        Component: Component,\n        render: render,\n        rerender: rerender,\n        options: options\n    };\n    if (true) module.exports = preact; else self.preact = preact;\n}();\n//# sourceMappingURL=preact.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/preact/dist/preact.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./~/preact/dist/preact.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _require = __webpack_require__(2),\n    h = _require.h,\n    Component = _require.Component;\n\nvar configPath = __webpack_require__(4);\nvar answersPath = __webpack_require__(52);\n\nvar _require2 = __webpack_require__(5),\n    fetchJson = _require2.fetchJson;\n\nvar AlphabetView = __webpack_require__(8);\nvar GallowsView = __webpack_require__(16);\n\nvar _require3 = __webpack_require__(19),\n    GameSummaryView = _require3.GameSummaryView,\n    LevelSummaryView = _require3.LevelSummaryView,\n    LandingView = _require3.LandingView;\n\nvar PhraseView = __webpack_require__(25);\nvar TopbarViewView = __webpack_require__(31);\nvar HangmanGame = __webpack_require__(43);\n\n__webpack_require__(49);\n\nmodule.exports = function (_Component) {\n  _inherits(AppView, _Component);\n\n  function AppView(props) {\n    _classCallCheck(this, AppView);\n\n    var _this = _possibleConstructorReturn(this, _Component.call(this, props));\n\n    _this.chooseLetter = _this.chooseLetter.bind(_this);\n    _this.restartGame = _this.restartGame.bind(_this);\n    _this.nextLevel = _this.nextLevel.bind(_this);\n    _this.startGame = _this.startGame.bind(_this);\n    _this.state = {\n      letters: [],\n      levelCount: 0,\n      configLoaded: false,\n      answersLoaded: false,\n      gameState: {},\n      phrase: [],\n      timeSpent: {},\n      parts: [],\n      started: false,\n      category: '',\n      answers: [],\n      config: {}\n    };\n    _this.getConfig();\n    _this.getAnswers();\n    return _this;\n  }\n\n  AppView.prototype.setupHangman = function setupHangman() {\n    var _state$config = this.state.config,\n        letters = _state$config.letters,\n        levelCount = _state$config.levelCount,\n        attemptsCount = _state$config.attemptsCount;\n\n    var words = this.state.answers;\n\n    this.game = new HangmanGame(words, letters, levelCount, attemptsCount);\n  };\n\n  AppView.prototype.getConfig = function getConfig() {\n    var _this2 = this;\n\n    fetchJson(configPath).then(function (config) {\n      _this2.setState({\n        configLoaded: true,\n        config: config\n      });\n      _this2.initializeGame();\n    });\n  };\n\n  AppView.prototype.getAnswers = function getAnswers() {\n    var _this3 = this;\n\n    fetchJson(answersPath).then(function (answers) {\n      _this3.setState({\n        answersLoaded: true,\n        answers: answers\n      });\n      _this3.initializeGame();\n    });\n  };\n\n  AppView.prototype.initializeGame = function initializeGame() {\n    if (this.state.answersLoaded && this.state.configLoaded) {\n      this.setupHangman();\n      this.setState({\n        levelCount: this.state.levelCount,\n        category: this.state.category\n      });\n      this.syncStateToGame();\n    }\n  };\n\n  AppView.prototype.chooseLetter = function chooseLetter(letter) {\n    this.game.pickLetter(letter);\n    this.syncStateToGame();\n  };\n\n  AppView.prototype.syncStateToGame = function syncStateToGame() {\n    var gameState = this.game.getState();\n    var chances = this.game.gallows.getMissingParts();\n\n    var viewState = {\n      letters: this.game.alphabet.letters,\n      attemptsCount: this.game.attemptsCount,\n      gameState: gameState,\n      currentLevel: this.game.currentLevel,\n      chances: chances,\n      phrase: this.game.phrase.letters,\n      parts: new Array(this.game.attemptsCount).fill(0).map(function (el, index) {\n        return index >= chances;\n      })\n    };\n\n    this.setState(viewState);\n  };\n\n  AppView.prototype.startGame = function startGame() {\n    this.game.nextLevel();\n    this.setState({\n      started: true\n    });\n    this.syncStateToGame();\n    this.updateTime();\n    this.timerInterval = setInterval(this.updateTime.bind(this), 1000);\n  };\n\n  AppView.prototype.updateTime = function updateTime() {\n    this.setState({\n      timeSpent: this.game.timer.getCurrentTime()\n    });\n  };\n\n  AppView.prototype.nextLevel = function nextLevel() {\n    this.game.nextLevel();\n    this.syncStateToGame();\n  };\n\n  AppView.prototype.restartGame = function restartGame() {\n    this.game.reset();\n    this.game.nextLevel();\n    this.syncStateToGame();\n  };\n\n  AppView.prototype.render = function render() {\n    var _state = this.state,\n        gameState = _state.gameState,\n        timeSpent = _state.timeSpent,\n        started = _state.started,\n        category = _state.category;\n\n    var summaryView = '';\n\n    if (!started && this.game) {\n      summaryView = h(LandingView, { levelCount: this.game.levelCount, attemptsCount: this.game.attemptsCount, startGame: this.startGame, category: category });\n    } else if (gameState.gameFinished) {\n      summaryView = h(GameSummaryView, { gameState: gameState, timeSpent: timeSpent, restartGame: this.restartGame, phrase: this.game.phrase.word });\n    } else if (gameState.levelFinished && !gameState.gameFinished) {\n      summaryView = h(LevelSummaryView, { nextLevel: this.nextLevel, phrase: this.game.phrase.word });\n    }\n\n    return h(\n      'div',\n      { className: 'm-app' },\n      h(TopbarViewView, { currentLevel: this.state.currentLevel, chances: this.state.chances, timeSpent: timeSpent }),\n      h(\n        'div',\n        { className: 'm-level' },\n        h(GallowsView, { parts: this.state.parts }),\n        h(PhraseView, { letters: this.state.phrase })\n      ),\n      h(AlphabetView, { letters: this.state.letters, onChoose: this.chooseLetter }),\n      summaryView\n    );\n  };\n\n  return AppView;\n}(Component);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/view.jsx\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/view.jsx?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"data/config.json\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/config.json\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./src/config.json?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = {\n  fetchJson: __webpack_require__(6),\n  plural: __webpack_require__(7)\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils/index.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nvar HTTP_OK = 200;\nvar HTTP_ERROR = 400;\n\nfunction fetchPolyfill(url) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n\n    request.onload = function () {\n      // eslint-disable-line func-names\n      if (request.status >= HTTP_OK && request.status < HTTP_ERROR) {\n        resolve(JSON.parse(this.responseText));\n      } else {\n        reject(request.statusText);\n      }\n    };\n    request.onerror = reject;\n    request.open('GET', url, true);\n    request.send();\n  });\n}\n\nfunction windowFetch(url) {\n  return window.fetch(url).then(function (response) {\n    return response.json();\n  });\n}\n\n/**\r\n * Fetches and parsed Json from given url. Window.fetch is not supported in some browsers.\r\n * @param  {String} url Address to query for data.\r\n * @return {Promise}    Promise resolving to parsed data recieved in the request.\r\n */\nmodule.exports = window.fetch && typeof window.fetch === 'function' ? windowFetch : fetchPolyfill;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils/fetchJson.js\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./src/utils/fetchJson.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nmodule.exports = function plural(label, amount) {\n  return amount + ' ' + label + (amount > 1 ? 's' : '');\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils/plural.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./src/utils/plural.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar LetterView = __webpack_require__(9);\n\n__webpack_require__(14);\n\nmodule.exports = function AlphabetView(_ref) {\n  var letters = _ref.letters,\n      onChoose = _ref.onChoose;\n\n  return h(\n    'div',\n    { className: 'm-alphabet' },\n    letters.map(function (letter) {\n      return h(LetterView, { key: letter.index, letter: letter, onChoose: onChoose });\n    })\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/alphabet/view.jsx\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/alphabet/view.jsx?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(10);\n\nmodule.exports = function AlphabetLetterView(_ref) {\n  var letter = _ref.letter,\n      onChoose = _ref.onChoose;\n\n  return h(\n    'div',\n    { className: 'm-alphabet-letter' + (letter.isPicked ? ' is-picked' : ''), onclick: function onclick() {\n        return onChoose(letter.label);\n      } },\n    letter.label\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/alphabet/letter/view.jsx\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/alphabet/letter/view.jsx?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/alphabet/letter/styles.scss\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/alphabet/letter/styles.scss?");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/alphabet/styles.scss\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/alphabet/styles.scss?");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(17);\n\nmodule.exports = function LeveLSummaryView(_ref) {\n  var parts = _ref.parts;\n\n  return h(\n    'div',\n    { className: 'm-gallows' },\n    h(\n      'svg',\n      { className: 'm-gallows__svg', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 142 222', version: '1.1' },\n      h(\n        'g',\n        { fill: '#ddd' },\n        h('path', { 'class': 'hangman-part ' + (parts[0] ? 'is-complete' : ''), d: 'm28,135 -20,55 -5,-1.5 20,-55z' }),\n        h('path', { 'class': 'hangman-part ' + (parts[1] ? 'is-complete' : ''), d: 'm23,135 20,55 5,-1.5 -20,-55z' }),\n        h('path', { 'class': 'hangman-part ' + (parts[2] ? 'is-complete' : ''), d: 'm23,50 5,0 0,90, -5,0z' }),\n        h('path', { 'class': 'hangman-part ' + (parts[3] ? 'is-complete' : ''), d: 'm23,52 15,50 5,-1.5 -15,-50z' }),\n        h('path', { 'class': 'hangman-part ' + (parts[4] ? 'is-complete' : ''), d: 'm28,52 -15,50 -5,-1.5 15,-50z' })\n      ),\n      h('path', { fill: '#999', stroke: '#999', 'stroke-width': '0.5', d: 'm25,11 0,40 -3,3 1.5,1.5 4,-4 0,-40.5z' }),\n      h('circle', { 'class': 'hangman-part ' + (parts[5] ? 'is-complete' : ''), fill: '#ddd', cx: '16', cy: '47', r: '10' }),\n      h(\n        'g',\n        { fill: '#964b25', stroke: '#442211' },\n        h('path', { d: 'm101,11 0,210 10,0 0,-210z' }),\n        h('path', { d: 'm101,161 -30,60 10,0 20,-40z' }),\n        h('path', { d: 'm111,161 30,60 -10,0 -20,-40z' }),\n        h('path', { d: 'm76,11 25,25 0,10 -35,-35z' }),\n        h('path', { d: 'm1,1 110,0 0,10 -110,0z' })\n      )\n    )\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/gallows/view.jsx\n// module id = 16\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/gallows/view.jsx?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/gallows/styles.scss\n// module id = 17\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/gallows/styles.scss?");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = {\n  View: __webpack_require__(20),\n  GameSummaryView: __webpack_require__(23),\n\n  LandingView: __webpack_require__(51),\n  LevelSummaryView: __webpack_require__(24)\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/index.js\n// module id = 19\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/index.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(21);\n\nmodule.exports = function MessageView(_ref) {\n  var header = _ref.header,\n      paragraphs = _ref.paragraphs,\n      actionLabel = _ref.actionLabel,\n      action = _ref.action;\n\n  return h(\n    'div',\n    { className: 'c-message__wrapper' },\n    h(\n      'div',\n      { className: 'c-message' },\n      h(\n        'div',\n        { className: 'c-message__header' },\n        header\n      ),\n      h(\n        'div',\n        { className: 'c-message__content' },\n        paragraphs.map(function (paragraph) {\n          return h(\n            'div',\n            { className: 'c-message__line' },\n            paragraph\n          );\n        })\n      ),\n      h(\n        'div',\n        { className: 'c-message__action' },\n        h(\n          'button',\n          { className: 'c-message__button', onclick: action },\n          actionLabel\n        )\n      )\n    )\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/base/view.jsx\n// module id = 20\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/base/view.jsx?");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/base/styles.scss\n// module id = 21\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/base/styles.scss?");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar MessageView = __webpack_require__(20);\n\nvar _require2 = __webpack_require__(5),\n    plural = _require2.plural;\n\nvar winMessage = 'You win the game!';\nvar loseMessage = 'Game over!';\n\nfunction parseTimePlayed(_ref) {\n  var hours = _ref.hours,\n      minutes = _ref.minutes,\n      seconds = _ref.seconds;\n\n  var text = plural('second', seconds);\n\n  if (hours > 0 || minutes > 0) {\n    text = plural('minute', minutes) + ' and ' + text;\n  }\n\n  if (hours > 0) {\n    text = plural('hour', hours) + ', ' + text;\n  }\n\n  return text;\n}\n\nmodule.exports = function GameSummaryView(_ref2) {\n  var gameState = _ref2.gameState,\n      timeSpent = _ref2.timeSpent,\n      restartGame = _ref2.restartGame,\n      phrase = _ref2.phrase;\n\n  return h(MessageView, {\n    header: gameState.gameWon ? winMessage : loseMessage,\n    paragraphs: ['The phrase was ' + phrase + '.', 'You played for ' + parseTimePlayed(timeSpent) + '.'],\n    actionLabel: 'Play again',\n    action: restartGame\n  });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/gameSummary/view.jsx\n// module id = 23\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/gameSummary/view.jsx?");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar MessageView = __webpack_require__(20);\n\nmodule.exports = function LeveLSummaryView(_ref) {\n  var nextLevel = _ref.nextLevel,\n      phrase = _ref.phrase;\n\n  return h(MessageView, {\n    header: 'Good job!',\n    paragraphs: ['The phrase was ' + phrase + '.'],\n    actionLabel: 'Next level',\n    action: nextLevel\n  });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/levelSummary/view.jsx\n// module id = 24\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/levelSummary/view.jsx?");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar LetterView = __webpack_require__(26);\nvar PlaceholderView = __webpack_require__(53);\n\n__webpack_require__(29);\n\nmodule.exports = function PhraseView(_ref) {\n  var letters = _ref.letters;\n\n  var content = void 0;\n\n  if (letters.length > 0) {\n    content = letters.map(function (letter) {\n      return h(LetterView, { key: letter.index, letter: letter });\n    });\n  } else {\n    content = h(PlaceholderView, null);\n  }\n\n  return h(\n    'div',\n    { className: 'm-phrase' },\n    content\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/view.jsx\n// module id = 25\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/view.jsx?");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(27);\n\nmodule.exports = function PhraseLetterView(_ref) {\n  var letter = _ref.letter;\n\n  return h(\n    'div',\n    { className: 'm-phrase-letter' + (letter.isRevealed ? ' is-revealed' : '') },\n    letter.isRevealed ? letter.label : '?'\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/letter/view.jsx\n// module id = 26\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/letter/view.jsx?");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/letter/styles.scss\n// module id = 27\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/letter/styles.scss?");

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/styles.scss\n// module id = 29\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/styles.scss?");

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar ChanceView = __webpack_require__(32);\nvar LevelView = __webpack_require__(35);\nvar TimeSpentView = __webpack_require__(38);\n\n__webpack_require__(41);\n\nmodule.exports = function TopbarView(_ref) {\n  var currentLevel = _ref.currentLevel,\n      chances = _ref.chances,\n      timeSpent = _ref.timeSpent;\n\n  var chancesView = chances > 0 ? h(ChanceView, { chances: chances }) : '';\n\n  return h(\n    'div',\n    { className: 'm-topbar' },\n    chancesView,\n    h(LevelView, { currentLevel: currentLevel }),\n    h(TimeSpentView, { timeSpent: timeSpent })\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/view.jsx\n// module id = 31\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/view.jsx?");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(33);\n\nmodule.exports = function TopbarViewChanceView(_ref) {\n  var chances = _ref.chances;\n\n  return h(\n    'div',\n    { className: 'm-summary__chances' },\n    chances,\n    ' chance',\n    chances > 1 ? 's' : ''\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/chances/view.jsx\n// module id = 32\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/chances/view.jsx?");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/chances/styles.scss\n// module id = 33\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/chances/styles.scss?");

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(36);\n\nmodule.exports = function LevelView(_ref) {\n  var currentLevel = _ref.currentLevel;\n\n  return h(\n    'div',\n    { className: 'm-summary__level' },\n    'Level ',\n    currentLevel\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/level/view.jsx\n// module id = 35\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/level/view.jsx?");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/level/styles.scss\n// module id = 36\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/level/styles.scss?");

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(39);\n\nfunction parseTimePlayed(_ref) {\n  var hours = _ref.hours,\n      minutes = _ref.minutes,\n      seconds = _ref.seconds;\n\n  if (!(seconds || minutes || hours)) {\n    return '';\n  }\n  var text = seconds + 's';\n\n  if (hours > 0 || minutes > 0) {\n    text = minutes + 'm ' + text;\n  }\n\n  if (hours > 0) {\n    text = hours + 'h, ' + text;\n  }\n\n  return text;\n}\n\nmodule.exports = function TopbarViewChanceView(_ref2) {\n  var timeSpent = _ref2.timeSpent;\n\n  return h(\n    'div',\n    { className: 'm-summary__time-spent' },\n    parseTimePlayed(timeSpent)\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/time/view.jsx\n// module id = 38\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/time/view.jsx?");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/time/styles.scss\n// module id = 39\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/time/styles.scss?");

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/topbar/styles.scss\n// module id = 41\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/topbar/styles.scss?");

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Alphabet = __webpack_require__(44);\nvar Dictionary = __webpack_require__(45);\nvar Timer = __webpack_require__(46);\nvar Gallows = __webpack_require__(47);\nvar Phrase = __webpack_require__(48);\n\nmodule.exports = function () {\n  function HangmanGame(words, letters, levelCount, attemptsCount) {\n    _classCallCheck(this, HangmanGame);\n\n    if (words.length < levelCount) {\n      throw Error('Vocabulary passed to gameFactory is smaller than levelCount (' + levelCount + ').');\n    }\n\n    this.levelCount = levelCount;\n    this.attemptsCount = attemptsCount;\n    this.alphabet = new Alphabet(letters);\n    this.dictionary = new Dictionary(words);\n    this.gallows = new Gallows(attemptsCount);\n    this.timer = new Timer();\n    this.phrase = new Phrase('');\n    this.currentLevel = 0;\n  }\n\n  HangmanGame.prototype.getState = function getState() {\n    var levelLost = this.gallows.isComplete();\n    var levelWon = this.phrase.isRevealed();\n    var nextLevelAvailable = this.currentLevel < this.levelCount;\n    var gameWon = levelWon && !nextLevelAvailable;\n\n    return {\n      gameWon: gameWon,\n      gameLost: levelLost,\n      gameFinished: gameWon || levelLost,\n      levelWon: levelWon,\n      levelLost: levelLost,\n      levelFinished: levelLost || levelWon,\n      nextLevelAvailable: nextLevelAvailable\n    };\n  };\n\n  HangmanGame.prototype.nextLevel = function nextLevel() {\n    this.currentLevel++; // eslint-disable-line no-plusplus\n    this.alphabet.reset();\n    this.gallows.reset();\n    this.timer.start();\n    this.phrase.setWord(this.dictionary.draw());\n  };\n\n  HangmanGame.prototype.pickLetter = function pickLetter(letter) {\n    this.alphabet.pickLetter(letter);\n\n    var containsLetter = this.phrase.containsLetter(letter);\n\n    if (containsLetter) {\n      this.phrase.revealLetter(letter);\n    } else {\n      this.gallows.addPart();\n    }\n\n    var _getState = this.getState(),\n        gameFinished = _getState.gameFinished,\n        levelFinished = _getState.levelFinished;\n\n    if (gameFinished || levelFinished) {\n      this.timer.stop();\n    }\n\n    return containsLetter;\n  };\n\n  HangmanGame.prototype.reset = function reset() {\n    this.alphabet.reset();\n    this.dictionary.reset();\n    this.gallows.reset();\n    this.timer.reset();\n    this.phrase.setWord('');\n    this.currentLevel = 0;\n  };\n\n  return HangmanGame;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/game.js\n// module id = 43\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/game.js?");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar viableLetterCount = 3;\n\nmodule.exports = function () {\n  function Alphabet(letters) {\n    _classCallCheck(this, Alphabet);\n\n    if (letters.length < viableLetterCount) {\n      console.warn(\"Alphabet constructed using only \" + letters.length + \" letters.\");\n    }\n    this.letters = letters.map(function (letter) {\n      return {\n        label: letter,\n        isPicked: false\n      };\n    });\n\n    this.lettersByLabel = this.letters.reduce(function (dict, letter) {\n      dict[letter.label] = letter;\n\n      return dict;\n    }, {});\n  }\n\n  Alphabet.prototype.pickLetter = function pickLetter(letter) {\n    if (!this.lettersByLabel.hasOwnProperty(letter)) {\n      throw Error(\"There is no letter \" + letter + \" in the alphabet.\");\n    }\n\n    if (this.lettersByLabel[letter].isPicked) {\n      throw Error(\"Letter \" + letter + \" was already picked.\");\n    }\n\n    this.lettersByLabel[letter].isPicked = true;\n\n    return true;\n  };\n\n  Alphabet.prototype.getAvailableLetters = function getAvailableLetters() {\n    return this.letters.filter(function (letter) {\n      return !letter.isPicked;\n    }).map(function (letter) {\n      return letter.label;\n    });\n  };\n\n  Alphabet.prototype.reset = function reset() {\n    this.letters.forEach(function (letter) {\n      letter.isPicked = false;\n    });\n  };\n\n  return Alphabet;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/alphabet.js\n// module id = 44\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/alphabet.js?");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nmodule.exports = function () {\n  function Dictionary(words) {\n    _classCallCheck(this, Dictionary);\n\n    this.words = words.map(function (word) {\n      return {\n        label: word,\n        isDrawn: false\n      };\n    });\n  }\n\n  Dictionary.prototype.draw = function draw() {\n    var available = this.words.filter(function (word) {\n      return !word.isDrawn;\n    });\n\n    if (available.length === 0) {\n      throw Error('There are no more passwords to draw!');\n    }\n\n    var drawnWord = available[Math.floor(Math.random() * available.length)];\n\n    drawnWord.isDrawn = true;\n\n    return drawnWord.label;\n  };\n\n  Dictionary.prototype.reset = function reset() {\n    this.words.forEach(function (word) {\n      word.isDrawn = false;\n    });\n  };\n\n  return Dictionary;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/dictionary.js\n// module id = 45\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/dictionary.js?");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MILISECOND = 1000;\nvar MINUTE = 60;\nvar HOUR = 60;\n\nfunction timeToObject(miliseconds) {\n  var totalSeconds = Math.floor(miliseconds / MILISECOND);\n  var seconds = totalSeconds % MINUTE;\n  var totalMinutes = (totalSeconds - seconds) / MINUTE;\n  var minutes = totalMinutes % HOUR;\n  var hours = (totalMinutes - minutes) / HOUR;\n\n  return {\n    hours: hours,\n    minutes: minutes,\n    seconds: seconds\n  };\n}\n\nmodule.exports = function () {\n  function Timer() {\n    _classCallCheck(this, Timer);\n\n    this.total = 0;\n    this.startTime = 0;\n    this.isRunning = false;\n  }\n\n  Timer.prototype.start = function start() {\n    if (this.isRunning) {\n      return;\n    }\n    this.isRunning = true;\n    this.startTime = Date.now();\n  };\n\n  Timer.prototype.stop = function stop() {\n    if (!this.isRunning) {\n      return;\n    }\n    this.isRunning = false;\n    this.total += Date.now() - this.startTime;\n  };\n\n  Timer.prototype.reset = function reset() {\n    this.stop();\n    this.total = 0;\n  };\n\n  Timer.prototype.getCurrentTime = function getCurrentTime() {\n    var current = 0;\n\n    if (this.isRunning) {\n      current = Date.now() - this.startTime;\n    }\n\n    return timeToObject(this.total + current);\n  };\n\n  Timer.prototype.getTimeSpent = function getTimeSpent() {\n    return timeToObject(this.total);\n  };\n\n  return Timer;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/timer.js\n// module id = 46\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/timer.js?");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nmodule.exports = function () {\n  function Gallows() {\n    var partCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    _classCallCheck(this, Gallows);\n\n    this.partCount = partCount;\n    this.reset();\n  }\n\n  Gallows.prototype.addPart = function addPart() {\n    if (this.isComplete()) {\n      throw Error('Gallows is already complete.');\n    }\n    this.completedPartCount++; // eslint-disable-line no-plusplus\n  };\n\n  Gallows.prototype.getMissingParts = function getMissingParts() {\n    return this.partCount - this.completedPartCount;\n  };\n\n  Gallows.prototype.isComplete = function isComplete() {\n    return this.partCount === this.completedPartCount;\n  };\n\n  Gallows.prototype.reset = function reset() {\n    this.completedPartCount = 0;\n  };\n\n  return Gallows;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/gallows.js\n// module id = 47\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/gallows.js?");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nmodule.exports = function () {\n  function Phrase(word) {\n    _classCallCheck(this, Phrase);\n\n    this.setWord(word);\n  }\n\n  Phrase.prototype.setWord = function setWord(word) {\n    this.word = word;\n    this.letters = word.split('').map(function (letter) {\n      return {\n        label: letter,\n        isRevealed: false\n      };\n    });\n  };\n\n  Phrase.prototype.containsLetter = function containsLetter(letterToCheck) {\n    return this.letters.some(function (letter) {\n      return letter.label === letterToCheck;\n    });\n  };\n\n  Phrase.prototype.revealLetter = function revealLetter(letterToReveal) {\n    this.letters.filter(function (letter) {\n      return letter.label === letterToReveal;\n    }).forEach(function (letter) {\n      letter.isRevealed = true;\n    });\n  };\n\n  Phrase.prototype.isRevealed = function isRevealed() {\n    return this.letters.every(function (letter) {\n      return letter.isRevealed;\n    });\n  };\n\n  return Phrase;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/core/phrase.js\n// module id = 48\n// module chunks = 0\n//# sourceURL=webpack:///./src/core/phrase.js?");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/styles.scss\n// module id = 49\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/styles.scss?");

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\nvar _require2 = __webpack_require__(5),\n    plural = _require2.plural;\n\nvar MessageView = __webpack_require__(20);\n\nmodule.exports = function LandingView(_ref) {\n  var levelCount = _ref.levelCount,\n      attemptsCount = _ref.attemptsCount,\n      startGame = _ref.startGame,\n      category = _ref.category;\n\n  return h(MessageView, {\n    header: 'Welcome to Hangman!',\n    paragraphs: ['You have ' + plural('level', levelCount) + ' to go.', 'In each level, You have ' + plural('attemp', attemptsCount) + ' to guess a letter.', 'All words are from \\'' + category + '\\' category.'],\n    actionLabel: 'Let\\'s play!',\n    action: startGame\n  });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/message/landing/view.jsx\n// module id = 51\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/message/landing/view.jsx?");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"data/answers.json\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/answers.json\n// module id = 52\n// module chunks = 0\n//# sourceURL=webpack:///./src/answers.json?");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    h = _require.h;\n\n__webpack_require__(54);\n\nmodule.exports = function PhrasePlaceholderView() {\n  return h(\n    'div',\n    { className: 'm-phrase-placeholder' },\n    ' '\n  );\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/placeholder/view.jsx\n// module id = 53\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/placeholder/view.jsx?");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/phrase/placeholder/styles.scss\n// module id = 54\n// module chunks = 0\n//# sourceURL=webpack:///./src/react/phrase/placeholder/styles.scss?");

/***/ })
/******/ ]);