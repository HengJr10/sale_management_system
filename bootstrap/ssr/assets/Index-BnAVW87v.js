import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BSPNyRzk.js";
import { Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-_z_BdlNV.js";
import { g as getCurrency, f as formatDatetime } from "./AsyncVueSelect-DAiIkMoY.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BzQ-yG8f.js";
import "notivue";
import "lodash/throttle.js";
import "lodash/mapValues.js";
import "lodash/pickBy.js";
import "./Button-CQhKcULN.js";
import "@vuepic/vue-datepicker";
import "vue-select";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object
    },
    transactions: {
      type: Object
    }
  },
  setup(__props) {
    const tableHeads = ref(["#", "Transaction Number", "Order Number", "Amount", "Paid Through", "Created At"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Transaction" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Transactions `);
          } else {
            return [
              createTextVNode(" Transactions ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "transactions.index",
              paginatedData: __props.transactions,
              filters: __props.filters,
              tableHeads: tableHeads.value
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Apply filters(${ssrInterpolate(__props.transactions.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h4", { class: "text-2xl" }, "Apply filters(" + toDisplayString(__props.transactions.total) + ")", 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.transactions.data, (transaction, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.transactions.current_page * __props.transactions.per_page - (__props.transactions.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.transactions.current_page * __props.transactions.per_page - (__props.transactions.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(transaction.transaction_number)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(transaction.transaction_number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(transaction.order.order_number)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(transaction.order.order_number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(transaction.amount)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(transaction.amount), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(transaction.paid_through)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(transaction.paid_through), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formatDatetime)(transaction.created_at))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formatDatetime)(transaction.created_at)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</tr>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (transaction, index) => {
                      return openBlock(), createBlock("tr", {
                        key: transaction.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.transactions.current_page * __props.transactions.per_page - (__props.transactions.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(transaction.transaction_number), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(transaction.order.order_number), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(transaction.amount), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(transaction.paid_through), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formatDatetime)(transaction.created_at)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode(CardTable, {
                    indexRoute: "transactions.index",
                    paginatedData: __props.transactions,
                    filters: __props.filters,
                    tableHeads: tableHeads.value
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("h4", { class: "text-2xl" }, "Apply filters(" + toDisplayString(__props.transactions.total) + ")", 1)
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (transaction, index) => {
                        return openBlock(), createBlock("tr", {
                          key: transaction.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.transactions.current_page * __props.transactions.per_page - (__props.transactions.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(transaction.transaction_number), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(transaction.order.order_number), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(transaction.amount), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(transaction.paid_through), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formatDatetime)(transaction.created_at)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["paginatedData", "filters", "tableHeads"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transaction/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
