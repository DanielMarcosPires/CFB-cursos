const left = document.querySelector("#left");
const right = document.querySelector("#right");
const display = document.querySelector(".display")
let soma = 0;

left.addEventListener("click",()=>{
    if(soma > 0){
        soma-=90;
        let bar = document.querySelector("#bar");
        bar.style.transform = `translateX(${soma}px)`
        display.clientWidth -= 90
       
    }else{
        bar.style.transform = `translateX(${50}px)`
    }
})
right.addEventListener("click",()=>{
        soma+=90;
        if(soma < 1440){
            let bar = document.querySelector("#bar");
            bar.style.transform = `translateX(${soma}px)`
            console.log(bar.style.transform);
        }else{
            bar.style.transform = `translateX(${1390}px)`
        }
})