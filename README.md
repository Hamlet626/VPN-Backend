# 🗺️ **VPN Backend Deployment on Google Cloud Platform**

This backend service is designed for deployment on Google Cloud Platform (GCP), utilizing services like **App Engine** or **Cloud Run**. Its core function is to intelligently route incoming requests, with a specific focus on redirecting traffic from regions affected by network restrictions (e.g., China's firewall) to **Firebase** for reliable and uninterrupted service.

---

## 🛠️ **Getting Started**

### **Prerequisites**

To get the project up and running, you'll need to set up the following credentials:

1.  **Firebase Service Account:** Obtain the `firebase-service-account.json` file. This is crucial for authentication and is downloaded directly from your GCP Firebase project settings.
2.  **Environment Variables:** Update the `.env` files with all the required credentials and configuration settings. This ensures the application can connect to the necessary services and function correctly.
