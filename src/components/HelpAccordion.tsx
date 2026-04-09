import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface HelpItem {
  question: string;
  answer: React.ReactNode;
}

interface HelpAccordionProps {
  items: HelpItem[];
  title?: string;
  className?: string;
}

const HelpAccordion = ({ items, title = "Dúvidas frequentes", className }: HelpAccordionProps) => {
  return (
    <section aria-labelledby="help-section-title" className={cn("py-8", className)}>
      <h2
        id="help-section-title"
        className="text-2xl font-bold text-primary mb-6"
      >
        {title}
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none"
          >
            <AccordionTrigger className="py-3 text-lg font-bold text-primary hover:no-underline text-left flex flex-row-reverse justify-end gap-3 [&[data-state=open]>svg]:rotate-180 transition-all">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2 text-base text-muted-foreground leading-relaxed pl-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default HelpAccordion;
