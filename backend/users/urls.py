from .api import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', UserViewSet, 'users')

urlpatterns = router.urls
