"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/common/form/login/FormContent.jsx":
/*!******************************************************!*\
  !*** ./components/common/form/login/FormContent.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/Api */ \"(app-pages-browser)/./api/Api.js\");\n/* harmony import */ var _components_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/utils/utils */ \"(app-pages-browser)/./components/utils/utils.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//import LoginWithSocial from \"./LoginWithSocial\";\n\n\n\n\nconst FormContent = ()=>{\n    _s();\n    const [alertError, setAlertError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const validate = function() {\n        let field = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"\";\n        let errorsList = errors;\n        // if (field) {\n        //   if (value) {\n        //     if (field === 'phone' && !Utils.isEmpty(user[field])) {\n        //       // if (!Utils.validatePhoneNumber(user[field]))\n        //       //   errorsList = { ...errorsList, phone: 'Invalid Phone Number!' };\n        //     } else {\n        //       delete errorsList[field];\n        //     }\n        //     delete errorsList[field];\n        //   } else if (field !== 'phone')\n        //     errorsList = { ...errorsList, [field]: 'Field is Required!' };\n        // } else {\n        //   Object.keys(user).map((item) => {\n        //     if (item !== 'phone' && item !== 'image') {\n        //       if (!user[item]) {\n        //         errorsList = { ...errorsList, [item]: 'Field is Required!' };\n        //       } else {\n        //         if (item === 'email') {\n        //           if (!Utils.validateEmail(user[item]))\n        //             errorsList = { ...errorsList, email: 'Invalid Email Address!' };\n        //         }\n        //       }\n        //     } else {\n        //       errorsList = { ...errorsList };\n        //       if (item === 'phone' && !Utils.isEmpty(user[item])) {\n        //         if (!Utils.regexCheck(user[item], 'phone'))\n        //           errorsList = {\n        //             ...errorsList,\n        //             phone: 'Invalid Phone Number!',\n        //           };\n        //         else delete errorsList[field];\n        //       }\n        //     }\n        //   });\n        // }\n        setErrors(errorsList);\n        return errorsList;\n    };\n    const handleSubmit = async ()=>{\n        const errorsList = validate();\n        setLoading(true);\n        if (_components_utils_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isEmptyObject(errorsList)) {\n            const response = await _api_Api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].call(user, \"/user/auth/login\", \"post\", \"\");\n            if (response.data.code === \"200\") {\n                var _response_data_data, _response_data;\n                setLoading(false);\n                const userId = (_response_data = response.data) === null || _response_data === void 0 ? void 0 : (_response_data_data = _response_data.data) === null || _response_data_data === void 0 ? void 0 : _response_data_data.accessToken;\n                localStorage.setItem(\"userId\", userId);\n                setAlertError(\"\");\n                navigate.replace(\"/profile\");\n            } else {\n                setLoading(false);\n                setAlertError(response.data.message || \"Something went wrong, please try again!\");\n            }\n        } else {\n            setLoading(false);\n            setAlertError(\"\");\n        }\n    };\n    const handleChange = (value, field)=>{\n        validate(field, value);\n        setUser({\n            ...user,\n            [field]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-inner\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Login to Bonzuttner\"\n            }, void 0, false, {\n                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (event)=>event.preventDefault(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"email\",\n                                placeholder: \"Email\",\n                                required: true,\n                                value: user === null || user === void 0 ? void 0 : user.email,\n                                onChange: (event)=>handleChange(event.target.value, \"email\")\n                            }, void 0, false, {\n                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                placeholder: \"Password\",\n                                required: true,\n                                value: user === null || user === void 0 ? void 0 : user.password,\n                                onChange: (event)=>handleChange(event.target.value, \"password\")\n                            }, void 0, false, {\n                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"field-outer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-group checkboxes square\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        name: \"remember-me\",\n                                        id: \"remember\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"remember\",\n                                        className: \"remember\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"custom-checkbox\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \" Remember me\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"theme-btn btn-style-one\",\n                            onClick: ()=>handleSubmit(),\n                            name: \"log-in\",\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined),\n                    alertError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"alert alert-danger profile-alert\",\n                        role: \"alert\",\n                        children: alertError\n                    }, void 0, false, {\n                        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bottom-box\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text\",\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"#\",\n                            className: \"call-modal signup\",\n                            \"data-bs-toggle\": \"modal\",\n                            \"data-bs-target\": \"#registerModal\",\n                            children: \"Signup\"\n                        }, void 0, false, {\n                            fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/rezk/WORK/My Projects/Next.js/bonCruter/boncruiter-user/components/common/form/login/FormContent.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormContent, \"MS4QE/OmUaHGKaQQmRGqyip3t20=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = FormContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContent);\nvar _c;\n$RefreshReg$(_c, \"FormContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0vbG9naW4vRm9ybUNvbnRlbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDN0Isa0RBQWtEO0FBQ1Y7QUFDRjtBQUNpQjtBQUNYO0FBRTVDLE1BQU1NLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNTyxXQUFXSiwwREFBU0E7SUFDMUIsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO1FBQy9CVSxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUMsQ0FBQztJQUN0QyxNQUFNZ0IsV0FBVztZQUFDQyx5RUFBUSxJQUFJQyx5RUFBUTtRQUNwQyxJQUFJQyxhQUFhTDtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLDhEQUE4RDtRQUM5RCx3REFBd0Q7UUFDeEQsNkVBQTZFO1FBQzdFLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsUUFBUTtRQUNSLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMscUVBQXFFO1FBQ3JFLFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsa0RBQWtEO1FBQ2xELDJCQUEyQjtRQUMzQix3RUFBd0U7UUFDeEUsaUJBQWlCO1FBQ2pCLGtDQUFrQztRQUNsQyxrREFBa0Q7UUFDbEQsK0VBQStFO1FBQy9FLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLHdDQUF3QztRQUV4Qyw4REFBOEQ7UUFDOUQsc0RBQXNEO1FBQ3RELDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsOENBQThDO1FBQzlDLGVBQWU7UUFDZix5Q0FBeUM7UUFDekMsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBQ1IsSUFBSTtRQUNKQyxVQUFVSTtRQUNWLE9BQU9BO0lBQ1Q7SUFDQSxNQUFNQyxlQUFlO1FBQ25CLE1BQU1ELGFBQWFIO1FBQ25CSCxXQUFXO1FBQ1gsSUFBSVgsK0RBQUtBLENBQUNtQixhQUFhLENBQUNGLGFBQWE7WUFDbkMsTUFBTUcsV0FBVyxNQUFNckIsZ0RBQUdBLENBQUNzQixJQUFJLENBQUNmLE1BQU8sb0JBQW1CLFFBQVE7WUFDbEUsSUFBSWMsU0FBU0UsSUFBSSxDQUFDQyxJQUFJLEtBQUssT0FBTztvQkFFakJILHFCQUFBQTtnQkFEZlQsV0FBVztnQkFDWCxNQUFNYSxVQUFTSixpQkFBQUEsU0FBU0UsSUFBSSxjQUFiRixzQ0FBQUEsc0JBQUFBLGVBQWVFLElBQUksY0FBbkJGLDBDQUFBQSxvQkFBcUJLLFdBQVc7Z0JBQy9DQyxhQUFhQyxPQUFPLENBQUMsVUFBVUg7Z0JBQy9CcEIsY0FBYztnQkFDZEMsU0FBU3VCLE9BQU8sQ0FBQztZQUNuQixPQUFPO2dCQUNMakIsV0FBVztnQkFDWFAsY0FDRWdCLFNBQVNFLElBQUksQ0FBQ08sT0FBTyxJQUFJO1lBRTdCO1FBQ0YsT0FBTztZQUNMbEIsV0FBVztZQUNYUCxjQUFjO1FBQ2hCO0lBQ0Y7SUFDQSxNQUFNMEIsZUFBZSxDQUFDZCxPQUFPRDtRQUMzQkQsU0FBU0MsT0FBT0M7UUFDaEJULFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ1MsTUFBTSxFQUFFQztRQUFNO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUdKLDhEQUFDQztnQkFBS0MsVUFBVSxDQUFDQyxRQUFVQSxNQUFNQyxjQUFjOztrQ0FDN0MsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ007MENBQU07Ozs7OzswQ0FDUCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLFFBQVE7Z0NBQ1IzQixLQUFLLEVBQUVWLGlCQUFBQSwyQkFBQUEsS0FBTUUsS0FBSztnQ0FDbEJvQyxVQUFVLENBQUNSLFFBQVVOLGFBQWFNLE1BQU1TLE1BQU0sQ0FBQzdCLEtBQUssRUFBRTs7Ozs7Ozs7Ozs7O2tDQUsxRCw4REFBQ2U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTTswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsUUFBUTtnQ0FDUjNCLEtBQUssRUFBRVYsaUJBQUFBLDJCQUFBQSxLQUFNRyxRQUFRO2dDQUNyQm1DLFVBQVUsQ0FBQ1IsUUFBVU4sYUFBYU0sTUFBTVMsTUFBTSxDQUFDN0IsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7a0NBSzFELDhEQUFDZTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087d0NBQU1DLE1BQUs7d0NBQVdDLE1BQUs7d0NBQWNLLElBQUc7Ozs7OztrREFDN0MsOERBQUNSO3dDQUFNUyxTQUFRO3dDQUFXZixXQUFVOzswREFDbEMsOERBQUNnQjtnREFBS2hCLFdBQVU7Ozs7Ozs0Q0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVVqRCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNpQjs0QkFDQ2pCLFdBQVU7NEJBQ1ZrQixTQUFTLElBQU1oQzs0QkFDZnVCLE1BQUs7c0NBQ047Ozs7Ozs7Ozs7O29CQUtGdEMsNEJBQ0MsOERBQUM0Qjt3QkFBSW9CLE9BQU07d0JBQW1DQyxNQUFLO2tDQUNoRGpEOzs7Ozs7Ozs7Ozs7MEJBTVAsOERBQUM0QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUFPO3dCQUNRO3NDQUM1Qiw4REFBQ3BDLGlEQUFJQTs0QkFDSHlELE1BQUs7NEJBQ0xyQixXQUFVOzRCQUNWc0Isa0JBQWU7NEJBQ2ZDLGtCQUFlO3NDQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjWDtHQW5LTXJEOztRQUVhRCxzREFBU0E7OztLQUZ0QkM7QUFxS04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vZm9ybS9sb2dpbi9Gb3JtQ29udGVudC5qc3g/Mjg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy9pbXBvcnQgTG9naW5XaXRoU29jaWFsIGZyb20gXCIuL0xvZ2luV2l0aFNvY2lhbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvQXBpJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmNvbnN0IEZvcm1Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBbYWxlcnRFcnJvciwgc2V0QWxlcnRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCB2YWxpZGF0ZSA9IChmaWVsZCA9ICcnLCB2YWx1ZSA9ICcnKSA9PiB7XG4gICAgbGV0IGVycm9yc0xpc3QgPSBlcnJvcnM7XG4gICAgLy8gaWYgKGZpZWxkKSB7XG4gICAgLy8gICBpZiAodmFsdWUpIHtcbiAgICAvLyAgICAgaWYgKGZpZWxkID09PSAncGhvbmUnICYmICFVdGlscy5pc0VtcHR5KHVzZXJbZmllbGRdKSkge1xuICAgIC8vICAgICAgIC8vIGlmICghVXRpbHMudmFsaWRhdGVQaG9uZU51bWJlcih1c2VyW2ZpZWxkXSkpXG4gICAgLy8gICAgICAgLy8gICBlcnJvcnNMaXN0ID0geyAuLi5lcnJvcnNMaXN0LCBwaG9uZTogJ0ludmFsaWQgUGhvbmUgTnVtYmVyIScgfTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBkZWxldGUgZXJyb3JzTGlzdFtmaWVsZF07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZGVsZXRlIGVycm9yc0xpc3RbZmllbGRdO1xuICAgIC8vICAgfSBlbHNlIGlmIChmaWVsZCAhPT0gJ3Bob25lJylcbiAgICAvLyAgICAgZXJyb3JzTGlzdCA9IHsgLi4uZXJyb3JzTGlzdCwgW2ZpZWxkXTogJ0ZpZWxkIGlzIFJlcXVpcmVkIScgfTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgT2JqZWN0LmtleXModXNlcikubWFwKChpdGVtKSA9PiB7XG4gICAgLy8gICAgIGlmIChpdGVtICE9PSAncGhvbmUnICYmIGl0ZW0gIT09ICdpbWFnZScpIHtcbiAgICAvLyAgICAgICBpZiAoIXVzZXJbaXRlbV0pIHtcbiAgICAvLyAgICAgICAgIGVycm9yc0xpc3QgPSB7IC4uLmVycm9yc0xpc3QsIFtpdGVtXTogJ0ZpZWxkIGlzIFJlcXVpcmVkIScgfTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgaWYgKGl0ZW0gPT09ICdlbWFpbCcpIHtcbiAgICAvLyAgICAgICAgICAgaWYgKCFVdGlscy52YWxpZGF0ZUVtYWlsKHVzZXJbaXRlbV0pKVxuICAgIC8vICAgICAgICAgICAgIGVycm9yc0xpc3QgPSB7IC4uLmVycm9yc0xpc3QsIGVtYWlsOiAnSW52YWxpZCBFbWFpbCBBZGRyZXNzIScgfTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgZXJyb3JzTGlzdCA9IHsgLi4uZXJyb3JzTGlzdCB9O1xuXG4gICAgLy8gICAgICAgaWYgKGl0ZW0gPT09ICdwaG9uZScgJiYgIVV0aWxzLmlzRW1wdHkodXNlcltpdGVtXSkpIHtcbiAgICAvLyAgICAgICAgIGlmICghVXRpbHMucmVnZXhDaGVjayh1c2VyW2l0ZW1dLCAncGhvbmUnKSlcbiAgICAvLyAgICAgICAgICAgZXJyb3JzTGlzdCA9IHtcbiAgICAvLyAgICAgICAgICAgICAuLi5lcnJvcnNMaXN0LFxuICAgIC8vICAgICAgICAgICAgIHBob25lOiAnSW52YWxpZCBQaG9uZSBOdW1iZXIhJyxcbiAgICAvLyAgICAgICAgICAgfTtcbiAgICAvLyAgICAgICAgIGVsc2UgZGVsZXRlIGVycm9yc0xpc3RbZmllbGRdO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICAgIHNldEVycm9ycyhlcnJvcnNMaXN0KTtcbiAgICByZXR1cm4gZXJyb3JzTGlzdDtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yc0xpc3QgPSB2YWxpZGF0ZSgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgaWYgKFV0aWxzLmlzRW1wdHlPYmplY3QoZXJyb3JzTGlzdCkpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmNhbGwodXNlciwgYC91c2VyL2F1dGgvbG9naW5gLCAncG9zdCcsICcnKTtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCB1c2VySWQgPSByZXNwb25zZS5kYXRhPy5kYXRhPy5hY2Nlc3NUb2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXJJZCk7XG4gICAgICAgIHNldEFsZXJ0RXJyb3IoJycpO1xuICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKCcvcHJvZmlsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEFsZXJ0RXJyb3IoXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0QWxlcnRFcnJvcignJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsIGZpZWxkKSA9PiB7XG4gICAgdmFsaWRhdGUoZmllbGQsIHZhbHVlKTtcbiAgICBzZXRVc2VyKHsgLi4udXNlciwgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubmVyXCI+XG4gICAgICA8aDM+TG9naW4gdG8gQm9uenV0dG5lcjwvaDM+XG5cbiAgICAgIHsvKiA8IS0tTG9naW4gRm9ybS0tPiAqL31cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB2YWx1ZT17dXNlcj8uZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCAnZW1haWwnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG5hbWUgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgdmFsdWU9e3VzZXI/LnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBwYXNzd29yZCAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW91dGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGNoZWNrYm94ZXMgc3F1YXJlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVtZW1iZXItbWVcIiBpZD1cInJlbWVtYmVyXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlclwiIGNsYXNzTmFtZT1cInJlbWVtYmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VzdG9tLWNoZWNrYm94XCI+PC9zcGFuPiBSZW1lbWJlciBtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwd2RcIj5cbiAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBmb3Jnb3QgcGFzc3dvcmQgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtYnRuIGJ0bi1zdHlsZS1vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XG4gICAgICAgICAgICBuYW1lPVwibG9nLWluXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBsb2dpbiAqL31cbiAgICAgICAge2FsZXJ0RXJyb3IgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgcHJvZmlsZS1hbGVydFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAge2FsZXJ0RXJyb3J9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICAgICB7LyogRW5kIGZvcm0gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxsLW1vZGFsIHNpZ251cFwiXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3JlZ2lzdGVyTW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgICAgICAgIDxzcGFuPm9yPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TG9naW5XaXRoU29jaWFsIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogRW5kIGJvdHRvbS1ib3ggTG9naW5XaXRoU29jaWFsICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRlbnQ7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJBcGkiLCJVdGlscyIsInVzZVJvdXRlciIsIkZvcm1Db250ZW50IiwiYWxlcnRFcnJvciIsInNldEFsZXJ0RXJyb3IiLCJuYXZpZ2F0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidmFsaWRhdGUiLCJmaWVsZCIsInZhbHVlIiwiZXJyb3JzTGlzdCIsImhhbmRsZVN1Ym1pdCIsImlzRW1wdHlPYmplY3QiLCJyZXNwb25zZSIsImNhbGwiLCJkYXRhIiwiY29kZSIsInVzZXJJZCIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlcGxhY2UiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaWQiLCJodG1sRm9yIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzcyIsInJvbGUiLCJocmVmIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/common/form/login/FormContent.jsx\n"));

/***/ })

});