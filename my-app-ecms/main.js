import Navigo from 'navigo'
import LayoutSite from './src/Layout/LayoutSite'
import HomeProducts from './src/Layout/HomeProducts/HomeProducts'
const $ = document.querySelector.bind(document)
const router = new Navigo('/')
const print = (content)=>{
    const app = $('#app').innerHTML = content
}
router.on({
    "/": ()=>{
        print(LayoutSite(HomeProducts()))
    },
    "/error":()=>{
        print('Error')
    }
})

router.resolve()