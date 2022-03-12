function initMap() {
   const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 6.24812359479725, lng: -75.56542193656328},
      zoom: 12,
      mapId: '27624df7abffba6',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
      });

    const markers = [
      [
        "Caduff",
        6.2448294855778315,
        -75.59429598779978,
        "empanada.svg",
        38,
        31
      ],
      [
        "Colosal Restaurante",
        6.184374787562783,
        -75.54754904361877,
        "empanada.svg",
        38,
        31
      ],
      [
        "Creta",
        6.215933094683453, 
        -75.57309658970054,
        "empanada.svg",
        38,
        31
      ],
      [
        "Parque Arvi",
        6.283346328479332, 
        -75.50297403993571,
        "flagicon.svg",
        38,
        31
      ],
      [
        "Pueblito Paisa",
        6.2363880370786, 
        -75.57987247910246,
        "flagicon.svg",
        38,
        31
      ],
      [
        "Viva Envigado Mall",
        6.177242024689228, 
        -75.59204936247819,
        "shop.svg",
        60,
        60
      ],
      [
        "Parque Lleras",
        6.210989203435822, 
        -75.56807985740294,
        "flagicon.svg",
        38,
        31
      ],
      [
        "SantaFe Mall",
        6.19669762302854, 
        -75.57389467297085,
        "shop.svg",
        60,
        60
      ],
      [
        "El Tesoro Mall",
        6.1976890725758995, 
        -75.55878998594612,
        "shop.svg",
        60,
        60
      ],
    ]

  for(let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
    },
    animation: google.maps.Animation.DROP,
  });

  const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
}