import { Files, ExternalLink } from "lucide-react";
import { Clock, FileText, AlertCircle } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Demais Certidões Processuais" },
  ],
  titulo: "Demais Certidões Processuais",
  subtitulo:
    "Requerimento de certidões processuais que não se enquadrem nas outras opções disponíveis no sistema.",
  descricaoEmissao:
    "Preencha os dados abaixo para solicitar a certidão processual desejada.",
  campos: [
    {
      id: "numero-processo",
      label: "Número do processo",
      placeholder: "0000000-00.0000.0.00.0000",
    },
    {
      id: "tipo-certidao",
      label: "Tipo de certidão solicitada",
      placeholder: "Descreva brevemente o tipo de certidão desejada",
    },
  ],
  emissaoIcon: <Files className="h-4 w-4" aria-hidden="true" />,
  infoCards: [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Emissão",
      description: "Não automática — sujeita a análise",
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Custo",
      description: "Pode haver cobrança de emolumentos (IN nº 20/2002)",
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-warning-foreground" />,
      title: "Procedimento",
      description:
        "A solicitação pode ser feita por formulário ou via petição ao processo, conforme o caso.",
      variant: "warning",
    },
  ],
  helpItems: [
    {
      question: "O que são as Demais Certidões Processuais?",
      answer: (
        <p>
          Por meio desta funcionalidade, o interessado poderá requerer{" "}
          <strong>certidões processuais</strong> que não se enquadrem nas outras opções
          disponíveis no sistema, como certidões de exercício da advocacia, andamento
          processual, distribuição de feitos ou objeto e pé.
        </p>
      ),
    },
    {
      question: "Como solicitar?",
      answer: (
        <div className="space-y-2">
          <p>
            Para solicitar a emissão, será necessário preencher o formulário acima ou
            utilizar o{" "}
            <a
              href="https://www.tst.jus.br/formulario-solicitacao-de-certidao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              formulário oficial do TST
            </a>
            .
          </p>
          <p>
            A emissão da certidão está sujeita às normas regulamentares do TST, incluindo
            eventuais cobranças de emolumentos, conforme disposto nos itens XV, "e", e XVI-A
            da Instrução Normativa nº 20/2002.
          </p>
        </div>
      ),
    },
    {
      question: "A certidão é emitida automaticamente?",
      answer: (
        <p>
          <strong>Não.</strong> Esta certidão não é expedida automaticamente e está sujeita
          a análise pela unidade responsável.
        </p>
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

const DemaisCertidoes = () => <CertidaoPageTemplate config={config} />;

export default DemaisCertidoes;
