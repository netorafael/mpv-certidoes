import { FileText } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Indisponibilidade de Sistemas" },
  ],
  titulo: "Certidão de Indisponibilidade de Sistemas",
  subtitulo:
    "Atesta que os sistemas eletrônicos do TST ficaram indisponíveis em determinado período, justificando eventual atraso em prazos processuais.",
  descricaoEmissao:
    "Informe a data e o sistema para verificar e gerar a certidão de indisponibilidade.",
  campos: [
    {
      id: "sistema",
      label: "Sistema",
      placeholder: "Ex.: PJe, e-Doc, DEJT, CNDT, SEI, Simba",
    },
    {
      id: "data-inicio",
      label: "Data de início",
      placeholder: "DD/MM/AAAA",
      type: "date",
    },
    {
      id: "data-fim",
      label: "Data de término",
      placeholder: "DD/MM/AAAA",
      type: "date",
    },
  ],
  emissaoIcon: <FileText className="h-4 w-4" aria-hidden="true" />,
  helpItems: [
    {
      question: "O que é a Certidão de Indisponibilidade de Sistemas?",
      answer: (
        <p>
          É um documento que comprova a <strong>indisponibilidade de sistemas eletrônicos</strong>{" "}
          do Tribunal Superior do Trabalho em um período específico. Pode ser usada para
          justificar eventual atraso no cumprimento de prazos processuais.
        </p>
      ),
    },
    {
      question: "Qual o prazo de emissão e custo?",
      answer: (
        <p>
          A emissão é <strong>automática e imediata</strong>, totalmente <strong>gratuita</strong>. Os sistemas cobertos incluem: PJe TST, e-Doc, DEJT, CNDT, SEI, Simba e Visualização de Autos.
        </p>
      ),
    },
    {
      question: "Quais sistemas são cobertos?",
      answer: (
        <ul className="space-y-1 list-disc list-inside">
          <li>PJe TST</li>
          <li>Visualização de Autos</li>
          <li>DEJT (Diário Eletrônico da Justiça do Trabalho)</li>
          <li>SEI (Sistema Eletrônico de Informações)</li>
          <li>CNDT</li>
          <li>e-Doc</li>
          <li>Simba</li>
        </ul>
      ),
    },
    {
      question: "Como utilizar a certidão?",
      answer: (
        <p>
          A certidão pode ser utilizada como documento comprobatório junto aos
          processos no TST para justificar o <strong>não cumprimento de prazo</strong>{" "}
          em razão de indisponibilidade do sistema eletrônico correspondente.
        </p>
      ),
    },
    {
      question: "A certidão tem custo?",
      answer: (
        <p>
          Não. A certidão de indisponibilidade é <strong>totalmente gratuita</strong>.
        </p>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
};

const IndisponibilidadeSistemas = () => <CertidaoPageTemplate config={config} />;

export default IndisponibilidadeSistemas;
