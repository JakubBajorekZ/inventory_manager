from rest_framework import serializers
from products_manager.models import Product, ProductGroup

class ProductSerializer(serializers.Serializer):
  product_group = serializers.SlugRelatedField(read_only = True, slug_field = 'name')
  name = serializers.CharField()
  description = serializers.CharField()
  quantity = serializers.FloatField()
  price = serializers.FloatField()
  value = serializers.FloatField()
  pub_date = serializers.DateTimeField()
  
  class Meta:
    model = Product
    fields = ('product_group', 'name', 'description', 'quantity', 'price', 'value', 'pub_date')
  
class ProductGroupSerializer(serializers.ModelSerializer):
  name = serializers.CharField()
  
  class Meta:
    model = ProductGroup
    fields = ('name',)
    