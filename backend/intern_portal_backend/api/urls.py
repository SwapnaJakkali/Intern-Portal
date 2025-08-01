from django.urls import path
from . import views

urlpatterns = [
    path("user/", views.user_view),
    path("leaderboard/", views.leaderboard_view),
    path("rewards/", views.rewards_view),
    path("login/", views.login_view),
]
