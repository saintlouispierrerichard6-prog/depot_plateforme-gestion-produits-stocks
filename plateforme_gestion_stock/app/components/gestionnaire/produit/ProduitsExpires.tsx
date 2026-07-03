"use client";

export default function ProduitsExpires() {
  const produits = [
    {
      id: "PRD-201",
      nom: "Yaourt Nature 500g",
      categorie: "Alimentaire",
      quantite: 12,
      expiration: "2024-06-10",
    },
    {
      id: "PRD-178",
      nom: "Jus d’orange 1L",
      categorie: "Alimentaire",
      quantite: 8,
      expiration: "2024-06-08",
    },
    {
      id: "PRD-099",
      nom: "Lait 2% 2L",
      categorie: "Alimentaire",
      quantite: 20,
      expiration: "2024-06-05",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Produits expirés
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Nom</th>
            <th className="border p-3 text-left">Catégorie</th>
            <th className="border p-3 text-left">Quantité</th>
            <th className="border p-3 text-left">Date d’expiration</th>
          </tr>
        </thead>

        <tbody>
          {produits.map((p) => (
            <tr key={p.id} className="hover:bg-red-50">
              <td className="border p-3">{p.id}</td>
              <td className="border p-3">{p.nom}</td>
              <td className="border p-3">{p.categorie}</td>
              <td className="border p-3">{p.quantite}</td>
              <td className="border p-3 text-red-600 font-semibold">
                {p.expiration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <p className="text-red-700 font-medium">
          ⚠️ Ces produits doivent être retirés du stock immédiatement.
        </p>
      </div>
    </div>
  );
}
