/**
 * Created by zyz on 0005 2017/9/5.
 */
angular.module('indexController',[])
.controller('indexCrtl',function ($scope,$cordovaSms, $cordovaNetwork) {
  var options = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
      intent: 'INTENT'  // send SMS with the native android SMS messaging
      //intent: '' // send SMS without open any other app
    }
  };
  $scope.callNumber=function () {
    /*
    var success = function () { alert('Message sent successfully'); };
    var error = function (e) { alert('Message Failed:' + e); };
    $cordovaSms.send('13261565385', 'hello world', options, success, error);
    */
    function onSuccess(){
      console.log("Success:");
    }

    function onError() {
      console.log("Error:");
    }
    window.plugins.CallNumber.callNumber(onSuccess, onError, '13261565385', false);
  }
  $scope.getNetwork=function () {
    alert('网络类型:'+$cordovaNetwork.getNetwork()+'是否在线'+$cordovaNetwork.isOnline());

  }
  $scope.sendMessage=function () {

    $cordovaSms
      .send('13261565385', 'SMS content')
      .then(function() {
       alert('success');
      }, function(error) {
        alert('fail');
      });
  }
});
