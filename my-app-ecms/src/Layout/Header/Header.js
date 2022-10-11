import Style from "./Header.css";

const Header = {
  render() {
    return /*html*/ `
    <div class="containers">
    <div class="header">
      <div class="logo">
        <h4>Fudo.</h4>
      </div>
      <div class="menu">
        <ul class="listMenu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/"></a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div class="menuSign">
        <div class="cart">
          <i class="fal fa-shopping-cart"></i>
        </div>
        <div class="signIn">Sign In</div>
        <div class="signUp">Sign Up</div>
      </div>
    </div>
  </div>;
            
                `;
  },
};
export default Header;
