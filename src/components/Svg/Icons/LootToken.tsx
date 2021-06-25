import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g id="surface1">
        <path
          fill="rgb(100%,100%,100%)"
          d="M 16.0625 0.191406 L 15.65625 2.878906 L 15.378906 3.929688 L 14.398438 4.1875 L 11.777344 4.609375 L 11.777344 4.671875 L 14.398438 5.132812 L 15.386719 5.351562 L 15.597656 6.273438 L 16 8.894531 L 16.128906 8.894531 L 16.703125 5.246094 C 17.84375 5.246094 19.179688 4.945312 20.289062 4.671875 L 20.289062 4.609375 L 17.664062 4.199219 L 16.761719 3.941406 L 16.539062 3.007812 Z M 16.0625 0.191406 "
        />
        <path
          fill="rgb(0%,21.176471%,41.960784%)"
          d="M 16.257812 1.214844 C 16.328125 1.753906 16.351562 2.726562 16.640625 3.179688 C 17.335938 4.28125 19.296875 4.582031 20.480469 4.609375 L 20.480469 4.671875 L 19.199219 4.863281 C 19.5 5.40625 20.414062 5.824219 20.929688 6.164062 C 22.304688 7.085938 23.828125 7.949219 25.089844 9.023438 C 24.46875 9.292969 23.886719 9.675781 23.296875 10.007812 C 23.085938 10.132812 22.785156 10.386719 22.527344 10.375 C 22.015625 10.347656 21.28125 9.585938 20.863281 9.300781 C 19.480469 8.359375 18.085938 7.117188 16.574219 6.398438 C 16.488281 6.679688 16.308594 7.246094 16.421875 7.53125 C 16.601562 7.960938 17.484375 8.34375 17.855469 8.613281 C 18.726562 9.230469 19.601562 9.824219 20.480469 10.433594 C 20.882812 10.707031 21.476562 10.980469 21.785156 11.359375 C 22.097656 11.75 21.886719 12.890625 21.886719 13.375 C 21.886719 14.894531 21.953125 16.402344 21.953125 17.921875 C 21.953125 18.433594 22.167969 19.230469 21.976562 19.707031 C 21.867188 19.972656 21.53125 20.148438 21.3125 20.3125 C 20.734375 20.734375 20.152344 21.144531 19.585938 21.574219 C 18.777344 22.183594 17.964844 22.769531 17.152344 23.367188 C 16.859375 23.585938 16.429688 24.039062 16.0625 24.113281 C 15.667969 24.191406 14.898438 23.40625 14.59375 23.175781 C 13.566406 22.414062 12.542969 21.652344 11.519531 20.890625 C 11.097656 20.570312 10.457031 20.261719 10.152344 19.828125 C 9.863281 19.425781 10.113281 18.40625 10.113281 17.921875 C 10.113281 16.269531 10.09375 14.503906 10.285156 12.863281 C 10.335938 12.433594 10.15625 11.761719 10.40625 11.398438 C 10.636719 11.066406 11.128906 10.824219 11.457031 10.605469 C 12.140625 10.144531 12.804688 9.652344 13.503906 9.214844 L 13.503906 9.089844 C 12.742188 8.671875 12.359375 9.261719 11.710938 9.664062 L 12.414062 8.640625 L 10.496094 9.882812 L 9.664062 10.375 L 8.894531 10.007812 L 7.105469 8.960938 L 13.121094 4.992188 L 13.121094 4.929688 L 11.648438 4.671875 L 11.648438 4.609375 C 12.789062 4.558594 14.804688 4.359375 15.488281 3.308594 C 15.800781 2.828125 15.769531 1.902344 15.871094 1.34375 C 14.96875 1.773438 14.144531 2.457031 13.3125 3.007812 L 8.511719 6.207031 L 6.527344 7.53125 C 6.273438 7.699219 5.855469 7.878906 5.695312 8.148438 C 5.285156 8.832031 5.566406 10.285156 5.492188 11.070312 C 5.222656 13.9375 5.246094 16.839844 5.050781 19.710938 C 4.992188 20.542969 4.980469 21.375 4.921875 22.207031 C 4.894531 22.554688 4.753906 23.027344 4.929688 23.355469 C 5.234375 23.921875 6.207031 24.421875 6.71875 24.804688 C 8.132812 25.875 9.554688 26.9375 10.945312 28.03125 C 12.148438 28.980469 13.371094 29.902344 14.59375 30.824219 C 14.910156 31.066406 15.527344 31.742188 15.9375 31.742188 C 16.378906 31.742188 17.011719 31.035156 17.34375 30.777344 C 18.515625 29.886719 19.6875 29.003906 20.863281 28.121094 C 22.335938 27.015625 23.808594 25.902344 25.28125 24.792969 C 25.792969 24.410156 26.765625 23.921875 27.070312 23.355469 C 27.265625 22.996094 27.136719 22.335938 27.089844 21.953125 C 27.007812 21.253906 27.007812 20.480469 27.007812 19.777344 C 27 16.953125 26.886719 14.078125 26.695312 11.265625 C 26.648438 10.59375 26.625 9.886719 26.625 9.214844 C 26.625 8.921875 26.707031 8.488281 26.585938 8.210938 C 26.464844 7.9375 26.027344 7.757812 25.792969 7.597656 C 25.144531 7.167969 24.519531 6.71875 23.871094 6.292969 C 22.335938 5.265625 20.789062 4.25 19.265625 3.199219 C 18.296875 2.535156 17.320312 1.714844 16.257812 1.214844 Z M 16.257812 1.214844 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 16.257812 1.40625 L 16.257812 1.601562 L 16.320312 1.601562 Z M 16.257812 1.40625 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 15.828125 1.515625 L 15.851562 1.554688 Z M 15.828125 1.515625 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 15.808594 1.601562 L 15.808594 1.792969 L 15.871094 1.792969 Z M 15.808594 1.601562 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.339844 1.707031 L 16.363281 1.746094 Z M 16.339844 1.707031 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 16.320312 1.792969 L 16.320312 1.984375 L 16.382812 1.984375 Z M 16.320312 1.792969 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 15.761719 1.902344 L 15.789062 1.9375 Z M 15.761719 1.902344 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 15.742188 1.984375 L 15.742188 2.175781 L 15.808594 2.175781 Z M 15.742188 1.984375 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.402344 2.09375 L 16.429688 2.132812 Z M 16.402344 2.09375 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 16.382812 2.175781 L 16.382812 2.367188 L 16.449219 2.367188 Z M 16.382812 2.175781 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 15.699219 2.285156 L 15.726562 2.324219 Z M 15.699219 2.285156 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 15.679688 2.367188 L 15.679688 2.558594 L 15.742188 2.558594 Z M 15.679688 2.367188 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.46875 2.476562 L 16.492188 2.515625 Z M 16.46875 2.476562 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 16.449219 2.558594 L 16.449219 2.753906 L 16.511719 2.753906 Z M 16.449219 2.558594 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 15.636719 2.667969 L 15.660156 2.707031 Z M 15.636719 2.667969 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 15.617188 2.753906 L 15.617188 2.945312 L 15.679688 2.945312 Z M 15.617188 2.753906 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 16.511719 2.878906 L 16.511719 3.070312 L 16.574219 3.070312 Z M 16.511719 2.878906 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 15.570312 3.054688 L 15.597656 3.089844 Z M 15.570312 3.054688 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 15.550781 3.136719 L 15.550781 3.328125 L 15.617188 3.328125 Z M 15.550781 3.136719 "
        />
        <path
          fill="rgb(7.843137%,76.862745%,95.686275%)"
          d="M 16.574219 3.199219 C 16.753906 4.113281 17.121094 4.21875 18.046875 4.222656 L 18.046875 4.160156 Z M 16.574219 3.199219 "
        />
        <path
          fill="rgb(28.235294%,98.431373%,100%)"
          d="M 15.488281 3.328125 L 14.273438 4.222656 C 14.808594 4.121094 15.738281 4.132812 15.488281 3.328125 Z M 15.488281 3.328125 "
        />
        <path
          fill="rgb(59.607843%,89.803922%,98.039216%)"
          d="M 16.574219 3.328125 L 16.574219 3.519531 L 16.640625 3.519531 Z M 16.574219 3.328125 "
        />
        <path
          fill="rgb(48.235294%,87.058824%,97.647059%)"
          d="M 16.640625 3.648438 L 16.640625 3.839844 L 16.703125 3.839844 Z M 16.640625 3.648438 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 13.933594 4.242188 L 13.972656 4.269531 Z M 13.933594 4.242188 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 14.0625 4.242188 L 14.097656 4.269531 Z M 14.0625 4.242188 "
        />
        <path
          fill="rgb(59.607843%,89.803922%,98.039216%)"
          d="M 18.027344 4.242188 L 18.066406 4.269531 Z M 18.027344 4.242188 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 18.15625 4.242188 L 18.195312 4.269531 Z M 18.15625 4.242188 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 13.546875 4.308594 L 13.585938 4.332031 Z M 13.546875 4.308594 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 13.632812 4.289062 L 13.632812 4.351562 L 13.824219 4.351562 Z M 13.632812 4.289062 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 18.367188 4.289062 L 18.367188 4.351562 L 18.558594 4.351562 Z M 18.367188 4.289062 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 13.164062 4.371094 L 13.203125 4.398438 Z M 13.164062 4.371094 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 13.246094 4.351562 L 13.246094 4.414062 L 13.441406 4.414062 Z M 13.246094 4.351562 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 18.753906 4.351562 L 18.753906 4.414062 L 18.945312 4.414062 Z M 18.753906 4.351562 "
        />
        <path
          fill="rgb(37.647059%,50.588235%,63.921569%)"
          d="M 12.734375 4.414062 L 12.734375 4.480469 L 12.929688 4.480469 Z M 12.734375 4.414062 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 19.136719 4.414062 L 19.136719 4.480469 L 19.328125 4.480469 Z M 19.136719 4.414062 "
        />
        <path
          fill="rgb(37.647059%,50.588235%,63.921569%)"
          d="M 12.351562 4.480469 L 12.351562 4.542969 L 12.542969 4.542969 Z M 12.351562 4.480469 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 19.519531 4.480469 L 19.519531 4.542969 L 19.710938 4.542969 Z M 19.519531 4.480469 "
        />
        <path
          fill="rgb(37.647059%,50.588235%,63.921569%)"
          d="M 11.96875 4.542969 L 11.96875 4.609375 L 12.160156 4.609375 Z M 11.96875 4.542969 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 19.902344 4.542969 L 19.902344 4.609375 L 20.097656 4.609375 Z M 19.902344 4.542969 "
        />
        <path
          fill="rgb(37.647059%,50.588235%,63.921569%)"
          d="M 11.648438 4.609375 L 11.648438 4.671875 L 11.902344 4.734375 L 11.902344 4.671875 Z M 11.648438 4.609375 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 20.160156 4.671875 L 20.160156 4.734375 L 20.480469 4.671875 Z M 20.160156 4.671875 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 12.140625 4.753906 L 12.179688 4.78125 Z M 12.140625 4.753906 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 12.222656 4.734375 L 12.222656 4.800781 L 12.414062 4.800781 Z M 12.222656 4.734375 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 19.777344 4.734375 L 19.777344 4.800781 L 19.96875 4.800781 Z M 19.777344 4.734375 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 12.523438 4.820312 L 12.5625 4.84375 Z M 12.523438 4.820312 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 12.609375 4.800781 L 12.609375 4.863281 L 12.800781 4.863281 Z M 12.609375 4.800781 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 19.390625 4.800781 L 19.390625 4.863281 L 19.585938 4.863281 Z M 19.390625 4.800781 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 12.910156 4.882812 L 12.945312 4.910156 Z M 12.910156 4.882812 "
        />
        <path
          fill="rgb(68.627451%,75.294118%,81.960784%)"
          d="M 13.035156 4.882812 L 13.074219 4.910156 Z M 13.035156 4.882812 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 19.117188 4.882812 L 19.15625 4.910156 Z M 19.117188 4.882812 "
        />
        <path
          fill="rgb(28.235294%,98.431373%,100%)"
          d="M 7.105469 8.960938 L 8.894531 10.046875 L 9.664062 10.398438 L 10.433594 9.976562 L 11.902344 8.980469 L 12.542969 8.433594 L 11.777344 7.167969 C 12.082031 7.390625 12.59375 7.941406 12.992188 7.949219 C 13.402344 7.949219 13.976562 7.359375 14.273438 7.105469 L 14.144531 7.425781 C 14.507812 7.21875 15.425781 6.777344 15.570312 6.378906 C 15.972656 5.253906 14.816406 5.195312 14.078125 5.070312 C 13.792969 5.023438 13.40625 4.890625 13.121094 4.972656 C 12.460938 5.164062 11.769531 5.832031 11.199219 6.207031 C 9.832031 7.125 8.46875 8.039062 7.105469 8.960938 Z M 7.105469 8.960938 "
        />
        <path
          fill="rgb(7.843137%,76.862745%,95.686275%)"
          d="M 16.703125 5.246094 C 16.679688 5.554688 16.488281 6.097656 16.640625 6.378906 C 16.863281 6.769531 17.554688 7.070312 17.921875 7.316406 C 18.96875 8.03125 20.027344 8.742188 21.054688 9.476562 C 21.421875 9.742188 22.066406 10.386719 22.527344 10.398438 C 22.808594 10.40625 23.125 10.144531 23.359375 10.007812 C 23.9375 9.683594 24.523438 9.371094 25.089844 9.023438 L 23.742188 8.039062 L 20.734375 5.996094 L 19.070312 4.945312 Z M 16.703125 5.246094 "
        />
        <path
          fill="rgb(42.352941%,85.490196%,97.254902%)"
          d="M 17.535156 5.121094 L 17.535156 5.183594 L 17.726562 5.183594 Z M 16.574219 5.886719 L 16.574219 6.078125 L 16.640625 6.078125 L 16.574219 5.886719 L 17.535156 5.121094 Z M 16.574219 5.886719 "
        />
        <path
          fill="rgb(54.117647%,88.627451%,98.039216%)"
          d="M 16.53125 6.253906 L 16.558594 6.292969 Z M 16.53125 6.253906 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.53125 6.378906 L 16.558594 6.417969 Z M 16.53125 6.378906 "
        />
        <path
          fill="rgb(0%,21.176471%,41.960784%)"
          d="M 15.617188 6.464844 C 15.265625 6.597656 14.964844 6.839844 14.65625 7.058594 C 14.328125 7.28125 12.730469 8.523438 13.773438 8.875 C 14.042969 8.964844 14.457031 8.558594 14.65625 8.410156 C 14.964844 8.191406 15.636719 7.917969 15.761719 7.539062 C 15.859375 7.25 15.6875 6.753906 15.617188 6.464844 Z M 15.617188 6.464844 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 15.636719 6.507812 L 15.660156 6.546875 Z M 15.636719 6.507812 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 16.46875 6.636719 L 16.492188 6.675781 Z M 16.46875 6.636719 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.46875 6.765625 L 16.492188 6.804688 Z M 16.46875 6.765625 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 15.679688 6.785156 L 15.679688 6.976562 L 15.742188 6.976562 Z M 15.679688 6.785156 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 16.402344 7.019531 L 16.429688 7.058594 Z M 16.402344 7.019531 "
        />
        <path
          fill="rgb(68.627451%,99.215686%,100%)"
          d="M 14.207031 7.105469 L 14.144531 7.296875 Z M 14.207031 7.105469 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 16.402344 7.148438 L 16.429688 7.1875 Z M 16.402344 7.148438 "
        />
        <path
          fill="rgb(100%,100%,100%)"
          d="M 11.777344 7.167969 L 12.503906 8.382812 L 11.839844 9.535156 L 12.992188 8.875 L 14.207031 9.601562 L 13.476562 8.382812 L 14.144531 7.230469 L 12.992188 7.910156 Z M 11.777344 7.167969 "
        />
        <path
          fill="rgb(62.352941%,70.588235%,78.431373%)"
          d="M 15.742188 7.167969 L 15.742188 7.359375 L 15.808594 7.359375 Z M 15.742188 7.167969 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 16.320312 7.359375 L 16.320312 7.550781 L 16.382812 7.550781 Z M 16.320312 7.359375 "
        />
        <path
          fill="rgb(65.490196%,91.372549%,98.431373%)"
          d="M 15.808594 7.550781 L 15.808594 7.742188 L 15.871094 7.742188 Z M 15.808594 7.550781 "
        />
        <path
          fill="rgb(7.843137%,76.862745%,95.686275%)"
          d="M 16.320312 7.550781 L 16.128906 9.089844 L 16.0625 9.089844 L 15.808594 7.617188 L 13.761719 8.960938 L 14.207031 9.601562 C 14.007812 9.476562 13.753906 9.203125 13.503906 9.230469 C 13.242188 9.246094 12.945312 9.542969 12.734375 9.683594 C 12.152344 10.074219 11.578125 10.464844 11.007812 10.875 C 10.765625 11.046875 10.433594 11.195312 10.375 11.519531 C 10.246094 12.351562 10.324219 13.242188 10.304688 14.078125 C 10.273438 15.25 10.175781 16.429688 10.175781 17.601562 C 10.175781 18.238281 9.902344 19.226562 10.152344 19.828125 C 10.34375 20.292969 11.1875 20.683594 11.585938 20.984375 C 12.542969 21.703125 13.503906 22.414062 14.464844 23.128906 C 14.875 23.4375 15.386719 23.960938 15.871094 24.128906 C 16.289062 24.269531 17.03125 23.507812 17.34375 23.269531 C 18.488281 22.417969 19.648438 21.574219 20.800781 20.730469 C 21.152344 20.46875 21.90625 20.128906 21.945312 19.648438 C 22.125 17.691406 21.875 15.597656 21.824219 13.632812 C 21.8125 13.03125 22.0625 11.867188 21.761719 11.339844 C 21.503906 10.886719 20.703125 10.546875 20.289062 10.246094 C 19.035156 9.355469 17.707031 8.210938 16.320312 7.550781 Z M 16.320312 7.550781 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 13.824219 7.679688 L 13.886719 7.742188 Z M 13.824219 7.679688 "
        />
        <path
          fill="rgb(59.607843%,89.803922%,98.039216%)"
          d="M 16.257812 7.742188 L 16.257812 7.9375 L 16.320312 7.9375 Z M 16.257812 7.742188 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 13.695312 7.871094 L 13.761719 7.9375 Z M 13.695312 7.871094 "
        />
        <path
          fill="rgb(65.490196%,91.372549%,98.431373%)"
          d="M 15.871094 7.9375 L 15.871094 8.128906 L 15.9375 8.128906 Z M 15.871094 7.9375 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 13.503906 8.128906 L 13.566406 8.191406 Z M 13.503906 8.128906 "
        />
        <path
          fill="rgb(59.607843%,89.803922%,98.039216%)"
          d="M 16.191406 8.128906 L 16.191406 8.320312 L 16.257812 8.320312 Z M 16.191406 8.128906 "
        />
        <path
          fill="rgb(65.490196%,91.372549%,98.431373%)"
          d="M 15.9375 8.320312 L 15.9375 8.511719 L 16 8.511719 Z M 15.9375 8.320312 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 13.441406 8.511719 L 13.503906 8.574219 Z M 13.441406 8.511719 "
        />
        <path
          fill="rgb(65.490196%,91.372549%,98.431373%)"
          d="M 16.128906 8.511719 L 16.128906 8.703125 L 16.191406 8.703125 Z M 16.128906 8.511719 "
        />
        <path
          fill="rgb(14.117647%,35.686275%,52.941176%)"
          d="M 12.414062 8.574219 L 12.480469 8.640625 Z M 12.414062 8.574219 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 12.351562 8.703125 L 12.414062 8.769531 Z M 12.351562 8.703125 "
        />
        <path
          fill="rgb(25.098039%,40.784314%,56.470588%)"
          d="M 12.972656 8.789062 L 13.011719 8.8125 Z M 12.972656 8.789062 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 12.734375 8.894531 L 12.800781 8.960938 Z M 12.734375 8.894531 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 13.183594 8.894531 L 13.246094 8.960938 Z M 13.183594 8.894531 "
        />
        <path
          fill="rgb(65.490196%,91.372549%,98.431373%)"
          d="M 16.0625 8.894531 L 16.0625 9.089844 L 16.128906 9.089844 Z M 16.0625 8.894531 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 13.375 9.023438 L 13.441406 9.089844 Z M 13.375 9.023438 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 12.480469 9.089844 L 12.542969 9.152344 Z M 12.480469 9.089844 "
        />
        <path
          fill="rgb(50.196078%,60.784314%,70.980392%)"
          d="M 12.03125 9.152344 L 12.097656 9.214844 Z M 12.03125 9.152344 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 7.039062 9.214844 L 7.039062 9.792969 L 7.105469 9.792969 L 7.167969 9.214844 Z M 7.039062 9.214844 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 12.289062 9.214844 L 12.351562 9.28125 Z M 12.289062 9.214844 "
        />
        <path
          fill="rgb(7.843137%,76.862745%,95.686275%)"
          d="M 7.105469 9.28125 L 6.527344 22.078125 L 8.257812 20.691406 L 8.921875 20.027344 L 8.964844 18.558594 L 9.09375 14.527344 L 9.214844 12.097656 L 9.195312 11.136719 L 8.640625 10.558594 Z M 7.105469 9.28125 "
        />
        <path
          fill="rgb(11.372549%,44.313725%,83.921569%)"
          d="M 25.472656 22.078125 L 25.152344 9.28125 L 23.617188 10.503906 L 23.015625 11.136719 L 22.976562 12.863281 L 23.097656 17.214844 L 23.105469 19.199219 L 23.167969 20.089844 L 23.871094 20.761719 Z M 25.472656 22.078125 "
        />
        <path
          fill="rgb(43.921569%,55.686275%,67.45098%)"
          d="M 12.03125 9.40625 L 12.097656 9.472656 Z M 12.03125 9.40625 "
        />
        <path
          fill="rgb(56.078431%,65.490196%,74.509804%)"
          d="M 11.820312 9.554688 L 11.859375 9.582031 Z M 11.820312 9.554688 "
        />
        <path
          fill="rgb(31.372549%,45.882353%,60%)"
          d="M 11.757812 9.621094 L 11.796875 9.644531 Z M 11.757812 9.621094 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.976562 10.496094 L 6.976562 11.199219 L 7.039062 11.199219 Z M 6.976562 10.496094 "
        />
        <path
          fill="rgb(5.882353%,32.941176%,63.137255%)"
          d="M 22.910156 11.136719 L 22.910156 12.289062 L 22.976562 12.289062 Z M 22.910156 11.136719 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 9.214844 11.199219 L 9.214844 12.097656 L 9.28125 12.097656 Z M 21.824219 11.328125 L 21.824219 12.03125 L 21.886719 12.03125 L 21.824219 11.328125 L 9.214844 11.199219 Z M 21.824219 11.328125 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 10.304688 11.390625 L 10.304688 11.902344 L 10.367188 11.902344 Z M 6.910156 11.902344 L 6.910156 12.609375 L 6.976562 12.609375 L 6.910156 11.902344 L 10.304688 11.390625 Z M 6.910156 11.902344 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 10.304688 11.902344 L 10.304688 12.414062 L 10.367188 12.414062 Z M 10.304688 11.902344 "
        />
        <path
          fill="rgb(1.960784%,56.470588%,89.803922%)"
          d="M 11.390625 19.710938 C 12.460938 20.480469 13.53125 21.246094 14.59375 22.027344 C 14.957031 22.292969 15.488281 22.859375 15.9375 22.9375 C 16.199219 22.976562 16.449219 22.726562 16.640625 22.585938 C 17.191406 22.175781 17.746094 21.773438 18.304688 21.375 C 18.96875 20.902344 19.621094 20.410156 20.289062 19.929688 C 20.550781 19.742188 20.953125 19.546875 21.121094 19.25 C 21.390625 18.769531 21.183594 17.703125 21.183594 17.152344 L 21.183594 11.902344 C 20.308594 12.292969 19.507812 13.164062 18.753906 13.761719 C 17.171875 15.007812 15.589844 16.257812 14.015625 17.511719 C 13.261719 18.113281 11.828125 18.855469 11.390625 19.710938 Z M 11.390625 19.710938 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 21.824219 12.03125 L 21.824219 12.992188 L 21.886719 12.992188 Z M 21.824219 12.03125 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 10.238281 12.929688 L 10.238281 13.886719 L 10.304688 13.886719 Z M 9.152344 12.992188 L 9.152344 13.886719 L 9.214844 13.886719 L 9.152344 12.992188 L 10.238281 12.929688 Z M 9.152344 12.992188 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 21.824219 12.992188 L 21.824219 14.015625 L 21.886719 14.015625 Z M 21.824219 12.992188 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.847656 13.3125 L 6.847656 14.015625 L 6.910156 14.015625 Z M 6.847656 13.3125 "
        />
        <path
          fill="rgb(5.882353%,32.941176%,63.137255%)"
          d="M 22.976562 13.824219 L 22.976562 15.359375 L 23.039062 15.359375 Z M 22.976562 13.824219 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 10.238281 13.886719 L 10.238281 14.464844 L 10.304688 14.464844 Z M 9.089844 14.273438 L 9.089844 14.785156 L 9.152344 14.785156 L 9.089844 14.273438 L 10.238281 13.886719 Z M 9.089844 14.273438 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.785156 14.71875 L 6.785156 15.425781 L 6.847656 15.425781 Z M 6.785156 14.71875 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 9.089844 14.785156 L 9.089844 15.679688 L 9.152344 15.679688 Z M 10.175781 14.910156 L 10.175781 15.9375 L 10.238281 15.9375 Z M 21.886719 14.976562 L 21.886719 15.9375 L 21.953125 15.9375 L 21.886719 14.976562 L 9.089844 14.785156 Z M 21.886719 14.976562 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 10.175781 15.9375 L 10.175781 16.511719 L 10.238281 16.511719 Z M 10.175781 15.9375 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 21.886719 15.9375 L 21.886719 16.960938 L 21.953125 16.960938 Z M 21.886719 15.9375 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 9.023438 16.0625 L 9.023438 16.574219 L 9.089844 16.574219 Z M 9.023438 16.0625 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.71875 16.128906 L 6.71875 16.832031 L 6.785156 16.832031 Z M 6.71875 16.128906 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 9.023438 16.574219 L 9.023438 17.40625 L 9.089844 17.40625 Z M 10.113281 16.960938 L 10.113281 17.472656 L 10.175781 17.472656 L 10.113281 16.960938 L 9.023438 16.574219 Z M 10.113281 16.960938 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 21.886719 16.960938 L 21.886719 17.921875 L 21.953125 17.921875 Z M 21.886719 16.960938 "
        />
        <path
          fill="rgb(5.882353%,32.941176%,63.137255%)"
          d="M 23.039062 16.960938 L 23.039062 18.496094 L 23.105469 18.496094 Z M 23.039062 16.960938 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 10.113281 17.472656 L 10.113281 17.984375 L 10.175781 17.984375 Z M 6.65625 17.535156 L 6.65625 18.238281 L 6.71875 18.238281 L 6.65625 17.535156 L 10.113281 17.472656 Z M 6.65625 17.535156 "
        />
        <path
          fill="rgb(5.882353%,63.137255%,82.352941%)"
          d="M 10.113281 17.984375 L 10.113281 18.496094 L 10.175781 18.496094 Z M 10.113281 17.984375 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 8.960938 18.304688 L 8.960938 19.199219 L 9.023438 19.199219 Z M 21.953125 18.878906 L 21.953125 19.839844 L 22.015625 19.839844 L 21.953125 18.878906 L 8.960938 18.304688 Z M 21.953125 18.878906 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.59375 18.945312 L 6.59375 19.648438 L 6.65625 19.648438 Z M 6.59375 18.945312 "
        />
        <path
          fill="rgb(1.960784%,35.294118%,55.294118%)"
          d="M 10.046875 19.007812 L 10.046875 19.839844 L 10.113281 19.839844 Z M 10.046875 19.007812 "
        />
        <path
          fill="rgb(3.921569%,49.019608%,69.019608%)"
          d="M 6.527344 20.351562 L 6.527344 21.054688 L 6.59375 21.054688 Z M 6.527344 20.351562 "
        />
        <path
          fill="rgb(11.372549%,44.313725%,83.921569%)"
          d="M 6.527344 22.398438 C 7.4375 23.511719 9.023438 24.378906 10.175781 25.242188 C 11.460938 26.203125 12.730469 27.1875 14.015625 28.152344 C 14.609375 28.601562 15.207031 29.164062 15.871094 29.503906 C 15.832031 28.628906 15.707031 27.757812 15.679688 26.878906 C 15.671875 26.503906 15.738281 25.816406 15.550781 25.484375 C 15.28125 25.011719 14.507812 24.644531 14.078125 24.328125 C 12.984375 23.519531 11.902344 22.695312 10.816406 21.882812 C 10.457031 21.613281 9.734375 20.859375 9.28125 20.859375 C 9 20.863281 8.679688 21.140625 8.449219 21.273438 C 7.808594 21.652344 7.148438 21.992188 6.527344 22.398438 Z M 6.527344 22.398438 "
        />
        <path
          fill="rgb(1.568627%,34.117647%,66.666667%)"
          d="M 16.0625 29.503906 L 20.03125 26.554688 L 25.472656 22.464844 C 25.003906 21.914062 24.109375 21.582031 23.488281 21.214844 C 23.28125 21.09375 22.96875 20.84375 22.71875 20.859375 C 22.246094 20.882812 21.5625 21.625 21.183594 21.902344 C 20.070312 22.714844 18.964844 23.53125 17.855469 24.359375 C 17.425781 24.679688 16.722656 25.011719 16.449219 25.476562 C 16.21875 25.867188 16.273438 26.566406 16.257812 27.007812 C 16.210938 27.839844 16.0625 28.664062 16.0625 29.503906 Z M 16.0625 29.503906 "
        />
        <path
          fill="rgb(5.882353%,32.941176%,63.137255%)"
          d="M 25.472656 21.503906 L 25.472656 22.144531 L 25.535156 22.144531 Z M 25.472656 21.503906 "
        />
      </g>
    </Svg>
  );
};

export default Icon;