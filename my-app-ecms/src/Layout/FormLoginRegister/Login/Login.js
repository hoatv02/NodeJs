import Style from '../Login/Login.css'
import imgContent from '../../../Assets/img/Rectangle 1372.png'
const Login = () => {
    return /*html */`
    <div class="containery">
    <div>
    <form class="forms">
  <div class="logos">
    <h2 class="logo-title">Fudo .</h2>
    <span class="dot"></span>
  </div>
  <h4 class="login__welcome">Welcome back</h4>
  <h2 class="login-title">Login to your account</h2>
  <div class="form-control">
    <label class="form-label" for="email">Email</label>
    <input type="text" class="form-input" id="email"/>
  </div>
  <div class="form-control">
    <label class="form-label" for="password">Password</label>
    <input type="text" class="form-input" id="password"/>
  </div>
  <div class="form-control">
    <button class="buttons">Login now</button>
  </div>
  <div class="form-control">  
      <button class="buttons button-google"><img src="../assets/icongoogle.png" alt=""> Or sig-in with google</button>
  </div>
  <p class="text-blue">Forgot password?</p>
 <div class="form-control form-joinfree"> <p>Don't have account?</p>  <p class="text-blue">Join free today</p></div>
</form> 
    </div>
    <div class="form-banner">
        <img src="${imgContent}"  alt="">
    </div>
</div>
    `
}
export default Login;