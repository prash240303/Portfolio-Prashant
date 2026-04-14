export async function GET() {
  const res = await fetch(
    "https://api.counterapi.dev/v2/prashants-team-3732/first-counter-3732/up",
    {
      headers: {
        Authorization: `Bearer ${process.env.COUNTER_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return Response.json({ count: data.data?.value || 0 });
}