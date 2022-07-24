import Button from "../button";
import HeaderContent from "../HeaderContent";
import { Container } from "./styles";

export default function ShowStudent() {
    return(
        <Container>
            <HeaderContent
             headerContentLabel="Visualizar Alunos:"
            />
            <Button primaryButton>Mostrar Alunos</Button>
            <Button attentionButton>Esconder Alunos</Button>
        </Container>
    );
}
