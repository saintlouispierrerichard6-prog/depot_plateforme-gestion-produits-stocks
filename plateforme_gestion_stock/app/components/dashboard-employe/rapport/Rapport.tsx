"use client";
import "./Rapport.css";

import StatsCard from "@/app/components/StatsCard";

import ChartPerformanceEmploye from "@/app/components/dashboard-employe/ChartePerformanceEmploye";
import ChartTacheParJour from "@/app/components/dashboard-employe/CharteTacheParJour";
import ChartCommandeParDate from "@/app/components/dashboard-employe/CharteCommandeParDate";
import ChartCategorieTravail from "@/app/components/dashboard-employe/CharteCategorieTravail";

import TableActivitesEmploye from "@/app/components/dashboard-employe/TableActivitesEmploye";
import TableCommandesEmploye from "@/app/components/dashboard-employe/TableCommandesEmploye";
import TableRotationEmploye from "@/app/components/dashboard-employe/TableRotationEmploye";

import ButtonImpression from "@/app/components/ButtonImpression";

export default function RapportEmploye() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rapport Employé</h1>

      {/* STATISTIQUES EMPLOYÉ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Produits ajoutés" value={58} />
        <StatsCard title="Commandes validées" value={22} />
        <StatsCard title="Clients servis" value={14} />
      </div>

      {/* GRAPHIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartPerformanceEmploye />
        <ChartTacheParJour />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartCommandeParDate />
        <ChartCategorieTravail />
      </div>

      {/* TABLEAU ACTIVITÉS */}
      <div className="mb-6">
        <TableActivitesEmploye />
      </div>

      {/* TABLEAU COMMANDES PAR EMPLOYÉ */}
      <div className="mb-6">
        <TableCommandesEmploye />
      </div>

      {/* ROTATION PRODUITS PAR EMPLOYÉ */}
      <div className="mb-6">
        <TableRotationEmploye />
      </div>

      {/* IMPRESSION */}
      <button
        onClick={() => window.print()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Imprimer Rapport Employé
      </button>
    </div>
  );
}
