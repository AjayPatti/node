const User = require("../models/user");

async function handlerGetAllData(req, res) {
  const allData = await User.find({});
  return res.json(allData);
}
async function handlerGetDataId(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
}
async function handlerGetUpdateData(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Rajput" });
  return res.json({ status: "change" });
}

async function handlerDeleteData(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "delete" });
}
async function handlerStoreData(req, res) {
 
    const body = req.body;
    if (
      !body ||
      !body.firstName ||
      !body.lastName ||
      !body.gender ||
      !body.email
    ) {
      return res.status(400).json({ msg: "All field are req......." });
    }
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
    });
    return res.status(201).json({ msg: "success",id:result._id });

}
module.exports = {
  handlerGetAllData,
  handlerGetDataId,
  handlerGetUpdateData,
  handlerDeleteData,
  handlerStoreData,
};
