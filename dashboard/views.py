from rest_framework import viewsets
from .models import RefillOrder, UserAnalytics, EnvironmentalImpact, RewardPoint, ReturnTracking, InventoryItem
from .serializers import (
    RefillOrderSerializer, UserAnalyticsSerializer,
    EnvironmentalImpactSerializer, RewardPointSerializer,
    ReturnTrackingSerializer, InventoryItemSerializer
)

class RefillOrderViewSet(viewsets.ModelViewSet):
    queryset = RefillOrder.objects.all()
    serializer_class = RefillOrderSerializer

class UserAnalyticsViewSet(viewsets.ModelViewSet):
    queryset = UserAnalytics.objects.all()
    serializer_class = UserAnalyticsSerializer

class EnvironmentalImpactViewSet(viewsets.ModelViewSet):
    queryset = EnvironmentalImpact.objects.all()
    serializer_class = EnvironmentalImpactSerializer

class RewardPointViewSet(viewsets.ModelViewSet):
    queryset = RewardPoint.objects.all()
    serializer_class = RewardPointSerializer

class ReturnTrackingViewSet(viewsets.ModelViewSet):
    queryset = ReturnTracking.objects.all()
    serializer_class = ReturnTrackingSerializer

class InventoryItemViewSet(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
