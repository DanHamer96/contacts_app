from django.shortcuts import render
from django.views import View


class ContactsView(View):
    template_name = 'contacts.html'

    def get(self, request, *args, **kwargs):
        """
        Handle GET request to this view
        """
        return render(request, self.template_name)
