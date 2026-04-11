import { FileText, Shield, Scale, Search, FileCheck, ClipboardList, Files } from "lucide-react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import CertidaoCard from "@/components/CertidaoCard";

import GovFooter from "@/components/GovFooter";

const certidoes = [
  {
    title: "Certidão Negativa de Débitos Trabalhistas",
    description: "Comprova que uma pessoa ou empresa não possui débitos trabalhistas. Exigida em licitações e contratos públicos.",
    href: "/certidao-negativa-debitos",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
  {
    title: "Certidão de Indisponibilidade de Sistemas",
    description: "Atesta que os sistemas eletrônicos do TST ficaram indisponíveis em determinado período, justificando eventual atraso em prazos processuais.",
    href: "/indisponibilidade-sistemas",
    icon: <FileText className="h-5 w-5 text-primary" />,
  },
  {
    title: "Certidão Judicial de Exercício da Advocacia",
    description: "Comprova a atuação de advogado(a) em processos no TST. Útil para fins de comprovação de atividade jurídica.",
    href: "/exercicio-advocacia",
    icon: <Scale className="h-5 w-5 text-primary" />,
  },
  {
    title: "Certidão de Andamento Processual",
    description: "Informa a situação atual de um processo em tramitação no TST, incluindo as últimas movimentações.",
    href: "/andamento-processual",
    icon: <Search className="h-5 w-5 text-primary" />,
  },
  {
    title: "Certidão de Distribuição de Feitos",
    description: "Informa se existe algum processo distribuído em nome de determinada parte no TST.",
    href: "/distribuicao-feitos",
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
  },
  {
    title: "Certidão de Objeto e Pé",
    description: "Resume o assunto (objeto) e a fase atual (pé) de um processo trabalhista no TST.",
    href: "/objeto-pe",
    icon: <FileCheck className="h-5 w-5 text-primary" />,
  },
  {
    title: "Outras Certidões de Processos",
    description: "Outros tipos de certidões disponíveis para processos em tramitação no Tribunal Superior do Trabalho.",
    href: "/demais-certidoes",
    icon: <Files className="h-5 w-5 text-primary" />,
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
      <a href="#main-content" className="skip-link">Ir para o conteúdo principal</a>
      <GovHeader />
      <main id="main-content" className="flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <GovBreadcrumb items={breadcrumbItems} />
          <div className="py-6 border-b border-border mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Portal da Advocacia</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Certidões da Justiça do Trabalho</h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Acesse os serviços de emissão e consulta de certidões do Tribunal Superior do Trabalho. Selecione o tipo de certidão desejada para mais informações.
            </p>
          </div>
          <section aria-label="Tipos de certidões disponíveis" className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certidoes.map((certidao, index) => (
                <CertidaoCard key={index} {...certidao} />
              ))}
            </div>
          </section>
          
          <section aria-label="Informações de contato" className="mb-12 bg-card border border-border rounded p-5 max-w-3xl">
            <h2 className="text-sm font-semibold text-foreground mb-2">Precisa de ajuda?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Entre em contato com a Secretaria-Geral Judiciária (SEGJUD) pelo e-mail{" "}
              <a href="mailto:segjud@tst.jus.br" className="text-primary hover:underline font-medium">segjud@tst.jus.br</a>
              . A equipe pode ajudar com dúvidas sobre emissão, prazos e tipos de certidões disponíveis.
            </p>
          </section>
        </div>
      </main>
      <GovFooter />
    </div>
  );
};

export default Index;
