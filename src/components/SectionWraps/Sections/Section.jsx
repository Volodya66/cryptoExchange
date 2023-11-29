import css from './Section.module.css'


export default function Section ({children, typeSection,containerSection}) {
  

return(
    <section className={css[typeSection]}>
        <div className={css[containerSection]}>
            {children}
        </div>
    </section>
)


}