export default function TableCommandesEmploye() {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3">Commandes traitées par l'employé</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Commande</th>
            <th className="border p-2">Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">2024-06-28</td>
            <td className="border p-2">CMD-010</td>
            <td className="border p-2">250.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
