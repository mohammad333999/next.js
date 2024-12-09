import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || height}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

//mk
export const Grapes: React.FC<IconSvgProps> = ({
  size = 39,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path 
      d="M19 12c0-1.39-.95-2.53-2.22-2.88A2.996 2.996 0 0 0 14 5c-.43 0-.83.1-1.19.26c.19-1.07.58-2.67 1.59-3.06L13.6 1c-1.7.77-2.2 3.09-2.34 4.29C10.87 5.11 10.45 5 10 5a2.996 2.996 0 0 0-2.78 4.12C5.94 9.46 5 10.62 5 12c0 1.39.95 2.54 2.23 2.88c-.14.34-.23.72-.23 1.12c0 1.39.94 2.54 2.22 2.88A2.996 2.996 0 0 0 12 23a2.996 2.996 0 0 0 2.78-4.12A2.974 2.974 0 0 0 17 16c0-.4-.08-.77-.23-1.12A2.98 2.98 0 0 0 19 12m-2.69-2.12v.02h-.01zM14 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-.5 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5M10 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8.5 8.83 8.5 8s.67-1.5 1.5-1.5M6.5 12c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m2 4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m3.5 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
      fill="currentColor"/>
    </svg>
  );
};
export const Key: React.FC<IconSvgProps> = ({
  size = 79,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path 
        d="M12 8a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m9 3c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9-5a3 3 0 0 0-3 3c0 1.31.83 2.42 2 2.83V18h2v-2h2v-2h-2v-2.17c1.17-.41 2-1.52 2-2.83a3 3 0 0 0-3-3"
        fill="currentColor" 
    />
   </svg>
  );
};
export const BasketIcon: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 15 15"
      width={size || width}
      {...props}
    >
 {/* <svg xmlns="http://www.w3.org/2000/svg" > */}
    <path 
      d="M13.2 1.5s-1.391-.041-1.946.5c-.534.52-.754.918-.754 2H1.2l1.394 4.814l.013.022c.235.657.848 1.13 1.579 1.158l.013.006h6.5v.2s.001.3-.199.7s-.3.6-1.1.6H2.9c-1 0-1 1.5 0 1.5h6.4c1.2 0 2.1-.7 2.4-1.4s.3-1.3.3-1.3V4c0-.524.229-1 .7-1h.55a.75.75 0 0 0 0-1.5zM9.2 13c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-5 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"
      fill="currentColor" 
    />
  </svg>
    
  );
};
export const Bell: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path 
      d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
      fill="currentColor" />
    </svg>
  );
};
export const ChatAnimated: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <mask id="lineMdChatFilled0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/></path><path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="10;0"/></path><path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="10;0"/></path><path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="6;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatFilled0)"/>
    </svg>
  );
};
export const Chat: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486z"/>
    </svg>
  );
};
export const Profile: React.FC<IconSvgProps> = ({
  size = 81,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 16 20"
      width={size || width}
      {...props}
    >
    <path 
      fill="currentColor" 
      d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M13 14H2V2h11zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 4.5M7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1"/>
    </svg>
  );
};
export const Leader: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 2048 2048"
      width={size || width}
      {...props}
    >
    <path 
      fill="currentColor" 
      d="M1168 946q38 15 74 33t70 41q-22 24-40 50t-33 56q-77-50-164-76t-179-26q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83M512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1472 832q0 52-16 101t-48 91v512l-256-128l-256 128v-512q-31-42-47-91t-17-101q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124m-320-192q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 689v-204q-60 27-128 27t-128-27v204q32-16 64-31t64-33q32 17 64 32t64 32"/>
   </svg>
  );
};
export const Custmer: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      {...props}
    >
  <path 
    fill="currentColor" 
    d="M28.523 23.813c-.518-.51-6.795-2.938-7.934-3.396c-1.133-.45-1.585-1.697-1.585-1.697s-.51.282-.51-.51c0-.793.51.51 1.02-2.548c0 0 1.415-.397 1.134-3.68h-.34s.85-3.51 0-4.698c-.853-1.188-1.187-1.98-3.06-2.548c-1.87-.567-1.19-.454-2.548-.396c-1.36.057-2.492.793-2.492 1.188c0 0-.85.057-1.188.397c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.624l-.337.11c-.283 3.284 1.132 3.682 1.132 3.682c.51 3.058 1.02 1.755 1.02 2.548c0 .792-.51.51-.51.51s-.453 1.246-1.585 1.697c-1.132.453-7.416 2.887-7.927 3.396c-.51.52-.453 2.896-.453 2.896h12.036l.878-3.46l-.78-.78l1.343-1.345l1.343 1.344l-.78.78l.878 3.46h12.036s.063-2.378-.453-2.897z"/>
  </svg>
  );
};
export const MarketerSupervisor: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path 
      fill="currentColor"
      d="M2 20v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.625 0 1.25.088t1.25.212v1.575q-1.125.55-1.812 1.45T10 18.675V20zm10 0v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm5-5q-1.05 0-1.775-.725T14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15m-7-3q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12"/>
    </svg>
  );
};
export const Marketer: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 2048 2048"
      width={size || width}
      {...props}
    >
    <path 
      fill="currentColor" 
      d="M1920 2048h-128q0-106-27-204t-78-183t-120-156t-155-120t-184-77t-204-28t-204 27t-183 78t-156 120t-120 155t-77 184t-28 204H128q0-145 42-276t121-240t187-193t244-135q-124-67-210-180h-64q-40 0-75-15t-61-41t-41-61t-15-75V576q0-38 14-72t38-60t58-42t71-18q39-88 99-159t137-121t166-77t185-27t185 27t165 77t137 121t100 159q38 2 71 18t57 42t39 60t14 72v256q0 40-15 75t-41 61t-61 41t-75 15q-30 0-57-9q-43 59-97 107t-120 82q134 51 243 134t188 193t120 241t43 276M1664 576q0-26-19-45t-45-19t-45 19t-19 45v256q0 26 19 45t45 19t45-19t19-45zM384 832q0 26 19 45t45 19h64V576q0-26-19-45t-45-19t-45 19t-19 45zm301 192q70 62 157 95t182 33q62 0 121-14t112-42t100-67t83-91q-16-23-24-50t-8-56V576q0-46 20-87t59-68q-32-67-80-121t-109-92t-130-59t-144-21q-74 0-144 20t-130 59t-108 93t-81 121q38 27 58 68t21 87v320h128q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10z"/>
    </svg>
  );
};
export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export const MoonFilledIcon = ({
  size = 32,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);
export const Setting = ({
  size = 80,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path 
      fill="currentColor"
      d="M16 1.466C7.973 1.466 1.466 7.973 1.466 16S7.973 30.534 16 30.534S30.534 24.027 30.534 16S24.027 1.466 16 1.466m8.386 13.502a5.36 5.36 0 0 1-5.685 1.586l-7.187 8.266a2.113 2.113 0 0 1-3.187-2.775l7.198-8.274a5.348 5.348 0 0 1 6.137-7.497l-2.755 3.212l.9 2.62l2.723.53l2.76-3.22a5.34 5.34 0 0 1-.902 5.553z"/>
  </svg>
);
export const ChatRoom: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
<path 
  fill="currentColor"
  d="M12.28 19.23q1.056-.075 2.084-.337a5.8 5.8 0 0 0 2.602.168a1 1 0 0 1 .104-.008c.31 0 .717.178 1.31.553v-.616a.6.6 0 0 1 .311-.525c.258-.143.498-.31.717-.492c.864-.723 1.352-1.686 1.352-2.706a3.2 3.2 0 0 0-.159-.993c.26-.48.472-.986.627-1.51c.5.74.77 1.61.772 2.503c0 1.386-.654 2.68-1.785 3.625a6 6 0 0 1-.595.436v1.442c0 .496-.58.78-.989.486a15 15 0 0 0-1.2-.8a3 3 0 0 0-.369-.184q-.51.076-1.038.077c-1.412 0-2.717-.419-3.744-1.12m-7.466-2.885C3.03 14.854 2 12.818 2 10.64c0-4.454 4.258-8.014 9.457-8.014s9.458 3.56 9.458 8.014s-4.259 8.013-9.458 8.013q-.877 0-1.728-.133c-.245.057-1.224.631-2.635 1.648c-.51.369-1.236.013-1.236-.608V17.1a9 9 0 0 1-1.044-.754m4.95.658q.063 0 .13.01a9.5 9.5 0 0 0 1.563.128c4.392 0 7.907-2.939 7.907-6.502s-3.515-6.501-7.907-6.501c-4.39 0-7.907 2.939-7.907 6.501c0 1.723.821 3.345 2.273 4.559q.55.458 1.196.821c.241.135.39.385.39.655v1.419c1.116-.74 1.85-1.09 2.354-1.09"/><path fill="currentColor" d="M7.625 12a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.062 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.063.001a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"/>
</svg>
  );
};
export const Loading: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
<circle cx="12" cy="2" r="0" fill="currentColor">
  <animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/>
</circle>
<circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)">
  <animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/>
</circle>
</svg>
  );
};
export const Basket: React.FC<IconSvgProps> = ({
  size = 90,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <g fill="none">
      <path 
        stroke="currentColor"
        stroke-linecap="round" 
        stroke-width="2"
        d="M4 4h1.626c.567 0 .85 0 1.076.124a1 1 0 0 1 .25.195c.175.189.244.464.381 1.014l.182.727c.101.404.152.606.23.776a2 2 0 0 0 1.446 1.13C9.375 8 9.583 8 10 8v0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17H7.55c-.145 0-.218 0-.274-.006a1 1 0 0 1-.867-1.203a3 3 0 0 1 .081-.262v0c.052-.154.077-.231.106-.3a2 2 0 0 1 1.698-1.224C8.368 14 8.45 14 8.611 14H14"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.528 14h-3.554c-1.216 0-1.824 0-2.293-.275a2 2 0 0 1-.521-.442c-.35-.418-.45-1.018-.649-2.217c-.203-1.215-.304-1.823-.063-2.273a1.5 1.5 0 0 1 .408-.482C8.26 8 8.876 8 10.108 8h6.656c1.45 0 2.175 0 2.469.474c.293.475-.032 1.123-.68 2.42l-.447.895c-.538 1.076-.807 1.614-1.29 1.912c-.484.299-1.085.299-2.288.299Z"/><circle cx="17" cy="20" r="1" fill="currentColor"/><circle cx="9" cy="20" r="1" fill="currentColor"/>
    </g>
  </svg>
  );
};
export const NoData: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
    <path
      fill="currentColor"
      d="M19.775 22.6L1.4 4.225L2.8 2.8l18.4 18.4zM12 21q-3.775 0-6.387-1.162T3 17V7q0-.65.438-1.237t1.237-1.088l6.3 6.3q-1.8-.075-3.325-.45t-2.65-1v3q1.275.725 3.075 1.1T12 14q.5 0 .975-.012t.95-.063l1.75 1.75q-.85.175-1.775.25T12 16q-2.125 0-3.925-.375T5 14.525V17q.225.725 2.437 1.363T12 19q1.6 0 3.213-.325t2.662-.8l1.45 1.45q-1.225.775-3.137 1.225T12 21m8.75-3.075L19 16.175v-1.65q-.275.15-.55.275t-.575.25l-1.525-1.525q.75-.2 1.413-.437T19 12.525v-3q-1.025.575-2.35.925t-2.9.475l-1.9-1.9q1.1 0 2.3-.175t2.237-.462t1.75-.65t.863-.713q-.275-.725-2.512-1.375T12 5q-.925 0-1.888.125t-1.837.325L6.625 3.8q1.125-.375 2.5-.587T12 3q3.725 0 6.363 1.175T21 7v10q0 .25-.062.475t-.188.45"/>
  </svg>
  );
};


export const SunFilledIcon = ({
  size = 32,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};
