import { Client, Account, Databases, Storage, Functions } from 'appwrite';

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT
const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID

const client = new Client()
  .setEndpoint(endpoint) // o il tuo endpoint self-hosted
  .setProject(projectID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client)

export default client;