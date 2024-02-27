export default async function () {
  const result = await useFetch("/api/data", {
    pick: ["books"],
  });

  return result;
}
