import {Orientations, Sizes} from "./constants";

type LayoutItemsType = {
    walls: number[][]
    beds: BedType[]
    lights: LightType[]
}

type BedType = {
    id: number,
    locX: number,
    locY: number,
    size: Sizes,
    orientation: Orientations
}

type LightType = {
    id: number,
    name: string,
    locX: number,
    locY: number,
    on: boolean
}

export type { LayoutItemsType, BedType, LightType };