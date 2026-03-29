import { Mail } from "lucide-react";

const GovFooter = () => {
  return (
    <footer className="bg-primary-dark mt-auto" role="contentinfo">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-primary-foreground text-sm font-semibold">
              Tribunal Superior do Trabalho
            </p>
            <p className="text-primary-foreground/70 text-xs mt-1">
              Secretaria-Geral Judiciária (SEGJUD)
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/70 text-xs">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <a
              href="mailto:segjud@tst.jus.br"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:underline"
            >
              segjud@tst.jus.br
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-6 pt-4">
          <p className="text-primary-foreground/50 text-xs text-center">
            © {new Date().getFullYear()} Justiça do Trabalho — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GovFooter;
