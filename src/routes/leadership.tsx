import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "@/data/routes";
import { redirectToCanonical } from "@/lib/legacy-route";

export const Route = createFileRoute("/leadership")({
  beforeLoad: () => redirectToCanonical(ROUTES.leadership),
});
