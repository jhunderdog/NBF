webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);\n\n\n\n\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/api/post\", data);\n}\n\nfunction addCommentAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/api/post/${data.postId}/comment\", data);\n}\n\nfunction addPost(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_SUCCESS\"],\n            data: action.data //   data: result.data,\n\n          });\n\n        case 5:\n          _context.next = 11;\n          break;\n\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_FAILURE\"],\n            data: _context.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 7]]);\n}\n\nfunction addComment(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context2.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_SUCCESS\"],\n            data: action.data\n          });\n\n        case 5:\n          _context2.next = 11;\n          break;\n\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_FAILURE\"],\n            data: _context2.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 7]]);\n}\n\nfunction watchAddPost() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_REQUEST\"], addPost);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchAddComment() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_REQUEST\"], addComment);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction postSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddComment)]);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcz8zYWJhIl0sIm5hbWVzIjpbImFkZFBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwicG9zdFNhZ2EiLCJhZGRQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImFkZENvbW1lbnRBUEkiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tHQWtCVUEsTzttR0FpQkFDLFU7bUdBZ0JBQyxZO21HQUlBQyxlO21HQUdlQyxROztBQTFEekI7QUFDQTtBQUNBOztBQVFBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0csYUFBVCxDQUF1QkgsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGtDQUFYLEVBQStDRixJQUEvQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBVU4sT0FBVixDQUFrQlUsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSSxpQkFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBRko7QUFBQTtBQUlJLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVDLCtEQURFO0FBRVJSLGdCQUFJLEVBQUVJLE1BQU0sQ0FBQ0osSUFGTCxDQUdSOztBQUhRLFdBQUQsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVSSxpQkFBTU0sOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFRSwrREFERTtBQUVSVCxnQkFBSSxFQUFFLFlBQUlVLFFBQUosQ0FBYVY7QUFGWCxXQUFELENBQVQ7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVVMLFVBQVYsQ0FBcUJTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUksaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUZKO0FBQUE7QUFJSSxpQkFBTUMsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFSSxrRUFERTtBQUVSWCxnQkFBSSxFQUFFSSxNQUFNLENBQUNKO0FBRkwsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNTSw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVLLGtFQURFO0FBRVJaLGdCQUFJLEVBQUUsYUFBSVUsUUFBSixDQUFhVjtBQUZYLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQkEsU0FBVUosWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTWlCLHFFQUFVLENBQUNDLCtEQUFELEVBQW1CcEIsT0FBbkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUcsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTWdCLHFFQUFVLENBQUNFLGtFQUFELEVBQXNCcEIsVUFBdEIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR2UsU0FBVUcsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTWtCLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ3JCLFlBQUQsQ0FBTCxFQUFxQnFCLCtEQUFJLENBQUNwQixlQUFELENBQXpCLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgZGVsYXksIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9GQUlMVVJFLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgIC8vICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ })

})