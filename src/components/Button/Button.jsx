import { ButtonST } from "./Button.styled"

export const Button = ({ handlerClick }) => (
    <ButtonST type="click" onClick={handlerClick}>
        Load more
    </ButtonST>
)