import { FileCheck, ExternalLink } from "lucide-react";
import CertidaoPageTemplate, { type CertidaoPageConfig } from "@/components/CertidaoPageTemplate";

const config: CertidaoPageConfig = {
  breadcrumbItems: [
    { label: "Serviços", href: "https://www.tst.jus.br/servicos" },
    { label: "Certidões", href: "/" },
    { label: "Objeto e Pé" },
  ],
  titulo: "Certidão de Objeto e Pé",
  subtitulo:
    "Fornece informações detalhadas sobre o objeto (assunto) e o andamento (pé) de um processo trabalhista no TST.",
  descricaoEmissao:
    "Informe o número do processo para solicitar a certidão de objeto e pé.",
  campos: [
    {
      id: "numero-processo",
      label: "Número do processo",
      placeholder: "0000000-00.0000.0.00.0000",
    },
  ],
  emissaoIcon: <FileCheck className="h-4 w-4" aria-hidden="true" />,
  helpItems: [
    {
      question: "O que é a Certidão de Objeto e Pé?",
      answer: (
        <p>
          A Certidão de Objeto e Pé fornece informações detalhadas sobre o{" "}
          <strong>objeto</strong> (assunto, matéria discutida) e o{" "}
          <strong>andamento</strong> (pé, fase atual) de um processo trabalhista no TST.
        </p>
      ),
    },
    {
      question: "Qual o prazo de emissão e custo?",
      answer: (
        <div className="space-y-2">
          <p>A emissão <strong>não é automática</strong> e requer petição ao processo correspondente.</p>
          <p>Pode haver cobrança de emolumentos, conforme disposto nos itens XV, "e", e XVI-A da Instrução Normativa nº 20/2002 do TST.</p>
          <p><strong>Procedimento:</strong> A certidão deve ser solicitada por meio de petição dirigida ao processo correspondente, via e-Doc ou PJe.</p>
        </div>
      ),
    },
    {
      question: "Como solicitar esta certidão?",
      answer: (
        <div className="space-y-2">
          <p>
            A Certidão de Objeto e Pé deve ser solicitada por meio de{" "}
            <strong>petição</strong> dirigida ao processo correspondente:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Processos no e-SIJ:</strong> peticionamento pelo{" "}
              <a
                href="https://edoc.tst.jus.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                sistema e-Doc
              </a>
            </li>
            <li>
              <strong>Processos no PJe:</strong> peticionamento pelo{" "}
              <a
                href="https://pje.tst.jus.br/tst/login.seam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PJe
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "E se o processo já tiver sido baixado?",
      answer: (
        <p>
          Caso o processo já tenha sido baixado, o requerimento deve ser dirigido ao{" "}
          <strong>Tribunal Regional do Trabalho (TRT) de origem</strong>.
        </p>
      ),
    },
    {
      question: "Quais normas orientam este serviço?",
      answer: (
        <ul className="space-y-1.5">
          <li>
            <a
              href="https://hdl.handle.net/20.500.12178/4216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Instrução Normativa nº 20, de 7 de novembro de 2002
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://hdl.handle.net/20.500.12178/10377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Ato Conjunto nº 21/TST.CSJT.GP.SG, de 7 de dezembro de 2010
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </li>
        </ul>
      ),
    },
  ],
  contato: {
    suporteTecnologico: "(61) 3043-4040",
    suporteJuridico: "(61) 3043-3201 (9h às 18h)",
    email: "segjud@tst.jus.br",
    unidadeResponsavel: "Secretaria-Geral Judiciária (SEGJUD)",
  },
};

const ObjetoPe = () => <CertidaoPageTemplate config={config} />;

export default ObjetoPe;
