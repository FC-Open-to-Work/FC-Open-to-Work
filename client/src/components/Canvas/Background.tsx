import React from 'react';
import {Layer, Rect} from "react-konva";

interface BackgroundProps {
    backgroundLoaded: boolean,
    background: HTMLImageElement
}

const Background = ({backgroundLoaded, background}: BackgroundProps) => {
    return (
        <Layer>
            <Rect
                x={0}
                y={0}
                width={1677}
                height={1130}
                fill="#dbeafe"
                shadowBlur={1}
                opacity={0.99}
            />
            {backgroundLoaded &&
                <Rect
                    x={0}
                    y={0}
                    width={1677}
                    height={1130}
                    fillPatternImage={background}
                    opacity={0.075}
                />
            }
        </Layer>
    );
};

export default Background;