export default function authentication() {
  const storage = localStorage.getItem("PAINEL_ADMIN");
  if (!storage) return false;
  const { token } = JSON.parse(storage);
  return { auth: !!token };
}
