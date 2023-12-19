import { Component } from '../../mvc/view/component.js'


class TaskListComponent extends Component {
    render() {
        return this.data + ":\n" + this.data.list.map(task => task).join("\n")
    }
}
export { TaskListComponent }