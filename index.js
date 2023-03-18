const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(timestamp, productor, producto, cantidad, certificado, ubicacion, evaluacion, votacion, tipoAlimento, fechaCaducidad, procesoProduccion, ubicacionExacta, pruebasLaboratorio, contacto, certificaciones, transacciones, hashPrevio='', id='') {
    this.timestamp = timestamp
    this.productor = productor
    this.producto = producto
    this.cantidad = cantidad
    this.certificado = certificado
    this.ubicacion = ubicacion
    this.evaluacion = evaluacion
    this.votacion = votacion
    this.tipoAlimento = tipoAlimento
    this.fechaCaducidad = fechaCaducidad
    this.procesoProduccion = procesoProduccion
    this.ubicacionExacta = ubicacionExacta
    this.pruebasLaboratorio = pruebasLaboratorio
    this.contacto = contacto
    this.certificaciones = certificaciones
    this.transacciones = []
    this.hashPrevio = hashPrevio
    this.comodin = 0
    this.hash = this.calcularHash()
    this.id = id
   
  }

  calcularHash() {
    return SHA256(this.timestamp + this.productor + this.producto + this.cantidad + this.certificado + this.ubicacion + this.evaluacion + this.votacion + this.tipoAlimento + this.fechaCaducidad + this.procesoProduccion + this.ubicacionExacta + this.pruebasLaboratorio + this.contacto + this.certificaciones + this.transacciones + this.hashPrevio + this.comodin).toString()
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.crearBloqueGenesis()]
  }

  crearBloqueGenesis() {
    return new Block('01/01/2023', 'Ninguno', 'Ninguno', 0, 'Ninguno', 'Ninguno', 'Ninguno', 'Ninguno', 'Ninguno', '01/01/2023', 'Ninguno', 'Ninguno','Ninguno', 'Ninguno', 'Ninguno', '0')
  }

  obtenerUltimoBloque() {
    return this.chain[this.chain.length - 1]
  }

  agregarBloque(nuevoBloque) {
    nuevoBloque.hashPrevio = this.obtenerUltimoBloque().hash
    nuevoBloque.hash = nuevoBloque.calcularHash()
    this.chain.push(nuevoBloque)
  }

  esCadenaValida() {
    for (let i = 1; i < this.chain.length; i++) {
      const bloqueActual = this.chain[i]
      const bloqueAnterior = this.chain[i - 1]

      if (bloqueActual.hash !== bloqueActual.calcularHash()) {
        return false
      }

      if (bloqueActual.hashPrevio !== bloqueAnterior.hash) {
        return false
      }
    }

    return true
  }
}

// Crear una nueva instancia de la blockchain
const foodchain = new Blockchain()

foodChain.agregarBloque(new Block('02/01/2022', 'Productor 1', 'Producto 1', 10, 'Certificado 1', 'Ubicacion 1', 'Evaluacion 1', 'Votacion 1', 'Tipo 1', '01/02/2023', 'Proceso 1', 'Ubicacion exacta 1', 'Pruebas 1', 'Contacto 1', 'Certificaciones 1', 'Transacciones 1'))
foodChain.agregarBloque(new Block('03/01/2022', 'Productor 2', 'Producto 2', 5, 'Certificado 2', 'Ubicacion 2', 'Evaluacion 2', 'Votacion 2', 'Tipo 2', '01/03/2023', 'Proceso 2', 'Ubicacion exacta 2', 'Pruebas 2', 'Contacto 2', 'Certificaciones 2', 'Transacciones 2'))

console.log(JSON.stringify(foodChain, null, 4))
