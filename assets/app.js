$("document").ready(function () {
    //firebase config
    var firebaseConfig = {
        apiKey: "AIzaSyDEwQ3rYmDvD8Mh4QjtnYgC4bMkuBQRMPE",
        authDomain: "apartment-search-90230.firebaseapp.com",
        databaseURL: "https://apartment-search-90230.firebaseio.com",
        projectId: "apartment-search-90230",
        storageBucket: "apartment-search-90230.appspot.com",
        messagingSenderId: "130690634013",
        appId: "1:130690634013:web:1e0527f1fc6ba7ba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Reference the database
    var database = firebase.database();

    //user inputs apartment
    var name = "";
    var rent = "";
    var parking = "";
    var laundry = true;
    var sqFoot = "";
    var grocery = "";
    var transit = "";
    var interestPlaces = [];
    var saturday = true;
    var sunday = true;
    var features = [];
    var websiteLink = "";

    //on click get values from user input
    $("#userInput").on("click", function (event) {
        
        //prevent page from submitting itself
        event.preventDefault();

        //capture user inputs and store in variables
        name = $("#name").val().trim();
        rent = $("#rent").val().trim();
        parking = $("#parking").val().trim();
        laundry = $("#laundry").val().trim();
        sqFoot = $("#sq-foot").val().trim();
        grocery = $("#grocery").val().trim();
        transit = $("#transit").val().trim();
        interestPlaces = $("#interest-places").val().trim();
        saturday = $("#saturday").val().trim();
        sunday = $("#sunday").val().trim();
        features = $("#features").val().trim();
        websiteLink = $("#website-link").val().trim();

        //push data to the database
        database.ref().push({
            name: name,
            rent: rent,
            parking: parking,
            laundry: laundry,
            sqFoot: sqFoot,
            grocery: grocery,
            transit: transit,
            interestPlaces: interestPlaces,
            saturday: saturday,
            sunday: sunday,
            features: features,
            websiteLink: websiteLink,
            timeAdded: firebase.database.ServerValue.TIMESTAMP
        });


    });
    //convert address to coordinates - geolocation api
    //store in firebase
    //on child added
    //geolocation api from firebase to placement on map?
    //columns to input
    //rent amount
    //parking cost
    //washer/dryer in unit?
    //square footage
    //quality rating
    //how far from grocery store
    //how far from public transit
    //places within walking distance
    //open on saturday
    //open on sunday
    //additional features
    //pool
    //tennis court
    //basketball court
    //fitness center
    //link to their website

    //assign values for each search parameter
    //end column that totals all values
    //if over certain amount, highlight green
    //else, highlight red
    //user has ability to update values as needed





});