"use client";

import StatsCard from "@/app/components/StatsCard";
import ChartProduits from "@/app/components/dashboard-gestionnaire/CharteProduit";
import ChartCommandes from "@/app/components/dashboard-gestionnaire/CharteCommande";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Gestionnaire</h1>

      {/* STATISTIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Produits" value={120} />
        <StatsCard title="Commandes" value={45} />
        <StatsCard title="Catégories" value={12} />
      </div>

      {/* GRAPHIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartProduits />
        <ChartCommandes />
      </div>

      {/* LIENS RAPIDES */}
      <div className="flex gap-4 mt-6">
        <Link
          href="/gestionnaire/rapport"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Voir Rapport Gestionnaire
        </Link>

        <Link
          href="/gestionnaire/commandes"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Créer Bon de Commande
        </Link>
      </div>
    </div>
  );
}
