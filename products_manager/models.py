from django.db import models

class ProductGroup(models.Model):
  name = models.CharField(max_length=200)
    
  def __str__(self):
    return self.name

class Product(models.Model):
  product_group = models.ForeignKey(ProductGroup)
  name = models.CharField(max_length=200)
  description = models.TextField()
  quantity = models.IntegerField()
  price = models.DecimalField(max_digits=18, decimal_places=2)
  value = models.DecimalField(max_digits=18, decimal_places=2)
  pub_date = models.DateTimeField()
    
  def __str__(self):
    return "Name:%s Quantity:%s Price:%s" % (self.name, self.quantity, self.price)
