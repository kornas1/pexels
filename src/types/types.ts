import { Action } from "redux";

export interface PhotoMain{
    data: PhotoTypes[],
    per_page: number,
    total_results: number,
    page: number,
    next_page: null | number,
    loading: boolean,
}

export interface ActionTypes{
    next_page: number ,
    page: number,
    per_page: number,
    photos: PhotoTypes[],
    total_results: number,
}


export interface TypesActions{
    success: boolean,
    results: PhotoTypes[]
}

export interface TypeGetMain{
    type: string,
}

export interface ActionTypesCreator{
    type: string;
    payload: ActionTypes;
}
export interface ActionTypesSearch{
    type: string;
    payload: string;
}

export interface ActionTypesMain{
    type: string;
    payload?: ActionTypes;
}

export interface SearchTypes{
    search: string
}

export interface PhotoTypes{
    alt: string,
    avg_color: string,
    height: number,
    id: number,
    liked: boolean,
    photographer: string,
    photographer_id: number,
    photographer_url: string,
    src: {
        landscape: string,
        large: string,
        large2x: string,
        medium: string,
        original: string,
        portrait: string,
        small: string,
        tiny: string,
    },
    url: string,
    width: number,
}
export type Response = {
    success: boolean;
    results?: PhotoTypes[];
  }

export type GetImages = (data: FormData) => Promise<Response>