import { ProviderContext } from "notistack";

const showError = (
  enqueueSnackbar: ProviderContext["enqueueSnackbar"],
  message: string | Error
) => {
  enqueueSnackbar((message as any)?.message || message, {
    variant: "error",
    disableWindowBlurListener: true,
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

const showSuccess = (
  enqueueSnackbar: ProviderContext["enqueueSnackbar"],
  message: string
) => {
  enqueueSnackbar(message, {
    variant: "success",
    autoHideDuration: 5000,
    disableWindowBlurListener: true,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

const showInfo = (
  enqueueSnackbar: ProviderContext["enqueueSnackbar"],
  message: string
) => {
  enqueueSnackbar(message, {
    variant: "info",
    autoHideDuration: 5000,
    disableWindowBlurListener: true,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

const showWarning = (
  enqueueSnackbar: ProviderContext["enqueueSnackbar"],
  message: string
) => {
  enqueueSnackbar(message, {
    variant: "warning",
    autoHideDuration: 5000,
    disableWindowBlurListener: true,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

export { showError, showSuccess, showInfo, showWarning };
