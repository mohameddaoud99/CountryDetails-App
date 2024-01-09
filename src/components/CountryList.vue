<!-- src/components/CountryList.vue -->

<template>
  <div class="container mt-5">
    <label for="regionSelect"><h4>Search by country</h4></label>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search by Country" aria-label="Search by Country" aria-describedby="button-addon1" v-model="searchTerm" @input="handleSearch">
    </div>

    <div class="form-group">
      <label for="regionSelect"><h4>Filter by Region:</h4></label>
      <select class="form-control" id="regionSelect" v-model="selectedRegion" @change="handleRegionChange">
        <option value="">All Regions</option>
        <option v-for="region in uniqueRegions" :key="region" :value="region">{{ region }}</option>
      </select>
    </div>

    <h1 class="text-center mb-4">Country List</h1>
    <div class="row">
      <div v-for="country in filteredRegions" :key="country.alpha3Code" class="col-md-4">
        <!-- Each country card -->
        <div class="card mb-4">
          <img :src="country.flags.png" class="card-img-top" alt="Country Flag">
          <div class="card-body">
            <h3 class="card-title">
              <strong>Country Name:</strong> {{ country.name.common }}
            </h3>
            <h3 class="card-text">
              <strong>Capitale:</strong> {{ country.capital }}
            </h3>
            <h3 class="card-text">
              <strong>Région:</strong> {{ country.region }}
            </h3>
            <h3 class="card-text">
              <strong>Population:</strong> {{ country.population }}
            </h3>
          </div>
        </div>
        <!-- End of country card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      searchTerm: "",
      selectedRegion: "",
    };
  },
  computed: {
    uniqueRegions() {
      return [...new Set(this.countries.map((country) => country.region))];
    },
    filteredRegions() {
      return this.countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          (this.selectedRegion === "" || country.region === this.selectedRegion)
      );
    },
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await this.$axios.get(
          "https://country-back.mohamed-daoud99.workers.dev/all"
        );
        this.countries = response.data;
        console.log(this.countries[0].flags.png);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    },
    handleSearch() {
      // Add any additional logic if needed
    },
    handleRegionChange() {
      // Add any additional logic if needed
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
