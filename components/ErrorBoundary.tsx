"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Logger } from "@/lib/monitoring/logger";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Logger.error("Uncaught exception caught by React ErrorBoundary", error, {
      componentStack: errorInfo.componentStack,
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
          <div className="max-w-md flex flex-col gap-6">
            <h2 className="text-2xl font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white">
              Something went quiet.
            </h2>
            <p className="text-xs text-brand-blue/60 dark:text-luxury-white/60 leading-relaxed font-sans">
              The page connection was temporarily disrupted. We have logged this occurrence and are working to restore alignment.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mx-auto text-[10px] tracking-widest uppercase border border-brand-blue/20 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold py-3 px-6 rounded-full transition-all duration-300 font-medium font-sans"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
