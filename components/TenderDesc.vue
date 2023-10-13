<script setup lang="ts">
const currentTab = ref("description");
</script>
<template>
  <div class="mt-[174px] mb-10 mx-auto w-full max-w-[1296px]">
    <div class="flex">
      <nuxt-link
        to="/dashboard"
        class="py-3 flex items-center justify-center w-auto"
      >
        <Icon name="mdi:arrow-left" /><span class="ml-1">Dashboard</span>
      </nuxt-link>
    </div>
    <div class="flex flex-col justify-between lg:flex-row mt-10">
      <div class="flex flex-col w-full max-w-[920px]">
        <div class="card flex flex-col gap-10">
          <div class="flex flex-col gap-y-6 w-full">
            <div class="flex justify-between items-center">
              <div class="flex gap-6">
                <div class="flex items-center gap-[10px]">
                  <div class="w-6 h-6 rounded-full bg-grey-9" />
                  <p class="text-grey-8 text-sm">Leicester</p>
                </div>
                <div class="flex items-center gap-[10px]">
                  <div class="w-2 h-2 rounded-full bg-grey-9" />
                  <p class="text-secondary font-medium">Open</p>
                </div>
              </div>
            </div>
            <h3 class="text-secondary text-[28px] font-medium leading-[44px]">
              ASC0236 - Provision of intrauterine devices and systems (IUD/S) &
              provision of sub-dermal Implants (SDI) for contraception and the
              provision of IUS for non-contraceptive purposes
            </h3>
            <div class="flex text-sm font-light gap-4">
              <button
                class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
              >
                <p>Adult's Social Care</p>
              </button>
              <button
                class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
              >
                <p>Home Care</p>
              </button>
              <button
                class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
              >
                <p>Supported Living</p>
              </button>
            </div>
            <div class="mt-4 flex items-center gap-4 text-right">
              <p class="text-grey-8 text-sm font-light">Value:</p>
              <p class="text-secondary text-[28px] font-bold leading-[26px]">
                NGN 2,000,000
              </p>
            </div>
          </div>
        </div>
        <div class="mt-14 w-full bg-white border border-grey-2 rounded-lg">
          <div
            class="flex overflow-x-auto relative w-full lg:w-auto self-start lg:self-center"
          >
            <button
              @click="currentTab = 'description'"
              class="border-b-[5px] px-8 py-2 min-w-max gap-2 flex items-center justify-center leading-[30px] h-[57px] tracking-[0.028px] w-1/2"
              :class="
                currentTab === 'description'
                  ? 'border-black text-black'
                  : 'border-grey-2 text-grey-6'
              "
            >
              <IconsDescription
                :color="currentTab === 'description' ? '#161616' : '#606973'"
              />
              <span>Description</span>
            </button>
            <button
              @click="currentTab = 'eligibility'"
              class="border-b-[5px] flex items-center justify-center gap-2 px-8 py-2 min-w-max leading-[30px] h-[57px] tracking-[0.028px] w-1/2"
              :class="
                currentTab === 'eligibility'
                  ? 'border-black text-black'
                  : 'border-grey-2 text-grey-6'
              "
            >
              <IconsEligibility
                :color="currentTab === 'eligibility' ? '#161616' : '#606973'"
              />
              <span>Eligibility</span>
            </button>
          </div>
          <div
            class="w-full px-10 pt-6 pb-16 mt-10 text-grey-8 font-light leading-[32px]"
          >
            <template v-if="currentTab === 'description'">
              <p>
                Leicester City Council (the Council) commissions the provision
                of intrauterine devices and systems (IUD/S) &provision of
                sub-dermal Implants(SDI) for contraception and the provision of
                IUS for non-contraceptive purposes (through a Section 75
                agreement with Leicester City Clinical Commissioning Group
                LCCCG) These services are for patients registered with GP
                practices in Leicester and who meet the criteria i.e. a resident
                within the local authority area).
              </p>

              <p class="mt-6">
                This is a replacement advertisement for the authorisation scheme
                described below as the link to the attachments mentioned below
                in the previous advert has recently become unavailable.
              </p>

              <p class="mt-6">
                The Council hereby advertises an authorisation scheme for
                appropriately registered organisations, for the provision of
                intrauterine devices and systems (IUD/S) &provision of
                sub-dermal Implants (SDI) for contraception and the provision of
                IUS for non contraceptive purposes for patients registered with
                GP practices in Leicester and who are resident within the local
                authority area.
              </p>

              <p class="mt-6">
                These services specifically include (1) the provision of
                intrauterine devices and systems (IUD/S) & provision of
                sub-dermal Implants (SDI) for contraception commissioned by
                Leicester City Council and IUS for non contraceptive purposes
                commissioned by Leicester City Council under a section 75
                agreement.
              </p>

              <p class="mt-6">
                Organisations wishing to provide the services under the
                Authorisation Scheme should apply by downloading the forms and
                other key documents from East Midlands Tender:
                https://procontract.due-north.com/Advert?advertId=d182c855-5025-e911-80f2-005056b64545
              </p>

              <p class="mt-6">
                The Council reserves the right to terminate the Authorisation
                Scheme at any point should it deem this necessary.
              </p>
            </template>
            <template v-else>
              <p>
                Leicester City Council (the Council) commissions the provision
                of intrauterine devices and systems (IUD/S) &provision of
                sub-dermal Implants(SDI) for contraception and the provision of
                IUS for non-contraceptive purposes (through a Section 75
                agreement with Leicester City Clinical Commissioning Group
                LCCCG) These services are for patients registered with GP
                practices in Leicester and who meet the criteria i.e. a resident
                within the local authority area).
              </p>

              <p class="mt-6">
                This is a replacement advertisement for the authorisation scheme
                described below as the link to the attachments mentioned below
                in the previous advert has recently become unavailable.
              </p>

              <p class="mt-6">
                The Council hereby advertises an authorisation scheme for
                appropriately registered organisations, for the provision of
                intrauterine devices and systems (IUD/S) &provision of
                sub-dermal Implants (SDI) for contraception and the provision of
                IUS for non contraceptive purposes for patients registered with
                GP practices in Leicester and who are resident within the local
                authority area.
              </p>

              <p class="mt-6">
                These services specifically include (1) the provision of
                intrauterine devices and systems (IUD/S) & provision of
                sub-dermal Implants (SDI) for contraception commissioned by
                Leicester City Council and IUS for non contraceptive purposes
                commissioned by Leicester City Council under a section 75
                agreement.
              </p>

              <p class="mt-6">
                Organisations wishing to provide the services under the
                Authorisation Scheme should apply by downloading the forms and
                other key documents from East Midlands Tender:
                https://procontract.due-north.com/Advert?advertId=d182c855-5025-e911-80f2-005056b64545
              </p>

              <p class="mt-6">
                The Council reserves the right to terminate the Authorisation
                Scheme at any point should it deem this necessary.
              </p>
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-10 w-full md:max-w-[328px]">
        <div
          class="bg-white p-8 rounded-lg border border-grey-2 gap-6 flex flex-col w-full"
        >
          <h4 class="text-secondary font-medium text-xl leading-[36px]">
            Are you interested in this Tender?
          </h4>
          <div class="flex flex-col gap-2 w-full md:items-center">
            <nuxt-link
              to="/tender/one"
              class="bg-secondary border-2 border-secondary flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-white"
            >
              <p class="leading-[30px] tracking-[0.028px]">Apply now</p>
              <img src="/svg/external.svg" alt="external" />
            </nuxt-link>
            <nuxt-link
              to="/tender/one"
              class="bg-grey-5 border-2 border-grey-5 flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-secondary" 
            >
              <p class="leading-[30px] tracking-[0.028px]">
                Request Tender Writer
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-col w-5/6 mx-auto md:items-center">
          <button
            class="bg-grey border-2 border-grey flex items-center rounded-lg justify-center w-full gap-2 font-medium py-2 px-8 text-secondary"
          >
            <h6 class="leading-[32px] tracking-[0.028px] uppercase">
              timeline
            </h6>
          </button>
        </div>
        <div class="border-b border-grey-2 pb-6 flex justify-between w-full">
          <div class="flex items-center justify-between w-full gap-4">
            <div class="flex flex-col gap-1">
              <p class="text-grey-8 text-sm font-light">Date Created</p>
              <p class="text-secondary text-lg font-medium leading-[36px]">
                23/09/2023
              </p>
            </div>
            <span>-</span>
            <div class="flex flex-col gap-1">
              <p class="text-grey-8 text-sm font-light">Closing Date</p>
              <p class="text-secondary text-lg font-medium leading-[36px]">
                23/10/2024
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between w-full">
          <div class="flex text-secondary flex-col items-center text-center">
            <h5 class="text-[32px] font-semibold leading-[48px]">212:</h5>
            <h6 class="text-xs font-light">Days</h6>
          </div>
          <div class="flex text-secondary flex-col items-center text-center">
            <h5 class="text-[32px] font-semibold leading-[48px]">20:</h5>
            <h6 class="text-xs font-light">Hours</h6>
          </div>
          <div class="flex text-secondary flex-col items-center text-center">
            <h5 class="text-[32px] font-semibold leading-[48px]">15:</h5>
            <h6 class="text-xs font-light">Minutes</h6>
          </div>
          <div class="flex text-secondary flex-col items-center text-center">
            <h5 class="text-[32px] font-semibold leading-[48px]">18</h5>
            <h6 class="text-xs font-light">Seconds</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between items-center gap-6 bg-grey mt-20 py-6 px-8">
      <h3 class="text-secondary text-xl font-medium leading-[44px]">
              Would you like to request consultancy?
            </h3>
            <div class="flex flex-col gap-2 w-full md:w-auto md:items-center">
            <nuxt-link
              to="/tender/one"
              class="bg-grey-5 border-2 border-grey-2 flex items-center justify-center w-full gap-2 font-medium py-4 px-8 rounded text-secondary" 
            >
              <p class="leading-[30px] text-sm font-bold tracking-[0.028px]">
                Contact us
              </p>
            </nuxt-link>
          </div>
    </div>
  </div>
</template>

<style scoped></style>