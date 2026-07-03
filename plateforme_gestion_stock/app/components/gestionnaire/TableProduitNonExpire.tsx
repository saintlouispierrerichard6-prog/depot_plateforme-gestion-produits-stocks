export default function TableProduitsNonExpire() {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3">Produits non expirés</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Produit</th>
            <th className="border p-2">Catégorie</th>
            <th className="border p-2">Date d'expiration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Produit Y</td>
            <td className="border p-2">Pharmaceutique</td>
            <td className="border p-2">2025-01-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
