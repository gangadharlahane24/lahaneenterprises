VITE_EMAILJS_SERVICE_ID=service_6r5i1vh
VITE_EMAILJS_TEMPLATE_ID=template_so0mvxl
VITE_EMAILJS_PUBLIC_KEY=CcvSa3DzjV4wmRW30


/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
