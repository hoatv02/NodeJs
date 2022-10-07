import Style from '../Login/Login.css'
import imgContent from '../../../Assets/img/Rectangle 1372.png'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const Login = () => {
  function validate(id) {
    const formInput = $$('.form-input')
    for (let i = 0; i < formInput.length; i++) {
      if (formInput[i].value == '') {
        formInput[i].parentNode.querySelector('.error-message').innerText = `Vui lòng nhập ${[i], id} để đăng nhập !!!`
      } else {
        formInput[i].parentNode.querySelector('.error-message').innerText = ''
      }
    }
  
  }
  return /*html */`
            <div class="containery">
            <div>
              <div class="forms">
                          <div class="logos">
                            <h2 class="logo-title">Fudo .</h2>
                              <span class="dot"></span>
                         </div>
                            <h4 class="login__welcome">Welcome back</h4>
                            <h2 class="login-title">Login to your account</h2>
                      <div class="form-control">
                            <label class="form-label" for="email">Email</label> <br>
                            <input type="text" class="form-input" id="email"/>
                            <div class="error-message"></div>
                        </div>
                      <div class="form-control">
                            <label class="form-label" for="password">Password</label> <br>
                            <input type="password" class="form-input" id="password"/>
                            <div class="error-message"></div>
                      </div>
                      <div class="form-control">
                            <button class="buttons" onlick="validate()">Login now</button>
                      </div>
                      <div class="form-control">  
                          <button class="buttons button-google"><img src="../assets/icongoogle.png" alt=""> Or sig-in with google</button>
                      </div>
                            <p class="text-blue">Forgot password?</p>
                          <div class="form-control form-joinfree"> <p>Don't have account?</p>  <p class="text-blue">Join free today</p></div>
                          </div> 
          </div>
                        <div class="form-banner">
                            <img src="${imgContent}"  alt="">
                        </div>
        </div>
            `
}
export default Login;