async function main() {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    const menCloths = document.getElementById("men");
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div")
        div.setAttribute("class", "box")
        menCloths.appendChild(div)
        const div2 = document.createElement("div")
        div2.setAttribute("class", "d-flex events p-5 justify-content-around align-baseline div2")
        div.appendChild(div2)
        const div3 = document.createElement("div")
        div3.setAttribute("class", "divOfp")
        div2.appendChild(div3)
        const p = document.createElement("p");
        p.innerText = res.data[i]["description"]
            // p.setAttribute("class", "p1");
        div3.appendChild(p);
        const price = document.createElement("section");
        price.innerText = `Price : ${res.data[i]["price"]}$`
        price.setAttribute("class", "price")
        div3.appendChild(price);

        const Conunt = document.createElement("section");
        Conunt.innerText = `Count : ${res.data[i]["rating"]["count"]}`
        Conunt.setAttribute("class", "count")
        div3.appendChild(Conunt);
        const star = document.createElement("div")
        star.innerHTML = '<div class="d-flex justify-content-between"> <section class = "star"><i class = "fa-solid yellow fa-star" ></i><i class = "fa-solid yellow fa-star" ></i><i class = "fa-solid yellow fa-star" ></i><i class = "fa-solid yellow fa-star" ></i><i class = "fa-solid yellow fa-star" ></i></section> </div > ';
        div3.append(star)
        const add = document.createElement("button");
        add.setAttribute("class", "addToBag")
        div3.appendChild(add);

        const addA = document.createElement("a");
        addA.href = "./login.html"
        addA.innerText = `ADD TO BAG`
            // addA.setAttribute("class", "addToBag")
            // addA.addEventListener("click", function() {})
        add.appendChild(addA);

        const images = document.createElement("img");
        images.src = res.data[i]["image"];
        images.setAttribute("class", "imgSize");
        div2.appendChild(images);


    }

}

main();