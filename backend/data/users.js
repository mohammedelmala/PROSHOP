import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("1234567", 10),
        isAdmin: true
    },
    {
        name: "Joen Doe",
        email: "joan.doe@example.com",
        password: bcrypt.hashSync("1234567", 10)
    },
    {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: bcrypt.hashSync("1234567", 10)
    }
]


export default users;