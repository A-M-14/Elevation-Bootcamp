// Given Promise-based code:
// function getUserById(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('User not found');
//       }
//       return response.json();
//     })
//     .then(user => {
//       console.log(`Found user: ${user.name} (${user.email})`);
//       return user;
//     })
//     .catch(error => {
//       console.error('Error fetching user:', error.message);
//       return null;
//     });
// }

// Converted to async
async function getUserById(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}

async function testFunction() {
    console.log('Testing with valid user ID (1):');
    await getUserById(1);
    
    console.log('\nTesting with invalid user ID (999):');
    await getUserById(999);
}

testFunction();
