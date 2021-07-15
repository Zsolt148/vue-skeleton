<template>
    <app-layout>
        <div class="text-gray-800">
            <div class="container flex flex-col items-center px-5 py-8 sm:py-16 mx-auto md:flex-row lg:px-28">
                <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 md:pr-16 md:mb-0">
                    <div class="items-center w-64 mb-4 font-medium title-font md:mb-0 lg:mt-16">
                        <h2 class="font-semibold tracking-tighter text-gray-500 dark:text-gray-400 uppercase text-bold">
                            Üdvözöljük az új oldalon!
                        </h2>
                    </div>
                    <h1 class="mt-8 text-2xl font-black tracking-tighter text-black dark:text-white md:text-5xl title-font one">VILT Stack</h1>
                    <div class="w-full text-xl text-base font-medium text-gray-700 dark:text-white sm:md:w-3/3 mb-8 leading-relaxed">
                        (Vue.JS, Inertia.JS, Laravel and TailwindCSS)
                    </div>
                    <div class="flex justify-center">
                        <inertia-link href="#">
                            <jet-button>
                                Hírek
                            </jet-button>
                        </inertia-link>
                        <p class="text-sm text-left text-gray-600 dark:text-gray-300 ml-6">Lorem<br>
                            <inertia-link href="#" class="inline-flex items-center font-semibold text-blue-700 dark:text-blue-500 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                                Részletek
                                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </inertia-link>
                        </p>
                    </div>
                </div>
                <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                    <img src="https://dummyimage.com/600x300/F3F4F7/8693ac" class="object-cover object-center rounded-lg mt-4" alt="" />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import JetButton from "@/Jetstream/Button";

export default {
    components: {
        AppLayout,
        JetButton,
    },
}
</script>
