function initMap() {
    let options = {
        zoom: 13,
        center: {
            lat: 35.3332115,
            lng: 40.1405485
        }
    }

    let myMap = new google.maps.Map(document.getElementById("map"), options);

    google.maps.event.addListener(myMap, 'click', function(event) {
        addMarker({
            coords: event.latLng
        });
    });

    let markers = [{
            coords: {
                lat: 35.354565,
                lng: 40.1368543
            },
            content: '<h3>ISIS shelling</h3>'
        },
        {
            coords: {
                lat: 35.3278197,
                lng: 40.1438924
            },
            content: '<h3>Regime Arrest Wave</h3>'
        },
        {
            coords: {
                lat: 35.3393381,
                lng: 40.123808
            },
            content: '<h3>Coalition Airstrike</h3>'
        }
    ];

    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }


    function addMarker(props) {
        let marker = new google.maps.Marker({
            //  initiate ajax request to google, seeking lat/lng of (.endorsement .city), save in object,
            position: props.coords,
            map: myMap,
        });
        if(props.content){
          let infoWindow = new google.maps.InfoWindow({
            content: props.content //refactor to display text of (.endorsment .headline)
          })

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
      }
    }


}


initMap();

/*
1. style sample endorsement with minimum data: location, time, headline, vernacular
2. generate map marker corresponding to location. a) map centers on marker location b) click on marker highlights endorsement div

3. fetch real sample endorsement*: connect to Gmail API, sequentually parse: correct folder > email body  > location div/headline div/timestamp div/vernacular div
4. Display four data points within endorsement div on app's front end
*this call will have to be structured to return all emails fitting search criteria. and to center the map on... the first search result?

5. create a second filter: return only those emails that also meet the hoursBack criteria (set default to 1)
6. connect submit forms to fetch request
7. generate html/css for all emails meeting search criteria

8. Edge case: Paris (Texas or France)



*/
