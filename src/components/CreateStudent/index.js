import Button from "../button";
import HeaderContent from "../HeaderContent";
import Input from "../input";
import { Container, InputContainer } from "./styles";

export default function CreateStudent() {
    return(
        <Container>
            <HeaderContent
              headerContentLabel="Criar Aluno: "
            />
            <InputContainer>
                <Input placeholder="Nome"/>
                <Input placeholder="Sobrenome"/>
                <Input placeholder="Nota 1"/>
                <Input placeholder="Nota 2"/>
            </InputContainer>
            <select name="turma" id="turma">
                <option value="A">Turma A</option>
                <option value="B">Turma B</option>
                <option value="C">Turma C</option>
                <option value="D">Turma D</option>
            </select>
            <Button>Criar Aluno</Button>
        </Container>
    );
}
