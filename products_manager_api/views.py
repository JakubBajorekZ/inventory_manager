from django.core.exceptions import ObjectDoesNotExist

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from products_manager.models import Product, ProductGroup
from products_manager_api.serializers import ProductSerializer, ProductGroupSerializer

@api_view(['GET', 'POST', 'DELETE'])  

def product(request, pk):
  return rest_response(request, pk, Product, ProductSerializer)
 
@api_view(['GET', 'POST', 'DELETE'])    
  
def product_group(request, pk):
  return rest_response(request, pk, ProductGroup, ProductGroupSerializer)

def rest_response(request, pk, object_class, serializer_class):
  if (pk != ''):
    try:
      object = object_class.objects.get(pk=pk)
      serialized_object = serializer_class(object)
    except ObjectDoesNotExist:
      return Response({}, status=status.HTTP_404_NOT_FOUND)

  if (request.method == 'GET') and (pk == ''):
    objects_list = object_class.objects.all()
    serialized_object_list = serializer_class(objects_list, many=True)
    return Response(serialized_object_list.data)
  elif (request.method == 'GET') and (pk != ''):
    return Response(serialized_object.data)
  elif (request.method == 'DELETE') and (pk != ''):
    object.delete()
    return Response({'deleted': pk})
  elif (request.method == 'POST'):
    
  elif (request.method == 'PATCH'):
    
  else:
    return Response({}, status=status.HTTP_404_NOT_FOUND)
