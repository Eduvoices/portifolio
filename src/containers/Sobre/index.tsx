import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSeçao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta
      nam itaque culpa quibusdam reprehenderit dolore deserunt! Enim numquam
      obcaecati tempore sed suscipit? Accusantium animi, qui consequatur facilis
      molestiae blanditiis!
    </Paragrafo>
    <GithubSeçao>
      <img src="https://github-readme-stats.vercel.app/api?username=Eduvoices&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Eduvoices&layout=compact&langs_count=7&theme=dracula" />
    </GithubSeçao>
  </section>
)

export default Sobre
