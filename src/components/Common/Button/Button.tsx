import React, { JSX } from "react"

interface IButton{
  text: string;
  btnClassName: string;
  clickHandler?: () => void;
}

const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
  return (   
      <button className={`button ${props.btnClassName}`} onClick={props.clickHandler}>{props.text}</button>
  )
}

export default Button