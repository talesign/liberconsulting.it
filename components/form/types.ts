export type SelectOption = {
  value: string
  label: string
}

export interface TurnstileOptions {
  sitekey: string
  callback?: (token: string) => void
  "error-callback"?: () => void
  "expired-callback"?: () => void
  theme?: "light" | "dark" | "auto"
  // Add other options as needed
}
declare global {
  interface Window {
    onloadTurnstileCallback: () => void
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: TurnstileOptions,
      ) => string | undefined
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}
