import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Objeto e Pé" },
  ],
  titulo: "Certidão de Objeto e Pé",
  
  tags: ["Certidão de Inteiro Teor", "Certidão sobre o Estado do Processo", "Certidão de Situação Processual"],
  descricaoEmissao: "A Certidão de Objeto e Pé deve ser solicitada por meio de petição dirigida ao processo correspondente, via e-Doc ou PJe.",
  helpItems: [
    {
      question: "O que é?",
      answer: (
        <p>A Certidão de Objeto e Pé fornece informações detalhadas sobre o <strong>objeto</strong> (assunto, matéria discutida) e o <strong>andamento</strong> (pé, fase atual) de um processo trabalhista no TST.</p>
      ),
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: <p>Advogados habilitados no processo podem solicitar a certidão. A solicitação deve ser feita por advogado com procuração nos autos.</p>,
    },
    {
      question: "Etapas para realização deste serviço",
      answer: (
        <div className="space-y-2">
          <p>A Certidão de Objeto e Pé deve ser solicitada por meio de <strong>petição</strong> dirigida ao processo correspondente via e-Doc ou PJe.</p>
          <p><strong>Observação:</strong> A emissão <strong>não é automática</strong>.</p>
        </div>
      ),
    },
    {
      question: "Outras informações",
      answer: (
        <div className="space-y-2">
          <p>Pode haver cobrança de emolumentos, conforme disposto na Instrução Normativa nº 20/2002 do TST.</p>
          <p>Caso o processo já tenha sido baixado, o requerimento deve ser dirigido ao <strong>Tribunal Regional do Trabalho (TRT) de origem</strong>.</p>
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

const ObjetoPe = () => <CertidaoPageTemplate config={config} />;

export default ObjetoPe;
