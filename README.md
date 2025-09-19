# 🗺️ **VPN Backend Deployment on Google Cloud Platform**

This backend service is designed for deployment on Google Cloud Platform (GCP), utilizing services like **App Engine** or **Cloud Run**. Its core function is to intelligently route incoming requests, with a specific focus on redirecting traffic from regions affected by network restrictions (e.g., China's firewall) to **Firebase** for reliable and uninterrupted service.

---

## 🛠️ **Getting Started**

### **Prerequisites**

To get the project up and running, you'll need to set up the following credentials:

1.  **Environment Variables:** Update the `.env` files with all the required credentials and configuration settings:
   ```
PORT=....
AUTH_KEY=..
AIRTABLE_API_KEY=..
GOOGLE_APPLICATION_CREDENTIALS=_account-key.json
SENDGRID_KEY=SG..

type=service_account
project_id=..
private_key_id=..
private_key=-----BEGIN PRIVATE KEY-----\n...
client_email=..
client_id=..
auth_uri=..
token_uri=..
auth_provider_x509_cert_url=..
client_x509_cert_url=..
```
2.  **Firebase Service Account:** Obtain the `firebase-service-account.json` file from GCP -> add it to project root directory -> and put the file path as the value for "GOOGLE_APPLICATION_CREDENTIALS" in env.
