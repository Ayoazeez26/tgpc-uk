<script setup lang="ts">
import _ from 'lodash';
import { useDataStore } from '~/stores/data';
const { $gsap, $ScrollTrigger } = useNuxtApp();
const dataStore = useDataStore();
const currentTab = ref('adultCare');
const page = ref(1);
const payload = ref('The');
const totalPages = ref(10);
const perPage = ref(10);
const total = ref(100);
const currentPage = ref(1);
const hasMorePages = ref(true);
const showDatePicker = ref(false);
const date = ref();
const getTenders = _.debounce(async () => {
  await dataStore.getTenders(`?searchTerm=${payload.value}&size=${perPage.value}`);
  // dataStore.allTenders = allTenders;
}, 500);

getTenders();

const showMore = (newPage: number) => {
  page.value = newPage;
  currentPage.value = newPage;
  getTenders();
};

const container = ref(null);
const pinnedElement = ref(null);

const mm = $gsap.matchMedia();


const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      $ScrollTrigger.create({
        trigger: container.value,
        pin: pinnedElement.value,
        // Trgger Scroller
        start: 'top 10%',
        end: 'bottom 55%',
        // markers: true
      })
    });
  });
});
</script>
<template>
  <div class="py-[80px] mx-auto w-full max-w-[1296px]">
    <div class="flex flex-col">
      <div class="w-full flex flex-col items-center text-center px-4">
        <div class="w-full max-w-[822px] mb-10">
          <h2
            class="text-2xl lg:text-[32px] capitalize lg:leading-[48px] font-extralight"
          >
            Current
            <span class="font-semibold"
              >live tender in Health and Social Care</span
            >
            curated specially for your business 
          </h2>
        </div>
        <!-- <div
          class="flex overflow-x-auto relative w-full gap-4 lg:w-auto self-start lg:self-center"
        >
          <button
            @click="currentTab = 'adultCare'"
            class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
            :class="
              currentTab === 'adultCare'
                ? 'bg-secondary text-white'
                : 'border border-grey-2 bg-grey'
            "
          >
            Adult social care
          </button>
          <button
            @click="currentTab = 'childServices'"
            class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
            :class="
              currentTab === 'childServices'
                ? 'bg-secondary text-white'
                : 'border border-grey-2 bg-grey'
            "
          >
            Children's services
          </button>
          <button
            @click="currentTab = 'residential'"
            class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
            :class="
              currentTab === 'residential'
                ? 'bg-secondary text-white'
                : 'border border-grey-2 bg-grey'
            "
          >
            Residential care homes
          </button>
          <button
            @click="currentTab = 'homecare'"
            class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
            :class="
              currentTab === 'homecare'
                ? 'bg-secondary text-white'
                : 'border border-grey-2 bg-grey'
            "
          >
            Home care
          </button>
          <button
            @click="currentTab = 'daycare'"
            class="px-8 rounded py-2 min-w-max leading-[30px] tracking-[0.028px]"
            :class="
              currentTab === 'daycare'
                ? 'bg-secondary text-white'
                : 'border border-grey-2 bg-grey'
            "
          >
            Day care services
          </button>
        </div> -->
        <div ref="container" class="flex w-full mt-10">
          <div
            ref="pinnedElement"
            class="filter text-secondary hidden lg:flex flex-col gap-y-6 pt-8 pr-6 items-start w-[272px]"
          >
            <h4 class="font-semibold leading-8">Filter Tenders</h4>
            <button
              class="px-4 py-3 flex items-center justify-center rounded border border-grey-2 bg-grey"
            >
              <Icon name="material-symbols:arrow-back-ios" /><span class="ml-1"
                >Filters</span
              >
            </button>
            <div class="flex flex-col w-full gap-4">
              <div class="flex justify-between items-center py-2 w-full">
                <div class="flex gap-3 items-center">
                  <Icon name="material-symbols:location-on-outline" size="24" />
                  <p>Location</p>
                </div>
                <div class="flex gap-2 items-center">
                  <p class="text-grey-6">100</p>
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div>
              <!-- <div class="flex justify-between items-center py-2 w-full">
                <div class="flex gap-3 items-center">
                  <img src="/svg/file.svg" alt="file" />
                  <p>Contract Type</p>
                </div>
                <div class="flex gap-2 items-center">
                  <p class="text-grey-6">40</p>
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div> -->
              <div
                @click="showDatePicker = !showDatePicker"
                class="flex justify-between cursor-pointer items-center py-2 w-full"
              >
                <div class="flex gap-3 items-center">
                  <Icon name="material-symbols:date-range-outline" size="24" />
                  <p>Date Range</p>
                </div>
                <div class="flex gap-2 items-center">
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div>
              <div v-if="showDatePicker">
                <VueDatePicker v-model="date" :range="true" inline auto-apply></VueDatePicker>
              </div>
              <div class="flex justify-between items-center py-2 w-full">
                <div class="flex gap-3 items-center">
                  <img src="/svg/value.svg" alt="value" />
                  <p>Value</p>
                </div>
                <div class="flex gap-2 items-center">
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col text-left gap-4 lg:pl-6 lg:border-l border-grey-7 w-full lg:w-[calc(100%-272px)]"
          >
            <template v-if="dataStore.allTenders.length !== 0">
              <div v-for="(tender, index) in dataStore.allTenders" :key="index">
                <TenderCard :tender="tender" />
              </div>
              <Pagination
                :total-pages="totalPages"
                :total="total"
                :per-page="perPage"
                :current-page="currentPage"
                :has-more-pages="hasMorePages"
                @pagechanged="showMore"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div id="about" />
  </div>
</template>

<style lang="scss"></style>
