import Style from './Category.css'
import img from '../../Assets/img/Rectangle 1372.png'
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
                <img src="" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="img/image 26.png" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="img/image 26.png" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="img/image 26.png" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="img/image 26.png" alt="">
                <p class="name">Fresh and Healthy Mixed Mayonnaise Salad</p>
                <p class="price">$30</p>
                <button>Add To Cart</button>
            </div>
            <div class="products">
                <img src="img/image 26.png" alt="">
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