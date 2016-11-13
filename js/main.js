// Initialize Firebase
var config = {
apiKey: "AIzaSyCvt_fnfTcGMmVpJxDofvwsSrLMpAJ8Vv0",
authDomain: "sistemais-7d006.firebaseapp.com",
databaseURL: "https://sistemais-7d006.firebaseio.com",
storageBucket: "sistemais-7d006.appspot.com",
messagingSenderId: "526511268615"
};
firebase.initializeApp(config);
var database = firebase.database();
var auth = firebase.auth();

$(document).ready(function() {
	$('select').material_select();
	$('.modal-trigger').leanModal();
});
         