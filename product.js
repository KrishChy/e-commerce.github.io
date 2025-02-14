// for product
let product = document.getElementById("product");
let productItemsData = [
    {
        "id": 1,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-1-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 2,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-2-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 3,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-3-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 4,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-4-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 5,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-5-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 6,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-6-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 7,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-7-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 8,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-8-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 9,
        "name": " stores",
        "price": "00.00",
        "image": "img/product-9-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 10,
        "name": "The clothes stores",
        "price": "00.00",
        "image": "img/product-10-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 11,
        "name": "clothes stores",
        "price": "00.00",
        "image": "img/product-11-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 12,
        "name": "The clothes",
        "price": "00.00",
        "image": "img/product-12-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
    {
        "id": 13,
        "name": "The stores",
        "price": "$10.00",
        "image": "img/product-13-1.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur"
    },
]

let generateProduct = () => {
    return (product.innerHTML = productItemsData.map((x)=>{
        let {id, name, price, image, description} = x;
        return `<article class="product" id=product-id-${id}>
          <div class="img-container">
            <img src="${image}" alt="${image}" class="product-img" />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>${name}</h3>
          <p>${description}</p>
          <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
          <h4>${price}</h4>
        </article>`;
    }).join(""));
    };

    generateProduct();