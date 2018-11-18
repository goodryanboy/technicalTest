import { 
  observable,
  action, 
} from 'mobx';

class Login {
  @observable email      = '';
  @observable password   = '';
  @observable errorEmail = '';
  @observable errorPass  = '';
  @observable disabled   = false;
  @observable checked    = false;
  @observable users      = [{email: 'ryanmarksupremo@gmail.com', password: 'sdfsddf'}]

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  rememberMe = () => {
    alert('Login Success');
    //add if remember me is checked
    if(this.checked){
      let data = [...this.users];
      const { email, password } = this;
      const exist = data.find(item => item.email === email);
      if (!exist){
        data.push({ email, password });
        this.users = data;
      }
    }
  }

  signIn = () => {
    const { email, password} = this;
    //reset error
    this.errorEmail = '';
    this.errorPass = '';

    let valid = true;
    const emailEmpty = email.length == 0 ? true : false;
    const passEmpty = password.length == 0 ? true : false;
    
    if(password.length < 6){
      this.errorPass = 'please use atleast 6 - 12 characters';
      valid = false;
    }
    if (!this.validateEmail(email)) {
      this.errorEmail = 'not correct format for email address';
      valid = false;
    }
    if (emailEmpty || passEmpty) {
      emailEmpty && (this.errorEmail = "email is empty");
      passEmpty && (this.errorPass = "password is empty");
      valid = false;
    }

    valid ? this.rememberMe()  : this.disabled = false;

  }

}

const login = new Login();
export default login;