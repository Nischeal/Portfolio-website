import { monogram } from "@/lib/monogram";

// Static route (out/icon.png) rather than the icon convention, which exports without an extension.
export const dynamic = "force-static";

export function GET() {
  return monogram(192);
}
