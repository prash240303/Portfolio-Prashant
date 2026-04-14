const BASE_URL =
  "https://api.counterapi.dev/v2/prashants-team-3732/first-counter-3732";

const headers = {
  Authorization: `Bearer ${process.env.COUNTER_API_KEY}`,
};

export async function GET() {
  // 🔹 Get current value (NO increment)
  const res = await fetch(BASE_URL, {
    headers,
    cache: "no-store",
  });

  const data = await res.json();
  return Response.json({ count: data.data?.up_count || 0 });
}

export async function POST() {
  const res = await fetch(`${BASE_URL}/up`, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  const data = await res.json();

  return Response.json({ count: data.data?.up_count || 0 });
}