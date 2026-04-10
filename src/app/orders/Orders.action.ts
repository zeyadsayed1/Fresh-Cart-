"use server"

import { getUserToken } from "@/app/myUtility";
import { jwtDecode } from "jwt-decode";
import { revalidatePath } from "next/cache";

export async function getUserOrders() {
    try {
        const token = await getUserToken();
        if (!token) return [];

        const decoded: any = jwtDecode(token as string);
        const userId = decoded.id;

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/user/${userId}`, {
            method: "GET",
            headers: {
                token: (token as string),
            },
            cache: 'no-store'
        });
        
        const data = await response.json();

        revalidatePath('/cart');
        
        return Array.isArray(data) ? data : data.data || [];
    } catch (error) {
        return [];
    }
}
