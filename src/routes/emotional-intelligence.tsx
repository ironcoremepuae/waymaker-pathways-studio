import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "@/data/routes";
import { redirectToCanonical } from "@/lib/legacy-route";

export const Route = createFileRoute("/emotional-intelligence")({
  beforeLoad: () => redirectToCanonical(ROUTES.emotionalIntelligence),
});
