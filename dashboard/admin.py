# Register your models here.
from django.contrib import admin
from .models import RefillOrder, UserAnalytics, EnvironmentalImpact, RewardPoint, ReturnTracking, InventoryItem
from .models import Product, Order

admin.site.register(RefillOrder)
admin.site.register(UserAnalytics)
admin.site.register(EnvironmentalImpact)
admin.site.register(RewardPoint)
admin.site.register(ReturnTracking)
admin.site.register(InventoryItem)
admin.site.register(Product)
admin.site.register(Order)
