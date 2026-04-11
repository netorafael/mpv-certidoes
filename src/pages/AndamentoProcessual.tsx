import { Search } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Andamento Processual" },
  ],
  titulo: "Certidão de Andamento Processual",
  subtitulo: "Informa a situação atual de um processo em tramitação no TST, incluindo as últimas movimentações processuais. Também conhecida como: certidão de tramitação, certidão de movimentação processual, certidão de fase processual, consulta processual.",
  descricaoEmissao: "Informe o número do processo para gerar a certidão de andamento processual.",
  campos: [{ id: "numero-processo", label: "Número do processo", placeholder: "0000000-00.0000.0.00.0000" }],
  emissaoIcon: <Search className="h-4 w-4" aria-hidden="true" />,
  helpItems: [
    {
      question: "O que é?",
      answer: <p>Este documento apresenta um resumo do que está acontecendo ou do que já aconteceu com um processo no Tribunal Superior do Trabalho (TST). Ele inclui processos atuais, arquivados ou que já voltaram para o Tribunal Regional do Trabalho (TRT).</p>,
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: <p>Qualquer pessoa interessada pode solicitar a certidão de andamento processual, bastando informar o número do processo.</p>,
    },
    {
      question: "Etapas para realização deste serviço",
      answer: (
        <div className="space-y-2">
          <p>Para gerar a certidão, basta informar o número do processo no campo ao lado.</p>
          <p>Para confirmar se a certidão é verdadeira: Utilize o serviço "Validar certidão".</p>
        </div>
      ),
    },
    {
      question: "Outras informações",
      answer: (
        <div className="space-y-2">
          <p>Pode haver cobrança de taxas (emolumentos), conforme as normas do Tribunal Superior do Trabalho (TST).</p>
          <p>Se o processo tiver restrição de publicidade (segredo de justiça), a certidão não sairá na hora. Nestes casos, você deve preencher{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">este formulário</a>{" "}
            para pedir o documento.
          </p>
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
};

const AndamentoProcessual = () => <CertidaoPageTemplate config={config} />;

export default AndamentoProcessual;
