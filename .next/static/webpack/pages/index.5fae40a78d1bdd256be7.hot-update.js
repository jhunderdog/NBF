webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Postimages.js":
/*!**********************************!*\
  !*** ./components/Postimages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/vegabond/nodebird/prepare/front/components/Postimages.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  _s();\n\n  var images = _ref.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showImagesZoom = _useState[0],\n      setShowImagesZoom = _useState[1];\n\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowImagesZoom(true);\n  }, []);\n\n  if (images.length === 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        src: images[0].src,\n        alt: images[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  }\n\n  if (images.length === 2) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        style: {\n          width: \"50%\",\n          display: \"inline-block\"\n        },\n        src: images[0].src,\n        alt: images[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        style: {\n          width: \"50%\",\n          display: \"inline-block\"\n        },\n        src: images[1].src,\n        alt: images[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), \" \"]\n    }, void 0, true);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        width: \"50%\",\n        src: images[0].src,\n        alt: images[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        role: \"presentation\",\n        style: {\n          display: \"inline-block\",\n          width: \"50%\",\n          textAlign: \"center\",\n          verticalAlign: \"middle\"\n        },\n        onClick: onZoom,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PlusOutlined\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), images.length - 1, \"\\uAC1C\\uC758 \\uC0AC\\uC9C4 \\uB354\\uBCF4\\uAE30\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(PostImages, \"UE9uMxceBgwv4jfRR4p3tn5mPaU=\");\n\n_c = PostImages;\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostImages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0aW1hZ2VzLmpzPzMwZWYiXSwibmFtZXMiOlsiUG9zdEltYWdlcyIsImltYWdlcyIsInVzZVN0YXRlIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwic3JjIiwid2lkdGgiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUNqQyxrQkFBNENDLHNEQUFRLENBQUMsS0FBRCxDQUFwRDtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CRixxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGeUIsRUFFdkIsRUFGdUIsQ0FBMUI7O0FBR0EsTUFBSUgsTUFBTSxDQUFDTSxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHdCQUNFO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLFdBQUcsRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUZqQjtBQUdFLFdBQUcsRUFBRVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUhqQjtBQUlFLGVBQU8sRUFBRUg7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFVRDs7QUFFRCxNQUFJSixNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsd0JBQ0U7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVFLGVBQUssRUFBRSxLQUFUO0FBQWdCQyxpQkFBTyxFQUFFO0FBQXpCLFNBRlQ7QUFHRSxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FIakI7QUFJRSxXQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FKakI7QUFLRSxlQUFPLEVBQUVIO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRTtBQUFFSSxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQU8sRUFBRTtBQUF6QixTQUZUO0FBR0UsV0FBRyxFQUFFVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBSGpCO0FBSUUsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBSmpCO0FBS0UsZUFBTyxFQUFFSDtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQWNLLEdBZEw7QUFBQSxvQkFERjtBQWtCRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBQyxLQUZSO0FBR0UsV0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBSGpCO0FBSUUsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBSmpCO0FBS0UsZUFBTyxFQUFFSDtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFLLEVBQUU7QUFDTEssaUJBQU8sRUFBRSxjQURKO0FBRUxELGVBQUssRUFBRSxLQUZGO0FBR0xFLG1CQUFTLEVBQUUsUUFITjtBQUlMQyx1QkFBYSxFQUFFO0FBSlYsU0FGVDtBQVFFLGVBQU8sRUFBRVAsTUFSWDtBQUFBLGdDQVVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLEVBWUdKLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQVpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRCRCxDQWxFRDs7R0FBTVAsVTs7S0FBQUEsVTtBQW9FTkEsVUFBVSxDQUFDYSxTQUFYLEdBQXVCO0FBQ3JCWixRQUFNLEVBQUVhLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRGEsQ0FBdkI7QUFJZWhCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0aW1hZ2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcbiAgfSwgW10pO1xuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fVxuICAgICAgICAgIHNyYz17aW1hZ2VzWzFdLnNyY31cbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICA+XG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Postimages.js\n");

/***/ })

})