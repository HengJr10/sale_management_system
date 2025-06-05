<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import InputError from '@/Components/InputError.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';
import SubmitButton from "@/Components/SubmitButton.vue";

defineProps({
    pageTitle: {
        type: String,
    },
    canResetPassword: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AuthLayout>
        <Head :title="pageTitle"/>

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <div class="container h-full px-4 mx-auto">
            <div class="flex items-center content-center justify-center h-full">
                <div class="w-full px-4 lg:w-4/12">
                    <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
                    >
                        <div class="px-6 py-6 mb-0 rounded-t">
                            <div class="mb-3 text-center">
                                <h6 class="text-sm font-bold text-blueGray-500">
                                    Sign in with credentials
                                </h6>
                            </div>
                            <hr class="mt-6 border-b-1 border-blueGray-300"/>
                        </div>
                        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                            <form @submit.prevent="submit">
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                        for="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        v-model="form.email"
                                        required
                                        autofocus
                                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                        placeholder="Email"
                                    />
                                    <InputError :message="form.errors.email"/>
                                </div>

                                <div class="relative w-full mb-3">
                                    <label
                                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                        for="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                        placeholder="Password"
                                        v-model="form.password"
                                        required
                                        autocomplete="current-password"
                                    />
                                    <InputError :message="form.errors.password"/>
                                </div>
                                <div>
                                    <label class="inline-flex items-center cursor-pointer">
                                        <Checkbox
                                            name="remember"
                                            v-model:checked="form.remember"
                                            class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                                        />
                                        <span class="ml-2 text-sm font-semibold text-blueGray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div class="mt-6 text-center">
                                    <SubmitButton
                                        class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                        :processing="form.processing"
                                    >
                                        Sign In
                                    </SubmitButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="relative flex flex-wrap mt-6">
                        <div class="w-1/2">
                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="text-blueGray-200"
                            >
                                <small>Forgot password?</small>
                            </Link>
                        </div>
                        <div class="w-1/2 text-right">
                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="text-blueGray-200"
                            >
                                <small>Create new account</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
