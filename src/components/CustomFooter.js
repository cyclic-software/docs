import React from 'react';

const Footer = () => {
  return (
    <footer class="border-t border-white/20 py-16 px-6 xl:px-0
  bg-neutral-900 backdrop-blur">
    <div class="flex flex-col md:flex-row gap-20 justify-between max-w-6xl mx-auto">
      {/* <!-- ********** LINKS ********** --> */}
      <div class="flex flex-wrap gap-16 sm:gap-20">
        {/* <!-- ********** COMPANY ********** --> */}
        <div class="space-y-4">
          <h4 class="!mt-0 text-base font-semibold text-white">Company</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <a
              href="https://cyclic.sh/pricing"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Pricing
            </a>
  
            <a
              href="https://cyclic.sh/blog"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Blog
            </a>
  
            <a
              href="/"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Documentation
            </a>

            <a
              href="https://cyclic.sh/terms-of-service"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Terms of Service
            </a>
  
            <a
              href="https://cyclic.sh/privacy-policy"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- ********** SOCIAL ********** --> */}
        <div class="space-y-4">
          <h4 class="!mt-0 text-base font-semibold text-white">Share</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <a
              href="https://github.com/cyclic-software"
              target="_blank"
              rel="noopener"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              GitHub <i class="fab fa-github"></i>
            </a>
  
            <a
              href="https://discord.cyclic.sh"
              target="_blank"
              rel="noopener"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              Discord <i class="fab fa-discord"></i>
            </a>
  
            <a
              href="https://twitter.com/cyclic_sh"
              target="_blank"
              rel="noopener"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              Twitter <i class="fab fa-twitter"></i>
            </a>
  
            <a
              href="https://www.linkedin.com/company/cyclic-software/about"
              target="_blank"
              rel="noopener"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              LinkedIn <i class="fab fa-linkedin"></i>
            </a>
  
            <a
              href="https://www.youtube.com/@CyclicSh"
              target="_blank"
              rel="noopener"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              Youtube <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* <!-- ********** PRODUCTS ********** --> */}
        <div class="space-y-4">
          <h4 class="!mt-0 text-base font-semibold text-white">Products</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <a
              href="https://cyclic.sh/vs-heroku"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              vs Heroku
            </a>
            
            <a
              href="https://cyclic.sh/updates"
              target='_blank'
              class="text-sm !no-underline text-neutral-400 hover:text-white transition"
            >
              Product Updates
            </a>
          </div>
        </div>
      </div>
  
      {/* <!-- ********** BRAND ********** --> */}
      <div class="flex flex-col gap-6">
        <a
          data-ix="logo"
          href="/"
          aria-current="page"
          class=""
        >
          <img
            format="webp"
            src="/img/cyclic-logo.svg"
            loading="lazy"
            alt="cyclic logo"
            class="h-auto"
            width='128'
          />
        </a>
  
        <p class="text-sm text-neutral-400">
          © 2021-{ (1900+(new Date()).getYear()) } <a href="/" aria-current="page" class="w--current">Cyclic Software</a>
        </p>
      </div>

    </div>
  </footer>
  )
}

export default Footer