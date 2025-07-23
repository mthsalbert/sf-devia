import { Connection } from "jsforce";
import { db } from "@/lib/firebaseAdmin";

export let connByOrgId = async ({organizationId, uid}) => {
    const org = (await db
      .collection('users')
      .doc(uid)
      .collection('organizations')
      .doc(organizationId)
      .get())
      .data()
    const conn = new Connection({
        oauth2: {
            clientId: process.env.SALESFORCE_CLIENT_ID,
            clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
            redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/organization/callback`, // deve ser igual ao usado no OAuth

        },
        instanceUrl: org.instance_url,
        refreshToken: org.refresh_token
    });
    return {
        conn, 
        org: {
            ...org,
            access_token: (await conn.oauth2.refreshToken(org.refresh_token))?.access_token,
        }
    }
}