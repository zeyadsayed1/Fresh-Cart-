import { json } from "stream/consumers";
import { AllCategoriesData, AllCategoriesResponse } from "./Category";


export async function getAllCategories():Promise<AllCategoriesData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`, {
        cache:'force-cache',
    });
    const data: AllCategoriesResponse = await response.json();
    return data.data
}
