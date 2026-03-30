import { Shield, ExternalLink } from "lucide-react";
import { Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Certidão Negativa de Débitos Trabalhistas" },
  ],
  titulo: "Certidão Negativa de Débitos Trabalhistas (CNDT)",
  subtitulo:
    "Comprova a inexistência de débitos trabalhistas em nome de pessoa física ou jurídica. Exigida para participação em licitações e contratos com a Administração Pública (Lei nº 12.440/2011).",
  descricaoEmissao:
    "Informe o CPF ou CNPJ para gerar a Certidão Negativa de Débitos Trabalhistas.",
  campos: [
    {
      id: "cpf-cnpj",
      label: "CPF ou CNPJ",
      placeholder: "000.000.000-00 ou 00.000.000/0000-00",
    },
  ],
  emissaoIcon: <Shield className="h-4 w-4" aria-hidden="true" />,
  infoCards: [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Emissão",
      description: "Automática e imediata",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-success" />,
      title: "Custo",
      description: "Gratuita",
      variant: "success",
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Validade",
      description: "180 dias a partir da emissão",
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-warning-foreground" />,
      title: "Importante",
      description:
        "A CNDT certifica a situação do interessado perante a Justiça do Trabalho quanto a débitos oriundos de decisões condenatórias transitadas em julgado.",
      variant: "warning",
    },
  ],
  helpItems: [
    {
      question: "O que é a CNDT?",
      answer: (
        <p>
          A Certidão Negativa de Débitos Trabalhistas (CNDT) é o documento que comprova
          a inexistência de débitos perante a Justiça do Trabalho. Foi instituída pela{" "}
          <strong>Lei nº 12.440/2011</strong>, que acrescentou o Título VII-A à
          Consolidação das Leis do Trabalho (CLT).
        </p>
      ),
    },
    {
      question: "Para que serve a CNDT?",
      answer: (
        <div className="space-y-2">
          <p>
            A CNDT é exigida para participar de <strong>licitações públicas</strong> e
            para celebrar <strong>contratos com a Administração Pública</strong>,
            conforme a Lei nº 12.440/2011.
          </p>
          <p>
            Também pode ser utilizada como comprovante de regularidade trabalhista em
            outras situações que exijam tal documentação.
          </p>
        </div>
      ),
    },
    {
      question: "Qual a validade da CNDT?",
      answer: (
        <p>
          A CNDT tem validade de <strong>180 dias</strong>, contados da data de sua
          emissão. Após esse prazo, é necessário emitir uma nova certidão.
        </p>
      ),
    },
    {
      question: "Quais débitos são verificados?",
      answer: (
        <p>
          A CNDT abrange os débitos oriundos de <strong>decisões condenatórias
          transitadas em julgado</strong> ou de <strong>acordos judiciais trabalhistas</strong>,
          incluindo as contribuições sociais e de terceiros deles decorrentes.
        </p>
      ),
    },
    {
      question: "A certidão tem custo?",
      answer: (
        <p>
          Não. A emissão da CNDT é <strong>totalmente gratuita</strong> e pode
          ser realizada diretamente pela internet.
        </p>
      ),
    },
    {
      question: "Quais normas regulamentam a CNDT?",
      answer: (
        <ul className="space-y-1.5">
          <li>
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12440.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Lei nº 12.440, de 7 de julho de 2011
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://hdl.handle.net/20.500.12178/4216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Instrução Normativa nº 20/2002 do TST
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
        </ul>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "0800-644-3444 (fixo) / (61) 3043-4000 (móvel)",
    email: "secretariagp@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral da Presidência (SEGP)",
  },
};

const CertidaoNegativaDebitos = () => <CertidaoPageTemplate config={config} />;

export default CertidaoNegativaDebitos;
