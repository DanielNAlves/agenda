import "core-js/stable";
import "regenerator-runtime/runtime";
// import "./assets/css/style.css";

import Login from './modules/logins';

const login = new Login('.form-login');
const cadastro  = new Login('.form-cadastro');
cadastro.init();
login.init();

