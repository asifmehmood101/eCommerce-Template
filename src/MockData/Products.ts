export type productsType = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
    discountedPrice: number;
    delivery: string;
    condition: string;
    shippingFee: number | string;
    category: string;
};

export const products: Array<productsType> = [];
