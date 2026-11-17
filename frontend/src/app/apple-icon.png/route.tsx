import { monogram } from "@/lib/monogram";

export const dynamic = "force-static";

export function GET() {
  return monogram(180, true);
}
