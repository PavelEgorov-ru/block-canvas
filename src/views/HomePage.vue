<template>
  <CanvasContainer class="test" />
</template>

<script>
import CanvasContainer from "@/components/CanvasContainer.vue";
export default {
  name: "HomePage",
  components: {
    CanvasContainer,
  },
};
</script>

<style scoped>
.test {
  margin: 30px auto;
}
</style>
