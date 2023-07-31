<template>
    <div
        class="mt-24 grid desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-4 px-5 py-16"
    >
        <div class="desktop:mx-14 laptop:mx-8 tablet:mx-6 mobile:mx-4 w-full flex justify-center items-center">
            <div class="mb-5 w-full">
                <h1
                    class="desktop:text-[67px] laptop:text-[50px] tablet:text-[50px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 desktop:mr-28 laptop:mr-20 tablet:mr-12 mobile:mr-8 text-[#0a3b50] text-justify"
                >
                    Lớp đào tạo liên tục: <span class="text-[#009030]">Chứng minh cấu trúc của 64 quẻ kinh dịch</span>
                </h1>
                <div
                    class="inline-block w-full desktop:text-lg laptop:text-sm tablet:text-xl mobile:text-lg leading-6 mb-8"
                >
                    <p
                        class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"
                    >
                        Minh chứng mới về nguồn gốc, sáng tạo kinh dịch
                    </p>
                    <p
                        class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"
                    >
                        Minh chứng của Lạc Việt trong sáng tạo kinh dịch
                    </p>
                    <p
                        class="desktop:mr-40 laptop:mr-28 tablet:mr-12 mobile:mr-12 leading-[1.8em] font-medium text-[#909090] text-justify"
                    >
                        Thể hiện quẻ Kinh Dịch của Trung Thiên Đồ Lạc Việt trên cổ vật
                    </p>
                </div>
                <NuxtLink
                    to="/signup"
                    id="linklogin"
                    class="bgMainColor text-center px-12 py-4 rounded-full text-white hover:scale-110 ease-in duration-300 hover:opacity-80"
                >
                    Đăng ký
                </NuxtLink>
            </div>
        </div>
        <div class="w-full flex justify-center items-center">
            <div
                class="desktop:h-[500px] laptop:h-[400px] tablet:h-[300px] mobile:h-[300px] w-full rounded-tl-[150px] rounded-br-[150px] rounded-tr-2xl rounded-bl-2xl desktop:pr-12 laptop:pr-6 tablet:pr-0 mobile:pr-0"
            >
                <div
                    class="bg-no-repeat bg-center bg-cover w-full h-full desktop:rounded-tl-[150px] laptop:rounded-tl-[150px] tablet:rounded-tl-2xl mobile:rounded-tl-2xl desktop:rounded-br-[150px] laptop:rounded-br-[150px] tablet:rounded-br-2xl mobile:rounded-br-2xl rounded-tr-2xl rounded-bl-2xl object-cover border-[#009030] border-2"
                    style="background-image: url('/8.jpg')"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
