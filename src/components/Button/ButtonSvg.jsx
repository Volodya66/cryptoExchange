import css from './ButtonSvg.module.css'

export default function ButtonSvg ({styles,styles1,onClick,children,id})   {

  // const style1 = styles ? css[styles] : '';
  // const styles2 = styles1? css[styles] : '';

return ( 
  <button type="button" className={css[styles]} id={id}  onClick={onClick}>{children}</button> 
)

}

// className="btn_svg"