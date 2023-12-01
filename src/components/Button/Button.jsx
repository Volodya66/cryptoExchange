import css from "./Button.module.css"

export default function Button({ type="button", text, styles, onClick }) {
  

return(
    <>
        <button className={css[styles]} type={type} >{text}</button> 
    </>
)

}
