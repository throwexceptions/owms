(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Agency.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Agency.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      props_data: JSON.parse(this._props.data),
      content: "",
      color: {
        hue: 50,
        saturation: 100,
        luminosity: 50,
        alpha: 1
      },
      ts_no: '',
      tab: 1,
      level_mdl: false,
      agency_mdl: false,
      agency_update_mdl: false,
      alert_detail_mdl: false,
      req_mdl: false,
      show_check_mdl: false,
      dt: null,
      contract: '',
      alert_list: [],
      alert_form: {
        color_level: '#ff6161',
        description: '',
        name: ''
      },
      overview: {
        name: null,
        address: null,
        logo: '',
        poea: null,
        cr_no: null,
        level: ''
      }
    };
  },
  watch: {
    'contract': function contract() {
      this.getContract();
    }
  },
  methods: {
    checkContractStatus: function checkContractStatus() {
      axios.post(this.props_data.contract_check_link, {
        ts_no: this.ts_no
      }).then(function (value) {
        if (value.data.message === "success") {
          var msg = '<table style="width: 100%;">\n' + '    <tbody>\n' + '        <tr>\n' + '            <td style="width: 30.0000%;">\n' + '                <div style="text-align: right;">Contract Type:</div>\n' + '            </td>\n' + '            <td style="width: 50.0000%;">' + value.data.details.name + '</td>\n' + '        </tr>\n' + '        <tr>\n' + '            <td style="width: 30.0000%;">\n' + '                <div style="text-align: right;">Agency:</div>\n' + '            </td>\n' + '            <td style="width: 50.0000%;">' + value.data.details.agency.name + '</td>\n' + '        </tr>\n' + '        <tr>\n' + '            <td style="width: 30.0000%;">\n' + '                <div style="text-align: right;">Verified By:</div>\n' + '            </td>\n' + '            <td style="width: 50.0000%;">' + value.data.details.approved_by + '</td>\n' + '        </tr>\n' + '        <tr>\n' + '            <td style="width: 30.0000%;">\n' + '                <div style="text-align: right;">Date Issued:</div>\n' + '            </td>\n' + '            <td style="width: 50.0000%;">' + value.data.details.updated_at + '</td>\n' + '        </tr>\n' + '    </tbody>\n' + '</table>';

          if (value.data.details.status === 'Approved') {
            Swal.fire({
              icon: 'success',
              title: value.data.details.status,
              html: msg
            });
          } else {
            Swal.fire({
              icon: 'info',
              title: value.data.details.status,
              html: msg
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: value.data.message,
            html: 'Not a valid Serial No.'
          });
        }
      });
    },
    storeRequisite: function storeRequisite() {
      var $this = this;
      axios.post(this.props_data.requisition_store_link, {
        contract: this.contract,
        content: this.content
      }).then(function () {
        $this.getContract();
        Swal.fire({
          icon: 'success',
          title: 'Terms and Condition has been updated!',
          html: 'Update success!'
        });
      });
    },
    getContract: function getContract() {
      var $this = this;
      axios.post(this.props_data.requisition_get_link, {
        contract: this.contract,
        content: this.content
      }).then(function (value) {
        $this.content = value.data;
      });
    },
    showEdit: function showEdit(item) {
      this.tab = 2;
      this.alert_form.id = item.id;
      this.alert_form.color_level = item.color_level;
      this.alert_form.description = item.description;
      this.alert_form.name = item.name;
    },
    showDeleteMdl: function showDeleteMdl(id) {
      var $this = this;
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          axios.post($this.props_data.delete_alerts, {
            id: id
          }).then(function () {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success"
            });
            $this.getAlertList();
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    },
    getAlertList: function getAlertList() {
      var $this = this;
      axios.post(this.props_data.get_alerts, this.alert_form).then(function (value) {
        $this.alert_list = value.data;
      });
    },
    saveNewAlert: function saveNewAlert() {
      var $this = this;
      axios.post(this.props_data.store_new_alert, this.alert_form).then(function () {
        $this.dt.draw();
        $this.getAlertList();
        swal('Success!', 'New Alert has been Added!', 'success');
        $this.alert_form = {
          color_level: '#ff6161',
          description: '',
          name: ''
        };
      });
    },
    onColorSelect: function onColorSelect(hue) {
      console.log(hue);
    },
    showLevelMdl: function showLevelMdl() {
      this.level_mdl = true;
    },
    showMdl: function showMdl() {
      this.overview = {
        name: null,
        address: null,
        logo: '',
        poea: null,
        level: ''
      };
      this.agency_mdl = true;
    },
    showReqMdl: function showReqMdl() {
      this.req_mdl = true;
    },
    showCheckMdl: function showCheckMdl() {
      this.show_check_mdl = true;
      this.ts_no = '';
    },
    deletion: function deletion() {
      var $this = this;
      axios["delete"](this.overview.delete_link).then(function () {
        $this.dt.draw();
        $this.agency_update_mdl = false;
      });
    },
    update: function update() {
      var $this = this;
      var formData = new FormData();
      formData.append('id', this.overview.id);
      formData.append('_method', 'PATCH');
      formData.append('logo', $this.overview.logo);
      formData.append('logo_path', $this.overview.logo_path);
      formData.append('name', $this.overview.name);
      formData.append('address', $this.overview.address);
      formData.append('poea', $this.overview.poea);
      formData.append('status', $this.overview.status);
      formData.append('level', $this.overview.level);
      formData.append('cr_no', this.overview.cr_no);
      axios.post($this.overview.update_link, formData).then(function () {
        $this.dt.draw();
        $this.agency_update_mdl = false;
      });
    },
    fileUpload: function fileUpload(e) {
      console.log(e.target.files);
      this.overview.logo = e.target.files[0];
    },
    add: function add() {
      var $this = this;
      var formData = new FormData();
      formData.append('logo', this.overview.logo);
      formData.append('name', this.overview.name);
      formData.append('address', this.overview.address);
      formData.append('poea', this.overview.poea);
      formData.append('cr_no', this.overview.cr_no);
      formData.append('status', $this.overview.status);
      axios.post(this.props_data.store_link, formData).then(function () {
        $this.dt.draw();
        $this.agency_mdl = false;
      });
    }
  },
  mounted: function mounted() {
    var $this = this;
    $this.getAlertList();
    $this.dt = $("#agencies-table").DataTable({
      responsive: true,
      serverSide: true,
      scrollX: true,
      order: [[0, "desc"]],
      ajax: {
        url: $this.props_data.datatable_link,
        type: "POST"
      },
      columns: [{
        data: 'id',
        name: "id",
        title: "Agency ID"
      }, {
        data: function data(value) {
          return '<a class="agency-show text-indigo-500 hover:text-indigo-400 hover:underline font-bold">' + value.name + '</a>';
        },
        name: "name",
        title: "Agency Name"
      }, {
        data: "poea",
        name: "poea",
        title: "POEA No."
      }, {
        data: "cr_no",
        name: "cr_no",
        title: "CR No."
      }, {
        data: function data(value) {
          return '<a href="' + value.contracts_link + '" ' + 'class="text-indigo-500 hover:text-indigo-400 hover:underline font-bold">' + value.contracts_pending_count + '/' + value.contracts_count + '</a>';
        },
        name: "id",
        title: "contracts",
        "searchable": false
      }, {
        data: function data(value) {
          if (value.alert) {
            return '<label class="show-details font-bold animate-bounce relative" ' + 'style="color: ' + value.alert.color_level + '">' + '<span class="animate-ping absolute inline-flex ml-0 mt-1 h-4 w-4 rounded-full opacity-75" ' + 'style="background-color: ' + value.alert.color_level + '"></span>\n' + '<span class="relative inline-flex rounded-full h-3 w-3" ' + 'style="background-color: ' + value.alert.color_level + '"></span>\n' + value.alert.name + '</label>';
          }

          return 'No Alert';
        },
        name: "id",
        title: "Alert Status"
      }, {
        data: function data(value) {
          if (value.status === 'active') {
            return '<span class="bg-green-300 shadow-sm p-1 rounded text-white block text-center">Active</span>';
          }

          return '<span class="bg-red-500 shadow-sm p-1 rounded text-white block text-center">BLOCKED</span>';
        },
        name: "status",
        title: "Active Status"
      }, {
        data: "update_at_display",
        name: "updated_at",
        title: "Last Updated"
      }],
      drawCallback: function drawCallback() {
        $(".agency-show").click(function (e) {
          var data = $(this).parent();
          var hold = $this.dt.row(data).data();
          console.log(hold);
          $this.overview = hold;
          $this.agency_update_mdl = true;
        });
        $(".show-details").click(function (e) {
          var data = $(this).parent();
          var hold = $this.dt.row(data).data();
          console.log(hold);
          $this.overview = hold;
          $this.alert_detail_mdl = true;
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Agency.vue?vue&type=template&id=9f15977e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Agency.vue?vue&type=template&id=9f15977e& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pb-12 pt-8" },
    [
      _c("div", { staticClass: "w-full mx-auto sm:px-6 lg:px-8" }, [
        _c(
          "div",
          { staticClass: "bg-white overflow-auto shadow-sm sm:rounded-lg" },
          [
            _c("div", { staticClass: "p-2 mt-5" }, [
              _c(
                "a",
                {
                  staticClass:
                    "text-white bg-green-400 hover:bg-green-500 p-2 rounded m-2 shadow",
                  attrs: { href: "#" },
                  on: { click: _vm.showMdl }
                },
                [
                  _c("i", { staticClass: "fas fa-building" }),
                  _vm._v(
                    " " + _vm._s(_vm.__("New Agency")) + "\n\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "text-white bg-indigo-500 hover:bg-indigo-600 p-2 rounded m-2 shadow",
                  attrs: { href: "#" },
                  on: { click: _vm.showLevelMdl }
                },
                [
                  _c("i", { staticClass: "fas fa-exclamation-triangle" }),
                  _vm._v(
                    " " + _vm._s(_vm.__("Alert Levels")) + "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "text-white bg-yellow-500 hover:bg-yellow-600 p-2 rounded m-2 shadow",
                  attrs: { href: "#" },
                  on: { click: _vm.showReqMdl }
                },
                [
                  _c("i", { staticClass: "fas fa-award" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.__("Terms & Conditions")) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "text-white bg-pink-500 hover:bg-pink-600 p-2 rounded m-2 shadow",
                  attrs: { href: "#" },
                  on: { click: _vm.showCheckMdl }
                },
                [
                  _c("i", { staticClass: "fas fa-check-double" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.__("Contract Checker")) +
                      "\n                "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.agency_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "hidden sm:inline-block sm:align-middle sm:h-screen",
                      attrs: { "aria-hidden": "true" }
                    },
                    [_vm._v("​")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "inline-block align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [_c("i", { staticClass: "fas fa-building" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900",
                                    attrs: { id: "modal-headline" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    New Agency\n                                    "
                                    ),
                                    _c("span", { staticClass: "underline" }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "hidden",
                                      attrs: { name: "id" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-6" }, [
                                  _c("div", { staticClass: "flex flex-col" }, [
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Name")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.overview.name,
                                            expression: "overview.name"
                                          }
                                        ],
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.overview.name },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.overview,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Address")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.overview.address,
                                            expression: "overview.address"
                                          }
                                        ],
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: _vm.overview.address
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.overview,
                                              "address",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex flex-row" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "mt-2 mr-2" },
                                          [
                                            _c("label", [_vm._v("POEA No.")]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.overview.poea,
                                                  expression: "overview.poea"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.overview.poea
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.overview,
                                                    "poea",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "mt-2 ml-1" },
                                          [
                                            _c("label", [_vm._v("CR No.")]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.overview.cr_no,
                                                  expression: "overview.cr_no"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.overview.cr_no
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.overview,
                                                    "cr_no",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Status")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.overview.status,
                                              expression: "overview.status"
                                            }
                                          ],
                                          staticClass:
                                            "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.overview,
                                                "status",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "active" } },
                                            [_vm._v("Active")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "not active" } },
                                            [_vm._v("Not Active")]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Logo")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "file" },
                                        on: { change: _vm.fileUpload }
                                      })
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  return _vm.add()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Add\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.agency_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.agency_update_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "sm:w-1/2 w-full inline-block align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [_c("i", { staticClass: "fas fa-building" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Update Agency\n                                    "
                                    ),
                                    _c("span", { staticClass: "underline" }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "hidden",
                                      attrs: { name: "id" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-6" }, [
                                  _c("div", { staticClass: "flex flex-col" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mt-2 flex flex-col" },
                                      [
                                        _c("label", [_vm._v("Co-Host")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.overview.co_host, function(
                                          item,
                                          idx
                                        ) {
                                          return _c(
                                            "label",
                                            { staticClass: "font-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(idx + 1) +
                                                  ". " +
                                                  _vm._s(item.name) +
                                                  " / " +
                                                  _vm._s(item.email)
                                              )
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _vm.overview.co_host.length === 0
                                          ? _c(
                                              "label",
                                              { staticClass: "font-bold" },
                                              [
                                                _vm._v(
                                                  "No Co-Host\n                                                Available"
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Name")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.overview.name,
                                            expression: "overview.name"
                                          }
                                        ],
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.overview.name },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.overview,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Address")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.overview.address,
                                            expression: "overview.address"
                                          }
                                        ],
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: _vm.overview.address
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.overview,
                                              "address",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex flex-row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-2 mr-2 flex-grow"
                                          },
                                          [
                                            _c("label", [_vm._v("POEA No.")]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.overview.poea,
                                                  expression: "overview.poea"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.overview.poea
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.overview,
                                                    "poea",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-2 mr-1 flex-grow"
                                          },
                                          [
                                            _c("label", [_vm._v("CR No.")]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.overview.cr_no,
                                                  expression: "overview.cr_no"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.overview.cr_no
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.overview,
                                                    "cr_no",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Status")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.overview.status,
                                              expression: "overview.status"
                                            }
                                          ],
                                          staticClass:
                                            "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.overview,
                                                "status",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "active" } },
                                            [_vm._v("Active")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "blocked" } },
                                            [_vm._v("Blocked")]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Alert Levels")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.overview.level,
                                              expression: "overview.level"
                                            }
                                          ],
                                          staticClass:
                                            "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.overview,
                                                "level",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("-- No Alert --")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.alert_list, function(
                                            item
                                          ) {
                                            return _c(
                                              "option",
                                              { domProps: { value: item.id } },
                                              [
                                                _vm._v(
                                                  _vm._s(item.name) +
                                                    "\n                                                "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("img", {
                                        staticClass: "h-36",
                                        attrs: { src: _vm.overview.logo_path }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("label", [_vm._v("Logo")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass:
                                          "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                        attrs: { type: "file" },
                                        on: { change: _vm.fileUpload }
                                      })
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "submit" },
                              on: { click: _vm.update }
                            },
                            [
                              _vm._v(
                                "\n                            Update\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "submit" },
                              on: { click: _vm.deletion }
                            },
                            [
                              _vm._v(
                                "\n                            Delete\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.agency_update_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.level_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "hidden sm:inline-block sm:align-middle sm:h-screen",
                      attrs: { "aria-hidden": "true" }
                    },
                    [_vm._v("​")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "inline-block align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-exclamation-triangle"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Alert Levels\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c("div", { staticClass: "bg-white" }, [
                                    _c(
                                      "nav",
                                      {
                                        staticClass: "flex flex-col sm:flex-row"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",
                                            class: {
                                              "text-blue-500 border-b-2 font-medium border-blue-500":
                                                _vm.tab === 1
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.tab = 1
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                Levels\n                                            "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",
                                            class: {
                                              "text-blue-500 border-b-2 font-medium border-blue-500":
                                                _vm.tab === 2
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.tab = 2
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                Add Level\n                                            "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.tab === 1
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col mt-2 overflow-scroll h-75"
                                        },
                                        _vm._l(_vm.alert_list, function(item) {
                                          return _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col border p-2 mb-2"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "font-bold text-2xl",
                                                  style:
                                                    "color:" + item.color_level
                                                },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "p-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-sm",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.showDeleteMdl(
                                                            item.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-trash"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "p-2 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.showEdit(
                                                            item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-edit"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(item.name) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("p", { staticClass: "m-2" }, [
                                                _vm._v(_vm._s(item.description))
                                              ])
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.tab === 2
                                    ? _c(
                                        "div",
                                        { staticClass: "flex flex-col" },
                                        [
                                          _c("div", { staticClass: "mt-2" }, [
                                            _c("label", [_vm._v("Color")]),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "flex flex-row" },
                                              [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.alert_form
                                                            .color_level,
                                                        expression:
                                                          "alert_form.color_level"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          _vm.alert_form,
                                                          "color_level",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "blue" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Level 1 - Warning"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "black"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Level 2 - 15 days suspension"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "red" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Level 3 - Black List"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "green"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Lifted Suspension"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-circle my-auto ml-2",
                                                  style:
                                                    "color:" +
                                                    _vm.alert_form.color_level
                                                })
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "mt-2" }, [
                                            _c("label", [_vm._v("Name")]),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.alert_form.name,
                                                  expression: "alert_form.name"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.alert_form.name
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.alert_form,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "mt-2" }, [
                                            _c("label", [
                                              _vm._v("Description")
                                            ]),
                                            _vm._v(" "),
                                            _c("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.alert_form.description,
                                                  expression:
                                                    "alert_form.description"
                                                }
                                              ],
                                              staticClass:
                                                "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value:
                                                  _vm.alert_form.description
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.alert_form,
                                                    "description",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "mt-4" }, [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                                                attrs: { type: "submit" },
                                                on: { click: _vm.saveNewAlert }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                Save New Alert\n                                            "
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.level_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.alert_detail_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "hidden sm:inline-block sm:align-middle sm:h-screen",
                      attrs: { "aria-hidden": "true" }
                    },
                    [_vm._v("​")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "inline-block align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-exclamation-triangle"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Alert Description\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c("div", { staticClass: "flex flex-col" }, [
                                    _c(
                                      "div",
                                      { staticClass: "font-bold mb-2" },
                                      [_vm._v(_vm._s(_vm.overview.alert.name))]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        _vm._s(_vm.overview.alert.description)
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.alert_detail_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.req_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "hidden sm:inline-block sm:align-middle sm:h-screen",
                      attrs: { "aria-hidden": "true" }
                    },
                    [_vm._v("​")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "inline-block align-middle bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all w-full sm:w-9/12",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [_c("i", { staticClass: "fas fa-award" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Requisition\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c("div", { staticClass: "flex flex-col" }, [
                                    _c("div", [
                                      _c("label", [_vm._v("Contracts")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.contract,
                                              expression: "contract"
                                            }
                                          ],
                                          staticClass:
                                            "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.contract = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            }
                                          }
                                        },
                                        _vm._l(
                                          _vm.props_data.contract_list,
                                          function(item) {
                                            return _c(
                                              "option",
                                              { domProps: { value: item } },
                                              [
                                                _vm._v(
                                                  _vm._s(item) +
                                                    "\n                                                "
                                                )
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.contract != "",
                                            expression: "contract!=''"
                                          }
                                        ],
                                        staticClass: "mt-3"
                                      },
                                      [
                                        _c("vue-editor", {
                                          model: {
                                            value: _vm.content,
                                            callback: function($$v) {
                                              _vm.content = $$v
                                            },
                                            expression: "content"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _vm.contract != ""
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.storeRequisite()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Save & Confirm\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.req_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.show_check_mdl
          ? _c("div", { staticClass: "fixed inset-0 overflow-auto" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0  overflow-auto"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "fixed inset-0 transition-opacity",
                      attrs: { "aria-hidden": "true" }
                    },
                    [
                      _c("div", {
                        staticClass: "absolute inset-0 bg-gray-500 opacity-75"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "hidden sm:inline-block sm:align-middle sm:h-screen",
                      attrs: { "aria-hidden": "true" }
                    },
                    [_vm._v("​")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "inline-block align-middle bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all w-full sm:w-1/2",
                      attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        },
                        [
                          _c("div", { staticClass: "sm:flex sm:items-start" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-600"
                              },
                              [_c("i", { staticClass: "fas fa-check-double" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                              },
                              [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Contract Checker\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4" }, [
                                  _c("div", { staticClass: "flex flex-row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "flex flex-grow" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.ts_no,
                                              expression: "ts_no"
                                            }
                                          ],
                                          staticClass:
                                            "w-full border-0 bg-gray-100 rounded text-black outline-none focus:ring-opacity-0",
                                          attrs: { type: "text" },
                                          domProps: { value: _vm.ts_no },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.ts_no = $event.target.value
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",
                                          attrs: { type: "submit" },
                                          on: { click: _vm.checkContractStatus }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Check Status\n                                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.show_check_mdl = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-5" }, [
      _c("table", {
        staticClass: "stripe hover",
        staticStyle: { width: "100%" },
        attrs: { id: "agencies-table" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/Agency.vue":
/*!**************************************!*\
  !*** ./resources/js/view/Agency.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agency.vue?vue&type=template&id=9f15977e& */ "./resources/js/view/Agency.vue?vue&type=template&id=9f15977e&");
/* harmony import */ var _Agency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Agency.vue?vue&type=script&lang=js& */ "./resources/js/view/Agency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Agency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Agency.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Agency.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/view/Agency.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Agency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Agency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Agency.vue?vue&type=template&id=9f15977e&":
/*!*********************************************************************!*\
  !*** ./resources/js/view/Agency.vue?vue&type=template&id=9f15977e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Agency.vue?vue&type=template&id=9f15977e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Agency.vue?vue&type=template&id=9f15977e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Agency_vue_vue_type_template_id_9f15977e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);