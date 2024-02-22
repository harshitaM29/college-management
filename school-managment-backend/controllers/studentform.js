const StudentForm = require("../models/studentform");
const TrackStatus = require("../models/trackstatus");
const sequelize = require("../utils/database");

exports.postFormData = async (req, res, next) => {
  const t = await sequelize.transaction();
  const user = req.user.id;
  const name = req.body.name;
  const email = req.body.email;
  const dob = req.body.dob;
  const address = req.body.address;
  const phone = req.body.phone;
  const course = req.body.course;
  const ssc = req.body.ssc;
  const hsc = req.body.hsc;
  try {
    const formData = await StudentForm.create({
      name: name,
      email: email,
      dob: dob,
      address: address,
      phone: phone,
      ssc: ssc,
      hsc: hsc,
      course: course,
    });
    const status = await TrackStatus.create(
      {
        isFormSubmitted: true,
        status: "Pending",
      },
      { transaction: t }
    );
    await t.commit();
    res.status(201).json(formData, status);
  } catch (err) {
    await t.rollback();
    throw new Error(err);
  }
};
