const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

async function handle(res) {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export async function createLot(lotData) {
  const res = await fetch(`${BASE_URL}/lots`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lotData),
  });
  return handle(res);
}

export async function getLots() {
  const res = await fetch(`${BASE_URL}/lots`);
  return handle(res);
}

export async function getOffersForLot(lotId) {
  const res = await fetch(`${BASE_URL}/lots/${lotId}/offers`);
  return handle(res);
}

export async function respondToOffer(offerId, action, counterPrice) {
  const res = await fetch(`${BASE_URL}/offers/${offerId}/respond`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, counterPrice }),
  });
  return handle(res);
}