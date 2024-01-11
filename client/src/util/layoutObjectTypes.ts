import {Orientations, Sizes} from "./constants";

type LayoutObjectType = {
    id: number,
    userId: number,
    type: string,
    properties: string
}

type LayoutObjectsType = {
    walls: number[][]
    beds: BedType[]
}

// TODO: integrate id into related files, currently not used
type BedType = {
    id: number,
    locX: number,
    locY: number,
    size: Sizes,
    orientation: Orientations
}

export type { LayoutObjectsType, BedType, LayoutObjectType };