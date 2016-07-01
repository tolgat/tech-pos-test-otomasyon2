(function() {
    'use strict';

    angular
        .module('techPosTestOtomasyonApp')
        .factory('notificationInterceptor', notificationInterceptor);

    notificationInterceptor.$inject = ['$q', 'AlertService'];

    function notificationInterceptor ($q, AlertService) {
        var service = {
            response: response
        };

        return service;

        function response (response) {
            var alertKey = response.headers('X-techPosTestOtomasyonApp-alert');
            if (angular.isString(alertKey)) {
                AlertService.success(alertKey, { param : response.headers('X-techPosTestOtomasyonApp-params')});
            }
            return response;
        }
    }
})();
