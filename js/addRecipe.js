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
var firestore = firebase.firestore();

const docRef = firestore.collection("RecipeBook");
document.getElementById('recipeForm').addEventListener('submit', submitRecipe);

function submitRecipe(e) {
    e.preventDefault();
    var name = getInputVal('name')
    var ingredients = getInputVal('ingredients')
    var instructions = getInputVal('instructions')
    var category = getInputVal('categories')
    saveRecipe(name, ingredients, instructions,category);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveRecipe(name, ingredients, instructions,category){
   /* TODO: make the if statement work*/
    if(name === "" || ingredients === "" || instructions === ""){
        alert("Please fill out all fields")
        return false;
    }
    else{
    docRef.add({
        name: name,
        ingredients: ingredients,
        instructions: instructions,
        foodCategory: category
    }).then(function(){
        alert('Recipe Saved');
    }).catch(function(error){
        console.log('Got an error: ', error);
    });
    }
}








