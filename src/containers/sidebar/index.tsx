import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BtnTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luis Eduardo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Eduvoices
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BtnTema onClick={props.trocaTema}>Trocar tema</BtnTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
