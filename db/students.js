const client = require("./client");

const createStudent = async (name) => {
  try {
    await client.query(`
      INSERT INTO students (name)
      VALUES ('${name}');
    `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createStudent: createStudent,
};
