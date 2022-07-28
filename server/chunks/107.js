"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 5389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CntDwnLucBuzz)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CountdownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1449);



function CntDwnLucBuzz() {
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date("2022-08-01T00:00:00.000Z").getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountdownTimer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            targetDate: dateTimeAfterThreeDays
        })
    });
};


/***/ }),

/***/ 107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_element_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2958);
/* harmony import */ var _component_element_TimelinePool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7129);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_layout_CntDwnLucBuzz__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _component_element_Footer__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _component_element_Footer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)((theme)=>({
        root: {
            backgroundColor: "#0C0617",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        root2: {
            width: "90%"
        },
        back1: {
            marginTop: "100px",
            backgroundImage: 'url("/img/aboutus/about us_box.png")',
            width: "250px",
            height: "270px",
            backgroundSize: "100% 100%",
            padding: "10px 26px 10px 26px",
            position: "relative",
            margin: "30px"
        },
        back2b2e: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        back2b2ediv: {
            marginTop: "100px",
            backgroundImage: 'url("/img/aboutus/about us_box.png")',
            width: "100%",
            height: "auto",
            backgroundSize: "100% 100%",
            paddingBottom: "80px",
            paddingTop: "30px"
        },
        stskingsectn3: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        stskingsectn33: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            [theme.breakpoints.down("675")]: {
                marginLeft: "1px !important",
                display: "block"
            }
        },
        stskingsectn5: {
            width: "90%",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        poolroot: {
            backgroundColor: "#231E2D",
            borderRadius: "17px",
            padding: "5% 26px 5% 26px"
        },
        LucBuzzcnt: {
            width: "90%",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }
    }));
function LucBuzz() {
    const classes = useStyles();
    const { 0: dataa , 1: setDataa  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        fetch("https://check.lucretius.network/checkb2eall").then((res)=>res.json()).then((data)=>{
            setDataa(data);
            setLoading(false);
        });
    }, []);
    // ---------------------------------------subscribe-----------------------------------------
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { register: register2 , handleSubmit: handleSubmit2 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { register: register3 , handleSubmit: handleSubmit3 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const onSubmit = (data)=>{
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
            icon: "info",
            text: "The BUZZ Program will commence on 1st of August"
        });
    //     const signupfunction = () => {
    //       axios.get(`https://api.lucretius.network/buzz/add${data.walletAddress}/${data.amount}`).then((res) => {
    //         console.log(res.data)
    //         if (res.data == "add") {
    //           swal.fire({
    //             icon: 'success',
    //             html: `  
    //             <div className={classes.root}>
    //             <Grid className={classes.box2}>
    //               <Typography className='stakingtitle3' >
    //                     <span style="font-size:15px;color:darkblue" >Registration Confirmed</span>
    //             </Typography>
    //             <br/>
    //               <div style="font-size:13px">
    //               1st Grade &nbsp;
    //             <span style="color:#e1ab42;font-size:20px">
    //             &#8594;
    //             </span> 
    //            &nbsp;
    //            ${(data.amount * 30 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 30 / 100 / 52 * 4).toFixed(0)} 
    //           </div>
    //           <div style="font-size:13px">
    //           2nd Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 50 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 50 / 100 / 52 * 4).toFixed(0)} 
    //           </div>
    //           <div style="font-size:13px">
    //           3rd Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 70 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 70 / 100 / 52 * 5).toFixed(0)}
    //           </div>
    //           <div style="font-size:13px">
    //           4th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 100 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 100 / 100 / 52 * 4).toFixed(0)}
    //           </div>
    //           <div style="font-size:13px">
    //           5th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 130 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 130 / 100 / 52 * 4).toFixed(0)}
    //           </div>
    //           <div style="font-size:13px">
    //           6th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 180 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 180 / 100 / 52 * 5).toFixed(0)} 
    //           </div>
    //           <div style="font-size:13px">
    //           7th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 250 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 250 / 100 / 52 * 4).toFixed(0)} 
    //           </div>
    //           <div style="font-size:13px">
    //           8th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 350 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 350 / 100 / 52 * 5).toFixed(0)}
    //           </div>
    //           <div style="font-size:13px">
    //           9th Grade &nbsp;
    //           <span style="color:#e1ab42;font-size:20px">
    //           &#8594;
    //           </span> 
    //            &nbsp;
    //            ${(data.amount * 520 / 100 / 52).toFixed(0)}(1 Week) = ${(data.amount * 520 / 100 / 52 * 1).toFixed(0)}
    //           </div>
    //           <br/>
    //           <Grid container spacing={1}>
    //           <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
    //          <div style="font-size:13px">
    //           </div>
    //           </Grid>
    //           <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
    //            <div style="font-size:13px">
    //                    <Typography className='stakingtitle31'>
    //                    Total reward for 36 weeks:
    //                    </Typography>
    //                    <Typography className='stakingtitle32'>
    //                    ${((data.amount * 520 / 100 / 52 * 1) + (data.amount * 350 / 100 / 52 * 5) + (data.amount * 250 / 100 / 52 * 4) + (data.amount * 180 / 100 / 52 * 5)
    //                 + (data.amount * 130 / 100 / 52 * 4) + (data.amount * 100 / 100 / 52 * 4) +
    //                 (data.amount * 70 / 100 / 52 * 5) + (data.amount * 50 / 100 / 52 * 4) +
    //                 (data.amount * 30 / 100 / 52 * 4)).toFixed(0)
    //               }
    //                    </Typography>
    //            </div>
    //            </Grid>
    //           </Grid>
    //         </Grid>
    //      </div> 
    // `,
    //           })
    //         } else if (res.data == "exch") {
    //           swal.fire({
    //             icon: 'error',
    //             html: `<div>Your Subscription failed
    //         <br/>
    //        <p style="font-size:11px;text-align:center">Exchange wallets are not qualified for the program, Please submit your XRPL wallets.</p> 
    //         </div>`
    //           })
    //         }
    //         else if (res.data == "neb") {
    //           swal.fire({
    //             icon: 'error',
    //             html: `<div>
    //         <br/>
    //        <p style="font-size:11px;text-align:center">Your balance is not enough.</p> 
    //         </div>`
    //           })
    //         }
    //         else if (res.data == "ww") {
    //           swal.fire({
    //             icon: 'error',
    //             html: `<div>Your Subscription failed
    //             <br/>
    //             <p style="font-size:11px;text-align:center">Check your wallet address and try again later.</p> 
    //             </div>`
    //           })
    //         }else if (res.data == "tha") {
    //           swal.fire({
    //             icon: 'error',
    //             html: `<div>Your Subscription failed
    //                     <br/>
    //                     <p style="font-size:11px;text-align:center">The maximum amount is 10000.</p> 
    //                     </div>`
    //           })
    //         }
    //       }) 
    //     }
    // if (document.getElementById("input111").value === "") {
    //   swal.fire({
    //     icon: 'error',
    //     text: 'Please fill the boxes',
    //   })
    // } else if (document.getElementById("input222").value === "") {
    //   swal.fire({
    //     icon: 'error',
    //     text: 'Please fill the boxes',
    //   })
    // }
    // else {
    //   swal.fire({
    //     html: 'Please wait...',
    //     allowEscapeKey: false,
    //     allowOutsideClick: false,
    //     timer : 10000,
    //     didOpen: () => {
    //       swal.showLoading()
    //     }
    //   })
    //   axios.get(`https://staking.lucretius.network/checkUser/${data.walletAddress}`).then((res) => {
    //     if (res.data >= 1) {
    //       swal.fire({
    //         title: 'You already have the active plan, do you want to add a new plan ?',
    //         icon: 'info',
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, add a new plan',
    //         cancelButtonText: `No Thanks`,
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           signupfunction()
    //         } else if (result.isDenied) {
    //           swal.fire('Changes are not saved', '', 'info')
    //         }
    //       })
    //     }
    //     else {
    //       swal.fire({
    //         html: 'Please wait...',
    //         allowEscapeKey: false,
    //         allowOutsideClick: false,
    //         timer : 10000,
    //         didOpen: () => {
    //           swal.showLoading()
    //         }
    //       })
    //       signupfunction()
    //     }
    //   })
    // }
    };
    // --------------------------------------------pool------------------------------------------------
    const baseURL = `https://api.lucretius.network/buzz/check`;
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_6___default().get(baseURL).then((response)=>{
            console.log(response.data);
            setPost(response.data);
        });
    }, []);
    if (!post) return null;
    const percentage = 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        id: "root",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "/img/total/logot.ico",
                        sizes: "32x32",
                        href: "/img/total/logot.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "/img/total/logot.ico",
                        sizes: "16x16",
                        href: "/img/total/logot.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/img/total/logot.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "Lucretius"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Lucretius"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "LucBuzz"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.root2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/HomePage",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            id: "img",
                            className: "headerluclogo",
                            src: "/img/exchange/logoo.png"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "headerbtnmodalstaking",
                        id: "myBtn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "headerbtnmodalspan1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "headerbtnmodalspan2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "headerbtnmodalspan2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "myModal",
                        className: "modal",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "modal-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "close",
                                            children: "\xd7"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "modallogoluc",
                                                src: "/img/exchange/logoo.png"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "modal-header",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        container: true,
                                        spacing: 3,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                className: classes.modalgrid,
                                                item: true,
                                                xs: 4,
                                                sm: 4,
                                                lg: 5,
                                                xl: 5,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "modalul",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/HomePage",
                                                                children: "Home"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/Docs",
                                                                children: "Docs"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/LucToken",
                                                                children: "Luc Token"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/AboutUs",
                                                                children: "About Us"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/Games",
                                                                children: "Games"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                className: classes.modalgrid,
                                                item: true,
                                                xs: 8,
                                                sm: 8,
                                                lg: 6,
                                                xl: 6,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "modaltext",
                                                        children: "The Lucretius project is an exciting new metaverse with lots of unique features. In addition to a compelling plot, the game is loaded with lots of activities for players to engage in. an example of these fantastic features is the in-game cross-chain NFT marketplace that allows players to trade their NFTs across various blockchain networks."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "modalsocialmedia",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://t.me/LucretiusNet",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "headersocialicon",
                                                                    src: "/img/header/telegram.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://www.youtube.com/channel/UC4gZGGIPaAprfC2vH_-r9cw",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "headersocialicon",
                                                                    src: "/img/header/icon_youtube.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://twitter.com/LucretiusNet",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "headersocialicon",
                                                                    src: "/img/header/twitter.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://discord.com/invite/mBErZap2Zr",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "headersocialicon",
                                                                    src: "/img/header/discord.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                className: classes.modalgrid,
                                                item: true,
                                                xs: 12,
                                                sm: 12,
                                                lg: 12,
                                                xl: 12,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        className: "modalluc",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: " LUCRETIUS"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        className: "modalluc2",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                            children: [
                                                                "  LUCRET",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "modalluc2span",
                                                                    children: "IUS"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stakingtitle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: " The Lucretius Buzz Program"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 7,
                                xl: 8,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingtext",
                                        children: [
                                            "The Buzz program is a spectacular new program that will propel the Lucretius project to the moon.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "stakingbtn1",
                                        id: "sub",
                                        children: "Subscribe"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-parent",
                                        id: "modal-parent",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "modalsub",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "modalsubtitle",
                                                    children: "golden piggy \u201936\u2019 subscription"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "modalsubtitle"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                    onSubmit: handleSubmit(onSubmit),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                        container: true,
                                                        spacing: 0,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 12,
                                                                sm: 12,
                                                                lg: 6,
                                                                xl: 6,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "modalsublable",
                                                                    children: "Enter Your Wallet Address:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 12,
                                                                sm: 12,
                                                                lg: 6,
                                                                xl: 6,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "modalsubinput",
                                                                    id: "input111",
                                                                    ...register("walletAddress")
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 12,
                                                                sm: 12,
                                                                lg: 6,
                                                                xl: 6,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "modalsublable",
                                                                    children: "Enter Amount:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                item: true,
                                                                xs: 12,
                                                                sm: 12,
                                                                lg: 6,
                                                                xl: 6,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "modalsubinput",
                                                                    type: "number",
                                                                    min: "100",
                                                                    max: "10000",
                                                                    id: "input222",
                                                                    ...register("amount")
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "submit",
                                                                value: "Subscribe",
                                                                className: "modalsubinputsubmit"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "X",
                                                    id: "X",
                                                    children: "\xd7"
                                                })
                                            ]
                                        })
                                    }),
                                    "\xa0 \xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "stakingbtn2",
                                        id: "sub2",
                                        children: "Check Reward"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-parent",
                                        id: "modal-parent2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "modalsub",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "modalsubtitle",
                                                    children: "golden piggy \u201936\u2019 Check Reward"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    container: true,
                                                    spacing: 0,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "modalsublable",
                                                                children: "Enter Your Wallet Address:"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "modalsubinput"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "submit",
                                                            value: "Check Reward",
                                                            className: "modalsubinputsubmit"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "X",
                                                    id: "X2",
                                                    children: "\xd7"
                                                })
                                            ]
                                        })
                                    }),
                                    "\xa0 \xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "stakingbtn3",
                                        id: "sub3",
                                        children: "Reward didn't arrive"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-parent",
                                        id: "modal-parent3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "modalsub",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "modalsubtitle",
                                                    children: "Reward didn't arrive?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    container: true,
                                                    spacing: 0,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "modalsublable",
                                                                children: "Enter Your Wallet Address:"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "modalsubinput"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "modalsublable",
                                                                children: "Enter Your Email Address"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 12,
                                                            lg: 6,
                                                            xl: 6,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "modalsubinput",
                                                                placeHolder: "(optional)"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "submit",
                                                            value: "Claim Reward",
                                                            className: "modalsubinputsubmit"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "X",
                                                    id: "X3",
                                                    children: "\xd7"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 5,
                                xl: 4,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "headerimg",
                                        src: "/img/events/lucbuzz.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "showstaking1",
                                        children: "Filled"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "showstaking2",
                                        children: [
                                            new Intl.NumberFormat().format(post.total_capacity),
                                            " XRP"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "    ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 12,
                                xl: 12,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "    ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "    ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        className: classes.poolroot,
                                        container: true,
                                        spacing: 0,
                                        children: [
                                            post.result.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 12,
                                                    lg: 3,
                                                    xl: 3,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "progresslucbuzrootp",
                                                            children: [
                                                                "Pool",
                                                                user.id
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "progresslucbuzroot",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_12__.CircularProgressbar, {
                                                                value: user.current_capacity * 100 / user.max_capacity,
                                                                text: `${user.current_capacity}  Balance`,
                                                                style: {
                                                                    margin: 0
                                                                },
                                                                gradient: [
                                                                    {
                                                                        stop: 0.0,
                                                                        color: "#2E008B"
                                                                    },
                                                                    {
                                                                        stop: 1,
                                                                        color: "#BB16A3"
                                                                    }
                                                                ],
                                                                strokeWidth: 3,
                                                                ballStrokeWidth: 25,
                                                                subtitle: "Periyod S\xfcresi"
                                                            })
                                                        })
                                                    ]
                                                }, user)),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 12,
                                                sm: 12,
                                                lg: 12,
                                                xl: 12,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: classes.LucBuzzcnt,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_layout_CntDwnLucBuzz__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 12,
                                xl: 12,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "primary objectives of the program are to:"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stskingsectn5text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#EF9630"
                                                },
                                                children: "."
                                            }),
                                            "   Release more $LUC tokens and create ample liquidity in the market",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#EF9630"
                                                },
                                                children: "."
                                            }),
                                            "    Generate buzz and attract more investors to Lucretius ahead of the project launch",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#EF9630"
                                                },
                                                children: "."
                                            }),
                                            "    Turn the bear market around by providing abundant liquidity for trading the $LUC token",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#EF9630"
                                                },
                                                children: "."
                                            }),
                                            "     Build a rock-solid buy wall to boost the price of the $LUC token during the program",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#EF9630"
                                                },
                                                children: "."
                                            }),
                                            "    Help token holders and other investors invest safely in the $LUC token while maximizing rewards",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        style: {
                                            margin: "5%"
                                        },
                                        className: "stskingsectn5text",
                                        children: [
                                            "The program consists of four repeatable pools that users can join to enjoy juicy rewards. All four pools will have unique wallet addresses and a maximum capacity of 10000 XRP each. To join a pool, each user is required to hold between 100 and 10000 XRP. In other words, each pool will comprise between 1-100 persons.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3title",
                        children: "How it works:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_element_TimelinePool__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classes.stskingsectn5,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            className: "stskingsectn5text",
                            children: [
                                "Upon joining a pool, each investor will receive two transaction hashes; one for a buy order equal to 50% of their investment and another for a sell order equal to 20% of their investment.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Participating investors can track their investments and follow their weekly rewards and commissions from other pools that will be deposited daily.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "After the completion of Pool 4, the pools will be repeated until the target number of $LUC tokens has been released into circulation. In other words, after Pool 4, we will conduct another round starting from Pool 1.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "We will redistribute all proceeds from $LUC tokens bought back to the community during this period. The Lucretius team will not receive this bounty.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_element_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwmaq",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    var modal = document.getElementById("myModal");
                    var btn = document.getElementById("myBtn");
                    var span = document.getElementsByClassName("close")[0];
                    btn.onclick = function() {
                        modal.style.display = "block";
                    };
                    span.onclick = function() {
                        modal.style.display = "none";
                    };
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwmnmcdi",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    let $ = document;
                    let modalBtn = $.querySelector("#sub");
                    let modal = $.querySelector("#modal-parent");
                    let close = $.querySelector("#X");
                    let section = $.querySelector("#root");
                    modalBtn.onclick = function() {
                        modal.style.display = "inline";
                    };
                    close.onclick = function() {
                        modal.style.display = "none";
                        section.style.filter = "blur(0px)";
                    };
                    window.addEventListener("keydown", closemodalKeydown);
                    function closemodalKeydown(e) {
                        if (e.keyCode === 27) {
                            closeModal();
                        }
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwmnmcdmn",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    let $ = document;
                    let modalBtn = $.querySelector("#sub2");
                    let modal = $.querySelector("#modal-parent2");
                    let close = $.querySelector("#X2");
                    let section = $.querySelector("#root");
                    modalBtn.onclick = function() {
                        modal.style.display = "inline";
                    };
                    close.onclick = function() {
                        modal.style.display = "none";
                        section.style.filter = "blur(0px)";
                    };
                    window.addEventListener("keydown", closemodalKeydown);
                    function closemodalKeydown(e) {
                        if (e.keyCode === 27) {
                            closeModal();
                        }
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwmnmcdeepol",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    let $ = document;
                    let modalBtn = $.querySelector("#sub3");
                    let modal = $.querySelector("#modal-parent3");
                    let close = $.querySelector("#X3");
                    let section = $.querySelector("#root");
                    modalBtn.onclick = function() {
                        modal.style.display = "inline";
                    };
                    close.onclick = function() {
                        modal.style.display = "none";
                        section.style.filter = "blur(0px)";
                    };
                    window.addEventListener("keydown", closemodalKeydown);
                    function closemodalKeydown(e) {
                        if (e.keyCode === 27) {
                            closeModal();
                        }
                    }
                }
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LucBuzz);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;