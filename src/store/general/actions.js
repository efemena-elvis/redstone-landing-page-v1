import $api from "@/services/service-api";

const routes = {
  location: "https://ip2c.org/s",
  contact_url: "/auth/contact-us",
};

export default {
  // ==============================
  // GET CURRENT USER LOCATION
  // ==============================
  async getMyLocation() {
    return await $api.fetchRaw(routes.location);
  },

  // ==================================
  // HANDLE CONTACT FORM PROCESSING
  // ==================================
  async handleContactUs(_, payload) {
    return await $api.push(routes.contact_url, { payload });
  },
};
