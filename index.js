import {TaskItem} from './modules/app/model/taskitem.js'
import {TaskList} from './modules/app/model/tasklist.js'
import {View} from './modules/mvc/view/view.js'
import {TaskListComponent} from './modules/app/view/tasklistcomponent.js'

//TESTS

//MODELS
const list = new TaskList("My List");
// list.read()
list.add(new TaskItem("Read the documentation"));
list.add(new TaskItem("Sketch out a plan"));
// list.update()

//VIEWS
const view = new View([
    new TaskListComponent(list)
]);

//RENDERING
console.log(view.render())
//HTML ALSO?
document.body.innerHTML = view.html();

