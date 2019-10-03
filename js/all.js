var app = angular.module("myApp", []);
// app.controller("firstCtrl",function($scope,$rootScope){
//     $scope.name="mallikarjuna";
//     $rootScope.fullName="mallikarjuna p";
// });
// app.controller("firstCtrl", function ($scope) {
//     $scope.name = "arjun",
//         $scope.age = 24,
//         $scope.place = "madanapalle"

// });
// app.controller("secondCtrl", function ($scope) {
//     $scope.father = "ramanjineyulu",
//         $scope.mother = "anjamma"

// });
app.controller("firstCtrl", function ($scope) {
    $scope.fullName = "mallikarjun";
    $scope.age = 24;
    $scope.place = "banglore";
    $scope.data = [
        {
            name: "malli",
            age: 25,
            mobile: 9611870162,
            email: "mallikarjun327@gmail.com"
        },
        {
            name: "malli1",
            age: 24,
            mobile: 9611870162,
            email: "mallikarjun327@gmail.com"
        }
    ];
});
app.controller("secondCtrl", function ($scope) {
    $scope.fullName = "ramnjaneyulu";
    $scope.mother = "anjamma";

});