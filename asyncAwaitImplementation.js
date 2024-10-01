// asyncAwaitImplementation.js

const users = [
    { name: 'Raman', email: 'raman@example.com', phone: '1234567890', height: 180, weight: 75, country: 'Canada' },
    { name: 'Sahib', email: 'sahib@example.com', phone: '0987654321', height: 175, weight: 68, country: 'India' },
    { name: 'Simran', email: 'simran@example.com', phone: '2345678901', height: 165, weight: 55, country: 'Mexico' },
    { name: 'Simer', email: 'Simer@example.com', phone: '3456789012', height: 190, weight: 79, country: 'Brazil' },
    { name: 'Gurbani', email: 'gurbani@example.com', phone: '4567890123', height: 185, weight: 65, country: 'Dubai' }
  ];
  
  // Function to process users with async/await
  const processUsers = async (users) => {
    try {
      // Filter users by height and weight
      const filteredUsers = users.filter(user => user.height >= 170 && user.height <= 190 && user.weight >= 60 && user.weight <= 80);
  
      // Sort by height in ascending order
      const sortedUsers = filteredUsers.sort((a, b) => a.height - b.height);
  
      // Map user info
      const mappedUsers = sortedUsers.map(user => ({
        name: user.name,
        email: user.email,
        phone: user.phone,
        height: user.height,
        weight: user.weight,
        country: user.country,
      }));
  
      // Group users by country
      const groupedUsers = mappedUsers.reduce((grouped, user) => {
        if (!grouped[user.country]) {
          grouped[user.country] = [];
        }
        grouped[user.country].push(user);
        return grouped;
      }, {});
  
      // Print the user information
      printUserInformation(groupedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Function to print user information
  const printUserInformation = (userGroups) => {
    console.log("User groups by country:");
    for (const country in userGroups) {
      console.log(`Country: ${country}`);
      userGroups[country].forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}, Height: ${user.height}, Weight: ${user.weight}`);
      });
    }
  };
  
  // Execute async function
  processUsers(users);
  