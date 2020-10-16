/*TIPOS DE DADOS
¨ String "" 
¨ Number 01 
¨ Object {} 
¨ Boolean true or false 
¨ Array[]*/

//create map
const map = L.map('mapid').setView([-22.8725251,-43.2792252], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" > </a>')

//create and add marker
L
    .marker([-22.873947,-43.2723538],{ icon })
    .addTo(map)
    .bindPopup(popup)
    