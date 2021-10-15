<template>
    <Head title="Users" />

    <admin-layout>
        <template #header>
            Felhasználók
        </template>

        <div>
            <base-search @search="updateSearch" :search-term="params.search"></base-search>

            <pagination class="my-5" :links="users.links" />

            <div class="bg-white dark:bg-gray-700 rounded-md shadow overflow-x-auto">
                <table class="w-full whitespace-nowrap">
                    <tr class="text-left font-bold">
                        <th class="px-6 pt-6 pb-4">
                            <span class="inline-flex w-full justify-between cursor-pointer" @click="updateSort('name')">
                                Név
                                <icon v-if="params.field.value === 'name' && params.direction.value === 'asc'" name="cheveron-up" class="w-4 h-4"></icon>
                                <icon v-if="params.field.value === 'name' && params.direction.value === 'desc'" name="cheveron-down" class="w-4 h-4"></icon>
                            </span>
                        </th>
                        <th class="px-6 pt-6 pb-4">
                            <span class="inline-flex w-full justify-between cursor-pointer" @click="updateSort('email')">
                                Email
                                <icon v-if="params.field.value === 'email' && params.direction.value === 'asc'" name="cheveron-up" class="w-4 h-4"></icon>
                                <icon v-if="params.field.value === 'email' && params.direction.value === 'desc'" name="cheveron-down" class="w-4 h-4"></icon>
                            </span>
                        </th>
                        <th class="px-6 pt-6 pb-4">
                            <span class="inline-flex w-full justify-between cursor-pointer" @click="updateSort('role')">
                                Jogosultság
                                <icon v-if="params.field.value === 'role' && params.direction.value === 'asc'" name="cheveron-up" class="w-4 h-4"></icon>
                                <icon v-if="params.field.value === 'role' && params.direction.value === 'desc'" name="cheveron-down" class="w-4 h-4"></icon>
                            </span>
                        </th>
                        <th class="px-6 pt-6 pb-4">
                            <span class="inline-flex w-full justify-between cursor-pointer" @click="updateSort('created_at')">
                                Létrehozva
                                <icon v-if="params.field.value === 'created_at' && params.direction.value === 'asc'" name="cheveron-up" class="w-4 h-4"></icon>
                                <icon v-if="params.field.value === 'created_at' && params.direction.value === 'desc'" name="cheveron-down" class="w-4 h-4"></icon>
                            </span>
                        </th>
                    </tr>
                    <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-100 dark:hover:bg-gray-800 focus-within:bg-gray-100">
                        <td class="border-t dark:border-gray-400">
                            <Link class="px-6 py-2 flex items-center focus:text-indigo-500" :href="route('admin:users.edit', user.id)">
                                {{ user.name }}
                            </Link>
                        </td>
                        <td class="border-t dark:border-gray-400">
                            <Link class="px-6 py-2 flex items-center" :href="route('admin:users.edit', user.id)" tabindex="-1">
                                {{ user.email }}
                            </Link>
                        </td>
                        <td class="border-t dark:border-gray-400">
                            <Link class="px-6 py-2 flex items-center" :href="route('admin:users.edit', user.id)" tabindex="-1">
                                {{ user.role_val }}
                            </Link>
                        </td>
                        <td class="border-t dark:border-gray-400">
                            <Link class="px-6 py-2 flex items-center" :href="route('admin:users.edit', user.id)" tabindex="-1">
                                {{ user.created_at }}
                            </Link>
                        </td>
                        <td class="border-t w-px dark:border-gray-400">
                            <Link class="px-4 flex items-center" :href="route('admin:users.edit', user.id)" tabindex="-1">
                                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
                            </Link>
                        </td>
                    </tr>
                    <tr v-if="users.data.length.value === 0">
                        <td class="border-t px-6 py-2" colspan="4">Nem található felhasználó</td>
                    </tr>
                </table>
            </div>
            <pagination class="my-5" :links="users.links" />
        </div>
    </admin-layout>
</template>

<script>
import BaseSearch from "@/Pages/Admin/Components/BaseSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import JetButton from "@/Jetstream/Button";
import Icon from '@/Shared/Icon'
import Pagination from '@/Shared/Pagination'
import { getParams, getWatch } from '@/Use/useQuery';
import { Link, Head } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Icon,
        JetButton,
        AdminLayout,
        Pagination,
        BaseSearch,
        Link,
        Head
    },
    props: {
        filters: Object,
        users: Object,
    },
    setup(props) {
        const params = getParams(props);

        function updateSearch(value) {
            params.search.value = value;
        }

        function updateSort(field) {
            params.field.value = field;
            params.direction.value = params.direction.value === 'asc' ? 'desc' : 'asc';
        }

        getWatch(params, 'admin:users.index');

        return {
            params,
            updateSearch,
            updateSort,
        }
    },
};
</script>
