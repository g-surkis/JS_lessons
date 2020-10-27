



async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);

    console.log(data);
    return data;
}

const  res = await fetchUsers('https://jsonplaceholder.typicode.com/users');
console.log('res: ', res);



(
    async()=>{
        async function fetchUsers(endpoint) {
            const res = await fetch(endpoint);
            let data = await res.json();
        
            data = data.map(user => user.username);
        
            console.log(data);
            return data;
        }
        
        const  res = await fetchUsers('https://jsonplaceholder.typicode.com/users');
        console.log('res: ', res);

    }
)()