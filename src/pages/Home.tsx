import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Header, Footer } from '../components';


export function Home() {
    
       
    const [count, setCount] = React.useState(0);

    const theme = useContext(ThemeContext);

    React.useEffect(() => {
        // Side effect logic
        console.log("Component mounted");
        return () => {
            // Cleanup logic
            console.log("Component will unmount");
        };
        }, [
            //dependencies 
    ]);

    return (
        <>
            <Header />
            <div>
                <div className={theme}>This is a {theme} theme!</div>
                <h2>Welcom to Contoso University!</h2>
                <p>Filler text!</p>
                <a className="btn btn-primary btn-lg" href="/students">View Students</a>
            </div>
            <Footer />
        </>
    );
}