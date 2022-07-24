import Button from "../button";
import HeaderContent from "../HeaderContent";
import { Container } from "./styles"

export default function SearchStudent() {
    return(
        <Container>
            <HeaderContent
             headerContentLabel="Buscar Aluno:"
            />
            <Button primaryButton>Buscar</Button>
            <Button attentionButton>Limpar Busca</Button>
        </Container>
    );
}
