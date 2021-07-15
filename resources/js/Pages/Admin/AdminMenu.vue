<template>
    <div>
        <div class="flex flex-col flex-1 mt-4 justify-between space-y-4">
            <inertia-link :class="basicClass + (isUrl('admin$') ? activeClass : '')" :href="route('admin:dashboard')">
                <icon name="dashboard" class="w-4 h-4 mr-4" />
                <div :class="isUrl('admin$') ? 'font-bold' : 'group-hover:text-blue-900'">Kezdőlap</div>
            </inertia-link>

            <inertia-link :class="basicClass + (isUrl('admin/users*') ? activeClass : '')" :href="route('admin:users.index')">
                <icon name="users" class="w-4 h-4 mr-4" />
                <div :class="isUrl('admin/users*') ? 'font-bold' : 'group-hover:text-blue-900'">Felhasználók</div>
            </inertia-link>

            <hr class="my-6" />
        </div>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
export default {
    components: {
        Icon,
    },
    data() {
        return {
            basicClass: 'flex items-center px-6 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500',
            activeClass: ' bg-gradient-to-r from-white to-blue-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900 border-r-4 border-blue-500 text-blue-500 dark:text-blue-500',
        };
    },
    methods: {
        isUrl(...urls) {
            return urls.filter(url => this.$page.url.match(url)).length
        },
    },
}
</script>
