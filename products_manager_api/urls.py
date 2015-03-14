from django.conf.urls import patterns, url

from products_manager_api import views

urlpatterns = (
  url(r'^product/(?P<pk>[0-9]*)', views.product, name='product'),
  url(r'^product_group/(?P<pk>[0-9]*)', views.product_group, name='product_group'),
)


