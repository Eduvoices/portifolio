import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBtn } from './styles'

//a estilização deve sempre vir antes do componente

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas feita com VueJS</Paragrafo>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Projeto
