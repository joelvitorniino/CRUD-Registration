app.get("/costumers/id=:id", (req, res) => {
    Registration.findAll({
      where: { id: req.params.id },
    })
      .then((data) =>
        res.json({
          firstName: data.map((field) => field.firstName).toString(),
          lastName: data.map((field) => field.lastName).toString(),
          birthDate: data.map((field) => field.birthDate).toString(),
          telephoneNumber: data.map((field) => field.telephoneNumber).toString(),
          gender: data.map((field) => field.gender).toString(),
          email: data.map((field) => field.email).toString(),
        })
      )
      .catch((err) => res.json({ error: err }));
  });
  
  app.post("/costumers", (req, res) => {
    Registration.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      telephoneNumber: req.body.telephoneNumber,
      gender: req.body.gender,
      email: req.body.email,
    })
      .then(() => res.json({ data: "Add with success" }))
      .catch((err) => res.json({ error: err }));
  });
  
  app.post("/costumers/id=:id", (req, res) => {
    Registration.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        telephoneNumber: req.body.telephoneNumber,
        gender: req.body.gender,
        email: req.body.email,
      },
      { where: { id: req.params.id } }
    )
      .then(() => res.json({ data: "Updated costumers with success" }))
      .catch((err) => res.json({ error: err }));
  });
  
  app.delete("/costumers/id=:id", (req, res) => {
    Registration.destroy({ where: { id: req.params.id } })
      .then(() => res.json({ data: "Costumer has been destroyed with success" }))
      .catch((err) => res.json({ error: err }));
  });
  