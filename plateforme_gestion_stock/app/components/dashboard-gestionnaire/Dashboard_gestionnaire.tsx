"use client";

import StatsCard from "@/app/components/StatsCard";
import ChartProduits from "@/app/components/dashboard-gestionnaire/CharteProduit";
import ChartCommandes from "@/app/components/dashboard-gestionnaire/CharteCommande";
import Link from "next/link";
import "./Dashboard_gestionnaire.css";

export default function DashboardGestionnaire() {
  return (
    <div className="w-full p-6 space-y-10">

      {/* ============================
          SECTION: INFO GESTIONNAIRE
      ============================ */}
      <div className="gestionnaire-header">
        <div className="gestionnaire-info">
          <img
            src="/gestionnaire.jpg"
            alt="photo gestionnaire"
            className="gestionnaire-photo"
          />

          <div>
            <h2 className="gestionnaire-name">Jean Dupont</h2>
            <p className="gestionnaire-role">Gestionnaire</p>
          </div>
        </div>

        <button className="msg-button">Messages</button>
      </div>

      {/* ============================
          SECTION: GRAPH TEMPS RÉEL
      ============================ */}
      <div className="graph-section">
        <h2 className="text-2xl font-bold mb-4">Évolution des produits (temps réel)</h2>

        <div className="graph-box">
          <canvas id="productChart"></canvas>
        </div>
      </div>

      {/* ============================
          SECTION: TABLEAU UTILISATEURS
      ============================ */}
      <div className="table-section">
        <h2 className="text-2xl font-bold mb-4">Nouveaux utilisateurs inscrits</h2>

        <table className="user-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Date d'inscription</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Marie Pierre</td>
              <td>Employé Stock</td>
              <td>2026-06-29</td>
            </tr>

            <tr>
              <td>Alex Moreau</td>
              <td>Employé Stock</td>
              <td>2026-06-28</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ============================
          SECTION: MESSAGERIE
      ============================ */}
      <div className="message-section">
        <h2 className="text-2xl font-bold mb-4">Envoyer un message aux employés</h2>

        <textarea
          className="message-input"
          placeholder="Écrire un message..."
        ></textarea>

        <button className="send-button">Envoyer</button>
      </div>

      {/* ============================
          SECTION: STATISTIQUES
      ============================ */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard Gestionnaire</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Produits</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Employés</h2>
            <p className="text-3xl font-bold mt-2">15</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Commandes</h2>
            <p className="text-3xl font-bold mt-2">48</p>
          </div>
        </div>
      </div>

      {/* ============================
          SECTION: ACTIONS RAPIDES
      ============================ */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Actions rapides</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Link
           href="/dashboard/gestionnaire/produits/liste"
           className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
           >
            Liste Produits
          </Link>

           <Link
             href="/dashboard/gestionnaire/produits/categories"
             className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
            >
             Catégories Produits
            </Link>

        <Link
          href="/dashboard/gestionnaire/produits/ajouter"
          className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
        >
          Ajouter Produit
        </Link>

         <Link
             href="/dashboard/gestionnaire/produits/produitsexpires"
             className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
           >
           Produits Expirés
          </Link>

          <Link
            href="/dashboard/gestionnaire/produits/produitsnonexpires"
            className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
          >
            Produits Non Expirés
          </Link>

             <Link
               href="/dashboard/gestionnaire/produits/rotation"
               className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
              >
                Rotation Stock
             </Link>

             <Link
                 href="/dashboard/gestionnaire/commandes/bon_commande"
                className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
              >
                Commandes
              </Link>

             <Link
              href="/dashboard/gestionnaire/employes/listerEmploye"
              className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
              >
                Liste Employés
               </Link>

            <Link
              href="/dashboard/gestionnaire/employes/ajouter"
              className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
            >
              Ajouter Employé
            </Link>

              <Link
                href="/dashboard/gestionnaire/employes/retirer"
                className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
              >
                  Retirer Employé
              </Link>

          <Link
            href="/dashboard/gestionnaire/fournisseurs/liste"
            className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
          >
           Liste Fournisseurs
          </Link>

        <Link
          href="/dashboard/gestionnaire/fournisseurs/ajouter"
          className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
        >
          Ajouter Fournisseur
        </Link>

           <Link
              href="/dashboard/gestionnaire/fournisseurs/retirer"
              className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
            >
             Retirer Fournisseur
           </Link>

        <Link
          href="/dashboard/gestionnaire/rapport"
          className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition block text-center"
        >
          Voir Rapports
        </Link>

      </div>
    </div>

      {/* ============================
          SECTION: HISTORIQUE
      ============================ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Historique des activités</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="space-y-3">
            <li className="border-b pb-2">Employé Jean a ajouté 20 produits</li>
            <li className="border-b pb-2">Commande #452 validée</li>
            <li className="border-b pb-2">Stock critique détecté pour Produit X</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
