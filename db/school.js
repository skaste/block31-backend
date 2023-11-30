const client = require("./client");

const createSchool = async (name) => {
  try {
    await client.query(`
    INSERT INTO school (name)
    VALUES ('${name}');
    
  `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createSchool: createSchool,
};
