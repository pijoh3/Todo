<template>
    <div>
        <ul>
            <li class="shadow" v-for="(todoItem,index) in todoItems" :key="todoItem"> 
                <i class="checkBtn fa-solid fa-check" :class="{checkBtnCompleted : todoItem.completed}" @click="toggleComplte(todoItem)"></i>
                <span :class="{textCompleted : todoItem.completed}"> {{ todoItem.item }} </span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['todoItems'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeItem', todoItem, index)
        },
        toggleComplte(todoItem, index) {
            this.$emit('toggleItem',todoItem, index)
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: nono;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>