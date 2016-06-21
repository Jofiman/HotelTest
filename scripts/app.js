var Test = angular.module('test', []);

Test.controller('hotelsController', ['$scope', '$http', function ($scope, $http){
    
    var id;
    var hReviews = document.getElementById('hotelReviews');
    $scope.getHotels = function(){
        $http.get('http://fake-hotel-api.herokuapp.com/api/hotels')
        .success(function(data) {
             $scope.hotels = data;
             for (var i = 0; i > data.length; i++) {
                id = data[i].id;
             }
         })
        .error(function(data) {
            $scope.reviews = 'Response failed';
        });
        
        
        
//        if(hReviews.length > 0) {
//           this.style.display = 'none';
//        }
//        else {
//            this.style.display = 'block';
//        }
    }
    $scope.getReviews = function(id) {
        $http.get('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id='+ id)
        .success(function(data) {
             $scope.reviews = data;

         })
        .error(function(data) {
            $scope.reviews = 'Response failed';
        });
         
    }
}]);
