<template>
  <q-page class="flex flex-center column" >
      <q-list separator bordered>
        <q-item class="" 
          v-for="(task,index) in tasks" :key="task.title" 
          @click="task.done = !task.done" 
          :class="{ 'done ' : task.done}"
          clickable v-ripple>
          <q-item-section avatar>
            <q-checkbox v-model="task.done" color="primary" class="no-pointer-events"></q-checkbox>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat round dense color="primary" icon="delete" @click.stop="deleteTask(index)"></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
      <div v-if="!tasks.length" class="text-h5 text-primary text-center q-ma-xl">No Tasks</div>
      <q-input bottom-slots v-model="newTask" label="Add New Task" counter maxlength="120" class="column" @keyup.enter="addTask">
        <template v-slot:append>
          <q-btn class="q-mt-sm" color="secondary" push>
              <q-icon center name="add" @click="addTask()"/>
          </q-btn>
        </template>
      </q-input>
      
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'



export default defineComponent({
  name: 'TasksPage',
  setup(){
    const $q = useQuasar();
    return{
      $q
    }
  },
  data(){
    return{
      newTask: '',
      tasks:[]
    }
  },
  methods: {
    deleteTask(index){
      this.$q.dialog({
          title: 'Confirm',
          message: 'Would you like to delete this task?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.tasks.splice(index,1)
          this.$q.notify({
          message: 'Task Deleted.',
          color: 'primary'
        })
        })
      },

      addTask(){
        this.tasks.push({
            title: this.newTask,
            done: false
        });
        this.newTask = '';
      }
      }
})
</script>

<style lang="scss">
.done{
  .q-item__label{
    text-decoration: line-through;
  }
  background-color: $secondary;
}
</style>