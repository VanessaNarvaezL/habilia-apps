// api/chat.js — Backend compartido del chat IA de HABIL/IA
// Reenvía mensajes a la API de Anthropic y devuelve errores REALES y categorizados.
// La API key vive SOLO en Variables de Entorno de Vercel (ANTHROPIC_API_KEY).
// NUNCA escribir la key en este archivo ni en GitHub.

// Modelo vigente. Si el chat sigue fallando con errorType "model",
// verificar el string correcto en platform.claude.com o docs.claude.com
// y cambiar SOLO esta línea.
const MODEL = 'claude-sonnet-4-6';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      errorType: 'request',
      userMessage: 'Método no permitido.'
    });
  }

  // (2 en el diagnóstico) La key se lee de las variables de entorno.
  // Si falta, lo decimos claro en los logs SIN revelar ningún valor.
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('[chat] Falta ANTHROPIC_API_KEY en las variables de entorno de Vercel.');
    return res.status(500).json({
      ok: false,
      errorType: 'api_key',
      userMessage: 'El servicio no está disponible en este momento. Intenta más tarde.'
    });
  }

  // (4 en la lista de errores) Error de formato del request.
  const body = req.body;
  if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
    return res.status(400).json({
      ok: false,
      errorType: 'request',
      userMessage: 'No se pudo enviar tu mensaje. Vuelve a intentarlo.'
    });
  }

  // Llamada a Anthropic. El try/catch externo cubre fallas de red.
  let response;
  let data;
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        system: body.system,
        messages: body.messages
      })
    });
  } catch (err) {
    // (5) Error de red / no se pudo alcanzar la API externa.
    console.error('[chat] Error de red al llamar a Anthropic:', err.message);
    return res.status(502).json({
      ok: false,
      errorType: 'network',
      userMessage: 'Hubo un problema de conexión. Por favor intenta de nuevo.'
    });
  }

  try {
    data = await response.json();
  } catch (err) {
    console.error('[chat] Respuesta de Anthropic ilegible:', err.message);
    return res.status(502).json({
      ok: false,
      errorType: 'network',
      userMessage: 'Hubo un problema de conexión. Por favor intenta de nuevo.'
    });
  }

  // Si Anthropic devolvió error, NO lo disfrazamos de respuesta del terapeuta.
  // Devolvemos el status real y una categoría útil.
  if (!response.ok) {
    const apiType = (data && data.error && data.error.type) || 'desconocido';
    const apiMsg = (data && data.error && data.error.message) || '';

    let errorType = 'external';
    let userMessage = 'No se pudo obtener una respuesta en este momento. Intenta de nuevo en un momento.';

    if (response.status === 401 || apiType === 'authentication_error') {
      // (2) Error de API key.
      errorType = 'api_key';
    } else if (
      response.status === 429 ||
      response.status === 529 ||
      apiType === 'rate_limit_error' ||
      apiType === 'overloaded_error'
    ) {
      // (3) Error de créditos / límite / sobrecarga.
      errorType = 'credits_or_limit';
      userMessage = 'Hay mucha demanda en este momento. Intenta de nuevo en unos minutos.';
    } else if (response.status === 400 && /model/i.test(apiMsg)) {
      // (1) Error de modelo (string inválido o retirado).
      errorType = 'model';
    } else if (response.status === 400) {
      // (4) Error de formato del request.
      errorType = 'request';
    }

    // Log útil para Vercel — incluye status, tipo y mensaje de Anthropic.
    // NO se registra la key ni ningún secreto.
    console.error(
      `[chat] Error Anthropic | status=${response.status} type=${apiType} categoria=${errorType} msg=${apiMsg}`
    );

    return res.status(response.status).json({ ok: false, errorType, userMessage });
  }

  // Éxito: devolvemos la respuesta tal cual.
  // El frontend ya lee data.content[0].text — no cambia nada para él.
  return res.status(200).json(data);
}
