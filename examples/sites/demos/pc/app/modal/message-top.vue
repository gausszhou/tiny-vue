<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick1">提示弹窗距离顶部 300px</tiny-button>
      <tiny-button @click="btnClick2">确认弹窗距离顶部 50vh</tiny-button>
      <tiny-button @click="btnClick3">消息距离顶部 500px</tiny-button>
    </div>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick1() {
      Modal.alert({
        status: 'info',
        message: '提示弹窗距离顶部 300px',
        top: 300
      })
    },
    btnClick2() {
      Modal.confirm({
        status: 'info',
        message: '确认弹窗距离顶部 50vh',
        top: '50vh'
      })
    },
    btnClick3() {
      Modal.message({
        status: 'info',
        message: '自定义消息的内容距离顶部 500px',
        top: 500
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
