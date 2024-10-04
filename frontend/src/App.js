
import './App.css';
import { Outlet } from 'react-router-dom';
import Headers from './component/Headers';
import Footer from './component/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Context from './context';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';
import SummeryApi from './common';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummeryApi.current_user.url,{
        method : SummeryApi.current_user.method,
        credentials : 'include'
    })
    const dataApi = await dataResponse.json()

    if(dataApi.success){
       dispatch(setUserDetails(dataApi.data))
    }  
    
  }
 
  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummeryApi.addToCartProductCount.url,{
      method : SummeryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
     /**user Details**/ 
    fetchUserDetails()
     /**user Details cart product */
     fetchUserAddToCart()
  },[])
  
  return (
      <>
      <Context.Provider value={{
            fetchUserDetails,
            cartProductCount, // current user add to cart product count,
            fetchUserAddToCart
      }}>

      <ToastContainer 
         position='top-center'
      />
    
      <Headers/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
         <Outlet/>
      </main>
      <Footer/>
      </Context.Provider>
      </>
  );
}

export default App;
