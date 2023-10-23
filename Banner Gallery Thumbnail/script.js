const largeImg = document.getElementById("large-img");
const productImg = document.querySelectorAll(".img-small");

productImg.forEach((img) => {
    img.addEventListener("click", (e) =>{
        let src = e.target.getAttribute("src");
        //console.log(e);
        largeImg.src = src;
    })
})