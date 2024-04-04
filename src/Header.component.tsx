import React from 'react';


export class HeaderComponent extends React.Component {
    private userName: string = "John Doe";

    componentDidMount(): void {
        // Normally used to make API calls or fetch data
    }

    componentWillUnmount(): void {
        // Clean up code: remove event listeners, cancel network requests, etc.
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><span>Hello, {this.userName}!</span></div>
                        <div><a href="https://www.google.com" className="navbar-brand">Google</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
