type ButtonImpressionProps = {
  label?: string;
};

export default function ButtonImpression({ label = "Imprimer Rapport" }: ButtonImpressionProps) {
  return (
    <button
      onClick={() => window.print()}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {label}
    </button>
  );
}
