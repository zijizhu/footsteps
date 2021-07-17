import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={175}
      height={175}
      viewBox="0 0 175 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M51.953 82.031h-5.469a2.734 2.734 0 000 5.469h5.47a2.734 2.734 0 000-5.469zM73.828 87.5h5.469a2.734 2.734 0 000-5.469h-5.469a2.734 2.734 0 000 5.469zM63.031 96.568a2.735 2.735 0 005.188-1.73l-2.734-8.203a2.735 2.735 0 00-5.188 1.73l2.734 8.203zM49.219 92.969a2.734 2.734 0 100-5.469 2.734 2.734 0 000 5.469zM76.563 92.969a2.734 2.734 0 100-5.469 2.734 2.734 0 000 5.469zM60.156 109.375h5.469a2.734 2.734 0 100-5.469h-5.469a2.733 2.733 0 00-1.933 4.668 2.733 2.733 0 001.933.801z"
        fill="#000"
      />
      <Path
        d="M100.771 129.142a40.08 40.08 0 00-18.835-6.016 8.161 8.161 0 00-2.146-2.771l-3.954-3.296a27.435 27.435 0 0013.843-18.621h.555a10.934 10.934 0 005.47-20.404v-8.542a12.071 12.071 0 00-12.07-12.07h-.287a6.133 6.133 0 00-1.8-4.35l-1.753-1.754a25.84 25.84 0 00-36.541 0l-7.237 7.236a.664.664 0 01-.938 0 6.132 6.132 0 00-10.469 4.337v2.402a16.629 16.629 0 005.72 12.596 10.937 10.937 0 005.218 20.549h.556a27.426 27.426 0 0013.425 18.388 7.747 7.747 0 00-2.633 6.198c-.137.01-.273.023-.411.023h-.221A40.1 40.1 0 007.362 153.42a63.458 63.458 0 00-1.893 15.376v.735h5.468v-.735c.001-4.736.582-9.455 1.73-14.05a34.448 34.448 0 0114.677-20.594v13.504a2.736 2.736 0 003.75 2.539l3.638-1.455-9.628 13.754 4.48 3.137 17.71-25.3 16.917 9.667a2.73 2.73 0 011.325 2.914 2.734 2.734 0 01-.448 1.038l-7.966 11.268 4.466 3.157 7.965-11.268a8.185 8.185 0 00-.25-9.798l11.799-15.731a8.177 8.177 0 001.394-2.931c.501.043 1 .099 1.499.164l-5.518 23.909a74.875 74.875 0 00-1.915 16.811h5.47c0-5.244.595-10.471 1.774-15.581l1.713-7.423 9.169 3.668a2.732 2.732 0 003.75-2.539v-13.504a34.445 34.445 0 0114.676 20.594 58.02 58.02 0 011.73 14.05v.735h5.468v-.735c0-5.183-.636-10.347-1.892-15.376a39.908 39.908 0 00-17.649-24.278zM90.234 92.969V82.03a5.469 5.469 0 010 10.938zM30.078 62.89a.664.664 0 011.133-.47 6.14 6.14 0 008.672 0l7.236-7.236a20.37 20.37 0 0128.808 0l1.754 1.754a.684.684 0 010 .966l-3.052 3.052a2.734 2.734 0 003.867 3.867l1.934-1.933h3.203a6.601 6.601 0 016.601 6.6v7.072h-3.672a8.147 8.147 0 01-5.8-2.403l-7.735-7.734a2.735 2.735 0 00-3.867 0 34.38 34.38 0 01-24.472 10.136h-3.34a11.269 11.269 0 01-11.27-11.269v-2.402zm0 24.609a5.476 5.476 0 015.469-5.469V92.97a5.475 5.475 0 01-5.469-5.469zm10.938 5.469V82.023c.11.002.22.008.331.008h3.341a39.783 39.783 0 0026.341-9.87l5.865 5.865a13.564 13.564 0 007.872 3.885V92.97a21.917 21.917 0 01-13.642 20.271 8.2 8.2 0 00-11.15 2.417l-.576.864-.463-.309c-.51-.34-1.06-.62-1.636-.832a2.727 2.727 0 00-1.7-1.781 21.91 21.91 0 01-14.583-20.63zm5.468 35.547c.77-.001 1.538-.082 2.29-.244l.024.047-4.57 6.855-.732 1.045-1.71-7.409a34.54 34.54 0 014.477-.294h.22zm-13.672 2.723a34.684 34.684 0 013.623-1.297l2.583 11.193-6.206 2.482v-12.378zm43.915-2.942l-11.841 15.788-14.501-8.287 3.843-5.766a2.731 2.731 0 00.17-2.739l-1.804-3.61a2.286 2.286 0 01.53-2.732 2.278 2.278 0 012.778-.189l2.737 1.826a2.736 2.736 0 003.792-.759l2.093-3.139a2.738 2.738 0 013.019-1.115c.37.105.712.286 1.007.531l7.74 6.45a2.732 2.732 0 01.437 3.741zm10.036 12.838l2.583-11.194c1.23.365 2.44.798 3.623 1.298v12.378l-6.206-2.482zM138.086 5.469h-8.203a31.453 31.453 0 00-27.255 47.14l-4.05 12.151a2.733 2.733 0 003.043 3.562l15.628-2.603a31.196 31.196 0 0012.634 2.64h8.203a31.444 31.444 0 100-62.89zm18.369 49.814a25.808 25.808 0 01-18.369 7.608h-8.203a25.776 25.776 0 01-11.093-2.48 2.735 2.735 0 00-1.617-.224l-11.971 1.994 3.014-9.042a2.725 2.725 0 00-.286-2.33 25.982 25.982 0 0121.953-39.87h8.203a25.98 25.98 0 0118.369 44.344z"
        fill="#000"
      />
      <Path
        d="M133.455 20a9.298 9.298 0 00-3.655.739 9.489 9.489 0 00-3.095 2.122l-.037.04-.984 1.059A6.037 6.037 0 00124 28.176a6.03 6.03 0 001.717 4.203 5.757 5.757 0 004.115 1.735 5.758 5.758 0 004.111-1.745l1-1.023a2.169 2.169 0 00.616-1.523 2.193 2.193 0 00-.616-1.524 2.093 2.093 0 00-1.488-.63 2.09 2.09 0 00-1.488.63l-1 1.024a1.614 1.614 0 01-.599.388 1.58 1.58 0 01-1.376-.14 1.624 1.624 0 01-.512-.5 1.69 1.69 0 01.202-2.087l.037-.039.98-1.055a5.275 5.275 0 013.775-1.584 5.275 5.275 0 013.764 1.609 5.527 5.527 0 011.554 3.86 5.526 5.526 0 01-1.564 3.856l-2.285 2.338a12.492 12.492 0 00-2.665 4.07 12.727 12.727 0 00-.928 4.807c0 .571.222 1.12.617 1.523.394.404.93.631 1.488.631a2.08 2.08 0 001.488-.63c.395-.405.616-.953.616-1.524a8.358 8.358 0 01.61-3.157c.405-1 1-1.91 1.75-2.673l2.285-2.34a9.848 9.848 0 002.613-5.001 9.98 9.98 0 00-.544-5.644 9.717 9.717 0 00-3.515-4.385A9.39 9.39 0 00133.455 20zM133.5 54c1.381 0 2.5-.895 2.5-2s-1.119-2-2.5-2-2.5.895-2.5 2 1.119 2 2.5 2z"
        fill="#E76F51"
      />
    </Svg>
  )
}

export default SvgComponent