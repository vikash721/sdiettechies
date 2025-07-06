import { toast } from "sonner";

export const useToast = () => {
  return {
    toast,
    success: (message, options = {}) =>
      toast.success(message, {
        className: "bg-background border-border",
        ...options,
      }),
    error: (message, options = {}) =>
      toast.error(message, {
        className: "bg-background border-border",
        ...options,
      }),
    warning: (message, options = {}) =>
      toast.warning(message, {
        className: "bg-background border-border",
        ...options,
      }),
    info: (message, options = {}) =>
      toast.info(message, {
        className: "bg-background border-border",
        ...options,
      }),
    loading: (message, options = {}) =>
      toast.loading(message, {
        className: "bg-background border-border",
        ...options,
      }),
  };
};
