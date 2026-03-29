import { Scale, FileText, Clock, CheckCircle, AlertCircle, ArrowLeft, Phone, Mail, ExternalLink, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import HelpAccordion, { type HelpItem } from "@/components/HelpAccordion";
import GovFooter from "@/components/GovFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        requerente. Basta informar o CPF no formulário ao lado.
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
    question: "Como validar a autenticidade de uma certidão?",
    answer: (
      <p>
        A autenticidade da certidão pode ser verificada na aba "Validar certidão"
        do formulário acima. Basta informar o código de autenticidade presente no
        documento.
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
  {
    question: "Quais normas orientam este serviço?",
    answer: (
      <ul className="space-y-1.5">
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
    ),
  },
];

const ExercicioAdvocacia = () => {
  const [cpf, setCpf] = useState("");
  const [codigoAutenticacao, setCodigoAutenticacao] = useState("");
  const [emitida, setEmitida] = useState(false);
  const [autenticada, setAutenticada] = useState<boolean | null>(null);

  const handleEmitir = (e: React.FormEvent) => {
    e.preventDefault();
    setEmitida(true);
  };

  const handleAutenticar = (e: React.FormEvent) => {
    e.preventDefault();
    setAutenticada(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <GovHeader />

      <main id="main-content" className="flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <GovBreadcrumb items={breadcrumbItems} />

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
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Certidão Judicial de Exercício da Advocacia
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Comprova o exercício da advocacia no TST, abrangendo processos
              em andamento, arquivados ou devolvidos aos TRTs de origem.
              Expedida automaticamente e de forma gratuita.
            </p>
          </div>

          {/* Two-column: Form + Info cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
            {/* Form - left (3 cols) */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="emitir" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2 h-auto p-1">
                  <TabsTrigger
                    value="emitir"
                    className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    onClick={() => setEmitida(false)}
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                    Emitir certidão
                  </TabsTrigger>
                  <TabsTrigger
                    value="autenticar"
                    className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    onClick={() => setAutenticada(null)}
                  >
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    Validar certidão
                  </TabsTrigger>
                </TabsList>

                {/* Emitir */}
                <TabsContent value="emitir" className="space-y-4">
                  {!emitida ? (
                    <form onSubmit={handleEmitir}>
                      <div className="bg-card border border-border rounded p-6 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Informe o CPF do(a) advogado(a) para gerar a certidão
                          automaticamente.
                        </p>

                        <div className="space-y-1.5">
                          <Label htmlFor="cpf-emitir" className="text-sm">
                            CPF <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cpf-emitir"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="000.000.000-00"
                            required
                            aria-required="true"
                            className="text-sm max-w-xs"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                        >
                          <Scale className="h-4 w-4" aria-hidden="true" />
                          Emitir certidão
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-success/10 border border-success/30 rounded p-5 flex items-start gap-3">
                        <Scale className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Certidão emitida com sucesso
                          </p>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            A certidão para o CPF <strong className="text-foreground">{cpf}</strong> foi
                            gerada e está disponível para download.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Baixar certidão (PDF)
                        </Button>
                        <Button variant="outline" onClick={() => { setEmitida(false); setCpf(""); }}>
                          Nova emissão
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Validar */}
                <TabsContent value="autenticar" className="space-y-4">
                  {autenticada === null ? (
                    <form onSubmit={handleAutenticar}>
                      <div className="bg-card border border-border rounded p-6 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Se você possui uma certidão e deseja validar, insira o
                          código de autenticidade da certidão.
                        </p>

                        <div className="space-y-1.5">
                          <Label htmlFor="codigo-auth" className="text-sm">
                            Código de autenticidade <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="codigo-auth"
                            value={codigoAutenticacao}
                            onChange={(e) => setCodigoAutenticacao(e.target.value)}
                            placeholder="Informe o código da certidão"
                            required
                            aria-required="true"
                            className="text-sm"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                        >
                          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                          Validar certidão
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-success/10 border border-success/30 rounded p-5 flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Certidão autêntica
                          </p>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            O documento com código <strong className="text-foreground">{codigoAutenticacao}</strong> é
                            válido e foi emitido pelo Tribunal Superior do Trabalho.
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => { setAutenticada(null); setCodigoAutenticacao(""); }}>
                        Nova verificação
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Info cards - right (2 cols) */}
            <aside className="lg:col-span-2 space-y-4" aria-label="Informações do serviço">
              <div className="bg-card border border-border rounded p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Emissão</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Automática e imediata</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Custo</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Gratuita (certidão automática)</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded p-4 flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Requisito</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Apenas o CPF do(a) advogado(a)</p>
                </div>
              </div>

              {/* Aviso */}
              <div className="bg-warning/10 border border-warning/30 rounded p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs leading-relaxed">
                  <p className="font-semibold text-foreground mb-1">Parâmetros específicos</p>
                  <p className="text-muted-foreground">
                    Para certidões especiais (publicidade restrita, período
                    determinado etc.), preencha o{" "}
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
                </div>
              </div>
            </aside>
          </div>

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
