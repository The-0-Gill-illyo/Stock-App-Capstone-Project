# Generated by Django 4.1.2 on 2022-10-17 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('watchlist', '0002_rename_user_id_watchlist_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchlist',
            name='target_price',
            field=models.IntegerField(),
        ),
    ]
