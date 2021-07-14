webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"삭은이\"\n    },\n    content: \"첫번째 게시글 #태그\",\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    } // {\n    //   src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\",\n    // },\n    ],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"nero\"\n      },\n      content: \"우와\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"hero\"\n      },\n      content: \"빨리하고싶다\"\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    case REMOVE_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      {\n        var postIndex = state.mainPosts.findIndex(function (y) {\n          return y.id === action.data.postId;\n        });\n        var post = state.mainPosts[postIndex];\n        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n\n        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        mainPosts[postIndex] = post;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: mainPosts,\n          addCommentLoading: false,\n          addCommentDone: true\n        });\n      }\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInkiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRlI7QUFNRUMsV0FBTyxFQUFFLGFBTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFDRUos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RSxLQUhsQjtBQUlFQyx1QkFBZSxFQUFFO0FBSm5COztBQU1GLFNBQUtRLG1CQUFMO0FBQTBCO0FBQ3hCLFlBQU1ZLFNBQVMsR0FBR0gsS0FBSyxDQUFDcEMsU0FBTixDQUFnQndDLFNBQWhCLENBQ2hCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDeEMsRUFBRixLQUFTb0MsTUFBTSxDQUFDUCxJQUFQLENBQVlZLE1BQTVCO0FBQUEsU0FEZ0IsQ0FBbEI7QUFHQSxZQUFNQyxJQUFJLEdBQUdQLEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0J1QyxTQUFoQixDQUFiO0FBQ0FJLFlBQUksQ0FBQ2xDLFFBQUwsSUFBaUJ5QixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZMUIsT0FBYixDQUE3QixzR0FBdUR1QyxJQUFJLENBQUNsQyxRQUE1RDs7QUFDQSxZQUFNVCxTQUFTLEdBQUcsNkZBQUlvQyxLQUFLLENBQUNwQyxTQUFiLENBQWY7O0FBQ0FBLGlCQUFTLENBQUN1QyxTQUFELENBQVQsR0FBdUJJLElBQXZCO0FBQ0EsK0NBQ0tQLEtBREw7QUFFRXBDLG1CQUFTLEVBQVRBLFNBRkY7QUFHRWlCLDJCQUFpQixFQUFFLEtBSHJCO0FBSUVDLHdCQUFjLEVBQUU7QUFKbEI7QUFNRDs7QUFDRCxTQUFLVSxtQkFBTDtBQUNFLDZDQUNLUSxLQURMO0FBRUVuQix5QkFBaUIsRUFBRSxLQUZyQjtBQUdFRSx1QkFBZSxFQUFFa0IsTUFBTSxDQUFDQztBQUgxQjs7QUFLRjtBQUNFLGFBQU9GLEtBQVA7QUF0RUo7QUF3RUQsQ0F6RUQ7O0FBMkVlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsgq3snYDsnbRcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIAgI+2DnOq3uFwiLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgIHNyYzogXCJodHRwczovL20ubG9uZG9uc2xhY2tzLmNvbS93ZWIvcHJvZHVjdC9iaWcvMjAxOTA3L2VjZTBlYzAzN2NjYzhkNTgwZGFhYTUxNzAxYjkwYjdhLmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9tLmxvbmRvbnNsYWNrcy5jb20vd2ViL3Byb2R1Y3QvYmlnLzIwMTkwNy9lY2UwZWMwMzdjY2M4ZDU4MGRhYWE1MTcwMWI5MGI3YS5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vbS5sb25kb25zbGFja3MuY29tL3dlYi9wcm9kdWN0L2JpZy8yMDE5MDcvZWNlMGVjMDM3Y2NjOGQ1ODBkYWFhNTE3MDFiOTBiN2EuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBzcmM6IFwiaHR0cHM6Ly9tLmxvbmRvbnNsYWNrcy5jb20vd2ViL3Byb2R1Y3QvYmlnLzIwMTkwNy9lY2UwZWMwMzdjY2M4ZDU4MGRhYWE1MTcwMWI5MGI3YS5qcGdcIixcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBDb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbmlja25hbWU6IFwibmVyb1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogXCLsmrDsmYBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi67mo66as7ZWY6rOg7Iu264ukXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgaWQ6IGRhdGEuaWQsXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW10sXG59KTtcblxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gIGNvbnRlbnQ6IGRhdGEsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgfSxcbn0pO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxuICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXG4gICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgICh5KSA9PiB5LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XG4gICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcbiAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHMsXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})