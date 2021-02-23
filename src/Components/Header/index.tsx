import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "./styles";
import { Menu } from "./styles";

/* CONST HEADER APENAS PARA LOGO*/
const Header = () => {
    const router = useRouter();
    return (
        <div className="container">
            <Container>
                <img src="/img/logo.png" alt="texto alternativo" />
            </Container>
            <Menu>
            <div className="Menu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cuidados</a>
            </li>
            <li>
              <a>Reprodução</a>
            </li>
            <li>
              <a>Fórum</a>
            </li>
            </div>
            </Menu>
        
      </div>
    );
}

export default Header;
