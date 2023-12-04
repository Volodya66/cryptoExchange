// import Section from "components/SectionWraps/Sections/Section"
import Hero from "components/Sections/NoRegisterUser/SectionHero/Hero"
import SectionTwo from "components/Sections/NoRegisterUser/SectionTwo/SectionTwo"
import SectionOne from "components/Sections/NoRegisterUser/SectionsOne/SectionOne"
import SectionThree from "components/Sections/NoRegisterUser/SectionThree/SectionThree"
import SectionFour from "components/Sections/NoRegisterUser/SectionFour/SectionFour"
import Footer from "components/Sections/Footer"





export default function HomePage ()  {
  


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
        </>
    )
}
