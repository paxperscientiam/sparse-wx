String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.toTitleCase = function() {
  const arrSentence = this.toLowerCase().split(" ")
  arrSentence.forEach((word, index, arr) => {
    if (word.length > 3) {
      arr[index] = word.charAt(0).toUpperCase() + word.slice(1)
    }
  })
  return arrSentence.join(" ")
}
