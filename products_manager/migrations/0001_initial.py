# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import migrations
from django.db import models


class Migration(migrations.Migration):

  dependencies = [
  ]

  operations = [
    migrations.CreateModel(
                           name='Product',
                           fields=[
                           ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                           ('name', models.CharField(max_length=200)),
                           ('description', models.TextField()),
                           ('quantity', models.IntegerField()),
                           ('price', models.DecimalField(max_digits=18, decimal_places=2)),
                           ('value', models.DecimalField(max_digits=18, decimal_places=2)),
                           ('pub_date', models.DateTimeField()),
                           ],
                           options={
                           },
                           bases=(models.Model, ),
                           ),
    migrations.CreateModel(
                           name='ProductGroup',
                           fields=[
                           ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                           ('name', models.CharField(max_length=200)),
                           ],
                           options={
                           },
                           bases=(models.Model, ),
                           ),
    migrations.AddField(
                        model_name='product',
                        name='product_group',
                        field=models.ForeignKey(to='products_manager.ProductGroup'),
                        preserve_default=True,
        ),
    ]
