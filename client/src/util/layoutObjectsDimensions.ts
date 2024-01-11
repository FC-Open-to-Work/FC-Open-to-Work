import {BedType} from "./layoutObjectTypes";
import {Orientations, Sizes} from "./constants";

const getBedDimensions = ({locX, locY, size, orientation}: BedType) => {
    const pillowWidth = 40;
    const pillowHeight = 20;

    let width = 0;
    let height = 0;
    let groupOffsetX = 0;
    let groupOffsetY = 0;
    let blanketWidth = 0;
    let blanketHeight = 0;
    let pillowX = 0;
    let pillowY;
    let blanketX;
    let blanketY;

    switch (size) {
        case Sizes.SINGLE:
            width = 75;
            height = 150;
            blanketWidth = 60;
            blanketHeight = 100;
            break;
        case Sizes.TWIN:
            width = 90;
            height = 150;
            blanketWidth = 75;
            blanketHeight = 100;
            break;
        case Sizes.FULL:
            width = 105;
            height = 155;
            blanketWidth = 90;
            blanketHeight = 105;
            break;
        case Sizes.QUEEN:
            width = 120;
            height = 160;
            blanketWidth = 105;
            blanketHeight = 110;
            break;
        case Sizes.KING:
            width = 135;
            height = 165;
            blanketWidth = 120;
            blanketHeight = 115;
            break;
    }

    switch (orientation) {
        case Orientations.UP:
            groupOffsetX = locX;
            groupOffsetY = locY;
            break;
        case Orientations.RIGHT:
            groupOffsetX = locX;
            groupOffsetY = locY + height;
            break;
        case Orientations.DOWN:
            groupOffsetX = locX + width;
            groupOffsetY = locY + height;
            break;
        case Orientations.LEFT:
            groupOffsetX = locX + width;
            groupOffsetY = locY;
            break;
    }

    switch (size) {
        case Sizes.SINGLE:
        case Sizes.TWIN:
        case Sizes.FULL:
            pillowX = locX + (width - pillowWidth) / 2;
            break;
        case Sizes.QUEEN:
        case Sizes.KING:
            pillowX = locX + (width / 2 - pillowWidth) / 2;
            break;
    }

    pillowY = locY + 5;
    blanketX = locX + (width - blanketWidth) / 2;
    blanketY = locY + 15 + pillowHeight;

    return {
        width,
        height,
        groupOffsetX,
        groupOffsetY,
        pillowWidth,
        pillowHeight,
        blanketWidth,
        blanketHeight,
        pillowX,
        pillowY,
        blanketX,
        blanketY
    };
}

export {getBedDimensions};