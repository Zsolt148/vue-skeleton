<template>
    <div class="flex-shrink-0 px-3 lg:hidden">
        <Button
            iconOnly
            variant="secondary"
            type="button"
            v-slot="{ iconSizeClasses }"
            v-show="!sidebarState.isOpen"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :srText="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show="sidebarState.isOpen"
                :class="[iconSizeClasses]" />

            <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show="!sidebarState.isOpen"
                :class="[iconSizeClasses]" />
        </Button>
    </div>
</template>

<script>
import Button from '@/Jetstream/Button.vue'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/Icons/outline.jsx'
import { sidebarState } from '@/Composables'

export default {
    components: {
        Button,
        MenuFoldLineLeftIcon,
        MenuFoldLineRightIcon,
    },

    setup(){
        return {
            sidebarState
        }
    }
}
</script>
