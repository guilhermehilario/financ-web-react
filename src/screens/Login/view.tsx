import { useState } from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  appendErrors,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Title, Span, TextInput, Button, Error } from "../../components";
import { Envelope, Fingerprint, Keyhole } from "phosphor-react";

// Extrarir
import { httpClient } from "../../services/httpclient";
import { schema, SchemaValidation } from "./validation";

export function LoginView() {
  const { handleSubmit, control } = useForm<SchemaValidation>({
    resolver: yupResolver(schema),
  });

  // Extrair

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleLogin(data: SchemaValidation) {
    setError(false);

    if (data.email && data.password) {
      setLoading(true);
      try {
        const result = await httpClient.post("/api/admin/login", {
          email: data.email,
          password: data.password,
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

      {error && <Error message="Algo de errado não está certo!!!" />}
      <form onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange }, formState: { errors } }) => (
            <>
              <TextInput.Root label="E-mail">
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  placeholder="email@email.com"
                  onChange={onChange}
                  type="email"
                />
              </TextInput.Root>
              {errors.email?.message && (
                <Error message={errors.email?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange }, formState: { errors } }) => (
            <>
              <TextInput.Root label="Password">
                <TextInput.Icon>
                  <Keyhole />
                </TextInput.Icon>
                <TextInput.Input
                  placeholder="password"
                  onChange={onChange}
                  type="password"
                />
              </TextInput.Root>
              {errors.password?.message && (
                <Error message={errors.password?.message} />
              )}
            </>
          )}
        />

        {loading ? (
          <h1 className="font-bold text-md text-cyan-600">Chupetovisk</h1>
        ) : (
          <Button>Login</Button>
        )}
      </form>
    </div>
  );
}
