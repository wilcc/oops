const Stack = function() {
  return {
    items: [],
    add: function(name){
      this.items.push(name)
    },
    remove: function(){
      const toBe = this.items[this.items.length-1]
      this.items.pop()
      return toBe
    },
    peek:function(){
      return this.items[this.items.length-1]
    }
  }
}

const Queue = function() {
  return {
    items: [],
    add: function(name){
      this.items.push(name)
    },
    remove: function(){
      const toBe = this.items[0]
      this.items.shift()
      return toBe
    },
    peek: function(){
      return this.items[0]
    }
  }
}

module.exports = {
  Stack,
  Queue,
}