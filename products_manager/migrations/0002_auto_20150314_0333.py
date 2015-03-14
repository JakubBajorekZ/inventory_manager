# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products_manager', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='product',
            name='quantity',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='product',
            name='value',
            field=models.FloatField(),
            preserve_default=True,
        ),
    ]
