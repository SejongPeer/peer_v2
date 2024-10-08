import styled from "styled-components";
import { COLORS } from "../../theme";

interface ButtonProps {
    width?: string;
    height?: string;
    text?: string;
    textcolor?: string;
    backgroundcolor?: string;
    borderradius?: string;
    border?: string;
    onClick?: () => void;
}

export const ConfirmButton = ({ 
    width='327px',
    height='52px', 
    text='오류', 
    textcolor=`${COLORS.back2}`, 
    backgroundcolor=`${COLORS.disabled}`,
    borderradius='50px',
    border='none',
    onClick
}: ButtonProps) => {
    return (
        <ButtonWrapper 
            width={width}
            height={height}
            textcolor={textcolor}
            backgroundcolor={backgroundcolor}
            borderradius={borderradius}
            border={border}
            onClick={onClick}
        >
            {text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.textcolor};
    background-color: ${(props) => props.backgroundcolor};
    border-radius: ${(props) => props.borderradius};
    border: ${(props) => props.border};
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 14px 0;
`;