<template>
    <div>
        <div class="flex flex-col flex-1 mt-4 justify-between space-y-4">
            <inertia-link :class="getClass('admin$')" :href="route('admin:dashboard')">
                <icon name="dashboard" class="w-4 h-4 mr-4 group" />
                <div :class="isUrl('admin$') ? 'font-semibold' : 'group-hover:text-blue-900'">Kezdőlap</div>
            </inertia-link>

            <inertia-link :class="getClass('admin/users*')" :href="route('admin:users.index')">
                <icon name="users" class="w-4 h-4 mr-4 group" />
                <div :class="isUrl('admin/users*') ? 'font-semibold' : 'group-hover:text-blue-900'">Felhasználók</div>
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
        getClass(...urls) {
            return this.isUrl(...urls) ? 'dashboard-link-active' : 'dashboard-link';
        }
    },
}
</script>
