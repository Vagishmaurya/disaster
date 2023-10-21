import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Prepare, respond, recover: safeguarding communities from potential disasters"
      description2="Proactive Preparedness"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login