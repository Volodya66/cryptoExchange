import css from "./ButtonSvg.module.css"

export default function ButtonSvg ({styles,onClick,children,id})   {
  
return ( 
  <button type="button" className={styles} id={id}  onClick={onClick}>{children}</button> 
)

}

// className="btn_svg"