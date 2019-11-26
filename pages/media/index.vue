<template>
  <div>
    <div class="her0-section text-black p-12 bg-primary">
            <div class="container mx-auto px-16">
                <div class="flex justify-between text-white">
                    <div>
                        <h1 class="text-3xl">News & Media</h1>
                    </div>
                    <div class="w-2/5">
                        <span class="text-white">Filter by Media Type</span>
                        <div class="mt-2 flex flex-col md:flex md:flex-row">
                            <div>
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio" name="radio" value="1" checked>
                                    <span class="ml-2">News Articles</span>
                                </label>
                            </div>
                            <div class="pl-5">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio" name="radio" value="2">
                                    <span class="ml-2">Case Studies</span>
                                </label>
                            </div>
                            <div class="pl-5">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio" name="radio" value="3">
                                    <span class="ml-2">Social Media</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   <div class="blog text-black p-12">
            <div class="container mx-auto px-16">
                <p class=" text-2xl text-optional font-bold">
                    Media Type:
                    <span class=" text-primary">Case Study</span>
                </p>
                
                    <nuxt-link to="/media/_posts">
                    <div class="flex flex-row mb-10 pt-10">
                        <div class="flex bg-gradient hover:opacity-75">
                            <div class=" flex-grow-1">
                                <div class="bg-primary py-3 px-10 text-white ">
                                    <p class=" text-optional">
                                        Case Study
                                    </p>
                                    <h2 class="text-3xl ">St John Ambulance Commission New Triage Shelters</h2>
                                </div>
                                <div class="pb-8">
                                    <p class=" pb-5 px-10 pt-4">The 2L7 is for effective decontamination of multiple casualties or emergency teams. The system provides two lines of decontamination for ambulatory and non-ambulatory casualties simultaneously. The shower basin occupies the three centre bays of the structure, with undressing/dressing areas at each end. * Throughput based on 2 minute wash, 1 minute rinse</p>
                                    <div class="px-10">
                                        <button class="bg-primary text-white py-2 px-4 rounded">
                                          <n-link to="/media/_posts">Learn More</n-link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <img src="~/assets/media/2_973x553.jpg" alt="" class="object-cover w-1/5">
                        </div>
                    </div>
                    </nuxt-link>
               
            </div>
        </div>
  </div>
</template>

<script>

export default {
  
}
</script>

