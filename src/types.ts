import { Action } from "redux";

export interface PhotoMain{
    data: PhotoTypes[],
    per_page: number,
    total_results: number,
    page: number,
    next_page: null | number,
    loading: boolean,
}

interface ActionTypes{
    next_page: number ,
    page: number,
    per_page: number,
    photos: PhotoTypes[],
    total_results: number,
}

export interface ActionTypesCreator{
    type: string;
    payload: ActionTypes;
}
export interface ActionTypesSearch{
    type: string;
    payload: string;
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