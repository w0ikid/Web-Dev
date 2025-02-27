import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products = [
        { id:1, image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large', name: 'Apple iPhone 16 Pro Max 256Gb черный', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000', category: 'phones', likes: 0},
        { id:2, image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large', name: 'Apple iPhone 13 128Gb черный', description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', category: 'phones', likes: 0},
        { id:3, image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium', name: 'Apple iPhone 16 Pro Max 256Gb золотистый', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000', category: 'phones', likes: 0},
        { id:4, image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h33/64071707033630.jpg?format=preview-large', name: 'Спутниковый телефон Thuraya XT-Lite серый', description: 'Thuraya XT-Lite обеспечивает надежную спутниковую связь по самой выгодной цене. Разработан специально для рациональных покупателей, которые хотят оставаться на связи без ущерба для ее качества.', rating: 4.7, link: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-thuraya-xt-lite-seryi-101584383/?c=750000000', category: 'phones', likes: 0},
        { id:5, image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hcb/65123281109022.jpg?format=preview-large', name: 'Верный Wood', description: 'Верный Wood', rating: 4.3, link: 'https://kaspi.kz/shop/p/vernyi-wood-104880248/?c=750000000', category: 'vinil', likes: 0},
        { id:6, image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h60/64111737831454.jpg?format=preview-large', name: 'Верный Deluxe', description: 'Верный Deluxe', rating: 4.1, link: 'https://kaspi.kz/shop/p/vernyi-deluxe-101399173/?c=750000000', category: 'vinil', likes: 0},
        { id:7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=preview-large', name: 'Coca-Cola Classic газированный напиток 1 л', description: 'Coca-Cola Classic газированный напиток 1 л', rating: 4.6, link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000', category: 'drinks', likes: 0},
        { id:8, image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=preview-large', name: 'Для Apple iPhone 15 Pro прозрачный', description: 'Для Apple iPhone 15 Pro прозрачный', rating: 4.8, link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000', category: 'phones', likes: 0},
        { id:9,  image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large', name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий', description: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий', rating: 4.2, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000', category: 'phones', likes: 0},
        { id:10, image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h7d/85428766703646.png?format=preview-large', name: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ темно-синий', description: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ темно-синий', rating: 4.4, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000', category: 'phones', likes: 0},
        {
          id: 11,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
          name: 'Мышь Logitech G102 Lightsync черный',
          description: 'Игровая мышь Logitech G102 Lightsync в черном цвете с RGB-подсветкой и точным сенсором.',
          rating: 0,
          link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
          category: 'mice',
          likes: 0
      },
      {
          id: 12,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h0a/84103616593950.jpg?format=gallery-medium',
          name: 'Мышь AULA sc580 белый',
          description: 'Игровая мышь AULA SC580 в белом цвете с эргономичным дизайном и подсветкой.',
          rating: 0,
          link: 'https://kaspi.kz/shop/p/aula-sc580-belyi-113655264/?c=750000000',
          category: 'mice',
          likes: 0
      },
      {
          id: 13,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h6b/84212513603614.png?format=gallery-medium',
          name: 'Мышь Logitech G Pro X Superlight 2 розовый',
          description: 'Легкая игровая мышь Logitech G Pro X Superlight 2 в розовом цвете с беспроводной технологией и точным сенсором.',
          rating: 0,
          link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?c=750000000',
          category: 'mice',
          likes: 0
      }
      ];
      
      getProducts() {
        return this.products;
      }
    
      getProductById(id: number) {
        return this.products.find(product => product.id === id);
      }

    }
