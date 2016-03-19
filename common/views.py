from django.shortcuts import render
from .models import HomePage, Resume, Project


def home_page(request):
    return render(request, 'common/index.html', {'pages': HomePage.objects.iterator()})


def resume(request):
    return render(request, 'common/resume.html', {'pages': Resume.objects.iterator()})


def project(request):
    return render(request, 'common/projects.html', {'pages': Project.objects.iterator()})
