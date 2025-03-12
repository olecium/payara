export interface IFeature{
    description: string;
    enabled: boolean;
}

export interface IPlan{
    title: string;
    description: string;
    price: number;
    focus?: boolean;
    features: IFeature[];
}