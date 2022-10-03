import Style from './HomeProducts.css'
import Ads from '../../Assets/img/photo-satisfied-woman-holds-piece-pizza-feels-pleased-as-spends-free-time-with-friends-pizzeria-looks-happily-directly-wears-casual-outfit-isolated-yellow-wall-lunch-removebg 1.png'
import Products261 from '../../Assets/img/image 26 (1).png'
import Products262 from '../../Assets/img/image 26 (2).png'
import Products263 from '../../Assets/img/image 26 (3).png'
import Products264 from '../../Assets/img/image 26 (4).png'
import Products265 from '../../Assets/img/image 26 (5).png'
import Products26 from '../../Assets/img/image 26.png'
import Products20 from '../../Assets/img/image 20.png'
import Products21 from '../../Assets/img/image 21.png'
import Products22 from '../../Assets/img/image 22.png'
import Products23 from '../../Assets/img/image 23.png'
import Products24 from '../../Assets/img/image 24.png'
import Products25 from '../../Assets/img/image 25.png'


const Home = ()=>{
    return `<div class="containers">
    <div class="body">
            <div class="ads">
                <div class="adsTitle">
                    <div class="buttonAds">
                        <button>Quality Food</button>
                    </div>
                    <div class="title">
                        <p>
                            Fastest
                        <p class="pColor">Delivery <span class="spanColor">&</span></p> Easy <span
                            class="pColor">Pickup</span>
                        </p>
                    </div>
                    <div class="adsDescription">
                        <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60
                            minutes.</p>
                    </div>
                    <div class="adsLocation">
                        <input type="text" placeholder="Enter your delivery location"><button>Discover</button>
                    </div>
                </div>
                <div class="adsImg">
                    <div class="adsImgborderOne">
                        <div class="adsImgborderTwo"></div>
                        <img src="${Ads}"
                            alt="">
                    </div>


                </div>
            </div>
            <div class="productsContent">
                <div class="productsTitle">
                    <h2>Our Popular Dishes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqut enim ad minim </p>
                </div>
                <div class="productList">
                    <div class="products">
                        <img src="${Products261}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="products">
                        <img src="${Products262}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="products">
                        <img src="${Products263}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="products">
                        <img src="${Products264}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="products">
                        <img src="${Products265}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="products">
                        <img src="${Products26}" alt="">
                        <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                        <div class="">
                            <ul class="list_Product">
                                <li><i class="fal fa-alarm-clock"></i> <span>30 minutes</span></li>
                                <li><i class="fas fa-utensils-alt"></i> <span>Fish</span></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="categoryContent">
                <div class="categoryItems">
                    <div class="titleCategory"><h2>Categories</h2></div>
                    <div class="viewCategory"><p>View All Categories.</p></div>
                </div>
                <div class="Items">
                    <div class="category">
                        <img src="${Products20}" alt="">
                        <p>Vegan</p>
                    </div>
                    <div class="category">
                        <img src="${Products21}" alt="">
                        <p>Meat</p>
                    </div>
                    <div class="category">
                        <img src="${Products23}" alt="">
                        <p>Dessert</p>
                    </div>
                    <div class="category">
                        <img src="${Products24}" alt="">
                        <p>Lunch</p>
                    </div>
                    <div class="category">
                        <img src="${Products25}" alt="">
                        <p>Chocolate</p>
                    </div>
                    <div class="category">
                        <img src="${Products22}" alt="">
                        <p>Breakfast</p>
                    </div>
                   
                </div>
            </div>
            <div class="contact">
                <div class="titleContact">
                    <h2>Contact Us</h2>
                </div>
                <div class="formContact">
                    <div class="form">
                       <div class="form-control">
                        <p>NAME</p>
                        <input type="text" id="name" placeholder="Enter your name...">
                       </div>
                       <div class="form-control">
                        <p>EMAIL ADDRESS</p>
                        <input type="text" id="name" placeholder="Your email address...">
                       </div>
                       <div class="form-control">
                        <p>SUBJECT</p>
                        <input type="text" id="name" placeholder="Enter subject...">
                       </div>
                       <div class="form-control">
                        <p>ENQUIRY TYPE</p>
                        <input type="text" id="name" placeholder="Advertising" >
                       </div>
                    </div>
                    <div class="message">
                        <p>MESSAGE</p>
                        <textarea name="" id="" cols="" rows="10" placeholder="Enter your message..."></textarea>
                    </div>
                    <div class="submit">
                        <button>Submit</button>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
          
        </div>
        </div>
    `
}
export default Home;