<template>
    <div>
        <div class="flex flex-col min-h-screen dark:bg-gray-700" :class="route().current('home') ? 'bg-white' : 'bg-gray-100'">
            <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-500">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between sm:justify-center h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center">
                                <Link :href="route('home')">
                                    <span class="font-bold text-blue-600 dark:text-blue-500 text-2xl">mszuosz.hu</span>
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <jet-nav-link :href="route('home')" :active="route().current('home')">
                                    Kezdőlap
                                </jet-nav-link>
                                <jet-nav-link href="#" :active="null">
                                    Teszt
                                </jet-nav-link>
                                <jet-nav-link :href="route('login')" :active="null">
                                    Login
                                </jet-nav-link>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center md:ml-4">
                            <jet-dropdown width="48" align="right">
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-bold rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-blue-600 focus:outline-none transition">
                                            Szövetség

                                            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <!-- Account Management -->
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Bemutatkozás
                                    </div>

                                    <jet-dropdown-link :href="route('home')">
                                        Történet
                                    </jet-dropdown-link>
                                    <jet-dropdown-link :href="route('home')">
                                        Szervezeti működés
                                    </jet-dropdown-link>

                                </template>
                            </jet-dropdown>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <jet-responsive-nav-link :href="route('home')" :active="route().current('home')">
                            Kezdőlap
                        </jet-responsive-nav-link>
                        <jet-responsive-nav-link :href="route('home')" :active="null">
                            Kezdőlap
                        </jet-responsive-nav-link>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"></slot>
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-grow">
                <slot></slot>
            </main>

            <section :class="route().current('home') ? 'bg-white' : 'bg-gray-100'" class="border-t border-gray-200 dark:border-gray-500 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                        <div class="px-5 py-2">
                            <a href="#" class="text-base leading-6 text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                Impresszum
                            </a>
                        </div>
                        <div class="px-5 py-2">
                            <a href="#" class="text-base leading-6 text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                Adatvédelmi Irányelvek
                            </a>
                        </div>
                        <div class="px-5 py-2">
                            <a href="#" class="text-base leading-6 text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                Elérhetőség
                            </a>
                        </div>
                    </nav>
                    <p class="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2021 MSZUOSZ. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
        <div class="fixed bottom-5 right-0 lg:right-4 p-4 bg-white dark:bg-gray-800 border-t-4 border-gray-300 dark:border-gray-500 shadow-lg rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4" v-if="!cookieAccepted">
            <h2 class="text-lg lg:text-xl mb-4 block font-bold leading-tight text-gray-700 dark:text-white">Sütik használata</h2>
            <div class="flex flex-col">
                <p class="mb-5 font-medium text-gray-600 dark:text-gray-200">
                    A weboldal sütiket (cookie-kat) használ, hogy biztonságos böngészés mellett a legjobb felhasználói élményt nyújtsa.
                </p>
                <button class="w-full px-3 py-1 bg-gray-300 dark:text-white dark:bg-gray-500 hover:bg-blue-500 hover:underline hover:text-white rounded text-gray-700 uppercase tracking-widest text-xs font-bold"
                        @click.prevent="acceptCookie"
                >
                    Elfogadom
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import JetApplicationMark from '@/Jetstream/ApplicationMark'
import JetBanner from '@/Jetstream/Banner'
import JetDropdown from '@/Jetstream/Dropdown'
import JetDropdownLink from '@/Jetstream/DropdownLink'
import JetNavLink from '@/Jetstream/NavLink'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
import { Link } from '@inertiajs/inertia-vue3'


export default {
    components: {
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        Link
    },

    mounted() {
        this.cookieAccepted = localStorage.getItem('cookie_accepted') == 'true' ? true : false;
    },

    data() {
        return {
            showingNavigationDropdown: false,
            cookieAccepted: false,
        }
    },

    methods: {
        logout() {
            this.$inertia.post(route('logout'));
        },
        acceptCookie() {
            localStorage.setItem('cookie_accepted', true);
            this.cookieAccepted = true;
        }
    }
}
</script>
