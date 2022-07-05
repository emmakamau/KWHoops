from django.utils import timezone
from rest_framework.authtoken.models import Token


class AuthTokenHandler:
    """
    Handles variations in auth token
    """
    @staticmethod
    def expired_token(auth_token):
        """
        Checks expiry of auth token
        """
        utc_now = timezone.now()
        expired = auth_token.created < utc_now - \
            timezone.timedelta(hours=24)
        return expired

    @staticmethod
    def create_auth_token(user):
        """
        Creates an auth token for a user
        """
        token, created = Token.objects.get_or_create(user=user)
        if not created:
            token.created = timezone.now()
            token.save()
        return token
