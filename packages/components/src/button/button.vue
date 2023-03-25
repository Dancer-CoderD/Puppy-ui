<template>
  <button class="pu-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "pu-button" });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`pu-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
