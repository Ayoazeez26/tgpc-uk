<script setup lang="ts">
import { useDataStore } from '~/stores/data';
import moment from 'moment';

const router = useRouter();
const dataStore = useDataStore();
const props = defineProps<{ tender: any }>();

const goToTender = () => {
  console.log('tender props is => ', props.tender)
  dataStore.singleTender = props.tender;
  router.push(`/tender/${props.tender.ID}`);
}
</script>
<template>
  <div
    class="card flex flex-col py-8 gap-10 bg-white border-border-grey-7 rounded-lg"
  >
    <div class="flex flex-col px-4 md:px-10 gap-y-6 w-full">
      <div class="flex justify-between items-center">
        <div class="flex md:gap-4 w-full justify-between md:justify-start md:w-auto">
          <div class="flex items-center gap-2 md:gap-[10px]">
            <div class="w-6 h-6 rounded-full bg-grey-9" />
            <p class="text-grey-8 text-sm">{{ props.tender?.Location }}</p>
          </div>
          <button
            class="flex items-center text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
          >
            <p class="uppercase">eligibility status</p>
            <Icon name="mdi:information-outline" />
          </button>
        </div>
        <div class="hidden md:flex flex-col md:w-auto md:flex-row md:items-center">
          <button
            @click="goToTender"
            class="bg-secondary border-2 border-secondary flex items-center gap-2 font-medium py-2 px-8 rounded text-white"
          >
            <p class="leading-[30px] tracking-[0.028px]">View now</p>
            <Icon name="material-symbols:arrow-forward-rounded" size="24" />
          </button>
        </div>
      </div>
      <h3
        class="clamp overflow-hidden text-ellipsis text-lg font-medium leading-[36px]"
      >
        {{ props.tender.Title }}
      </h3>
      <div class="flex flex-wrap font-light gap-4">
        <button
          class="flex items-center min-w-max text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Adult's Social Care</p>
        </button>
        <button
          class="flex items-center min-w-max text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Home Care</p>
        </button>
        <button
          class="flex items-center min-w-max text-grey-8 gap-2 py-2 px-4 border border-grey-2 bg-grey rounded-full justify-center"
        >
          <p>Supported Living</p>
        </button>
      </div>
    </div>
    <div class="border-t border-grey-2 flex flex-col md:flex-row justify-between md:px-10">
      <div class="py-7 flex items-center gap-4 px-4 md:px-0 justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-grey-8 text-sm font-light">Date Created</p>
          <p class="text-secondary text-xl font-bold leading-[36px]">
            {{  moment(props.tender.Date).format('DD/MM/YYYY') }}
          </p>
        </div>
        <span>-</span>
        <div class="flex flex-col gap-1">
          <p class="text-grey-8 text-sm font-light">Closing Date</p>
          <p class="text-secondary text-xl font-bold leading-[36px]">
            {{  moment(props.tender.EndDate).format('DD/MM/YYYY') }}
          </p>
        </div>
      </div>
      <div class="w-full h-px md:w-px md:h-full bg-grey-2" />
      <div class="py-7 flex flex-col gap-1 px-4 md:px-0 text-center md:text-right">
        <p class="text-grey-8 text-sm font-light">Value</p>
        <p class="text-secondary text-[28px] font-bold leading-[26px]">
          {{ props.tender.Currency }} {{ Number(props.tender.Value).toLocaleString() }}
        </p>
      </div>
      <div class="md:hidden flex flex-col md:w-auto md:flex-row md:items-center px-4">
          <button
            @click="goToTender"
            class="bg-secondary border-2 border-secondary flex items-center justify-center gap-2 font-medium py-2 px-8 rounded text-white"
          >
            <p class="leading-[30px] tracking-[0.028px]">View now</p>
            <Icon name="material-symbols:arrow-forward-rounded" size="24" />
          </button>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
