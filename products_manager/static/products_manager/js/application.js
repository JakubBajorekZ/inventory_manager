angular.module('mainModule', ['restangular', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngPageHeadMeta']);
angular.module('mainModule')
.config(['$httpProvider', 'RestangularProvider', '$translateProvider', '$locationProvider',
	function ($httpProvider, RestangularProvider, $translateProvider, $locationProvider) {
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		RestangularProvider.setRequestSuffix('/');
		$translateProvider.preferredLanguage('en');
		$locationProvider.html5Mode(true);
	}]);
var myAwesomeJSVariable = "I'm so awesome!!";

angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/404.html");
        $stateProvider
            .state('404', {
                url: "/404.html",
                views: {
                    "FullContentView": {
                        templateUrl: 'errors/404.html'
                    }
                }
            })
    }]);
angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "FullContentView": {
                        templateUrl: 'core/landing.html'
                    }
                }
            })
            .state('index.swedish', {
                url: "swedish/",
                views: {
                    "MainView@index": {
                        templateUrl: 'core/partials/swedish.html'
                    }
                },
                onEnter: ['$translate', function($translate) {
                    $translate.use('sv');
                }]
            })
            .state('index.english', {
                url: "english/",
                views: {
                    "MainView@index": {
                        templateUrl: 'core/partials/english.html'
                    }
                },
                onEnter: ['$translate', function($translate) {
                    $translate.use('en');
                }]
            })
    }]);
angular.module('mainModule')
    .controller('CoreCtrl', ['CoreFactory', function (CoreFactory) {
        
    }]);
angular.module('mainModule')
    .factory('CoreFactory', ['Restangular', function (Restangular) {
        return {

        }
    }]);
angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            button_text_en: 'English',
            button_text_sv: 'Swedish',
            label_which_language_do_you_prefer: 'Which language do you prefer?',

            meta_title_404: '404 - Page Not Found',
            meta_keywords_404: 'Error, 404',
            meta_description_404: 'The page you\'r trying to access does not exist.',

            meta_title_core: 'Django AngularJs Boilerplate',
            meta_description_core: 'This is a boilerplate which includes django angularjs bootstrap and more.',
            meta_keywords_core: 'Django, angularjs, bootstrap, gulp, bower.',
        });
    }]);
angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('sv', {
            button_text_en: 'Engelska',
            button_text_sv: 'Svenska',
            label_which_language_do_you_prefer: 'Vilket språk föredrar du?',

            meta_title_404: '404 - Sidan hittades inte',
            meta_keywords_404: 'Fel, 404',
            meta_description_404: 'Sidan du försökte nå existerar inte..',

            meta_title_core: 'Django AngularJs Boilerplate',
            meta_description_core: 'Det här är ett paket för att hjälpa dig på traven att komma igång meddjango, angular och mycket mer',
            meta_keywords_core: 'Django, angularjs, bootstrap, gulp, bower.',
        });
    }]);
angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/landing.html',
        "<page-meta-data status-code=\"200\">\n\t<title>{{ 'meta_title_core' | translate }}</title>\n\t<meta name=\"description\" content=\"{{ 'meta_description_core' | translate }}\"/>\n\t<meta name=\"keywords\" content=\"{{ 'meta_keywords_core' | translate }}\"/>\n</page-meta-data>\n\n<div data-ng-controller=\"CoreCtrl\">\n    <ng-include src=\"'core/partials/language-picker.html'\"></ng-include>\n    <div ui-view=\"MainView\"></div>\n</div>\n\n");
}]);
angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('errors/404.html',
        "<page-meta-data status-code=\"404\">\n\t<title>{{ 'meta_title_404' | translate }}</title>\n\t<meta name=\"description\" content=\"{{ meta_description_404 }}\">\n\t<meta name=\"keywords\" content=\"{{ 'meta_keywords_404' | translate }}\">\n</page-meta-data>\n\n<div>\n    <h1>Page was not found.</h1>\n</div>");
}]);
angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/partials/english.html',
        "<p class=\"padding-lg\">\n    <em>\"In the end, it's not going to matter how many breaths you took, but how many moments took your breath away.\"</em>\n</p>");
}]);
angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/partials/language-picker.html',
        "<div class=\"text-center\">\n    <h2>{{ 'label_which_language_do_you_prefer' | translate }}</h2>\n    <button class=\"btn btn-lg btn-default\" ui-sref-active=\"btn-success\" ui-sref=\"index.english\" translate=\"button_text_en\"></button>\n    <button class=\"btn btn-lg btn-default\" ui-sref-active=\"btn-success\" ui-sref=\"index.swedish\" translate=\"button_text_sv\"></button>\n</div>");
}]);
angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/partials/swedish.html',
        "<p class=\"padding-lg\">\n    <em>\"Det är egentligen bara dåliga böcker som äro i behov av förord.\"</em>\n</p>");
}]);