import { app } from "../../main";
import * as prismicH from "@prismicio/helpers";

export default {
  async fetchHomePage({ commit }) {
    window?.NProgress && window?.NProgress.start();

    const response = await app.$prismic.client.getSingle("home_page");

    window?.NProgress && window?.NProgress.done();

    if (response?.data) {
      const res = response.data;

      const home = {
        hero_title: prismicH.asText(res.title),
        hero_description: prismicH.asText(res.description),
        mor_title: prismicH.asText(res.mor_title),
        vesicash_mor: prismicH.asText(res.vesicash_mor),
        why_vesicash_mor: prismicH.asText(res.why_vesicash_mor),
        mor_services: res.mor_services?.map((service) =>
          prismicH.asText(service.service_title)
        ),
        mor_extra_benefit: prismicH.asText(res.extra_benefit),
        payment_title: prismicH.asText(res.payment_title),
        payment_subtitle: prismicH.asText(res.payment_subtitle),
        payment_description: prismicH.asText(res.payment_description),
        payment_services: res.payment_services?.map((service) => ({
          icon: prismicH.asImageSrc(service.icon),
          title: prismicH.asText(service.service_title),
          description: prismicH.asText(service.service_description),
        })),
        partner_title: prismicH.asText(res.partner_title),
        partner_description: prismicH.asText(res.partner_description),
        partners: res.partners?.map((partner) =>
          prismicH.asImageSrc(partner.partner_logo)
        ),
        escrow_title: prismicH.asText(res.escrow_title),
        escrow_description: prismicH.asText(res.escrow_description),
        escrow_benefits: res.escrow_benefits?.map((benefit) => ({
          icon: prismicH.asImageSrc(benefit.benefit_icon),
          title: prismicH.asText(benefit.benefit_title),
          description: prismicH.asText(benefit.benefit_description),
        })),
        api_title: prismicH.asText(res.api_title),
        api_description: prismicH.asText(res.api_description),
        onboard_title: prismicH.asText(res.onboard_title),
        onboard_description: prismicH.asText(res.onboard_description),
        labels: {
          view_doc_title: prismicH.asText(res.view_documentation_title),
          contact_sales_cta_title: prismicH.asText(res.contact_sales_cta_title),
          sign_up_cta_title: prismicH.asText(res.create_account_cta_title),
        },
      };

      commit("SAVE_HOME_PAGE", home);
    }
  },

  async fetchAboutPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("about_page");
    window?.NProgress && window?.NProgress.done();

    if (response?.data) {
      const about = {
        hero_title_1: prismicH.asText(response.data?.hero_title_1),
        hero_title_2: prismicH.asText(response.data?.hero_title_2),
        hero_description: prismicH.asText(response.data?.hero_description),
        value_title: prismicH.asText(response.data?.value_title),
        values: response.data?.values?.map((value) => ({
          index: prismicH.asText(value.index),
          title: prismicH.asText(value.value_title),
          description: prismicH.asText(value.value_description),
        })),
        service_title: prismicH.asText(response.data?.service_title),
        service_description: prismicH.asText(
          response.data?.service_description
        ),
        labels: {
          view_doc_cta: prismicH.asText(response.data?.view_doc_button_title),
          contact_cta: prismicH.asText(response.data?.contact_button_title),
        },
      };
      commit("SAVE_ABOUT_PAGE", about);
    }
    return response;
  },
};