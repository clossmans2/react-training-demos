import React from 'react';

export interface HomeItemProps {
    name: string;
    age: number;
}

export function HomeItemComponent({name, age}: HomeItemProps ) {
    return (
        <li>
            <span>{name}</span> - <span>{age}</span>
        </li>
    );
}