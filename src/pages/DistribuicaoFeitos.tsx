import { ClipboardList } from "lucide-react";
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
  helpItems: [
    {
      question: "O que é?",
      answer: (
        <p>
          Este documento mostra se existem processos atuais ou antigos no Tribunal Superior do Trabalho (TST) em nome de uma pessoa ou de uma empresa.
        </p>
      ),
    },
    {
      question: "Como solicitar",
      answer: (
        <p>
          A emissão da certidão não é automática. Para pedir, você deve preencher este formulário.
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
    {
      question: "Atenção: Pedidos para Pessoas Físicas",
      answer: (
        <p>
          Se a certidão for para uma pessoa física (CPF), apenas ela mesma ou um representante legal com procuração pode fazer o pedido.
        </p>
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
