<template >
  <div class="app-container">
    <div class="contact-area">
      <div class="row">
        <div class="col-12 col-xl-8 mx-auto">
          <div class="row">
            <div class="col-12 col-md-5">
              <div class="contact-card mgb-32">
                <div class="icon-wrapper">
                  <img
                    v-lazy="loadImage('telephone.svg', 'landing')"
                    alt="telephone-icon"
                  />
                </div>

                <div class="">
                  <div class="title-copy grey-900 primary-1-text roobert-600">
                    Phone number
                  </div>
                  <div class="description-copy">
                    <a
                      href="tel:43567789094"
                      class="grey-600 tertiary-1-text roobert-400"
                      >+43 567 7890 94</a
                    >
                  </div>
                </div>
              </div>

              <div class="contact-card mb-5 mb-md-0">
                <div class="icon-wrapper">
                  <img
                    v-lazy="loadImage('mailbox.svg', 'landing')"
                    alt="mailbox-icon"
                  />
                </div>

                <div class="">
                  <div class="title-copy grey-900 primary-1-text roobert-600">
                    Email address
                  </div>
                  <div class="description-copy">
                    <a
                      href="mailto:sales@redstonestonpgs.com"
                      class="grey-600 tertiary-1-text roobert-400"
                    >
                      sales@redstonestonpgs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-7">
              <div class="contact-form-block">
                <div class="copy-title mgb-32 grey-900 roobert-700 h3-text">
                  Send us a message.
                </div>

                <div class="form-area">
                  <form action="">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <BasicInput
                            label_title="Full name"
                            :input_value="form.full_name"
                            is_required
                            placeholder="Enter full name"
                            :custom_style="{
                              group_wrapper_style:
                                'input-field input-field-email',
                            }"
                            @getInputState="
                              updateFormState($event, 'full_name')
                            "
                            :error_handler="{
                              type: 'required',
                              message: 'Full name is not valid',
                            }"
                          />
                        </div>
                      </div>

                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <BasicInput
                            label_title="Phone number"
                            input_type="phone"
                            :input_value="form.phone"
                            is_required
                            placeholder="Enter your phone number"
                            @getInputState="updateFormState($event, 'phone')"
                            :error_handler="{
                              type: 'phone',
                              message: 'Phone is not valid',
                            }"
                          />
                        </div>
                      </div>

                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <BasicInput
                            label_title="Email address"
                            input_type="email"
                            :input_value="form.email"
                            is_required
                            placeholder="Enter email address"
                            :custom_style="{
                              group_wrapper_style:
                                'input-field input-field-email',
                            }"
                            @getInputState="updateFormState($event, 'email')"
                            :error_handler="{
                              type: 'email',
                              message: 'Email address is not valid',
                            }"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <div class="form-label">Message</div>

                          <textarea
                            class="form-control"
                            rows="8"
                            placeholder="Enter your text"
                          ></textarea>
                        </div>
                      </div>

                      <div class="col-12 mgt-12">
                        <button
                          class="btn btn-lg pdy-16 btn-primary roobert-500 w-100"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInput from "@/shared/components/form-comps/basic-input";

export default {
  name: "ContactArea",

  components: {
    BasicInput,
  },

  data() {
    return {
      form: {
        full_name: "",
        phone: "",
        email: "",
        message: "",
      },

      validity: {
        full_name: false,
        phone: false,
        email: false,
        message: false,
      },
    };
  },
};
</script>

<style lang="scss">
.contact-area {
  padding: toRem(100) 0;

  .contact-card {
    border-radius: toRem(16);
    padding: toRem(24);
    border: toRem(1) solid getColor("grey-50");
    background: getColor("grey-10");
    @include flex-row-start-nowrap;
    gap: toRem(16);

    @include breakpoint-down(lg) {
      padding: toRem(18);
    }

    .icon-wrapper {
      @include flex-row-center-nowrap;
      @include draw-shape(56);
      background: #e9f7ec;
      position: relative;
      border-radius: 50%;

      @include breakpoint-down(lg) {
        @include draw-shape(48);
      }
    }
  }

  .contact-form-block {
    background: getColor("grey-10");
    border-radius: toRem(16);
    padding: toRem(32);
    border: toRem(1) solid getColor("grey-50");
    background: getColor("grey-10");

    @include breakpoint-down(lg) {
      padding: toRem(24);
    }

    @include breakpoint-down(md) {
      padding: toRem(20) toRem(18);
    }

    .copy-title {
      @include breakpoint-down(lg) {
        font-size: toRem(24);
      }
    }
  }
}
</style>