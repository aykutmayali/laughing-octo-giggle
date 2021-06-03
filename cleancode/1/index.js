function getUsersFullName(userNames){
    const [firstName, middleName, lastName] = userNames;
    const middleInitial = middleName[0];
    
    return `${firstName} ${middleInitial} ${lastName}`;
}

console.log(getUsersFullName(['İbrahim', 'Asaf', 'Yalcin']));

