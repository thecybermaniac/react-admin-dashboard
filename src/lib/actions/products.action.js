import { ID } from "appwrite";
import { appwriteConfig, databases, storage } from "../appwrite";

export const createProduct = async (productData) => {
    try {
        const { name, price, category, rating, image } = productData;

        const storeImage = await storage.createFile(appwriteConfig.storageId, ID.unique(), image);

        if (storeImage) {
            const product = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.productsId, ID.unique(), { name, price, category, rating, imageUrl: storeImage.$id })
            return product;
        }
    } catch (error) {
        console.log(error);
    }
}