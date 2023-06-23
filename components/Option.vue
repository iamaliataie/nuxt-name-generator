<script setup lang="ts">

import { Gender, Length } from '@/data'

interface propsOptions {
  option: {
    title: String,
    category: String,
    buttons: Length[] | Gender[] 
  },
  options: {
    gender: Gender,
    length: Length,
  }
}

const props = defineProps<propsOptions>()

const handleClick = (button: any) => {
  props.options[props.option.category] = button;
  
}

</script>

<template>
    <div class="options-container">
        <h4>{{ option.title }}</h4>
        <div class="options">
            <button 
            v-for="button in option.buttons" 
            :key="button"
            :class="options[option.category] === button && 'option-active'"
            @click="handleClick(button)"
            >
              {{ button }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.options{
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: green;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid red;
}
.options button{
  width: 100%;
  padding: 10px 5px;
  background-color: white;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: rgb(10, 10, 82);
  border: 1px solid red;
  cursor: pointer;
}

.option-active {
  background-color: rgb(215, 7, 42) !important;
  color: white !important;
}
</style>