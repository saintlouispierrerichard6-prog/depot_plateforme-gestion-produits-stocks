"use client";
import { useForm } from "react-hook-form";
import "./Login.css";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-card">
        
        <h2 className="login-title">Connexion</h2>
        <p className="login-subtitle">Accédez à votre espace de gestion</p>

        {/* Email */}
        <label className="login-label">Email</label>
        <input
          type="email"
          className="login-input"
          placeholder="exemple@domaine.com"
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

        {/* Password */}
        <label className="login-label">Mot de passe</label>
        <input
          type="password"
          className="login-input"
          placeholder="••••••••"
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

        <button type="submit" className="login-btn">
          Se connecter
        </button>
      </form>
    </div>
  );
}
