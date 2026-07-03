"use client";

export default function RuptureStock() {

const joursRestants = (expiration: string) => {
  const exp = new Date(expiration + "T00:00:00-04:00");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffTime = exp.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(diffDays)) return "Erreur date";
  if (diffDays < 0) return "Expiré";

  return diffDays + " jours";
};


const produits = [
    {
      id: "PRD-001",
      nom: "Riz basmati 5kg",
      categorie: "Alimentaire",
      prix: 12.99,
      quantiteRestante: 0,
      quantiteVendue: 120,
      dateAchat: "2024-05-01",
      delaiMoyen: "45 jours",
      chiffreAffaire: 120 * 12.99,
      expiration: "2024-07-10",
    },
    {
      id: "PRD-002",
      nom: "Batteries AA (pack de 12)",
      categorie: "Électronique",
      prix: 9.99,
      quantiteRestante: 3,
      quantiteVendue: 200,
      dateAchat: "2024-04-15",
      delaiMoyen: "60 jours",
      chiffreAffaire: 200 * 9.99,
      expiration: "2027-01-01",
    },
    {
      id: "PRD-003",
      nom: "Jus d’orange 1L",
      categorie: "Alimentaire",
      prix: 3.49,
      quantiteRestante: 1,
      quantiteVendue: 80,
      dateAchat: "2024-05-20",
      delaiMoyen: "30 jours",
      chiffreAffaire: 80 * 3.49,
      expiration: "2024-06-08",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Produits en rupture de stock
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="border p-3">ID</th>
            <th className="border p-3">Nom</th>
            <th className="border p-3">Catégorie</th>
            <th className="border p-3">Prix</th>
            <th className="border p-3">Quantité restante</th>
            <th className="border p-3">Quantité vendue</th>
            <th className="border p-3">Date d’achat</th>
            <th className="border p-3">Délai moyen</th>
            <th className="border p-3">Chiffre d’affaire</th>
            <th className="border p-3">Expiration</th>
            <th className="border p-3">Reste pour expirer</th>
          </tr>
        </thead>

        <tbody>
          {produits.map((p) => (
            <tr key={p.id} className="hover:bg-red-50">
              <td className="border p-3">{p.id}</td>
              <td className="border p-3">{p.nom}</td>
              <td className="border p-3">{p.categorie}</td>
              <td className="border p-3">{p.prix} $</td>
              <td className="border p-3">{p.quantiteRestante}</td>
              <td className="border p-3">{p.quantiteVendue}</td>
              <td className="border p-3">{p.dateAchat}</td>
              <td className="border p-3">{p.delaiMoyen}</td>
              <td className="border p-3 text-blue-700 font-semibold">
                {p.chiffreAffaire.toFixed(2)} $
              </td>
              <td className="border p-3">{p.expiration}</td>

              <td
                className={`border p-3 font-semibold ${
                  joursRestants(p.expiration) === "Expiré"
                    ? "text-red-700"
                    : "text-orange-600"
                }`}
              >
                {joursRestants(p.expiration)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <p className="text-red-700 font-medium">
          ⚠️ Vérifiez ces produits rapidement. Certains sont expirés ou proches de l’expiration.
        </p>
      </div>
    </div>
  );
}
