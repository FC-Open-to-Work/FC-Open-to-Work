type LayoutDeviceType = {
    id: number,
    userId: number,
    type: string,
    properties: string
    on: boolean,
    value: number
}

type LayoutDevicesType = {
    lights: LightType[]
}

// TODO: integrate value into related files, currently not used
type LightType = {
    id: number,
    name: string,
    locX: number,
    locY: number,
    on: boolean,
    value: number
}

export type { LayoutDeviceType, LayoutDevicesType, LightType };