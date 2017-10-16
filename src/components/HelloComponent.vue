<template>
  <div>
    <button @click="addTwoNumbers">Click Me.</button>
    {{ val }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface HelloData {
  val: number;
}
export default Vue.extend({
  data() {
    const helloData: HelloData = {
      val: 0
    }
    return helloData
  },
  methods: {
    addTwoNumbers() {
      this.val = this.addUs(2, 3);
    },
    addUs(a: number, b: number) {
      return a + b;
    }
  }
})
</script>
