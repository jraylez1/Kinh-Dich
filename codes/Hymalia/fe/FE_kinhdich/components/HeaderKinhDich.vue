<template>
    <div
        class="h-24 py-5 px-12 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-[99] bg-white shadow-xl"
    >
        <div class="w-auto flex justify-start items-center">
            <NuxtLink to="/">
                <img src="../assets/img/logoheader.jpg" alt="" class="h-20 w-[70px] mr-4" />
            </NuxtLink>
            <div class="text-center desktop:block laptop:block tablet:block mobile:hidden">
                <h1
                    class="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-sm font-bold leading-[1em] my-1 text-[#009030] text-justify uppercase"
                >
                    Học viện y dược cổ truyền Việt Nam
                </h1>
                <span
                    class="text-[#0a3b50] uppercase desktop:text-xl laptop:text-lg tablet:text-sm mobile:text-xs font-light"
                    >Viet Nam university of traditional medicine</span
                >
            </div>
        </div>
        <NuxtLink
            to="/login"
            id="linklogin"
            class="bg-transparent border-2 border-[#009030] text-center text-[#009030] px-8 py-3 rounded-full hover:text-white hover:bg-[#009030] hover:scale-110 ease-in duration-300"
        >
            Vào Lớp
        </NuxtLink>
    </div>
</template>

<script setup></script>

<style scoped></style>
