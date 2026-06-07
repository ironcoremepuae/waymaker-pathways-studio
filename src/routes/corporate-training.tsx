import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "@/data/routes";
import { redirectToCanonical } from "@/lib/legacy-route";

export const Route = createFileRoute("/corporate-training")({
  beforeLoad: () => redirectToCanonical(ROUTES.corporateTraining),
});
