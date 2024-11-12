const database = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "12345",
    role: "admin",
  },
  {
    id: 2,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "user",
  },
  {
    id: 3,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user",
  },
  {
    id: 4,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "admin",
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    //console.log(database);
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  addUser: (id, name) => {
    const user = database.find((user) => user.id === id); // the fuck is this doing
    if (!user) {
      database.push({ id: id, name: name, role: "user" });
    } else {
      console.log("user already exist in db")
    }
  },
};

module.exports = { database, userModel };
