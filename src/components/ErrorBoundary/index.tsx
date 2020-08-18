import React, { ReactNode, ErrorInfo } from 'react';

import { Container, Message, ButtonLink } from './styles';

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
        <Container>
          <Message>
            Oops. Something went wrong.{' '}
            <ButtonLink type="button" onClick={() => window.location.reload()}>
              Click here
            </ButtonLink>{' '}
            to back to the home page.
          </Message>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
