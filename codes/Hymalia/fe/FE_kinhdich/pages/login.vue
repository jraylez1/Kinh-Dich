<template>
    <Form @submit="homeStore.checkNumber(homeStore.number)">
        <HeaderLogin />
        <div class="mt-24 w-full h-[60vh] flex justify-center items-center bg-white">
            <div
                class="desktop:w-[50%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] p-4 loginShadow rounded-2xl bg-[#E2FFEB]"
            >
                <h1
                    class="uppercase desktop:text-[36px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4 text-center"
                >
                    Tham gia lớp học
                </h1>
                <p class="text-base text-[#009030] font-semibold pb-2">
                    Mã học viên <span class="text-red-600">*</span>
                </p>

                <div class="w-full flex flex-col mb-4">
                    <Field
                        name="code"
                        type="text"
                        :rules="validateCode"
                        v-model="homeStore.number"
                        placeholder="Điền mã học viên"
                        class="border-2 border-[#ced4da] px-4 py-2 rounded-lg focus:border-[#009030]"
                    />
                    <ErrorMessage name="code" class="text-red-600 text-sm mt-2 mx-2" />
                </div>
                <div class="text-center w-full mb-4">
                    <p class="text-lg font-medium">
                        Bạn chưa là học viên?
                        <NuxtLink to="/signUp" class="font-semibold text-[#007bff]" @click="homeStore.resetModal()">
                            Đăng ký ngay
                        </NuxtLink>
                    </p>
                </div>
                <div class="w-full flex justify-center items-center">
                    <button
                        class="bgMainColor text-center px-12 py-3 rounded-full text-white ease-in duration-300 hover:opacity-80 w-full"
                    >
                        Vào Lớp
                    </button>
                </div>
            </div>
        </div>
        <FooterLogin />
    </Form>
</template>

<script setup>
import { useHomeStore } from '../store/homeStore';
const homeStore = useHomeStore();
onMounted(() => {});
</script>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            code: '',
        };
    },
    methods: {
        validateCode(value) {
            if (!value) {
                return 'Vui lòng điền thông tin';
            }
            return true;
        },
    },
};
</script>

<style></style>
