angular.module('mainModule').config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "products_manager_index_view": {
          templateUrl: "static/products_manager/angular-templates/core/products_manager_index.html" 
        }
      }
    })
    
    .state('index.products',{
      url: "/products/:product_group_id",
      views: {
        "product_list": { 
          templateUrl: "static/products_manager/angular-templates/core/partials/product_list.html",
          controller: 'ProductListCtrl'
        }
      }
    })

    .state('index.products.product_form',{
      url: "/products/:product_group_id/product_edit_form/:product_id",
      views: {
        "product_edit_form": { 
          templateUrl: "static/products_manager/angular-templates/core/partials/product_edit_form.html",
          controller: 'ProductFormCtrl'
        }
      }
    })
});
