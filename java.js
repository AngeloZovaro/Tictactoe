let map;

// var lat;
// var lon;
// function getLocation(){
//   if(!navigator.geolocation)
//     return null;
//   navigator.geolocation.getCurrentPosition((pos)=>{
//     lat = document.getElementById("lat").innerText = pos.coords.latitude;
//     lon = document.getElementById("lon").innerHTML = pos.coords.longitude;
//   });
// }


async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -22.94857, lng: -46.55816 },
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position : { lat: -22.94857, lng: -46.55816 },
    map: map,
  });
  
}

initMap();