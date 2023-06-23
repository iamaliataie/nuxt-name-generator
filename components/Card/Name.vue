<script setup lang="ts">

interface props {
    name: String,
}

const emit = defineEmits(["remove"])

const props = defineProps<props>()


const handleRemove = () => {
    emit('remove')
}

</script>

<template>
    <div class="card">
        {{ name }}
        <span @click="handleRemove">x</span>
    </div>
</template>


<style scoped>
.card{
  background-color: rgb(5, 5, 162);
  color: white;
  padding: 20px 30px;
  border-radius: 10px;
  position: relative;
}
.card span {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
}
</style>