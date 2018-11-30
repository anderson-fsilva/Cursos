

const mongoose = require('mongoose')

var Schema = mongoose.Schema;


var PsaFormSchema = new Schema({

  places: {
      type: String, 
      required: [true, 'Informe o logradouro corretamente']
  },

  immobile: {
    tpImmobile: String,
    situationImmobile: String,
    dateVisit: String,
  },

  trash: {
    tpTrash: String,
    packaging: String,                  // Acondicionamento
    domicileTrashDestiny: String       // Se o lixo for domiciliar, qual o destino?
  },

  vtAedes: {
    
    tpBreedingGrounds: {        // Tipo de criadouros.
      A1: String,
      A2: String,
      B: String,
      C: String,
      D1: String,
      D2: String,
      E: String
    },    
    
    tpTreatment: {
      positive: String,
      mechanical: String,
      biological: String,
      chemical: String
    }
  },

  vtCulex: {
    
    tpBreedingGrounds: {
      fosse: Boolean,                            // Fossa
      cistern: Boolean,                          // Cisterna
      channelDichGutters: Boolean,                // Canal-Canaletas-Valas
      puddle: Boolean,                            // Charco, poça de água
      inspectionBoxDrainage: Boolean             // Caixa de inspeção - Drenagem
    },

    tpTreatment: {
      positive: String,
      mechanical: String,
      biological: String,
      chemical: String
    }
  
  },
  
  ovitraps: String,
  
  larvicides: {
    BTiG_gramas: String,
    BTiG_depositos: String,      
    BTiWDg_gramas: String,
    BTiWDg_depositos: String,
    BsG_gramas: String,
    BsG_depositos: String
  }

})


  module.exports = mongoose.model('PsaForm', PsaFormSchema)           // Exportando os dados. O nome da tabela no mongo vai ser Produto. 
                                                                    // Será enviado ao banco o ProductSchema.