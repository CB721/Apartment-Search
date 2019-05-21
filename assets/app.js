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
    var location = "";
    var rent = "";
    var parking = "";
    var deposit = "";
    var application = "";
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
        location = $("#location").val().trim();
        rent = $("#rent").val().trim();
        parking = $("#parking").val().trim();
        deposit = $("#deposit").val().trim();
        application = $("#application").val().trim();
        sqFoot = $("#sq-foot").val().trim();
        grocery = $("#grocery").val().trim();
        transit = $("#transit").val().trim();
        interestPlaces = $("#interest-places").val().trim();
        saturday = $("#saturday").val().trim();
        sunday = $("#sunday").val().trim();
        features = $("#features").val().trim();
        websiteLink = $("#website-link").val().trim();

        //change all numerical inputs to numbers
        // function determineNumber(r) {
        //     return parseFloat(r);
        //   }
          
        //   console.log(determineNumber(rent));
          // expected output: 28.695307297889173


        // parseFloat(rent);

        //prevent user from inputting values in incorrect format
        
        
        // if (typeof rent === "number") {
        //     console.log('yes');
        // } else {
        //     console.log('no');
        // }

        //push data to the database
        database.ref().push({
            name: name,
            location: location,
            rent: rent,
            parking: parking,
            deposit: deposit,
            application: application,
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
    

    //on child added
    database.ref().on("child_added", function (snapshot) {

        //store snapshot.val() as a variable
        var sv = snapshot.val();
        console.log(sv);
        
        //create row
        //create header row
        //add header to row
        //populate header with apartment name
        //add columns for the other elements
        //add content for the other elements
        //add columns to rows
        //push to html

    }, function (errors) {
        console.log("Errors handled: " + errors.code);
    });
    //geolocation api from firebase to placement on map?
    

    //assign values for each search parameter
    //end column that totals all values
    //if over certain amount, highlight green
    //else, highlight red
    //user has ability to update values as needed





});