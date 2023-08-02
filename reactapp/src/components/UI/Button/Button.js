import React from 'react'
import { useState } from 'react';

interface ButtonProps {
    onClick: () => void;
    text : String;
}

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


const Button = ({ onClick, children }) => {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  };
export default Button;