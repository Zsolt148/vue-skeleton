<template>
    <div>
        <div class="md:flex md:flex-col">
            <div class="md:h-screen md:flex md:flex-col">
                <div class="md:flex md:flex-shrink-0">
                    <div class="md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center bg-white dark:bg-gray-700">
                        <inertia-link class="text-xl text-blue-500 font-bold" href="/">
                            Admin panel
                        </inertia-link>
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- Responsive Navigation Menu -->
                    <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                        <div class="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-700">
                            <jet-responsive-nav-link :href="route('admin:dashboard')" :active="isUrl('admin$')">
                                Kezdőlap
                            </jet-responsive-nav-link>
                            <jet-responsive-nav-link :href="route('admin:users.index')" :active="isUrl('admin/users*')">
                                Felhasználók
                            </jet-responsive-nav-link>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-500 w-full p-4 md:py-0 md:px-12 md:text-md flex justify-between items-center">
                        <header class="" v-if="$slots.header">
                            <h2 class="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                                <slot name="header"></slot>
                            </h2>
                        </header>
                        <jet-dropdown width="48" align="right">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md bg-white dark:bg-gray-700 dark:text-white hover:text-blue-600 dark:text-black focus:outline-none transition">
                                        {{ $page.props.user.name }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Profil kezelése
                                </div>

                                <jet-dropdown-link :href="route('profile.show')">
                                    Beállítások
                                </jet-dropdown-link>

                                <div class="border-t border-gray-100"></div>

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <jet-dropdown-link as="button">
                                        Kijelentkezés
                                    </jet-dropdown-link>
                                </form>
                            </template>
                        </jet-dropdown>
                    </div>
                </div>
                <div class="md:flex md:flex-grow md:overflow-hidden">
                    <admin-menu class="hidden bg-white dark:bg-gray-700 md:block flex-shrink-0 w-56 overflow-y-auto border-r border-t dark:border-gray-700" />
                    <div class="md:flex-1 sm:px-4 py-8 p-1 sm:p-2 md:p-4 md:overflow-y-auto bg-gray-100 dark:bg-gray-800" scroll-region><!-- Page Heading -->
                        <div class="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8">
                            <flash-messages />
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
import AdminMenu from '@/Pages/Admin/AdminMenu'
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import FlashMessages from "@/Shared/FlashMessages";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";

export default {
    components: {
        JetDropdown,
        JetDropdownLink,
        Icon,
        AdminMenu,
        FlashMessages,
        JetResponsiveNavLink
    },
    data() {
        return {
            showingNavigationDropdown: false,
        };
    },
    methods: {
        logout() {
            this.$inertia.post(route('logout'));
        },
        isUrl(...urls) {
            return urls.filter(url => this.$page.url.match(url)).length
        },
    }
}
</script>
