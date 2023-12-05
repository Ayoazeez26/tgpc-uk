<template>
  <section
    class="md:bg-greyish-white/50 lg:mt-32 mt-20 lg:py-32 py-20 lg:px-20 md:px-10 px-5"
  >
    <div class="grid md:grid-cols-2 lg:gap-20 gap-10">
      <div>
        <div>
          <p>Connect</p>
          <Heading3 content="Contact HSCT" />
          <p class="md:pt-5 pt-3">
            Have questions or need support? We're here to help!
          </p>
        </div>

        <div
          class="grid md:grid-cols-2 lg:mt-20 mt-10 lg:gap-10 md:gap-5 gap-10"
        >
          <div class="space-y-5">
            <img
              src="/svg/message-chat-circle.svg"
              alt="message icon"
              class="bg-grey-5 border border-[#D7D7D7] p-3 rounded-md"
            />
            <p class="font-bold text-2xl text-secondary">Email</p>
            <p class="text-grey-8">
              Let's talk about how HSCT can help you find and win health sector
              tender opportunities.
            </p>
            <NuxtLink
              to="mailto:contactus@hsct.com"
              class="text-secondary underline block"
              >contactus@hsct.com</NuxtLink
            >
          </div>
          <div class="space-y-5">
            <img
              src="/svg/phone.svg"
              alt="phone icon"
              class="bg-grey-5 border border-[#D7D7D7] p-3 rounded-md"
            />
            <p class="font-bold text-2xl text-secondary">Phone</p>
            <p class="text-grey-8">Reach out to us today to learn more.</p>
            <NuxtLink
              to="tel:+15551234567"
              class="text-secondary underline block"
              >+44 7399044269</NuxtLink
            >
          </div>
        </div>
      </div>
      <div>
        <div class="bg-white shadow p-5 rounded-xl">
          <img src="/webp/contact-img.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
