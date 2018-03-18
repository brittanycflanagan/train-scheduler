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
    var startTime = moment($("#start-input").val().trim(), "hh:mm") //.format("X");
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