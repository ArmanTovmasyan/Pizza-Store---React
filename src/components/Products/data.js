import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import colizeum from "../../images/colizeum.jpg";
import trusted_brand from "../../images/trusted_brand.jpg";
import restaurant from "../../images/restaurant.png"

export const productData = [
  {
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$14.99',
    button: 'Add to Cart'
  }
];

export const productDataTwo = [
  {
    img: colizeum,
    alt: 'colizeum',
    name: 'colizeum',
    desc:
      `Roman style pan pizza is dry, not greasy at all, with slight hollows on 
       the surface.`
  },
  {
    img: trusted_brand,
    alt: 'trusted_brand',
    name: 'Trusted brand',
    desc: 
       'Brand trust measures how much confidence customers have in your business.'
  },
  {
    img: restaurant,
    alt: 'restaurant',
    name: 'Romanum',
    desc:
      `Whether you prefer it traditionally Neapolitan, or cutting edge with experimental 
       flavors.`
  }
];
