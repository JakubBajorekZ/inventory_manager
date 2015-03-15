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
  id = serializers.IntegerField()
  
  class Meta:
    model = Product
    fields = ('product_group', 'name', 'description', 'quantity', 'price', 'value', 'pub_date', 'id')
  
class ProductGroupSerializer(serializers.ModelSerializer):
  name = serializers.CharField()
  id = serializers.IntegerField()
  
  class Meta:
    model = ProductGroup
    fields = ('name', 'id')

class ProductGroupWithProductsSerializer(serializers.ModelSerializer):
  name = serializers.CharField()
  id = serializers.IntegerField()
  products = ProductSerializer(source='product_set', many=True)
  
  class Meta:
    model = ProductGroup
    fields = ('name', 'id', 'products')