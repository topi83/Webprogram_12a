const demo = document.querySelector("#demo")
// console.log(demo)
let isImgDisplayed = false

demo.addEventListener('mouseover', displayImg)
demo.addEventListener("mouseout", removeImg)

function displayImg(event) {
    // console.log(event);
    if (!isImgDisplayed && event.target === demo) {
        const img = document.createElement("img")
        // console.log(img);
        img.src = "./img/kep.jpg"
        img.alt = "elégtelen"

        demo.replaceChildren(img)
        isImgDisplayed = true
        
    }
    
}

function removeImg(event){
if (isImgDisplayed && event.target === demo) {
    
    const p = document.createElement("p")
    p.textContent = "hanyasra értékeltek?"
    // console.log(p);
    
    demo.replaceChildren(p)
    isImgDisplayed = false
}
    
}