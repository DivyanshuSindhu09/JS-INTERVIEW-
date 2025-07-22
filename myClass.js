class user {
    constructor (username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    hashPassword () {
        return `alfh;as${this.password}lsdfjasl`
    }
}

const user1 = new user('devansh', 'jaat', 'scknys')

console.log(user1.hashPassword())
//alfh;aslsdfjasl


// ---------------------------------------------------------------------
//behind the scene

function User (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.hashPassword = function () {
    return `alfh;as${this.password}lsdfjasl`
}

const user2 = new User('Divyanshu', 'Sindhu', 'jasaxjne')

console.log(user2.hashPassword())
//alfh;asjasaxjnelsdfjasl