(function(){
  angular.module('others', ['ngMaterial']).controller('othersController', function($scope, $state, $timeout){
    var users, favorites, names, texts, times, i$, i;
    users = [];
    favorites = [];
    names = ['刘忍', '杨浩', '符宇晖', '舒倩', '徐佳豪', '钟正', '姚树航'];
    texts = ['存一寸光阴，换一个世纪', '摘一片苦心，酿一滴蜂蜜'];
    times = ['2016年12月5日', '2016年12月4日', '2016年12月4日', '2016年12月3日', '2016年12月1日', '2016年11月30日', '2016年11月28日'];
    for (i$ = 0; i$ <= 6; ++i$) {
      i = i$;
      users.push({
        name: names[i],
        avatar: '../img/demo/' + (i + 1) + '.jpg',
        picture: '../img/demo/' + (8 - i) + '.jpg',
        text: texts[i % 2],
        time: times[i]
      });
      favorites.push('../svg/favoriteBorder.svg');
      $scope.users = users;
      $scope.favorites = favorites;
      $scope.toggleFavorite = fn$;
      this.newPost = fn1$;
      this.timeCapsule = fn2$;
    }
    function fn$(index){
      if (favorites[index] === '../svg/favorite.svg') {
        favorites[index] = '../svg/favoriteBorder.svg';
      } else {
        favorites[index] = '../svg/favorite.svg';
      }
    }
    function fn1$(){
      $state.go('newPost');
    }
    function fn2$(){
      $state.go('timeCapsule');
    }
  });
}).call(this);
