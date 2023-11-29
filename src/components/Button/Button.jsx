import css from "./Button.module.css"

export default function Button({ type="button", text, styles }) {
  

return(
    <>
        <button className={css[styles]} type={type} >{text}</button> 
    </>
)

}
