import { ExternalLink, Scale } from "lucide-react";

const GovHeader = () => {
  return (
    <header>
      {/* Barra principal TST */}
      <div className="bg-primary-dark py-3">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
            <div>
              <p className="text-primary-foreground text-xs font-semibold tracking-wide uppercase leading-tight">
                Justiça do Trabalho
              </p>
              <p className="text-primary-foreground text-sm font-bold leading-tight">
                Tribunal Superior do Trabalho
              </p>
            </div>
          </div>
          <nav aria-label="Links institucionais" className="flex items-center gap-4">
            <a
              href="https://www.gov.br/pt-br/acessibilidade"
              className="text-primary-foreground text-xs hover:underline focus-visible:underline hidden sm:inline"
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
    </header>
  );
};

export default GovHeader;
