import { Scale, FileText, Clock, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
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
        É um documento oficial emitido pelo TST que comprova que um(a) advogado(a)
        atuou em processos trabalhistas perante o Tribunal Superior do Trabalho.
        Ela lista os processos em que houve participação efetiva como patrono(a).
      </p>
    ),
  },
  {
    question: "Para que serve essa certidão?",
    answer: (
      <div className="space-y-2">
        <p>As principais finalidades são:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Comprovar atividade jurídica para concursos públicos da magistratura e do Ministério Público</li>
          <li>Atender exigências de editais que pedem comprovação de prática forense</li>
          <li>Demonstrar experiência profissional em processos seletivos</li>
          <li>Instruir pedidos perante a OAB e outros órgãos</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Quem pode solicitar?",
    answer: (
      <p>
        Qualquer advogado(a) com inscrição ativa ou inativa na OAB que tenha
        atuado em processos perante o TST. É necessário informar o número de
        inscrição na OAB no momento da solicitação.
      </p>
    ),
  },
  {
    question: "Como solicitar a certidão?",
    answer: (
      <div className="space-y-2">
        <p>A solicitação pode ser feita de duas formas:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Pelo sistema PJe:</strong> acesse o Processo Judicial Eletrônico
            do TST e faça a solicitação diretamente pelo sistema.
          </li>
          <li>
            <strong>Por e-mail:</strong> envie um pedido para{" "}
            <a href="mailto:segjud@tst.jus.br" className="text-primary hover:underline font-medium">
              segjud@tst.jus.br
            </a>{" "}
            informando seu nome completo, número da OAB e o período desejado.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Quais informações devo enviar no pedido?",
    answer: (
      <div className="space-y-2">
        <p>Inclua no seu pedido:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nome completo do(a) advogado(a)</li>
          <li>Número de inscrição na OAB (com seccional)</li>
          <li>CPF</li>
          <li>Período de atuação que deseja certificar</li>
          <li>Finalidade da certidão (opcional, mas facilita o atendimento)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Qual o prazo de emissão?",
    answer: (
      <p>
        A certidão é emitida em até 5 dias úteis após o recebimento da
        solicitação, podendo variar conforme a demanda. Em períodos de recesso
        forense, o prazo pode ser estendido. Você receberá a certidão no e-mail
        informado na solicitação.
      </p>
    ),
  },
  {
    question: "A certidão tem custo?",
    answer: (
      <p>
        Não. A emissão da Certidão de Exercício da Advocacia pelo TST é
        totalmente gratuita.
      </p>
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
                  Comprove sua atuação como advogado(a) em processos no Tribunal
                  Superior do Trabalho. Documento oficial, gratuito e com validade
                  jurídica.
                </p>
              </div>
              <a
                href="https://pje.tst.jus.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Scale className="h-4 w-4" aria-hidden="true" />
                  Solicitar pelo PJe
                </Button>
              </a>
            </div>
          </div>

          {/* Info cards */}
          <section aria-label="Informações do serviço" className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Prazo de emissão</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Até 5 dias úteis</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Custo</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Gratuito</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Formato</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Digital (PDF por e-mail)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Step by step */}
          <section aria-labelledby="steps-title" className="mb-10 max-w-3xl">
            <h2 id="steps-title" className="text-lg font-semibold text-foreground mb-4">
              Como solicitar
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Reúna seus dados",
                  desc: "Tenha em mãos seu nome completo, CPF, número da OAB (com seccional) e o período de atuação que deseja certificar.",
                },
                {
                  step: 2,
                  title: "Escolha o canal de atendimento",
                  desc: "Você pode solicitar pelo sistema PJe do TST ou enviar um e-mail para segjud@tst.jus.br com as informações.",
                },
                {
                  step: 3,
                  title: "Aguarde a emissão",
                  desc: "Após a solicitação, a SEGJUD analisará o pedido e emitirá a certidão em até 5 dias úteis. Você receberá o documento por e-mail.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-primary-foreground text-sm font-bold">{item.step}</span>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Important notice */}
          <section className="mb-10 max-w-3xl">
            <div className="bg-warning/10 border border-warning/30 rounded p-5 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">Atenção</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  A certidão comprova apenas a atuação registrada nos sistemas do
                  TST. Processos físicos anteriores à implantação do PJe podem não
                  constar automaticamente. Nesses casos, indique os números dos
                  processos na solicitação para facilitar a pesquisa.
                </p>
              </div>
            </div>
          </section>

          {/* Help section */}
          <div className="mb-12 max-w-3xl">
            <HelpAccordion items={helpItems} />
          </div>

          {/* Contact */}
          <section
            aria-label="Informações de contato"
            className="mb-12 bg-card border border-border rounded p-5 max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-foreground mb-2">
              Contato da SEGJUD
            </h2>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                E-mail:{" "}
                <a href="mailto:segjud@tst.jus.br" className="text-primary hover:underline font-medium">
                  segjud@tst.jus.br
                </a>
              </p>
              <p>Telefone: (61) 3043-3201</p>
            </div>
          </section>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default ExercicioAdvocacia;
