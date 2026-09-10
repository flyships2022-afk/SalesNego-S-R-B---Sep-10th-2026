import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white p-6">
          <div className="max-w-md w-full p-6 rounded-2xl bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EE2338]/10 text-[#EE2338] mx-auto flex items-center justify-center font-bold text-xl">
              !
            </div>
            <h2 className="text-xl font-bold text-[#161519] dark:text-white">
              Application Notice
            </h2>
            <p className="text-sm text-[#555459] dark:text-zinc-400">
              An unexpected issue occurred while rendering.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                if (typeof window !== 'undefined') window.location.href = '/';
              }}
              className="px-5 py-2.5 bg-[#EE2338] hover:bg-[#c91521] text-white font-semibold text-sm rounded-full transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
