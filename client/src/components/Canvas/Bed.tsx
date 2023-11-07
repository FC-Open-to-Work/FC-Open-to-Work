import React from 'react';

import {BedType} from "../../util/layoutItemTypes";
import {Sizes} from "../../util/constants";
import {getBedDimensions} from "../../util/layoutItemsDimensions";

import {Group, Rect} from "react-konva";

// Size = SINGLE || TWIN || FULL || QUEEN || KING
// ORIENTATION = UP || DOWN || LEFT || RIGHT
// Note: origin is always in the top left corner of the bed
const Bed = ({locX, locY, size, orientation}: BedType) => {
    let {
        width,
        height,
        pillowWidth,
        pillowHeight,
        blanketWidth,
        blanketHeight,
        groupOffsetX,
        groupOffsetY,
        pillowX,
        pillowY,
        blanketX,
        blanketY
    } = getBedDimensions({locX, locY, size, orientation});

    return (
        <Group rotation={orientation}
               x={locX}
               y={locY}
               offsetX={groupOffsetX}
               offsetY={groupOffsetY}
        >
            <Rect x={locX}
                  y={locY}
                  width={width}
                  height={height}
                  fill="#6d747d"
                  shadowColor="black"
                  shadowBlur={3}
                  cornerRadius={2}
                  stroke="#575d64"
                  strokeWidth={1}
            />
            {size === Sizes.QUEEN || size === Sizes.KING ?
                <>
                    <Rect x={pillowX}
                          y={pillowY}
                          width={pillowWidth}
                          height={pillowHeight}
                          fill="#f0f8ff"
                          cornerRadius={3}
                          stroke="#575d64"
                          strokeWidth={1}
                    />
                    <Rect x={pillowX + width / 2}
                          y={pillowY}
                          width={pillowWidth}
                          height={pillowHeight}
                          fill="#f0f8ff"
                          cornerRadius={3}
                          stroke="#575d64"
                          strokeWidth={1}
                    />
                </>
                : <Rect x={pillowX}
                        y={pillowY}
                        width={pillowWidth}
                        height={pillowHeight}
                        fill="#f0f8ff"
                        cornerRadius={3}
                        stroke="#575d64"
                        strokeWidth={1}
                />}
            <Rect x={blanketX}
                  y={blanketY}
                  width={blanketWidth}
                  height={blanketHeight}
                  fill="#f0f8ff"
                  cornerRadius={2}
                  stroke="#575d64"
                  strokeWidth={1}
            />
        </Group>
    );
};

export default Bed;