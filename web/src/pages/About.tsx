import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/pages/wq-page.css";
import "../styles/pages/signup-page.css";
import "../styles/global.css";
export default function About() {
  return (
    <div id="page-create-orphanage">
         <Sidebar />
      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Sobre Cleverstry</legend>
            <p>
              {"  "}
              A plataforma Cleverstry é um projeto realizado por Daniel Ferreira
              Simão e orientado por Kathia Regina Kunzler, representando
              respectivamente, um estudante e uma docente do Instituto Federal
              do Paraná Campus Assis Chateaubriand.
            </p>
            <p>
              {"  "}
              Em uma iniciativa para trazer recursos didáticos modernos e
              relevantes para as salas de aula, o site é tema da defesa do
              Projeto Final de Curso de seu idealizador, formando do Curso
              Técnico em Informática Integrado ao Ensino Médio.
            </p>
            <p>
              {"  "}
              O desenvolvimento da plataforma Cleverstry teve sua base
              direcionada a uma motivação pessoal do autor, o qual, analisando
              sobre o contexto educacional hodierno brasileiro, observou a
              necessidade de democratizar um ensino de qualidade e gratuito aos
              alunos, colocando-os como personagens ativos em sua construção de
              conhecimento.
            </p>
            <p>
              {"  "}
              Dessa forma, as WQs se demonstraram como recursos propícios para a
              realização de tais objetivos, buscou-se, portanto, desenvolver uma
              plataforma que pudesse oferecer ao educador os instrumentos
              necessários para a confecção de WQs de maneira online.
            </p>
            <p>
              {"  "}
              O site apresentado, propõe ao docente uma rota capaz de indicar o
              passo a passo do desenvolvimento de uma WQ, portanto, atinge não
              somente os membros ativos do processo educacional brasileiro, mas
              também qualquer nicho de aprendizagem que busca recursos digitais
              para a apresentação de atividades complementares. Por efeito da
              disponibilização gratuita da plataforma, um dos principais
              objetivos é alcançado: a democratização do acesso a meios digitais
              de qualidade, viabilizando a sua utilização por quaisquer classes
              étnicas e socioeconômicas.
            </p>
          </fieldset>
        </form>
      </main>
    </div>
  );
}
