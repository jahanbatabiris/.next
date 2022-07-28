"use strict";
exports.id = 1449;
exports.ids = [1449];
exports.modules = {

/***/ 7594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CntDwn0701)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CountdownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1449);



function CntDwn0701() {
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date("2022-08-01T10:00:00.000Z").getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountdownTimer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            targetDate: dateTimeAfterThreeDays
        })
    });
};


/***/ }),

/***/ 6407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CntDwn2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CountdownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1449);



function CntDwn2() {
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date("2022-07-24T10:00:00.000Z").getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountdownTimer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            targetDate: dateTimeAfterThreeDays
        })
    });
};


/***/ }),

/***/ 2587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CntDwn3)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CountdownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1449);



function CntDwn3() {
    // const THREE_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000-1000000;
    const NOW_IN_MS = new Date("2022-07-31T10:00:00.000Z").getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountdownTimer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            targetDate: dateTimeAfterThreeDays
        })
    });
};


/***/ }),

/***/ 1449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_CountdownTimer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./component/layout/DateTimeDisplay.js


const DateTimeDisplay = ({ value , type , isDanger  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "#1A1525",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none"
        },
        className: isDanger ? "countdown danger" : "countdown",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    color: "white"
                },
                children: value
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    color: "white"
                },
                children: type
            })
        ]
    });
};
/* harmony default export */ const layout_DateTimeDisplay = (DateTimeDisplay);

;// CONCATENATED MODULE: ./component/layout/useCountdown.js

const useCountdown = (targetDate)=>{
    const countDownDate = new Date(targetDate).getTime();
    const { 0: countDown , 1: setCountDown  } = (0,external_react_.useState)(countDownDate - new Date().getTime());
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        countDownDate
    ]);
    return getReturnValues(countDown);
};
const getReturnValues = (countDown)=>{
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(countDown % (1000 * 60) / 1000);
    return [
        days,
        hours,
        minutes,
        seconds
    ];
};


// EXTERNAL MODULE: ./component/layout/CntDwn3.js
var CntDwn3 = __webpack_require__(2587);
// EXTERNAL MODULE: ./component/layout/CntDwn0701.js
var CntDwn0701 = __webpack_require__(7594);
// EXTERNAL MODULE: ./component/layout/CntDwn2.js
var layout_CntDwn2 = __webpack_require__(6407);
;// CONCATENATED MODULE: ./component/layout/CountdownTimer.js







const ExpiredNotice = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "expired-notice",
        children: /*#__PURE__*/ _jsx(CntDwn2, {})
    });
};
const ShowCounter = ({ days , hours , minutes , seconds  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "show-counter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "countdown-link",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(layout_DateTimeDisplay, {
                    value: days,
                    type: "Days",
                    isDanger: days <= 3
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        color: "white"
                    },
                    children: " \xa0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_DateTimeDisplay, {
                    value: hours,
                    type: "Hours",
                    isDanger: false
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        color: "white"
                    },
                    children: " \xa0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_DateTimeDisplay, {
                    value: minutes,
                    type: "Mins",
                    isDanger: false
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        color: "white"
                    },
                    children: " \xa0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_DateTimeDisplay, {
                    value: seconds,
                    type: "Secs",
                    isDanger: false
                })
            ]
        })
    });
};
const CountdownTimer = ({ targetDate  })=>{
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx(layout_CntDwn2/* default */.Z, {});
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(ShowCounter, {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }
};
/* harmony default export */ const layout_CountdownTimer = (CountdownTimer);


/***/ })

};
;