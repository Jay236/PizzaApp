

var app = angular.module("PizzaApp", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'./templates/home.html'
	})
	.when('/menu',{
		templateUrl:'./templates/menu.html'
	})
	.when('/deals',{
		templateUrl:'./templates/deals.html'
	});

});