from django.core.exceptions import ObjectDoesNotExist
from django.utils.six import BytesIO
from datetime import datetime

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from products_manager.models import Product, ProductGroup
from products_manager_api.serializers import ProductSerializer, ProductGroupSerializer, ProductGroupWithProductsSerializer

@api_view(['GET', 'POST', 'DELETE', 'PATCH'])  

def product(request, pk):
  if (pk != ''):
    try:
      selected_product = Product.objects.get(pk=pk)
      serialized_product = ProductSerializer(selected_product)
    except ObjectDoesNotExist:
      return Response({}, status=status.HTTP_404_NOT_FOUND)

  if (request.method == 'GET') and (pk == ''):
    products_list = Product.objects.all().order_by('name')
    serialized_products_list = ProductSerializer(products_list, many=True)
    return Response(serialized_products_list.data)
  elif (request.method == 'GET') and (pk != ''):
    return Response(serialized_product.data)
  elif (request.method == 'DELETE') and (pk != ''):
    selected_product.delete()
    return Response({'deleted': pk})
  elif (request.method == 'POST'):
    return post_method(request)
  elif (request.method == 'PATCH'):
    return patch_method(request)
  else:
    return Response({}, status=status.HTTP_404_NOT_FOUND)
 
@api_view(['GET'])    
  
def product_group(request, pk):
  if (request.method == 'GET') and (pk != ''):
    try:
      group = ProductGroup.objects.get(pk=pk)
      serialized_group = ProductGroupWithProductsSerializer(group)
      return Response(serialized_group.data)
    except ObjectDoesNotExist:
      return Response({}, status=status.HTTP_404_NOT_FOUND)
  elif (request.method == 'GET') and (pk == ''):
    groups = ProductGroup.objects.all().order_by('name')
    serialized_groups = ProductGroupSerializer(groups, many=True)
    return Response(serialized_groups.data)
  else:
    return Response({}, status=status.HTTP_404_NOT_FOUND)
  
  return rest_response(request, pk, ProductGroup, ProductGroupSerializer)

def post_method(request):
  input_stream = BytesIO(request.body)
  parsed_data = JSONParser().parse(input_stream)
  parsed_data['pub_date'] = datetime.now()
  try:
    new_product = Product.objects.create(**parsed_data)
  except IntegrityError:
    return Response({}, status=status.HTTP_404_NOT_FOUND)
  return Response(parsed_data)

def patch_method(request):
  input_stream = BytesIO(request.body)
  parsed_data = JSONParser().parse(input_stream)
  base_product = Product.objects.get(pk=parsed_data['id'])
  received_data = ProductSerializer(base_product, data=parsed_data)
  if received_data.is_valid():
    received_data.save()
    return Response(parsed_data)
  else:
    return Response({}, status=status.HTTP_404_NOT_FOUND)
