import {Orientations, Sizes} from "./constants";

type LayoutItemsType = {
    walls: number[][]
    beds: BedType[]
}

type BedType = {
    locX: number,
    locY: number,
    size: Sizes,
    orientation: Orientations
}

export type { LayoutItemsType, BedType };