<template>
 <section id="header">
        <!-- Top Nav -->
        <div class="top-nav bg-primary text-white font-medium p-3">
            <div class="container mx-auto px-16">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <p>Language:</p><span
                            class="item-center p-1 ml-3 bg-optional text-white rounded-sm">
                            <p class="">Eng</p>
                        </span>
                    </div>
                    <div class="flex">
                        <div class="pr-10">+212 (0)5 22 94 41 95</div>
                        <div class="">Mon - Thur: 8:30am - 5:30pm | Fri: 8:30am
                            -3:00pm</div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Main Menu -->

        <div
            class="top-nav bg-white text-black font-medium p-6 border-b border-optional">
            <div class="container mx-auto px-16">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        
                        <n-link to="/">
                            <img src="~/assets/media/pps-logo.svg" alt="">
                        </n-link>
                        
                    </div>
                    <div class="flex">
                        <ul class="flex justify-end">
                            <li class="pr-3 pl-3">
                                <n-link to="/about">ABOUT US</n-link>
                            </li>
                            <li class="pr-3 pl-3">
                                <n-link to="/products">PRODUCTS</n-link>
                            </li>
                            <li class="pr-3 pl-3">
                                <n-link to="/support">SUPPORT</n-link>
                            </li>
                            <li class="pr-3 pl-3">
                                <n-link to="/media">NEWS AND MEDIA</n-link>
                            </li>
                            <li class="pr-3 pl-3">
                                <n-link to="/contacts">CONTACT US</n-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>