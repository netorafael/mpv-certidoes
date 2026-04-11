import { useState } from "react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const sistemas = [
  "PJe TST",
  "Visualização de Autos",
  "DEJT",
  "SEI",
  "CNDT",
  "eDOC",
  "Simba",
];

const IndisponibilidadeForm = () => {
  const [sistema, setSistema] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          Sistema <span className="text-destructive">*</span>
        </Label>
        <RadioGroup value={sistema} onValueChange={setSistema} className="grid grid-cols-2 gap-2">
          {sistemas.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <RadioGroupItem value={s} id={`sistema-${s}`} />
              <Label htmlFor={`sistema-${s}`} className="text-sm font-normal cursor-pointer">
                {s}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-xs">
        <div className="space-y-1.5">
          <Label htmlFor="data-inicio" className="text-sm">
            Data início <span className="text-destructive">*</span>
          </Label>
          <Input
            id="data-inicio"
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            required
            className="text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="data-fim" className="text-sm">
            Data fim <span className="text-destructive">*</span>
          </Label>
          <Input
            id="data-fim"
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
            required
            className="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Portal da Advocacia", href: "https://www.tst.jus.br/portal-da-advocacia" },
    { label: "Certidões", href: "/" },
    { label: "Indisponibilidade de Sistemas" },
  ],
  titulo: "Certidão de Indisponibilidade de Sistemas",
  subtitulo: "Atesta que os sistemas eletrônicos do TST ficaram indisponíveis em determinado período, justificando eventual atraso em prazos processuais. Também conhecida como: certidão de instabilidade do sistema, comprovante de queda do PJe, atestado de indisponibilidade, certidão de sistema fora do ar.",
  descricaoEmissao: "A emissão da certidão de indisponibilidade é automática e imediata. Selecione o sistema e o período desejado para gerar o documento.",
  customFormContent: <IndisponibilidadeForm />,
  helpItems: [
    {
      question: "O que é?",
      answer: <p>É um documento que comprova a <strong>indisponibilidade de sistemas eletrônicos</strong> do Tribunal Superior do Trabalho em um período específico. Pode ser usada para justificar eventual atraso no cumprimento de prazos processuais.</p>,
    },
    {
      question: "Quem pode utilizar esse serviço?",
      answer: <p>Qualquer advogado(a) ou parte interessada que precise comprovar a indisponibilidade dos sistemas do TST para justificar o cumprimento de prazos processuais.</p>,
    },
    {
      question: "Etapas para realização deste serviço",
      answer: <p>A emissão é <strong>automática e imediata</strong>. Basta informar o sistema e o período desejado no formulário ao lado.</p>,
    },
    {
      question: "Outras informações",
      answer: (
        <div className="space-y-2">
          <p>A certidão cobre sistemas como PJe TST, Visualização de Autos, DEJT, SEI, CNDT, e-Doc e Simba.</p>
          <p>Ela deve ser utilizada como documento comprobatório junto aos processos no TST para justificar o não cumprimento de prazo.</p>
          <p>A certidão de indisponibilidade é <strong>totalmente gratuita</strong>.</p>
        </div>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
  showValidation: false,
};

const IndisponibilidadeSistemas = () => <CertidaoPageTemplate config={config} />;

export default IndisponibilidadeSistemas;
