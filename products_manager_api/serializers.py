from rest_framework import serializers
from products_manager.models import Product, ProductGroup

class ProductSerializer(serializers.Serializer):
  product_group_id = serializers.IntegerField()#serializers.SlugRelatedField(read_only = True, slug_field = 'id')
  name = serializers.CharField()
  description = serializers.CharField()
  quantity = serializers.FloatField()
  price = serializers.FloatField()
  value = serializers.FloatField()
  pub_date = serializers.DateTimeField()
  id = serializers.IntegerField(read_only = False)
  
  def update(self, instance, validated_data):
    instance.product_group_id = validated_data.get('product_group', instance.product_group_id) 
    instance.name = validated_data.get('name', instance.name)
    instance.description = validated_data.get('description', instance.description)
    instance.quantity = validated_data.get('quantity', instance.quantity)
    instance.price = validated_data.get('price', instance.price)
    instance.save()
    return instance
  
  class Meta:
    model = Product
    fields = ('product_group_id', 'name', 'description', 'quantity', 'price', 'value', 'pub_date', 'id')
  
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