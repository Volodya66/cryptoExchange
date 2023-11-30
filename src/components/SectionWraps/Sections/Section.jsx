import css from './Section.module.css'


export default function Section ({children, typeSection,containerSection,id}) {
  

return(
    <section id={id} className={css[typeSection]}>
        <div className={css[containerSection]}>
            {children}
        </div>
    </section>
)


}