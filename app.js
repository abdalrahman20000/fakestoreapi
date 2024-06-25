






function Products(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

async function fetch_data() {

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()

    const product = data.slice(0, 20);

    const product_obj = product.map(_product => {
        return new Products(_product.title, _product.price, _product.description, _product.image);
    });

    display_card(product_obj);
}



function display_card(p_obj) {
    const main_s = document.querySelector("main");


    p_obj.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${product.image}" alt="">
        <div> 
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <p>${product.description}</p>
        </div>
        `;


        card.style.width = "300px";

        main_s.appendChild(card);

    });
}



fetch_data();




// document.getElementById("submit").addEventListener("click", function (e) {

//     e.preventDefault();

//     const main_s = document.querySelector("main");

//     const t = document.getElementById("title").value;
//     const p = document.getElementById("price").value;
//     const d = document.getElementById("desc").value;
//     const i = document.getElementById("u_img").value;


//     const new_product = new Products(t, p, d, i);

//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//     <img src="${new_product.image}" alt="">
//     <div>
//     <h3>${new_product.title}</h3>
//     <p>$${new_product.price}</p>
//     <p>${new_product.description}</p>
//     </div>
//     <div class="buttton">
//             <button id="del" type="submit" >Delete</button>
//             <button id="up" type="submit" >Update</button>
//     </div>
//     `;


//     card.style.width = "300px";

//     main_s.appendChild(card);



// });






