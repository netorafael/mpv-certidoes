import { ArrowLeft, Scale, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import GovFooter from "@/components/GovFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const breadcrumbItems = [
  { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
  { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
  { label: "Certidões", href: "/" },
  { label: "Exercício da Advocacia", href: "/exercicio-advocacia" },
  { label: "Emitir Certidão" },
];

const EmitirCertidao = () => {
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
              to="/exercicio-advocacia"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar
            </Link>
          </div>

          <div className="py-6 border-b border-border mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                Emissão de Certidão
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Certidão Judicial de Exercício da Advocacia
            </h1>
          </div>

          <div className="max-w-lg mb-12">
            <Tabs defaultValue="emitir" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 h-auto p-1">
                <TabsTrigger
                  value="emitir"
                  className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onClick={() => { setEmitida(false); }}
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Emitir certidão
                </TabsTrigger>
                <TabsTrigger
                  value="autenticar"
                  className="gap-2 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onClick={() => { setAutenticada(null); }}
                >
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Autenticar certidão
                </TabsTrigger>
              </TabsList>

              {/* Emitir */}
              <TabsContent value="emitir" className="space-y-4">
                {!emitida ? (
                  <form onSubmit={handleEmitir} className="space-y-4">
                    <div className="bg-card border border-border rounded p-6 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Informe o CPF do(a) advogado(a) para consultar os processos
                        em que atuou perante o TST e gerar a certidão.
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

              {/* Autenticar */}
              <TabsContent value="autenticar" className="space-y-4">
                {autenticada === null ? (
                  <form onSubmit={handleAutenticar} className="space-y-4">
                    <div className="bg-card border border-border rounded p-6 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Se você já possui uma certidão emitida pelo TST, informe o
                        código de autenticação para verificar sua validade.
                      </p>

                      <div className="space-y-1.5">
                        <Label htmlFor="codigo-auth" className="text-sm">
                          Código de autenticação <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="codigo-auth"
                          value={codigoAutenticacao}
                          onChange={(e) => setCodigoAutenticacao(e.target.value)}
                          placeholder="Ex: TST-2025-XXXXX-XXXXX"
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
                        Verificar autenticidade
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
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default EmitirCertidao;
