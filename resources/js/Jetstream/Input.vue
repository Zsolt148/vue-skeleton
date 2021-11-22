<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input" :class="error ? 'input-error' : ''">
</template>

<script>
export default {
    props: ['modelValue', 'error'],

    emits: ['update:modelValue'],

    methods: {
        focus() {
            this.$refs.input.focus()
        }
    }
}
</script>

