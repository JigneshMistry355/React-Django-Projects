# Generated by Django 5.0.3 on 2024-03-30 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BlackcofferVisualizations', '0004_alter_blackcofferdata_added_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blackcofferdata',
            name='title',
            field=models.CharField(max_length=355),
        ),
    ]
