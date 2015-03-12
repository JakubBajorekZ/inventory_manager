from django.contrib import admin

from products_manager.models import Product, ProductGroup

admin.site.register(Product)
admin.site.register(ProductGroup)
