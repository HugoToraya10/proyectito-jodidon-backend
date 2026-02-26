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

        while (tabla.rows.length > 0){
            tabla.deleteRow(0)
        }

        console.log(usuarios);
        for(let i = 0; i < usuarios.length; i++){
            
            //Creación de un botón para posteriormente añadirlo a la columna
            let botonEliminar = document.createElement('button');
            
            //Lógica de creación de filas de una tabla de HTML
            let filaEntera = tabla.insertRow(0);
            filaEntera.insertCell(0).textContent = usuarios[i].texto;
            filaEntera.insertCell(1).appendChild(botonEliminar.dataset.id = i);
        }
        
        console.log('indices ' + tabla.rows.length)
        console.log('contenido: ' + (document.querySelectorAll('#tabla tbody tr')).values());
    });
})



