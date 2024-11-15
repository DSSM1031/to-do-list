<template lang="">
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.isDone" @change="check()" />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="save(todo)"
          ref="editInput"
        />
      </label>
      <button class="btn btn-danger" @click="del">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-info" @click="edit(todo)">
        编辑
      </button>
      <button v-show="todo.isEdit" class="btn btn-info" @click="save(todo)">
        保存
      </button>
    </li>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    check() {
      this.$bus.$emit("checked", this.todo);
    },
    del() {
      this.$bus.$emit("del", this.todo);
    },
    edit(todo) {
      this.$bus.$emit("edit", todo.id);
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    save(todo) {
      if (!this.$refs.editInput.value.trim()) {
        this.$refs.editInput.placeholder = "不能为空！";
        return;
      }
      this.$bus.$emit("updateThis", todo.id, this.$refs.editInput.value);
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
