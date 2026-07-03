export default function TableRotationProduits() {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3">Rotation des produits</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Produit</th>
            <th className="border p-2">Catégorie</th>
            <th className="border p-2">Rotation (jours)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Produit Z</td>
            <td className="border p-2">Alimentaire</td>
            <td className="border p-2">7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
