const Repair = require("../models/repair.model");

exports.allRepair = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: "pending",
    },
  });
  res.status(200).json({
    message: "The query has been done success",
    results: repairs.length,
    repairs,
  });
};

exports.repairById = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: "error",
      message: "The repair not found",
    });
  }
  res.status(200).json({
    status: "succes",
    message: "the query has been done success",
    repair,
  });
};

exports.createRepair = async (req, res) => {
  const { date, UserId } = req.body;

  const repair = await Repair.create({
    date,
    UserId,
  });
  res.status(201).json({
    stauts: "success",
    message: "Creando las reparaciones",
    repair,
  });
};

exports.updateRepair = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });
  if (!repair) {
    return res.status(404).json({
      status: "error",
      message: "the repair not found",
    });
  }
  await repair.update({
    status: "completed",
  });

  res.json({
    message: "The repair has been update",
  });
};

exports.deleteRepair = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: "error",
      message: "the repair not found",
    });
  }

  await repair.update({
    status: "cancelled",
  });

  res.json({
    message: "The repair has been deleted",
  });
};
