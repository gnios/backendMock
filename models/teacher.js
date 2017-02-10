function Teacher(rawData) {
   var entity = {};
   entity.cpf = rawData.cpf || '';
   entity.nome = rawData.nome || '';
   entity.ies = rawData.ies || '';
   entity.email = rawData.email || '';
   return entity;
}