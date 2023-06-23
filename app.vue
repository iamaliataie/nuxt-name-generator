<script setup lang="ts">
import { Gender, Length, names } from "@/data"

interface OptionsState {
  gender: Gender;
  length: Length;
}

const options = reactive < OptionsState > ({
  gender : Gender.GIRL,
  length : Length.SHORT 
})


const optionsArray = [
  {
    title: "1) Choose a gender",
    category: 'gender',
    buttons: [Gender.BOY, Gender.GIRL]
  },
  {
    title: "1) Choose name's length",
    category: 'length',
    buttons: [Length.SHORT, Length.LONG, Length.ALL]
  },
]


const selectedNames = ref<String[]>([])

const computedNames = () => {
  const filteredNames = names
    .filter(name => name.gender === options.gender)
    .filter(name => {
      if (options.length == Length.ALL) return true
      else return name.length === options.length
    })
    selectedNames.value = filteredNames.map(name => name.name)
}

const deleteName = (index: Number) => {
  const namesCopy = [...selectedNames.value]
  namesCopy.splice(index, 1)
  selectedNames.value = namesCopy;
}

</script>

<template>
  <div class="wrapper">
    <h1>Name Generator</h1>
    <div class="container">
      <Option v-for="option in optionsArray" :key="option.category" :option="option" :options="options" /> 
      <button @click="computedNames" class="search-btn">Find Names</button>
    </div>
    <div class="card-container">
      <CardName v-for="(name, index) in selectedNames" :key="index" :name="name" @remove="() => deleteName(index)"/>
  </div>
  </div>
</template>

<style scoped>
.wrapper{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: pink;
  padding: 50px;
  height: fit-content;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.options-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.search-btn{
  width: fit-content;
  margin-top: 20px;
  background-color: red;
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  color: white;
}

.card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  width: 400px;
}

</style>