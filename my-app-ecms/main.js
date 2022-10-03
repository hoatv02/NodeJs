import Navigo from 'navigo'
import LayoutSite from './src/Layout/LayoutSite'
import HomeProducts from './src/Layout/HomeProducts/HomeProducts'
import HomeCategory from './src/Layout/Category/Category'
import ProductsDetai from './src/Layout/ProductsDetail/ProductsDetail'
const $ = document.querySelector.bind(document)
const router = new Navigo('/')
const print = (content)=>{
    const app = $('#app').innerHTML = content
}
router.on({
    "/": ()=>{
        print(LayoutSite(HomeProducts()))
    },
    "/category":()=>{
        print(LayoutSite(HomeCategory()))
    }
    ,
    "/products":()=>{
        print(LayoutSite(ProductsDetai()))
    }
    ,
    "/error":()=>{
        print('Error')
    }
})

router.resolve()