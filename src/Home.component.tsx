import React, { useContext, useEffect } from 'react';
import { HomeItemComponent } from './HomeItem.component';
import { ThemeContext } from './ThemeContext';


let users = [{
    id: 1,
    name: "John",
    age: 25
},
{
    id: 2,
    name: "Jane",
    age: 22
    
},
{
    id: 3,
    name: "Bob",
    age: 30
}];

export function HomeComponent() {
    const [userList, setUserList] = React.useState(users);
       
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
        <div>
            <div className={theme}>This is a {theme} theme!</div>
            <h2>Home Component</h2>
            <h3>{count}</h3>
                <ol>
                    {userList.map((user)=> <HomeItemComponent key={user.id} name={user.name} age={user.age} />)}
                </ol>
                <button onClick={() => {
                    setCount(count + 1);
                }}>Click me</button>
        </div>
    );
}