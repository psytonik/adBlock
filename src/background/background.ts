// chrome.webRequest.onBeforeRequest.addListener((details)=>{//     const url:string = details.url;//     const filters:string[] = [//         "googleadservices",//         "tpc.googlesyndication",//         "g.doubleclick",//         "firstimpression",//         "taboola",//         "outbrain",//         "phoenix-widget",//         "dsp-rambler"//     ]//     for(let filter of filters){//         if(url.indexOf(filter) != -1){//             return {//                 cancel: true//             }//         }//     }//     return {//         cancel: false//     }// },{//     urls: [//         "<all_urls>",//     ]// },['blocking'])