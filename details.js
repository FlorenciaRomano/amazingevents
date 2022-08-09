function getData(){
    var idCard = 1
    data.eventos.map(evento => evento.id = idCard++)

    var id = location.search.split("?id=").filter(Number)

    var selectID = Number(id[0])
    console.log(selectID)

    var evento = data.eventos.find((evento) => {
        return evento.id == selectID
    })



var templateHTML = `

<div class="card mb-3 card shadow p-3 mb-5 bg-white rounded my-4" style="max-width: 600px">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${evento.image}" class="img-fluid rounded-start mt-5 p-4" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <ul>
        <li>Date:${evento.date}</li>
        <li>Description:${evento.description}</li>
        <li>Category:${evento.category}</li>
        <li>Capacity:${evento.capacity}</li>
        <li>Assistence or estimate ${evento.assistance}:</li>
        <li>Price:${evento.price}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`

document.getElementById('contenedorTarjetasD').innerHTML= templateHTML
}
getData ()