import React, { useEffect, useState } from 'react';
import { from } from 'rxjs';

function ObservableExample() {
    const [data, setData] = useState(null);

    useEffect(() => {

        const observable = from(fetch("https://jsonplaceholder.typicode.com/users"));
        const subscription = observable.subscribe({
            next: async (response) => {
                const json = await response.json();
                setData(json);
            },
            error: (err) => console.log(err),
            complete: console.log('Done')
        })

        return () => subscription.unsubscribe();

    }, []);

    return (<div>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default ObservableExample;