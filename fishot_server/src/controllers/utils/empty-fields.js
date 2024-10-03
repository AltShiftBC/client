

module.exports = async function isAnyEmpty(...fields) {
    const emptyFields = fields.filter(field => field === '')
    if(emptyFields.length == 0) return false
    return true
}