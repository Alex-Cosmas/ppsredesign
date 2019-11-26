<template>
  <div>
   <div class="her0-section text-black p-12 bg-primary">
            <div class="container mx-auto px-16">
                <div class="flex justify-between text-white">
                    <div>
                        <h1 class="text-3xl">Support</h1>
                    </div>
                    <div class="w-2/5">
                        <p>PPS offers a wide range of maintenance and training packages available for our RapidPROTECT shelter and HazPROTECT PPE ranges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog text-black p-12 bg-gradient">
            <div class="container mx-auto px-16">
                <n-link to="/support/_services/service">
                    <div class="flex flex-row mb-10">
                        <div class="flex items-center justify-between bg-white hover:opacity-75 rounded">
                            <div class=" p-10">
                                <h2 class="text-3xl pb-3">Maintenance and Servicing</h2>
                                <p class=" pb-5">Maintenance and Servicing Packages There is a range of maintenance and servicing packages available for our products. For further information please contact our Sales team on 01908 272240.</p>
                                <button class="bg-primary text-white pt-2 pb-2 px-4 rounded">
                                 <n-link to="/support/_services/service">Learn More</n-link>
                                </button>
                            </div>
                            <img src="~/assets/media/16_610x350.jpg" alt="" class="object-cover w-2/5 h-full">
                        </div>
                    </div>
                </n-link>
                <n-link to="/support/_services/training">
                    <div class="flex flex-row">
                        <div class="flex items-center justify-between bg-white hover:opacity-75 rounded">
                            <div class=" p-10">
                                <h2 class="text-3xl pb-3">Training & Demonstrations</h2>
                                <p class=" pb-5">PPS like to ensure all users of its products are fully aware of the products capabilities and safety features. Training takes place on-site at PPS, Milton Keynes which will include a factory tour,.</p>
                                <button class="bg-primary text-white pt-2 pb-2 px-4 rounded">
                                   <n-link to="/support/_service/training">Learn More</n-link>
                                </button>
                            </div>
                            <img src="~/assets/media/139_610x350.jpg" alt="" class="object-cover w-2/5 h-full">
                        </div>
                    </div>
                </n-link>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  
}
</script>

