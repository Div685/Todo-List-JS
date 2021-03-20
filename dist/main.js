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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --white: #fff;\\n  --culture: #fcfaf9;\\n  --purple: #5603ad;\\n  --paleSilver: #bcb8b1;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: 'Open Sans', sans-serif;\\n  background: var(--culture);\\n  overflow-x: hidden;\\n  box-sizing: border-box;\\n  color: #333;\\n}\\n\\nnav {\\n  height: 80px;\\n  display: flex;\\n  justify-content: space-between;\\n  padding-left: 40px;\\n  align-items: center;\\n  background: var(--purple);\\n  padding-right: 3.7rem;\\n}\\n\\nmain {\\n  min-height: calc(100vh - 80px);\\n  background: var(--culture);\\n  border-radius: 32px 0 0 0;\\n  padding: 40px;\\n  display: flex;\\n}\\n\\n.feedback {\\n  display: none;\\n}\\n\\n#projeects {\\n  flex: 4;\\n  margin-right: 24px;\\n}\\n\\n#tasks {\\n  flex: 8;\\n}\\n\\n.card {\\n  background: var(--culture);\\n  box-shadow: 0 10px 20px rgba(64, 68, 201, 0.2);\\n  border-radius: 24px;\\n  padding: 32px;\\n}\\n\\n.project {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background: var(--culture);\\n  border-radius: 8px;\\n  padding: 16px 24px;\\n  color: var(--paleSilver);\\n  margin-bottom: 24px;\\n}\\n\\n.project.active {\\n  background: var(--purple);\\n  color: var(--culture);\\n  box-shadow: 0 5px 10px var(--purple);\\n}\\n\\n.project.active:hover {\\n  border: none;\\n}\\n\\n.project:hover {\\n  border: 1px solid var(--purple);\\n  cursor: pointer;\\n}\\n\\n.task {\\n  display: flex;\\n  background: var(--culture);\\n  padding: 16px 18px;\\n  justify-content: space-around;\\n  align-items: center;\\n  border-radius: 8px;\\n  margin-bottom: 24px;\\n}\\n\\n.task-title,\\n.task-description {\\n  flex: 8;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n\\n  /* border: 3px solid red; */\\n}\\n\\n.task-info {\\n  flex: 8;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.task-info > * {\\n  margin-left: 20px;\\n  font-size: 12px;\\n}\\n\\n.task-info > p {\\n  margin: auto;\\n  color: var(--purple);\\n}\\n\\n.badge {\\n  display: flex;\\n  padding: 4px 8px;\\n  border: 1px solid var(--purple);\\n  border-radius: 4px;\\n  color: var(--purple);\\n}\\n\\n.urgent {\\n  background: var(--purple);\\n  color: var(--culture);\\n}\\n\\n.showItem {\\n  display: block;\\n}\\n\\n/* Forms */\\nform {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 24px;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  flex: 1;\\n}\\n\\ninput[type=\\\"text\\\"],\\ninput[type=\\\"date\\\"],\\nselect {\\n  border: none;\\n  border-bottom: 2px solid var(--purple);\\n  margin: 0 24px;\\n}\\n\\ninput[type=\\\"submit\\\"] {\\n  border: none;\\n  border-radius: 12px;\\n  padding: 12px;\\n  color: whitesmoke;\\n  background: #4044c9;\\n}\\n\\ninput[type=\\\"submit\\\"]:hover {\\n  box-shadow: 0 5px 10px #91a9ff;\\n}\\n\\n#tasks input[type=\\\"submit\\\"] {\\n  width: 40px;\\n}\\n\\nnav span {\\n  font-weight: bold;\\n}\\n\\n.done {\\n  text-decoration: line-through;\\n  color: #a0a0a0;\\n}\\n\\n.task-name p {\\n  margin-left: 16px;\\n}\\n\\n/* Icons */\\n\\n.delete,\\n.edit {\\n  cursor: pointer;\\n}\\n\\n/* modal */\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-content {\\n  margin: auto;\\n  padding: 36px;\\n  background-color: var(--culture);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list-js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement),\n/* harmony export */   \"setId\": () => (/* binding */ setId)\n/* harmony export */ });\nfunction createHtmlElement(type, id, arrayClasses, content) {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (arrayClasses) { arrayClasses.forEach((myClass) => element.classList.add(myClass)); }\n\n  if (content) element.innerText = content;\n\n  return element;\n}\n\nfunction setId() {\n  return Math.random().toString().split('.').join('');\n}\n\n\n\n//# sourceURL=webpack://todo-list-js/./src/domElements.js?");

/***/ }),

/***/ "./src/getTask.js":
/*!************************!*\
  !*** ./src/getTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n/* harmony import */ var _myProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProject */ \"./src/myProject.js\");\n\n\n\nconst $project = document.querySelector('#task-container');\n\nclass Task {\n  constructor(title, description, dueDate, priority, status) {\n    this.title = title;\n    this.description = description;\n    this.date = dueDate;\n    this.priority = priority;\n    this.status = status;\n  }\n\n  render() {\n    const $div = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', this.id, ['task'], null);\n\n    const $divTaskName = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['task-name'], null);\n    const $divTaskDescription = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['task-descrption'], null);\n    const $checkbox = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('input', null, ['checkbox'], null);\n    $checkbox.type = 'checkbox';\n\n    const $p = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, this.title);\n    const $pi = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, this.description);\n\n    const $divTaskInfo = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['task-info'], null);\n    const $date = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, this.date);\n    const $badge = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['badge'], this.priority);\n    const $delete = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', null, ['delete'], null);\n    $delete.src = './img/delete.svg';\n    const $edit = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', null, ['edit'], null);\n    $edit.src = './img/edit.svg';\n    $edit.addEventListener('click', () => {\n      this.edit();\n    });\n\n    $divTaskName.appendChild($checkbox);\n    $divTaskName.appendChild($p);\n\n    $divTaskDescription.appendChild($checkbox);\n    $divTaskDescription.appendChild($pi);\n\n    $divTaskInfo.appendChild($date);\n    $divTaskInfo.appendChild($badge);\n    $divTaskInfo.appendChild($delete);\n    $divTaskInfo.appendChild($edit);\n\n    $div.appendChild($divTaskName);\n    $div.appendChild($divTaskDescription);\n    $div.appendChild($divTaskInfo);\n\n    $project.appendChild($div);\n    $checkbox.addEventListener('change', () => {\n      $p.classList.toggle('done');\n    });\n    $project.appendChild($div);\n    $checkbox.addEventListener('change', () => {\n      $pi.classList.toggle('done');\n    });\n    if (this.priority === 'urgent') {\n      $badge.classList.add('urgent');\n    }\n\n    $delete.addEventListener('click', () => {\n      this.delete();\n    });\n  }\n\n  delete() {\n    _myProject__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks = _myProject__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks.filter(\n      (task) => task.id !== this.id,\n    );\n    _myProject__WEBPACK_IMPORTED_MODULE_1__.currentProject.renderTasks();\n  }\n\n  edit() {\n    const $modal = document.getElementById('myModal');\n    $modal.style.display = 'flex';\n    const $form = document.getElementById('form-task-edit');\n    $form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const $title = document.getElementById('task-name-edit');\n\n      const $description = document.getElementById('task-description-edit');\n\n      const $date = document.getElementById('task-date-edit');\n\n      const $priority = document.getElementById('task-priority-edit');\n\n      this.title = $title.value;\n      this.description = $description.value;\n      this.date = $date.value;\n      this.priority = $priority.value;\n      $modal.style.display = 'none';\n      _myProject__WEBPACK_IMPORTED_MODULE_1__.currentProject.renderTasks();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo-list-js/./src/getTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _myProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProject */ \"./src/myProject.js\");\n/* harmony import */ var _getTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTask */ \"./src/getTask.js\");\n\n\n\n\nconst $projectForm = document.getElementById('form-project');\nconst feedback = document.querySelector('.feedback');\n\nconst showFeedback = (text, action) => {\n  feedback.classList.add('showItem', `alert-${action}`);\n  feedback.innerHTML = `<p>${text}</p>`;\n\n  setTimeout(() => {\n    feedback.classList.remove('showItem', `alert-${action}`);\n  }, 3000);\n};\n\n$projectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const $title = document.getElementById('project-name');\n  if ($title.value === '') {\n    showFeedback('project title cannot be empty', 'danger');\n    return;\n  }\n  const project = new _myProject__WEBPACK_IMPORTED_MODULE_1__.Project($title.value);\n  _myProject__WEBPACK_IMPORTED_MODULE_1__.projectsArray.push(project);\n  $title.value = '';\n  _myProject__WEBPACK_IMPORTED_MODULE_1__.Project.renderProjects();\n  _myProject__WEBPACK_IMPORTED_MODULE_1__.Project.setCurrentProject(project);\n  const projects = document.querySelectorAll('.project');\n  projects[projects.length - 1].classList.add('active');\n  projects[projects.length - 1].lastChild.src = './img/delete-white.svg';\n});\n\nconst $taskForm = document.getElementById('form-task');\n\n$taskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const $title = document.getElementById('task-name');\n  if ($title.value === '') {\n    showFeedback('task-title cannot be empty', 'danger');\n    return;\n  }\n  const $description = document.getElementById('task-description');\n  if ($description.value === '') {\n    showFeedback('task-description cannot be empty', 'danger');\n    return;\n  }\n  const $date = document.getElementById('task-date');\n  if ($date.value === '') {\n    showFeedback('Please choose a deadline', 'danger');\n    return;\n  }\n  const $priority = document.getElementById('task-priority');\n\n  const task = new _getTask__WEBPACK_IMPORTED_MODULE_2__.default($title.value, $description.value, $date.value, $priority.value);\n  _myProject__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks.push(task);\n  localStorage.setItem('list', JSON.stringify(task));\n  task.render();\n});\n\n_myProject__WEBPACK_IMPORTED_MODULE_1__.Project.renderProjects();\n\n\n//# sourceURL=webpack://todo-list-js/./src/index.js?");

/***/ }),

/***/ "./src/myProject.js":
/*!**************************!*\
  !*** ./src/myProject.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\n\nconst gproject = document.querySelector('#projects .card');\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.id = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.setId)();\n    this.tasks = [];\n  }\n\n  render() {\n    const gdiv = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', this.id, ['project'], null);\n    const gtitle = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, null, this.title);\n    const gdelete = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', null, ['delete'], null);\n    gdelete.src = './img/delete.svg';\n    gdelete.addEventListener('click', () => {\n      this.delete();\n    });\n\n    gdiv.appendChild(gtitle);\n    gdiv.appendChild(gdelete);\n\n    gproject.appendChild(gdiv);\n    gdiv.addEventListener('click', () => {\n      /* eslint-disable no-use-before-define */\n      currentProject = this;\n      currentProject.active = false;\n      this.renderTasks();\n      const projectsClass = document.querySelectorAll('.project');\n      projectsClass.forEach((f) => { f.classList.value = 'project'; });\n      const delButtons = document.querySelectorAll('.delete');\n      delButtons.forEach((button) => { button.src = './img/delete.svg'; });\n      if (!gdiv.classList.value.includes('active')) {\n        gdiv.classList.add('active');\n        gdelete.src = './img/delete-white.svg';\n      }\n    });\n  }\n\n  delete() {\n    projectsArray = projectsArray.filter((project) => project.id !== this.id);\n    Project.renderProjects();\n  }\n\n  renderTasks() {\n    const gtasks = document.querySelector('#task-container');\n    gtasks.innerHTML = '';\n    this.tasks.forEach((task) => task.render());\n  }\n\n  static renderProjects() {\n    gproject.innerHTML = '';\n    projectsArray.forEach((project) => project.render());\n  }\n\n  static setCurrentProject(project) {\n    currentProject = project;\n  }\n\n  addTask(task) {\n    this.tasks.push(task);\n  }\n\n  deleteTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n  }\n}\n\n/* eslint-disable import/no-mutable-exports */\n\nlet projectsArray = [new Project('Test Project')];\nlet currentProject = projectsArray[0];\n\n/* eslint-enable import/no-mutable-exports */\n\n\n\n/* eslint-enable no-use-before-define */\n\n//# sourceURL=webpack://todo-list-js/./src/myProject.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;