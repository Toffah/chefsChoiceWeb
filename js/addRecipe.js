// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB1KJhqYnAokA1NIFgbt4Q5MUGBYkzu-10",
    authDomain: "chef-s-choice.firebaseapp.com",
    projectId: "chef-s-choice",
    storageBucket: "chef-s-choice.appspot.com",
    messagingSenderId: "614313292126",
    appId: "1:614313292126:web:cd05873601a0a03b5d1fcf",
    measurementId: "G-ZX9M641R2G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*var messagesRef = firebase.firestore().ref('name');*/

document.getElementById('recipeForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name')
    var ingredients = getInputVal('ingredients')
    var instructions = getInputVal('instructions')

    saveMessage(name, ingredients, instructions);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, ingredients, instructions){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        ingredients: ingredients,
        instructions: instructions
    });
}

const txtEmail = document.getElementById('inputUserName');
const txtPassword = document.getElementById('inputPassword');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', e =>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=> console.log/e.message);

})







