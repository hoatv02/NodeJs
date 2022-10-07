import Style from '../ProductsDetail/ProductsDetail.css'
import imgBanner from '../../Assets/img/image 26.png'
import imgProduct from '../../Assets/img/image 26 (1).png'
import imgProducts from '../../Assets/img/image 26 (2).png'
import imgProductss from '../../Assets/img/image 26 (3).png'
import {ob} from '../Home/Home'
// const abc = window.location.hash.split('#')[1]
// console.log(abc)
// const object = ob.find((item)=>{
//     return Number(abc) == item.id
// })

const ProductsDetail = (id) => {
    console.log(id)
    const products = ob.find((item)=>{
        console.log(item)
      return item.id === Number(id)
    })
    console.log(products)
    return `
        <div class="containers">
            <div class="body">
            <div class="infoProducts">
                <div class="contentProducts">
                    <h2 class="titleProducts">${products?.name}</h2>
                    <h2 class="priceProducts">${products?.price}</h2>
                    <p class="descProducts">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <div class="adsLocation">
                        <input type="number" placeholder="Quantity" ><button>Add To Cart</button>
                    </div>
                </div>
                <div class="imgProducts">
                    <img src="${products?.img}" alt="">
                </div>
            </div>
            <div class="productsDetail">
                <h3 class="detailTitle">Related Products</h3>
                <div class="Listproducts">
                    <div class="products">
                        <img src="${imgProduct}" alt="">
                        <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                        <p class="price">$30</p>
                        <button>Add To Cart</button>
                    </div>
                    <div class="products">
                        <img src="${imgProducts}" alt="">
                        <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                        <p class="price">$30</p>
                        <button>Add To Cart</button>
                    </div>
                    <div class="products">
                        <img src="${imgProductss}" alt="">
                        <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                        <p class="price">$30</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
    `
}

export default ProductsDetail;