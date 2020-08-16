import React, { ReactNode, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

type IProps = {
  children?: ReactNode;
};

class ErrorBoundary extends React.Component<IProps> {
  public state = {
    hasError: false,
  };

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    return console.error('ErrorBoundary error', error, info);
  }

  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  public render(): ReactNode {
    const { children } = this.props;

    if (this.state.hasError) {
      return (
        <h1>
          Oops. Something went wrong. <Link to="/">Click here</Link> to back to
          the home page.
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
