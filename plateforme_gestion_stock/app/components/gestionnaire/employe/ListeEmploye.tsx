"use client";

export default function ListeEmployes() {
  const employes = [
    {
      id: "EMP-001",
      nom: "Jean Baptiste",
      role: "Employé Stock",
      dateInscription: "2026-06-29",
    },
    {
      id: "EMP-002",
      nom: "Marie Pierre",
      role: "Employé Stock",
      dateInscription: "2026-06-28",
    },
    {
      id: "EMP-003",
      nom: "Alex Moreau",
      role: "Employé Stock",
      dateInscription: "2026-06-27",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Liste des employés</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Nom</th>
              <th className="border p-3 text-left">Rôle</th>
              <th className="border p-3 text-left">Date d'inscription</th>
            </tr>
          </thead>

          <tbody>
            {employes.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="border p-3">{e.id}</td>
                <td className="border p-3">{e.nom}</td>
                <td className="border p-3">{e.role}</td>
                <td className="border p-3">{e.dateInscription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
