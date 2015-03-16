angular.module('mainModule')
.directive('formTemplate', function () {
  return {
    scope: { 'selected_product': '=data' },
    templateUrl: "static/products_manager/angular-templates/core/partials/product_form_template.html"
  }
});
