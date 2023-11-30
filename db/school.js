const client = require("./client");

const createSchool = async (name, city, state, zip_code, is_accredited) => {
  try {
    await client.query(`
    INSERT INTO school (name)
    VALUES ('${name}', '${city}', '${state}', '${zip_code}', '${is_accredited}' );
  `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createSchool: createSchool,
};
