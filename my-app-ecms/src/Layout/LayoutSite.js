import Header from './Header/Header'
import Footer from './Footer/Footer'
const LayoutSite =(child)=>{
    return `
        ${Header.render()}
        ${child}
        ${Footer.render()}
    `
}
export default LayoutSite;