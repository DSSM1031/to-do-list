<template lang="">
  <div class="todo-footer" v-show="counts">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ hasDone }}</span> / 全部{{ counts }}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["todos", "delAll", "checkAll"],

  computed: {
    counts() {
      return this.todos.length;
    },
    hasDone() {
      return this.todos.reduce((pre, item) => {
        return pre + (item.isDone ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        if (this.counts !== 0) {
          return this.counts === this.hasDone;
        }
        return false;
      },
      set(value) {
        return this.checkAll(value);
      },
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
