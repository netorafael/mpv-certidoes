import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Indisponibilidade de Sistemas" },
  ],
  titulo: "Certidão de Indisponibilidade de Sistemas",
  subtitulo: "Atesta que os sistemas eletrônicos do TST ficaram indisponíveis em determinado período, justificando eventual atraso em prazos processuais.",
  descricaoEmissao: "A emissão da certidão de indisponibilidade é automática e imediata. Selecione o sistema e o período desejado para gerar o documento.",
  helpItems: [
    {
      question: "O que é?",
      answer: <p>É um documento que comprova a <strong>indisponibilidade de sistemas eletrônicos</strong> do Tribunal Superior do Trabalho em um período específico. Pode ser usada para justificar eventual atraso no cumprimento de prazos processuais.</p>,
    },
    {
      question: "Como solicitar",
      answer: <p>A emissão é <strong>automática e imediata</strong>. Basta informar o sistema e o período desejado no formulário ao lado.</p>,
    },
    {
      question: "Custos",
      answer: <p>A certidão de indisponibilidade é <strong>totalmente gratuita</strong>.</p>,
    },
    {
      question: "Atenção",
      answer: (
        <div className="space-y-2">
          <p>A certidão cobre sistemas como PJe TST, Visualização de Autos, DEJT, SEI, CNDT, e-Doc e Simba.</p>
          <p>Ela deve ser utilizada como documento comprobatório junto aos processos no TST para justificar o não cumprimento de prazo.</p>
        </div>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
  showValidation: false,
};

const IndisponibilidadeSistemas = () => <CertidaoPageTemplate config={config} />;

export default IndisponibilidadeSistemas;
