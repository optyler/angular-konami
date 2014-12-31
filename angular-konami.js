var ngKonami = angular.module('angular-konami', []);

// THE CODE
/**
 * Better to use on body element or any element using correctly the keydwon event... ;-)
 */
ngKonami.directive("konamiCode", function ($rootScope) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
            var konami_index = 0;

            var checkTheKonamiCode = function (event) {
                if (event.which === konami_keys[konami_index++]) {
                    if (konami_index === konami_keys.length) {
                        $rootScope.$broadcast('konami-code-ok');
                        element.off('keydown', checkTheKonamiCode);
                    }
                } else {
                    konami_index = 0;
                }
            };

            element.on('keydown', checkTheKonamiCode);
        }
    };
});
