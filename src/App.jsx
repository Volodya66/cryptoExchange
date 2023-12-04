import { useDispatch } from "react-redux";

import Header from "components/SectionWraps/Header/Header"
import Button from "components/Button/Button"

import HomePage from "pages/HomePageNoRegister/HomePage";
import Registration from "pages/Register/Registration";

import { Routes, Route ,NavLink, Navigate} from "react-router-dom";

// import { stateModal } from "reducer/modalReducer/selectorsModal";
import { toggleModal } from "reducer/modalReducer/modalSlice";
import ModalMenu from "components/Modal/ModalMobileMenu/ModalMobile";
import Login from "pages/Login/Login";



export default function App () {
 
const dispatch = useDispatch();
// const state = useSelector(stateModal);



  
const openModal=()=>{
  // console.log("APP")
dispatch(toggleModal()) ; 
} 
  
return (
  <>

  <Header>
   <NavLink  className='logo' to='/'> Crypto Change </NavLink>
  <Button styles={"buttonMobileMenu"} onClick={openModal} type={"button"} text={"Меню"} />
  </Header>
  
   
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      

      <Route path="*" element={ <Navigate to='/'/>} />
  </Routes>

  <ModalMenu  openModal={openModal}/>
  </>
)

}

