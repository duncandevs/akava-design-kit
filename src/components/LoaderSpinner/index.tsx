import * as React from "react";
import { ColorRing } from "react-loader-spinner";

type LoaderSpinnerSizes = "giant" | "large" | "medium" | "small" | "tiny";
type LoaderSpinnerProps = {
    size?: LoaderSpinnerSizes
};
const sizeMap = {
    giant: { width: 56, height: 56 },
    large: { width: 48, height: 48 },
    medium: { width: 40, height: 40 },
    small: { width: 32, height: 32 },
    tiny: { width: 24, height: 24 },
};
const LoaderSpinner = ({ size="large" }:LoaderSpinnerProps) => {
    return <ColorRing colors={["#4E61F6","#4E61F6","#4E61F6","#4E61F6","#4E61F6"]} {...sizeMap[size]} />;
};
export default LoaderSpinner;