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
})({"script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/**\n*   \u83B7\u53D6\u753B\u5E03 \n*/\nvar canvas = document.getElementById(\"canvas\");\n\n/**\n*  \u8BBE\u7F6E\u753B\u5E03\u5BBD\u9AD8\n*/\nif( document.documentElement.clientWidth > 1024){\n    canvas.width = 752;\n    canvas.height = document.documentElement.clientHeight;\n} else {\n    canvas.width = document.documentElement.clientWidth ;\n    canvas.height = document.documentElement.clientHeight * 0.6;\n}\n\nvar ctx = canvas.getContext(\"2d\");\n\n/**\n* \u8BBE\u7F6E\u753B\u7B14\n*/\nctx.lineWidth = 5;\nctx.lineCap = \"round\";\n\n/**\n * \u8138\u578B\u5916\u5C42\u8F6E\u5ED3\n */\nctx.beginPath();\nctx.moveTo(185,220);\nctx.bezierCurveTo(240,700,  620,720, 750,358);\nctx.moveTo(185,220);\nctx.bezierCurveTo(300,80,  600,80, 750,200);\nctx.lineTo(750,358);\nctx.strokeStyle = '#c69253';\nctx.stroke();\nctx.fillStyle= '#c69253'\nctx.fill();\n\n/**\n * \u5DE6\u8FB9\u6D41\u6D77\u9634\u5F71\n */\nctx.beginPath();\nctx.moveTo(238,245);\nctx.lineTo(248, 240);\nctx.lineTo(270, 255);\nctx.bezierCurveTo(265,245,265,240,258,235);\nctx.bezierCurveTo(275,245,275,250,280, 255);\nctx.bezierCurveTo(284,260,288,258,290, 255);\nctx.bezierCurveTo(300,245,275,235,275,228);\nctx.bezierCurveTo(280,220,290,220,300,226);\nctx.bezierCurveTo(320,240,330,260,400,290);\nctx.bezierCurveTo(320,240,330,260,400,290);\nctx.bezierCurveTo(400,270,380,260,350,240);\nctx.bezierCurveTo(380,240,420,220,460,275);\nctx.bezierCurveTo(470,285,465,260,450,240);\n\n/**\n * \u53F3\u8FB9\u6D41\u6D77\u9634\u5F71\n */\nctx.bezierCurveTo(460,245,480,270,500,266);\nctx.bezierCurveTo(515,275,520,280,555,310);\nctx.bezierCurveTo(555,295,540,280,525,266);\nctx.lineTo(568, 250);\nctx.lineTo(581,265);\nctx.lineTo(588,262);\nctx.lineTo(565,220);\nctx.bezierCurveTo(610,240,620,290,660,310);\nctx.bezierCurveTo(670,306,660,302,650,285);\nctx.bezierCurveTo(670,270,700,320,720,342);\n\n/**\n * \u8138\u578B\u5185\u5C42\u8F6E\u5ED3\n */\nctx.bezierCurveTo(620,680,250,700,238,245);\nctx.strokeStyle = '#f8d4aa';\nctx.stroke();\nctx.fillStyle= '#f8d4aa';\nctx.fill();\n\n/**\n * \u7709\u6BDB\n * */\nctx.beginPath();\nctx.moveTo(285,150);\nctx.lineTo(449,255);\nctx.lineTo(446,260);\nctx.lineTo(280,190);\nctx.closePath();\n\nctx.moveTo(552,240);\nctx.lineTo(670,190);\nctx.lineTo(690,230);\nctx.lineTo(555,255);\nctx.closePath();\nctx.strokeStyle = 'black';\nctx.stroke();\nctx.fillStyle = 'black';\nctx.fill();\n\n/**\n * \u5F00\u59CB\u753B\u773C\u775B\n */\n\n/**\n * \u5DE6\u773C\n */\nctx.strokeStyle = 'black';\nctx.beginPath();\nctx.moveTo(282,220);\nctx.bezierCurveTo(350,220,  380,240, 408,252);\nctx.bezierCurveTo(410,253,  408,254, 405,255);\nctx.lineTo(386,248);\nctx.bezierCurveTo(370,290,  295,292,312,234);\nctx.lineTo(282,228);\nctx.closePath();\nctx.stroke();\n\n/**\n * \u53F3\u773C\n */\nctx.moveTo(574,266);\nctx.bezierCurveTo(650,255,  670,270, 680,285);\nctx.bezierCurveTo(675,290,  670,285,  664,282);\nctx.bezierCurveTo(650,320,  600,330,  590,275);\nctx.lineTo(574,275);\nctx.bezierCurveTo(572,268,  572,272,  574,266);\nctx.stroke();\n\nctx.fillStyle = 'black';\nctx.fill();\n\n/**\n * \u5634\u5DF4\n */\nctx.beginPath();\nctx.lineWidth = 12;\nctx.moveTo(382,480);\nctx.bezierCurveTo(420,482,  500,482, 542,502);\nctx.strokeStyle = 'black';\nctx.stroke();\n\nctx.beginPath();\nctx.lineWidth = 30;\nctx.moveTo(408,526);\nctx.bezierCurveTo(450,538,  480,538, 506,532);\nctx.strokeStyle = '#c88f58';\nctx.stroke();\n\nctx.beginPath();\nctx.lineWidth = 12;\nctx.moveTo(420,530);\nctx.bezierCurveTo(450,540,  480,540, 494,538);\nctx.strokeStyle = 'black';\nctx.stroke();\n\n/**\n * \u816E\u7EA2\n */\nctx.beginPath();\nctx.moveTo(268,310);\nctx.bezierCurveTo(280,285,  340,290, 352,320);\nctx.bezierCurveTo(350,370,  270,352, 268,310);\nctx.strokeStyle = '#f3c18c';\nctx.stroke();\n\nctx.moveTo(598,340);\nctx.bezierCurveTo(600,330,  660,330, 672,336);\nctx.bezierCurveTo(672,340,  684,335, 686,360);\nctx.bezierCurveTo(680,395,  600,390, 586,362);\nctx.bezierCurveTo(580,358,  588,344, 598,340);\nctx.strokeStyle = '#f1bc86';\nctx.stroke();\n\nctx.fillStyle = '#f1bc86';\nctx.fill();\n\n/**\n *  \u8868\u60C5\n */\nctx.beginPath();\nctx.lineWidth = 10;\nctx.moveTo(282,304);\nctx.lineTo(268,314);\nctx.moveTo(312,318);\nctx.lineTo(306,325);\nctx.moveTo(350,322);\nctx.lineTo(351,331);\nctx.moveTo(610,350);\nctx.lineTo(602,360);\nctx.moveTo(636,350);\nctx.lineTo(638,360);\nctx.moveTo(667,348);\nctx.lineTo(674,353);\nctx.strokeStyle = 'black';\nctx.stroke();\n\n/**\n * \u5934\u53D1\n */\nctx.beginPath();\nctx.moveTo(748,176);\nctx.bezierCurveTo(600,35,  170,32, 125,250);\nctx.stroke();\n\n/**\n * \u5DE6\u8FB9\u7684\u5934\u53D1\n */\nctx.bezierCurveTo(135,265,  145,260, 145,240);\nctx.bezierCurveTo(155,220,  155,255, 176,230);\nctx.bezierCurveTo(175,250,  180,265, 182,280);\nctx.bezierCurveTo(185,285,  195,285, 200,270);\nctx.bezierCurveTo(190,240,  210,215, 228,200);\nctx.bezierCurveTo(240,220,  250,230, 268,235);\nctx.bezierCurveTo(265,220,  255,210, 245,185);\nctx.lineTo(258,183);\nctx.bezierCurveTo(260,200,  280,220, 295,238);\nctx.bezierCurveTo(298,240,  300,238, 298,240);\nctx.bezierCurveTo(285,230,  280,200, 275,175);\nctx.lineTo(290,165);\nctx.bezierCurveTo(300,190,  360,260, 388,275);\nctx.bezierCurveTo(360,260,  330,170, 320,152);\nctx.lineTo(330,148);\nctx.bezierCurveTo(360,200,  380,240, 448,258);\nctx.bezierCurveTo(380,210,  370,170, 355,150);\nctx.lineTo(359,149);\nctx.bezierCurveTo(380,180,  415,220, 428,228);\nctx.bezierCurveTo(430,210,  420,190, 405,165);\nctx.stroke();\n\n/**\n * \u4E2D\u95F4\u7684\u5934\u53D1\n */\nctx.lineTo(408,162);\nctx.bezierCurveTo(436,210,  472,240, 495,250);\nctx.bezierCurveTo(490,240,  470,220, 460,190);\nctx.bezierCurveTo(460,180,  482,250, 565,285);\nctx.bezierCurveTo(520,240,  510,180,  510,155);\nctx.stroke();\n\n/**\n * \u53F3\u8FB9\u7684\u5934\u53D1\n */\nctx.lineTo(514,156);\nctx.bezierCurveTo(520,200,  550,260, 566,272);\nctx.bezierCurveTo(535,240,  525,180,  520,155);\nctx.lineTo(538,158);\nctx.bezierCurveTo(550,200,  580,240, 628,280);\nctx.bezierCurveTo(590,240,  580,190,  582,175);\nctx.lineTo(592,176);\nctx.bezierCurveTo(600,200,  640,260, 675,285);\nctx.bezierCurveTo(640,260,  610,200, 602,180);\nctx.lineTo(620,190)\nctx.bezierCurveTo(650,230,  670,280, 702,295);\nctx.bezierCurveTo(705,290,  690,260, 678,240);\nctx.lineTo(680,238)\nctx.bezierCurveTo(690,250,  700,270, 718,280);\nctx.bezierCurveTo(735,290,  750,300, 750,370);\nctx.lineTo(750,370);\nctx.closePath();\nctx.strokeStyle = 'black';\nctx.stroke();\nctx.fillStyle = 'black';\nctx.fill();\n\n/**\n* \u5E3D\u5B50\n*/\nctx.beginPath();\nctx.moveTo(90,0);\nctx.bezierCurveTo(80,30,  80,100, 102,212);\nctx.bezierCurveTo(75,260,  85,330, 160,380);\nctx.bezierCurveTo(190,595,  370,730, 570,680);\nctx.bezierCurveTo(620,660,  720,620, 750,555);\nctx.lineTo(750,445);\nctx.bezierCurveTo(700,570,  620,635, 478,670);\nctx.bezierCurveTo(420,660,  200,560, 176,230);\nctx.bezierCurveTo( 155,255,155,220, 145,240);\nctx.bezierCurveTo(145,260,  135,265, 125,250);\nctx.bezierCurveTo(170,32,  600,35, 750,176);\nctx.lineTo(750,0);\nctx.closePath();\nctx.strokeStyle = 'red';\nctx.stroke();\nctx.fillStyle = 'red';\nctx.fill();\n\n/**\n * \u4E0B\u5DF4\u8FD9\u91CC\u7684\u9ED1\u8272\u9634\u5F71\n */\nctx.beginPath();\nctx.moveTo(192,280);\nctx.bezierCurveTo(220,560, 420,660, 478,665);\nctx.bezierCurveTo(620,635,  700,570, 750,444);\nctx.lineTo(750,370);\nctx.bezierCurveTo(620,710,  260,690, 192,280);\nctx.strokeStyle = 'black';\nctx.stroke();\nctx.fillStyle = 'black';\nctx.fill();\n\n/**\n * \u5F00\u59CB\u753B\u8863\u670D\n */\n/**\n * \u5DE6\u8FB9\u8863\u670D\n */\nctx.beginPath();\nctx.moveTo(110,355);\nctx.bezierCurveTo(128,450,  135,470, 152,605);\nctx.bezierCurveTo(149,608,  151,608, 148,605);\nctx.bezierCurveTo(125,470,  115,450, 115,455);\nctx.lineTo(0, 515);\nctx.lineTo(0, 754);\nctx.lineTo(315, 754);\nctx.bezierCurveTo(320,740,  300,710, 260,690);\nctx.bezierCurveTo(258,670,  275,670, 288,685);\nctx.bezierCurveTo(310,700,  330,740, 332, 754);\nctx.lineTo(350, 754);\nctx.bezierCurveTo(350,720,  280,640, 245, 605);\nctx.bezierCurveTo(170,500,  160,480, 148,395);\nctx.closePath();\nctx.strokeStyle = '#fa220b';\nctx.stroke();\nctx.fillStyle = '#fa220b';\nctx.fill();\n\n/**\n * \u53F3\u8FB9\u8863\u670D\n */\nctx.beginPath();\nctx.moveTo(332,670);\nctx.bezierCurveTo(400,710,  500,720, 564,695);\nctx.lineTo(560,685);\nctx.bezierCurveTo(580,680,  600,675, 650,650);\nctx.bezierCurveTo(650,654,  650,658, 660,660);\nctx.bezierCurveTo(690,640,  720,625, 750, 590);\nctx.lineTo(750, 630);\nctx.bezierCurveTo(720,680,  670,710, 620, 754);\nctx.lineTo(430, 754);\nctx.bezierCurveTo(390,740,  360,710, 360, 710);\nctx.bezierCurveTo(410,740,  450,730, 450, 735);\nctx.bezierCurveTo(400,720,  360,700, 332,670);\nctx.strokeStyle = '#fb220b';\nctx.stroke();\nctx.fillStyle = '#fb220b';\nctx.fill();\n\n/**\n * \u53F3\u4E0B\u89D2\u7684\u4E09\u89D2\n */\nctx.beginPath();\nctx.moveTo(750, 754);\nctx.lineTo(750, 662);\nctx.lineTo(650, 754);\nctx.closePath();\nctx.strokeStyle = '#fc220d';\nctx.stroke();\nctx.fillStyle = '#fc220d';\nctx.fill();\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _script = _interopRequireDefault(require("./script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeNum = 1;
var scriptNum = 1;
var time = 0;

var run = function run() {
  codeNum += 10;
  scriptNum += 15;

  if (codeNum > _script.default.length + codeNum && scriptNum > _script.default.length + scriptNum) {
    window.clearInterval(id);
    return;
  } // 代码展示


  codeDisplay.innerText = _script.default.substr(0, codeNum); // 让JS代码生效
  // 删除原来的script

  if (scriptNum != 0) {
    var newDemo = demo.childNodes;

    for (var i = newDemo.length - 1; i >= 0; i--) {
      // 一定要倒序，正序是删不干净的，可自行尝试
      demo.removeChild(newDemo[i]);
    }
  } // 创建新的script


  var newScript = document.createElement('script');
  newScript.innerHTML = _script.default.substr(0, scriptNum);
  demo.appendChild(newScript); // 代码展示区向上滚动

  codeDisplay.scrollTop = codeDisplay.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play(); // 设置按钮点击事件

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = setInterval(run, time);
};

btnNormal.onclick = function () {
  pause();
  time = 100;
  id = setInterval(run, time);
};
},{"./script":"script.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53294" + '/');

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
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map