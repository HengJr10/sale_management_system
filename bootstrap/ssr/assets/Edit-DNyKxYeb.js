import { ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as avatar, _ as _sfc_main$3 } from "./AuthenticatedLayout-BSPNyRzk.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError-fLcttu_2.js";
import _sfc_main$5 from "./UpdateProfileInformationForm-VADosRuK.js";
import _sfc_main$6 from "./UpdatePasswordForm-BruIO3i9.js";
import _sfc_main$4 from "./UpdateSettingsForm-DS3RA-jV.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BzQ-yG8f.js";
import "notivue";
import "./SubmitButton-B3gBT10i.js";
const _sfc_main$1 = {
  __name: "CardProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const isHovered = ref(false);
    ref(null);
    const previewImage = ref(null);
    const form = useForm({
      photo: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" }, _attrs))}><div class="px-6"><div class="flex flex-wrap justify-center"><div class="w-full px-4 flex justify-center"><div class="relative"><img${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${ssrRenderAttr("src", previewImage.value || ((_a = _ctx.$page.props.auth.user) == null ? void 0 : _a.photo) || unref(avatar))} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" style="${ssrRenderStyle({ "width": "150px !important", "height": "150px !important" })}">`);
      if (isHovered.value) {
        _push(`<div class="absolute flex items-center justify-center rounded-full cursor-pointer"><i class="fas fa-camera text-white text-2xl"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="file" class="hidden" accept="image/*"></div></div></div><div class="text-center mt-24 mb-10">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.photo
      }, null, _parent));
      _push(`<h3 class="text-xl font-semibold leading-normal text-blueGray-700 mb-2">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</h3><div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold"><a${ssrRenderAttr("href", "mailto:" + _ctx.$page.props.auth.user.email)} class="underline"><i class="fas fa-envelope mr-2 text-lg text-blueGray-400"></i> ${ssrInterpolate(_ctx.$page.props.auth.user.email)}</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/CardProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    },
    settings: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full lg:w-8/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"${_scopeId}><div class="rounded-t bg-white mb-0 px-6 py-6"${_scopeId}><div class="text-center flex justify-between"${_scopeId}><h6 class="text-blueGray-700 text-xl font-bold"${_scopeId}>My account</h6></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { settings: __props.settings }, null, _parent2, _scopeId));
            _push2(`<hr class="mt-6 border-b-1 border-blueGray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status
            }, null, _parent2, _scopeId));
            _push2(`<hr class="mt-6 border-b-1 border-blueGray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="w-full lg:w-4/12 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full lg:w-8/12 px-4" }, [
                  createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" }, [
                    createVNode("div", { class: "rounded-t bg-white mb-0 px-6 py-6" }, [
                      createVNode("div", { class: "text-center flex justify-between" }, [
                        createVNode("h6", { class: "text-blueGray-700 text-xl font-bold" }, "My account")
                      ])
                    ]),
                    createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                      createVNode(_sfc_main$4, { settings: __props.settings }, null, 8, ["settings"]),
                      createVNode("hr", { class: "mt-6 border-b-1 border-blueGray-300" }),
                      createVNode(_sfc_main$5, {
                        "must-verify-email": __props.mustVerifyEmail,
                        status: __props.status
                      }, null, 8, ["must-verify-email", "status"]),
                      createVNode("hr", { class: "mt-6 border-b-1 border-blueGray-300" }),
                      createVNode(_sfc_main$6)
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                  createVNode(_sfc_main$1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
