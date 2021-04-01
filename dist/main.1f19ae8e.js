// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.lineCap = "round";
/**
* 脸型
*/

ctx.beginPath();
ctx.moveTo(220, 200);
ctx.bezierCurveTo(240, 640, 620, 700, 760, 350);
ctx.stroke();
/**
 * 眉毛
 * */

ctx.beginPath();
ctx.moveTo(320, 160);
ctx.lineTo(445, 210);
ctx.lineTo(440, 215);
ctx.lineTo(320, 180);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.moveTo(570, 230);
ctx.lineTo(670, 180);
ctx.lineTo(690, 215);
ctx.lineTo(570, 235);
ctx.closePath();
ctx.stroke();
ctx.fill();
/**
 * 眼睛
 */

ctx.beginPath();
ctx.moveTo(315, 205);
ctx.bezierCurveTo(350, 210, 410, 220, 430, 235);
ctx.stroke();
ctx.moveTo(340, 210);
ctx.bezierCurveTo(330, 266, 390, 266, 402, 235);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.moveTo(595, 250);
ctx.bezierCurveTo(650, 245, 670, 248, 690, 265);
ctx.stroke();
ctx.moveTo(610, 250);
ctx.bezierCurveTo(610, 300, 660, 300, 670, 265);
ctx.closePath();
ctx.fill();
ctx.stroke();
/**
 * 嘴巴
 */

ctx.beginPath();
ctx.moveTo(405, 450);
ctx.bezierCurveTo(420, 450, 500, 450, 560, 465);
ctx.lineTo(560, 475);
ctx.bezierCurveTo(500, 460, 420, 460, 405, 460);
ctx.lineTo(405, 450);
ctx.stroke();
ctx.moveTo(442, 495);
ctx.bezierCurveTo(450, 500, 500, 508, 515, 503);
ctx.lineTo(515, 510);
ctx.bezierCurveTo(490, 510, 470, 515, 442, 502);
ctx.lineTo(442, 495);
ctx.stroke();
/**
 *  表情
 */

ctx.moveTo(310, 285);
ctx.lineTo(300, 295);
ctx.moveTo(340, 295);
ctx.lineTo(332, 305);
ctx.moveTo(375, 302);
ctx.lineTo(375, 310);
ctx.moveTo(622, 326);
ctx.lineTo(615, 336);
ctx.moveTo(646, 328);
ctx.lineTo(648, 338);
ctx.moveTo(677, 328);
ctx.lineTo(684, 333);
ctx.stroke();
/**
 * 头发
 */

ctx.beginPath();
ctx.moveTo(170, 230);
ctx.bezierCurveTo(220, 20, 620, 35, 760, 170);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(180, 210);
ctx.lineTo(220, 215);
ctx.lineTo(230, 250);
ctx.bezierCurveTo(240, 200, 250, 200, 260, 180);
ctx.lineTo(295, 210);
ctx.lineTo(280, 170);
ctx.lineTo(285, 165);
ctx.lineTo(310, 200);
ctx.lineTo(300, 155);
ctx.lineTo(320, 150);
ctx.bezierCurveTo(340, 180, 360, 210, 410, 250);
ctx.bezierCurveTo(350, 180, 360, 210, 340, 140);
ctx.lineTo(350, 135);
ctx.bezierCurveTo(380, 180, 410, 210, 470, 240);
ctx.bezierCurveTo(420, 210, 390, 180, 380, 125);
ctx.bezierCurveTo(380, 150, 420, 180, 450, 210);
ctx.lineTo(440, 170);
ctx.bezierCurveTo(460, 190, 500, 230, 520, 230);
ctx.bezierCurveTo(510, 230, 500, 210, 480, 175);
ctx.lineTo(485, 170);
ctx.bezierCurveTo(500, 210, 570, 270, 580, 265);
ctx.bezierCurveTo(560, 240, 520, 180, 530, 145);
ctx.lineTo(535, 142);
ctx.bezierCurveTo(540, 180, 560, 230, 584, 255);
ctx.bezierCurveTo(560, 230, 540, 180, 542, 142);
ctx.lineTo(558, 145);
ctx.bezierCurveTo(570, 190, 600, 230, 650, 255);
ctx.bezierCurveTo(630, 250, 580, 170, 600, 158);
ctx.lineTo(610, 160);
ctx.bezierCurveTo(620, 200, 660, 240, 685, 265);
ctx.bezierCurveTo(660, 240, 620, 200, 615, 165);
ctx.lineTo(635, 170);
ctx.bezierCurveTo(630, 180, 680, 260, 713, 278);
ctx.bezierCurveTo(710, 260, 690, 240, 685, 220);
ctx.lineTo(695, 220);
ctx.bezierCurveTo(710, 230, 690, 240, 740, 270);
ctx.bezierCurveTo(765, 290, 755, 320, 760, 350);
ctx.lineTo(760, 170);
ctx.stroke();
/**
* 帽子
*/

ctx.beginPath();
ctx.moveTo(130, 0);
ctx.bezierCurveTo(120, 30, 120, 100, 140, 200);
ctx.bezierCurveTo(120, 250, 130, 300, 200, 360);
ctx.bezierCurveTo(230, 580, 400, 700, 570, 640);
ctx.bezierCurveTo(600, 630, 690, 600, 760, 530);
ctx.moveTo(130, 0);
ctx.lineTo(760, 0);
ctx.lineTo(760, 530);
ctx.stroke();
},{}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51618" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map