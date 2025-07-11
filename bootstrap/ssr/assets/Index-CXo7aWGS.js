import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BSPNyRzk.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-_z_BdlNV.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$5 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
import { _ as _sfc_main$4 } from "./DashboardInputGroup-KLfMQA2p.js";
import { s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BzQ-yG8f.js";
import "notivue";
import "lodash/throttle.js";
import "lodash/mapValues.js";
import "lodash/pickBy.js";
import "@vuepic/vue-datepicker";
import "./SubmitButton-B3gBT10i.js";
import "vue-select";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object
    },
    employees: {
      type: Object
    }
  },
  setup(__props) {
    const selectedEmployee = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Name", "Designation", "Email", "Phone", "Salary", "Joining Date", "Action"]);
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      designation: null,
      address: null,
      salary: null,
      nid: null,
      joining_date: null,
      photo: null
    });
    const createEmployeeModal = () => {
      showCreateModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const editEmployeeModal = (employee) => {
      selectedEmployee.value = employee;
      form.name = employee.name;
      form.email = employee.email;
      form.phone = employee.phone;
      form.designation = employee.designation;
      form.address = employee.address;
      form.salary = employee.salary;
      form.nid = employee.nid;
      form.joining_date = employee.joining_date;
      form.photo = null;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteEmployeeModal = (employee) => {
      selectedEmployee.value = employee;
      showDeleteModal.value = true;
    };
    const createEmployee = () => {
      form.post(route("employees.store"), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateEmployee = () => {
      form.transform((data) => ({
        ...data,
        _method: "put"
      })).post(route("employees.update", selectedEmployee.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteEmployee = () => {
      form.delete(route("employees.destroy", selectedEmployee.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        }
      });
    };
    const closeModal = () => {
      showCreateModal.value = false;
      showEditModal.value = false;
      showDeleteModal.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Employee" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Employees `);
          } else {
            return [
              createTextVNode(" Employees ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "employees.index",
              paginatedData: __props.employees,
              filters: __props.filters,
              tableHeads: tableHeads.value
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Apply filters(${ssrInterpolate(__props.employees.total)})</h4>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { onClick: createEmployeeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Employee`);
                      } else {
                        return [
                          createTextVNode("Create Employee")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h4", { class: "text-2xl" }, "Apply filters(" + toDisplayString(__props.employees.total) + ")", 1),
                      createVNode(_sfc_main$2, { onClick: createEmployeeModal }, {
                        default: withCtx(() => [
                          createTextVNode("Create Employee")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.employees.data, (employee, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.employees.current_page * __props.employees.per_page - (__props.employees.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.employees.current_page * __props.employees.per_page - (__props.employees.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, { class: "text-left flex items-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", employee.photo)} class="h-12 w-12 bg-white rounded-full border" alt="Inventory management system"${_scopeId3}><span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(employee.name)}</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: employee.photo,
                              class: "h-12 w-12 bg-white rounded-full border",
                              alt: "Inventory management system"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(employee.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(employee.designation)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(employee.designation), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(employee.email)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(employee.email), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(employee.phone)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(employee.phone), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(employee.salary)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(employee.salary), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(employee.joining_date)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(employee.joining_date), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editEmployeeModal(employee)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="fa fa-edit"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "fa fa-edit" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => deleteEmployeeModal(employee),
                            type: "red"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="fa fa-trash-alt"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "fa fa-trash-alt" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editEmployeeModal(employee)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteEmployeeModal(employee),
                              type: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-trash-alt" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.employees.data, (employee, index) => {
                      return openBlock(), createBlock("tr", {
                        key: employee.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.employees.current_page * __props.employees.per_page - (__props.employees.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, { class: "text-left flex items-center" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: employee.photo,
                              class: "h-12 w-12 bg-white rounded-full border",
                              alt: "Inventory management system"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(employee.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.designation), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.email), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.phone), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.salary), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(employee.joining_date), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editEmployeeModal(employee)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteEmployeeModal(employee),
                              type: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-trash-alt" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Create",
              show: showCreateModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: createEmployee
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Name",
                    name: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "Enter name",
                    errorMessage: unref(form).errors.name,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Email",
                    name: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    placeholder: "Enter email",
                    errorMessage: unref(form).errors.email,
                    onKeyupEnter: createEmployee,
                    type: "email"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Phone",
                    name: "phone",
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    placeholder: "Enter phone",
                    errorMessage: unref(form).errors.phone,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "NID",
                    name: "nid",
                    modelValue: unref(form).nid,
                    "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                    placeholder: "Enter nid",
                    errorMessage: unref(form).errors.nid,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Designation",
                    name: "designation",
                    modelValue: unref(form).designation,
                    "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                    placeholder: "Enter designation",
                    errorMessage: unref(form).errors.designation,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Salary",
                    name: "salary",
                    modelValue: unref(form).salary,
                    "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                    placeholder: "Enter salary",
                    errorMessage: unref(form).errors.salary,
                    onKeyupEnter: createEmployee,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Joining Date",
                    name: "joining_date",
                    modelValue: unref(form).joining_date,
                    "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                    placeholder: "Enter joining_date",
                    errorMessage: unref(form).errors.joining_date,
                    onKeyupEnter: createEmployee,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600"${_scopeId2}><svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId2}><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"${_scopeId2}></path></svg>`);
                  if (unref(form).photo) {
                    _push3(`<span class="mt-2 text-base leading-normal"${_scopeId2}>${ssrInterpolate(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2"))}</span>`);
                  } else {
                    _push3(`<span class="mt-2 text-base leading-normal"${_scopeId2}>Select a photo</span>`);
                  }
                  _push3(`<input type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/gif, image/svg"${_scopeId2}></label>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.photo
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="address" class="text-stone-600 text-sm font-medium"${_scopeId2}>Address</label><textarea id="address" type="text" rows="3" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).address)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          placeholder: "Enter name",
                          errorMessage: unref(form).errors.name,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Email",
                          name: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          placeholder: "Enter email",
                          errorMessage: unref(form).errors.email,
                          onKeyupEnter: createEmployee,
                          type: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Phone",
                          name: "phone",
                          modelValue: unref(form).phone,
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          placeholder: "Enter phone",
                          errorMessage: unref(form).errors.phone,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "NID",
                          name: "nid",
                          modelValue: unref(form).nid,
                          "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                          placeholder: "Enter nid",
                          errorMessage: unref(form).errors.nid,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ])
                    ]),
                    createVNode("div", { class: "my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Designation",
                          name: "designation",
                          modelValue: unref(form).designation,
                          "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                          placeholder: "Enter designation",
                          errorMessage: unref(form).errors.designation,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Salary",
                          name: "salary",
                          modelValue: unref(form).salary,
                          "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                          placeholder: "Enter salary",
                          errorMessage: unref(form).errors.salary,
                          onKeyupEnter: createEmployee,
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Joining Date",
                          name: "joining_date",
                          modelValue: unref(form).joining_date,
                          "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                          placeholder: "Enter joining_date",
                          errorMessage: unref(form).errors.joining_date,
                          onKeyupEnter: createEmployee,
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ])
                    ]),
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }, [
                            createVNode("path", { d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" })
                          ])),
                          unref(form).photo ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "mt-2 text-base leading-normal"
                          }, toDisplayString(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2")), 1)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "mt-2 text-base leading-normal"
                          }, "Select a photo")),
                          createVNode("input", {
                            onInput: ($event) => unref(form).photo = $event.target.files[0],
                            type: "file",
                            class: "hidden",
                            accept: "image/png, image/jpeg, image/jpg, image/gif, image/svg"
                          }, null, 40, ["onInput"])
                        ]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.photo
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "address",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Address"),
                        withDirectives(createVNode("textarea", {
                          id: "address",
                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                          type: "text",
                          rows: "3",
                          placeholder: "Enter address",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).address]
                        ]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Edit",
              show: showEditModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: updateEmployee
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Name",
                    name: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "Enter name",
                    errorMessage: unref(form).errors.name,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Email",
                    name: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    placeholder: "Enter email",
                    errorMessage: unref(form).errors.email,
                    onKeyupEnter: createEmployee,
                    type: "email"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Phone",
                    name: "phone",
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    placeholder: "Enter phone",
                    errorMessage: unref(form).errors.phone,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "NID",
                    name: "nid",
                    modelValue: unref(form).nid,
                    "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                    placeholder: "Enter nid",
                    errorMessage: unref(form).errors.nid,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Designation",
                    name: "designation",
                    modelValue: unref(form).designation,
                    "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                    placeholder: "Enter designation",
                    errorMessage: unref(form).errors.designation,
                    onKeyupEnter: createEmployee
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Salary",
                    name: "salary",
                    modelValue: unref(form).salary,
                    "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                    placeholder: "Enter salary",
                    errorMessage: unref(form).errors.salary,
                    onKeyupEnter: createEmployee,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: "Joining Date",
                    name: "joining_date",
                    modelValue: unref(form).joining_date,
                    "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                    placeholder: "Enter joining_date",
                    errorMessage: unref(form).errors.joining_date,
                    onKeyupEnter: createEmployee,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600"${_scopeId2}><svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId2}><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"${_scopeId2}></path></svg>`);
                  if (unref(form).photo) {
                    _push3(`<span class="mt-2 text-base leading-normal"${_scopeId2}>${ssrInterpolate(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2"))}</span>`);
                  } else {
                    _push3(`<span class="mt-2 text-base leading-normal"${_scopeId2}>Select a photo</span>`);
                  }
                  _push3(`<input type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/gif, image/svg"${_scopeId2}></label>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.photo
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="address" class="text-stone-600 text-sm font-medium"${_scopeId2}>Address</label><textarea id="address" type="text" rows="3" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).address)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          placeholder: "Enter name",
                          errorMessage: unref(form).errors.name,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Email",
                          name: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          placeholder: "Enter email",
                          errorMessage: unref(form).errors.email,
                          onKeyupEnter: createEmployee,
                          type: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Phone",
                          name: "phone",
                          modelValue: unref(form).phone,
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          placeholder: "Enter phone",
                          errorMessage: unref(form).errors.phone,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "NID",
                          name: "nid",
                          modelValue: unref(form).nid,
                          "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                          placeholder: "Enter nid",
                          errorMessage: unref(form).errors.nid,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ])
                    ]),
                    createVNode("div", { class: "my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Designation",
                          name: "designation",
                          modelValue: unref(form).designation,
                          "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                          placeholder: "Enter designation",
                          errorMessage: unref(form).errors.designation,
                          onKeyupEnter: createEmployee
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Salary",
                          name: "salary",
                          modelValue: unref(form).salary,
                          "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                          placeholder: "Enter salary",
                          errorMessage: unref(form).errors.salary,
                          onKeyupEnter: createEmployee,
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$4, {
                          label: "Joining Date",
                          name: "joining_date",
                          modelValue: unref(form).joining_date,
                          "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                          placeholder: "Enter joining_date",
                          errorMessage: unref(form).errors.joining_date,
                          onKeyupEnter: createEmployee,
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ])
                    ]),
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }, [
                            createVNode("path", { d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" })
                          ])),
                          unref(form).photo ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "mt-2 text-base leading-normal"
                          }, toDisplayString(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2")), 1)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "mt-2 text-base leading-normal"
                          }, "Select a photo")),
                          createVNode("input", {
                            onInput: ($event) => unref(form).photo = $event.target.files[0],
                            type: "file",
                            class: "hidden",
                            accept: "image/png, image/jpeg, image/jpg, image/gif, image/svg"
                          }, null, 40, ["onInput"])
                        ]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.photo
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "address",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Address"),
                        withDirectives(createVNode("textarea", {
                          id: "address",
                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                          type: "text",
                          rows: "3",
                          placeholder: "Enter address",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).address]
                        ]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Delete",
              show: showDeleteModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: deleteEmployee,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this employee? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this employee? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode(CardTable, {
                    indexRoute: "employees.index",
                    paginatedData: __props.employees,
                    filters: __props.filters,
                    tableHeads: tableHeads.value
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("h4", { class: "text-2xl" }, "Apply filters(" + toDisplayString(__props.employees.total) + ")", 1),
                        createVNode(_sfc_main$2, { onClick: createEmployeeModal }, {
                          default: withCtx(() => [
                            createTextVNode("Create Employee")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.employees.data, (employee, index) => {
                        return openBlock(), createBlock("tr", {
                          key: employee.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.employees.current_page * __props.employees.per_page - (__props.employees.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, { class: "text-left flex items-center" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: employee.photo,
                                class: "h-12 w-12 bg-white rounded-full border",
                                alt: "Inventory management system"
                              }, null, 8, ["src"]),
                              createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(employee.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.designation), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.email), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.phone), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.salary), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(employee.joining_date), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editEmployeeModal(employee)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteEmployeeModal(employee),
                                type: "red"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-trash-alt" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["paginatedData", "filters", "tableHeads"])
                ])
              ]),
              createVNode(_sfc_main$3, {
                title: "Create",
                show: showCreateModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: createEmployee
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Name",
                        name: "name",
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        placeholder: "Enter name",
                        errorMessage: unref(form).errors.name,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Email",
                        name: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        placeholder: "Enter email",
                        errorMessage: unref(form).errors.email,
                        onKeyupEnter: createEmployee,
                        type: "email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Phone",
                        name: "phone",
                        modelValue: unref(form).phone,
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        placeholder: "Enter phone",
                        errorMessage: unref(form).errors.phone,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "NID",
                        name: "nid",
                        modelValue: unref(form).nid,
                        "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                        placeholder: "Enter nid",
                        errorMessage: unref(form).errors.nid,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ])
                  ]),
                  createVNode("div", { class: "my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Designation",
                        name: "designation",
                        modelValue: unref(form).designation,
                        "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                        placeholder: "Enter designation",
                        errorMessage: unref(form).errors.designation,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Salary",
                        name: "salary",
                        modelValue: unref(form).salary,
                        "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                        placeholder: "Enter salary",
                        errorMessage: unref(form).errors.salary,
                        onKeyupEnter: createEmployee,
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Joining Date",
                        name: "joining_date",
                        modelValue: unref(form).joining_date,
                        "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                        placeholder: "Enter joining_date",
                        errorMessage: unref(form).errors.joining_date,
                        onKeyupEnter: createEmployee,
                        type: "date"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ])
                  ]),
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { class: "w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-8 h-8",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", { d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" })
                        ])),
                        unref(form).photo ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "mt-2 text-base leading-normal"
                        }, toDisplayString(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2")), 1)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "mt-2 text-base leading-normal"
                        }, "Select a photo")),
                        createVNode("input", {
                          onInput: ($event) => unref(form).photo = $event.target.files[0],
                          type: "file",
                          class: "hidden",
                          accept: "image/png, image/jpeg, image/jpg, image/gif, image/svg"
                        }, null, 40, ["onInput"])
                      ]),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.photo
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "address",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Address"),
                      withDirectives(createVNode("textarea", {
                        id: "address",
                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter address",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).address]
                      ]),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.address
                      }, null, 8, ["message"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Edit",
                show: showEditModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: updateEmployee
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Name",
                        name: "name",
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        placeholder: "Enter name",
                        errorMessage: unref(form).errors.name,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Email",
                        name: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        placeholder: "Enter email",
                        errorMessage: unref(form).errors.email,
                        onKeyupEnter: createEmployee,
                        type: "email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Phone",
                        name: "phone",
                        modelValue: unref(form).phone,
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        placeholder: "Enter phone",
                        errorMessage: unref(form).errors.phone,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "NID",
                        name: "nid",
                        modelValue: unref(form).nid,
                        "onUpdate:modelValue": ($event) => unref(form).nid = $event,
                        placeholder: "Enter nid",
                        errorMessage: unref(form).errors.nid,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ])
                  ]),
                  createVNode("div", { class: "my-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Designation",
                        name: "designation",
                        modelValue: unref(form).designation,
                        "onUpdate:modelValue": ($event) => unref(form).designation = $event,
                        placeholder: "Enter designation",
                        errorMessage: unref(form).errors.designation,
                        onKeyupEnter: createEmployee
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Salary",
                        name: "salary",
                        modelValue: unref(form).salary,
                        "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                        placeholder: "Enter salary",
                        errorMessage: unref(form).errors.salary,
                        onKeyupEnter: createEmployee,
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode(_sfc_main$4, {
                        label: "Joining Date",
                        name: "joining_date",
                        modelValue: unref(form).joining_date,
                        "onUpdate:modelValue": ($event) => unref(form).joining_date = $event,
                        placeholder: "Enter joining_date",
                        errorMessage: unref(form).errors.joining_date,
                        onKeyupEnter: createEmployee,
                        type: "date"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ])
                  ]),
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { class: "w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-emerald-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-8 h-8",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", { d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" })
                        ])),
                        unref(form).photo ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "mt-2 text-base leading-normal"
                        }, toDisplayString(unref(form).photo.name.replace(/(^.{17}).*(\..+$)/, "$1...$2")), 1)) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "mt-2 text-base leading-normal"
                        }, "Select a photo")),
                        createVNode("input", {
                          onInput: ($event) => unref(form).photo = $event.target.files[0],
                          type: "file",
                          class: "hidden",
                          accept: "image/png, image/jpeg, image/jpg, image/gif, image/svg"
                        }, null, 40, ["onInput"])
                      ]),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.photo
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "address",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Address"),
                      withDirectives(createVNode("textarea", {
                        id: "address",
                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter address",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).address]
                      ]),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.address
                      }, null, 8, ["message"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Delete",
                show: showDeleteModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: deleteEmployee,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this employee? ")
                ]),
                _: 1
              }, 8, ["show", "formProcessing"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employee/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
