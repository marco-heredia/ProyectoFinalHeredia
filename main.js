//Logica para borrar con el boton "Borrar todo" el contenido de los inputs
document.querySelector("#btn-erase").addEventListener("click", borrarTodo)
function borrarTodo() {
  document.getElementById("casilla-nombre").value = ""
  document.getElementById("casilla-user").value = ""
  document.getElementById("casilla-email").value = ""
  document.getElementById("casilla-password").value = ""
  document.getElementById("casilla-phone-number").value = ""
  document.getElementById("casilla-mensaje").value = ""
}

//Generar una contraseña aleatorio con el boton "Generar contraseña" y lo muestro por consola
const passwordAleatorio = document.querySelector("#btn-random-password")
passwordAleatorio.addEventListener("click", function() {
  const generarPassword = (longitud)=>{
    const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"
    let password = ""
    for(let i=0;i<longitud;i++){
      const indice = Math.floor(Math.random()*caracteres.length)
      password+=caracteres.charAt(indice)
    }
    return password
  }
  const longPassword = 15
  const passwordRandom = generarPassword(longPassword)
 const inputPassword = document.querySelector("#casilla-password")
  inputPassword.value = passwordRandom
  console.log(passwordRandom)
})


//Envio el contenido de los inputs "Nombre y apellido" y "Email" a una api externa
document.querySelector("#form").addEventListener("submit", confirmado)
function confirmado(e) {
  e.preventDefault()

  const formulario = new FormData(e.target)

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: formulario.get("casilla-nombre"),
      body: formulario.get("casilla-email"),
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    //Los datos se guardan en jsonplaceholder y muestro por consola la respuesta simulando la base de datos
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}


const alerta = document.getElementById("alert")
alerta.addEventListener("click", function () {
  const nombre = document.getElementById("casilla-nombre")
  const usuario = document.getElementById("casilla-user")
  const email = document.getElementById("casilla-email")
  const password = document.getElementById("casilla-password")

  //Array donde se almacenaran los inputs necesarios para validar el formulario
  const inputs = [nombre, usuario, email, password]
  for (const input of inputs) {
    const contenido = input.value.trim()

    if (contenido != "") {
      console.log(contenido)
      swal.fire({
        title: "!Muy bien¡",
        text: "Ya estas registrado",
        icon: "success",
      })
    } else {
      swal.fire({
        title: "!Ocurrio algo¡",
        text: "No completaste las casillas necesarias",
        icon: "warning",
      })
    }
  }
})


   
 
    

      
