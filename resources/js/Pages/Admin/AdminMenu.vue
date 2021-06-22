<template>
    <div>
        <div class="flex flex-col flex-1 mt-4 justify-between space-y-4">
            <inertia-link class="flex items-center px-6 py-2 text-gray-700 hover:text-blue-500" :class="isUrl('admin$') ? 'bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 border-r-4 border-blue-500 text-blue-500' : ''" :href="route('admin:dashboard')">
                <icon name="dashboard" class="w-4 h-4 mr-4" />
                <div :class="isUrl('admin$') ? 'font-bold' : 'group-hover:text-blue-900'">Kezdőlap</div>
            </inertia-link>

            <inertia-link class="flex items-center px-6 py-2 text-gray-700 hover:text-blue-500" :class="isUrl('admin/users*') ? 'bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 border-r-4 border-blue-500 text-blue-500' : ''" :href="route('admin:users.index')">
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
    methods: {
        isUrl(...urls) {
            return urls.filter(url => this.$page.url.match(url)).length
        },
    },
}
</script>
