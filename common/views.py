# from django.shortcuts import render
# # from django.http import HttpResponse
# # from django.template import loader
#
#
# def index(request):
#     # template = loader.get_template('common/index.html')
#     # # context = {
#     # #     'latest_question_list': latest_question_list,
#     # # }
#     # return HttpResponse(template.render(request))
#     return render(request, 'common/index.html')

# from django.shortcuts import get_object_or_404, render
# from django.http import HttpResponseRedirect
# from django.core.urlresolvers import reverse
# from django.views import generic
#
#
# class IndexView(generic.GenericViewError):
#     template_name = 'common/index.html'
