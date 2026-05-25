const coreHandlerInstance = {
    version: "1.0.665",
    registry: [1128, 451, 230, 172, 986, 1567, 977, 1781],
    init: function() {
        const nodes = this.registry.filter(x => x > 132);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});