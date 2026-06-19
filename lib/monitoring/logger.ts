type LogLevel = "info" | "warn" | "error" | "debug";

export class Logger {
  private static formatMessage(level: LogLevel, message: string, context?: any) {
    const timestamp = new Date().toISOString();
    return JSON.stringify({
      timestamp,
      level,
      message,
      context,
      environment: process.env.NODE_ENV || "development",
    });
  }

  static info(message: string, context?: any) {
    console.log(this.formatMessage("info", message, context));
  }

  static warn(message: string, context?: any) {
    console.warn(this.formatMessage("warn", message, context));
  }

  static error(message: string, error?: any, context?: any) {
    console.error(
      this.formatMessage("error", message, {
        ...context,
        errorMessage: error?.message || error,
        stack: error?.stack,
      })
    );
  }

  static latency(actionName: string, durationMs: number, context?: any) {
    console.log(
      this.formatMessage("info", `Performance Metric: ${actionName}`, {
        ...context,
        durationMs,
      })
    );
  }
}
