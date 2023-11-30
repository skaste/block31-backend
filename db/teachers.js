const client = require("./client");

const createTeacher = async (
  name,
  room_number,
  is_new,
  is_coach,
  school_id
) => {
  try {
    await client.query(`
    INSERT INTO teachers (name, room_number, is_new, is_coach, school_id)
    VALUES ('${name}', '${room_number}', '${is_new}', '${is_coach}', '${school_id}');
    `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTeacher: createTeacher,
};
