import AuthForm from "../component/authform";

function Login(){
    return(
        <AuthForm route={'api/token/'} method={"login"}/>
    )
}

export default Login;