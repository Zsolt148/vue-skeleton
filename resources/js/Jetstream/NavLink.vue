<template>
    <inertia-link :href="href" :class="classes">
        <slot></slot>
    </inertia-link>
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
            classes() {
                return this.active
                            ? 'inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 font-bold leading-5 text-blue-500 focus:outline-none focus:border-black dark:focus:border-white transition'
                            : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-bold leading-5 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white focus:outline-none focus:text-black dark:focus:text-white focus:border-black dark:focus-border-white transition'
            }
        }
    }
</script>
