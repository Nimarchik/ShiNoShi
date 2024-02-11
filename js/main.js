// ДОБАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartCounter = document.getElementById("cart-counter");
    let itemCount = 0;

    // Add event listener for remove button
    const removeFromCart = function () {
        itemCount = Math.max(0, itemCount - 1); // Не даем счетчику уйти в отрицательные значения
        cartCounter.textContent = itemCount;
    };

    const addToCart = function () {
        itemCount++;
        cartCounter.textContent = itemCount;

    };

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            addToCart();

            const productCard = button.closest(".product-card");
            const productId = productCard.dataset.productId;
            const productName = productCard.querySelector("h4").innerText;
            const productPrice = productCard.querySelector('.buy_product-list-price').innerHTML;


            // Check if the item is already in the cart
            const existingCartItem = document.querySelector(`li[data-product-id="${productId}"]`);


            if (existingCartItem) {
                // Increment quantity if already in the cart
                const quantityElement = existingCartItem.querySelector(".quantity");
                quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
            } else {
                // Add new item to the cart
                const cartItem = document.createElement("li");
                cartItem.dataset.productId = productId;
                cartItem.innerHTML = `${productName} -  ${productPrice}   <span class="quantity">1 шт.</span> <button class="decrease">-</button> <button class="remove top_link">Прибрати</button>  `;
                cartItemsList.appendChild(cartItem);

                // Add event listener for decrease button
                const decreaseButton = cartItem.querySelector(".decrease");
                decreaseButton.addEventListener("click", function () {
                    const quantityElement = cartItem.querySelector(".quantity");
                    const quantity = parseInt(quantityElement.innerText);

                    if (quantity > 1) {
                        quantityElement.innerText = quantity - 1;
                    } else {
                        // Remove item from the cart if quantity is 1
                        cartItemsList.removeChild(cartItem);
                    }


                });
                // Добавляем обработчики для удаления из корзины
                const removeButtons = document.querySelectorAll(".remove");
                removeButtons.forEach(button => {
                    button.addEventListener("click", function () {
                        removeFromCart(); // Уменьшаем счетчик при удалении из корзины

                        const cartItem = button.closest("li");
                        cartItemsList.removeChild(cartItem);
                    });
                });
            }

            
        });
    });


    const cartIcon = document.getElementById("cart-icon");
    const modal = document.getElementById("cart-modal");
    const closeModalButton = document.getElementById("close-modal");
    const cart = document.querySelector('.cart');

    cartIcon.addEventListener("click", function () {
        modal.style.display = "flex";


    });

    closeModalButton.addEventListener("click", function () {
        if (modal.style.display == "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });
});


const accord = document.getElementsByClassName('contentBx');

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};