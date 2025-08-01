# from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

DUMMY = {
    "internName": "Alex Doe",
    "referralCode": "alexdoe2025",
    "totalDonations": 1250,
    "leaderboard": [
        {"name": "Alex Doe", "score": 250},
        {"name": "Jamie Ray", "score": 200},
        {"name": "Sam Lee", "score": 180}
    ],
    "rewards": [
        {"title": "Bronze Badge", "unlocked": True},
        {"title": "Silver Badge", "unlocked": False},
        {"title": "Gold Badge", "unlocked": False}
    ]
}

@api_view(["GET"])
def user_view(request):
    return Response({
        "internName": DUMMY["internName"],
        "referralCode": DUMMY["referralCode"],
        "totalDonations": DUMMY["totalDonations"],
    })

@api_view(["GET"])
def leaderboard_view(request):
    return Response(DUMMY["leaderboard"])

@api_view(["GET"])
def rewards_view(request):
    return Response(DUMMY["rewards"])

@api_view(["POST"])
def login_view(request):
    return Response({"success": True, "user": {
        "internName": DUMMY["internName"],
        "referralCode": DUMMY["referralCode"],
        "totalDonations": DUMMY["totalDonations"],
    }})
