<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer">
            <i class="fa-solid fa-plus addBtn" @click="addTodo"></i>
        </span>
        <Teleport to="body">
            <Modal :show="showModal" @close="toggleModal">
                <template #header>
                    <h3>
                        경고!
                        <i class="closeModalBtn fa-solid fa-xmark" @click="toggleModal"></i>
                    </h3>
                </template>
                <template #body>
                    아무것도 입력하지 않으셨습니다.
                </template>
            </Modal>
        </Teleport>
    </div>
</template>

<script>
import Modal from "./common/Modal.vue"
export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== '') {
                this.$emit('addTodoITem',this.newTodoItem)
                this.clearInput()
            } else {
                this.showModal = !this.showModal
            }
        },
        toggleModal() {
            this.showModal = !this.showModal
        }, 
        clearInput() {
            this.newTodoItem = ''
        }
    },
    components: { Modal }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>