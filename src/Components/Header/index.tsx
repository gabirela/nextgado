import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "./styles";
import { ColoredLine } from "./styles";

/* CONST HEADER APENAS PARA LOGO*/
const Header = () => {
    const router = useRouter();
    return (
        <div className="container">
            <Container>
                <img src="/img/logo.png" alt="texto alternativo" />
            </Container>
        </div>
    ); 
}

const Menu = () => {
    const router = useRouter();
    return (
        <div className="ColoredLine">
            <ColoredLine>
            <hr />
            </ColoredLine>
        </div>

    );
}


export default Header;