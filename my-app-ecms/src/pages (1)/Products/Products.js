import Style from "./Products.css";
import img from "../../Assets/img/Rectangle 1372.png";
import productsImg1 from "../../Assets/img/image 26 (1).png";
import productsImg2 from "../../Assets/img/image 26 (2).png";
import productsImg3 from "../../Assets/img/image 26 (3).png";
import productsImg4 from "../../Assets/img/image 26 (4).png";
import productsImg5 from "../../Assets/img/image 26 (5).png";
import productsImg6 from "../../Assets/img/image 26.png";
import { ob } from "../Home/Home";
import uniqueArr from "../../Helper/uniqueArray";

document.querySelector(".reloadCate")?.forEach((element) => {
  element.onclick = (e) => {
    console.log(e);
  };
});
const Products = {
  listCategory: ob.map((value) => {
    return value.category;
  }),
  uniArr:[],
  getCategory(){
    this.uniArr= uniqueArr(this.listCategory)
  },
  reloadListCateGory(category) {
    const findCategory = ob.filter((value) => {
      return value.category === category;
    });
  },
  handleSelectCategory(value) {
    console.log(value);
  },
  render() {
    return /*html*/`
    <div class="containers">
    <div class="body">
    <div class="banner">
        <img src="${img}" alt="">
    </div>
    <div class="content">
        <div class="listCateGory">
            <ul class="list">
               ${this?.uniArr
                 .map((value) => {
                   return `<li class="reloadCate">${value}</li>`;
                 })
                 .join("")}
            </ul>
        </div>
        <div class="listProducts">
        ${ob
          .map((item) => {
            return ` <div class="products">
                        <a href="/products/${item.id}"  data-navigo ><img src="${item.img}" alt=""></a>
                        <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                        <p class="price">${item.price}</p>
                        <span class="">${item.category}</span>
                        <button>Add To Cart</button>
                    </div>
                   `;
          })
          .join("")}
        </div>

    </div>
</div>
<div class="line"></div>
</div>
    `;
  },
  start() {
    this.getCategory();
    return this.render();
  },
};
export default Products;
