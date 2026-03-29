import { Scale, FileText, Clock, CheckCircle, AlertCircle, ArrowLeft, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import HelpAccordion, { type HelpItem } from "@/components/HelpAccordion";
import GovFooter from "@/components/GovFooter";
import { Button } from "@/components/ui/button";

const breadcrumbItems = [
  { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
  { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
  { label: "Certidões", href: "/" },
  { label: "Exercício da Advocacia" },
];

const helpItems: HelpItem[] = [
  {
    question: "O que é a Certidão de Exercício da Advocacia?",
    answer: (
      <p>
        A Certidão Judicial de Exercício da Advocacia comprova o exercício da
        advocacia no Tribunal Superior do Trabalho (TST), abrangendo processos em{" "}
        <strong>andamento, arquivados ou devolvidos</strong> aos Tribunais
        Regionais do Trabalho (TRTs) de origem.
      </p>
    ),
  },
  {
    question: "Como a certidão é emitida?",
    answer: (
      <p>
        A certidão é expedida <strong>automaticamente e de forma gratuita</strong>,
        a partir do número de inscrição no CPF do(a) advogado(a) informado pelo(a)
        requerente. Basta informar o CPF na página de emissão.
      </p>
    ),
  },
  {
    question: "Quais processos são incluídos na certidão automática?",
    answer: (
      <p>
        A certidão automática inclui exclusivamente os processos em que o(a)
        advogado(a) esteja formalmente registrado(a) na autuação.{" "}
        <strong>Não abrange processos com publicidade restrita.</strong>
      </p>
    ),
  },
  {
    question: "E se eu precisar de uma certidão com parâmetros específicos?",
    answer: (
      <div className="space-y-2">
        <p>
          Para certidões com parâmetros específicos — como atuação em processo
          com publicidade restrita, atuação em período determinado ou prática de
          ato em processo específico — é necessário preencher um{" "}
          <a
            href="https://www.tst.jus.br/portal-da-advocacia/certidoes/exercicio-advocacia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            formulário específico
          </a>
          .
        </p>
        <p>
          Neste caso, a certidão <strong>não será expedida automaticamente</strong>{" "}
          e poderá estar sujeita ao recolhimento de emolumentos, conforme os itens
          XV, "e", e XVI-A da Instrução Normativa nº 20/2002 do TST.
        </p>
      </div>
    ),
  },
  {
    question: "Como validar uma certidão já emitida?",
    answer: (
      <p>
        A autenticidade da certidão pode ser verificada na página de emissão,
        na aba "Autenticar certidão". Basta informar o código de autenticidade
        presente no documento.
      </p>
    ),
  },
  {
    question: "A certidão tem custo?",
    answer: (
      <div className="space-y-2">
        <p>
          A certidão automática (emitida por CPF) é <strong>gratuita</strong>.
        </p>
        <p>
          Certidões com parâmetros específicos podem estar sujeitas ao
          recolhimento de emolumentos, conforme a Instrução Normativa nº 20/2002
          do TST.
        </p>
      </div>
    ),
  },
];

const ExercicioAdvocacia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <GovHeader />

      <main id="main-content" className="flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <GovBreadcrumb items={breadcrumbItems} />

          {/* Back link */}
          <div className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar para Certidões
            </Link>
          </div>

          {/* Page header */}
          <div className="py-6 border-b border-border mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Certidões
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Certidão Judicial de Exercício da Advocacia
                </h1>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                  Comprova o exercício da advocacia no TST, abrangendo processos
                  em andamento, arquivados ou devolvidos aos TRTs de origem.
                  Expedida automaticamente e de forma gratuita.
                </p>
              </div>
              <Link to="/emitir-certidao" className="flex-shrink-0">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Scale className="h-4 w-4" aria-hidden="true" />
                  Emitir Certidão
                </Button>
              </Link>
            </div>
          </div>

          {/* Info cards */}
          <section aria-label="Informações do serviço" className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Emissão</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Automática e imediata</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Custo</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Gratuita (certidão automática)</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Requisito</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Apenas o CPF do(a) advogado(a)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Informações Gerais */}
          <section aria-labelledby="info-title" className="mb-10 max-w-3xl">
            <h2 id="info-title" className="text-lg font-semibold text-foreground mb-4">
              Informações gerais
            </h2>
            <div className="bg-card border border-border rounded p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                A Certidão Judicial de Exercício da Advocacia comprova o exercício
                da advocacia no Tribunal Superior do Trabalho (TST), abrangendo
                processos em <strong className="text-foreground">andamento, arquivados ou devolvidos</strong> aos
                Tribunais Regionais do Trabalho (TRTs) de origem.
              </p>
              <p>
                Esta certidão é expedida automaticamente, de forma gratuita, a
                partir do número de inscrição no CPF do(a) advogado(a) informado
                pelo(a) requerente.
              </p>
              <p>
                A certidão automática incluirá exclusivamente os processos em que
                o(a) advogado(a) esteja formalmente registrado(a) na autuação, e{" "}
                <strong className="text-foreground">não abrange os processos com publicidade restrita</strong>.
              </p>
              <p>
                A autenticidade da certidão poderá ser aferida no serviço
                "Validar certidão", disponível na{" "}
                <Link to="/emitir-certidao" className="text-primary hover:underline font-medium">
                  página de emissão
                </Link>.
              </p>
            </div>
          </section>

          {/* Certidões com parâmetros específicos */}
          <section className="mb-10 max-w-3xl">
            <div className="bg-warning/10 border border-warning/30 rounded p-5 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground mb-1">
                  Certidões com parâmetros específicos
                </p>
                <p className="text-muted-foreground">
                  Para certidões com parâmetros específicos (atuação em processo com
                  publicidade restrita, período determinado, prática de ato em
                  processo específico etc.), o(a) interessado(a) deverá preencher um{" "}
                  <a
                    href="https://www.tst.jus.br/portal-da-advocacia/certidoes/exercicio-advocacia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium inline-flex items-center gap-0.5"
                  >
                    formulário específico <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>.
                  Neste caso, a certidão não será expedida automaticamente, podendo
                  estar sujeita ao recolhimento de emolumentos, conforme os itens XV,
                  "e", e XVI-A da Instrução Normativa nº 20/2002 do TST.
                </p>
              </div>
            </div>
          </section>

          {/* Normas */}
          <section className="mb-10 max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Normas que orientam este serviço
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.tst.jus.br"
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
                  href="https://www.tst.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Ato Conjunto nº 21/TST.CSJT.GP.SG, de 7 de dezembro de 2010
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>

          {/* Help section */}
          <div className="mb-10 max-w-3xl">
            <HelpAccordion items={helpItems} />
          </div>

          {/* Contact */}
          <section
            aria-label="Informações de contato"
            className="mb-12 bg-card border border-border rounded p-5 max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-foreground mb-3">
              Contatos
            </h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                <span>Suporte Tecnológico: <strong className="text-foreground">(61) 3043-4040</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                <span>Suporte Jurídico: <strong className="text-foreground">(61) 3043-7280</strong> (9h às 18h)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  E-mail:{" "}
                  <a href="mailto:ccp@tst.jus.br" className="text-primary hover:underline font-medium">
                    ccp@tst.jus.br
                  </a>
                </span>
              </div>
              <p className="text-xs text-muted-foreground pt-1">
                Unidade responsável: Coordenadoria de Cadastramento Processual
              </p>
            </div>
          </section>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default ExercicioAdvocacia;
