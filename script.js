import * as utils from "./utils.js"





// === Controlling video type (mobile vs desktop) ===
let current_view_mode

document.addEventListener("DOMContentLoaded", controlVideoType)
window.addEventListener("resize", controlVideoType)

function controlVideoType(){
  const vw = window.innerWidth

  if(vw >= 800 && current_view_mode != "desktop"){
    utils.setVideosDesktop()
    current_view_mode = "desktop"
  }
  
  if ( vw <= 800 && current_view_mode != "mobile"){
    utils.setVideosMobile()
    current_view_mode = "mobile"
  }
}








const videos = [...document.querySelectorAll("video")]

// videos.forEach(elem =>{
//   elem.pause()
// })







