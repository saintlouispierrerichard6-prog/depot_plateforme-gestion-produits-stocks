export default function TableCategorieProduit() {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3">Catégories de produits</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Catégorie</th>
            <th className="border p-2">Nombre de produits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Alimentaire</td>
            <td className="border p-2">45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
