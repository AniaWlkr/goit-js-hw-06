import users from "./users.js"
// console.table(users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  return users.map(user => user.name);
};
// const getUserNames = users => users.map(user => user.name);

console.log('getUserNames', getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/////////////////////////////////////////////
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log('getUsersWithEyeColor', getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/////////////////////////////////////////////
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => users.reduce((acc, user) => {
  if (user.gender === gender) {
    acc.push(user.name)
  }
  return acc;
}, []);
  // твой код


console.log('getUsersWithGender', getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/////////////////////////////////////////////
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log('getInactiveUsers', getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/////////////////////////////////////////////
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log('getUserWithEmail', getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log('getUserWithEmail', getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/////////////////////////////////////////////
// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log('getUsersWithAge', getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log('getUsersWithAge', getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/////////////////////////////////////////////
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log('calculateTotalBalance', calculateTotalBalance(users)); // 20916

/////////////////////////////////////////////
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => users.reduce((acc, user) => {
    if (user.friends.includes(friendName)) {
      acc.push(user.name);
    };
    return acc;
  }, []);

console.log('getUsersWithFriend', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log('getUsersWithFriend', getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/////////////////////////////////////////////
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  return getUserNames([...users].sort((prev, next) => prev.friends.length - next.friends.length));
};

console.log('getNamesSortedByFriendsCount', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/////////////////////////////////////////////
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, [])
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((prev, next) => prev > next ? 1 : -1);
};

console.log('getSortedUniqueSkills', getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]