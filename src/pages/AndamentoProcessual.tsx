import { Search, ExternalLink } from "lucide-react";
import { Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Andamento Processual" },
  ],
  titulo: "Certidão de Andamento Processual",
  subtitulo:
    "Informa a situação atual de um processo em tramitação no TST, incluindo as últimas movimentações processuais.",
  descricaoEmissao:
    "Informe o número do processo para gerar a certidão de andamento processual.",
  campos: [
    {
      id: "numero-processo",
      label: "Número do processo",
      placeholder: "0000000-00.0000.0.00.0000",
    },
  ],
  emissaoIcon: <Search className="h-4 w-4" aria-hidden="true" />,
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
      title: "Requisito",
      description: "Número do processo no TST",
    },
  ],
  helpItems: [
    {
      question: "O que é a Certidão de Andamento Processual?",
      answer: (
        <p>
          A certidão de andamento processual informa a <strong>situação atual</strong> de um
          processo em tramitação no Tribunal Superior do Trabalho, incluindo as últimas
          movimentações e o status processual.
        </p>
      ),
    },
    {
      question: "Quem pode solicitar?",
      answer: (
        <p>
          Qualquer pessoa pode solicitar a certidão de andamento processual, desde que
          informe o número do processo. <strong>Processos com publicidade restrita</strong> podem
          ter limitações de acesso.
        </p>
      ),
    },
    {
      question: "A certidão tem custo?",
      answer: (
        <p>
          A certidão de andamento processual emitida eletronicamente é <strong>gratuita</strong>.
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

const AndamentoProcessual = () => <CertidaoPageTemplate config={config} />;

export default AndamentoProcessual;
