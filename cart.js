

window.onload = function() {
    let cartContainer = document.querySelector(".add-product"); 
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h2 style='text-align:center; width:100%;'>السلة فارغة حالياً</h2>";
    } else {
        cartContainer.innerHTML = "";

        cart.forEach(function(item) {
            let itemDiv = document.createElement("div");
            itemDiv.className = "product-div"; 

            let img = document.createElement("img");
            img.src = item.image;
            img.className = "pimg";
            itemDiv.appendChild(img);

            let cdiv = document.createElement("div");
            cdiv.className = "cdiv";

            let title = document.createElement("h3");
            title.textContent = item.name;
            title.className = "title";
            cdiv.appendChild(title);

            let price = document.createElement("span");
            price.textContent = `${item.price} ج.م`;
            price.className = "price";
            cdiv.appendChild(price);

            itemDiv.appendChild(cdiv);
            cartContainer.appendChild(itemDiv);
        });
    }
};