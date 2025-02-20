from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(required=False)
    full_address = serializers.CharField(required=False)

    class Meta:
        model = Contact
        fields = '__all__'
