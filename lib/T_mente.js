const T_mente = require("./T_menteSchema");
exports.getT_mente = (req, res) => {
T_mente.find((err, t_mente) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(t_mente);
  });
};

exports.getT_mente = (req, res) => {
  let id = req.params.id;


  T_mente.find({ _id: id }, (err, t_mente) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(t_mente);
  });
};

exports.newT_mente = (req, res) => {
  const newT_mente = new T_mente(req.body);
  newT_mente.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newT_mente);
  });
};



exports.updateT_mente = (req, res) => {
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

exports.deleteT_mente = (req, res) => {
  T_mente.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
