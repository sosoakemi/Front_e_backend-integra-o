const button = document.querySelector("button")
const pessoaDiv = document.querySelector(".pessoa")

button.addEventListener("click", receberMensagemDoBackend)

async function receberMensagemDoBackend() {
    const response = await fetch("http://localhost:3333").then(response => response.json())

    response.map((person) => {
        pessoaDiv.innerHTML += `
        <div> 
           <h2>Nome: ${person.name}</h2>
           <h3>Idade: ${person.age}</h3>
           <h3>Gênero: ${person.genero}</h3>
           
        </div>
    `
    })

    console.log(response)
}