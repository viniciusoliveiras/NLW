const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-22.8725251,-43.2792252], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L
.marker([-22.873947,-43.2723538],{ icon })
.addTo(map)

/*IMAGE GALLERY*/ 

function selectImage(event){
    const button = event.currentTarget

    //remover todas as clases .active
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach((button) => {
        button.classList.remove("active")
        }
    )

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-datails > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}