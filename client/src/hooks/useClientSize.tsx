    import React from 'react'

const useClientSize = () => {
    const [dimensions, setDimensions] = React.useState({
        height: 0,
        width: 0
    });

    // console.log(dimensions)

    const setDimensionsFromNode = (node: any) => {
        if (node != null) {
            let computedStyle = getComputedStyle(node);
            let paddingX = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
            let paddingY = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
            setDimensions({height: node.clientHeight - paddingY, width: node.clientWidth - paddingX});
        }
    }

    // TODO: Can we figure out the type of any here?
    const canvasContainerRef = React.useCallback((node: any) => {
        setDimensionsFromNode(node);

        window.addEventListener('resize', () => {
            setDimensionsFromNode(node);
        });
    }, []);

    return {dimensions, canvasContainerRef}
}

export default useClientSize