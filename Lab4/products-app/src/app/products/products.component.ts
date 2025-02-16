import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large', name: 'Apple iPhone 16 Pro Max 256Gb черный', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large', name: 'Apple iPhone 13 128Gb черный', description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium', name: 'Apple iPhone 16 Pro Max 256Gb золотистый', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h33/64071707033630.jpg?format=preview-large', name: 'Спутниковый телефон Thuraya XT-Lite серый', description: 'Thuraya XT-Lite обеспечивает надежную спутниковую связь по самой выгодной цене. Разработан специально для рациональных покупателей, которые хотят оставаться на связи без ущерба для ее качества.', rating: 4.7, link: 'https://kaspi.kz/shop/p/sputnikovyi-telefon-thuraya-xt-lite-seryi-101584383/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hcb/65123281109022.jpg?format=preview-large', name: 'Верный Wood', description: 'Верный Wood', rating: 4.3, link: 'https://kaspi.kz/shop/p/vernyi-wood-104880248/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h60/64111737831454.jpg?format=preview-large', name: 'Верный Deluxe', description: 'Верный Deluxe', rating: 4.1, link: 'https://kaspi.kz/shop/p/vernyi-deluxe-101399173/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=preview-large', name: 'Coca-Cola Classic газированный напиток 1 л', description: 'Coca-Cola Classic газированный напиток 1 л', rating: 4.6, link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=preview-large', name: 'Для Apple iPhone 15 Pro прозрачный', description: 'Для Apple iPhone 15 Pro прозрачный', rating: 4.8, link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large', name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий', description: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий', rating: 4.2, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000' },
    { image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h7d/85428766703646.png?format=preview-large', name: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ темно-синий', description: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ темно-синий', rating: 4.4, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000' }
  ];

  shareViaWhatsApp(productLink: string) {
    const message = `Check this out: ${productLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareViaTelegram(productLink: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.open(telegramUrl, '_blank');
  }
}