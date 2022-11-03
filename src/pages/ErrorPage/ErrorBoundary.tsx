import { Component, ReactNode } from 'react';

import ErrorPage from '.';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	public render() {
		if (this.state.hasError) {
			return <ErrorPage />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
