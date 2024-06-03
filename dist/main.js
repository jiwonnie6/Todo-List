/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: 'roboto', sans-serif;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 50px;\n}\n\n.contentWrapper {\n  border: 1px solid black;\n  border-radius: 8px;\n  width: 600px;\n\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr 8fr;\n  grid-gap: 15px;\n\n  padding: 2em;\n  background-color: rgb(245, 245, 245);\n}\n\n#header {\n  font-size: 25px;\n  margin-bottom: 6px;\n}\n\n/* project wrapper */\n#projectButton {\n  height: 18px;\n  width: 18px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n  border-radius: 50px;\n  border: 1px solid rgb(216, 215, 215);\n}\n\n#projectButton:hover {\n  background-color: rgb(223, 221, 221);\n}\n\n.project {\n  border: 1px solid black;\n  border-radius: 10px;\n  grid-row: 2/3;\n  height: auto;\n  width: auto;\n  padding: 1em;\n  background-color: white;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.projectTop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n\n  font-size: 18px;\n}\n\n/* project titles */\n#projects {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  font-size: 15px;\n}\n\n.deleteProjectButtons {\n  background-color: transparent;\n  color: grey;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n  margin-right: 5px;\n  height: 7px;\n  border: 0;\n}\n\n.projectTitles {\n  background-color: rgb(246, 246, 246);\n  border-radius: 8px;\n  box-sizing: border-box;\n  margin-top: -1px;\n  text-align: center;\n\n  width: 160px;\n  height: 25px;\n  padding-left: 5px;\n  \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.projectTitles:hover {\n  background-color: rgb(231, 231, 231);\n}\n\n.projectTitles:focus {\n  background-color: rgb(231, 231, 231);\n}\n\n/* todo list for projects */\n.todoHeaderWrapper {\n  font-size: 18px;\n  border: 1px solid black;\n  background-color: white;\n  border-radius: 8px;\n\n  display: flex;\n  align-items: center;\n\n  /* padding: 1em; */\n  height: 35px;\n  grid-column: 2/3;\n}\n\n#todoHeader {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  margin-left: 10px;\n}\n\n.addTaskButton {\n  margin-right: 10px;\n}\n\n.todo {\n  border: 1px solid black;\n  border-radius: 8px;\n  background-color: white;\n  \n  padding: 1em;\n}\n\n#lists {\n  grid-row: 2/3;\n\n  display: flex;\n  align-items: center;\n  gap: 5px;\n\n  flex-direction: column;\n}\n\n.taskInputs {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  padding-left: 5px;\n  width: 100%;\n\n  font-size: 13px;\n\n  height: 20px;\n  border-radius: 5px;\n  \n  background-color: rgb(237, 235, 235);\n}\n\n.deleteTaskButtons {\n  background-color: transparent;\n  /* background-color: red; */\n  color: black;\n\n  height: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n  margin-right: 5px;\n  border: 0;\n}\n\n/* project title form */ /* add task form */\n#dialog {\n  width: 300px;\n  height: 150px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.createProjectTitle {\n  font-size: 22px;\n  text-align: left;\n  position: absolute;\n  top: 15px;\n}\n\n.projectTitle,\n.taskTitle {\n  font-size: 15px;\n  margin-top: 25px;\n\n  display: flex;\n  gap: 10px;\n}\n\n#deleteFormButton,\n#deleteTaskFormButton {\n  right: 0px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  border: 0;\n  background-color: transparent;\n  color: rgb(184, 183, 183);\n  font-size: 20px;\n}\n\n#taskDialog {\n  width: 400px;\n  height: 200px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.taskTitle {\n  font-size: 15px;\n  margin-top: 5px;\n  grid-row: 1/2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.addTaskHeader {\n  font-size: 25px;\n  text-align: left;\n  position: absolute;\n  top: 15px;\n}\n\n#taskInput,\n#projectTitleInput {\n  flex-grow: 1;\n  height: 15px;\n}\n\n.secondTaskRow {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n\n.taskPriority {\n  margin-top: 25px;\n}\n\n.taskDueDate {\n  margin-top: 25px;\n}\n\n#submitTaskButton {\n  margin-top: 5px;\n}\n\n.taskDetails {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n/* due date and priortiy in tasks */\n\n.dueAndPriority {\n  margin-left: auto;\n  padding-right: 5px;\n  font-size: 12px;\n\n  color: rgb(153, 151, 151);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n\n\n \n\nconst addProjectButton = document.getElementById(\"projectButton\");\n\naddProjectButton.addEventListener(\"click\", function() {\n  (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.addProject)();\n});\n\n(0,_modules_todo__WEBPACK_IMPORTED_MODULE_2__.projectTodo)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\nfunction addProject() {\n  const dialog = document.getElementById(\"dialog\");\n  dialog.showModal();\n}\n\nconst projects = document.getElementById(\"projects\");\nconst dialog = document.getElementById(\"dialog\");\n\nconst submitProjectButton = document.getElementById(\"submitProjectButton\");\nconst deleteFormButton = document.getElementById(\"deleteFormButton\");\n\n// close project form\ndeleteFormButton.addEventListener(\"click\", function(e) {\n  e.preventDefault();\n  document.getElementById(\"projectTitleInput\").value = \"\";\n  dialog.close();\n});\n\ndocument.getElementById(\"projectTitleInput\").addEventListener('keypress', function(e) {\n  if (this.value.length === 0 && e.key === ' ') {\n    e.preventDefault(); // Prevent the default action (inserting a space)\n  }\n});\n\nsubmitProjectButton.addEventListener(\"click\", function(e) {\n  e.preventDefault();\n\n  const form = document.getElementById('projectForm');\n  if (!form.checkValidity()) {\n    form.reportValidity();\n    return;\n  }\n\n  const projectTitleInput = document.getElementById(\"projectTitleInput\").value;\n\n  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(projectTitleInput);\n\n  renderProjects();\n\n  document.getElementById(\"projectTitleInput\").value = \"\";\n  dialog.close();\n});\n\nfunction renderProjects() {\n  projects.innerHTML = '';\n\n  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getProjects().forEach(projectTitle => {\n    const newProjectTitle = document.createElement(\"div\");\n    newProjectTitle.classList.add(\"projectTitles\");\n    newProjectTitle.textContent = projectTitle;\n\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.setAttribute('type', 'button');\n    deleteButton.classList.add(\"deleteProjectButtons\");\n    newProjectTitle.setAttribute(\"tabindex\", \"0\");\n    deleteButton.textContent = 'x';\n    newProjectTitle.appendChild(deleteButton);\n\n    projects.appendChild(newProjectTitle);\n\n    deleteButton.addEventListener(\"click\", function() {\n      const projectTitle = this.parentElement.childNodes[0].textContent;\n      _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.removeProject(projectTitle);\n      this.parentElement.remove();\n    });\n  });\n}\n\nrenderProjects();\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TodoList: () => (/* binding */ TodoList),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\nclass Task {\n  constructor(checked = false, task, priority, dueDate) {\n    this.checked = checked;\n    this.task = task;\n    this.priority = priority;\n    this.dueDate = dueDate;\n  }\n}\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  addTask(checked = false, task, priority, dueDate) {\n    const newTask = new Task(checked, task, priority, dueDate);\n    this.tasks.push(newTask);\n  }\n\n  removeTask(taskName) {\n    this.tasks = this.tasks.filter(task => task.task !== taskName);\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n}\n\nclass TodoList {\n  constructor() {\n    this.projects = {};\n  }\n\n  addProject(name) {\n    if (!this.projects[name]) {\n      this.projects[name] = new Project(name);\n    }\n  }\n\n  removeProject(name) {\n    delete this.projects[name];\n  }\n\n  getProject(name) {\n    return this.projects[name];\n  }\n\n  getProjects() {\n    return Object.keys(this.projects);\n  }\n}\n\n// Create an instance of TodoList and add default projects\nconst todoList = new TodoList();\ntodoList.addProject(\"Default\");\ntodoList.addProject(\"Errands\");\ntodoList.addProject(\"HW\");\n\n// Add default tasks to the projects\ntodoList.getProject(\"Default\").addTask(false, \"Default\", \"Low\", \"1111-11-1\");\ntodoList.getProject(\"Errands\").addTask(false, \"Buy groceries\", \"Medium\", \"1111-11-1\");\ntodoList.getProject(\"Errands\").addTask(true, \"Do laundry\", \"Low\", \"1111-11-1\");\ntodoList.getProject(\"Errands\").addTask(true, \"Drop off package\", \"Medium\", \"1111-11-1\");\ntodoList.getProject(\"HW\").addTask(false, \"Science HW\", \"High\", \"1111-11-1\");\ntodoList.getProject(\"HW\").addTask(false, \"Essay\", \"Medium\", \"1111-11-1\");\n\n//# sourceURL=webpack://todo-list/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectTodo: () => (/* binding */ projectTodo)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\nfunction projectTodo() {\n  const projects = document.getElementById(\"projects\");\n\n  projects.addEventListener(\"click\", function(e) {\n    if (e.target.classList.contains(\"projectTitles\")) {\n      const projectTitle = e.target.childNodes[0].nodeValue;\n      console.log(projectTitle);\n      createTodoList(projectTitle);\n    }\n  });\n}\n\nconst todoHeader = document.getElementById(\"todoHeader\");\nconst dialog = document.getElementById(\"taskDialog\");\nconst submitTaskButton = document.getElementById(\"submitTaskButton\");\nconst lists = document.getElementById(\"lists\");\nconst deleteTaskForm = document.getElementById(\"deleteTaskFormButton\");\n\nfunction createTodoList(projectTitle) {\n  todoHeader.textContent = \"\";\n  lists.textContent = \"\";\n\n  // create header // project name is header\n  const header = document.createElement(\"header\");\n  header.textContent = projectTitle;\n  todoHeader.appendChild(header);\n\n  // create add task button in todo list header area\n  const addTaskButton = document.createElement(\"button\");\n  addTaskButton.classList.add(\"addTaskButton\");\n  addTaskButton.textContent = \"Add Task\";\n  todoHeader.appendChild(addTaskButton);\n\n  // onclick add task button show task dialog form\n  addTaskButton.addEventListener(\"click\", function(e) {\n    addTaskForm();\n  });\n\n  const project = _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getProject(projectTitle);\n  if (project) {\n    project.getTasks().forEach(task => {\n      const taskElements = createTaskElements(task.checked, task.task, task.priority, task.dueDate);\n      lists.appendChild(taskElements);\n    });\n  }\n}\n\nfunction addTaskForm() {\n  dialog.showModal();\n}\n\ndeleteTaskForm.addEventListener(\"click\", function(e) {\n  document.getElementById(\"taskInput\").value = \"\";\n  document.getElementById(\"dueDateInput\").value = \"\";\n  dialog.close();\n});\n\nsubmitTaskButton.addEventListener(\"click\", function(e) {\n  e.preventDefault();\n\n  const form = document.getElementById('addTaskForm');\n  if (!form.checkValidity()) {\n    form.reportValidity();\n    return;\n  }\n  \n  const projectTitle = todoHeader.querySelector(\"header\").textContent;\n\n  const task = document.getElementById(\"taskInput\").value;\n  const priority = document.getElementById(\"select-priority\").options[document.getElementById(\"select-priority\").selectedIndex].text;\n  const dueDate = document.getElementById(\"dueDateInput\").value;\n\n  const taskElements = createTaskElements(false, task, priority, dueDate);\n  lists.append(taskElements);\n\n  const project = _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getProject(projectTitle);\n  if (project) {\n    project.addTask(false, task, priority, dueDate);\n  }\n\n  document.getElementById(\"taskInput\").value = \"\";\n  document.getElementById(\"dueDateInput\").value = \"\";\n  dialog.close();\n});\n\nfunction createTaskElements(checked, task, priority, dueDate) {\n  // get task and put task text \n  const taskInput = document.createElement(\"div\");\n  taskInput.classList.add(\"taskInputs\");\n\n  // append done checklist\n  const check = document.createElement(\"input\");\n  check.setAttribute(\"type\", \"checkbox\");\n  check.classList.add(\"checkbox\");\n  check.checked = checked;\n  taskInput.appendChild(check);\n\n  // create task details div\n  const taskDetails = document.createElement(\"div\");\n  taskDetails.classList.add(\"taskDetails\");\n\n  // get task and put task text \n  const taskText = document.createElement(\"div\");\n  taskText.textContent = task;\n  taskDetails.appendChild(taskText);\n\n  // get priority and due date inputs and append it to taskInput div\n  const priorityAndDuedate = document.createElement(\"div\");\n  priorityAndDuedate.classList.add(\"dueAndPriority\");\n  priorityAndDuedate.textContent = `${priority} / ${dueDate}`;\n  taskDetails.appendChild(priorityAndDuedate);\n\n  taskInput.appendChild(taskDetails);\n\n  // create delete button for tasks\n  const deleteButton = document.createElement(\"button\");\n  deleteButton.setAttribute(\"type\", \"button\");\n  deleteButton.classList.add(\"deleteTaskButtons\");\n  deleteButton.textContent = \"x\";\n  taskInput.appendChild(deleteButton);\n\n  deleteButton.addEventListener(\"click\", function() {\n    const projectTitle = todoHeader.querySelector(\"header\").textContent;\n    const project = _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getProject(projectTitle);\n    if (project) {\n      project.removeTask(task);\n    }\n    taskInput.remove();\n  });\n\n  if (checked) {\n    taskText.style.textDecoration = \"line-through\";\n  }\n\n  check.addEventListener(\"change\", function() {\n    const projectTitle = todoHeader.querySelector(\"header\").textContent;\n    const project = _tasks_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getProject(projectTitle);\n    const taskObj = project.getTasks().find(t => t.task === task);\n    if (taskObj.checked = this.checked) {\n      // taskObj.checked = this.checked;\n      taskText.style.textDecoration = this.checked ? \"line-through\" : \"none\";\n    }\n  });\n\n  return taskInput;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;