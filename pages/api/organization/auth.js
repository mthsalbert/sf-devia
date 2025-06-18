export default async function handler(req, res) {
    const { orgId, env, user_id } = req.query;
    const loginUrl = `https://${env}.salesforce.com/services/oauth2/authorize`;

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.SALESFORCE_CLIENT_ID,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/organization/callback`,
      scope: `api refresh_token`,
      code_challenge: await generateCodeChallenge(orgId),
      code_challenge_method: 'S256',
      state: `${orgId}_sfdevia_${user_id}`,
      prompt: 'login'
    });


    res.redirect(`${loginUrl}?${params.toString()}`);
}

async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const base64Url = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return base64Url;
}
