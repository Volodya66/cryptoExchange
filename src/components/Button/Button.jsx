import css from "./Button.module.css"

export default function Button({ type="button", text, styles, onClick }) {
    // console.log('onClick: ', onClick);
  

return(
    <>
        <button className={css[styles]} onClick={onClick} type={type} >{text}</button> 
    </>
)

}
