import Style from '../Header/Header.css'

const Header = () => {
        return `
        <div class='containers'>
                <div class="header">
                <div class="logo">
                <h4>Fudo.</h4>
                </div>
                <div class="menu">
                <ul class="listMenu">
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                </ul>
                </div>
                <div class="menuSign">
                <div class="cart"><i class="fal fa-shopping-cart"></i></div>
                <div class="signIn">Sign In</div>
                <div class="signUp">Sign Up</div>
                </div>
                </div>      
        </div>
        `
}
export default Header;