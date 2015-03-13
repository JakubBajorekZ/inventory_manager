from django.conf.urls import patterns, url

from products_manager import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)