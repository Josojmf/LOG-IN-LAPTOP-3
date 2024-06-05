import { useSignal } from "@preact/signals";
import RegisterForm from "../islands/RegisterForm.tsx";
import LogInForm from "../islands/LogInForm.tsx";

export default function Home() {
  return (
    <div>
      <h1>Hola</h1>
      <RegisterForm></RegisterForm>
      <LogInForm></LogInForm>
    </div>
   
  );
}
