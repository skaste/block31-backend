const client = require("./client");

const createSchool = async (name, city, state, zip_code, is_accredited) => {
  try {
    await client.query(`
    INSERT INTO school (name, city, state, zip_code, is_accredited)
    VALUES ('${name}', '${city}', '${state}', '${zip_code}', '${is_accredited}' );
  `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createSchool: createSchool,
};
