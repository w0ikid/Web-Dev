from django.conf import settings
from django.http import HttpResponse
from django.urls import path
from django.core.management import execute_from_command_line

# Django settings and configuration example

def home(request):
    return HttpResponse("Hello, Django!")

# URL patterns
urlpatterns = [
    path('', home, name='home'),
]

# Basic Django settings
settings.configure(
    DEBUG=True,
    SECRET_KEY='your-secret-key-here',
    ROOT_URLCONF=__name__,
    MIDDLEWARE=[
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
    ],
    INSTALLED_APPS=[
        'django.contrib.contenttypes',
        'django.contrib.auth',
    ],
)

if __name__ == '__main__':
    execute_from_command_line(['manage.py', 'runserver'])