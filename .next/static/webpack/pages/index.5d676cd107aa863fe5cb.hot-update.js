webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"삭은이\"\n    },\n    content: \"첫번째 게시글 #태그\",\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\"\n    } // {\n    //   src: \"https://m.londonslacks.com/web/product/big/201907/ece0ec037ccc8d580daaa51701b90b7a.jpg\",\n    // },\n    ],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: \"nero\"\n      },\n      content: \"우와\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: \"hero\"\n      },\n      content: \"빨리하고싶다\"\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\ninitialState.mainPosts.concat(Array(28).fill().map(function (v, i) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    User: {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n    },\n    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),\n    Images: [{\n      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()\n    }],\n    Comments: []\n  };\n}));\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, function (draft) {\n    switch (action.type) {\n      case ADD_POST_REQUEST:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.addPostError = null;\n        break;\n\n      case ADD_POST_SUCCESS:\n        draft.addPostLoading = false;\n        draft.addPostDone = true;\n        draft.mainPosts.unshift(dummyPost(action.data));\n        break;\n\n      case ADD_POST_FAILURE:\n        draft.addPostLoading = false;\n        draft.addPostError = action.error;\n        break;\n\n      case REMOVE_POST_REQUEST:\n        draft.removePostLoading = true;\n        draft.removePostDone = false;\n        draft.removePostError = null;\n        break;\n\n      case REMOVE_POST_SUCCESS:\n        draft.mainPosts = draft.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        });\n        draft.removePostLoading = false;\n        draft.removePostDone = true;\n        break;\n\n      case REMOVE_POST_FAILURE:\n        draft.removePostLoading = false;\n        draft.removePostError = action.error;\n        break;\n\n      case ADD_COMMENT_REQUEST:\n        draft.addCommentLoading = true;\n        draft.addCommentDone = false;\n        draft.addCommentError = null;\n        break;\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          var post = draft.mainPosts.find(function (v) {\n            return v.id === action.data.postId;\n          });\n          post.Comments.unshift(dummyComment(action.data.content));\n          draft.addCommentLoading = false;\n          draft.addCommentDone = true;\n          break; // const postIndex = state.mainPosts.findIndex(\n          //   (y) => y.id === action.data.postId\n          // );\n          // const post = state.mainPosts[postIndex];\n          // post.Comments = [dummyComment(action.data.content), ...post.Comments];\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = post;\n          // return {\n          //   ...state,\n          //   mainPosts,\n          //   addCommentLoading: false,\n          //   addCommentDone: true,\n          // };\n        }\n\n      case ADD_COMMENT_FAILURE:\n        draft.addCommentLoading = false;\n        draft.addCommentError = action.error;\n        break;\n\n      default:\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImNvbmNhdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInYiLCJpIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwiaW1hZ2VVcmwiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFDakMsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNGLFdBQUtxQixtQkFBTDtBQUEwQjtBQUN4QixjQUFNZ0IsSUFBSSxHQUFHSixLQUFLLENBQUNwRCxTQUFOLENBQWdCeUQsSUFBaEIsQ0FBcUIsVUFBQ2pDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDdkIsRUFBRixLQUFTaUQsTUFBTSxDQUFDUCxJQUFQLENBQVllLE1BQTVCO0FBQUEsV0FBckIsQ0FBYjtBQUNBRixjQUFJLENBQUMvQyxRQUFMLENBQWM0QyxPQUFkLENBQXNCTixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZdkMsT0FBYixDQUFsQztBQUNBZ0QsZUFBSyxDQUFDbkMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQW1DLGVBQUssQ0FBQ2xDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQSxnQkFMd0IsQ0FNeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFDRCxXQUFLdUIsbUJBQUw7QUFDRVcsYUFBSyxDQUFDbkMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQW1DLGFBQUssQ0FBQ2pDLGVBQU4sR0FBd0IrQixNQUFNLENBQUNJLEtBQS9CO0FBQ0E7O0FBRUY7QUFDRTtBQTlESjtBQWdFRCxHQWpFYSxDQUFkO0FBa0VELENBbkVEOztBQXFFZU4sc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IGZha2VyLCB7IGZha2UgfSBmcm9tIFwiZmFrZXJcIjtcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi7IKt7J2A7J20XCIsXG4gICAgICB9LFxuICAgICAgY29udGVudDogXCLssqvrsojsp7gg6rKM7Iuc6riAICPtg5zqt7hcIixcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9tLmxvbmRvbnNsYWNrcy5jb20vd2ViL3Byb2R1Y3QvYmlnLzIwMTkwNy9lY2UwZWMwMzdjY2M4ZDU4MGRhYWE1MTcwMWI5MGI3YS5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vbS5sb25kb25zbGFja3MuY29tL3dlYi9wcm9kdWN0L2JpZy8yMDE5MDcvZWNlMGVjMDM3Y2NjOGQ1ODBkYWFhNTE3MDFiOTBiN2EuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgIHNyYzogXCJodHRwczovL20ubG9uZG9uc2xhY2tzLmNvbS93ZWIvcHJvZHVjdC9iaWcvMjAxOTA3L2VjZTBlYzAzN2NjYzhkNTgwZGFhYTUxNzAxYjkwYjdhLmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgc3JjOiBcImh0dHBzOi8vbS5sb25kb25zbGFja3MuY29tL3dlYi9wcm9kdWN0L2JpZy8yMDE5MDcvZWNlMGVjMDM3Y2NjOGQ1ODBkYWFhNTE3MDFiOTBiN2EuanBnXCIsXG4gICAgICAgIC8vIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Jqw7JmAXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJoZXJvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIuu5qOumrO2VmOqzoOyLtuuLpFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbn07XG5cbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxuICBBcnJheSgyOClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgodiwgaSkgPT4gKHtcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7c3JjOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpfVxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXSxcbiAgICB9KSkpO1xuXG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBkYXRhLmlkLFxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICBjb250ZW50OiBkYXRhLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXG4gIH0sXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgIC8vICAgKHkpID0+IHkuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gICBtYWluUG9zdHMsXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxuICAgICAgICAvLyB9O1xuICAgICAgfVxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})