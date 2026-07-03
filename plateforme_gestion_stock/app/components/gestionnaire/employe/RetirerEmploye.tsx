"use client";

import "./RetirerEmploye.css";

export default function RetirerEmploye() {
  return (
    <div className="retirer-employe-container">
      <h1 className="title">Retirer un employé</h1>

      <form className="form">
        <div className="form-group">
          <label>ID de l’employé</label>
          <input type="text" placeholder="Ex: EMP-102" />
        </div>

        <div className="form-group">
          <label>Nom complet</label>
          <input type="text" placeholder="Ex: Pierre Louis" />
        </div>

        <div className="form-group">
          <label>Raison du retrait</label>
          <select>
            <option>Fin de contrat</option>
            <option>Démission</option>
            <option>Licenciement</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Retirer l’employé
        </button>
      </form>
    </div>
  );
}
