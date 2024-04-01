import { EXAMPLES } from "../data";


export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}){

    return(
        <>
            <ButtonsContainer>
            {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}