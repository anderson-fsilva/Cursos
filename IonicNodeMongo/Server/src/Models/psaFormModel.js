

const mongoose = require('mongoose')

var Schema = mongoose.Schema;




/*var Immobile = new Schema ({
  tpImmobile: Number,
  situationImmobile: Number,
  dateVisit: String
  })
*/


var PsaFormSchema = new Schema({

  places: {
      type: String,
      required: [true, 'Informe o logradouro corretamente']
  },

  immobile: {
    tpImmobile: Number,
    situationImmobile: Number,
    dateVisit: String,
  },

  trash: {
    tpTrash: Number,
    packaging: Number,                  // Acondicionamento
    domicileTrashDestiny: Number       // Se o lixo for domiciliar, qual o destino?
  },

  vtAedes: {
    
    tpBreedingGrounds: {
      A1: Number,
      A2: Number,
      B: Number,
      C: Number,
      D1: Number,
      D2: Number,
      E: Number
    },    // Tipo de criadouros
    
    tpTreatment: {
      positive: Number,
      mechanical: Number,
      biological: Number,
      chemical: Number
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
      positive: Number,
      mechanical: Number,
      biological: Number,
      chemical: Number
    }
  
  },
  
  ovitraps: Number,
  
  larvicides: {
    BTiG_gramas: Number,
    BTiG_depositos: Number,      
    BTiWDg_gramas: Number,
    BTiWDg_depositos: Number,
    BsG_gramas: Number,
    BsG_depositos: Number
  }

})


  module.exports = mongoose.model('PsaForm', PsaFormSchema)           // Exportando os dados. O nome da tabela no mongo vai ser Produto. 
                                                                    // Será enviado ao banco o ProductSchema.