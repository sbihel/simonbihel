from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

# urlpatterns = [
#     url(r'^$', views.index, name='index'),
# ]

app_name = 'common'
urlpatterns = [
    # url(r'^$', TemplateView.as_view(template_name="common/index.html"), name='index'),
    url(r'^$', views.home_page, name='index'),
    # url(r'^resume', TemplateView.as_view(template_name="common/resume.html"), name='resume'),
    url(r'^resume', views.resume, name='resume'),
    # url(r'^projects', TemplateView.as_view(template_name="common/projects.html"), name='projects'),
    url(r'^projects', views.project, name='projects'),
]
