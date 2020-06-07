 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBsBvv1S5qK8LK20AShwiqm6XkweNdu6Sk",
    authDomain: "bhavani-f7632.firebaseapp.com",
    databaseURL: "https://bhavani-f7632.firebaseio.com",
    projectId: "bhavani-f7632",
    storageBucket: "bhavani-f7632.appspot.com",
    messagingSenderId: "174009164463",
    appId: "1:174009164463:web:fcce46841e0a9ff3062a5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }