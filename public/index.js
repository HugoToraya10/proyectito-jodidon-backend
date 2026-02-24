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

botonConsulta.addEventListener("click", () =>{
    fetch("http://localhost:4000/consultar")

    

})
