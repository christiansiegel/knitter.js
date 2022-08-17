(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire16e6"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire16e6"] = parcelRequire;
}
var $b765d2f849fcd091$exports = {};
parcelRequire.register("40Mju", function(module, exports) {

$parcel$export(module.exports, "resolve", function () { return $2ebca382dbc18b85$export$40339995e8a21591; }, function (v) { return $2ebca382dbc18b85$export$40339995e8a21591 = v; });
$parcel$export(module.exports, "register", function () { return $2ebca382dbc18b85$export$357eb1b4f03c1402; }, function (v) { return $2ebca382dbc18b85$export$357eb1b4f03c1402 = v; });
var $2ebca382dbc18b85$export$357eb1b4f03c1402;
var $2ebca382dbc18b85$export$40339995e8a21591;
"use strict";
var $2ebca382dbc18b85$var$mapping = {
};
function $2ebca382dbc18b85$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$2ebca382dbc18b85$var$mapping[keys[i]] = pairs[keys[i]];
}
function $2ebca382dbc18b85$var$resolve(id) {
    var resolved = $2ebca382dbc18b85$var$mapping[id];
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return resolved;
}
$2ebca382dbc18b85$export$357eb1b4f03c1402 = $2ebca382dbc18b85$var$register;
$2ebca382dbc18b85$export$40339995e8a21591 = $2ebca382dbc18b85$var$resolve;

});


(parcelRequire("40Mju")).register(JSON.parse("{\"7zONV\":\"index.a2bf5be4.js\",\"eCoz2\":\"worker.8702600a.js\"}"));

var $6affecf2d197f5a4$var$niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(prop) {
        return "Cannot decorate undefined property: '" + prop.toString() + "'";
    },
    2: function _1(prop) {
        return "invalid decorator for '" + prop.toString() + "'";
    },
    3: function _2(prop) {
        return "Cannot decorate '" + prop.toString() + "': action can only be used on properties with a function value.";
    },
    4: function _3(prop) {
        return "Cannot decorate '" + prop.toString() + "': computed can only be used on getter properties.";
    },
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _4(index, length) {
        return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _5(other) {
        return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _6(other) {
        return "Cannot initialize map from " + other;
    },
    21: function _7(dataStructure) {
        return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _8(thing) {
        return "Cannot obtain administration from " + thing;
    },
    25: function _9(property, name) {
        return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _10(property, name) {
        return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _11(thing) {
        return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _12(name, derivation) {
        return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _13(name) {
        return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _14(name) {
        return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _15(method) {
        return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    }
};
var $6affecf2d197f5a4$var$errors = {
};
function $6affecf2d197f5a4$var$die(error) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    var e;
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/mobx6/src/errors.ts" : "[MobX] " + error);
}
var $6affecf2d197f5a4$var$mockGlobal = {
};
function $6affecf2d197f5a4$var$getGlobal() {
    if (typeof window !== "undefined") return window;
    if (typeof $parcel$global !== "undefined") return $parcel$global;
    if (typeof self !== "undefined") return self;
    return $6affecf2d197f5a4$var$mockGlobal;
}
var $6affecf2d197f5a4$var$assign = Object.assign;
var $6affecf2d197f5a4$var$getDescriptor = Object.getOwnPropertyDescriptor;
var $6affecf2d197f5a4$var$defineProperty = Object.defineProperty;
var $6affecf2d197f5a4$var$objectPrototype = Object.prototype;
var $6affecf2d197f5a4$var$EMPTY_ARRAY = [];
Object.freeze($6affecf2d197f5a4$var$EMPTY_ARRAY);
var $6affecf2d197f5a4$var$EMPTY_OBJECT = {
};
Object.freeze($6affecf2d197f5a4$var$EMPTY_OBJECT);
var $6affecf2d197f5a4$var$hasProxy = typeof Proxy !== "undefined";
var $6affecf2d197f5a4$var$plainObjectString = /*#__PURE__*/ Object.toString();
function $6affecf2d197f5a4$var$assertProxies() {
    if (!$6affecf2d197f5a4$var$hasProxy) $6affecf2d197f5a4$var$die("Proxy not available");
}
function $6affecf2d197f5a4$var$warnAboutProxyRequirement(msg) {
}
function $6affecf2d197f5a4$var$getNextId() {
    return ++$6affecf2d197f5a4$var$globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */ function $6affecf2d197f5a4$var$once(func) {
    var invoked = false;
    return function() {
        if (invoked) return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var $6affecf2d197f5a4$var$noop = function noop() {
};
function $6affecf2d197f5a4$var$isFunction(fn) {
    return typeof fn === "function";
}
function $6affecf2d197f5a4$var$isStringish(value) {
    var t = typeof value;
    switch(t){
        case "string":
        case "symbol":
        case "number":
            return true;
    }
    return false;
}
function $6affecf2d197f5a4$var$isObject(value) {
    return value !== null && typeof value === "object";
}
function $6affecf2d197f5a4$var$isPlainObject(value) {
    var _proto$constructor;
    if (!$6affecf2d197f5a4$var$isObject(value)) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null) return true;
    return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === $6affecf2d197f5a4$var$plainObjectString;
} // https://stackoverflow.com/a/37865170
function $6affecf2d197f5a4$var$isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
    return false;
}
function $6affecf2d197f5a4$var$addHiddenProp(object, propName, value) {
    $6affecf2d197f5a4$var$defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function $6affecf2d197f5a4$var$addHiddenFinalProp(object, propName, value) {
    $6affecf2d197f5a4$var$defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function $6affecf2d197f5a4$var$assertPropertyConfigurable(object, prop) {
    var descriptor;
}
function $6affecf2d197f5a4$var$createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x) {
        return $6affecf2d197f5a4$var$isObject(x) && x[propName] === true;
    };
}
function $6affecf2d197f5a4$var$isES6Map(thing) {
    return thing instanceof Map;
}
function $6affecf2d197f5a4$var$isES6Set(thing) {
    return thing instanceof Set;
}
var $6affecf2d197f5a4$var$hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */ function $6affecf2d197f5a4$var$getPlainObjectKeys(object) {
    var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...
    if (!$6affecf2d197f5a4$var$hasGetOwnPropertySymbols) return keys;
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) return keys;
    return [].concat(keys, symbols.filter(function(s) {
        return $6affecf2d197f5a4$var$objectPrototype.propertyIsEnumerable.call(object, s);
    }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic
var $6affecf2d197f5a4$var$ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : $6affecf2d197f5a4$var$hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : /* istanbul ignore next */ Object.getOwnPropertyNames;
function $6affecf2d197f5a4$var$stringifyKey(key) {
    if (typeof key === "string") return key;
    if (typeof key === "symbol") return key.toString();
    return new String(key).toString();
}
function $6affecf2d197f5a4$var$toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
function $6affecf2d197f5a4$var$hasProp(target, prop) {
    return $6affecf2d197f5a4$var$objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils
var $6affecf2d197f5a4$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {
    }; // Note: without polyfill for ownKeys, symbols won't be picked up
    $6affecf2d197f5a4$var$ownKeys(target).forEach(function(key) {
        res[key] = $6affecf2d197f5a4$var$getDescriptor(target, key);
    });
    return res;
};
var $6affecf2d197f5a4$var$mobxDecoratorsSymbol = /*#__PURE__*/ Symbol("mobx-decorators");
var $6affecf2d197f5a4$var$mobxAppliedDecoratorsSymbol = /*#__PURE__*/ Symbol("mobx-applied-decorators");
function $6affecf2d197f5a4$var$createDecorator(type) {
    return $6affecf2d197f5a4$var$assign(function(target, property) {
        if (property === undefined) // @decorator(arg) member
        $6affecf2d197f5a4$var$createDecoratorAndAnnotation(type, target);
        else // @decorator member
        $6affecf2d197f5a4$var$storeDecorator(target, property, type);
    }, {
        annotationType_: type
    });
}
function $6affecf2d197f5a4$var$createDecoratorAndAnnotation(type, arg_) {
    return $6affecf2d197f5a4$var$assign(function(target, property) {
        $6affecf2d197f5a4$var$storeDecorator(target, property, type, arg_);
    }, {
        annotationType_: type,
        arg_: arg_
    });
}
function $6affecf2d197f5a4$var$storeDecorator(target, property, type, arg_) {
    var desc = $6affecf2d197f5a4$var$getDescriptor(target, $6affecf2d197f5a4$var$mobxDecoratorsSymbol);
    var map;
    if (desc) map = desc.value;
    else {
        map = {
        };
        $6affecf2d197f5a4$var$addHiddenProp(target, $6affecf2d197f5a4$var$mobxDecoratorsSymbol, map);
    }
    map[property] = {
        annotationType_: type,
        arg_: arg_
    };
}
function $6affecf2d197f5a4$var$applyDecorators(target) {
    if (target[$6affecf2d197f5a4$var$mobxAppliedDecoratorsSymbol]) return true;
    var current = target; // optimization: this could be cached per prototype!
    // (then we can remove the weird short circuiting as well..)
    var annotations = [];
    while(current && current !== $6affecf2d197f5a4$var$objectPrototype){
        var desc = $6affecf2d197f5a4$var$getDescriptor(current, $6affecf2d197f5a4$var$mobxDecoratorsSymbol);
        if (desc) {
            if (!annotations.length) for(var key in desc.value){
                // second conditions is to recognize actions
                if (!$6affecf2d197f5a4$var$hasProp(target, key) && !$6affecf2d197f5a4$var$hasProp(current, key)) // not all fields are defined yet, so we are in the makeObservable call of some super class,
                // short circuit, here, we will do this again in a later makeObservable call
                return true;
            }
            annotations.unshift(desc.value);
        }
        current = Object.getPrototypeOf(current);
    }
    annotations.forEach(function(a) {
        $6affecf2d197f5a4$export$53f2f76fa8db2c8e(target, a);
    });
    $6affecf2d197f5a4$var$addHiddenProp(target, $6affecf2d197f5a4$var$mobxAppliedDecoratorsSymbol, true);
    return annotations.length > 0;
}
var $6affecf2d197f5a4$export$2a62cb88418c26a9 = /*#__PURE__*/ Symbol("mobx administration");
var $6affecf2d197f5a4$var$Atom = /*#__PURE__*/ function() {
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
    /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */ function Atom(name_) {
        if (name_ === void 0) name_ = "Atom@" + $6affecf2d197f5a4$var$getNextId();
        this.name_ = void 0;
        this.isPendingUnobservation_ = false;
        this.isBeingObserved_ = false;
        this.observers_ = new Set();
        this.diffValue_ = 0;
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_;
        this.onBOL = void 0;
        this.onBUOL = void 0;
        this.name_ = name_;
    } // onBecomeObservedListeners
    var _proto = Atom.prototype;
    _proto.onBO = function onBO() {
        if (this.onBOL) this.onBOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) this.onBUOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.reportObserved = function reportObserved$1() {
        return $6affecf2d197f5a4$var$reportObserved(this);
    };
    _proto.reportChanged = function reportChanged() {
        $6affecf2d197f5a4$var$startBatch();
        $6affecf2d197f5a4$var$propagateChanged(this);
        $6affecf2d197f5a4$var$endBatch();
    };
    _proto.toString = function toString() {
        return this.name_;
    };
    return Atom;
}();
var $6affecf2d197f5a4$var$isAtom = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("Atom", $6affecf2d197f5a4$var$Atom);
function $6affecf2d197f5a4$export$efeedbf8e7fa7ff9(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) onBecomeObservedHandler = $6affecf2d197f5a4$var$noop;
    if (onBecomeUnobservedHandler === void 0) onBecomeUnobservedHandler = $6affecf2d197f5a4$var$noop;
    var atom = new $6affecf2d197f5a4$var$Atom(name); // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== $6affecf2d197f5a4$var$noop) $6affecf2d197f5a4$export$7d2a45bd6474ec77(atom, onBecomeObservedHandler);
    if (onBecomeUnobservedHandler !== $6affecf2d197f5a4$var$noop) $6affecf2d197f5a4$export$6e5aff80e7d0bfc8(atom, onBecomeUnobservedHandler);
    return atom;
}
function $6affecf2d197f5a4$var$identityComparer(a, b) {
    return a === b;
}
function $6affecf2d197f5a4$var$structuralComparer(a, b) {
    return $6affecf2d197f5a4$var$deepEqual(a, b);
}
function $6affecf2d197f5a4$var$shallowComparer(a, b) {
    return $6affecf2d197f5a4$var$deepEqual(a, b, 1);
}
function $6affecf2d197f5a4$var$defaultComparer(a, b) {
    return Object.is(a, b);
}
var $6affecf2d197f5a4$export$6974f9dbb28e0b92 = {
    identity: $6affecf2d197f5a4$var$identityComparer,
    structural: $6affecf2d197f5a4$var$structuralComparer,
    "default": $6affecf2d197f5a4$var$defaultComparer,
    shallow: $6affecf2d197f5a4$var$shallowComparer
};
function $6affecf2d197f5a4$var$deepEnhancer(v, _, name) {
    // it is an observable already, done
    if ($6affecf2d197f5a4$export$e2a3ee4fe9f3b187(v)) return v; // something that can be converted and mutated?
    if (Array.isArray(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.array(v, {
        name: name
    });
    if ($6affecf2d197f5a4$var$isPlainObject(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.object(v, undefined, {
        name: name
    });
    if ($6affecf2d197f5a4$var$isES6Map(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.map(v, {
        name: name
    });
    if ($6affecf2d197f5a4$var$isES6Set(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.set(v, {
        name: name
    });
    return v;
}
function $6affecf2d197f5a4$var$shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) return v;
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(v) || $6affecf2d197f5a4$export$8e83b0c96ff20b9f(v) || $6affecf2d197f5a4$export$bb89e35ee75744d4(v) || $6affecf2d197f5a4$export$f6dcb07064e30261(v)) return v;
    if (Array.isArray(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.array(v, {
        name: name,
        deep: false
    });
    if ($6affecf2d197f5a4$var$isPlainObject(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.object(v, undefined, {
        name: name,
        deep: false
    });
    if ($6affecf2d197f5a4$var$isES6Map(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.map(v, {
        name: name,
        deep: false
    });
    if ($6affecf2d197f5a4$var$isES6Set(v)) return $6affecf2d197f5a4$export$5af762eb508641fe.set(v, {
        name: name,
        deep: false
    });
}
function $6affecf2d197f5a4$var$referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function $6affecf2d197f5a4$var$refStructEnhancer(v, oldValue) {
    if ($6affecf2d197f5a4$var$deepEqual(v, oldValue)) return oldValue;
    return v;
}
var $6affecf2d197f5a4$var$_annotationToEnhancer;
var $6affecf2d197f5a4$var$OBSERVABLE = "observable";
var $6affecf2d197f5a4$var$OBSERVABLE_REF = "observable.ref";
var $6affecf2d197f5a4$var$OBSERVABLE_SHALLOW = "observable.shallow";
var $6affecf2d197f5a4$var$OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var $6affecf2d197f5a4$var$defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze($6affecf2d197f5a4$var$defaultCreateObservableOptions);
function $6affecf2d197f5a4$var$asCreateObservableOptions(thing) {
    return thing || $6affecf2d197f5a4$var$defaultCreateObservableOptions;
}
function $6affecf2d197f5a4$var$getEnhancerFromOption(options) {
    return options.deep === true ? $6affecf2d197f5a4$var$deepEnhancer : options.deep === false ? $6affecf2d197f5a4$var$referenceEnhancer : $6affecf2d197f5a4$var$getEnhancerFromAnnotation(options.defaultDecorator);
}
var $6affecf2d197f5a4$var$annotationToEnhancer = ($6affecf2d197f5a4$var$_annotationToEnhancer = {
}, $6affecf2d197f5a4$var$_annotationToEnhancer[$6affecf2d197f5a4$var$OBSERVABLE] = $6affecf2d197f5a4$var$deepEnhancer, $6affecf2d197f5a4$var$_annotationToEnhancer[$6affecf2d197f5a4$var$OBSERVABLE_REF] = $6affecf2d197f5a4$var$referenceEnhancer, $6affecf2d197f5a4$var$_annotationToEnhancer[$6affecf2d197f5a4$var$OBSERVABLE_SHALLOW] = $6affecf2d197f5a4$var$shallowEnhancer, $6affecf2d197f5a4$var$_annotationToEnhancer[$6affecf2d197f5a4$var$OBSERVABLE_STRUCT] = $6affecf2d197f5a4$var$refStructEnhancer, $6affecf2d197f5a4$var$_annotationToEnhancer);
function $6affecf2d197f5a4$var$getEnhancerFromAnnotation(annotation) {
    var _annotationToEnhancer2;
    return !annotation ? $6affecf2d197f5a4$var$deepEnhancer : (_annotationToEnhancer2 = $6affecf2d197f5a4$var$annotationToEnhancer[annotation.annotationType_]) != null ? _annotationToEnhancer2 : $6affecf2d197f5a4$var$die(12);
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */ function $6affecf2d197f5a4$var$createObservable(v, arg2, arg3) {
    // @observable someProp;
    if ($6affecf2d197f5a4$var$isStringish(arg2)) {
        $6affecf2d197f5a4$var$storeDecorator(v, arg2, $6affecf2d197f5a4$var$OBSERVABLE);
        return;
    } // it is an observable already, done
    if ($6affecf2d197f5a4$export$e2a3ee4fe9f3b187(v)) return v; // something that can be converted and mutated?
    var res = $6affecf2d197f5a4$var$isPlainObject(v) ? $6affecf2d197f5a4$export$5af762eb508641fe.object(v, arg2, arg3) : Array.isArray(v) ? $6affecf2d197f5a4$export$5af762eb508641fe.array(v, arg2) : $6affecf2d197f5a4$var$isES6Map(v) ? $6affecf2d197f5a4$export$5af762eb508641fe.map(v, arg2) : $6affecf2d197f5a4$var$isES6Set(v) ? $6affecf2d197f5a4$export$5af762eb508641fe.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it
    if (res !== v) return res;
    return $6affecf2d197f5a4$export$5af762eb508641fe.box(v);
}
$6affecf2d197f5a4$var$createObservable.annotationType_ = $6affecf2d197f5a4$var$OBSERVABLE;
var $6affecf2d197f5a4$var$observableFactories = {
    box: function box(value, options) {
        var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
        return new $6affecf2d197f5a4$var$ObservableValue(value, $6affecf2d197f5a4$var$getEnhancerFromOption(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
        var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
        return ($6affecf2d197f5a4$var$globalState.useProxies === false || o.proxy === false ? $6affecf2d197f5a4$var$createLegacyArray : $6affecf2d197f5a4$var$createObservableArray)(initialValues, $6affecf2d197f5a4$var$getEnhancerFromOption(o), o.name);
    },
    map: function map(initialValues, options) {
        var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
        return new $6affecf2d197f5a4$export$93bd560583f87e1b(initialValues, $6affecf2d197f5a4$var$getEnhancerFromOption(o), o.name);
    },
    set: function set(initialValues, options) {
        var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
        return new $6affecf2d197f5a4$export$605c56ebc36d31c3(initialValues, $6affecf2d197f5a4$var$getEnhancerFromOption(o), o.name);
    },
    object: function object(props, decorators, options) {
        var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
        var base = {
        };
        $6affecf2d197f5a4$var$asObservableObject(base, options == null ? void 0 : options.name, $6affecf2d197f5a4$var$getEnhancerFromOption(o));
        return $6affecf2d197f5a4$export$c16c7480cfa7ffd8($6affecf2d197f5a4$var$globalState.useProxies === false || o.proxy === false ? base : $6affecf2d197f5a4$var$createDynamicObservableObject(base), props, decorators, options);
    },
    ref: /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$OBSERVABLE_REF),
    shallow: /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$OBSERVABLE_SHALLOW),
    deep: /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$OBSERVABLE),
    struct: /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$OBSERVABLE_STRUCT)
}; // eslint-disable-next-line
var $6affecf2d197f5a4$export$5af762eb508641fe = /*#__PURE__*/ $6affecf2d197f5a4$var$assign($6affecf2d197f5a4$var$createObservable, $6affecf2d197f5a4$var$observableFactories);
var $6affecf2d197f5a4$var$COMPUTED = "computed";
var $6affecf2d197f5a4$var$COMPUTED_STRUCT = "computed.struct";
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */ var $6affecf2d197f5a4$export$e23ddc2fc1228fe8 = function computed(arg1, arg2, arg3) {
    if ($6affecf2d197f5a4$var$isStringish(arg2)) // @computed
    return $6affecf2d197f5a4$var$storeDecorator(arg1, arg2, $6affecf2d197f5a4$var$COMPUTED);
    if ($6affecf2d197f5a4$var$isPlainObject(arg1)) // @computed({ options })
    return $6affecf2d197f5a4$var$createDecoratorAndAnnotation($6affecf2d197f5a4$var$COMPUTED, arg1);
     // computed(expr, options?)
    var opts = $6affecf2d197f5a4$var$isPlainObject(arg2) ? arg2 : {
    };
    opts.get = arg1;
    opts.name = opts.name || arg1.name || "";
    /* for generated name */ return new $6affecf2d197f5a4$var$ComputedValue(opts);
};
$6affecf2d197f5a4$export$e23ddc2fc1228fe8.annotationType_ = $6affecf2d197f5a4$var$COMPUTED;
$6affecf2d197f5a4$export$e23ddc2fc1228fe8.struct = /*#__PURE__*/ $6affecf2d197f5a4$var$assign(function(target, property) {
    $6affecf2d197f5a4$var$storeDecorator(target, property, $6affecf2d197f5a4$var$COMPUTED_STRUCT);
}, {
    annotationType_: $6affecf2d197f5a4$var$COMPUTED_STRUCT
});
var $6affecf2d197f5a4$var$_getDescriptor$config, $6affecf2d197f5a4$var$_getDescriptor;
// mobx versions
var $6affecf2d197f5a4$var$currentActionId = 0;
var $6affecf2d197f5a4$var$nextActionId = 1;
var $6affecf2d197f5a4$var$isFunctionNameConfigurable = ($6affecf2d197f5a4$var$_getDescriptor$config = ($6affecf2d197f5a4$var$_getDescriptor = /*#__PURE__*/ $6affecf2d197f5a4$var$getDescriptor(function() {
}, "name")) == null ? void 0 : $6affecf2d197f5a4$var$_getDescriptor.configurable) != null ? $6affecf2d197f5a4$var$_getDescriptor$config : false; // we can safely recycle this object
var $6affecf2d197f5a4$var$tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
};
function $6affecf2d197f5a4$var$createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) autoAction = false;
    function res() {
        return $6affecf2d197f5a4$var$executeAction(actionName, autoAction, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    if ($6affecf2d197f5a4$var$isFunctionNameConfigurable) {
        $6affecf2d197f5a4$var$tmpNameDescriptor.value = actionName;
        Object.defineProperty(res, "name", $6affecf2d197f5a4$var$tmpNameDescriptor);
    }
    return res;
}
function $6affecf2d197f5a4$var$executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = $6affecf2d197f5a4$export$ed2b96ee32a8e4d0(actionName, canRunAsDerivation, scope, args);
    try {
        return fn.apply(scope, args);
    } catch (err) {
        runInfo.error_ = err;
        throw err;
    } finally{
        $6affecf2d197f5a4$export$582ab38106fb3524(runInfo);
    }
}
function $6affecf2d197f5a4$export$ed2b96ee32a8e4d0(actionName, canRunAsDerivation, scope, args) {
    var notifySpy_ = false;
    var startTime_ = 0;
    var flattenedArgs;
    var prevDerivation_ = $6affecf2d197f5a4$var$globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    $6affecf2d197f5a4$var$startBatch();
    var prevAllowStateChanges_ = $6affecf2d197f5a4$var$globalState.allowStateChanges; // by default preserve previous allow
    if (runAsAction) {
        $6affecf2d197f5a4$var$untrackedStart();
        prevAllowStateChanges_ = $6affecf2d197f5a4$var$allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = $6affecf2d197f5a4$export$9d540f75915c046a(true);
    var runInfo = {
        runAsAction_: runAsAction,
        prevDerivation_: prevDerivation_,
        prevAllowStateChanges_: prevAllowStateChanges_,
        prevAllowStateReads_: prevAllowStateReads_,
        notifySpy_: notifySpy_,
        startTime_: startTime_,
        actionId_: $6affecf2d197f5a4$var$nextActionId++,
        parentActionId_: $6affecf2d197f5a4$var$currentActionId
    };
    $6affecf2d197f5a4$var$currentActionId = runInfo.actionId_;
    return runInfo;
}
function $6affecf2d197f5a4$export$582ab38106fb3524(runInfo) {
    if ($6affecf2d197f5a4$var$currentActionId !== runInfo.actionId_) $6affecf2d197f5a4$var$die(30);
    $6affecf2d197f5a4$var$currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== undefined) $6affecf2d197f5a4$var$globalState.suppressReactionErrors = true;
    $6affecf2d197f5a4$var$allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    $6affecf2d197f5a4$export$d076e515d2e74dc8(runInfo.prevAllowStateReads_);
    $6affecf2d197f5a4$var$endBatch();
    if (runInfo.runAsAction_) $6affecf2d197f5a4$var$untrackedEnd(runInfo.prevDerivation_);
    $6affecf2d197f5a4$var$globalState.suppressReactionErrors = false;
}
function $6affecf2d197f5a4$export$add97352ee9bd4b0(allowStateChanges, func) {
    var prev = $6affecf2d197f5a4$var$allowStateChangesStart(allowStateChanges);
    try {
        return func();
    } finally{
        $6affecf2d197f5a4$var$allowStateChangesEnd(prev);
    }
}
function $6affecf2d197f5a4$var$allowStateChangesStart(allowStateChanges) {
    var prev = $6affecf2d197f5a4$var$globalState.allowStateChanges;
    $6affecf2d197f5a4$var$globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function $6affecf2d197f5a4$var$allowStateChangesEnd(prev) {
    $6affecf2d197f5a4$var$globalState.allowStateChanges = prev;
}
function $6affecf2d197f5a4$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $6affecf2d197f5a4$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $6affecf2d197f5a4$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $6affecf2d197f5a4$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $6affecf2d197f5a4$var$_extends() {
    $6affecf2d197f5a4$var$_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $6affecf2d197f5a4$var$_extends.apply(this, arguments);
}
function $6affecf2d197f5a4$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function $6affecf2d197f5a4$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $6affecf2d197f5a4$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $6affecf2d197f5a4$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $6affecf2d197f5a4$var$_arrayLikeToArray(o, minLen);
}
function $6affecf2d197f5a4$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = $6affecf2d197f5a4$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o[Symbol.iterator]();
    return it.next.bind(it);
}
var $6affecf2d197f5a4$var$_Symbol$toPrimitive;
var $6affecf2d197f5a4$var$CREATE = "create";
$6affecf2d197f5a4$var$_Symbol$toPrimitive = Symbol.toPrimitive;
var $6affecf2d197f5a4$var$ObservableValue = /*#__PURE__*/ function(_Atom) {
    $6affecf2d197f5a4$var$_inheritsLoose(ObservableValue, _Atom);
    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
        var _this;
        if (name_ === void 0) name_ = "ObservableValue@" + $6affecf2d197f5a4$var$getNextId();
        if (notifySpy === void 0) notifySpy = true;
        if (equals === void 0) equals = $6affecf2d197f5a4$export$6974f9dbb28e0b92["default"];
        _this = _Atom.call(this, name_) || this;
        _this.enhancer = void 0;
        _this.name_ = void 0;
        _this.equals = void 0;
        _this.hasUnreportedChange_ = false;
        _this.interceptors_ = void 0;
        _this.changeListeners_ = void 0;
        _this.value_ = void 0;
        _this.dehancer = void 0;
        _this.enhancer = enhancer;
        _this.name_ = name_;
        _this.equals = equals;
        _this.value_ = enhancer(value, undefined, name_);
        return _this;
    }
    var _proto = ObservableValue.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.set = function set(newValue) {
        var oldValue = this.value_;
        newValue = this.prepareNewValue_(newValue);
        if (newValue !== $6affecf2d197f5a4$var$globalState.UNCHANGED) {
            var notifySpy = $6affecf2d197f5a4$var$isSpyEnabled();
            this.setNewValue_(newValue);
        }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
        $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this);
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                object: this,
                type: $6affecf2d197f5a4$var$UPDATE,
                newValue: newValue
            });
            if (!change) return $6affecf2d197f5a4$var$globalState.UNCHANGED;
            newValue = change.newValue;
        } // apply modifier
        newValue = this.enhancer(newValue, this.value_, this.name_);
        return this.equals(this.value_, newValue) ? $6affecf2d197f5a4$var$globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
        var oldValue = this.value_;
        this.value_ = newValue;
        this.reportChanged();
        if ($6affecf2d197f5a4$var$hasListeners(this)) $6affecf2d197f5a4$var$notifyListeners(this, {
            type: $6affecf2d197f5a4$var$UPDATE,
            object: this,
            newValue: newValue,
            oldValue: oldValue
        });
    };
    _proto.get = function get() {
        this.reportObserved();
        return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
        return $6affecf2d197f5a4$var$registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately) listener({
            observableKind: "value",
            debugObjectName: this.name_,
            object: this,
            type: $6affecf2d197f5a4$var$UPDATE,
            newValue: this.value_,
            oldValue: undefined
        });
        return $6affecf2d197f5a4$var$registerListener(this, listener);
    };
    _proto.raw = function raw() {
        // used by MST ot get undehanced value
        return this.value_;
    };
    _proto.toJSON = function toJSON() {
        return this.get();
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
        return $6affecf2d197f5a4$var$toPrimitive(this.get());
    };
    _proto[$6affecf2d197f5a4$var$_Symbol$toPrimitive] = function() {
        return this.valueOf();
    };
    return ObservableValue;
}($6affecf2d197f5a4$var$Atom);
var $6affecf2d197f5a4$export$d2be2fb7004b9c4a = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ObservableValue", $6affecf2d197f5a4$var$ObservableValue);
var $6affecf2d197f5a4$var$_Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */ $6affecf2d197f5a4$var$_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var $6affecf2d197f5a4$var$ComputedValue = /*#__PURE__*/ function() {
    // nodes we are looking at. Our value depends on these nodes
    // during tracking it's an array with new observed observers
    // to check for cycles
    // N.B: unminified as it is used by MST
    /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */ function ComputedValue(options) {
        this.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_;
        this.observing_ = [];
        this.newObserving_ = null;
        this.isBeingObserved_ = false;
        this.isPendingUnobservation_ = false;
        this.observers_ = new Set();
        this.diffValue_ = 0;
        this.runId_ = 0;
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_;
        this.unboundDepsCount_ = 0;
        this.mapid_ = "#" + $6affecf2d197f5a4$var$getNextId();
        this.value_ = new $6affecf2d197f5a4$var$CaughtException(null);
        this.name_ = void 0;
        this.triggeredBy_ = void 0;
        this.isComputing_ = false;
        this.isRunningSetter_ = false;
        this.derivation = void 0;
        this.setter_ = void 0;
        this.isTracing_ = $6affecf2d197f5a4$var$TraceMode.NONE;
        this.scope_ = void 0;
        this.equals_ = void 0;
        this.requiresReaction_ = void 0;
        this.keepAlive_ = void 0;
        this.onBOL = void 0;
        this.onBUOL = void 0;
        if (!options.get) $6affecf2d197f5a4$var$die(31);
        this.derivation = options.get;
        this.name_ = options.name || "ComputedValue@" + $6affecf2d197f5a4$var$getNextId();
        if (options.set) this.setter_ = $6affecf2d197f5a4$var$createAction(this.name_ + "-setter", options.set);
        this.equals_ = options.equals || (options.compareStructural || options.struct ? $6affecf2d197f5a4$export$6974f9dbb28e0b92.structural : $6affecf2d197f5a4$export$6974f9dbb28e0b92["default"]);
        this.scope_ = options.context;
        this.requiresReaction_ = !!options.requiresReaction;
        this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        $6affecf2d197f5a4$var$propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
        if (this.onBOL) this.onBOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) this.onBUOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.get = function get() {
        if (this.isComputing_) $6affecf2d197f5a4$var$die(32, this.name_, this.derivation);
        if ($6affecf2d197f5a4$var$globalState.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
            if ($6affecf2d197f5a4$var$shouldCompute(this)) {
                this.warnAboutUntrackedRead_();
                $6affecf2d197f5a4$var$startBatch(); // See perf test 'computed memoization'
                this.value_ = this.computeValue_(false);
                $6affecf2d197f5a4$var$endBatch();
            }
        } else {
            $6affecf2d197f5a4$var$reportObserved(this);
            if ($6affecf2d197f5a4$var$shouldCompute(this)) {
                var prevTrackingContext = $6affecf2d197f5a4$var$globalState.trackingContext;
                if (this.keepAlive_ && !prevTrackingContext) $6affecf2d197f5a4$var$globalState.trackingContext = this;
                if (this.trackAndCompute()) $6affecf2d197f5a4$var$propagateChangeConfirmed(this);
                $6affecf2d197f5a4$var$globalState.trackingContext = prevTrackingContext;
            }
        }
        var result = this.value_;
        if ($6affecf2d197f5a4$var$isCaughtException(result)) throw result.cause;
        return result;
    };
    _proto.set = function set(value) {
        if (this.setter_) {
            if (this.isRunningSetter_) $6affecf2d197f5a4$var$die(33, this.name_);
            this.isRunningSetter_ = true;
            try {
                this.setter_.call(this.scope_, value);
            } finally{
                this.isRunningSetter_ = false;
            }
        } else $6affecf2d197f5a4$var$die(34, this.name_);
    };
    _proto.trackAndCompute = function trackAndCompute() {
        // N.B: unminified as it is used by MST
        var oldValue = this.value_;
        var wasSuspended = /* see #1208 */ this.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_;
        var newValue = this.computeValue_(true);
        var changed = wasSuspended || $6affecf2d197f5a4$var$isCaughtException(oldValue) || $6affecf2d197f5a4$var$isCaughtException(newValue) || !this.equals_(oldValue, newValue);
        if (changed) this.value_ = newValue;
        return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
        this.isComputing_ = true; // don't allow state changes during computation
        var prev = $6affecf2d197f5a4$var$allowStateChangesStart(false);
        var res;
        if (track) res = $6affecf2d197f5a4$var$trackDerivedFunction(this, this.derivation, this.scope_);
        else {
            if ($6affecf2d197f5a4$var$globalState.disableErrorBoundaries === true) res = this.derivation.call(this.scope_);
            else try {
                res = this.derivation.call(this.scope_);
            } catch (e) {
                res = new $6affecf2d197f5a4$var$CaughtException(e);
            }
        }
        $6affecf2d197f5a4$var$allowStateChangesEnd(prev);
        this.isComputing_ = false;
        return res;
    };
    _proto.suspend_ = function suspend_() {
        if (!this.keepAlive_) {
            $6affecf2d197f5a4$var$clearObserving(this);
            this.value_ = undefined; // don't hold on to computed value!
        }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return $6affecf2d197f5a4$export$2b96b8059ad14f47(function() {
            // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = $6affecf2d197f5a4$var$untrackedStart();
                listener({
                    observableKind: "computed",
                    debugObjectName: _this.name_,
                    type: $6affecf2d197f5a4$var$UPDATE,
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                $6affecf2d197f5a4$var$untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
        return;
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
        return $6affecf2d197f5a4$var$toPrimitive(this.get());
    };
    _proto[$6affecf2d197f5a4$var$_Symbol$toPrimitive$1] = function() {
        return this.valueOf();
    };
    return ComputedValue;
}();
var $6affecf2d197f5a4$var$isComputedValue = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ComputedValue", $6affecf2d197f5a4$var$ComputedValue);
var $6affecf2d197f5a4$var$IDerivationState_;
(function(IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})($6affecf2d197f5a4$var$IDerivationState_ || ($6affecf2d197f5a4$var$IDerivationState_ = {
}));
var $6affecf2d197f5a4$var$TraceMode;
(function(TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})($6affecf2d197f5a4$var$TraceMode || ($6affecf2d197f5a4$var$TraceMode = {
}));
var $6affecf2d197f5a4$var$CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause; // Empty
};
function $6affecf2d197f5a4$var$isCaughtException(e) {
    return e instanceof $6affecf2d197f5a4$var$CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */ function $6affecf2d197f5a4$var$shouldCompute(derivation) {
    switch(derivation.dependenciesState_){
        case $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_:
            return false;
        case $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_:
        case $6affecf2d197f5a4$var$IDerivationState_.STALE_:
            return true;
        case $6affecf2d197f5a4$var$IDerivationState_.POSSIBLY_STALE_:
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = $6affecf2d197f5a4$export$9d540f75915c046a(true);
            var prevUntracked = $6affecf2d197f5a4$var$untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing_, l = obs.length;
            for(var i = 0; i < l; i++){
                var obj = obs[i];
                if ($6affecf2d197f5a4$var$isComputedValue(obj)) {
                    if ($6affecf2d197f5a4$var$globalState.disableErrorBoundaries) obj.get();
                    else try {
                        obj.get();
                    } catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        $6affecf2d197f5a4$var$untrackedEnd(prevUntracked);
                        $6affecf2d197f5a4$export$d076e515d2e74dc8(prevAllowStateReads);
                        return true;
                    }
                     // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.STALE_) {
                        $6affecf2d197f5a4$var$untrackedEnd(prevUntracked);
                        $6affecf2d197f5a4$export$d076e515d2e74dc8(prevAllowStateReads);
                        return true;
                    }
                }
            }
            $6affecf2d197f5a4$var$changeDependenciesStateTo0(derivation);
            $6affecf2d197f5a4$var$untrackedEnd(prevUntracked);
            $6affecf2d197f5a4$export$d076e515d2e74dc8(prevAllowStateReads);
            return false;
    }
}
function $6affecf2d197f5a4$export$fc79cddbe6a868ee() {
    return $6affecf2d197f5a4$var$globalState.trackingDerivation !== null; // filter out actions inside computations
}
function $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(atom) {
    var hasObservers;
    return;
}
function $6affecf2d197f5a4$var$checkIfStateReadsAreAllowed(observable) {
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */ function $6affecf2d197f5a4$var$trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = $6affecf2d197f5a4$export$9d540f75915c046a(true); // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    $6affecf2d197f5a4$var$changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++$6affecf2d197f5a4$var$globalState.runId;
    var prevTracking = $6affecf2d197f5a4$var$globalState.trackingDerivation;
    $6affecf2d197f5a4$var$globalState.trackingDerivation = derivation;
    $6affecf2d197f5a4$var$globalState.inBatch++;
    var result;
    if ($6affecf2d197f5a4$var$globalState.disableErrorBoundaries === true) result = f.call(context);
    else try {
        result = f.call(context);
    } catch (e) {
        result = new $6affecf2d197f5a4$var$CaughtException(e);
    }
    $6affecf2d197f5a4$var$globalState.inBatch--;
    $6affecf2d197f5a4$var$globalState.trackingDerivation = prevTracking;
    $6affecf2d197f5a4$var$bindDependencies(derivation);
    $6affecf2d197f5a4$var$warnAboutDerivationWithoutDependencies(derivation);
    $6affecf2d197f5a4$export$d076e515d2e74dc8(prevAllowStateReads);
    return result;
}
function $6affecf2d197f5a4$var$warnAboutDerivationWithoutDependencies(derivation) {
    return;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */ function $6affecf2d197f5a4$var$bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount_;
    for(var i = 0; i < l; i++){
        var dep = observing[i];
        if (dep.diffValue_ === 0) {
            dep.diffValue_ = 1;
            if (i0 !== i) observing[i0] = dep;
            i0++;
        } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState_ > lowestNewObservingDerivationState) lowestNewObservingDerivationState = dep.dependenciesState_;
    }
    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while(l--){
        var _dep = prevObserving[l];
        if (_dep.diffValue_ === 0) $6affecf2d197f5a4$var$removeObserver(_dep, derivation);
        _dep.diffValue_ = 0;
    } // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while(i0--){
        var _dep2 = observing[i0];
        if (_dep2.diffValue_ === 1) {
            _dep2.diffValue_ = 0;
            $6affecf2d197f5a4$var$addObserver(_dep2, derivation);
        }
    } // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_) {
        derivation.dependenciesState_ = lowestNewObservingDerivationState;
        derivation.onBecomeStale_();
    }
}
function $6affecf2d197f5a4$var$clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;
    while(i--)$6affecf2d197f5a4$var$removeObserver(obs[i], derivation);
    derivation.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_;
}
function $6affecf2d197f5a4$export$234b0d109a85c610(action) {
    var prev = $6affecf2d197f5a4$var$untrackedStart();
    try {
        return action();
    } finally{
        $6affecf2d197f5a4$var$untrackedEnd(prev);
    }
}
function $6affecf2d197f5a4$var$untrackedStart() {
    var prev = $6affecf2d197f5a4$var$globalState.trackingDerivation;
    $6affecf2d197f5a4$var$globalState.trackingDerivation = null;
    return prev;
}
function $6affecf2d197f5a4$var$untrackedEnd(prev) {
    $6affecf2d197f5a4$var$globalState.trackingDerivation = prev;
}
function $6affecf2d197f5a4$export$9d540f75915c046a(allowStateReads) {
    var prev = $6affecf2d197f5a4$var$globalState.allowStateReads;
    $6affecf2d197f5a4$var$globalState.allowStateReads = allowStateReads;
    return prev;
}
function $6affecf2d197f5a4$export$d076e515d2e74dc8(prev) {
    $6affecf2d197f5a4$var$globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */ function $6affecf2d197f5a4$var$changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_) return;
    derivation.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;
    while(i--)obs[i].lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_;
}
/**
 * These values will persist if global state is reset
 */ var $6affecf2d197f5a4$var$persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED",
    "useProxies"
];
var $6affecf2d197f5a4$var$MobXGlobals = function MobXGlobals() {
    this.version = 6;
    this.UNCHANGED = {
    };
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
};
var $6affecf2d197f5a4$var$canMergeGlobalState = true;
var $6affecf2d197f5a4$var$isolateCalled = false;
var $6affecf2d197f5a4$var$globalState = /*#__PURE__*/ function() {
    var global = /*#__PURE__*/ $6affecf2d197f5a4$var$getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) $6affecf2d197f5a4$var$canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new $6affecf2d197f5a4$var$MobXGlobals().version) $6affecf2d197f5a4$var$canMergeGlobalState = false;
    if (!$6affecf2d197f5a4$var$canMergeGlobalState) {
        setTimeout(function() {
            if (!$6affecf2d197f5a4$var$isolateCalled) $6affecf2d197f5a4$var$die(35);
        }, 1);
        return new $6affecf2d197f5a4$var$MobXGlobals();
    } else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {
        }; // make merge backward compatible
        return global.__mobxGlobals;
    } else {
        global.__mobxInstanceCount = 1;
        return global.__mobxGlobals = /*#__PURE__*/ new $6affecf2d197f5a4$var$MobXGlobals();
    }
}();
function $6affecf2d197f5a4$var$isolateGlobalState() {
    if ($6affecf2d197f5a4$var$globalState.pendingReactions.length || $6affecf2d197f5a4$var$globalState.inBatch || $6affecf2d197f5a4$var$globalState.isRunningReactions) $6affecf2d197f5a4$var$die(36);
    $6affecf2d197f5a4$var$isolateCalled = true;
    if ($6affecf2d197f5a4$var$canMergeGlobalState) {
        var global = $6affecf2d197f5a4$var$getGlobal();
        if ((--global.__mobxInstanceCount) === 0) global.__mobxGlobals = undefined;
        $6affecf2d197f5a4$var$globalState = new $6affecf2d197f5a4$var$MobXGlobals();
    }
}
function $6affecf2d197f5a4$export$3a608f770c631fdb() {
    return $6affecf2d197f5a4$var$globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */ function $6affecf2d197f5a4$export$28ceb3e1dde5e479() {
    var defaultGlobals = new $6affecf2d197f5a4$var$MobXGlobals();
    for(var key in defaultGlobals)if ($6affecf2d197f5a4$var$persistentKeys.indexOf(key) === -1) $6affecf2d197f5a4$var$globalState[key] = defaultGlobals[key];
    $6affecf2d197f5a4$var$globalState.allowStateChanges = !$6affecf2d197f5a4$var$globalState.enforceActions;
}
function $6affecf2d197f5a4$var$hasObservers(observable) {
    return observable.observers_ && observable.observers_.size > 0;
}
function $6affecf2d197f5a4$var$getObservers(observable) {
    return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function $6affecf2d197f5a4$var$addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
// invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function $6affecf2d197f5a4$var$removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);
    if (observable.observers_.size === 0) // deleting last observer
    $6affecf2d197f5a4$var$queueForUnobservation(observable);
     // invariantObservers(observable);
// invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function $6affecf2d197f5a4$var$queueForUnobservation(observable) {
    if (observable.isPendingUnobservation_ === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation_ = true;
        $6affecf2d197f5a4$var$globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */ function $6affecf2d197f5a4$var$startBatch() {
    $6affecf2d197f5a4$var$globalState.inBatch++;
}
function $6affecf2d197f5a4$var$endBatch() {
    if ((--$6affecf2d197f5a4$var$globalState.inBatch) === 0) {
        $6affecf2d197f5a4$var$runReactions(); // the batch is actually about to finish, all unobserving should happen here.
        var list = $6affecf2d197f5a4$var$globalState.pendingUnobservations;
        for(var i = 0; i < list.length; i++){
            var observable = list[i];
            observable.isPendingUnobservation_ = false;
            if (observable.observers_.size === 0) {
                if (observable.isBeingObserved_) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved_ = false;
                    observable.onBUO();
                }
                if (observable instanceof $6affecf2d197f5a4$var$ComputedValue) // computed values are automatically teared down when the last observer leaves
                // this process happens recursively, this computed might be the last observabe of another, etc..
                observable.suspend_();
            }
        }
        $6affecf2d197f5a4$var$globalState.pendingUnobservations = [];
    }
}
function $6affecf2d197f5a4$var$reportObserved(observable) {
    $6affecf2d197f5a4$var$checkIfStateReadsAreAllowed(observable);
    var derivation = $6affecf2d197f5a4$var$globalState.trackingDerivation;
    if (derivation !== null) {
        /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */ if (derivation.runId_ !== observable.lastAccessedBy_) {
            observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
            if (!observable.isBeingObserved_ && $6affecf2d197f5a4$var$globalState.trackingContext) {
                observable.isBeingObserved_ = true;
                observable.onBO();
            }
        }
        return true;
    } else if (observable.observers_.size === 0 && $6affecf2d197f5a4$var$globalState.inBatch > 0) $6affecf2d197f5a4$var$queueForUnobservation(observable);
    return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */ // Called by Atom when its value changes
function $6affecf2d197f5a4$var$propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === $6affecf2d197f5a4$var$IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_) d.onBecomeStale_();
        d.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.STALE_;
    }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed
function $6affecf2d197f5a4$var$propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === $6affecf2d197f5a4$var$IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.STALE_;
        else if (d.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
        ) observable.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_;
    }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function $6affecf2d197f5a4$var$propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_) return;
    observable.lowestObserverState_ = $6affecf2d197f5a4$var$IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === $6affecf2d197f5a4$var$IDerivationState_.UP_TO_DATE_) {
            d.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.POSSIBLY_STALE_;
            d.onBecomeStale_();
        }
    }); // invariantLOS(observable, "maybe end");
}
function $6affecf2d197f5a4$var$logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");
    if (derivation.isTracing_ === $6affecf2d197f5a4$var$TraceMode.BREAK) {
        var lines = [];
        $6affecf2d197f5a4$var$printDepTree($6affecf2d197f5a4$export$887a78ace91d32e4(derivation), lines, 1); // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof $6affecf2d197f5a4$var$ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function $6affecf2d197f5a4$var$printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies) tree.dependencies.forEach(function(child) {
        return $6affecf2d197f5a4$var$printDepTree(child, lines, depth + 1);
    });
}
var $6affecf2d197f5a4$export$6337f3c86b45d74e = /*#__PURE__*/ function() {
    // nodes we are looking at. Our value depends on these nodes
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
        if (name_ === void 0) name_ = "Reaction@" + $6affecf2d197f5a4$var$getNextId();
        if (requiresObservable_ === void 0) requiresObservable_ = false;
        this.name_ = void 0;
        this.onInvalidate_ = void 0;
        this.errorHandler_ = void 0;
        this.requiresObservable_ = void 0;
        this.observing_ = [];
        this.newObserving_ = [];
        this.dependenciesState_ = $6affecf2d197f5a4$var$IDerivationState_.NOT_TRACKING_;
        this.diffValue_ = 0;
        this.runId_ = 0;
        this.unboundDepsCount_ = 0;
        this.mapid_ = "#" + $6affecf2d197f5a4$var$getNextId();
        this.isDisposed_ = false;
        this.isScheduled_ = false;
        this.isTrackPending_ = false;
        this.isRunning_ = false;
        this.isTracing_ = $6affecf2d197f5a4$var$TraceMode.NONE;
        this.name_ = name_;
        this.onInvalidate_ = onInvalidate_;
        this.errorHandler_ = errorHandler_;
        this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
        if (!this.isScheduled_) {
            this.isScheduled_ = true;
            $6affecf2d197f5a4$var$globalState.pendingReactions.push(this);
            $6affecf2d197f5a4$var$runReactions();
        }
    };
    _proto.isScheduled = function isScheduled() {
        return this.isScheduled_;
    };
    _proto.runReaction_ = function runReaction_() {
        if (!this.isDisposed_) {
            $6affecf2d197f5a4$var$startBatch();
            this.isScheduled_ = false;
            if ($6affecf2d197f5a4$var$shouldCompute(this)) {
                this.isTrackPending_ = true;
                try {
                    this.onInvalidate_();
                } catch (e) {
                    this.reportExceptionInDerivation_(e);
                }
            }
            $6affecf2d197f5a4$var$endBatch();
        }
    };
    _proto.track = function track(fn) {
        if (this.isDisposed_) return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        $6affecf2d197f5a4$var$startBatch();
        var notify = $6affecf2d197f5a4$var$isSpyEnabled();
        var startTime;
        this.isRunning_ = true;
        var prevReaction = $6affecf2d197f5a4$var$globalState.trackingContext; // reactions could create reactions...
        $6affecf2d197f5a4$var$globalState.trackingContext = this;
        var result = $6affecf2d197f5a4$var$trackDerivedFunction(this, fn, undefined);
        $6affecf2d197f5a4$var$globalState.trackingContext = prevReaction;
        this.isRunning_ = false;
        this.isTrackPending_ = false;
        if (this.isDisposed_) // disposed during last run. Clean up everything that was bound after the dispose call.
        $6affecf2d197f5a4$var$clearObserving(this);
        if ($6affecf2d197f5a4$var$isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);
        $6affecf2d197f5a4$var$endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
        var _this = this;
        if (this.errorHandler_) {
            this.errorHandler_(error, this);
            return;
        }
        if ($6affecf2d197f5a4$var$globalState.disableErrorBoundaries) throw error;
        var message = "[mobx] uncaught error in '" + this + "'";
        if (!$6affecf2d197f5a4$var$globalState.suppressReactionErrors) console.error(message, error);
         // prettier-ignore
        $6affecf2d197f5a4$var$globalState.globalReactionErrorHandlers.forEach(function(f) {
            return f(error, _this);
        });
    };
    _proto.dispose = function dispose() {
        if (!this.isDisposed_) {
            this.isDisposed_ = true;
            if (!this.isRunning_) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                $6affecf2d197f5a4$var$startBatch();
                $6affecf2d197f5a4$var$clearObserving(this);
                $6affecf2d197f5a4$var$endBatch();
            }
        }
    };
    _proto.getDisposer_ = function getDisposer_() {
        var r = this.dispose.bind(this);
        r[$6affecf2d197f5a4$export$2a62cb88418c26a9] = this;
        return r;
    };
    _proto.toString = function toString() {
        return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
        if (enterBreakPoint === void 0) enterBreakPoint = false;
        $6affecf2d197f5a4$export$a3fc8bc2fe2bc227(this, enterBreakPoint);
    };
    return Reaction;
}();
function $6affecf2d197f5a4$export$84da708d1240b2d7(handler) {
    $6affecf2d197f5a4$var$globalState.globalReactionErrorHandlers.push(handler);
    return function() {
        var idx = $6affecf2d197f5a4$var$globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0) $6affecf2d197f5a4$var$globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */ var $6affecf2d197f5a4$var$MAX_REACTION_ITERATIONS = 100;
var $6affecf2d197f5a4$var$reactionScheduler = function reactionScheduler(f) {
    return f();
};
function $6affecf2d197f5a4$var$runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if ($6affecf2d197f5a4$var$globalState.inBatch > 0 || $6affecf2d197f5a4$var$globalState.isRunningReactions) return;
    $6affecf2d197f5a4$var$reactionScheduler($6affecf2d197f5a4$var$runReactionsHelper);
}
function $6affecf2d197f5a4$var$runReactionsHelper() {
    $6affecf2d197f5a4$var$globalState.isRunningReactions = true;
    var allReactions = $6affecf2d197f5a4$var$globalState.pendingReactions;
    var iterations = 0; // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while(allReactions.length > 0){
        if ((++iterations) === $6affecf2d197f5a4$var$MAX_REACTION_ITERATIONS) {
            console.error("[mobx] cycle in reaction: " + allReactions[0]);
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for(var i = 0, l = remainingReactions.length; i < l; i++)remainingReactions[i].runReaction_();
    }
    $6affecf2d197f5a4$var$globalState.isRunningReactions = false;
}
var $6affecf2d197f5a4$var$isReaction = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("Reaction", $6affecf2d197f5a4$export$6337f3c86b45d74e);
function $6affecf2d197f5a4$var$setReactionScheduler(fn) {
    var baseScheduler = $6affecf2d197f5a4$var$reactionScheduler;
    $6affecf2d197f5a4$var$reactionScheduler = function reactionScheduler1(f) {
        return fn(function() {
            return baseScheduler(f);
        });
    };
}
function $6affecf2d197f5a4$var$isSpyEnabled() {
    return false;
}
function $6affecf2d197f5a4$var$spyReport(event) {
    var listeners, i, l;
    return; // dead code elimination can do the rest
}
function $6affecf2d197f5a4$var$spyReportStart(event) {
    var change;
    return;
}
var $6affecf2d197f5a4$var$END_EVENT = {
    type: "report-end",
    spyReportEnd: true
};
function $6affecf2d197f5a4$var$spyReportEnd(change) {
    return;
}
function $6affecf2d197f5a4$export$cda8d703ca5d35c6(listener) {
    var l;
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
}
var $6affecf2d197f5a4$var$ACTION = "action";
var $6affecf2d197f5a4$var$ACTION_BOUND = "action.bound";
var $6affecf2d197f5a4$var$AUTOACTION = "autoAction";
var $6affecf2d197f5a4$var$AUTOACTION_BOUND = "autoAction.bound";
var $6affecf2d197f5a4$var$ACTION_UNNAMED = "<unnamed action>";
function $6affecf2d197f5a4$var$createActionFactory(autoAction, annotation) {
    var res = function action(arg1, arg2) {
        // action(fn() {})
        if ($6affecf2d197f5a4$var$isFunction(arg1)) return $6affecf2d197f5a4$var$createAction(arg1.name || $6affecf2d197f5a4$var$ACTION_UNNAMED, arg1, autoAction); // action("name", fn() {})
        if ($6affecf2d197f5a4$var$isFunction(arg2)) return $6affecf2d197f5a4$var$createAction(arg1, arg2, autoAction); // @action
        if ($6affecf2d197f5a4$var$isStringish(arg2)) return $6affecf2d197f5a4$var$storeDecorator(arg1, arg2, annotation);
         // Annation: action("name") & @action("name")
        if ($6affecf2d197f5a4$var$isStringish(arg1)) return $6affecf2d197f5a4$var$createDecoratorAndAnnotation(annotation, arg1);
    };
    res.annotationType_ = annotation;
    return res;
}
var $6affecf2d197f5a4$export$7b9a2752bdcfbfd4 = /*#__PURE__*/ $6affecf2d197f5a4$var$createActionFactory(false, $6affecf2d197f5a4$var$ACTION);
var $6affecf2d197f5a4$export$40673ad6644c3a93 = /*#__PURE__*/ $6affecf2d197f5a4$var$createActionFactory(true, $6affecf2d197f5a4$var$AUTOACTION);
$6affecf2d197f5a4$export$7b9a2752bdcfbfd4.bound = /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$ACTION_BOUND);
$6affecf2d197f5a4$export$40673ad6644c3a93.bound = /*#__PURE__*/ $6affecf2d197f5a4$var$createDecorator($6affecf2d197f5a4$var$AUTOACTION_BOUND);
function $6affecf2d197f5a4$export$b2f4a3b7af88da14(fn) {
    return $6affecf2d197f5a4$var$executeAction(fn.name || $6affecf2d197f5a4$var$ACTION_UNNAMED, false, fn, this, undefined);
}
function $6affecf2d197f5a4$export$478339b63a1e59ff(thing) {
    return $6affecf2d197f5a4$var$isFunction(thing) && thing.isMobxAction === true;
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */ function $6affecf2d197f5a4$export$2b96b8059ad14f47(view, opts) {
    if (opts === void 0) opts = $6affecf2d197f5a4$var$EMPTY_OBJECT;
    var name = opts && opts.name || view.name || "Autorun@" + $6affecf2d197f5a4$var$getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) // normal autorun
    reaction = new $6affecf2d197f5a4$export$6337f3c86b45d74e(name, function() {
        this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
    else {
        var scheduler = $6affecf2d197f5a4$var$createSchedulerFromOptions(opts); // debounced autorun
        var isScheduled = false;
        reaction = new $6affecf2d197f5a4$export$6337f3c86b45d74e(name, function() {
            if (!isScheduled) {
                isScheduled = true;
                scheduler(function() {
                    isScheduled = false;
                    if (!reaction.isDisposed_) reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule_();
    return reaction.getDisposer_();
}
var $6affecf2d197f5a4$var$run = function run(f) {
    return f();
};
function $6affecf2d197f5a4$var$createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
        return setTimeout(f, opts.delay);
    } : $6affecf2d197f5a4$var$run;
}
function $6affecf2d197f5a4$export$f2e63d15ada6701a(expression, effect, opts) {
    if (opts === void 0) opts = $6affecf2d197f5a4$var$EMPTY_OBJECT;
    var name = opts.name || "Reaction@" + $6affecf2d197f5a4$var$getNextId();
    var effectAction = $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name, opts.onError ? $6affecf2d197f5a4$var$wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = $6affecf2d197f5a4$var$createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var oldValue = undefined; // only an issue with fireImmediately
    var equals = opts.compareStructural ? $6affecf2d197f5a4$export$6974f9dbb28e0b92.structural : opts.equals || $6affecf2d197f5a4$export$6974f9dbb28e0b92["default"];
    var r = new $6affecf2d197f5a4$export$6337f3c86b45d74e(name, function() {
        if (firstTime || runSync) reactionRunner();
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false;
        if (r.isDisposed_) return;
        var changed = false;
        r.track(function() {
            var nextValue = $6affecf2d197f5a4$export$add97352ee9bd4b0(false, function() {
                return expression(r);
            });
            changed = firstTime || !equals(value, nextValue);
            oldValue = value;
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);
        else if (!firstTime && changed) effectAction(value, oldValue, r);
        firstTime = false;
    }
    r.schedule_();
    return r.getDisposer_();
}
function $6affecf2d197f5a4$var$wrapErrorHandler(errorHandler, baseFn) {
    return function() {
        try {
            return baseFn.apply(this, arguments);
        } catch (e) {
            errorHandler.call(this, e);
        }
    };
}
var $6affecf2d197f5a4$var$ON_BECOME_OBSERVED = "onBO";
var $6affecf2d197f5a4$var$ON_BECOME_UNOBSERVED = "onBUO";
function $6affecf2d197f5a4$export$7d2a45bd6474ec77(thing, arg2, arg3) {
    return $6affecf2d197f5a4$var$interceptHook($6affecf2d197f5a4$var$ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function $6affecf2d197f5a4$export$6e5aff80e7d0bfc8(thing, arg2, arg3) {
    return $6affecf2d197f5a4$var$interceptHook($6affecf2d197f5a4$var$ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function $6affecf2d197f5a4$var$interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? $6affecf2d197f5a4$export$ea2cc763fb272afa(thing, arg2) : $6affecf2d197f5a4$export$ea2cc763fb272afa(thing);
    var cb = $6affecf2d197f5a4$var$isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) atom[listenersKey].add(cb);
    else atom[listenersKey] = new Set([
        cb
    ]);
    return function() {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners["delete"](cb);
            if (hookListeners.size === 0) delete atom[listenersKey];
        }
    };
}
var $6affecf2d197f5a4$var$NEVER = "never";
var $6affecf2d197f5a4$var$ALWAYS = "always";
var $6affecf2d197f5a4$var$OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"
function $6affecf2d197f5a4$export$c0b0ca455467112f(options) {
    if (options.isolateGlobalState === true) $6affecf2d197f5a4$var$isolateGlobalState();
    var useProxies = options.useProxies, enforceActions = options.enforceActions;
    if (useProxies !== undefined) $6affecf2d197f5a4$var$globalState.useProxies = useProxies === $6affecf2d197f5a4$var$ALWAYS ? true : useProxies === $6affecf2d197f5a4$var$NEVER ? false : typeof Proxy !== "undefined";
    if (useProxies === "ifavailable") $6affecf2d197f5a4$var$globalState.verifyProxies = true;
    if (enforceActions !== undefined) {
        var ea = enforceActions === $6affecf2d197f5a4$var$ALWAYS ? $6affecf2d197f5a4$var$ALWAYS : enforceActions === $6affecf2d197f5a4$var$OBSERVED;
        $6affecf2d197f5a4$var$globalState.enforceActions = ea;
        $6affecf2d197f5a4$var$globalState.allowStateChanges = ea === true || ea === $6affecf2d197f5a4$var$ALWAYS ? false : true;
    }
    [
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "disableErrorBoundaries"
    ].forEach(function(key) {
        if (key in options) $6affecf2d197f5a4$var$globalState[key] = !!options[key];
    });
    $6affecf2d197f5a4$var$globalState.allowStateReads = !$6affecf2d197f5a4$var$globalState.observableRequiresReaction;
    if (options.reactionScheduler) $6affecf2d197f5a4$var$setReactionScheduler(options.reactionScheduler);
}
function $6affecf2d197f5a4$export$c16c7480cfa7ffd8(target, properties, annotations, options) {
    var o = $6affecf2d197f5a4$var$asCreateObservableOptions(options);
    var adm = $6affecf2d197f5a4$var$asObservableObject(target, o.name, $6affecf2d197f5a4$var$getEnhancerFromOption(o));
    $6affecf2d197f5a4$var$startBatch();
    try {
        var descs = $6affecf2d197f5a4$var$getOwnPropertyDescriptors(properties);
        $6affecf2d197f5a4$var$getPlainObjectKeys(descs).forEach(function(key) {
            $6affecf2d197f5a4$var$makeProperty(adm, target, key, descs[key], !annotations ? true : key in annotations ? annotations[key] : true, true, !!(options == null ? void 0 : options.autoBind));
        });
    } finally{
        $6affecf2d197f5a4$var$endBatch();
    }
    return target;
}
function $6affecf2d197f5a4$export$887a78ace91d32e4(thing, property) {
    return $6affecf2d197f5a4$var$nodeToDependencyTree($6affecf2d197f5a4$export$ea2cc763fb272afa(thing, property));
}
function $6affecf2d197f5a4$var$nodeToDependencyTree(node) {
    var result = {
        name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) result.dependencies = $6affecf2d197f5a4$var$unique(node.observing_).map($6affecf2d197f5a4$var$nodeToDependencyTree);
    return result;
}
function $6affecf2d197f5a4$export$27d7959aac04d39c(thing, property) {
    return $6affecf2d197f5a4$var$nodeToObserverTree($6affecf2d197f5a4$export$ea2cc763fb272afa(thing, property));
}
function $6affecf2d197f5a4$var$nodeToObserverTree(node) {
    var result = {
        name: node.name_
    };
    if ($6affecf2d197f5a4$var$hasObservers(node)) result.observers = Array.from($6affecf2d197f5a4$var$getObservers(node)).map($6affecf2d197f5a4$var$nodeToObserverTree);
    return result;
}
function $6affecf2d197f5a4$var$unique(list) {
    return Array.from(new Set(list));
}
var $6affecf2d197f5a4$var$FLOW = "flow";
var $6affecf2d197f5a4$var$generatorId = 0;
function $6affecf2d197f5a4$export$e6e6e69488211cb0() {
    this.message = "FLOW_CANCELLED";
}
$6affecf2d197f5a4$export$e6e6e69488211cb0.prototype = /*#__PURE__*/ Object.create(Error.prototype);
function $6affecf2d197f5a4$export$e390fd935cc4f1(error) {
    return error instanceof $6affecf2d197f5a4$export$e6e6e69488211cb0;
}
var $6affecf2d197f5a4$export$179a05bb73843405 = /*#__PURE__*/ Object.assign(function flow(arg1, arg2) {
    // @flow
    if ($6affecf2d197f5a4$var$isStringish(arg2)) return $6affecf2d197f5a4$var$storeDecorator(arg1, arg2, "flow");
     // flow(fn)
    var generator = arg1;
    var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js
    var res = function res1() {
        var ctx = this;
        var args = arguments;
        var runId = ++$6affecf2d197f5a4$var$generatorId;
        var gen = $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function(resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res2) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res2);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if ($6affecf2d197f5a4$var$isFunction(ret == null ? void 0 : ret.then)) {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done) return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name + " - runid: " + runId + " - cancel", function() {
            try {
                if (pendingPromise) $6affecf2d197f5a4$var$cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..
                var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(_res.value);
                yieldedPromise.then($6affecf2d197f5a4$var$noop, $6affecf2d197f5a4$var$noop);
                $6affecf2d197f5a4$var$cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new $6affecf2d197f5a4$export$e6e6e69488211cb0());
            } catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
    res.isMobXFlow = true;
    return res;
}, {
    annotationType_: "flow"
});
function $6affecf2d197f5a4$var$cancelPromise(promise) {
    if ($6affecf2d197f5a4$var$isFunction(promise.cancel)) promise.cancel();
}
function $6affecf2d197f5a4$export$e1394b52ee296fe9(result) {
    return result; // just tricking TypeScript :)
}
function $6affecf2d197f5a4$var$isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function $6affecf2d197f5a4$export$2b9bf3d94243ffb3(thing, propOrHandler, handler) {
    var target;
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(thing) || $6affecf2d197f5a4$export$8e83b0c96ff20b9f(thing) || $6affecf2d197f5a4$export$d2be2fb7004b9c4a(thing)) target = $6affecf2d197f5a4$export$8791236bd035f0ca(thing);
    else if ($6affecf2d197f5a4$export$b6c27f05de185aac(thing)) target = $6affecf2d197f5a4$export$8791236bd035f0ca(thing, propOrHandler);
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function() {
        target.dehancer = undefined;
    };
}
function $6affecf2d197f5a4$export$1cfd095aadcb3f28(thing, propOrHandler, handler) {
    if ($6affecf2d197f5a4$var$isFunction(handler)) return $6affecf2d197f5a4$var$interceptProperty(thing, propOrHandler, handler);
    else return $6affecf2d197f5a4$var$interceptInterceptable(thing, propOrHandler);
}
function $6affecf2d197f5a4$var$interceptInterceptable(thing, handler) {
    return $6affecf2d197f5a4$export$8791236bd035f0ca(thing).intercept_(handler);
}
function $6affecf2d197f5a4$var$interceptProperty(thing, property, handler) {
    return $6affecf2d197f5a4$export$8791236bd035f0ca(thing, property).intercept_(handler);
}
function $6affecf2d197f5a4$var$_isComputed(value, property) {
    if (property !== undefined) {
        if ($6affecf2d197f5a4$export$b6c27f05de185aac(value) === false) return false;
        if (!value[$6affecf2d197f5a4$export$2a62cb88418c26a9].values_.has(property)) return false;
        var atom = $6affecf2d197f5a4$export$ea2cc763fb272afa(value, property);
        return $6affecf2d197f5a4$var$isComputedValue(atom);
    }
    return $6affecf2d197f5a4$var$isComputedValue(value);
}
function $6affecf2d197f5a4$export$a6dacd8a22d6eca7(value) {
    return $6affecf2d197f5a4$var$_isComputed(value);
}
function $6affecf2d197f5a4$export$6e11f86a7fe2f426(value, propName) {
    return $6affecf2d197f5a4$var$_isComputed(value, propName);
}
function $6affecf2d197f5a4$var$_isObservable(value, property) {
    if (!value) return false;
    if (property !== undefined) {
        if ($6affecf2d197f5a4$export$b6c27f05de185aac(value)) return value[$6affecf2d197f5a4$export$2a62cb88418c26a9].values_.has(property);
        return false;
    } // For first check, see #701
    return $6affecf2d197f5a4$export$b6c27f05de185aac(value) || !!value[$6affecf2d197f5a4$export$2a62cb88418c26a9] || $6affecf2d197f5a4$var$isAtom(value) || $6affecf2d197f5a4$var$isReaction(value) || $6affecf2d197f5a4$var$isComputedValue(value);
}
function $6affecf2d197f5a4$export$e2a3ee4fe9f3b187(value) {
    return $6affecf2d197f5a4$var$_isObservable(value);
}
function $6affecf2d197f5a4$export$753a3f84239b3fe7(value, propName) {
    return $6affecf2d197f5a4$var$_isObservable(value, propName);
}
function $6affecf2d197f5a4$export$c2cdcb18fde9adc3(obj) {
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) return obj[$6affecf2d197f5a4$export$2a62cb88418c26a9].getKeys_();
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj) || $6affecf2d197f5a4$export$f6dcb07064e30261(obj)) return Array.from(obj.keys());
    if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) return obj.map(function(_, index) {
        return index;
    });
    $6affecf2d197f5a4$var$die(5);
}
function $6affecf2d197f5a4$export$a3919495473daaee(obj) {
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) return $6affecf2d197f5a4$export$c2cdcb18fde9adc3(obj).map(function(key) {
        return obj[key];
    });
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) return $6affecf2d197f5a4$export$c2cdcb18fde9adc3(obj).map(function(key) {
        return obj.get(key);
    });
    if ($6affecf2d197f5a4$export$f6dcb07064e30261(obj)) return Array.from(obj.values());
    if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) return obj.slice();
    $6affecf2d197f5a4$var$die(6);
}
function $6affecf2d197f5a4$export$81a1504436b4693c(obj) {
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) return $6affecf2d197f5a4$export$c2cdcb18fde9adc3(obj).map(function(key) {
        return [
            key,
            obj[key]
        ];
    });
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) return $6affecf2d197f5a4$export$c2cdcb18fde9adc3(obj).map(function(key) {
        return [
            key,
            obj.get(key)
        ];
    });
    if ($6affecf2d197f5a4$export$f6dcb07064e30261(obj)) return Array.from(obj.entries());
    if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) return obj.map(function(key, index) {
        return [
            index,
            key
        ];
    });
    $6affecf2d197f5a4$var$die(7);
}
function $6affecf2d197f5a4$export$77f8d2fc923b14e3(obj, key, value) {
    if (arguments.length === 2 && !$6affecf2d197f5a4$export$f6dcb07064e30261(obj)) {
        $6affecf2d197f5a4$var$startBatch();
        var _values = key;
        try {
            for(var _key in _values)$6affecf2d197f5a4$export$77f8d2fc923b14e3(obj, _key, _values[_key]);
        } finally{
            $6affecf2d197f5a4$var$endBatch();
        }
        return;
    }
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) {
        var adm = obj[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        var existingObservable = adm.values_.get(key);
        if (existingObservable) adm.write_(key, value);
        else adm.addObservableProp_(key, value, adm.defaultEnhancer_);
    } else if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) obj.set(key, value);
    else if ($6affecf2d197f5a4$export$f6dcb07064e30261(obj)) obj.add(key);
    else if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        if (key < 0) $6affecf2d197f5a4$var$die("Invalid index: '" + key + "'");
        $6affecf2d197f5a4$var$startBatch();
        if (key >= obj.length) obj.length = key + 1;
        obj[key] = value;
        $6affecf2d197f5a4$var$endBatch();
    } else $6affecf2d197f5a4$var$die(8);
}
function $6affecf2d197f5a4$export$ef36db36be1049b2(obj, key) {
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) obj[$6affecf2d197f5a4$export$2a62cb88418c26a9].remove_(key);
    else if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) obj["delete"](key);
    else if ($6affecf2d197f5a4$export$f6dcb07064e30261(obj)) obj["delete"](key);
    else if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        obj.splice(key, 1);
    } else $6affecf2d197f5a4$var$die(9);
}
function $6affecf2d197f5a4$export$2ae9c6247c57563e(obj, key) {
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) // return keys(obj).indexOf(key) >= 0
    return $6affecf2d197f5a4$export$8791236bd035f0ca(obj).has_(key);
    else if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) return obj.has(key);
    else if ($6affecf2d197f5a4$export$f6dcb07064e30261(obj)) return obj.has(key);
    else if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) return key >= 0 && key < obj.length;
    $6affecf2d197f5a4$var$die(10);
}
function $6affecf2d197f5a4$export$7eb84799c931fe91(obj, key) {
    if (!$6affecf2d197f5a4$export$2ae9c6247c57563e(obj, key)) return undefined;
    if ($6affecf2d197f5a4$export$b6c27f05de185aac(obj)) return obj[key];
    else if ($6affecf2d197f5a4$export$bb89e35ee75744d4(obj)) return obj.get(key);
    else if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(obj)) return obj[key];
    $6affecf2d197f5a4$var$die(11);
}
function $6affecf2d197f5a4$export$d9a99ac801c3ac8d(thing, propOrCb, cbOrFire, fireImmediately) {
    if ($6affecf2d197f5a4$var$isFunction(cbOrFire)) return $6affecf2d197f5a4$var$observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else return $6affecf2d197f5a4$var$observeObservable(thing, propOrCb, cbOrFire);
}
function $6affecf2d197f5a4$var$observeObservable(thing, listener, fireImmediately) {
    return $6affecf2d197f5a4$export$8791236bd035f0ca(thing).observe_(listener, fireImmediately);
}
function $6affecf2d197f5a4$var$observeObservableProperty(thing, property, listener, fireImmediately) {
    return $6affecf2d197f5a4$export$8791236bd035f0ca(thing, property).observe_(listener, fireImmediately);
}
function $6affecf2d197f5a4$var$cache(map, key, value) {
    map.set(key, value);
    return value;
}
function $6affecf2d197f5a4$var$toJSHelper(source, __alreadySeen) {
    if (source == null || typeof source !== "object" || source instanceof Date || !$6affecf2d197f5a4$export$e2a3ee4fe9f3b187(source)) return source;
    if ($6affecf2d197f5a4$export$d2be2fb7004b9c4a(source)) return $6affecf2d197f5a4$var$toJSHelper(source.get(), __alreadySeen);
    if (__alreadySeen.has(source)) return __alreadySeen.get(source);
    if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(source)) {
        var res = $6affecf2d197f5a4$var$cache(__alreadySeen, source, new Array(source.length));
        source.forEach(function(value, idx) {
            res[idx] = $6affecf2d197f5a4$var$toJSHelper(value, __alreadySeen);
        });
        return res;
    }
    if ($6affecf2d197f5a4$export$f6dcb07064e30261(source)) {
        var _res = $6affecf2d197f5a4$var$cache(__alreadySeen, source, new Set());
        source.forEach(function(value) {
            _res.add($6affecf2d197f5a4$var$toJSHelper(value, __alreadySeen));
        });
        return _res;
    }
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(source)) {
        var _res2 = $6affecf2d197f5a4$var$cache(__alreadySeen, source, new Map());
        source.forEach(function(value, key) {
            _res2.set(key, $6affecf2d197f5a4$var$toJSHelper(value, __alreadySeen));
        });
        return _res2;
    } else {
        // must be observable object
        $6affecf2d197f5a4$export$c2cdcb18fde9adc3(source); // make sure keys are observed
        var _res3 = $6affecf2d197f5a4$var$cache(__alreadySeen, source, {
        });
        $6affecf2d197f5a4$var$getPlainObjectKeys(source).forEach(function(key) {
            _res3[key] = $6affecf2d197f5a4$var$toJSHelper(source[key], __alreadySeen);
        });
        return _res3;
    }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */ function $6affecf2d197f5a4$export$51c0dca5b48478be(source, options) {
    return $6affecf2d197f5a4$var$toJSHelper(source, new Map());
}
function $6affecf2d197f5a4$export$a3fc8bc2fe2bc227() {
    $6affecf2d197f5a4$var$die("trace() is not available in production builds");
    var enterBreakPoint = false;
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = $6affecf2d197f5a4$var$getAtomFromArgs(args);
    if (!derivation) return $6affecf2d197f5a4$var$die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    if (derivation.isTracing_ === $6affecf2d197f5a4$var$TraceMode.NONE) console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    derivation.isTracing_ = enterBreakPoint ? $6affecf2d197f5a4$var$TraceMode.BREAK : $6affecf2d197f5a4$var$TraceMode.LOG;
}
function $6affecf2d197f5a4$var$getAtomFromArgs(args) {
    switch(args.length){
        case 0:
            return $6affecf2d197f5a4$var$globalState.trackingDerivation;
        case 1:
            return $6affecf2d197f5a4$export$ea2cc763fb272afa(args[0]);
        case 2:
            return $6affecf2d197f5a4$export$ea2cc763fb272afa(args[0], args[1]);
    }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */ function $6affecf2d197f5a4$export$787f1bc6927a9a9a(action, thisArg) {
    if (thisArg === void 0) thisArg = undefined;
    $6affecf2d197f5a4$var$startBatch();
    try {
        return action.apply(thisArg);
    } finally{
        $6affecf2d197f5a4$var$endBatch();
    }
}
function $6affecf2d197f5a4$export$7bb144cb628f2285(predicate, arg1, arg2) {
    if (arguments.length === 1 || arg1 && typeof arg1 === "object") return $6affecf2d197f5a4$var$whenPromise(predicate, arg1);
    return $6affecf2d197f5a4$var$_when(predicate, arg1, arg2 || {
    });
}
function $6affecf2d197f5a4$var$_when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") timeoutHandle = setTimeout(function() {
        if (!disposer[$6affecf2d197f5a4$export$2a62cb88418c26a9].isDisposed_) {
            disposer();
            var error = new Error("WHEN_TIMEOUT");
            if (opts.onError) opts.onError(error);
            else throw error;
        }
    }, opts.timeout);
    opts.name = opts.name || "When@" + $6affecf2d197f5a4$var$getNextId();
    var effectAction = $6affecf2d197f5a4$var$createAction(opts.name + "-effect", effect); // eslint-disable-next-line
    var disposer = $6affecf2d197f5a4$export$2b96b8059ad14f47(function(r) {
        // predicate should not change state
        var cond = $6affecf2d197f5a4$export$add97352ee9bd4b0(false, predicate);
        if (cond) {
            r.dispose();
            if (timeoutHandle) clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function $6affecf2d197f5a4$var$whenPromise(predicate, opts) {
    var cancel;
    var res = new Promise(function(resolve, reject) {
        var disposer = $6affecf2d197f5a4$var$_when(predicate, resolve, $6affecf2d197f5a4$var$_extends({
        }, opts, {
            onError: reject
        }));
        cancel = function cancel1() {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}
function $6affecf2d197f5a4$var$getAdm(target) {
    return target[$6affecf2d197f5a4$export$2a62cb88418c26a9];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var $6affecf2d197f5a4$var$objectProxyTraps = {
    has: function has(target, name) {
        if (name === $6affecf2d197f5a4$export$2a62cb88418c26a9 || name === "constructor") return true;
        var adm = $6affecf2d197f5a4$var$getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // check performance stats!
        // if (adm.values.get(name as string)) return true
        if ($6affecf2d197f5a4$var$isStringish(name)) return adm.has_(name);
        return name in target;
    },
    get: function get(target, name) {
        if (name === $6affecf2d197f5a4$export$2a62cb88418c26a9 || name === "constructor") return target[name];
        var adm = $6affecf2d197f5a4$var$getAdm(target);
        var observable = adm.values_.get(name);
        if (observable instanceof $6affecf2d197f5a4$var$Atom) {
            var result = observable.get();
            if (result === undefined) // This fixes #1796, because deleting a prop that has an
            // undefined value won't retrigger a observer (no visible effect),
            // the autorun wouldn't subscribe to future key changes (see also next comment)
            adm.has_(name);
            return result;
        } // make sure we start listening to future keys
        // note that we only do this here for optimization
        if ($6affecf2d197f5a4$var$isStringish(name)) adm.has_(name);
        return target[name];
    },
    set: function set$1(target, name, value) {
        if (!$6affecf2d197f5a4$var$isStringish(name)) return false;
        $6affecf2d197f5a4$export$77f8d2fc923b14e3(target, name, value);
        return true;
    },
    deleteProperty: function deleteProperty(target, name) {
        if (!$6affecf2d197f5a4$var$isStringish(name)) return false;
        var adm = $6affecf2d197f5a4$var$getAdm(target);
        adm.remove_(name);
        return true;
    },
    ownKeys: function ownKeys(target) {
        var adm = $6affecf2d197f5a4$var$getAdm(target);
        adm.keysAtom_.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function preventExtensions(target) {
        $6affecf2d197f5a4$var$die(13);
    }
};
function $6affecf2d197f5a4$var$createDynamicObservableObject(base) {
    $6affecf2d197f5a4$var$assertProxies();
    var proxy = new Proxy(base, $6affecf2d197f5a4$var$objectProxyTraps);
    base[$6affecf2d197f5a4$export$2a62cb88418c26a9].proxy_ = proxy;
    return proxy;
}
function $6affecf2d197f5a4$var$hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function $6affecf2d197f5a4$var$registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return $6affecf2d197f5a4$var$once(function() {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1) interceptors.splice(idx, 1);
    });
}
function $6affecf2d197f5a4$var$interceptChange(interceptable, change) {
    var prevU = $6affecf2d197f5a4$var$untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = [].concat(interceptable.interceptors_ || []);
        for(var i = 0, l = interceptors.length; i < l; i++){
            change = interceptors[i](change);
            if (change && !change.type) $6affecf2d197f5a4$var$die(14);
            if (!change) break;
        }
        return change;
    } finally{
        $6affecf2d197f5a4$var$untrackedEnd(prevU);
    }
}
function $6affecf2d197f5a4$var$hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function $6affecf2d197f5a4$var$registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return $6affecf2d197f5a4$var$once(function() {
        var idx = listeners.indexOf(handler);
        if (idx !== -1) listeners.splice(idx, 1);
    });
}
function $6affecf2d197f5a4$var$notifyListeners(listenable, change) {
    var prevU = $6affecf2d197f5a4$var$untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) return;
    listeners = listeners.slice();
    for(var i = 0, l = listeners.length; i < l; i++)listeners[i](change);
    $6affecf2d197f5a4$var$untrackedEnd(prevU);
}
var $6affecf2d197f5a4$var$CACHED_ANNOTATIONS = /*#__PURE__*/ Symbol("mobx-cached-annotations");
function $6affecf2d197f5a4$var$makeAction(target, key, name, fn, asAutoAction) {
    $6affecf2d197f5a4$var$addHiddenProp(target, key, asAutoAction ? $6affecf2d197f5a4$export$40673ad6644c3a93(name || key, fn) : $6affecf2d197f5a4$export$7b9a2752bdcfbfd4(name || key, fn));
}
function $6affecf2d197f5a4$var$getInferredAnnotation(desc, defaultAnnotation, autoBind) {
    if (desc.get) return $6affecf2d197f5a4$export$e23ddc2fc1228fe8;
    if (desc.set) return false; // ignore pure setters
    // if already wrapped in action, don't do that another time, but assume it is already set up properly
    if ($6affecf2d197f5a4$var$isFunction(desc.value)) return $6affecf2d197f5a4$var$isGenerator(desc.value) ? $6affecf2d197f5a4$export$179a05bb73843405 : $6affecf2d197f5a4$export$478339b63a1e59ff(desc.value) ? false : autoBind ? $6affecf2d197f5a4$export$40673ad6644c3a93.bound : $6affecf2d197f5a4$export$40673ad6644c3a93; // if (!desc.configurable || !desc.writable) return false
    return defaultAnnotation != null ? defaultAnnotation : $6affecf2d197f5a4$export$5af762eb508641fe.deep;
}
function $6affecf2d197f5a4$var$getDescriptorInChain(target, prop) {
    var current = target;
    while(current && current !== $6affecf2d197f5a4$var$objectPrototype){
        // Optimization: cache meta data, especially for members from prototypes?
        var desc = $6affecf2d197f5a4$var$getDescriptor(current, prop);
        if (desc) return [
            desc,
            current
        ];
        current = Object.getPrototypeOf(current);
    }
    $6affecf2d197f5a4$var$die(1, prop);
}
function $6affecf2d197f5a4$var$makeProperty(adm, owner, key, descriptor, annotation, forceCopy, autoBind) {
    var _annotation$annotatio;
    var target = adm.target_;
    var defaultAnnotation = $6affecf2d197f5a4$export$5af762eb508641fe; // ideally grap this from adm's defaultEnahncer instead!
    var originAnnotation = annotation;
    if (annotation === true) annotation = $6affecf2d197f5a4$var$getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
    if (annotation === false) {
        if (forceCopy) $6affecf2d197f5a4$var$defineProperty(target, key, descriptor);
        return;
    }
    if (!annotation || annotation === true || !annotation.annotationType_) return $6affecf2d197f5a4$var$die(2, key);
    var type = annotation.annotationType_;
    switch(type){
        case $6affecf2d197f5a4$var$AUTOACTION:
        case $6affecf2d197f5a4$var$ACTION:
            var fn = descriptor.value;
            if (!$6affecf2d197f5a4$var$isFunction(fn)) $6affecf2d197f5a4$var$die(3, key);
            if (owner !== target && !forceCopy) {
                if (!$6affecf2d197f5a4$export$478339b63a1e59ff(owner[key])) $6affecf2d197f5a4$var$makeAction(owner, key, annotation.arg_, fn, type === $6affecf2d197f5a4$var$AUTOACTION);
            } else $6affecf2d197f5a4$var$makeAction(target, key, annotation.arg_, fn, type === $6affecf2d197f5a4$var$AUTOACTION);
            break;
        case $6affecf2d197f5a4$var$AUTOACTION_BOUND:
        case $6affecf2d197f5a4$var$ACTION_BOUND:
            var _fn = descriptor.value;
            if (!$6affecf2d197f5a4$var$isFunction(_fn)) $6affecf2d197f5a4$var$die(3, key);
            $6affecf2d197f5a4$var$makeAction(target, key, annotation.arg_, _fn.bind(adm.proxy_ || target), type === $6affecf2d197f5a4$var$AUTOACTION_BOUND);
            break;
        case $6affecf2d197f5a4$var$FLOW:
            if (owner !== target && !forceCopy) {
                if (!$6affecf2d197f5a4$var$isFlow(owner[key])) $6affecf2d197f5a4$var$addHiddenProp(owner, key, $6affecf2d197f5a4$export$179a05bb73843405(descriptor.value));
            } else $6affecf2d197f5a4$var$addHiddenProp(target, key, $6affecf2d197f5a4$export$179a05bb73843405(descriptor.value));
            break;
        case $6affecf2d197f5a4$var$COMPUTED:
        case $6affecf2d197f5a4$var$COMPUTED_STRUCT:
            if (!descriptor.get) $6affecf2d197f5a4$var$die(4, key);
            adm.addComputedProp_(target, key, $6affecf2d197f5a4$var$_extends({
                get: descriptor.get,
                set: descriptor.set,
                compareStructural: annotation.annotationType_ === $6affecf2d197f5a4$var$COMPUTED_STRUCT
            }, annotation.arg_));
            break;
        case $6affecf2d197f5a4$var$OBSERVABLE:
        case $6affecf2d197f5a4$var$OBSERVABLE_REF:
        case $6affecf2d197f5a4$var$OBSERVABLE_SHALLOW:
        case $6affecf2d197f5a4$var$OBSERVABLE_STRUCT:
            var enhancer = originAnnotation === true ? adm.defaultEnhancer_ : $6affecf2d197f5a4$var$getEnhancerFromAnnotation(annotation);
            adm.addObservableProp_(key, descriptor.value, enhancer);
            break;
        default:
    }
}
function $6affecf2d197f5a4$export$53f2f76fa8db2c8e(target, annotations, options) {
    var autoBind = !!(options == null ? void 0 : options.autoBind);
    var adm = $6affecf2d197f5a4$var$asObservableObject(target, options == null ? void 0 : options.name, $6affecf2d197f5a4$var$getEnhancerFromAnnotation(options == null ? void 0 : options.defaultDecorator));
    $6affecf2d197f5a4$var$startBatch();
    try {
        if (!annotations) {
            var didDecorate = $6affecf2d197f5a4$var$applyDecorators(target);
            return target;
        }
        var make = function make1(key) {
            var annotation = annotations[key];
            var _getDescriptorInChain = $6affecf2d197f5a4$var$getDescriptorInChain(target, key), desc = _getDescriptorInChain[0], owner = _getDescriptorInChain[1];
            $6affecf2d197f5a4$var$makeProperty(adm, owner, key, desc, annotation, false, autoBind);
        };
        $6affecf2d197f5a4$var$ownKeys(annotations).forEach(make);
    } finally{
        $6affecf2d197f5a4$var$endBatch();
    }
    return target;
}
function $6affecf2d197f5a4$export$cea5e1635336dfa1(target, overrides, options) {
    var proto = Object.getPrototypeOf(target);
    var isPlain = proto == null || proto === $6affecf2d197f5a4$var$objectPrototype;
    var annotations;
    if (!isPlain && $6affecf2d197f5a4$var$hasProp(proto, $6affecf2d197f5a4$var$CACHED_ANNOTATIONS)) // shortcut, reuse inferred annotations for this type from the previous time
    annotations = proto[$6affecf2d197f5a4$var$CACHED_ANNOTATIONS];
    else {
        annotations = $6affecf2d197f5a4$var$_extends({
        }, overrides);
        $6affecf2d197f5a4$var$extractAnnotationsFromObject(target, annotations, options);
        if (!isPlain) {
            $6affecf2d197f5a4$var$extractAnnotationsFromProto(proto, annotations, options);
            $6affecf2d197f5a4$var$addHiddenProp(proto, $6affecf2d197f5a4$var$CACHED_ANNOTATIONS, annotations);
        }
    }
    $6affecf2d197f5a4$export$53f2f76fa8db2c8e(target, annotations, options);
    return target;
}
function $6affecf2d197f5a4$var$extractAnnotationsFromObject(target, collector, options) {
    var _options$defaultDecor;
    var autoBind = !!(options == null ? void 0 : options.autoBind);
    var defaultAnnotation = (options == null ? void 0 : options.deep) === undefined ? (_options$defaultDecor = options == null ? void 0 : options.defaultDecorator) != null ? _options$defaultDecor : $6affecf2d197f5a4$export$5af762eb508641fe.deep : (options == null ? void 0 : options.deep) ? $6affecf2d197f5a4$export$5af762eb508641fe.deep : $6affecf2d197f5a4$export$5af762eb508641fe.ref;
    Object.entries($6affecf2d197f5a4$var$getOwnPropertyDescriptors(target)).forEach(function(_ref) {
        var key = _ref[0], descriptor = _ref[1];
        if (key in collector || key === "constructor") return;
        collector[key] = $6affecf2d197f5a4$var$getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
    });
}
function $6affecf2d197f5a4$var$extractAnnotationsFromProto(proto, collector, options) {
    Object.entries($6affecf2d197f5a4$var$getOwnPropertyDescriptors(proto)).forEach(function(_ref2) {
        var key = _ref2[0], prop = _ref2[1];
        if (key in collector || key === "constructor") return;
        if (prop.get) collector[key] = $6affecf2d197f5a4$export$e23ddc2fc1228fe8;
        else if ($6affecf2d197f5a4$var$isFunction(prop.value)) collector[key] = $6affecf2d197f5a4$var$isGenerator(prop.value) ? $6affecf2d197f5a4$export$179a05bb73843405 : (options == null ? void 0 : options.autoBind) ? $6affecf2d197f5a4$export$40673ad6644c3a93.bound : $6affecf2d197f5a4$export$40673ad6644c3a93;
    });
}
var $6affecf2d197f5a4$var$SPLICE = "splice";
var $6affecf2d197f5a4$var$UPDATE = "update";
var $6affecf2d197f5a4$var$MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var $6affecf2d197f5a4$var$arrayTraps = {
    get: function get(target, name) {
        var adm = target[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        if (name === $6affecf2d197f5a4$export$2a62cb88418c26a9) return adm;
        if (name === "length") return adm.getArrayLength_();
        if (typeof name === "string" && !isNaN(name)) return adm.get_(parseInt(name));
        if ($6affecf2d197f5a4$var$hasProp($6affecf2d197f5a4$var$arrayExtensions, name)) return $6affecf2d197f5a4$var$arrayExtensions[name];
        return target[name];
    },
    set: function set(target, name, value) {
        var adm = target[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        if (name === "length") adm.setArrayLength_(value);
        if (typeof name === "symbol" || isNaN(name)) target[name] = value;
        else // numeric string
        adm.set_(parseInt(name), value);
        return true;
    },
    preventExtensions: function preventExtensions() {
        $6affecf2d197f5a4$var$die(15);
    }
};
var $6affecf2d197f5a4$var$ObservableArrayAdministration = /*#__PURE__*/ function() {
    // this is the prop that gets proxied, so can't replace it!
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
        this.owned_ = void 0;
        this.legacyMode_ = void 0;
        this.atom_ = void 0;
        this.values_ = [];
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.enhancer_ = void 0;
        this.dehancer = void 0;
        this.proxy_ = void 0;
        this.lastKnownLength_ = 0;
        this.owned_ = owned_;
        this.legacyMode_ = legacyMode_;
        this.atom_ = new $6affecf2d197f5a4$var$Atom(name || "ObservableArray@" + $6affecf2d197f5a4$var$getNextId());
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV, name + "[..]");
        };
    }
    var _proto = ObservableArrayAdministration.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
        if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
        return values;
    };
    _proto.intercept_ = function intercept_(handler) {
        return $6affecf2d197f5a4$var$registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately === void 0) fireImmediately = false;
        if (fireImmediately) listener({
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: "splice",
            index: 0,
            added: this.values_.slice(),
            addedCount: this.values_.length,
            removed: [],
            removedCount: 0
        });
        return $6affecf2d197f5a4$var$registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
        this.atom_.reportObserved();
        return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
        if (typeof newLength !== "number" || newLength < 0) $6affecf2d197f5a4$var$die("Out of range: " + newLength);
        var currentLength = this.values_.length;
        if (newLength === currentLength) return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for(var i = 0; i < newLength - currentLength; i++)newItems[i] = undefined;
             // No Array.fill everywhere...
            this.spliceWithArray_(currentLength, 0, newItems);
        } else this.spliceWithArray_(newLength, currentLength - newLength);
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
        if (oldLength !== this.lastKnownLength_) $6affecf2d197f5a4$var$die(16);
        this.lastKnownLength_ += delta;
        if (this.legacyMode_ && delta > 0) $6affecf2d197f5a4$var$reserveArrayBuffer(oldLength + delta + 1);
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
        var _this = this;
        $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this.atom_);
        var length = this.values_.length;
        if (index === undefined) index = 0;
        else if (index > length) index = length;
        else if (index < 0) index = Math.max(0, length + index);
        if (arguments.length === 1) deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;
        else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined) newItems = $6affecf2d197f5a4$var$EMPTY_ARRAY;
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                object: this.proxy_,
                type: $6affecf2d197f5a4$var$SPLICE,
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change) return $6affecf2d197f5a4$var$EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
            return _this.enhancer_(v, undefined);
        });
        if (this.legacyMode_ || false) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
        return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
        if (newItems.length < $6affecf2d197f5a4$var$MAX_SPLICE_SIZE) {
            var _this$values_;
            return (_this$values_ = this.values_).splice.apply(_this$values_, [
                index,
                deleteCount
            ].concat(newItems));
        } else {
            var res = this.values_.slice(index, index + deleteCount);
            var oldItems = this.values_.slice(index + deleteCount);
            this.values_.length = index + newItems.length - deleteCount;
            for(var i = 0; i < newItems.length; i++)this.values_[index + i] = newItems[i];
            for(var _i = 0; _i < oldItems.length; _i++)this.values_[index + newItems.length + _i] = oldItems[_i];
            return res;
        }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
        var notifySpy = !this.owned_ && $6affecf2d197f5a4$var$isSpyEnabled();
        var notify = $6affecf2d197f5a4$var$hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            type: $6affecf2d197f5a4$var$UPDATE,
            debugObjectName: this.atom_.name_,
            index: index,
            newValue: newValue,
            oldValue: oldValue
        } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        this.atom_.reportChanged();
        if (notify) $6affecf2d197f5a4$var$notifyListeners(this, change);
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
        var notifySpy = !this.owned_ && $6affecf2d197f5a4$var$isSpyEnabled();
        var notify = $6affecf2d197f5a4$var$hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: $6affecf2d197f5a4$var$SPLICE,
            index: index,
            removed: removed,
            added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify) $6affecf2d197f5a4$var$notifyListeners(this, change);
    };
    _proto.get_ = function get_(index) {
        if (index < this.values_.length) {
            this.atom_.reportObserved();
            return this.dehanceValue_(this.values_[index]);
        }
        console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    };
    _proto.set_ = function set_(index, newValue) {
        var values = this.values_;
        if (index < values.length) {
            // update at index in range
            $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this.atom_);
            var oldValue = values[index];
            if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
                var change = $6affecf2d197f5a4$var$interceptChange(this, {
                    type: $6affecf2d197f5a4$var$UPDATE,
                    object: this.proxy_,
                    index: index,
                    newValue: newValue
                });
                if (!change) return;
                newValue = change.newValue;
            }
            newValue = this.enhancer_(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                this.notifyArrayChildUpdate_(index, newValue, oldValue);
            }
        } else if (index === values.length) // add a new item
        this.spliceWithArray_(index, 0, [
            newValue
        ]);
        else // out of bounds
        $6affecf2d197f5a4$var$die(17, index, values.length);
    };
    return ObservableArrayAdministration;
}();
function $6affecf2d197f5a4$var$createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) name = "ObservableArray@" + $6affecf2d197f5a4$var$getNextId();
    if (owned === void 0) owned = false;
    $6affecf2d197f5a4$var$assertProxies();
    var adm = new $6affecf2d197f5a4$var$ObservableArrayAdministration(name, enhancer, owned, false);
    $6affecf2d197f5a4$var$addHiddenFinalProp(adm.values_, $6affecf2d197f5a4$export$2a62cb88418c26a9, adm);
    var proxy = new Proxy(adm.values_, $6affecf2d197f5a4$var$arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
        var prev = $6affecf2d197f5a4$var$allowStateChangesStart(true);
        adm.spliceWithArray_(0, 0, initialValues);
        $6affecf2d197f5a4$var$allowStateChangesEnd(prev);
    }
    return proxy;
} // eslint-disable-next-line
var $6affecf2d197f5a4$var$arrayExtensions = {
    clear: function clear() {
        return this.splice(0);
    },
    replace: function replace(newItems) {
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
        return this.slice();
    },
    /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */ splice: function splice(index, deleteCount) {
        for(var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)newItems[_key - 2] = arguments[_key];
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        switch(arguments.length){
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray_(index);
            case 2:
                return adm.spliceWithArray_(index, deleteCount);
        }
        return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
        return this[$6affecf2d197f5a4$export$2a62cb88418c26a9].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
        adm.spliceWithArray_(adm.values_.length, 0, items);
        return adm.values_.length;
    },
    pop: function pop() {
        return this.splice(Math.max(this[$6affecf2d197f5a4$export$2a62cb88418c26a9].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
        return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        for(var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)items[_key3] = arguments[_key3];
        adm.spliceWithArray_(0, 0, items);
        return adm.values_.length;
    },
    reverse: function reverse() {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        if ($6affecf2d197f5a4$var$globalState.trackingDerivation) $6affecf2d197f5a4$var$die(37, "reverse");
        this.replace(this.slice().reverse());
        return this;
    },
    sort: function sort() {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if ($6affecf2d197f5a4$var$globalState.trackingDerivation) $6affecf2d197f5a4$var$die(37, "sort");
        var copy = this.slice();
        copy.sort.apply(copy, arguments);
        this.replace(copy);
        return this;
    },
    remove: function remove(value) {
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        var idx = adm.dehanceValues_(adm.values_).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */ $6affecf2d197f5a4$var$addArrayExtension("concat", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("flat", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("includes", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("indexOf", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("join", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("lastIndexOf", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("slice", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("toString", $6affecf2d197f5a4$var$simpleFunc);
$6affecf2d197f5a4$var$addArrayExtension("toLocaleString", $6affecf2d197f5a4$var$simpleFunc); // map
$6affecf2d197f5a4$var$addArrayExtension("every", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("filter", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("find", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("findIndex", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("flatMap", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("forEach", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("map", $6affecf2d197f5a4$var$mapLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("some", $6affecf2d197f5a4$var$mapLikeFunc); // reduce
$6affecf2d197f5a4$var$addArrayExtension("reduce", $6affecf2d197f5a4$var$reduceLikeFunc);
$6affecf2d197f5a4$var$addArrayExtension("reduceRight", $6affecf2d197f5a4$var$reduceLikeFunc);
function $6affecf2d197f5a4$var$addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") $6affecf2d197f5a4$var$arrayExtensions[funcName] = funcFactory(funcName);
} // Report and delegate to dehanced array
function $6affecf2d197f5a4$var$simpleFunc(funcName) {
    return function() {
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
} // Make sure callbacks recieve correct array arg #2326
function $6affecf2d197f5a4$var$mapLikeFunc(funcName) {
    return function(callback, thisArg) {
        var _this2 = this;
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName](function(element, index) {
            return callback.call(thisArg, element, index, _this2);
        });
    };
} // Make sure callbacks recieve correct array arg #2326
function $6affecf2d197f5a4$var$reduceLikeFunc(funcName) {
    return function() {
        var _this3 = this;
        var adm = this[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function(accumulator, currentValue, index) {
            return callback(accumulator, currentValue, index, _this3);
        };
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
}
var $6affecf2d197f5a4$var$isObservableArrayAdministration = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ObservableArrayAdministration", $6affecf2d197f5a4$var$ObservableArrayAdministration);
function $6affecf2d197f5a4$export$8e83b0c96ff20b9f(thing) {
    return $6affecf2d197f5a4$var$isObject(thing) && $6affecf2d197f5a4$var$isObservableArrayAdministration(thing[$6affecf2d197f5a4$export$2a62cb88418c26a9]);
}
var $6affecf2d197f5a4$var$_Symbol$iterator, $6affecf2d197f5a4$var$_Symbol$toStringTag;
var $6affecf2d197f5a4$var$ObservableMapMarker = {
};
var $6affecf2d197f5a4$var$ADD = "add";
var $6affecf2d197f5a4$var$DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
$6affecf2d197f5a4$var$_Symbol$iterator = Symbol.iterator;
$6affecf2d197f5a4$var$_Symbol$toStringTag = Symbol.toStringTag;
var $6affecf2d197f5a4$export$93bd560583f87e1b = /*#__PURE__*/ function() {
    // hasMap, not hashMap >-).
    function ObservableMap(initialData, enhancer_, name_) {
        if (enhancer_ === void 0) enhancer_ = $6affecf2d197f5a4$var$deepEnhancer;
        if (name_ === void 0) name_ = "ObservableMap@" + $6affecf2d197f5a4$var$getNextId();
        this.enhancer_ = void 0;
        this.name_ = void 0;
        this[$6affecf2d197f5a4$export$2a62cb88418c26a9] = $6affecf2d197f5a4$var$ObservableMapMarker;
        this.data_ = void 0;
        this.hasMap_ = void 0;
        this.keysAtom_ = void 0;
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = enhancer_;
        this.name_ = name_;
        if (!$6affecf2d197f5a4$var$isFunction(Map)) $6affecf2d197f5a4$var$die(18);
        this.keysAtom_ = $6affecf2d197f5a4$export$efeedbf8e7fa7ff9(this.name_ + ".keys()");
        this.data_ = new Map();
        this.hasMap_ = new Map();
        this.merge(initialData);
    }
    var _proto = ObservableMap.prototype;
    _proto.has_ = function has_(key) {
        return this.data_.has(key);
    };
    _proto.has = function has(key) {
        var _this = this;
        if (!$6affecf2d197f5a4$var$globalState.trackingDerivation) return this.has_(key);
        var entry = this.hasMap_.get(key);
        if (!entry) {
            var newEntry = entry = new $6affecf2d197f5a4$var$ObservableValue(this.has_(key), $6affecf2d197f5a4$var$referenceEnhancer, this.name_ + "." + $6affecf2d197f5a4$var$stringifyKey(key) + "?", false);
            this.hasMap_.set(key, newEntry);
            $6affecf2d197f5a4$export$6e5aff80e7d0bfc8(newEntry, function() {
                return _this.hasMap_["delete"](key);
            });
        }
        return entry.get();
    };
    _proto.set = function set(key, value) {
        var hasKey = this.has_(key);
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                type: hasKey ? $6affecf2d197f5a4$var$UPDATE : $6affecf2d197f5a4$var$ADD,
                object: this,
                newValue: value,
                name: key
            });
            if (!change) return this;
            value = change.newValue;
        }
        if (hasKey) this.updateValue_(key, value);
        else this.addValue_(key, value);
        return this;
    };
    _proto["delete"] = function _delete(key) {
        var _this2 = this;
        $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this.keysAtom_);
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                type: $6affecf2d197f5a4$var$DELETE,
                object: this,
                name: key
            });
            if (!change) return false;
        }
        if (this.has_(key)) {
            var notifySpy = $6affecf2d197f5a4$var$isSpyEnabled();
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: $6affecf2d197f5a4$var$DELETE,
                object: this,
                oldValue: this.data_.get(key).value_,
                name: key
            } : null;
            $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
                _this2.keysAtom_.reportChanged();
                _this2.updateHasMapEntry_(key, false);
                var observable = _this2.data_.get(key);
                observable.setNewValue_(undefined);
                _this2.data_["delete"](key);
            });
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, _change);
            return true;
        }
        return false;
    };
    _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
        var entry = this.hasMap_.get(key);
        if (entry) entry.setNewValue_(value);
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
        var observable = this.data_.get(key);
        newValue = observable.prepareNewValue_(newValue);
        if (newValue !== $6affecf2d197f5a4$var$globalState.UNCHANGED) {
            var notifySpy = $6affecf2d197f5a4$var$isSpyEnabled();
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: $6affecf2d197f5a4$var$UPDATE,
                object: this,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            observable.setNewValue_(newValue);
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, change);
        }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
        var _this3 = this;
        $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this.keysAtom_);
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            var observable = new $6affecf2d197f5a4$var$ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + $6affecf2d197f5a4$var$stringifyKey(key), false);
            _this3.data_.set(key, observable);
            newValue = observable.value_; // value might have been changed
            _this3.updateHasMapEntry_(key, true);
            _this3.keysAtom_.reportChanged();
        });
        var notifySpy = $6affecf2d197f5a4$var$isSpyEnabled();
        var notify = $6affecf2d197f5a4$var$hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: $6affecf2d197f5a4$var$ADD,
            object: this,
            name: key,
            newValue: newValue
        } : null;
        if (notify) $6affecf2d197f5a4$var$notifyListeners(this, change);
    };
    _proto.get = function get(key) {
        if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
        return this.dehanceValue_(undefined);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.keys = function keys() {
        this.keysAtom_.reportObserved();
        return this.data_.keys();
    };
    _proto.values = function values() {
        var self = this;
        var keys1 = this.keys();
        return $6affecf2d197f5a4$var$makeIterable({
            next: function next() {
                var _keys$next = keys1.next(), done = _keys$next.done, value = _keys$next.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    _proto.entries = function entries() {
        var self = this;
        var keys1 = this.keys();
        return $6affecf2d197f5a4$var$makeIterable({
            next: function next() {
                var _keys$next2 = keys1.next(), done = _keys$next2.done, value = _keys$next2.value;
                return {
                    done: done,
                    value: done ? undefined : [
                        value,
                        self.get(value)
                    ]
                };
            }
        });
    };
    _proto[$6affecf2d197f5a4$var$_Symbol$iterator] = function() {
        return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
        for(var _iterator = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;){
            var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
            callback.call(thisArg, value, key, this);
        }
    };
    _proto.merge = function merge(other) {
        var _this4 = this;
        if ($6affecf2d197f5a4$export$bb89e35ee75744d4(other)) other = new Map(other);
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            if ($6affecf2d197f5a4$var$isPlainObject(other)) $6affecf2d197f5a4$var$getPlainObjectKeys(other).forEach(function(key) {
                return _this4.set(key, other[key]);
            });
            else if (Array.isArray(other)) other.forEach(function(_ref) {
                var key = _ref[0], value = _ref[1];
                return _this4.set(key, value);
            });
            else if ($6affecf2d197f5a4$var$isES6Map(other)) {
                if (other.constructor !== Map) $6affecf2d197f5a4$var$die(19, other);
                other.forEach(function(value, key) {
                    return _this4.set(key, value);
                });
            } else if (other !== null && other !== undefined) $6affecf2d197f5a4$var$die(20, other);
        });
        return this;
    };
    _proto.clear = function clear() {
        var _this5 = this;
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            $6affecf2d197f5a4$export$234b0d109a85c610(function() {
                for(var _iterator2 = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;){
                    var key = _step2.value;
                    _this5["delete"](key);
                }
            });
        });
    };
    _proto.replace = function replace(values1) {
        var _this6 = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            // Convert to map so we can do quick key lookups
            var replacementMap = $6affecf2d197f5a4$var$convertToMap(values1);
            var orderedData = new Map(); // Used for optimization
            var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            for(var _iterator3 = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;){
                var key = _step3.value;
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this6["delete"](key); // Was the key removed?
                    if (deleted) // _keysAtom.reportChanged() was already called
                    keysReportChangedCalled = true;
                    else {
                        // Delete prevented by interceptor
                        var value = _this6.data_.get(key);
                        orderedData.set(key, value);
                    }
                }
            } // Merge entries
            for(var _iterator4 = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;){
                var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
                // We will want to know whether a new key is added
                var keyExisted = _this6.data_.has(_key); // Add or update value
                _this6.set(_key, _value); // The addition could have been prevent by interceptor
                if (_this6.data_.has(_key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var _value2 = _this6.data_.get(_key);
                    orderedData.set(_key, _value2); // Was a new key added?
                    if (!keyExisted) // _keysAtom.reportChanged() was already called
                    keysReportChangedCalled = true;
                }
            } // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this6.data_.size !== orderedData.size) // If size differs, keys are definitely modified
                _this6.keysAtom_.reportChanged();
                else {
                    var iter1 = _this6.data_.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while(!next1.done){
                        if (next1.value !== next2.value) {
                            _this6.keysAtom_.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            } // Use correctly ordered map
            _this6.data_ = orderedData;
        });
        return this;
    };
    _proto.toString = function toString() {
        return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */ _proto.observe_ = function observe_(listener, fireImmediately) {
        return $6affecf2d197f5a4$var$registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return $6affecf2d197f5a4$var$registerInterceptor(this, handler);
    };
    $6affecf2d197f5a4$var$_createClass(ObservableMap, [
        {
            key: "size",
            get: function get1() {
                this.keysAtom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: $6affecf2d197f5a4$var$_Symbol$toStringTag,
            get: function get1() {
                return "Map";
            }
        }
    ]);
    return ObservableMap;
}(); // eslint-disable-next-line
var $6affecf2d197f5a4$export$bb89e35ee75744d4 = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ObservableMap", $6affecf2d197f5a4$export$93bd560583f87e1b);
function $6affecf2d197f5a4$var$convertToMap(dataStructure) {
    if ($6affecf2d197f5a4$var$isES6Map(dataStructure) || $6affecf2d197f5a4$export$bb89e35ee75744d4(dataStructure)) return dataStructure;
    else if (Array.isArray(dataStructure)) return new Map(dataStructure);
    else if ($6affecf2d197f5a4$var$isPlainObject(dataStructure)) {
        var map = new Map();
        for(var key in dataStructure)map.set(key, dataStructure[key]);
        return map;
    } else return $6affecf2d197f5a4$var$die(21, dataStructure);
}
var $6affecf2d197f5a4$var$_Symbol$iterator$1, $6affecf2d197f5a4$var$_Symbol$toStringTag$1;
var $6affecf2d197f5a4$var$ObservableSetMarker = {
};
$6affecf2d197f5a4$var$_Symbol$iterator$1 = Symbol.iterator;
$6affecf2d197f5a4$var$_Symbol$toStringTag$1 = Symbol.toStringTag;
var $6affecf2d197f5a4$export$605c56ebc36d31c3 = /*#__PURE__*/ function() {
    function ObservableSet(initialData, enhancer, name_) {
        if (enhancer === void 0) enhancer = $6affecf2d197f5a4$var$deepEnhancer;
        if (name_ === void 0) name_ = "ObservableSet@" + $6affecf2d197f5a4$var$getNextId();
        this.name_ = void 0;
        this[$6affecf2d197f5a4$export$2a62cb88418c26a9] = $6affecf2d197f5a4$var$ObservableSetMarker;
        this.data_ = new Set();
        this.atom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = void 0;
        this.name_ = name_;
        if (!$6affecf2d197f5a4$var$isFunction(Set)) $6affecf2d197f5a4$var$die(22);
        this.atom_ = $6affecf2d197f5a4$export$efeedbf8e7fa7ff9(this.name_);
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV, name_);
        };
        if (initialData) this.replace(initialData);
    }
    var _proto = ObservableSet.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.clear = function clear() {
        var _this = this;
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            $6affecf2d197f5a4$export$234b0d109a85c610(function() {
                for(var _iterator = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;){
                    var value = _step.value;
                    _this["delete"](value);
                }
            });
        });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
        for(var _iterator2 = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;){
            var value = _step2.value;
            callbackFn.call(thisArg, value, value, this);
        }
    };
    _proto.add = function add(value) {
        var _this2 = this;
        $6affecf2d197f5a4$var$checkIfStateModificationsAreAllowed(this.atom_);
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                type: $6affecf2d197f5a4$var$ADD,
                object: this,
                newValue: value
            });
            if (!change) return this; // ideally, value = change.value would be done here, so that values can be
        // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
                _this2.data_.add(_this2.enhancer_(value, undefined));
                _this2.atom_.reportChanged();
            });
            var notifySpy = false;
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: $6affecf2d197f5a4$var$ADD,
                object: this,
                newValue: value
            } : null;
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, _change);
        }
        return this;
    };
    _proto["delete"] = function _delete(value) {
        var _this3 = this;
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                type: $6affecf2d197f5a4$var$DELETE,
                object: this,
                oldValue: value
            });
            if (!change) return false;
        }
        if (this.has(value)) {
            var notifySpy = false;
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var _change2 = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: $6affecf2d197f5a4$var$DELETE,
                object: this,
                oldValue: value
            } : null;
            $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
                _this3.atom_.reportChanged();
                _this3.data_["delete"](value);
            });
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, _change2);
            return true;
        }
        return false;
    };
    _proto.has = function has(value) {
        this.atom_.reportObserved();
        return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return $6affecf2d197f5a4$var$makeIterable({
            next: function next() {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length ? {
                    value: [
                        keys[index],
                        values[index]
                    ],
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.keys = function keys() {
        return this.values();
    };
    _proto.values = function values() {
        this.atom_.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this.data_.values());
        return $6affecf2d197f5a4$var$makeIterable({
            next: function next() {
                return nextIndex < observableValues.length ? {
                    value: self.dehanceValue_(observableValues[nextIndex++]),
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.replace = function replace(other) {
        var _this4 = this;
        if ($6affecf2d197f5a4$export$f6dcb07064e30261(other)) other = new Set(other);
        $6affecf2d197f5a4$export$787f1bc6927a9a9a(function() {
            if (Array.isArray(other)) {
                _this4.clear();
                other.forEach(function(value) {
                    return _this4.add(value);
                });
            } else if ($6affecf2d197f5a4$var$isES6Set(other)) {
                _this4.clear();
                other.forEach(function(value) {
                    return _this4.add(value);
                });
            } else if (other !== null && other !== undefined) $6affecf2d197f5a4$var$die("Cannot initialize set from " + other);
        });
        return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        return $6affecf2d197f5a4$var$registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return $6affecf2d197f5a4$var$registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    _proto.toString = function toString() {
        return "[object ObservableSet]";
    };
    _proto[$6affecf2d197f5a4$var$_Symbol$iterator$1] = function() {
        return this.values();
    };
    $6affecf2d197f5a4$var$_createClass(ObservableSet, [
        {
            key: "size",
            get: function get() {
                this.atom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: $6affecf2d197f5a4$var$_Symbol$toStringTag$1,
            get: function get() {
                return "Set";
            }
        }
    ]);
    return ObservableSet;
}(); // eslint-disable-next-line
var $6affecf2d197f5a4$export$f6dcb07064e30261 = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ObservableSet", $6affecf2d197f5a4$export$605c56ebc36d31c3);
var $6affecf2d197f5a4$var$REMOVE = "remove";
var $6affecf2d197f5a4$var$ObservableObjectAdministration = /*#__PURE__*/ function() {
    function ObservableObjectAdministration(target_, values_, name_, defaultEnhancer_) {
        if (values_ === void 0) values_ = new Map();
        this.target_ = void 0;
        this.values_ = void 0;
        this.name_ = void 0;
        this.defaultEnhancer_ = void 0;
        this.keysAtom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.proxy_ = void 0;
        this.pendingKeys_ = void 0;
        this.keysValue_ = [];
        this.isStaledKeysValue_ = true;
        this.target_ = target_;
        this.values_ = values_;
        this.name_ = name_;
        this.defaultEnhancer_ = defaultEnhancer_;
        this.keysAtom_ = new $6affecf2d197f5a4$var$Atom(name_ + ".keys");
    }
    var _proto = ObservableObjectAdministration.prototype;
    _proto.read_ = function read_(key) {
        return this.values_.get(key).get();
    };
    _proto.write_ = function write_(key, newValue) {
        var instance = this.target_;
        var observable = this.values_.get(key);
        if (observable instanceof $6affecf2d197f5a4$var$ComputedValue) {
            observable.set(newValue);
            return;
        } // intercept
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                type: $6affecf2d197f5a4$var$UPDATE,
                object: this.proxy_ || instance,
                name: key,
                newValue: newValue
            });
            if (!change) return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue_(newValue); // notify spy & observers
        if (newValue !== $6affecf2d197f5a4$var$globalState.UNCHANGED) {
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var notifySpy = false;
            var _change = notify || notifySpy ? {
                type: $6affecf2d197f5a4$var$UPDATE,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || instance,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            observable.setNewValue_(newValue);
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, _change);
        }
    };
    _proto.has_ = function has_(key) {
        var map = this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var entry = map.get(key);
        if (entry) return entry.get();
        else {
            var exists = !!this.values_.get(key); // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new $6affecf2d197f5a4$var$ObservableValue(exists, $6affecf2d197f5a4$var$referenceEnhancer, this.name_ + "." + $6affecf2d197f5a4$var$stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    _proto.addObservableProp_ = function addObservableProp_(propName, newValue, enhancer) {
        if (enhancer === void 0) enhancer = this.defaultEnhancer_;
        var target = this.target_;
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                object: this.proxy_ || target,
                name: propName,
                type: $6affecf2d197f5a4$var$ADD,
                newValue: newValue
            });
            if (!change) return;
            newValue = change.newValue;
        }
        var observable = new $6affecf2d197f5a4$var$ObservableValue(newValue, enhancer, this.name_ + "." + $6affecf2d197f5a4$var$stringifyKey(propName), false);
        this.values_.set(propName, observable);
        newValue = observable.value_; // observableValue might have changed it
        $6affecf2d197f5a4$var$defineProperty(target, propName, $6affecf2d197f5a4$var$generateObservablePropConfig(propName));
        this.notifyPropertyAddition_(propName, newValue);
    };
    _proto.addComputedProp_ = function addComputedProp_(propertyOwner, propName, options) {
        var target = this.target_;
        options.name = options.name || this.name_ + "." + $6affecf2d197f5a4$var$stringifyKey(propName);
        options.context = this.proxy_ || target;
        this.values_.set(propName, new $6affecf2d197f5a4$var$ComputedValue(options)); // Doesn't seem we need this condition:
        // if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
        $6affecf2d197f5a4$var$defineProperty(propertyOwner, propName, $6affecf2d197f5a4$var$generateComputedPropConfig(propName));
    };
    _proto.remove_ = function remove_(key) {
        if (!this.values_.has(key)) return;
        var target = this.target_;
        if ($6affecf2d197f5a4$var$hasInterceptors(this)) {
            var change = $6affecf2d197f5a4$var$interceptChange(this, {
                object: this.proxy_ || target,
                name: key,
                type: $6affecf2d197f5a4$var$REMOVE
            });
            if (!change) return;
        }
        try {
            $6affecf2d197f5a4$var$startBatch();
            var notify = $6affecf2d197f5a4$var$hasListeners(this);
            var notifySpy = false;
            var oldObservable = this.values_.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined); // notify key and keyset listeners
            this.reportKeysChanged();
            this.values_["delete"](key);
            if (this.pendingKeys_) {
                var entry = this.pendingKeys_.get(key);
                if (entry) entry.set(false);
            } // delete the prop
            delete this.target_[key];
            var _change2 = notify || notifySpy ? {
                type: $6affecf2d197f5a4$var$REMOVE,
                observableKind: "object",
                object: this.proxy_ || target,
                debugObjectName: this.name_,
                oldValue: oldValue,
                name: key
            } : null;
            if (notify) $6affecf2d197f5a4$var$notifyListeners(this, _change2);
        } finally{
            $6affecf2d197f5a4$var$endBatch();
        }
    };
    _proto.observe_ = function observe_(callback, fireImmediately) {
        return $6affecf2d197f5a4$var$registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
        return $6affecf2d197f5a4$var$registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, newValue) {
        var notify = $6affecf2d197f5a4$var$hasListeners(this);
        var notifySpy = false;
        var change = notify || notifySpy ? {
            type: $6affecf2d197f5a4$var$ADD,
            observableKind: "object",
            debugObjectName: this.name_,
            object: this.proxy_ || this.target_,
            name: key,
            newValue: newValue
        } : null;
        if (notify) $6affecf2d197f5a4$var$notifyListeners(this, change);
        if (this.pendingKeys_) {
            var entry = this.pendingKeys_.get(key);
            if (entry) entry.set(true);
        }
        this.reportKeysChanged();
    };
    _proto.getKeys_ = function getKeys_() {
        this.keysAtom_.reportObserved();
        if (!this.isStaledKeysValue_) return this.keysValue_;
         // return Reflect.ownKeys(this.values) as any
        this.keysValue_ = [];
        for(var _iterator = $6affecf2d197f5a4$var$_createForOfIteratorHelperLoose(this.values_), _step; !(_step = _iterator()).done;){
            var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
            if (value instanceof $6affecf2d197f5a4$var$ObservableValue) this.keysValue_.push(key);
        }
        this.isStaledKeysValue_ = false;
        return this.keysValue_;
    };
    _proto.reportKeysChanged = function reportKeysChanged() {
        this.isStaledKeysValue_ = true;
        this.keysAtom_.reportChanged();
    };
    return ObservableObjectAdministration;
}();
function $6affecf2d197f5a4$var$asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) name = "";
    if (defaultEnhancer === void 0) defaultEnhancer = $6affecf2d197f5a4$var$deepEnhancer;
    if ($6affecf2d197f5a4$var$hasProp(target, $6affecf2d197f5a4$export$2a62cb88418c26a9)) return target[$6affecf2d197f5a4$export$2a62cb88418c26a9];
    if (!name) {
        if ($6affecf2d197f5a4$var$isPlainObject(target)) name = "ObservableObject@" + $6affecf2d197f5a4$var$getNextId();
        else name = (target.constructor.name || "ObservableObject") + "@" + $6affecf2d197f5a4$var$getNextId();
    }
    var adm = new $6affecf2d197f5a4$var$ObservableObjectAdministration(target, new Map(), $6affecf2d197f5a4$var$stringifyKey(name), defaultEnhancer);
    $6affecf2d197f5a4$var$addHiddenProp(target, $6affecf2d197f5a4$export$2a62cb88418c26a9, adm);
    return adm;
}
var $6affecf2d197f5a4$var$observablePropertyConfigs = /*#__PURE__*/ Object.create(null);
var $6affecf2d197f5a4$var$computedPropertyConfigs = /*#__PURE__*/ Object.create(null);
function $6affecf2d197f5a4$var$generateObservablePropConfig(propName) {
    return $6affecf2d197f5a4$var$observablePropertyConfigs[propName] || ($6affecf2d197f5a4$var$observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function get() {
            return this[$6affecf2d197f5a4$export$2a62cb88418c26a9].read_(propName);
        },
        set: function set(v) {
            this[$6affecf2d197f5a4$export$2a62cb88418c26a9].write_(propName, v);
        }
    });
}
function $6affecf2d197f5a4$var$generateComputedPropConfig(propName) {
    return $6affecf2d197f5a4$var$computedPropertyConfigs[propName] || ($6affecf2d197f5a4$var$computedPropertyConfigs[propName] = {
        configurable: true,
        enumerable: false,
        get: function get() {
            return this[$6affecf2d197f5a4$export$2a62cb88418c26a9].read_(propName);
        },
        set: function set(v) {
            this[$6affecf2d197f5a4$export$2a62cb88418c26a9].write_(propName, v);
        }
    });
}
var $6affecf2d197f5a4$var$isObservableObjectAdministration = /*#__PURE__*/ $6affecf2d197f5a4$var$createInstanceofPredicate("ObservableObjectAdministration", $6affecf2d197f5a4$var$ObservableObjectAdministration);
function $6affecf2d197f5a4$export$b6c27f05de185aac(thing) {
    if ($6affecf2d197f5a4$var$isObject(thing)) return $6affecf2d197f5a4$var$isObservableObjectAdministration(thing[$6affecf2d197f5a4$export$2a62cb88418c26a9]);
    return false;
}
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */ var $6affecf2d197f5a4$var$OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array
var $6affecf2d197f5a4$var$StubArray = function StubArray() {
};
function $6affecf2d197f5a4$var$inherit(ctor, proto) {
    if (Object.setPrototypeOf) Object.setPrototypeOf(ctor.prototype, proto);
    else if (ctor.prototype.__proto__ !== undefined) ctor.prototype.__proto__ = proto;
    else ctor.prototype = proto;
}
$6affecf2d197f5a4$var$inherit($6affecf2d197f5a4$var$StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6
var $6affecf2d197f5a4$var$LegacyObservableArray = /*#__PURE__*/ function(_StubArray) {
    $6affecf2d197f5a4$var$_inheritsLoose(LegacyObservableArray, _StubArray);
    function LegacyObservableArray(initialValues, enhancer, name, owned) {
        var _this;
        if (name === void 0) name = "ObservableArray@" + $6affecf2d197f5a4$var$getNextId();
        if (owned === void 0) owned = false;
        _this = _StubArray.call(this) || this;
        var adm = new $6affecf2d197f5a4$var$ObservableArrayAdministration(name, enhancer, owned, true);
        adm.proxy_ = $6affecf2d197f5a4$var$_assertThisInitialized(_this);
        $6affecf2d197f5a4$var$addHiddenFinalProp($6affecf2d197f5a4$var$_assertThisInitialized(_this), $6affecf2d197f5a4$export$2a62cb88418c26a9, adm);
        if (initialValues && initialValues.length) {
            var prev = $6affecf2d197f5a4$var$allowStateChangesStart(true); // @ts-ignore
            _this.spliceWithArray(0, 0, initialValues);
            $6affecf2d197f5a4$var$allowStateChangesEnd(prev);
        }
        return _this;
    }
    var _proto = LegacyObservableArray.prototype;
    _proto.concat = function concat() {
        this[$6affecf2d197f5a4$export$2a62cb88418c26a9].atom_.reportObserved();
        for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++)arrays[_key] = arguments[_key];
        return Array.prototype.concat.apply(this.slice(), arrays.map(function(a) {
            return $6affecf2d197f5a4$export$8e83b0c96ff20b9f(a) ? a.slice() : a;
        }));
    };
    _proto[Symbol.iterator] = function() {
        var self = this;
        var nextIndex = 0;
        return $6affecf2d197f5a4$var$makeIterable({
            next: function next() {
                // @ts-ignore
                return nextIndex < self.length ? {
                    value: self[nextIndex++],
                    done: false
                } : {
                    done: true,
                    value: undefined
                };
            }
        });
    };
    $6affecf2d197f5a4$var$_createClass(LegacyObservableArray, [
        {
            key: "length",
            get: function get() {
                return this[$6affecf2d197f5a4$export$2a62cb88418c26a9].getArrayLength_();
            },
            set: function set(newLength) {
                this[$6affecf2d197f5a4$export$2a62cb88418c26a9].setArrayLength_(newLength);
            }
        },
        {
            key: Symbol.toStringTag,
            get: function get() {
                return "Array";
            }
        }
    ]);
    return LegacyObservableArray;
}($6affecf2d197f5a4$var$StubArray);
Object.entries($6affecf2d197f5a4$var$arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat") $6affecf2d197f5a4$var$addHiddenProp($6affecf2d197f5a4$var$LegacyObservableArray.prototype, prop, fn);
});
function $6affecf2d197f5a4$var$createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: true,
        get: function get() {
            return this[$6affecf2d197f5a4$export$2a62cb88418c26a9].get_(index);
        },
        set: function set(value) {
            this[$6affecf2d197f5a4$export$2a62cb88418c26a9].set_(index, value);
        }
    };
}
function $6affecf2d197f5a4$var$createArrayBufferItem(index) {
    $6affecf2d197f5a4$var$defineProperty($6affecf2d197f5a4$var$LegacyObservableArray.prototype, "" + index, $6affecf2d197f5a4$var$createArrayEntryDescriptor(index));
}
function $6affecf2d197f5a4$var$reserveArrayBuffer(max) {
    if (max > $6affecf2d197f5a4$var$OBSERVABLE_ARRAY_BUFFER_SIZE) {
        for(var index = $6affecf2d197f5a4$var$OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++)$6affecf2d197f5a4$var$createArrayBufferItem(index);
        $6affecf2d197f5a4$var$OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
}
$6affecf2d197f5a4$var$reserveArrayBuffer(1000);
function $6affecf2d197f5a4$var$createLegacyArray(initialValues, enhancer, name) {
    return new $6affecf2d197f5a4$var$LegacyObservableArray(initialValues, enhancer, name);
}
function $6affecf2d197f5a4$export$ea2cc763fb272afa(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(thing)) {
            if (property !== undefined) $6affecf2d197f5a4$var$die(23);
            return thing[$6affecf2d197f5a4$export$2a62cb88418c26a9].atom_;
        }
        if ($6affecf2d197f5a4$export$f6dcb07064e30261(thing)) return thing[$6affecf2d197f5a4$export$2a62cb88418c26a9];
        if ($6affecf2d197f5a4$export$bb89e35ee75744d4(thing)) {
            if (property === undefined) return thing.keysAtom_;
            var observable = thing.data_.get(property) || thing.hasMap_.get(property);
            if (!observable) $6affecf2d197f5a4$var$die(25, property, $6affecf2d197f5a4$export$40e34ade416f82b9(thing));
            return observable;
        }
        if ($6affecf2d197f5a4$export$b6c27f05de185aac(thing)) {
            if (!property) return $6affecf2d197f5a4$var$die(26);
            var _observable = thing[$6affecf2d197f5a4$export$2a62cb88418c26a9].values_.get(property);
            if (!_observable) $6affecf2d197f5a4$var$die(27, property, $6affecf2d197f5a4$export$40e34ade416f82b9(thing));
            return _observable;
        }
        if ($6affecf2d197f5a4$var$isAtom(thing) || $6affecf2d197f5a4$var$isComputedValue(thing) || $6affecf2d197f5a4$var$isReaction(thing)) return thing;
    } else if ($6affecf2d197f5a4$var$isFunction(thing)) {
        if ($6affecf2d197f5a4$var$isReaction(thing[$6affecf2d197f5a4$export$2a62cb88418c26a9])) // disposer function
        return thing[$6affecf2d197f5a4$export$2a62cb88418c26a9];
    }
    $6affecf2d197f5a4$var$die(28);
}
function $6affecf2d197f5a4$export$8791236bd035f0ca(thing, property) {
    if (!thing) $6affecf2d197f5a4$var$die(29);
    if (property !== undefined) return $6affecf2d197f5a4$export$8791236bd035f0ca($6affecf2d197f5a4$export$ea2cc763fb272afa(thing, property));
    if ($6affecf2d197f5a4$var$isAtom(thing) || $6affecf2d197f5a4$var$isComputedValue(thing) || $6affecf2d197f5a4$var$isReaction(thing)) return thing;
    if ($6affecf2d197f5a4$export$bb89e35ee75744d4(thing) || $6affecf2d197f5a4$export$f6dcb07064e30261(thing)) return thing;
    if (thing[$6affecf2d197f5a4$export$2a62cb88418c26a9]) return thing[$6affecf2d197f5a4$export$2a62cb88418c26a9];
    $6affecf2d197f5a4$var$die(24, thing);
}
function $6affecf2d197f5a4$export$40e34ade416f82b9(thing, property) {
    var named;
    if (property !== undefined) named = $6affecf2d197f5a4$export$ea2cc763fb272afa(thing, property);
    else if ($6affecf2d197f5a4$export$b6c27f05de185aac(thing) || $6affecf2d197f5a4$export$bb89e35ee75744d4(thing) || $6affecf2d197f5a4$export$f6dcb07064e30261(thing)) named = $6affecf2d197f5a4$export$8791236bd035f0ca(thing);
    else named = $6affecf2d197f5a4$export$ea2cc763fb272afa(thing); // valid for arrays as well
    return named.name_;
}
var $6affecf2d197f5a4$var$toString = $6affecf2d197f5a4$var$objectPrototype.toString;
function $6affecf2d197f5a4$var$deepEqual(a, b, depth) {
    if (depth === void 0) depth = -1;
    return $6affecf2d197f5a4$var$eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function $6affecf2d197f5a4$var$eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b; // Exhaust primitive checks
    var type = typeof a;
    if (!$6affecf2d197f5a4$var$isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.
    var className = $6affecf2d197f5a4$var$toString.call(a);
    if (className !== $6affecf2d197f5a4$var$toString.call(b)) return false;
    switch(className){
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) depth++;
            break;
    } // Unwrap any wrapped objects.
    a = $6affecf2d197f5a4$var$unwrap(a);
    b = $6affecf2d197f5a4$var$unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !($6affecf2d197f5a4$var$isFunction(aCtor) && aCtor instanceof aCtor && $6affecf2d197f5a4$var$isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return false;
    }
    if (depth === 0) return false;
    else if (depth < 0) depth = -1;
     // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while(length--){
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    } // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b); // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.
        while(length--){
            if (!$6affecf2d197f5a4$var$eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
        }
    } else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key;
        length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length) return false;
        while(length--){
            // Deep compare each member
            key = keys[length];
            if (!($6affecf2d197f5a4$var$hasProp(b, key) && $6affecf2d197f5a4$var$eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
        }
    } // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function $6affecf2d197f5a4$var$unwrap(a) {
    if ($6affecf2d197f5a4$export$8e83b0c96ff20b9f(a)) return a.slice();
    if ($6affecf2d197f5a4$var$isES6Map(a) || $6affecf2d197f5a4$export$bb89e35ee75744d4(a)) return Array.from(a.entries());
    if ($6affecf2d197f5a4$var$isES6Set(a) || $6affecf2d197f5a4$export$f6dcb07064e30261(a)) return Array.from(a.entries());
    return a;
}
function $6affecf2d197f5a4$var$makeIterable(iterator) {
    iterator[Symbol.iterator] = $6affecf2d197f5a4$var$getSelf;
    return iterator;
}
function $6affecf2d197f5a4$var$getSelf() {
    return this;
}
/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */ [
    "Symbol",
    "Map",
    "Set",
    "Symbol"
].forEach(function(m) {
    var g = $6affecf2d197f5a4$var$getGlobal();
    if (typeof g[m] === "undefined") $6affecf2d197f5a4$var$die("MobX requires global '" + m + "' to be available or polyfilled");
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") // See: https://github.com/andykog/mobx-devtools/
__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: $6affecf2d197f5a4$export$cda8d703ca5d35c6,
    extras: {
        getDebugName: $6affecf2d197f5a4$export$40e34ade416f82b9
    },
    $mobx: $6affecf2d197f5a4$export$2a62cb88418c26a9
});


/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $f7b482f709a4ff2e$export$d8d02415fc49efaf = Symbol("Comlink.proxy");
const $f7b482f709a4ff2e$export$11baf933bdbbf78e = Symbol("Comlink.endpoint");
const $f7b482f709a4ff2e$export$c3f1b460b642e60a = Symbol("Comlink.releaseProxy");
const $f7b482f709a4ff2e$var$throwMarker = Symbol("Comlink.thrown");
const $f7b482f709a4ff2e$var$isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function"
;
/**
 * Internal transfer handle to handle objects marked to proxy.
 */ const $f7b482f709a4ff2e$var$proxyTransferHandler = {
    canHandle: (val)=>$f7b482f709a4ff2e$var$isObject(val) && val[$f7b482f709a4ff2e$export$d8d02415fc49efaf]
    ,
    serialize (obj) {
        const { port1: port1 , port2: port2  } = new MessageChannel();
        $f7b482f709a4ff2e$export$6050fdfd7148dfa5(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return $f7b482f709a4ff2e$export$cd9e75cac750f935(port);
    }
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */ const $f7b482f709a4ff2e$var$throwTransferHandler = {
    canHandle: (value)=>$f7b482f709a4ff2e$var$isObject(value) && $f7b482f709a4ff2e$var$throwMarker in value
    ,
    serialize ({ value: value  }) {
        let serialized;
        if (value instanceof Error) serialized = {
            isError: true,
            value: {
                message: value.message,
                name: value.name,
                stack: value.stack
            }
        };
        else serialized = {
            isError: false,
            value: value
        };
        return [
            serialized,
            []
        ];
    },
    deserialize (serialized) {
        if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
        throw serialized.value;
    }
};
/**
 * Allows customizing the serialization of certain values.
 */ const $f7b482f709a4ff2e$export$1ecf11da0653b15 = new Map([
    [
        "proxy",
        $f7b482f709a4ff2e$var$proxyTransferHandler
    ],
    [
        "throw",
        $f7b482f709a4ff2e$var$throwTransferHandler
    ], 
]);
function $f7b482f709a4ff2e$export$6050fdfd7148dfa5(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id: id , type: type , path: path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map($f7b482f709a4ff2e$var$fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj1, prop)=>obj1[prop]
            , obj);
            const rawValue = path.reduce((obj1, prop)=>obj1[prop]
            , obj);
            switch(type){
                case 0 /* GET */ :
                    returnValue = rawValue;
                    break;
                case 1 /* SET */ :
                    parent[path.slice(-1)[0]] = $f7b482f709a4ff2e$var$fromWireValue(ev.data.value);
                    returnValue = true;
                    break;
                case 2 /* APPLY */ :
                    returnValue = rawValue.apply(parent, argumentList);
                    break;
                case 3 /* CONSTRUCT */ :
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = $f7b482f709a4ff2e$export$724086cd7455397(value);
                    }
                    break;
                case 4 /* ENDPOINT */ :
                    {
                        const { port1: port1 , port2: port2  } = new MessageChannel();
                        $f7b482f709a4ff2e$export$6050fdfd7148dfa5(obj, port2);
                        returnValue = $f7b482f709a4ff2e$export$b9dae3741aad8f45(port1, [
                            port1
                        ]);
                    }
                    break;
                case 5 /* RELEASE */ :
                    returnValue = undefined;
                    break;
            }
        } catch (value) {
            returnValue = {
                value: value,
                [$f7b482f709a4ff2e$var$throwMarker]: 0
            };
        }
        Promise.resolve(returnValue).catch((value)=>{
            return {
                value: value,
                [$f7b482f709a4ff2e$var$throwMarker]: 0
            };
        }).then((returnValue1)=>{
            const [wireValue, transferables] = $f7b482f709a4ff2e$var$toWireValue(returnValue1);
            ep.postMessage(Object.assign(Object.assign({
            }, wireValue), {
                id: id
            }), transferables);
            if (type === 5 /* RELEASE */ ) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                $f7b482f709a4ff2e$var$closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function $f7b482f709a4ff2e$var$isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function $f7b482f709a4ff2e$var$closeEndPoint(endpoint) {
    if ($f7b482f709a4ff2e$var$isMessagePort(endpoint)) endpoint.close();
}
function $f7b482f709a4ff2e$export$cd9e75cac750f935(ep, target) {
    return $f7b482f709a4ff2e$var$createProxy(ep, [], target);
}
function $f7b482f709a4ff2e$var$throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function $f7b482f709a4ff2e$var$createProxy(ep, path = [], target = function() {
}) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get (_target, prop) {
            $f7b482f709a4ff2e$var$throwIfProxyReleased(isProxyReleased);
            if (prop === $f7b482f709a4ff2e$export$c3f1b460b642e60a) return ()=>{
                return $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                    type: 5 /* RELEASE */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(()=>{
                    $f7b482f709a4ff2e$var$closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy
                };
                const r = $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                    type: 0 /* GET */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then($f7b482f709a4ff2e$var$fromWireValue);
                return r.then.bind(r);
            }
            return $f7b482f709a4ff2e$var$createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            $f7b482f709a4ff2e$var$throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = $f7b482f709a4ff2e$var$toWireValue(rawValue);
            return $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                type: 1 /* SET */ ,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()
                ),
                value: value
            }, transferables).then($f7b482f709a4ff2e$var$fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            $f7b482f709a4ff2e$var$throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === $f7b482f709a4ff2e$export$11baf933bdbbf78e) return $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                type: 4 /* ENDPOINT */ 
            }).then($f7b482f709a4ff2e$var$fromWireValue);
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") return $f7b482f709a4ff2e$var$createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = $f7b482f709a4ff2e$var$processArguments(rawArgumentList);
            return $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                type: 2 /* APPLY */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList: argumentList
            }, transferables).then($f7b482f709a4ff2e$var$fromWireValue);
        },
        construct (_target, rawArgumentList) {
            $f7b482f709a4ff2e$var$throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = $f7b482f709a4ff2e$var$processArguments(rawArgumentList);
            return $f7b482f709a4ff2e$var$requestResponseMessage(ep, {
                type: 3 /* CONSTRUCT */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList: argumentList
            }, transferables).then($f7b482f709a4ff2e$var$fromWireValue);
        }
    });
    return proxy;
}
function $f7b482f709a4ff2e$var$myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function $f7b482f709a4ff2e$var$processArguments(argumentList) {
    const processed = argumentList.map($f7b482f709a4ff2e$var$toWireValue);
    return [
        processed.map((v)=>v[0]
        ),
        $f7b482f709a4ff2e$var$myFlat(processed.map((v)=>v[1]
        ))
    ];
}
const $f7b482f709a4ff2e$var$transferCache = new WeakMap();
function $f7b482f709a4ff2e$export$b9dae3741aad8f45(obj, transfers) {
    $f7b482f709a4ff2e$var$transferCache.set(obj, transfers);
    return obj;
}
function $f7b482f709a4ff2e$export$724086cd7455397(obj) {
    return Object.assign(obj, {
        [$f7b482f709a4ff2e$export$d8d02415fc49efaf]: true
    });
}
function $f7b482f709a4ff2e$export$c081aab2b1a5f1f(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables)
        ,
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function $f7b482f709a4ff2e$var$toWireValue(value) {
    for (const [name, handler] of $f7b482f709a4ff2e$export$1ecf11da0653b15)if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
            {
                type: 3 /* HANDLER */ ,
                name: name,
                value: serializedValue
            },
            transferables, 
        ];
    }
    return [
        {
            type: 0 /* RAW */ ,
            value: value
        },
        $f7b482f709a4ff2e$var$transferCache.get(value) || [], 
    ];
}
function $f7b482f709a4ff2e$var$fromWireValue(value) {
    switch(value.type){
        case 3 /* HANDLER */ :
            return $f7b482f709a4ff2e$export$1ecf11da0653b15.get(value.name).deserialize(value.value);
        case 0 /* RAW */ :
            return value.value;
    }
}
function $f7b482f709a4ff2e$var$requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = $f7b482f709a4ff2e$var$generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) return;
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) ep.start();
        ep.postMessage(Object.assign({
            id: id
        }, msg), transfers);
    });
}
function $f7b482f709a4ff2e$var$generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
    ).join("-");
}


var $bd68cfbee9e4f47d$exports = {};
/*!
 * bulma-toast 2.2.0 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */ (function(a, b) {
    "object" == typeof $bd68cfbee9e4f47d$exports && "undefined" != "object" ? b($bd68cfbee9e4f47d$exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], b) : (a = a || self, b(a.bulmaToast = {
    }));
})($bd68cfbee9e4f47d$exports, function(a) {
    'use strict';
    function b(a1, b1) {
        if (!(a1 instanceof b1)) throw new TypeError("Cannot call a class as a function");
    }
    function c(a1, b1) {
        for(var c1, d = 0; d < b1.length; d++)c1 = b1[d], c1.enumerable = c1.enumerable || !1, c1.configurable = !0, "value" in c1 && (c1.writable = !0), Object.defineProperty(a1, c1.key, c1);
    }
    function d(a1, b1, d1) {
        return b1 && c(a1.prototype, b1), d1 && c(a1, d1), a1;
    }
    function e(a1, b1, c1) {
        return b1 in a1 ? Object.defineProperty(a1, b1, {
            value: c1,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a1[b1] = c1, a1;
    }
    function f(a1, b1) {
        var c1 = Object.keys(a1);
        if (Object.getOwnPropertySymbols) {
            var d1 = Object.getOwnPropertySymbols(a1);
            b1 && (d1 = d1.filter(function(b2) {
                return Object.getOwnPropertyDescriptor(a1, b2).enumerable;
            })), c1.push.apply(c1, d1);
        }
        return c1;
    }
    function g(a1) {
        for(var b1, c1 = 1; c1 < arguments.length; c1++)b1 = null == arguments[c1] ? {
        } : arguments[c1], c1 % 2 ? f(Object(b1), !0).forEach(function(c2) {
            e(a1, c2, b1[c2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a1, Object.getOwnPropertyDescriptors(b1)) : f(Object(b1)).forEach(function(c2) {
            Object.defineProperty(a1, c2, Object.getOwnPropertyDescriptor(b1, c2));
        });
        return a1;
    }
    function h(a1, b1, c1, d2, e1) {
        if (m.position) return m.position;
        var f1 = n.createElement("div");
        return f1.setAttribute("style", "width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;" + o(a1, b1, c1, d2, e1)), n.body.appendChild(f1), m.position = f1, f1;
    }
    function i(a1) {
        for(var b1 in m)m[b1].remove();
        m = {
        }, n = a1;
    }
    function j(a1) {
        if (!a1.message) throw new Error("message is required");
        var b1 = g(g({
        }, l), a1), c1 = new p(b1), d2 = h(b1.position || l.position, b1.offsetTop || l.offsetTop, b1.offsetBottom || l.offsetBottom, b1.offsetLeft || l.offsetLeft, b1.offsetRight || l.offsetRight);
        if (b1.single) for(var e1 = d2.lastElementChild; e1;)d2.removeChild(e1), e1 = d2.lastElementChild;
        d2.appendChild(c1.element);
    }
    var k = {
        duration: 2000,
        position: "top-right",
        closeOnClick: !0,
        opacity: 1,
        single: !1,
        offsetTop: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        offsetRight: 0
    }, l = g({
    }, k), m = {
    }, n = document, o = function(a1, b1, c1, d2, e1) {
        return "top-left" === a1 ? "left:".concat(d2, ";top:").concat(b1, ";text-align:left;align-items:flex-start;") : "top-right" === a1 ? "right:".concat(e1, ";top:").concat(b1, ";text-align:right;align-items:flex-end;") : "top-center" === a1 ? "top:".concat(b1, ";left:0;right:0;text-align:center;align-items:center;") : "bottom-left" === a1 ? "left:".concat(d2, ";bottom:").concat(c1, ";text-align:left;align-items:flex-start;") : "bottom-right" === a1 ? "right:".concat(e1, ";bottom:").concat(c1, ";text-align:right;align-items:flex-end;") : "bottom-center" === a1 ? "bottom:".concat(c1, ";left:0;right:0;text-align:center;align-items:center;") : "center" === a1 ? "top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;" : void 0;
    }, p = /*#__PURE__*/ function() {
        function a1(c1) {
            var d2 = this;
            b(this, a1), this.element = n.createElement("div"), this.opacity = c1.opacity, this.type = c1.type, this.animate = c1.animate, this.dismissible = c1.dismissible, this.closeOnClick = c1.closeOnClick, this.message = c1.message, this.duration = c1.duration, this.pauseOnHover = c1.pauseOnHover, this.offsetTop = c1.offsetTop, this.offsetBottom = c1.offsetBottom, this.offsetLeft = c1.offsetLeft, this.offsetRight = c1.offsetRight;
            var e1 = "width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity, ";"), f1 = [
                "notification"
            ];
            if (this.type && f1.push(this.type), this.animate && this.animate["in"]) {
                var g1 = "animate__".concat(this.animate["in"]), h1 = this.animate.speed ? "animate__".concat(this.animate.speed) : "animate__faster";
                f1.push("animate__animated ".concat(g1, " ").concat(h1)), this.onAnimationEnd(function() {
                    return d2.element.classList.remove(g1);
                });
            }
            if (this.element.className = f1.join(" "), this.dismissible) {
                var i1 = n.createElement("button");
                i1.className = "delete", i1.addEventListener("click", function() {
                    d2.destroy();
                }), this.element.insertAdjacentElement("afterbegin", i1);
            } else e1 += "padding: 1.25rem 1.5rem";
            this.closeOnClick && this.element.addEventListener("click", function() {
                d2.destroy();
            }), this.element.setAttribute("style", e1), "string" == typeof this.message ? this.element.insertAdjacentHTML("beforeend", this.message) : this.element.appendChild(this.message);
            var j1 = new q(function() {
                d2.destroy();
            }, this.duration);
            this.pauseOnHover && (this.element.addEventListener("mouseover", function() {
                j1.pause();
            }), this.element.addEventListener("mouseout", function() {
                j1.resume();
            }));
        }
        return d(a1, [
            {
                key: "destroy",
                value: function() {
                    var a2 = this;
                    this.animate && this.animate.out ? (this.element.classList.add("animate__".concat(this.animate.out)), this.onAnimationEnd(function() {
                        a2.removeParent(a2.element.parentNode), a2.element.remove(), delete m.position;
                    })) : (this.removeParent(this.element.parentNode), this.element.remove(), delete m.position);
                }
            },
            {
                key: "removeParent",
                value: function(a2) {
                    a2 && 1 >= a2.children.length && a2.remove();
                }
            },
            {
                key: "onAnimationEnd",
                value: function() {
                    var a2 = 0 < arguments.length && (void 0) !== arguments[0] ? arguments[0] : function() {
                    }, b1 = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "mozAnimationEnd",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                    for(var c1 in b1)if ((void 0) !== this.element.style[c1]) {
                        this.element.addEventListener(b1[c1], function() {
                            return a2();
                        });
                        break;
                    }
                }
            }
        ]), a1;
    }(), q = /*#__PURE__*/ function() {
        function a1(c1, d2) {
            b(this, a1), this.timer, this.start, this.remaining = d2, this.callback = c1, this.resume();
        }
        return d(a1, [
            {
                key: "pause",
                value: function() {
                    "undefined" == typeof document || (window.clearTimeout(this.timer), this.remaining -= new Date - this.start);
                }
            },
            {
                key: "resume",
                value: function() {
                    "undefined" == typeof document || (this.start = new Date, window.clearTimeout(this.timer), this.timer = window.setTimeout(this.callback, this.remaining));
                }
            }
        ]), a1;
    }();
    a.resetDefaults = function() {
        l = g({
        }, k);
    }, a.setDefaults = function(a1) {
        l = g(g({
        }, k), a1);
    }, a.setDoc = i, a.toast = j, Object.defineProperty(a, "__esModule", {
        value: !0
    });
});


class $6e9830020d960076$export$5e767047b21b377c {
    random() {
        return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
    }
    getRandomFloat(min, max) {
        return this.random() * (max - min) + min;
    }
    constructor(seed = 42){
        this.seed = seed;
    }
}


class $f6dc229582d03357$var$Slider {
    constructor(id){
        this.onchange = null;
        this.setValue = (value)=>{
            this.input.valueAsNumber = value;
            this.output.innerHTML = value.toString();
        };
        this.hide = ()=>this.root.style.display = 'none'
        ;
        this.show = ()=>this.root.style.display = 'block'
        ;
        this.root = document.getElementById(id);
        this.input = this.root.getElementsByTagName('input')[0];
        this.output = this.root.getElementsByTagName('output')[0];
        this.input.oninput = (e)=>{
            const value = e.target.value;
            this.output.innerHTML = value;
        };
        this.input.onchange = (e)=>{
            const value = e.target.valueAsNumber;
            this.onchange && this.onchange(value);
        };
    }
}
class $f6dc229582d03357$export$cd9a4ce27e34eb68 {
    setInputImageSrc(src) {
        this.inputImage.src = src;
    }
    setNumberOfPins(numberOfPins) {
        this.pinsParamSlider.setValue(numberOfPins);
    }
    setNumberOfStrings(numberOfStrings) {
        this.stringsParamSlider.setValue(numberOfStrings);
    }
    setFadeRate(fadeRate) {
        this.fadeParamSlider.setValue(fadeRate);
    }
    setMinimalDistance(minimalDistance) {
        this.distanceParamSlider.setValue(minimalDistance);
    }
    setPins(pins) {
        this.pins = pins;
        this.pattern = [];
        this.renderCanvas();
    }
    setPattern(pattern) {
        this.pattern = pattern;
        this.renderCanvas();
    }
    setShape(shape) {
        if (shape === 'circle') {
            this.circleShapeButton.classList.add('is-info', 'is-selected');
            this.squareShapeButton.classList.remove('is-info', 'is-selected');
            this.inputImage.classList.add('is-circle');
            this.distanceParamSlider.show();
        } else {
            this.squareShapeButton.classList.add('is-info', 'is-selected');
            this.circleShapeButton.classList.remove('is-info', 'is-selected');
            this.inputImage.classList.remove('is-circle');
            this.distanceParamSlider.hide();
        }
    }
    showSuccess(message) {
        $bd68cfbee9e4f47d$exports.toast({
            message: message,
            type: 'is-success',
            position: 'top-center',
            duration: 2000,
            pauseOnHover: false,
            closeOnClick: true
        });
    }
    showError(message) {
        $bd68cfbee9e4f47d$exports.toast({
            message: message,
            type: 'is-danger',
            position: 'top-center',
            duration: 2000,
            pauseOnHover: true,
            closeOnClick: true
        });
    }
    renderCanvas() {
        const ctx = this.outputCanvas.getContext('2d');
        this.drawPins(ctx);
        this.drawPattern(ctx);
    }
    drawPins(ctx) {
        const pins = this.pins;
        const xCoordinates = [
            ...pins.map((pin)=>pin.x
            )
        ];
        const yCoordinates = [
            ...pins.map((pin)=>pin.y
            )
        ];
        const xMin = Math.min(...xCoordinates);
        const xMax = Math.max(...xCoordinates);
        const yMin = Math.min(...yCoordinates);
        const yMax = Math.max(...yCoordinates);
        this.outputCanvas.width = xMax - xMin + 1; // +1 for pins
        this.outputCanvas.height = yMax - yMin + 1; // +1 for pins
        ctx.clearRect(0, 0, this.outputCanvas.width, this.outputCanvas.height);
        pins.forEach((pin)=>{
            ctx.fillRect(pin.x - xMin, pin.y - yMin, 1, 1);
        });
    }
    drawPattern(ctx) {
        const pattern = this.pattern;
        if (pattern.length < 2) return;
        const pins = pattern.map((idx)=>this.pins[idx]
        );
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.moveTo(pins[0].x - 0.5, pins[0].y - 0.5);
        let prevPin = pins[0];
        const rng = new $6e9830020d960076$export$5e767047b21b377c(); // needs to be deterministic
        pins.slice(1).forEach((pin)=>{
            // Generate third point to introduce line variation (bezier control point)
            const rand = rng.getRandomFloat(-10, 10);
            const cx = rand + (prevPin.x + pin.x) / 2;
            const cy = rand + (prevPin.y + pin.y) / 2;
            ctx.bezierCurveTo(cx, cy, cx, cy, pin.x - 0.5, pin.y - 0.5);
            //ctx.lineTo(pin.x - 0.5, pin.y - 0.5);
            prevPin = pin;
        });
        ctx.stroke();
    }
    constructor(){
        this.pins = [];
        this.pattern = [];
        this.onImageFileOpened = null;
        this.onKnitterFileOpened = null;
        this.onSaveClicked = null;
        this.onExportClicked = null;
        this.onPinsParamChange = null;
        this.onStringsParamChange = null;
        this.onFadeParamChange = null;
        this.onDistanceParamChange = null;
        this.onShapeSelected = null;
        const openInput = document.getElementById('open-input');
        openInput.onchange = $f6dc229582d03357$var$createFileInputEventHandler((file)=>{
            this.onKnitterFileOpened && this.onKnitterFileOpened(file);
        });
        const openButton = document.getElementById('open-button');
        openButton.onclick = ()=>openInput.click()
        ;
        const saveButton = document.getElementById('save-button');
        saveButton.onclick = ()=>this.onSaveClicked && this.onSaveClicked()
        ;
        const exportButton = document.getElementById('export-button');
        exportButton.onclick = ()=>this.onExportClicked && this.onExportClicked()
        ;
        const imageUploadInput = document.getElementById('image-upload-input');
        imageUploadInput.onchange = $f6dc229582d03357$var$createFileInputEventHandler((file)=>{
            this.onImageFileOpened && this.onImageFileOpened(file);
        });
        const imageUploadButton = document.getElementById('image-upload-button');
        imageUploadButton.onclick = ()=>imageUploadInput.click()
        ;
        this.inputImage = document.getElementById('input-image');
        this.outputCanvas = document.getElementById('output-canvas');
        this.circleShapeButton = document.getElementById('circle-shape-button');
        this.circleShapeButton.onclick = ()=>{
            this.onShapeSelected && this.onShapeSelected('circle');
        };
        this.squareShapeButton = document.getElementById('square-shape-button');
        this.squareShapeButton.onclick = ()=>{
            this.inputImage.classList.add('is-circle-animation');
            this.onShapeSelected && this.onShapeSelected('square');
        };
        this.pinsParamSlider = new $f6dc229582d03357$var$Slider('pins-param-slider');
        this.pinsParamSlider.onchange = (value)=>{
            this.onPinsParamChange && this.onPinsParamChange(value);
        };
        this.stringsParamSlider = new $f6dc229582d03357$var$Slider('strings-param-slider');
        this.stringsParamSlider.onchange = (value)=>{
            this.onStringsParamChange && this.onStringsParamChange(value);
        };
        this.fadeParamSlider = new $f6dc229582d03357$var$Slider('fade-param-slider');
        this.fadeParamSlider.onchange = (value)=>{
            this.onFadeParamChange && this.onFadeParamChange(value);
        };
        this.distanceParamSlider = new $f6dc229582d03357$var$Slider('distance-param-slider');
        this.distanceParamSlider.onchange = (value)=>{
            this.onDistanceParamChange && this.onDistanceParamChange(value);
        };
    }
}
function $f6dc229582d03357$var$createFileInputEventHandler(fileHandler) {
    return (event)=>{
        const inputElement = event.target;
        const files = inputElement.files;
        inputElement.type = ''; // reset input element
        inputElement.type = 'file';
        if (files && files.length > 0) fileHandler(files[0]);
    };
}


async function $401e24e1b3e45bdd$export$654bb7a9e221b8d2(dataUrl, dimensions) {
    const image = await $401e24e1b3e45bdd$var$createImageFromDataUrl(dataUrl);
    image.width = dimensions.width;
    image.height = dimensions.height;
    const imageData = $401e24e1b3e45bdd$var$getImageData(image);
    return $401e24e1b3e45bdd$var$convertImageDataToGrayscaleArray(imageData);
}
async function $401e24e1b3e45bdd$export$a0e8d147a7227d91(url) {
    try {
        await $401e24e1b3e45bdd$var$createImageFromDataUrl(url);
        return true;
    } catch (e) {
        return false;
    }
}
async function $401e24e1b3e45bdd$var$createImageFromDataUrl(url) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image)
        ;
        image.onerror = ()=>reject(new Error('image load error'))
        ;
        image.src = url;
    });
}
function $401e24e1b3e45bdd$var$getImageData(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
function $401e24e1b3e45bdd$var$convertImageDataToGrayscaleArray(imageData) {
    const output = new Uint8ClampedArray(imageData.data.length / 4);
    for(let i = 0, j = 0; i < imageData.data.length; i += 4, j++){
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        output[j] = $401e24e1b3e45bdd$var$convertRgbToGrayValue(r, g, b);
    }
    return output;
}
function $401e24e1b3e45bdd$var$convertRgbToGrayValue(red, green, blue) {
    return Math.round(red * 0.2126 + green * 0.7152 + blue * 0.0722);
}


function $baa6ff5fb7469896$export$9099ad97b570f7c(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $4eebfac87ddf05b1$export$9099ad97b570f7c(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $baa6ff5fb7469896$export$9099ad97b570f7c(target, key, source[key]);
        });
    }
    return target;
}





class $d7f13e2276a742c9$export$d4ea483f2e51cca1 {
    static saveItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify({
            [key]: value
        }));
    }
    static loadItems(keys) {
        let obj = {
        };
        keys.forEach((key)=>{
            const value = sessionStorage.getItem(key);
            obj = $4eebfac87ddf05b1$export$9099ad97b570f7c({
            }, obj, JSON.parse(value || '{}'));
        });
        return obj;
    }
}


$6affecf2d197f5a4$export$c0b0ca455467112f({
    enforceActions: 'observed'
});
class $2ea005578145ef96$var$State {
    get parameters() {
        return this.parameterKeys.reduce((acc, k)=>$4eebfac87ddf05b1$export$9099ad97b570f7c({
            }, acc, {
                [k]: this[k]
            })
        , {
        });
    }
    get coreParams() {
        if (!this.pixels) return undefined;
        return {
            id: Date.now() + '' + Math.random(),
            dimensions: $4eebfac87ddf05b1$export$9099ad97b570f7c({
            }, this.dimensions),
            pixels: this.pixels,
            fadeRate: this.fadeRate,
            minimalDistance: this.minimalDistance,
            shape: this.shape,
            numberOfPins: this.numberOfPins
        };
    }
    get isCoreInitialized() {
        var ref;
        return this.coreId === ((ref = this.coreParams) === null || ref === void 0 ? void 0 : ref.id);
    }
    constructor(init){
        this.coreId = '';
        this.pins = undefined;
        this.pixels = undefined;
        this.pattern = undefined;
        this.setImageDataUrl = (imageDataUrl)=>this.imageDataUrl = imageDataUrl
        ;
        this.setDimensions = (dimensions)=>this.dimensions = dimensions
        ;
        this.setShape = (shape)=>this.shape = shape
        ;
        this.setNumberOfPins = (numberOfPins)=>this.numberOfPins = numberOfPins
        ;
        this.setNumberOfStrings = (numberOfStrings)=>this.numberOfStrings = numberOfStrings
        ;
        this.setFadeRate = (fadeRate)=>this.fadeRate = fadeRate
        ;
        this.setMinimalDistance = (minimalDistance)=>this.minimalDistance = minimalDistance
        ;
        this.setPins = (pins)=>this.pins = pins
        ;
        this.setPixels = (pixels)=>this.pixels = pixels
        ;
        this.setPattern = (pattern)=>this.pattern = pattern
        ;
        this.setCoreId = (coreId)=>this.coreId = coreId
        ;
        this.setParameters = (params)=>Object.assign(this, params)
        ;
        this.parameterKeys = Object.keys(init);
        this.imageDataUrl = init.imageDataUrl;
        this.shape = init.shape;
        this.dimensions = init.dimensions;
        this.numberOfPins = init.numberOfPins;
        this.numberOfStrings = init.numberOfStrings;
        this.fadeRate = init.fadeRate;
        this.minimalDistance = init.minimalDistance;
        $6affecf2d197f5a4$export$cea5e1635336dfa1(this, {
            parameterKeys: false,
            pins: $6affecf2d197f5a4$export$5af762eb508641fe.ref,
            pixels: $6affecf2d197f5a4$export$5af762eb508641fe.ref,
            pattern: $6affecf2d197f5a4$export$5af762eb508641fe.ref,
            parameters: false,
            coreParams: $6affecf2d197f5a4$export$e23ddc2fc1228fe8,
            isCoreInitialized: $6affecf2d197f5a4$export$e23ddc2fc1228fe8
        });
    }
}
function $2ea005578145ef96$export$81c453176872a44a(defaultParams) {
    const keys = Object.keys(defaultParams);
    const state = new $2ea005578145ef96$var$State($4eebfac87ddf05b1$export$9099ad97b570f7c({
    }, defaultParams, $d7f13e2276a742c9$export$d4ea483f2e51cca1.loadItems(keys)));
    keys.forEach((k)=>{
        $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>$d7f13e2276a742c9$export$d4ea483f2e51cca1.saveItem(k, state[k])
        );
    });
    return state;
}


var $3d88de094558916c$exports = {};
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else if ("undefined" != typeof $3d88de094558916c$exports) b();
    else b(), a.FileSaver = {
    };
})($3d88de094558916c$exports, function() {
    "use strict";
    function b(a, b1) {
        return "undefined" == typeof b1 ? b1 = {
            autoBom: !1
        } : "object" != typeof b1 && (console.warn("Deprecated: Expected third argument to be a object"), b1 = {
            autoBom: !b1
        }), b1.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([
            "\uFEFF",
            a
        ], {
            type: a.type
        }) : a;
    }
    function c(a, b1, c1) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b1, c1);
        }, d.onerror = function() {
            console.error("could not download file");
        }, d.send();
    }
    function d(a) {
        var b1 = new XMLHttpRequest;
        b1.open("HEAD", a, !1);
        try {
            b1.send();
        } catch (a1) {
        }
        return 200 <= b1.status && 299 >= b1.status;
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"));
        } catch (c1) {
            var b1 = document.createEvent("MouseEvents");
            b1.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b1);
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof $parcel$global && $parcel$global.global === $parcel$global ? $parcel$global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g1, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g1 = g1 || b2.name || "download", j.download = g1, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g1, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
            i.revokeObjectURL(j.href);
        }, 40000), setTimeout(function() {
            e(j);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f1, g1, h) {
        if (g1 = g1 || f1.name || "download", "string" != typeof f1) navigator.msSaveOrOpenBlob(b(f1, h), g1);
        else if (d(f1)) c(f1, g1, h);
        else {
            var i = document.createElement("a");
            i.href = f1, i.target = "_blank", setTimeout(function() {
                e(i);
            });
        }
    } : function(b2, d1, e1, g1) {
        if (g1 = g1 || open("", "_blank"), g1 && (g1.document.title = g1.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d1, e1);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader;
            k.onloadend = function() {
                var a1 = k.result;
                a1 = j ? a1 : a1.replace(/^data:[^;]*;/, "data:attachment/file;"), g1 ? g1.location.href = a1 : location = a1, g1 = null;
            }, k.readAsDataURL(b2);
        } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
            g1 ? g1.location = m : location.href = m, g1 = null, setTimeout(function() {
                l.revokeObjectURL(m);
            }, 40000);
        }
    });
    f.saveAs = g.saveAs = g, "undefined" != "object" && ($3d88de094558916c$exports = g);
});


async function $e15bd34304d109ca$export$9faebfcecd46ad41(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result)
        ;
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
async function $e15bd34304d109ca$export$6347a6f4045a255a(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result)
        ;
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
async function $e15bd34304d109ca$export$fd867f116dbf30e9(file) {
    let text;
    try {
        text = await $e15bd34304d109ca$export$6347a6f4045a255a(file);
    } catch (e) {
        console.error(e);
        throw Error(`Oops. Could not read '${file.name}'!`);
    }
    try {
        const [checksum, data] = text.split('|', 2);
        if ($e15bd34304d109ca$var$hashCode(data).toString() !== checksum) throw Error('checksum mismatch');
        return JSON.parse(data);
    } catch (e) {
        console.error(e);
        throw Error(`Invalid file: '${file.name}'`);
    }
}
function $e15bd34304d109ca$export$5c53bbe227eb82f9(parameters, filename) {
    const data = JSON.stringify(parameters);
    const checksum = $e15bd34304d109ca$var$hashCode(data);
    const blob = new Blob([
        `${checksum}|${data}`
    ], {
        type: 'text/plain;charset=utf-8'
    });
    $3d88de094558916c$exports.saveAs(blob, filename);
}
function $e15bd34304d109ca$var$hashCode(str) {
    let hash = 0, i, chr;
    for(i = 0; i < str.length; i++){
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}


class $89c907837e77072e$export$61cb58fb92a7f9a7 {
    get cancelled() {
        return this._cancelled;
    }
    cancel() {
        this._cancelled = true;
    }
    constructor(){
        this._cancelled = false;
    }
}
class $89c907837e77072e$export$da92a3a08a763211 {
    getExclusiveToken(label) {
        if (label in this.tokens) this.tokens[label].cancel();
        const token = new $89c907837e77072e$export$61cb58fb92a7f9a7();
        this.tokens[label] = token;
        return token;
    }
    constructor(){
        this.tokens = {
        };
    }
}


const $20f2163f02cb1506$export$6f024f202cd6f9db = 'data:image/png;base64,' + `\niVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Xu2dB/yPVfvHL3uTKNmj\nUGjYsqOkQUmDPw1ENERoeGQ3jKgUZZQGUVEpJTNkjwiPmb1HoVDm/3XdPQ3z9x33977PfZ/39Xp9\nX3qe7nPOdb2vk+/ne59zrpNMRE4JBgEIQAACEICAVQSSIQCsyjfBQgACEIAABBwCCAAmAgQgAAEI\nQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAAC\nwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQM\nAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAA\nBBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMA\nAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAEIAAB\nCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAA\nWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICAhQQQABYmnZAh\nAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCA\nAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5A\nAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAA\nAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggA\nC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIE\nIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQ\nQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEI\nQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQg\nYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFg\nYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYA\nBCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAAC\nCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQAB\nCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgICHBFKmTCm5cuWS3Llzy88//ywbN26UP/74w0MPGAoC\nEIDAnwQQAMwECCSQwBVXXCFVq1aV2rVrS+XKlSVHjhySPHnyv0c8efKkbN68WT755BMZOXKkLFmy\nJIHe0DUEIACBfwggAJgNEEgAgVq1asl//vMf58s/Gps3b5489dRTMnv27Gia8SwEIACBqAkgAKJG\nRgMInJ9ApUqVpF+/flKuXLm4ML333nuOgNi2bVtc/dAYAhCAwPkIIACYGxBwiUDnzp2lU6dOkipV\nKld63LFjh9xxxx2yYMECV/qjEwhAAAL/JoAAYD5AwAUCgwcPlubNm7vQ0+ldHD16VFq1aiXvvPOO\n633TIQQgYDcBBIDd+Sd6Fwh88MEH0rhxYxd6On8X+nahR48eCR2DziEAAbsIIADsyjfRukygf//+\n0qZNG5d7PXd33bp1k65du3oyFoNAAALhJ4AACH+OiTBBBNq3by99+vRJUO+IAE/BMhgELCSAALAw\n6YQcP4HHHntM3njjjfg7iqEHPR3w4osvxtCSJhCAAAT+IYAAYDZAIEoCZcqUkRkzZki6dOmibOne\n4w0bNpRRo0a51yE9QQAC1hFAAFiXcgKOh0D27NmdY3kFChSIp5u42544ccKpLDh37ty4+6IDCEDA\nTgIIADvzTtQxEtCSvXfffXeMrd1ttmvXLkcErFu3zt2O6Q0CELCCAALAijQTpBsEtETvK6+84kZX\nrvWhlwnpksS+fftc65OOIAABOwggAOzIM1HGSaBYsWLO6/ZMmTLF2ZP7zUeMGJHwOgTue02PEICA\n3wQQAH5ngPGNJ5A+fXrncp5rr73WWF/1VMLAgQON9Q/HIAAB8wggAMzLCR4ZRuDll1+WZ555xjCv\nTnfn4MGDUr58eVm1apXRfuIcBCBgDgEEgDm5wBMDCeh1vtOmTZPkyZMb6N3pLi1btkwqVqwov/32\nm/G+4iAEIOA/AQSA/znAA0MJpEmTRhYuXCglSpQw1MOz3dK3Fc8991xg/MVRCEDAPwIIAP/YM7Lh\nBJ5++mnp1auX4V6e7t7x48elSpUq1AcIVNZwFgL+EEAA+MOdUQ0nkDt3btFX6lmzZjXc07Pd030A\nZcuWZSkgcJnDYQh4SwAB4C1vRgsIgffff1/uv//+gHjLUkBgE4XjEPCRAALAR/gMbSaBChUqyJw5\nc8x0LkKvWAqIEBSPQcBiAggAi5NP6OcmMGvWLGc3fdBt6dKlTpVAFQMYBCAAgTMJIACYExD4F4EG\nDRrIRx99FBomLVq0kCFDhoQmHgKBAATcI4AAcI8lPQWcQMaMGZ2Nf37f9Ocmxu3bt4uWMT5w4ICb\n3dIXBCAQAgIIgBAkkRDcIdCmTRvp37+/O50Z1Eu3bt2ka9euBnmEKxCAgAkEEAAmZAEffCeg9f71\n+FzevHl998VtB/TXv74F0LcBGAQgAIG/CCAAmAsQEJFWrVqF+jId3Qeg+wEwCEAAAggA5gAE/kcg\nbdq0smLFCilUqFBomRw+fNiJb9euXaGNkcAgAIHoCPAGIDpePB1CAk2bNpVhw4aFMLLTQ9I7AvSu\nAAwCEICAEkAAMA+sJpA6dWpn53+RIkVCz2Ht2rVy1VVXyYkTJ0IfKwFCAAJJE0AAJM2IJ0JMoGHD\nhjJy5MgQR3h6aLVr15Zvv/3WmngJFAIQOD8BBACzw1oCyZMnlx9++EGuueYaaxh89dVXUqdOHWvi\nJVAIQAABwByAwFkE6tatK1988YVVZI4ePeocddy9e7dVcRMsBCBwNgHeADArrCUwb948KVeunHXx\n33XXXfLZZ59ZFzcBQwACpxNAADAjrCRQq1Yta9fCBw0aJI8++qiVeSdoCEDgHwIIAGaDlQSmT58u\nVatWtTL2lStXOpUBMQhAwG4CCAC7829l9Ndff73Mnj3bytj/Cjpnzpyyc+dOqxkQPARsJ4AAsH0G\nWBj/p59+KvXr17cw8n9Cvvfee+WTTz6xmgHBQ8B2AggA22eAZfEXLFhQ9BV4mjRpLIv89HA7dOgg\nffv2tZoBwUPAdgIIANtngGXxayncZ555xrKozw73lVdekfbt21vPAQAQsJkAAsDm7FsWe5YsWeSn\nn36SbNmyWRb52eGOGDFCGjdubD0HAEDAZgIIAJuzb1nsTzzxhLz++uuWRX3ucCdPniw33XQTLCAA\nAYsJIAAsTr5NoadIkUKWL18uV155pU1hnzdWZXH11VfDAgIQsJgAAsDi5NsU+m233SZaBx/7k8C6\ndeukcOHC4IAABCwmgACwOPk2ha6vvGvWrGlTyBeMVa9AtukSJBIPAQicTQABwKwIPYFrr71WlixZ\nEvo4owlw/vz5Ur58+Wia8CwEIBAyAgiAkCWUcM4mMHjwYGnevDlo/kVASyFXr14dJhCAgMUEEAAW\nJ9+G0C+55BLn6F+mTJlsCDfiGCdMmCC33HJLxM/zIAQgED4CCIDw5ZSI/kXgueeekxdffBEmZxDQ\n64D1WmAMAhCwlwACwN7chz5yLfe7atUqKVCgQOhjjTbAkSNHSqNGjaJtxvMQgECICCAAQpRMQjmd\nQL169WTs2LFgOQeBV199Vdq2bQsbCEDAYgIIAIuTH/bQZ86cKZUrVw57mDHF16xZM3nnnXdiaksj\nCEAgHAQQAOHII1GcQaBUqVKyaNEiuJyHQLly5WTBggXwgQAELCaAALA4+WEO/e2335YWLVqEOcSY\nYzt58qRzKuLw4cMx90FDCEAg+AQQAMHPIRGcQSBr1qyyYcMG0dv/sLMJUAaYWQEBCCgBBADzIHQE\nuPXvwinlCGDopjwBQSAmAgiAmLDRyGQCP/74IzfdXSBB3bt3ly5dupicQnyDAAQ8IIAA8AAyQ3hH\nQMvbTps2zbsBAzhS3bp15csvvwyg57gMAQi4SQAB4CZN+vKdwJgxY6hwd4Es/P7775I9e3Y5dOiQ\n77nCAQhAwF8CCAB/+TO6iwRy587t3HOfNm1aF3sNV1fffvut1K5dO1xBEQ0EIBATAQRATNhoZCKB\nzp07S7du3Ux0zRifnnrqKenfv78x/uAIBCDgHwEEgH/sGdlFAilSpJA1a9ZIoUKFXOw1fF0VK1ZM\nVq5cGb7AiAgCEIiaAAIgamQ0MJFAzZo1ZfLkySa6ZoxPa9eulSJFihjjD45AAAL+EkAA+Muf0V0i\nMGrUKLnvvvtc6i2c3Wh1xJYtW4YzOKKCAASiJoAAiBoZDUwjoJX/Nm7cKJkzZzbNNaP8uemmm3hL\nYlRGcAYC/hJAAPjLn9FdINCkSRNutkuC4+rVq0XX//UeAAwCEICAEkAAMA8CT2DGjBlSpUqVwMeR\nyACeffZZ6dWrVyKHoG8IQCBgBBAAAUsY7p5O4Morr2RXexKTQov+FCxYUPbs2cP0gQAEIPA3AQQA\nkyHQBHr06CGdOnUKdAyJdn706NHSoEGDRA9D/xCAQMAIIAACljDc/YdA8uTJnbP/l19+OVguQKBq\n1aoyc+ZMGEEAAhA4jQACgAkRWAL6xTZ9+vTA+u+F40uXLpXrrrvOi6EYAwIQCBgBBEDAEoa7/xAY\nPHiwNG/eHCQXINCsWTNOSDBDIACBcxJAADAxAkkgffr0snnzZsmWLVsg/ffCaa2NcNVVV4neAIhB\nAAIQOJMAAoA5EUgCderUkXHjxgXSd6+cbt26tQwYMMCr4RgHAhAIGAEEQMAShrt/Ehg7dqzUq1cP\nHOchsGPHDqfu/2+//QYjCEAAAiwBMAfCQUBL/+rr/4wZM4YjoAREQeGfBEClSwiEjABvAEKWUBvC\nefDBB2X48OE2hBpTjFrwR3/979+/P6b2NIIABOwggACwI8+hinLKlClSo0aNUMXkZjBdunSR7t27\nu9klfUEAAiEkgAAIYVLDHFKuXLmcm/9SpUoV5jBjjm3r1q1SokQJOXDgQMx90BACELCDAALAjjyH\nJsqHH35YhgwZEpp43A6kcePGMmLECLe7pT8IQCCEBBAAIUxqmEOaOHGi6L322NkEtNyvVkfEIAAB\nCERCAAEQCSWeMYJA9uzZZcuWLZI2bVoj/DHJiePHj0v58uVl8eLFJrmFLxCAgMEEEAAGJwfXTifQ\nqFEj+fDDD8FyDgIDBw6Uxx57DDYQgAAEIiaAAIgYFQ/6TWD8+PFy6623+u2GcePrsb+rr75adu3a\nZZxvOAQBCJhLAAFgbm7w7F8ELrroItEd7hkyZIDLGQTatGkjr732GlwgAAEIREUAARAVLh72i8C9\n994ro0eP9mt4Y8f9/vvvnY1/p06dMtZHHIMABMwkgAAwMy94dQaBzz77TO688064/IuA1vkvXbq0\nrFmzBi4QgAAEoiaAAIgaGQ28JqA1/7dv3y6ZMmXyemijx+vYsaO89NJLRvuIcxCAgLkEEADm5gbP\n/kdAN/7pBkDsHwKLFi2SihUrytGjR8ECAQhAICYCCICYsNHISwJa+U8rAGJ/Evjjjz+kQoUKsmTJ\nEpBAAAIQiJkAAiBmdDT0isCGDRukQIECXg1n/Dg9e/aU559/3ng/cRACEDCbAALA7PxY712pUqVE\nX3djfxJYuXKllC1bVg4dOgQSCEAAAnERQADEhY/GiSagv3S52vZPyidOnHCO/M2ePTvR2OkfAhCw\ngAACwIIkBznEOXPmOOvdmEi/fv2kXbt2oIAABCDgCgEEgCsY6SQRBHLnzi2bNm2SFClSJKL7QPWp\n+yB0OWT//v2B8htnIQABcwkgAMzNjfWe3X///fL+++9bz0Ff/VerVk1mzZplPQsAQAAC7hFAALjH\nkp5cJkD1vz+Bvvzyy/Lcc8+5TJfuIAAB2wkgAGyfAYbGnz59eqf6X5YsWQz10Bu3li9fLuXLl5fD\nhw97MyCjQAAC1hBAAFiT6mAFeuONN8qkSZOC5bTL3h45csSp9kfBH5fB0h0EIOAQQAAwEYwk0L9/\nf9Frbm02PQKpRX8wCEAAAokggABIBFX6jJvAihUrpFixYnH3E9QO5s6d65z5P3bsWFBDwG8IQMBw\nAggAwxNko3tFihSR1atX2xi6E/PBgweda37XrVtnLQMChwAEEk8AAZB4xowQJYFHH31U3nzzzShb\nhefxtm3byquvvhqegIgEAhAwkgACwMi02O3UN998I7Vr17YSgm58rFWrlpWxEzQEIOAtAQSAt7wZ\nLQkCGTNmlB07doj+aZvt3bvXqfa3ZcsW20InXghAwAcCCAAfoDPk+Qnccsst8vXXX1uJSCsffvjh\nh1bGTtAQgID3BBAA3jNnxAsQGDhwoLRq1co6Ru+++640bdrUurgJGAIQ8I8AAsA/9ox8DgJr1qyR\nwoULW8VGLzzSXf/79u2zKm6ChQAE/CWAAPCXP6P/i0Dx4sVFS9/aZMePH5cbbrhBvv/+e5vCJlYI\nQMAAAggAA5KAC38SePLJJ607/vbCCy9Ip06dmAIQgAAEPCeAAPAcOQOej8D48ePl1ltvtQbQokWL\npFKlSvLHH39YEzOBQgAC5hBAAJiTC6s9SZ06tezevdua2/8OHDggZcuWlbVr11qdd4KHAAT8I4AA\n8I89I/+LgP4StmkdvHXr1jJgwADmAAQgAAHfCCAAfEPPwP8moOvgPXr0sALK559/LvXq1bMiVoKE\nAATMJYAAMDc3Vnn23XffSbVq1UIf8/bt250jfzt37gx9rAQIAQiYTQABYHZ+rPAuffr0omVw06VL\nF/p469atK19++WXo4yRACEDAfAIIAPNzFHoP9fKbb7/9NvRxvvfee/LQQw+FKs60adOKCjgVb/r5\n6591U6eebvj999/P+Tl69GioOBAMBIJIAAEQxKyFzOcXX3xRnnvuuZBFdXo4esHRdddd55x0CJLl\nyJHD8TtfvnxnffLkySP6RR+LqTDQCoibN292/vzro/97/fr1XIgUC1TaQCBKAgiAKIHxuPsE5s+f\n7xyJC7M1bNhQRo0aZXSIegOjftlrLsqXLy/lypWTggUL+uLznj17ZMGCBad9giaefAHHoBCIggAC\nIApYPOo+gcyZM8vPP/8sKVKkcL9zQ3ocO3as1K9f3xBvTncjd+7cojcw3nPPPVKlShWj92HoW4Lp\n06fLF198IRMnTpTffvvNSKY4BYGgEEAABCVTIfVTN8XpX+hhNf0lW7JkSdm2bZsxIebPn1/uvvtu\nufPOO6VChQqSMmVKY3yL1JEjR47I1KlTRY9UqhjQpQMMAhCIjgACIDpePO0ygf79+0ubNm1c7tWc\n7lq0aCFDhgzx3aFkyZJJjRo1RAsQ3XzzzZImTRrffXLLgVOnTjlFpPr27Stff/216AVLGAQgkDQB\nBEDSjHgigQR++OEHZ905jKa/TPXL1k/Lli2bPPjgg9KsWTMpVqyYn654MrZeJz1w4EDRExf79+/3\nZEwGgUBQCSAAgpq5EPh90UUXyS+//BKCSM4OQb98VNjourUfpssOjz/+uPOqX/dZ2Gb79u2ToUOH\nSr9+/QJ38sK2XBGvfwQQAP6xt35kXYP+7LPPQsnhqaeeEl3e8NoKFCgg3bt3l0aNGkny5Mm9Ht64\n8XQPhh4z1bcC1B4wLj045DMBBIDPCbB5+LCu/+t6dNWqVUXXpr2y7NmzS/v27eWxxx4TPc6HnU7g\nxx9/lCeffFK05DQGAQj8SQABwEzwjUAY1//1aFqZMmVk9erVnnDNkCGD86WvX/6XXHKJJ2MGeZBP\nPvnE2XSqdzJgELCdAALA9hngU/xhXf9fuHChZ0WN9Ox+7969RV/7Y5ET0C9/ZTd79uzIG/EkBEJI\nAAEQwqQGIaSwrv97cdWvvu7XI2+6ux+LjcCJEyekS5cu8sILL8TWAa0gEAICCIAQJDGIIYR1/f+N\nN96QJ554ImEp0YuTdHd73rx5EzaGTR3rJlQt06wXF2EQsI0AAsC2jBsSbxjX/xWtri+/9tprrlPO\nkiWLdO3aNdRFk1yHFmGHOhcrV64shw8fjrAFj0EgHAQQAOHIY6CiCOv6vyZBz92PGTPG1Xxoud4P\nPvhArrjiClf7pbN/COjFQ9WrV0cEMCmsIoAAsCrdZgQb1vV/patf1vPmzXMNdKtWrZxiNmnTpnWt\nTzo6N4E5c+bIjTfeiAhgglhDAAFgTarNCTSs6/9KWG/Xc+uImW5Q69ixozmJs8CTCRMmODc3shxg\nQbIJkToAzAHvCSxevNi5IS9spjfU6bl8NwoAvfvuu/LQQw+FDVEg4hk9erQ0aNAgEL7iJATiIcAb\ngHjo0TZqApkyZXIuaQljmdq1a9dKkSJFomby7wZat3/cuHFSrVq1uPqhcXwEErWZMz6vaA0Bdwkg\nANzlSW9JEKhdu7Z88803oeSk99PXrFkz5tjy5Mkj+gq6ePHiMfdBQ3cIaEVH3c+xYsUKdzqkFwgY\nSAABYGBSwuxSz5495T//+U8oQ9QraGN9bZ8zZ07nTvtChQqFkk0Qg1q5cqWUL19efv311yC6j88Q\nSJIAAiBJRDzgJgG9jCWsr7f1nH63bt2ixnXxxRfLjBkz+OUfNbnEN0h0YafER8AIEDg/AQQAs8Mz\nAqlTp3bW/9OlS+fZmF4O1LRpU9HNe9GY1kRQUXTttddG04xnPSRw/fXXy9y5cz0ckaEg4A0BBIA3\nnBlFRCpWrCizZs0KLQst0ztp0qSI49MNf/rlH8YTERFDCMCD06ZNkxo1agTAU1yEQHQEEADR8eLp\nOAg8/fTT0qtXrzh6MLvplVdeGfE1wBkzZpTx48dL1apVzQ4K7xwCN998s0ycOBEaEAgVAQRAqNJp\ndjB6vK1OnTpmOxmjd3r2X5c2IrlURpdC9BKaW2+9NcbRaOY1Aa1dUbZsWTl58qTXQzMeBBJGAAGQ\nMLR0fCaBX375RXTNO4y2a9cuueyyyyIKrU+fPtK+ffuInuUhcwg0btxYRowYYY5DeAKBOAkgAOIE\nSPPICJQoUUKWLVsW2cMBfGrhwoXOL8Sk7IEHHhA9LogFj4C+BShdunTwHMdjCJyHAAKAqeEJgZYt\nW8qgQYM8GcuPQcaOHevUkL+QFStWTGbPni16tS8WTAJlypSRRYsWBdN5vIbAGQQQAEwJTwh8+OGH\n0qhRI0/G8mOQvn37SocOHc47dLZs2ZxbAi+//HI/3GNMlwi8/vrr8uSTT7rUG91AwF8CCAB/+Vsz\n+qZNmyRfvnyhjTep2vFjxoyRu+66K7Tx2xLYnj17JH/+/KIXP2EQCDoBBEDQMxgA//WK3K1btwbA\n09hdvPvuu0W/5M9lnTp1kh49esTeOS2NIlCvXj35/PPPjfIJZyAQCwEEQCzUaBMVAf3le74vx6g6\nMvjh860N6/+v6/6pUqUy2Htci4aA1m+4/fbbo2nCsxAwkgACwMi0hMspLf6jRYDCbFrPX485/tv0\nvP+cOXOkVKlSYQ7dutj0cqAcOXKwDGBd5sMXMAIgfDk1LqIwXwCksHU9OH369GdxD3vlQ+MmmocO\naWlgLRGMQSDIBBAAQc5eAHxPkSKFHDhwQDJkyBAAb2Nzcc2aNVK0aNHTGhcoUECWLFnCkb/YkBrf\nSq+1fv755433EwchcCECCADmR0IJ6C13+kUYZtMa8Vor/t/2zTffSO3atcMcttWxzZ8/X8qXL281\nA4IPPgEEQPBzaHQELVq0kLfffttoH+N17q233pJWrVr93Y3WO9C6B1h4CRw/flyyZ8/uvN3CIBBU\nAgiAoGYuIH4PGzZMmjZtGhBvY3NTj/m98MILTuNLLrlEli5dKjlz5oytM1oFhsCdd94pX3zxRWD8\nxVEInEkAAcCcSCiB5cuXS/HixRM6ht+dN2nSRIYPH+648eqrr1Ipzu+EeDR+x44d5aWXXvJoNIaB\ngPsEEADuM6XH/xHIlCmT84o0WTKdZuG16tWry/Tp06VIkSLOr/+0adOGN1gi+5vAkCFDRJe4MAgE\nlQACIKiZC4DfNWvWlMmTJwfA0/hc1BLHW7ZskY8//ljuueee+DqjdWAITJkyRW688cbA+IujEDiT\nAAKAOZEwAvqK9K+18YQN4nPHp06dkpQpU4pW/NPLfjB7CGzYsEEKFSpkT8BEGjoCCIDQpdScgHSD\nVN26dc1xKAGe7NixQ3LlyiVTp06VG264IQEj0KWpBPQkQLp06UT/xCAQRAIIgCBmLSA+79y50ymZ\nGmbTOv/du3eXCRMmhDlMYjsPAb3eef369fCBQCAJIAACmTbzndYrUzdu3Gi+o3F6qOf9S5QoIddd\nd12cPdE8iAT+2gAaRN/xGQIIAOZAQgjUr19fPv3004T0bVKnq1evPqsMsEn+XcgXvbxo06ZNcvTo\nUaeojX4yZ84cFPeN8PO2226Tr7/+2ghfcGhNub4AACAASURBVAIC0RJAAERLjOcjIqDno5999tmI\nng3yQ/rlqbf+mW779++Xb7/9Vr766iunNLN+8eutdmeaxqLFjEqXLu3saahcubLzdkM3OmJnE1Ch\nO3bsWNBAIJAEEACBTJv5Tmt9/Jtuusl8R0Ps4bFjx2TUqFHy3nvvyaxZs+T333+PKdpLL71UHnnk\nEXn88cdF/xn7h0Djxo1lxIgRIIFAIAkgAAKZNvOd/vnnnyVr1qzmOxpCD0+ePOksv3Tr1k3++9//\nuhZhlixZnMI37du3Rwj8j2rz5s1l6NChrjGmIwh4SQAB4CVtS8bSndHr1q2zJFqzwtTX/Lr0ksgb\nGAsXLuwUeNICSLZb69atZcCAAbZjIP6AEkAABDRxJrt97733yujRo012MXS+6YY+vZRo4MCBnsSW\nN29e0WWeK6+80pPxTB3kmWeekd69e5vqHn5B4IIEEABMENcJ6F+IHTp0cL1fOjw3gZkzZ8oDDzzg\n+bHLPHnyOG8asmXLZm1qOnfuLD169LA2fgIPNgEEQLDzZ6T3WiO9Ro0aRvoWJqdOnDjh/OpXwaXr\n/n5Yq1atPHvr4Ed8SY3Zrl076devX1KP8e8hYCQBBICRaQm2U3oDIOfJE5vDw4cPS9OmTY1YarG5\nDPLDDz8sw4YNS2yy6R0CCSKAAEgQWFu71Q1ia9assTV8T+LWExY333yzLFy40JPxkhqkTp06Mm7c\nuKQeC+W/19sfbSh4FcrkEZQgAJgErhJo2LChjBw50tU+6ewfAlpeWavPuXm8L16+GTNmFL33IUOG\nDPF2Fbj2tWrVkkmTJgXObxyGgBJAADAPXCXwyiuvyFNPPeVqn3T2J4GlS5eKfuHs3r3bOCQ23Px4\nLujly5eX+fPnG5cPHIJAJAQQAJFQ4pmICXz33XdSrVq1iJ/nwcgIrFq1SqpWrSp79uyJrIHHT2ml\nwLfeesvjUf0fTo9B6n0QGASCSAABEMSsGepzsmTJ5ODBg6KvhDH3CGzYsEGqVKki27Ztc69Tl3u6\n5ZZbrLsUR0sta3XEI0eOuEyT7iDgDQEEgDecrRhFfw2tXLnSili9ClLX1vVCnp9++smrIWMap1Sp\nUrJo0aKY2ga10eLFi51LkzAIBJUAAiComTPQb70Y5YMPPjDQs2C6pMcptZ6CftGYbloUaMuWLaa7\n6ap/Q4YMce5GwCAQVAIIgKBmzkC/+/fvL23atDHQs2C6dPfdd8uYMWMC4XyqVKlEr0a2ybQOw7vv\nvmtTyMQaMgIIgJAl1M9wtCStvq7G4iegN/l17do1/o486kHLAe/du9ej0cwYpmTJkgm9dMmMKPEi\nzAQQAGHOroexJU+e3NkAaONZcLcxjx07VurXr+92twntr0SJErJs2bKEjmFS57/99ptzB4Jtbz1M\nygG+xE8AARA/Q3oQkeLFi8vy5cthESeBtWvXSoUKFUSr/QXJtD6BXkVsi3399ddOQSYMAkEmgAAI\ncvYM8v3BBx+U4cOHG+RR8FzRL30tLLNu3brAOa818XVTnC2mFS9HjRplS7jEGVICCICQJtbrsF5/\n/XV54oknvB42VOPpa399/R9EU/GnItAGO3TokOiph/3799sQLjGGmAACIMTJ9TK0adOmSfXq1b0c\nMlRj9erVS5599tnAxqTFigoUKBBY/6NxXC8+uuOOO6JpwrMQMJIAAsDItATPqV27dsmll14aPMcN\n8FgL6Gilv6BWlCtatKhoqWJbjBsAbcl0+ONEAIQ/xwmPMHv27MbWqE948HEO8Msvv0jZsmWNr/R3\noTDbtWsnffv2jZNEMJrrSZe8efM6J14wCASdAAIg6Bk0wH+9pGb69OkGeBI8F3Tz3LBhw4Ln+P88\n1gJAK1askMKFCwc2hmgcV6HToUOHaJrwLASMJYAAMDY1wXGsZcuWMmjQoOA4bIinunGuSZMmhngT\nmxt33nmnfPbZZ7E1DlgrLc2s913o/QwYBMJAAAEQhiz6HAMnAKJPgG6aK1OmTODO+58Z6axZs6Ri\nxYrRAwhgi5deekk6duwYQM9xGQLnJoAAYGbETWDy5MlSs2bNuPuxpYOTJ086JZPnzJkT6JB1M9zH\nH38c6BgidV73auiv/927d0fahOcgYDwBBIDxKTLfwe3bt0vOnDnNd9QQDwcMGCCtW7c2xJvY3NAT\nH0uWLLEm7z169JDOnTvHBotWEDCUAALA0MQExa2sWbMG/jW2l6xVLF1zzTWyb98+L4d1fSy9Be+h\nhx5yvV8TO9Q1f73rIOg5M5EtPvlLAAHgL//Aj16pUiX5/vvvAx+HVwE0aNBARo8e7dVwCRnnrrvu\nCsw1xW4AuO+++6xZ6nCDF30EhwACIDi5MtLT5s2by+DBg430zTSnwnCBjP4S1mufL7roItPwJsSf\nDz74QB544IGE9E2nEPCbAALA7wwEfPz+/ftLmzZtAh5F4t3XI2TXXnutbNq0KfGDJWiEQoUKOW97\nbNnvocs1JUuWZONfguYT3fpPAAHgfw4C7YFeAatXwWIXJqB1/rXef1AtU6ZMsmDBAtGyv7aY1jj4\n4osvbAmXOC0kgACwMOluhrxlyxbnZjTs/AR0t7xe83v06NHAYrLtqKdWZ9QqjRgEwkwAARDm7CY4\ntsyZM4u+2sYuTOCGG26Q7777LrCYPvroI9HNi7aYCrZq1apR79+WhFscJwLA4uTHG3qFChUCX8wm\nXgZJtf/888+lXr16ST1m5L/X1/7jx493biq0xTZv3uxUNty2bZstIROnxQQQABYnP97QmzZtGuiL\nbOKNP6n2hw8fluuuu07Wrl2b1KPG/fvcuXPLhAkTnPPvtphW+9Mvf5uuNrYlt8R5bgIIAGZGzAT0\nZjS9ChY7N4HevXvLM888Ezg8xYsXFz2ymC9fvsD5HqvDx48fF61pMX/+/Fi7oB0EAkcAARC4lJnj\nsH5J3HLLLeY4ZJAnu3btEv0iDVr1uIYNG8rAgQOtOef/15TR4ka23Gpo0H8muOIzAQSAzwkI8vAb\nN26U/PnzBzmEhPmutf615n9QTM/2v/baa6IX/Nhm9957r3zyySe2hU28EBAEAJMgJgIZMmSQ3377\nLaa2YW+0bNky56rfoBz700p3ffr0Eb3gxyY7cuSI6Fn/iRMn2hQ2sULgbwIIACZDTATKli3Leul5\nyGlhpEmTJsXE1ctGutFPX/fXrVvXy2GNGEuv9dXlq8WLFxvhD05AwA8CCAA/qIdgTD0XrufDsdMJ\n6M550/dFZMmSRR5//HFp27atZMuWzboU6hG/GjVqyJo1a6yLnYAh8G8CCADmQ0wEtLTtSy+9FFPb\nsDbSV/5aO/6///2vkSGmTZtW9PImzV2uXLmM9DHRTuldDPrlv379+kQPRf8QMJ4AAsD4FJnp4Ntv\nvy0tWrQw0zmfvBo7dqzUr1/fp9HPP2zy5MmdSn5du3aVwoULG+efVw7pqRWtXaEnNDAIQEDYBMgk\niI0AlwCdze3666+XuXPnxgY0Aa20VLNuctPbGvXNhK127Ngx6d69u7zwwgty6tQpWzEQNwTOIsAb\nACZFTAR0/dTmX5NnQtNrck0pmasbNJs1ayZ6vC1r1qwx5TcsjXS9v1GjRjJ9+vSwhEQcEHCNAALA\nNZT2dKSvlLXMbZo0aewJOolI77jjDhk3bpxvPC6++GLnNX+TJk2cI4iYiN5gqEccd+zYAQ4IQOAc\nBBAATIuoCejxsa1bt0bdLqwNVq9eLVdeeaXn4WkRppo1azqXDentdXp5DyaOONUNqi+++KKcPHkS\nJBCAwHkIIACYGlETqFy5ssycOTPqdmFt8Oijj8qgQYM8CU/3Gdx2223ORy8awk4nMGfOHOekw4oV\nK0ADAQgkQQABwBSJmkDjxo3lgw8+iLpdGBvs3btXChQoIIcOHXI9vNSpU8u1114ruqavVy/Xrl1b\nLrnkEtfHCUOH+/fvlx49ejjljE+cOBGGkIgBAgkngABIOOLwDfD88887u6oxcTh06dIlbhTJkiVz\nlhHKlSvnfOHrR7/82WeRNFotvtSyZUvRM/4YBCAQOQEEQOSsePJ/BIYNG+acp7bddK1Zf/3v2bMn\nYhS6f+Lyyy+XQoUKOX/+9bnqqqtYw4+Y4p8P6nl+LWo0fPjwKFvyOAQgoAQQAMyDqAlMnTpVbrjh\nhqjbha2Brvvr+r+avq7XL3f96KU6+tHX9Tly5JC8efP+/aWfLl26sGHwPB491z906FDn7cvOnTs9\nH58BIRAWAgiAsGTSwzi0jGrBggU9HNHMoXTDWZ48eZwveRUAWOIJ6M197du3F71xEYMABOIjgACI\nj591rVOmTCl6jar+iUHAKwJLly6VDh06BOKWRa+YMA4E4iWAAIiXoGXtdc17w4YNlkVNuH4R0CI+\n3bp1k3feeUf01T8GAQi4RwAB4B5LK3qqXr26TJs2zYpYCdI/Alu2bBG9cOrNN98UPeKHQQAC7hNA\nALjPNNQ9aqlZ/TWGQSARBHRfxauvvuqUVf79998TMQR9QgAC/yOAAGAqREVAX8d27tw5qjY8DIEL\nEdAvev3C1y9+FQAYBCDgDQEEgDecQzPK+++/L/fff39o4iEQ/wisW7dOPvroIxkyZIjoK38scgJ6\n74Ne9Vy/fn2ngFTOnDll8eLF8tZbb8no0aMj74gnrSaAALA6/dEHP2PGDGOuvY3ee1r4TUC/9MeO\nHet85s2b57c7gRs/ffr08txzz0mrVq0kW7Zs5/RfT0v07ds3cLHhsPcEEADeMw/0iJs3b3YK22AQ\niJQAX/qRkrrwc3r5k97BUaJEiQs+qPdSFC9enNLI7mAPdS8IgFCn193gUqVK5WzMSp48ubsd01uo\nCGhN/vnz58uUKVOcP3/44YdQxedHMFp6e8CAAaJvACIxLdf98MMPR/Ioz1hMAAFgcfKjDV2r3tm8\nVnvq1CnRS3uwfwioIFy9erXMnj1bZs2a5fxJnQh3Z4i+0u/du3dUnf78889Ohcrjx49H1Y6H7SKA\nALAr33FFqzfV2bxuq79oa9asGRfDoDQ+evSo87bnr8/WrVtFS0Cf+dm+fbuoMMISQ+Dpp5+WXr16\nxdT59ddfL3Pnzo2pLY3sIIAAsCPPrkR5xx13yOeff+5KX0HspE2bNs5RtTBa8+bN5csvv3TKPOuX\nvgoAzF8CDRs2lJEjR8bshIqHPn36xNyehuEngAAIf45di1DvXNcb8Gw1vbJXBVDRokVDh2DUqFGi\nXziYGQQqVqzoVNyM55IpLdjVrFkzMwLCCyMJIACMTIuZTun1q88//7yZznngVb58+aRu3bryxhtv\neDCat0Po3g694fHEiRPeDsxoZxG44oornIJI2bNnj4vOd999x7XdcREMf2MEQPhz7FqEWrDF1p3F\nehGNFlv5448/ZO/evZImTRrXuJrSUdmyZWXhwoWmuGOlH3q2X9ftVQTEa3pkN3/+/PF2Q/sQE0AA\nhDi5boc2fvx4ufXWW93uNhD96YU0KgB0fXzw4MGia+ZhMy0w8/LLL4ctrMDEoydMtECSVvhzw06e\nPCl6dFf/xCBwLgIIAOZFxAS01GjJkiUjfj5MD+pu99y5czshlSlTRhYsWBCm8JxYeGXsb0oTscR2\n0UUXyYEDB/wNjNGNJYAAMDY15jmmd7Nfdtll5jnmgUdr166VIkWK/D3SokWLpFSpUh6M7N0Qhw8f\ndt5yHDx40LtBGckhcN9994luxHTbdN+KzbU73OYZtv4QAGHLaILiSZkypbP+bWsVwKVLl4qWYv3L\nHnnkEefilbDZ7bffLrrUg3lHQC/z0U1/+mvdbdOywStWrHC7W/oLCQEEQEgSmegw9PW3FoOx1bTC\nXaVKlf4OX29j27Ztm+ifYbKBAwfKY489FqaQjI5Fq/Xp3CpUqFBC/NTjhFyxnBC0oegUARCKNCY+\niLCue0dKbvLkyXLTTTed9ngYNwP+9NNPzlIHG8cinRmxP5c2bVqZMGGCVKtWLfZOkmhZoUIFq6t3\nJgxsSDpGAIQkkYkOQ8+/f/HFF4kextj+NfYzd2frhkjdGBk20y8kvfYZSywBrSeR6LcturygdzVg\nEDgXAQQA8yIiAmFd844oeBGnJGujRo3OelzPbJcvXz7SbgLxHDfJJT5N8dT4j8Y7XWLYvXt3NE14\n1iICCACLkh1PqF27dpUuXbrE00Wg2w4dOvScZ/+1HoAuBYTJ9u3bJ7p7XE8FYO4T0Ds1xowZIylS\npHC/8zN61IJV3OuQcMyBHQABENjUeet4GNe7oyGoBXK0UM6ZliVLFuf626xZs0bTnfHP6nKHzUs+\niUqQ3ieh1yZ7MV9UwGXIkCFRodBvCAggAEKQRC9C0Jvi9IiYrda2bdvz3gT49ttvS4sWLUKF5lx7\nHkIVoA/B6Ema77//XgoUKODJ6HpKJU+ePJ6MxSDBJIAACGbePPdaa8SXLl3a83FNGVDvQNC18XNZ\nGE9I6K9HXQbQ5QAsfgJa43/mzJmibwC8Mj3/r3UAMAicjwACgLkREQEthatV4my1//u//5OPPvro\nvOHPmzdPypUrFyo8ur9B9z5g8RHQ4lkTJ06UmjVrxtdRlK31bUOVKlWibMXjNhFAANiU7Rhj1c1K\nWgXQi01LMbqY8Ga6cWvcuHHnHUfvXQ/bl+X8+fNDd8Ih4RPlHAO8++678tBDD3k+9DvvvCM6LzEI\n8AaAORAzAf3lr28AbDYtAqTFgM5nWhFQi+hccsklocKkv1qnTp0aqpi8DKZ3797SoUMHL4f8e6wL\n7VvxxSEGNY4AbwCMS4l5DhUrVsz6euKRlFR98cUXz3lSwLyMRu7RpEmTpFatWpE34Mm/Cfh9RPTG\nG2+UKVOmkBEInJcAAoDJkSQBLSdqez1xvQhILwS6kBUsWFBWrVolqVOnTpJpkB4oW7as6CZQLHIC\n+uWr4slPowiQn/SDMTYCIBh58tVLff2tm5hstssvv1zWr1+fJILPPvvsrJLBSTYy/IFPPvlE7r33\nXsO9NMc9Fcy6419v0PTLdu7cafWmXb+4B21cBEDQMuaDv/Xr15dPP/3Uh5HNGPLUqVNy6aWXyt69\ne5N0qGrVqjJ9+vQknwvSA1pJTo+TrV27Nkhu++KrvinS3fd+F+Bh6caX9AduUARA4FLmvcNNmjQR\n3VFsqx05csSp3KYnISKxRYsWSalSpSJ5NDDPvPnmm/L4448Hxl8/HNUz/vrLX8/8+239+vWTdu3a\n+e0G4xtOAAFgeIJMcK9169by2muvmeCKLz5oMZzs2bNHPHYYBdOvv/4q11xzjWzcuDFiDjY9qPs/\n9Mtfq/2ZYPfff798+OGHJriCDwYTQAAYnBxTXOvUqZP06NHDFHc892Pz5s2SP3/+iMfNmDGjcyRQ\nlw3CZKNHj5YGDRqEKSRXYsmVK5fz5V+oUCFX+nOjEz2OGsmSlRtj0UdwCSAAgps7zzz38yyzZ0Fe\nYKCVK1eKHoWMxl544QXp2LFjNE0C8axWltM1buxPAhdffLHz5R/t/Egkv9mzZ0ulSpUSOQR9h4QA\nAiAkiUxkGIMGDZKWLVsmcgij+9Y1fa33H43pG4PVq1eLXscaJluwYIHoLveTJ0+GKayYYtFf2brZ\n7tprr42pfaIa6Rs7FaAYBJIigABIihD/XkaMGCFaC99WmzFjhlSrVi3q8MeOHSv16tWLup3pDZo2\nbSpa3tZmy5s3r/PlX7RoUeMwRFKzwjinccgXAggAX7AHa1DbrwL++uuv5bbbbos6afq6XMVD2Eyv\nmdVjgfv37w9baBHFc8UVVzhloaPZFxJRxy48tGnTJs+uG3bBXbrwmQACwOcEBGH47777LqZfwEGI\nLRIf49n8pq/Mo10+iMQnv5955ZVXpH379n674fn4ehLi22+/lcsuu8zzsSMZkAuAIqHEM38RQAAw\nF5IksHjxYilZsmSSz4X1gSFDhkiLFi1iCu/BBx+U4cOHx9TW9Eb33XeffPzxx6a76Zp/Wt5XqyJe\ndNFFrvXpdkd16tSRr776yu1u6S+kBBAAIU2sm2GtW7dOtBSurda3b9+Yb3TTinBaQjhsRwJ1Lmh9\nBL0nYMOGDaGfGo0bN5bBgwdLunTpjI11z549zn+nWrMBg0AkBBAAkVCy/Jldu3aF8gss0rQ+88wz\nokchYzWtoaA7s8NoP/zwg+heh0OHDoUxPCcmPc7Zs2dPSZZM/7o01/Q2yv/85z/mOohnxhFAABiX\nEvMc0lK4adOmNc8xjzx67LHHZODAgTGPli9fPudIYFgZapXINm3axMzH1IaZM2cWLYGsv/5NNy1T\nrScSdBMgBoFICSAAIiVl6XN6tW2kNfDDikhL+8a7jq9lWRs1ahRWRM49AfplGRYrUKCA6OkXPe0Q\nBNMjp3ppFwaBaAggAKKhZeGzerGJ7SVF9Spc3fwVj1199dWyZMkSSZ48eTzdGNtWCwM9/PDDoagP\nULNmTaf2RY4cOYzlfaZjlStXllmzZgXGXxw1gwACwIw8GOuFXnKim9hstltvvVW++eabuBGMGzdO\ndJd2WO348eOipx5GjhwZ2BD1aKNW0dM3X0Gx+fPnS/ny5YPiLn4aRAABYFAyTHRFy5zqL1ebza36\n91pCd86cOaFGqctFWjVSX0kHyfQCJ61tEOtxTz9j1aWlIIsuP9nZPjYCwPYZkET8+mpRLzux2VQE\n/fjjj64g0Apy+oo5zKabRnXjXFBEgAozLW185ZVXBi4tW7dulSJFiogyxyAQLQEEQLTELHtev6z0\nS8tm02te3TrrXqNGDZkyZYoVOPVYWrdu3eTo0aNGxqu/+vXYnL72T5kypZE+JuVU2DZfJhUv/95d\nAggAd3mGrrfatWu7sv4dZDDZs2d3it64ZboMoL86bTC9mrZBgwayZcsWo8IN8q/+v0Dq0VJ9O2X7\nKR2jJlbAnEEABCxhXrt7++23O8ehbDXd3a7V39z8FWsbUy0k1axZMxk/frzv00hr+Xft2jUUtzTa\nVorZ98kTQgcQACFMqpsh6XW2QVnLdTPuv/rSsqpaEMZN04pyurFSv4xssgkTJkivXr1EL5fy2nR9\nv3PnzqJHOlOkSOH18K6Pt3DhQilXrpycOnXK9b7p0B4CCAB7ch1TpPoXpt6GZ6vpr9dE3PymO7e1\nOJCNNnfuXEcI6KU1enQwUZYlSxa56aabpGHDhqJvXYJ0tC8pJrVq1ZJJkyYl9Rj/HgIXJIAAYIJc\nkIAe6dKiKLbaTz/9JHr/u9umX0ZaR79YsWJudx2Y/latWiWff/65c72uFrE5duxY3L6rWNONlvql\nf8MNN4hexhQ2mzp1auhPkoQtZ6bGgwAwNTOG+BXm62wjQayv6hN1FbLtyyv/5r9//36ZOHGis99k\nxYoVsnPnTtHb7c73hkB38GuVSq2wWKpUKSlTpozzz1rCN+ymGxjnzZsX9jCJzwMCCAAPIAd5CC3v\nOmTIkCCHEJfvM2bMkGrVqsXVx4Ua23QiIFqIugFTy1CrGNC9GFmzZpWLL77Y+YTpdX40XIYOHSrN\nmzePpgnPQuC8BBAATI4LEmjZsqUMGjTIWkq6c13XjxNl+ppaX+liEEiKgBb90bdRtt/NkRQn/n3k\nBBAAkbOy8sknnnhCXn/9dStj16BHjRrlrCcn0nQNXDd1YRC4EAG9R0I3TmIQcIsAAsAtkiHtp23b\nttKvX7+QRpd0WIMHD5ZHHnkk6QfjeKJ06dKiF7qE9abAONDQ9H8EePXPVEgEAQRAIqiGqM+nn37a\nObJlq+kFMVoqNtH20UcfORXzMAicSYBX/8yJRBFAACSKbEj61VrpPXv2DEk00YehxWN69OgRfcMo\nWxQuXNi5cCht2rRRtuTxsBPg1X/YM+xffAgA/9gHYmQtm9qlS5dA+JoIJ3UJ5NVXX01E12f1qXst\ndM8FBoG/CPDqn7mQSAIIgETSDUHf+utf3wLYanoMctiwYZ6Er0Vsli1bJnr5EAaBzZs3i+4PYdc/\ncyFRBBAAiSIbkn51/V/3AdhqXl+4YvumS1vn2ZlxHzhwQKpWreosC2EQSBQBBECiyIakX90E99RT\nT4UkmujDuOWWW0QvsfHKUqVK5ZwIuO6667waknEMJKAluHVjKAaBRBJAACSSbgj6tn1dunLlyk6d\nei+tSpUqohUIMTsJ6J6b7t272xk8UXtKAAHgKe7gDaZVALUaoK2mV/bqurzX9t5778kDDzzg9bCM\n5zMBvXircePGPnvB8LYQQADYkukY49R7AHQjnK1WsGBB2bhxo+fh58qVyxEeWvces4PA0qVLRd/+\n6L0HGAS8IIAA8IJygMd45513pEmTJgGOID7Xc+bM6VxG44dpAaI+ffr4MTRjekxg27Ztcv3118uW\nLVs8HpnhbCaAALA5+xHEbvsbAL2BTq+q9cPSpEkjCxYscK65xcJL4NChQ1K9enVZuHBheIMkMiMJ\nIACMTIs5Ttm+ByB9+vRy5MgR3xKiR8G+++47SZZM/1PFwkZArzxu1KiRc+kUBgGvCSAAvCYesPEG\nDBggjz/+eMC8ds/dFClSiP4l7afZfhTTT/aJHluP2Pbv3z/Rw9A/BM5JAAHAxLggAf3LqU2bNlZS\nOnr0qOhreL8tc+bMsmjRIrniiiv8doXxXSSgd0zoXRMYBPwigADwi3xAxtVNaF7chmcijoMHD0qW\nLFmMcE03iGltgJQpUxrhD07ER+DNN9+0+s1afPRo7RYBBIBbJEPaz0svvSTPPvtsSKO7cFi7d++W\nHDlyGBO7zbkwJgkuOKIV/rTSHwYBvwkgAPzOgOHj62vKTp06Ge5lYtzTI1n58uVLTOcx9JohQwaZ\nN2+eFC9ePIbWNDGBwKRJk6RWrVomuIIPEBAEAJPgggSef/55a8uSLl++3LgjeHo7nJYmNmFvAv/p\nREdAj3RqaWndW4JBwAQCCAATsmCwD61atZKBAwca7GHiXJs+fbpzPts069q1q2i9eCw4BPSCJ/3l\nr7f8YRAwhQACwJRMGOpH/fr15dNPqaMeKgAAC/xJREFUPzXUu8S6NWbMGLn77rsTO0gMveuNgd98\n843UrFkzhtY08ZqAvva/7bbb5NixY14PzXgQuCABBAAT5IIEbL6ZbvDgwfLII48YOUMuu+wymTt3\nruTPn99I/3DqTwLDhg2z+i4N5oHZBBAAZufHd++KFi0qq1at8t0PPxzQXfcdO3b0Y+iIxixZsqRz\nNDBjxowRPc9D3hLo2bOn6B4aDAKmEkAAmJoZQ/zSWvg///yzId5460a7du2kX79+3g4a5Wj6huKt\nt96KshWPJ5pAhw4dpG/fvokehv4hEBcBBEBc+OxorLuWdd3ZNnvooYfkvffeMz5sm6s1mpYcLRut\npbP1Dg0MAqYTQACYniED/Nu6davkzp3bAE+8daFOnTry1VdfeTtoDKOlTZtWpk6d6lwni/lH4PDh\nw6Ki8ZNPPvHPCUaGQBQEEABRwLL1UT0Op7fS2WbXXHONLFu2LBBhq0CbPXu2UYWLAgHOJSc3b97s\nnBjRs/4YBIJCAAEQlEz56Ofbb78tLVq08NED74fWX3N6D8Dx48e9HzzGEYsUKSIzZ86USy+9NMYe\naBYLgQkTJji//Hft2hVLc9pAwDcCCADf0Adn4LZt2xq/Gc5tmnrELoiv1K+++mr5/vvvRW8QxBJL\n4NSpU06VTP34fWV0YiOl97ASQACENbMuxnXLLbfI119/7WKP5nc1dOhQad68ufmOnsPD8uXLiy7b\nUC44cenTX/tNmza17r+LxBGlZz8IIAD8oB6wMQsWLCjr168PmNfxuVu7dm359ttv4+vEx9Y2ijav\ncC9cuNBZ79+0aZNXQzIOBBJCAAGQEKzh6jRZsmRy6NAhSZcuXbgCO080K1eulBIlSgT+tW6DBg1E\nr57F3CPw6quvOsWhjhw54l6n9AQBnwggAHwCH7Rh9Qa6ihUrBs3tmPx98skn5fXXX4+prWmN7r33\nXhk9erRpbgXOH/21r0WXgvxWKHDQcTjhBBAACUccjgFsuYFux44dUrx4cfnll1/CkTgR50bDcePG\nSaZMmUITk1eBnDhxQl577TXp0aOH7N+/36thGQcCnhBAAHiCOfiDVKpUydldHnbTW9vCuOFRRY0e\nV8uTJ0/YU+hafCtWrHA2gs6ZM8e1PukIAiYRQACYlA2DfdEd5brzWc/Gh9W0drvWcA+rFShQQCZP\nniyXX355WEN0JS5d3+/du7fz0XoQGATCSgABENbMJiAuLYurv5DDaLqzu1q1aqH/Cz9XrlyOCLjq\nqqvCmMa4Y9L6D/qrf/ny5XH3RQcQMJ0AAsD0DBnkX+vWrZ310LDZlClT5J577gnVuv+FcnTRRRfJ\nyy+/7Gxqw/4ksGjRItF9LkG4+4GcQcAtAggAt0ha0I/+ely3bl2ojgPqMblmzZpZeaxLRc+AAQMk\nR44cFszec4fIF7+1qSdwEUEAMA2iIjBmzBi56667ompj6sN9+vSRZ599NvDn/ePhq5cIDRs2TG6+\n+eZ4uglcW774A5cyHE4AAQRAAqCGucsaNWqIvjIPsu3evdt5/f35558HOQxXfW/Xrp106dIl9EcF\nda9Ht27deNXv6uyhs6ASQAAENXM++a1VAXWDVLFixXzyIL5htaBRw4YNZcuWLfF1FMLW+fLlk549\ne0qjRo0kefLkoYlw37598vHHH8vw4cNl/vz5oYmLQCAQLwEEQLwELWz/xBNPBK5Snt7W9sILLzgF\nXY4dO2Zh1iIPuWzZss4ROC0gFFTTHE+bNk2GDBki33zzjVPKGoMABE4ngABgRkRNIHXq1KKvUvXq\n2SCYlnF9+OGHneNvWOQEbr/9dunVq1eg3vboPQ4jRoxwPhs3bow8WJ6EgIUEEAAWJt2NkGvWrGn8\nF+qvv/4q/fr1cz4HDx50I2zr+kiVKpXceOON0rJlS6lVq5akTZvWKAaa49mzZzu/8vUX/48//miU\nfzgDAZMJIABMzo7hvn322Wdy5513Gunl2LFjRTe28SvQvfToiYH7779fHnjgAd8KCWltfn37NGnS\nJJk6darz5f/HH3+4FyQ9QcAiAggAi5LtdqhaWnbmzJlG1ZfXDYpt2rQJ/EkFt3Pldn+VK1cW/egN\nkaVLlxatEeG27dmzR1atWnXaRzdxHjhwwO2h6A8CVhJAAFiZdveCLlq0qCMCLrnkEvc6jaEn3d2t\n5/r11rujR4/G0ANN4iGgYrB8+fJyzTXXOHNBP5deeunf/6w3EepGvL8+WmP/3/9b/3n79u2nfdnr\n7n0MAhBIHAEEQOLYWtOz/sWvr2T9uG5Wb7jTHeu6/otBAAIQgEDkBBAAkbPiyQsQ0FfBI0eOlPz5\n8yec0969e51f+q+//rosXbo04eMxAAQgAIEwEkAAhDGrPsWUNWtWefHFF50d427bjh07nJ3eo0eP\nlhkzZsjvv//u9hD0BwEIQMAqAggAq9LtTbB6XExvDtSjgrEeG9Nf+cuWLZPFixfL+PHjRTd/sbbv\nTf4YBQIQsIMAAsCOPPsSZbZs2eTuu+8WvT/gsssuk5w5czqflClTOlfv7t+//++P/m+9aXDJkiXO\na/3169f74jODQgACELCFAALAlkwTJwQgAAEIQOBfBBAATAcIQAACEICAhQQQABYmnZAhAAEIQAAC\nCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQAB\nCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAE\nLCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAs\nTDohQwACEIAABBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCA\nAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAA\nAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAA\nAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICA\nhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICF\nSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQ\ngAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQgg\nAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQg\nAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCw\nkAACwMKkEzIEIAABCEAAAcAcgAAEIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw\n6YQMAQhAAAIQQAAwByAAAQhAAAIWEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwAC\nEIAABBAAzAEIQAACEICAhQQQABYmnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEE\nAHMAAhCAAAQgYCEBBICFSSdkCEAAAhCAAAKAOQABCEAAAhCwkAACwMKkEzIEIAABCEAAAcAcgAAE\nIAABCFhIAAFgYdIJGQIQgAAEIIAAYA5AAAIQgAAELCSAALAw6YQMAQhAAAIQQAAwByAAAQhAAAIW\nEkAAWJh0QoYABCAAAQggAJgDEIAABCAAAQsJIAAsTDohQwACEIAABBAAzAEIQAACEICAhQQQABYm\nnZAhAAEIQAACCADmAAQgAAEIQMBCAggAC5NOyBCAAAQgAAEEAHMAAhCAAAQgYCEBBICFSSdkCEAA\nAhCAAAKAOQABCEAAAhCwkMD/AwQa+B5YWeZHAAAAAElFTkSuQmCC\n`;


const $61027df21de3e51b$var$state = $2ea005578145ef96$export$81c453176872a44a({
    imageDataUrl: $20f2163f02cb1506$export$6f024f202cd6f9db,
    dimensions: {
        width: 700,
        height: 700
    },
    shape: 'circle',
    numberOfPins: 200,
    numberOfStrings: 3000,
    fadeRate: 50,
    minimalDistance: 10
});
const $61027df21de3e51b$var$tokenFactory = new $89c907837e77072e$export$da92a3a08a763211();
parcelRequire.register("izF5s", function(module, exports) {

var $jyVdJ = parcelRequire("jyVdJ");

var $lElyg = parcelRequire("lElyg");

let $d85b5de4bd2cd060$var$url = $lElyg.getBundleURL('7zONV') + (parcelRequire("40Mju")).resolve("eCoz2");
module.exports = $jyVdJ($d85b5de4bd2cd060$var$url, $lElyg.getOrigin($d85b5de4bd2cd060$var$url), false);

});
parcelRequire.register("jyVdJ", function(module, exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? 'import ' + JSON.stringify(workerUrl) + ';' : 'importScripts(' + JSON.stringify(workerUrl) + ');';
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: 'application/javascript'
        }));
    }
};

});

parcelRequire.register("lElyg", function(module, exports) {

$parcel$export(module.exports, "getOrigin", function () { return $fc2e0d21e0609dd0$export$1b6c708f518305b4; }, function (v) { return $fc2e0d21e0609dd0$export$1b6c708f518305b4 = v; });
$parcel$export(module.exports, "getBundleURL", function () { return $fc2e0d21e0609dd0$export$da289beea9c5b10d; }, function (v) { return $fc2e0d21e0609dd0$export$da289beea9c5b10d = v; });
var $fc2e0d21e0609dd0$export$59e5c324fe003148;
var $fc2e0d21e0609dd0$export$da289beea9c5b10d;
var $fc2e0d21e0609dd0$export$1b6c708f518305b4;
"use strict";
var $fc2e0d21e0609dd0$var$bundleURL = {
};
function $fc2e0d21e0609dd0$var$getBundleURLCached(id) {
    var value = $fc2e0d21e0609dd0$var$bundleURL[id];
    if (!value) {
        value = $fc2e0d21e0609dd0$var$getBundleURL();
        $fc2e0d21e0609dd0$var$bundleURL[id] = value;
    }
    return value;
}
function $fc2e0d21e0609dd0$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $fc2e0d21e0609dd0$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $fc2e0d21e0609dd0$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $fc2e0d21e0609dd0$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$fc2e0d21e0609dd0$export$da289beea9c5b10d = $fc2e0d21e0609dd0$var$getBundleURLCached;
$fc2e0d21e0609dd0$export$59e5c324fe003148 = $fc2e0d21e0609dd0$var$getBaseURL;
$fc2e0d21e0609dd0$export$1b6c708f518305b4 = $fc2e0d21e0609dd0$var$getOrigin;

});



const $61027df21de3e51b$var$worker = new Worker((parcelRequire("izF5s")));
const $61027df21de3e51b$var$WorkerCore = $f7b482f709a4ff2e$export$cd9e75cac750f935($61027df21de3e51b$var$worker);
document.addEventListener('DOMContentLoaded', async ()=>{
    const ui = new $f6dc229582d03357$export$cd9a4ce27e34eb68();
    ui.onKnitterFileOpened = async (file)=>{
        try {
            const parameters = await $e15bd34304d109ca$export$fd867f116dbf30e9(file);
            $61027df21de3e51b$var$state.setParameters(parameters);
            ui.showSuccess(`Opened '${file.name}'!`);
        } catch (e) {
            ui.showError(e.message);
        }
    };
    ui.onSaveClicked = async ()=>{
        await $e15bd34304d109ca$export$5c53bbe227eb82f9($61027df21de3e51b$var$state.parameters, 'project.knitter');
    };
    ui.onExportClicked = ()=>{
        alert('Export feature coming soon!');
    };
    ui.onImageFileOpened = async (file)=>{
        const dataUrl = await $e15bd34304d109ca$export$9faebfcecd46ad41(file);
        if (await $401e24e1b3e45bdd$export$a0e8d147a7227d91(dataUrl)) $61027df21de3e51b$var$state.setImageDataUrl(dataUrl);
        else ui.showError(`Oops. Cannot load '${file.name}'!`);
    };
    ui.onFadeParamChange = $61027df21de3e51b$var$state.setFadeRate;
    ui.onPinsParamChange = $61027df21de3e51b$var$state.setNumberOfPins;
    ui.onStringsParamChange = $61027df21de3e51b$var$state.setNumberOfStrings;
    ui.onDistanceParamChange = $61027df21de3e51b$var$state.setMinimalDistance;
    ui.onShapeSelected = $61027df21de3e51b$var$state.setShape;
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setShape($61027df21de3e51b$var$state.shape)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setInputImageSrc($61027df21de3e51b$var$state.imageDataUrl)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setNumberOfPins($61027df21de3e51b$var$state.numberOfPins)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setNumberOfStrings($61027df21de3e51b$var$state.numberOfStrings)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setFadeRate($61027df21de3e51b$var$state.fadeRate)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setMinimalDistance($61027df21de3e51b$var$state.minimalDistance)
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setPins($61027df21de3e51b$var$state.pins || [])
    );
    $6affecf2d197f5a4$export$2b96b8059ad14f47(()=>ui.setPattern($61027df21de3e51b$var$state.pattern || [])
    );
    const core = await new $61027df21de3e51b$var$WorkerCore();
    $6affecf2d197f5a4$export$2b96b8059ad14f47(async ()=>{
        if (!$61027df21de3e51b$var$state.imageDataUrl) return;
        const token = $61027df21de3e51b$var$tokenFactory.getExclusiveToken('image conversion');
        const pixels = await $401e24e1b3e45bdd$export$654bb7a9e221b8d2($61027df21de3e51b$var$state.imageDataUrl, $61027df21de3e51b$var$state.dimensions);
        if (token.cancelled) return;
        $61027df21de3e51b$var$state.setPixels(pixels);
    });
    $6affecf2d197f5a4$export$2b96b8059ad14f47(async ()=>{
        const coreParams = $61027df21de3e51b$var$state.coreParams;
        if (!coreParams) return;
        const token = $61027df21de3e51b$var$tokenFactory.getExclusiveToken('core init');
        await core.init(coreParams);
        if (token.cancelled) return;
        $61027df21de3e51b$var$state.setCoreId(coreParams.id);
    });
    $6affecf2d197f5a4$export$2b96b8059ad14f47(async ()=>{
        const token = $61027df21de3e51b$var$tokenFactory.getExclusiveToken('get pins');
        if (!$61027df21de3e51b$var$state.isCoreInitialized) return;
        const pins = await core.getPins();
        if (token.cancelled) return;
        $61027df21de3e51b$var$state.setPins(pins);
        $61027df21de3e51b$var$state.setNumberOfPins(pins.length);
    });
    $6affecf2d197f5a4$export$2b96b8059ad14f47(async ()=>{
        const token = $61027df21de3e51b$var$tokenFactory.getExclusiveToken('pattern calc');
        if (!$61027df21de3e51b$var$state.isCoreInitialized) return;
        const numberOfStrings = $61027df21de3e51b$var$state.numberOfStrings;
        let pattern = await core.getPattern();
        if (token.cancelled) return;
        if (pattern.length >= numberOfStrings) {
            $61027df21de3e51b$var$state.setPattern(pattern.slice(0, numberOfStrings));
            return;
        }
        while(true){
            const requestedNrOfStrings = Math.min(pattern.length + 100, numberOfStrings);
            pattern = await core.calcPattern(requestedNrOfStrings);
            if (token.cancelled) return;
            $61027df21de3e51b$var$state.setPattern(pattern);
            if (pattern.length < requestedNrOfStrings) {
                $61027df21de3e51b$var$state.setNumberOfStrings(pattern.length);
                break;
            }
            if (pattern.length === numberOfStrings) break;
        }
    });
});

})();
