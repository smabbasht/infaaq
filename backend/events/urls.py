from .api import EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/', EventViewSet, 'event')

urlpatterns = router.urls
