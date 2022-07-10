from rest_framework.test import APITestCase
from authentication.models import User

class TestModel(APITestCase):

    def test_create_user(self):
        user = User.objects.create_user('rose','roseakinyi001@gmail.com', 'pass1234')
        self.assertIsInstance(user, User)
        self.assertFalse(user.is_staff)
        self.assertEqual(user.email, 'roseakinyi001@gmail.com')



    def test_create_super_user(self):
            user = User.objects.create_super_user('rose','roseakinyi001@gmail.com', 'pass1234')
            self.assertIsInstance(user, User)
            self.assertTrue(user.is_staff)
            self.assertEqual(user.email, 'roseakinyi001@gmail.com')

    def test_raises_error_when_no_username_is_supplied(self):
            self.assertRaises(ValueError,User.objects.create_user,username= "",email='roseakinyi001@gmail.com', password='pass1234' )


    def test_raises_error_when_no_username_is_supplied(self):
            self.assertRaises(ValueError,User.objects.create_user,username= "",email='roseakinyi001@gmail.com', password='pass1234' )
            self.assertRaisesMessage(ValueError,'The given username must be set')
            self.user.objects.create_user(username='',email='roseakinyi001@gmail.com', password ='pass1234')

    def test_raises_error_when_no_email_is_supplied(self):
            self.assertRaises(ValueError,User.objects.create_user,username= "username",email='', password='pass1234' )


    def test_raises_error_when_no_email_is_supplied(self):
            self.assertRaises(ValueError,User.objects.create_user,username= "",email='roseakinyi001@gmail.com', password='pass1234' )
            self.assertRaisesMessage(ValueError,'The given email must be set')
            self.user.objects.create_user(username='username',email="", password ='pass1234')

        