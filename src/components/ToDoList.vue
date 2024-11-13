<template lang="">
	<div>
    <ul class="todo-main">
      <ToDo
        v-for="t in todos"
        :key="t.id"
        :todo="t"
      ></ToDo>
    </ul>
  </div>
</template>
<script>
import ToDo from "./ToDo.vue";

export default {
  components: {
    ToDo,
  },
  props: ["todos"],
};
</script>
<style scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
