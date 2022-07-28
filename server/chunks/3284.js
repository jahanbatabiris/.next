"use strict";
exports.id = 3284;
exports.ids = [3284];
exports.modules = {

/***/ 9388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);





function AvatarSlider() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "root",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                className: "avatarframe",
                style: {
                    zIndex: "1000",
                    overflow: "hidden"
                },
                id: "xxx",
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
                   
                  
                    <style>
                    body {
                      margin: 0;
                      background-color: #fff00;
                      color: #fff;
                      font-family: sans-serif;
                      display: flex;
                      align-items: center;
                      min-height: 100vh;
                    }
                    .slider {
                      width: 100%;
                        background-position: center center;
                      margin: auto;
                      justify-content: center;
                      align-items: center;
                      display: flex;
                    }
                    .slider input {
                      display: none;
                    }
                    .testimonials {
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                      min-height: 620px;
                      perspective: 1000px;
                      overflow: hidden;
                    }
                    .testimonials1{
                      width: 41%;
                      margin:2%
                    }
                    .testimonials .item {
                      top: 0;
                      position: absolute;
                      box-sizing: border-box;
                      background-color: #0A022000;
                      padding: 30px;
                      width: 450px;
                      text-align: center;
                      transition: transform 0.4s;
                      -webkit-transform-style: preserve-3d;
                      
                      user-select: none;
                      cursor: pointer;
                    }
                    .testimonials .item img {
                      width: 300px;
                 
                    }
                    .testimonials .item p {
                      color: #ddd;
                    }
                    .testimonials .item h2 {
                      font-size: 14px;
                    }
                    .dots {
                      display: inline-block;
                    float:left
                    }
                    .dots label {
                      display: block;
                      height: 9px;
                      width: 9px;
                      border-radius: 50%;
                      cursor: pointer;
                      background-color: #413B52;
                      margin: 15px;
                      transition: transform 0.2s, color 0.2s;
                    }
                    
                    /* First */
                    #t-1:checked ~ .dots label[for="t-1"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-1:checked ~ .dots label[for="t-2"] {
                      transform: scale(1.5);
                    }
                    #t-1:checked ~ .testimonials label[for="t-1"] {
                      z-index: 4;
                      transform: scale(1.1);
                    }
                    #t-1:checked ~ .testimonials label[for="t-2"] {
                      transform: scale(.6);
                        opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 3;
                    
                    }
                    #t-1:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.4);
                      opacity:0.1;
                      transform: translateX(670px) translateZ(-180px) rotateY(-25deg);
                      z-index: 2;
                    }
                    #t-1:checked ~ .testimonials label[for="t-4"] {
                      transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
                      z-index: 1;
                    }
                    #t-1:checked ~ .testimonials label[for="t-5"] {
                      transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
                    }
                    
                    /* Second */
                    #t-2:checked ~ .dots label[for="t-1"] {
                      transform: scale(1.5);
                    }
                    #t-2:checked ~ .dots label[for="t-2"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-2:checked ~ .dots label[for="t-3"] {
                      transform: scale(1.5);
                    }
                    #t-2:checked ~ .testimonials label[for="t-1"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                    }
                    #t-2:checked ~ .testimonials label[for="t-2"] {
                      z-index: 3;
                      transform: scale(1.2);
                    }
                    #t-2:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 2;
                    
                    }
                    #t-2:checked ~ .testimonials label[for="t-4"] {
                      opacity:0.1;
                      transform: scale(.4);
                      transform: translateX(670px) translateZ(-180px) rotateY(-25deg);
                      z-index: 1;
                    }
                    #t-2:checked ~ .testimonials label[for="t-5"] {
                      transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
                    }
                    
                    /* Third */
                    #t-3:checked ~ .dots label[for="t-2"] {
                      transform: scale(1.5);
                    }
                    #t-3:checked ~ .dots label[for="t-3"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-3:checked ~ .dots label[for="t-4"] {
                      transform: scale(1.5);
                    }
                    #t-3:checked ~ .testimonials label[for="t-1"] {
                      opacity:0.2;
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                    }
                    #t-3:checked ~ .testimonials label[for="t-2"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                    }
                    #t-3:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(1.2);
                      
                      z-index: 3;
                    }
                    #t-3:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 2;
                    }
                    #t-3:checked ~ .testimonials label[for="t-5"] {
                      opacity:0.2;
                      transform: translateX(740px) translateZ(-180px) rotateY(-25deg);
                    }
                    
                    /* Fourth */
                    #t-4:checked ~ .dots label[for="t-3"] {
                      transform: scale(1.5);
                    }
                    #t-4:checked ~ .dots label[for="t-4"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-4:checked ~ .dots label[for="t-5"] {
                      transform: scale(1.5);
                    }
                    #t-4:checked ~ .testimonials label[for="t-1"] {
                      transform: translateX(-970px) translateZ(-270px) rotateY(35deg);
                    }
                    #t-4:checked ~ .testimonials label[for="t-2"] {
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                    }
                    #t-4:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                      z-index: 2;
                    }
                    #t-4:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(1.2);
                      z-index: 3;
                    }
                    #t-4:checked ~ .testimonials label[for="t-5"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                    }
                    
                    /* Fifth */
                    #t-5:checked ~ .dots label[for="t-4"] {
                      transform: scale(1.5);
                    }
                    #t-5:checked ~ .dots label[for="t-5"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-5:checked ~ .testimonials label[for="t-1"] {
                      transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
                    }
                    #t-5:checked ~ .testimonials label[for="t-2"] {
                      transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
                      z-index: 1;
                    }
                    #t-5:checked ~ .testimonials label[for="t-3"] {
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                      z-index: 2;
                    }
                    #t-5:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                      z-index: 3;
                    }
                    #t-5:checked ~ .testimonials label[for="t-5"] {
                      transform: scale(1.2);
                      z-index: 4;
                    }
                     .title {
                      font-size: 44px;
                      font-weight: 700;
                      background-image:linear-gradient(90deg ,#542579, #542579, #941375, #941375);
                      -webkit-background-clip: text;
                      color: transparent;
                      text-align: left;
                      background-position: center center;
                      margin: auto;
                      justify-content: center;
                      align-items: center;
                      
            
                    }
                    .title2{
                      color:white;
                      margin-top:20px;
                      font-size: 18px;
                      line-height:29px;
                      width: 300px;
                      text-align: left;

                    }
                    @media screen and (max-width: 1150px){
                      .slider {
                        width: 100%;
                        background-position: left center;
                        margin: 1px !important;
                        justify-content: left;
                        align-items: center;
                        display: block;
                      }
                      .slider input {
                        display: none;
                      }
                      .testimonials {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        min-height: 720px;
                        perspective: 1000px;
                        overflow: hidden;
                      }
                      .testimonials1{
                        width: 97%;
                        margin:0%
                      }
                      .dots {
                        display: block;
                      position:absolute;
                      top:300px;
                      left:10px;
                      z-index:10000

                      }
                      .dots label {
                        display: block;
                        height: 9px;
                        width: 9px;
                        border-radius: 50%;
                        cursor: pointer;
                        background-color: #413B52;
                        margin: 15px;
                        transition: transform 0.2s, color 0.2s;
                      }
                      
                      .title2{
                        color:white;
                        margin-top:20px;
                        font-size: 18px;
                        line-height:29px;
                        width: 250px;
                        text-align: left;
                        margin-left:70px
                      }
                      .title {
                        font-size: 40px;
                        font-weight: 700;
                        background-image:linear-gradient(90deg ,#542579, #542579, #941375, #941375);
                        -webkit-background-clip: text;
                        color: transparent;
                        text-align: left;
                        background-position: center center;
                        margin: auto;
                        justify-content: center;
                        align-items: center;
                        margin-left:70px
              
                      }
                    }
                  </style>
                </head>
                <body style="width:auto">
                <div class="slider">
                <input type="radio" name="testimonial" id="t-1">
                <input type="radio" name="testimonial" id="t-2">
                <input type="radio" name="testimonial" id="t-3" checked>
                <input type="radio" name="testimonial" id="t-4">
                <input type="radio" name="testimonial" id="t-5">
                <div class="dots">
                <label for="t-1"></label>
                <label for="t-2"></label>
                <label for="t-3"></label>
                <label for="t-4"></label>
                <label for="t-5"></label>
              </div>
                <div class="testimonials testimonials1">
                  <label class="item" for="t-1">
                    <img src="/img/glb/ch1.png" alt="picture">
                   
                  </label>
                  <label class="item" for="t-2">
                  <img src="/img/glb/ch2.png" alt="picture">
                  </label>
                  <label class="item" for="t-3">
                  <img src="/img/glb/ch3.png" alt="picture">
                  </label>
                  <label class="item" for="t-4">
                  <img src="/img/glb/ch4.png" alt="picture">
                  </label>
                  <label class="item" for="t-5">
                  <img src="/img/glb/charecter5.png" alt="picture">
                  </label>
                </div>
                  <div class="testimonials testimonials1">
                  <label class="item" for="t-1">
                  <div class="title">Chico</div>
                  <p class="title2">Hi there! <br/>
                  I'm #Chico your favourite buddy from the Lucretius complex. The only thing I love more than sports and staying healthy is making new friends.
                   You know where to find me, I'm always where the fun is happening in the complex.
                   <br/>Don't forget to stay hydrated buddy, see ya! </p>
                  </label>
                  <label class="item" for="t-2">
                  <div class="title">Hana</div>
                  <p class="title2">Hi guys!  <br/>
                  Meet #Hana! <br/>
                  She's is a full-time resident of the Lucretius complex. <br/>
                   Hana lives for adventure and entertainment. She's a prolific gamer so you should look out for her in the gaming section of the complex. </p>
                  </label>
                  <label class="item" for="t-3">
                  <div class="title">Ava</div>
                  <p class="title2"> Have you met #Ava? <br/>
                  She's an energetic smart girl who loves shopping and all the other perks of the luxurious lifestyle. <br/>
                  Ava is a true friend, she'll always be there for you. She's also an extrovert, always eager to socialize, so she's amazing company to look forward to in the complex.</p>
                 
                  </label>
                  <label class="item" for="t-4">
                  <div class="title">Zany</div>
                  <p class="title2">  Hey there!  <br/>
                  Remember me? <br/>
                  I'm the cool guy from the Zany Club NFT collection, the first citizen of the Lucretius complex. If you are looking to play mystery games, or you like dancing and nightclubs, I'm your go to guy. 
                     <br/>
                     See ya!  </p>
                  </label>
                  <label class="item" for="t-5">
                  <div class="title">Tau</div>
                  <p class="title2">Meet #Tau  <br/>
                  He is one of the #Lucretius citizen. He is smart & knows how to do business. he likes gold & seek wealth. <br/>
                  He respects women , A real gentleman. </p>
                  </label>
                </div>

              </div>

                </body>
                </html>
                `
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarSlider);


/***/ }),

/***/ 4771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((theme)=>({
        titleroot: {
            width: "100%",
            backgroundColor: "#0C0617",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "500px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        },
        root: {
            backgroundColor: "#0C0617",
            paddingTop: "80px"
        },
        root2: {
            width: "90%",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        root3: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        imgspan: {
            backgroundPosition: "center center !important",
            margin: "auto !important",
            justifyContent: "center !important",
            alignItems: "center !important",
            display: "flex !important"
        },
        img: {
            borderRadius: "50% !important",
            width: "190px !important",
            marginTop: "80px !important"
        },
        back: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative",
            [theme.breakpoints.down("1530")]: {
                width: "400px"
            },
            [theme.breakpoints.down("450")]: {
                width: "300px"
            }
        },
        back1: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative",
            [theme.breakpoints.down("1530")]: {
                width: "400px"
            },
            [theme.breakpoints.down("450")]: {
                width: "300px"
            }
        },
        title: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }
    }));
function Events() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.titleroot,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                "EVEN",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "title2sospan",
                                    children: "TS"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: " EVENTS"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        className: classes.root2,
                        container: true,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: classes.root3,
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 4,
                                xl: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "containerrr44",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "titleee44 title11144",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classes.back1,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: classes.imgspan,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: classes.img,
                                                        src: "/img/events/b2e.png"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "usertitle",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/BurnToEarn",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: classes.title,
                                                            children: 'Burn To Earn "25"'
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: classes.root3,
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 4,
                                xl: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "containerrr44",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "titleee44 title11144",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classes.back,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: classes.imgspan,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: classes.img,
                                                        src: "/img/events/golden-piggy.png"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "usertitle",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/GoldenPiggy",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: classes.title,
                                                            children: 'Golden Piggy "36"'
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: classes.root3,
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 4,
                                xl: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "containerrr44",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "titleee44 title11144",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classes.back1,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: classes.imgspan,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: classes.img,
                                                        src: "/img/events/lucbuzz.png"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "usertitle",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/LucBuzz",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: classes.title,
                                                            children: "Luc Buzz "
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);


/***/ }),

/***/ 8566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AvatarSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9388);
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4088);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2958);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4771);
/* harmony import */ var _RoadMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7790);
/* harmony import */ var _MetaSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_7__]);
_Footer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((theme)=>({
        welcomediv: {
            width: "80%",
            border: "solid 2px white",
            borderRadius: "15px",
            backgroundColor: "#1208276b",
            backdropFilter: "blur(10PX)",
            padding: "20px 20px 20px 20px",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "300px",
            color: "white",
            fontSize: "39px",
            transition: " 2s",
            cursor: "pointer",
            [theme.breakpoints.down("980")]: {
                fontSize: "34px"
            },
            [theme.breakpoints.down("710")]: {
                fontSize: "30px"
            },
            [theme.breakpoints.down("376")]: {
                fontSize: "26px"
            }
        },
        rootgridwelcome: {
            marginBottom: "200px ",
            transition: " 2s",
            [theme.breakpoints.down("600")]: {
                marginBottom: "80px "
            }
        },
        rootgridwelcomeroot: {
            [theme.breakpoints.down("600")]: {
                backgroundPosition: "center center",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
            }
        },
        root: {
            backgroundImage: 'url("/img/header/hero1.png")',
            width: "100% !important",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100vw 100vh",
            overflow: "hidden",
            [theme.breakpoints.down("980")]: {
                backgroundImage: 'url("/img/header/hero.png")',
                backgroundSize: "130vw 100vh"
            },
            [theme.breakpoints.down("750")]: {
                backgroundImage: 'url("/img/header/hero.png")',
                backgroundSize: "145vw 100vh"
            },
            [theme.breakpoints.down("650")]: {
                backgroundImage: 'url("/img/header/hero.png")',
                backgroundSize: "155vw 100vh"
            },
            [theme.breakpoints.down("550")]: {
                backgroundImage: 'url("/img/header/hero.png")',
                backgroundSize: "175vw 100vh"
            },
            [theme.breakpoints.down("450")]: {
                backgroundImage: 'url("/img/header/hero.png")',
                backgroundSize: "305vw 100vh"
            }
        },
        titlewelcome: {
            color: "white",
            fontSize: "50px",
            marginTop: "20vh",
            marginBottom: "2vh",
            marginLeft: "30px",
            transition: " 2s",
            [theme.breakpoints.down("980")]: {
                fontSize: "41px"
            },
            [theme.breakpoints.down("710")]: {
                fontSize: "37px",
                marginBottom: "46px"
            },
            [theme.breakpoints.down("376")]: {
                fontSize: "32px",
                marginLeft: "17px"
            }
        },
        root2gridwelcometitle: {
            color: "white",
            fontSize: "45px",
            marginTop: "16vh",
            marginBottom: "76px",
            paddingLeft: "12%",
            [theme.breakpoints.down("1000")]: {
                fontSize: "39px"
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "30px",
                paddingLeft: "8%",
                paddingRight: "8%"
            }
        },
        root2gridwelcomebuy1: {
            backgroundColor: "white",
            color: "white",
            border: "solid 2px white",
            borderRadius: "80px",
            width: "250px",
            padding: "16px 15px 16px 15px",
            color: "#802690",
            fontSize: "20px",
            marginLeft: "12%",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "rgba(255, 255, 255, 0.322) 0px 2px 4px 0px, rgba(255, 255, 255, 0.404) 0px 2px 16px 0px",
            "&:hover": {
                backgroundColor: "inherit",
                color: "white",
                boxShadow: "rgba(255, 255, 255, 0) 0px 2px 4px 0px, rgba(255, 255, 255, 0) 0px 2px 16px 0px",
                border: "solid 2px white"
            },
            [theme.breakpoints.down("1000")]: {
                fontSize: "18px",
                width: "190px",
                padding: "14px 13px 14px 13px"
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "16px",
                marginLeft: "8%",
                display: "block",
                marginRight: "8%",
                width: "180px",
                padding: "9px 8px 9px 8px"
            }
        },
        root2gridwelcomebuy: {
            backgroundColor: "inherit",
            color: "white",
            border: "solid 2px white",
            borderRadius: "80px",
            width: "250px",
            padding: "16px 15px 16px 15px",
            color: "#802690",
            fontSize: "20px",
            marginLeft: "12%",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "rgba(255, 255, 255, 0.322) 0px 2px 4px 0px, rgba(255, 255, 255, 0.404) 0px 2px 16px 0px",
            "&:hover": {
                backgroundColor: "inherit",
                color: "white",
                boxShadow: "rgba(255, 255, 255, 0) 0px 2px 4px 0px, rgba(255, 255, 255, 0) 0px 2px 16px 0px",
                border: "solid 2px white"
            },
            [theme.breakpoints.down("1000")]: {
                fontSize: "18px",
                width: "190px",
                padding: "14px 13px 14px 13px"
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "16px",
                marginLeft: "8%",
                display: "block",
                marginRight: "8%",
                width: "180px",
                padding: "9px 8px 9px 8px"
            }
        },
        root2gridwelcomeset: {
            backgroundColor: "inherit",
            borderRadius: "80px",
            width: "250px",
            padding: "16px 15px 16px 15px",
            color: "white",
            border: "none",
            outline: "none",
            fontSize: "20px",
            border: "solid 2px white",
            marginLeft: "20px",
            fontWeight: "600",
            cursor: "pointer",
            [theme.breakpoints.down("1000")]: {
                fontSize: "18px",
                width: "190px",
                padding: "14px 13px 14px 13px"
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "16px",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: "20px",
                width: "180px",
                padding: "9px 8px 9px 8px"
            }
        },
        rootimg1: {
            position: "absolute",
            zIndex: "0",
            width: "50%",
            bottom: "8%",
            right: "5%",
            transform: "scale(1,1)",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        },
        rootimg2: {
            position: "absolute",
            zIndex: "0",
            width: "14%",
            top: "10%",
            right: "8%",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        },
        rootimg3: {
            position: "absolute",
            zIndex: "0",
            width: "20%",
            bottom: "8%",
            left: "0%",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        },
        rootimg4: {
            position: "absolute",
            zIndex: "0",
            width: "70%",
            top: "-10%",
            right: "20%",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        },
        rootimg5: {
            position: "absolute",
            zIndex: "0",
            width: "10%",
            top: "25%",
            left: "-4%",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        },
        rootimg6: {
            position: "absolute",
            zIndex: "0",
            width: "24%",
            top: "30%",
            right: "-7%",
            [theme.breakpoints.down("980")]: {
                display: "none"
            }
        }
    }));
function Header() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "zoom",
        className: classes.root,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img1",
                className: classes.rootimg1,
                src: "/img/header/Asset 1.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img2",
                className: classes.rootimg2,
                src: "/img/header/Asset 2.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img3",
                className: classes.rootimg3,
                src: "/img/header/Asset 3.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img4",
                className: classes.rootimg4,
                src: "/img/header/Asset 4.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img5",
                className: classes.rootimg5,
                src: "/img/header/Asset 5.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                id: "img6",
                className: classes.rootimg6,
                src: "/img/header/Asset 10.png"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "asd",
                className: "asd",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 1,
                                xl: 1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                id: "bbbb",
                                className: classes.titlewelcome,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Welcome To Lucretius"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        className: classes.rootgridwelcomeroot,
                        container: true,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 1,
                                xl: 0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                className: classes.rootgridwelcome,
                                item: true,
                                xs: 11,
                                sm: 6,
                                lg: 3,
                                xl: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "ccc",
                                        className: classes.welcomediv,
                                        children: "PLAYGROUND"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                className: classes.rootgridwelcome,
                                item: true,
                                xs: 11,
                                sm: 6,
                                lg: 3,
                                xl: 2,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    id: "fadeOut",
                                    className: classes.welcomediv,
                                    children: [
                                        "OFFICIAL ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "WEBSITE"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 12,
                                lg: 3,
                                xl: 6
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "qwe",
                id: "qwe",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/HomePage",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            id: "img",
                            className: "headerluclogohome",
                            src: "/img/exchange/logoo.png"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "headerbtnmodal",
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        id: "gridheader",
                        container: true,
                        spacing: 0,
                        children: [
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                container: true,
                                                spacing: 3,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        className: classes.modalgrid,
                                                        item: true,
                                                        xs: 12,
                                                        sm: 12,
                                                        lg: 12,
                                                        xl: 12,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                                className: "modalluc",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: " LUCRETIUS"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                className: classes.root2gridwelcome,
                                item: true,
                                xs: 12,
                                sm: 10,
                                lg: 7,
                                xl: 5,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "titleluc",
                                        className: classes.root2gridwelcometitle,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "containerrr",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "titleee title111",
                                                children: [
                                                    "  ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        children: " DECENTRALIZED METAVERSE OF ENDLESS ADVENTURE AND ENTERTAINMENT"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "containerrr2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "titleee2 title1112",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    id: "sub3",
                                                    className: classes.root2gridwelcomebuy1,
                                                    children: "Buy Now"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "modal-parent",
                                                    id: "modal-parent3",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "modalsub",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                container: true,
                                                                spacing: 0,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                        style: {
                                                                            backgroundPosition: "center center",
                                                                            margin: "auto",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            display: "flex"
                                                                        },
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 12,
                                                                        lg: 12,
                                                                        xl: 12,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                target: "_blank",
                                                                                href: "https://www.mexc.com/exchange/LUC_USDT",
                                                                                rel: "noreferrer",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        className: classes.root2gridwelcomebuy,
                                                                                        children: "mexc"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                        style: {
                                                                            backgroundPosition: "center center",
                                                                            margin: "auto",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            display: "flex"
                                                                        },
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 12,
                                                                        lg: 12,
                                                                        xl: 12,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            target: "_blank",
                                                                            href: "https://www.bitrue.com/trade/luc_usdt",
                                                                            rel: "noreferrer",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: classes.root2gridwelcomebuy,
                                                                                    children: "bitrue"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                        style: {
                                                                            backgroundPosition: "center center",
                                                                            margin: "auto",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            display: "flex"
                                                                        },
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 12,
                                                                        lg: 12,
                                                                        xl: 12,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            target: "_blank",
                                                                            href: "https://www.probit.com/app/exchange/LUC-USDT",
                                                                            rel: "noreferrer",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: classes.root2gridwelcomebuy,
                                                                                    children: "probit"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                        style: {
                                                                            backgroundPosition: "center center",
                                                                            margin: "auto",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            display: "flex"
                                                                        },
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 12,
                                                                        lg: 12,
                                                                        xl: 12,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            target: "_blank",
                                                                            href: "https://sologenic.org/trade?market=LUC%2BrsygE5ynt2iSasscfCCeqaGBGiFKMCAUu7%2FXRP&network=mainnet",
                                                                            rel: "noreferrer",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: classes.root2gridwelcomebuy,
                                                                                    children: "sologenic"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                        style: {
                                                                            backgroundPosition: "center center",
                                                                            margin: "auto",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            display: "flex"
                                                                        },
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 12,
                                                                        lg: 12,
                                                                        xl: 12,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            target: "_blank",
                                                                            href: "https://www.xt.com/trade/luc_usdt",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: classes.root2gridwelcomebuy,
                                                                                children: "xt"
                                                                            })
                                                                        })
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
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://xrpl.services/?issuer=rsygE5ynt2iSasscfCCeqaGBGiFKMCAUu7&currency=LUC&limit=1000000000",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        id: "btnset",
                                                        className: classes.root2gridwelcomeset,
                                                        children: "Set Trustline"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                className: classes.root2gridwelcome,
                                item: true,
                                xs: 12,
                                sm: 2,
                                lg: 5,
                                xl: 5
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 6,
                                sm: 6,
                                lg: 6,
                                xl: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "containerrr3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#footer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "titleee3 title1113",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "headerscroll",
                                                id: "scroll-down-animation",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mouse",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "move"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "headerscrolltext",
                                                        children: "Scroll down"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 6,
                                sm: 6,
                                lg: 6,
                                xl: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "containerrr4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "titleee4 title1114",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            id: "social",
                                            className: "headersocialroot",
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
                                    })
                                })
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                className: "sotitle2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                    children: [
                                        "AVAT",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "title2sospan",
                                            children: "ARS"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                className: "sotitle1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "AVATARS"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AvatarSlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Events__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialMedia__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        className: "sotitle2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                "ENVIRON",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "title2sospan",
                                    children: "MENT"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        className: "sotitle1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "ENVIRONMENT"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetaSlider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoadMap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "footer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: "stripe-jssaoo",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    $(document).ready(function() {
                        $("#fadeOut").click(function() {
                            // $('#bbbb').css('opacity','1');
                            // $('#slideMeeee').fadeIn();
                            $("#asd").animate({
                                opacity: "0",
                                height: "10px",
                                width: "350px",
                                transition: "5s"
                            });
                            $("#fadeOut").animate({
                                opacity: "0",
                                height: "10px",
                                width: "350px",
                                transition: "1.8s"
                            });
                            $("#ccc").animate({
                                opacity: "0",
                                height: "10px",
                                width: "350px",
                                transition: ".5s"
                            });
                            $("#bbbb").animate({
                                opacity: "0",
                                height: "10px",
                                transition: "1s"
                            });
                            // $('#zoom').animate({
                            //     transform: 'scale3d(1.5,1.5,1.5)',
                            //     transition:'6s'
                            // });
                            $("#qwe").css({
                                "opacity": "0",
                                "display": "block"
                            }).show().animate({
                                opacity: 1
                            });
                            $("#zoom").css({
                                "display": "block",
                                "transition": "3s",
                                "animation-delay": "3s",
                                "animation-duration": "4.9s"
                            }).show().animate({
                            });
                            $("#img1").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "55%",
                                bottom: "8%",
                                right: "2%",
                                transform: "scale(1.6,1.6)",
                                transition: "2s"
                            });
                            $("#img2").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "14%",
                                top: "15%",
                                right: "-5%",
                                transition: "3s"
                            });
                            $("#img3").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "20%",
                                bottom: "5%",
                                left: "-5%",
                                transition: "3s"
                            });
                            $("#img4").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "70%",
                                top: "-13%",
                                right: "10%",
                                transition: "3s"
                            });
                            $("#img5").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "10%",
                                top: "20%",
                                left: "-11%",
                                transition: "3s"
                            });
                            $("#img6").animate({
                                position: "absolute",
                                zIndex: "0",
                                width: "24%",
                                top: "30%",
                                right: "-14%",
                                transition: "3s"
                            });
                        });
                    });
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: "stripe-jsaoxo",
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: "stripe-jsaoxowwmnmcdeepolvaswe",
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                onLoad: ()=>{
                    let $1 = document;
                    let modalBtn = $1.querySelector("#sub3");
                    let modal = $1.querySelector("#modal-parent3");
                    let close = $1.querySelector("#X3");
                    let section = $1.querySelector("#root");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((theme)=>({
        iframe: {
            height: "900px",
            [theme.breakpoints.down("600")]: {
                height: "600px"
            }
        },
        titleroot: {
            width: "100%",
            position: "relative",
            backgroundColor: "#0C0617"
        },
        root: {
            backgroundColor: "#0C0617",
            paddingTop: "80px"
        },
        root2: {
            width: "90%"
        },
        root3: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        imgspan: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        img: {
            borderRadius: "50%",
            width: "110px",
            marginTop: "150px"
        },
        back: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative"
        },
        back1: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative"
        },
        title: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }
    }));
function MetaSlider() {
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            style: {
                backgroundColor: "#0C0617"
            },
            className: classes.iframe,
            id: "xxx",
            title: "xxx",
            width: "100%",
            height: "auto",
            frameBorder: "value",
            allowTransparency: true,
            srcDoc: `
          <!doctype html>
          <html>
          <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TwitterFollowers</title>
          
            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />




            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.min.js"></script>
            <style>

            @font-face {
              font-family: "HelveticaNow"; 
                src: url(https://assets.codepen.io/5286152/HelveticaNowText-Regular.ttf);
              }
              body{
                overflow:hidden
              }
              
              .introcontainer {
                width: 100%;
                height: 97%;
                margin: auto;
                overflow:hidden
              }
              .swiper-container {
                width: 97%;
                height: 100vh;
                background: #0C0617 ;
                overflow:hidden
              }
              .swiper-slide {
                width: 600px ;
                height: 100%;
                display: flex;
                margin: auto;
                align-items: center;
                justify-content: center;
                background: #0C0617;
                overflow:hidden
              }
              .cards {
                width: 600px;
                height: auto;
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
              }
              .card img {
                object-fit: cover;
               
                border-radius: 5px;
                width: 500px;
                height: auto;
                min-height: 50vh;
                padding: 0;
                margin: 0;
              }
              
              .card.two img {
                filter: sepia(100%) hue-rotate(190deg) saturate(300%);
              }
              .card.three img {
                height: 50vh;
              }
              .card.four img {
                filter: invert(4%) sepia(75%) saturate(500%) hue-rotate(356deg) brightness(70%) contrast(103%);
              }
              .text {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: 0px;
                max-width: 100%;
                width: 500px;
                
              }
              
              .title-box {
                display: flex;
                text-align: left;
                width:300px ;
                flex-direction: column;
                flex-wrap: nowrap;
                position: absolute;
                top: 120%;
                left: 30%;
                right: 0 !important;
                bottom: 50px;
                justify-content: center;
                color: #fff;
                opacity: 0;
                z-index: 15;
              }
              .title-box h1 {
                display: block;
                font-family: "Futura";
                font-weight: 700;
                line-height: normal;
                width: 300px;
                font-size: 3vmin;
              }
              .title-box p {
                font-family: "HelveticaNow";
                font-size: 2vmin;
                padding-top: 0;
                margin: 0;
                padding-left: 1%;
                width: 300px;
              }
              .card .title-box .seperator {
                height: 1px;
                width:10%;
                background: white;
                position: absolute;
                content: "";
                left: -15%;
                top: 50%;  
              }
              .swiper-slide .title-box{
                transform: translateX(-50%);
                transition: all .7s ease .3s;
              }
              .swiper-slide-active .title-box {
                transform: translateX(0%);
                opacity: 1;
                transition: all .7s ease;
                
              }
              
              .swiper-scrollbar {
                background: white;
              }
              
              .swiper-slide .card img {
                transition: filter .7s ease;
                filter: grayscale(100%);
                transform:scale(0.8,0.8);
                transition: all .7s ease;
              }
              .swiper-slide-active .card img {
                filter: grayscale(0%) brightness(60%);
                transform:scale(1.4,1.4);
                transition: all .7s ease;
              }
              
              .swiper-pagination-bullet-active {
                background: white !important;
                width: 25px !important;
                height: 5px !important;
                border-radius: 0 !important;
              }
              .swiper-pagination-bullet {
                background: whitesmoke !important;
                width: 25px !important;
                height: 5px !important;
                border-radius: 0!important;
              }
              .swiper-arrows {
                width: 100%;
                height: 60px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 20%;
              }
              .swiper-button-prev,
              .swiper-button-next {
                width: 60px !important;
                height: 60px;
                background-image: none !important;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                bottom: 0;
                margin: 0;
                border-radius: 5px;
                transition: all 0.3s ease;
              }
              .swiper-button-prev {
                left: 0px !important;
                right: auto !important;
                background-color: rgba(255, 255, 255, 0.7);
              }
              .swiper-button-next {
                right: 0px !important;
                background-color: rgba(255, 255, 255, 0.8);
              }
              .swiper-button-prev span,
              .swiper-button-next span {
                width: 7px;
                height: 7px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                position: absolute;
                border: solid 2px #666;
                border-left: 0;
                border-bottom: 0;
                transition: all 0.1s ease;
              }
              .swiper-button-prev span {
                transform: rotate(-135deg);
                left: 49%;
              }
              .swiper-button-next span {
                transform: rotate(45deg);
                right: 49%;
              }
              .swiper-button-prev:hover span,
              .swiper-button-next:hover span {
                width: 5px;
                height: 5px;
              }
              .swiper-button-prev:after,
              .swiper-button-next:after {
                width: 0px;
                height: inherit;
                content: "";
                position: absolute;
                border-radius: 5px;
                background-color: white;
                transition: all 0.4s ease-in-out;
                z-index: -1;
                opacity: 0.8;
              }
              .swiper-button-prev:after {
                right: 0;
              }
              .swiper-button-next:after {
                left: 0;
              }
              .swiper-button-prev:hover:after,
              .swiper-button-next:hover:after {
                width: inherit;
              }
              .swiper-button-disabled {
                opacity: 1 !important;
              }
              .swiper-button-disabled.swiper-button-prev span,
              .swiper-button-disabled.swiper-button-next span {
                opacity: 0.2;
              }
              @media screen and (max-width: 1500px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 500px;
                  height: auto;
                  min-height: 50vh;
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(1.1,1.1);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 1200px) {
                .swiper-slide {
                  width: 400px ;
                  height: 100%;
                  display: flex;
                  margin: auto;
                  align-items: center;
                  justify-content: center;
                  background: #0C0617;
                  overflow:hidden
                }
                .cards {
                  width: 400px;
                  height: auto;
                  display: flex;
                  position: relative;
                  align-items: center;
                  justify-content: center;
                }
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 500px !important;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(1,1);
                  transition: all .7s ease;
                }
              }
      
              @media screen and (max-width: 1000px) {
                .swiper-pagination-bullet-active {
                  background: white !important;
                  width: 25px !important;
                  height: 5px !important;
                  border-radius: 0 !important;
                  display:none
                }
                .swiper-pagination-bullet {
                  background: whitesmoke !important;
                  width: 25px !important;
                  height: 5px !important;
                  border-radius: 0!important;
                  display:none
                }
              }
              @media screen and (max-width: 900px) {
                      
              .title-box {
                display: flex;
                text-align: left;
                width:300px ;
                flex-direction: column;
                flex-wrap: nowrap;
                position: absolute;
                top: 70%;
                left: 35%;
                right: 0 !important;
                bottom: 50px;
                justify-content: center;
                color: #fff;
                opacity: 0;
                z-index: 15;
                font-size:40px
              }
                .swiper-arrows {
                  width: 100%;
                  height: 50px;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  bottom: 50%;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 50px !important;
                  height: 50px;
                  background-image: none !important;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 0;
                  bottom: 0;
                  margin: 0;
                  border-radius: 5px;
                  transition: all 0.3s ease;
                }
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 450px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.4,0.4);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.8,0.8);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 700px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 400px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.2,0.2);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 700px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 350px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.1,0.1);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.4,0.4);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 512px) {
                .swiper-arrows {
                  width: 100%;
                  height: 30px;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  bottom: 50%;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 30px !important;
                  height: 30px;
                  background-image: none !important;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 0;
                  bottom: 0;
                  margin: 0;
                  border-radius: 5px;
                  transition: all 0.3s ease;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 60px;
                  height: 60px;
                  bottom: 0;
                }
            
                .swiper-button-prev {
                  right: 60px;
                }
                .swiper-button-prev span {
                  left: 45%;
                }
                .swiper-button-next span {
                  right: 45%;
                }
              }
              .swiper-button-next::after, .swiper-container-rtl .swiper-button-prev::after {
                content: "attr" !important;
              }
              .swiper-button-prev::after, .swiper-container-rtl .swiper-button-prev::after {
               content: "attr" !important;
              }
    

      
      </style> 
         </head>
          <body>
            
          <div class="introcontainer">
          <!-- Slider main container -->
          <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card ong">
                    <img src="/img/metaslider/cofee shop 1.png"/>
                    <div class="text">
                      </div>
                  <div class="title-box">
                    <h1>Bean There</h1>
                  
                    <div class="seperator"></div>
                  </div>
                    </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card two">
                    <img src="/img/metaslider/cofee shop 2.png" alt="" />
                  <div class="text">
                      </div>
                  <div class="title-box">
                    <h1>Haven Cafe</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card three">
                    <img src="/img/metaslider/flower garden.png" alt="" />
                    <div class="text">
                      </div>
           
                  <div class="title-box">
                    <h1>Moon Flower</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card four">
                    <img src="/img/metaslider/kiosk 1.png" alt="" />
                    <div class="text">
                      </div>
        
                  <div class="title-box">
                    <h1>Red Revoloution</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
              <div class="cards">
                <div class="card ong">
                  <img src="/img/metaslider/kiosk 2.png"/>
                  <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Jasper Wind</h1>
            
                  <div class="seperator"></div>
                </div>
                  </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card two">
                  <img src="/img/metaslider/kiosk 3.png" alt="" />
                <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Sunrise</h1>
                
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card three">
                  <img src="/img/metaslider/kiosk 4.png" alt="" />
                  <div class="text">
                    </div>
         
                <div class="title-box">
                  <h1>Rossete Nebula</h1>
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card four">
                  <img src="/img/metaslider/kiosk 5.png" alt="" />
                  <div class="text">
                    </div>
      
                <div class="title-box">
                  <h1>Involute Square</h1>
              
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card ong">
                  <img src="/img/metaslider/kiosk 6.png"/>
                  <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Wheaten Shop</h1>
              
                  <div class="seperator"></div>
                </div>
                  </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card two">
                  <img src="/img/metaslider/kiosk 7.png" alt="" />
                <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Sapphire Surge</h1>
                  
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card three">
                  <img src="/img/metaslider/kiosk 8.png" alt="" />
                  <div class="text">
                    </div>
         
                <div class="title-box">
                  <h1>Ocean Aglae</h1>
               
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card four">
                  <img src="/img/metaslider/kiosk 9.png" alt="" />
                  <div class="text">
                    </div>
      
                <div class="title-box">
                  <h1>Blooming Spring</h1>
                 
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
            <div class="cards">
              <div class="card ong">
                <img src="/img/metaslider/kiosk 10.png"/>
                <div class="text">
                  </div>
              <div class="title-box">
                <h1>Zany Shop</h1>
 
                <div class="seperator"></div>
              </div>
                </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card two">
                <img src="/img/metaslider/kiosk 11.png" alt="" />
              <div class="text">
                  </div>
              <div class="title-box">
                <h1>Blue Signal</h1>
                
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card three">
                <img src="/img/metaslider/kiosk 12.png" alt="" />
                <div class="text">
                  </div>
       
              <div class="title-box">
                <h1>Green Gables</h1>
          
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card four">
                <img src="/img/metaslider/kiosk 13.png" alt="" />
                <div class="text">
                  </div>
    
              <div class="title-box">
                <h1>Berry</h1>
             
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card ong">
                <img src="/img/metaslider/kiosk 14.png"/>
                <div class="text">
                  </div>
              <div class="title-box">
                <h1>Purple Trapezoid</h1>
   
                <div class="seperator"></div>
              </div>
                </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card two">
                <img src="/img/metaslider/kiosk 15.png" alt="" />
              <div class="text">
                  </div>
              <div class="title-box">
                <h1>Viola</h1>
         
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card three">
                <img src="/img/metaslider/kiosk 16.png" alt="" />
                <div class="text">
                  </div>
       
              <div class="title-box">
                <h1>Ruby</h1>
        
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card four">
                <img src="/img/metaslider/kiosk 17.png" alt="" />
                <div class="text">
                  </div>
    
              <div class="title-box">
                <h1>Green Revolution</h1>
               
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
          <div class="cards">
            <div class="card ong">
              <img src="/img/metaslider/kiosk 18.png"/>
              <div class="text">
                </div>
            <div class="title-box">
              <h1>CREATIVE COLLECTIVE.</h1>

              <div class="seperator"></div>
            </div>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card two">
              <img src="/img/metaslider/kiosk 19.png" alt="" />
            <div class="text">
                </div>
            <div class="title-box">
              <h1>FOR ARTISTS.</h1>
              
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card three">
              <img src="/img/metaslider/kiosk 20.png" alt="" />
              <div class="text">
                </div>
     
            <div class="title-box">
              <h1>Deep Sky</h1>
          
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card four">
              <img src="/img/metaslider/kiosk 21.png" alt="" />
              <div class="text">
                </div>
  
            <div class="title-box">
              <h1>Sylvan</h1>
           
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card ong">
              <img src="/img/metaslider/kiosk 22.png"/>
              <div class="text">
                </div>
            <div class="title-box">
              <h1>CREATIVE COLLECTIVE.</h1>
           
              <div class="seperator"></div>
            </div>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card two">
              <img src="/img/metaslider/kiosk 23.png" alt="" />
            <div class="text">
                </div>
            <div class="title-box">
              <h1>Carbon</h1>
           
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card three">
              <img src="/img/metaslider/kiosk 24.png" alt="" />
              <div class="text">
                </div>
     
            <div class="title-box">
              <h1>Orion Nebula</h1>
             
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card four">
              <img src="/img/metaslider/pool.png" alt="" />
              <div class="text">
                </div>
  
            <div class="title-box">
              <h1>Blue Bottle</h1>
         
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
        <div class="cards">
          <div class="card ong">
            <img src="/img/metaslider/sitting area.png"/>
            <div class="text">
              </div>
          <div class="title-box">
            <h1>Sound & Fog</h1>
         
            <div class="seperator"></div>
          </div>
            </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="cards">
          <div class="card two">
            <img  src="/img/metaslider/Roof garden coffeeshop.png" alt="" />
          <div class="text">
              </div>
          <div class="title-box">
            <h1>FOR ARTISTS.</h1>
        
            <div class="seperator"></div>
          </div>
        </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="cards">
          <div class="card three">
            <img src="/img/metaslider/sunshade.png"  alt="" />
            <div class="text">
              </div>
   
          <div class="title-box">
            <h1>Haven Cafe</h1>
          
            <div class="seperator"></div>
          </div>
        </div>
        </div>
      </div>

            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        
            <!-- If we need navigation buttons -->
             <div class="swiper-arrows">
            <div class="swiper-button-prev"><span></span></div>
            <div class="swiper-button-next"><span></span></div>
          </div>
        
            <!-- If we need scrollbar -->
          </div>
        </div>

  <script>
  const swiper = new Swiper('.swiper-container', {
   speed: 500,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   centeredSlides: true,
   paginationClickable: true,
   watchSlidesProgress: true,
    loop: true,
   slidesPerView: 2,
   spaceBetween: 30,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
 </script>

          </body>
          </html>
          `
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaSlider);


/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((theme)=>({
        iframe: {
            height: "900px",
            [theme.breakpoints.down("600")]: {
                height: "1100px"
            }
        },
        titleroot: {
            width: "100%",
            position: "relative",
            backgroundColor: "#0C0617"
        },
        root: {
            backgroundColor: "#0C0617",
            paddingTop: "80px"
        },
        root2: {
            width: "90%"
        },
        root3: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        imgspan: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        img: {
            borderRadius: "50%",
            width: "110px",
            marginTop: "150px"
        },
        back: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative"
        },
        back1: {
            backgroundImage: 'url("/img/header/event box.png")',
            width: "500px",
            height: "530px",
            backgroundSize: "100% 100%",
            padding: "10px 10px 10px 10px",
            position: "relative"
        },
        title: {
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }
    }));
function RoadMap() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.titleroot,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                "ROAD ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "title2sospan",
                                    children: "MAP"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: " ROAD MAP"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "roadmaptext",
                    children: "The Lucretius complex project is still in its early stages. Here\u2019s a brief overview of how far we have come and the exciting journey that lies ahead:"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                style: {
                    backgroundColor: "#1C224600"
                },
                className: classes.iframe,
                id: "xxx",
                title: "xxx",
                width: "100%",
                height: "auto",
                frameBorder: "value",
                allowTransparency: true,
                srcDoc: `
                    <!doctype html>
                    <html>
                    <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>TwitterFollowers</title>
                    
                        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                    
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
                    />
                    
                    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
                        <style>

                        @font-face {
                          font-family: myFirstFont;
                          src: url(/fonts//FiraSans-Regular.ttf);
                        }
                        
                        html, body {
                            position: relative;
                            height: 100%;
                            overflow-y: hidden;
                            background: #eee00;
                          }
                          body {
                            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                            font-size: 16px;
                            margin: 0;
                            padding: 0;
                            overflow-x: scroll;
                          }
                          body::-webkit-scrollbar {
                            width: 5px;
                            height: 9px;
                          }
                          
                          body::-webkit-scrollbar-track {
                            background-color: darkgrey;
                            border-radius: 100px;
                          }
                          
                          body::-webkit-scrollbar-thumb {
                            background-image: linear-gradient(90deg, #D0368A 0%, #708AD4 99%);
                            box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
                            border-radius: 100px;
                          }
                          
                          .swiper-container-wrapper--timeline .swiper-slide {
                            display: flex;
                            background-color:rgba(255, 255, 255, 0.247);
                            min-height: 400px;
                            align-items: center;
                            justify-content: center;
                            border-radius: 10px;
                            padding:10px 10px 10px 10px;
                          }
                          @media only screen and (max-width: 600px){
                            .swiper-container-wrapper--timeline .swiper-slide {
                              display: flex;
                              background-color:rgba(255, 255, 255, 0.247);
                              min-height: 770px;
                              align-items: center;
                              justify-content: center;
                              border-radius: 10px;
                              padding:10px 10px 10px 10px;
                            }
                          }
                       per-container-wrapper--timeline .swiper-slide .container {
                            padding: 0;
                            width: 100%;
                            
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-slide .title {
                            font-size: 18px;
                            opacity: 0;
                            transition: 0.5s ease 0.5s;
                            font-family: myFirstFont;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-slide-active .title {
                            opacity: 1;
                            color:white;
                            font-size:20px;
                            font-family: myFirstFont;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar {
                            position: relative;
                            margin-bottom: 70px;
                            background-color: #eee00;
                            height: 4px;
                            border-bottom: 2px solid white;
                            width: 1200px;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar-fill {
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            width: 2100px;
                            height: 4px;
                            top: 2px;
                            z-index:1000
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar:before {
                            position: absolute;
                            top: 2px;
                            left: -100%;
                            width: 100%;
                            height: 4px;
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            content: "";
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar:after {
                            position: absolute;
                            top: 3px;
                            right: -100%;
                            width: 100%;
                            height: 2px;
                            background-color: white;
                            content: "";
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom {
                            position: relative;
                            list-style: none;
                            margin: 1rem 0;
                            padding: 0;
                            display: flex;
                            line-height: 1.66;
                            bottom: 0;
                            z-index: 11;
                            width: 2100px;
                            display: flex;
                        
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch {
                            position: relative;
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            display: block;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title {
                            position: absolute;
                            font-weight: 400;
                            right: 0;
                            transform: translateX(50%);
                            transition: 0.2s all ease-in-out;
                            transition-delay: 0s;
                            cursor: pointer;
                            z-index: 1;
                            background-image:linear-gradient(90deg, #542579, #941375, #941375);
                            -webkit-background-clip: text;
                            color: transparent;
                            font-size:19px
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title:after {
                            position: absolute;
                            top: calc(100% + 19px);
                            right: 50%;
                            transform: translateX(50%) translateY(-50%);
                            width: 12px;
                            height: 12px;
                            background: #93208E;
                            border-radius: 2rem;
                            content: "";
                            transition: 0.2s all ease-in-out;
                            transition-delay: 0s;
                            z-index: 1;
                          }
                          
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title {
                            font-weight: 400;
                            transition-delay: 0.4s;
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            font-size:22px
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title:after {
                            background-image: linear-gradient(to right,#542579, #941375);
                            width: 25px;
                            height: 25px;
                            transition-delay: 0.4s;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active ~ .swiper-pagination-switch .switch-title {
                            color: white;
                            font-weight: 17px;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active ~ .swiper-pagination-switch .switch-title:after {
                            background: #888;
                            color:#93208E;
                          }
                          


                        </style> 
                    </head>
                    <body>



                    <div class="container">
                        <div class="swiper-container-wrapper swiper-container-wrapper--timeline">
                        
                            <ul class="swiper-pagination-custom">
                            <li class='swiper-pagination-switch first active'><span class='switch-title'>January 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>February 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>March 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>April 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>June 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q3 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q4 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>Q1 2023</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q2 2023</span></li>
                            <li class='swiper-pagination-switch last'><span class='switch-title'>Q3 2023</span></li>
                            </ul>

                            <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>

                            <div class="swiper swiper-container swiper-container--timeline">
                            <div class="swiper-wrapper">
                            
                                <div class="swiper-slide"><span class="title">
                                . Launched the first temporary version of the   Lucretius website for community members  to  catch the first glimpse of the Lucretius   Complex. 
                                     <br/><br/>
                                . Issued LUC tokens on the XRP Ledger   (with a total fixed supply of 1,000,000,000  tokens) 
                                  <br/><br/>
                                . Started building the Lucretius community   and spreading the word across all social   media channels. We quickly established   rapidly expanding communities on Twitter,  Telegram, Discord, and YouTube.
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                . Released the first version of the Lucretius  whitepaper to acquaint members of the   community with all the unique features of  the Lucretius complex and information  regarding tokenomics and DeFi offerings. 
                                 <br/><br/>
                                . Released the first update for the Lucretius   website to remove bugs and improve   performance. 
                                 <br/><br/>
                                .	Organized the first round of the private  sale events for the $LUC token on  the Lucretius website.
                                 <br/><br/>
                                .	Organize the second round of the private   sale events for the $LUC token on  the Lucretius website.
                                 <br/><br/>
                                .	Hosted the $LUC token Initial Exchange  Offering (IEO) on Bitrue.com
                                 <br/><br/>
                                .	Listed the $LUC tokens on Centralized   Exchange (CEX) for investors and  other members of the community  to commence market trading. 
                                 <br/><br/>
                                .	Released a second update for the Lucretius   website to improve performance  and deliver a fun user experience. 
                                
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Released the first map of Lucretius  world and a plot of the Lucretius  complex for members of the community  to get a bird’s eye view of the  fascinating metaverse under  construction. 
                                     <br/><br/>
                                .	Showcased some game starter avatars  that community members will meet  inside the Lucretius complex  upon completion. 
                                     <br/><br/>
                                .	Listed the LUC token on four major  Centralized Exchanges (CEX):  MEXC, Bitrue, Probit and XT.com. </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Released the first video teaser for the  Lucretius complex and game on all  our social media accounts  (Twitter, Telegram, Discord, and YouTube). 
                      <br/><br/>
                                .	Released more details about the staff,  features, avatars, lots, shops,  and NFTs that players will encounter  in the Lucretius complex after launch.
                                  <br/><br/>
                                .	Took a snapshot to capture the list of our  first 100K trustlines.  We will use the list to distribute  rewards as outlined in the  project whitepaper. 
                                  <br/><br/>
                                .	Took a snapshot to capture the list of our  first 50K followers on Twitter.  We will use the list to distribute  rewards as defined in the  project whitepaper. 
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Promoted the Lucretius complex by sharing  engaging content on our social media  accounts and leveraging crypto-influencers  with large audiences.
                      <br/><br/>
                    .	Hosted multiple Ask Me Anything (AMA)  sessions with major Centralized Exchanges  (CEX) like MEXC to attract new investors  and players into the Lucretius community.
                      <br/><br/>
                    .	Organized loyalty programs to reward  community members  (BMP list, Lucretius Ambassadors, etc.)
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Host several reward programs for members  of the Lucretius community.  Such as the Golden Piggy '36',  where participants will earn rewards  of up to 520% APY for holding on to  their wallet balance.
                                 <br/><br/>
                                .	Host the Lucretius Burn to Earn ‘25’  program, where token holders enjoy massive  rewards of up to 1040% APY for burning  their $LUC tokens after buying  from XRPL Decentralized Exchanges. 
                                 <br/><br/>
                                .	Host the Lucretius Buzz Program as an   avenue for investors and token holders   to maximize their holding in $LUC tokens   and XRP through four pools and 25  rounds of weekly rewards. 
                                 <br/><br/>
                                . 	Systematically double the volume of  liquidity  by releasing more $LUC tokens   into the market during the Lucretius Buzz  program, Golden Piggy ‘36’  and Burn to Earn ‘25’ programs.
                                 <br/><br/>
                                .	Mint all the assets in Lucretius Complex   as NFTs so that players and other  community members can acquire them,  keep them, and even trade  them for a profit. 
                                 <br/><br/>
                                .	Continue to expand the Lucretius   community globally across all  social media platforms.
                                 <br/><br/>
                                .	Continue creating more liquidity to  facilitate lightning-fast transactions  and improve investors' trading experience. 
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Launch the game demo (test-net) for  players to get a taste of the non-stop  excitement that awaits them after the  launch of the Lucretius Complex.
                                 <br/><br/>
                                .	Finalize the blockchain API to  facilitate seamless integration of  all in-game assets and NFTs   into gameplay in the Lucretius complex. 
                                 <br/><br/>
                                .	Complete a final test on the game to   eliminate all bugs and guarantee  an unrivaled in-game experience  for all players.
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Officially launch the first   version of the Lucretius Complex  
                      <br/><br/>
                                .	Incentivize users to play by   offering attractive Decentralized  Finance (DeFi) products and services  (Play2Earn, staking, etc.). 
                                  <br/><br/>
                                .	Develop a web-based version of  the Lucretius game for players  to enjoy unrestricted access. 
                                </span></div>
                            <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                            .	Get listed in all top  crypto exchanges
                             <br/><br/>
                            .	Add two mini-games to the  website
                             <br/><br/>
                            .	Develop and launch the IOS  and Android versions of the  Lucretius Complex.  These versions will include additional  features and expanded complex space.  - add features, and expand  the complex spaces.
                            </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Add two more 3D games to the  metaverse to make drive player   engagement, interaction and retention 
                      <br/><br/>
                                .	Add more games to the metaverse   to make more interactions- Expand  the Lucretius complex to become  the Lucretius City.
                                </span></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                  

                            <script>
                            $(document).ready(function () {
                                var mySwiper = new Swiper(".swiper", {
                                  autoHeight: true,
                                  autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: false
                                  },
                                  speed: 500,
                                  direction: "horizontal",
                                  navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                  },
                                  pagination: {
                                    el: ".swiper-pagination",
                                    type: "progressbar"
                                  },
                                  loop: false,
                                  effect: "slide",
                                  spaceBetween: 30,
                                  on: {
                                    init: function () {
                                      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                      $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
                                    },
                                    slideChangeTransitionStart: function () {
                                      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                      $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
                                    }
                                  }
                                });
                                $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
                                  mySwiper.slideTo($(this).index());
                                  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                  $(this).addClass("active");
                                });
                              });
                            </script>
                    </body>
                    </html>
                    `
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoadMap);


/***/ }),

/***/ 4088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((theme)=>({
        welcomediv: {
            border: "solid 2px white",
            borderRadius: "15px",
            backgroundColor: "#1208276b",
            backdropFilter: "blur(10PX)",
            padding: "20px 20px 20px 20px",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "400px",
            color: "white",
            fontSize: "39px",
            transition: " 2s",
            cursor: "pointer",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "500px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            [theme.breakpoints.down("980")]: {
                fontSize: "34px"
            },
            [theme.breakpoints.down("710")]: {
                fontSize: "30px"
            },
            [theme.breakpoints.down("376")]: {
                fontSize: "26px"
            }
        },
        titleroot: {
            width: "100%",
            position: "relative",
            backgroundColor: "#0C0617"
        },
        imgroot: {
            width: "85%",
            backgroundPosition: "center center",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        },
        imgroot2: {
            position: "relative"
        },
        title: {
            width: "100%",
            borderRadius: "17px",
            [theme.breakpoints.down("1280")]: {
                marginTop: "50px"
            }
        }
    }));
function SocialMedia() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.titleroot,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                "SOCIAL ME",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "title2sospan",
                                    children: "DIA"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: "sotitle1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: " SOCIAL MEDIA"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classes.imgroot,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            lg: 6,
                            xl: 6,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                    className: classes.title,
                                    loop: true,
                                    controls: true,
                                    poster: "/img/teaser/Captureaa.PNG",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: "/img/teaser/06.mp4",
                                            type: "video/mp4"
                                        }),
                                        "Your browser does not support the video tag."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    className: "vidsotext",
                                    children: "Lucretius Teaser - 20% Development"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            lg: 6,
                            xl: 6,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                    className: classes.title,
                                    loop: true,
                                    controls: true,
                                    poster: "/img/teaser/Capture11.PNG",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: "/img/teaser/meta60.mp4",
                                            type: "video/mp4"
                                        }),
                                        "Your browser does not support the video tag."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    className: "vidsotext",
                                    children: "Lucretius Teaser - 60% Development"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialMedia);


/***/ }),

/***/ 3284:
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
/* harmony import */ var _component_element_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8566);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_element_Header__WEBPACK_IMPORTED_MODULE_2__]);
_component_element_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function HomePage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                        children: "Home Page"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_element_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;