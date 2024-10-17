import styled from "styled-components";
import { COLORS } from "../theme";

export const BuddyContainer = styled.div`
    max-width: 674px;
    height: 100vh;
    margin: auto;
`;
export const BuddyContainer2 = styled.div`
    width: 100%;
    max-width: 430px;
    height: 88%;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 20px;
    padding: 0 24px;
`;

export const InfoContainer = styled.div`
    margin-bottom: 20px;
`;
export const MatchingTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: ${COLORS.font1};
    line-height: 1.4;
    margin-bottom: 4px;
`;
export const MatchingInfo = styled.p`
    font-size: 15px;
    color: ${COLORS.font2};
    line-height: 1.5;
    font-weight: 500;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px
`;

export const ApplicationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
margin-top: auto;
`;