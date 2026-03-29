import { FileText, Shield, Scale, Search, FileCheck, ClipboardList, Files } from "lucide-react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import CertidaoCard from "@/components/CertidaoCard";
import HelpAccordion, { type HelpItem } from "@/components/HelpAccordion";
import GovFooter from "@/components/GovFooter";

const certidoes = [
  {
    title: "Certidão Negativa de Débitos Trabalhistas",
    description:
      "Comprova que uma pessoa ou empresa não possui débitos trabalhistas. Exigida em licitações e contratos públicos.",
    href: "https://www.tst.jus.br/certidao-negativa-de-debitos-trabalhistas",
    icon: <Shield className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
  {
    title: "Certidão de Indisponibilidade de Sistemas",
    description:
      "Atesta que os sistemas eletrônicos do TST ficaram indisponíveis em determinado período, justificando eventual atraso em prazos processuais.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/indisponibilidade",
    icon: <FileText className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
  {
    title: "Certidão Judicial de Exercício da Advocacia",
    description:
      "Comprova a atuação de advogado(a) em processos no TST. Útil para fins de comprovação de atividade jurídica.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/exercicio-advocacia",
    icon: <Scale className="h-5 w-5 text-primary" />,
    isExternal: false,
  },
  {
    title: "Certidão de Andamento Processual",
    description:
      "Informa a situação atual de um processo em tramitação no TST, incluindo as últimas movimentações.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/andamento-processual",
    icon: <Search className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
  {
    title: "Certidão de Distribuição de Feitos",
    description:
      "Informa se existe algum processo distribuído em nome de determinada parte no TST.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/distribuicao-feitos",
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
  {
    title: "Certidão de Objeto e Pé",
    description:
      "Resume o assunto (objeto) e a fase atual (pé) de um processo trabalhista no TST.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/objeto-pe",
    icon: <FileCheck className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
  {
    title: "Demais Certidões Processuais",
    description:
      "Outros tipos de certidões disponíveis para processos em tramitação no Tribunal Superior do Trabalho.",
    href: "https://www.tst.jus.br/portal-da-advocacia/certidoes/demais",
    icon: <Files className="h-5 w-5 text-primary" />,
    isExternal: true,
  },
];

const helpItems: HelpItem[] = [
  {
    question: "O que é uma certidão?",
    answer: (
      <p>
        É um documento oficial emitido pelo Tribunal que atesta ou comprova uma
        informação específica, como a existência de um processo ou a ausência de
        débitos trabalhistas. Tem validade jurídica e pode ser usada para fins
        administrativos, judiciais ou pessoais.
      </p>
    ),
  },
  {
    question: "Quem pode solicitar uma certidão?",
    answer: (
      <div className="space-y-2">
        <p>
          Qualquer pessoa pode solicitar certidões junto ao TST. Em alguns casos,
          como a Certidão de Exercício da Advocacia, é necessário ser advogado(a)
          inscrito(a) na OAB.
        </p>
        <p>
          Algumas certidões podem ser emitidas diretamente pela internet, sem
          necessidade de comparecer ao Tribunal.
        </p>
      </div>
    ),
  },
  {
    question: "Como emitir a Certidão Negativa de Débitos Trabalhistas (CNDT)?",
    answer: (
      <div className="space-y-2">
        <p>
          A CNDT pode ser emitida gratuitamente pela internet. Basta acessar o
          sistema, informar o CPF ou CNPJ e gerar o documento. A certidão é
          válida por 180 dias a partir da data de emissão.
        </p>
        <p>
          A CNDT é exigida para participar de licitações públicas e para celebrar
          contratos com a Administração Pública (Lei nº 12.440/2011).
        </p>
      </div>
    ),
  },
  {
    question: "O que é a Certidão de Exercício da Advocacia e como solicitar?",
    answer: (
      <div className="space-y-2">
        <p>
          Essa certidão comprova que o(a) advogado(a) atuou em processos
          perante o TST. É frequentemente usada para comprovar atividade jurídica
          em concursos públicos e na magistratura.
        </p>
        <p>
          Para solicitar, acesse a página específica deste serviço clicando no
          card "Certidão Judicial de Exercício da Advocacia" acima. Você será
          direcionado(a) ao formulário de solicitação.
        </p>
      </div>
    ),
  },
  {
    question: "As certidões têm algum custo?",
    answer: (
      <p>
        A maioria das certidões emitidas pelo TST é gratuita. A Certidão
        Negativa de Débitos Trabalhistas (CNDT), por exemplo, pode ser gerada
        sem custo diretamente pela internet. Caso precise de uma certidão com
        características específicas, consulte a SEGJUD pelo e-mail{" "}
        <a
          href="mailto:segjud@tst.jus.br"
          className="text-primary hover:underline font-medium"
        >
          segjud@tst.jus.br
        </a>
        .
      </p>
    ),
  },
  {
    question: "Qual o prazo para emissão de certidões?",
    answer: (
      <p>
        Certidões eletrônicas, como a CNDT, são emitidas imediatamente. Para
        certidões que exigem análise manual, como a de Exercício da Advocacia, o
        prazo pode variar. Recomendamos entrar em contato com a Secretaria-Geral
        Judiciária para verificar o prazo estimado.
      </p>
    ),
  },
];

const breadcrumbItems = [
  { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
  { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
  { label: "Certidões" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <GovHeader />

      <main id="main-content" className="flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <GovBreadcrumb items={breadcrumbItems} />

          {/* Page header */}
          <div className="py-6 border-b border-border mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Portal da Advocacia
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Certidões da Justiça do Trabalho
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Acesse os serviços de emissão e consulta de certidões do Tribunal
              Superior do Trabalho. Selecione o tipo de certidão desejada para
              mais informações.
            </p>
          </div>

          {/* Cards grid */}
          <section aria-label="Tipos de certidões disponíveis" className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certidoes.map((certidao, index) => (
                <CertidaoCard key={index} {...certidao} />
              ))}
            </div>
          </section>

          {/* Help section */}
          <div className="mb-12 max-w-3xl">
            <HelpAccordion items={helpItems} />
          </div>

          {/* Contact info */}
          <section
            aria-label="Informações de contato"
            className="mb-12 bg-card border border-border rounded p-5 max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-foreground mb-2">
              Precisa de ajuda?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Entre em contato com a Secretaria-Geral Judiciária (SEGJUD) pelo
              e-mail{" "}
              <a
                href="mailto:segjud@tst.jus.br"
                className="text-primary hover:underline font-medium"
              >
                segjud@tst.jus.br
              </a>
              . A equipe pode ajudar com dúvidas sobre emissão, prazos e tipos de
              certidões disponíveis.
            </p>
          </section>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default Index;
