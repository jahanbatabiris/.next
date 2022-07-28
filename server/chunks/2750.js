"use strict";
exports.id = 2750;
exports.ids = [2750];
exports.modules = {

/***/ 2750:
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
        }
    }));
function RichList() {
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
                        children: "Rich List"
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        style: {
                            color: "white",
                            textAlign: "center"
                        },
                        variant: "h4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Rich List"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        style: {
                            height: "1200px",
                            backgroundColor: "#1C2246"
                        },
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
          <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
          <style>

  
          @font-face {
            font-family:robo;
            src: url('/fonts/Roboto-Regular.ttf');
          }

          body{
              font-family:RobotoCondensed;
              background-color:#0C0617;
              background-size: 100% 100%;
              background-repeat: no-repeat; 
              overflow: hidden;
              height: auto;
              text-align: center;
              background-position: center center;
              justify-content: center;
              align-items: center;
              margin: auto;
              display: flex;
          }
         
          .div {
              text-align: center;
              width: 90%;
              height: 850px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              padding-top: 30px;
              padding-bottom: 30px;
              padding-left: 30px;
              padding-right: 30px;
              border-radius: 10px; 
              overflow: hidden;
          }  
          .divinside{
            overflow: hidden;
            border-radius: 10px; 
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            height: 95%;
          }
   
          #myInput {
            width: 100%;
            background-color:#8E5FC300;
            height: 70px;
            border-radius: 100px; 
            padding-left:20px;
            border: solid 2px white;
            color:white;
            font-size:22px
          }
  
          ::-webkit-input-placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              margin:13px
          }
  
          :-ms-input-placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              margin:13px
          }
  
          ::placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              padding-left:20px !important
          }
  
          input[type="text"]::placeholder {
              text-align: left;
              font-size:20px
          }
          .tableroot{
              height: 99%;
              width: 100%;
              overflow: scroll;
          }
  
          ::-webkit-scrollbar {
              width: 8px;
      }

      ::-webkit-scrollbar-track {
          background-color: #f7f7f7;
          border-radius: 50px;
          width: 8px;
      }

      ::-webkit-scrollbar-thumb {
          background-color: #8b9dc3;
          border-radius: 50px;
          width: 8px;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd00;
      }
      
      th, td {
        text-align: center;
        padding: 16px;
        color:white;
        font-size:20px;
        font-family:robo !important;
        
      }
      th{
          color:#EF9630;
          font-size:22px;
          
      }
      .thone{
          border-bottom-left-radius:100px;
          border-top-left-radius:100px
      }
      
      .first{
        border-bottom-left-radius:100px;
        border-top-left-radius:100px
      }
      .last{
        border-bottom-right-radius:100px;
        border-top-right-radius:100px
      }


      tr:nth-child(even) {
        background-color: #ffffff28;
        border-radius: 100px !important;
      }
      tr{
        border-radius: 100px !important;
      }
      .fa-search{
          color:gray !important;
          position:absolute;
          right:18px;
          top:25px;
          font-size:29px;
      }

      .inputroot{
        position: relative;
        width: 99%;
        height: 57px;

        
    }

    
          @media screen and (max-width: 500px){

          .inputroot{
              position: relative;
              width: 95%;
            
              height: 57px;
              border-radius: 10px; 
              
          }
          ::placeholder {
            text-align: left;
            color: gray;
            font-size:12px;
            padding-left:0px !important
        }
        .fa-search{
            color:gray !important;
            position:absolute;
            right:18px;
            top:25px;
            font-size:29px;
            display:none
        }

              }
      
      </style> 
         </head>
          <body>
            
          <div style="margin-top: 10px;" class="div"  id="root">
          <div class="divinside">
             
          <div class="inputroot">
                 <input class="inputmodal" type="text" id="myInput" onkeyup="myFunction1()" placeholder="Enter Your Wallet Address Here" dir="ltr">
                 <i class='fas fa-search'></i>
          </div>
          <br/> <br/> <br/>
          <div class="tableroot" style="overflow-x:auto;direction: ltr;">
              <table id="myTable">
                  <tr class="one" style="border-radius: 100px !important;">
                      <th class="thone">Index</th>
                      <th>Wallet Address</th>
                      <th>Balance</th>
                      <th class="thtwo">Currency</th>
                  </tr>
                  <tr v-for="(item, index) in obj"  style="border-radius: 100px !important;">
                  <td class="align-middle text-center first">
                      <p> {{index+startSlice+1}}</p>


                  </td>
                  <td class="align-middle text-center">
                      <p> {{item.address}}</p>

                  </td>
                  <td class="align-middle text-center">
                      <p>
                          {{new Intl.NumberFormat().format(item.balance)}}
                      </p>
                  </td>
                  <td class="align-middle text-center last">
                      <p>
                          {{item.currency}}
                      </p>
                  </td>

              </tr>

              </table>
              <br/> <br/> <br/> <br/> <br/>
          </div>
          <br/> <br/> <br/> <br/>
          </div>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div>





          <script>
          function myFunction1() {
              // Declare variables 
              var input, filter, table, tr, td, i;
              input = document.getElementById("myInput");
              filter = input.value.toUpperCase();
              table = document.getElementById("myTable");
              tr = table.getElementsByTagName("tr");
  
              // Loop through all table rows, and hide those who don't match the search query
              for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName("td")[1];
                  if (td) {
                      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          tr[i].style.display = "";
                          console.log(tr[i].cells[1].firstChild.data)
                      } else {
                          tr[i].style.display = "none";
                          // # # # # #
                          // display: none
                          // # # # #
                      }
                  }
              }
          }
         </script> 
         <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
         <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
         <script>
         const div = document.querySelector('div')
         div.addEventListener('dragstart', (e) => {
             e.preventDefault()
         })
     
         div.addEventListener('drop', (e) => {
             e.preventDefault()
         })
         </script>
         <script>
         new Vue({
             el: "#root",
             data: {
                 obj: [],
                 w8: true,
                 resultBack: false,
                 startSlice: 0,
                 numberSlice: 50,
 
             },
             methods: {
                 getData: function() {
                     console.log('run')
                     axios.get('https://lucretius.network/richList/trustlines').then(res => {
                         res.data.forEach(element => {
                             if (
                                 (parseFloat(element.state.balance) * -1) >= 1
                             ) {
                                 this.obj.push({
                                     "balance": (parseFloat(element.state.balance) * -1).toFixed(2),
                                     "address": element.specification.counterparty,
                                     "currency": element.specification.currency
                                 })
                             }
 
                         })
                         this.obj.sort(function(a, b) {
                             return b.balance - a.balance;
                         });
                         console.log(this.obj)
                         console.log(this.obj.length)
                         this.w8 = false;
                         this.resultBack = true;
                     })
                 },
                 pagination: function(x) {
                     if (x) {
 
                         this.startSlice = this.startSlice + this.numberSlice
                         this.endSlice = this.endSlice + this.numberSlice
                     } else {
                         this.endSlice = this.endSlice - this.numberSlice
                         this.startSlice = this.startSlice - this.numberSlice
                     }
                 }
             },
             mounted() {
                 this.getData()
             }
 
 
 
         })
     </script>
          </body>
          </html>
          `
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "stripe-jsaoxowwmaqaaaxsz",
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
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;