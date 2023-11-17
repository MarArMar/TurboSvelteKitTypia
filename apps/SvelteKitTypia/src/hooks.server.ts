import type { Handle, HandleServerError } from "@sveltejs/kit";

const defaultHandleServerError: HandleServerError = async ({
  error,
  event,
}) => {
  return {
    message: error?.data?.message ?? error?.message ?? "Server side error",
    code: error?.code ?? "UNKNOWN",
  };
};

export let handleError: HandleServerError = defaultHandleServerError;

const defaultHandle: Handle = async ({ event, resolve }) => {
  return await resolve(event);
};

export const handle: Handle = defaultHandle;
