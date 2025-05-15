from rest_framework import serializers
from .models import RefillOrder, UserAnalytics, EnvironmentalImpact, RewardPoint, ReturnTracking, InventoryItem

class RefillOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RefillOrder
        fields = '__all__'

class UserAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnalytics
        fields = '__all__'

class EnvironmentalImpactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnvironmentalImpact
        fields = '__all__'

class RewardPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = RewardPoint
        fields = '__all__'

class ReturnTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReturnTracking
        fields = '__all__'

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = '__all__'
