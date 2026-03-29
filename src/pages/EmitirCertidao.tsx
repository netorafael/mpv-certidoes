import { ArrowLeft, Scale, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GovHeader from "@/components/GovHeader";
import GovBreadcrumb from "@/components/GovBreadcrumb";
import GovFooter from "@/components/GovFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const breadcrumbItems = [
  { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
  { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
  { label: "Certidões", href: "/" },
  { label: "Exercício da Advocacia", href: "/exercicio-advocacia" },
  { label: "Emitir Certidão" },
];

const seccionais = [
  "AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT",
  "PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO",
];

const EmitirCertidao = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [oabNumero, setOabNumero] = useState("");
  const [oabSeccional, setOabSeccional] = useState("");
  const [periodoInicio, setPeriodoInicio] = useState("");
  const [periodoFim, setPeriodoFim] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

          {/* Page header */}
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
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Preencha os campos abaixo para emitir sua certidão. Todos os campos
              marcados com asterisco (*) são obrigatórios.
            </p>
          </div>

          <div className="max-w-2xl mb-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados pessoais */}
                <fieldset className="bg-card border border-border rounded p-6 space-y-4">
                  <legend className="text-sm font-semibold text-foreground px-1">
                    Dados do(a) advogado(a)
                  </legend>

                  <div className="space-y-1.5">
                    <Label htmlFor="nome" className="text-sm">
                      Nome completo <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Informe seu nome completo"
                      required
                      aria-required="true"
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="cpf" className="text-sm">
                      CPF <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      placeholder="000.000.000-00"
                      required
                      aria-required="true"
                      className="text-sm max-w-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="oab-numero" className="text-sm">
                        Número da OAB <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="oab-numero"
                        value={oabNumero}
                        onChange={(e) => setOabNumero(e.target.value)}
                        placeholder="Ex: 123456"
                        required
                        aria-required="true"
                        className="text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="oab-seccional" className="text-sm">
                        Seccional (UF) <span className="text-destructive">*</span>
                      </Label>
                      <Select value={oabSeccional} onValueChange={setOabSeccional} required>
                        <SelectTrigger id="oab-seccional" className="text-sm" aria-required="true">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {seccionais.map((uf) => (
                            <SelectItem key={uf} value={uf}>
                              {uf}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </fieldset>

                {/* Período */}
                <fieldset className="bg-card border border-border rounded p-6 space-y-4">
                  <legend className="text-sm font-semibold text-foreground px-1">
                    Período de atuação
                  </legend>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Informe o período em que deseja certificar sua atuação como
                    advogado(a) em processos perante o TST.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="periodo-inicio" className="text-sm">
                        Data inicial <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="periodo-inicio"
                        type="date"
                        value={periodoInicio}
                        onChange={(e) => setPeriodoInicio(e.target.value)}
                        required
                        aria-required="true"
                        className="text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="periodo-fim" className="text-sm">
                        Data final <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="periodo-fim"
                        type="date"
                        value={periodoFim}
                        onChange={(e) => setPeriodoFim(e.target.value)}
                        required
                        aria-required="true"
                        className="text-sm"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                    Consultar e emitir certidão
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    A consulta será feita nos sistemas do TST.
                  </p>
                </div>
              </form>
            ) : (
              /* Resultado */
              <div className="space-y-6">
                <div className="bg-success/10 border border-success/30 rounded p-6 flex items-start gap-3">
                  <Scale className="h-6 w-6 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Certidão gerada com sucesso
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      A Certidão Judicial de Exercício da Advocacia para{" "}
                      <strong className="text-foreground">{nome}</strong> (OAB {oabNumero}/{oabSeccional}),
                      referente ao período de {periodoInicio} a {periodoFim}, foi
                      gerada e está disponível para download.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded p-5 space-y-3">
                  <h2 className="text-sm font-semibold text-foreground">
                    Dados da certidão
                  </h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Nome</dt>
                      <dd className="text-foreground font-medium">{nome}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">CPF</dt>
                      <dd className="text-foreground font-medium">{cpf}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">OAB</dt>
                      <dd className="text-foreground font-medium">{oabNumero}/{oabSeccional}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Período</dt>
                      <dd className="text-foreground font-medium">{periodoInicio} a {periodoFim}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Baixar certidão (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Nova consulta
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

export default EmitirCertidao;
