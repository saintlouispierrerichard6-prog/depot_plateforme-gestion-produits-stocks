"use client";

import { useState } from "react";

export default function GenererQRProduit() {
  const produits = [
    {
      id: "PRD-310",
      nom: "Pâtes alimentaires 1kg",
      categorie: "Alimentaire",
      prix: 4.99,
      disponible: true,
      rayon: "Rayon A3",
      expiration: "2025-02-15",
      description: "Pâtes alimentaires de qualité supérieure, paquet de 1kg.",
    },
    {
      id: "PRD-522",
      nom: "Batteries AA (pack de 12)",
      categorie: "Électronique",
      prix: 12.99,
      disponible: true,
      rayon: "Rayon B1",
      expiration: "2027-01-01",
      description: "Pack de 12 batteries AA longue durée.",
    },
    {
      id: "PRD-178",
      nom: "Jus d’orange 1L",
      categorie: "Alimentaire",
      prix: 3.49,
      disponible: false,
      rayon: "Rayon C2",
      expiration: "2024-06-08",
      description: "Jus d’orange naturel sans sucre ajouté.",
    },
  ];

  const [selectedId, setSelectedId] = useState("");
  const [qrData, setQrData] = useState("");

  const handleGenerate = () => {
    if (!selectedId) {
      alert("Veuillez sélectionner un produit avant de générer le code QR.");
      return;
    }

    const produit = produits.find((p) => p.id === selectedId);
    if (!produit) return;

    const data = JSON.stringify(produit);
    setQrData(data);
  };

  return (
    <div className="space-y-8">
      {/* Titre */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Générer un code QR pour un produit
      </h1>

      {/* Sélection produit */}
      <div className="space-y-4">
        <label className="font-semibold text-gray-700">
          Sélectionnez un produit
        </label>

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choisir un produit --</option>
          {produits.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nom} ({p.id})
            </option>
          ))}
        </select>
      </div>

      {/* Bouton générer */}
      <button
        onClick={handleGenerate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full md:w-auto"
      >
        Générer le code QR
      </button>

      {/* QR Code */}
      {qrData && (
        <div className="space-y-4">
          <div className="w-40 h-40 border border-dashed border-gray-400 flex items-center justify-center rounded-lg bg-gray-50 mx-auto">
            <span className="text-gray-500 text-center text-sm">
              QR Code généré
              <br />
              (intégration réelle à venir)
            </span>
          </div>

          <p className="text-xs text-gray-500 break-all text-center">
            Données QR: {qrData}
          </p>
        </div>
      )}

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">
          ℹ️ Le code QR contient toutes les informations du produit.  
          Lorsqu’il est scanné, l’utilisateur verra le nom, la catégorie, le prix, la disponibilité, le rayon, la date d’expiration et la description.
        </p>
      </div>
    </div>
  );
}
