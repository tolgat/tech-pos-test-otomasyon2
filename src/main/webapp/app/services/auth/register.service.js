(function () {
    'use strict';

    angular
        .module('techPosTestOtomasyonApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
