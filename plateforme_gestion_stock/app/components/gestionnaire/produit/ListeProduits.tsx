"use client";

export default function ListeProduit() {
  const produits = [
    {
      id: "PRD-001",
      nom: "Riz basmati 5kg",
      categorie: "Alimentaire",
      prix: 12.99,
      quantite: 20,
      expiration: "2024-07-10",
    },
    {
      id: "PRD-002",
      nom: "Batteries AA (pack de 12)",
      categorie: "Électronique",
      prix: 9.99,
      quantite: 50,
      expiration: "2027-01-01",
    },
    {
      id: "PRD-003",
      nom: "Jus d’orange 1L",
      categorie: "Alimentaire",
      prix: 3.49,
      quantite: 8,
      expiration: "2024-06-08",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Liste des produits</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Nom</th>
              <th className="border p-3 text-left">Catégorie</th>
              <th className="border p-3 text-left">Prix</th>
              <th className="border p-3 text-left">Quantité</th>
              <th className="border p-3 text-left">Expiration</th>
            </tr>
          </thead>

          <tbody>
            {produits.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="border p-3">{p.id}</td>
                <td className="border p-3">{p.nom}</td>
                <td className="border p-3">{p.categorie}</td>
                <td className="border p-3">{p.prix} $</td>
                <td className="border p-3">{p.quantite}</td>
                <td className="border p-3">{p.expiration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
