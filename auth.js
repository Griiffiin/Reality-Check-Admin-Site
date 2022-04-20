var firebaseConfig = {
    apiKey: "AIzaSyA0uYjH7kFeD3c8yR8SVvNBOKXHxILgPIw",
    authDomain: "realitycheck-d5694.firebaseapp.com",
    databaseURL: "https://realitycheck-d5694-default-rtdb.firebaseio.com",
    projectId: "realitycheck-d5694",
    storageBucket: "realitycheck-d5694.appspot.com",
    messagingSenderId: "143506997240",
    appId: "1:143506997240:web:4665b5bbe4fdddf9b3200d",
    measurementId: "G-DYQ8X7NQ6K"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);        
const auth = firebase.auth();
const database = firebase.database()

console.log("Initializing Firebase")

function login () {

        var logStatus = new Boolean(false);

        email = document.getElementById('email').value
        password = document.getElementById('password').value

        auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser

            //var database_ref = database.ref()

            console.log(user.email, user.password)
            
            //database_ref.child('users/'+user.uid).update(user_data)
            logStatus = true
            console.log(logStatus)
            console.log("Got Logged IN")

            //alert('User Logged In!!')
            if(logStatus == true) {
                homeRedirect();
            }
    
        }) 
        .catch(function(error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
    
}

function dataRedirect(){
  console.log("I was clicked")
  location.replace("userData.html")
}
function homeRedirect() {
    console.log("I was clicked")
    location.replace("home.html")
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 5) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    } 
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  } 