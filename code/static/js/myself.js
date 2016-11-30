(function(){
  angular.module('myself', ['ngMaterial']).config(function($stateProvider){
    $stateProvider.state('photo', {
      url: '/photo/{id}',
      templateUrl: '../html/photo.html'
    });
  }).controller('myselfController', function($scope, $state){
    $scope.$parent.changeHeader('时间轴');
    $scope.$parent.changeBack(false);
    $scope.$parent.changeRoute(true);
    this.userInfomation = {
      avatarUrl: '../img/avatar.png',
      backgroundUrl: '../img/background.png',
      numberOfNodes: 97,
      numberOfIntersections: 30,
      numberOfFollowers: 41
    };
    this.navigateToPhoto = function(id){
      $state.go('photo', {
        id: id
      });
    };
  });
}).call(this);
