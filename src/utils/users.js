const users = []

//add user, remove user,get user,get user in room

const addUser = ({id, username, room}) => {
    //clean the data

    username = username.trim().toLowerCase()

    //validate the data

    if(!username || !room)
    {
        return {
            error:'Username and room required!'
        }
    }

    //check for existing user

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username

    if(existingUser)
    {
        return {
            error:'Username is in use!'
        }
    }

    //store user

    const user = {id, username, room}

    users.push(user)

    return {user}

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1)
    {
        return users.splice(index,1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id) 
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.find((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

// addUser({
//     id:22,
//     username:'Abhi',
//     room:'physics'
// })

// addUser({
//     id:32,
//     username:'Raj',
//     room:'physics'
// })

// addUser({
//     id:42,
//     username:'Abhi',
//     room:'maths'
// })

// // console.log(users)

// // const removedUser = removeUser(22)

// // console.log(removedUser)
// // console.log(users)


// const user = getUser(22)
// console.log(user)

// const userList = getUserInRoom('maths')
// console.log(userList)