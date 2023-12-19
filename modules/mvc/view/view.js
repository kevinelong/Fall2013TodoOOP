class View {
    constructor(componentList) {
        this.componentList = componentList
    }
    render() {
        return this.componentList.map(c => c.render()).join("\n")
    }
}
export {View}
