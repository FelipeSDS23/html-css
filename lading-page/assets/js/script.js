/*Aparece e some menu*/
function clickMenu(){
    var img = document.getElementById('button_img')
    var menu = document.getElementById('menu')

    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
        img.setAttribute('src','assets/img/open_menu.svg')
    }
    else{
        menu.style.display = 'flex'
        img.setAttribute('src','assets/img/close_menu.svg')
    }
}

/*Controla menu quando a tela é redimencionada*/
function resizeScreen(){
    var size = window.innerWidth;
    var menu = document.getElementById('menu')
    var img = document.getElementById('button_img')

    if (size <= 800){
        menu.style.display = 'none'
        img.setAttribute('src','assets/img/open_menu.svg')
    }
    else{
        menu.style.display = 'block'
    }
}

/*Some menu mobile quando clica em opção*/ 
function mobile_opt(){
    var size = window.innerWidth;
    var menu = document.getElementById('menu')
    var img = document.getElementById('button_img')

    if (size <= 800){
        menu.style.display = 'none'
        img.setAttribute('src','assets/img/open_menu.svg')
    }
    else {
        menu.style.display = 'block'
    }
}