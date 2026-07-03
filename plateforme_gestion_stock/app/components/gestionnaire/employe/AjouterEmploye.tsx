"use client";

import "./AjouterEmploye.css";

export default function AjouterEmploye() {
  return (
    <div className="ajouter-employe-container">
      <h1 className="title">Ajouter un employé</h1>

      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>Nom complet</label>
            <input type="text" placeholder="Ex: Pierre Louis" />
          </div>

          <div className="form-group">
            <label>Rôle</label>
            <select>
              <option>Employé Stock</option>
              <option>Caissier</option>
              <option>Superviseur</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Téléphone</label>
            <input type="tel" placeholder="Ex: 514-000-0000" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Ex: pierre@email.com" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date d’entrée</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Statut</label>
            <select>
              <option>Actif</option>
              <option>En probation</option>
            </select>
          </div>
        </div>

          <button type="submit" className="submit-btn">
          Enregistrer l’employé
        </button>

      </form>
    </div>
  );
}


