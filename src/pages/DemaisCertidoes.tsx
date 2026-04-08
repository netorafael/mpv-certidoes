import { Files } from "lucide-react";
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
  helpItems: [
    {
      question: "O que é?",
      answer: (
        <p>
          Use esta opção para pedir certidões de processos que não aparecem nas outras opções do sistema.
        </p>
      ),
    },
    {
      question: "Como solicitar",
      answer: (
        <p>
          A emissão do documento não é automática. Para pedir a certidão, você deve preencher este formulário.
        </p>
      ),
    },
    {
      question: "Custos",
      answer: (
        <p>
          Pode haver cobrança de taxas (emolumentos), conforme as normas do Tribunal Superior do Trabalho (TST).
        </p>
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
