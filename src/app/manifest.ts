import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vikas Poute | Senior Software Engineer",
    short_name: "Vikas Poute Portfolio",
    description:
      "Explore the portfolio of Vikas Poute, a Senior Software Engineer specializing in real-time communication systems, WebRTC, and scalable Flutter architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#00d4ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
