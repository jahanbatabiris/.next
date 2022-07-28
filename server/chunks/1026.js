"use strict";
exports.id = 1026;
exports.ids = [1026];
exports.modules = {

/***/ 1026:
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
        stskingsectn3: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        stskingsectn5: {
            width: "90%",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }
    }));
function GoldenPiggy() {
    const classes = useStyles();
    const { 0: dataa , 1: setDataa  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        fetch("https://check.lucretius.network/checkstakingall").then((res)=>res.json()).then((data)=>{
            setDataa(data);
            setLoading(false);
        });
    }, []);
    // ----------------------------------------sbscribe---------------------------------------
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { register: register2 , handleSubmit: handleSubmit2 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { register: register3 , handleSubmit: handleSubmit3 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const onSubmit = (data)=>{
        const signupfunction = ()=>{
            axios__WEBPACK_IMPORTED_MODULE_6___default().get(`https://staking.lucretius.network/addUser/${data.walletAddress}/${data.amount}`).then((res)=>{
                console.log(res.data);
                if (res.data == "add") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "success",
                        html: `  
          <div className={classes.root}>
           
          <Grid className={classes.box2}>
            <Typography className='stakingtitle3' >
                   <span style="font-size:15px;color:darkblue" >Registration Confirmed</span>
           </Typography>
           <br/>
            <div style="font-size:13px">
            
            1st Grade &nbsp;
             <span style="color:#e1ab42;font-size:20px">
             &#8594;
             </span> 
            
            
             &nbsp;
             ${(data.amount * 30 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 30 / 100 / 52 * 4).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            2nd Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             
             &nbsp;
             ${(data.amount * 50 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 50 / 100 / 52 * 4).toFixed(0)} 
            </div>
            <div style="font-size:13px">
            
            3rd Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 70 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 70 / 100 / 52 * 5).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            4th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 100 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 100 / 100 / 52 * 4).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            5th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 130 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 130 / 100 / 52 * 4).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            6th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 180 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 180 / 100 / 52 * 5).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            7th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 250 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 250 / 100 / 52 * 4).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            8th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
            
             &nbsp;
             ${(data.amount * 350 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 350 / 100 / 52 * 5).toFixed(0)}
            </div>
            <div style="font-size:13px">
            
            9th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
            
             &nbsp;
             ${(data.amount * 520 / 100 / 52).toFixed(0)}(1 Week) = ${(data.amount * 520 / 100 / 52 * 1).toFixed(0)}
            </div>
            <br/>
            <Grid container spacing={1}>
            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
           <div style="font-size:13px">
              
            </div>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
               
             <div style="font-size:13px">
                     <Typography className='stakingtitle31'>
                     Total reward for 36 weeks:
                     </Typography>
                     <Typography className='stakingtitle32'>
                     ${(data.amount * 520 / 100 / 52 * 1 + data.amount * 350 / 100 / 52 * 5 + data.amount * 250 / 100 / 52 * 4 + data.amount * 180 / 100 / 52 * 5 + data.amount * 130 / 100 / 52 * 4 + data.amount * 100 / 100 / 52 * 4 + data.amount * 70 / 100 / 52 * 5 + data.amount * 50 / 100 / 52 * 4 + data.amount * 30 / 100 / 52 * 4).toFixed(0)}
                     </Typography>
             </div>
             </Grid>
            </Grid>
  
          </Grid>
       </div> 
  `
                    });
                } else if (res.data == "exch") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "error",
                        html: `<div>Your Subscription failed
          <br/>
         <p style="font-size:11px;text-align:center">Exchange wallets are not qualified for the program, Please submit your XRPL wallets.</p> 
          </div>`
                    });
                } else if (res.data == "neb") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "error",
                        html: `<div>
          <br/>
         <p style="font-size:11px;text-align:center">Your balance is not enough.</p> 
          </div>`
                    });
                } else if (res.data == "ww") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "error",
                        html: `<div>Your Subscription failed
        <br/>
        <p style="font-size:11px;text-align:center">Check your wallet address and try again later.</p> 
        </div>`
                    });
                } else if (res.data == "tha") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "error",
                        html: `<div>Your Subscription failed
        <br/>
        <p style="font-size:11px;text-align:center">The maximum amount is 1M.</p> 
        </div>`
                    });
                }
            });
        };
        if (document.getElementById("input111").value === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                icon: "error",
                text: "Please fill the boxes"
            });
        } else if (document.getElementById("input222").value === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                icon: "error",
                text: "Please fill the boxes"
            });
        } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                html: "Please wait...",
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: 10000,
                didOpen: ()=>{
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().showLoading();
                }
            });
            axios__WEBPACK_IMPORTED_MODULE_6___default().get(`https://staking.lucretius.network/checkUser/${data.walletAddress}`).then((res)=>{
                if (res.data >= 1) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        title: "You already have the active plan, do you want to add a new plan ?",
                        icon: "info",
                        showCancelButton: true,
                        confirmButtonText: "Yes, add a new plan",
                        cancelButtonText: `No Thanks`
                    }).then((result)=>{
                        if (result.isConfirmed) {
                            signupfunction();
                        } else if (result.isDenied) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire("Changes are not saved", "", "info");
                        }
                    });
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        html: "Please wait...",
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        timer: 10000,
                        didOpen: ()=>{
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().showLoading();
                        }
                    });
                    signupfunction();
                }
            });
        }
    };
    // ------------------------------------------check-------------------------------------
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: ""
    });
    const onSubmitCheck = ()=>{
        if (document.getElementById("input11").value === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                icon: "error",
                text: "Please fill the boxes!"
            });
        } else {}
    };
    // ---------------------------------------------claimed---------------------------------------------
    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChange = (event)=>{
        setWalletAddress(event.target.value);
    };
    const { 0: emailAddress , 1: setEmailAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChanget = (event)=>{
        setEmailAddress(event.target.value);
    };
    const onSubmitClaim = ()=>{
        if (emailAddress === "") {
            emailAddress = 0;
        }
        if (document.getElementById("input112").value === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                icon: "error",
                text: "Please fill the boxes!"
            });
        } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                html: "Please wait...",
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: 10000,
                didOpen: ()=>{
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().showLoading();
                }
            });
            axios__WEBPACK_IMPORTED_MODULE_6___default().get(`https://staking.lucretius.network/faq/${walletAddress}/${emailAddress}`).then((res)=>{
                if (res.data == "ww") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "error",
                        text: "wrong wallet address!"
                    });
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                        icon: "success",
                        text: "your request registered!"
                    });
                }
            });
        }
    };
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
                        children: 'Golden Piggy "36"'
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
                                                                href: "#",
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
                            children: 'Golden Piggy "36" '
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingtext",
                                        children: 'We have created the Golden Piggy "36" program to support $LUC investors and holders until the launch of our MetaVerse. The program is built around 36 weeks of rewards where token holders will enjoy APY of between 30% and 520%.'
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
                                                                    id: "input222",
                                                                    ...register("amount"),
                                                                    type: "number",
                                                                    min: "1000",
                                                                    max: "1000000"
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
                                                    onSubmit: handleSubmit2(onSubmitCheck),
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
                                                                id: "input11",
                                                                ...register2("walletaddress"),
                                                                value: data.name,
                                                                onChange: (event)=>setData({
                                                                        name: event.target.value
                                                                    })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            href: {
                                                                pathname: "/StakingCheck",
                                                                query: data
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "modalsubinputsubmit",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: "Check Reward"
                                                            })
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                    onSubmit: handleSubmit3(onSubmitClaim),
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
                                                                    onChange: handleChange,
                                                                    value: walletAddress,
                                                                    id: "input112"
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
                                                                    placeHolder: "(optional)",
                                                                    onChange: handleChanget,
                                                                    value: emailAddress,
                                                                    id: "input113"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "submit",
                                                                value: "Claim Reward",
                                                                className: "modalsubinputsubmit"
                                                            })
                                                        ]
                                                    })
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
                                        src: "/img/events/golden-piggy.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "showstaking1",
                                        children: "Staked"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "showstaking2",
                                        children: [
                                            new Intl.NumberFormat().format(dataa),
                                            " LUC"
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
                                        className: "stakingsection2text1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text2",
                                        children: "Please check the rewards and percentages below for better understanding :"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text4"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3title",
                        children: "36 Weeks Rewards"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        className: classes.stskingsectn3,
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "1st Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "30% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "2nd Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "50% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "3rd Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "70% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "4th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "100% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "5th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "130% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "6th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "180% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "7th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "250% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "8th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "350% APY"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "9th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text2",
                                        children: "1 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "Weekly"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "520% APY"
                                    })
                                ]
                            })
                        ]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3title",
                        children: "Example for 100K LUC"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        className: classes.stskingsectn3,
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "1st Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: " 30000/52  =  (Weekly)577*4  =>  2307"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "2nd Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: " 50000/52  =  (Weekly)962*4  =>  3846"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "3rd Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "70000/52  =  (Weekly)1346*5  =>  6731"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "4th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "100000/52  =  (Weekly)1923*4  =>  7692"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "5th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "130000/52  =  (Weekly)2500*4  =>  10000"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "6th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "180000/52  =  (Weekly)3462*5  =>  17308"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "7th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "250000/52  =  (Weekly)4808*4  =>  19230"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "8th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "5 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "350000/52  =  (Weekly)6731*5  =>  33653"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text1",
                                        children: "9th Grade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "1 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text3",
                                        children: "520000/52  =  (Weekly)10000*1  =>  10000"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3total",
                        children: [
                            "Total reward for 36 weeks = ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "stskingsectn3totalspan",
                                children: "110,769"
                            })
                        ]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3title",
                        children: "NB"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classes.stskingsectn5,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            className: "stskingsectn5text",
                            children: [
                                "1. To participate in the Golden Piggy '36' program, you'll subscribe using your wallet address and the amount of LUC that you are willing to participate with.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "2. Your rewards will be automatically canceled the day your holding amount falls below your subscription amount. For example, if you subscribe with 100k LUC, you are required to keep your holding balance above 100k. If your holding balance drops to 99,999, your subscription will cancel automatically and you will lose out on the rewards of the remaining weeks.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "3. You can increase your subscription amount by adding to your holding balance. you must subscribe to the program for an additional amount and your rewards will be coming after the first week and it'll be calculated separately from the previous rewards.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "4. Minimum holding amount to participate is 1000LUC, maximum is 1,000,000LUC.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "5. The reward deposits in less than 24h",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "6. The Golden Piggy '36' will commence on ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "stskingsectn5textspan",
                                    children: "Monday 20th June 2022"
                                }),
                                ".",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "7. Subscription period ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "stskingsectn5textspan",
                                    children: "begins 1st June"
                                }),
                                "  and ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "stskingsectn5textspan",
                                    children: "ends July 31st"
                                }),
                                " . (May be extended)"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_element_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwm",
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
                id: "stripe-jsaoxowwmnm",
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
                id: "stripe-jsaoxowwmnmcd",
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
                id: "stripe-jsaoxowwmnmcdee",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldenPiggy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;