<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <AddOne :addObj="add"></AddOne>
        <ToDoList :todos="todos" :check="checked" :del="del"></ToDoList>
        <ToDoFooter
          :todos="todos"
          :delAll="delAll"
          :checkAll="checkAll"
        ></ToDoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import AddOne from "./components/AddOne.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
  name: "App",
  components: {
    AddOne,
    ToDoList,
    ToDoFooter,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    add(todoObj) {
      this.todos.unshift(todoObj);
    },
    checked(todo) {
      this.todos.find((item) => item.id === todo.id).isDone = !todo.isDone;
    },
    del(todo) {
      if (confirm("确定删除吗？？")) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    },
    delAll() {
      if (this.todos.filter((item) => item.isDone).length === 0) {
        alert("没有已完成任务");
      } else if (confirm("确定删除所有已完成任务？？")) {
        this.todos = this.todos.filter((item) => !item.isDone);
      }
    },
    checkAll(all) {
      if (all) {
        this.todos.forEach((item) => (item.isDone = true));
      } else {
        this.todos.forEach((item) => (item.isDone = false));
      }
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
