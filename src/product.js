import { faker } from "@faker-js/faker";
const products = [];

const getSale = () => {
  return Math.random() < 0.5;
};

const getPrice = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

const getSalePerc = () => {
  return Math.floor(Math.random() * 46) + 5;
};

for (let i = 0; i < 10; i++) {
  const price = getPrice();
  const salePercentage = getSalePerc();
  const product = {
    id: i,
    title: faker.commerce.product(),
    category: faker.commerce.department(),
    image: faker.image.urlLoremFlickr(),
    rating: Math.floor(Math.random() * 5) + 1,
    price: price,
    isOnSale: getSale(),
    salePercentage: salePercentage,
    discountedPrice: price * (1 - salePercentage * 0.01),
  };

  products.push(product);
}

export default products;
