import Vue from "vue";
import HelloComponent from "/src/components/HelloComponent";
var v = new Vue({
    el: "#app",
    template: "\n    <div>\n    wat!\n        <div>Hello {{name}}!</div>\n        Name: <input v-model=\"name\" type=\"text\">\n        wut wrong\n        <apphello></apphello>\n        why you no work?\n    </div>",
    data: {
        name: "World"
    },
    components: {
        'apphello': HelloComponent
    }
});
