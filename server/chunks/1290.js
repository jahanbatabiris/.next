"use strict";
exports.id = 1290;
exports.ids = [1290];
exports.modules = {

/***/ 1290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9033);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2301);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4104);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);







class ProfileTabs extends (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) {
    state = {
        activeIndex: 0
    };
    handleChange = (_, activeIndex)=>this.setState({
            activeIndex
        });
    render() {
        const { activeIndex  } = this.state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                display: "flex"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VerticalTabs, {
                    value: activeIndex,
                    onChange: this.handleChange,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            style: {
                                color: "red !important"
                            },
                            children: "hi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            label: "item two"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            label: "item three"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item one"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item two"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item three"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item one"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item two"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTab, {
                            label: "item three"
                        })
                    ]
                }),
                activeIndex === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContainer, {
                    children: "Item One"
                }),
                activeIndex === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContainer, {
                    children: "Item Two"
                }),
                activeIndex === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContainer, {
                    children: "Item Three"
                })
            ]
        });
    }
}
const VerticalTabs = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)((theme)=>({
        flexContainer: {
            flexDirection: "column"
        },
        indicator: {
            display: "none"
        }
    }))((_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default()));
const MyTab = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)((theme)=>({
        root: {
            backgroundColor: "#ccc"
        },
        wrapper: {
            padding: theme.spacing(2)
        },
        selected: {
            color: "tomato",
            borderLeft: "2px solid tomato"
        },
        flexContainer: {
            flexDirection: "column"
        }
    }))((_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default()));
function TabContainer(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
        component: "div",
        style: {
            padding: 24
        },
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileTabs);


/***/ })

};
;