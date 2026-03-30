import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

export const appwriteConfig = {
    endpoint: import.meta.env.VITE_PUBLIC_APPWRITE_ENDPOINT,
    projectID: import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_PUBLIC_APPWRITE_DATABASE_ID,
    productsId: import.meta.env.VITE_PUBLIC_APPWRITE_PRODUCT_TABLE_ID,
    storageId: import.meta.env.VITE_PUBLIC_APPWRITE_STORAGE_ID
}

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client)
