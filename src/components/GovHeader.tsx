import { ExternalLink } from "lucide-react";

const GovHeader = () => {
  return (
    <header>
      {/* Barra do Governo */}
      <div className="bg-primary-dark py-1">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-primary-foreground text-xs">
            Justiça do Trabalho — Tribunal Superior do Trabalho
          </span>
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
      <div className="bg-card border-b border-border py-3">
        <div className="container max-w-6xl mx-auto px-4 flex items-center gap-4">
          <a href="https://www.tst.jus.br" className="flex items-center gap-3" aria-label="Página inicial do TST">
            <img
              src="https://www.tst.jus.br/image/layout_set_logo?img_id=10155&t=1748446671988"
              alt="Logo Justiça do Trabalho - Tribunal Superior do Trabalho"
              className="h-12"
            />
          </a>
          <div className="hidden sm:block border-l border-border pl-3">
            <p className="text-xs text-muted-foreground">
              Portal da Advocacia
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GovHeader;
