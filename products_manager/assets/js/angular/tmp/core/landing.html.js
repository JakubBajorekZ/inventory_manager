angular.module('mainModule').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/landing.html',
        "<page-meta-data status-code=\"200\">\n\t<title>{{ 'meta_title_core' | translate }}</title>\n\t<meta name=\"description\" content=\"{{ 'meta_description_core' | translate }}\"/>\n\t<meta name=\"keywords\" content=\"{{ 'meta_keywords_core' | translate }}\"/>\n</page-meta-data>\n\n<div data-ng-controller=\"CoreCtrl\">\n    <ng-include src=\"'core/partials/language-picker.html'\"></ng-include>\n    <div ui-view=\"MainView\"></div>\n</div>\n\n");
}]);