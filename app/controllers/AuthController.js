NotDolls.controller('LoginController', [
  '$http',
  '$scope',
  'AuthFactory',
  function($http, $scope, authFactory) {

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
                username: data.alias,
                location: data.location,
                emailAddress: data.email,
                createdDate: new Date()
              })
            }).then(
              response => {
                // resolve because Geek is new and was returned on successful POST
                let theGeek = response.data;
                authFactory.setUser(theGeek);
                console.log("This Geek was newly created", theGeek);
              },
              response => {
                //reject because Geek has already been created
                if (response.status === 409) {
                  $http
                    .get(`http://localhost:5000/api/Geek?username=${data.alias}`)
                    .then(
                      response => {
                        let theGeek = response.data[0];
                        console.log("found the Geek", theGeek);
                        authFactory.setUser(theGeek);
                      },
                      response => console.log("Could not find that Geek", response)
                )}
            });
          })
      })
    };
}]);
