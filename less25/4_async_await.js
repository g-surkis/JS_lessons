





const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return users
};







(async () => {
    const res = await getUsers();
    console.log('res: ', res);
})()


const res = getUsers().then(users => console.log('users: then', users));



// await працює з «thenable»–обєктами



try {
    await    
} catch (error) {

}
