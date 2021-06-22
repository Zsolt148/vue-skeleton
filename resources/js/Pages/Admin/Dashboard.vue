<template>
    <admin-layout>
        <template #header>
            Kezdőlap
        </template>

        <welcome />
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import Welcome from '@/Jetstream/Welcome'

    export default {
        components: {
            AdminLayout,
            Welcome,
        },
    }
</script>
