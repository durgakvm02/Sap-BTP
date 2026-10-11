sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/products/test/integration/pages/productList.gen",
	"ns/products/test/integration/pages/productObjectPage.gen"
], function (JourneyRunner, productListGenerated, productObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/products') + '/test/flp.html#app-preview',
        pages: {
			onTheproductListGenerated: productListGenerated,
			onTheproductObjectPageGenerated: productObjectPageGenerated
        },
        async: true
    });

    return runner;
});

