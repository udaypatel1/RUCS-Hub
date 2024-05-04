"use server";

import axios from "axios";

export async function getAuth0Token() {
  const config = {
    method: "POST",
    url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    headers: { "content-type": "application/json" },
    data: {
      grant_type: "client_credentials",
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
    },
  };

  const response = await axios(config);
  const { access_token } = response.data;
  return access_token;
}

export async function resendEmailVerification(userId: string) {
  const token = await getAuth0Token();

  const verificationEmailConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://${process.env.AUTH0_DOMAIN}/api/v2/jobs/verification-email`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      user_id: userId,
      client_id: process.env.AUTH0_CLIENT_ID,
      identity: {
        user_id: userId.split("|")[1],
        provider: "auth0",
      },
    },
  };

  await axios.request(verificationEmailConfig);
}
