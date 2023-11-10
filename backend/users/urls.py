from .api import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api', UserViewSet, 'users')

urlpatterns = router.urls
