import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/adminUi/Accordion"; // Adjust path if necessary

export default function TestPage() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          <p>This is the content of item 1.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          <p>This is the content of item 2.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
