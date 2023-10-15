import React from 'react'

function rateInteractive() {
  return (
    <div class="flex items-center justify-center h-full">
  <div class="max-w-sm p-6 bg-gray-800 rounded-3xl py-8">
    <div class="flex items-center justify-start mb-4">
      <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FC7613" class="w-6 h-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">How did we do?</h5>
    <p class="mb-4 text-gray-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div class="flex items-center justify-center space-x-3">
      <input type="radio" id="star5" name="rating" value="5" class="hidden"/>
      <label for="star5" class="text-yellow-400 cursor-pointer">
        <button class="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-orange-500">1</button>
      </label>
      <input type="radio" id="star4" name="rating" value="4" class="hidden"/>
      <label for="star4" class="text-yellow-400 cursor-pointer">
        <button class="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-orange-500">2</button>
      </label>
      <input type="radio" id="star3" name="rating" value="3" class="hidden"/>
      <label for="star3" class="text-yellow-400 cursor-pointer">
        <button class="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-orange-500">3</button>
      </label>
      <input type="radio" id="star2" name="rating" value="2" class="hidden"/>
      <label for="star2" class="text-yellow-400 cursor-pointer">
        <button class="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-orange-500">4</button>
      </label>
      <input type="radio" id="star1" name="rating" value="1" class="hidden"/>
      <label for="star1" class="text-yellow-400 cursor-pointer">
        <button class="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-orange-500">5</button>
      </label>
    </div>
    <button class="w-full px-4 py-2 mt-4 text-white bg-orange-500 rounded-full hover:bg-orange-600 uppercase font-semibold">Submit</button>
  </div>
</div>
  )
}

export default rateInteractive