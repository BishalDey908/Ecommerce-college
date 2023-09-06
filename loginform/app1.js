

document.querySelector(".signin").addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".registration").style.display="block"
    document.querySelector(".login").style.display="none"
    document.querySelector("#input-email").value=""
    document.querySelector("#input-password").value=""
    console.log("hello 556")
})

document.querySelector("#log").addEventListener("click",(event1)=>{
    event1.preventDefault()
    document.querySelector(".registration").style.display="none"
    document.querySelector(".login").style.display="block"
    document.querySelector("#input-email").value=""
    document.querySelector("#input-password").value=""
    console.log("hello 56")
})


let password = document.querySelector("#input-password")
let eye = document.querySelector("#eye")
let eye1 = document.querySelector("#eye1")
let change =document.querySelector(".password")

eye.addEventListener("click",()=>{
    console.log(password.type)
    if (password.type === "password"){
        password.type = "text";
        eye.style.display="none"
        eye1.style.display="block"
        console.log("ok")
    }
})


eye1.addEventListener("click", () => {
    if(password.type==="text"){
        password.type= "password"
        eye.style.display="block"
        eye1.style.display="none"
    }
})



let regpassword = document.querySelector(".signInPassword")
let ey = document.querySelector("#ey")
let ey1 = document.querySelector("#ey1")
// let change =document.querySelector(".password")

ey.addEventListener("click",()=>{
    console.log(password.type)
    if (regpassword.type === "password"){
        regpassword.type = "text";
        ey.style.display="none"
        ey1.style.display="block"
        console.log("ok")
    }
})


ey1.addEventListener("click", () => {
    if(regpassword.type==="text"){
        regpassword.type= "password"
        ey.style.display="block"
        ey1.style.display="none"
    }
})