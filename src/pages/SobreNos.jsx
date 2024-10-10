import Cartao from "../components/Cartao/Cartao"
import ListContainer from "../components/ListContainer/ListContainer"
import Base from "./Base"

const dados = [
    {
        titulo: "Um título do Array",
        texto: "Um texto grande do Array"
    },
    {
        titulo: "Outro título do Array",
        texto: "Outro texto grande do Array"
    }
]

const SobreNos = () => (
    <Base>
        <ListContainer>
            {
                dados.map( (ele, i) => (
                    <Cartao
                        key = {i}
                        titulo={ele.titulo}
                        texto={ele.texto}
                    />
                ))
            }
        </ListContainer>
    </Base>
)

export default SobreNos