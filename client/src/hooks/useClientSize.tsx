import React from 'react'

const useClientSize = () => {
    const [dimensions, setDimensions] = React.useState({
        height: 0,
        width: 0
    });

    console.log(dimensions)

    // TODO: Can we figure out the type of any here?
    const canvasContainerRef = React.useCallback((node: any) => {
        if (node != null) {
            setDimensions({height: node.parentNode.offsetHeight, width: node.parentNode.offsetWidth});
        }

        // TODO: Dynamic rescaling kind of buggy
        window.addEventListener('resize', () => {
            if (node != null) {
                setDimensions({height: node.parentNode.offsetHeight, width: node.parentNode.offsetWidth});
            }
        });
    }, []);

    return {dimensions, canvasContainerRef}
}

export default useClientSize