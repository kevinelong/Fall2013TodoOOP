class FieldItem {
    constructor(fieldName = "default", displayName = "", value = "") {
        this.fieldName = fieldName
        this.displayName = displayName ? displayName : fieldName
        this.value = value
        if (fieldName === "default" || !fieldName) {
            console.log("WARNING: False or default field name")
        }
    }
    toString() {
        return `${this.displayName}=${this.value}`
    }
}

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

class TaskItem extends DataModel {
    constructor(name = "", id = -1) {
        const idField = new FieldItem("id", "ID", id)
        const nameField = new FieldItem("name", "Name", name)
        super("task", "Task", [idField, nameField])
        this.id = idField
        this.name = nameField
    }
    
    toString(){
        return " - " + this.fieldList[1].value;
    }
}

class TaskList extends DataModel {
    constructor(name = "", id = -1, list = []) {
        super("task_list", "Task List", [
            new FieldItem("id", "ID", id),
            new FieldItem("name", "Name", name),
            new FieldItem("itemList", "Item List", list)
        ])
        this.list = list
    }
    add(item) {
        this.list.push(item);
    }
    toString(){
        return this.fieldList[1].value;
    }
}

class Component {
    constructor(data) {
        this.data = data
    }
    render() {
        return data;
    }
}

class View {
    constructor(componentList) {
        this.componentList = componentList
    }
    render() {
        return this.componentList.map(c => c.render()).join("\n")
    }
}

class TaskListComponent extends Component {

    render() {
        return this.data + ":\n" + this.data.list.map(task => task).join("\n")
    }
}

//TESTS

//MODELS
const list = new TaskList("My List");
list.add(new TaskItem("Read the documentation"));
list.add(new TaskItem("Sketch out a plan"));

//VIEWS
const view = new View([
    new TaskListComponent(list)
]);

//RENDERING
console.log(view.render())