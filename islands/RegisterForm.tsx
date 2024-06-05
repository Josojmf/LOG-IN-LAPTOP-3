import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const RegisterForm: FunctionComponent = () => {
  return (
    <div className="RegisterFormContainer">
      <h1>REGISTER</h1>
      <form action="/register" method="post">
        <input className="InputRegisterName" name="RegisterName"></input>
        <input className="InputRegisterPassword" name="RegisterPassword">
        </input>
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegisterForm;
