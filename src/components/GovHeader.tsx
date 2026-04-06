import { ExternalLink } from "lucide-react";

const GovHeader = () => {
  return (
    <header>
      {/* Barra do Governo */}
      <div className="bg-primary-dark py-1">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-primary-foreground font-bold text-xs tracking-wide">GOV.BR</span>
            <span className="text-primary-foreground text-xs hidden sm:inline">
              Justiça do Trabalho
            </span>
          </div>
          <nav aria-label="Links institucionais" className="flex items-center gap-4">
            <a
              href="https://www.gov.br/pt-br/acessibilidade"
              className="text-primary-foreground text-xs hover:underline focus-visible:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessibilidade
            </a>
            <a
              href="https://www.tst.jus.br"
              className="text-primary-foreground text-xs hover:underline focus-visible:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              TST <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      {/* Barra principal */}
      <div className="bg-card border-b border-border py-4">
        <div className="container max-w-6xl mx-auto px-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-bold text-sm">TST</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">
                Tribunal Superior do Trabalho
              </p>
              <p className="text-xs text-muted-foreground">
                Portal da Advocacia
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GovHeader;
