<template lang="">
  <div>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <ToDo v-for="t in todos" :key="t.id" :todo="t"></ToDo>
      </transition-group>
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

.todo-enter,
.todo-leave-to {
  transform: translateX(37px);
  opacity: 0;
}

.todo-enter-to,
.todo-leave {
  transform: translateX(0);
}

.todo-enter-active,
.todo-leave-active {
  transition: all 0.5s ease;
}
</style>
