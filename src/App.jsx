import Header from "components/SectionWraps/Header/Header"
import Button from "components/Button/Button"
// import Hero from "components/Sections/SectionHero/Hero"
import HomePage from "pages/HomePageNoRegister/HomePage";

import { Routes, Route ,NavLink} from "react-router-dom";

export default function App () {
  
return (
  <>

  <Header>
   <NavLink  className='logo' to='/'> Crypto Change </NavLink>
    {/* <a href="../public/index.html" className="logo">Crypto Change</a> */}
    <Button styles={"buttonMobileMenu"} type={"button"} text={"Меню"} />
  </Header>
  
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>



 
    


  </>
)

}

