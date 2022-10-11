import "./ProductsDetail.css";
import imgBanner from "../../Assets/img/image 26.png";
import imgProduct from "../../Assets/img/image 26 (1).png";
import imgProducts from "../../Assets/img/image 26 (2).png";
import imgProductss from "../../Assets/img/image 26 (3).png";
import { ob } from "../Home/Home";

const ProductsDetail = {
  product: {},
  findProduct(id) {
    this.product = ob.find((item) => {
      return item.id === Number(id);
    });
  },
  render() {
    return /*html*/ `
    <div class="containers">
        <div class="body">
        <div class="infoProducts">
            <div class="contentProducts">
                <h2 class="titleProducts">${this.product?.name}</h2>
                <h2 class="priceProducts">${this.product?.price}</h2>
                <p class="descProducts">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <div class="adsLocation">
                    <input type="number" placeholder="Quantity" ><button>Add To Cart</button>
                </div>
            </div>
            <div class="imgProducts">
                <img src="${this.product?.img}" alt="">
            </div>
        </div>
        <div class="productsDetail">
            <h3 class="detailTitle">Related Products</h3>
            <div class="Listproducts">
            ${ob
              .map((item) => {
                return ` 
                    <div class="products">
                    <a href="/products/${item.id}" data-navigo><img src="${item.img}" alt=""></a>
                    <p class="name">${item.name}</p>
                    <p class="price">${item.price}</p>
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
  start(id) {
    window.scrollTo(0, 0);
    this.findProduct(id);
    return this.render();
  },
};

export default ProductsDetail;
