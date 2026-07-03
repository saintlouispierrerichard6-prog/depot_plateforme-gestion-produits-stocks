"use client";

export default function ListeFournisseurs() {
  const fournisseurs = [
    { id: "FRS-101", nom: "Distribution Québec Inc.", telephone: "514-000-0000" },
    { id: "FRS-102", nom: "Alimentation Plus", telephone: "438-555-1212" },
    { id: "FRS-103", nom: "Techno Import", telephone: "450-777-8888" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Liste des fournisseurs
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Nom</th>
            <th className="border p-3 text-left">Téléphone</th>
          </tr>
        </thead>

        <tbody>
          {fournisseurs.map((f) => (
            <tr key={f.id} className="hover:bg-gray-50">
              <td className="border p-3">{f.id}</td>
              <td className="border p-3">{f.nom}</td>
              <td className="border p-3">{f.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
