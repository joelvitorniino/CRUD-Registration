const Registration = require("../models/Registration");

module.exports = {
  async index(req, res) {
    const registers = await Registration.findAll();

    return res.json(registers);
  },

  async store(req, res) {
    const { name, telephone, birth, gender, email } = req.body;

    const register = await Registration.create({
      name,
      telephone,
      birth,
      gender,
      email,
    });

    if (!register) {
      return res.status(400).json({ error: "Costumer not found" });
    }

    return res.json(register);
  },

  async update(req, res) {
    const { costumer_id } = req.params;

    const { name, telephone, birth, gender, email } = req.body;

    await Registration.update(
      {
        name,
        telephone,
        birth,
        gender,
        email,
      },
      { where: { id: costumer_id } }
    );

    const registers = await Registration.findByPk(costumer_id);

    res.json(registers);
  },

  async findById(req, res) {
    const { costumer_id } = req.params;

    const registerById = await Registration.findByPk(costumer_id);

    return res.json(registerById);
  },

  async delete(req, res) {
    const { costumer_id } = req.params;

    await Registration.destroy({
      where: { id: costumer_id },
    });

    res.json();
  },
};
