<script setup>
import { computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthLayout from "@/Layouts/AuthLayout.vue";
import SubmitButton from "@/Components/SubmitButton.vue";

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <AuthLayout>
        <Head title="Email Verification" />

        <div class="container h-full px-4 mx-auto">
            <div class="flex items-center content-center justify-center h-full">
                <div class="w-full px-4 lg:w-4/12">
                    <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
                    >
                        <div class="px-6 py-6 mb-0 rounded-t">
                            <div class="text-center">
                                <h6 class="text-sm font-bold text-blueGray-500">
                                    Email Verification
                                </h6>
                                <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
                            </div>
                        </div>
                        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                            <form @submit.prevent="submit">
                                <div class="mt-1 text-sm text-green-600" v-if="verificationLinkSent">
                                    A new verification link has been sent to the email address you provided during registration.
                                </div>

                                <div class="mt-6 text-center">
                                    <SubmitButton
                                        class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                        :processing="form.processing"
                                    >
                                        Resend Verification Email
                                    </SubmitButton>
                                    <Link
                                        :href="route('logout')"
                                        method="post"
                                        as="button"
                                        class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Log Out</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
