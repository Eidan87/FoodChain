# FoodChain
Blockchain para comprar y vender alimentos de productor a consumidor

###Block.js en su primera version...

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
    this.id = id
    this.hashPrevio = hashPrevio
    this.comodin = 0
    this.hash = this.calcularHash()
    
   
  }

  calcularHash() {
    return SHA256(this.timestamp + this.productor + this.producto + this.cantidad + this.certificado + this.ubicacion + this.evaluacion + this.votacion + this.tipoAlimento + this.fechaCaducidad + this.procesoProduccion + this.ubicacionExacta + this.pruebasLaboratorio + this.contacto + this.certificaciones + this.transacciones + this.id + this.hashPrevio + this.comodin).toString()
  }
}

###Manifiesto de la FoodChain

En nuestra foodchain, creemos que cada persona tiene el derecho de conocer la procedencia y calidad de los alimentos que consume. Nos esforzamos por crear una cadena de suministro transparente, confiable y descentralizada que permita a los consumidores tomar decisiones informadas sobre sus compras.

Nuestro objetivo es conectar a los productores locales con los consumidores, eliminando intermediarios y reduciendo los costos de la cadena de suministro. Queremos fomentar la producción sostenible y ética, promoviendo la agricultura y la ganadería de pequeña escala y minimizando el impacto ambiental.

Nos comprometemos a proporcionar información completa y precisa sobre cada producto en nuestra cadena de bloques. Esto incluye detalles sobre el productor, la cantidad, el tipo de alimento, la ubicación, la fecha de caducidad, el proceso de producción, las pruebas de laboratorio y las certificaciones.

Creemos en la importancia de la evaluación y la votación de reputación de los productores y los productos en nuestra foodchain. Los consumidores pueden calificar y dejar comentarios sobre cada transacción, lo que ayuda a otros compradores a tomar decisiones más informadas.

Valoramos la seguridad y privacidad de nuestros usuarios y nos comprometemos a utilizar tecnología de encriptación avanzada para proteger la información de la cadena de bloques. Además, estamos comprometidos a cumplir con todas las regulaciones y leyes locales en nuestras operaciones.

En resumen, en nuestra foodchain, queremos ofrecer una experiencia de compra segura, transparente y ética para nuestros usuarios. Nos esforzamos por promover la producción sostenible y el consumo consciente, conectando a los productores locales con los consumidores de todo el mundo.

La aplicación real de una foodchain puede ser muy útil para mejorar la transparencia en la cadena de suministro de alimentos y garantizar la calidad y seguridad de los alimentos para los consumidores. Con una foodchain bien diseñada, se puede rastrear cada paso del proceso de producción, desde el productor hasta el consumidor final, y se pueden identificar rápidamente los puntos problemáticos en caso de un brote de enfermedad o contaminación.

Además, la evaluación y votación de los productos en la foodchain puede ayudar a los consumidores a tomar decisiones informadas sobre qué productos comprar y a los productores a mejorar la calidad de sus productos en respuesta a las críticas constructivas de los consumidores.

También es posible que las empresas alimentarias utilicen una foodchain para demostrar la calidad y seguridad de sus productos a través de certificaciones y pruebas de laboratorio y aumentar la confianza de los consumidores en su marca.

###Proceso de compra en FoodChain:

El comprador realiza una búsqueda del producto que desea adquirir en la cadena de bloques, utilizando la información de tipo de alimento y ubicación.

Se muestran los bloques que contienen información sobre el producto, incluyendo detalles como el productor, la cantidad, la fecha de caducidad, el proceso de producción, las pruebas de laboratorio, las certificaciones y la ubicación exacta.

El comprador puede ver la evaluación y votación de reputación del productor y el producto en la cadena de bloques, lo que puede influir en su decisión de compra.

Si el comprador decide comprar el producto, se realiza el pago y se registra en la cadena de bloques.

El bloque correspondiente se actualiza para reflejar que el producto ha sido vendido, lo que actualiza la cantidad disponible en la cadena de bloques.

El producto es enviado al comprador con información detallada sobre su origen, proceso de producción y certificaciones.

Si el comprador tiene alguna duda o problema con el producto, puede utilizar la información de contacto proporcionada en la cadena de bloques para comunicarse con el productor y resolver la situación.

###Propiedades de la FoodChain:

Trazabilidad: La capacidad de rastrear y registrar todo el historial de un producto, desde su producción hasta su venta final.

Transparencia: La capacidad de permitir que los consumidores y las partes interesadas accedan a información detallada sobre los productos, incluyendo detalles de la producción, certificaciones, pruebas de laboratorio y ubicación.

Seguridad alimentaria: La capacidad de garantizar la calidad y la seguridad de los productos alimentarios, utilizando datos en tiempo real para monitorear y garantizar su frescura y calidad.

Votación de reputación: La capacidad de permitir que los consumidores voten sobre la calidad y la seguridad de los productos, lo que puede ayudar a mejorar la confianza y la transparencia en la cadena alimentaria.

Certificaciones: La capacidad de registrar y verificar las certificaciones de los productos alimentarios, asegurando que cumplan con los estándares de calidad y seguridad.

Gestión de la cadena de suministro: La capacidad de administrar y optimizar la cadena de suministro de alimentos, mejorando la eficiencia y la transparencia y reduciendo los costos y el desperdicio de alimentos.

Aplicaciones móviles: La capacidad de desarrollar aplicaciones móviles que permitan a los consumidores acceder a información en tiempo real sobre los productos alimentarios, incluyendo detalles de la producción, certificaciones, pruebas de laboratorio y ubicación.

Sistemas de pago: La capacidad de utilizar criptomonedas o tokens para permitir transacciones seguras y transparentes en la cadena de suministro de alimentos.

Colaboración entre partes interesadas: La capacidad de permitir la colaboración entre todas las partes interesadas en la cadena de suministro de alimentos, incluyendo productores, distribuidores, minoristas, reguladores y consumidores, para mejorar la calidad y seguridad de los productos alimentarios.

###En caso de contaminación alimentaria:

Si se detecta que hay un alimento contaminado en la cadena alimentaria, se deben tomar medidas inmediatas para retirarlo del mercado y prevenir la propagación de la contaminación. En una cadena alimentaria basada en la tecnología blockchain, se puede rastrear el origen del alimento contaminado y retirar todos los productos relacionados con ese origen.

Una vez que se detecta el problema, se debe notificar a todos los participantes de la cadena de suministro para que puedan tomar medidas adecuadas para detener la propagación de la contaminación. Además, se puede usar la información de la blockchain para identificar la fuente de la contaminación y tomar medidas para prevenir futuros incidentes similares.

Es importante que todos los participantes de la cadena alimentaria estén comprometidos con la seguridad alimentaria y sigan prácticas adecuadas de higiene y seguridad alimentaria para minimizar los riesgos de contaminación. Además, la implementación de tecnología blockchain puede ayudar a mejorar la transparencia y trazabilidad en la cadena alimentaria, lo que puede mejorar la confianza del consumidor en la seguridad de los alimentos que consumen.

###Votación en la FoodChain

Supongamos que hay un producto específico en la cadena de suministro de alimentos, en este caso, una caja de manzanas. La empresa ha estado vendiendo esta caja de manzanas a un precio de $10, y actualmente hay 100 cajas disponibles.

Se lleva a cabo una votación para evaluar la calidad de las manzanas y, como resultado, se determina que la calidad de las manzanas es baja. La empresa decide reducir el precio de las manzanas para poder venderlas y evitar pérdidas. Se decide reducir el precio en un 25%, lo que significa que el precio de la caja de manzanas ahora será de $7.50.

Después de la reducción de precios, la empresa logra vender todas las 100 cajas de manzanas en cuestión de un día, lo que significa que la demanda de las manzanas es alta incluso con una reducción de precios del 25%. La empresa también tiene una gran cantidad de comentarios positivos de los clientes y distribuidores sobre la calidad de las manzanas después de la votación.

En resumen, la votación tuvo un impacto significativo en el precio de mercado de las manzanas, pero no afectó la demanda del producto.
