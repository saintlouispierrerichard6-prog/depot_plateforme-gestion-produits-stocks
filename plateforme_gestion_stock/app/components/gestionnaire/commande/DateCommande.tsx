"use client";

import "./DateCommande.css";

export default function DateCommande() {
  return (
    <div className="date-commande-container">
      <h1 className="title">Commandes par Date</h1>

      <div className="filter-box">
        <label className="label">Choisir une date :</label>
        <input type="date" className="input-date" />
      </div>

      <div className="results-box">
        <h2 className="subtitle">Résultats</h2>
        <p className="placeholder">Les commandes pour cette date apparaîtront ici.</p>
      </div>
    </div>
  );
}
