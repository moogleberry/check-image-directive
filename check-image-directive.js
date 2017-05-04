angular.module('checkImageDirective', []).service('CheckImageService', CheckImageService);
CheckImageService.$inject = ['$q'];
function CheckImageService($q) {
    return {
        isImage: function(src) {
        
            var deferred = $q.defer();
        
            var image = new Image();
            image.onerror = function() {
                deferred.resolve(false);
            };
            image.onload = function() {
                deferred.resolve(true);
            };
            image.src = src;
        
            return deferred.promise;
        }
    };
}

angular.module('checkImageDirective').directive('checkImage', checkImage);
checkImage.$inject = ['CheckImageService'];
function checkImage(CheckImageService) {
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {
      attrs.$addClass("ng-hide");
      var stopObserving = attrs.$observe('ngSrc', function(url) {
        CheckImageService.isImage(url).then(function(response) {
          if(response === true) {
            attrs.$removeClass("ng-hide");
            stopObserving();
          }
        });
      });
    }
  };
}