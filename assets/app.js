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
    var saturday = "";
    var sunday = "";
    var weekendAvail = "";
    var features = [];
    var websiteLink = "";

    //on click get values from user input
    $("#userInput").on("click", function (event) {

        //prevent page from submitting itself
        event.preventDefault();
        
        //capture user inputs and store in variables
        name = $("#name").val().trim().toLowerCase();;
        location = $("#location").val().trim();
        rent = $("#rent").val().trim();
        parking = $("#parking").val().trim();
        deposit = $("#deposit").val().trim();
        application = $("#application").val().trim();
        sqFoot = $("#sq-foot").val().trim();
        grocery = $("#grocery").val().trim();
        transit = $("#transit").val().trim();
        interestPlaces = $("#interest-places").val().trim();
        saturday = $("#saturday").val().trim().toLowerCase();;
        sunday = $("#sunday").val().trim().toLowerCase();;
        features = $("#features").val().trim();
        websiteLink = $("#website-link").val().trim();

        //get percentage of weekend availability
        if (saturday === "yes" && sunday === "yes") {
            weekendAvail = "100%";
        } else if (saturday === "yes" || sunday === "yes") {
            weekendAvail = "50%";
        } else if (saturday != "yes" && sunday != "yes") {
            weekendAvail = "0%";
        } else {
            console.log("no value for weekend");
        }

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
            weekendAvail: weekendAvail,
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
        var row = $("<tr>");

        //create header row
        var headerRow = $("<th scope='row'>");

        //add header to row
        row.append(headerRow);

        //populate header with apartment name
        headerRow.text(sv.name);

        //add columns for the other elements
        var col1 = $("<td class='#location-display'>");
        var col2 = $("<td class='#rent-display'>");
        var col3 = $("<td class='#parking-display'>");
        var col4 = $("<td class='#deposit-display'>");
        var col5 = $("<td class='#application-display'>");
        var col6 = $("<td class='#sqFoot-display'>");
        var col7 = $("<td class='#grocery-display'>");
        var col8 = $("<td class='#transit-display'>");
        var col9 = $("<td class='#interestPlaces-display'>");
        var col10 = $("<td class='#weekendAvail-display'>");
        var col12 = $("<td class='#features-display'>");
        var col13 = $("<td class='#websiteLink-display'>");

        //add content for the other elements
        col1.text(sv.location);
        col2.text(sv.rent);
        col3.text(sv.parking);
        col4.text(sv.deposit);
        col5.text(sv.application);
        col6.text(sv.sqFoot);
        col7.text(sv.grocery);
        col8.text(sv.transit);
        col9.text(sv.interestPlaces);
        col10.text(sv.weekendAvail);
        col12.text(sv.features);
        col13.text(sv.websiteLink);

        //add columns to rows
        row.append(col1);
        row.append(col2);
        row.append(col3);
        row.append(col4);
        row.append(col5);
        row.append(col6);
        row.append(col7);
        row.append(col8);
        row.append(col9);
        row.append(col10);
        row.append(col12);
        row.append(col13);

        //push to html
        $("#displayResults").append(row);

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