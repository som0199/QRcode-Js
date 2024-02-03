let form = document.querySelector("form")
// let container = document.querySelector("#inside")
let input= document.querySelector("input")
let button = document.querySelector("button")
let image = document.querySelector("img")

const getQr = async(e) =>{

    e.preventDefault();
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=&data=${input.value}`);


    
    // console.log(response.url);
    // let image = document.createElement("img");
    // image.className = "card-img";
    image.style.width =  "200px"
    image.style.height ="200px"

    image.setAttribute("src", response.url)
    // container.appendChild(image)
 
    form.reset();
};
form.addEventListener("submit", getQr)