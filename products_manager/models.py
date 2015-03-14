from django.db import models

class ProductGroup(models.Model):
  name = models.CharField(max_length=200)
    
  def __str__(self):
    return self.name

class Product(models.Model):
  product_group = models.ForeignKey(ProductGroup)
  name = models.CharField(max_length=200)
  description = models.TextField()
  quantity = models.FloatField()
  price = models.FloatField()
  value = models.FloatField()
  pub_date = models.DateTimeField()
    
  def __str__(self):
    return "Name:%s Quantity:%s Price:%s" % (self.name, self.quantity, self.price)
