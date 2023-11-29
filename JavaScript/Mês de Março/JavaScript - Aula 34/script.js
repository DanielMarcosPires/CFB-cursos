const c1= [...document.querySelectorAll('.curso')]
    console.log(c1);

c1.map((gatilho)=>{
    gatilho.addEventListener('click',(e)=>{
        const tags = e.target
        tags.style.cssText = `
            background:red;
            transition:.5s
        `
    })
})