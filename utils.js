





export function setVideosMobile(){
  const coffee = document.querySelector("[data-coffee-video]")
  const activity = document.querySelector("[data-activity-video]")
  // const to_do = document.querySelector("[data-to-do-video]")

  coffee.setAttribute("src", "./assets/videos/your cup of coffee mobile version.MP4")
  activity.setAttribute("src", "./assets/videos/activity generator mobile version.mp4")
  // to_do.setAttribute("src", "./assets/videos/to do list mobile version.mp4")
}

export function setVideosDesktop(){
  const coffee = document.querySelector("[data-coffee-video]")
  const activity = document.querySelector("[data-activity-video]")
  // const to_do = document.querySelector("[data-to-do-video]")

  coffee.setAttribute("src", "./assets/videos/your cup of coffee.mp4")
  activity.setAttribute("src", "./assets/videos/activity generator.mp4")
  // to_do.setAttribute("src", "./assets/videos/to do list.mp4")
}

export function setProjectImagesMobile(){
  const audiotech = document.querySelector("[data-audiotech-image]")
  const coffee = document.querySelector("[data-coffee-video]")
  const activity = document.querySelector("[data-activity-video]")


  audiotech.setAttribute("src", "./assets/img/audiotech store mobile.jpg")
  coffee.setAttribute("src", "./assets/videos/your cup of coffee mobile version.MP4")
  activity.setAttribute("src", "./assets/videos/activity generator mobile version.mp4")

  console.log('hii');
}

export function setProjectImagesDesktop(){
  const audiotech = document.querySelector("[data-audiotech-image]")
  const coffee = document.querySelector("[data-coffee-video]")
  const activity = document.querySelector("[data-activity-video]")

  audiotech.setAttribute("src", "./assets/img/audiotech store.png")
  coffee.setAttribute("src", "./assets/videos/your cup of coffee.mp4")
  activity.setAttribute("src", "./assets/videos/activity generator.mp4")
}
