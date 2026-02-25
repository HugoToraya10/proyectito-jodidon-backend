const buttonHTML = document.querySelector("button");
const botonConsulta = document.querySelector('button[name="consultar"]');
const input = document.querySelector("input");

buttonHTML.addEventListener("click", () => {
    fetch("http://localhost:4000/registrar",{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({ texto: input.value }),
    }
    )
});


const tabla = document.querySelector("table").querySelector("tbody");
botonConsulta.addEventListener("click", () =>{
    fetch("http://localhost:4000/consultar")
    .then(res => res.json())
    .then(datos => {
        let usuarios = [];
        usuarios = datos;

        console.log('indices ' + tabla.rows.length)
        console.log('contenido: ' + (document.querySelectorAll('#tabla tbody tr')).values);

        if(tabla.rows.length > 0){
        for(let i = 0; i <= tabla.rows.length; i++){
            tabla.deleteRow(0)
    }}

        console.log(usuarios);
        for(let i = 0; i < usuarios.length; i++){
            //Lógica de creación de filas de una tabla de HTML
            tabla.insertRow().insertCell(0).innerHTML = usuarios[i].texto;
        }
    });
})