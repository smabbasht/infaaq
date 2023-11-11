from .api import UserViewSet, LoginViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api', UserViewSet, 'users')
router.register('login', LoginViewSet, 'login')

urlpatterns = router.urls
