var Test = angular.module('test', []);

Test.controller('hotelsController', ['$scope', '$http', function ($scope, $http){
    
    var id;
    
    $scope.getHotels = function(){
        $http.get('http://fake-hotel-api.herokuapp.com/api/hotels')
        .success(function(data) {
             $scope.hotels = data;
             id = data[0].id;

             $scope.getReviews = function() {
                $http.get('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=id')
                .success(function(data) {
                     $scope.reviews = data;

                 })
                .error(function(data) {
                    $scope.reviews = 'Response failed';
                });
            }
            
         })
        .error(function(data) {
            $scope.reviews = 'Response failed';
        });
    }
}]);