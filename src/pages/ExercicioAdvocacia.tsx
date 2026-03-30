import { Scale, ExternalLink } from "lucide-react";
import { Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Exercício da Advocacia" },
  ],
  titulo: "Certidão Judicial de Exercício da Advocacia",
  subtitulo:
    "Comprova o exercício da advocacia no TST, abrangendo processos em andamento, arquivados ou devolvidos aos TRTs de origem. Expedida automaticamente e de forma gratuita.",
  descricaoEmissao:
    "Informe o CPF do(a) advogado(a) para gerar a certidão automaticamente.",
  campos: [
    {
      id: "cpf",
      label: "CPF",
      placeholder: "000.000.000-00",
    },
  ],
  emissaoIcon: <Scale className="h-4 w-4" aria-hidden="true" />,
  infoCards: [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Emissão",
      description: "Automática e imediata",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-success" />,
      title: "Custo",
      description: "Gratuita (certidão automática)",
      variant: "success",
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Requisito",
      description: "Apenas o CPF do(a) advogado(a)",
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-warning-foreground" />,
      title: "Parâmetros específicos",
      description:
        "Para certidões especiais (publicidade restrita, período determinado etc.), preencha o formulário específico no site do TST.",
      variant: "warning",
    },
  ],
  helpItems: [
    {
      question: "O que é a Certidão de Exercício da Advocacia?",
      answer: (
        <p>
          A Certidão Judicial de Exercício da Advocacia comprova o exercício da
          advocacia no Tribunal Superior do Trabalho (TST), abrangendo processos em{" "}
          <strong>andamento, arquivados ou devolvidos</strong> aos Tribunais
          Regionais do Trabalho (TRTs) de origem.
        </p>
      ),
    },
    {
      question: "Como a certidão é emitida?",
      answer: (
        <p>
          A certidão é expedida <strong>automaticamente e de forma gratuita</strong>,
          a partir do número de inscrição no CPF do(a) advogado(a) informado pelo(a)
          requerente. Basta informar o CPF no formulário ao lado.
        </p>
      ),
    },
    {
      question: "Quais processos são incluídos na certidão automática?",
      answer: (
        <p>
          A certidão automática inclui exclusivamente os processos em que o(a)
          advogado(a) esteja formalmente registrado(a) na autuação.{" "}
          <strong>Não abrange processos com publicidade restrita.</strong>
        </p>
      ),
    },
    {
      question: "Como validar a autenticidade de uma certidão?",
      answer: (
        <p>
          A autenticidade da certidão pode ser verificada na aba "Validar certidão"
          do formulário. Basta informar o código de autenticidade presente no documento.
        </p>
      ),
    },
    {
      question: "E se eu precisar de uma certidão com parâmetros específicos?",
      answer: (
        <div className="space-y-2">
          <p>
            Para certidões com parâmetros específicos — como atuação em processo
            com publicidade restrita, atuação em período determinado ou prática de
            ato em processo específico — é necessário preencher um{" "}
            <a
              href="https://www.tst.jus.br/portal-da-advocacia/certidoes/exercicio-advocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              formulário específico
            </a>
            .
          </p>
          <p>
            Neste caso, a certidão <strong>não será expedida automaticamente</strong>{" "}
            e poderá estar sujeita ao recolhimento de emolumentos, conforme os itens
            XV, "e", e XVI-A da Instrução Normativa nº 20/2002 do TST.
          </p>
        </div>
      ),
    },
    {
      question: "A certidão tem custo?",
      answer: (
        <div className="space-y-2">
          <p>
            A certidão automática (emitida por CPF) é <strong>gratuita</strong>.
          </p>
          <p>
            Certidões com parâmetros específicos podem estar sujeitas ao
            recolhimento de emolumentos, conforme a Instrução Normativa nº 20/2002 do TST.
          </p>
        </div>
      ),
    },
    {
      question: "Quais normas orientam este serviço?",
      answer: (
        <ul className="space-y-1.5">
          <li>
            <a
              href="https://hdl.handle.net/20.500.12178/4216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Instrução Normativa nº 20, de 7 de novembro de 2002
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://hdl.handle.net/20.500.12178/10377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Ato Conjunto nº 21/TST.CSJT.GP.SG, de 7 de dezembro de 2010
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
        </ul>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    suporteJuridico: "(61) 3043-7280 (9h às 18h)",
    email: "ccp@tst.jus.br",
    unidadeResponsavel: "Coordenadoria de Cadastramento Processual",
  },
};

const ExercicioAdvocacia = () => <CertidaoPageTemplate config={config} />;

export default ExercicioAdvocacia;
