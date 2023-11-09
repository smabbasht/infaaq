from .api import EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', EventViewSet, 'event')

urlpatterns = router.urls
