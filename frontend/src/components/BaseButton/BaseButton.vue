<template>
  <button
      type="button"
      :class="`btn btn-${btnVariant} ${iconOnly ? 'icon-only' : ''}`"
      @click="emit('action')"
  >
    {{ btnText }}
      <i class="material-icons">{{ iconName }}</i>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

withDefaults(defineProps<{
  btnVariant: 'success' | 'primary' | 'danger' | 'tertiary';
  btnText?: string;
  iconName: string;
  iconOnly?: boolean;
}>(), {
  iconName: 'check',
  variant: 'success',
});

const emit = defineEmits<{
  (e: 'action'): void,
}>();
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  height: 24px;
  font-weight: 600;
  border-radius: 10px;
  padding: 0.5rem;

  &.icon-only {
    width: 24px;
    border-radius: 50%;
  }

i {
  font-size: 14px;
}

&:disabled {
  background-color: rgb(231, 230, 230);
  color: darkgray;
  pointer-events: none;
}

&-success {
  background-color: rgb(71, 226, 44);

  &:hover {
    background-color: rgb(55, 186, 31);
  }
}

&-danger {
  background-color: rgb(239, 45, 45);
  height: 30px;

  &:hover {
    background-color: rgb(198, 30, 0);
  }
}

&-primary {
  background-color: rgb(60, 141, 246);
  color: #fff;

  &:hover {
    background-color: rgb(19, 114, 181);
  }
}

&-tertiary {
  border: none;
  background-color: #f5a055;

  &:hover {
    background-color: rgb(181, 117, 43);
  }

  i {
    color: #000;
  }
  }
}
</style>