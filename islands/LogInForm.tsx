import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const LogInForm: FunctionComponent = () => {
  return (
    <div className="LoginFormContainer">
        <h1>LOGIN</h1>
      <form action="/login" method="post">
        <input className="InputLoginName" name="LoginName"></input>
        <input className="InputLoginPassword" name="LoginPassword"></input>
        <button>Log In</button>
      </form>
    </div>
  );
};
export default LogInForm;
