OpenSeadragon = require('openseadragon');

var viewer = OpenSeadragon({
    id: "openseadragon",
    prefixUrl: "/images/",
    preserveViewport: true,
    visibilityRatio: 1,
    minZoomLevel: 1,
    defaultZoomLevel: 1,
    autoHideControls: false,
    tileSources: ["moon/info.json"],
    debugMode: true
});
