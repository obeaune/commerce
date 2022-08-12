// db.produtos.find(
//   { valoresNutricionais: { $elemMatch : { tipo: "proteínas",
//   $and: [{ percentual: { $gte: 30 } }, { percentual: { $lte: 40 }}] } }},
//   { _id: 0, nome: 1 } );

db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "proteínas",
    percentual: { $gte: 30, $lte: 40 } } } },
  { _id: 0, nome: 1 },
);
