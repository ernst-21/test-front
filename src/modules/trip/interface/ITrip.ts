export interface ITrip {
    id: number;
    picture?: string;
    destination?: {
        id: number;
        name: string;
    },
    title?: string;
    price?: number;
    duration?: number;
    highlight?: boolean;
    tag?: "combined" | "group";
}