<template>
    <div>
        <button :class="classes" class="w-full text-left" v-if="as == 'button'">
            <slot></slot>
        </button>

        <Link :href="href" :class="classes" v-else>
            <slot></slot>
        </Link>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Link
    },
    props: ['active', 'href', 'as'],

    computed: {
        classes() {
            return this.active
                        ? 'block pl-3 pr-4 py-2 border-l-4 border-blue-400 text-base font-medium text-blue-700 dark:text-white bg-blue-100 dark:bg-gray-600 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition'
                        : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition'
        }
    }
}
</script>
