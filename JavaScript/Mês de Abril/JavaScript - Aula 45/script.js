const $display = document.querySelector('div')

const $addBlue = document.querySelector('#addBlue');
const $removeBlue = document.querySelector('#removeBlue');

    $addBlue.addEventListener("click",(e)=>{
        $display.setAttribute("class","azul")
    })
    $removeBlue.addEventListener('click',()=>{
        $display.removeAttribute('class',"azul")
    })
