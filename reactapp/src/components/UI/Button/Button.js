import React from 'react'




const ButtonFunc = (text) => {
    if(text === ""){
        return "Button Works";
    } else {
        return text;
    }
}

// const Button: React.FC<ButtonProps> = ({onClick, text}) => {
//     return <>
//     <button onClick= {onClick}>{ButtonFunc(text)}</button>
//     </>;
// };



const Button = (ButtonProps) => {
  return (<button onClick = {ButtonProps.onClick}>{ButtonProps.children}</button>);
}


export default Button;