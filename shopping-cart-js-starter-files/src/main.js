let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "Casual",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: "office",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: "t-shirt",
    name: "T-shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: "suit",
    name: "Men suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

let basket = [
  {
    id: "fekjfkfqke",
    item: 1,
  },
];

let generateShop = () => {
  shop.innerHTML = shopItemsData
    .map((dataItems, index) => {
      let { id, name, price, desc } = dataItems;
      let imageSrc = `images/img-${index + 1}.jpg`;
      return `
        <div id="product-id-${id}" class="item">
          <div class="item-image">
            <img width="220" src="${imageSrc}" alt="${name}" />
          </div>
          <div class="item-details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>${price}</h2>
              <div class="buttons">
                <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                <div id="quantity-${id}" class="quantity">0</div>
                <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>`;
    })
    .join("");
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  console.log(id);

  basket.push({
    id: selectedItem.id,
    item: 1,
  });
};

let decrement = (id) => {
  console.log(id);
};

let update = () => {};
