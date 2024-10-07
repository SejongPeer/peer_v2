import styled from "styled-components";
import { COLORS } from "../../theme";

import checked from '../../assets/images/filledCheck.png';
import unchecked from '../../assets/images/unfilledCheck.png';

interface ButtonProps {
    text?: string;
    textChecked?: string;
    ischecked?: boolean;
    onClick?: () => void;
}

export const BuddyButton = ({ 
    text='오류', 
    textChecked='오류',
    ischecked=false ,
    onClick
}: ButtonProps) => {
    return (
        (ischecked ? 
        <ButtonWrapperChecked 
            onClick={onClick}
        >
            {textChecked}
        </ButtonWrapperChecked>
        :
        <ButtonWrapper
            onClick={onClick}
        >
            {text}
        </ButtonWrapper>
    )
    )
}

const ButtonWrapper = styled.button<ButtonProps>`
    width: 100%;
    height: 56px;
    color: ${COLORS.font1};
    background-color: #FFF;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: left;
    padding: 16px 24px;
    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.20);
    background-image: url(${unchecked});
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: right 20px center;
`;
const ButtonWrapperChecked = styled.button<ButtonProps>`
    width: 100%;
    height: 56px;
    color: ${COLORS.font1};
    background-color: #FCECEE;
    border-radius: 50px;
    border: 1px solid ${COLORS.main}; 
    cursor: pointer;
    display: inline-block;
    text-align: left;
    padding: 16px 24px;
    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.20);
    font-weight: bold;
    background-image: url(${checked});
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: right 20px center;
`;

