import { Appwrite } from "appwrite";
import { Server } from "../utils/config";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    api.sdk = appwrite;
    return appwrite;
  },

  loginWithZendesk: async () => {
    try {
      await api.provider().account.createOAuth2Session(
        "zendesk",
        "http://localhost:3000/login",
        "http://localhost:3000/login"
      );
    } catch (error) {
      throw error;
    }
  },

  loginWith: async (provider) => {
    try {
      await api.provider().account.createOAuth2Session(
        provider,
        Server.loginurl,
        Server.loginurl
      );
    } catch (error) {
      throw error;
    }
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create(email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  getUserID: () => {
    return api.provider().account.getUserID();
  },

  getUserEmail: () => {
    return api.provider().account.getUserEmail();
  },

  getUserName: () => {
    return api.provider().account.getUserName();
  },

  createSession: (email, password) => {
    return api.provider().account.createSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (collectionId, data, read, write) => {
    return api
      .provider()
      .database.createDocument(collectionId, data, read, write);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(collectionId);
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return api
      .provider()
      .database.updateDocument(collectionId, documentId, data, read, write);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },
};

export default api;
