let demo = document.getElementById("demo");

const moneypennyCoords = {
    latitude: 53.047,
    longitude: -3.019
}

const codenationCoords = {
    latitude: 53.192,
    longitude: -2.880
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            demo.innerHTML = "User denied the request for geolocation."
            break;
          case error.POSITION_UNAVAILABLE:
            demo.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            demo.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            demo.innerHTML = "An unknown error occurred."
            break;
        }
      });
  } else {
    demo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  demo.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 

  cnDiffLat = position.coords.latitude - codenationCoords.latitude;
  cnDiffLong =  position.coords.longitude - codenationCoords.longitude;

  demo.innerHTML += `<br />You're ${cnDiffLat} degrees north of Code Nation and ${cnDiffLong} degrees east of Code Nation.`

  if (Math.abs(cnDiffLat) < 0.001 && Math.abs(cnDiffLong) < 0.001) {
      demo.innerHTML += `<br />You're at Code Nation!`
  }
  else {
      demo.innerHTML += `<br />You're not at Code Nation!`
  }

  mpDiffLat = position.coords.latitude - moneypennyCoords.latitude;
  mpDiffLong =  position.coords.longitude - moneypennyCoords.longitude;

  demo.innerHTML += `<br />You're ${mpDiffLat} degres north of Moneypenny and ${mpDiffLong} degrees east of Moneypenny.`

  if (Math.abs(mpDiffLat) < 0.001 && Math.abs(mpDiffLong) < 0.001) {
      demo.innerHTML += `<br />You're at Moneypenny!`
  }
  else {
      demo.innerHTML += `<br />You're not at Moneypenny!`
  }
}