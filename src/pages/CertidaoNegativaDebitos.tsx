import { Shield } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Certidão Negativa de Débitos Trabalhistas" },
  ],
  titulo: "Certidão Negativa de Débitos Trabalhistas (CNDT)",
  subtitulo: "Comprova a inexistência de débitos trabalhistas em nome de pessoa física ou jurídica. Exigida para participação em licitações e contratos com a Administração Pública (Lei nº 12.440/2011).",
  descricaoEmissao: "Informe o CPF ou CNPJ para gerar a Certidão Negativa de Débitos Trabalhistas.",
  campos: [
    { id: "cpf-cnpj", label: "CPF ou CNPJ", placeholder: "000.000.000-00 ou 00.000.000/0000-00" },
  ],
  emissaoIcon: <Shield className="h-4 w-4" aria-hidden="true" />,
  helpItems: [
    {
      question: "O que é?",
      answer: (
        <div className="space-y-2">
          <p>A Certidão Negativa de Débitos Trabalhistas (CNDT) é o documento que comprova a inexistência de débitos perante a Justiça do Trabalho. Foi instituída pela <strong>Lei nº 12.440/2011</strong>.</p>
          <p>A CNDT é exigida para participar de <strong>licitações públicas</strong> e para celebrar <strong>contratos com a Administração Pública</strong>.</p>
        </div>
      ),
    },
    {
      question: "Como solicitar",
      answer: (
        <div className="space-y-2">
          <p>A emissão é <strong>automática e imediata</strong> através do formulário ao lado.</p>
          <p>Basta informar o CPF ou CNPJ para gerar o documento.</p>
        </div>
      ),
    },
    {
      question: "Custos",
      answer: <p>A emissão da CNDT é <strong>totalmente gratuita</strong>.</p>,
    },
    {
      question: "Atenção",
      answer: (
        <div className="space-y-2">
          <p>A CNDT tem validade de <strong>180 dias</strong> a partir da data de emissão.</p>
          <p>A certidão abrange débitos de decisões condenatórias transitadas em julgado ou acordos judiciais trabalhistas não cumpridos.</p>
          <p>Para validar a autenticidade de uma certidão já emitida, utilize a aba "Validar certidão".</p>
        </div>
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
