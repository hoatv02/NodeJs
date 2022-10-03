import Style from './Category.css'
import img from '../../Assets/img/Rectangle 1372.png'
import productsImg1 from '../../Assets/img/image 26 (1).png'
import productsImg2 from '../../Assets/img/image 26 (2).png'
import productsImg3 from '../../Assets/img/image 26 (3).png'
import productsImg4 from '../../Assets/img/image 26 (4).png'
import productsImg5 from '../../Assets/img/image 26 (5).png'
import productsImg6 from '../../Assets/img/image 26.png'

const Category = ()=>{
    return `
    <div class="containers">
    <div class="body">
    <div class="banner">
        <img src="${img}" alt="">
    </div>
    <div class="content">
        <div class="listCateGory">
            <ul class="list">
                <li>Breakfast</li>
                <li>Vegan</li>
                <li>Meat</li>
                <li>Dessert</li>
                <li>Lunch</li>
                <li>Chocolate</li>
            </ul>
        </div>
        <div class="listProducts">
            <div class="products">
                <img src="${productsImg1}" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="${productsImg2}" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="${productsImg3}" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="${productsImg4}" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="${productsImg5}" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="${productsImg6}" alt="">
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
export default Category;