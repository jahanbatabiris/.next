"use strict";
exports.id = 1960;
exports.ids = [1960];
exports.modules = {

/***/ 1960:
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
        iframe: {
            height: "555px",
            [theme.breakpoints.down("850")]: {
                height: "510px"
            }
        }
    }));
function BurnToEarn() {
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
    // ----------------------------------check-------------------------
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        wallet: ""
    });
    const onSubmitCheck = ()=>{
        if (document.getElementById("input11").value === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                icon: "error",
                text: "Please fill the boxes!"
            });
        } else {}
    };
    // ---------------------------------------------claimed-------------------------------------------
    const { register: register2 , handleSubmit: handleSubmit2 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { register: register3 , handleSubmit: handleSubmit3 ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChanget = (event)=>{
        setWalletAddress(event.target.value);
    };
    const { 0: emailAddress , 1: setEmailAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChangetr = (event)=>{
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
            axios__WEBPACK_IMPORTED_MODULE_6___default().get(`https://b2e.lucretius.network/faq/${walletAddress}/${emailAddress}`).then((res)=>{
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
                        children: 'Burn To Earn "25"'
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
                            children: 'Burn To Earn "25"'
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
                                            "UP to 1040% APY",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            'At Lucretius, we have designed the Burn to Earn "25" program to support our early investors and loyal followers before we launch our Lucretius metaverse. The program is aimed at members of the XRPL community; as such, exchange wallets will be ineligible to participate.',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Please read the full information below to gain a deeper understanding of the program."
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    className: classes.iframe,
                                                    style: {
                                                        border: "none !import",
                                                        outline: "none !import"
                                                    },
                                                    id: "xxxbb",
                                                    title: "xxx",
                                                    width: "100%",
                                                    frameBorder: "value",
                                                    allowTransparency: true,
                                                    srcDoc: `
          <!doctype html>
          <html>
          <head>
              <title>Chat bot</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
              <style>
              body{
                background-color:#26224800;
                
                border-radius:10px;
                height: 100%;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              }
              @font-face {
                font-family: myFirstFont;
                src: url(/fonts/SevenSegment.ttf);
              }
              @font-face {
                font-family: timothy;
                src: url(/fonts/TimothyRegular400.ttf);
                src: url(/fonts/TimothyRegular400.woff);
              }
              .root{
              margin: auto;
              background-color: #23255A00;

              }

              .row1{
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display:flex;
              }
              .lable11{
                color:white;
                font-size:18px;
                float:left;
                
              }
              .lable12{
                color:white;
                font-size:18px;
                float:left;
               
              }
              .lable13{
                color:white;
                font-size:18px;
                float:left;
         
              }
              .input1{
                padding: 10px 10px;
                width: 100%;
                border:solid 1px white;
                background-color:#23255A00;
                border-radius: 100px;
                color: black;
                fontSize: 13px;
               
              }

              .btn{
                color:white;
                font-size:22px;
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display: flex;
                cursor: pointer;
                color: white;
                font-size: 24px;
                width: 250px;
                background-color: #EF9630;
                border: none;
                outline: none;
                border-radius: 100px;
                padding: 10px 10px;
              }

              .add{
                background-color:gray;
                border:none;
                border-radius: 100%;
                color:white !important;
                font-size:20px;
                width: 55px;
                height: 55px;
          
                border:solid 3px white;
                justify-content: center;
                align-items: center;
                display: inline-flex;
                cursor: pointer;
              }
              .add:hover{
                background-color:rgb(89, 56, 179);
                border:solid 3px #cf52da;
                color:#cf52da;
              }

              @media only screen and (max-width: 840px){
                .lable11{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-20px
                }
                .lable12{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-10px
                 
                }
                .lable13{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-10px
                }
                .input1{
                  padding: 10px 5px;
                  width: 100%;
                  border:solid 1px white;
                  background-color:#23255A00;
                  border-radius: 100px;
                  color: black;
                  fontSize: 13px;
                 
                }
  
                .btn{
                  color:white;
                  font-size:18px;
                  background-position: center center;
                  margin: auto;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                  cursor: pointer;
                  color: white;
                  font-size: 24px;
                  width: 200px;
                  background-color: #EF9630;
                  border: none;
                  outline: none;
                  border-radius: 100px;
                  padding: 5px 5px;
                  margin-top:-30px
                }
  
                .add{
                  background-color:gray;
                  border:none;
                  border-radius: 100%;
                  color:white !important;
                  font-size:15px;
                  width: 42px;
                  height: 42px;
            
                  border:solid 3px white;
                  justify-content: center;
                  align-items: center;
                  display: inline-flex;
                  cursor: pointer;
                }
              }
             
              </style>
          </head>
          <body style="width:auto;">
          <div id="root" class="root">

                <br/><br/>
              <form>
                <div class="container-fluid">
                <div class="row row1">
                
                  <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                   <label class="lable11" for="fname">Enter Your Wallet Address :</label>
                  </div> 
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <input onclick="myFunctionn()" v-model="walletAddress" class="input1"  type="text" id="fname" name="fname">
             
                  </div> 
                  
                
               </div> 
               </div> 

               <br/><br/>

               <div class="container-fluid">
               <div class="row row1">
               
                 <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label class="lable12" for="fname">Enter Your LUC Purchased TX Hash :</label>
                 </div> 
                 
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <!--   <span v-for="item in pHashs" style="color:white;background:#cf52da" class="badge ">{{nesfkon(item)}}</span>-->
                 <textarea style="display:block" v-model="pHash" class="input1"  type="text" id="fname" name="fname"  >

                 
                </textarea>
                <p   class="add" @click="addpHash" > &#10133; </p>
                <!--  <span style="color:white;font-size:14px;margin-left:20px">You entred {{(pHashs).length}} TX Hash</span>-->
      
                </div> 
                 
               
              </div> 
              </div> 

              <br/><br/>


              <div class="container-fluid">
              <div class="row row1">
              
                <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <label class="lable13" for="fname">Enter LUC Transferred TX Hash :</label>
                </div> 
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <!--<span v-for="item in tHashs" style="color:white;background:#cf52da" class="badge ">{{nesfkon(item)}}</span>-->
                  <textarea style="display:block" v-model="tHash" class="input1"  type="text" id="fname" name="fname">
                 
                  </textarea>
                <p   class="add" @click="addtHash" > &#10133; </p>
                <!--  <span style="color:white;font-size:14px;margin-left:20px">You entred {{(tHashs).length}} TX Hash</span>-->
                
                </div> 
                
             </div> 
             </div> 
             <br/><br/><br/>
             <p onclick="myFunction()" @click="submitb2e" class="btn">
               Subscribe
             </p>
             </form>  

         
             
          </div>
        
          <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
       <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>

       <script>
        function myFunction() {
                       Swal.fire({
                          icon: 'info',
                          text: 'new Burn 2 Earn subscription program is not available until further notice.'
                         })
       }
       </script>
       <script>
       function myFunctionn() {
                      Swal.fire({
                         icon: 'info',
                         text: 'new Burn 2 Earn subscription program is not available until further notice.'
                        })
      }
      </script>
         
    //       <script>
    //     new Vue({
    //         el: "#root",
    //         data: {

    //             obj: {},
    //             walletAddress : '',
    //             tHash : '',
    //             pHash : '',
    //             pHashs : [],
    //             tHashs : [],

    //         },
    //         methods: {


    //           Swal.fire({
    //             icon: 'error',
    //             text: 'please enter a purchased tx hash'
    //           })

    //             nesfkon : function (text){
    //               let result = text.substr(0, 3) 
    //               let result1 = text.substr(text.length-3,text.length )
    //               return result + '...' + result1
    //             },
    //           addpHash: function() {
    //             if (this.pHash === "") {
    //               Swal.fire({
    //                 icon: 'error',
    //                 text: 'please enter a purchased tx hash'
    //               })
    //              }
    //              else {
    //               (this.pHashs).push(this.pHash)
    //               this.pHash = ""
    //               Swal.fire({
    //                 icon: 'success',
    //                 text: 'Your tx hash has been added successfully, you can add another one'
    //               })
                  
    //             }
               
    //         },
    //         addtHash: function() {
    //           if (this.tHash === "") {
    //             Swal.fire({
    //               icon: 'error',
    //               text: 'please enter a transferred tx hash'
    //             })
    //            }
    //           else {
    //             (this.tHashs).push(this.tHash)
    //             this.tHash = ""
    //             Swal.fire({
                  
    //               icon: 'success',
    //               text: 'Your tx hash has been added successfully, you can add another one'
    //             })
               
    //           }
              
    //       },
    //            submitb2e: function () {
    //             if (this.tHashs === "" || this.pHashs === "" || this.walletAddress === "") {
    //                 Swal.fire({
    //                     icon: 'error',
    //                     html: 'Please fill all the required fields and add your tx by + button'
    //                 })
    //             }
    //             else {
    //                 Swal.fire({
    
    //                     icon: 'info',
    //                     html: 'You entered ' + (this.tHashs).length + ' transferred tx hashes and ' + (this.pHashs).length + ' purchased tx hashes for <br>' + this.walletAddress + '<br> Do you confirm it?',
    //                     showCancelButton: true,
    //                     confirmButtonText: 'Yes, I do',
    //                     cancelButtonText: 'No , I will enter again',
    
    //                 }).then((result) => {
    
    //                     if (result.isConfirmed) {

    //                       Swal.fire({
    //                         html: 'Please wait...',
    //                         allowEscapeKey: false,
    //                         allowOutsideClick: false,
    //                         timer : 10000,
    //                         didOpen: () => {
    //                           Swal.showLoading()
    //                         }
    //                       })
                          
                       
    //                         this.obj.walletAddress = this.walletAddress
    //                         this.obj.pHash = this.pHashs
    //                         this.obj.tHash = this.tHashs
    //                         console.log(this.obj)

    //                         axios.put("https://b2e.lucretius.network/addUser",this.obj
    //                         ).then(function(response) {
    //                           Swal.close()
    //                           if(response.data == "add"){
    //                             Swal.fire({
    //                               icon: 'success',
    //                               html: 'Your request registered! , You can check your status after 48 Hour'
    //                           })
                
    //                           }
    //                   if(response.data == "ww"){
    //                     Swal.fire({
    //                       icon: 'error',
    //                       html: 'wrong wallet address'
    //                   })

    //                   }


    //                   this.obj = {}
    //                   this.walletAddress = '',
    //                   this.tHash = ''
    //                   this.pHash = ''
    //                   this.pHashs = []
    //                   this.tHashs = []




                           
    //                         })

    
    //                     } else {
    //                       this.obj = {}
    //                       this.walletAddress = '',
    //                       this.tHash = ''
    //                       this.pHash = ''
    //                       this.pHashs = []
    //                       this.tHashs = []
    //                       }
    //                       })
                         
                       
                
    //             }
    
    //         }
    //         }



    //     })
    // </script>
    
          </body>
          </html>
          `
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
                                                                className: "modalsubinput",
                                                                value: data.wallet,
                                                                onChange: (event)=>setData({
                                                                        wallet: event.target.value
                                                                    })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            href: {
                                                                pathname: "/B2eCheck",
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
                                                                    id: "input112",
                                                                    onChange: handleChanget,
                                                                    value: walletAddress
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
                                                                    name: "email",
                                                                    id: "input113",
                                                                    onChange: handleChangetr,
                                                                    value: emailAddress
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
                                        src: "/img/events/b2e.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "showstaking1",
                                        children: "Burned"
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
                                        className: "stakingsection2text1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "To participate in the program,"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text2",
                                        children: "you will buy $LUC tokens from the market and send them to the wallet address provided below:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text3",
                                        children: '"rK6oxn1UBPRSyjFPgw9HmRdGQNwku55Wg6"'
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        className: "stakingsection2text4",
                                        children: "The tokens will be burnt automatically upon arrival at the address. Participants must submit their wallet address, the transaction hash for buying tokens, and the transaction hash for transferring tokens to the burn wallet address."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classes.back2b2e,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classes.back2b2ediv,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "back2b2edivtext",
                                    children: "If you buy a total of 100,000 $LUC from the market through four transactions, you will have four different transaction hashes:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classes.stskingsectn33,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gradient-border-mask",
                                            children: "ABB1234..."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gradient-border-mask",
                                            children: "B2233HH..."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gradient-border-mask",
                                            children: "C3456AA..."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gradient-border-mask",
                                            children: "DTED44..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "back2b2edivtext",
                                    children: "Then you send all the 100,000 $LUC to the wallet address provided to burn, and you get another transaction hash:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classes.stskingsectn33,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "gradient-border-mask",
                                        children: "ETH321BBB..."
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3title",
                        children: "To participate in the Burn to Earn \u201C25\u201D program"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "back2b2edivtext",
                        children: "you must submit your wallet address, the four transaction hashes for buying the $LUC tokens, and the transaction hash for transferring tokens to the burn wallet address into the provided form fields."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "back2b2edivtext",
                        children: "The first week of the incentive program will commence twenty-four hours after submission. Participants will enjoy the following APY percentages:"
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
                                        className: "stskingsectn3text4",
                                        children: " 1040% APY  "
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
                                        className: "stskingsectn3text4",
                                        children: "520% APY  "
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
                                        children: "4 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "260% APY "
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
                                        children: "13 Weeks"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "stskingsectn3span"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text4",
                                        children: "240% APY  "
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "back2b2edivtext",
                        children: " Continuing based on the example above, you participated in the program with 100,000 $LUC. Below is a breakdown of your rewards for 25 weeks of the program:"
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
                                        className: "stskingsectn3text5",
                                        children: "First 4 weeks"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "stskingsectn3text3",
                                        children: [
                                            "1040% APY  =  1,040,000/52  =  20,000  =>  80,000",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Receivable for 4 weeks  "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "Second 4 weeks"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "stskingsectn3text3",
                                        children: [
                                            "520% APY  =  520,000/52  =  10,000  =>  40,000",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " Receivable for 4 weeks "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "Third 4 weeks"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "stskingsectn3text3",
                                        children: [
                                            "260% APY  =  260,000/52  =  5,000  =>  20,000",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " Receivable for 4 weeks  "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.back1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "stskingsectn3text5",
                                        children: "Last 13 weeks"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "stskingsectn3text3",
                                        children: [
                                            "240% APY  =  240,000/52  =  4,616  =>  60,000",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " Receivable for 13 weeks "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        className: "stskingsectn3total",
                        children: [
                            "Total reward for 25 weeks: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "stskingsectn3totalspan",
                                children: "200,000"
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
                                "1. The Burn to Earn \u201C25\u201D program is designed for members of the XRPL community; exchange wallets will be ineligible to participate.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "2. The program will commence on Friday 1st July 2022, and participation will stay open until 100,000,000 $LUC tokens are burned. In other words, the Burn to Earn \u201C25\u201D program will end when that amount is reached.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "3. The reward deposits in less than 24h",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "4. Rewards will be distributed weekly starting 1st July",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "5. Lucretius will accept only successful transactions on XRPL DEXs for participation in the program.",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurnToEarn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;