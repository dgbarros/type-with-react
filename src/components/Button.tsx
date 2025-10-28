import { FunctionComponent, ReactNode } from "react";

interface ButtonProps{
    theme?: 'dark' | 'light';
    onClick: () => void;
    children: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({onClick}) =>
{
    return <button onClick={onClick}>Olá</button>
}
export default Button;