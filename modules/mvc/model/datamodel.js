
class DataModel {
    constructor(tableName = "defaultName", displayName = "", fieldList = []) {
        this.tableName = tableName
        this.displayName = displayName ? displayName : tableName
        this.fieldList = fieldList
    }
    create() { }
    read() { }
    update() { }
    delete() { }
    toString() {
        return this.fieldList.map(f => f.toString()).join("\n")
    }
}
export { DataModel }