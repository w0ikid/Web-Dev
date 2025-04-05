from django.urls import path
from .views import list_companies, company_detail, list_vacancies, vacancy_detail, top_ten_vacancies, company_vacancies

urlpatterns = [
    path('companies/', list_companies, name='list_companies'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('vacancies/', list_vacancies, name='list_vacancies'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy_detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top_ten_vacancies'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company_vacancies'),
]

