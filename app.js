let myMap

function initMap() {
    let options = {
        center: {
            lat: 35.3309007,
            lng:  40.1218374
        },
        zoom: 14
    }
    let myMap = new google.maps.Map(document.getElementById("map"), options);
    let marker = new google.maps.Marker({
        position: {
          lat: 35.3323012,
          lng:  40.0820119
        },
        map: myMap,
    });
}



initMap();


/*
1. style sample endorsement with minimum data: location, time, headline, vernacular
2. fetch sample endorsement from gmail API and display four data points within endorsement format
3. filter all emails meeting location critera by hoursBack criteria
4. connect submit forms to fetch request
5. generate html/css for all emails meeting search criteria
6. Edge case: Paris (Texas or France)
7.


*/
