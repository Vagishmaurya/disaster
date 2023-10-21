import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the DisasterGuard for free"
      description1="Prepare, respond, recover: safeguarding communities from potential disasters"
      description2="Proactive Preparedness"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup