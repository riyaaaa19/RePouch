from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    unit = models.CharField(max_length=20, default='ml')
    def __str__(self):
        return self.name

class RefillOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    delivered = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.user.username} - {self.product.name} ({self.quantity})"

class Return(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    returned_at = models.DateTimeField(auto_now_add=True)
    quantity = models.PositiveIntegerField(default=1)
    def __str__(self):
        return f"{self.user.username} - {self.product.name} ({self.quantity})"

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.product.name} - {self.stock} {self.product.unit}"

class UserAnalytics(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    action = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.action}"

class EnvironmentalImpact(models.Model):
    description = models.TextField()
    impact_score = models.DecimalField(max_digits=5, decimal_places=2)
    date_assessed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Impact Score: {self.impact_score} - {self.date_assessed}"

class RewardPoint(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    points = models.PositiveIntegerField(default=0)
    awarded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.points} points"
    
class ReturnTracking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    return_reason = models.CharField(max_length=255)
    tracked_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} - {self.return_reason}"

class InventoryItem(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} - {self.product.name}"
