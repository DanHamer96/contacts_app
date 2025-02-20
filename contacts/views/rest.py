from django.db.models import Value
from django.db.models.functions import Concat
from rest_framework import viewsets
from contacts.models import Contact
from contacts.serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """
    Contact viewset - inherits from the DRF ModelViewSet which defines our required CRUD endpoints:
        - list      (GET requests)
        - create    (POST requests)
        - update    (PUT requests)
        - destroy   (DELETE requests)
    """
    queryset = Contact.objects.all().annotate(
        full_name=Concat('first_name', Value(' '), 'last_name'),
        full_address=Concat('street_address', Value('<br>'), 'city', Value('<br>'), 'postal_code',
                            Value('<br>'), 'county', Value('<br>'), 'country')
    ).order_by('id')
    serializer_class = ContactSerializer
