module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/articles/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/article.js":
/*!***************************!*\
  !*** ./models/article.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/* PetSchema will correspond to a collection in your MongoDB database. */\n\nconst ArticleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n  created_at: {\n    type: Date,\n    default: Date.now\n  },\n  updated_at: {\n    type: Date,\n    default: Date.now\n  },\n  author: {\n    type: String\n  },\n  date: {\n    type: String\n  },\n  title: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  image: {\n    type: String\n  },\n  content: {\n    type: []\n  },\n  tags: {\n    type: []\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Article || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Article\", ArticleSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvYXJ0aWNsZS5qcz85YmIwIl0sIm5hbWVzIjpbIkFydGljbGVTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImlkIiwiVHlwZXMiLCJPYmplY3RJZCIsImNyZWF0ZWRfYXQiLCJ0eXBlIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJ1cGRhdGVkX2F0IiwiYXV0aG9yIiwiU3RyaW5nIiwiZGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImNvbnRlbnQiLCJ0YWdzIiwibW9kZWxzIiwiQXJ0aWNsZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUNBLE1BQU1BLGFBQWEsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFiLENBQW9CO0FBQ3hDQyxJQUFFLEVBQUVGLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JFLEtBQWhCLENBQXNCQyxRQURjO0FBR3hDQyxZQUFVLEVBQUU7QUFBRUMsUUFBSSxFQUFFQyxJQUFSO0FBQWNDLFdBQU8sRUFBRUQsSUFBSSxDQUFDRTtBQUE1QixHQUg0QjtBQUl4Q0MsWUFBVSxFQUFFO0FBQUVKLFFBQUksRUFBRUMsSUFBUjtBQUFjQyxXQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBNUIsR0FKNEI7QUFNeENFLFFBQU0sRUFBRTtBQUFFTCxRQUFJLEVBQUVNO0FBQVIsR0FOZ0M7QUFPeENDLE1BQUksRUFBRTtBQUFFUCxRQUFJLEVBQUVNO0FBQVIsR0FQa0M7QUFReENFLE9BQUssRUFBRTtBQUFFUixRQUFJLEVBQUVNO0FBQVIsR0FSaUM7QUFTeENHLGFBQVcsRUFBRTtBQUFFVCxRQUFJLEVBQUVNO0FBQVIsR0FUMkI7QUFVeENJLE9BQUssRUFBRTtBQUFFVixRQUFJLEVBQUVNO0FBQVIsR0FWaUM7QUFXeENLLFNBQU8sRUFBRTtBQUFFWCxRQUFJLEVBQUU7QUFBUixHQVgrQjtBQVl4Q1ksTUFBSSxFQUFFO0FBQUVaLFFBQUksRUFBRTtBQUFSO0FBWmtDLENBQXBCLENBQXRCO0FBZWVOLDhHQUFRLENBQUNtQixNQUFULENBQWdCQyxPQUFoQixJQUNicEIsK0NBQVEsQ0FBQ3FCLEtBQVQsQ0FBZSxTQUFmLEVBQTBCdEIsYUFBMUIsQ0FERiIsImZpbGUiOiIuL21vZGVscy9hcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG4vKiBQZXRTY2hlbWEgd2lsbCBjb3JyZXNwb25kIHRvIGEgY29sbGVjdGlvbiBpbiB5b3VyIE1vbmdvREIgZGF0YWJhc2UuICovXG5jb25zdCBBcnRpY2xlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGlkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG5cbiAgY3JlYXRlZF9hdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxuICB1cGRhdGVkX2F0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG5cbiAgYXV0aG9yOiB7IHR5cGU6IFN0cmluZyB9LFxuICBkYXRlOiB7IHR5cGU6IFN0cmluZyB9LFxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nIH0sXG4gIGltYWdlOiB7IHR5cGU6IFN0cmluZyB9LFxuICBjb250ZW50OiB7IHR5cGU6IFtdIH0sXG4gIHRhZ3M6IHsgdHlwZTogW10gfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuQXJ0aWNsZSB8fFxuICBtb25nb29zZS5tb2RlbChcIkFydGljbGVcIiwgQXJ0aWNsZVNjaGVtYSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/article.js\n");

/***/ }),

/***/ "./pages/api/articles/index.js":
/*!*************************************!*\
  !*** ./pages/api/articles/index.js ***!
  \*************************************/
/*! exports provided: getArticles, createArticle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getArticles\", function() { return getArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArticle\", function() { return createArticle; });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/article */ \"./models/article.js\");\n\n\nconst getArticles = async () => {\n  const articles = await _models_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n  return articles;\n};\nconst createArticle = async () => {\n  const article = await new _models_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    title: \"New Article\",\n    author: \"Julia New-Author\",\n    date: \"July 20, 2065\",\n    description: \"This is a new article, read it an you will have read a new article\",\n    image: \"https://cdn.dribbble.com/users/2893989/screenshots/14113447/media/0e7f1e1af0b9354f272dee113bef150e.png\",\n    tags: [\"Social Justice\", \"Equality\", \"Journalism\"],\n    content: [{\n      type: \"text\",\n      content: \"Hello, this is a new article\"\n    }]\n  });\n  return article;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method,\n    body\n  } = req;\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  switch (method) {\n    case \"POST\":\n      try {\n        const article = await createArticle();\n        await article.save();\n        res.status(201).json({\n          status: \"success\",\n          data: article\n        });\n      } catch (error) {\n        res.status(500).json({\n          status: \"error\",\n          message: error.message\n        });\n      }\n\n      break;\n\n    case \"GET\":\n      try {\n        const articles = await getArticles();\n        res.status(200).json({\n          status: \"success\",\n          data: articles\n        });\n      } catch (error) {\n        res.status(400).json({\n          status: \"error\",\n          message: error.message\n        });\n      }\n\n      break;\n\n    default:\n      res.status(500).json({\n        status: \"error\",\n        message: \"Default error occured, this is most likey since the request `method` was not handled or unspecified\"\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXJ0aWNsZXMvaW5kZXguanM/ZGNkMCJdLCJuYW1lcyI6WyJnZXRBcnRpY2xlcyIsImFydGljbGVzIiwiQXJ0aWNsZSIsImZpbmQiLCJjcmVhdGVBcnRpY2xlIiwiYXJ0aWNsZSIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwiY29udGVudCIsInR5cGUiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiYm9keSIsImRiQ29ubmVjdCIsInNhdmUiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUcsWUFBWTtBQUNyQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsdURBQU8sQ0FBQ0MsSUFBUixDQUFhLEVBQWIsQ0FBdkI7QUFDQSxTQUFPRixRQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU1HLGFBQWEsR0FBRyxZQUFZO0FBQ3ZDLFFBQU1DLE9BQU8sR0FBRyxNQUFNLElBQUlILHVEQUFKLENBQVk7QUFDaENJLFNBQUssRUFBRSxhQUR5QjtBQUVoQ0MsVUFBTSxFQUFFLGtCQUZ3QjtBQUdoQ0MsUUFBSSxFQUFFLGVBSDBCO0FBSWhDQyxlQUFXLEVBQ1Qsb0VBTDhCO0FBTWhDQyxTQUFLLEVBQ0gsd0dBUDhCO0FBUWhDQyxRQUFJLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixVQUFuQixFQUErQixZQUEvQixDQVIwQjtBQVNoQ0MsV0FBTyxFQUFFLENBQUM7QUFBRUMsVUFBSSxFQUFFLE1BQVI7QUFBZ0JELGFBQU8sRUFBRTtBQUF6QixLQUFEO0FBVHVCLEdBQVosQ0FBdEI7QUFXQSxTQUFPUCxPQUFQO0FBQ0QsQ0FiTTtBQWVRLHNFQUFPUyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRixLQURIO0FBRUpDLFVBRkk7QUFHSkM7QUFISSxNQUlGTCxHQUpKO0FBTUEsUUFBTU0sZ0VBQVMsRUFBZjs7QUFFQSxVQUFRRixNQUFSO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1iLE9BQU8sR0FBRyxNQUFNRCxhQUFhLEVBQW5DO0FBQ0EsY0FBTUMsT0FBTyxDQUFDZ0IsSUFBUixFQUFOO0FBQ0FOLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CRCxnQkFBTSxFQUFFLFNBRFc7QUFFbkJFLGNBQUksRUFBRW5CO0FBRmEsU0FBckI7QUFJRCxPQVBELENBT0UsT0FBT29CLEtBQVAsRUFBYztBQUNkVixXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsZ0JBQU0sRUFBRSxPQURXO0FBRW5CSSxpQkFBTyxFQUFFRCxLQUFLLENBQUNDO0FBRkksU0FBckI7QUFJRDs7QUFDRDs7QUFFRixTQUFLLEtBQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTXpCLFFBQVEsR0FBRyxNQUFNRCxXQUFXLEVBQWxDO0FBQ0FlLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVELGdCQUFNLEVBQUUsU0FBVjtBQUFxQkUsY0FBSSxFQUFFdkI7QUFBM0IsU0FBckI7QUFDRCxPQUhELENBR0UsT0FBT3dCLEtBQVAsRUFBYztBQUNkVixXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxnQkFBTSxFQUFFLE9BQVY7QUFBbUJJLGlCQUFPLEVBQUVELEtBQUssQ0FBQ0M7QUFBbEMsU0FBckI7QUFDRDs7QUFDRDs7QUFFRjtBQUNFWCxTQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsY0FBTSxFQUFFLE9BRFc7QUFFbkJJLGVBQU8sRUFDTDtBQUhpQixPQUFyQjtBQUtBO0FBaENKO0FBa0NELENBM0NEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FydGljbGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0XCI7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2FydGljbGVcIjtcblxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IEFydGljbGUuZmluZCh7fSk7XG4gIHJldHVybiBhcnRpY2xlcztcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcnRpY2xlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgbmV3IEFydGljbGUoe1xuICAgIHRpdGxlOiBcIk5ldyBBcnRpY2xlXCIsXG4gICAgYXV0aG9yOiBcIkp1bGlhIE5ldy1BdXRob3JcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAsIDIwNjVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIG5ldyBhcnRpY2xlLCByZWFkIGl0IGFuIHlvdSB3aWxsIGhhdmUgcmVhZCBhIG5ldyBhcnRpY2xlXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yODkzOTg5L3NjcmVlbnNob3RzLzE0MTEzNDQ3L21lZGlhLzBlN2YxZTFhZjBiOTM1NGYyNzJkZWUxMTNiZWYxNTBlLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlNvY2lhbCBKdXN0aWNlXCIsIFwiRXF1YWxpdHlcIiwgXCJKb3VybmFsaXNtXCJdLFxuICAgIGNvbnRlbnQ6IFt7IHR5cGU6IFwidGV4dFwiLCBjb250ZW50OiBcIkhlbGxvLCB0aGlzIGlzIGEgbmV3IGFydGljbGVcIiB9XSxcbiAgfSk7XG4gIHJldHVybiBhcnRpY2xlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBpZCB9LFxuICAgIG1ldGhvZCxcbiAgICBib2R5LFxuICB9ID0gcmVxO1xuXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCBjcmVhdGVBcnRpY2xlKCk7XG4gICAgICAgIGF3YWl0IGFydGljbGUuc2F2ZSgpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBkYXRhOiBhcnRpY2xlLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBnZXRBcnRpY2xlcygpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJzdWNjZXNzXCIsIGRhdGE6IGFydGljbGVzIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCJEZWZhdWx0IGVycm9yIG9jY3VyZWQsIHRoaXMgaXMgbW9zdCBsaWtleSBzaW5jZSB0aGUgcmVxdWVzdCBgbWV0aG9kYCB3YXMgbm90IGhhbmRsZWQgb3IgdW5zcGVjaWZpZWRcIixcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/articles/index.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* This is a database connection function*/\n\nconst connection = {};\n/* creating connection object*/\n\nasync function dbConnect() {\n  /* check if we have connection to our databse*/\n  if (connection.isConnected) {\n    return;\n  }\n  /* connecting to our database */\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://\" + process.env.MONGODB_USERNAME + \":\" + process.env.MONGODB_PASSWORD + \"@assets.kpfjo.mongodb.net/<dbname>?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  });\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VTRVJOQU1FIiwiTU9OR09EQl9QQVNTV09SRCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsRUFBbkI7QUFBdUI7O0FBRXZCLGVBQWVDLFNBQWYsR0FBMkI7QUFDekI7QUFDQSxNQUFJRCxVQUFVLENBQUNFLFdBQWYsRUFBNEI7QUFDMUI7QUFDRDtBQUVEOzs7QUFDQSxRQUFNQyxFQUFFLEdBQUcsTUFBTUMsK0NBQVEsQ0FBQ0MsT0FBVCxDQUNmLG1CQUNFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRGQsR0FFRSxHQUZGLEdBR0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxnQkFIZCxHQUlFLGdFQUxhLEVBTWY7QUFDRUMsbUJBQWUsRUFBRSxJQURuQjtBQUVFQyxzQkFBa0IsRUFBRSxJQUZ0QjtBQUdFQyxvQkFBZ0IsRUFBRTtBQUhwQixHQU5lLENBQWpCO0FBYUFaLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDVSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDRDs7QUFFY2Isd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGlzIGEgZGF0YWJhc2UgY29ubmVjdGlvbiBmdW5jdGlvbiovXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTsgLyogY3JlYXRpbmcgY29ubmVjdGlvbiBvYmplY3QqL1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIC8qIGNoZWNrIGlmIHdlIGhhdmUgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJzZSovXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogY29ubmVjdGluZyB0byBvdXIgZGF0YWJhc2UgKi9cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9cIiArXG4gICAgICBwcm9jZXNzLmVudi5NT05HT0RCX1VTRVJOQU1FICtcbiAgICAgIFwiOlwiICtcbiAgICAgIHByb2Nlc3MuZW52Lk1PTkdPREJfUEFTU1dPUkQgK1xuICAgICAgXCJAYXNzZXRzLmtwZmpvLm1vbmdvZGIubmV0LzxkYm5hbWU+P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuICAgIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgIH1cbiAgKTtcblxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });