<template lang="">
  <div>
    <li @click="check">
      <label>
        <input type="checkbox" :checked="todo.isDone" @change="check" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click.stop="del">删除</button>
    </li>
  </div>
</template>
<script>
export default {
  props: ["todo", "checkThis", "delThis"],
  methods: {
    check() {
      this.checkThis(this.todo);
    },
    del() {
      this.delThis(this.todo);
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #d5d5d5;
}

li:hover button {
  display: block;
}
</style>
