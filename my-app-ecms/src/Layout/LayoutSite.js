import Header from './Header/Header'
import Footer from './Footer/Footer'
const LayoutSite =(child)=>{
    return `
        ${Header()}
        ${child}

        ${Footer()}

    `
}
export default LayoutSite;