/* -------------------------------------------------------------------------- */
/* Copyright 2002-2019, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

require.config({
  paths: {
    /* Config */
    "sunstone-config": "sunstone-config",

    /* Almond */
    "almond": "../node_modules/almond/almond",

    /* jQuery */
    "jquery": "../node_modules/jquery/dist/jquery",
    "jquery-ui": "../node_modules/jquery-ui/jquery-ui",

    /** Wickedpicker */
    "wickedpicker": "../node_modules/wickedpicker/dist/wickedpicker.min",

    /* DataTables */
    "datatables.net": "../node_modules/datatables/media/js/jquery.dataTables",
    "datatables.foundation": "../node_modules/datatables/media/js/jquery.dataTables",

    /* DataTables */
    "jgrowl": "../node_modules/jgrowl/jquery.jgrowl",

    /* Foundation */
    "foundation": "../node_modules/foundation-sites/dist/foundation",
    //'foundation.core': '../node_modules/foundation/js/foundation/foundation',
    //'foundation.abide': '../node_modules/foundation/js/foundation/foundation.abide',
    //'foundation.accordion': '../node_modules/foundation/js/foundation/foundation.accordion',
    //'foundation.alert': '../node_modules/foundation/js/foundation/foundation.alert',
    //'foundation.clearing': '../node_modules/foundation/js/foundation/foundation.clearing',
    //'foundation.dropdown': '../node_modules/foundation/js/foundation/foundation.dropdown',
    //'foundation.equalizer': '../node_modules/foundation/js/foundation/foundation.equalizer',
    //'foundation.interchange': '../node_modules/foundation/js/foundation/foundation.interchange',
    //'foundation.joyride': '../node_modules/foundation/js/foundation/foundation.joyride',
    //'foundation.magellan': '../node_modules/foundation/js/foundation/foundation.magellan',
    //'foundation.offcanvas': '../node_modules/foundation/js/foundation/foundation.offcanvas',
    //'foundation.orbit': '../node_modules/foundation/js/foundation/foundation.orbit',
    //'foundation.reveal': '../node_modules/foundation/js/foundation/foundation.reveal',
    //'foundation.slider': '../node_modules/foundation/js/foundation/foundation.slider',
    //'foundation.tab': '../node_modules/foundation/js/foundation/foundation.tab',
    //'foundation.tooltip': '../node_modules/foundation/js/foundation/foundation.tooltip',
    //'foundation.topbar': '../node_modules/foundation/js/foundation/foundation.topbar',

    /* Handlebars */
    "hbs": "../node_modules/require-handlebars-plugin/hbs",

    /* Resumable */
    "resumable": "../node_modules/resumablejs/resumable",

    /* Flot Graphs */
    "flot": "../node_modules/flot/src/jquery.flot",
    "flot.stack": "../node_modules/flot/src/plugins/jquery.flot.stack",
    "flot.navigate": "../node_modules/flot/src/plugins/jquery.flot.navigate",
    "flot.canvas": "../node_modules/flot/src/plugins/jquery.flot.canvas",
    "flot.resize": "../node_modules/flot/src/plugins/jquery.flot.resize",
    "flot.time": "../node_modules/flot/src/plugins/jquery.flot.time",
    "flot.tooltip": "../node_modules/flot.tooltip/js/jquery.flot.tooltip",

    /* VNC */
    "vnc-rfb": "../node_modules/no-vnc/lib/rfb",

    /* Spice */
    "spice-main": "../node_modules/spice-html5/main",
    "spice-spicearraybuffer": "../node_modules/spice-html5/spicearraybuffer",
    "spice-enums": "../node_modules/spice-html5/enums",
    "spice-atKeynames": "../node_modules/spice-html5/atKeynames",
    "spice-utils": "../node_modules/spice-html5/utils",
    "spice-png": "../node_modules/spice-html5/png",
    "spice-lz": "../node_modules/spice-html5/lz",
    "spice-quic": "../node_modules/spice-html5/quic",
    "spice-bitmap": "../node_modules/spice-html5/bitmap",
    "spice-spicedataview": "../node_modules/spice-html5/spicedataview",
    "spice-spicetype": "../node_modules/spice-html5/spicetype",
    "spice-spicemsg": "../node_modules/spice-html5/spicemsg",
    "spice-wire": "../node_modules/spice-html5/wire",
    "spice-spiceconn": "../node_modules/spice-html5/spiceconn",
    "spice-display": "../node_modules/spice-html5/display",
    "spice-inputs": "../node_modules/spice-html5/inputs",
    "spice-webm": "../node_modules/spice-html5/webm",
    "spice-playback": "../node_modules/spice-html5/playback",
    "spice-simulatecursor": "../node_modules/spice-html5/simulatecursor",
    "spice-cursor": "../node_modules/spice-html5/cursor",
    "spice-jsbn": "../node_modules/spice-html5/thirdparty/jsbn",
    "spice-rsa": "../node_modules/spice-html5/thirdparty/rsa",
    "spice-prng4": "../node_modules/spice-html5/thirdparty/prng4",
    "spice-rng": "../node_modules/spice-html5/thirdparty/rng",
    "spice-sha1": "../node_modules/spice-html5/thirdparty/sha1",
    "spice-ticket": "../node_modules/spice-html5/ticket",
    "spice-resize": "../node_modules/spice-html5/resize",
    "spice-filexfer": "../node_modules/spice-html5/filexfer",

    /* vis.js */
    "vis": "../node_modules/vis/dist/vis.min",

    /* navigo */
    "Navigo": "../node_modules/navigo/lib/navigo.min",

    /* sprintf */
    "sprintf": "../node_modules/sprintf/dist/sprintf.min"
  },
  shim: {
    /* Tabs */
    "app": {
      deps: [
        "foundation",
        "jquery",
        "tabs/provision-tab",
        "tabs/dashboard-tab",
        "tabs/system-top-tab",
        "tabs/users-tab",
        "tabs/groups-tab",
        "tabs/vdcs-tab",
        "tabs/acls-tab",
        "tabs/templates-top-tab",
        "tabs/templates-tab",
        "tabs/oneflow-templates-tab",
        "tabs/vrouter-templates-tab",
        "tabs/instances-top-tab",
        "tabs/vms-tab",
        "tabs/oneflow-services-tab",
        "tabs/vrouters-tab",
        "tabs/infrastructure-top-tab",
        "tabs/clusters-tab",
        "tabs/hosts-tab",
        "tabs/zones-tab",
        "tabs/storage-top-tab",
        "tabs/datastores-tab",
        "tabs/images-tab",
        "tabs/files-tab",
        "tabs/marketplaces-tab",
        "tabs/marketplaceapps-tab",
        "tabs/network-top-tab",
        "tabs/vnets-tab",
        "tabs/vnets-templates-tab",
        "tabs/vnets-topology-tab",
        "tabs/secgroups-tab",
        "tabs/settings-tab",
        "tabs/support-tab",
        "tabs/official-support-tab",
        "tabs/upgrade-top-tab",
        "tabs/vmgroup-tab",
        "addons/start",
        "addons/end"
      ]
    },

    /* jQuery */
    "jquery": {
      exports: "$"
    },

    /* jGrowl */
    "jgrowl": {
      deps: ["jquery"]
    },

    /* Foundation */
    "foundation": {
        deps: ["jquery"]
    },
    //'foundation.core': {
    //  deps: ['jquery', 'modernizr'],
    //  exports: 'Foundation'
    //},
    //'foundation.abide': {
    //  deps: ['foundation.core']
    //},
    //'foundation.accordion': {
    //  deps: ['foundation.core']
    //},
    //'foundation.alert': {
    //  deps: ['foundation.core']
    //},
    //'foundation.clearing': {
    //  deps: ['foundation.core']
    //},
    //'foundation.dropdown': {
    //  deps: ['foundation.core']
    //},
    //'foundation.equalizer': {
    //  deps: ['foundation.core']
    //},
    //'foundation.interchange': {
    //  deps: ['foundation.core']
    //},
    //'foundation.joyride': {
    //  deps: ['foundation.core', 'jquery.cookie']
    //},
    //'foundation.magellan': {
    //  deps: ['foundation.core']
    //},
    //'foundation.offcanvas': {
    //  deps: ['foundation.core']
    //},
    //'foundation.orbit': {
    //  deps: ['foundation.core']
    //},
    //'foundation.reveal': {
    //  deps: ['foundation.core']
    //},
    //'foundation.slider': {
    //  deps: ['foundation.core']
    //},
    //'foundation.tab': {
    //  deps: ['foundation.core']
    //},
    //'foundation.tooltip': {
    //  deps: ['foundation.core']
    //},
    //'foundation.topbar': {
    //  deps: ['foundation.core']
    //},

    /* Vendor Scripts */
    //'jquery.cookie': {
    //  deps: ['jquery']
    //},
    //'fastclick': {
    //  exports: 'FastClick'
    //},
    //'modernizr': {
    //  exports: 'Modernizr'
    //},
    //'placeholder': {
    //  exports: 'Placeholders'
    //},

    /* Flot Graphs */
    "flot": {
      deps: ["jquery"]
    },
    "flot.stack": {
      deps: ["flot"]
    },
    "flot.resize": {
      deps: ["flot"]
    },
    "flot.time": {
      deps: ["flot"]
    },
    "flot.tooltip": {
      deps: ["flot"]
    },
    "vnc-rfb": {
      deps: ["sunstone-config"]
    },
    "spice-main": {
      exports: "SpiceMainConn",
      deps: [
        "spice-spiceconn",
        "spice-spicearraybuffer",
        "spice-enums",
        "spice-atKeynames",
        "spice-utils",
        "spice-png",
        "spice-lz",
        "spice-quic",
        "spice-bitmap",
        "spice-spicedataview",
        "spice-spicetype",
        "spice-spicemsg",
        "spice-wire",
        "spice-display",
        "spice-inputs",
        "spice-webm",
        "spice-playback",
        "spice-simulatecursor",
        "spice-cursor",
        "spice-jsbn",
        "spice-rsa",
        "spice-prng4",
        "spice-rng",
        "spice-sha1",
        "spice-ticket",
        "spice-resize",
        "spice-filexfer"
      ]
    },

    "spice-rng": {
      deps: [
        "spice-prng4"
      ]
    },

    "spice-display": {
      deps: [
        "spice-spiceconn"
      ]
    },

    "spice-inputs": {
      deps: [
        "spice-spiceconn"
      ]
    },

    "spice-playback": {
      deps: [
        "spice-spiceconn"
      ]
    },

    "spice-cursor": {
      deps: [
        "spice-spiceconn"
      ]
    }
  }
});

require(["app"], function(App) {});
