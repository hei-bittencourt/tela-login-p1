import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import logoOrkut from "./assets/orkut.png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logar, setLogar] = useState(false);

  const emailSalvo = "admin@admin.com";
  const senhaSalva = "12345";

  function handleButtonClick() {
    setLogar(!logar);
  }

  useEffect(() => {
    if (logar) {
      setLogar(false);
      if (email == emailSalvo && password == senhaSalva) {
        alert("Bem Vindo ao Orkut!");
      } else {
        alert("Email ou senha inválidos");
      }
    }
  }, [logar]);

  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.containerInterno}>
          <div className={styles.logo}>
            <a href="https://www.orkut.com/" target="_blank">
              <img src={logoOrkut} alt="logo orkut" />
            </a>
          </div>
          <div className={styles.formulario}>
            <p>Acesse o orkut.com com a sua conta</p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button onClick={handleButtonClick}>Login</button>
            <a href="#">Não consegue acessar a sua conta?</a>
          </div>
          <div className={styles.novoMembro}>
            <p>Ainda não é membro?</p>
            <a href="#">ENTRAR JÁ</a>
          </div>
          <div className={styles.footer}>
            <p>© 2017 Orkut.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
