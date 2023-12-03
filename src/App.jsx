import { useDispatch } from "react-redux";

import Header from "components/SectionWraps/Header/Header"
import Button from "components/Button/Button"
import HomePage from "pages/HomePageNoRegister/HomePage";

import { Routes, Route ,NavLink} from "react-router-dom";

// import { stateModal } from "reducer/modalReducer/selectorsModal";
import { toggleModal } from "reducer/modalReducer/modalSlice";



export default function App () {
 
const dispatch = useDispatch();
// const state = useSelector(stateModal);



  
const openModal=()=>{
  console.log("APP")
dispatch(toggleModal())  
} 
  
return (
  <>

  <Header>
   <NavLink  className='logo' to='/'> Crypto Change </NavLink>
  <Button styles={"buttonMobileMenu"} onClick={openModal} type={"button"} text={"Меню"} />
  </Header>
  
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>


  </>
)

}

