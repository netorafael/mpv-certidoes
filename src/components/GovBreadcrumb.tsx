import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface GovBreadcrumbProps {
  items: BreadcrumbItem[];
}

const GovBreadcrumb = ({ items }: GovBreadcrumbProps) => {
  return (
    <nav aria-label="Navegação estrutural" className="py-3">
      <ol className="flex items-center gap-1 text-sm flex-wrap">
        <li className="flex items-center gap-1">
          <a
            href="https://www.tst.jus.br"
            className="text-primary hover:underline focus-visible:underline"
            aria-label="Página inicial do TST"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
          </a>
          <ChevronRight className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <a href={item.href} className="text-primary hover:underline focus-visible:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-muted-foreground" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default GovBreadcrumb;
