import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

export const appwriteConfig = {
    endpoint: import.meta.env.VITE_PUBLIC_APPWRITE_ENDPOINT,
    projectID: import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID
}

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
