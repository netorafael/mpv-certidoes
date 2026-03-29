import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface HelpItem {
  question: string;
  answer: React.ReactNode;
}

interface HelpAccordionProps {
  items: HelpItem[];
  title?: string;
}

const HelpAccordion = ({ items, title = "Dúvidas frequentes" }: HelpAccordionProps) => {
  return (
    <section aria-labelledby="help-section-title">
      <h2
        id="help-section-title"
        className="text-lg font-semibold text-foreground mb-4"
      >
        {title}
      </h2>
      <Accordion type="single" collapsible className="border border-border rounded overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="px-5 py-4 text-sm font-medium text-foreground hover:bg-muted/50 hover:no-underline text-left [&[data-state=open]]:bg-muted/30">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 pt-2 text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default HelpAccordion;
