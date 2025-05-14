const books = [
  { title: "Learning JavaScript", price: 35.00 },
  { title: "HTML & CSS Design", price: 29.99 },
  { title: "Python for Beginners", price: 40.50 }
];

const cart = [];

const bookList = document.getElementById("bookList");
const cartItems = document.getElementById("cartItems");

function updateCart() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <strong>${book.title}</strong><br>
    Price: $${book.price.toFixed(2)}<br>
  `;
  const btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.onclick = () => {
    cart.push(book);
    updateCart();
  };
  div.appendChild(btn);
  bookList.appendChild(div);
});

updateCart();
