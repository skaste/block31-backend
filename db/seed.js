const client = require("./client.js");
const { createSchool } = require("./school.js");
const { createStudent } = require("./students.js");
const { createTeacher } = require("./teachers.js");

const dropTables = async () => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS students;
    DROP TABLE IF EXISTS teachers;   
    DROP TABLE IF EXISTS school; 
    `);
  } catch (err) {
    console.log(err);
  }
};

const createTables = async () => {
  try {
    await client.query(`
      CREATE TABLE school (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30), 
      city VARCHAR(30),
      state CHAR(2),
      zip_code INTEGER,
      is_accredited BOOLEAN
      );

      CREATE TABLE students (
      id SERIAL PRIMARY KEY,
      grade_level INTEGER,
      gpa DECIMAL(1,2),
      name VARCHAR(30),
      start_date DATE,
      graduation_date DATE,
      has_required_classes BOOLEAN,
      school_id INTEGER REFERENCES school(id)
      );

      CREATE TABLE teachers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30),
      room_number INTEGER,
      is_new BOOLEAN,
      is_coach BOOLEAN,
      school_id INTEGER REFERENCES school(id)
      );
    `);
  } catch (err) {
    console.log(err);
  }
};

const syncAndSeed = async () => {
  try {
    await client.connect();
    console.log("CONNECTED TO THE DB!");

    await dropTables();
    console.log(`TABLES HAVE BEEN DROPPED!`);

    await createTables();
    console.log(`CREATED THE TABLES!`);

    await createSchool("Hard Knocks", "Deal With It", "TN", "38888", "true");
    await createSchool("Tough Times", "Temporary", "TX", "12345", "false");
    console.log("SCHOOL CREATED");

    await createStudent(
      "9",
      "1.5",
      "Billy Bob",
      "12152000",
      "06122004",
      "true",
      "1"
    );
    console.log("Student Created");

    await createTeacher("Billy Jean", "201", "false", "true", "1");

    client.end();
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
    console.log(`DISCONNECTED FROM DB!`);
  }
};

syncAndSeed();
