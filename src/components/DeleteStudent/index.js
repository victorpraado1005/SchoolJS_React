import Button from "../button";
import HeaderContent from "../HeaderContent";
import { Container } from "./styles"

export default function Deletetudent() {
    return(
        <Container>
            <HeaderContent
             headerContentLabel="Apagar Aluno: "
            />
            <Button dangerButton>Apagar Aluno</Button>
        </Container>
    );
}
