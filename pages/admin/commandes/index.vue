<template>
  <main class="">
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full"></div>
    </div>
    <section
      class=" relative min-h-full  px-4 md:px-10 mx-auto w-full -m-24 z-10"
    >
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      class="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      class="hidden md:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Montant
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Voir</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-if="loading" class="bg-white divide-y divide-gray-200">
                  <tr v-for="c in 6" :key="c">
                    <td class="hidden sm:block px-6 py-4 whitespace-nowrap">
                      <div
                        class="h-4 w-6 bg-gray-200 animate-pulse rounded-sm  text-sm text-gray-900 truncate"
                      ></div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <div
                            class="h-10 w-10 bg-gray-200 animate-pulse rounded-full "
                          ></div>
                        </div>
                        <div class="ml-4">
                          <div
                            class="h-4 w-5 bg-gray-200 animate-pulse rounded-t-sm text-sm font-medium text-gray-900"
                          ></div>
                          <div
                            class="h-4 w-8 bg-gray-200 animate-pulse rounded-b-sm text-sm text-gray-500"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:block px-6 py-4 whitespace-nowrap">
                      <div
                        class="h-4 w-6 bg-gray-200 animate-pulse rounded-sm  text-sm text-gray-900 md:w-28 truncate"
                      ></div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="h-4 w-6 bg-gray-200 animate-pulse px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-secondary-800"
                      >
                      </span>
                    </td>
                    <td
                      class=" px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <div
                        class="h-4 w-6 bg-gray-200 animate-pulse rounded-sm"
                      ></div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-indigo-600 border border-blue-600 px-2 py-2 hover:bg-blue-700  rounded hover:text-gray-100"
                        >Voir</a
                      >
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="o in orders" :key="o._id">
                    <td class="hidden sm:block px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 truncate">
                        {{ o._id }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ o.user.firstname || o.userRandom.firstname }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ o.user.lastname || o.userRandom.lastname }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:block px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 md:w-28 truncate"></div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary-100 text-secondary-800"
                      >
                        {{ o.status }}
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ o.total }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-indigo-600 border border-blue-600 px-2 py-2 hover:bg-blue-700  rounded hover:text-gray-100"
                        >Voir</a
                      >
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer-admin></footer-admin>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import FooterAdmin from "~/components/admin/FooterAdmin.vue";
export default {
  layout: "admin",
  components: {
    FooterAdmin
  },
  data() {
    return {
      loading: true,
      orders: []
    };
  },
  methods: {
    ...mapActions({
      getAllOrders: "ingredient/getAllOrders"
    })
  },
  async fetch() {
    /* this.orders = await this.getAllOrders();
    this.loading = false; */
  }
};
</script>

<style></style>
