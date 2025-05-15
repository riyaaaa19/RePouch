from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RefillOrderViewSet, UserAnalyticsViewSet,
    EnvironmentalImpactViewSet, RewardPointViewSet,
    ReturnTrackingViewSet, InventoryItemViewSet
)

router = DefaultRouter()
router.register(r'refill-orders', RefillOrderViewSet)
router.register(r'user-analytics', UserAnalyticsViewSet)
router.register(r'environmental-impact', EnvironmentalImpactViewSet)
router.register(r'reward-points', RewardPointViewSet)
router.register(r'return-tracking', ReturnTrackingViewSet)
router.register(r'inventory-items', InventoryItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
