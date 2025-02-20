from django.urls import path

from contacts.views.rest import ContactViewSet
from contacts.views.views import ContactsView
from contacts_app.urls import router

app_name = 'contacts'

router.register(r'contacts', ContactViewSet, basename='api_contacts')

urlpatterns = [
    path('', ContactsView.as_view(), name='contacts'),
]
