'use strict';

angular.module('signin')
  .controller('SigninController', ['$scope', '$location', 'SigninService', function($scope, $location, SigninService){
  	$scope.user = {email: '', password: ''};
    $scope.errMessage ='';
    //this function is called when we press the login button
  	$scope.login = function(){
      if($scope.user.email.indexOf('@')==-1||$scope.user.email.indexOf('.')==-1){
        $scope.errMessage = 'Invalid Email/Password'
      }
      else{
  		  var account = this;
        //calls the API to login
  		  SigninService.login($scope.user)
      	 .success(function(data){
          var cookie=data;
            //redirects to the person's home page when a success
        	 $location.path('../../../dashboard/views/dashboard.html');
        	 return data;
      	 })
      	 .error(function(err){
       	  	$scope.errMessage = 'Invalid Email/Password'; 
       	  	return err;
     	  });
      }
  	};
  }]);