import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getOptimizedImageUrl = async (
  url: string,
  width: number,
  height: number,
): Promise<string> => {
  const encodedUrl = encodeURIComponent(url);
  const optimizedUrl = `https://images.weserv.nl/?url=${encodedUrl}&w=${width}&h=${height}&output=webp&fit=cover`;

  try {
    const res = await fetch(optimizedUrl, { method: "HEAD" });

    if (res.ok) {
      return optimizedUrl;
    }

    return url;
  } catch (error) {
    console.error("Image fetch error:", error);
    return url;
  }
};
