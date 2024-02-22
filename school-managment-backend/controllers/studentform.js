const StudentForm = require("../models/studentform");
const sequelize = require("../utils/database");

exports.postFormData = async (req, res, next) => {
  const t = await sequelize.transaction();
  const name = req.body.name;
  const email = req.body.email;
  const dob = req.body.dob;
  const address = req.body.address;
  const phone = req.body.phone;
  const course = req.body.course;
  try {
    const formData = await StudentForm.create(
      {
        name: name,
        email: email,
        dob: dob,
        address: address,
        phone: phone,
        course: course,
      },
      { transaction: t }
    );
    await t.commit();
    res.status(201).json(formData);
  } catch (err) {
    await t.rollback();
    throw new Error(err);
  }
};
