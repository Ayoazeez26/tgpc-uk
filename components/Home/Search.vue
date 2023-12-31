<script setup lang="ts">
import _ from 'lodash';
import moment from 'moment';
import { useDataStore } from '~/stores/data';
const { $gsap, $ScrollTrigger } = useNuxtApp();
const dataStore = useDataStore();
const currentTab = ref('adultCare');
const page = ref(1);
const from = ref(0);
const errorMsg = reactive({});
const payload = ref('The');
const totalPages = ref(10);
const perPage = ref(10);
const total = ref(100);
const currentPage = ref(1);
const startDate = ref('');
const endDate = ref('');
const value = ref('');
const hasMorePages = ref(true);
const showDatePicker = ref(false);
const showLocationSearch = ref(false);
const showValueSearch = ref(false);
const location = ref('');
const date = ref();
const currentFilter = ref('searchTerm');
const getTenders = _.debounce(async (condition: boolean) => {
  window.scrollTo(0, 0);
  if (!condition) {
    from.value = 0;
    page.value = 1;
    currentPage.value = 1;
  }
  const query = `?searchTerm=${payload.value}&size=${perPage.value}&from=${
    from.value
  }
  ${location.value !== '' ? `&location=${location.value}` : ''}
  ${startDate.value !== '' ? `&startDate=${startDate.value}` : ''}
  ${endDate.value !== '' ? `&endDate=${endDate.value}` : ''}
  ${value.value !== '' ? `&value=${value.value}` : ''}
  `;
  await dataStore.getTenders(query);
  currentFilter.value = 'searchTerm';
  // dataStore.allTenders = allTenders;
}, 500);
const getDateTenders = _.debounce(async (condition: boolean) => {
  window.scrollTo(0, 0);
  if (!condition) {
    from.value = 0;
    page.value = 1;
    currentPage.value = 1;
  }
  const query = `?searchTerm=${payload.value}&size=${perPage.value}&from=${
    from.value
  }
  ${startDate.value !== '' ? `&startDate=${startDate.value}` : ''}
  ${endDate.value !== '' ? `&endDate=${endDate.value}` : ''}
  `;
  await dataStore.getTenders(query);
  currentFilter.value = 'date';
  // dataStore.allTenders = allTenders;
}, 500);
const getValueTenders = _.debounce(async (condition: boolean) => {
  window.scrollTo(0, 0);
  if (!condition) {
    from.value = 0;
    page.value = 1;
    currentPage.value = 1;
  }
  const query = `?searchTerm=${value.value}&size=${perPage.value}&from=${from.value}
  `;
  await dataStore.searchTendersByValue(query);
  currentFilter.value = 'value';
  // dataStore.allTenders = allTenders;
}, 500);

getTenders();

watch(location, (value) => {
  if (value) {
    getTendersByLocation();
  } else {
    getTenders();
  }
});

const getTendersByLocation = _.debounce(async (condition: boolean) => {
  window.scrollTo(0, 0);
  if (!condition) {
    from.value = 0;
    page.value = 1;
    currentPage.value = 1;
  }
  await dataStore.searchTendersByLocation(
    `?searchTerm=${location.value}&size=${perPage.value}&from=${from.value}`
  );
  currentFilter.value = 'location';
}, 500);

const addValueSearch = () => {
  if (Number(value.value) && Number(value.value) !== 0) {
    errorMsg.valueError = '';
    getValueTenders();
  } else {
    errorMsg.valueError = 'Input a valid number';
  }
};

const handleDate = (modelData) => {
  console.log(modelData);
  startDate.value = moment(modelData[0]).format('YYYY-MM-DD');
  endDate.value = moment(modelData[1]).format('YYYY-MM-DD');
  getDateTenders();
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
    console.log('mounted');
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add('(min-width: 1024px)', () => {
      $ScrollTrigger.create({
        trigger: container.value,
        pin: pinnedElement.value,
        // Trgger Scroller
        start: 'top 10%',
        end: 'bottom 55%',
        // markers: true
      });
    });
  });
});
</script>
<template>
  <div id="pageTop" class="pt-20 px-4 xl:px-0 md:pt-28 mx-auto w-full max-w-[1296px]">
    <div class="flex flex-col">
      <div class="w-full flex flex-col items-center text-center px-4">
        <div class="w-full max-w-[822px] mb-10">
          <h2
            class="text-2xl lg:text-[32px] capitalize lg:leading-[48px] font-extralight"
          >
            Current
            <span class="font-semibold"
              >live tenders in Health and Social Care</span
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
        <div ref="container" class="flex abcd w-full mt-10">
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
              <div
                @click="showLocationSearch = !showLocationSearch"
                class="flex justify-between cursor-pointer items-center py-2 w-full"
              >
                <div class="flex gap-3 items-center">
                  <Icon name="material-symbols:location-on-outline" size="24" />
                  <p>Location</p>
                </div>
                <div class="flex gap-2 items-center">
                  <!-- <p class="text-grey-6">100</p> -->
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div>
              <div v-if="showLocationSearch" class="relative w-full">
                <Icon
                  name="ic:baseline-search"
                  size="24px"
                  color="#0A0A0A"
                  class="absolute top-4 left-2"
                />
                <input
                  type="text"
                  name="search"
                  v-model="location"
                  id="search"
                  class="px-6 pl-8 border focus:outline-none text-sm focus:ring-grey-2 focus:ring-1 border-grey-2 rounded py-4 w-full"
                  placeholder="Search by Location"
                />
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
                <VueDatePicker
                  v-model="date"
                  :range="true"
                  :enable-time-picker="false"
                  inline
                  auto-apply
                  @update:model-value="handleDate"
                ></VueDatePicker>
              </div>
              <div
                @click="showValueSearch = !showValueSearch"
                class="flex justify-between cursor-pointer items-center py-2 w-full"
              >
                <div class="flex gap-3 items-center">
                  <img src="/svg/value.svg" alt="value" />
                  <p>Value</p>
                </div>
                <div class="flex gap-2 items-center">
                  <Icon name="ic:baseline-arrow-forward-ios" size="12" />
                </div>
              </div>
              <div v-if="showValueSearch" class="relative w-full">
                <div class="flex gap-3">
                  <input
                    type="text"
                    name="search"
                    v-model="value"
                    id="search"
                    class="px-3 border focus:outline-none text-sm focus:ring-grey-2 focus:ring-1 border-grey-2 rounded py-4 w-full"
                    placeholder="Max. Value"
                  />
                  <button
                    @click="addValueSearch"
                    class="bg-secondary border-2 border-secondary flex items-center gap-2 font-medium py-1 px-3 rounded text-white"
                  >
                    <p class="leading-[30px] text-sm tracking-[0.028px]">
                      Search
                    </p>
                  </button>
                </div>
                <span
                  v-if="errorMsg.valueError"
                  class="text-red-500 self-start text-left text-xs mt-1"
                  >{{ errorMsg.valueError }}</span
                >
                <span v-else class="text-transparent self-start text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
          </div>
          <div
            class="flex flex-col text-left gap-4 pb-20 lg:pl-6 lg:border-l border-grey-7 w-full lg:w-[calc(100%-272px)]"
          >
            <template v-if="dataStore.allTenders.length !== 0">
              <div v-for="(item, index) in 5" :key="index">
                <TenderCardGuest :tender="dataStore.allTenders[index]" />
              </div>
              <TenderFade />
            </template>
            <template v-else>
              <img class="w-4/5 mx-auto" src="/svg/empty.svg" alt="empty svg" />
              <h3
                class="text-2xl lg:text-[30px] capitalize lg:leading-[48px] text-center mt-5 font-semibold"
              >
                No results found
              </h3>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div id="about" />
  </div>
</template>

<style lang="scss"></style>
