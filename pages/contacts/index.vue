<template>
  <div>
   <div class="her0-section text-black p-12 bg-primary">
            <div class="container mx-auto px-16">
                <div class="flex justify-between text-white">
                    <div>
                        <h1 class="text-3xl">Get in Touch</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog text-black p-12">
            <div class="container mx-auto px-16">
                <div class="flex flex-row my-10 w-full">
                    <div class="w-2/5 mr-10 flex-grow-1">
                        <div class="text-primary">
                            <h3 class="text-2xl pb-4 font-bold">Contact Details</h3>
                            <p class=" pb-10">Professional Protection Systems Ltd<br>
                                t +44 (0)1908 272240<br>
                                f +44 (0)1908 371605<br>
                                e sales@ppsgb.com
                            </p>
                            <p class=" pb-10">Protection House,<br>
                                Sherbourne Drive,<br>
                                Tilbrook,<br>
                                Milton Keynes,<br>
                                MK7 8HX <br>
                            </p>
                            <p class=" pb-5">
                                Registered in the United Kingdom<br>
                                Registered name: Professional Protection Systems<br>
                                Registered number: 4494024<br>
                            </p>
                            <p>Trading name: PPS</p>
                        </div>
                    </div>
                    <div class="w-3/5 flex justify-center bg-primary rounded shadow-lg">
                        <form class="w-full mx-12 py-12">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                        Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your Full">
                                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your Email">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                        Company
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Company Name">
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                                        Telephone
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your Contact Number">
                                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                        Message
                                    </label>
                                    <textarea class="form-textarea mt-1 block w-full appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="3" placeholder="How can we be of assistance?"></textarea>
                                </div>
                            </div>
                            <div class="">
                                <button class="py-3 text-white bg-optional px-12 rounded hover:opacity-75">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  layout: 'contact'
}
</script>

