export async function handleLogin(email: string, password: string) {
  return { user: { email, password } };
}
