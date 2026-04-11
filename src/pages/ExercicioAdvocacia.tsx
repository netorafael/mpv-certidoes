import { Scale } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Exercício da Advocacia" },
  ],
  titulo: "Certidão Judicial de Exercício da Advocacia",
  subtitulo: "Comprova o exercício da advocacia no TST, abrangendo processos em andamento, arquivados ou devolvidos aos TRTs de origem. Expedida automaticamente e de forma gratuita.",
  tags: ["Certidão de Atuação Profissional", "Comprovante de Atividade Jurídica", "Certidão de Tempo de Advocacia"],
  descricaoEmissao: "Informe o CPF do(a) advogado(a) para gerar a certidão automaticamente.",
  campos: [{ id: "cpf", label: "CPF", placeholder: "000.000.000-00" }],
  emissaoIcon: <Scale className="h-4 w-4" aria-hidden="true" />,
  helpItems: [
    {
      question: "O que é?",
      answer: (
        <p>A Certidão Judicial de Exercício da Advocacia comprova o exercício da advocacia no Tribunal Superior do Trabalho (TST), abrangendo processos em <strong>andamento, arquivados ou devolvidos</strong> aos Tribunais Regionais do Trabalho (TRTs) de origem.</p>
      ),
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: (
        <p>Qualquer advogado(a) inscrito(a) na OAB pode solicitar a certidão, informando seu CPF. A certidão automática abrange exclusivamente processos em que o(a) advogado(a) esteja formalmente registrado(a) na autuação.</p>
      ),
    },
    {
      question: "Etapas para realização deste serviço",
      answer: (
        <div className="space-y-2">
          <p>A certidão é expedida <strong>automaticamente e de forma gratuita</strong>, a partir do número de inscrição no CPF do(a) advogado(a) informado pelo(a) requerente.</p>
          <p>Basta informar o CPF no formulário ao lado.</p>
        </div>
      ),
    },
    {
      question: "Outras informações",
      answer: (
        <div className="space-y-2">
          <p>A certidão automática (emitida por CPF) é <strong>gratuita</strong>. Certidões com parâmetros específicos podem estar sujeitas ao recolhimento de emolumentos, conforme a Instrução Normativa nº 20/2002 do TST.</p>
          <p>A certidão automática <strong>não abrange processos com publicidade restrita</strong>.</p>
          <p>Para certidões com parâmetros específicos — como atuação em processo com publicidade restrita ou atuação em período determinado — é necessário preencher um{" "}
            <a href="https://www.tst.jus.br/portal-da-advocacia/certidoes/exercicio-advocacia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">formulário específico</a>.
          </p>
          <p>A autenticidade da certidão pode ser verificada na aba "Validar certidão" do formulário.</p>
        </div>
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
