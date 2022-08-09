let texto = ""
var checkBoxSelector = [];
let arrayEventos = data.eventos
var id = 1
    arrayEventos.map(evento => evento.id = id++)


let unArray = data.eventos //Declaro una variable, cuyo valor es data. Eventos Es una propiedad con varios objetos dentro.
let eventos = data.fechaActual 

console.log(eventos) 
console.log(unArray) 

let contenedorTarjetas = document.getElementById('contenedorTarjetas'); //Al div que tengo en el HTML le asigno un ID para poder identificarlo y traerlo.
console.log(contenedorTarjetas)

function mostrarTarjetas(unArray){ //Declaro una funcion


templateTarjeta = ""; //Declaro una variable
if (unArray.length > 0){ 
for(let i = 0; i < unArray.length; i++){ //Realizo un bucle para que recorra todo el array y lo impima, cuando termina todo el largo del array se detiene.
    
templateTarjeta += 
`<div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem; height: 25rem;">
<img src= ${unArray[i].image} style="height: 8.5rem"  class="card-img-top" alt="Cinema">
<div class="card-body ">
  <h5 class="card-title">${unArray[i].name}</h5>
  <p class="card-text">${unArray[i].description}</p>
  <p class="card-text"> ${unArray[i].date}</p>
  <div class="vermas container-fluid">
   <p class="mb-0 m-1"> $ ${unArray[i].price}</p> 
   <a href="./details.html?id=${unArray[i].id}" class="btn btn-primary">See More</a>
</div>
</div>
</div>` //Esta tarjeta sacada del HML para poder realizar todo desde JS, se le asigna un id también.


contenedorTarjetas.innerHTML = templateTarjeta ; //imprimo lo que quiero ver
}
}
else
{
contenedorTarjetas.innerHTML= `No hay nada`
}


}


//Ejecuto la funcion


//////////////////////////////////////////////CHECKBOX'S////////////////////////////////////////////////


function imprimir (){
  var checks = document.getElementById("checks")
  var checkbox = data.eventos.map(eventos => eventos.category)
  var noRepetidas = new Set(checkbox);
  var categorias = [...noRepetidas]
var imprimirCheckbox = "";
categorias.forEach(categorias =>{
    imprimirCheckbox +=  `<div class="form-check form-check-inline  flex-lg-row flex-md flex-sm">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${categorias}">
    <label class="form-check-label" for="inlineCheckbox1">${categorias}</label>
  </div>`
  
  checks.innerHTML = imprimirCheckbox;
})
}
imprimir()

var checkBoxSelector = [];
var checkbox = document.querySelectorAll('input[type=checkbox]');
checkbox.forEach(check =>check.addEventListener("click", (event)=>{
  var checked = event.target.checked
  if (checked){
    checkBoxSelector.push(event.target.value)
    filtrador()
  //Aca va una funcion que filtra las posibilidades de busqueda 
  } else {
    checkBoxSelector = checkBoxSelector.filter(uncheck => uncheck !== event.target.value) 
  }filtrador()
 
}))

var buscador = document.querySelector("#buscador")
buscador.addEventListener("keyup", (event) => {
   texto = event.target.value
  filtrador()
  //aca va una fun que va a filtrar esto
  console.log(texto)
})

function filtrador(){
  var datos = [];
  if(checkBoxSelector.length > 0 && texto !== "") {
    checkBoxSelector.map(selected => (
      datos.push(...data.eventos.filter(evento => evento.name.toLowerCase().includes
       (texto.trim().toLowerCase())&& evento.category == selected )))
    )
  } 
   else if (checkBoxSelector.length >0 && texto ===""){
    checkBoxSelector.map (selected => {
      datos.push(...data.eventos.filter(eventos => eventos.category == selected ))
   
    })
  } else if (checkBoxSelector.length == 0 && texto !==""){
    datos.push(...data.eventos.filter(evento => evento.name.toLowerCase().includes
    (texto.trim().toLowerCase())))
  }
else {
  datos.push(...data.eventos)
} 
console.log(checkBoxSelector);
mostrarTarjetas(datos);
}
filtrador()

