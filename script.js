const images = document.querySelectorAll("[data-src]")

function preloadImage(image) {
    const src = image.getAttribute("data-src")
    if (!src) 
    {
        return;
    } 
    image.src = src;
    image.classList.add("slide")
}

 const imageOptions = {
     threshold: 0,
     rootMargin: "0px 0px 0px 0px"
 }

 const imageObserver = new IntersectionObserver(
 (entries, imageObserver) => {
     entries.forEach(entry => {
     if (!entry.isIntersecting)
     {
         return;
     } else {
        preloadImage(entry.target);
        imageObserver.unobserve(entry.target)
     }
    })
 }, imageOptions)

 images.forEach(image => {
    imageObserver.observe(image)
 })