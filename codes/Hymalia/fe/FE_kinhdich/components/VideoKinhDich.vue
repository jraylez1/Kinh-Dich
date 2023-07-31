<template>
    <div class="relative px-5 pt-16 desktop:h-[850px] laptop:h-[850px] tablet:h-[750px] mobile:h-[550px]">
        <div
            class="absolute top-0 right-0 left-0 desktop:h-[70vh] laptop:h-[70vh] tablet:h-[60vh] mobile:h-[60vh] bg-cover brightness-75"
            style="
                background-image: url('https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/bg-01-min.jpg');
            "
        ></div>
        <div
            class="absolute desktop:top-16 laptop:top-16 tablet:top-16 mobile:top-8 desktop:left-20 laptop:left-20 tablet:left-12 mobile:left-4 desktop:right-20 laptop:right-20 tablet:right-12 mobile:right-4 mb-10"
        >
            <div
                class="flex justify-between items-start w-full desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"
            >
                <div class="">
                    <h2
                        class="text-white fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em]"
                    >
                        Tham gia khóa học Kinh Dịch online
                    </h2>
                    <h2
                        class="text-[#97dd55] fontSpaceGrotesk desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1.2em] py-4"
                    >
                        Kinh Dịch và Y học
                    </h2>
                </div>
                <NuxtLink
                    to="/signup"
                    id="linklogin"
                    class="bg-transparent border-2 border-[#ffffff] text-center text-[#ffffff] px-12 py-4 rounded-full hover:text-white hover:scale-110 ease-in duration-300 desktop:w-auto laptop:w-auto tablet:w-full mobile:w-full"
                >
                    Đăng ký
                </NuxtLink>
            </div>
            <div class="desktop:pt-16 laptop:pt-16 tablet:pt-8 mobile:pt-4 rounded-lg">
                <iframe
                    class="desktop:h-[600px] laptop:h-[600px] tablet:h-[400px] mobile:h-[250px]"
                    style="width: 100%; border-radius: 20px"
                    src="https://www.youtube.com/embed/rJN53XzC07o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
