// import Section from "components/SectionWraps/Sections/Section"
import Hero from "components/Sections/NoRegisterUser/SectionHero/Hero"
import SectionTwo from "components/Sections/NoRegisterUser/SectionTwo/SectionTwo"
import SectionOne from "components/Sections/NoRegisterUser/SectionsOne/SectionOne"
import SectionThree from "components/Sections/NoRegisterUser/SectionThree/SectionThree"
import SectionFour from "components/Sections/NoRegisterUser/SectionFour/SectionFour"
import Footer from "components/Sections/Footer"

import ModalMenu from "components/Modal/ModalMobileMenu/ModalMobile"

import { useDispatch } from "react-redux";

// import { stateModal } from "reducer/modalReducer/selectorsModal";
import { toggleModal } from "reducer/modalReducer/modalSlice";



export default function HomePage ()  {
  
const dispatch = useDispatch();
// const stateIsOpenModal = useSelector(stateModal);


const openModal=()=>{

dispatch(toggleModal())  ;
} 

    return (
        <>
        <main>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>  
        <SectionThree/>
        <SectionFour/>
        </main>
        <footer>
        <Footer/>   
        </footer>
            {/* {stateIsOpenModal ? <ModalMenu  openModal={openModal}/> :  ""} */}
            <ModalMenu  openModal={openModal}/>
        </>
    )
}
