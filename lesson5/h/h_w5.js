class User {
    constructor(email){
        this.email = email;
    }
}

class Admin extends User{
    constructor({email, blacklistedEmails = []}){
        super(email);
        this.blacklistedEmails = blacklistedEmails;
    }

    blacklist(email){
        this.blacklistedEmails += email
    }

    isBlacklisted(email){
        return this.blacklistedEmails.includes(email);
    }
}

const mango = new Admin( {email: "mango@mail.com"});

mango.blacklist("poly@mail.com");

console.log(mango.isBlacklisted("mango@mail.com"));

console.log(mango.isBlacklisted("poly@mail.com"));