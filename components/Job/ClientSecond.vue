<script setup lang="ts">
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();
const submitForm = () => {
  console.log("submitting form");
};
const completed = ref(false);
const progressed = ref(true);
const errorMsg = reactive({});
const firstname = ref("");
const lastname = ref("");
const company = ref("");
const email = ref("");
const message = ref("");
const subject = ref("");
const phone = ref("");
const specialty = ref("");
const employmentType = ref("");
const fileList = ref([]);
const file = ref(null);
const countryList = ref([
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]);
const specialtyList = ref([
  "Allied Healthcare Professional",
  "Carer",
  "Cleaner",
  "Community Nurse",
  "GP",
  "Hospital Doctor",
  "Mental Health Nurse",
  "Midwife",
  "Nurse",
  "Specialty Nurse",
  "Theatre Nurse",
]);

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

const validateInput = (input, value) => {
  if (value) {
    errorMsg[input] = "";
  } else {
    errorMsg[input] = "Required";
  }
};

watch(name, (value) => {
  validateInput("name", value);
});

watch(email, (value) => {
  validateEmail(value);
});

watch(message, (value) => {
  validateInput("message", value);
});

const getStarted = () => {
  dataStore.clientStart = true;
};

const onInputChange = () => {
  fileList.value = [...file.value.files];
};

const remove = (i) => {
  fileList.value.splice(i, 1);
};

const dragover = (e) => {
  e.preventDefault();
  if (!e.currentTarget.classList.contains("bg-secondary/50")) {
    e.currentTarget.classList.remove("bg-white");
    e.currentTarget.classList.add("bg-secondary/50");
  }
};

const dragleave = (e) => {
  e.currentTarget.classList.add("bg-white");
  e.currentTarget.classList.remove("bg-secondary/50");
};

const drop = (e) => {
  e.preventDefault();
  file.value.files = e.dataTransfer.files;
  onInputChange();
  e.currentTarget.classList.add("bg-white");
  e.currentTarget.classList.remove("bg-secondary/50");
};
</script>
<template>
  <div
    class="w-full max-w-[1240px] mx-auto py-[150px] md:py-[180px] overflow-x-hidden relative"
  >
    <div
      class="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[56px]"
    >
      <div
        v-if="!completed"
        class="bg-grey-5 flex flex-col mx-4 xl:mx-0 gap-x-2 px-4 md:px-16 py-14 lg:rounded-3xl lg:max-w-[592px] w-full"
      >
        <div class="flex items-center gap-3">
          <div class="shell bg-grey-9 rounded-full h-2 w-11/12">
            <div
              class="bar bg-secondary h-full rounded-full"
              :class="progressed ? 'w-full' : 'w-1/2'"
            />
          </div>
          <p class="text-secondary text-sm">{{ progressed ? "2" : "1" }}/2</p>
        </div>
        <h1 class="text-head font-semibold mt-10 text-2xl md:text-[28px]">
          Register as a client
        </h1>
        <p class="text-lg mt-3">
          Our friendly team would love to hear from you
        </p>
        <div v-if="!progressed" class="w-full mt-10">
          <form
            id="getLicense"
            class="w-full flex flex-col items-start"
            @submit.prevent="submitForm"
          >
            <div class="w-full flex flex-col md:flex-row md:gap-4">
              <div class="w-full">
                <label for="firstName" class="mb-2">First Name</label>
                <input
                  id="firstName"
                  v-model="firstname"
                  type="text"
                  name="firstName"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="John"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
              <div class="w-full">
                <label for="lastName" class="mb-2">Last Name</label>
                <input
                  id="lastName"
                  v-model="lastname"
                  type="text"
                  name="lastName"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="Doe"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="flex w-full">
              <div class="flex flex-col w-full">
                <label for="email" class="mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  name="email"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none h-12"
                  :class="errorMsg.email ? 'border border-red-500' : ''"
                  placeholder="Enter your email address"
                />
                <span v-if="errorMsg.email" class="text-red-500 text-xs mt-1">{{
                  errorMsg.email
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="w-full">
              <label for="phone" class="mb-2">Phone number</label>
              <input
                id="phone"
                v-model="phone"
                type="text"
                name="phone"
                required
                class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                :class="errorMsg.name ? 'border border-red-500' : ''"
                placeholder="+1(555) 000-000"
              />
              <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                errorMsg.name
              }}</span>
              <span v-else class="text-transparent text-xs mt-1"
                >There is no error message</span
              >
            </div>
            <div class="w-full">
                <label for="address" class="mb-2">Street Address</label>
                <input
                  id="address"
                  v-model="address"
                  type="text"
                  name="address"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="e.g 5331 Rexford Court, Montgomery AL 36116"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            <div class="w-full flex flex-col md:flex-row md:gap-4">
              <div class="w-full">
                <label for="city" class="mb-2">City</label>
                <input
                  id="city"
                  v-model="city"
                  type="text"
                  name="city"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="Austin"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
              <div class="w-full">
                <label for="zip" class="mb-2">Zip</label>
                <input
                  id="zip"
                  v-model="zip"
                  type="text"
                  name="zip"
                  required
                  class="border border-grey-6 bg-white rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-12"
                  :class="errorMsg.name ? 'border border-red-500' : ''"
                  placeholder="Doe"
                />
                <span v-if="errorMsg.name" class="text-red-500 text-xs mt-1">{{
                  errorMsg.name
                }}</span>
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
              </div>
            </div>
            <div class="w-full mt-6">
              <button
                @click="progressed = true"
                class="liquor-btn min-w-max py-4 px-10 leading-none rounded-lg text-sm sm:text-base bg-secondary text-white w-full hover:bg-secondary/90"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div v-else class="w-full mt-10">
          <form
            id="getLicense"
            class="w-full flex flex-col items-start"
            @submit.prevent="submitForm"
          >
            
            <div class="w-full">
              <p>Staff Needed</p>
              <div class="type flex gap-5 flex-wrap flex-col md:flex-row my-3">
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="allied"
                    vallue="allied healthcare"
                  />
                  <span>Allied Healthcare</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="carer"
                    value="carer"
                  />
                  <span>Carer</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="cleaner"
                    value="cleaner"
                  />
                  <span>Cleaner</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="communityNurse"
                    value="community nurse"
                  />
                  <span>Community Nurse</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="gp"
                    value="gp"
                  />
                  <span>Gp</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="hospitaldoctor"
                    value="hospital doctor"
                  />
                  <span>Hospital Doctor</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="laundry"
                    value="laundry"
                  />
                  <span>Kitchen/Laundry</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="mentalhealthdoctor"
                    value="mental health doctor"
                  />
                  <span>Mental Health Doctor</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="midwife"
                    value="midwife"
                  />
                  <span>Midwife</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="nurse"
                    value="nurse"
                  />
                  <span>Nurse</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="specialitynurse"
                    value="specialitynurse"
                  />
                  <span>Speciality Nurse</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="staffNeeded"
                    id="theatrenurse"
                    value="theatrenurse"
                  />
                  <span>Theatre Nurse</span>
                </label>
              </div>
            </div>
            <div class="flex w-full">
              <div class="flex flex-col w-full">
                <label class="mb-1" for="message">Message</label>
                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  rows="5"
                  cols="30"
                  class="border border-grey-6 bg-white rounded-lg py-4 px-6 focus:outline-none"
                  placeholder="Leave us a message"
                  maxlength="500"
                />
                <span
                  v-if="errorMsg.message"
                  class="text-red-500 text-xs mt-1"
                  >{{ errorMsg.message }}</span
                >
                <span v-else class="text-transparent text-xs mt-1"
                  >There is no error message</span
                >
                <!-- <p class="text-grey-4 italic">
                * Please limit your message to 500 characters
              </p> -->
              </div>
            </div>
            <div class="w-full mt-6">
              <button
                @click="getStarted"
                class="liquor-btn min-w-max py-4 px-10 leading-none rounded-lg text-sm sm:text-base bg-secondary text-white w-full hover:bg-secondary/90"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        v-else
        class="bg-grey-5 flex flex-col mx-4 xl:mx-0 gap-x-2 px-4 md:px-16 py-14 lg:rounded-3xl lg:max-w-[592px] w-full"
      >
        <h1 class="text-head font-semibold mt-10 text-2xl md:text-[28px]">
          Your registration has been successfully sent
        </h1>
        <p class="text-lg mt-3">
          Our team will review your message and get back to you soon. Keep exploring Wana!
        </p>
        <div class="w-full flex text-center mt-6">
          <nuxt-link
            to="/"
            class="liquor-btn min-w-max py-4 px-10 leading-none rounded-lg text-sm sm:text-base bg-secondary text-white w-full hover:bg-secondary/90"
          >
            Home
          </nuxt-link>
        </div>
      </div>
      <img
        class="w-full hidden lg:block max-w-[592px]"
        src="/img/shake.png"
        alt="touch"
      />
    </div>
  </div>
</template>

<style scoped>
/* 
 * Hide the inputs. 
 */

input[type="checkbox"] {
  display: none;
}

/*
 * Then, style the label so it looks like however you want.
 * Here's a quick rundown of how I did it here:
 */

/*
 * Some basic positioning styles, and we give it the pointer cursor to show 
 * that it's clickable
 */

.type label {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  min-width: max-content;
}

/*
 * With how I decided to build this, the position: relative is super important.
 * We're going to position a pseudo element within this element(As it is the containing box)
 */

.type label span {
  position: relative;
  line-height: 22px;
}

/* 
 * Because we're using pseudo elements, a content property is required to make them appear.
 */

.type label span:before,
.type label span:after {
  content: "";
}

/*
 * We are using the :before peudo elemnt as the actual button,
 * then we'll position the :after over it. You could also use a background-image,
 * font-icon, or really anything if you want different styles.
 * For the specific style we're going for, this approach is simply the easiest, but
 * once you understand the concept you can really do it however you like.
 */

.type label span:before {
  border: 2px solid #404976;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
}

.type label span:after {
  background: #404976;
  width: 14px;
  height: 14px;
  position: absolute;
  top: -1px;
  left: 3px;
  transition: 300ms;
  opacity: 0;
}

/*
 * This is the most important part of this whole file, if you understand what's happening here
 * you can really make this in so many different ways.
 * 
 * We start by selecting the input inside of the .type label, with ".type label input". From there we use the 
 * ":checked" selector to *only* select the input when it is checked. We then use the immediate sibling 
 * selector(+) to select the span, and then it's pseudo element :after(What we are using to mark the button)
 * Because we already styled the :after, all we have to do is set the opacity to 1, making it fade in.
 */
.type label input:checked + span:after {
  opacity: 1;
}
</style>
