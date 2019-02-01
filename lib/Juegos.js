const Juegos = require("./JuegosSchema");
exports.getJuegos = (req, res) => {
Juegos.find((err, juegos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(juegos);
  });
};

exports.getJuegos = (req, res) => {
  let id = req.params.id;


  Juegos.find({ _id: id }, (err, juegos) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(juegos);
  });
};

exports.newJuegos = (req, res) => {
  const newJuegos = new Juegos(req.body);
  newJuegos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newJuegos);
  });
};



exports.updateJuegos = (req, res) => {
  let nombre = req.body.nombre;
  Juegos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteJuegos = (req, res) => {
  Juegos.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
