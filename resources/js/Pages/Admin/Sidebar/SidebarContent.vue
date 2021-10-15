<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :href="route('admin:dashboard')"
            :active="route().current('admin:dashboard')"
        >
            <template #icon>
                <DashboardIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>
        </SidebarLink>

        <SidebarLink
            title="Users"
            :href="route('admin:users.index')"
            :active="isUrl('admin/users*')"
        >
            <template #icon>
                <UserGroupIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Dropdown">
            <SidebarCollapsibleItem href="#" title="Link 1" :active="false" />
            <SidebarCollapsibleItem href="#" title="Link 2" :active="true" />
            <SidebarCollapsibleItem href="#" title="Link 3" :active="false" />
        </SidebarCollapsible>

        <!-- Examples -->
        <!-- <SidebarCollapsible title="Dropdown" :active="$page.url.startsWith('/users')">
            <SidebarCollapsibleItem href="#" title="List" :active="$page.url === '/users/index'" />
            <SidebarCollapsibleItem href="#" title="Create" :active="$page.url === '/users/create'" />
        </SidebarCollapsible>

        <SidebarCollapsible title="Dropdown" :active="usePage().url.value.startsWith('/users')">
            <template #icon>
                <UserIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>

            <SidebarCollapsibleItem href="#" title="List" :active="route().current('users.index')" />
            <SidebarCollapsibleItem href="#" title="Create" :active="route().current('users.create')" />
        </SidebarCollapsible> -->
    </PerfrectScrollbar>
</template>

<script>
import PerfrectScrollbar from '@/Shared/PerfectScrollbar'
import SidebarLink from '@/Pages/Admin/Sidebar/SidebarLink.vue'
import { DashboardIcon } from '@/Icons/outline.jsx'
import { UserGroupIcon } from '@heroicons/vue/outline'
import SidebarCollapsible from '@/Pages/Admin/Sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/Pages/Admin/Sidebar/SidebarCollapsibleItem.vue'

export default {
    components: {
        PerfrectScrollbar,
        SidebarLink,
        DashboardIcon,
        SidebarCollapsible,
        SidebarCollapsibleItem,
        UserGroupIcon
    },
}
</script>
