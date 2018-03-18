// Initialize Firebase
var config = {
    apiKey: "AIzaSyCPM2cYhSiLPc4trPkgEt58WHkxlgz7phc",
    authDomain: "train-scheduler-7eaae.firebaseapp.com",
    databaseURL: "https://train-scheduler-7eaae.firebaseio.com",
    projectId: "train-scheduler-7eaae",
    storageBucket: "",
    messagingSenderId: "545484570998"
  };

    firebase.initializeApp(config);

    var database = firebase.database();

  // Button for adding Train
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var startTime = $("#start-input").val().trim()
    var frequency = $("#frequency-input").val().trim();

 // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      des: destination,
      start: startTime,
      freq: frequency
    };

  // Uploads employee data to the database
    database.ref().push(newTrain);

  // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.des);
    console.log(newTrain.start);
    console.log(newTrain.freq);


  // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });

  // Create Firebase event for adding train to the table and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().des;
  var startTime = childSnapshot.val().start;
  var frequency = childSnapshot.val().freq;

  // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(startTime);
  console.log(frequency);

  // Prettify the train start
  //var trainStartPretty = moment.unix(startTime).format("HH:mm");

  // Calculate the months worked using hardcore math

  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);

  // // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + frequency + "</td></tr>" + frequency + "</td></tr>");
});