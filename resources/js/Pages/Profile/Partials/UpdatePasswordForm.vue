<script setup>
import InputError from '@/Components/InputError.vue';
import {useForm} from '@inertiajs/vue3';
import {ref} from 'vue';
import SubmitButton from "@/Components/SubmitButton.vue";

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
        Update Password
    </h6>

    <form @submit.prevent="updatePassword">
        <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-4/12">
                <div class="relative w-full mb-3">
                    <label
                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        for="current_password"
                    >
                        Current Password
                    </label>
                    <input
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        type="password"
                        autocomplete="current-password"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                    <InputError :message="form.errors.current_password"/>
                </div>
            </div>
            <div class="w-full px-4 lg:w-4/12">
                <div class="relative w-full mb-3">
                    <label
                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        for="password"
                    >
                        New Password
                    </label>
                    <input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        autocomplete="new-password"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                    <InputError :message="form.errors.password"/>
                </div>
            </div>
            <div class="w-full px-4 lg:w-4/12">
                <div class="relative w-full mb-3">
                    <label
                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        for="password_confirmation"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        type="password"
                        autocomplete="new-password"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                    <InputError :message="form.errors.password_confirmation"/>
                </div>
            </div>

            <div class="flex justify-end w-full px-4">
                <SubmitButton
                    :processing="form.processing"
                    class="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                >
                    Save
                    <Transition
                        enter-active-class="transition ease-in-out"
                        enter-from-class="opacity-0"
                        leave-active-class="transition ease-in-out"
                        leave-to-class="opacity-0"
                    >
                        <i v-if="form.recentlySuccessful" class="fas fa-check-circle"></i>
                    </Transition>
                </SubmitButton>
            </div>
        </div>
    </form>
</template>
