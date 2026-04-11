import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Distribuição de Feitos" },
  ],
  titulo: "Certidão de Distribuição de Feitos",
  subtitulo: "Apresenta a relação dos processos que tramitam ou tramitaram no TST, nos quais determinada pessoa física ou jurídica figure como parte.",
  tags: ["Certidão de Ações Trabalhistas", "Certidão de Existência de Processos", "Certidão Nada Consta Trabalhista"],
  descricaoEmissao: "A emissão da certidão não é automática. Para solicitar, você deve preencher o formulário eletrônico disponível no link abaixo.",
  helpItems: [
    {
      question: "O que é?",
      answer: <p>Este documento mostra se existem processos atuais ou antigos no Tribunal Superior do Trabalho (TST) em nome de uma pessoa ou de uma empresa.</p>,
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: <p>Pessoas físicas (somente o próprio titular do CPF ou representante legal com procuração) e pessoas jurídicas podem solicitar a certidão.</p>,
    },
    {
      question: "Etapas para realização deste serviço",
      answer: (
        <p>A emissão da certidão não é automática. Para pedir, você deve preencher{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">este formulário</a>.
        </p>
      ),
    },
    {
      question: "Outras informações",
      answer: (
        <div className="space-y-2">
          <p>Pode haver cobrança de taxas (emolumentos), conforme as normas do Tribunal Superior do Trabalho (TST).</p>
          <p>Se a certidão for para uma pessoa física (CPF), apenas ela mesma ou um representante legal com procuração pode fazer o pedido.</p>
        </div>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    suporteJuridico: "(61) 3043-3201 (9h às 18h)",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
  showValidation: false,
};

const DistribuicaoFeitos = () => <CertidaoPageTemplate config={config} />;

export default DistribuicaoFeitos;
