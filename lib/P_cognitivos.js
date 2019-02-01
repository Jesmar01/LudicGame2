
const P_cognitivos = require("./P_cognitivosSchema");
exports.getP_cognitivos = (req, res) => {
P_cognitivos.find((err, P_cognitivos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(juegos);
  });
};

exports.getP_cognitivos = (req, res) => {
  let id = req.params.id;


  P_cognitivos.find({ _id: id }, (err, P_cognitivos) => {
    if (err) return res.status(5006).send(err);
    return res.status(200).send(P_cognitivos);
  });
};

exports.newP_cognitivos = (req, res) => {
  const newP_cognitivos = new P_cognitivos(req.body);
  newP_cognitivos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newP_cognitivos);
  });
};



exports.updateP_cognitivos = (req, res) => {
  let nombre = req.body.nombre;
  P_cognitivos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteP_cognitivos = (req, res) => {
  P_cognitivos.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
