var myLayer = new Layer(5); // create a layer of 5 neurons
// Create a connection
var connection = new Connection(myLayer.neurons[0], myLayer.neurons[1])
// Store references to the connection in the neurons
myLayer.neurons[0].addOutputConnection(connection)
myLayer.neurons[1].addInputConnection(connection)
function repeat(n,Txt){
    for(i=0; i<n;i++){
        document.getElementById("repeater").innerHTML = 
          document.getElementById("repeater").innerHTML + "<br /> "
           + Txt;
    }
}

import uid from './uid'
class Neuron {
  constructor() {
    this.inputConnections = []
    this.outputConnections = []
    this.bias = 0
    // delta is used to store a percentage of change in the weight
    this.delta = 0
    this.output = 0
    this.error = 0
    this.id = uid()
  }

  toJSON() {
    return {
      id: this.id,
      delta: this.delta,
      output: this.output,
      error: this.error,
      bias: this.bias,
      inputConnections: this.inputConnections.map(i => i.toJSON()),
      outputConnections: this.outputConnections.map(i => i.toJSON())
    }
  }

  getRandomBias() {
    const min = -3;
    const max = 3
    return Math.floor(Math.random() * (+max - +min)) +min; 
  }

  addInputConnection(connection) {
    this.inputConnections.push(connection)
  }

  addOutputConnection(connection) {
    this.outputConnections.push(connection)
  }

  setBias(val) {
    this.bias = val
  }

  setOutput(val) {
    this.output = val
  }

  setDelta(val) {
    this.delta = val
  }

  setError(val) {
    this.error = val
  }
}

export default Neuron

class Connection {
  constructor(from, to) {
    this.from = from
    this.to = to
    this.weight = Math.random()
    this.change = 0
  }

  toJSON() {
    return {
      change: this.change,
      weight: this.weight,
      from: this.from.id,
      to: this.to.id
    }
  }

  setWeight(w) {
    this.weight = w
  }

  setChange(val) {
    this.change = val
  }
}

export default Connection

import Neuron from './neuron'

class Layer {
  constructor(numberOfNeurons) {
    const neurons = []
    for (var j = 0; j < numberOfNeurons; j++) {
      const neuron = new Neuron()
      neurons.push(neuron)
    }

    this.neurons = neurons
  }

  toJSON() {
    return this.neurons.map(n => {
      return n.toJSON()
    })
  }
}

export default Layer
