<template>
  <div id="app">
    <Tabs type="card" @on-contextmenu="handleContextMenu">
           <TabPane label="标签一" name="tab1" context-menu>标签一的内容</TabPane>
           <TabPane label="标签二" name="tab2">标签二的内容</TabPane>
           <TabPane label="标签三" name="tab3" context-menu>标签三的内容</TabPane>
           <template slot="contextMenu">
               <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
               <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
           </template>
       </Tabs>
    <HelloWorld msg="Welcome to Your Vue.js App"/>


    <input type="text" @input="change" name="" id="" :value="num">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data:()=>{
    return {
      // num: 0,
    }
  },
  computed:{
    num:{

      get: function (value) {
        return value
      },
      // setter
      set: function (newValue) {
        var names = newValue;
        console.log(names)
        return newValue
      }
    }

  },
  methods:{
    handleContextMenu(){

    },
    handleContextMenuEdit(){
      
    },
    change(e){
      console.log(e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
