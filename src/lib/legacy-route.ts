import { redirect } from "@tanstack/react-router";

export function redirectToCanonical(to: string) {
  throw redirect({
    to,
    replace: true,
    statusCode: 301,
  });
}
