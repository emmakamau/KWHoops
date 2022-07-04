from rest_framework.test import APITestCase
from authentication.models import User

class TestModel(APITestCase):

    def test_create_user(self):
        user = User.objects.create_user('rose','roseakinyi001@gmail.com', 'pass1234')
        self.assertIsInstance(user, User)
        self.assertFalse(user.is_staff)
        self.assertEqual(user.email, 'roseakinyi001@gmail.com')