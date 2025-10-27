from rest_framework.routers import DefaultRouter
from .views import TodoItemViewSet

router = DefaultRouter()
router.register(r'task', TodoItemViewSet, basename='todoitem')

urlpatterns = router.urls