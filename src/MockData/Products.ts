export type imageType = {
    imageSrc: string;
    imageAlt?: string;
};

export type productsType = {
    id: number;
    name: string;
    price: number;
    description: string;
    Image: imageType;
    discount: number;
    rating?: number;
    quantity?: number;
    delivery?: string;
    condition?: string;
    shippingFee?: number | string;
    category?: string;
};

export const products: Array<productsType> = [];
