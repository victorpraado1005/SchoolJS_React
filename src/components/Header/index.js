import Button from "../button";
import { Container, Content } from "./styles";

export default function Header() {
    return(
        <Container>
            <Content>
                <span>SchoolJS</span>
                <Button dangerButton>Sair</Button>
            </Content>
        </Container>
    );
}
