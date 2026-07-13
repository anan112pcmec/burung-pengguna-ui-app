<script lang="ts">
    const footerHeaders = "font-bold tracking-wide text-gray-900 mb-4 uppercase text-[12px]";
    const footerLinks = "text-gray-600 hover:text-black transition-colors block mb-2 text-[12px]";
</script>

<footer class="fixed bottom-0 left-0 w-full bg-gray-50 border-t border-gray-200 h-[23rem] grid grid-rows-[75%_25%] font-sans">
    
    <div class="grid grid-cols-[20%_20%_20%_40%] px-12 pt-8">
        <div>
            <h4 class={footerHeaders}>Shop</h4>
            <ul>
                <li><a href="/" class={footerLinks}>Women</a></li>
                <li><a href="/" class={footerLinks}>Men</a></li>
                <li><a href="/" class={footerLinks}>Kids</a></li>
                <li><a href="/" class={footerLinks}>H&M HOME</a></li>
            </ul>
        </div>

        <div>
            <h4 class={footerHeaders}>Corporate Info</h4>
            <ul>
                <li><a href="/" class={footerLinks}>Career at H&M</a></li>
                <li><a href="/" class={footerLinks}>About H&M Group</a></li>
                <li><a href="/" class={footerLinks}>Sustainability</a></li>
                <li><a href="/" class={footerLinks}>Press</a></li>
            </ul>
        </div>

        <div>
            <h4 class={footerHeaders}>Help</h4>
            <ul>
                <li><a href="/" class={footerLinks}>Customer Service</a></li>
                <li><a href="/" class={footerLinks}>My Account</a></li>
                <li><a href="/" class={footerLinks}>Find a Store</a></li>
                <li><a href="/" class={footerLinks}>Legal & Privacy</a></li>
            </ul>
        </div>

        <div class="pl-6 border-l border-gray-200">
            <h4 class={footerHeaders}>Become a member</h4>
            <p class="text-gray-500 text-[12px] mb-4 leading-relaxed">
                Join now and get 10% off your next purchase, plus exclusive rewards and invitations.
            </p>
            <a href="/" class="inline-block bg-black text-white px-5 py-2 text-[12px] font-medium tracking-wide hover:bg-gray-800 transition-colors">
                Read More &rarr;
            </a>
        </div>
    </div>

    <div class="bg-gray-100 border-t border-gray-200 flex flex-col justify-center items-center px-12 text-center text-gray-400 text-[11px]">
        <p class="mb-1 text-gray-500">The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.</p>
        <p>&copy; 2026 H&M Group. All rights reserved.</p>
    </div>

</footer>