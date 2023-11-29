import css from './Header.module.css'


export default function Header ({children}) {
  

return(
    <header className={css.header}>
        <div className={css.container}>
            <nav className={css.nav}>
                {children}
            </nav>
        </div>
        
    </header>
)


}
