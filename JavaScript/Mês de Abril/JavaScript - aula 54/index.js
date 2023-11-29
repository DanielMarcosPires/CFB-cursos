let valores = [1,2,10,20];

    const operador =[
        (e)=>{
            let res = 0;
            for(v of valores){
                res+=v
           }
           return res;
        },
        (e)=>{
            for(v of valores){
                console.log(
                    `[${v}]`
                );
            }
        }
    ]

    operador.map((e)=>{
       console.log(
        `Resultado: ${e(valores)}`
       ); 
    })