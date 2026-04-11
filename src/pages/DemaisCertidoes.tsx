import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Outras Certidões de Processos" },
  ],
  titulo: "Outras Certidões de Processos",
  
  tags: ["Certidão Avulsa", "Certidão Especial", "Certidão Sob Demanda", "Certidão Processual Diversa"],
  descricaoEmissao: "Para solicitar outras certidões processuais, preencha o formulário eletrônico disponível no link abaixo.",
  helpItems: [
    {
      question: "O que é?",
      answer: <p>Use esta opção para pedir certidões de processos que não aparecem nas outras opções do sistema.</p>,
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: <p>Qualquer parte interessada, advogados ou representantes legais podem solicitar certidões processuais diversas.</p>,
    },
    {
      question: "Etapas para realização deste serviço",
      answer: (
        <p>A emissão do documento não é automática. Para pedir a certidão, você deve preencher{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">este formulário</a>.
        </p>
      ),
    },
    {
      question: "Outras informações",
      answer: <p>Pode haver cobrança de taxas (emolumentos), conforme as normas do Tribunal Superior do Trabalho (TST).</p>,
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    suporteJuridico: "(61) 3043-7280 (9h às 18h)",
    email: "ccp@tst.jus.br",
    unidadeResponsavel: "Coordenadoria de Cadastramento Processual",
  },
  showValidation: false,
};

const DemaisCertidoes = () => <CertidaoPageTemplate config={config} />;

export default DemaisCertidoes;
