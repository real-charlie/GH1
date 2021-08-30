import "./button.css"
import svg from "./arrow-right.svg"

const Button = (props: any) =>
    <div className="flex space-e m-auto button" onClick={() => {

        props.onClick()
    }} style={{color: props.textColor, backgroundColor: props.backgroundColor}}>
        <div>
            {props.children}
        </div>
        <img className="icon" style={{rotate: props.rotate}} src={svg} width="35px" height="35px"/>
    </div>
export default Button