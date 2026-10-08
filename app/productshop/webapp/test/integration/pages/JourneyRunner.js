sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/productshop/test/integration/pages/productList.gen",
	"ns/productshop/test/integration/pages/productObjectPage.gen"
], function (JourneyRunner, productListGenerated, productObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/productshop') + '/test/flp.html#app-preview',
        pages: {
			onTheproductListGenerated: productListGenerated,
			onTheproductObjectPageGenerated: productObjectPageGenerated
        },
        async: true
    });

    return runner;
});

