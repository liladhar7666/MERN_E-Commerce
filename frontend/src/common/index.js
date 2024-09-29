const backendDomain = "http://localhost:8081"

const SummeryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
         method : "post"
    },
    current_user : {
        url : `${backendDomain}/api/user-datails`,
         method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
         method : "get"
    }
}
export default SummeryApi