import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: SvgProps) {
    return (
        <Svg
            width={63}
            height={63}
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)" fill="#fff">
                <Path d="M37.813 15.75h21a3.942 3.942 0 003.937-3.938V3.939A3.942 3.942 0 0058.812 0h-21a3.942 3.942 0 00-3.937 3.938v7.874a3.942 3.942 0 003.938 3.938zm21-13.125c.724 0 1.312.588 1.312 1.313v7.874c0 .725-.588 1.313-1.313 1.313h-21a1.313 1.313 0 01-1.312-1.313V3.939c0-.725.588-1.313 1.313-1.313h21zM37.813 39.375h21a3.942 3.942 0 003.937-3.938v-7.874a3.942 3.942 0 00-3.938-3.938h-21a3.942 3.942 0 00-3.937 3.938v7.875a3.942 3.942 0 003.938 3.937zm21-13.125c.724 0 1.312.588 1.312 1.313v7.875c0 .724-.588 1.312-1.313 1.312h-21a1.313 1.313 0 01-1.312-1.313v-7.874c0-.725.588-1.313 1.313-1.313h21zM37.813 63h21a3.942 3.942 0 003.937-3.938v-7.874a3.942 3.942 0 00-3.938-3.938h-21a3.942 3.942 0 00-3.937 3.938v7.874A3.942 3.942 0 0037.813 63zm21-13.125c.724 0 1.312.588 1.312 1.313v7.874c0 .725-.588 1.313-1.313 1.313h-21a1.313 1.313 0 01-1.312-1.313v-7.874c0-.725.588-1.313 1.313-1.313h21zM3.938 63h21a3.942 3.942 0 003.937-3.938V3.938A3.942 3.942 0 0024.937 0h-21A3.942 3.942 0 000 3.938v55.124A3.942 3.942 0 003.938 63zm21-60.375c.724 0 1.312.588 1.312 1.313v55.124c0 .725-.588 1.313-1.313 1.313h-21a1.313 1.313 0 01-1.312-1.313V3.938c0-.725.588-1.313 1.313-1.313h21z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path
                        fill="#fff"
                        transform="matrix(-1 0 0 1 63 0)"
                        d="M0 0h63v63H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent