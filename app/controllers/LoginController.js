NotDolls.controller('LoginController', [
  '$http',
  '$scope',
  function($http, $scope) {

    $scope.githubOauth = function () {
      OAuth.initialize('VGXPr-Ji8ckvrnnm20nTtIUr8bU')
      OAuth.popup('github').done(function(result) {
          // do some stuff with result
          console.log(result)
          result.me().done(function(data) {
            // do something with `data`, e.g. print data.name
            console.log(data);
            $http({
              url: "http://localhost:5000/api/Geek",
              method: "POST",
              data: JSON.stringify({
                UserName: data.alias,
                Location: data.location,
                EmailAddress: data.email,
                createdDate: new Date()
              })
            })
          })
      })
    };
}]);
