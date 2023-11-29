const left = document.querySelector("#left");
const right = document.querySelector("#right");
const parar = document.querySelector("#parar");
const display = document.querySelector(".display")
let soma = 0;

parar.addEventListener("click",()=>{
    clearInterval(timer)
})
left.addEventListener("click",()=>{
    const timer = setInterval(()=>{
        soma-=90;
        if(soma > 0){
            let bar = document.querySelector("#bar");
            bar.style.transform = `translateX(${soma}px)`
            display.clientWidth -= 90;
           
        }else{
            bar.style.transform = `translateX(${50}px)`;
            clearTimeout(timer);
        };
    },1000)
})
right.addEventListener("click",()=>{
    const timer = setInterval(()=>{
        soma+=90;
        if(soma < 1440){
            let bar = document.querySelector("#bar");
            bar.style.transform = `translateX(${soma}px)`;
            console.log(bar.style.transform);
        }else{
            bar.style.transform = `translateX(${1390}px)`;
            clearTimeout(timer);
        };
    },1000);
})