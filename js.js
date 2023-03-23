// import data from './products.json'
// assert { type: 'JSON' };

// const data = require("./products.json")

// console.log("hello")
// console.log(data)

async function main() {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    console.log(res.data); {
        const menCloths = document.getElementById("product1");
        const images = document.createElement("img");
        images.src = res.data[2]["image"];
        images.setAttribute("class", "imgSize");
        menCloths.appendChild(images);
    } {
        const menCloths = document.getElementById("product2");
        const images = document.createElement("img");
        images.src = res.data[15]["image"];
        images.setAttribute("class", "imgSize");
        menCloths.appendChild(images);
        const p = document.createElement("p");
        p.innerText = "Discover the latest fashion trends for women, with affordable & durable styles"
        p.setAttribute("class", "p");
        menCloths.appendChild(p);
    } {
        const menCloths = document.getElementById("product3");
        const images = document.createElement("img");
        images.src = res.data[6]["image"];
        images.setAttribute("class", "imgSize");
        menCloths.appendChild(images);
    } {
        const menCloths = document.getElementById("product4");
        const images = document.createElement("img");
        images.src = res.data[13]["image"];
        images.setAttribute("class", "imgSize");
        menCloths.appendChild(images);
        const p = document.createElement("p");
        p.innerText = " Buy electronics online at best prices"
        p.setAttribute("class", "p");
        menCloths.appendChild(p);
    }
}
main();