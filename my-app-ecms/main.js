import Navigo from "navigo"
const router = new Navigo("/")
router.on({
    "/":()=>{
        console.log('Home')
    },
    "/products":()=>{
        console.log('Products')
    }
})
router.resolve()