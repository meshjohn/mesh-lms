import { env } from "@/lib/env";

export function useConstructUrl(key: string) {
  return `https://${env.NEXT_PUBLIC_S3_BUCKET_IMAGES}.fly.storage.tigris.dev/${key}`;
}

