import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg" ;

export default function App() {
  //Area de Declaração de variáveis/constantes/estados/refs/contexts/funções, etc...

  let altViteLogo = "Logo do Vite ";
  return(
    <>
      {/* Área de retorno de componentes de leitura e execução de variáveis/constantes/estados/refs/contexts/funções, etc... */}
      {/* Criar um cabeçalho com um header, um h1 com um título indicativo sobre o  projeto e uma lista ul com 3 itens com links*/}
      <Cabecalho/>
      {/* Criar ua seção de conteúdo com 3 parágrafos com cada um tendo 3 linhas de de lorem. */}
      <Conteudo viteLogoProps={viteLogo} altViteLogoProps={altViteLogo}/>
      {/* Criar uma seção de rodapé com uma div e uma lista ul com 3 itens com linkspara redes sociais. Um parágrafo com o seguinte texto: Todos os meus direitos reservado - 2023, adicione o código do símbolo copyright.*/}
      <Rodape/>
    </>
  )
}