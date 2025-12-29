export default async function Home() {

  const res = await fetch("https://api.github.com/users/CleverCoder03")
  const data = await res.json()
  return (
    <>
      <main className="w-screen">
        <h1>Hello World</h1>
        {JSON.stringify(data)}
      </main>
    </>
  );
}
