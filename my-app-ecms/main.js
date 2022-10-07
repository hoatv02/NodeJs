import Navigo from 'navigo'
import LayoutSite from './src/Layout/LayoutSite'
import Home from './src/Layout/Home/Home'
import Products from './src/Layout/Products/Products'
import ProductsDetail from './src/Layout/ProductsDetail/ProductsDetail'
import Login from './src/Layout/FormLoginRegister/Login/Login'
import ManageProducts from './src/Layout/ManageProducts/ManageProducts'
const $ = document.querySelector.bind(document)
const router = new Navigo('/',{linksSelector:"a"})
const print = (content)=>{
    const app = $('#app').innerHTML = content
}
router.on({
    "/": ()=>{
        print(LayoutSite(Home()))
    }
    ,
    "/products":()=>{
        print(LayoutSite(Products()))
    }
    ,
    "/products/:id":(value)=>{
        print(LayoutSite(ProductsDetail(value.data.id)))
    }
    ,"/manage":()=>{
        print(LayoutSite(ManageProducts()))
    },
    "/login":()=>{
        print(Login())
    },
    "/error":()=>{
        print('Error')
    }
})

router.resolve()