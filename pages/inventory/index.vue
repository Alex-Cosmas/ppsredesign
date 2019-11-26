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
                    
                    <div class="w-2/4 px-10 py-8 my-8">
                        <a href="">
                                <div class="product-component my-8 flex flex-row items-center justify-between py-2 border-b border-optional-500">
                                        <div class="w-full">
                                                <img src="~/assets/media/157_1_943x843.jpg" alt="">
                                        </div>
                    
                                </div>
                        </a>
                        

                    </div>
                    <div class="bg-primary w-2/4 text-white px-10 py-8 my-8 flex-grow-0">
                        <h3 class="mt-0 mb-4 text-3xl">ProSafe 2+</h3>
                        <p class="my-2">The ProSafe 2+ is a single use disposable suit.</p>
                        <div class="flex flex-row my-6">
                            
                            <input type="text" class="w-16">
                            <button class="bg-optional px-6 py-3 ml-3 rounded">Add to Cart</button>
                        </div>

                        <div class="border-b border-optional-500"></div>

                        <h3 class="mt-0 py-4 text-2xl">Product Details</h3>
                        <p class="">Microporous film laminate coverall with three-piece hood and elastication to wrists, waist and ankles. Zipper with double storm flap, three-piece diamond gusset and antistatic to EN1149-1. Sewn and taped seam construction to give spray tight protection.
                        </p>
                        <h3 class="mt-0 pt-4 text-2xl">Features</h3>
                        <p class="">
                                <ul>
                                    <li>Microporous film laminate</li>
                                    <li>Zipper with double storm flap</li>
                                    <li>White with red taped seams</li>
                                    <li>Sizes M-3XL</li>
                                    <li>50 pieces per carton</li>
                                    <li></li>
                                    <li></li>
                                </ul>      
                        </p>
                        <p class="my-3">Can be used in a range of area:</p>

                        <p class="">
                                <ul>
                                    <li>Contact with agrarian chemicals</li>
                                    <li>Disposal of asbestos</li>
                                    <li>Automotive industry</li>
                                    <li>Chemical industry</li>
                                    <li>Clean room applications</li>
                                    <li>Clean room applications</li>
                                    <li>Waste disposal</li>
                                    <li>Electronic</li>
                                    <li>Emergency teams</li>
                                    <li>Food Industry</li>
                                </ul>      
                        </p>

                        
                    </div>
                </div>

                <div class="border-b border-optional-500"></div>

                <div>
                    <h1 class="text-2xl my-10">Popular Products</h1>
                    <div class="flex flex-row">

                            <nuxt-link to="">
                                    <div class="flex flex-col items-center mx-6">
                                        <img src="~/assets/media/42_1_140x140.jpg" alt="">
                                        <p>NuPro</p>
                                    </div>
                            </nuxt-link>

                            <a href="">
                                    <div class="flex flex-col items-center mx-6">
                                        <img src="~/assets/media/60_1_140x140.jpg" alt="">
                                        <p>ISO-Capsule</p>
                                    </div>
                            </a>

                            <a href="">
                                    <div class="flex flex-col items-center mx-6">
                                        <img src="~/assets/media/62_1_140x140.jpg" alt="">
                                        <p>Cas-e-Bag</p>
                                    </div>
                            </a>

                            <a href="">
                                    <div class="flex flex-col items-center mx-6">
                                        <img src="~/assets/media/94_1_140x140.jpg" alt="">
                                        <p>InstaDecon</p>
                                    </div>
                            </a>

                            

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

