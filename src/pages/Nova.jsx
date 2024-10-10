import NovoComponente from "../components/NovoComponente/NovoComponente";
import Header from "../components/Header/Header";
import Base from "./Base";

const Nova = () => {
    return (<Base>
                <h1>Título da Página</h1>
                <p>Hello World</p>
                < NovoComponente />
    </Base>);
}

export default Nova