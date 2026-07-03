"use client";
import "./Bon_Commande.css";

import { useState } from "react";

interface Item {
  categorie: string;
  produit: string;
  quantite: number;
}

export default function BonCommande() {
  const [items, setItems] = useState<Item[]>([
    { categorie: "", produit: "", quantite: 0 }
  ]);

  const addLine = () => {
    setItems([...items, { categorie: "", produit: "", quantite: 0 }]);
  };

  const updateLine = (
    index: number,
    field: keyof Item,
    value: string | number
  ) => {
    const newItems = [...items];

    
    if (field === "quantite") {
      newItems[index][field] = Number(value);
    } else {
      newItems[index][field] = String(value);
    }

    setItems(newItems);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bon de Commande</h1>

      {/* INFORMATION FOURNISSEUR */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-3">Informations Fournisseur</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Nom du fournisseur" />
          <input className="border p-2 rounded" placeholder="Email du fournisseur" />
          <input className="border p-2 rounded" placeholder="Téléphone" />
          <input className="border p-2 rounded" placeholder="Adresse" />
        </div>
      </div>

      {/* TABLEAU DE COMMANDE */}
      <table className="w-full border mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Catégorie</th>
            <th className="p-2 border">Produit</th>
            <th className="p-2 border">Quantité</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">
                <input
                  className="w-full border p-1 rounded"
                  value={item.categorie}
                  onChange={(e) => updateLine(index, "categorie", e.target.value)}
                  placeholder="Catégorie"
                />
              </td>

              <td className="border p-2">
                <input
                  className="w-full border p-1 rounded"
                  value={item.produit}
                  onChange={(e) => updateLine(index, "produit", e.target.value)}
                  placeholder="Produit"
                />
              </td>

              <td className="border p-2">
                <input
                  type="number"
                  className="w-full border p-1 rounded"
                  value={item.quantite}
                  onChange={(e) => updateLine(index, "quantite", e.target.value)}
                  placeholder="Quantité"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addLine}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Ajouter une ligne
      </button>

      <button
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded ml-4"
      >
        Imprimer Bon de Commande
      </button>
    </div>
  );
}
