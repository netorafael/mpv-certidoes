import { ArrowLeft, Shield, Mail, KeyRound, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import GovFooter from "@/components/GovFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
  { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
  { label: "Certidões", href: "/" },
  { label: "Exercício da Advocacia", href: "/exercicio-advocacia" },
  { label: "Emitir Certidão" },
];

type AuthStep = "choose" | "login" | "govbr" | "certificado";

const EmitirCertidao = () => {
  const [step, setStep] = useState<AuthStep>("choose");

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
              to="/exercicio-advocacia"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar
            </Link>
          </div>

          {/* Page header */}
          <div className="py-6 border-b border-border mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Emissão de Certidão
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Emitir Certidão de Exercício da Advocacia
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Para emitir sua certidão, é necessário se identificar. Escolha uma
              das opções de autenticação abaixo.
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-12">
            {step === "choose" && (
              <section aria-label="Opções de autenticação" className="space-y-4">
                <div className="bg-card border border-border rounded p-6 space-y-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h2 className="text-base font-semibold text-foreground">
                      Identificação do solicitante
                    </h2>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Escolha como deseja se identificar para emitir a certidão.
                    Seus dados serão usados apenas para validar a solicitação.
                  </p>

                  <div className="space-y-3">
                    {/* Gov.br */}
                    <button
                      onClick={() => setStep("govbr")}
                      className="w-full flex items-center gap-4 p-4 rounded border border-border bg-background hover:bg-muted/50 hover:border-primary/30 transition-all text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
                      aria-label="Entrar com conta Gov.br"
                    >
                      <div className="w-10 h-10 rounded bg-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <span className="text-primary-foreground text-xs font-bold">gov</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          Entrar com Gov.br
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Use sua conta do portal Gov.br (recomendado)
                        </p>
                      </div>
                    </button>

                    {/* Certificado Digital */}
                    <button
                      onClick={() => setStep("certificado")}
                      className="w-full flex items-center gap-4 p-4 rounded border border-border bg-background hover:bg-muted/50 hover:border-primary/30 transition-all text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
                      aria-label="Entrar com certificado digital"
                    >
                      <div className="w-10 h-10 rounded bg-success/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <KeyRound className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          Certificado Digital (e-CPF / e-CNPJ)
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Autenticação via certificado digital ICP-Brasil
                        </p>
                      </div>
                    </button>

                    {/* Login TST */}
                    <button
                      onClick={() => setStep("login")}
                      className="w-full flex items-center gap-4 p-4 rounded border border-border bg-background hover:bg-muted/50 hover:border-primary/30 transition-all text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
                      aria-label="Entrar com e-mail e senha"
                    >
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          E-mail e senha
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Acesse com seu cadastro no portal do TST
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="bg-muted/50 border border-border rounded p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Segurança:</strong> Seus
                    dados são protegidos e utilizados exclusivamente para emissão
                    da certidão, conforme a LGPD (Lei nº 13.709/2018).
                  </p>
                </div>
              </section>
            )}

            {step === "govbr" && (
              <section aria-label="Login Gov.br" className="space-y-4">
                <div className="bg-card border border-border rounded p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="text-primary-foreground text-xs font-bold">gov</span>
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        Entrar com Gov.br
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Você será redirecionado ao portal Gov.br
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="cpf-govbr" className="text-sm">CPF</Label>
                      <Input
                        id="cpf-govbr"
                        placeholder="000.000.000-00"
                        className="text-sm"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Continuar para Gov.br
                  </Button>
                </div>

                <button
                  onClick={() => setStep("choose")}
                  className="text-sm text-primary hover:underline"
                >
                  ← Voltar às opções de autenticação
                </button>
              </section>
            )}

            {step === "certificado" && (
              <section aria-label="Certificado Digital" className="space-y-4">
                <div className="bg-card border border-border rounded p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-success/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <KeyRound className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        Certificado Digital
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Autenticação via ICP-Brasil
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-muted/50 rounded p-4 space-y-2">
                    <p className="text-sm text-foreground font-medium">
                      Instruções
                    </p>
                    <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal pl-5 leading-relaxed">
                      <li>Conecte seu token ou smartcard ao computador</li>
                      <li>Verifique se o driver do certificado está instalado</li>
                      <li>Clique em "Autenticar" para iniciar a validação</li>
                    </ol>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <KeyRound className="h-4 w-4" aria-hidden="true" />
                    Autenticar com Certificado
                  </Button>
                </div>

                <button
                  onClick={() => setStep("choose")}
                  className="text-sm text-primary hover:underline"
                >
                  ← Voltar às opções de autenticação
                </button>
              </section>
            )}

            {step === "login" && (
              <section aria-label="Login com e-mail" className="space-y-4">
                <div className="bg-card border border-border rounded p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        Acessar com e-mail e senha
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Cadastro do Portal do TST
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="text-sm"
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="senha" className="text-sm">Senha</Label>
                      <Input
                        id="senha"
                        type="password"
                        placeholder="••••••••"
                        className="text-sm"
                        aria-required="true"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="#" className="text-xs text-primary hover:underline">
                        Esqueci minha senha
                      </a>
                      <a href="#" className="text-xs text-primary hover:underline">
                        Criar cadastro
                      </a>
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <Scale className="h-4 w-4" aria-hidden="true" />
                    Entrar e emitir certidão
                  </Button>
                </div>

                <button
                  onClick={() => setStep("choose")}
                  className="text-sm text-primary hover:underline"
                >
                  ← Voltar às opções de autenticação
                </button>
              </section>
            )}
          </div>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default EmitirCertidao;
