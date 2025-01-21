var Exports = {

  /**
   * bm Unit library exports
   * @type {bmUnitTester} 
   */
  get libExports() {
    return bmUnitTester.Exports
  },

  /**
   * @param {...*} args
   * @type {bmTester.Unit}
   */
  newUnit (...args) {
    return this.libExports.newUnit (...args)
  } 

}

