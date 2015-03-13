from django.shortcuts import render_to_response
import json

from django.http.response import JsonResponse

def index(request):
  return render_to_response('products_manager/index.html')
  #return render(request, 'products_manager/index.html')
  #return JsonResponse({'success' : 'true'})
