const olhos=[...document.querySelectorAll(".olho")];

let posXmouse=0
let posYmouse=0

window.addEventListener("mousemove",(evt)=>{
    console.clear()
    posXmouse=evt.clientX;
    posYmouse=evt.clientY;

    const rot = Math.atan2(posYmouse,posXmouse)*180/Math.PI
    console.log(rot);

    olhos.forEach((o)=>{
        o.style.transform=`rotate(${rot}deg)`
    })
})
