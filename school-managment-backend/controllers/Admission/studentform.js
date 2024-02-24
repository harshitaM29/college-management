const StudentForm = require("../../models/Admission/studentform");
const TrackStatus = require("../../models/Admission/trackstatus");
exports.getData = async (req, res) => {
  try {
    const application = await StudentForm.findAll({
      include: { model: TrackStatus },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.status(200).json(application);
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
};

exports.postFormData = async (req, res, next) => {
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
      userId: req.user.id,
    });
    const status = await TrackStatus.create({
      isFormSubmitted: true,
      status: "Pending",
      userId: req.user.id,
      studentformId: formData.id,
    });

    res.status(200).json(formData, status);
  } catch (err) {
    throw new Error(err);
  }
};

exports.changeStatus = async (req, res) => {
  await TrackStatus.update(
    { status: req.body.status },
    {
      where: {
        studentformId: req.body.studentformId,
      },
    }
  );
};
