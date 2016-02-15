from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

# urlpatterns = [
#     url(r'^$', views.index, name='index'),
# ]

app_name = 'common'
urlpatterns = [
    # url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^$', TemplateView.as_view(template_name="common/index.html"), name='index'),
    url(r'^resume', TemplateView.as_view(template_name="common/resume.html"), name='resume'),
]
