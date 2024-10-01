// promisesImplementation.js

const users = [
    { name: 'Raman', email: 'raman@example.com', phone: '1234567890', height: 180, weight: 75, country: 'Canada' },
    { name: 'Sahib', email: 'sahib@example.com', phone: '0987654321', height: 175, weight: 68, country: 'India' },
    { name: 'Simran', email: 'simran@example.com', phone: '2345678901', height: 165, weight: 55, country: 'Mexico' },
    { name: 'Simer', email: 'Simer@example.com', phone: '3456789012', height: 190, weight: 79, country: 'Brazil' },
    { name: 'Gurbani', email: 'gurbani@example.com', phone: '4567890123', height: 185, weight: 65, country: 'Dubai' }
  ];
  
  // Filter function for height and weight
  const filterUsersByHeightAndWeight = (users) => {
    return new Promise((resolve) => {
      const filteredUsers = users.filter(user => user.height >= 170 && user.height <= 190 && user.weight >= 60 && user.weight <= 80);
      resolve(filteredUsers);
    });
  };
  
  // Map function to extract user details
  const mapUserInfo = (users) => {
    return new Promise((resolve) => {
      const userInfo = users.map(user => ({
        name: user.name,
        email: user.email,
        phone: user.phone,
        height: user.height,
        weight: user.weight,
        country: user.country,
      }));
      resolve(userInfo);
    });
  };
  
  // Reduce function to group users by country
  const groupUsersByCountry = (users) => {
    return new Promise((resolve) => {
      const groupedUsers = users.reduce((grouped, user) => {
        if (!grouped[user.country]) {
          grouped[user.country] = [];
        }
        grouped[user.country].push(user);
        return grouped;
      }, {});
      resolve(groupedUsers);
    });
  };
  
  // Sort users by height in ascending order
  const sortUsersByHeight = (users) => {
    return new Promise((resolve) => {
      const sortedUsers = users.sort((a, b) => a.height - b.height);
      resolve(sortedUsers);
    });
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
  
  // Execution using promises
  filterUsersByHeightAndWeight(users)
    .then(filteredUsers => sortUsersByHeight(filteredUsers))
    .then(sortedUsers => mapUserInfo(sortedUsers))
    .then(mappedUsers => groupUsersByCountry(mappedUsers))
    .then(groupedUsers => printUserInformation(groupedUsers))
    .catch(error => console.error(error));
  