<template>
  <div>main</div>
  <div>{{ counterStore.counter }} - {{ counterStore.doubleCounter }}</div>
  <button @click="changeCounter">改变counter</button>
</template>
<script lang="ts" setup>
import useCounterStore from '@/store/counter'
import mainRequest from '@/service'

const res = await mainRequest.get({ url: '/home/multidata' })
console.log(res)

const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(200)
}
</script>
<style lang="less" scoped></style>
