/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/stage_9_bg.wasm": function() {
/******/ 			return {
/******/ 				"./stage_9_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_confirm_158f64e12a69e2bb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_confirm_158f64e12a69e2bb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_alert_2b26f196fbe048a6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_alert_2b26f196fbe048a6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e266f02eee43b570": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_instanceof_Window_e266f02eee43b570"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_950215a728589a2d": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_document_950215a728589a2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_location_797a1856892cc2de": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_location_797a1856892cc2de"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_465e8cb61a0f43ea": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_fetch_465e8cb61a0f43ea"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createElement_e2a0e21263eb5416": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_createElement_e2a0e21263eb5416"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_eb93a47327bb5585": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_getElementById_eb93a47327bb5585"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_fb3a4df648c1859b": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_instanceof_Response_fb3a4df648c1859b"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_b9414eb18cb751d0": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_json_b9414eb18cb751d0"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_ab5251d2727ac41e": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_headers_ab5251d2727ac41e"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_c45f0dc6da26fd03": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_newwithstrandinit_c45f0dc6da26fd03"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_79c9562d32d05e66": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_setAttribute_79c9562d32d05e66"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_settextContent_19dc6a6146112f16": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_settextContent_19dc6a6146112f16"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_b8199dc1655c852d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_appendChild_b8199dc1655c852d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_reload_cab7edb34a2ce684": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_reload_cab7edb34a2ce684"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlButtonElement_7046caffb25a7bfb": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_instanceof_HtmlButtonElement_7046caffb25a7bfb"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_615d4590d38da1c9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_addEventListener_615d4590d38da1c9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_a5d34c36a1a4ebd1": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_set_a5d34c36a1a4ebd1"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2b8b6bd7753c76ba": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_newnoargs_2b8b6bd7753c76ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_95d1ea488d03e4e8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_call_95d1ea488d03e4e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_f9876326328f45ed": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_new_f9876326328f45ed"]();
/******/ 					},
/******/ 					"__wbg_self_e7c1f827057f6584": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_self_e7c1f827057f6584"]();
/******/ 					},
/******/ 					"__wbg_window_a09ec664e14b1b81": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_window_a09ec664e14b1b81"]();
/******/ 					},
/******/ 					"__wbg_globalThis_87cbb8506fecf3a9": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_globalThis_87cbb8506fecf3a9"]();
/******/ 					},
/******/ 					"__wbg_global_c85a9259e621f3db": function() {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_global_c85a9259e621f3db"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_9495de66fdbe016b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_call_9495de66fdbe016b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_9d3a9ce4282a18a8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_new_9d3a9ce4282a18a8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_fd40f858d9db1a04": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_resolve_fd40f858d9db1a04"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_ec5db6d509eb475f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_then_ec5db6d509eb475f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_f753623316e2873a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_then_f753623316e2873a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_6aa458a4ebdb65cb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbg_set_6aa458a4ebdb65cb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper139": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_closure_wrapper139"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper581": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/stage_9_bg.js"].exports["__wbindgen_closure_wrapper581"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/stage_9_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/stage_9_bg.wasm":"0e9a81072bb0bb448f17"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });