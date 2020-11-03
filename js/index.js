let buttonMenu = document.querySelector(".menu__mobile");
let menu = document.querySelector("#mainMenu")
buttonMenu.addEventListener('click', ()=>{
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }
    else{
        menu.classList.add("active");
    }
    //menu.classList = "";
    //console.log(menu.getAttribute("class"))
})
