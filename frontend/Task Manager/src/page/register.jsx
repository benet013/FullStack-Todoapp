import AuthForm from "../component/authform";

function Register(){
    return(
        <AuthForm route={'/api/register/'} method={"register"}/>
    )
}

export default Register;