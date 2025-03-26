interface Product {
  id: string;
  name: string;
  shortname: string;
  description: string;
  price: string;
}

interface Category {
  id: string;
  name: string;
  shortname: string;
  notes: string;
  products: Product[];
}

const categories: Category[] = [];

async function fetchCategoryData() {
  const electronicsResponse = await fetch('electronics.json');
  const electronicsData = await electronicsResponse.json();
  categories.push({
    id: '1',
    name: electronicsData.categoryName,
    shortname: electronicsData.shortname,
    notes: electronicsData.notes,
    products: electronicsData.items
  });

  const furnitureResponse = await fetch('furniture.json');
  const furnitureData = await furnitureResponse.json();
  categories.push({
    id: '2',
    name: furnitureData.categoryName,
    shortname: furnitureData.shortname,
    notes: furnitureData.notes,
    products: furnitureData.items
  });

  const booksResponse = await fetch('books.json');
  const booksData = await booksResponse.json();
  categories.push({
    id: '3',
    name: booksData.categoryName,
    shortname: booksData.shortname,
    notes: booksData.notes,
    products: booksData.items
  });

  const clothesResponse = await fetch('clothes.json');
  const clothesData = await clothesResponse.json();
  categories.push({
    id: '4',
    name: clothesData.categoryName,
    shortname: clothesData.shortname,
    notes: clothesData.notes,
    products: clothesData.items
  });
}

function renderCategories() {
  const categoriesContainer = document.getElementById('categories')!;
  categoriesContainer.innerHTML = '';

  categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.name;
    categoryDiv.appendChild(categoryTitle);

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');

    category.products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const productImage = document.createElement('img');
      productImage.src = `https://place-hold.it/200x200`;
      productDiv.appendChild(productImage);

      const productName = document.createElement('h4');
      productName.textContent = product.name;
      productDiv.appendChild(productName);

      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productDiv.appendChild(productDescription);

      const productPrice = document.createElement('p');
      productPrice.textContent = `Ціна: ${product.price}`;
      productDiv.appendChild(productPrice);

      productsContainer.appendChild(productDiv);
    });

    categoryDiv.appendChild(productsContainer);

    // Додавання обробника кліку для розгортання/згортання категорії
    categoryDiv.addEventListener('click', () => {
      const isVisible = productsContainer.style.display === 'block';
      productsContainer.style.display = isVisible ? 'none' : 'block';
    });

    categoriesContainer.appendChild(categoryDiv);
  });
}

function showRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomIndex];
  const categoriesContainer = document.getElementById('categories')!;
  categoriesContainer.innerHTML = '';

  const categoryTitle = document.createElement('h2');
  categoryTitle.textContent = randomCategory.name;
  categoriesContainer.appendChild(categoryTitle);

  randomCategory.products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = `https://place-hold.it/200x200`;
    productDiv.appendChild(productImage);

    const productName = document.createElement('h4');
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDiv.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.textContent = `Ціна: ${product.price}`;
    productDiv.appendChild(productPrice);

    categoriesContainer.appendChild(productDiv);
  });
}

document.getElementById('catalogLink')!.addEventListener('click', (event) => {
  event.preventDefault();
  renderCategories();
});

document.getElementById('specialsLink')!.addEventListener('click', (event) => {
  event.preventDefault();
  showRandomCategory();
});

document.getElementById('homeLink')!.addEventListener('click', (event) => {
  event.preventDefault();
  location.reload(); // Оновлення сторінки
});

fetchCategoryData().then(() => {
  renderCategories();
});
