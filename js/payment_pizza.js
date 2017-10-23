var app = angular.module("myApp", []);
app.controller('myctrl',function($scope) {
	
	$scope.text = 'me@example.com';
	//$scope.reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	$scope.reg = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	
	$scope.date1 = [
        {
            code: "C",
            name: "01"
        },
        {
            code: "Q",
            name: "02"
        },
        {
            code: "R",
            name: "03"
        },
		{
            code: "A",
            name: "04"
        },
        {
            code: "B",
            name: "05"
        },
        {
            code: "D",
            name: "06"
        },
		{
            code: "E",
            name: "07"
        },
        {
            code: "F",
            name: "08"
        },
        {
            code: "G",
            name: "09"
        },
		{
            code: "H",
            name: "10"
        },
        {
            code: "I",
            name: "11"
        },
        {
            code: "J",
            name: "12"
        }
];
	$scope.Year1 = [
        {
            code: "C",
            name: "2022"
        },
        {
            code: "Q",
            name: "2021"
        },
        {
            code: "R",
            name: "2020"
        },
		{
            code: "A",
            name: "2019"
        },
        {
            code: "B",
            name: "2018"
        },
        {
            code: "D",
            name: "2017"
        },
		{
            code: "E",
            name: "2016"
        }
];
});