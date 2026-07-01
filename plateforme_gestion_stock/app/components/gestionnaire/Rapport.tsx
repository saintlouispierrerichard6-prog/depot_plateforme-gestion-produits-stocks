"use client";
import StatsCard from "@/app/components/StatsCard";

import ChartProduits from "@/app/components/dashboard-gestionnaire/CharteProduit";
import ChartCommandes from "@/app/components/dashboard-gestionnaire/CharteCommande";
import ChartCAParCategorie from "@/app/components/gestionnaire/CharteParCategorie";

import TableActivites from "@/app/components/TableActivites";
import TableCategorieProduit from "@/app/components/gestionnaire/TableCategorieProduits";
import TableProduitsExpire from "@/app/components/gestionnaire/TableProduitExpire";
import TableProduitsNonExpire from "@/app/components/gestionnaire/TableProduitNonExpire";
import TableRotationProduits from "@/app/components/gestionnaire/TableRotationProduit";
import TableCommandesDate from "@/app/components/gestionnaire/TableCommandeDate";

import ButtonImpression from "@/app/components/ButtonImpression";
import "./Rapport.css";


export default function RapportGestionnaire() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rapport Gestionnaire</h1>

      {/* SECTION STATISTIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Produits" value={120} />
        <StatsCard title="Employés" value={15} />
        <StatsCard title="Commandes" value={48} />
      </div>

      {/* GRAPHIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartProduits />
        <ChartCommandes />
      </div>

      {/* CHIFFRE D'AFFAIRE PAR CATÉGORIE */}
      <div className="mb-6">
        <ChartCAParCategorie />
      </div>

      {/* CATÉGORIE PRODUIT */}
      <div className="mb-6">
        <TableCategorieProduit />
      </div>

      {/* PRODUITS EXPIRÉS */}
      <div className="mb-6">
        <TableProduitsExpire />
      </div>

      {/* PRODUITS NON EXPIRÉS */}
      <div className="mb-6">
        <TableProduitsNonExpire />
      </div>

      {/* ROTATION PRODUITS */}
      <div className="mb-6">
        <TableRotationProduits />
      </div>

      {/* COMMANDES PAR DATE */}
      <div className="mb-6">
        <TableCommandesDate />
      </div>

      {/* ACTIVITÉS */}
      <TableActivites />

      {/* BOUTON IMPRESSION */}
      <div className="mt-6">
        <ButtonImpression />
      </div>
    </div>
  );
}
