from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt # чтобы джанго не проверял csrf токен и не ругался
from .models import Vacancy, Company
from django.shortcuts import get_object_or_404
import json

# Create your views here.

@csrf_exempt
def list_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_data = [
            {
                'id': company.id,
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address
            } for company in companies
        ]
        return JsonResponse(companies_data, safe=False)
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            company = Company.objects.create(
                name=data.get('name', ''),
                description=data.get('description', ''),
                city=data.get('city', ''),
                address=data.get('address', '')
            )
            return JsonResponse({
                'id': company.id,
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    
    if request.method == 'GET':
        company_data = {
            'id': company.id,
            'name': company.name,
            'description': company.description,
            'city': company.city,
            'address': company.address
        }
        return JsonResponse(company_data)
    
    elif request.method == 'PUT':
        try:
            data = json.loads(request.body)
            company.name = data.get('name', company.name)
            company.description = data.get('description', company.description)
            company.city = data.get('city', company.city)
            company.address = data.get('address', company.address)
            company.save()
            
            return JsonResponse({
                'id': company.id,
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'Company deleted successfully'})
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def company_vacancies(request, id):
    company = get_object_or_404(Company, id=id)
    
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_data = [
            {
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            } for vacancy in vacancies
        ]
        return JsonResponse(vacancies_data, safe=False)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def list_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_data = [
            {
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            } for vacancy in vacancies
        ]
        return JsonResponse(vacancies_data, safe=False)
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            company = get_object_or_404(Company, id=data.get('company_id'))
            
            vacancy = Vacancy.objects.create(
                name=data.get('name', ''),
                description=data.get('description', ''),
                salary=data.get('salary', 0.0),
                company=company
            )
            
            return JsonResponse({
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    
    if request.method == 'GET':
        vacancy_data = {
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': {
                'id': vacancy.company.id,
                'name': vacancy.company.name
            }
        }
        return JsonResponse(vacancy_data)
    
    elif request.method == 'PUT':
        try:
            data = json.loads(request.body)
            
            vacancy.name = data.get('name', vacancy.name)
            vacancy.description = data.get('description', vacancy.description)
            vacancy.salary = data.get('salary', vacancy.salary)
            
            if 'company_id' in data:
                company = get_object_or_404(Company, id=data.get('company_id'))
                vacancy.company = company
                
            vacancy.save()
            
            return JsonResponse({
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted successfully'})
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_data = [
            {
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            } for vacancy in vacancies
        ]
        return JsonResponse(vacancies_data, safe=False)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)