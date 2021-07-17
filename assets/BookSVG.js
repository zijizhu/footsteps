import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={146}
      height={146}
      viewBox="0 0 146 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M145.942 117.451v-12.847h-13.703V96.04h-4.568v-7.138h4.568V76.056H98.082v4.282h29.874v4.282H39.353v4.282h84.035v7.138H30.177a3.572 3.572 0 01-3.569-3.569c0-1.968 1.6-3.569 3.569-3.569h4.894V84.62h-4.894c-4.33 0-7.851 3.522-7.851 7.851 0 4.33 3.522 7.851 7.85 7.851h97.78v4.282H54.158v4.283h87.501v4.282H20.756c-6.69 0-12.134 5.443-12.134 12.133 0 6.691 5.443 12.133 12.134 12.133h100.858v-4.282H20.756c-4.33 0-7.851-3.522-7.851-7.851 0-4.329 3.522-7.851 7.85-7.851h116.337v7.137H42.167v4.283h94.925v4.282h-11.195v4.282h15.763v4.283H20.756c-9.052 0-16.416-7.364-16.416-16.416s7.364-16.415 16.416-16.415h29.12v-4.283h-19.7c-6.69 0-12.132-5.442-12.132-12.133 0-6.69 5.442-12.133 12.133-12.133H93.8v-4.282H30.177c-9.052 0-16.416 7.363-16.416 16.415 0 4.837 2.104 9.191 5.444 12.198-10.69.796-19.147 9.743-19.147 20.633C.058 136.715 9.343 146 20.756 146h125.186v-12.847h-4.568v-15.702h4.568z"
          fill="#000"
        />
        <Path d="M33.603 124.588h4.282v4.283h-4.282v-4.283z" fill="#000" />
        <Path
          d="M39.455 63.64l.954.636c.372.248 9.37 6.07 32.591 6.07 23.22 0 32.22-5.822 32.591-6.07l.954-.635V27.59l12.847-4.282v20.215c-3.291.934-5.71 3.965-5.71 7.551v10.706h15.702V51.075c0-3.586-2.419-6.617-5.71-7.551V21.88l7.485-2.495-22.487-7.495-1.354 4.062 10.299 3.433L73 34.258 28.383 19.386 73 4.514 103.255 14.6l1.354-4.062L73 0 14.841 19.386l24.614 8.205v36.05zm85.646-12.565V57.5h-7.137v-6.424a3.573 3.573 0 013.569-3.568c1.968 0 3.568 1.6 3.568 3.568zM43.738 29.018L73 38.773l29.262-9.755v16.776h-5.281v4.282h5.281v4.282h-9.278v4.283h9.278v2.581C99.503 62.566 90.625 66.064 73 66.064c-17.638 0-26.517-3.503-29.262-4.84V29.017z"
          fill="#E76F51"
        />
        <Path d="M25.038 124.588h4.282v4.283h-4.282v-4.283z" fill="#000" />
        <Path d="M84.42 54.358h4.282v4.283H84.42v-4.282z" fill="#E76F51" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h146v146H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent