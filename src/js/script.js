"use strict";

const squareLayout = document.querySelectorAll(".square__item"),
      rowLayout = document.querySelectorAll(".rect"),
      post = document.querySelector(".posts"),
      postsItem = document.querySelectorAll(".posts-item"),
      postItemImg = document.querySelectorAll(".post-item__img"),
      countersPosts = document.querySelectorAll(".counters-posts");


function clearClass() {
    squareLayout.forEach(item => item.classList.remove("active"))
    rowLayout.forEach(item => item.classList.remove("active"))


}

document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("square__item") || e.target.classList.contains("square-wrapper")) {
        clearClass();
        squareLayout.forEach(item => item.classList.add("active"))

        post.classList.add("posts--change-layout")
        postsItem.forEach(item => item.classList.add("posts-item--change-layout"))
        postItemImg.forEach(item => item.classList.add("post-item__img--change-layout"))
        countersPosts.forEach(item => item.classList.add("counters-posts--change-layout"))  
    }
    if (e.target && e.target.classList.contains("rows-wrapper") || e.target.classList.contains("rows-item") || 
        e.target.classList.contains("rect")) {
        clearClass();
        rowLayout.forEach(item => item.classList.add("active"))
        post.classList.remove("posts--change-layout")
        postsItem.forEach(item => item.classList.remove("posts-item--change-layout"))
        postItemImg.forEach(item => item.classList.remove("post-item__img--change-layout"))
        countersPosts.forEach(item => item.classList.remove("counters-posts--change-layout"))
    }
})
