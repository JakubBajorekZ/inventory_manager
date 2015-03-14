from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
  url(r'^$', 'products_manager.views.index'),
  url(r'^products/', include('products_manager.urls')),
  url(r'^products_api/', include('products_manager_api.urls')),
  url(r'^admin/', include(admin.site.urls)),
)
