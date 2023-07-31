<template>
    <div class="w-full py-16 desktop:px-5 laptop:px-5tablet:px-2 mobile:px-2 mb-8">
        <div class="w-full flex justify-center items-center flex-col">
            <img
                src="https://bimberonline.com/yogazi/wp-content/uploads/sites/36/2022/01/divider-01-min.png"
                alt=""
                class="w-[400px] h-[30px] mb-5"
            />
            <div class="mb-[10px] flex justify-center items-center flex-col py-4 w-full">
                <h1
                    class="desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5 text-[#0a3b50] pt-4"
                >
                    Đăng ký lớp học
                </h1>
                <span
                    class="text-[#009030] desktop:text-[42px] laptop:text-[36px] tablet:text-[36px] mobile:text-[30px] font-semibold leading-[1em] fontSpaceGrotesk mb-5"
                    >Kinh Dịch và Y học</span
                >
            </div>
            <div
                class="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 desktop:px-5 laptop:px-[20px] tablet:px-[20px] mobile:px-[10px] desktop:gap-4 laptop:gap-4 tablet:gap-2 mobile:gap-0 w-full"
            >
                <div>
                    <div class="w-full bgMainColor p-2 mb-2">
                        <h2 class="text-center text-white text-xl">Hồ sơ đăng ký</h2>
                    </div>
                    <div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start">
                        <ul class="list-disc p-4">
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                01 bản sao công chứng Bằng tốt nghiệp
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                01 bản sao công chứng Căn cước công dân
                            </li>
                        </ul>
                    </div>
                    <div class="w-full bgMainColor p-2 my-2">
                        <h2 class="text-center text-white text-xl">Thông tin liên hệ</h2>
                    </div>
                    <div class="w-full rounded-xl bg-[#a7f3d0] pl-4 flex flex-col justify-center items-start mb-2">
                        <ul class="list-disc p-4">
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                Phòng đào tạo sau đại học - SĐT: 0969.530.077
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                PGS. TS.Đoàn Minh Thụy - SĐT: 0912.933.156
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                TS.Nguyễn Chi Lê - SĐT: 0936.719.966
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                ThS.Quách Diễm Hằng - SĐT: 0983.149.167
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="w-full bgMainColor p-2 mb-2">
                        <h2 class="text-center text-white text-xl">Chi phí đăng ký lớp học</h2>
                    </div>
                    <div class="w-full rounded-xl bg-[#a7f3d0] p-4 flex flex-col justify-center items-start">
                        <div class="w-full">
                            <h2 class="text-center text-red-600 font-semibold text-xl">
                                Học phí: 1.350.000 / 1 học viên
                            </h2>
                        </div>
                        <h2 class="text-center text-[#0a3b50] font-semibold text-xl">
                            Học phí tham dự lớp học xin được chuyển vào:
                        </h2>
                        <ul class="list-disc pl-4">
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                Số tài khoản: 118 000 186 262
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                Chủ tài khoản: Học Viện Y - Dược cổ truyền Việt Nam
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                Ngân hàng: Viettinbank - Ngân hàng thương mại cổ phần Công thương Việt Nam - chi nhánh
                                Đống Đa, Hà Nội
                            </li>
                            <li class="leading-[1.8em] font-medium text-[#0a3b50] text-base">
                                Nội dung chuyển khoản: Họ tên - Ngày sinh - Kinh Dịch - Số điện thoại
                                <br />
                                (Ví dụ: Nguyen Van A 12.10.1989 KINH DICH 098xxxxxxx)
                            </li>
                        </ul>
                    </div>
                    <div
                        class="w-full rounded-xl bg-[#a7f3d0] p-4 mt-1 flex desktop:flex-row laptop:flex-row tablet:flex-col mobile:flex-col"
                    >
                        <div class="flex">
                            <el-icon color="#009030" class="no-inherit text-2xl mr-1">
                                <Location />
                            </el-icon>
                            <p class="leading-[1.8em] font-medium text-[#0a3b50] text-base mr-4">
                                Địa chỉ: Số 2, Trần Phú, Hà Đông, Hà Nội
                            </p>
                        </div>

                        <div class="flex">
                            <el-icon color="#009030" class="no-inherit text-2xl mr-1">
                                <ChromeFilled />
                            </el-icon>
                            <a
                                href="http://vutm.edu.vn/"
                                class="leading-[1.8em] font-medium text-[#0a3b50] text-base underline hover:text-blue-400"
                            >
                                http://vutm.edu.vn/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Location, ChromeFilled } from '@element-plus/icons-vue';
</script>

<style></style>
