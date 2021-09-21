const target = document.querySelector(".target")
const scrollToTop = document.querySelector(".scrollToTop")

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTop.style.bottom = "3rem"
      scrollToTop.classList.add("showscrollToTop")
    }
    else {
      if (scrollToTop.classList.contains("showscrollToTop") && entry.boundingClientRect.y > 0){
        scrollToTop.classList.remove("showscrollToTop")
        scrollToTop.addEventListener("transitioned", removeScrollFromView)
      }
    }
  })
})


function removeScrollFromView() {
  scrollToTop.remove.addEventListener("transitioned", removeScrollFromView)
  if (scrollToTop.classList.contains("showscrollToTop")) return
  scrollToTop.style.bottom = "-200px"
}

observer.observe(target)

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
