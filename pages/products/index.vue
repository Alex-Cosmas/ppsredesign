<template>
  <div class="flex-1">
   <div class="hero-section text-black p-12 bg-primary">
            <div class="container mx-auto px-16">
                <div class="flex justify-between text-white">
                    <div>
                        <h1 class="text-3xl">Products</h1>
                    </div>
                    <div class="w-2/5">
                        <p>PPS is a leading UK manufacturer of decontamination
                            equipment and Personal Protective Equipment. We
                            specialise in providing complete solution packages
                            to a wide variety of hazard prone industries.

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog text-black p-12">
            <div class="container mx-auto px-16">

                <div class="flex items-center justify-between py-6 w-3/4">
                    <p class="w-1/5 leading-normal font-bold text-primary">Product Finder: </p>
                    <input type=""
                        class="py-3 flex w-full bg-gradient rounded text-primary">
                    <button class="flex items-center ml-8">
                        <img src="~/assets/media/blue-right.png" alt=""  class="">
                    </button>

                </div>

                <div class="border-b border-optional-500"></div>

                <div class="flex">
                    <div
                        class="bg-primary w-2/4 text-white px-4 py-8 my-8 flex-grow-0">
                        <h3 class="mt-0 mb-4 text-2xl">Category</h3>
                        <div class="flex flex-row">
                            <div class="w-3/5 ">
                                <a href="">
                                        <div class="mb-3 p-3 bg-optional hover:bg-gradient hover:text-primary rounded-bl rounded-tl">
                                                <h1 class="text-xl font-bold">HazPROTECT PPE</h1>
                                                <p>PPS has a range of shelters including decontamination, inflatable and infection control options. Our product offering has evolved and is known for bespoke and quality design.</p>
                                            </div>
                                </a>

                                <a href="">
                                        <div class="p-3">
                                                <h1 class="text-xl font-bold">RapidPROTECT</h1>
                                            <p>PPS has a range of shelters including decontamination, inflatable and infection control options. Our product offering has evolved and is known for bespoke and quality design.</p>
                                            </div>
                                </a>
                                
                                
                            </div>
                            <div class="w-2/5">
                                <a href=""><div class="px-4 py-2 bg-optional hover:bg-gradient hover:text-primary flex justify-between items-center">
                                        <p>HazPRO</p>
                                        <img src="~/assets/media/blue-right.png" alt="" class=" h-4">
                                    </div></a>
                                <a href=""><div class="px-4 py-2">
                                        HazCHEM
                                    </div></a>
                                <a href=""><div class="px-4 py-2">
                                        HazBRN
                                    </div></a>
                                <a href=""><div class="px-4 py-2">
                                        HazNUCLEAR
                                    </div></a>
                                <a href=""><div class="px-4 py-2">
                                        HazISO
                                    </div></a>
                            </div>
                        </div>

                    </div>
                    <div class="w-2/4 px-10 py-8 my-8">
                        <nuxt-link to="/inventory">
                                <div class="product-component my-8 flex flex-row items-center justify-between py-2 border-b border-optional-500">
                                        <div class="w-3/5">
                                                <img src="~/assets/media/157_1_943x843.jpg" alt="">
                                        </div>
                                        <div>
                                                <h1 class="text-2xl text-primary">ProSafe 2+</h1>
                                                <p class="my-3">The ProSafe 2+ is a single use disposable suit.</p>
                                                <div class="my-3">
                                                    
                                                      <button class="bg-optional px-5 py-2 rounded text-primary">
                                                       <n-link to="/inventory">View Products</n-link>
                                                      </button>
                                                
                                                    <button class="bg-primary px-5 py-2 rounded text-white">Enquire </button>
                                                </div>
                                                
                                        </div>        
                                </div>
                        </nuxt-link>
                        

                    </div>
                </div>

                





            </div>



        </div>
        


  </div>
</template>

<script>

export default {
  
}
</script>

