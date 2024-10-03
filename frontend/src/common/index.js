
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
    },
    allUser : {
          url : `${backendDomain}/api/all-user`,
          method : "get"
    },
    updateUser : {
          url : `${backendDomain}/api/update-user`,
          method : "post"
    },
    uploadProduct :{
          url : `${backendDomain}/api/upload-product`,
          method : "post"
    },
    allProduct :{
          url : `${backendDomain}/api/get-product`,
          method : "get"
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method : "post"
    },
    categoryProduct: {
        url : `${backendDomain}/api/get-categoryProduct`,
        method : "get"
    },
    categoryWiseProduct:{
        url : `${backendDomain}/api/category-product`,
        method : "post"
    }
}
export default SummeryApi