"use server"

import { BASE_URL } from "@/constants/api";
import { getUserToken } from "@/app/myUtility";
import { productCart, ProductQty } from "./AddToCart.interface";
import { revalidatePath } from "next/cache";

export async function handleAddProductToCart(data:productCart) {
    const userToken = await getUserToken();
    if (!userToken) {
        throw new Error("Cart requires backend sync. If you are using social login and see this, please try signing in with your email and password.");
    }

    const response = await fetch(`${BASE_URL}/api/v2/cart`, {
        method: "POST",
        headers: {
            token: userToken,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)   
    })
    revalidatePath('/cart')
    const resJson = await response.json();
    const { status, message, numOfCartItems, cartId } = resJson;
    const totalCartPrice = resJson?.data?.totalCartPrice ?? 0;
    const products = resJson?.data?.products ?? [];

    if (status !== "success") {
        throw new Error(message || "Failed to add product to cart");
    }

    return {status, message, numOfCartItems, cartId, totalCartPrice, products}
}
export async function handleProductQty(ProductQty:ProductQty,productId:string) {
    const userToken = await getUserToken();
   
    const response = await fetch(`${BASE_URL}/api/v2/cart/${productId}`, {
        method: "PUT",
        headers: {
            token: (userToken as string),
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ProductQty)   
    })
    revalidatePath('/cart')
    const data  = await response.json();
 return data
}
export async function removeProduct(productId:string) {
    const userToken = await getUserToken();
   
    const response = await fetch(`${BASE_URL}/api/v2/cart/${productId}`, {
        method: "DELETE",
        headers: {
            token: (userToken as string),
            "Content-Type":"application/json"
        }
    })
    revalidatePath('/cart')
    const data  = await response.json();
 return data
}

export async function clearCart() {
    const userToken = await getUserToken();
   
    const response = await fetch(`${BASE_URL}/api/v2/cart`, {
        method: "DELETE",
        headers: {
            token: (userToken as string),
        }
    })
    revalidatePath('/cart')
    const data  = await response.json();
    return data;
}

export async function getUserCart() {
    try {
        const userToken = await getUserToken();
        if (!userToken) {
            return { numOfCartItems: 0, cartId: null, totalCartPrice: 0, products: [] };
        }
        
        const response = await fetch(`${BASE_URL}/api/v2/cart`, {
            method: "GET",
            headers: {
                token: userToken,
            },
            cache: "no-store",
        })
        
        if (!response.ok) {
            return { numOfCartItems: 0, cartId: null, totalCartPrice: 0, products: [] };
        }

        const resJson = await response.json();
        const numOfCartItems = resJson?.numOfCartItems ?? 0;
        const cartId = resJson?.cartId ?? null;
        const totalCartPrice = resJson?.data?.totalCartPrice ?? 0;
        const products = resJson?.data?.products ?? [];
      
        return { numOfCartItems, cartId, totalCartPrice, products }
    } catch (error) {
        console.error("getUserCart error:", error);
        return { numOfCartItems: 0, cartId: null, totalCartPrice: 0, products: [] };
    }
}
