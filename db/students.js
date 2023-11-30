const client = require("./client");

const createStudent = async (
  grade_level,
  gpa,
  name,
  start_date,
  graduation_date,
  has_required_classes,
  school_id
) => {
  try {
    await client.query(`
      INSERT INTO students (grade_level, gpa, name, start_date, graduation_date, has_required_classes, school_id)
      VALUES ('${grade_level}', '${gpa}', '${name}', '${start_date}', '${graduation_date}', '${has_required_classes}', '${school_id}');
    `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createStudent: createStudent,
};
