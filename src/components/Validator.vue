<template>
    <div class="d-flex justify-content-center">
        <div class="card w-40 p-4">
            <h1 class="py-2">Enter a Tax File Number below</h1>
            <h4 class="text-muted py-2">Don't worry, we don't store anything</h4>
            <p class="py-2">
            An Australian Tax File Number is not just a random sequence of numbers.<br>
            It can be validated using a check digit. Read more
            <a href="https://en.wikipedia.org/wiki/Tax_file_number#Check_digit" target="_blank" rel="noopener">here</a>.
            </p>
            
            <div class="mb-3">
                <input v-model="tfn" placeholder="123456789">
            </div>

            <div>
                <p v-if="(tfn.length == 8 || tfn.length == 9) && isValid == true" class="text-success">That is a valid Tax File Number!</p>
                <p v-else-if="(tfn.length == 8 || tfn.length == 9) && isValid == false" class="text-danger">That is not a valid Tax File Number.</p>
                <p v-else-if="tfn.length > 0 && tfn.length < 8" class="text-warning">TFN is not long enough</p>
                <p v-else-if="tfn.length > 9" class="text-warning">TFN is too long</p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'TFNValidator',
  data() {
      return {
          isValid: false,
          tfn: "",
          weightingEight: [10, 7, 8, 4, 6, 3, 5, 1],
          weightingNine: [1, 4, 3, 7, 5, 8, 6, 9, 10]
      }
  },
  methods: {
      validateTfn: function () {
            let tfnSum = 0;

            let tfnList = this.tfn.split("").map(Number);

            if (tfnList.length == 9) {
                for (const [index, number] of tfnList.entries()) {
                    tfnSum += (number*this.weightingNine[index]);
                }
            } else if (tfnList.length == 8) {
                for (const [index, number] of tfnList.entries()) {
                    tfnSum += (number*this.weightingEight[index]);
                }
            } else {
                this.isValid = false;
            }
            if (tfnSum % 11 == 0) {
                this.isValid = true;
            } else {
                this.isValid = false;
            }
        }
    },
  watch: {
      tfn: function() {
          let tfn = this.tfn.trim();

          let re = new RegExp("[^\\d]", "i");
            
          this.tfn = tfn.replace(re, "");

          this.validateTfn();
      }
  }
}
</script>

<style scoped>
.w-40 {
    max-width: 40%;
}
.card {
    border: none !important;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
}
</style>