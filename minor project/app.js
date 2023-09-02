












document.querySelector(".signin").addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".registration").style.display="block"
    document.querySelector(".login").style.display="none"
    console.log("hello 556")
})

document.querySelector("#log").addEventListener("click",(event1)=>{
    event1.preventDefault()
    document.querySelector(".registration").style.display="none"
    document.querySelector(".login").style.display="block"
    console.log("hello 56")
})