import { CheckCircle, FileText, ArrowLeft, Phone, Mail, Search, ShieldCheck, Shield } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

export interface CertidaoField {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}

export interface ContactInfo {
  suporteTecnologico?: string;
  suporteJuridico?: string;
  email: string;
  unidadeResponsavel: string;
}

export interface CertidaoPageConfig {
  breadcrumbItems: { label: string; href?: string }[];
  titulo: string;
  subtitulo: string;
  descricaoEmissao?: string;
  campos?: CertidaoField[];
  customFormContent?: React.ReactNode;
  helpItems: HelpItem[];
  contato: ContactInfo;
  emissaoIcon?: React.ReactNode;
  showValidation?: boolean;
}

const CertidaoPageTemplate = ({ config }: { config: CertidaoPageConfig }) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [codigoAutenticacao, setCodigoAutenticacao] = useState("");
  const [emitida, setEmitida] = useState(false);
  const [autenticada, setAutenticada] = useState<boolean | null>(null);
  const [recaptchaEmitir, setRecaptchaEmitir] = useState(false);
  const [recaptchaValidar, setRecaptchaValidar] = useState(false);

  const hasFields = (config.campos && config.campos.length > 0) || !!config.customFormContent;
  const showValidation = config.showValidation !== false;
  const showTabs = hasFields || showValidation;

  const handleEmitir = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaEmitir) return;
    setEmitida(true);
  };

  const handleAutenticar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaValidar) return;
    setAutenticada(true);
  };

  const handleFieldChange = (id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <GovHeader />

      <main id="main-content" className="flex-1">
        <div className="container max-w-4xl mx-auto px-4">
          <GovBreadcrumb items={config.breadcrumbItems} />

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
              {config.titulo}
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              {config.subtitulo}
            </p>
          </div>

          {/* Form Section */}
          {showTabs ? (
            <div className="mb-10 max-w-2xl">
              <Tabs defaultValue={hasFields ? "emitir" : "autenticar"} className="space-y-4">
                {hasFields && showValidation && (
                  <TabsList className="grid w-full grid-cols-2 h-auto p-1">
                    <TabsTrigger
                      value="emitir"
                      className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      onClick={() => { setEmitida(false); setRecaptchaEmitir(false); }}
                    >
                      <Search className="h-4 w-4" aria-hidden="true" />
                      Emitir certidão
                    </TabsTrigger>
                    <TabsTrigger
                      value="autenticar"
                      className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      onClick={() => { setAutenticada(null); setRecaptchaValidar(false); }}
                    >
                      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                      Validar certidão
                    </TabsTrigger>
                  </TabsList>
                )}

                {/* Emitir */}
                {hasFields && (
                  <TabsContent value="emitir" className="space-y-4">
                    {!emitida ? (
                      <form onSubmit={handleEmitir}>
                        <div className="bg-card border border-border rounded p-6 space-y-4">
                          {config.descricaoEmissao && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {config.descricaoEmissao}
                            </p>
                          )}

                          {config.campos?.map((campo) => (
                            <div key={campo.id} className="space-y-1.5">
                              <Label htmlFor={campo.id} className="text-sm">
                                {campo.label}{" "}
                                {campo.required !== false && (
                                  <span className="text-destructive">*</span>
                                )}
                              </Label>
                              <Input
                                id={campo.id}
                                type={campo.type || "text"}
                                value={formValues[campo.id] || ""}
                                onChange={(e) => handleFieldChange(campo.id, e.target.value)}
                                placeholder={campo.placeholder}
                                required={campo.required !== false}
                                aria-required={campo.required !== false}
                                className="text-sm max-w-xs"
                              />
                            </div>
                          ))}

                          {config.customFormContent}

                          {/* reCAPTCHA */}
                          <div className="border border-border rounded p-4 bg-muted/30 max-w-xs">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="recaptcha-emitir"
                                checked={recaptchaEmitir}
                                onCheckedChange={(checked) => setRecaptchaEmitir(checked === true)}
                              />
                              <Label htmlFor="recaptcha-emitir" className="text-sm font-normal cursor-pointer">
                                Não sou um robô
                              </Label>
                              <div className="ml-auto flex flex-col items-center gap-0.5">
                                <Shield className="h-5 w-5 text-muted-foreground/60" aria-hidden="true" />
                                <span className="text-[9px] text-muted-foreground/60 leading-none">reCAPTCHA</span>
                              </div>
                            </div>
                          </div>

                          <Button
                            type="submit"
                            disabled={!recaptchaEmitir}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                          >
                            {config.emissaoIcon || <FileText className="h-4 w-4" aria-hidden="true" />}
                            Emitir certidão
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-success/10 border border-success/30 rounded p-5 flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              Certidão emitida com sucesso
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                              A certidão foi gerada e está disponível para download.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Baixar certidão (PDF)
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setEmitida(false);
                              setFormValues({});
                              setRecaptchaEmitir(false);
                            }}
                          >
                            Nova emissão
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                )}

                {/* Validar */}
                {showValidation && (
                  <TabsContent value="autenticar" className="space-y-4">
                    {autenticada === null ? (
                      <form onSubmit={handleAutenticar}>
                        <div className="bg-card border border-border rounded p-6 space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                            Se você possui uma certidão e deseja validar, insira o código da certidão.
                          </p>

                          <div className="space-y-1.5">
                            <Label htmlFor="codigo-auth" className="text-sm">
                              Código de autenticidade{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="codigo-auth"
                              value={codigoAutenticacao}
                              onChange={(e) => setCodigoAutenticacao(e.target.value)}
                              placeholder="Informe o código de autenticidade"
                              required
                              aria-required="true"
                              className="text-sm"
                            />
                          </div>

                          {/* reCAPTCHA */}
                          <div className="border border-border rounded p-4 bg-muted/30 max-w-xs">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="recaptcha-validar"
                                checked={recaptchaValidar}
                                onCheckedChange={(checked) => setRecaptchaValidar(checked === true)}
                              />
                              <Label htmlFor="recaptcha-validar" className="text-sm font-normal cursor-pointer">
                                Não sou um robô
                              </Label>
                              <div className="ml-auto flex flex-col items-center gap-0.5">
                                <Shield className="h-5 w-5 text-muted-foreground/60" aria-hidden="true" />
                                <span className="text-[9px] text-muted-foreground/60 leading-none">reCAPTCHA</span>
                              </div>
                            </div>
                          </div>

                          <Button
                            type="submit"
                            disabled={!recaptchaValidar}
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
                              O documento com código{" "}
                              <strong className="text-foreground">
                                {codigoAutenticacao}
                              </strong>{" "}
                              é válido e foi emitido pelo Tribunal Superior do
                              Trabalho.
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setAutenticada(null);
                            setCodigoAutenticacao("");
                            setRecaptchaValidar(false);
                          }}
                        >
                          Nova verificação
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                )}
              </Tabs>
            </div>
          ) : (
            config.descricaoEmissao && (
              <div className="mb-10 max-w-2xl">
                <p className="text-sm text-muted-foreground leading-relaxed bg-muted/30 p-4 border border-border rounded">
                  {config.descricaoEmissao}
                </p>
              </div>
            )
          )}

          {/* Help section */}
          <div className="mb-10 max-w-3xl">
            <HelpAccordion items={config.helpItems} />
          </div>

          {/* Contact */}
          <section
            aria-label="Informações de contato"
            className="mb-12 bg-card border border-border rounded p-5 max-w-3xl"
          >
            <h2 className="text-sm font-semibold text-foreground mb-3">Contatos</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              {config.contato.suporteTecnologico && (
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    Suporte Tecnológico:{" "}
                    <strong className="text-foreground">{config.contato.suporteTecnologico}</strong>
                  </span>
                </div>
              )}
              {config.contato.suporteJuridico && (
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    Suporte Jurídico:{" "}
                    <strong className="text-foreground">{config.contato.suporteJuridico}</strong>
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  E-mail:{" "}
                  <a
                    href={`mailto:${config.contato.email}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {config.contato.email}
                  </a>
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Unidade responsável: {config.contato.unidadeResponsavel}
            </p>
          </section>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default CertidaoPageTemplate;
