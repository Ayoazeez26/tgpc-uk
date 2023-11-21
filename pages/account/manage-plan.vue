<template>
  <div class="body">
    <main class="text-primary bg-grey-3">
      <DashboardHeader />
      <section
        class="flex md:flex-row flex-col md:mt-10 mt-5 md:space-y-0 space-y-5 md:space-x-20 md:px-20 px-3"
      >
        <DashboardAccountSidebar />
        <div class="mb-10">
          <div class="bg-white rounded-md md:p-10 p-5 md:mt-0 my-7 space-y-7">
            <div class="md:space-y-5 space-y-3">
              <h3 class="font-bold md:text-2xl text-xl">Manage Plans</h3>
              <p class="text-grey-8 md:text-base text-sm">
                Manage your Subscription Plan
              </p>
            </div>

            <div class="space-y-3">
              <Heading4 content="Current Plan" />
              <div>
                <div
                  class="bg-[#2970FF] p-5 rounded-t-md border border-[#2970FF]"
                >
                  <h3 class="text-grey-5 uppercase italic font-bold">
                    Pro (Monthly)
                  </h3>
                </div>

                <div
                  class="border border-[#2970FF] md:p-10 p-3 rounded-b-md md:space-y-10 space-y-5"
                >
                  <div class="grid md:grid-cols-2 md:space-y-0 space-y-5">
                    <div class="space-y-3">
                      <div class="flex items-end">
                        <h3 class="font-bold text-3xl">£50</h3>
                        <p>/month</p>
                      </div>
                      <p class="leading-relaxed md:max-w-xs">
                        Search, Filter, Apply for Tenders and Request for Tender
                        Writing Help.
                      </p>
                    </div>

                    <div class="space-y-3">
                      <p class="font-semibold">Included in the plan</p>
                      <div class="text-grey-8 space-y-1">
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>Everything in Basic + 10 Tokens</span>
                        </p>
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>10% Discount on Tender Writers</span>
                        </p>
                        <p class="flex space-x-2">
                          <img src="/svg/check-bullet.svg" alt="" />
                          <span>Access to Monthly Social Care Analytics</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button
                    class="font-semibold bg-grey-5 border border-grey-2 px-10 py-5 rounded md:w-auto w-full"
                  >
                    Cancel Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const auth = useAuthStore();
auth.authenticated = false;
</script>

<style scoped></style>
