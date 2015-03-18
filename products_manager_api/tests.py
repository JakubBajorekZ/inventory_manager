from rest_framework import status
from rest_framework.test import APITestCase
from django.core.exceptions import ObjectDoesNotExist
from products_manager.models import Product, ProductGroup

class ApiTest(APITestCase):
  
  fixtures = ['product_groups', 'products']
  
  def setUp(self):
    self.expected_product_response = [
      {
          "product_group_id": 1,
          "name": "Test product 1",
          "description": "Example description 1",
          "quantity": 10,
          "price": 4,
          "value": 40,
          "pub_date": "2011-09-01T10:20:30Z",
          "id": 1
      },
      {
          "product_group_id": 2,
          "name": "Test product 2",
          "description": "Example description 2",
          "quantity": 5,
          "price": 3,
          "value": 15,
          "pub_date": "2015-07-13T08:11:27Z",
          "id": 2
      }
    ]
    self.expected_product_group_response = [
      {
          "id": 1,
          "name": "Test group 1"
      },
      {
          "id": 2,
          "name": "Test group 2"
      }
    ]
    self.expected_product_group_with_content = {
      "id": 1,
      "name": "Test group 1",
      "products": [
        {
          "product_group_id": 1,
          "name": "Test product 1",
          "description": "Example description 1",
          "quantity": 10,
          "price": 4,
          "value": 40,
          "pub_date": "2011-09-01T10:20:30Z",
          "id": 1
        }
      ]
    }
    self.new_product_data = {
          "product_group_id": 1,
          "name": "Test product 3",
          "description": "Example description 3",
          "quantity": 5,
          "price": 6,
          "value": 30,
          "pub_date": "2014-01-01T11:21:31Z"
    }
    
    self.new_invalid_product_data = {
          "product_group_id": 7,
          "name": None,
          "description": "Example description 3",
          "quantity": 'Bad number',
          "price": 6,
          "value": 30,
          "pub_date": "2014-01-32T11:21:31Z"
    }
    #self.expected_product_group_with_content['products'] = self.expected_product_response[0]
    
  def test_product_get_all(self):
    response = self.client.get('/products_api/product/')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data, self.expected_product_response)
    
  def test_product_group_get_all(self):
    response = self.client.get('/products_api/product_group/')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data, self.expected_product_group_response)
    
  def test_product_get_one(self):
    response = self.client.get('/products_api/product/1')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data, self.expected_product_response[0])
    
  def test_product_get_one_non_existing(self):
    response = self.client.get('/products_api/product/999')
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
  
  def test_product_group_get_one(self):
    response = self.client.get('/products_api/product_group/1')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data, self.expected_product_group_with_content)
    
  def test_product_group_get_one_non_existing(self):
    response = self.client.get('/products_api/product_group/999')
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
    
  def test_product_delete(self):
    response = self.client.delete('/products_api/product/2')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertRaises(ObjectDoesNotExist, lambda: Product.objects.get(pk=2))
    
  def test_product_delete_non_existing(self):
    response = self.client.delete('/products_api/product/999')
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

  def test_product_post(self):
    response = self.client.post('/products_api/product/', self.new_product_data, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertTrue(Product.objects.filter(name=self.new_product_data['name']).exists())
  
  def test_product_post_invalid(self):
    response = self.client.post('/products_api/product/', self.new_invalid_product_data, format='json')
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    #self.assertRaises(ObjectDoesNotExist, lambda: Product.objects.get(name=self.new_invalid_product_data['name']))