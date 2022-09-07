

const firebaseConfig = {
  //   copy your firebase config informations
 
    apiKey: "AIzaSyA9GWqQ5TwwYNEhthEbKMm9_9rtXPIDs_U",
    authDomain: "employee-interests.firebaseapp.com",
    databaseURL:"https://employee-interests-default-rtdb.firebaseio.com",
    projectId: "employee-interests",
    storageBucket: "employee-interests.appspot.com",
    messagingSenderId: "192299918581",
    appId: "1:192299918581:web:814523ccf526419cb051bc",
    measurementId: "G-T19YPK92Q1"
  
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("serveyForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var dept = getElementVal("dept");
  var about = getElementVal("about");
  var favtopic = getElementVal("favtopic");
  var genre = getElementVal("genre");
  var radios = document.getElementsByName("optradio");
  var selected = Array.from(radios).find(radio => radio.checked).value;
    

  saveMessages(name, dept, about, favtopic, genre,selected);

  displayOut();
  //   enable alert
  document.querySelector("#text-message").style.display = "block";

}

const saveMessages = (name, dept, about, favtopic, genre,selected) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name: name,
    Department: dept,
    AboutYourSelf: about,
    FavoriteTopic: favtopic,
    MovieGeners: genre,
    ExerciseAtHome: selected,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

function displayOut()
{


  document.getElementById("all-steps").style.display = "none";
  document.getElementById("last").style.display = "none";
  document.getElementById("register").style.display="none";

}