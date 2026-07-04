"use client";
import { useForm } from "react-hook-form";
import "./RegisterForm.css";

interface RegisterFormData {
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  password: string;
  confirmPassword: string;
  departement: string;
  matricule: string;
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Inscription:", data);
  };

  const password = watch("password");

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-card">

        <h2 className="register-title">Inscription</h2>
        <p className="register-subtitle">Créer votre compte employé</p>

        <div className="register-grid">

          {/* Nom */}
          <div>
            <label className="register-label">Nom</label>
            <input
              className="register-input"
              {...register("nom", {
                required: "Nom obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Nom invalide",
                },
              })}
              onBlur={() => trigger("nom")}
            />
            {errors.nom && <p className="error-text">{errors.nom.message}</p>}
          </div>

          {/* Prénom */}
          <div>
            <label className="register-label">Prénom</label>
            <input
              className="register-input"
              {...register("prenom", {
                required: "Prénom obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Prénom invalide",
                },
              })}
              onBlur={() => trigger("prenom")}
            />
            {errors.prenom && (
              <p className="error-text">{errors.prenom.message}</p>
            )}
          </div>

          {/* Adresse */}
          <div>
            <label className="register-label">Adresse</label>
            <input
              className="register-input"
              {...register("adresse", {
                required: "Adresse obligatoire",
                pattern: {
                  value: /^[A-Za-z0-9À-ÖØ-öø-ÿ\s,'-]+$/,
                  message: "Adresse invalide",
                },
              })}
              onBlur={() => trigger("adresse")}
            />
            {errors.adresse && (
              <p className="error-text">{errors.adresse.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="register-label">Email</label>
            <input
              type="email"
              className="register-input"
              {...register("email", {
                required: "Email obligatoire",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Format email invalide",
                },
              })}
              onBlur={() => trigger("email")}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          {/* Mot de passe */}
          <div>
            <label className="register-label">Créer mot de passe</label>
            <input
              type="password"
              className="register-input"
              {...register("password", {
                required: "Mot de passe obligatoire",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "Min 8 caractères, 1 maj, 1 min, 1 chiffre",
                },
              })}
              onBlur={() => trigger("password")}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

          {/* Confirmer mot de passe */}
          <div>
            <label className="register-label">Confirmer mot de passe</label>
            <input
              type="password"
              className="register-input"
              {...register("confirmPassword", {
                required: "Confirmation obligatoire",
                validate: (value) =>
                  value === password || "Les mots de passe ne correspondent pas",
              })}
              onBlur={() => trigger("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Département */}
          <div>
            <label className="register-label">Département</label>
            <input
              className="register-input"
              {...register("departement", {
                required: "Département obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Département invalide",
                },
              })}
              onBlur={() => trigger("departement")}
            />
            {errors.departement && (
              <p className="error-text">{errors.departement.message}</p>
            )}
          </div>

          {/* Matricule */}
          <div>
            <label className="register-label">Poste matricule</label>
            <input
              className="register-input"
              {...register("matricule", {
                required: "Matricule obligatoire",
                pattern: {
                  value: /^\d+$/,
                  message: "Matricule doit être numérique",
                },
              })}
              onBlur={() => trigger("matricule")}
            />
            {errors.matricule && (
              <p className="error-text">{errors.matricule.message}</p>
            )}
          </div>
        </div>

        <button type="submit" className="register-btn">
          S’inscrire
        </button>
      </form>
    </div>
  );
}
