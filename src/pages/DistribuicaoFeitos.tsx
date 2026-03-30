import { ClipboardList, ExternalLink } from "lucide-react";
import { Clock, FileText, AlertCircle } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Distribuição de Feitos" },
  ],
  titulo: "Certidão de Distribuição de Feitos",
  subtitulo:
    "Apresenta a relação dos processos que tramitam ou tramitaram no TST, nos quais determinada pessoa física ou jurídica figure como parte.",
  descricaoEmissao:
    "Informe o CPF ou CNPJ da parte para solicitar a certidão de distribuição de feitos.",
  campos: [
    {
      id: "cpf-cnpj",
      label: "CPF ou CNPJ da parte",
      placeholder: "000.000.000-00 ou 00.000.000/0000-00",
    },
    {
      id: "nome-parte",
      label: "Nome da parte",
      placeholder: "Nome completo da pessoa física ou jurídica",
    },
  ],
  emissaoIcon: <ClipboardList className="h-4 w-4" aria-hidden="true" />,
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
      title: "Importante",
      description:
        "A certidão em nome de pessoa física somente será emitida quando requerida pela própria pessoa ou por procurador com poderes específicos.",
      variant: "warning",
    },
  ],
  helpItems: [
    {
      question: "O que é a Certidão de Distribuição de Feitos?",
      answer: (
        <p>
          A certidão de Distribuição de Feitos apresenta a <strong>relação dos processos</strong>{" "}
          que tramitam ou tramitaram no Tribunal Superior do Trabalho (TST), nos quais
          determinada pessoa física ou jurídica figure como parte.
        </p>
      ),
    },
    {
      question: "Como solicitar esta certidão?",
      answer: (
        <div className="space-y-2">
          <p>
            Para solicitar a expedição da certidão, é necessário preencher o formulário
            com os dados da parte. Alternativamente, a solicitação pode ser feita por meio
            do{" "}
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
        </div>
      ),
    },
    {
      question: "A certidão é emitida automaticamente?",
      answer: (
        <p>
          <strong>Não.</strong> Esta certidão não é emitida automaticamente, podendo haver
          cobrança de emolumentos, conforme disposto nos itens XV, "e", e XVI-A da
          Instrução Normativa nº 20/2002 do TST.
        </p>
      ),
    },
    {
      question: "Quem pode solicitar?",
      answer: (
        <p>
          A certidão em nome de <strong>pessoa física</strong> somente será emitida quando
          requerida pela própria pessoa física ou por procurador com poderes específicos.
          Certidões em nome de pessoa jurídica podem ser solicitadas por seus representantes legais.
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
    suporteJuridico: "(61) 3043-3201 (9h às 18h)",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
};

const DistribuicaoFeitos = () => <CertidaoPageTemplate config={config} />;

export default DistribuicaoFeitos;
