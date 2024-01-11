import React from 'react';

import {BedType} from "../../util/layoutObjectTypes";
import {Sizes} from "../../util/constants";
import {getBedDimensions} from "../../util/layoutObjectsDimensions";

import {Group, Rect} from "react-konva";

// Size = SINGLE || TWIN || FULL || QUEEN || KING
// ORIENTATION = UP || DOWN || LEFT || RIGHT
// Note: origin is always in the top left corner of the bed
const Bed = ({id, locX, locY, size, orientation}: BedType) => {
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
    } = getBedDimensions({id, locX, locY, size, orientation});

    return (
        <Group rotation={orientation}
               x={locX}
               y={locY}
               offsetX={groupOffsetX}
               offsetY={groupOffsetY}
               listening={false}
               perfectDrawEnabled={false}
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
                  listening={false}
                  perfectDrawEnabled={false}
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
                          listening={false}
                          perfectDrawEnabled={false}
                    />
                    <Rect x={pillowX + width / 2}
                          y={pillowY}
                          width={pillowWidth}
                          height={pillowHeight}
                          fill="#f0f8ff"
                          cornerRadius={3}
                          stroke="#575d64"
                          strokeWidth={1}
                          listening={false}
                          perfectDrawEnabled={false}
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
                        listening={false}
                        perfectDrawEnabled={false}
                />}
            <Rect x={blanketX}
                  y={blanketY}
                  width={blanketWidth}
                  height={blanketHeight}
                  fill="#f0f8ff"
                  cornerRadius={2}
                  stroke="#575d64"
                  strokeWidth={1}
                  listening={false}
                  perfectDrawEnabled={false}
            />
        </Group>
    );
};

export default Bed;