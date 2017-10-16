import Vue from "vue";
import HelloComponent from "./components/HelloComponent.vue";
let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
        <hello-component></hello-component>
    </div>`,
    data: {
        name: "World"
    },
    components: {
      HelloComponent
    }
});