

export default function ButtonSvg ({onClick,children,id})   {
  
return ( 
  <button type="button" id={id} className="btn_svg" onClick={onClick}>{children}</button> 
)

}
