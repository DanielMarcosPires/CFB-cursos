function handleClick(){
 let table = document.querySelector("table");

 const win = window.open('','','height=700','width700');
  const estilo = `
    <style>
      table{
        width:100%;
        font:25px Calibri;
      }
      table, td, th{
        border:solid 2px #888;
        border-collapse: collapse;
      }
    </style>
  `
 win.document.write(
  `
  <html>
    <head>
      <title>CFB Cursos</title>
      ${estilo}
    </head>
    <body>
      ${table.innerHTML}
    </body>
  </html>
  `
 )
 win.print()
}