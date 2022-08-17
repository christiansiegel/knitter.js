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
parcelRequire.register("duqgR", function(module, exports) {

var $l2AEA = parcelRequire("l2AEA");

var $4Iwei = parcelRequire("4Iwei");
$l2AEA.expose($4Iwei.Core);

});
parcelRequire.register("l2AEA", function(module, exports) {

$parcel$export(module.exports, "expose", function () { return $73c1862f86e597f3$export$6050fdfd7148dfa5; });
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
 */ const $73c1862f86e597f3$export$d8d02415fc49efaf = Symbol("Comlink.proxy");
const $73c1862f86e597f3$export$11baf933bdbbf78e = Symbol("Comlink.endpoint");
const $73c1862f86e597f3$export$c3f1b460b642e60a = Symbol("Comlink.releaseProxy");
const $73c1862f86e597f3$var$throwMarker = Symbol("Comlink.thrown");
const $73c1862f86e597f3$var$isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function"
;
/**
 * Internal transfer handle to handle objects marked to proxy.
 */ const $73c1862f86e597f3$var$proxyTransferHandler = {
    canHandle: (val)=>$73c1862f86e597f3$var$isObject(val) && val[$73c1862f86e597f3$export$d8d02415fc49efaf]
    ,
    serialize (obj) {
        const { port1: port1 , port2: port2  } = new MessageChannel();
        $73c1862f86e597f3$export$6050fdfd7148dfa5(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return $73c1862f86e597f3$export$cd9e75cac750f935(port);
    }
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */ const $73c1862f86e597f3$var$throwTransferHandler = {
    canHandle: (value)=>$73c1862f86e597f3$var$isObject(value) && $73c1862f86e597f3$var$throwMarker in value
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
 */ const $73c1862f86e597f3$export$1ecf11da0653b15 = new Map([
    [
        "proxy",
        $73c1862f86e597f3$var$proxyTransferHandler
    ],
    [
        "throw",
        $73c1862f86e597f3$var$throwTransferHandler
    ], 
]);
function $73c1862f86e597f3$export$6050fdfd7148dfa5(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id: id , type: type , path: path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map($73c1862f86e597f3$var$fromWireValue);
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
                    parent[path.slice(-1)[0]] = $73c1862f86e597f3$var$fromWireValue(ev.data.value);
                    returnValue = true;
                    break;
                case 2 /* APPLY */ :
                    returnValue = rawValue.apply(parent, argumentList);
                    break;
                case 3 /* CONSTRUCT */ :
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = $73c1862f86e597f3$export$724086cd7455397(value);
                    }
                    break;
                case 4 /* ENDPOINT */ :
                    {
                        const { port1: port1 , port2: port2  } = new MessageChannel();
                        $73c1862f86e597f3$export$6050fdfd7148dfa5(obj, port2);
                        returnValue = $73c1862f86e597f3$export$b9dae3741aad8f45(port1, [
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
                [$73c1862f86e597f3$var$throwMarker]: 0
            };
        }
        Promise.resolve(returnValue).catch((value)=>{
            return {
                value: value,
                [$73c1862f86e597f3$var$throwMarker]: 0
            };
        }).then((returnValue1)=>{
            const [wireValue, transferables] = $73c1862f86e597f3$var$toWireValue(returnValue1);
            ep.postMessage(Object.assign(Object.assign({
            }, wireValue), {
                id: id
            }), transferables);
            if (type === 5 /* RELEASE */ ) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                $73c1862f86e597f3$var$closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function $73c1862f86e597f3$var$isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function $73c1862f86e597f3$var$closeEndPoint(endpoint) {
    if ($73c1862f86e597f3$var$isMessagePort(endpoint)) endpoint.close();
}
function $73c1862f86e597f3$export$cd9e75cac750f935(ep, target) {
    return $73c1862f86e597f3$var$createProxy(ep, [], target);
}
function $73c1862f86e597f3$var$throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function $73c1862f86e597f3$var$createProxy(ep, path = [], target = function() {
}) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get (_target, prop) {
            $73c1862f86e597f3$var$throwIfProxyReleased(isProxyReleased);
            if (prop === $73c1862f86e597f3$export$c3f1b460b642e60a) return ()=>{
                return $73c1862f86e597f3$var$requestResponseMessage(ep, {
                    type: 5 /* RELEASE */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(()=>{
                    $73c1862f86e597f3$var$closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy
                };
                const r = $73c1862f86e597f3$var$requestResponseMessage(ep, {
                    type: 0 /* GET */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then($73c1862f86e597f3$var$fromWireValue);
                return r.then.bind(r);
            }
            return $73c1862f86e597f3$var$createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            $73c1862f86e597f3$var$throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = $73c1862f86e597f3$var$toWireValue(rawValue);
            return $73c1862f86e597f3$var$requestResponseMessage(ep, {
                type: 1 /* SET */ ,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()
                ),
                value: value
            }, transferables).then($73c1862f86e597f3$var$fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            $73c1862f86e597f3$var$throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === $73c1862f86e597f3$export$11baf933bdbbf78e) return $73c1862f86e597f3$var$requestResponseMessage(ep, {
                type: 4 /* ENDPOINT */ 
            }).then($73c1862f86e597f3$var$fromWireValue);
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") return $73c1862f86e597f3$var$createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = $73c1862f86e597f3$var$processArguments(rawArgumentList);
            return $73c1862f86e597f3$var$requestResponseMessage(ep, {
                type: 2 /* APPLY */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList: argumentList
            }, transferables).then($73c1862f86e597f3$var$fromWireValue);
        },
        construct (_target, rawArgumentList) {
            $73c1862f86e597f3$var$throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = $73c1862f86e597f3$var$processArguments(rawArgumentList);
            return $73c1862f86e597f3$var$requestResponseMessage(ep, {
                type: 3 /* CONSTRUCT */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList: argumentList
            }, transferables).then($73c1862f86e597f3$var$fromWireValue);
        }
    });
    return proxy;
}
function $73c1862f86e597f3$var$myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function $73c1862f86e597f3$var$processArguments(argumentList) {
    const processed = argumentList.map($73c1862f86e597f3$var$toWireValue);
    return [
        processed.map((v)=>v[0]
        ),
        $73c1862f86e597f3$var$myFlat(processed.map((v)=>v[1]
        ))
    ];
}
const $73c1862f86e597f3$var$transferCache = new WeakMap();
function $73c1862f86e597f3$export$b9dae3741aad8f45(obj, transfers) {
    $73c1862f86e597f3$var$transferCache.set(obj, transfers);
    return obj;
}
function $73c1862f86e597f3$export$724086cd7455397(obj) {
    return Object.assign(obj, {
        [$73c1862f86e597f3$export$d8d02415fc49efaf]: true
    });
}
function $73c1862f86e597f3$export$c081aab2b1a5f1f(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables)
        ,
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function $73c1862f86e597f3$var$toWireValue(value) {
    for (const [name, handler] of $73c1862f86e597f3$export$1ecf11da0653b15)if (handler.canHandle(value)) {
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
        $73c1862f86e597f3$var$transferCache.get(value) || [], 
    ];
}
function $73c1862f86e597f3$var$fromWireValue(value) {
    switch(value.type){
        case 3 /* HANDLER */ :
            return $73c1862f86e597f3$export$1ecf11da0653b15.get(value.name).deserialize(value.value);
        case 0 /* RAW */ :
            return value.value;
    }
}
function $73c1862f86e597f3$var$requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = $73c1862f86e597f3$var$generateUUID();
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
function $73c1862f86e597f3$var$generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
    ).join("-");
}

});

parcelRequire.register("4Iwei", function(module, exports) {

$parcel$export(module.exports, "Core", function () { return $3f4e7a191dc42f41$export$4d3575e469168143; });

var $b85RQ = parcelRequire("b85RQ");

var $75nYD = parcelRequire("75nYD");
const $3f4e7a191dc42f41$var$createLoom = $75nYD.cachify((numberOfPins, dimensions, shape)=>({
        pins: $b85RQ.calcPins(numberOfPins, dimensions, shape),
        getLineIndices: $75nYD.cachify($b85RQ.getLineIndices, {
            keyFn: $b85RQ.makePinPairId
        })
    })
, {
    cacheSize: 1
});
class $3f4e7a191dc42f41$export$4d3575e469168143 {
    init(params) {
        this.loom = $3f4e7a191dc42f41$var$createLoom(params.numberOfPins, params.dimensions, params.shape);
        this.usedPinPairIds = {
        };
        this.pattern = [
            0
        ];
        this.params = params;
    }
    getPins() {
        if (!this.loom) throw new Error('Core not initialized');
        return this.loom.pins;
    }
    getPattern() {
        if (!this.pattern) throw new Error('Core not initialized');
        return this.pattern;
    }
    calcPattern(patternLength) {
        if (!this.pattern || !this.loom || !this.params) throw new Error('Core not initialized');
        const loom = this.loom;
        const pins = loom.pins;
        const params = this.params;
        for(let i = this.pattern.length; i < patternLength; ++i){
            const currentPin = pins[this.pattern[this.pattern.length - 1]];
            const usedPinPairsFilter = (nextPin)=>{
                return !($b85RQ.makePinPairId(currentPin, nextPin) in this.usedPinPairIds);
            };
            const minDistanceFilter = (nextPin)=>{
                return $b85RQ.circularArrayIndexDistance(currentPin.id, nextPin.id, pins.length) >= params.minimalDistance;
            };
            const lineScoreMapper = (nextPin)=>{
                const lineIndices = loom.getLineIndices(currentPin, nextPin, params.dimensions.width);
                return $b85RQ.calcScore(params.pixels, lineIndices);
            };
            let possibleNextPins = pins.filter(usedPinPairsFilter);
            possibleNextPins = possibleNextPins.filter(minDistanceFilter); // todo: square pattern distances
            if (possibleNextPins.length === 0) return this.pattern; // all pins used
            const possibleNextLinesScores = possibleNextPins.map(lineScoreMapper);
            const nextPin = possibleNextPins[$b85RQ.indexOfMax(possibleNextLinesScores)];
            if (nextPin === undefined) console.log(possibleNextPins);
            const lineIndices = loom.getLineIndices(currentPin, nextPin, params.dimensions.width);
            $b85RQ.lightenUp(params.pixels, lineIndices, Math.round(255 * params.fadeRate / 100));
            this.usedPinPairIds[$b85RQ.makePinPairId(currentPin, nextPin)] = true;
            this.pattern.push(nextPin.id);
        }
        return this.pattern.slice(0, patternLength);
    }
    constructor(){
        this.params = undefined;
        this.usedPinPairIds = {
        };
    }
}

});
parcelRequire.register("b85RQ", function(module, exports) {

$parcel$export(module.exports, "calcScore", function () { return $ea4924849e4c37cf$export$c91829f60946d404; });
$parcel$export(module.exports, "circularArrayIndexDistance", function () { return $ea4924849e4c37cf$export$8e6be8f6e51a727f; });
$parcel$export(module.exports, "calcPins", function () { return $ea4924849e4c37cf$export$362ff7117861034a; });
$parcel$export(module.exports, "indexOfMax", function () { return $ea4924849e4c37cf$export$fc3d72b2d56ef84c; });
$parcel$export(module.exports, "lightenUp", function () { return $ea4924849e4c37cf$export$5eedaec0dbb10574; });
$parcel$export(module.exports, "makePinPairId", function () { return $ea4924849e4c37cf$export$bf7f9056ac96cccd; });
$parcel$export(module.exports, "getLineIndices", function () { return $ea4924849e4c37cf$export$335d32fa77786d10; });

var $c3sYF = parcelRequire("c3sYF");
function $ea4924849e4c37cf$export$fc3d72b2d56ef84c(arr) {
    let max = -Infinity;
    let maxIndex = -1;
    for (const [i, v] of arr.entries())if (v > max) {
        maxIndex = i;
        max = v;
    }
    return maxIndex;
}
function $ea4924849e4c37cf$export$c91829f60946d404(pixels, indices) {
    return 255 - indices.reduce((sum, idx)=>sum + pixels[idx]
    , 0) / indices.length;
}
function $ea4924849e4c37cf$export$5eedaec0dbb10574(pixels, indices, value) {
    indices.forEach((idx)=>pixels[idx] = Math.min(255, pixels[idx] + value)
    );
}
function $ea4924849e4c37cf$export$8e6be8f6e51a727f(idx1, idx2, length) {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}
function $ea4924849e4c37cf$export$bf7f9056ac96cccd(a, b) {
    return a.id < b.id ? a.id * 1024 + b.id : b.id * 1024 + a.id;
}
function $ea4924849e4c37cf$export$335d32fa77786d10(a, b, width) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) [a, b] = [
        b,
        a
    ];
    const dx = Math.abs(b.x - a.x), dy = -Math.abs(b.y - a.y), sx = a.x < b.x ? 1 : -1, sy = a.y < b.y ? 1 : -1, indices = [], curr = $c3sYF.default({
    }, a);
    let e = dx + dy, e2;
    while(true){
        indices.push(curr.y * width + curr.x);
        if (curr.x == b.x && curr.y == b.y) break;
        e2 = 2 * e;
        if (e2 > dy) {
            e += dy;
            curr.x += sx;
        }
        if (e2 < dx) {
            e += dx;
            curr.y += sy;
        }
    }
    return indices;
}
function $ea4924849e4c37cf$export$362ff7117861034a(numberOfPins, dimensions, shape) {
    const size = Math.min(dimensions.width, dimensions.height);
    const xOffset = Math.round((dimensions.width - size) / 2);
    const yOffset = Math.round((dimensions.height - size) / 2);
    const fn = shape === 'circle' ? $ea4924849e4c37cf$var$calcCirclePins : $ea4924849e4c37cf$var$calcSquarePins;
    return fn(numberOfPins, size).map((p)=>$c3sYF.default({
        }, p, {
            x: p.x + xOffset,
            y: p.y + yOffset
        })
    );
}
function $ea4924849e4c37cf$var$calcCirclePins(numberOfPins, size) {
    const radius = Math.floor((size - 1) / 2);
    const angle = Math.PI * 2 / numberOfPins;
    const pins = [];
    for(let i = 0; i < numberOfPins; i++)pins.push({
        id: i,
        x: Math.round(radius + radius * Math.sin(i * angle)),
        y: Math.round(radius + radius * Math.cos(Math.PI + i * angle))
    });
    return pins;
}
function $ea4924849e4c37cf$var$calcSquarePins(numberOfPins, size) {
    const pinsPerSide = Math.floor(numberOfPins / 4);
    const pinDistance = (size - 1) / pinsPerSide;
    const pins = [];
    for(let i = 0; i < pinsPerSide; i++)pins.push({
        id: pins.length,
        x: Math.round(pinDistance * i),
        y: 0
    });
    for(let i1 = 0; i1 < pinsPerSide; i1++)pins.push({
        id: pins.length,
        x: size - 1,
        y: Math.round(pinDistance * i1)
    });
    for(let i2 = 0; i2 < pinsPerSide; i2++)pins.push({
        id: pins.length,
        x: size - 1 - Math.round(pinDistance * i2),
        y: size - 1
    });
    for(let i3 = 0; i3 < pinsPerSide; i3++)pins.push({
        id: pins.length,
        x: 0,
        y: size - 1 - Math.round(pinDistance * i3)
    });
    return pins;
}

});
parcelRequire.register("c3sYF", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $8c6c3e312cf82248$export$9099ad97b570f7c; });

var $yZeSJ = parcelRequire("yZeSJ");
function $8c6c3e312cf82248$export$9099ad97b570f7c(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $yZeSJ.default(target, key, source[key]);
        });
    }
    return target;
}

});
parcelRequire.register("yZeSJ", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0692ade2b85e334b$export$9099ad97b570f7c; });
function $0692ade2b85e334b$export$9099ad97b570f7c(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

});




parcelRequire.register("75nYD", function(module, exports) {

$parcel$export(module.exports, "cachify", function () { return $96212a6db1237544$export$154c1b0cf81b0103; });
function $96212a6db1237544$export$154c1b0cf81b0103(fn, options) {
    options = options || {
    };
    const keyFn = options.keyFn || ((...a)=>JSON.stringify(a)
    );
    if (options.cacheSize === undefined) {
        const cache = {
        };
        return (...a)=>{
            const key = keyFn(...a);
            if (key in cache) return cache[key];
            const value = fn(...a);
            cache[key] = value;
            return value;
        };
    }
    if (options.cacheSize <= 0) return fn;
    if (options.cacheSize === 1) {
        let cachedKey;
        let cachedValue;
        return (...a)=>{
            const key = keyFn(...a);
            if (key === cachedKey) return cachedValue;
            cachedKey = key;
            cachedValue = fn(...a);
            return cachedValue;
        };
    }
    // cacheSize > 1
    throw Error(`Cache size ${options.cacheSize} not supported yet!`);
}

});




parcelRequire("duqgR");
})();
