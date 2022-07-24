import { Container } from "./styles";

import CreateStudent from "../CreateStudent";
import Deletetudent from "../DeleteStudent";
import ShowStudent from "../ShowStudent";
import SearchStudent from "../SearchStudent";

export default function ContainerContent() {
    return(
    <Container>
      <CreateStudent />
      <ShowStudent />
      <Deletetudent />
      <SearchStudent />
    </Container>
    );
}
