from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt # чтобы джанго не проверял csrf токен и не ругался
from .models import Product, Category
from django.shortcuts import get_object_or_404
import json

@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.filter(is_active=True)
        products_data = [
            {
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id
            }
            for product in products
        ]
        return JsonResponse({'products': products_data})
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            category = get_object_or_404(Category, id=data.get('category_id'))
            
            product = Product.objects.create(
                name=data.get('name'),
                price=data.get('price'),
                description=data.get('description'),
                count=data.get('count', 0),
                is_active=data.get('is_active', True),
                category=category
            )
            
            return JsonResponse({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id
            }, status=201)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    
    if request.method == 'GET':
        product_data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name
        }
        return JsonResponse(product_data)

@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        categories_data = [
            {
                'id': category.id,
                'name': category.name
            }
            for category in categories
        ]
        return JsonResponse({'categories': categories_data})
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            
            category = Category.objects.create(
                name=data.get('name')
            )
            
            return JsonResponse({
                'id': category.id,
                'name': category.name
            }, status=201)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    
    if request.method == 'GET':
        category_data = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse(category_data)

@csrf_exempt
def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    
    if request.method == 'GET':
        products = Product.objects.filter(category=category, is_active=True)
        products_data = [
            {
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active
            }
            for product in products
        ]
        return JsonResponse({'category': category.name, 'products': products_data})
    