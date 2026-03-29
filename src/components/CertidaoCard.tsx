import { FileText, ExternalLink } from "lucide-react";

interface CertidaoCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

const CertidaoCard = ({ title, description, href, icon, isExternal }: CertidaoCardProps) => {
  const content = (
    <div className="bg-card border border-border rounded p-5 h-full flex flex-col gap-3 transition-all hover:shadow-md hover:border-primary/30 group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          {icon || <FileText className="h-5 w-5 text-primary" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug flex items-center gap-1.5">
            {title}
            {isExternal && <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block no-underline focus:outline-none"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={`Acessar ${title}`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default CertidaoCard;
