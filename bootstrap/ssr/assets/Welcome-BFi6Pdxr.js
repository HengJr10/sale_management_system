import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { G as GuestNavbar } from "./GuestNavbar-DtaeTNhC.js";
import { Link, useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Notivue, Notification, pastelTheme } from "notivue";
import { _ as _sfc_main$3 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$4 } from "./SubmitButton-B3gBT10i.js";
import "@popperjs/core";
import "./ApplicationLogo-BzQ-yG8f.js";
const _sfc_main$2 = {
  components: { Link },
  data() {
    return {
      date: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative bg-blueGray-200 pt-8 pb-6" }, _attrs))}><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div class="container mx-auto px-4"><div class="flex flex-wrap text-center lg:text-left"><div class="w-full lg:w-6/12 px-4"><h4 class="text-3xl font-semibold">Let&#39;s keep in touch!</h4><h5 class="text-lg mt-0 mb-2 text-blueGray-600"> Find me on any of these platforms, I respond 1-2 business days. </h5><div class="mt-6 lg:mb-0 mb-6"><button class="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" onclick="window.open(&#39;https://www.linkedin.com/in/mamun724682&#39;, &#39;_blank&#39;)"><i class="fab fa-linkedin"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" onclick="window.open(&#39;https://github.com/mamun724682&#39;, &#39;_blank&#39;)"><i class="fab fa-github"></i></button></div></div><div class="w-full lg:w-6/12 px-4"><div class="flex flex-wrap items-top mb-6"><div class="w-full lg:w-4/12 px-4 ml-auto"><span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"> Useful Links </span><ul class="list-unstyled"><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> About Us </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> Blog </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> Github </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> Free Products </a></li></ul></div><div class="w-full lg:w-4/12 px-4"><span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"> Other Resources </span><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("login"),
    class: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Login `);
      } else {
        return [
          createTextVNode(" Login ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("register"),
    class: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create new account `);
      } else {
        return [
          createTextVNode(" Create new account ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div><hr class="my-6 border-blueGray-300"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4 mx-auto text-center"><div class="text-sm text-blueGray-500 font-semibold py-1"> Copyright © ${ssrInterpolate($data.date)}</div></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footers/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const team1 = "/build/assets/team-1-800x800-CAZr3VGL.jpg";
const team2 = "/build/assets/team2-CDuUpb-x.avif";
const team3 = "/build/assets/team3-27_5TK2s.jpg";
const team4 = "/build/assets/team4-BwKXa_SW.jpg";
const _sfc_main$1 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: null,
      email: null,
      message: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><form><div class="flex-auto p-5 lg:p-10"><h4 class="text-2xl font-semibold"> Want to work with us? </h4><p class="leading-relaxed mt-1 mb-4 text-blueGray-500"> Complete this form and we will get back to you in 24 hours. </p><div class="relative w-full mb-3 mt-8"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="name"> Full Name </label><input id="name" type="text"${ssrRenderAttr("value", unref(form).name)} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email"> Email </label><input id="email" type="email"${ssrRenderAttr("value", unref(form).email)} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="message"> Message </label><textarea id="message" required rows="4" cols="80" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Type a message...">${ssrInterpolate(unref(form).message)}</textarea>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.message
      }, null, _parent));
      _push(`</div><div class="text-center mt-6">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        processing: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Send Message `);
          } else {
            return [
              createTextVNode(" Send Message ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form>`);
      _push(ssrRenderComponent(unref(Notivue), null, {
        default: withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Notification), {
              item,
              theme: unref(pastelTheme)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Notification), {
                item,
                theme: unref(pastelTheme)
              }, null, 8, ["item", "theme"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const inventoryService = "/build/assets/inventory-service-ZX7Bia-v.avif";
const banner = "/build/assets/banner-Dk39fq-J.avif";
const fourthSection = "/build/assets/4th-section-BVUTObe9.avif";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.pageTitle }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(GuestNavbar, null, null, _parent));
      _push(`<main><div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"><div class="absolute top-0 w-full h-full bg-center bg-cover" style="${ssrRenderStyle({ backgroundImage: `url(${unref(banner)})` })}"><span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span></div><div class="container relative mx-auto"><div class="items-center flex flex-wrap"><div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"><div class="pr-12"><h1 class="text-white font-semibold text-5xl"> Your story starts with us. </h1><p class="mt-4 text-lg text-blueGray-200"> Transform your business operations with custom-built web applications that streamline workflows, enhance productivity, and scale as your company grows. Get personalized solutions that meet your unique challenges and goals. </p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.$page.props.auth.user ? _ctx.route("dashboard") : _ctx.route("login"),
        class: "mt-4 bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150",
        type: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Inventory <i class="fas fa-arrow-alt-circle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Explore Inventory "),
              createVNode("i", { class: "fas fa-arrow-alt-circle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div></div><section class="pb-20 bg-blueGray-200 -mt-24"><div class="container mx-auto px-4"><div class="flex flex-wrap"><div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"><i class="fas fa-award"></i></div><h6 class="text-xl font-semibold">Custom Web Apps</h6><p class="mt-2 mb-4 text-blueGray-500"> Build robust, scalable applications designed specifically for your business goals. </p></div></div></div><div class="w-full md:w-4/12 px-4 text-center"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"><i class="fas fa-retweet"></i></div><h6 class="text-xl font-semibold">Seamless Integration</h6><p class="mt-2 mb-4 text-blueGray-500"> Connect your tools and systems effortlessly with smooth integration services. </p></div></div></div><div class="pt-6 w-full md:w-4/12 px-4 text-center"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"><i class="fas fa-fingerprint"></i></div><h6 class="text-xl font-semibold">Scalable Solutions</h6><p class="mt-2 mb-4 text-blueGray-500">Future-proof your business with solutions that grow alongside your operations.</p></div></div></div></div><div class="flex flex-wrap items-center mt-32"><div class="w-full md:w-5/12 px-4 mr-auto ml-auto"><div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-user-friends text-xl"></i></div><h3 class="text-3xl mb-2 font-semibold leading-normal"> Working with us is a pleasure </h3><p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> We prioritize clear communication, transparency, and collaboration at every step of the project. From concept to launch, I work closely with you to ensure your vision is realized, providing regular updates and making adjustments based on your feedback. </p><p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"> The goal is to deliver high-quality, functional applications while ensuring a smooth and enjoyable experience for you. </p></div><div class="w-full md:w-4/12 px-4 mr-auto ml-auto"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"><img alt="..."${ssrRenderAttr("src", unref(inventoryService))} class="w-full align-middle rounded-t-lg"><blockquote class="relative p-8 mb-4"><svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px"><polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current"></polygon></svg><h4 class="text-xl font-bold text-white"> Top Notch Services </h4><p class="text-md font-light mt-2 text-white"> I offer reliable, efficient, and highly scalable solutions to help your business thrive and grow. </p></blockquote></div></div></div></div></section><section class="relative py-20"><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div class="container mx-auto px-4"><div class="items-center flex flex-wrap"><div class="w-full md:w-4/12 ml-auto mr-auto px-4"><img alt="..." class="max-w-full rounded-lg shadow-lg"${ssrRenderAttr("src", unref(fourthSection))}></div><div class="w-full md:w-5/12 ml-auto mr-auto px-4"><div class="md:pr-12"><div class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"><i class="fas fa-rocket text-xl"></i></div><h3 class="text-3xl font-semibold">Tailored Solutions</h3><p class="mt-4 text-lg leading-relaxed text-blueGray-500"> From front-end design to back-end logic, I handle all aspects of web development, ensuring high performance and usability. Let’s bring your ideas to life with clean code and a focus on scalability. </p><ul class="list-none mt-6"><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"><i class="fas fa-fingerprint"></i></span></div><div><h4 class="text-blueGray-500"> Responsive Design </h4></div></div></li><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"><i class="fab fa-html5"></i></span></div><div><h4 class="text-blueGray-500"> Secure and Reliable </h4></div></div></li><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"><i class="far fa-paper-plane"></i></span></div><div><h4 class="text-blueGray-500">Easy Maintenance</h4></div></div></li></ul></div></div></div></div></section><section class="pt-20 pb-48"><div class="container mx-auto px-4"><div class="flex flex-wrap justify-center text-center mb-24"><div class="w-full lg:w-6/12 px-4"><h2 class="text-4xl font-semibold">What Clients Say</h2><p class="text-lg leading-relaxed m-4 text-blueGray-500"> Hear from clients who have trusted me to build their business solutions. </p></div></div><div class="flex flex-wrap"><div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"><div class="px-6"><img alt="..."${ssrRenderAttr("src", unref(team1))} class="shadow-lg rounded-full mx-auto max-w-120-px"><div class="pt-6 text-center"><h5 class="text-xl font-bold">Ryan Tompson</h5><p class="mt-1 text-sm text-blueGray-400 font-semibold"> The application exceeded my expectations. Delivered on time and tailored perfectly to our needs. </p></div></div></div><div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"><div class="px-6"><img alt="..."${ssrRenderAttr("src", unref(team2))} class="shadow-lg rounded-full mx-auto max-w-120-px"><div class="pt-6 text-center"><h5 class="text-xl font-bold">Romina Hadid</h5><p class="mt-1 text-sm text-blueGray-400 font-semibold"> Incredible attention to detail and great communication throughout the entire process. Highly recommended! </p></div></div></div><div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"><div class="px-6"><img alt="..."${ssrRenderAttr("src", unref(team3))} class="shadow-lg rounded-full mx-auto max-w-120-px"><div class="pt-6 text-center"><h5 class="text-xl font-bold">Alexa Smith</h5><p class="mt-1 text-sm text-blueGray-400 font-semibold"> Professional, efficient, and reliable. My go-to for all future web development projects. </p></div></div></div><div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"><div class="px-6"><img alt="..."${ssrRenderAttr("src", unref(team4))} class="shadow-lg rounded-full mx-auto max-w-120-px"><div class="pt-6 text-center"><h5 class="text-xl font-bold">Jenna Kardi</h5><p class="mt-1 text-sm text-blueGray-400 font-semibold"> Amazing service! The final product was exactly what I needed to streamline my business operations. </p></div></div></div></div></div></section><section class="pb-20 relative block bg-blueGray-800"><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div class="container mx-auto px-4 lg:pt-24 lg:pb-64"><div class="flex flex-wrap text-center justify-center"><div class="w-full lg:w-6/12 px-4"><h2 class="text-4xl font-semibold text-white"> Services Offered </h2><p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400"> Offering a variety of development services to meet your business needs, from custom solutions to seamless integrations. </p></div></div><div class="flex flex-wrap mt-12 justify-center"><div class="w-full lg:w-3/12 px-4 text-center"><div class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"><i class="fas fa-medal text-xl"></i></div><h6 class="text-xl mt-5 font-semibold text-white"> Frontend Development </h6><p class="mt-2 mb-4 text-blueGray-400"> Create responsive, user-friendly interfaces that provide seamless user experiences. </p></div><div class="w-full lg:w-3/12 px-4 text-center"><div class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"><i class="fas fa-poll text-xl"></i></div><h5 class="text-xl mt-5 font-semibold text-white"> Backend Development </h5><p class="mt-2 mb-4 text-blueGray-400"> Build secure, scalable, and efficient server-side applications for your business. </p></div><div class="w-full lg:w-3/12 px-4 text-center"><div class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"><i class="fas fa-lightbulb text-xl"></i></div><h5 class="text-xl mt-5 font-semibold text-white"> Deployment Services </h5><p class="mt-2 mb-4 text-blueGray-400"> Ensure smooth deployment, from server setup to launching your application live. </p></div></div></div></section><section class="relative block py-24 lg:pt-0 bg-blueGray-800"><div class="container mx-auto px-4"><div class="flex flex-wrap justify-center lg:-mt-64 -mt-48"><div class="w-full lg:w-6/12 px-4"><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></div></div></section></main>`);
      _push(ssrRenderComponent(FooterComponent, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
