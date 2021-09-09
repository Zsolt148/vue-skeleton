<template>
    <admin-layout>
        <template #header>
            Kezdőlap
        </template>

        <div class="mx-auto">
            <div class="mb-4">
                <SwitchGroup>
                    <div class="flex items-center">
                        <SwitchLabel class="mr-4">Enable notifications</SwitchLabel>
                        <Switch
                            v-model="enabled"
                            :class="enabled ? 'bg-blue-500' : 'bg-gray-400'"
                            class="relative inline-flex items-center w-14 h-6 rounded-full border-2 border-transparent cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            <span class="sr-only">Use setting</span>
                            <span
                                :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                                class="inline-block w-4 h-4 transform bg-white rounded-full pointer-events-none shadow-lg transform ring-0 transition ease-in-out duration-200"
                            />
                        </Switch>
                    </div>
                </SwitchGroup>
            </div>
            <div>
                <Listbox v-model="selectedPerson">
                <div class="relative mt-1">
                    <ListboxLabel>Select:</ListboxLabel>
                    <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span class="block truncate">{{selectedPerson.name}}</span>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
                          </span>
                    </ListboxButton>

                    <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            <ListboxOption
                                v-slot="{ active, selected }"
                                v-for="person in people"
                                :key="person.name"
                                :value="person"
                                as="template"
                            >
                                <li :class="[
                                          active ? 'bg-blue-500 text-white' : 'text-gray-900',
                                          'cursor-pointer select-none relative py-2 pl-10 pr-4',
                                        ]"
                                >
                                    <span :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                      ]">
                                        {{person.name}}
                                    </span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon class="w-5 h-5" aria-hidden="true"/>
                                    </span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from '@/Layouts/AdminLayout'
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ListboxLabel,
    Switch, SwitchGroup, SwitchLabel
} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'

export default {
    components: {
        AdminLayout, Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxLabel, Switch, SwitchGroup, SwitchLabel, CheckIcon, SelectorIcon,
    },
    setup() {
        const people = [
            {id: 1, name: 'Durward Reynolds', unavailable: false},
            {id: 2, name: 'Kenton Towne', unavailable: false},
            {id: 3, name: 'Therese Wunsch', unavailable: false},
            {id: 4, name: 'Benedict Kessler', unavailable: true},
            {id: 5, name: 'Katelyn Rohan', unavailable: false},
        ]
        const selectedPerson = ref(people[0])

        const enabled = ref(false)

        return {
            people,
            selectedPerson,
            enabled
        }
    },

    watch: {
        selectedPerson() {
            console.log(this.selectedPerson);
            return this.selectedPerson;
        },
        enabled() {
          console.log(this.enabled);
          return this.enabled;
        }
    },

    methods: {

    }
}
</script>
