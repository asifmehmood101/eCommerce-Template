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
    discountedPrice: number;
    quantity?: number;
    delivery?: string;
    condition?: string;
    shippingFee?: number | string;
    category?: string;
};

export const products: Array<productsType> = [];
