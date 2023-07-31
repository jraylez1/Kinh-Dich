<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Học trực tuyến kinh dịch',
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/logo.ico',
        },
    ],
});
</script>
