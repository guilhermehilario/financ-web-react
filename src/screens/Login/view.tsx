import { useState } from "react";

import { Title, Span, TextInput, Button } from "../../components";
import { DiscordLogo, Envelope, Fingerprint, Keyhole } from "phosphor-react";

// Extrarir
import { httpClient } from "../../services/httpclient";

export function LoginView() {
  // Extrair
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleLogin() {
    setError(false);

    if (email && password) {
      setLoading(true);
      try {
        const result = await httpClient.post("/api/admin/login", {
          email,
          password,
        });

        console.log(result);
        localStorage.setItem("token", result.data.token);
      } catch {
        setError(true);
      }

      setLoading(false);
    } else {
      setError(true);
    }
  }
  //

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
      <Title>Dashboard Base</Title>
      <Span>by Isnewart</Span>

      {error && (
        <h3 className="text-md text-cyan-400">
          Algo de errado não está certo!!!
        </h3>
      )}

      <TextInput.Root label="E-mail">
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input
          placeholder="email@email.com"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </TextInput.Root>

      <TextInput.Root label="Password">
        <TextInput.Icon>
          <Keyhole />
        </TextInput.Icon>
        <TextInput.Input
          placeholder="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextInput.Root>

      {loading ? (
        <h1 className="font-bold text-md text-cyan-600">Chupetovisk</h1>
      ) : (
        <div className=" justify-between">
          <Button>Register</Button>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </div>
  );
}
